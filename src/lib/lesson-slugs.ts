/**
 * Lesson slugs for the two departments whose lessons are listed inside their own
 * route files.
 *
 * They live here rather than in the page files so the sitemap and the pages
 * cannot disagree about which lessons exist: a lesson missing from the sitemap is
 * a page no search engine is told about, and a slug listed twice is a route that
 * builds twice.
 */

export const MUSIC_LESSON_SLUGS = [
  "beat-and-counting",
  "note-names-and-keyboard-map",
  "scales-and-chords",
  "guitar-ready",
  "guitar-first-chords",
  "guitar-rhythm-and-song",
  "keyboard-map-and-posture",
  "keyboard-first-melody",
  "keyboard-chords-and-two-hands",
  "fl-studio-tour",
  "fl-studio-first-beat",
  "fl-studio-midi-and-arrangement",
] as const;

export const SKINCARE_LESSON_SLUGS = [
  "skin-as-an-organ",
  "build-a-basic-routine",
  "read-a-product-label",
  "barrier-and-irritation",
  "sunscreen-and-pigment",
  "acne-basics",
  "retinoid-literacy",
  "dark-marks-and-tone",
  "sanitation-and-scope",
  "professional-routine-audit",
] as const;
