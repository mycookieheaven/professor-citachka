import type {Program,Topic} from './programs';
import type {LessonDepth} from './lesson-depth';
export type PackQuestion={id:string;prompt:string;answer:string;distractor:string;correction:string;reviewLessonIds:string[]};
export type CoursePack={subject:string;levels:{title:string;units:{title:string;lessons:(Topic&{depth:LessonDepth;readings:{title:string;url:string;note:string}[];visual:{title:string;description:string;steps:string[]}})[];questions:PackQuestion[]}[];questions:PackQuestion[]}[]};
function assessmentTopic(q:PackQuestion):Topic{return {id:q.id,title:'Application review',explanation:'',example:'',question:q.prompt,answer:q.answer,distractor:q.distractor,correction:q.correction,reviewLessonIds:q.reviewLessonIds};}
export function attachCoursePacks(base:Program[],packs:CoursePack[]):Program[]{
 const known=new Map(base.map(p=>[p.id,p]));
 const seenLessons=new Map(base.map(p=>[p.id,new Set(p.levels.flatMap(l=>l.topics.map(t=>t.id)))]));
 const seenQuestions=new Map<string,Set<string>>();
 const requireValue=(ok:unknown,message:string)=>{if(!ok)throw new Error(`Invalid authored course pack: ${message}`);};
 const text=(value:unknown)=>typeof value==='string'&&value.trim().length>0;
 for(const pack of packs){
  requireValue(known.has(pack.subject),`unknown subject ${pack.subject}`);
  requireValue(Array.isArray(pack.levels)&&pack.levels.length>0,`${pack.subject} has no complete levels`);
  const ids=seenLessons.get(pack.subject)!;
  const questionIds=seenQuestions.get(pack.subject)??new Set<string>();seenQuestions.set(pack.subject,questionIds);
  for(const level of pack.levels){
   requireValue(text(level.title)&&Array.isArray(level.units)&&level.units.length>=2,`${pack.subject} needs multiple authored units`);
   for(const unit of level.units){
    requireValue(text(unit.title)&&Array.isArray(unit.lessons)&&unit.lessons.length>=5,`${pack.subject}/${level.title} has an incomplete unit`);
    for(const lesson of unit.lessons){
     requireValue(/^\d{2,}$/.test(lesson.id)&&!ids.has(lesson.id),`${pack.subject} duplicate or invalid lesson ID ${lesson.id}`);ids.add(lesson.id);
     for(const key of ['title','explanation','example','question','answer','distractor','correction'] as const)requireValue(text(lesson[key]),`${pack.subject}/${lesson.id} missing ${key}`);
     requireValue(lesson.answer!==lesson.distractor,`${pack.subject}/${lesson.id} ambiguous answers`);
     for(const key of ['definitions','mechanism','secondExample','mistake','application','summary'] as const)requireValue(text(lesson.depth?.[key]),`${pack.subject}/${lesson.id} missing depth.${key}`);
     const words=[lesson.explanation,lesson.example,...Object.values(lesson.depth)].join(' ').trim().split(/\s+/).length;
     requireValue(words>=600,`${pack.subject}/${lesson.id} has only ${words} instructional words; requires substantive instruction`);
     requireValue(Array.isArray(lesson.readings)&&lesson.readings.length>0,`${pack.subject}/${lesson.id} has no readings`);
     for(const reading of lesson.readings){
      let safe=false;try{const url=new URL(reading.url);safe=url.protocol==='https:'&&!url.username&&!url.password;}catch{}
      requireValue(safe&&text(reading.title)&&text(reading.note),`${pack.subject}/${lesson.id} invalid reading`);
     }
     requireValue(text(lesson.visual?.title)&&text(lesson.visual?.description)&&lesson.visual?.steps?.length>=3&&lesson.visual.steps.every(text),`${pack.subject}/${lesson.id} missing visual sequence`);
     if(pack.subject==='russian')requireValue(lesson.russianItems?.length&&lesson.russianItems.every(item=>text(item.text)&&text(item.latin)&&text(item.meaning)),`${pack.subject}/${lesson.id} missing item audio support`);
    }
   }
  }
  const validateQuestion=(q:PackQuestion)=>{
   requireValue(text(q.id)&&!questionIds.has(q.id),`${pack.subject} duplicate question ${q.id}`);questionIds.add(q.id);
   requireValue(text(q.prompt)&&text(q.answer)&&text(q.distractor)&&text(q.correction)&&q.answer!==q.distractor,`${pack.subject}/${q.id} ambiguous or incomplete question`);
   requireValue(Array.isArray(q.reviewLessonIds)&&q.reviewLessonIds.length>0&&q.reviewLessonIds.every(id=>ids.has(id)),`${pack.subject}/${q.id} unknown review lesson`);
  };
  for(const level of pack.levels){
   for(const unit of level.units){requireValue(Array.isArray(unit.questions)&&unit.questions.length>=5,`${pack.subject}/${unit.title} incomplete quiz`);unit.questions.forEach(validateQuestion);}
   requireValue(Array.isArray(level.questions)&&level.questions.length>=12&&level.questions.length>Math.max(...level.units.map(u=>u.questions.length)),`${pack.subject}/${level.title} cumulative test must be longer than a unit quiz`);
   level.questions.forEach(validateQuestion);
  }
 }
 return base.map(program=>{
  const own=packs.filter(pack=>pack.subject===program.id);if(!own.length)return program;
  return {...program,levels:[...program.levels,...own.flatMap(pack=>pack.levels.map(level=>({title:level.title,topics:level.units.flatMap(unit=>unit.lessons),unitDefinitions:level.units.map(unit=>({title:unit.title,topicIds:unit.lessons.map(t=>t.id),questions:unit.questions.map(assessmentTopic)})),assessmentQuestions:level.questions.map(assessmentTopic)})))]};
 });
}
