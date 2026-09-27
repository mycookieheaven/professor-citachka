import {expect,it} from 'vitest';
import {programs,allTopics,getProgram,requestedLevels} from './programs';
it('places an honestly scoped authored funding department directly after Russian at priority two',()=>{
 expect(programs.slice(0,2).map(p=>p.id)).toEqual(['russian','business-funding']);
 const p=getProgram('business-funding')!;
 expect(requestedLevels(p.id)).toBe(50);
 expect(p.levels).toHaveLength(8);
 expect(allTopics(p)).toHaveLength(80);
 for(const l of p.levels) expect(l.topics).toHaveLength(10);
 expect(programs.map(p=>p.id)).toEqual(expect.arrayContaining(['literature','finance','neuroscience','veterinary-science','theology','music','skincare','psychiatry','philosophy']));
});
