import type { Metadata } from "next";
import Link from "next/link";
import { ProgramPath } from "@/components/Learning";
import { SubjectIcon } from "@/components/SubjectIcon";
import { books } from "./books";
import { AudiobookPlayer } from "./AudiobookPlayer";
import recordings from "./recordings.json";
import { ReadingPractice } from "./ReadingPractice";
import { ReadAloudControls } from "@/components/ReadAloudControls";
import styles from "./literature.module.css";

export const metadata: Metadata = {
  title: "Literature · Professor Citachka",
  description: "Four guided English-language classics, close-reading practice, and complete human-narrated audiobooks that play on this page.",
};

export default function LiteraturePage() {
  return (
    <main className={`subject-room-page ${styles.room}`}>
      <header className="lesson-topbar"><Link href="/" className="back-link">← Professor’s Study</Link><span className="room-state">Four guides available now</span></header>
      <div className={`subject-room-content ${styles.content}`}>
        <div className="room-code"><SubjectIcon subject="literature" /></div>
        <p className="eyebrow">Professor Citachka · Department</p>
        <h1>Literature</h1><ProgramPath subject="literature" />
        <p className="room-description">Read English-language classics with attention, confidence, and an ear for the voice telling the story. Begin with English novels; extend the conversation to an American classic.</p>
        <section className={styles.panel} aria-labelledby="orientation"><h2 id="orientation">Your first reading session</h2>
          <p>Start with Jane Eyre, chapter 1. Read or listen for 15–20 minutes, pause, and recall three things without looking. Then choose one detail and explain what it suggests. Listening counts as reading; pair audio with print when you want to inspect a sentence.</p>
          <p>A sustainable week: two short reading sessions, one rereading session, and one paragraph of analysis. On a busy day, revisit one paragraph for five minutes. If the prose is difficult, shorten the passage rather than lowering the quality of your questions.</p>
          <p><strong>Available now:</strong> four opening-unit reading guides, worked examples, retrieval checks, and self-review models. These are not full chapter-by-chapter courses or complete book texts. Passing a guide’s check records a learning interaction, not completion of the novel or demonstrated mastery.</p>
        </section>
        <nav className={styles.panel} aria-label="Beginner-to-advanced reading pathway"><h2>Your reading pathway · available now</h2><ol className={styles.pathway}>{books.map((book) => <li key={book.id}><a href={`#${book.id}`}>{book.title}</a><p>{book.level}</p><p>{book.objective}</p></li>)}</ol><p>These levels describe the analytical scaffolding, not your intelligence. Revisit a guide if you cannot support a claim with a detail; move forward when you can explain both your evidence and a limit to your interpretation.</p></nav>
        <section className={styles.panel} aria-labelledby="audio-access"><h2 id="audio-access">Audiobooks · listen here</h2>
          <p>Four complete, human-read LibriVox recordings play inside this page, free of charge. Choose a chapter below each guide. No account, purchase, or external listening app is needed. Internet access is required; audio streams from Internet Archive.</p>
          <p>These texts and recordings are public domain in the USA, not necessarily worldwide. Outside the USA, check your local copyright rules. Recording credits and source rights statements appear beneath each player.</p>
          <p>Use chapter or scene boundaries, not timestamps, to follow the guides. Frankenstein uses the 1818 text; its 29 sections include the dedication, preface, opening letters, all three volumes, and closing letters. Print editions of the 1831 revision differ.</p>
        </section>
        <section aria-label="Available reading guides">{books.map((book) => <article className={styles.guide} key={book.id} id={book.id} aria-labelledby={`${book.id}-title`}>
          <p className="eyebrow">Available guide · {book.level}</p><h2 id={`${book.id}-title`}>{book.title}</h2><p className={styles.byline}>{book.author}</p><p><strong>Objective:</strong> {book.objective}</p>
          <h3>Reading assignment</h3><p>{book.assignment}</p><details><summary>Context and content notes</summary><p>{book.context}</p><p>{book.care}</p></details>
          <h3>Core idea</h3><p>{book.core}</p><h3>Worked examples · interpretations to test</h3>{book.examples.map((example) => <p key={example}>{example}</p>)}
          <h3>Practice · read, retrieve, explain</h3><ol>{book.steps.map((step) => <li key={step}>{step}</li>)}</ol><p>{book.writing}</p>
          <ReadAloudControls targetId={book.id} />
          <ReadingPractice book={book} />
          <h3>Next reading</h3><p>{book.next}</p>
          <AudiobookPlayer id={book.id} title={book.title} recording={recordings[book.id as keyof typeof recordings]} />
          <a className={styles.back} href="#orientation">Back to reading orientation ↑</a>
        </article>)}</section>
        <section className={styles.panel} aria-labelledby="future"><h2 id="future">Future expansion · not yet published</h2><p>The four guides above are the current teaching content. The following are proposed extensions, not available lessons or promised release dates.</p><ul><li><strong>Broader foundations:</strong> short stories, poetry, meter, and Shakespearean drama with guided passages.</li><li><strong>Intermediate studies:</strong> Dickens, the Brontës beyond Jane Eyre, historical context, and sustained essay revision.</li><li><strong>Advanced seminars:</strong> modernism, postcolonial responses to the canon, critical theory, scholarly source evaluation, and a research portfolio.</li></ul><p>For advanced work now, complete the comparative capstone in the Gatsby guide. A suggested self-review rubric: a focused claim; accurately located evidence; explanation of wording; a serious counterargument; and a revision that makes the claim more precise. Automated checks here do not grade essays.</p></section>
        <Link className="back-link" href="/">← Return to all departments</Link>
      </div>
    </main>
  );
}
