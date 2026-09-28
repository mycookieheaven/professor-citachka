import { readGallery, readPortrait } from "./gallery";
import { loadDictionary, readMusic, type Locale } from "./i18n";

/**
 * Everything the homepage needs, in one call.
 *
 * The galleries, the portrait and the music list are the same in every language;
 * only the words differ. Building the props in one place is what keeps `/`, `/es`
 * and `/ru` from slowly drifting apart.
 */
export function homepageData(locale: Locale) {
  const dict = loadDictionary(locale);
  return {
    dict,
    locale,
    art: readGallery("art"),
    photography: readGallery("photography"),
    portrait: readPortrait(),
    portraitAlt: dict.hero.portraitAlt,
    tracks: readMusic(),
  };
}
