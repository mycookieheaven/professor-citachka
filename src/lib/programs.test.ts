import { programs } from './programs';
import { describe,it,expect } from 'vitest';
describe('published instruction not outlines',()=>{
 it('publishes eleven paths with complete ten-topic levels and authored funding and Philosophy continuation',()=>{
 expect(programs).toHaveLength(11);
 for(const p of programs){
  // Original inventory plus reviewed continuation levels: Russian carries two, every other course one.
  expect(p.levels).toHaveLength(p.id==='business-funding'?6:p.id==='russian'?5:p.id==='philosophy'?7:3);
  const titles=new Set<string>();
  for(const level of p.levels){expect(level.topics).toHaveLength(10);for(const t of level.topics){
   titles.add(t.title); expect(t.explanation.length).toBeGreaterThan(70);expect(t.example.length).toBeGreaterThan(40);expect(t.question.length).toBeGreaterThan(15);expect(t.answer).not.toBe(t.distractor);expect(t.correction.length).toBeGreaterThan(25);
   // Original music lessons carry a micropractice; continuation lessons carry the physical task in depth.application.
   if(p.id==='music') expect((t.practice??t.depth?.application)?.length).toBeGreaterThan(40);
   if(p.id==='russian') {const items=t.russian?[t.russian]:t.russianItems??[];expect(items.length).toBeGreaterThan(0);for(const item of items){expect(item.text).toMatch(/[А-Яа-яЁё]/);expect(item.latin).toMatch(/[A-Z]/);expect(item.meaning.length).toBeGreaterThan(1);}}
  }}expect(titles.size).toBe(p.id==='business-funding'?60:p.id==='russian'?50:p.id==='philosophy'?70:30);
  expect(new Set(p.levels.flatMap(l=>l.topics.map(t=>t.id))).size).toBe(titles.size);
 }
 });
});
