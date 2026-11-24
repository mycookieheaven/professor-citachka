import { notFound } from "next/navigation";
import { MusicLesson } from "../MusicLesson";
import { MUSIC_LESSON_SLUGS as musicLessonSlugs } from "@/lib/lesson-slugs";

export function generateStaticParams() {
  return musicLessonSlugs.map((lesson) => ({ lesson }));
}

export default async function MusicLessonPage({ params }: { params: Promise<{ lesson: string }> }) {
  const { lesson } = await params;
  if (!musicLessonSlugs.includes(lesson as (typeof musicLessonSlugs)[number])) notFound();
  return <MusicLesson slug={lesson} />;
}
