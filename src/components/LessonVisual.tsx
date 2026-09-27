"use client";
import {useEffect,useId,useState} from 'react';
import {lessonVisuals} from '@/lib/lesson-visuals';
import styles from './LessonVisual.module.css';
export {lessonVisuals};
export function LessonVisual({id}:{id:string}){const visual=lessonVisuals[id];return visual?<VisualPlayer key={id} id={id} visual={visual}/>:null;}
function VisualPlayer({id,visual}:{id:string;visual:typeof lessonVisuals[string]}){
 const uid=useId();const [step,setStep]=useState(0);const [playing,setPlaying]=useState(false);const [reduced,setReduced]=useState(false);
 useEffect(()=>{const media=window.matchMedia?.('(prefers-reduced-motion: reduce)');if(!media)return;const update=()=>{setReduced(media.matches);if(media.matches)setPlaying(false);};update();media.addEventListener?.('change',update);return()=>media.removeEventListener?.('change',update);},[]);
 useEffect(()=>{if(!playing||reduced)return;const timer=setTimeout(()=>{if(step>=visual.steps.length-1)setPlaying(false);else setStep(step+1);},4500);return()=>clearTimeout(timer);},[playing,reduced,step,visual.steps.length]);
 const active=(n:number)=>n<=step?styles.revealed:styles.pending;
 return <section className={`learning-panel ${styles.visual}`} aria-label="Visual demonstration"><h2>{visual.title}</h2><p>Original topic illustration · Animated diagram, not a video. Silent, with written descriptions of every step.</p>
 <svg className={styles.canvas} viewBox="0 0 640 330" role="img" aria-labelledby={`${uid}-title`} aria-describedby={`${uid}-description`}><title id={`${uid}-title`}>{visual.title}</title><desc id={`${uid}-description`}>{visual.description}</desc>
 {id==='russian/01'&&<><text x="85" y="170" className={styles.letter}>А</text><text x="52" y="230">Cyrillic symbol</text><g className={active(1)}><path d="M210 160 H295 M280 148 L295 160 L280 172"/><ellipse cx="360" cy="150" rx="35" ry="48"/><text x="300" y="230">Open vowel</text></g><g className={active(2)}><path d="M435 150 Q445 105 455 150 T475 150 T495 150 T515 150 T535 150"/><text x="458" y="230">AH</text></g><text x="80" y="290">Keep the vowel steady — not English AY.</text></>}
 {id==='russian/02'&&<><text x="65" y="145" className={styles.letter}>В</text><text x="60" y="205">Cyrillic</text><g className={active(1)}><path d="M180 130 H265 M250 118 L265 130 L250 142"/><text x="315" y="150" className={styles.letter}>V</text><path d="M410 105 H505 V135 H410 Z M408 155 Q455 123 510 161 M510 150 H560 M547 139 L560 150 L547 161"/><text x="400" y="208">Teeth + lower lip</text></g><g className={active(2)}><text x="65" y="280">Not B: do not close both lips.</text><path d="M60 295 H575"/></g></>}
 {id==='philosophy/01'&&<><rect x="35" y="35" width="565" height="265" rx="22"/><text x="60" y="75">Things that breathe</text><rect x="95" y="98" width="445" height="180" rx="25"/><text x="120" y="135">Mammals</text><g className={active(1)}><ellipse cx="315" cy="205" rx="120" ry="48"/><text x="278" y="214">Whales</text></g><g className={active(2)}><path d="M450 205 H570 V80 M559 93 L570 80 L581 93"/><text x="122" y="260">Inside both categories</text></g></>}
 {id==='philosophy/02'&&<><rect x="50" y="55" width="100" height="100"/><text x="40" y="193">Square</text><path d="M180 105 H285 M273 93 L285 105 L273 117"/><text x="308" y="115">Four-sided</text><g className={active(1)}><rect x="365" y="165" width="210" height="85"/><text x="380" y="290">Not a square</text></g><g className={active(2)}><text x="48" y="270">The reverse fails.</text><path d="M48 286 H255"/></g></>}
 </svg>
 <p className={styles.caption} aria-live="polite"><strong>Step {step+1} of {visual.steps.length}.</strong> {visual.steps[step]}</p>
 <div className={styles.controls}><button onClick={()=>{setPlaying(false);setStep(step-1);}} disabled={step===0}>Previous step</button><button onClick={()=>{setPlaying(false);setStep(step+1);}} disabled={step===visual.steps.length-1}>Next step</button><button disabled={reduced} onClick={()=>{if(step===visual.steps.length-1)setStep(0);setPlaying(!playing);}}>{playing?'Pause demonstration':'Play demonstration'}</button></div>
 {reduced&&<p>Reduced motion is on. Use the step buttons for the complete static explanation.</p>}
 <details><summary>Read all steps without animation</summary><ol>{visual.steps.map(s=><li key={s}>{s}</li>)}</ol></details>
 </section>;
}
