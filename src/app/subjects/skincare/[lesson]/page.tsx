import { notFound } from "next/navigation";
import { SkincareLesson } from "../SkincareLesson";
import { SKINCARE_LESSON_SLUGS as skincareLessonSlugs } from "@/lib/lesson-slugs";
export function generateStaticParams() { return skincareLessonSlugs.map((lesson) => ({ lesson })); }
export default async function SkincareLessonPage({ params }: { params: Promise<{ lesson: string }> }) { const { lesson } = await params; if (!skincareLessonSlugs.includes(lesson as (typeof skincareLessonSlugs)[number])) notFound(); return <SkincareLesson slug={lesson} />; }
