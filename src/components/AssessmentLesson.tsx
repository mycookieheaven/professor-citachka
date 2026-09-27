"use client";
import Link from 'next/link';
import {useEffect,useRef,useState} from 'react';
import {useRouter} from 'next/navigation';
import {allTopics,type Program,topicHref} from '@/lib/programs';
import {assessmentDestination,courseAssessments,PASS_PERCENT} from '@/lib/assessments';
import {recordAssessment,recordAssessmentPosition,retryStudySave,useStudy} from '@/lib/study-store';
import type {AssessmentAttempt} from '@/lib/progress';
import {StorageNotice} from './Learning';
import {PronunciationControls} from './PronunciationControls';
export function AssessmentLesson({program,assessmentId}:{program:Program;assessmentId:string}){return <AssessmentSession key={`${program.id}/${assessmentId}`} program={program} assessmentId={assessmentId}/>;}
function AssessmentSession({program,assessmentId}:{program:Program;assessmentId:string}){
 const router=useRouter();const {progress,ready}=useStudy();const heading=useRef<HTMLHeadingElement>(null);
 const assessment=courseAssessments(program).find(a=>a.id===assessmentId)!;const next=assessmentDestination(program,assessment);
 const [answers,setAnswers]=useState<Record<string,string>>({});const [result,setResult]=useState<AssessmentAttempt|null>(null);const [saveError,setSaveError]=useState(false);
 const [consent,setConsent]=useState(false);
 const history=progress.subjects[program.id]?.assessments?.[assessmentId]??[];const latest=history.at(-1);const everPassed=history.some(a=>a.passed);
 useEffect(()=>{heading.current?.focus();},[assessmentId]);
 function submit(){if(result||assessment.questions.some(q=>!answers[q.id]))return;const attempt=recordAssessment(program.id,assessment,answers);setResult(attempt.result);setSaveError(!attempt.saved);}
 function continueReading(){const saved=recordAssessmentPosition(program.id,assessmentId,next.position);setSaveError(!saved);if(saved)router.push(next.url);}
 if(program.levels[assessment.levelIndex].supplemental&&!consent)return <main className="learning-page" id="main-content"><section className="learning-panel"><h1>Optional strong-language assessment</h1><p>Explicit adult Russian vocabulary and hostile expressions. Nothing plays automatically. You may skip this supplemental sequence without affecting the main course.</p><button className="primary-action" onClick={()=>setConsent(true)}>Enter strong-language assessment</button><Link href="/subjects/russian">Return to Russian</Link></section></main>;
 return <main className="learning-page" id="main-content"><nav className="lesson-topbar" aria-label="Assessment breadcrumbs"><Link href={`/subjects/${program.id}#course-path`}>← {program.title} course path</Link><span>Level {assessment.levelIndex+1} · {assessment.kind==='unit'?'Unit-end quiz':'Cumulative level test'}</span></nav><article className="learning-article"><h1 ref={heading} tabIndex={-1}>{assessment.title}</h1>
 <section className="learning-panel"><h2>Check understanding, separately from reading</h2><p>{assessment.questions.length} questions · {PASS_PERCENT}% to pass · no timer. {assessment.kind==='level'?'This longer test revisits both units in the level.':'This quiz checks the lessons in this unit.'} These authored questions assess recognition and application of the taught distinctions, not professional qualification. You may review the lessons and retry. Repeat attempts reuse the question bank; a remembered answer is not proof of transfer to a new situation.</p><p>Saving a lesson records reading only. Previous lesson completions have not been converted into passing scores. You can continue reading without a pass; the assessment remains unpassed.</p>
 {!!history.length&&<p>Previous attempts: {history.length}. Latest: {latest?.correct} / {latest?.total} — {latest?.passed?'passed':'not yet passed'}. {everPassed?'At least one recorded pass.':'No recorded pass.'}</p>}
 </section>
 {assessment.questions.map((q,index)=>{const choices=index%2?[q.distractor,q.answer]:[q.answer,q.distractor];const right=result?.answers[q.id]===q.answer;return <section className="learning-panel" key={q.id}><h2>Question {index+1}</h2><p>{q.example}</p>{q.russian&&<div className="russian-item"><p><strong lang="ru">{q.russian.text}</strong> ({q.russian.latin}) — {q.russian.meaning}</p><PronunciationControls russian={q.russian.text} latin={q.russian.latin}/></div>}<fieldset disabled={!!result||!ready}><legend>{q.question}</legend>{choices.map(choice=><label className="answer-choice" key={choice}><input type="radio" name={`assessment-${q.id}`} checked={answers[q.id]===choice} onChange={()=>setAnswers(old=>({...old,[q.id]:choice}))}/>{choice}</label>)}</fieldset>
 {result&&<div className="model-feedback"><h3>{right?'Correct distinction':'Review this distinction'}</h3><p><strong>Your answer:</strong> {result.answers[q.id]}</p><p>{right?q.correction:`The selected claim “${q.distractor}” does not establish the required distinction. ${q.correction}`}</p><p><strong>Supported answer:</strong> {q.answer}</p>{(q.reviewLessonIds??[q.id]).map(id=><p key={id}><Link href={topicHref(program.id,id)}>Review lesson: {allTopics(program).find(t=>t.id===id)?.title??q.title} →</Link></p>)}</div>}
 </section>;})}
 <section className="learning-panel"><button className="primary-action" disabled={!ready||!!result||assessment.questions.some(q=>!answers[q.id])} onClick={submit}>Score this attempt</button>
 <div role="status" aria-live="polite">{result&&<p><strong>{result.correct} / {result.total} · {result.passed?'Passed':'Not yet passed'}</strong>. {saveError?'Not durably saved; held for this tab only.':'Attempt saved in this browser.'} {result.passed?'Keep using the ideas in new situations.':'Review the feedback and the linked lessons before retrying.'}</p>}{saveError&&<p>Browser storage could not be verified. Retry saving or explicitly continue without saving; refreshing may lose this attempt.</p>}</div>
 {result&&<button className="secondary-action" onClick={()=>{setAnswers({});setResult(null);heading.current?.focus();}}>Retry with a fresh attempt</button>}
 {saveError&&<button className="secondary-action" onClick={()=>setSaveError(!retryStudySave())}>Retry saving</button>}
 <button className="primary-action" disabled={!ready} onClick={continueReading}>→ {next.title}</button><p>{result?.passed?'Your reading path and score remain separate.':'Continuing does not mark this assessment passed.'}</p>
 {saveError&&<button className="secondary-action" onClick={()=>router.push(next.url)}>Continue without saving</button>}
 </section><StorageNotice/></article></main>;
}
