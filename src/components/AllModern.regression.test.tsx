import {afterEach,expect,it,vi} from 'vitest';
import {cleanup,render,screen,fireEvent} from '@testing-library/react';
import {LearningLesson,SubjectProgress} from './Learning';
import {FundingLesson} from './FundingLesson';
import {AssessmentLesson} from './AssessmentLesson';
import {programs} from '@/lib/programs';
import {fundingTopics} from '@/lib/funding';
import {courseAssessments,lessonDestination,assessmentDestination} from '@/lib/assessments';
import {STORAGE_KEY} from '@/lib/progress';
const push=vi.fn();vi.mock('next/navigation',()=>({useRouter:()=>({push})}));
afterEach(()=>{cleanup();localStorage.clear();push.mockReset();});
it.each(programs)('$title: ungated reading, every unit and level boundary, durable resume and separate assessments',program=>{
 for(const level of program.levels){for(const topic of level.topics){
 const destination=lessonDestination(program,topic.id);
 const before=JSON.parse(localStorage.getItem(STORAGE_KEY)??'null')?.subjects?.[program.id]?.position as string|undefined;
 // Optional sequences never regress a core resume that is already further ahead.
 const coreAhead=level.supplemental&&!!before&&!level.topics.some(t=>t.id===before)&&!before.startsWith('assessment:unit-3')&&before!=='assessment:level-3';
 const expectedPosition=coreAhead?before:destination.position;
 const view=render(program.id==='business-funding'&&fundingTopics.some(t=>t.id===topic.id)?<FundingLesson topicId={topic.id}/>:<LearningLesson program={program} topicId={topic.id}/>);
 if(level.supplemental)fireEvent.click(screen.getByRole('button',{name:'Enter strong-language lesson'}));
 const arrow=screen.getByRole('button',{name:destination.title});expect(arrow).toBeEnabled();
 // A wrong optional answer does not block the reading action.
 fireEvent.click(screen.getByLabelText(topic.distractor));expect(arrow).toBeEnabled();
 push.mockImplementation(()=>{const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)!);expect(saved.subjects[program.id].completed).toContain(topic.id);expect(saved.subjects[program.id].position).toBe(expectedPosition);});
 fireEvent.click(arrow);expect(push).toHaveBeenLastCalledWith(destination.url);view.unmount();push.mockImplementation(()=>{});
 if(!coreAhead){const dashboard=render(<SubjectProgress subject={program.id}/>);expect(screen.getByRole('link',{name:destination.position?.startsWith('assessment:')?/Continue assessment:/:new RegExp(`Continue ${program.title}:`)})).toHaveAttribute('href',destination.url);dashboard.unmount();}
 if(destination.position?.startsWith('assessment:')){
  let a=courseAssessments(program).find(a=>a.id===destination.position!.slice(11))!;
  for(;;){const assessmentView=render(<AssessmentLesson program={program} assessmentId={a.id}/>);const next=assessmentDestination(program,a);
   if(level.supplemental)fireEvent.click(screen.getByRole('button',{name:'Enter strong-language assessment'}));
   expect(screen.getAllByRole('group')).toHaveLength(a.questions.length);
   fireEvent.click(screen.getByRole('button',{name:`→ ${next.title}`}));expect(push).toHaveBeenLastCalledWith(next.url);assessmentView.unmount();
   if(!next.position?.startsWith('assessment:'))break;a=courseAssessments(program).find(a=>a.id===next.position!.slice(11))!;
  }
 }
 }}
 const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)!).subjects[program.id];expect(saved.completed).toHaveLength(program.levels.flatMap(l=>l.topics).length);expect(saved.days).toHaveLength(1);expect(saved.assessments).toBeUndefined();
});
