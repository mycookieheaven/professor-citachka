import {expect,it,vi} from 'vitest';
import {render,cleanup} from '@testing-library/react';
import {readFileSync} from 'node:fs';
import Home from './page';
import {LearningLesson} from '@/components/Learning';
import {getProgram} from '@/lib/programs';
vi.mock('next/navigation',()=>({useRouter:()=>({push:vi.fn()}),usePathname:()=>'/'}));
it('wallpaper exists only in dashboard markup, never a global body rule',()=>{
 const css=readFileSync('src/app/learning.css','utf8');
 expect(css).not.toMatch(/body::before\s*\{[^}]*monchhichi/);
 expect(css).toMatch(/body\s*\{[^}]*background:\s*#8b365f/);
 const home=render(<Home/>);expect(home.container.querySelectorAll('.site-shell > .monchhichi-wallpaper')).toHaveLength(1);cleanup();
 const lesson=render(<LearningLesson program={getProgram('finance')!} topicId="01"/>);expect(lesson.container.querySelector('.monchhichi-wallpaper')).toBeNull();cleanup();
});
