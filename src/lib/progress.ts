export type AssessmentAttempt={correct:number;total:number;passed:boolean;at:string;answers:Record<string,string>};
export type Progress = { version: 1; subjects: Record<string, { completed: string[]; days: string[]; interactions: number; position?: string; assessments?:Record<string,AssessmentAttempt[]> }> };
export const STORAGE_KEY = 'citachka-study-v1';
export const emptyProgress = (): Progress => ({version:1,subjects:{}});
export const localDay = (date: Date) => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
export function completeTopic(p: Progress, subject: string, topic: string, date: Date): Progress {
 const old = p.subjects[subject] ?? {completed:[],days:[],interactions:0};
 return {...p,subjects:{...p.subjects,[subject]:{...old, completed:[...new Set([...old.completed,topic])], days:[...new Set([...old.days,localDay(date)])].sort(),interactions:old.interactions+1,position:old.position===topic?undefined:old.position}}};
}
export function subjectStats(p: Progress, subject: string, ids: string[], date: Date) {
 const old=p.subjects[subject]; const days=old?.days ?? []; const today=days.includes(localDay(date));
 const cursor=new Date(date.getFullYear(),date.getMonth(),date.getDate(),12); let streak=0;
 if (!today) cursor.setDate(cursor.getDate()-1);
 while(days.includes(localDay(cursor))) { streak++; cursor.setDate(cursor.getDate()-1); }
 const weekStart=new Date(date.getFullYear(),date.getMonth(),date.getDate()-6,12);
 return {completed:ids.filter(id=>old?.completed.includes(id)).length, interactions:old?.interactions??0, days:days.length, streak, today,week:days.filter(day=>day>=localDay(weekStart)&&day<=localDay(date)).length};
}
export function resumeTopic(p: Progress, subject: string, ids: string[]) {
 const old=p.subjects[subject];
 if(old?.position && ids.includes(old.position) && !old.completed.includes(old.position)) return old.position;
 return ids.find(id=>!old?.completed.includes(id)) ?? null;
}
export function decodeProgress(raw: string | null): Progress {
 try {
  const p=JSON.parse(raw??'null');
  if(p?.version!==1 || !p.subjects || typeof p.subjects!=='object' || Array.isArray(p.subjects)) return emptyProgress();
  const subjects: Progress['subjects']={};
  for(const [key,value] of Object.entries(p.subjects)) {
   const v=value as Progress['subjects'][string];
   if(!v || !Array.isArray(v.completed) || !v.completed.every(x=>typeof x==='string') || !Array.isArray(v.days) || !v.days.every(x=>typeof x==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x)) || !Number.isSafeInteger(v.interactions) || v.interactions<0) continue;
   const assessments:Record<string,AssessmentAttempt[]>={};
   if(v.assessments&&typeof v.assessments==='object'&&!Array.isArray(v.assessments))for(const [id,attempts] of Object.entries(v.assessments)){
    if(!Array.isArray(attempts))continue;
    assessments[id]=attempts.filter(a=>a&&Number.isSafeInteger(a.correct)&&Number.isSafeInteger(a.total)&&a.total>0&&a.correct>=0&&a.correct<=a.total&&typeof a.passed==='boolean'&&a.passed===(a.correct/a.total>=0.8)&&typeof a.at==='string'&&Number.isFinite(Date.parse(a.at))&&a.answers&&typeof a.answers==='object'&&!Array.isArray(a.answers)&&Object.values(a.answers).every(x=>typeof x==='string'));
   }
   subjects[key]={completed:[...new Set(v.completed)],days:[...new Set(v.days)].sort(),interactions:v.interactions,...(typeof v.position==='string'?{position:v.position}:{}),...(Object.keys(assessments).length?{assessments}:{})};
  }
  return {version:1,subjects};
 } catch {return emptyProgress();}
}
