// Structural validation of every authored course pack on disk.
//
// Publishing is gated separately by the explicit registry (src/lib/course-pack-registry.ts);
// this script proves the content itself is sound.
//
// Packs are validated in dependency order, exactly as the runtime attaches them: the
// original pack for a subject first, then each continuation. A continuation may legitimately
// reference lessons taught in an earlier pack of the same subject, so checking a pack against
// only the legacy catalog would report false failures. The whole set is then attached at once,
// which proves no two packs claim the same lesson or assessment ID within a subject.
import {readFileSync,readdirSync} from 'node:fs';
import {basePrograms} from '../src/lib/programs';
import {attachCoursePacks,type CoursePack} from '../src/lib/course-pack';

const dir='src/lib/course-packs';
const files=readdirSync(dir).filter(file=>file.endsWith('.json')).sort();

type Entry={file:string;pack:CoursePack;minId:number};
const out:Record<string,unknown>={};
const parsed:Entry[]=[];

for(const file of files){
 const key=file.replace(/\.json$/,'');
 let pack:CoursePack;
 try{pack=JSON.parse(readFileSync(`${dir}/${file}`,'utf8'));}
 catch(e){out[key]={status:'invalid-json',error:String(e)};continue;}
 const lessons=pack.levels?.flatMap(level=>level.units?.flatMap(unit=>unit.lessons??[])??[])??[];
 const numbers=lessons.map(lesson=>Number.parseInt(lesson.id,10)).filter(number=>Number.isFinite(number));
 parsed.push({file,pack,minId:numbers.length?Math.min(...numbers):Number.MAX_SAFE_INTEGER});
}

// Original pack first, then continuations, within each subject.
const bySubject=new Map<string,Entry[]>();
for(const entry of parsed){
 const list=bySubject.get(entry.pack.subject)??[];
 list.push(entry);bySubject.set(entry.pack.subject,list);
}
for(const list of bySubject.values())list.sort((a,b)=>a.minId-b.minId);
const ordered=[...bySubject.values()].flatMap(list=>list);

for(const entry of ordered){
 const key=entry.file.replace(/\.json$/,'');
 const earlier=(bySubject.get(entry.pack.subject)??[]).filter(other=>other!==entry&&other.minId<entry.minId).map(other=>other.pack);
 const lessons=entry.pack.levels.flatMap(level=>level.units.flatMap(unit=>unit.lessons));
 const words=lessons.map(lesson=>[lesson.explanation,lesson.example,...Object.values(lesson.depth??{})].join(' ').trim().split(/\s+/).length);
 const readings=[...new Set(lessons.flatMap(lesson=>(lesson.readings??[]).map(reading=>reading.url)))];
 try{
  attachCoursePacks(basePrograms,[...earlier,entry.pack]);
  out[key]={status:'valid',subject:entry.pack.subject,levels:entry.pack.levels.length,units:entry.pack.levels.reduce((count,level)=>count+level.units.length,0),lessons:lessons.length,ids:lessons.map(lesson=>lesson.id),minWords:Math.min(...words),totalWords:words.reduce((total,count)=>total+count,0),uniqueReadings:readings.length,unitQuestions:entry.pack.levels.flatMap(level=>level.units.map(unit=>unit.questions.length)),levelQuestions:entry.pack.levels.map(level=>level.questions.length)};
 }catch(e){
  out[key]={status:'rejected',error:String(e),lessons:lessons.length,minWords:words.length?Math.min(...words):0};
 }
}

try{
 const published=attachCoursePacks(basePrograms,ordered.map(entry=>entry.pack));
 out.__published={status:'valid',packs:ordered.length,programs:published.length,levels:published.reduce((total,program)=>total+program.levels.length,0),lessons:published.reduce((total,program)=>total+program.levels.flatMap(level=>level.topics).length,0)};
}catch(e){
 out.__published={status:'rejected',error:String(e)};
}

console.log(JSON.stringify(out,null,1));
const failure=Object.entries(out).find(([,value])=>(value as {status:string}).status!=='valid');
if(failure)process.exit(1);
