import {allTopics,topicHref,type Program,type Topic} from './programs';
export type CourseUnit={id:string;title:string;levelIndex:number;unitIndex:number;topics:Topic[];questions?:Topic[]};
export type Assessment={id:string;title:string;kind:'unit'|'level';levelIndex:number;questions:Topic[];reviewIds:string[]};
// Boundaries preserve published ordering and IDs; labels describe the actual lessons, not future content.
const unitTitles:Record<string,string[][]>={
 russian:[['Sound, greetings and social openings','Requests, replies and communication repair'],['Repair, identity and everyday needs','Requests, time and connected speech'],['Recognizing insults and dismissals','Obscenity, context and firm boundaries']],
 'business-funding':[['Permission, purpose and decision authority','Qualification, consent and discovery close'],['Business funding structures','Receivables, household exposure and consolidation'],['Net proceeds, remittances and cash capacity','Layered obligations and complete outlay'],['Evidence, authority and comparable offers','Objections, informed decisions and follow-through'],['Downside, timing and incremental economics','Disclosure, distress and recommendation capstone']],
 literature:[['Voice, evidence and social perspective','Narrative structure and analytical paragraphs'],['Mediation, style and changing symbols','Context, counterreading and revision']],
 neuroscience:[['Cells, electrical gradients and synapses','Circuit balance, systems and behavior'],['Plasticity, memory and learning','Context and responsible scientific inference']],
 'veterinary-science':[['Observation, roles and safe handling','Systems, welfare and clinical records'],['Escalation, samples and diagnostic limits','Medication safety, monitoring and handover']],
 theology:[['Sources, interpretation and reason','Creation, dignity, grace and doctrinal reading'],['Trinity, incarnation and ecclesial life','Conscience, virtue and charitable dialogue']],
 finance:[['Cash timing, priorities and reserves','Interest, borrowing and financial safeguards'],['Purchasing power, assets and investment risk','Valuation, incentives and investment policy']],
 music:[['Pulse, duration and keyboard landmarks','Pitch names, safe touch and MIDI'],['Intervals, harmony and guitar coordination','Keyboard coordination and production workflow']],
 skincare:[['Barrier-respecting basic care','Ingredient literacy, consistency and scope'],['Active ingredients and tolerance','Formulation, sanitation and routine evaluation']],
 psychiatry:[['Clinical description, context and time course','Assessment, screening and symptom distinctions'],['Differential reasoning and responsive assessment','Treatment literacy, evidence and recovery']],
 philosophy:[['Argument structure and evidential support','Conditions, knowledge and ethical interpretation'],['Ethical approaches, freedom and mind','Identity, justice and argument revision'],['Connectives and conditional inference','Negation, countermodels and quantifiers'],['Justification, defeaters and regress','Testimony, disagreement and epistemic audit'],['Testing theories and interpreting models','Explanation, causation and research design'],['Consequences, duties and intended means','Responsibility, contractualism and public justification']]
};
export function courseUnits(program:Program):CourseUnit[]{return program.levels.flatMap((level,levelIndex)=>{
 if(level.unitDefinitions)return level.unitDefinitions.map((unit,unitIndex)=>({id:`unit-${levelIndex+1}-${unitIndex+1}`,title:unit.title,levelIndex,unitIndex,topics:unit.topicIds.map(id=>{const topic=level.topics.find(t=>t.id===id);if(!topic)throw new Error(`Unknown lesson ${program.id}/${id}`);return topic;}),questions:unit.questions}));
 const titles=unitTitles[program.id]?.[levelIndex];if(!titles)throw new Error(`Missing authored unit grouping: ${program.id}/${levelIndex}`);
 const split=Math.ceil(level.topics.length/2);
 return titles.map((title,unitIndex)=>({id:`unit-${levelIndex+1}-${unitIndex+1}`,title,levelIndex,unitIndex,topics:unitIndex===0?level.topics.slice(0,split):level.topics.slice(split)}));
});}
export const assessmentHref=(subject:string,id:string)=>`/assess/${subject}/${id}`;
export function courseAssessments(program:Program):Assessment[]{const units=courseUnits(program);return program.levels.flatMap((level,levelIndex)=>[
 ...units.filter(u=>u.levelIndex===levelIndex).map(u=>({id:u.id,title:`Unit quiz: ${u.title}`,kind:'unit' as const,levelIndex,questions:u.questions??u.topics,reviewIds:u.topics.map(t=>t.id)})),
 {id:`level-${levelIndex+1}`,title:`Cumulative level test: ${level.title}`,kind:'level' as const,levelIndex,questions:level.assessmentQuestions??level.topics,reviewIds:level.topics.map(t=>t.id)}
]);}
export function lessonDestination(program:Program,topicId:string){const unit=courseUnits(program).find(u=>u.topics.some(t=>t.id===topicId));
 if(unit?.topics.at(-1)?.id===topicId)return {url:assessmentHref(program.id,unit.id),position:`assessment:${unit.id}`,title:`Unit quiz: ${unit.title}`};
 const topics=allTopics(program);const index=topics.findIndex(t=>t.id===topicId);const next=topics[index+1];return {url:next?topicHref(program.id,next.id):`/subjects/${program.id}`,position:next?.id??null,title:next?`Next lesson: ${next.title}`:`Review ${program.title}`};
}
export function assessmentDestination(program:Program,assessment:Assessment){
 const units=courseUnits(program).filter(u=>u.levelIndex===assessment.levelIndex);const unit=units.find(u=>u.id===assessment.id);
 if(unit&&unit.unitIndex<units.length-1){const next=units[unit.unitIndex+1].topics[0];return {url:topicHref(program.id,next.id),position:next.id,title:`Next lesson: ${next.title}`};}
 if(unit){const id=`level-${assessment.levelIndex+1}`;return {url:assessmentHref(program.id,id),position:`assessment:${id}`,title:'Continue to cumulative level test'};}
 const nextLevel=program.levels.slice(assessment.levelIndex+1).find(level=>!level.supplemental);const next=nextLevel?.topics[0];
 return {url:next?topicHref(program.id,next.id):`/subjects/${program.id}`,position:next?.id??null,title:next?`Next level: ${next.title}`:`Review ${program.title} department`};
}
export const PASS_PERCENT=80;
export function gradeAssessment(assessment:Assessment,answers:Record<string,string>){const correct=assessment.questions.filter(q=>answers[q.id]===q.answer).length;const total=assessment.questions.length;return {correct,total,passed:total>0&&correct/total*100>=PASS_PERCENT};}
