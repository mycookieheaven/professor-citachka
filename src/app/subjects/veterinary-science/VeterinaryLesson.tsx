"use client";

import Link from "next/link";
import {LegacyCompletion} from "@/components/LegacyCompletion";
import { useState } from "react";

type LessonSlug =
  | "clinical-foundations"
  | "comparative-anatomy"
  | "physiology-pathology"
  | "pharmacology-diagnostics"
  | "patient-care-practice";

type Lesson = {
  slug: LessonSlug;
  stage: string;
  title: string;
  deck: string;
  objectives: string[];
  exampleTitle: string;
  example: string;
  scene: string;
  sceneLabel: string;
  question: string;
  choices: readonly string[];
  correct: number;
  rationale: string;
};

const lessons: readonly Lesson[] = [
  {
    slug: "clinical-foundations",
    stage: "01 / 05",
    title: "Clinical Foundations",
    deck: "Observation before intervention: make safety and clinical attention the first intervention.",
    objectives: ["Use a calm, repeatable patient approach", "Identify the purpose of a TPR and a SOAP record", "Recognize when to pause and bring in the veterinary team"],
    exampleTitle: "Example: the intake room",
    example: "Before touching a nervous dog, scan the room, read body language, prepare equipment, and make a plan with the handler. A tidy setup protects both patient and team.",
    scene: "canine intake scene",
    sceneLabel: "A veterinary technician observes a dog on an exam-table mat with a stethoscope and patient chart nearby.",
    question: "Which workflow best supports safe, complete triage?",
    choices: ["One-way flow of attention: patient, environment, equipment, then documentation", "Start with equipment so the patient must wait less", "Document only after the veterinarian enters"],
    correct: 0,
    rationale: "Right—this flow keeps the patient central while preventing missed safety checks and incomplete records.",
  },
  {
    slug: "comparative-anatomy",
    stage: "02 / 05",
    title: "Comparative Anatomy",
    deck: "Map the shared plan, then learn the species-specific landmarks.",
    objectives: ["Orient structures using directional terms", "Trace major organ systems in companion animals", "Name a clinically useful canine–feline comparison"],
    exampleTitle: "Example: one body plan, two species",
    example: "Dogs and cats share the same major body systems, but application changes. A feline jugular vein is commonly used for blood collection; gentle positioning and patient-specific restraint remain essential.",
    scene: "comparative anatomy scene",
    sceneLabel: "A dog and cat silhouette stand beside a simplified thorax and abdomen diagram with labeled directional arrows.",
    question: "Which directional term means closer to the head?",
    choices: ["Caudal", "Cranial", "Ventral"],
    correct: 1,
    rationale: "Right—cranial points toward the head. Caudal points toward the tail; ventral points toward the underside.",
  },
  {
    slug: "physiology-pathology",
    stage: "03 / 05",
    title: "Physiology & Pathology",
    deck: "Know the normal pattern before you interpret a change.",
    objectives: ["Connect circulation, respiration, and perfusion", "Distinguish a sign from a diagnosis", "Escalate abnormal findings using precise observations"],
    exampleTitle: "Example: a changing respiratory pattern",
    example: "A patient’s increased respiratory effort is a clinical finding, not a diagnosis. Count the rate, observe posture and effort, note mucous-membrane color, and report the trend promptly.",
    scene: "respiratory assessment scene",
    sceneLabel: "A technician observes a resting cat while a monitor shows breathing waves and a clock records respiratory rate.",
    question: "What is the strongest first report for a change in breathing?",
    choices: ["The patient looks sick", "The patient has a disease", "Respiratory effort is increased; rate is 48 per minute with open-mouth breathing"],
    correct: 2,
    rationale: "Right—observable, measurable findings let the veterinarian interpret the change and act quickly.",
  },
  {
    slug: "pharmacology-diagnostics",
    stage: "04 / 05",
    title: "Pharmacology & Diagnostics",
    deck: "Accuracy is a clinical skill: verify, label, trace, and communicate.",
    objectives: ["Apply medication-safety checks", "Protect specimen identity and quality", "Explain why diagnostic results need context"],
    exampleTitle: "Example: the medication pause",
    example: "Before administration, compare the patient record, medication label, dose calculation, route, and scheduled time. If a detail conflicts, stop and clarify—never work around uncertainty.",
    scene: "medication safety scene",
    sceneLabel: "A labeled medication syringe, patient chart, and specimen tube are arranged on a clean veterinary treatment table.",
    question: "What must be confirmed before a medication is administered?",
    choices: ["Confirm patient, medication, dose, route, and time", "Confirm only the medication name and route", "Ask the owner after giving the medication"],
    correct: 0,
    rationale: "Right—those checks interrupt common medication errors before they reach the patient.",
  },
  {
    slug: "patient-care-practice",
    stage: "05 / 05",
    title: "Patient Care & Practice",
    deck: "Compassionate nursing care is clinical observation in action.",
    objectives: ["Build a patient-care plan around comfort and monitoring", "Use clear, respectful client communication", "Recognize scope, ethics, and team responsibilities"],
    exampleTitle: "Example: the recovery kennel",
    example: "A recovering patient needs more than a clean kennel: reassess pain cues, bedding, temperature, food and water orders, elimination, incision appearance, and the owner’s discharge understanding.",
    scene: "recovery care scene",
    sceneLabel: "A recovering dog rests on clean bedding while a technician checks a comfort chart and water bowl outside the kennel.",
    question: "Which statement best reflects a veterinary technician’s role?",
    choices: ["Independently diagnose any observed change", "Provide ordered care, document observations, and promptly communicate concerns", "Promise an owner a treatment outcome"],
    correct: 1,
    rationale: "Right—excellent patient care combines skilled nursing, accurate records, communication, and respect for scope of practice.",
  },
];

