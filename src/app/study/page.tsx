import { permanentRedirect } from "next/navigation";

/**
 * The study used to live at /study. Keep old links honest and useful while the
 * public, canonical address becomes /professorcitachka.
 */
export default function StudyCompatibilityPage() {
  permanentRedirect("/professorcitachka");
}
