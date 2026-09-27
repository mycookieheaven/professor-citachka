import {afterEach,expect,it,vi} from 'vitest';
import {cleanup,fireEvent,render,screen} from '@testing-library/react';
import {LearningLesson} from './Learning';
import {LegacyCompletion} from './LegacyCompletion';
import {FundingLesson} from './FundingLesson';
import {ReadingPractice} from '@/app/subjects/literature/ReadingPractice';
import {books} from '@/app/subjects/literature/books';
import {getProgram} from '@/lib/programs';
import {STORAGE_KEY} from '@/lib/progress';
const push=vi.fn();vi.mock('next/navigation',()=>({useRouter:()=>({push})}));
afterEach(()=>{cleanup();localStorage.clear();push.mockReset();});
it('saves reading and continues without attempting practice',()=>{
 render(<LearningLesson program={getProgram('philosophy')!} topicId="01"/>);
 const next=screen.getByRole('button',{name:/Next lesson:/});expect(next).toBeEnabled();fireEvent.click(next);
 expect(push).toHaveBeenCalledWith('/learn/philosophy/02');
 const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)!);expect(saved.subjects.philosophy.completed).toContain('01');expect(saved.subjects.philosophy.assessments??{}).toEqual({});
});
it('legacy completion ignores obsolete eligibility without inventing a score',()=>{
 render(<LegacyCompletion lessonId="finance/cash-flow-basics" model="Review cash timing." eligible={false}/>);
 fireEvent.click(screen.getByRole('button',{name:/Next lesson:/}));expect(push).toHaveBeenCalledWith('/subjects/finance/debt-interest-and-risk');
});
it('funding writing and roleplay remain optional',()=>{
 render(<FundingLesson topicId="01"/>);fireEvent.click(screen.getByRole('button',{name:/Next lesson:/}));expect(push).toHaveBeenCalledWith('/learn/business-funding/02');
});
it('reading guide does not require an essay or correct answer',()=>{
 render(<ReadingPractice book={books[0]}/>);fireEvent.click(screen.getByRole('button',{name:/Next reading guide:/}));expect(push).toHaveBeenCalledWith(`/subjects/literature#${books[1].id}`);
});
