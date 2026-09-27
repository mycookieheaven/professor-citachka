import {afterEach,expect,it,vi} from 'vitest';
import {cleanup,fireEvent,render,screen} from '@testing-library/react';
import {MusicLesson,musicLessons} from '@/app/subjects/music/MusicLesson';
import {SkincareLesson,skincareLessons} from '@/app/subjects/skincare/SkincareLesson';
import {VeterinaryLesson} from '@/app/subjects/veterinary-science/VeterinaryLesson';
vi.mock('next/navigation',()=>({useRouter:()=>({push:vi.fn()})}));
afterEach(()=>{cleanup();localStorage.clear();});
it.each([
 {name:'music',first:()=> <MusicLesson slug={musicLessons[0].slug}/>,second:()=> <MusicLesson slug={musicLessons[1].slug}/>,answer:musicLessons[0].choices[0],next:'/subjects/music/note-names-and-keyboard-map'},
 {name:'skincare',first:()=> <SkincareLesson slug={skincareLessons[0].slug}/>,second:()=> <SkincareLesson slug={skincareLessons[1].slug}/>,answer:skincareLessons[0].choices[0],next:'/subjects/skincare/build-a-basic-routine'},
])('$name has only one gated next action and fresh checks after a route change',({first,second,answer,next})=>{
 const view=render(first());expect(screen.queryAllByRole('link').filter(a=>a.getAttribute('href')===next)).toHaveLength(0);
 fireEvent.click(screen.getByRole('button',{name:answer}));view.rerender(second());
 expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
 expect(screen.getByRole('button',{name:/Next lesson:/})).toBeEnabled();
});
it('veterinary forward navigation cannot bypass the learning check and save',()=>{
 render(<VeterinaryLesson lessonSlug="clinical-foundations"/>);expect(screen.queryAllByRole('link').filter(a=>a.getAttribute('href')==='/subjects/veterinary-science/comparative-anatomy')).toHaveLength(0);
});
