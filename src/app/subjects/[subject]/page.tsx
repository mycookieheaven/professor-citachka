import { notFound } from "next/navigation";
import { isSubjectSlug, SubjectRoom } from "@/components/SubjectRoom";
import { FundingDepartment } from "@/components/FundingDepartment";

export default async function SubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params;
  if (subject === 'business-funding') return <FundingDepartment />;
  if (!isSubjectSlug(subject)) notFound();
  return <SubjectRoom subject={subject} />;
}
