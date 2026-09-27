import {afterEach,expect,it,vi} from 'vitest';
import {cleanup,fireEvent,render,screen} from '@testing-library/react';
import {FundingLesson} from './FundingLesson';
import {SubjectProgress} from './Learning';
import {fundingTopics,fundingProgram} from '@/lib/funding';
import {lessonDestination} from '@/lib/assessments';
import {STORAGE_KEY} from '@/lib/progress';
import {recordStudy} from '@/lib/study-store';
const push=vi.fn();vi.mock('next/navigation',()=>({useRouter:()=>({push})}));
afterEach(()=>{cleanup();vi.restoreAllMocks();recordStudy('test-reset','reset');localStorage.clear();push.mockReset();});
function fixture(index:number){localStorage.setItem(STORAGE_KEY,JSON.stringify({version:1,subjects:{'business-funding':{completed:fundingTopics.slice(0,index).map(t=>t.id),days:[],interactions:0,position:fundingTopics[index].id},finance:{completed:['01'],days:[],interactions:1,position:'02'}}}));}
function interact(index:number){const t=fundingTopics[index];fireEvent.change(screen.getByRole('textbox'),{target:{value:t.model}});fireEvent.click(screen.getByRole('button',{name:'Compare with the authored model'}));t.rubric.forEach(r=>fireEvent.click(screen.getByLabelText(r)));fireEvent.click(screen.getByLabelText(t.answer));}
it.each(fundingTopics.map((t,i)=>({id:t.id,index:i,title:t.title})))('exercises authored topic $id: $title, including every unit boundary and final return',({id,index})=>{
 fixture(index);const view=render(<FundingLesson topicId={id}/>);const t=fundingTopics[index],destination=lessonDestination(fundingProgram,id);
 expect(screen.getByRole('heading',{level:1,name:t.title})).toHaveFocus();
 expect(screen.getByRole('button',{name:'Compare with the authored model'})).toBeEnabled();
 const arrow=screen.getByRole('button',{name:destination.title});
 fireEvent.click(screen.getByLabelText(t.distractor));expect(arrow).toBeEnabled();expect(screen.getByRole('status')).toHaveTextContent('Unsafe or incomplete branch');
 interact(index);expect(arrow).toBeEnabled();fireEvent.click(arrow);
 expect(push).toHaveBeenCalledExactlyOnceWith(destination.url);
 const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)!);expect(saved.subjects['business-funding'].completed).toContain(id);expect(saved.subjects['business-funding'].position).toBe(destination.position);expect(saved.subjects.finance.position).toBe('02');
 view.unmount();render(<SubjectProgress subject="business-funding"/>);expect(screen.getByRole('link',{name:destination.position?.startsWith('assessment:')?/Continue assessment:/:/Continue Business Funding & Sales:/})).toHaveAttribute('href',destination.url);
});
it('blocks advanced direct access without prerequisites',()=>{render(<FundingLesson topicId="50"/>);expect(screen.getByRole('heading',{name:'One step at a time'})).toBeVisible();expect(screen.queryByRole('textbox')).not.toBeInTheDocument();});
it('invalidates self-review after writing changes and preserves feedback until explicit arrow',()=>{
 render(<FundingLesson topicId="01"/>);interact(0);expect(push).not.toHaveBeenCalled();expect(screen.getByRole('status')).toHaveTextContent('Sound branch');
 fireEvent.change(screen.getByRole('textbox'),{target:{value:'Revised response still long enough but requires another review.'}});expect(screen.getByRole('button',{name:/Next lesson:/})).toBeEnabled();expect(screen.queryByText('Self-review, not AI evaluation')).not.toBeInTheDocument();
});
it('review never regresses resume and same-day review does not invent duplicate study days',()=>{
 fixture(40);render(<FundingLesson topicId="01"/>);interact(0);fireEvent.click(screen.getByRole('button',{name:/Next lesson:/}));cleanup();
 render(<FundingLesson topicId="01"/>);interact(0);fireEvent.click(screen.getByRole('button',{name:/Next lesson:/}));
 const s=JSON.parse(localStorage.getItem(STORAGE_KEY)!).subjects['business-funding'];expect(s.position).toBe('41');expect(s.completed).toHaveLength(40);expect(s.days).toHaveLength(1);expect(s.interactions).toBe(2);
});
it('retains readable malformed-data warning without unlocking advanced content',()=>{
 localStorage.setItem(STORAGE_KEY,'broken');render(<FundingLesson topicId="50"/>);expect(screen.getByText(/Some saved data could not be read/)).toBeVisible();expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
});
it('blocked writes never claim a durable save; retry commits once',()=>{
 render(<FundingLesson topicId="01"/>);interact(0);const fail=vi.spyOn(localStorage,'setItem').mockImplementation(()=>{throw Error('quota');});
 const arrow=screen.getByRole('button',{name:/Next lesson:/});fireEvent.click(arrow);expect(push).not.toHaveBeenCalled();expect(screen.getByRole('status')).toHaveTextContent('Could not save');expect(screen.getByRole('button',{name:'Continue without saving'})).toBeVisible();
 fail.mockRestore();fireEvent.click(arrow);expect(push).toHaveBeenCalledOnce();const s=JSON.parse(localStorage.getItem(STORAGE_KEY)!).subjects['business-funding'];expect(s.interactions).toBe(1);expect(s.position).toBe('02');
});
