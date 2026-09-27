"use client";
import {ReadingNext} from '@/components/ReadingNext';

import { useState, useSyncExternalStore } from "react";
import {useRouter} from 'next/navigation';
import {recordStudy,retryStudySave} from "@/lib/study-store";
import {books,type ReadingGuide} from "./books";
import styles from "./literature.module.css";

function subscribe(listener: () => void) {
  window.addEventListener("storage", listener);
  window.addEventListener("literature-progress", listener);
  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener("literature-progress", listener);
  };
}

export function ReadingPractice({ book }: { book: ReadingGuide }) {
  const router=useRouter();
  const key = `citachka-literature-${book.id}-v1`;
  const stored = useSyncExternalStore(subscribe, () => {
    try { return localStorage.getItem(key); } catch { return null; }
  }, () => null);
  let saved: { complete?: boolean; response?: string } = {};
  let damaged=false;
  try {
    const parsed: unknown = JSON.parse(stored ?? "{}");
    if (parsed && typeof parsed === "object" && "complete" in parsed && parsed.complete === true && "response" in parsed && typeof parsed.response === "string") {
      saved = { complete: true, response: parsed.response };
    }
  } catch { damaged=true; /* Retain the original before the next verified save. */ }
  const [selected, setSelected] = useState<number | null>(null);
  const [draft, setDraft] = useState<string | null>(null);
  const [reviewed, setReviewed] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const [savedThisVisit,setSavedThisVisit]=useState(false);
  const [recorded,setRecorded]=useState(false);
  const next=books[books.findIndex(item=>item.id===book.id)+1];
  const nextUrl=next?`/subjects/literature#${next.id}`:'/subjects/literature#course-path';
  const response = draft ?? saved.response ?? "";
  const choice = selected === null ? null : book.choices[selected];
  const ready = true;

  function saveCompletion() {
    if (!ready || savedThisVisit) return;
    try {
      if(damaged&&stored)localStorage.setItem(`${key}:recovery`,stored);
      const payload=JSON.stringify({ complete: true, response });
      localStorage.setItem(key, payload);
      if(localStorage.getItem(key)!==payload)throw Error('Guide storage readback failed');
      const durable=recorded?retryStudySave():recordStudy("literature",`guide:${book.id}`,next?`guide:${next.id}`:null);
      setRecorded(true);setSaveError(!durable);
      window.dispatchEvent(new Event("literature-progress"));
      if(durable){setSavedThisVisit(true);router.push(nextUrl);}
    } catch { setSaveError(true); }
  }

  return <section className={styles.practice} aria-label={`${book.title} learning check`}>
    <h3>Optional retrieval practice</h3><p>{book.question}</p>
    <div className={styles.choices}>{book.choices.map((item, index) => <button type="button" key={item.text} aria-pressed={selected === index} onClick={() => { setSelected(index); setSaveError(false); }}>{item.text}</button>)}</div>
    <p role="status" className={styles.feedback}>
      {choice ? choice.feedback : "Optional: choose an answer or compare your interpretation with the model. You may save your reading without either."}
      {saved.complete&&!saveError ? " Guide complete · saved on this device." : ""}
      {saveError ? " Your work could not be saved. Browser storage may be blocked or full; copy your response before leaving." : ""}
      {damaged ? " The old guide record is damaged; it has not been counted as reading. It will be backed up before replacement." : ""}

    </p>
    <label htmlFor={`${book.id}-response`}><strong>Your interpretation · short paragraph</strong></label>
    <p id={`${book.id}-help`}>Optional writing: use the prompt above. Compare with the model whenever useful; no minimum length or writing grade is required.</p>
    <textarea id={`${book.id}-response`} aria-describedby={`${book.id}-help`} value={response} onChange={(event) => { setDraft(event.target.value); setReviewed(false); }} />
    <button type="button" onClick={() => setReviewed(true)}>Compare with a model</button>
    {reviewed ? <div className={styles.feedback}><h4>One defensible response · not the only answer</h4><p>{book.model}</p><p>Self-review: did you name a concrete detail, explain how it supports your claim, and acknowledge a limit? Revise if one is missing, then compare again. This model is not an automated essay grade.</p></div> : null}
    <p>Your response is saved only when you save guide completion. Storage is local to this browser and device, not an account backup; clearing site data removes it. Unsaved edits will be lost when you leave.</p>
    <ReadingNext disabled={!ready||savedThisVisit} onClick={saveCompletion}>{next?`Next reading guide: ${next.title}`:'Complete guides & review Literature'}</ReadingNext>
    {saveError&&<button type="button" onClick={()=>router.push(nextUrl)}>Continue without saving</button>}
    {savedThisVisit&&!next&&<p>This is the final opening guide. Use the next-reading assignment and return to any earlier guide for review.</p>}
    <p>Save-and-continue records reading this guide, not passing a test or finishing the book. Writing and retrieval are optional; assessed proficiency is tracked separately in the course path.</p>
  </section>;
}
