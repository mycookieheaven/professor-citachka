import fs from "node:fs";
import path from "node:path";

/**
 * Build-time gallery reader.
 *
 * Drop image files into `public/art/` or `public/photography/` and they appear on
 * the homepage automatically — no code change needed. Optional per-file wording
 * (title, alt text, caption) lives in `src/data/gallery.json`; anything not listed
 * there still appears, with a caption derived from its filename.
 *
 * Alt text is required for an accessible gallery, so every image gets one: either
 * the wording you supply, or the filename turned into readable words. Alt text is
 * never left empty, because an image without it is invisible to a screen reader.
 */

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  kind: "art" | "photography";
};

type Wording = { title?: string; alt?: string; caption?: string };
type GalleryWording = Partial<Record<"art" | "photography", Record<string, Wording>>>;

const IMAGE_PATTERN = /\.(jpe?g|png|webp|avif|gif)$/i;

const PUBLIC_DIR = path.join(process.cwd(), "public");
const WORDING_FILE = path.join(process.cwd(), "src", "data", "gallery.json");

export function folderName(kind: "art" | "photography"): string {
  return kind;
}

/** "sunset-over-brooklyn.jpg" -> "Sunset over Brooklyn" */
function humanise(filename: string): string {
  const stem = filename.replace(IMAGE_PATTERN, "");
  const words = stem.replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
  if (!words) return "Untitled";
  return words.charAt(0).toUpperCase() + words.slice(1);
}

function readWording(): GalleryWording {
  try {
    return JSON.parse(fs.readFileSync(WORDING_FILE, "utf8")) as GalleryWording;
  } catch {
    return {};
  }
}

export function readGallery(kind: "art" | "photography"): GalleryImage[] {
  const directory = path.join(PUBLIC_DIR, kind);
  if (!fs.existsSync(directory)) return [];

  const wording = readWording()[kind] ?? {};

  return fs
    .readdirSync(directory)
    .filter((name) => IMAGE_PATTERN.test(name))
    .filter((name) => !name.startsWith("."))
    // Natural sort so "10.jpg" follows "9.jpg" rather than "1.jpg"
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
    .map((name) => {
      const entry = wording[name] ?? {};
      const fallback = humanise(name);
      return {
        src: `/${kind}/${name.split("/").map(encodeURIComponent).join("/")}`,
        alt: entry.alt ?? entry.title ?? fallback,
        title: entry.title ?? fallback,
        caption: entry.caption ?? "",
        kind,
      } satisfies GalleryImage;
    });
}

export function galleryCounts(): { art: number; photography: number } {
  return { art: readGallery("art").length, photography: readGallery("photography").length };
}

const PORTRAIT_NAMES = [
  "portrait.jpg",
  "portrait.jpeg",
  "portrait.png",
  "portrait.webp",
  "portrait.avif",
];

/**
 * A portrait for the homepage, if one has been added.
 *
 * Drop any one of the names above into `public/images/` and it appears in the
 * hero automatically — no code change. Alt text is supplied by the page (from
 * about.json) so it can say something meaningful rather than "portrait".
 */
export function readPortrait(): { src: string } | null {
  for (const name of PORTRAIT_NAMES) {
    if (fs.existsSync(path.join(PUBLIC_DIR, "images", name))) {
      return { src: `/images/${name}` };
    }
  }
  return null;
}
