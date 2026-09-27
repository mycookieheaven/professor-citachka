import { notFound } from "next/navigation";
import { NeuroscienceLesson } from "@/components/neuroscience/NeuroscienceLesson";
import { getNeuroscienceLesson, neuroscienceLessons } from "@/components/neuroscience/curriculum";

export function generateStaticParams() {
  return neuroscienceLessons.map(({ slug }) => ({ lesson: slug }));
}

export default async function NeuroscienceLessonPage({ params }: { params: Promise<{ lesson: string }> }) {
  const { lesson: slug } = await params;
  const lesson = getNeuroscienceLesson(slug);
  if (!lesson) notFound();
  return <NeuroscienceLesson lesson={lesson} />;
}
