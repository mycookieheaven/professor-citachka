"use client";
import {useEffect,useRef,useState} from 'react';
import {createPortal} from 'react-dom';
import {usePathname} from 'next/navigation';
type Props={targetId?:string;targetSelector?:string};
function chunks(target:HTMLElement){
 const result:{text:string;lang:string}[]=[];const walk=document.createTreeWalker(target,NodeFilter.SHOW_TEXT);
 while(walk.nextNode()){
  const node=walk.currentNode;const parent=node.parentElement;
  if(!parent||parent.closest('[data-skip-read-aloud],.read-aloud-controls,form,fieldset,button,input,select,textarea,nav,iframe,script,style,svg,[hidden]'))continue;
  if(!parent.closest('h1,h2,h3,h4,p,li,blockquote,td,th'))continue;
  const text=(node.textContent??'').replace(/https?:\/\/\S+/g,'').replace(/\s+/g,' ').trim();if(!text)continue;
  for(const part of text.match(/[А-Яа-яЁё\u0301]+(?:[\s,!.?—-]+[А-Яа-яЁё\u0301]+)*|[^А-Яа-яЁё\u0301]+/g)??[]){if(!part.trim())continue;result.push({text:part.trim(),lang:/[А-Яа-яЁё]/.test(part)?'ru-RU':'en-US'});}
 }
 return result;
}
export function ReadAloudControls({targetId,targetSelector}:Props){const pathname=usePathname();return <Narration key={`${pathname}:${targetId??''}`} pathname={pathname} targetId={targetId} targetSelector={targetSelector}/>;}
function Narration({targetId,targetSelector,pathname}:Props&{pathname:string}){
 const [state,setState]=useState<'idle'|'reading'|'paused'>('idle');const [notice,setNotice]=useState('');const [rate,setRate]=useState(0.92);const [voiceCount,setVoiceCount]=useState<number|null>(null);const [settingsOpen,setSettingsOpen]=useState(false);const [host,setHost]=useState<HTMLElement|null>(null);const utterances=useRef<SpeechSynthesisUtterance[]>([]);const active=useRef(false);
 const available=Boolean(targetId)||/^\/learn\//.test(pathname)||/^\/subjects\/[^/]+\/[^/]+/.test(pathname);
 useEffect(()=>{const frame=requestAnimationFrame(()=>setHost(document.querySelector<HTMLElement>('main .lesson-topbar')));return()=>cancelAnimationFrame(frame);},[pathname]);
 useEffect(()=>{const speech=window.speechSynthesis;if(!speech)return;const changed=()=>setVoiceCount(speech.getVoices().length);changed();speech.addEventListener?.('voiceschanged',changed);return()=>{active.current=false;speech.cancel();speech.removeEventListener?.('voiceschanged',changed);};},[]);
 function start(){const speech=window.speechSynthesis;if(!speech||typeof SpeechSynthesisUtterance==='undefined'){setNotice('Read-aloud is unavailable in this browser.');return;}
  const target=document.querySelector<HTMLElement>(targetId?`#${targetId}`:targetSelector??'.learning-article,.lesson-article');if(!target){setNotice('The lesson text is not available yet.');return;}const parts=chunks(target);if(!parts.length){setNotice('No readable lesson text was found.');return;}
  const voices=speech.getVoices();if(parts.some(p=>!voices.some(v=>v.lang.toLowerCase().startsWith(p.lang.slice(0,2))))){setNotice('A required English or Russian device voice is not available yet. Enable the matching voice in device settings, then try again.');return;}
  active.current=false;speech.cancel();active.current=true;utterances.current=parts.map((p,i)=>{const u=new SpeechSynthesisUtterance(p.text);u.lang=p.lang;u.rate=rate;u.voice=voices.find(v=>v.lang.toLowerCase().startsWith(p.lang.slice(0,2)))??null;u.onerror=()=>{if(active.current){active.current=false;speech.cancel();setState('idle');setNotice('The browser could not play this section.');}};if(i===parts.length-1)u.onend=()=>{if(active.current){active.current=false;setState('idle');}};return u;});setNotice('');setState('reading');utterances.current.forEach(u=>speech.speak(u));
 }
 if(!available)return null;
 const controls=<aside className="read-aloud-controls" aria-label="Lesson read-aloud controls" data-skip-read-aloud>
   {state==='idle'?<button type="button" onClick={start}><span aria-hidden="true">▶</span> Listen</button>:state==='reading'?<button type="button" onClick={()=>{window.speechSynthesis.pause();setState('paused');}}>Pause</button>:<button type="button" onClick={()=>{window.speechSynthesis.resume();setState('reading');}}>Resume</button>}
   {state!=='idle'&&<button type="button" onClick={()=>{active.current=false;window.speechSynthesis.cancel();utterances.current=[];setState('idle');}}>Stop</button>}
   <button type="button" className="audio-settings-toggle" aria-expanded={settingsOpen} onClick={()=>setSettingsOpen(!settingsOpen)}>Audio settings</button>
   {settingsOpen&&<label>Reading speed <select aria-label="Reading speed" value={rate} disabled={state!=='idle'} onChange={e=>setRate(Number(e.target.value))}>{[0.7,0.8,0.92,1,1.2,1.5].map(v=><option key={v} value={v}>{v}×</option>)}</select></label>}
   {voiceCount===0&&!notice&&<p role="status">No device voices are available.</p>}{notice&&<p role="status">{notice}</p>}
  </aside>;
 return host?createPortal(controls,host):controls;
}
