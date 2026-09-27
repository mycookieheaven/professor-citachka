"use client";
import {useMemo,useSyncExternalStore} from 'react';
import {completeTopic,decodeProgress,emptyProgress,localDay,STORAGE_KEY,type Progress} from './progress';
import {legacyPaths} from './legacy';
import {getProgram} from './programs';
import {courseUnits,gradeAssessment,type Assessment} from './assessments';
export const LEGACY_KEY='professor-citachka:completed-lessons';
const CHANGE='citachka-study-change';
let memory=JSON.stringify(emptyProgress());
let sessionOnly=false;
function migrate(p:Progress):Progress{
 let ids:unknown;try{ids=JSON.parse(localStorage.getItem(LEGACY_KEY)??'[]');}catch{return p;}
 if(!Array.isArray(ids))return p;
 for(const id of ids){if(typeof id!=='string')continue;const [subject,slug]=id.split('/');if(!legacyPaths[subject]?.includes(slug))continue;
 const old=p.subjects[subject]??{completed:[],days:[],interactions:0};p.subjects[subject]={...old,completed:[...new Set([...old.completed,`legacy:${slug}`])]};}
 return p;
}
function damaged(raw:string|null){if(!raw)return false;try{const p=JSON.parse(raw);const decoded=decodeProgress(raw);return p?.version!==1||!p.subjects||Array.isArray(p.subjects)||typeof p.subjects!=='object'||Object.keys(p.subjects).length!==Object.keys(decoded.subjects).length||Object.entries(p.subjects).some(([id,value])=>{const old=value as Progress['subjects'][string];return old?.assessments!==undefined&&JSON.stringify(old.assessments)!==JSON.stringify(decoded.subjects[id]?.assessments??{});});}catch{return true;}}
function subscribe(listener:()=>void){
 window.addEventListener(CHANGE,listener);window.addEventListener('storage',listener);window.addEventListener('focus',listener);
 const timer=window.setInterval(listener,30000);
 return ()=>{window.removeEventListener(CHANGE,listener);window.removeEventListener('storage',listener);window.removeEventListener('focus',listener);window.clearInterval(timer);};
}
function snapshot(){
 if(sessionOnly)return `!${localDay(new Date())}|${memory}`;
 try{const raw=localStorage.getItem(STORAGE_KEY);memory=JSON.stringify(migrate(decodeProgress(raw)));return `${damaged(raw)?'?':''}${localDay(new Date())}|${memory}`;}
 catch{return `!${localDay(new Date())}|${memory}`;}
}
function current(){return decodeProgress(snapshot().split('|').slice(1).join('|'));}
function write(p:Progress){
 memory=JSON.stringify(p);let saved=true;
 try{const old=localStorage.getItem(STORAGE_KEY);if(damaged(old))localStorage.setItem(`${STORAGE_KEY}:recovery`,old!);localStorage.setItem(STORAGE_KEY,memory);if(localStorage.getItem(STORAGE_KEY)!==memory)throw new Error('Storage readback failed');sessionOnly=false;}catch{saved=false;sessionOnly=true;}
 window.dispatchEvent(new Event(CHANGE));return saved;
}
export function recordStudy(subject:string,topic:string,next?:string|null){
 const before=current();const old=before.subjects[subject];const p=completeTopic(before,subject,topic,new Date());
 // Commit completion and resume together, before routing. A review never regresses resume.
 if(next!==undefined&&!old?.completed.includes(topic))p.subjects[subject].position=forwardPosition(subject,old?.position,next);
 return write(p);
}
export function retryStudySave(){return write(current());}
export function recordPosition(subject:string,topic:string){
 const p=current();const old=p.subjects[subject]??{completed:[],days:[],interactions:0};
 if(old.completed.includes(topic)||old.position===topic)return;
 write({...p,subjects:{...p.subjects,[subject]:{...old,position:forwardPosition(subject,old.position,topic)}}});
}
function forwardPosition(subject:string,old:string|undefined,next:string|null){
 const program=getProgram(subject);if(!program)return next??undefined;
 const sequence=courseUnits(program).flatMap(u=>[...u.topics.map(t=>t.id),`assessment:${u.id}`,...(u.unitIndex===1?[`assessment:level-${u.levelIndex+1}`]:[])]);
 const previous=old?sequence.indexOf(old):-1;const target=next?sequence.indexOf(next):-1;
 return previous>=0&&target>=0&&previous>target?old:next??undefined;
}
export function recordAssessment(subject:string,assessment:Assessment,answers:Record<string,string>){
 const p=current();const old=p.subjects[subject]??{completed:[],days:[],interactions:0};const now=new Date();
 const result={...gradeAssessment(assessment,answers),at:now.toISOString(),answers:{...answers}};
 const attempts=old.assessments?.[assessment.id]??[];
 const updated={...old,assessments:{...old.assessments,[assessment.id]:[...attempts,result]},days:[...new Set([...old.days,localDay(now)])].sort(),interactions:old.interactions+1};
 return {result,saved:write({...p,subjects:{...p.subjects,[subject]:updated}})};
}
export function recordAssessmentPosition(subject:string,currentId:string,next:string|null){
 const p=current();const old=p.subjects[subject]??{completed:[],days:[],interactions:0};
 // Reviewing an old assessment cannot erase a later saved resume, including the final return.
 const assessmentPosition=`assessment:${currentId}`;const ahead=forwardPosition(subject,old.position,assessmentPosition)!==assessmentPosition;
 const targetAlreadyRead=!!next&&old.completed.includes(next)&&old.position!==assessmentPosition;
 return write({...p,subjects:{...p.subjects,[subject]:{...old,position:ahead||targetAlreadyRead?old.position:forwardPosition(subject,old.position,next)}}});
}
export function useStudy(){
 const snap=useSyncExternalStore(subscribe,snapshot,()=> 'loading');const raw=snap.split('|').slice(1).join('|');
 const progress=useMemo(()=>decodeProgress(raw),[raw]);
 return {progress,ready:snap!=='loading',unavailable:snap.startsWith('!'),corrupt:snap.startsWith('?')};
}
