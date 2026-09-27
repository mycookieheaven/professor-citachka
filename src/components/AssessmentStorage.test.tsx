import {afterEach,expect,it,vi} from 'vitest';
import {cleanup,fireEvent,render,screen} from '@testing-library/react';
import {AssessmentLesson} from './AssessmentLesson';
import {getProgram,allTopics} from '@/lib/programs';
import {recordStudy,recordAssessmentPosition,recordAssessment,retryStudySave} from '@/lib/study-store';
import {courseAssessments} from '@/lib/assessments';
import {STORAGE_KEY} from '@/lib/progress';
const push=vi.fn();vi.mock('next/navigation',()=>({useRouter:()=>({push})}));
const p=getProgram('philosophy')!;const a=courseAssessments(p)[0];
afterEach(()=>{cleanup();vi.restoreAllMocks();retryStudySave();localStorage.clear();push.mockReset();});
it('reviewing an old assessment after finishing reading does not invent a backward resume',()=>{
 localStorage.setItem(STORAGE_KEY,JSON.stringify({version:1,subjects:{philosophy:{completed:allTopics(p).map(t=>t.id),days:[],interactions:0}}}));
 recordAssessmentPosition('philosophy',a.id,'06');expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).subjects.philosophy.position).toBeUndefined();
});
it('flags malformed assessment history while retaining old reading and backing it up',()=>{
 const raw=JSON.stringify({version:1,subjects:{philosophy:{completed:['01'],days:[],interactions:0,assessments:{'unit-1-1':[{correct:5,total:5,passed:true,at:'invalid',answers:{}}]}}}});localStorage.setItem(STORAGE_KEY,raw);
 render(<AssessmentLesson program={p} assessmentId={a.id}/>);expect(screen.getByText(/Some saved data could not be read/)).toBeVisible();
 recordStudy('philosophy','02','03');expect(localStorage.getItem(`${STORAGE_KEY}:recovery`)).toBe(raw);expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).subjects.philosophy.completed).toEqual(['01','02']);
});
it('failed storage retains one scored attempt in session and retry does not duplicate it',()=>{
 render(<AssessmentLesson program={p} assessmentId={a.id}/>);for(const q of a.questions)fireEvent.click(screen.getByLabelText(q.answer));
 const failure=vi.spyOn(localStorage,'setItem').mockImplementation(()=>{throw Error('blocked');});fireEvent.click(screen.getByRole('button',{name:'Score this attempt'}));
 expect(screen.getByRole('status')).toHaveTextContent('Not durably saved');expect(push).not.toHaveBeenCalled();failure.mockRestore();fireEvent.click(screen.getByRole('button',{name:'Retry saving'}));
 expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).subjects.philosophy.assessments[a.id]).toHaveLength(1);
});
it('assessment review cannot erase forward position and legacy completions create no scores or invented dates',()=>{
 localStorage.setItem(STORAGE_KEY,JSON.stringify({version:1,subjects:{philosophy:{completed:['01','02'],days:[],interactions:0,position:'21'}}}));
 localStorage.setItem('professor-citachka:completed-lessons',JSON.stringify(['finance/cash-flow-basics']));
 recordAssessment('philosophy',a,{});recordAssessmentPosition('philosophy',a.id,'06');
 const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)!);expect(saved.subjects.philosophy.position).toBe('21');expect(saved.subjects.finance).toMatchObject({completed:['legacy:cash-flow-basics'],days:[],interactions:0});expect(saved.subjects.finance.assessments).toBeUndefined();
});
