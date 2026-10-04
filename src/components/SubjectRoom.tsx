import Link from "next/link";
import { ProgramPath } from "@/components/Learning";
import { SubjectIcon } from "@/components/SubjectIcon";
import { CurriculumHorizon } from "@/components/CurriculumHorizon";

const rooms = {
  russian: {
    title: "Russian", code: "RU",
    description: "A structured beginner pathway from Cyrillic literacy to practical, independent conversation.",
    opening: "We will build Russian deliberately: sound before speed, useful speech before obscure grammar, retrieval before confidence.",
    units: [
      ["01", "Foundations: sound, script, and first speech", "Weeks 1–4 · Cyrillic, stress, greetings, introductions, numbers, and simple questions."],
      ["02", "Everyday life and description", "Weeks 5–8 · Present tense, people, family, routines, adjectives, and places."],
      ["03", "Food, movement, and transactions", "Weeks 9–12 · Ordering, shopping, prices, transport, destinations, and practical requests."],
      ["04", "Past, future, and experience", "Weeks 13–16 · Tell a short story, discuss plans, and express needs and preferences."],
      ["05", "Building independence", "Weeks 17–20 · Weather, comparisons, advice, practical messages, and longer conversations."],
      ["06", "Consolidation and real use", "Weeks 21–24 · Integrate grammar, use conversation-repair strategies, and complete an A2-style review."],
    ],
    start: "/subjects/russian/alphabet-foundations",
  },
  neuroscience: {
    title: "Neuroscience", code: "NS", description: "From neurons and synapses to cognition, emotion, and behavior.",
    opening: "The nervous system rewards patient study: structure first, mechanism second, interpretation last.",
    units: [["01", "Neural foundations", "Cells, electrical signaling, synapses, and the organization of the nervous system."], ["02", "Sensation and movement", "How brains receive information, construct perception, and guide action."], ["03", "Learning, memory, and attention", "Plasticity, memory systems, attention, and the science of practice."], ["04", "Emotion and motivation", "Stress, reward, affective circuits, and decision-making."], ["05", "Clinical and cognitive neuroscience", "Brain injury, neurodevelopment, psychiatric frameworks, and responsible interpretation."]], start: "/subjects/neuroscience",
  },
  "veterinary-science": {
    title: "Veterinary Science", code: "VT", description: "Foundations for anatomy, physiology, pharmacology, and compassionate clinical care.",
    opening: "A future veterinary technician learns to observe precisely before acting decisively.",
    units: [["01", "Clinical foundations", "Professional roles, safety, medical language, and careful observation."], ["02", "Comparative anatomy", "Major body systems and the meaningful similarities and differences among species."], ["03", "Physiology and pathology", "How healthy systems function and what changes in disease."], ["04", "Pharmacology and diagnostics", "Medication principles, sample handling, laboratory basics, and error prevention."], ["05", "Patient care and veterinary practice", "Nursing care, communication, ethics, and preparation for vet-tech training."]], start: "/subjects/veterinary-science",
  },
  theology: {
    title: "Theology", code: "TH", description: "Catholic doctrine, Scripture, Church history, and philosophical theology.",
    opening: "Faith seeks understanding; disciplined inquiry need not be the enemy of reverence.",
    units: [["01", "How theology reasons", "Revelation, Scripture, Tradition, reason, and the proper use of sources."], ["02", "God, creation, and the human person", "Classical theism, creation, soul, freedom, sin, and grace."], ["03", "Christ and salvation", "The person of Christ, the Incarnation, redemption, and discipleship."], ["04", "Church, sacraments, and moral life", "Ecclesiology, sacramental theology, virtue, conscience, and social teaching."], ["05", "History, philosophy, and contested questions", "Councils, major thinkers, apologetics, and charitable engagement with objections."]], start: "/subjects/theology",
  },
  finance: {
    title: "Finance", code: "FN", description: "Capital, markets, risk, and the disciplined use of money.",
    opening: "Sound finance begins by distinguishing what feels valuable from what can be measured.",
    units: [["01", "Personal financial foundations", "Cash flow, budgeting, emergency reserves, banking, and credit."], ["02", "Debt, interest, and risk", "Loans, credit cards, interest mechanics, insurance, and consumer safeguards."], ["03", "Investing fundamentals", "Asset classes, diversification, compounding, accounts, and long-term decision-making."], ["04", "Markets and valuation", "Stocks, bonds, funds, macroeconomic forces, and price versus value."], ["05", "Independent financial judgment", "Reading claims critically, avoiding scams, taxes, goals, and a personal financial plan."]], start: "/subjects/finance",
  },
} as const;

