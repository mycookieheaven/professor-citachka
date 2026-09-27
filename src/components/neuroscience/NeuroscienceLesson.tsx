"use client";

import Link from "next/link";
import {LegacyCompletion} from "@/components/LegacyCompletion";
import { useState, useSyncExternalStore } from "react";
import type { NeuroscienceLessonData } from "@/components/neuroscience/curriculum";

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
  const onStorage = (event: StorageEvent) => {
    if (event.key === progressKey) listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    completionListeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function NeuroscienceLesson({ lesson }: { lesson: NeuroscienceLessonData }) { return <NeuroscienceLessonSession key={lesson.slug} lesson={lesson} />; }
function NeuroscienceLessonSession({ lesson }: { lesson: NeuroscienceLessonData }) {
  const [showAnswers, setShowAnswers] = useState(false);
  const lessonId = `neuroscience/${lesson.slug}`;
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
        <Link href="/subjects/neuroscience" className="back-link"><span aria-hidden="true">←</span> Neuroscience Study Map</Link>
        <div className="lesson-progress" aria-label={`Lesson ${lesson.number} of five`}>
          <span>Neuroscience pathway</span><div><i style={{ width: `${Number(lesson.number) * 20}%` }} /></div><strong>{lesson.number} / 05</strong>
        </div>
      </header>

      <article className="lesson-article">
        <header className="lesson-hero">
          <p className="eyebrow">Neuroscience · Lesson {lesson.number}</p>
          <h1>{lesson.title}</h1>
          <p className="lesson-deck">{lesson.deck}</p>
        </header>

        <section className="lesson-block" aria-labelledby="objectives-title">
          <div className="block-number">I</div>
          <div className="block-content">
            <p className="eyebrow">Learning targets</p>
            <h2 id="objectives-title">By the end of this lesson, you can</h2>
            <ol className="neuroscience-objectives">{lesson.objectives.map((objective) => <li key={objective}>{objective}</li>)}</ol>
          </div>
        </section>

        <section className="lesson-block" aria-labelledby="concept-title">
          <div className="block-number">II</div>
          <div className="block-content">
            <p className="eyebrow">Core mechanism</p>
            <h2 id="concept-title">{lesson.conceptTitle}</h2>
            <p>{lesson.concept}</p>
          </div>
        </section>

        <section className="lesson-block" aria-labelledby="example-title">
          <div className="block-number">III</div>
          <div className="block-content">
            <p className="eyebrow">Illustrated scene card</p>
            <h2 id="example-title">{lesson.example.title}</h2>
            <article className="illustrated-example-card neuroscience-scene-card">
              <div className="scene-illustration" role="img" aria-label={`Illustration: ${lesson.example.scene}`}>
                <svg viewBox="0 0 160 100" aria-hidden="true"><rect width="160" height="100" rx="12" fill="#18243a" /><circle cx="80" cy="50" r="25" fill="#a89bd7" opacity=".8" /><path d="M12 74 C45 27 64 86 93 35 S135 57 151 22" stroke="#e2ca91" strokeWidth="4" fill="none" strokeLinecap="round" /><circle cx="12" cy="74" r="5" fill="#f4f0e8" /><circle cx="151" cy="22" r="5" fill="#f4f0e8" /></svg>
              </div>
              <div><strong>{lesson.example.setup}</strong><span>Observe → explain</span><p><b>Observation:</b> {lesson.example.observation}</p><p><b>Why it matters:</b> {lesson.example.explanation}</p></div>
            </article>
          </div>
        </section>

        <section className="practice-panel" aria-labelledby="practice-title">
          <p className="eyebrow">Retrieval practice</p>
          <h2 id="practice-title">Retrieve before you review</h2>
          <p>Answer aloud or on paper first. Then reveal the feedback and repair any gaps.</p>
          <ol className="neuroscience-retrieval">
            {lesson.retrieval.map((item) => <li key={item.prompt}><strong>{item.prompt}</strong>{showAnswers && <p><span>Feedback:</span> {item.answer}</p>}</li>)}
          </ol>
          <button className="secondary-action retrieval-button" type="button" onClick={() => setShowAnswers((shown) => !shown)}>
            {showAnswers ? "Hide retrieval feedback" : "Check my retrieval"}
          </button>
          <p className="professor-note"><span>Professor’s note</span>Confidence is a feeling. Retrieval is evidence.</p>
        </section>

        <div className="lesson-finish">
          <Link href="/subjects/neuroscience" className="secondary-action">Return to the Study Map</Link>
          <LegacyCompletion lessonId={lessonId} model={lesson.retrieval.map(item=>item.answer).join(" ")} eligible={showAnswers} onComplete={markComplete} completed={completed} />
        </div>
      </article>
    </main>
  );
}
