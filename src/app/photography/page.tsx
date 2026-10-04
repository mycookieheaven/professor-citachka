import { GalleryPage } from "@/components/GalleryPage";
import { readGallery } from "@/lib/gallery";
export default function PhotographyPage() { return <GalleryPage title="Photography" note="A separate room for what the eye caught before it disappeared." images={readGallery("photography")} />; }
