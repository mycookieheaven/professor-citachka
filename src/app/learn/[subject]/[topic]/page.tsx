import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {allTopics,getProgram,programs} from '@/lib/programs';
import {fundingTopics} from '@/lib/funding';
import {FundingLesson} from '@/components/FundingLesson';
import {LearningLesson} from '@/components/Learning';

type Params={params:Promise<{subject:string;topic:string}>};

export function generateStaticParams(){return programs.flatMap(p=>allTopics(p).map(t=>({subject:p.id,topic:t.id})));}

/*
 * Every lesson used to arrive in a browser tab, a search result and a shared link
 * under the same generic site title. This gives each one its own: the lesson's
 * name, then its department, then the site. The description is the lesson's own
 * opening sentence, cut where a search result stops showing it.
 */
export async function generateMetadata({params}:Params):Promise<Metadata>{
  const {subject,topic}=await params;
  const program=getProgram(subject);
  const lesson=program&&allTopics(program).find(t=>t.id===topic);
  if(!program||!lesson)return {};
  const description=lesson.explanation.length>155?`${lesson.explanation.slice(0,152).trimEnd()}…`:lesson.explanation;
  const title=`${lesson.title} · ${program.title}`;
  return {
    title,
    description,
    openGraph:{title,description,images:['/og/cookieheaven.png']},
    twitter:{card:'summary_large_image',title,description,images:['/og/cookieheaven.png']},
  };
}

// The original 50 funding lessons keep their specialized writing/roleplay renderer; appended lessons use the depth renderer.
export default async function Page({params}:Params){const {subject,topic}=await params;const p=getProgram(subject);if(!p||!allTopics(p).some(t=>t.id===topic))notFound();return subject==='business-funding'&&fundingTopics.some(t=>t.id===topic)?<FundingLesson topicId={topic}/>:<LearningLesson program={p} topicId={topic}/>;}
