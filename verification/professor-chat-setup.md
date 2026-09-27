# Professor chat: blocked, not functional

## Verified discovery

`npx --yes vercel env ls` for the linked `mycookieheavens-projects/professor-citachka` project returned **No Environment Variables found**. No variable values were requested or read. Source inspection found no existing AI provider integration or application sign-in. The fact that Hermes itself can use GPT-6 Astra does not establish that the website has supported server API access to that model.

## Current behavior

- Dashboard has an explicitly unavailable, pink, labeled question composer with a 2,000-character draft limit and disabled Send button.
- Draft stays in component memory, not localStorage, and is never sent. There are no simulated replies, canned tutor responses, provider calls, or substitute models.
- `POST /api/professor-chat` always returns HTTP 503 with `{ error: { code: "CHAT_NOT_CONFIGURED", message: "..." } }`, `Cache-Control: no-store`. It does not read request bodies, and cannot be activated accidentally by adding a key.
- This is a setup-required interface, **not completed real chat**. No working-chat deployment should be claimed.

## Decision needed before implementation can be completed

Obtain the user's approval for a supported server API account that explicitly offers GPT-6 Astra, its documented exact model identifier, and its usage costs. Do not guess an API model ID, substitute a different model, provision a paid service, or reuse local Hermes/ChatGPT OAuth credentials.

Recommended secure architecture: server-only provider credential in Vercel's encrypted environment settings; established identity-provider sign-in with a server-verified allowlist for the owner; durable atomic per-user minute/day quotas and a hard global usage ceiling, failing closed if the quota store fails. Budget/limit values and any needed service setup require user agreement. An application session must protect the API itself; hiding UI or relying only on preview-deployment protection is not sufficient. Never ask for secret values in chat.

Before enabling sending, implement and test: same-origin/CSRF enforcement, authenticated session and allowlist checks before reading content, byte-capped streamed request reading, strict JSON role/history validation, per-message and total-history caps, atomic quotas, bounded output tokens, upstream timeout, no automatic expensive retries, sanitized errors, plain-text rendering, private/no-store responses, accessible pending/error/retry interaction, and chat reset. Do not log message bodies or sensitive upstream responses. Use generic warm, rigorous teaching instructions without personal memory or health context. Verify a real authenticated GPT-6 Astra response and denial paths on Vercel before calling it functional.

No browser automation or local servers are allowed for this learner. Use CLI builds, jsdom tests, and Vercel HTTP verification; disclose that actual mobile visual rendering has not been inspected.
