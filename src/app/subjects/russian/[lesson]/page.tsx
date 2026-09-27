import { notFound } from "next/navigation";
import { RussianCurriculumLesson } from "../RussianCurriculumLesson";
import { findRussianLesson, russianLessons } from "../curriculum";

export function generateStaticParams() {
  return russianLessons.map(({ slug }) => ({ lesson: slug }));
}

export default async function RussianLessonPage({ params }: { params: Promise<{ lesson: string }> }) {
  const { lesson: slug } = await params;
  const lesson = findRussianLesson(slug);
  if (!lesson) notFound();
  return <RussianCurriculumLesson lesson={lesson} />;
}
