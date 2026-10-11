import type { Metadata } from "next";
import { CookieIoGame } from "@/components/CookieIoGame";
import { GAME_PATHS, loadDictionary } from "@/lib/i18n";

export function generateMetadata(): Metadata {
  const dict = loadDictionary("ru");
  return {
    title: "cookie.io — cookieheaven",
    description: dict.game.tagline,
    alternates: { canonical: GAME_PATHS.ru, languages: { en: GAME_PATHS.en, es: GAME_PATHS.es, ru: GAME_PATHS.ru } },
  };
}

export default function GamePage() {
  return <CookieIoGame labels={loadDictionary("ru").game} variant="stage" backHref="/ru" />;
}
