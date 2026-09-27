import {it,expect,afterEach} from 'vitest';
import {render,screen,cleanup} from '@testing-library/react';
import {programs} from '@/lib/programs';
import {courseUnits} from '@/lib/assessments';
import {emptyProgress,completeTopic,STORAGE_KEY} from '@/lib/progress';
import {UnitPath} from './UnitPath';

afterEach(()=>{cleanup();localStorage.clear();});

const russian=()=>{
  const p=programs.find(candidate=>candidate.id==='russian')!;
  return {p,units:courseUnits(p).filter(unit=>!p.levels[unit.levelIndex].supplemental)};
};

it('opens only the first unit for a learner with no saved progress and locks the rest',()=>{
  const {units}=russian();
  localStorage.setItem(STORAGE_KEY,JSON.stringify(emptyProgress()));
  render(<UnitPath subject="russian"/>);
  expect(screen.getByRole('heading',{name:/units, one crown at a time/i})).toBeInTheDocument();
  expect(screen.getAllByText('Start here')).toHaveLength(1);
  expect(screen.getAllByText('Locked')).toHaveLength(units.length-1);
  expect(screen.getAllByText(/finish unit 1/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/0 of \d+ lessons read/).length).toBeGreaterThan(0);
  const start=screen.getByRole('link',{name:/start this unit/i});
  expect(start).toHaveAttribute('href','/learn/russian/01');
});

it('awards a crown and advances the live unit once a whole unit is read',()=>{
  const {units}=russian();
  let progress=emptyProgress();
  for(const topic of units[0].topics)progress=completeTopic(progress,'russian',topic.id,new Date());
  localStorage.setItem(STORAGE_KEY,JSON.stringify(progress));
  render(<UnitPath subject="russian"/>);
  expect(screen.getAllByText('Crown earned')).toHaveLength(1);
  expect(screen.getAllByText('Start here')).toHaveLength(1);
  const first=russian().units[0];
  expect(screen.getByText(new RegExp(`unit 1: ${first.title}`,'i'))).toBeInTheDocument();
  expect(screen.getByRole('link',{name:/review this unit/i})).toHaveAttribute('href','/learn/russian/01');
});

it('records the daily goal as met once a lesson is read today',()=>{
  const {units}=russian();
  let progress=emptyProgress();
  progress=completeTopic(progress,'russian',units[0].topics[0].id,new Date());
  localStorage.setItem(STORAGE_KEY,JSON.stringify(progress));
  const view=render(<UnitPath subject="russian"/>);
  expect(screen.getByText('Met')).toBeInTheDocument();
  expect(screen.getByText(/today.s goal: one lesson/i)).toBeInTheDocument();
  const goal=view.container.querySelector('.unit-path-stats li[data-state="done"]');
  expect(goal).not.toBeNull();
  expect(goal!.textContent).toMatch(/Met/);
  const streak=view.container.querySelector('.unit-path-stats li:first-child');
  expect(streak!.textContent).toMatch(/1day streak/);
});

it('renders a path for every published subject',()=>{
  for(const program of programs){
    localStorage.setItem(STORAGE_KEY,JSON.stringify(emptyProgress()));
    const view=render(<UnitPath subject={program.id}/>);
    expect(view.container.querySelectorAll('[data-state]').length).toBeGreaterThan(0);
    view.unmount();
  }
});
