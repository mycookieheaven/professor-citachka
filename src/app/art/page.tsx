import { GalleryPage } from "@/components/GalleryPage";
import { readGallery } from "@/lib/gallery";
export default function ArtPage() { return <GalleryPage title="Art" note="A separate room for things made by hand, thought, and accident." images={readGallery("art")} />; }
