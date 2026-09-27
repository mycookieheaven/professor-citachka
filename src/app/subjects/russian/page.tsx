import Link from "next/link";
import { ProgramPath } from "@/components/Learning";
import { russianLessons, russianUnits } from "./curriculum";
import { CurriculumHorizon } from "@/components/CurriculumHorizon";

export default function RussianCurriculumIndex() {
  return (
    <main className="subject-room-page">
      <div className="subject-room-orbit" aria-hidden="true" />
      <header className="lesson-topbar"><Link href="/" className="back-link"><span aria-hidden="true">←</span> Professor’s Study</Link><span className="room-state">24-week pathway</span></header>
      <article className="subject-room-content">
        <p className="eyebrow">Professor Citachka · Russian</p><h1>Russian Study Map</h1><ProgramPath subject="russian" />
        <p className="room-description">A complete beginner route from Cyrillic literacy to practical A2-style conversations. Each weekly lesson includes a spoken phrase, scene, and retrieval check.</p>
        {russianUnits.map((unit) => (
          <section className="study-map" aria-labelledby={`unit-${unit.number}`} key={unit.number}>
            <p className="eyebrow">Unit {String(unit.number).padStart(2, "0")}</p><h2 id={`unit-${unit.number}`}>{unit.title}</h2>
            <ol>{russianLessons.filter((lesson) => lesson.unit === unit.number).map((lesson) => (
              <li key={lesson.slug}><span>{String(lesson.week).padStart(2, "0")}</span><div><h3>{lesson.title}</h3><p>{lesson.objective}</p><Link className="study-map-lesson-link" href={`/subjects/russian/${lesson.slug}`}>Week {lesson.week}: {lesson.title}</Link></div></li>
            ))}</ol>
          </section>
        ))}
        <CurriculumHorizon subject="russian" />
      </article>
    </main>
  );
}
