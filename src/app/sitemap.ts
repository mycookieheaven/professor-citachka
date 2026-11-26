import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { allTopics, programs } from "@/lib/programs";
import { courseAssessments } from "@/lib/assessments";
import { MUSIC_LESSON_SLUGS, SKINCARE_LESSON_SLUGS } from "@/lib/lesson-slugs";
import { russianLessons } from "./subjects/russian/curriculum";
import { neuroscienceLessons } from "@/components/neuroscience/curriculum";

/**
 * The map of the site, for search engines.
 *
 * There is a lot to map: ten departments, their lessons, their assessments, and
 * the collection rooms. None of it was listed anywhere before this file existed,
 * so a crawler arriving at the homepage had to guess.
 *
 * The plainly-named pages are found by walking `src/app` for `page.tsx` files at
 * build time rather than being written out here, for the same reason the gallery
 * reads its folder: a page added tomorrow is then in the sitemap without anyone
 * remembering to add it. Routes with a `[segment]` cannot be walked that way:
 * their real addresses live in data, not in the filesystem, so those are
 * enumerated from the same modules that generate them.
 */

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://cookieheaven.art").replace(/\/$/, "");

// The map only changes when the site does, so it is written at build time.
export const dynamic = "force-static";

/** Pages that exist at a fixed address, discovered from the route tree. */
function staticRoutes(directory = path.join(process.cwd(), "src", "app")): string[] {
  const routes: string[] = [];

  const walk = (current: string) => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        // Route groups do not appear in the URL; API handlers are not pages.
        if (entry.name === "api") continue;
        walk(full);
        continue;
      }
      if (entry.name !== "page.tsx" && entry.name !== "page.ts") continue;

      const segments = path
        .relative(path.join(process.cwd(), "src", "app"), current)
        .split(path.sep)
        .filter(Boolean);
      // A dynamic segment has no single address to publish.
      if (segments.some((segment) => segment.startsWith("["))) continue;
      routes.push(`/${segments.join("/")}`.replace(/\/$/, "") || "/");
    }
  };

  walk(directory);
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];
  const seen = new Set<string>();

  const add = (route: string, priority: number) => {
    const url = `${SITE_URL}${route === "/" ? "" : route}`;
    if (seen.has(url)) return;
    seen.add(url);
    entries.push({ url, lastModified, priority, changeFrequency: "monthly" });
  };

  for (const route of staticRoutes()) {
    add(route, route === "/" || route === "/es" || route === "/ru" ? 1 : 0.6);
  }

  for (const program of programs) {
    add(`/subjects/${program.id}`, 0.8);
    for (const topic of allTopics(program)) add(`/learn/${program.id}/${topic.id}`, 0.7);
    for (const assessment of courseAssessments(program)) add(`/assess/${program.id}/${assessment.id}`, 0.5);
  }

  for (const slug of MUSIC_LESSON_SLUGS) add(`/subjects/music/${slug}`, 0.7);
  for (const slug of SKINCARE_LESSON_SLUGS) add(`/subjects/skincare/${slug}`, 0.7);
  for (const { slug } of russianLessons) add(`/subjects/russian/${slug}`, 0.7);
  for (const { slug } of neuroscienceLessons) add(`/subjects/neuroscience/${slug}`, 0.7);

  return entries;
}
