import {afterEach,expect,it,vi} from 'vitest';
import {cleanup,render,screen,fireEvent} from '@testing-library/react';
import {LearningLesson} from './Learning';
import {LegacyCompletion} from './LegacyCompletion';
import {getProgram,allTopics} from '@/lib/programs';
import {recordStudy} from '@/lib/study-store';
import {STORAGE_KEY} from '@/lib/progress';
const push=vi.fn();vi.mock('next/navigation',()=>({useRouter:()=>({push})}));
afterEach(()=>{cleanup();vi.restoreAllMocks();recordStudy('test-reset','reset');localStorage.clear();push.mockReset();});
it.each(['modern','legacy'])('%s blocked storage prevents false navigation; retry saves exactly once',kind=>{
 if(kind==='modern'){
 const p=getProgram('finance')!;render(<LearningLesson program={p} topicId="01"/>);fireEvent.click(screen.getByLabelText(allTopics(p)[0].answer));
 }else{render(<LegacyCompletion lessonId="finance/cash-flow-basics" model="Income versus expenditure."/>);}
 const fail=vi.spyOn(localStorage,'setItem').mockImplementation(()=>{throw new Error('quota');});
 const arrow=screen.getByRole('button',{name:/Next lesson:/});fireEvent.click(arrow);expect(push).not.toHaveBeenCalled();expect(screen.getByRole('status')).toHaveTextContent(/session only/);expect(screen.getByRole('button',{name:'Continue without saving'})).toBeVisible();
 fail.mockRestore();fireEvent.click(arrow);expect(push).toHaveBeenCalledOnce();expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).subjects.finance.interactions).toBe(1);
});
it('a fresh module after reload restores completed topics from durable storage, not memory',async()=>{
 recordStudy('finance','01','02');vi.resetModules();const fresh=await import('@/lib/study-store');fresh.recordStudy('finance','02','03');
 const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)!).subjects.finance;expect(saved.completed).toEqual(['01','02']);expect(saved.position).toBe('03');expect(saved.interactions).toBe(2);
});
