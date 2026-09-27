import {notFound} from 'next/navigation';
import {allTopics,getProgram,programs} from '@/lib/programs';
import {fundingTopics} from '@/lib/funding';
import {FundingLesson} from '@/components/FundingLesson';
import {LearningLesson} from '@/components/Learning';
export function generateStaticParams(){return programs.flatMap(p=>allTopics(p).map(t=>({subject:p.id,topic:t.id})));}
// The original 50 funding lessons keep their specialized writing/roleplay renderer; appended lessons use the depth renderer.
export default async function Page({params}:{params:Promise<{subject:string;topic:string}>}){const {subject,topic}=await params;const p=getProgram(subject);if(!p||!allTopics(p).some(t=>t.id===topic))notFound();return subject==='business-funding'&&fundingTopics.some(t=>t.id===topic)?<FundingLesson topicId={topic}/>:<LearningLesson program={p} topicId={topic}/>;}
