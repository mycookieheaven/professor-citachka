import json,sys,time
from pathlib import Path
root=Path(__file__).resolve().parents[1]
http=json.loads((root/'artifacts/production-http.json').read_text())
browser=json.loads(Path(sys.argv[1]).read_text())
tests=json.loads((root/'artifacts/tests.json').read_text())
report={
 'generatedAt':time.strftime('%Y-%m-%dT%H:%M:%SZ',time.gmtime()),
 'verifiedApplicationDeployment':{'id':'dpl_GepJKtMYRd3WApakQAWmL4RxMwi1','url':'https://professor-citachka-nd64poc63-mycookieheavens-projects.vercel.app','alias':'https://professor-citachka.vercel.app','state':'READY'},
 'provenance':'These are observations of the identified production application deployment. A subsequent deployment publishes this report without changing the application code.',
 'localChecks':{'testsPassed':tests['numPassedTests'],'testsFailed':tests['numFailedTests'],'testFiles':len(tests['testResults']),'lint':'npm run lint: exit 0','build':'npm run build: exit 0; Next.js generated 282 static pages'},
 'http':http,
 'browser':{'observations':browser,'qaIsolation':'Synthetic prerequisite fixtures exercised level boundaries in an isolated browser. Original storage was restored after every batch. No QA study history was written to a user account.','diagnostics':'Early untrusted synthetic speech clicks did not start playback; a browser-user-activation retest produced actual start/end events. Two early extended-lesson attempts correctly stayed disabled because the original retrieval answer had not been selected; the full prerequisite retest saved and automatically continued. These diagnostic attempts remain in the history.','coverage':'Actual browser checks of completion, wrong-answer feedback, saved resume after reload, subject isolation, unit and final transitions, review access, every department on mobile, 10 strong-language topics, explicit consent, pronunciation controls, trusted speech events, retained lesson auto-next, Literature guide auto-next/focus, and 320px navigation. All published routes also received HTTP checks. Not all 210 topic answers were manually completed in the browser.'},
 'curriculumAudit':'/curriculum-audit.json',
 'scopeLimitation':'The 50-level-per-subject / 100-level-Russian request is not fulfilled. There are 20 authored regular levels across 10 subjects, 200 regular topics, and one 10-topic Russian strong-language supplement. The site also retains 66 extended lessons and four Literature opening guides.'
}
(root/'public/verification-report.json').write_text(json.dumps(report,indent=2)+'\n')
print('Verification report generated from',http['passed'],'verified routes and',len(browser),'recorded browser observations.')
