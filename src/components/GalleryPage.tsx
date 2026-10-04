import Link from "next/link";
import type { GalleryImage } from "@/lib/gallery";

export function GalleryPage({ title, note, images }: { title: string; note: string; images: GalleryImage[] }) {
  return <main className="home collection-page" id="main-content"><div className="home-inner"><section className="home-section" aria-labelledby="collection-title"><p className="eyebrow">cookieheaven</p><h1 id="collection-title">{title}</h1><p className="home-note">{note}</p>{images.length ? <ul className="gallery-grid">{images.map(image => <li className="gallery-item" key={image.src}><img src={image.src} alt={image.alt} /><p>{image.caption}</p></li>)}</ul> : <p className="home-empty">The room is waiting for its pictures.</p>}<Link className="secondary-action" href="/">Back to cookieheaven</Link></section></div></main>;
}
