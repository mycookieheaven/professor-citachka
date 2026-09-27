import { notFound } from "next/navigation";
import { SkincareLesson } from "../SkincareLesson";

const skincareLessonSlugs = ["skin-as-an-organ", "build-a-basic-routine", "read-a-product-label", "barrier-and-irritation", "sunscreen-and-pigment", "acne-basics", "retinoid-literacy", "dark-marks-and-tone", "sanitation-and-scope", "professional-routine-audit"] as const;
export function generateStaticParams() { return skincareLessonSlugs.map((lesson) => ({ lesson })); }
export default async function SkincareLessonPage({ params }: { params: Promise<{ lesson: string }> }) { const { lesson } = await params; if (!skincareLessonSlugs.includes(lesson as (typeof skincareLessonSlugs)[number])) notFound(); return <SkincareLesson slug={lesson} />; }
