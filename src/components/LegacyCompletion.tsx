"use client";
import {ReadingNext} from './ReadingNext';
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {nextLegacy} from '@/lib/legacy';
import {LEGACY_KEY,recordPosition,recordStudy,retryStudySave,useStudy} from '@/lib/study-store';
import {getProgram} from '@/lib/programs';
type Props={lessonId:string;model:string;eligible?:boolean;onComplete?:()=>void;label?:string;completed?:boolean};
export function LegacyCompletion(props:Props){return <LegacySession key={props.lessonId} {...props}/>;}
function LegacySession({lessonId,model,onComplete,completed=false}:Props){
 const router=useRouter();const [done,setDone]=useState<null|boolean>(null);
 const {progress}=useStudy();const next=nextLegacy(lessonId);const topic=`legacy:${lessonId.split('/')[1]}`;const oldDone=progress.subjects[next.subject]?.completed.includes(topic);
 function finish(){if(done===true)return;
  if(!completed&&!oldDone)recordPosition(next.subject,topic);
  const saved=done===false?retryStudySave():recordStudy(next.subject,topic,next.slug?`legacy:${next.slug}`:null);
  setDone(saved);
  if(!saved)return;
  // Compatibility mirror is secondary. The shared ledger above is authoritative.
  try{const raw=localStorage.getItem(LEGACY_KEY);let old:unknown;try{old=JSON.parse(raw??'[]');}catch{old=null;}
   if(!Array.isArray(old)){if(raw)localStorage.setItem(`${LEGACY_KEY}:recovery`,raw);old=[];}
   localStorage.setItem(LEGACY_KEY,JSON.stringify([...new Set([...(old as unknown[]).filter(x=>typeof x==='string'),lessonId])]));onComplete?.();
  }catch{/* Canonical save was verified; a legacy mirror failure cannot discard it. */}
  router.push(next.url);
 }
 return <section className="learning-panel legacy-completion"><h2>Lesson summary and completion</h2>
 {(completed||oldDone)&&<p>Review mode · your previous completion and forward progress are safe.</p>}
 <div className="model-feedback"><h3>What to retain</h3><p>{model}</p></div>
 <p>Save your reading and continue when ready. All retrieval and physical practice in this extended lesson is optional; reading completion does not record a passing test or professional competence.</p>
 <ReadingNext disabled={done===true} onClick={finish}>{next.slug?`Next lesson: ${next.title}`:`Complete sequence & review ${getProgram(next.subject)?.title??next.subject}`}</ReadingNext>
 {done!==null&&<p role="status">Lesson completed. {done?'Saved in this browser.':'Storage unavailable: recorded for this session only. Retry saving or continue without a durable save.'} {next.slug?`Next: ${next.title}.`:'Extended sequence complete; return to your department.'}</p>}
 {done===false&&<button className="secondary-action" onClick={()=>router.push(next.url)}>Continue without saving</button>}
 </section>;
}
