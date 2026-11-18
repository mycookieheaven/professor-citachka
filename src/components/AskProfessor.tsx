'use client';

import { useRef, useState } from 'react';
import styles from './AskProfessor.module.css';

export type AskProfessorLabels = {
  eyebrow: string;
  title: string;
  lede: string;
  label: string;
  placeholder: string;
  button: string;
  thinking: string;
  privacy: string;
  failed: string;
  limit: string;
};

type Turn = { question: string; answer: string | null; error?: string };

const MAX_QUESTION = 600;

/**
 * The homepage AI panel: ask Professor Citachka anything.
 *
 * The browser never sees a provider key. It posts a question to
 * /api/professor-chat, which holds the credential server side and enforces the
 * limits. Every state the visitor can reach is spoken through one polite live
 * region, because a panel that answers asynchronously is silent otherwise.
 */
export function AskProfessor({ labels }: { labels: AskProfessorLabels }) {
  const [draft, setDraft] = useState('');
  const [turns, setTurns] = useState<Turn[]>([]);
  const [pending, setPending] = useState(false);
  const answersRef = useRef<HTMLDivElement | null>(null);

  const question = draft.trim();
  const canSend = question.length >= 2 && !pending;

  async function ask() {
    if (!canSend) return;
    const asked = question;
    setDraft('');
    setPending(true);
    setTurns((current) => [...current, { question: asked, answer: null }]);

    try {
      const response = await fetch('/api/professor-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: asked }),
      });
      const payload = (await response.json().catch(() => null)) as
        | { answer?: string; error?: { message?: string; code?: string } }
        | null;

      if (response.ok && payload?.answer) {
        setTurns((current) => {
          const next = [...current];
          next[next.length - 1] = { question: asked, answer: payload.answer as string };
          return next;
        });
      } else {
        const message = payload?.error?.message ?? labels.failed;
        setTurns((current) => {
          const next = [...current];
          next[next.length - 1] = { question: asked, answer: null, error: message };
          return next;
        });
      }
    } catch {
      setTurns((current) => {
        const next = [...current];
        next[next.length - 1] = { question: asked, answer: null, error: labels.failed };
        return next;
      });
    } finally {
      setPending(false);
      /* jsdom has no scrollIntoView, and an older browser may not either. */
      requestAnimationFrame(() => answersRef.current?.scrollIntoView?.({ behavior: "smooth", block: "nearest" }));
    }
  }

  return (
    <section className={`home-section ${styles.wrap}`} aria-labelledby="ask-title" id="ask">
      <p className="eyebrow">{labels.eyebrow}</p>
      <h2 id="ask-title" className={styles.title}>{labels.title}</h2>
      <p className={styles.lede}>{labels.lede}</p>

      <form
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
          void ask();
        }}
      >
        <label className={styles.label} htmlFor="ask-question">{labels.label}</label>
        <textarea
          id="ask-question"
          className={styles.input}
          rows={3}
          maxLength={MAX_QUESTION}
          value={draft}
          placeholder={labels.placeholder}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
              event.preventDefault();
              void ask();
            }
          }}
        />
        <div className={styles.actions}>
          <span className={styles.count} aria-hidden="true">{draft.length} / {MAX_QUESTION}</span>
          <button className={styles.send} type="submit" disabled={!canSend}>
            {pending ? labels.thinking : labels.button}
          </button>
        </div>
      </form>

      <div className={styles.answers} ref={answersRef} aria-live="polite" aria-busy={pending}>
        {turns.map((turn, index) => (
          <article className={styles.turn} key={`${turn.question.slice(0, 24)}-${index}`}>
            <p className={styles.question}>{turn.question}</p>
            {turn.answer ? <p className={styles.answer}>{turn.answer}</p> : null}
            {turn.error ? <p className={styles.error}>{turn.error}</p> : null}
            {!turn.answer && !turn.error ? <p className={styles.answer}>{labels.thinking}</p> : null}
          </article>
        ))}
      </div>

      <p className={styles.privacy}>{labels.privacy}</p>
    </section>
  );
}
