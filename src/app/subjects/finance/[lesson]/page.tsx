// Keep testable legacy components outside the App Router page export contract.
import FinanceLessonPage from "./FinanceLesson";
import { FINANCE_LESSON_SLUGS } from "./lesson-slugs";

/* The lesson copy and its renderer stay in a client module. This file is the
   server-side doorway to them, and it exists because a static build has to know
   every address in advance: re-exporting the client component straight out of a
   page hides the address list from the exporter, which then cannot write the
   pages out. Rendering it from here keeps both halves honest. */
export function generateStaticParams() {
  return FINANCE_LESSON_SLUGS.map((lesson) => ({ lesson }));
}

export default function Page({ params }: { params: Promise<{ lesson: string }> }) {
  return <FinanceLessonPage params={params} />;
}