const neuroscienceLessonPaths = [
  "neural-foundations",
  "sensation-and-movement",
  "learning-memory-attention",
  "emotion-and-motivation",
  "clinical-and-cognitive-neuroscience",
] as const;

const financeLessonPaths = [
  "cash-flow-basics",
  "debt-interest-and-risk",
  "investing-fundamentals",
  "markets-and-valuation",
  "independent-financial-judgment",
] as const;

export type SubjectSlug = keyof typeof rooms;
const veterinaryLessonLinks = ["clinical-foundations", "comparative-anatomy", "physiology-pathology", "pharmacology-diagnostics", "patient-care-practice"] as const;
export function isSubjectSlug(value: string): value is SubjectSlug { return Object.hasOwn(rooms, value); }

export function SubjectRoom({ subject }: { subject: SubjectSlug }) {
  const room = rooms[subject];
  return <main className="subject-room-page"><div className="subject-room-orbit" aria-hidden="true" />
    <header className="lesson-topbar"><Link href="/professorcitachka" className="back-link"><span aria-hidden="true">←</span> Professor’s Study</Link><span className="room-state">Department established</span></header>
    <article className="subject-room-content"><div className="room-code" aria-hidden="true"><SubjectIcon subject={subject} /></div><p className="eyebrow">Professor Citachka · Department</p><h1>{room.title}</h1><ProgramPath subject={subject} /><p className="room-description">{room.description}</p><blockquote>{room.opening}</blockquote>
      <section className="study-map" aria-labelledby="study-map-title"><p className="eyebrow">Your pathway</p><h2 id="study-map-title">Study Map</h2><p>Each unit builds on the one before it. We advance through demonstrated understanding, not mere completion.</p><ol>{room.units.map(([number, title, detail], index) => <li data-testid="study-map-unit" key={number}><span>{number}</span><div><h3>{title}</h3><p>{detail}</p>{subject === "neuroscience" && <Link className="study-map-lesson-link" href={`/subjects/neuroscience/${neuroscienceLessonPaths[index]}`}>{index === 0 ? "Begin Unit 1: Neural Foundations" : `Continue to Lesson ${number}: ${title}`}</Link>}{subject === "finance" && <Link className="study-map-lesson-link" href={`/subjects/finance/${financeLessonPaths[index]}`}>{index === 0 ? "Begin Unit 1: Cash Flow Basics" : `Continue to Lesson ${number}: ${title}`}</Link>}{subject === "veterinary-science" && <Link className="study-map-lesson-link" href={`/subjects/veterinary-science/${veterinaryLessonLinks[index]}`}>{index === 0 ? "Begin Unit 1: Clinical Foundations" : `Continue to Lesson ${number}: ${title}`}</Link>}</div></li>)}</ol></section>
      {subject !== "russian" && <CurriculumHorizon subject={subject} />}
      {subject === "russian" ? <Link className="primary-action" href={room.start}>Begin Unit 1: Alphabet Foundations <span aria-hidden="true">→</span></Link> : subject === "neuroscience" ? <Link className="primary-action" href={`/subjects/neuroscience/${neuroscienceLessonPaths[0]}`}>Begin Unit 1: Neural Foundations <span aria-hidden="true">→</span></Link> : subject === "finance" ? <Link className="primary-action" href={`/subjects/finance/${financeLessonPaths[0]}`}>Start Finance curriculum <span aria-hidden="true">→</span></Link> : subject === "veterinary-science" ? <Link className="primary-action" href="/subjects/veterinary-science/clinical-foundations">Begin Unit 1: Clinical Foundations <span aria-hidden="true">→</span></Link> : <Link className="primary-action" href="/professorcitachka">Return to the Professor’s Study <span aria-hidden="true">→</span></Link>}
    </article></main>;
}
