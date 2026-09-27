import {afterEach,expect,it,vi} from 'vitest';
import {cleanup,fireEvent,render,screen} from '@testing-library/react';
import {LessonVisual,lessonVisuals} from './LessonVisual';
afterEach(()=>{cleanup();vi.useRealTimers();});
it.each(Object.keys(lessonVisuals))('renders distinct labeled %s diagram with user-controlled steps, never a fake video',id=>{
 render(<LessonVisual id={id}/>);expect(screen.getByRole('img')).toHaveAccessibleName(lessonVisuals[id].title);expect(document.querySelector('video,iframe')).toBeNull();
 expect(screen.getByRole('button',{name:'Previous step'})).toBeDisabled();expect(screen.getByText(lessonVisuals[id].steps[0],{selector:'p'})).toBeVisible();
 fireEvent.click(screen.getByRole('button',{name:'Next step'}));expect(screen.getByText(lessonVisuals[id].steps[1],{selector:'p'})).toBeVisible();
 expect(screen.getByText(/Animated diagram, not a video/)).toBeVisible();
});
it('does not autoplay, allows a finite silent demonstration and stop',()=>{
 vi.useFakeTimers();render(<LessonVisual id="philosophy/01"/>);expect(screen.getByText(lessonVisuals['philosophy/01'].steps[0],{selector:'p'})).toBeVisible();
 fireEvent.click(screen.getByRole('button',{name:'Play demonstration'}));expect(screen.getByRole('button',{name:'Pause demonstration'})).toBeVisible();fireEvent.click(screen.getByRole('button',{name:'Pause demonstration'}));expect(screen.getByRole('button',{name:'Play demonstration'})).toBeVisible();
});
