import {it,expect,vi,afterEach} from 'vitest';
import {render,screen,fireEvent,cleanup} from '@testing-library/react';
import {programs,allTopics} from '@/lib/programs';
import {emptyProgress,completeTopic,STORAGE_KEY} from '@/lib/progress';
import {LearningLesson,isUnlocked} from './Learning';
const push=vi.fn();vi.mock('next/navigation',()=>({useRouter:()=>({push})}));
afterEach(()=>{cleanup();localStorage.clear();vi.useRealTimers();push.mockClear();});
it.each(['20','30','40','50','60'])('preserves checks and navigates expanded Philosophy boundary %s', (id)=>{
 vi.useFakeTimers();const p=programs.find(p=>p.id==='philosophy')!;const topics=allTopics(p);const index=topics.findIndex(t=>t.id===id);expect(index).toBeGreaterThanOrEqual(0);
 let progress=emptyProgress();for(const t of topics.slice(0,index))progress=completeTopic(progress,p.id,t.id,new Date());localStorage.setItem(STORAGE_KEY,JSON.stringify(progress));
 render(<LearningLesson program={p} topicId={id}/>);const t=topics[index];
 fireEvent.click(screen.getByLabelText(t.distractor));expect(screen.getByRole('status')).toHaveTextContent(t.correction);expect(screen.getByRole('button',{name:/Next lesson:|Unit quiz:/})).toBeEnabled();
 fireEvent.click(screen.getByLabelText(t.answer));fireEvent.click(screen.getByRole('button',{name:/Next lesson:|Unit quiz:/}));
 expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).subjects.philosophy.completed).toContain(id);
 expect(screen.getByRole('status')).toHaveTextContent('Reading recorded');expect(push).toHaveBeenCalledWith(`/assess/philosophy/unit-${Math.ceil(Number(id)/10)}-2`);
});
it('opens every topic in order and preserves every completed review across every published level',()=>{
 for(const p of programs){let progress=emptyProgress();for(const level of p.levels){for(const t of level.topics){expect(isUnlocked(p,t.id,progress)).toBe(true);progress=completeTopic(progress,p.id,t.id,new Date());}}for(const t of allTopics(p))expect(isUnlocked(p,t.id,progress)).toBe(true);}
});
it('navigates from topic ten into the second unit quiz before the level test',()=>{
 vi.useFakeTimers();const p=programs.find(p=>p.id==='finance')!;let progress=emptyProgress();for(const t of allTopics(p).slice(0,9))progress=completeTopic(progress,p.id,t.id,new Date());localStorage.setItem(STORAGE_KEY,JSON.stringify(progress));
 render(<LearningLesson program={p} topicId="10"/>);const t=allTopics(p)[9];fireEvent.click(screen.getByLabelText(t.answer));fireEvent.click(screen.getByRole('button',{name:/Next lesson:|Unit quiz:/}));expect(screen.getByRole('status')).toHaveTextContent('Reading recorded');expect(push).toHaveBeenCalledWith('/assess/finance/unit-1-2');
});
it('keeps adult Russian material behind consent and provides Slow and Natural controls for every taught item',()=>{
 const p=programs.find(p=>p.id==='russian')!;let progress=emptyProgress();for(const t of allTopics(p))progress=completeTopic(progress,p.id,t.id,new Date());localStorage.setItem(STORAGE_KEY,JSON.stringify(progress));
 for(const level of p.levels)for(const t of level.topics){const view=render(<LearningLesson program={p} topicId={t.id}/>);const items=t.russian?[t.russian]:t.russianItems??[];expect(items.length).toBeGreaterThan(0);if(level.supplemental){expect(screen.queryByText(t.russian!.text,{exact:true})).not.toBeInTheDocument();fireEvent.click(screen.getByRole('button',{name:'Enter strong-language lesson'}));}for(const item of items)expect(screen.getAllByText(item.text,{exact:true,selector:'strong'})[0]).toBeVisible();expect(screen.getAllByRole('button',{name:/Play slow pronunciation for/})).toHaveLength(items.length);expect(screen.getAllByRole('button',{name:/Play natural pronunciation for/})).toHaveLength(items.length);view.unmount();}
});
it('keeps music micropractice optional even with no practice confirmation',()=>{
 const p=programs.find(p=>p.id==='music')!;render(<LearningLesson program={p} topicId="01"/>);fireEvent.click(screen.getByLabelText(allTopics(p)[0].answer));expect(screen.getByRole('button',{name:/Next lesson:|Unit quiz:/})).toBeEnabled();fireEvent.click(screen.getByLabelText(/tried the physical practice/));expect(screen.getByRole('button',{name:/Next lesson:|Unit quiz:/})).toBeEnabled();
});
