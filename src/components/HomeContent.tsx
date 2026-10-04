import Link from "next/link";
import type { CSSProperties } from "react";
import type { GalleryImage } from "@/lib/gallery";
import {
  LOCALES,
  LOCALE_NAMES,
  LOCALE_PATHS,
  type Dictionary,
  type Locale,
  type MusicTrack,
} from "@/lib/i18n";

/**
 * The cookieheaven.art homepage, rendered in one of three languages.
 *
 * The same component serves `/`, `/es` and `/ru`, so the three pages cannot drift
 * apart: there is one layout and one set of rules, and only the words change.
 */

/** Spotify renders profiles in JavaScript, so this link cannot be verified from
 *  the server — a 200 from their app shell would prove nothing. */
export const SPOTIFY_URL = "https://open.spotify.com/user/mcdonaldscult";

const PIXEL_COOKIES = ["one", "two", "three", "four", "five", "six", "seven", "eight"];

function PixelCookieField() {
  return (
    <div className="pixel-cookie-field" aria-hidden="true">
      {PIXEL_COOKIES.map((cookie, index) => (
        <span className={`pixel-cookie pixel-cookie-${cookie}`} key={cookie} style={{ "--cookie-index": index } as CSSProperties} />
      ))}
    </div>
  );
}

function GallerySection({
  id,
  title,
  note,
  empty,
  images,
}: {
  id: string;
  title: string;
  note: string;
  empty: string;
  images: GalleryImage[];
}) {
  return (
    <section className="home-section" id={id} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{title}</h2>
      <p className="home-note">{note}</p>
      {images.length === 0 ? (
        <p className="home-empty">{empty}</p>
      ) : (
        <ul className="gallery-grid">
          {images.map((image) => (
            <li className="gallery-item" key={image.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              {image.caption ? (
                <div className="gallery-meta">
                  <p className="gallery-title">{image.title}</p>
                  <p className="gallery-caption">{image.caption}</p>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function HomeContent({
  dict,
  locale,
  art,
  photography,
  portrait,
  portraitAlt,
  tracks,
}: {
  dict: Dictionary;
  locale: Locale;
  art: GalleryImage[];
  photography: GalleryImage[];
  portrait: { src: string } | null;
  portraitAlt: string;
  tracks: MusicTrack[];
}) {
  const paragraphs = Array.isArray(dict.about.paragraphs) ? dict.about.paragraphs : [];

  return (
    <main className="home" id="main-content" lang={dict.htmlLang}>
      <PixelCookieField />
      <div className="home-inner">
        <section className="home-hero" aria-labelledby="home-title">
          <div className="home-hero-copy">
            <p className="eyebrow">{dict.hero.eyebrow}</p>
            <h1 id="home-title">{dict.hero.title}</h1>
            <p className="home-lede">{dict.hero.lede}</p>
            <div className="home-actions">
              <Link className="primary-action" href="/professorcitachka">
                {dict.hero.enter} <span aria-hidden="true">→</span>
              </Link>
              <Link className="secondary-action" href="#about">
                {dict.hero.aboutCta}
              </Link>
              <a
                className="home-spotify"
                href={SPOTIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {dict.hero.spotify} <span aria-hidden="true">↗</span>
              </a>
            </div>
            <nav className="home-languages" aria-label={dict.nav.language}>
              {LOCALES.map((option) => (
                <Link
                  key={option}
                  href={LOCALE_PATHS[option]}
                  lang={option}
                  hrefLang={option}
                  aria-current={option === locale ? "page" : undefined}
                  className={option === locale ? "is-current" : undefined}
                >
                  {LOCALE_NAMES[option]}
                </Link>
              ))}
            </nav>
          </div>
          <div className="pixel-cat-guardian">
            {/* Pixel artwork is intentionally a local SVG: sharp edges survive every display density. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/pixel-cat-cookie.svg" alt="Black pixel cat with green-yellow eyes holding a cookie" width={288} height={288} />
          </div>
          {portrait ? (
            <div className="home-portrait">
              {/* Intrinsic size, not a square: the photograph is 3:4 and a square
                  box would stretch it. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={portrait.src} alt={portraitAlt} width={825} height={1100} />
            </div>
          ) : null}
        </section>

        <section className="home-section" id="about" aria-labelledby="about-title">
          <h2 id="about-title">{dict.about.heading}</h2>
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          <p className="home-note">
            {dict.aboutNote.prefix}{" "}
            <Link className="home-inline-link" href="/professorcitachka">
              {dict.aboutNote.link}
            </Link>
            {dict.aboutNote.suffix}
          </p>
        </section>

        <GallerySection
          id="art"
          title={dict.art.title}
          note={dict.art.note}
          empty={dict.art.empty}
          images={art}
        />

        <GallerySection
          id="photography"
          title={dict.photography.title}
          note={dict.photography.note}
          empty={dict.photography.empty}
          images={photography}
        />

        <section className="home-section" id="music" aria-labelledby="music-title">
          <h2 id="music-title">{dict.music.title}</h2>
          <p className="home-note">
            {dict.music.notePrefix}{" "}
            <a
              className="home-inline-link"
              href={SPOTIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.music.profileLink} <span aria-hidden="true">↗</span>
            </a>
            {dict.music.noteSuffix}
          </p>
          {tracks.length === 0 ? (
            <p className="home-empty">{dict.music.empty}</p>
          ) : (
            <ul className="music-list">
              {tracks.map((track) => (
                <li className="music-card" key={`${track.artist}—${track.title}`}>
                  <strong>{track.title}</strong>
                  <span className="music-artist">{track.artist}</span>
                  {track.note ? <p className="music-note">{track.note}</p> : null}
                  {track.link ? (
                    <a
                      className="music-link"
                      href={track.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {dict.music.listen} <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}
