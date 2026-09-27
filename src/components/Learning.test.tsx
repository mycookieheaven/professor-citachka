import {render,screen,fireEvent,cleanup} from '@testing-library/react';
import {beforeEach,afterEach,describe,it,expect,vi} from 'vitest';
import {LearningLesson,ProgramPath,SubjectProgress} from './Learning';
import {programs,allTopics} from '@/lib/programs';
import {emptyProgress,completeTopic,STORAGE_KEY} from '@/lib/progress';
const push=vi.fn();
vi.mock('next/navigation',()=>({useRouter:()=>({push}),usePathname:()=>'/learn/finance/01'}));
const p=programs.find(x=>x.id==='finance')!;
beforeEach(()=>{localStorage.clear();push.mockClear();});
afterEach(()=>{cleanup();vi.useRealTimers();});
function answer(){fireEvent.click(screen.getByLabelText(p.levels[0].topics[0].answer));}
describe('guided learning and resume',()=>{
 it('reports the actual expanded Philosophy scope rather than a fixed introductory count',()=>{
  render(<ProgramPath subject="philosophy"/>);
  expect(screen.getByText(/Published now: 20 of 100 requested core units/)).toBeVisible();
  expect(screen.queryByText(/These are two authored/)).not.toBeInTheDocument();
 });
 it('keeps retrieval optional, persists it, and navigates immediately on the next-title arrow',()=>{
  vi.useFakeTimers();render(<LearningLesson program={p} topicId="01"/>);
  expect(screen.getByRole('button',{name:/Next lesson:|Complete path & review/})).toBeEnabled();
  fireEvent.click(screen.getByLabelText(p.levels[0].topics[0].distractor));
  expect(screen.getByRole('status')).toHaveTextContent(p.levels[0].topics[0].correction);
  expect(localStorage.getItem(STORAGE_KEY)).not.toContain('"interactions":1');
  answer();fireEvent.click(screen.getByRole('button',{name:/Next lesson:|Complete path & review/}));
  expect(screen.getByRole('status')).toHaveTextContent('Next: Needs and priorities');
  expect(push).toHaveBeenCalledOnce();
  expect(push).toHaveBeenCalledWith('/learn/finance/02');
  cleanup();render(<SubjectProgress subject="finance"/>);
  expect(screen.getByRole('progressbar')).toHaveAttribute('value','1');
  expect(screen.getByRole('link',{name:/Continue Finance: Needs and priorities/})).toHaveAttribute('href','/learn/finance/02');
  expect(screen.getByText(/Good standing/)).toBeVisible();
 });
 it('does not count visits and locks later topics until prior readings are saved',()=>{
  render(<LearningLesson program={p} topicId="11"/>);
  expect(screen.getByText(/Save earlier readings/)).toBeVisible();
  expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
 });
 it('advances across a level boundary and ends without an invalid next URL',()=>{
  vi.useFakeTimers();let state=emptyProgress();for(const t of allTopics(p))state=completeTopic(state,p.id,t.id,new Date());
  localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
  render(<LearningLesson program={p} topicId="20"/>);
  const topic=allTopics(p)[19];fireEvent.click(screen.getByLabelText(topic.answer));fireEvent.click(screen.getByRole('button',{name:/Unit quiz:/}));
  expect(screen.getByRole('status')).toHaveTextContent('Reading recorded');expect(push).toHaveBeenCalledWith('/assess/finance/unit-2-2');
 });
 it('shows all published topics, bounded scope and optional adult unit without fake levels',()=>{
  render(<ProgramPath subject="russian"/>);
  expect(screen.getByText('Russian swearing & strong language')).toBeVisible();
  expect(screen.getByText(/Published now: 16 of 100 requested core units/)).toBeVisible();
 });
 it('organizes the course as a guided section path with unit guidebooks, lesson nodes, review, and an assessment',()=>{
  render(<ProgramPath subject="finance"/>);
  expect(screen.getByRole('heading',{name:'Your guided study path'})).toBeVisible();
  expect(screen.getByText(/Section 1 · Foundation/)).toBeVisible();
  expect(screen.getAllByText('Unit guidebook')).not.toHaveLength(0);
  expect(screen.getAllByText(/^Lesson \d+$/)).not.toHaveLength(0);
  expect(screen.getAllByText('Review')).not.toHaveLength(0);
  expect(screen.getByText(/Level 1 assessment/)).toBeVisible();
 });
});
