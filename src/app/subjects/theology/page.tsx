import Link from "next/link";
import { ProgramPath } from "@/components/Learning";
import { CurriculumHorizon } from "@/components/CurriculumHorizon";

const lessons = [
  {
    number: "01",
    title: "How Theology Reasons",
    description: "Revelation, Scripture, Tradition, reason, and careful use of sources.",
    href: "/subjects/theology/how-theology-reasons",
  },
  {
    number: "02",
    title: "God, Creation, and the Human Person",
    description: "Classical theism, creation, freedom, sin, and grace.",
    href: "/subjects/theology/god-creation-and-the-human-person",
  },
  {
    number: "03",
    title: "Christ and Salvation",
    description: "The Incarnation, redemption, discipleship, and hope.",
    href: "/subjects/theology/christ-and-salvation",
  },
  {
    number: "04",
    title: "Church, Sacraments, and Moral Life",
    description: "The Church, the sacraments, conscience, virtue, and social teaching.",
    href: "/subjects/theology/church-sacraments-and-moral-life",
  },
  {
    number: "05",
    title: "History, Philosophy, and Questions",
    description: "Councils, major thinkers, apologetics, and charitable engagement with objections.",
    href: "/subjects/theology/history-philosophy-and-questions",
  },
] as const;

export default function TheologyStudyMapPage() {
  return (
    <main className="subject-room-page">
      <header className="lesson-topbar">
        <Link href="/professorcitachka" className="back-link"><span aria-hidden="true">←</span> Professor’s Study</Link>
        <span className="room-state">Five-lesson sequence</span>
      </header>
      <article className="subject-room-content">
        <p className="eyebrow">Professor Citachka · Department</p>
        <h1>Catholic Theology</h1><ProgramPath subject="theology" />
        <p className="room-description">A staged introduction to Catholic doctrine, Scripture, Church history, and philosophical theology.</p>
        <blockquote>Faith seeks understanding; disciplined inquiry need not be the enemy of reverence.</blockquote>
        <section className="study-map" aria-labelledby="study-map-title">
          <p className="eyebrow">Your pathway</p>
          <h2 id="study-map-title">Study Map</h2>
          <p>Each lesson names whether it is presenting Catholic doctrine, historical context, or philosophical reasoning—and invites careful retrieval rather than rote agreement.</p>
          <ol>
            {lessons.map((lesson) => (
              <li key={lesson.number}>
                <span>{lesson.number}</span>
                <div>
                  <h3><Link data-testid="theology-lesson-link" href={lesson.href}>{lesson.title}</Link></h3>
                  <p>{lesson.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <CurriculumHorizon subject="theology" />
      </article>
    </main>
  );
}
