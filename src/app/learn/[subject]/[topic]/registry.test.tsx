import {expect,it,vi} from 'vitest';
import {render,screen} from '@testing-library/react';
import {programs,getProgram,allTopics} from '@/lib/programs';
import {courseUnits} from '@/lib/assessments';
import {emptyProgress,completeTopic,STORAGE_KEY} from '@/lib/progress';
import {generateStaticParams} from './page';
import Page from './page';
vi.mock('next/navigation',()=>({useRouter:()=>({push:vi.fn()}),notFound:()=>{throw new Error('NOT_FOUND');}}));
it('registers the reviewed continuation level for every course, keeping Russian first and Funding second',()=>{
 expect(programs.slice(0,2).map(p=>p.id)).toEqual(['russian','business-funding']);
 const core=(id:string)=>courseUnits(getProgram(id)!).filter(u=>!getProgram(id)!.levels[u.levelIndex].supplemental).length;
 expect(core('russian')).toBe(18);expect(core('business-funding')).toBe(22);expect(core('philosophy')).toBe(20);
 for(const id of ['neuroscience','veterinary-science','theology','music','psychiatry'])expect(core(id)).toBe(16);
 expect(core('skincare')).toBe(14);expect(core('finance')).toBe(14);expect(core('literature')).toBe(14);
  expect(allTopics(getProgram('russian')!).map(t=>t.id)).toContain('90');
 expect(generateStaticParams()).toContainEqual({subject:'business-funding',topic:'60'});
});
it('renders original funding lessons with the specialized renderer and new funding lessons with the generic depth renderer',async()=>{
 let progress=emptyProgress();for(const t of allTopics(getProgram('business-funding')!).slice(0,50))progress=completeTopic(progress,'business-funding',t.id,new Date());
 localStorage.setItem(STORAGE_KEY,JSON.stringify(progress));
 render(await Page({params:Promise.resolve({subject:'business-funding',topic:'51'})}));
 const topic=allTopics(getProgram('business-funding')!).find(t=>t.id==='51')!;
 expect(screen.getByRole('heading',{level:1,name:topic.title})).toBeInTheDocument();
 expect(screen.getByRole('heading',{name:'Readings and evidence'})).toBeInTheDocument();
});
