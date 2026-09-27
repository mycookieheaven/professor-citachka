"use client";

import Link from "next/link";
import {LegacyCompletion} from "@/components/LegacyCompletion";
import { use, useState, useSyncExternalStore } from "react";

export type FinanceLesson = {
  slug: string;
  number: string;
  unit: string;
  title: string;
  deck: string;
  objective: string;
  scene: string;
  sceneDescription: string;
  exampleLabel: string;
  example: string;
  explanation: string;
  practice: { prompt: string; choices: string[]; answer: string; feedback: string };
  note: string;
};

export const financeLessons: FinanceLesson[] = [
  {
    slug: "cash-flow-basics", number: "01", unit: "Personal financial foundations", title: "Cash Flow: See the Whole Month",
    deck: "Money decisions become clearer when every dollar has a visible direction.",
    objective: "By the end, you will be able to calculate monthly cash flow and distinguish a surplus from a deficit.",
    scene: "calendar", sceneDescription: "A desk with a calendar, notebook, and calculator for a monthly money check-in.",
    exampleLabel: "A monthly snapshot", example: "$2,400 income − $1,950 spending = $450 surplus.",
    explanation: "A surplus means income is greater than spending. It is a fact about one month—not a judgment about you. Repeated snapshots help you notice patterns before making changes.",
    practice: { prompt: "Income is $1,800 and spending is $1,620. What is the result?", choices: ["A surplus", "A deficit", "Break-even"], answer: "A surplus", feedback: "Correct: income is greater than spending, leaving a $180 surplus." },
    note: "Start with observation. List what came in and what went out before choosing a goal or tool.",
  },
  {
    slug: "debt-interest-and-risk", number: "02", unit: "Debt, interest, and risk", title: "Debt, Interest, and Risk",
    deck: "Borrowing is an agreement with a price, a timeline, and consequences worth reading closely.",
    objective: "By the end, you will be able to explain principal, interest, APR, and why payment timing matters.",
    scene: "statement", sceneDescription: "A credit statement beside a magnifying glass and a calendar reminder.",
    exampleLabel: "Read the terms", example: "A $500 balance at 24% APR can grow when interest accrues and payments are delayed.",
    explanation: "APR is a yearly rate used to describe borrowing cost; actual charges can depend on the agreement, balance, and timing. Read the disclosure and ask the lender how interest is calculated.",
    practice: { prompt: "Which term names the amount originally borrowed or still owed before interest?", choices: ["Principal", "APR", "Minimum payment"], answer: "Principal", feedback: "Correct: principal is the underlying amount borrowed or remaining before interest charges." },
    note: "Compare total cost, payment schedule, fees, and alternatives—not only the smallest monthly payment.",
  },
  {
    slug: "investing-fundamentals", number: "03", unit: "Investing fundamentals", title: "Investing: Time, Mix, and Uncertainty",
    deck: "Investing is not prediction; it is a long-term way to take measured risk in pursuit of a goal.",
    objective: "By the end, you will be able to define diversification, compounding, and the relationship between time horizon and risk.",
    scene: "garden", sceneDescription: "A small garden with labeled seeds growing at different rates beside a timeline.",
    exampleLabel: "A simple growth model", example: "$1,000 growing at 5% annually becomes about $1,276 after five years before taxes and fees.",
    explanation: "Compounding means returns may earn returns over time. Real returns vary, investments can lose value, and the example is a simplified illustration rather than a forecast.",
    practice: { prompt: "What does diversification try to reduce?", choices: ["Reliance on one investment", "All market risk", "The need for a goal"], answer: "Reliance on one investment", feedback: "Correct: diversification spreads exposure, but it cannot remove all risk or prevent losses." },
    note: "Match a broad strategy to your goals, time horizon, risk capacity, costs, and account rules; consider a qualified professional for personal decisions.",
  },
  {
    slug: "markets-and-valuation", number: "04", unit: "Markets and valuation", title: "Markets: Price and Value Are Different",
    deck: "A quoted price is immediate. A reasoned estimate of value asks a deeper question.",
    objective: "By the end, you will be able to distinguish stocks, bonds, funds, market price, and a valuation claim.",
    scene: "market-board", sceneDescription: "A market board with a price tag, a scale, and research notes.",
    exampleLabel: "Two separate ideas", example: "A share price of $40 tells you what buyers and sellers agreed on now; it does not alone prove what the business is worth.",
    explanation: "Prices reflect available information, expectations, and emotion. Valuation is an estimate built from assumptions, so treat confident claims as claims to examine—not certainty.",
    practice: { prompt: "Which statement is most accurate?", choices: ["Price and value always match", "Price is a current market quote", "A fund eliminates every risk"], answer: "Price is a current market quote", feedback: "Correct: market price is the current quote; value is an estimate that depends on assumptions." },
    note: "When you hear a market claim, ask: What is the source? What assumptions support it? What could make it wrong?",
  },
  {
    slug: "independent-financial-judgment", number: "05", unit: "Independent financial judgment", title: "Independent Financial Judgment",
    deck: "The durable skill is not finding a perfect answer; it is learning to ask better questions before acting.",
    objective: "By the end, you will be able to evaluate a financial claim, identify common scam signals, and draft questions for a trusted professional.",
    scene: "compass", sceneDescription: "A compass, a shield, and two source documents on a careful decision desk.",
    exampleLabel: "Pause before pressure", example: "“Guaranteed returns—act today” combines certainty and urgency, two signals to verify independently.",
    explanation: "Legitimate opportunities can still have risks. Slow down, verify the sender and source through an independent channel, and never share account credentials because of an unexpected message.",
    practice: { prompt: "What is a safer first response to an urgent investment message?", choices: ["Verify independently and pause", "Send funds before the deadline", "Share a login to confirm identity"], answer: "Verify independently and pause", feedback: "Correct: pause, verify through a trusted independent channel, and get help if something feels pressured or unclear." },
    note: "For decisions involving your own taxes, debt, investments, insurance, or legal obligations, use current official information and seek qualified, fiduciary, or regulated help when appropriate.",
  },
];

