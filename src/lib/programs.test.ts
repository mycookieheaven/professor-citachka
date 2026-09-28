import { programs } from './programs';
import { describe,it,expect } from 'vitest';
describe('published instruction not outlines',()=>{
 it('publishes eleven paths with complete ten-topic levels and authored funding and Philosophy continuation',()=>{
 expect(programs).toHaveLength(11);
 for(const p of programs){
  // Continuation levels per course: Funding 6, Russian 5, Philosophy 4, and 4 for the rest.
  expect(p.levels).toHaveLength(p.id==='business-funding'?11:p.id==='russian'?10:p.id==='philosophy'?10:p.id==='skincare'?7:p.id==='finance'?7:p.id==='literature'?7:8);
  const titles=new Set<string>();
  for(const level of p.levels){expect(level.topics).toHaveLength(10);for(const t of level.topics){
   titles.add(t.title); expect(t.explanation.length).toBeGreaterThan(70);expect(t.example.length).toBeGreaterThan(40);expect(t.question.length).toBeGreaterThan(15);expect(t.answer).not.toBe(t.distractor);expect(t.correction.length).toBeGreaterThan(25);
   // Original music lessons carry a micropractice; continuation lessons carry the physical task in depth.application.
   if(p.id==='music') expect((t.practice??t.depth?.application)?.length).toBeGreaterThan(40);
   if(p.id==='russian') {const items=t.russian?[t.russian]:t.russianItems??[];expect(items.length).toBeGreaterThan(0);for(const item of items){expect(item.text).toMatch(/[А-Яа-яЁё]/);expect(item.latin).toMatch(/[A-Z]/);expect(item.meaning.length).toBeGreaterThan(1);}}
  }}expect(titles.size).toBe(p.id==='business-funding'?110:p.id==='russian'?100:p.id==='philosophy'?100:p.id==='skincare'?70:p.id==='finance'?70:p.id==='literature'?70:80);
  expect(new Set(p.levels.flatMap(l=>l.topics.map(t=>t.id))).size).toBe(titles.size);
 }
 });
});
