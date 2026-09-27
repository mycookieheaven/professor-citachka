"use client";
import {useEffect,useState} from 'react';
import {FocusSession} from './FocusSession';
const KEY='citachka-atmosphere-v1';
type Preferences={motion:'lively'|'calm';focus:boolean};
export function StudyAtmosphere(){
 const [preferences,setPreferences]=useState<Preferences>({motion:'calm',focus:false});
 const [reduced,setReduced]=useState(false);
 const [unavailable,setUnavailable]=useState(false);

 useEffect(()=>{
  function restore(){let next:Preferences={motion:'lively',focus:false};try{const value=JSON.parse(localStorage.getItem(KEY)??'null');if(value&&(value.motion==='lively'||value.motion==='calm')&&typeof value.focus==='boolean')next={motion:value.motion,focus:value.focus};}catch{setUnavailable(true);}setPreferences(next);}
  restore();const query=window.matchMedia('(prefers-reduced-motion: reduce)');const sync=()=>setReduced(query.matches);sync();query.addEventListener('change',sync);
  const storage=(event:StorageEvent)=>{if(event.key===KEY)restore();};window.addEventListener('storage',storage);
  return ()=>{query.removeEventListener('change',sync);window.removeEventListener('storage',storage);};
 },[]);
 useEffect(()=>{document.documentElement.dataset.motion=reduced||preferences.focus?'calm':preferences.motion;document.documentElement.dataset.focus=preferences.focus?'on':'off';window.dispatchEvent(new Event('citachka-atmosphere-change'));},[preferences,reduced]);
 function update(next:Preferences){setPreferences(next);try{const raw=JSON.stringify(next);localStorage.setItem(KEY,raw);if(localStorage.getItem(KEY)!==raw)throw Error('Readback failed');setUnavailable(false);}catch{setUnavailable(true);}}
 return <section className="study-atmosphere" aria-label="Study atmosphere">
  <span className="atmosphere-label"><span aria-hidden="true">✦</span> Make yourself at home</span>
  <div className="motion-switch" role="group" aria-label="Animation preference"><button aria-pressed={preferences.motion==='lively'} onClick={()=>update({...preferences,motion:'lively'})}>Lively</button><button aria-pressed={preferences.motion==='calm'} onClick={()=>update({...preferences,motion:'calm'})}>Calm</button></div>
  <button aria-pressed={preferences.focus} onClick={()=>update({...preferences,focus:!preferences.focus})}>Reading focus</button>
  <FocusSession/>
  <span className="atmosphere-note" role="status">{unavailable?'Preferences apply to this tab only; browser storage is unavailable.':reduced?'Your device requests reduced motion; animations stay calm.':preferences.focus?'Reading focus is on: quiet decoration, all learning tools available.':preferences.motion==='calm'?'Calm: still, with clear interaction feedback.':'Lively: playful details, steady reading surfaces.'}</span>
 </section>;
}
