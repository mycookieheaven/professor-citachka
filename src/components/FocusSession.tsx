"use client";
import {useEffect,useRef,useState,type CSSProperties} from 'react';
const DURATION=5*60*1000;
export function FocusSession(){
 const [remaining,setRemaining]=useState(DURATION);
 const [running,setRunning]=useState(false);
 const deadline=useRef(0);
 useEffect(()=>{if(!running)return;const tick=()=>{const left=Math.max(0,deadline.current-Date.now());setRemaining(left);if(left===0)setRunning(false);};const timer=setInterval(tick,250);document.addEventListener('visibilitychange',tick);return ()=>{clearInterval(timer);document.removeEventListener('visibilitychange',tick);};},[running]);
 const seconds=Math.ceil(remaining/1000);
 function toggle(){if(running){setRemaining(Math.max(0,deadline.current-Date.now()));setRunning(false);}else{const duration=remaining||DURATION;setRemaining(duration);deadline.current=Date.now()+duration;setRunning(true);}}
 return <details className="focus-session"><summary><span className="focus-clock" aria-hidden="true"/> Five-minute focus</summary><div className="focus-session-body"><p>A little space for one idea. Optional, silent, and independent of your learning record.</p><div className="focus-timer-row"><span className="focus-timer-ring" style={{'--focus-turn':`${(1-remaining/DURATION)*360}deg`} as CSSProperties}><span aria-label="Focus time remaining" role="timer">{String(Math.floor(seconds/60)).padStart(2,'0')}:{String(seconds%60).padStart(2,'0')}</span></span><div className="focus-timer-actions"><button onClick={toggle}>{running?'Pause focus':remaining===DURATION||remaining===0?'Start focus':'Resume focus'}</button><button onClick={()=>{setRunning(false);setRemaining(DURATION);}}>Reset timer</button></div></div><p role="status">{remaining===0?'Focus interval finished. Take a breath; progress is saved through your lesson, not the timer.':running?'Your interval is running. You can pause at any time.':'Timer stays in this tab; it resets on reload.'}</p></div></details>;
}
