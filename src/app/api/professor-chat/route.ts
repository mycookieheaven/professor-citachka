import type { NextRequest } from "next/server";

/*
 * Ask Professor Citachka, the endpoint behind the homepage chat.
 *
 * Design rules, in order of importance:
 *
 * 1. The key lives only in the server environment. It is never sent to the
 *    browser, never logged, and never echoed in an error response.
 * 2. Nothing runs before the key exists. With no key the route answers 503 and
 *    does not read the request body or call any provider, so a half-configured
 *    deploy cannot quietly spend money.
 * 3. Every request is bounded: a short question, a short answer, a per-address
 *    window, and a daily ceiling. The ceiling is per server instance, which is
 *    an honest limitation of doing this without a shared store; it stops a
 *    runaway loop rather than a determined attacker with many addresses.
 * 4. Any OpenAI-compatible provider works: set base URL, model, and key.
 *    DeepSeek, OpenAI, OpenRouter, Groq, and Together all speak this shape.
 */

const MAX_QUESTION_CHARS = 600;
const MAX_ANSWER_TOKENS = 450;
const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 12;
const MAX_PER_DAY = 400;

const SYSTEM_PROMPT = [
  "You are Professor Citachka, the tutor on Melissa's site cookieheaven.art.",
  "Answer any question a visitor asks, on any subject, as a patient and rigorous teacher.",
  "Be direct and concrete. Prefer a short explanation with one example over a survey.",
  "If a question is ambiguous, answer the most likely reading and say what you assumed.",
  "If you do not know, say so plainly rather than inventing an answer.",
  "Never claim to be a clinician, a lawyer, or a financial adviser; for medical, legal, or money questions give the general principle and say when a professional is needed.",
  "Reply in the language the visitor used.",
  "Keep answers under 220 words unless the question genuinely needs more.",
].join(" ");

type ProviderConfig = { key: string; baseUrl: string; model: string };

function providerConfig(): ProviderConfig | null {
  const key = (process.env.PROFESSOR_CHAT_API_KEY ?? "").trim();
  if (!key) return null;
  const baseUrl = (process.env.PROFESSOR_CHAT_BASE_URL ?? "https://api.openai.com/v1").replace(/\/+$/, "");
  const model = (process.env.PROFESSOR_CHAT_MODEL ?? "gpt-4o-mini").trim();
  return { key, baseUrl, model };
}

/* Two counters. The window one is a sliding log of timestamps per address; the
   daily one is a single number reset when the UTC date changes. Both live in
   module scope, which on a serverless host means "per warm instance". */
const windowHits = new Map<string, number[]>();
let dayStamp = "";
let dayCount = 0;

function clientAddress(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim() || "unknown";
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function tooManyRequests(address: string, now: number): boolean {
  const recent = (windowHits.get(address) ?? []).filter((stamp) => now - stamp < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    windowHits.set(address, recent);
    return true;
  }
  recent.push(now);
  windowHits.set(address, recent);
  /* Keep the map from growing without bound on a long-lived instance. */
  if (windowHits.size > 5000) {
    for (const [key, stamps] of windowHits) {
      if (!stamps.some((stamp) => now - stamp < WINDOW_MS)) windowHits.delete(key);
    }
  }
  return false;
}

function dailyCeilingReached(now: number): boolean {
  const today = new Date(now).toISOString().slice(0, 10);
  if (today !== dayStamp) {
    dayStamp = today;
    dayCount = 0;
  }
  if (dayCount >= MAX_PER_DAY) return true;
  dayCount += 1;
  return false;
}

function json(body: unknown, status: number): Response {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function readQuestion(payload: unknown): string | null {
  if (!payload || typeof payload !== "object") return null;
  const question = (payload as { question?: unknown }).question;
  if (typeof question !== "string") return null;
  /* Control characters would let a visitor forge structure inside the prompt. */
  const cleaned = question.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim();
  if (cleaned.length < 2 || cleaned.length > MAX_QUESTION_CHARS) return null;
  return cleaned;
}

export async function POST(request: NextRequest) {
  const config = providerConfig();
  if (!config) {
    return json(
      {
        error: {
          code: "CHAT_NOT_CONFIGURED",
          message:
            "The Professor is not connected yet. Add PROFESSOR_CHAT_API_KEY to the deployment and this panel starts answering.",
        },
      },
      503,
    );
  }

  const now = Date.now();
  if (dailyCeilingReached(now)) {
    return json(
      { error: { code: "DAILY_LIMIT", message: "The Professor has reached today's limit. Try again tomorrow." } },
      429,
    );
  }
  const address = clientAddress(request);
  if (tooManyRequests(address, now)) {
    return json(
      {
        error: {
          code: "RATE_LIMITED",
          message: "That is a lot of questions at once. Wait a few minutes and ask again.",
        },
      },
      429,
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ error: { code: "INVALID_QUESTION", message: "Send a JSON body with a question." } }, 400);
  }

  const question = readQuestion(payload);
  if (!question) {
    return json(
      {
        error: {
          code: "INVALID_QUESTION",
          message: `A question needs between 2 and ${MAX_QUESTION_CHARS} characters.`,
        },
      },
      400,
    );
  }

  let upstream: Response;
  try {
    upstream = await fetch(`${config.baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.key}`,
      },
      body: JSON.stringify({
        model: config.model,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: question },
        ],
        max_tokens: MAX_ANSWER_TOKENS,
        temperature: 0.6,
      }),
    });
  } catch {
    return json(
      {
        error: {
          code: "UPSTREAM_UNREACHABLE",
          message: "The Professor could not be reached. Try again in a moment.",
        },
      },
      502,
    );
  }

  if (!upstream.ok) {
    /* The provider's own message can contain account details, so it is not
       forwarded. The status is enough for the visitor, and nothing about the
       key or the account reaches the browser. */
    return json(
      {
        error: {
          code: "UPSTREAM_FAILED",
          message: "The Professor could not answer that just now. Try again in a moment.",
        },
      },
      502,
    );
  }

  let data: unknown;
  try {
    data = await upstream.json();
  } catch {
    return json({ error: { code: "UPSTREAM_BAD_JSON", message: "The Professor sent an unreadable answer." } }, 502);
  }

  const answer = (data as { choices?: { message?: { content?: unknown } }[] })?.choices?.[0]?.message?.content;
  if (typeof answer !== "string" || !answer.trim()) {
    return json(
      { error: { code: "EMPTY_ANSWER", message: "The Professor had nothing to say to that. Try rephrasing." } },
      502,
    );
  }

  return json({ answer: answer.trim() }, 200);
}
