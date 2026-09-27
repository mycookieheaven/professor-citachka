import { programs } from './programs';
import { describe,it,expect } from 'vitest';
describe('published instruction not outlines',()=>{
 it('publishes eleven paths with complete ten-topic levels and authored funding and Philosophy continuation',()=>{
 expect(programs).toHaveLength(11);
 for(const p of programs){
  // Continuation levels per course: Russian 4, Funding 4, Philosophy 3, Skincare 2, Finance 2, the rest 3.
  expect(p.levels).toHaveLength(p.id==='business-funding'?9:p.id==='russian'?8:p.id==='philosophy'?9:p.id==='skincare'?5:p.id==='finance'?5:6);
  const titles=new Set<string>();
  for(const level of p.levels){expect(level.topics).toHaveLength(10);for(const t of level.topics){
   titles.add(t.title); expect(t.explanation.length).toBeGreaterThan(70);expect(t.example.length).toBeGreaterThan(40);expect(t.question.length).toBeGreaterThan(15);expect(t.answer).not.toBe(t.distractor);expect(t.correction.length).toBeGreaterThan(25);
   // Original music lessons carry a micropractice; continuation lessons carry the physical task in depth.application.
   if(p.id==='music') expect((t.practice??t.depth?.application)?.length).toBeGreaterThan(40);
   if(p.id==='russian') {const items=t.russian?[t.russian]:t.russianItems??[];expect(items.length).toBeGreaterThan(0);for(const item of items){expect(item.text).toMatch(/[А-Яа-яЁё]/);expect(item.latin).toMatch(/[A-Z]/);expect(item.meaning.length).toBeGreaterThan(1);}}
  }}expect(titles.size).toBe(p.id==='business-funding'?90:p.id==='russian'?80:p.id==='philosophy'?90:p.id==='skincare'?50:p.id==='finance'?50:60);
  expect(new Set(p.levels.flatMap(l=>l.topics.map(t=>t.id))).size).toBe(titles.size);
 }
 });
});
