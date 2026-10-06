"use client";

import { usePathname } from "next/navigation";
import { QuoteBanner } from "./Brand";
import { StudyAtmosphere } from "./StudyAtmosphere";

const PERSONAL_HOME_ROUTES = new Set(["/", "/es", "/ru"]);

/** Keeps study-only controls out of the personal cookieheaven home routes. */
export function SiteChrome() {
  const pathname = usePathname();
  if (PERSONAL_HOME_ROUTES.has(pathname)) return null;

  return (
    <>
      <QuoteBanner />
      <StudyAtmosphere />
    </>
  );
}
