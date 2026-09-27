"use client";
import {ReadingNext} from './ReadingNext';
import Link from 'next/link';
import {useEffect,useRef,useState} from 'react';
import {useRouter} from 'next/navigation';
import {fundingNotice,fundingProgram,fundingTopics} from '@/lib/funding';
import {fundingSources} from '@/lib/funding-sources';
import {recordPosition,recordStudy,retryStudySave,useStudy} from '@/lib/study-store';
import {isUnlocked,StorageNotice,SubjectProgress} from './Learning';
import {lessonDestination} from '@/lib/assessments';

function Cited({text}:{text:string}){return <>{text.split(/(\[\d+\])/g).map((part,index)=>{const match=part.match(/^\[(\d+)\]$/);const source=match?fundingSources.find(s=>s.id===Number(match[1])):null;return source?<a key={index} href={source.url} aria-label={`Source ${source.id}: ${source.title}`} target="_blank" rel="noreferrer">{part}</a>:part;})}</>;}
export function FundingSourceList({ids}:{ids:number[]}){return <section className="learning-panel"><h2>Sources and scope</h2><p>Primary authorities support the factual distinctions, not our original scripts or fictional calculations. Consumer guidance is not a statement that consumer rules apply to every business transaction. The reverse-consolidation industry source establishes marketing usage only, not approval, safety or uniform legal status.</p><ul>{fundingSources.filter(s=>ids.includes(s.id)).map(s=><li key={s.id}><a href={s.url} target="_blank" rel="noreferrer">[{s.id}] {s.title}</a> · retrieved {s.accessed}</li>)}</ul></section>;}
export function FundingLesson({topicId}:{topicId:string}){return <FundingSession key={topicId} topicId={topicId}/>;}
function FundingSession({topicId}:{topicId:string}){
 const router=useRouter();const {progress,ready}=useStudy();const heading=useRef<HTMLHeadingElement>(null);
 const [draft,setDraft]=useState('');const [revealed,setRevealed]=useState(false);const [checked,setChecked]=useState<boolean[]>([false,false]);const [selected,setSelected]=useState<string|null>(null);const [finished,setFinished]=useState<null|{saved:boolean}>(null);
 const topic=fundingTopics.find(t=>t.id===topicId)!;const index=fundingTopics.indexOf(topic);const destination=lessonDestination(fundingProgram,topicId);const nextUrl=destination.url;
 const allowed=isUnlocked(fundingProgram,topicId,progress);const correct=selected===topic.answer;const canFinish=ready;
 const done=progress.subjects['business-funding']?.completed.includes(topicId);
 useEffect(()=>{heading.current?.focus();},[topicId,ready]);
 function finish(){if(!canFinish||finished?.saved)return;const saved=finished?retryStudySave():recordStudy('business-funding',topicId,destination.position);setFinished({saved});if(saved)router.push(nextUrl);}
 const choices=Number(topicId)%2?[topic.answer,topic.distractor]:[topic.distractor,topic.answer];
 return <main className="learning-page" id="main-content"><nav className="lesson-topbar" aria-label="Lesson breadcrumbs"><Link href="/subjects/business-funding">← Business Funding &amp; Sales path</Link><span>Level {Math.floor(index/10)+1} · Topic {index%10+1}/10</span></nav><article className="learning-article" id="current-learning-lesson"><p className="eyebrow">Business Funding &amp; Sales · Priority 2</p><h1 ref={heading} tabIndex={-1}>{topic.title}</h1><p className="scope-note">{fundingNotice}</p>
 {!ready?<p>Loading your saved place…</p>:!allowed?<section className="learning-panel"><h2>One step at a time</h2><p>Save the earlier readings to open this lesson. Completed lessons remain available for review.</p><SubjectProgress subject="business-funding"/></section>:<>
 <p className="lesson-objective"><strong>Objective:</strong> {topic.objective}</p>{done&&<p className="review-banner">Review mode · completion is retained and forward resume will not regress. A fresh completed interaction counts as study, not proof of mastery.</p>}
 <section className="learning-panel"><h2>Understand the idea</h2><p><Cited text={topic.explanation}/></p></section>
 <section className="learning-panel"><h2>Worked merchant example</h2><p><Cited text={topic.example}/></p></section>
 <section className="learning-panel"><h2>Optional written practice</h2><p>Use fictional practice only. Your writing stays in this page’s memory and is not saved or sent to an AI. Copy it somewhere safe if you want to keep it; leaving or refreshing clears it. Progress is saved separately when you use the next arrow.</p><label className="reflection-label" htmlFor="funding-response">{topic.prompt}</label><textarea id="funding-response" rows={7} maxLength={8000} value={draft} disabled={!!finished} onChange={e=>{setDraft(e.target.value);setRevealed(false);setChecked([false,false]);recordPosition('business-funding',topicId);}} aria-describedby="funding-writing-help"/><p id="funding-writing-help">You may open the model without writing. Comparing ideas is optional self-review, not an automated writing grade.</p><button className="secondary-action" disabled={!!finished} onClick={()=>setRevealed(true)}>Compare with the authored model</button>
 {revealed&&<div className="model-feedback"><h3>Self-review, not AI evaluation</h3><p>{topic.model}</p><p>Compare your reasoning, not exact wording. Revise any missing point, reveal the model again, then confirm both specific criteria. These confirmations record your self-review; they do not certify professional competence.</p>{topic.rubric.map((item,i)=><label key={item} className="check-row"><input type="checkbox" checked={checked[i]} disabled={!!finished} onChange={e=>setChecked(old=>old.map((v,j)=>j===i?e.target.checked:v))}/>{item}</label>)}</div>}
 </section>
 <section className="learning-panel"><h2>Optional merchant roleplay: choose a branch</h2><fieldset disabled={!!finished}><legend>{topic.question}</legend>{choices.map(choice=><label key={choice} className={`answer-choice ${selected===choice?'selected':''}`}><input type="radio" name={`funding-${topicId}`} checked={selected===choice} onChange={()=>{setSelected(choice);recordPosition('business-funding',topicId);}}/>{choice}</label>)}</fieldset>
 <div className="lesson-feedback" role="status" aria-live="polite">{selected?<><h3>{correct?'Sound branch — continue the conversation':'Unsafe or incomplete branch — revise'}</h3><p>{correct?topic.correction:`This branch adopts the error the lesson warns against: ${topic.distractor} Return to the explanation and select the defensible response. ${topic.correction}`}</p></>:<p>Choose a response for an authored consequence and specific correction.</p>}{finished?.saved===false&&<p>Could not save to browser storage; held in this session only. Retry the next arrow to save, or choose to continue without a durable save.</p>}</div>
 <p>Writing, self-review and roleplay are optional practice. Save-and-continue records reading, not a passing assessment or professional competence. Unit quizzes and cumulative level tests are separate.</p><ReadingNext disabled={!canFinish||finished?.saved===true} onClick={finish}>{destination.title}</ReadingNext>{finished?.saved===false&&<button className="secondary-action" onClick={()=>router.push(nextUrl)}>Continue without saving</button>}
 </section>{topic.sources.length>0&&<FundingSourceList ids={topic.sources}/>}</>}
 <StorageNotice/></article></main>;
}
