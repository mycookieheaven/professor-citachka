import Link from "next/link";
import type { GalleryImage } from "@/lib/gallery";

export function GalleryPage({ title, note, images }: { title: string; note: string; images: GalleryImage[] }) {
  return <main className="home collection-page" id="main-content"><div className="home-inner"><section className="home-section" aria-labelledby="collection-title"><p className="eyebrow">cookieheaven</p><h1 id="collection-title">{title}</h1><p className="home-note">{note}</p>{images.length ? <ul className="gallery-grid">{images.map(image => <li className="gallery-item" key={image.src}>
    {/* Each picture opens on its own at full size: the wall is for looking
        through, not for the whole photograph. The title carries the name the
        wall would show; alt carries what a screen reader announces. */}
    <a href={image.src} target="_blank" rel="noreferrer" title={image.title}>
      {/* width and height come from the file header, so the browser reserves the
          right space before the picture arrives instead of the page jumping. */}
      <img src={image.src} alt={image.alt} width={image.size?.width} height={image.size?.height} loading="lazy" decoding="async" />
    </a>
    {image.caption ? <p className="gallery-caption">{image.caption}</p> : null}
  </li>)}</ul> : <p className="home-empty">The room is waiting for its pictures.</p>}<Link className="secondary-action" href="/">Back to cookieheaven</Link></section></div></main>;
}
