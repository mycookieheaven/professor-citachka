import { notFound } from "next/navigation";
import { isSubjectSlug, SUBJECT_SLUGS, SubjectRoom } from "@/components/SubjectRoom";
import { FundingDepartment } from "@/components/FundingDepartment";

/* Every department the site renders, written out at build time. A static export
   has no server to look up an address later, so the addresses have to be named
   here; the list comes from the departments themselves rather than being retyped. */
export function generateStaticParams() {
  return [...SUBJECT_SLUGS, "business-funding"].map((subject) => ({ subject }));
}

export default async function SubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params;
  if (subject === 'business-funding') return <FundingDepartment />;
  if (!isSubjectSlug(subject)) notFound();
  return <SubjectRoom subject={subject} />;
}
