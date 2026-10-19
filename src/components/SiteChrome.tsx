"use client";

import { usePathname } from "next/navigation";
import { QuoteBanner } from "./Brand";
import { StudyAtmosphere } from "./StudyAtmosphere";

const PERSONAL_SITE_ROUTES = new Set([
  "/", "/es", "/ru", "/art", "/photography", "/music", "/prose",
  "/game", "/es/game", "/ru/game", "/professorcitachka",
]);

/** Keeps study-only controls out of every personal cookieheaven page and dashboard. */
export function SiteChrome() {
  const pathname = usePathname();
  if (PERSONAL_SITE_ROUTES.has(pathname)) return null;

  return (
    <>
      <QuoteBanner />
      <StudyAtmosphere />
    </>
  );
}
