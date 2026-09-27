import {expect,it} from 'vitest';
import {auditCurriculum} from '../../scripts/audit-curriculum';
it('measures registered inventory against the 100-unit target without inflating counts',()=>{
 const audit=auditCurriculum();expect(audit.subjects.slice(0,2).map(s=>s.id)).toEqual(['russian','business-funding']);
 // Base catalog plus reviewed continuation levels: every course now carries at least one,
 // with Russian, Business Funding and Philosophy carrying more than one.
 expect(audit.totals.publishedModernLessons).toBe(620);
 expect(audit.totals.deeplyExpandedThisRevision).toBe(340);expect(audit.totals.modernLessonsNotDeeplyExpandedThisRevision).toBe(280);
 expect(audit.totals.publishedCoreUnits).toBe(122);expect(audit.totals.requestedCoreUnits).toBe(1100);
 expect(audit.totals.remainingRequestedCoreUnits+audit.totals.publishedCoreUnits).toBe(audit.totals.requestedCoreUnits);
 expect(audit.totals.freshApplicationAssessments).toBe(96);
 const routes=audit.subjects.flatMap(s=>[...s.lessonRoutes,...s.extendedRoutes,...s.assessments.map(a=>a.route)]);expect(new Set(routes).size).toBe(routes.length);
});
