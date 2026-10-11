import type { Metadata } from "next";
import { CookieIoGame } from "@/components/CookieIoGame";
import { GAME_PATHS, loadDictionary } from "@/lib/i18n";

export function generateMetadata(): Metadata {
  const dict = loadDictionary("es");
  return {
    title: "cookie.io — cookieheaven",
    description: dict.game.tagline,
    alternates: { canonical: GAME_PATHS.es, languages: { en: GAME_PATHS.en, es: GAME_PATHS.es, ru: GAME_PATHS.ru } },
  };
}

export default function GamePage() {
  return <CookieIoGame labels={loadDictionary("es").game} variant="stage" backHref="/es" />;
}
