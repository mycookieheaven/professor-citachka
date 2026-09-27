"use client";
import {useEffect,useRef,useState,type CSSProperties} from 'react';
import {useStudy} from '@/lib/study-store';
/** Presentation only: observes the shared ledger; never writes or unlocks anything. */
export function StudyCelebration(){
 const {progress,ready,unavailable}=useStudy();
 const previous=useRef<{interactions:number;completed:number;assessments:number;passed:number}|null>(null);
 const timer=useRef<ReturnType<typeof setTimeout>|null>(null);
 const [message,setMessage]=useState('');
 const [burst,setBurst]=useState(false);
 const interactions=Object.values(progress.subjects).reduce((sum,s)=>sum+s.interactions,0);
 const completed=Object.values(progress.subjects).reduce((sum,s)=>sum+s.completed.length,0);
 const attempts=Object.values(progress.subjects).flatMap(s=>Object.values(s.assessments??{}).flat());
 const assessments=attempts.length;
 const passed=attempts.filter(a=>a.passed).length;
 useEffect(()=>{
  if(!ready)return;
  const before=previous.current;
  if(unavailable&&before)return;
  previous.current={interactions,completed,assessments,passed};
  if(before&&!unavailable&&interactions>before.interactions){
   const assessed=assessments>before.assessments;
   setBurst(!assessed||passed>before.passed);
   setMessage(assessed?(passed>before.passed?'Assessment passed. Result saved.':'Assessment saved. Your feedback is ready.'):completed>before.completed?'Progress saved. One more step forward.':'Review saved. Keeping the idea fresh.');
   if(timer.current)clearTimeout(timer.current);
   timer.current=setTimeout(()=>setMessage(''),2400);
  }
 },[ready,unavailable,interactions,completed,assessments,passed]);
 useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current);},[]);
 return <div className="study-celebration-region" role="status" aria-live="polite" aria-atomic="true">{message&&<div className="study-celebration"><span className="celebration-emblem" aria-hidden="true">✦</span><span>{message}</span>{burst&&<div className="celebration-petals" aria-hidden="true">{Array.from({length:12},(_,i)=><i className="celebration-petal" key={i} style={{'--petal-x':`${(i%6-2.5)*28}px`,'--petal-y':`${-45-(i%4)*18}px`,'--petal-turn':`${i*57}deg`,'--petal-delay':`${i*25}ms`} as CSSProperties}/>)}</div>}</div>}</div>;
}
