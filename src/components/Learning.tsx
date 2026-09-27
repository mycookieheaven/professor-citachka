"use client";
import {ReadingNext} from './ReadingNext';
import Link from 'next/link';
import {useEffect,useRef,useState} from 'react';
import {useRouter} from 'next/navigation';
import {allTopics,getProgram,requestedUnits,topicHref,type Program} from '@/lib/programs';
import {resumeTopic,subjectStats,type Progress} from '@/lib/progress';
import {recordPosition,recordStudy,retryStudySave,useStudy} from '@/lib/study-store';
import {PronunciationControls} from './PronunciationControls';
import {UnitPath} from './UnitPath';
import {legacyPaths,legacyTitle} from '@/lib/legacy';
import {assessmentHref,courseAssessments,courseUnits,lessonDestination} from '@/lib/assessments';
import {lessonDepth} from '@/lib/lesson-depth';
import {LessonVisual} from './LessonVisual';
import {InstructionalVideo} from './InstructionalVideo';
import {lessonVideoIds} from '@/lib/instructional-videos';

export function StorageNotice(){const {unavailable,corrupt}=useStudy();return <p className="storage-note">{unavailable?'Storage is unavailable. Progress is held for this tab’s session only; it may disappear on refresh.':corrupt?'Some saved data could not be read. Readable progress is retained; damaged progress is backed up before your next saved interaction.':'Progress stays in this browser, on this device—not an account or cloud backup. Clearing browser data removes it. Visits never count as study.'} Previous untimed legacy completions are not invented as study days.</p>;}
export function SubjectProgress({subject,compact=false}:{subject:string;compact?:boolean}){
 const {progress,ready}=useStudy();const p=getProgram(subject);if(!p)return null;
 const topics=allTopics(p);const ids=topics.map(t=>t.id);const stats=subjectStats(progress,subject,ids,new Date());
 const nextId=resumeTopic(progress,subject,ids);const next=topics.find(t=>t.id===nextId);
 const level=next?p.levels.findIndex(l=>l.topics.some(t=>t.id===next.id))+1:2;
 const position=progress.subjects[subject]?.position;
 const assessments=courseAssessments(p);const assessmentResume=position?.startsWith('assessment:')?assessments.find(a=>a.id===position.slice(11)):null;
 const attempts=progress.subjects[subject]?.assessments??{};const passed=assessments.filter(a=>attempts[a.id]?.some(attempt=>attempt.passed)).length;
 const legacySlug=position?.startsWith("legacy:")?position.slice(7):null;
 const legacyDone=progress.subjects[subject]?.completed.filter(id=>id.startsWith('legacy:'))??[];
 const legacyResume=legacySlug&&legacyPaths[subject]?.includes(legacySlug)&&!legacyDone.includes(`legacy:${legacySlug}`)?legacySlug:legacyDone.length?legacyPaths[subject]?.find(slug=>!legacyDone.includes(`legacy:${slug}`)):null;
 const guideSlug=subject==="literature"&&position?.startsWith("guide:")&&["jane-eyre","pride-and-prejudice","frankenstein","the-great-gatsby"].includes(position.slice(6))?position.slice(6):null;
 return <div className={`subject-progress-card ${compact?'compact':''}`} aria-label={`${p.title} progress`}>
  <div className="progress-label"><strong>{ready?`${stats.completed} / ${ids.length} topics read`:'Loading saved progress…'}</strong><span>{Math.round(stats.completed/ids.length*100)}%</span></div>
  <progress aria-label={`${p.title} completion`} max={ids.length} value={stats.completed}/>
  <p className="standing">{stats.today?<><span aria-hidden="true">☺</span> Good standing · studied today</>:stats.days?'Welcome back · a little review is enough to resume.':'A fresh start · one small lesson is enough.'}</p>
  <p className="study-counts">{stats.interactions} study interactions · {stats.days} distinct days · {stats.streak}-day streak · {stats.week}/7 recent days</p>
  <p>{passed} / {assessments.length} assessments passed · reading is not assessed proficiency.</p>
  {assessmentResume&&<Link className="resume-link" href={assessmentHref(subject,assessmentResume.id)}>Continue assessment: {assessmentResume.title} →</Link>}
  {guideSlug&&<Link className="resume-link extended-resume" href={`/subjects/literature#${guideSlug}`}>Continue Literature reading guide: {guideSlug.replaceAll("-"," ")} →</Link>}
  {!!legacyDone.length&&<p>Extended lessons: {legacyDone.length} / {legacyPaths[subject]?.length} complete</p>}
  {legacyResume&&<Link className="resume-link extended-resume" href={`/subjects/${subject}/${legacyResume}`}>Continue extended {p.title}: {legacyTitle(subject,legacyResume)} →</Link>}
  {!!legacyDone.length&&!legacyResume&&<Link className="resume-link extended-resume" href={`/subjects/${subject}`}>Extended {p.title} complete · review lessons →</Link>}
  {!assessmentResume&&<Link className="resume-link" href={next?topicHref(subject,next.id):`/subjects/${subject}#course-path`}>
   {next?`Continue ${p.title}: ${next.title}`:`${p.title} published path complete · review any topic`}<span aria-hidden="true"> →</span>
  </Link>}
  {next&&!assessmentResume&&<p className="resume-detail">{subject==='russian'&&level===3?'Optional strong-language unit · explicit content':`Level ${level} · Topic ${((Number(next.id)-1)%10)+1} of 10`} · {progress.subjects[subject]?.position===next.id?'In progress · pick up here':'Your next unfinished lesson'}</p>}
 </div>;
}
export function isUnlocked(program:Program,topicId:string,progress:Progress){
 const level=program.levels.find(l=>l.topics.some(t=>t.id===topicId));if(!level)return false;
 const done=progress.subjects[program.id]?.completed??[];if(done.includes(topicId))return true;
 const sequence=level.supplemental?level.topics:program.levels.filter(l=>!l.supplemental).flatMap(l=>l.topics);
 const index=sequence.findIndex(t=>t.id===topicId);return index>=0&&sequence.slice(0,index).every(t=>done.includes(t.id));
}
export function ProgramPath({subject}:{subject:string}){
 const {progress}=useStudy();const p=getProgram(subject);if(!p)return null;
 const nextId=resumeTopic(progress,subject,allTopics(p).map(t=>t.id));
 return <section className="program-path duolingo-inspired-path" id="course-path" aria-label={`${p.title} interactive learning path`}>
  <p className="eyebrow">A clear route, built for real understanding</p><h2>Your guided study path</h2><p>Move through <strong>sections → levels → units → lessons</strong>. Each lesson is deliberately longer than a drill: it explains the idea, works through an example, gives you optional retrieval practice, and then saves your reading. Unit quizzes and level assessments come after the teaching—not every two minutes, because we are building knowledge, not training a very anxious button-pusher.</p>
  <UnitPath subject={subject}/>
  <SubjectProgress subject={subject}/>
  <p className="scope-note">Expanded instructional sections: {allTopics(p).filter(t=>t.depth||lessonDepth[`${subject}/${t.id}`]).length} / {allTopics(p).length} published course lessons. Original explanations elsewhere remain available but are not counted as expanded. Earlier assessment banks reuse lesson questions; appended course levels have separately authored application questions and longer cumulative tests. Extended lessons and book guides retain separate reading sequences; their own multi-unit assessment maps are not yet authored.</p>
  <p className="scope-note"><strong>Published now: {courseUnits(p).filter(unit=>!p.levels[unit.levelIndex].supplemental).length} of {requestedUnits()} requested core units.</strong> These are grouped into {p.levels.filter(level=>!level.supplemental).length} published core levels, not the full requested curriculum or a professional qualification.{subject==='russian'?' Also available: one optional ten-topic strong-language sequence in two units, counted separately; these course levels are not CEFR certification.':''} The remaining units are not published, not hidden behind a paywall or presented as completed work.</p>
  {p.levels.map((level,i)=>{const units=courseUnits(p).filter(unit=>unit.levelIndex===i);const complete=level.topics.filter(t=>progress.subjects[subject]?.completed.includes(t.id)).length;const open=i===0||level.topics.some(t=>t.id===nextId);const section=i===0?'Foundation':i===1?'Development':level.supplemental?'Optional practice':'Integration';return <details key={level.title} className="path-section" open={open}>
   <summary><span className="level-orb" aria-hidden="true">{level.supplemental?'＋':i+1}</span><span><span className="path-section-label">{level.supplemental?'Optional sequence':`Section ${i+1} · ${section}`}</span><strong>{level.title}</strong><span>{complete}/{level.topics.length} lessons read · {units.length} units</span></span></summary>
   <div className="path-section-content">
   {level.supplemental&&<p className="content-warning">Explicit adult language: actual Russian profanity, idiomatic insults and social register. No audio autoplays. Open a lesson to choose whether to enter; you can skip this sequence without losing the main course.</p>}
   {units.map(unit=><section key={unit.id} className="pathway-unit"><header><p className="eyebrow">Level {i+1} · Unit {unit.unitIndex+1}</p><h3>{unit.title}</h3><details className="unit-guidebook"><summary>Unit guidebook</summary><p>Before you begin, this unit teaches {unit.topics.map(t=>t.title).join(', ')}. The lessons introduce ideas in order, then the unit quiz asks you to retrieve and apply them. You may revisit completed lessons whenever you wish.</p></details></header><ol className="lesson-node-list">{unit.topics.map((t,j)=>{
    const done=progress.subjects[subject]?.completed.includes(t.id);const available=isUnlocked(p,t.id,progress);
    return <li key={t.id} className={done?'path-done':available?'path-current':'path-locked'}><span className="topic-orb" aria-hidden="true">{done?'✓':j+1}</span><div><p>Lesson {j+1}</p><strong>{t.title}</strong>{available?<Link href={topicHref(subject,t.id)}>{done?'Review lesson':'Start lesson'} →</Link>:<span>Save the previous lesson to continue</span>}</div></li>;
   })}</ol><footer className="unit-end"><Link href={topicHref(subject,unit.topics[0].id)}>Review</Link><AssessmentPathLink subject={subject} id={unit.id} title={`Unit ${unit.unitIndex+1} quiz`} count={(unit.questions??unit.topics).length}/></footer></section>)}
   <div className="level-assessment"><p>Level {i+1} assessment</p><AssessmentPathLink subject={subject} id={`level-${i+1}`} title={`Cumulative assessment: ${level.title}`} count={(level.assessmentQuestions??level.topics).length}/></div>
   </div>
  </details>;})}
  <StorageNotice/>
 </section>;
}
function AssessmentPathLink({subject,id,title,count}:{subject:string;id:string;title:string;count:number}){const {progress}=useStudy();const attempts=progress.subjects[subject]?.assessments?.[id]??[];const latest=attempts.at(-1);return <div className="model-feedback"><Link href={assessmentHref(subject,id)}>{title} →</Link><p>{count} questions · {latest?`Latest ${latest.correct}/${latest.total}: ${latest.passed?'passed':'not yet passed'}`:'Not assessed'}{attempts.some(a=>a.passed)?' · A passing attempt is recorded.':''}</p></div>;}
export function LearningLesson({program,topicId}:{program:Program;topicId:string}){
 return <LessonSession key={`${program.id}/${topicId}`} program={program} topicId={topicId}/>;
}
function LessonSession({program,topicId}:{program:Program;topicId:string}){
 const router=useRouter();const {progress,ready}=useStudy();
 const [selected,setSelected]=useState<string|null>(null);const [practiced,setPracticed]=useState(false);const [consent,setConsent]=useState(false);
 const [finished,setFinished]=useState<null|{saved:boolean}>(null);
 const heading=useRef<HTMLHeadingElement>(null);
 const topics=allTopics(program);const topic=topics.find(t=>t.id===topicId)!;
 const depth=topic.depth??lessonDepth[`${program.id}/${topicId}`];
 const level=program.levels.find(l=>l.topics.some(t=>t.id===topicId))!;
 const sequence=level.supplemental?level.topics:program.levels.filter(l=>!l.supplemental).flatMap(l=>l.topics);
 const sequenceIndex=sequence.findIndex(t=>t.id===topicId);
 const destination=lessonDestination(program,topicId);const nextUrl=destination.url;
 const allowed=isUnlocked(program,topicId,progress);const done=progress.subjects[program.id]?.completed.includes(topicId);
 const correct=selected===topic.answer;const canFinish=ready;
 useEffect(()=>{heading.current?.focus();},[topicId,ready,consent]);
 const finish=()=>{if(!canFinish||finished?.saved)return;const saved=finished?retryStudySave():recordStudy(program.id,topicId,destination.position);setFinished({saved});if(saved)router.push(nextUrl);};
 const choices=Number(topicId)%2===0?[topic.distractor,topic.answer]:[topic.answer,topic.distractor];
 return <main className="learning-page" id="main-content">
  <nav className="lesson-topbar" aria-label="Lesson breadcrumbs"><Link href={`/subjects/${program.id}`}>← {program.title} path</Link><span>{level.supplemental?'Optional strong-language unit':`Level ${program.levels.indexOf(level)+1}`} · Topic {(sequenceIndex%10)+1}/10</span></nav>
  <article className="learning-article" id="current-learning-lesson">
   <p className="eyebrow">{program.title} · {level.title}</p><h1 ref={heading} tabIndex={-1}>{topic.title}</h1>
   {!ready?<p>Loading your saved place…</p>:!allowed?<div className="learning-panel"><h2>One step at a time</h2><p>Save earlier readings to open this lesson. Reviews of completed topics are always available.</p><SubjectProgress subject={program.id}/></div>:level.supplemental&&!consent?<div className="learning-panel content-warning"><h2>Explicit language ahead</h2><p>This optional unit teaches real profanity and insults, from mild frustration to very obscene Russian mat. Examples are fictional, not messages to send to a real person. Intensity ratings are approximate and depend on audience, relationship and tone. It excludes identity slurs and threats. No sound plays automatically.</p><button className="primary-action" onClick={()=>setConsent(true)}>Enter strong-language lesson</button><Link className="secondary-action" href="/subjects/russian">Skip this unit</Link></div>:<>
    <p className="lesson-objective"><strong>Objective:</strong> Explain {topic.title.toLowerCase()} and apply the distinction in the practice below. Take as much time as needed; there is no lesson timer or required answer.</p>
    {done&&!finished&&<p className="review-banner">Review mode · your previous completion is safe. Saving a fresh reading adds a study interaction, not a duplicate topic or a test result.</p>}
    <section className="learning-panel"><h2>Understand the idea</h2><p>{topic.explanation}</p>
     {topic.russian&&<div className="russian-item"><p><strong lang="ru">{topic.russian.text}</strong> <span>({topic.russian.latin}) — {topic.russian.meaning}</span></p><PronunciationControls russian={topic.russian.text} latin={topic.russian.latin}/><p className="audio-note">Browser-generated pronunciation, not a human recording. A Russian voice must be available on your device; Latin guidance is approximate. Slow playback can sound less natural.</p></div>}
    </section>
    {!!topic.russianItems?.length&&<section className="learning-panel"><h2>Words and phrases with pronunciation</h2>{topic.russianItems.map(item=><div key={item.text} className="russian-item"><p><strong lang="ru">{item.text}</strong> ({item.latin}) — {item.meaning}</p><PronunciationControls russian={item.text} latin={item.latin}/></div>)}<p className="audio-note">Device-generated Russian pronunciation, not a human recording. Latin guidance is approximate; your device needs a Russian voice. Audio never starts automatically.</p></section>}
    <LessonVisual id={`${program.id}/${topicId}`}/>
    {topic.visual&&<figure className="learning-panel" aria-label={topic.visual.title}><h2>{topic.visual.title}</h2><figcaption>{topic.visual.description}</figcaption><p>Visual study sequence · labeled text steps, not a video or a recorded demonstration.</p><ol className="topic-path">{topic.visual.steps.map((step,index)=><li key={index}><strong>Step {index+1}.</strong> {step}</li>)}</ol></figure>}
    {lessonVideoIds[`${program.id}/${topicId}`]&&<InstructionalVideo videoId={lessonVideoIds[`${program.id}/${topicId}`]}/>}
    {depth&&<><section className="learning-panel"><h2>Terms to know</h2><p>{depth.definitions}</p></section><section className="learning-panel lesson-depth"><h2>Deeper explanation</h2><p>{depth.mechanism}</p></section></>}
    <section className="learning-panel"><h2>Worked example</h2><p>{topic.example}</p></section>
    {depth&&<><section className="learning-panel"><h2>A second worked example</h2><p>{depth.secondExample}</p></section><section className="learning-panel"><h2>How to apply it</h2><p>{depth.application}</p></section></>}
    <section className="learning-panel lesson-depth"><h2>Common mistake</h2><p>{depth?.mistake??topic.correction}</p></section>
    {depth&&<section className="learning-panel"><h2>What to retain</h2><p>{depth.summary}</p></section>}
    {!!topic.readings?.length&&<section className="learning-panel"><h2>Readings and evidence</h2><p>Use these sources to inspect the reasoning. The worked scenarios and practice tasks are original teaching examples, not quotations from the sources.</p><ul>{topic.readings.map(reading=><li key={reading.url+reading.title}><a href={reading.url} target="_blank" rel="noreferrer">{reading.title}</a><p>{reading.note}</p></li>)}</ul></section>}
    {topic.practice&&<section className="learning-panel"><h2>Optional physical micropractice</h2><p>{topic.practice}</p><label className="check-row"><input type="checkbox" checked={practiced} onChange={e=>setPracticed(e.target.checked)} disabled={!!finished}/> I tried the physical practice at a comfortable pace.</label></section>}
    <section className="learning-panel"><h2>Optional retrieval practice</h2><fieldset disabled={!!finished}><legend>{topic.question}</legend>{choices.map(choice=><label key={choice} className={`answer-choice ${selected===choice?'selected':''}`}><input type="radio" name={`answer-${topicId}`} checked={selected===choice} onChange={()=>{setSelected(choice);recordPosition(program.id,topicId);}}/>{choice}</label>)}</fieldset>
     {correct&&<div className="model-feedback"><h3>Why this is correct</h3><p><strong>{topic.answer}.</strong> {topic.correction}</p></div>}
     <div className={`lesson-feedback ${finished?'celebrate':''}`} role="status" aria-live="polite">{finished?<><h3>{'Reading recorded.'}</h3><p>{finished.saved?'Saved in this browser.':'Could not save to browser storage; held in this session only. Retry saving, or continue without a durable save.'} {`Next: ${destination.title.replace('Next lesson: ','')}`}</p></>:selected?correct?<p>Correct. Review the explanation above, then continue when ready.</p>:<p>Not quite. {topic.correction} Review the explanation and try again if useful; this practice does not block reading.</p>:<p>Choose an answer to receive specific feedback. Nothing is completed by simply opening this page.</p>}</div>
     <p>Save-and-continue records this reading, not a passing assessment. The practice above is optional.</p><ReadingNext disabled={!canFinish||finished?.saved===true} onClick={finish}>{destination.title}</ReadingNext>
     {finished?.saved===false&&<button className="secondary-action" onClick={()=>router.push(nextUrl)}>Continue without saving</button>}
    </section>
    {level.supplemental&&<section className="learning-panel"><h2>Language and register sources</h2><p>Meanings and grammatical forms were checked against Wiktionary entries; the teaching examples and intensity scale are original contextual guidance, not an official scale.</p><div className="source-links">{['блин','дурак','заткнись','отвали','на хуй','блядь','пиздец','заебать'].map(word=><a key={word} href={`https://en.wiktionary.org/wiki/${encodeURIComponent(word)}`} target="_blank" rel="noreferrer">Dictionary source {['блин','дурак','заткнись','отвали','на хуй','блядь','пиздец','заебать'].indexOf(word)+1} ↗</a>)}</div></section>}
   </>}
   <StorageNotice/>
  </article>
 </main>;
}
