import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";
import { homepageData } from "@/lib/homepage";

/*
 * cookieheaven.art — the personal homepage, English.
 *
 * The words live in `src/data/i18n/en.json`; the Spanish and Russian versions are
 * the same page at `/es` and `/ru`, built from the same component so the three
 * cannot drift apart. Adding a file to `public/art/` or `public/photography/` is
 * enough to put it on this page.
 */

export const metadata: Metadata = {
  title: "Melissa Aguilera — cookieheaven.art",
  description:
    "Melissa Aguilera's own corner of the internet: her art, photography and music, and Professor Citachka — the university she is building for herself.",
  alternates: { canonical: "/", languages: { en: "/", es: "/es", ru: "/ru" } },
};

export default function HomePage() {
  return <HomeContent {...homepageData("en")} />;
}
