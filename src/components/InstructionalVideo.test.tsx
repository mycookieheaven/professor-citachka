import {afterEach,expect,it} from 'vitest';
import {cleanup,fireEvent,render,screen} from '@testing-library/react';
import {InstructionalVideo} from './InstructionalVideo';
import {instructionalVideos} from '@/lib/instructional-videos';
afterEach(cleanup);
it.each(Object.entries(instructionalVideos))('loads verified %s video only by request, in-page, with caption request and fallback', (id,video)=>{
 render(<InstructionalVideo videoId={id}/>);expect(screen.getByRole('heading',{name:video.title})).toBeVisible();expect(document.querySelector('iframe')).toBeNull();
 fireEvent.click(screen.getByRole('button',{name:'Load video here'}));const iframe=screen.getByTitle(video.title);expect(iframe).toHaveAttribute('src',`https://www.youtube-nocookie.com/embed/${id}?autoplay=0&cc_load_policy=1&cc_lang_pref=en&rel=0`);expect(screen.getByText(/If the player is blocked/)).toBeVisible();fireEvent.click(screen.getByRole('button',{name:'Hide video'}));expect(document.querySelector('iframe')).toBeNull();
});
