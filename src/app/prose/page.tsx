import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prose | cookieheaven",
  description: "A collection of random essays Melissa is writing, gathered as they take shape.",
};

export default function ProsePage() {
  return (
    <main className="home collection-page" id="main-content">
      <div className="home-inner">
        <section className="home-section" aria-labelledby="prose-title">
          <p className="eyebrow">cookieheaven</p>
          <h1 id="prose-title">Prose</h1>
          <p className="home-note">A collection of random essays I’m writing, gathered as they take shape.</p>
          <p className="home-empty">The first page is still being written.</p>
          <Link className="secondary-action" href="/">Back to cookieheaven</Link>
        </section>
      </div>
    </main>
  );
}
