import type { Metadata } from "next";
import Link from "next/link";
import fs from "node:fs";
import path from "node:path";
import { readGallery, readPortrait, type GalleryImage } from "@/lib/gallery";

/*
 * cookieheaven.art — the personal homepage.
 *
 * This page is a server component, so it can read the content folders at build
 * time. Adding a file to `public/art/` or `public/photography/` is enough to put
 * it on this page; wording lives in `src/data/gallery.json`, music in
 * `src/data/music.json`, and the introduction in `src/data/about.json`.
 */

export const metadata: Metadata = {
  title: "Melissa Aguilera — cookieheaven.art",
  description:
    "Melissa Aguilera's own corner of the internet: her art, photography and music, and Professor Citachka — the university she is building for herself.",
};

type About = { heading: string; paragraphs: string[]; portraitAlt?: string };
type Track = { title: string; artist: string; note?: string; link?: string };

function readData<T>(relative: string, fallback: T): T {
  try {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), relative), "utf8")) as T;
  } catch {
    return fallback;
  }
}

function GallerySection({
  id,
  title,
  note,
  images,
}: {
  id: string;
  title: string;
  note: string;
  images: GalleryImage[];
}) {
  return (
    <section className="home-section" id={id} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{title}</h2>
      <p className="home-note">{note}</p>
      {images.length === 0 ? (
        <p className="home-empty">
          Nothing here yet. Pieces will appear in this section as they are added.
        </p>
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

export default function HomePage() {
  const about = readData<About>("src/data/about.json", {
    heading: "About me",
    paragraphs: [],
  });
  const music = readData<{ tracks: Track[] }>("src/data/music.json", { tracks: [] });

  const art = readGallery("art");
  const photography = readGallery("photography");
  const portrait = readPortrait();

  const tracks = (Array.isArray(music.tracks) ? music.tracks : []).filter(
    (track): track is Track => Boolean(track && track.title && track.artist),
  );

  const paragraphs = Array.isArray(about.paragraphs) ? about.paragraphs : [];

  return (
    <main className="home" id="main-content">
      <div className="home-inner">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-copy">
          <p className="eyebrow">cookieheaven.art</p>
          <h1 id="home-title">Hi, I&rsquo;m Melissa Aguilera.</h1>
          <p className="home-lede">
            This is my website. The art I make, the photographs I take, the music I keep
            returning to, and the university I am building for myself all live here.
          </p>
          <p className="home-location">
            Based in Brooklyn, New York
          </p>
          <div className="home-actions">
            <Link className="primary-action" href="/study">
              Enter Professor Citachka <span aria-hidden="true">→</span>
            </Link>
            <Link className="secondary-action" href="#about">
              About me
            </Link>
            {/* Spotify renders profiles in JavaScript, so this link could not be
                machine-verified from the server — a 200 from their app shell
                proves nothing. Confirm it opens your profile when you look. */}
            <a
              className="home-spotify"
              href="https://open.spotify.com/user/mcdonaldscult"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spotify <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        {portrait ? (
          <div className="home-portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={portrait.src}
              alt={about.portraitAlt ?? "Portrait of Melissa Aguilera"}
              width={640}
              height={640}
            />
          </div>
        ) : null}
      </section>

      <section className="home-section" id="about" aria-labelledby="about-title">
        <h2 id="about-title">{about.heading}</h2>
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        <p className="home-note">
          Professor Citachka is the university built out of all of this.{" "}
          <Link className="home-inline-link" href="/study">
            Step inside
          </Link>
          .
        </p>
      </section>

      <GallerySection
        id="art"
        title="Art"
        note="Pieces I have made."
        images={art}
      />

      <GallerySection
        id="photography"
        title="Photography"
        note="Photographs I have taken."
        images={photography}
      />

      <section className="home-section" id="music" aria-labelledby="music-title">
        <h2 id="music-title">Music I love</h2>
        <p className="home-note">
          What I am listening to, and why it stays with me. Links go to the official
          release, not to copies. My full profile is on{" "}
          <a
            className="home-inline-link"
            href="https://open.spotify.com/user/mcdonaldscult"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify <span aria-hidden="true">↗</span>
          </a>
          .
        </p>
        {tracks.length === 0 ? (
          <p className="home-empty">
            The listening list is being put together. It will appear here.
          </p>
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
                    Listen <span aria-hidden="true">↗</span>
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
