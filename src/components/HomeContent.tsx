import Link from "next/link";
import { LOCALES, LOCALE_NAMES, LOCALE_PATHS, type Dictionary, type Locale } from "@/lib/i18n";

/** A deliberately abundant, deterministic cookie field; positions never jump between renders. */
const PIXEL_COOKIES = Array.from({ length: 64 }, (_, index) => ({
  id: index,
  left: 2 + ((index * 37) % 96),
  top: 2 + ((index * 53) % 94),
  scale: 0.38 + ((index * 19) % 58) / 100,
  delay: -(index * 0.73),
  duration: 8.5 + ((index * 13) % 47) / 10,
  driftX: -34 + ((index * 29) % 69),
  driftY: -48 + ((index * 41) % 97),
  turn: -18 + ((index * 17) % 37),
}));

export function HomeContent({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <main className="home" id="main-content" lang={dict.htmlLang}>
      <div className="pixel-cookie-field" aria-hidden="true">
        {PIXEL_COOKIES.map((cookie) => <span className="pixel-cookie" key={cookie.id} style={{ left: `${cookie.left}%`, top: `${cookie.top}%`, transform: `scale(${cookie.scale})`, animationDelay: `${cookie.delay}s`, animationDuration: `${cookie.duration}s`, "--cookie-drift-x": `${cookie.driftX}px`, "--cookie-drift-y": `${cookie.driftY}px`, "--cookie-turn": `${cookie.turn}deg` } as React.CSSProperties} />)}
      </div>
      <div className="home-inner">
        <h1 className="home-main-title" id="home-title">{dict.hero.title}</h1>
        <div className="home-top-characters" aria-hidden="true">
          <div className="pixel-starfish-field">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="pixel-starfish pixel-starfish-one" src="/images/pixel-starfish.svg" alt="" width={160} height={160} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="pixel-starfish pixel-starfish-two" src="/images/pixel-starfish.svg" alt="" width={160} height={160} />
          </div>
          <div className="pixel-cat-guardian">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/pixel-cat-cookie.svg" alt="" width={288} height={288} />
          </div>
        </div>
        <section className="home-hero home-hero-solo" aria-labelledby="home-title">
          <div className="home-hero-copy">
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
        </section>
      </div>
    </main>
  );
}
