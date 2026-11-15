import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";

/**
 * Site-wide punctuation rule, set by the author: no em or en dashes anywhere in
 * the copy. The single exception is Russian, where dashes belong to the
 * language itself: the pronunciation lines ("МАМА (MAH-mah) — mama / mom") and
 * the тире that Russian grammar requires. So a dash is legal only when the
 * words immediately around it are Cyrillic.
 *
 * The guard reads the raw files rather than the rendered pages, because most of
 * this copy lives in course packs that a page test would never open.
 */

const ROOTS = ["src/data", "src/lib/course-packs", "src/app", "src/components"];
const EXTENSIONS = [".json", ".ts", ".tsx"];
const EM = "\u2014";
const EN = "\u2013";
const CYRILLIC = /[\u0400-\u04FF]/;
/** How far around a dash Russian text still counts as "around" it. */
const WINDOW = 24;

function walk(dir: string, found: string[] = []): string[] {
  let entries: string[];
  try {
    entries = readdirSync(dir);
  } catch {
    return found;
  }
  for (const entry of entries) {
    if (entry === "node_modules" || entry === ".next") continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full, found);
    } else if (EXTENSIONS.some((extension) => entry.endsWith(extension))) {
      found.push(full);
    }
  }
  return found;
}

/** The Russian alphabet table builds its pronounciation rows from variables, so the
 * dash sits next to {placeholders} instead of Cyrillic. It is Russian copy. */
const PRONUNCIATION_FILES = new Set(["src/app/subjects/russian/alphabet-foundations/page.tsx"]);

/** Test files are excluded: they are the things that assert the rule. */
function isTestFile(file: string): boolean {
  return /\.test\.(ts|tsx)$/.test(file) || file.includes(`${"src/test"}/`);
}

/** A regex character class such as [\s,!.?—-] is code, not prose. */
function inRegexClass(text: string, index: number): boolean {
  const lineStart = text.lastIndexOf("\n", index) + 1;
  const lineEnd = text.indexOf("\n", index);
  const line = text.slice(lineStart, lineEnd === -1 ? text.length : lineEnd);
  const column = index - lineStart;
  for (const match of line.matchAll(/\[[^\]\n]{0,40}\]/g)) {
    const start = match.index ?? 0;
    const end = start + match[0].length;
    if (column > start && column < end && match[0].includes("\\")) return true;
  }
  return false;
}

type Offender = { file: string; line: number; excerpt: string };

function findOffenders(file: string): Offender[] {
  const text = readFileSync(file, "utf8");
  const offenders: Offender[] = [];
  for (const dash of [EM, EN]) {
    let index = text.indexOf(dash);
    while (index !== -1) {
      const around = text.slice(Math.max(0, index - WINDOW), index) + text.slice(index + 1, index + 1 + WINDOW);
      if (!CYRILLIC.test(around) && !inRegexClass(text, index)) {
        const lineStart = text.lastIndexOf("\n", index) + 1;
        const lineEnd = text.indexOf("\n", index);
        offenders.push({
          file: relative(resolve("."), file),
          line: text.slice(0, index).split("\n").length,
          excerpt: text.slice(lineStart, lineEnd === -1 ? text.length : lineEnd).trim().slice(0, 120),
        });
      }
      index = text.indexOf(dash, index + 1);
    }
  }
  return offenders;
}

describe("no long dashes in the copy", () => {
  it("finds no em or en dash in Latin-script copy anywhere on the site", () => {
    const offenders = ROOTS.flatMap((root) => walk(root))
      .filter((file) => !isTestFile(file) && !PRONUNCIATION_FILES.has(relative(resolve("."), file)))
      .flatMap(findOffenders);
    expect(
      offenders.map((offender) => `${offender.file}:${offender.line} ${offender.excerpt}`),
    ).toEqual([]);
  });

  it("still allows them where Russian needs them, so the rule stays honest", () => {
    const russian = readFileSync("src/lib/course-packs/russian-71-80.json", "utf8");
    expect(russian).toContain(EM);
    const alphabet = readFileSync("src/app/subjects/russian/alphabet-foundations/page.tsx", "utf8");
    expect(alphabet).toContain(EM);
  });
});
