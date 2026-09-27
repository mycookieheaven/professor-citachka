import { humanities, type Row } from './humanities';
import { philosophyContinuation } from './philosophy-continuation';
import { sciences } from './sciences';
import { practical } from './practical';
import { music, musicPractice } from './music-program';
import { russian, russianItems } from './russian-program';
import { fundingProgram } from './funding';
import { attachCoursePacks } from './course-pack';
import { reviewedCoursePacks } from './course-pack-registry';
export type LanguageItem={text:string;latin:string;meaning:string};
export type Topic = {id:string;title:string;explanation:string;example:string;question:string;answer:string;distractor:string;correction:string;practice?:string;russian?:LanguageItem;russianItems?:LanguageItem[];depth?:import('./lesson-depth').LessonDepth;readings?:{title:string;url:string;note:string}[];visual?:{title:string;description:string;steps:string[]};reviewLessonIds?:string[]};
export type Program = {id:string;title:string;description:string;levels:{title:string;supplemental?:boolean;topics:Topic[];unitDefinitions?:{title:string;topicIds:string[];questions:Topic[]}[];assessmentQuestions?:Topic[]}[]};
const catalog: [string,string,string,string,string][] = [
 ['literature','Literature','Close reading, English-language classics and critical argument.','Reading with evidence','Interpretation and argument'],
 ['russian','Russian','Sound, practical speech and grammar, with an optional strong-language unit.','Sound and first exchanges','Connected speech'],
 ['neuroscience','Neuroscience','Cells and circuits, learning and responsible scientific inference.','Cells to behavior','Learning and interpreting evidence'],
 ['veterinary-science','Veterinary Science','Observation, animal welfare and safe clinical reasoning.','Animal care foundations','Supervised clinical reasoning'],
 ['theology','Theology','Catholic doctrine, Scripture, philosophical inquiry and charitable disagreement.','Sources and foundational concepts','Doctrine and ethical interpretation'],
 ['finance','Finance','Cash flow, risk, investing and independent financial judgment.','Personal financial foundations','Investing and evaluating claims'],
 ['music','Music','Pulse, guitar, keyboard and music production through tiny physical practices.','Pulse, instruments and touch','Coordination and composition'],
 ['skincare','Skincare','Barrier-respecting care, ingredient literacy and professional boundaries.','Gentle care foundations','Evaluation and routine design'],
 ['psychiatry','Psychiatry','Mental-health concepts, contextual assessment and person-centered care.','Clinical concepts','Reasoning, evidence and recovery'],
 ['philosophy','Philosophy','Arguments, knowledge, ethics and rigorous disagreement.','Tools for clear reasoning','Ethics, mind and critical synthesis']
];
const rows:Record<string,Row[]>={...humanities,...sciences,...practical,music,russian};
export const programs:Program[]=catalog.map(([id,title,description,first,second])=>{
 const topics=rows[id].map(([title,explanation,example,question,answer,distractor,correction],i):Topic=>({
  id:String(i+1).padStart(2,'0'),title,explanation,example,question,answer,distractor,correction,
  ...(id==='music'?{practice:musicPractice[i]}:{}),
  ...(id==='russian'?{russian:{text:russianItems[i][0],latin:russianItems[i][1],meaning:russianItems[i][2]}}:{})
 }));
 return {id,title,description,levels:[{title:first,topics:topics.slice(0,10)},{title:second,topics:topics.slice(10,20)},...(id==='philosophy'?philosophyContinuation.map((level,levelIndex)=>({title:level.title,topics:level.rows.map(([title,explanation,example,question,answer,distractor,correction],index)=>({id:String(21+levelIndex*10+index).padStart(2,'0'),title,explanation,example,question,answer,distractor,correction}))})):[]),...(id==='russian'?[{title:'Russian swearing & strong language',supplemental:true,topics:topics.slice(20)}]:[])]};
});
// Shared priority order drives dashboard, desktop and mobile navigation.
const russianIndex=programs.findIndex(p=>p.id==='russian');
const [russianPriority]=programs.splice(russianIndex,1);
programs.unshift(russianPriority,fundingProgram);
// Pre-pack catalog snapshot for validators and audits: authored pack content must be
// checked against the original course inventory, never against itself.
export const basePrograms:Program[]=programs.map(program=>({...program,levels:[...program.levels]}));
// Append reviewed continuation levels after priority ordering; originals stay unmutated.
programs.splice(0,programs.length,...attachCoursePacks(programs,reviewedCoursePacks));
export const getProgram=(id:string)=>programs.find(p=>p.id===id);
export const allTopics=(p:Program)=>p.levels.flatMap(l=>l.topics);
export const topicHref=(subject:string,topic:string)=>`/learn/${subject}/${topic}`;
export const requestedLevels=(subject:string)=>subject==='russian'?100:50;
// Current target is units, not the superseded historical level count above.
export const requestedUnits=()=>100;
