import {notFound} from 'next/navigation';
import {programs,getProgram} from '@/lib/programs';
import {courseAssessments} from '@/lib/assessments';
import {AssessmentLesson} from '@/components/AssessmentLesson';
export function generateStaticParams(){return programs.flatMap(p=>courseAssessments(p).map(a=>({subject:p.id,assessment:a.id})));}
export default async function Page({params}:{params:Promise<{subject:string;assessment:string}>}){const {subject,assessment}=await params;const p=getProgram(subject);if(!p||!courseAssessments(p).some(a=>a.id===assessment))notFound();return <AssessmentLesson program={p} assessmentId={assessment}/>;}
