import {act,cleanup,fireEvent,render,screen} from '@testing-library/react';
import {afterEach,beforeEach,describe,expect,it,vi} from 'vitest';
import {StudyAtmosphere} from './StudyAtmosphere';
const KEY='citachka-atmosphere-v1';
let reduced=false;let changes:Array<()=>void>=[];
beforeEach(()=>{localStorage.clear();reduced=false;changes=[];vi.stubGlobal('matchMedia',vi.fn(()=>({get matches(){return reduced;},addEventListener:(_:string,fn:()=>void)=>changes.push(fn),removeEventListener:vi.fn()})));});
afterEach(()=>{cleanup();vi.restoreAllMocks();vi.unstubAllGlobals();});
describe('study atmosphere preferences',()=>{
 it('never briefly enables Lively while restoring a saved Calm preference',()=>{localStorage.setItem(KEY,JSON.stringify({motion:'calm',focus:false}));const seen:string[]=[];const observe=()=>seen.push(document.documentElement.dataset.motion!);window.addEventListener('citachka-atmosphere-change',observe);render(<StudyAtmosphere/>);window.removeEventListener('citachka-atmosphere-change',observe);expect(seen).not.toContain('lively');});
 it('honors live OS reduced motion even when Lively is selected',()=>{render(<StudyAtmosphere/>);expect(document.documentElement.dataset.motion).toBe('lively');act(()=>{reduced=true;changes.forEach(fn=>fn());});expect(document.documentElement.dataset.motion).toBe('calm');expect(screen.getByText(/Your device requests reduced motion/)).toBeInTheDocument();fireEvent.click(screen.getByRole('button',{name:'Lively'}));expect(document.documentElement.dataset.motion).toBe('calm');act(()=>{reduced=false;changes.forEach(fn=>fn());});expect(document.documentElement.dataset.motion).toBe('lively');});
 it('uses safe defaults for malformed preferences and reports blocked writes without losing session controls',()=>{localStorage.setItem(KEY,'{"motion":"spin","focus":42}');render(<StudyAtmosphere/>);expect(screen.getByRole('button',{name:'Lively'})).toHaveAttribute('aria-pressed','true');vi.spyOn(localStorage,'setItem').mockImplementation(()=>{throw Error('blocked');});fireEvent.click(screen.getByRole('button',{name:'Calm'}));expect(document.documentElement.dataset.motion).toBe('calm');expect(screen.getByText(/Preferences apply to this tab only/)).toBeInTheDocument();});
 it('detects silent preference write failures and blocked reads',()=>{vi.spyOn(localStorage,'getItem').mockImplementation(()=>{throw Error('blocked');});render(<StudyAtmosphere/>);expect(screen.getByText(/Preferences apply to this tab only/)).toBeInTheDocument();vi.restoreAllMocks();vi.spyOn(localStorage,'setItem').mockImplementation(()=>{});fireEvent.click(screen.getByRole('button',{name:'Calm'}));expect(screen.getByText(/Preferences apply to this tab only/)).toBeInTheDocument();});

 it('offers global Lively / Calm controls, persists and restores focus without touching study records',()=>{
 localStorage.setItem('citachka-study-v1','existing-progress');const view=render(<StudyAtmosphere/>);
 fireEvent.click(screen.getByRole('button',{name:'Calm'}));fireEvent.click(screen.getByRole('button',{name:'Reading focus'}));
 expect(document.documentElement.dataset.motion).toBe('calm');expect(document.documentElement.dataset.focus).toBe('on');
 expect(screen.getByRole('button',{name:'Calm'})).toHaveAttribute('aria-pressed','true');
 expect(JSON.parse(localStorage.getItem(KEY)!)).toEqual({motion:'calm',focus:true});expect(localStorage.getItem('citachka-study-v1')).toBe('existing-progress');
 view.unmount();render(<StudyAtmosphere/>);expect(screen.getByRole('button',{name:'Reading focus'})).toHaveAttribute('aria-pressed','true');
 });
});
