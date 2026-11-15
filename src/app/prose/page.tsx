import type { Metadata } from "next";
import Link from "next/link";
import { formatProseDate, readProse } from "@/lib/prose";

export const metadata: Metadata = {
  title: "Prose | cookieheaven",
  description: "Essays and notes Melissa is writing, gathered as they take shape.",
};

export default function ProsePage() {
  const entries = readProse();

  return (
    <main className="home collection-page prose-page" id="main-content">
      <div className="home-inner">
        <section className="home-section" aria-labelledby="prose-title">
          <p className="eyebrow">cookieheaven</p>
          <h1 id="prose-title">Prose</h1>
          <p className="home-note">Essays and notes I’m writing, gathered as they take shape.</p>
          {entries.length === 0 ? (
            <p className="home-empty">The first page is still being written.</p>
          ) : (
            entries.map((entry) => (
              <article className="prose-entry" id={entry.id} key={entry.id}>
                <header className="prose-entry-header">
                  <h2 className="prose-entry-title">{entry.title}</h2>
                  <time className="prose-entry-date" dateTime={entry.date}>
                    {formatProseDate(entry.date)}
                  </time>
                </header>
                <div className="prose-body">
                  {entry.paragraphs.map((paragraph, index) => (
                    <p key={`${entry.id}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))
          )}
          <Link className="secondary-action" href="/">Back to cookieheaven</Link>
        </section>
      </div>
    </main>
  );
}
