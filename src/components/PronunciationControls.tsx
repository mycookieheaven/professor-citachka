"use client";
import {useEffect,useRef,useState} from 'react';
type Pace='slow'|'natural';
type Props={russian:string;latin:string;spokenText?:string;mode?:'word'|'sound';audioSrc?:string};
export function PronunciationControls({russian,latin,spokenText,mode='word',audioSrc}:Props){
 const utterance=useRef<SpeechSynthesisUtterance|null>(null);const audio=useRef<HTMLAudioElement|null>(null);const [playing,setPlaying]=useState<Pace|null>(null);const [notice,setNotice]=useState('');
 useEffect(()=>()=>{if(utterance.current&&typeof window!=='undefined'&&'speechSynthesis' in window)window.speechSynthesis.cancel();audio.current?.pause();},[]);
 async function play(pace:Pace){
  if(audioSrc){
   if(!audio.current)audio.current=new Audio(audioSrc);
   audio.current.pause();audio.current.currentTime=0;audio.current.playbackRate=pace==='slow'?0.78:1;
   audio.current.onended=()=>setPlaying(null);audio.current.onerror=()=>{setPlaying(null);setNotice('This sound could not be played. The written sound guide remains available.');};
   try{setNotice('');setPlaying(pace);await audio.current.play();}catch{setPlaying(null);setNotice('This sound could not be played. Check your browser audio settings.');}return;
  }
  if(typeof window==='undefined'||!('speechSynthesis' in window)||typeof SpeechSynthesisUtterance==='undefined'){setNotice('Pronunciation playback is unavailable in this browser. Use the written pronunciation guide or enable a Russian system voice.');return;}
  window.speechSynthesis.cancel();const voices=window.speechSynthesis.getVoices();const voice=voices.find(v=>v.lang.toLowerCase().startsWith('ru'));
  if(voices.length&&!voice){setNotice('No Russian voice is available on this device. Install or enable a Russian system voice, then try again; the written guide remains available.');setPlaying(null);return;}
  const next=new SpeechSynthesisUtterance(spokenText??russian);next.lang='ru-RU';if(voice)next.voice=voice;next.rate=pace==='slow'?0.62:0.92;
  next.onend=()=>setPlaying(null);next.onerror=()=>{setPlaying(null);setNotice('Pronunciation playback is unavailable right now. Check your device’s Russian voice and audio settings; the written guide remains available.');};
  utterance.current=next;setNotice('');setPlaying(pace);window.speechSynthesis.speak(next);
 }
 const kind=mode==='sound'?'sound':'pronunciation';
 return <div className="pronunciation-controls" aria-label={`${mode==='sound'?'Sound':'Pronunciation'} for ${russian}, ${latin}`}><button type="button" onClick={()=>play('slow')} aria-label={`Play slow ${kind} for ${russian}`}>{playing==='slow'?'Playing slowly':'Slow'}</button><button type="button" onClick={()=>play('natural')} aria-label={`Play natural ${kind} for ${russian}`}>{playing==='natural'?'Playing naturally':'Natural'}</button>{notice&&<p className="audio-notice" role="status">{notice}</p>}</div>;
}
