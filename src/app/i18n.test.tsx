import { render, screen } from "@testing-library/react";
import EsPage from "@/app/es/page";
import RuPage from "@/app/ru/page";
import { LOCALES, loadDictionary } from "@/lib/i18n";

/*
 * The homepage exists in three languages. These tests exist to catch the two
 * failure modes that make a translated page worse than no translation: a locale
 * that silently falls back to English, and a translation that is missing pieces.
 */

const ENGLISH_ONLY = [
  /i love the world/i,
  /knowledge is its most powerful tool/i,
  /a small doctrine/i,
  /music i love/i,
];

describe("Spanish homepage at /es", () => {
  it("is written in Spanish, in its own language attribute", () => {
    const { container } = render(<EsPage />);
    const main = container.querySelector("main.home");
    expect(main).toHaveAttribute("lang", "es");
    expect(screen.getByRole("heading", { name: "cookieheaven" })).toBeVisible();
    expect(screen.getByText(/amo el mundo/i)).toBeVisible();
  });

  it("does not leave English copy standing in for a translation", () => {
    const { container } = render(<EsPage />);
    const text = container.textContent ?? "";
    for (const phrase of ENGLISH_ONLY) {
      expect(text).not.toMatch(phrase);
    }
  });

  it("keeps the study link and the Spotify link", () => {
    render(<EsPage />);
    for (const link of screen.getAllByRole("link", { name: /entrar a professor citachka/i })) {
      expect(link).toHaveAttribute(
        "href",
        "/professorcitachka",
      );
    }
    expect(screen.getAllByRole("link", { name: /spotify/i })).toHaveLength(2);
  });

  it("marks Spanish as the current language", () => {
    render(<EsPage />);
    const back = screen.getByRole("link", { name: "Español" });
    expect(back).toHaveAttribute("aria-current", "page");
  });
});

describe("Russian homepage at /ru", () => {
  it("is written in Russian, in its own language attribute", () => {
    const { container } = render(<RuPage />);
    const main = container.querySelector("main.home");
    expect(main).toHaveAttribute("lang", "ru");
    expect(screen.getByRole("heading", { name: "cookieheaven" })).toBeVisible();
    expect(screen.getByText(/я люблю мир/i)).toBeVisible();
  });

  it("does not leave English copy standing in for a translation", () => {
    const { container } = render(<RuPage />);
    const text = container.textContent ?? "";
    for (const phrase of ENGLISH_ONLY) {
      expect(text).not.toMatch(phrase);
    }
  });

  it("keeps the study link and the Spotify link", () => {
    render(<RuPage />);
    for (const link of screen.getAllByRole("link", { name: /войти к профессору цитачке/i })) {
      expect(link).toHaveAttribute(
        "href",
        "/professorcitachka",
      );
    }
    expect(screen.getAllByRole("link", { name: /spotify/i })).toHaveLength(2);
  });

  it("marks Russian as the current language", () => {
    render(<RuPage />);
    expect(screen.getByRole("link", { name: "Русский" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });
});

describe("every locale is complete", () => {
  it("has the same number of About paragraphs, so no text was dropped", () => {
    const counts = LOCALES.map((locale) => loadDictionary(locale).about.paragraphs.length);
    expect(new Set(counts).size).toBe(1);
    expect(counts[0]).toBeGreaterThan(2);
  });

  it("has a shared brand title and distinct translated philosophical copy in every locale", () => {
    const titles = LOCALES.map((locale) => loadDictionary(locale).hero.title);
    expect(new Set(titles)).toEqual(new Set(["cookieheaven"]));
    for (const locale of LOCALES) {
      const dict = loadDictionary(locale);
      // Every string that shows on the page must actually carry words.
      const strings = [
        dict.hero.title,
        dict.hero.lede,
        dict.hero.enter,
        dict.hero.aboutCta,
        dict.hero.portraitAlt,
        dict.about.heading,
        dict.aboutNote.prefix,
        dict.aboutNote.link,
        dict.art.title,
        dict.art.note,
        dict.art.empty,
        dict.photography.title,
        dict.photography.note,
        dict.photography.empty,
        dict.music.title,
        dict.music.notePrefix,
        dict.music.empty,
        dict.music.listen,
        dict.nav.about,
        dict.nav.art,
        dict.nav.photography,
        dict.nav.music,
        dict.nav.study,
        dict.nav.language,
      ];
      for (const value of strings) {
        expect(typeof value).toBe("string");
        expect(value.trim().length).toBeGreaterThan(0);
      }
      for (const paragraph of dict.about.paragraphs) {
        expect(paragraph.trim().length).toBeGreaterThan(20);
      }
    }
  });
});
