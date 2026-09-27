import {afterEach,expect,it,vi} from 'vitest';
import {cleanup,fireEvent,render,screen} from '@testing-library/react';
import {LearningLesson,SubjectProgress} from './Learning';
import {getProgram,allTopics} from '@/lib/programs';
import {STORAGE_KEY} from '@/lib/progress';
const push=vi.fn();vi.mock('next/navigation',()=>({useRouter:()=>({push})}));
afterEach(()=>{cleanup();localStorage.clear();push.mockReset();});
it('next title arrow commits before navigation, survives unmount/reload and opens the next real check',()=>{
 const p=getProgram('finance')!;const [first,second]=allTopics(p);
 const view=render(<LearningLesson program={p} topicId={first.id}/>);
 const arrow=screen.getByRole('button',{name:`Next lesson: ${second.title}`});
 fireEvent.click(screen.getByLabelText(first.distractor));expect(arrow).toBeEnabled();expect(push).not.toHaveBeenCalled();
 fireEvent.click(screen.getByLabelText(first.answer));
 push.mockImplementation(()=>{const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)!);expect(saved.subjects.finance.completed).toContain(first.id);expect(saved.subjects.finance.position).toBe(second.id);});
 fireEvent.click(arrow);expect(push).toHaveBeenCalledExactlyOnceWith(`/learn/finance/${second.id}`);
 view.unmount();render(<SubjectProgress subject="finance"/>);expect(screen.getByRole('link',{name:`Continue Finance: ${second.title}`})).toHaveAttribute('href',`/learn/finance/${second.id}`);cleanup();
 render(<LearningLesson program={p} topicId={second.id}/>);expect(screen.getByLabelText(second.answer)).not.toBeChecked();expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
});
