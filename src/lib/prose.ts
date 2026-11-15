import fs from "node:fs";
import path from "node:path";

/**
 * The prose archive.
 *
 * Entries live in src/data/prose.json so the words stay plain and portable: one
 * string per paragraph, no markup to escape, no HTML to trust. The page reads
 * them on the server, so the prose exists in the HTML for anyone — including a
 * visitor with JavaScript switched off — and prints like a page of a book.
 */

export type ProseEntry = {
  /** Stable anchor used for in-page links and as the React key. */
  id: string;
  title: string;
  /** ISO calendar day (YYYY-MM-DD) the piece was finished, not published. */
  date: string;
  paragraphs: string[];
};

type ProseFile = { entries?: ProseEntry[] };

function isEntry(value: unknown): value is ProseEntry {
  if (!value || typeof value !== "object") return false;
  const entry = value as Partial<ProseEntry>;
  return (
    typeof entry.id === "string" &&
    entry.id.length > 0 &&
    typeof entry.title === "string" &&
    entry.title.length > 0 &&
    typeof entry.date === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(entry.date) &&
    Array.isArray(entry.paragraphs) &&
    entry.paragraphs.length > 0 &&
    entry.paragraphs.every((paragraph) => typeof paragraph === "string" && paragraph.trim().length > 0)
  );
}

/** Newest first, so the newest piece sits at the top of the page. */
export function readProse(): ProseEntry[] {
  let data: ProseFile = {};
  try {
    data = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), "src", "data", "prose.json"), "utf8"),
    ) as ProseFile;
  } catch {
    return [];
  }
  const entries = Array.isArray(data.entries) ? data.entries : [];
  return entries
    .filter(isEntry)
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * "Saturday, November 14, 2026".
 *
 * Pinned to UTC: the date is a calendar day, not an instant, so it must read the
 * same in every timezone and match on both server and client.
 */
const DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export function formatProseDate(iso: string): string {
  const parsed = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return iso;
  return DATE_FORMAT.format(parsed);
}
