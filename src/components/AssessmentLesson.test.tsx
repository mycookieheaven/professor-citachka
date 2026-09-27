import {afterEach,expect,it,vi} from 'vitest';
import {cleanup,fireEvent,render,screen,within} from '@testing-library/react';
import {AssessmentLesson} from './AssessmentLesson';
import {LearningLesson,SubjectProgress} from './Learning';
import {getProgram} from '@/lib/programs';
import {courseAssessments} from '@/lib/assessments';
import {STORAGE_KEY} from '@/lib/progress';
const push=vi.fn();vi.mock('next/navigation',()=>({useRouter:()=>({push})}));
afterEach(()=>{cleanup();localStorage.clear();push.mockReset();});
const program=getProgram('philosophy')!;
it('keeps supplemental assessment items behind consent with two sound controls each',()=>{
 const russian=getProgram('russian')!;const a=courseAssessments(russian).find(a=>a.id==='unit-3-1')!;
 render(<AssessmentLesson program={russian} assessmentId={a.id}/>);expect(screen.queryByText(a.questions[0].russian!.text)).not.toBeInTheDocument();
 fireEvent.click(screen.getByRole('button',{name:'Enter strong-language assessment'}));expect(screen.getAllByRole('button',{name:/Play slow pronunciation/})).toHaveLength(a.questions.length);expect(screen.getAllByRole('button',{name:/Play natural pronunciation/})).toHaveLength(a.questions.length);
});
it('last lesson saves and resumes at the unit quiz, which is not marked passed',()=>{
 localStorage.setItem(STORAGE_KEY,JSON.stringify({version:1,subjects:{philosophy:{completed:['01','02','03','04'],days:[],interactions:0}}}));
 const view=render(<LearningLesson program={program} topicId="05"/>);fireEvent.click(screen.getByRole('button',{name:/Unit quiz:/}));expect(push).toHaveBeenCalledWith('/assess/philosophy/unit-1-1');view.unmount();
 render(<SubjectProgress subject="philosophy"/>);expect(screen.getByRole('link',{name:/Continue assessment/})).toHaveAttribute('href','/assess/philosophy/unit-1-1');
 expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).subjects.philosophy.assessments).toBeUndefined();
});
it('saves failed and passed attempts separately, restores score, reviews errors, and never fabricates reading',()=>{
 const a=courseAssessments(program)[0];const view=render(<AssessmentLesson program={program} assessmentId={a.id}/>);
 expect(screen.getByText(a.questions[0].example)).toBeVisible();
 for(const q of a.questions)fireEvent.click(within(screen.getByRole('group',{name:q.question})).getByLabelText(q.distractor));
 fireEvent.click(screen.getByRole('button',{name:'Score this attempt'}));expect(screen.getByRole('status')).toHaveTextContent('0 / 5');expect(screen.getByRole('status')).toHaveTextContent('Not yet passed');
 expect(screen.getAllByRole('link',{name:/Review lesson:/})).toHaveLength(5);
 fireEvent.click(screen.getByRole('button',{name:'Retry with a fresh attempt'}));
 for(const q of a.questions)fireEvent.click(within(screen.getByRole('group',{name:q.question})).getByLabelText(q.answer));
 fireEvent.click(screen.getByRole('button',{name:'Score this attempt'}));expect(screen.getByRole('status')).toHaveTextContent('5 / 5');
 const state=JSON.parse(localStorage.getItem(STORAGE_KEY)!).subjects.philosophy;expect(state.completed).toEqual([]);expect(state.assessments[a.id].map((x:{passed:boolean})=>x.passed)).toEqual([false,true]);
 view.unmount();render(<AssessmentLesson program={program} assessmentId={a.id}/>);expect(screen.getByText(/Previous attempts: 2/)).toBeInTheDocument();
});
