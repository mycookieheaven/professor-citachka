import Link from "next/link";
import { LOCALES, LOCALE_NAMES, LOCALE_PATHS, type Dictionary, type Locale } from "@/lib/i18n";

/** The intentionally spare cookieheaven front screen; galleries live on their own routes. */
const PIXEL_COOKIES = ["one", "two", "three", "four", "five", "six", "seven", "eight"];

export function HomeContent({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <main className="home" id="main-content" lang={dict.htmlLang}>
      <div className="pixel-cookie-field" aria-hidden="true">
        {PIXEL_COOKIES.map((cookie) => <span className={`pixel-cookie pixel-cookie-${cookie}`} key={cookie} />)}
      </div>
      <div className="home-inner">
        <section className="home-hero home-hero-solo" aria-labelledby="home-title">
          <div className="home-hero-copy">
            <h1 id="home-title">{dict.hero.title}</h1>
            <p className="home-byline">{dict.hero.byline}</p>
            <a className="home-instagram" href="https://www.instagram.com/cookieswpeanutbutter/" target="_blank" rel="noopener noreferrer">{dict.hero.instagram} · @cookieswpeanutbutter <span aria-hidden="true">↗</span></a>
            <p className="home-lede">{dict.hero.lede}</p>
            <blockquote className="cookie-quote">“{dict.hero.quote}”</blockquote>
            <p className="cookie-business-line">{dict.hero.cookieBusinesses}</p>
            <div className="home-actions" aria-hidden="true" />
            <nav className="home-languages" aria-label={dict.nav.language}>
              {LOCALES.map((option) => <Link key={option} href={LOCALE_PATHS[option]} lang={option} hrefLang={option} aria-current={option === locale ? "page" : undefined} className={option === locale ? "is-current" : undefined}>{LOCALE_NAMES[option]}</Link>)}
            </nav>
          </div>
          <aside className="home-floating-quote">{dict.hero.worldQuote}</aside>
          <div className="pixel-starfish-field" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="pixel-starfish pixel-starfish-one" src="/images/pixel-starfish.svg" alt="" width={160} height={160} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="pixel-starfish pixel-starfish-two" src="/images/pixel-starfish.svg" alt="" width={160} height={160} />
          </div>
          <div className="pixel-cat-guardian">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/pixel-cat-cookie.svg" alt={dict.hero.catAlt} width={288} height={288} />
          </div>
        </section>
      </div>
    </main>
  );
}
