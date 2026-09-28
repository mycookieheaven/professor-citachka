import fs from "node:fs";
import path from "node:path";

/**
 * Homepage translations.
 *
 * Each locale is one JSON file under src/data/i18n/. The page exists at three
 * URLs — `/` for English, `/es` for Spanish, `/ru` for Russian — so every visitor
 * gets a real address they can bookmark or share, and the pages work with
 * JavaScript disabled.
 */

export type Locale = "en" | "es" | "ru";

export const LOCALES: Locale[] = ["en", "es", "ru"];

export const LOCALE_PATHS: Record<Locale, string> = {
  en: "/",
  es: "/es",
  ru: "/ru",
};

/** Language names are written in their own language, never translated. */
export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  es: "Español",
  ru: "Русский",
};

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  es: "Spanish",
  ru: "Russian",
};

export type Dictionary = {
  htmlLang: string;
  nav: { about: string; art: string; photography: string; music: string; study: string; language: string };
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    location: string;
    portraitAlt: string;
    enter: string;
    aboutCta: string;
    spotify: string;
  };
  about: { heading: string; paragraphs: string[] };
  aboutNote: { prefix: string; link: string; suffix: string };
  art: { title: string; note: string; empty: string };
  photography: { title: string; note: string; empty: string };
  music: {
    title: string;
    notePrefix: string;
    profileLink: string;
    noteSuffix: string;
    empty: string;
    listen: string;
  };
};

export type MusicTrack = { title: string; artist: string; note?: string; link?: string };

export function loadDictionary(locale: Locale): Dictionary {
  const file = path.join(process.cwd(), "src", "data", "i18n", `${locale}.json`);
  return JSON.parse(fs.readFileSync(file, "utf8")) as Dictionary;
}

function readData<T>(relative: string, fallback: T): T {
  try {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), relative), "utf8")) as T;
  } catch {
    return fallback;
  }
}

/** The music list is language-independent: the same tracks appear in all three. */
export function readMusic(): MusicTrack[] {
  const data = readData<{ tracks: MusicTrack[] }>("src/data/music.json", { tracks: [] });
  const tracks = Array.isArray(data.tracks) ? data.tracks : [];
  return tracks.filter((track) => Boolean(track && track.title && track.artist));
}
