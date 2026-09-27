import {expect,it} from 'vitest';
import {auditCurriculum} from '../../scripts/audit-curriculum';
it('measures registered inventory against the 100-unit target without inflating counts',()=>{
 const audit=auditCurriculum();expect(audit.subjects.slice(0,2).map(s=>s.id)).toEqual(['russian','business-funding']);
 // 300 original lessons + one reviewed ten-lesson level for each of eleven courses,
 // plus a second reviewed ten-lesson level for Russian.
 expect(audit.totals.publishedModernLessons).toBe(420);
 expect(audit.totals.deeplyExpandedThisRevision).toBe(140);expect(audit.totals.modernLessonsNotDeeplyExpandedThisRevision).toBe(280);
 expect(audit.totals.publishedCoreUnits).toBe(82);expect(audit.totals.requestedCoreUnits).toBe(1100);
 expect(audit.totals.remainingRequestedCoreUnits+audit.totals.publishedCoreUnits).toBe(audit.totals.requestedCoreUnits);
 expect(audit.totals.freshApplicationAssessments).toBe(36);
 const routes=audit.subjects.flatMap(s=>[...s.lessonRoutes,...s.extendedRoutes,...s.assessments.map(a=>a.route)]);expect(new Set(routes).size).toBe(routes.length);
});
