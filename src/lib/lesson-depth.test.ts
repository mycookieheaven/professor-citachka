import {expect,it} from 'vitest';
import {lessonDepth} from './lesson-depth';
import {getProgram,allTopics} from './programs';
it('has explicitly authored depth for Russian and Philosophy first ten lessons without claiming other coverage',()=>{
 expect(Object.keys(lessonDepth)).toHaveLength(20);
 for(const subject of ['russian','philosophy'])for(const t of allTopics(getProgram(subject)!).slice(0,10)){
  const d=lessonDepth[`${subject}/${t.id}`];expect(d).toBeDefined();expect(d.mechanism.length).toBeGreaterThan(150);expect(d.definitions.length).toBeGreaterThan(30);expect(d.secondExample.length).toBeGreaterThan(120);expect(d.application.length).toBeGreaterThan(70);expect(d.summary.length).toBeGreaterThan(40);
 }
 expect(new Set(Object.values(lessonDepth).map(d=>d.mechanism)).size).toBe(20);
});
