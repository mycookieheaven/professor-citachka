import {expect,it} from 'vitest';
import {mkdirSync,writeFileSync} from 'node:fs';
import {fundingProgram,fundingTopics} from './funding';
import {fundingSources} from './funding-sources';
import {programs,requestedLevels} from './programs';
it('audits distinct authored instruction and source references separately from requested scope',()=>{
 for(const field of ['title','objective','explanation','example','question','prompt','model'] as const)expect(new Set(fundingTopics.map(t=>t[field])).size).toBe(fundingTopics.length);
 for(const t of fundingTopics){
  expect(t.objective.length).toBeGreaterThan(40);expect(t.prompt.length).toBeGreaterThan(40);expect(t.model.length).toBeGreaterThan(60);expect(t.rubric).toHaveLength(2);
  const refs=[...t.explanation.matchAll(/\[(\d+)\]/g)].map(m=>Number(m[1]));
  for(const id of refs){expect(t.sources).toContain(id);expect(fundingSources.some(s=>s.id===id)).toBe(true);}
 }
 const sourceIds=[...new Set(fundingTopics.flatMap(t=>t.sources))];
 const coverage={mca:['11','21','22','23','24'],loc:['12','29'],heloc:['17'],creditRepair:['18'],consolidation:['19','26'],reverseConsolidation:['20','27','48'],termAndSba:['13','14'],equipment:['15','30'],invoice:['16','28'],salesLifecycle:['01','02','08','09','10','36','37','38','39'],underwritingPrivacyGuaranteesStacking:['31','32','33','34'],advanced:['41','42','43','44','45','46','47','48','49','50']};
 for(const ids of Object.values(coverage))for(const id of ids)expect(fundingTopics.find(t=>t.id===id)).toBeDefined();
 const audit={authoredLevels:fundingProgram.levels.length,requestedLevels:requestedLevels('business-funding'),remainingLevels:requestedLevels('business-funding')-fundingProgram.levels.length,authoredTopics:fundingTopics.length,topicsPerUnit:fundingProgram.levels.map(l=>l.topics.length),uniqueTitles:new Set(fundingTopics.map(t=>t.title)).size,workedExamples:fundingTopics.length,writingPrompts:fundingTopics.length,authoredModels:fundingTopics.length,selfReviewCriteria:fundingTopics.reduce((n,t)=>n+t.rubric.length,0),branchChecks:fundingTopics.length,sourceIds,primarySources:fundingSources.filter(s=>s.primary).length,industrySources:fundingSources.filter(s=>!s.primary).length,coverage,allDepartments:programs.map(p=>({id:p.id,levels:p.levels.filter(l=>!l.supplemental).length,topics:p.levels.flatMap(l=>l.topics).length})),routes:fundingTopics.map(t=>({path:`/learn/business-funding/${t.id}`,title:t.title})),limitations:['Structural counts do not establish expertise or pedagogical mastery.','45 requested levels are unfinished.','No browser rendering or real-browser interactions were tested; user-specific skill prohibits browser automation.','Written practice is not saved. Progress and study dates are browser-local.','No automated AI evaluation; writing quality is self-reviewed.']};
 mkdirSync('research/funding',{recursive:true});writeFileSync('research/funding/audit.json',JSON.stringify(audit,null,2));
 const prose=fundingTopics.map(t=>`# ${t.title}\n\n${t.explanation}\n\n${t.example}\n`).join('\n');writeFileSync('research/funding/course-citations.md',prose);
});
