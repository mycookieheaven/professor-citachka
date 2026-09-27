// Structural validation of every authored course pack against the real catalog.
import {readFileSync,existsSync} from 'node:fs';
import {basePrograms} from '../src/lib/programs';
import {attachCoursePacks,type CoursePack} from '../src/lib/course-pack';
const subjects=['russian','business-funding','neuroscience','psychiatry','veterinary-science','finance','theology','literature','philosophy','music','skincare'];
const out:Record<string,unknown>={};
for(const s of subjects){
 const path=`src/lib/course-packs/${s}.json`;
 if(!existsSync(path)){out[s]={status:'missing'};continue;}
 let pack:CoursePack;
 try{pack=JSON.parse(readFileSync(path,'utf8'));}catch(e){out[s]={status:'invalid-json',error:String(e)};continue;}
 const lessons=pack.levels?.flatMap(l=>l.units?.flatMap(u=>u.lessons??[])??[])??[];
 const words=lessons.map(l=>[l.explanation,l.example,...Object.values(l.depth??{})].join(' ').trim().split(/\s+/).length);
 const readings=[...new Set(lessons.flatMap(l=>(l.readings??[]).map(r=>r.url)))];
 // Validate against the pre-pack catalog snapshot, so a pack is never checked against content it already added.
 try{attachCoursePacks(basePrograms,[pack]);out[s]={status:'valid',levels:pack.levels.length,units:pack.levels.reduce((n,l)=>n+l.units.length,0),lessons:lessons.length,ids:lessons.map(l=>l.id),minWords:Math.min(...words),totalWords:words.reduce((a,b)=>a+b,0),uniqueReadings:readings.length,unitQuestions:pack.levels.flatMap(l=>l.units.map(u=>u.questions.length)),levelQuestions:pack.levels.map(l=>l.questions.length)};}
 catch(e){out[s]={status:'rejected',error:String(e),lessons:lessons.length,minWords:words.length?Math.min(...words):0};}
}
console.log(JSON.stringify(out,null,1));
