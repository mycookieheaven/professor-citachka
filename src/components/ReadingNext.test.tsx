import {afterEach,expect,it,vi} from 'vitest';
import {cleanup,fireEvent,render,screen} from '@testing-library/react';
import {ReadingNext} from './ReadingNext';
afterEach(()=>{cleanup();vi.unstubAllGlobals();});
it('always provides a keyboard-reachable manual next without IntersectionObserver',()=>{const next=vi.fn();render(<ReadingNext onClick={next}>Next lesson: Sound</ReadingNext>);fireEvent.click(screen.getByRole('button',{name:'Next lesson: Sound'}));expect(next).toHaveBeenCalledOnce();});
it('reaching the sentinel highlights the arrow but does not navigate or record mastery',()=>{
 let callback:IntersectionObserverCallback=()=>{};vi.stubGlobal('IntersectionObserver',class{constructor(cb:IntersectionObserverCallback){callback=cb;}observe(){}disconnect(){}});
 const next=vi.fn();render(<ReadingNext onClick={next}>Unit quiz: Sounds</ReadingNext>);expect(next).not.toHaveBeenCalled();callback([{isIntersecting:true}] as IntersectionObserverEntry[],{} as IntersectionObserver);expect(next).not.toHaveBeenCalled();expect(screen.getByRole('button',{name:'Unit quiz: Sounds'})).toBeEnabled();
});
