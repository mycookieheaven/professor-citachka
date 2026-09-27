'use client';

import { useState } from 'react';
import styles from './ProfessorChat.module.css';

/** The launcher is dashboard-only; the provider remains deliberately fail-closed. */
export function ProfessorChat() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState('');
  return (
    <aside className={styles.root} aria-label="Ask Professor Citachka">
      <button
        type="button"
        className={styles.launcher}
        aria-label="Open Ask Professor Citachka"
        aria-expanded={open}
        aria-controls="ask-professor-dialog"
        onClick={() => setOpen(true)}
      >
        <span aria-hidden="true">?</span>
        <strong>Ask Professor</strong>
      </button>
      {open && <section id="ask-professor-dialog" className={styles.panel} role="dialog" aria-modal="false" aria-labelledby="ask-professor-title">
        <header className={styles.header}>
          <div><p>Professor Citachka</p><h2 id="ask-professor-title">Ask Professor Citachka</h2></div>
          <button type="button" className={styles.close} aria-label="Close Ask Professor Citachka" onClick={() => setOpen(false)}>×</button>
        </header>
        <p className={styles.status} role="status">Chat is not connected yet — setup required.</p>
        <p id="professor-chat-status">A secure AI provider and private sign-in are still required. No substitute model or pretend replies.</p>
        <label htmlFor="professor-question">Your question (unsent draft)</label>
        <textarea id="professor-question" rows={4} maxLength={2000}
          value={draft} onChange={event => setDraft(event.target.value)}
          aria-describedby="professor-chat-status professor-chat-privacy professor-chat-count"
          placeholder="What would you like to understand?" />
        <p id="professor-chat-privacy">This draft is not sent or saved by the site. It disappears when you close this panel or reload the page. Do not enter passwords or private information.</p>
        <div className={styles.actions}>
          <span id="professor-chat-count">{draft.length} / 2,000 characters</span>
          <button type="button" disabled aria-describedby="professor-chat-status">Send — setup required</button>
        </div>
      </section>}
    </aside>
  );
}