const progressKey = "professor-citachka:completed-lessons";
const listeners = new Set<() => void>();
function completedIds(): string[] { try { const value=JSON.parse(localStorage.getItem(progressKey) ?? "[]"); return Array.isArray(value)?value.filter((item):item is string=>typeof item==="string"):[]; } catch { return []; } }
function subscribe(listener: () => void) { listeners.add(listener); return () => listeners.delete(listener); }

function FinanceScene({ lesson }: { lesson: FinanceLesson }) {
  const accent = lesson.scene === "garden" ? "#85ad9b" : lesson.scene === "compass" ? "#8ca9dc" : "#e2ca91";
  return <div className="finance-scene" role="img" aria-label={`Illustrated scene: ${lesson.sceneDescription}`}>
    <svg viewBox="0 0 360 180" aria-hidden="true"><rect width="360" height="180" rx="18" fill="#111b2e"/><circle cx="292" cy="43" r="26" fill={accent} opacity=".26"/><path d="M0 143 Q80 116 151 142 T360 133V180H0Z" fill="#172942"/>
      <rect x="72" y="52" width="128" height="82" rx="7" fill="#e9e1cd" opacity=".92"/><path d="M92 77h88M92 96h68M92 115h48" stroke="#33435c" strokeWidth="7" strokeLinecap="round"/><circle cx="247" cy="111" r="34" fill="none" stroke={accent} strokeWidth="8"/><path d="m247 86 11 25-11 25-11-25z" fill={accent}/><path d="M251 112h45" stroke={accent} strokeWidth="6" strokeLinecap="round"/></svg>
  </div>;
}

export function FinanceLessonExperience({ lesson }: { lesson: FinanceLesson }) { return <FinanceLessonExperienceSession key={lesson.slug} lesson={lesson} />; }
function FinanceLessonExperienceSession({ lesson }: { lesson: FinanceLesson }) {
  const id = `finance/${lesson.slug}`;
  const [choice, setChoice] = useState<string | null>(null);
  const complete = useSyncExternalStore(subscribe, () => completedIds().includes(id), () => false);
  const markComplete = () => { localStorage.setItem(progressKey, JSON.stringify([...new Set([...completedIds(), id])])); listeners.forEach((listener) => listener()); };
  const feedback = choice === lesson.practice.answer ? lesson.practice.feedback : choice ? "Not quite. Return to the example, then try again." : null;

  return <main className="lesson-page finance-lesson-page"><div className="lesson-stars" aria-hidden="true" />
    <header className="lesson-topbar"><Link href="/subjects/finance" className="back-link"><span aria-hidden="true">←</span> Finance Study Map</Link><div className="lesson-progress" aria-label={`Finance lesson ${lesson.number} of five`}><span>{lesson.unit}</span><div><i style={{ width: `${Number(lesson.number) * 20}%` }} /></div><strong>{lesson.number} / 05</strong></div></header>
    <article className="lesson-article"><header className="lesson-hero"><p className="eyebrow">Finance · Lesson {lesson.number}</p><h1>{lesson.title}</h1><p className="lesson-deck">{lesson.deck}</p><div className="objective"><span>Objective</span><p>{lesson.objective}</p></div></header>
      <section className="lesson-block finance-concept" aria-labelledby="example-title"><div className="block-number">I</div><div className="block-content"><p className="eyebrow">{lesson.exampleLabel}</p><h2 id="example-title">Work from a clear example</h2><p>{lesson.explanation}</p><div className="finance-example"><strong>{lesson.example}</strong></div><FinanceScene lesson={lesson} /></div></section>
      <section className="practice-panel finance-practice" aria-labelledby="practice-title"><p className="eyebrow">Optional retrieval practice</p><h2 id="practice-title">Answer before you check</h2><p>{lesson.practice.prompt}</p><div className="practice-choices">{lesson.practice.choices.map((item) => <button type="button" key={item} onClick={() => setChoice(item)} className={choice === item ? "selected" : ""}>{item}</button>)}</div>{feedback && <p className={choice === lesson.practice.answer ? "feedback correct" : "feedback"} role="status">{feedback}</p>}<p className="professor-note"><span>Professor’s note</span>{lesson.note}</p></section>
      <aside className="finance-disclaimer" aria-label="Educational disclaimer"><strong>Educational use only</strong><p>This curriculum is education, not individualized financial advice. Rules, products, rates, taxes, and eligibility change; verify current details with official sources and qualified professionals before acting.</p></aside>
      <div className="lesson-finish"><Link href="/subjects/finance" className="secondary-action">Return to the Study Map</Link><LegacyCompletion lessonId={id} model={lesson.practice.feedback} eligible={choice===lesson.practice.answer} onComplete={markComplete} completed={complete} /></div>
    </article>
  </main>;
}

export default function FinanceLessonPage({ params }: { params: Promise<{ lesson: string }> }) {
  const { lesson: slug } = use(params);
  const lesson = financeLessons.find((item) => item.slug === slug) ?? financeLessons[0];
  return <FinanceLessonExperience lesson={lesson} />;
}
