import {render,screen,fireEvent,cleanup} from '@testing-library/react';
import {LegacyCompletion} from './LegacyCompletion';
import {STORAGE_KEY} from '@/lib/progress';
import {vi,it,expect,afterEach} from 'vitest';
afterEach(()=>{cleanup();vi.useRealTimers();localStorage.clear();});
it('removes the written response and records an eligible completed lesson',()=>{
 vi.useFakeTimers();const onComplete=vi.fn();render(<LegacyCompletion lessonId="finance/cash-flow-basics" model="Income greater than spending produces a surplus." onComplete={onComplete} eligible={true}/>);
 const finish=screen.getByRole('button',{name:/Next lesson:|Complete sequence & review/});expect(finish).toBeEnabled();
 expect(screen.queryByRole('textbox')).not.toBeInTheDocument();fireEvent.click(finish);
 expect(onComplete).toHaveBeenCalledOnce();expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).subjects.finance.interactions).toBe(1);
 expect(screen.getByRole('status')).toHaveTextContent('Next: Debt, Interest, and Risk');
 expect(screen.queryByRole('button',{name:'Stay to review'})).not.toBeInTheDocument();
});
