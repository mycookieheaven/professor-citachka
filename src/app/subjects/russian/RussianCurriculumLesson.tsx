"use client";

import Link from "next/link";
import {LegacyCompletion} from "@/components/LegacyCompletion";
import { useState, useSyncExternalStore } from "react";
import { IllustratedExampleCard } from "@/components/IllustratedExampleCard";
import type { RussianLesson } from "./curriculum";

const progressKey = "professor-citachka:completed-lessons";
const completionListeners = new Set<() => void>();

function readCompletedLessons(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const value = JSON.parse(localStorage.getItem(progressKey) ?? "[]");
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function subscribeToCompletion(listener: () => void) {
  completionListeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    completionListeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

export function RussianCurriculumLesson({ lesson }: { lesson: RussianLesson }) { return <RussianCurriculumLessonSession key={lesson.slug} lesson={lesson} />; }
function RussianCurriculumLessonSession({ lesson }: { lesson: RussianLesson }) {
  const lessonId = `russian/${lesson.slug}`;
  const [showAnswer, setShowAnswer] = useState(false);
  const completed = useSyncExternalStore(
    subscribeToCompletion,
    () => readCompletedLessons().includes(lessonId),
    () => false,
  );

  const markComplete = () => {
    const stored = readCompletedLessons();
    localStorage.setItem(progressKey, JSON.stringify(Array.from(new Set([...stored, lessonId]))));
    completionListeners.forEach((listener) => listener());
  };

  return (
    <main className="lesson-page">
      <div className="lesson-stars" aria-hidden="true" />
      <header className="lesson-topbar">
        <Link href="/subjects/russian" className="back-link"><span aria-hidden="true">←</span> Russian Study Map</Link>
        <div className="lesson-progress" aria-label={`Lesson ${lesson.week} of 24`}>
          <span>Unit {lesson.unit}</span><div><i style={{ width: `${(lesson.week / 24) * 100}%` }} /></div><strong>{String(lesson.week).padStart(2, "0")} / 24</strong>
        </div>
      </header>
      <article className="lesson-article">
        <header className="lesson-hero">
          <p className="eyebrow">Russian · Unit {String(lesson.unit).padStart(2, "0")} · Week {String(lesson.week).padStart(2, "0")}</p>
          <h1>{lesson.title}</h1>
          <p className="lesson-deck">{lesson.deck}</p>
          <div className="objective"><span>Objective</span><p>{lesson.objective}</p></div>
        </header>
        <section className="lesson-block" aria-labelledby="focus-title">
          <div className="block-number">I</div>
          <div className="block-content"><p className="eyebrow">Core idea</p><h2 id="focus-title">Practice for meaning</h2><p>{lesson.focus}</p></div>
        </section>
        <section className="lesson-block" aria-labelledby="examples-title">
          <div className="block-number">II</div>
          <div className="block-content">
            <p className="eyebrow">Speak it</p><h2 id="examples-title">A scene you can use</h2>
            <p>Read the Cyrillic first, then use the Latin pronunciation and English meaning. Play each phrase slowly and at a natural pace.</p>
            <div className="illustrated-examples">{lesson.examples.map((example) => <IllustratedExampleCard key={example.russian} {...example} />)}</div>
          </div>
        </section>
        <section className="practice-panel" aria-labelledby="lesson-check-title">
          <p className="eyebrow">Retrieval test</p><h2 id="lesson-check-title">Lesson check</h2><p>{lesson.checkPrompt}</p>
          <button type="button" className="secondary-action" onClick={() => setShowAnswer((visible) => !visible)}>{showAnswer ? "Hide answer" : "Show answer"}</button>
          {showAnswer && <p className="professor-note"><span>Answer</span>{lesson.checkAnswer}</p>}
        </section>
        <div className="lesson-finish">
          <Link href="/subjects/russian" className="secondary-action">Return to the Study Map</Link>
          <LegacyCompletion lessonId={lessonId} model={lesson.checkAnswer} eligible={showAnswer} onComplete={markComplete} completed={completed} />
        </div>
      </article>
    </main>
  );
}
