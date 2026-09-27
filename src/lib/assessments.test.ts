import {expect,it} from 'vitest';
import {programs,allTopics} from './programs';
import {courseUnits,courseAssessments,lessonDestination,gradeAssessment} from './assessments';
import {decodeProgress,emptyProgress} from './progress';
it('organizes every published level into coherent units without changing lesson IDs',()=>{
 for(const program of programs){const units=courseUnits(program);expect(units.flatMap(u=>u.topics.map(t=>t.id))).toEqual(allTopics(program).map(t=>t.id));
 for(let i=0;i<program.levels.length;i++){const grouped=units.filter(u=>u.levelIndex===i);expect(grouped.length).toBeGreaterThan(1);expect(grouped.every(u=>u.topics.length>1)).toBe(true);}
 const assessments=courseAssessments(program);for(const unit of units){const quiz=assessments.find(a=>a.id===unit.id)!;expect(quiz.questions).toHaveLength(unit.topics.length);const test=assessments.find(a=>a.id===`level-${unit.levelIndex+1}`)!;expect(test.questions.length).toBeGreaterThan(quiz.questions.length);expect(lessonDestination(program,unit.topics.at(-1)!.id).url).toBe(`/assess/${program.id}/${unit.id}`);}
 }
});
it('scores wrong, incomplete and correct responses honestly without marking reading',()=>{
 const a=courseAssessments(programs[0])[0];expect(gradeAssessment(a,{}).passed).toBe(false);
 const answers=Object.fromEntries(a.questions.map(q=>[q.id,q.answer]));expect(gradeAssessment(a,answers)).toMatchObject({correct:a.questions.length,total:a.questions.length,passed:true});
 expect(emptyProgress().subjects).toEqual({});expect(decodeProgress(JSON.stringify({version:1,subjects:{russian:{completed:['01'],days:[],interactions:0}}})).subjects.russian.assessments).toBeUndefined();
});
