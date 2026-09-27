import { describe, it, expect } from 'vitest';
import { emptyProgress, completeTopic, subjectStats, resumeTopic, decodeProgress, localDay } from './progress';

describe('subject study ledger', () => {
 it('counts interactions separately from unique completion and local study days', () => {
  let p = completeTopic(emptyProgress(), 'finance', '1', new Date(2026, 8, 12, 23));
  p = completeTopic(p, 'finance', '1', new Date(2026, 8, 12, 23, 30));
  p = completeTopic(p, 'finance', '2', new Date(2026, 8, 13, 1));
  expect(subjectStats(p, 'finance', ['1','2','3'], new Date(2026,8,13))).toMatchObject({completed:2, interactions:3, days:2, streak:2, today:true, week:2});
  expect(subjectStats(p, 'russian', ['1'], new Date(2026,8,13)).days).toBe(0);
  expect(resumeTopic(p, 'finance', ['1','2','3'])).toBe('3');
  expect(resumeTopic(p, 'finance', ['1','2'])).toBeNull();
  expect(localDay(new Date(2026,8,13,0,1))).toBe('2026-09-13');
 });
 it('recovers corrupt storage and preserves a valid ledger across reload', () => {
  expect(decodeProgress('broken')).toEqual(emptyProgress());
  expect(decodeProgress('{"subjects":{"finance":{"days":null}}}')).toEqual(emptyProgress());
  const p = completeTopic(emptyProgress(),'finance','1',new Date(2026,8,12));
  expect(decodeProgress(JSON.stringify(p))).toEqual(p);
  expect(subjectStats(p,'finance',['1'],new Date(2026,8,14)).streak).toBe(0);
 });
});
