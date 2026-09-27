import { notFound } from "next/navigation";
import { MusicLesson } from "../MusicLesson";

const musicLessonSlugs = [
  "beat-and-counting",
  "note-names-and-keyboard-map",
  "scales-and-chords",
  "guitar-ready",
  "guitar-first-chords",
  "guitar-rhythm-and-song",
  "keyboard-map-and-posture",
  "keyboard-first-melody",
  "keyboard-chords-and-two-hands",
  "fl-studio-tour",
  "fl-studio-first-beat",
  "fl-studio-midi-and-arrangement",
] as const;

export function generateStaticParams() {
  return musicLessonSlugs.map((lesson) => ({ lesson }));
}

export default async function MusicLessonPage({ params }: { params: Promise<{ lesson: string }> }) {
  const { lesson } = await params;
  if (!musicLessonSlugs.includes(lesson as (typeof musicLessonSlugs)[number])) notFound();
  return <MusicLesson slug={lesson} />;
}
