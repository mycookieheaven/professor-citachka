"use client";

import Link from "next/link";
import {LegacyCompletion} from "@/components/LegacyCompletion";
import { useState } from "react";

export type TheologyLesson = {
  id: string;
  index: number;
  title: string;
  deck: string;
  objective: string;
  doctrine: string;
  history: string;
  reasoning: string;
  example: { title: string; text: string; scene: string };
  question: string;
  correct: string;
  distractor: string;
  feedback: string;
};

export function TheologyLessonPage({ lesson }: { lesson: TheologyLesson }) { return <TheologyLessonPageSession key={lesson.id} lesson={lesson} />; }
function TheologyLessonPageSession({ lesson }: { lesson: TheologyLesson }) {
  const [answer, setAnswer] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);
  const complete = () => {
    const key = "professor-citachka:completed-lessons";
    const existing = JSON.parse(localStorage.getItem(key) ?? "[]");
    localStorage.setItem(key, JSON.stringify(Array.from(new Set([...existing, lesson.id]))));
    setCompleted(true);
  };

  return <main className="lesson-page">
    <div className="lesson-stars" aria-hidden="true" />
    <header className="lesson-topbar"><Link href="/subjects/theology" className="back-link"><span aria-hidden="true">←</span> Theology Study Map</Link><div className="lesson-progress" aria-label={`Lesson ${lesson.index} of five`}><span>Catholic theology</span><div><i style={{ width: `${lesson.index * 20}%` }} /></div><strong>0{lesson.index} / 05</strong></div></header>
    <article className="lesson-article">
      <header className="lesson-hero"><p className="eyebrow">Catholic Theology · Lesson 0{lesson.index}</p><h1>{lesson.title}</h1><p className="lesson-deck">{lesson.deck}</p><div className="objective"><span>Objective</span><p>{lesson.objective}</p></div></header>
      <section className="lesson-block" aria-labelledby="doctrine-title"><div className="block-number">I</div><div className="block-content"><p className="eyebrow">Catholic doctrine</p><h2 id="doctrine-title">What the Church professes</h2><p>{lesson.doctrine}</p></div></section>
      <section className="lesson-block" aria-labelledby="history-title"><div className="block-number">II</div><div className="block-content"><p className="eyebrow">Historical context</p><h2 id="history-title">Where this language developed</h2><p>{lesson.history}</p></div></section>
      <section className="lesson-block" aria-labelledby="reason-title"><div className="block-number">III</div><div className="block-content"><p className="eyebrow">Philosophical reasoning</p><h2 id="reason-title">A reasoned question</h2><p>{lesson.reasoning}</p><article className="illustrated-example-card"><div className="scene-illustration" role="img" aria-label={`Illustration: ${lesson.example.scene}`}><svg viewBox="0 0 160 100" aria-hidden="true"><rect width="160" height="100" rx="12" fill="#18243a"/><circle cx="122" cy="25" r="12" fill="#e2ca91" opacity=".8"/><path d="M0 78 Q35 51 72 75 T160 65 V100 H0Z" fill="#314466"/><path d="M67 26h26v48H67z" fill="#a89bd7"/><path d="M73 34h14M73 43h14M73 52h10" stroke="#f4f0e8" strokeWidth="3"/></svg></div><div><strong>{lesson.example.title}</strong><p>{lesson.example.text}</p></div></article></div></section>
      <section className="practice-panel" aria-labelledby="practice-title"><p className="eyebrow">Optional retrieval practice</p><h2 id="practice-title">Answer before looking back</h2><p>{lesson.question}</p><div className="pronunciation-controls"><button type="button" onClick={() => setAnswer(lesson.correct)}>{lesson.correct}</button><button type="button" onClick={() => setAnswer(lesson.distractor)}>{lesson.distractor}</button></div>{answer && <p className="professor-note">{answer === lesson.correct ? lesson.feedback : "Not quite. Re-read the labels: doctrine identifies what is professed; history situates it; reasoning examines a question."}</p>}</section>
      <div className="lesson-finish"><Link href="/subjects/theology" className="secondary-action">Return to the Study Map</Link><LegacyCompletion lessonId={lesson.id} model={lesson.feedback} eligible={answer===lesson.correct} onComplete={complete} completed={completed} /></div>
    </article>
  </main>;
}
