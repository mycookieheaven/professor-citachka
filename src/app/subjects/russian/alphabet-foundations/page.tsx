"use client";

import Link from "next/link";
import {LegacyCompletion} from "@/components/LegacyCompletion";
import { useRef, useState, useSyncExternalStore } from "react";
import { IllustratedExampleCard } from "@/components/IllustratedExampleCard";
import { PronunciationControls } from "@/components/PronunciationControls";

const letters = [
  ["А", "ah", "the sound in father", "Looks and sounds familiar.", "a"],
  ["М", "m", "the sound in mother", "Looks and sounds familiar.", "m"],
  ["К", "k", "the sound in kite", "Looks and sounds familiar.", "k"],
  ["О", "oh", "the sound in more", "Clear when stressed.", "o"],
  ["Т", "t", "the sound in stop", "A cleaner, lighter t.", "t"],
  ["С", "s", "the sound in sun", "Looks like C, but sounds like S.", "s"],
] as const;

function AudioStudy() {
  const slowRef = useRef<HTMLAudioElement>(null);
  const naturalRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState<"slow" | "natural" | null>(null);

  const toggle = async (kind: "slow" | "natural") => {
    const selected = kind === "slow" ? slowRef.current : naturalRef.current;
    const other = kind === "slow" ? naturalRef.current : slowRef.current;
    if (!selected) return;

    if (playing === kind) {
      selected.pause();
      setPlaying(null);
      return;
    }

    other?.pause();
    if (other) other.currentTime = 0;
    try {
      await selected.play();
      setPlaying(kind);
    } catch {
      setPlaying(null);
    }
  };

  return (
    <section className="audio-study" aria-labelledby="listen-title">
      <div>
        <p className="eyebrow">Listening room</p>
        <h2 id="listen-title">Hear the lesson twice</h2>
        <p>First isolate each sound. Then hear the same material with natural Russian timing.</p>
      </div>
      <div className="audio-controls">
        <button type="button" onClick={() => toggle("slow")} aria-label={`${playing === "slow" ? "Pause" : "Play"} slow pronunciation`}>
          <span className="play-symbol" aria-hidden="true">{playing === "slow" ? "Ⅱ" : "▶"}</span>
          <span><strong>Slow</strong><small>Careful articulation</small></span>
        </button>
        <button type="button" onClick={() => toggle("natural")} aria-label={`${playing === "natural" ? "Pause" : "Play"} natural pronunciation`}>
          <span className="play-symbol" aria-hidden="true">{playing === "natural" ? "Ⅱ" : "▶"}</span>
          <span><strong>Natural</strong><small>Conversational rhythm</small></span>
        </button>
      </div>
      <audio data-testid="slow-audio" ref={slowRef} src="/audio/russian/alphabet-foundations-slow.m4a" onEnded={() => setPlaying(null)} preload="metadata" />
      <audio data-testid="natural-audio" ref={naturalRef} src="/audio/russian/alphabet-foundations-natural.m4a" onEnded={() => setPlaying(null)} preload="metadata" />
    </section>
  );
}

const lessonId = "russian/alphabet-foundations";
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

export default function AlphabetFoundationsPage() {
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
        <Link href="/study" className="back-link"><span aria-hidden="true">←</span> Professor’s Study</Link>
        <div className="lesson-progress" aria-label="Lesson one of six">
          <span>Russian foundations</span>
          <div><i /></div>
          <strong>01 / 06</strong>
        </div>
      </header>

      <article className="lesson-article">
        <header className="lesson-hero">
          <p className="eyebrow">Russian · Lesson 01</p>
          <h1>Alphabet Foundations</h1>
          <p className="lesson-deck">Six letters. Three words. One disciplined beginning.</p>
          <div className="objective">
            <span>Objective</span>
            <p>By the end, you will recognize, pronounce, and write six Cyrillic letters without guessing.</p>
          </div>
        </header>

        <section className="lesson-block" aria-labelledby="letters-title">
          <div className="block-number">I</div>
          <div className="block-content">
            <p className="eyebrow">The first set</p>
            <h2 id="letters-title">Begin with what can become familiar</h2>
            <p>Russian uses 33 Cyrillic letters. Today you need only six. Say each sound aloud before moving to the next row.</p>
            <div className="letter-table">
              {letters.map(([letter, sound, meaning, note, audioName]) => (
                <div className="letter-row" key={letter}>
                  <span className="cyrillic-letter">{letter}</span>
                  <span className="letter-reading"><strong>{letter} ({sound}) — {meaning}</strong><small>{note} The sound button plays only the isolated sound, never an example word.</small><PronunciationControls russian={letter} latin={sound} mode="sound" audioSrc={`/audio/russian/phonemes/${audioName}.wav`} /></span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AudioStudy />

        <section className="lesson-block" aria-labelledby="words-title">
          <div className="block-number">II</div>
          <div className="block-content">
            <p className="eyebrow">Put them together</p>
            <h2 id="words-title">Your first readable words</h2>
            <p>Stress is shown with capital letters in the pronunciation guide. Read the Russian first; consult the guide only after attempting it.</p>
            <div className="word-examples">
              <div><span>МАМА</span><strong>МАМА (MAH-mah) — mama / mom</strong><PronunciationControls russian="мама" latin="MAH-mah" /></div>
              <div><span>ТАМ</span><strong>ТАМ (tahm) — there</strong><PronunciationControls russian="там" latin="tahm" /></div>
              <div><span>КОТ</span><strong>КОТ (koht) — male cat</strong><PronunciationControls russian="кот" latin="koht" /></div>
            </div>
            <div className="illustrated-examples">
              <IllustratedExampleCard russian="КОТ" latin="koht" english="male cat" scene="a cat reading by a window" />
            </div>
          </div>
        </section>

        <section className="practice-panel" aria-labelledby="practice-title">
          <p className="eyebrow">Retrieval practice</p>
          <h2 id="practice-title">Close the loop</h2>
          <ol>
            <li>Write each letter three times: А, М, К, О, Т, С.</li>
            <li>Without looking above, write the letter that sounds like <em>s</em>.</li>
            <li>Read МАМА, ТАМ, and КОТ aloud before checking the pronunciation.</li>
          </ol>
          <p className="professor-note"><span>Professor’s note</span>Recognition feels easy. Retrieval creates memory.</p>
        </section>

        <div className="lesson-finish">
          <Link href="/study" className="secondary-action">Return to the Study</Link>
          <LegacyCompletion lessonId={lessonId} model="The lookalike Cyrillic letter shaped like Latin C represents an s sound. Retrieve the sound, rather than borrowing the English letter name; compare with the letter and item-level audio above." onComplete={markComplete} completed={completed} />
        </div>
      </article>
    </main>
  );
}
