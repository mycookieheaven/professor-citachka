import {describe,expect,it} from 'vitest';
import {attachCoursePacks,type CoursePack} from './course-pack';
import {getProgram as getRegistered,allTopics,type Program} from './programs';
// The live catalog already contains reviewed packs; these tests attach synthetic data to the original Russian inventory only.
const getProgram=(id:string):Program|undefined=>{const p=getRegistered(id);return p&&id==='russian'?{...p,levels:p.levels.slice(0,3)}:p;};
import {courseUnits,courseAssessments,assessmentDestination,lessonDestination} from './assessments';

// Synthetic data solely for integration behavior tests, never published as instruction.
function fixture():CoursePack {
 const lessons=Array.from({length:10},(_,i)=>({id:String(31+i),title:`TEST topic ${i}`,explanation:'Synthetic integration fixture. '.repeat(220),example:`TEST worked case ${i}`,question:`TEST retrieval ${i}?`,answer:'A',distractor:'B',correction:'TEST reason',depth:{definitions:'TEST term',mechanism:`TEST mechanism ${i}`,secondExample:'TEST contrast',mistake:'TEST diagnostic',application:'TEST application with model',summary:'TEST synthesis'},readings:[{title:'TEST source',url:'https://example.org/reading',note:'Test reference, not curriculum.'}],visual:{title:`TEST diagram ${i}`,description:'TEST diagram description',steps:['TEST step one','TEST step two','TEST step three']},russianItems:[{text:'да',latin:'da',meaning:'yes'}]}));
 const question=(id:string,reviewLessonIds:string[])=>({id,prompt:`TEST ${id}`,answer:'A',distractor:'B',correction:'TEST explanation',reviewLessonIds});
 return {subject:'russian',levels:[{title:'TEST continuation',units:[{title:'TEST unit one',lessons:lessons.slice(0,5),questions:Array.from({length:5},(_,i)=>question(`u1-${i}`,['31']))},{title:'TEST unit two',lessons:lessons.slice(5),questions:Array.from({length:5},(_,i)=>question(`u2-${i}`,['36']))}],questions:Array.from({length:12},(_,i)=>question(`level-${i}`,['31','36']))}]};
}
describe('reviewed course pack integration',()=>{
 it('uses fresh quiz banks and continues the core path past optional levels without changing saved assessment IDs',()=>{
  const program=attachCoursePacks([getProgram('russian')!],[fixture()])[0];
  expect(courseUnits(program).at(-1)?.topics.map(t=>t.id)).toEqual(['36','37','38','39','40']);
  const assessments=courseAssessments(program);const firstNew=assessments.find(a=>a.id==='unit-4-1')!;
  expect(firstNew.questions.map(q=>q.id)).toEqual(['u1-0','u1-1','u1-2','u1-3','u1-4']);
  expect(firstNew.questions[0].reviewLessonIds).toEqual(['31']);
  expect(assessments.find(a=>a.id==='level-4')?.questions).toHaveLength(12);
  expect(assessmentDestination(program,assessments.find(a=>a.id==='level-2')!).url).toBe('/learn/russian/31');
  expect(assessmentDestination(program,firstNew).url).toBe('/learn/russian/36');
  expect(lessonDestination(program,'40').url).toBe('/assess/russian/unit-4-2');
  expect(assessmentDestination(program,assessments.find(a=>a.id==='level-4')!).url).toBe('/subjects/russian');
 });
 it('appends genuine grouped data without mutating existing IDs or optional-level positions',()=>{
  const original=getProgram('russian')!;const ids=allTopics(original).map(t=>t.id);const result=attachCoursePacks([original],[fixture()])[0];
  expect(result).not.toBe(original);expect(original.levels).toHaveLength(3);expect(result.levels).toHaveLength(4);
  expect(allTopics(result).slice(0,30).map(t=>t.id)).toEqual(ids);expect(result.levels[2].supplemental).toBe(true);
  expect(result.levels[3].unitDefinitions?.map(u=>u.topicIds)).toEqual([['31','32','33','34','35'],['36','37','38','39','40']]);
  expect(result.levels[3].assessmentQuestions).toHaveLength(12);
  expect(result.levels[3].topics[0].depth?.mechanism).toBe('TEST mechanism 0');
 });
 it.each(['duplicate-id','unknown-subject','thin-content','missing-source','invalid-url','empty-depth','invalid-review','ambiguous-answer','short-level-test','incomplete-unit','duplicate-question','missing-russian-audio'] as const)('rejects %s instead of publishing a partial or misleading course pack',failure=>{
  const pack=fixture();const level=pack.levels[0];const unit=level.units[0];const lesson=unit.lessons[0];
  if(failure==='duplicate-id')lesson.id='01';
  if(failure==='unknown-subject')pack.subject='not-a-course';
  if(failure==='thin-content')lesson.explanation='Too thin.';
  if(failure==='missing-source')lesson.readings=[];
  if(failure==='invalid-url')lesson.readings[0].url='javascript:alert(1)';
  if(failure==='empty-depth')lesson.depth.mechanism='';
  if(failure==='invalid-review')unit.questions[0].reviewLessonIds=['999'];
  if(failure==='ambiguous-answer')unit.questions[0].distractor=unit.questions[0].answer;
  if(failure==='short-level-test')level.questions=level.questions.slice(0,4);
  if(failure==='incomplete-unit')unit.lessons=unit.lessons.slice(0,1);
  if(failure==='duplicate-question')level.questions[1].id=level.questions[0].id;
  if(failure==='missing-russian-audio')lesson.russianItems=[];
  expect(()=>attachCoursePacks([getProgram('russian')!],[pack])).toThrow();
 });
});
