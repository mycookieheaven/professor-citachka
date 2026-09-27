import {afterEach,expect,it,vi} from 'vitest';
import {cleanup,render,screen,act} from '@testing-library/react';
import {SubjectProgress,StorageNotice} from '@/components/Learning';
import {recordStudy,recordPosition} from './study-store';
import {STORAGE_KEY} from './progress';
afterEach(()=>{cleanup();vi.restoreAllMocks();recordStudy('test-reset','reset');localStorage.clear();});
it('migrates real old legacy completions without inventing days and resumes next legacy lesson',()=>{
 localStorage.setItem('professor-citachka:completed-lessons',JSON.stringify(['finance/cash-flow-basics','finance/debt-interest-and-risk']));
 render(<SubjectProgress subject="finance"/>);
 expect(screen.getByRole('link',{name:/Continue extended Finance: Investing: Time, Mix, and Uncertainty/})).toHaveAttribute('href','/subjects/finance/investing-fundamentals');
 expect(screen.getByText(/0 study interactions · 0 distinct days/)).toBeVisible();
 act(()=>recordStudy('finance','legacy:investing-fundamentals','legacy:markets-and-valuation'));
 expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).subjects.finance.completed).toEqual(['legacy:cash-flow-basics','legacy:debt-interest-and-risk','legacy:investing-fundamentals']);
 expect(JSON.parse(localStorage.getItem('professor-citachka:completed-lessons')!)).toHaveLength(2);
});
it('review completion preserves forward position in either sequence',()=>{
 recordStudy('finance','legacy:cash-flow-basics','legacy:debt-interest-and-risk');recordPosition('finance','legacy:investing-fundamentals');recordStudy('finance','legacy:cash-flow-basics','legacy:debt-interest-and-risk');
 expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).subjects.finance.position).toBe('legacy:investing-fundamentals');
});
it('backs up malformed ledger instead of destroying original data',()=>{
 localStorage.setItem(STORAGE_KEY,'{broken');render(<StorageNotice/>);expect(screen.getByText(/damaged progress/)).toBeVisible();
 act(()=>recordStudy('finance','01','02'));
 expect(localStorage.getItem(`${STORAGE_KEY}:recovery`)).toBe('{broken');expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).subjects.finance.completed).toEqual(['01']);
});
it('does not report success when storage silently ignores a write',()=>{
 vi.spyOn(localStorage,'setItem').mockImplementation(()=>{});
 expect(recordStudy('finance','01','02')).toBe(false);
});
it('survives blocked storage reads without replacing durable prior progress',()=>{
 const original=JSON.stringify({version:1,subjects:{finance:{completed:['01'],days:[],interactions:0,position:'02'}}});localStorage.setItem(STORAGE_KEY,original);
 render(<StorageNotice/>);const read=vi.spyOn(localStorage,'getItem').mockImplementation(()=>{throw new Error('blocked');});
 act(()=>expect(recordStudy('finance','02','03')).toBe(false));expect(screen.getByText(/Storage is unavailable/)).toBeVisible();
 read.mockRestore();expect(localStorage.getItem(STORAGE_KEY)).toBe(original);
});
it('reports blocked writes and retains real session progress',()=>{
 render(<><SubjectProgress subject="finance"/><StorageNotice/></>);vi.spyOn(localStorage,'setItem').mockImplementation(()=>{throw new Error('quota');});
 act(()=>expect(recordStudy('finance','01','02')).toBe(false));expect(screen.getByText(/Storage is unavailable/)).toBeVisible();expect(screen.getByRole('progressbar')).toHaveAttribute('value','1');
});
