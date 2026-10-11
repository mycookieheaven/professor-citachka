import type { Metadata } from "next";
import { CookieIoGame } from "@/components/CookieIoGame";
import { GAME_PATHS, loadDictionary } from "@/lib/i18n";

/*
 * cookie.io on its own page.
 *
 * The window on the homepage is a way in, not a place to play: a 236px stage was
 * the complaint. This page is the game and nothing else — no header, no sidebar,
 * no lesson chrome — so the canvas is the size of the screen.
 */

export const metadata: Metadata = {
  title: "cookie.io — cookieheaven",
  description: "Eat the crumbs. Grow. Do not touch another cookie.",
  alternates: { canonical: GAME_PATHS.en, languages: { en: GAME_PATHS.en, es: GAME_PATHS.es, ru: GAME_PATHS.ru } },
};

export default function GamePage() {
  return <CookieIoGame labels={loadDictionary("en").game} variant="stage" backHref="/" />;
}