const progressKey = "professor-citachka:completed-lessons";

function SceneCard({ lesson }: { lesson: Lesson }) {
  return <article className="vet-scene-card">
    <div className="vet-scene" role="img" aria-label={`${lesson.scene}: ${lesson.sceneLabel}`}>
      <svg viewBox="0 0 360 180" aria-hidden="true">
        <rect width="360" height="180" rx="16" fill="#17273b" />
        <rect x="28" y="112" width="304" height="14" rx="7" fill="#85ad9b" opacity=".75" />
        <circle cx="95" cy="83" r="30" fill="#c9ad72" opacity=".92" />
        <path d="M73 67 55 47M115 67l18-20M87 95h16m-8 0v12" stroke="#f4f0e8" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path d="M186 42v78m-20-57h40m-40 24h40" stroke="#8ca9dc" strokeWidth="7" strokeLinecap="round" />
        <rect x="238" y="39" width="63" height="78" rx="6" fill="#0c101a" stroke="#e2ca91" strokeWidth="3" />
        <path d="M252 61h35m-35 15h35m-35 15h23" stroke="#f4f0e8" strokeWidth="4" strokeLinecap="round" opacity=".8" />
      </svg>
    </div>
    <div><p className="eyebrow">Illustrated scene card</p><h2>{lesson.exampleTitle}</h2><p>{lesson.example}</p></div>
  </article>;
}

export function VeterinaryLesson({ lessonSlug }: { lessonSlug: LessonSlug }) { return <VeterinaryLessonSession key={lessonSlug} lessonSlug={lessonSlug} />; }
function VeterinaryLessonSession({ lessonSlug }: { lessonSlug: LessonSlug }) {
  const lessonIndex = lessons.findIndex((lesson) => lesson.slug === lessonSlug);
  const lesson = lessons[lessonIndex];
  const [selected, setSelected] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);
  const previousLesson = lessons[lessonIndex - 1];
  const answeredCorrectly = selected === lesson.correct;

  const complete = () => {
    if (!answeredCorrectly) return;
    const existing = typeof window === "undefined" ? [] : JSON.parse(localStorage.getItem(progressKey) ?? "[]");
    const progress = Array.isArray(existing) ? existing.filter((item): item is string => typeof item === "string") : [];
    localStorage.setItem(progressKey, JSON.stringify(Array.from(new Set([...progress, `veterinary-science/${lesson.slug}`]))));
    setCompleted(true);
  };

  return <main className="lesson-page veterinary-lesson-page">
    <div className="lesson-stars" aria-hidden="true" />
    <header className="lesson-topbar"><Link href="/subjects/veterinary-science" className="back-link"><span aria-hidden="true">←</span> Veterinary Study Map</Link><div className="lesson-progress" aria-label={`Veterinary lesson ${lesson.stage}`}><span>Vet-tech foundations</span><div><i style={{ width: `${(lessonIndex + 1) * 20}%` }} /></div><strong>{lesson.stage}</strong></div></header>
    <article className="lesson-article">
      <header className="lesson-hero"><p className="eyebrow">Veterinary Science · Stage {lessonIndex + 1}</p><h1>{lesson.title}</h1><p className="lesson-deck">{lesson.deck}</p></header>
      <section className="vet-objectives" aria-labelledby="objectives-title"><p className="eyebrow">Target outcomes</p><h2 id="objectives-title">Today&apos;s objectives</h2><ul>{lesson.objectives.map((objective) => <li key={objective}>{objective}</li>)}</ul></section>
      <SceneCard lesson={lesson} />
      <section className="vet-retrieval" aria-label="Retrieval practice" role="group"><p className="eyebrow">Optional retrieval practice</p><h2 id="retrieval-title">Check your clinical thinking</h2><p>{lesson.question}</p><div className="vet-choice-list">{lesson.choices.map((choice, index) => <button type="button" key={choice} onClick={() => setSelected(index)} className={selected === index ? "selected" : ""}>{choice}</button>)}</div>{selected !== null && !completed && <p className={answeredCorrectly ? "answer-feedback correct" : "answer-feedback"} role="status">{answeredCorrectly ? lesson.rationale : "Not yet. Re-read the example, then choose the response that is safest and most specific."}</p>}</section>
      <section className="vet-unit-check" aria-labelledby="unit-check-title"><p className="eyebrow">Reading checkpoint</p><h2 id="unit-check-title">Ready to advance?</h2><p>The retrieval question is optional practice. Save-and-continue records reading on this device, not assessed clinical competence.</p><LegacyCompletion lessonId={`veterinary-science/${lesson.slug}`} model={lesson.rationale} eligible={answeredCorrectly} onComplete={complete} completed={completed} label="Complete unit check" /></section>
      <nav className="vet-lesson-nav" aria-label="Veterinary lesson navigation">{previousLesson ? <Link className="secondary-action" href={`/subjects/veterinary-science/${previousLesson.slug}`}>← {previousLesson.title}</Link> : <Link className="secondary-action" href="/subjects/veterinary-science">Back to Study Map</Link>}</nav>
    </article>
  </main>;
}

export const veterinaryLessonSlugs = lessons.map((lesson) => lesson.slug);
