"""Publish observations, keeping scope and deployment provenance explicit."""
import json
import sys
from pathlib import Path
from datetime import datetime, timezone

root = Path(__file__).resolve().parents[1]
audit = json.loads((root / 'public/curriculum-audit.json').read_text())
http = json.loads((root / 'artifacts/production-http.json').read_text())
browser = json.loads(Path(sys.argv[1]).read_text())
tests = json.loads((root / 'artifacts/tests.json').read_text())
assert tests['success'] and tests['numFailedTests'] == 0
assert http['routeCount'] == http['passed']
assert all(len(unit['topics']) == 10 for program in audit['programs'] for unit in program['units'])
regular = [topic for program in audit['programs'] for unit in program['units'] if not unit['supplemental'] for topic in unit['topics']]
assert len({topic['route'] for topic in regular}) == len(regular)
remaining_levels = sum(program['remainingLevels'] for program in audit['programs'])
remaining_topics = sum(program['remainingTopics'] for program in audit['programs'])
assert remaining_levels == audit['requested']['levels'] - audit['actual']['mainLevels']
assert remaining_topics == audit['requested']['topics'] - len(regular)
report = {
 'generatedAt': datetime.now(timezone.utc).isoformat(),
 'verifiedApplicationDeployment': {
  'id': 'dpl_HmDyS5Fqi4HaVkx98d22p27XivtB',
  'url': 'https://professor-citachka-8rkl00j14-mycookieheavens-projects.vercel.app',
  'alias': 'https://professor-citachka.vercel.app', 'state': 'READY'
 },
 'provenance': 'Browser and HTTP observations refer to the identified application deployment. A subsequent artifact-only deployment publishes this report without changing application code.',
 'changes': '40 individually authored Philosophy topics added as four ten-topic levels: formal reasoning; epistemology; philosophy of science; normative ethics. Existing topic IDs, storage semantics, Russian audio and music practices remain unchanged. Parent transparency hotfix in learning.css is preserved.',
 'localChecks': {'testsPassed': tests['numPassedTests'], 'testsFailed': tests['numFailedTests'], 'testFiles': len(tests['testResults']), 'lint': 'npm run lint: exit 0', 'build': 'npm run build: exit 0; 322 static pages generated'},
 'scope': {'requestedLevels': audit['requested']['levels'], 'publishedRegularLevels': audit['actual']['mainLevels'], 'publishedRegularTopics': len(regular), 'supplementalTopics': audit['actual']['playablePathTopics']-len(regular), 'remainingLevels': remaining_levels, 'remainingTopics': remaining_topics, 'perSubject': [{'subject': p['subject'], 'published': p['publishedMainLevels'], 'requested': p['requestedLevels'], 'remainingLevels': p['remainingLevels'], 'remainingTopics': p['remainingTopics']} for p in audit['programs']]},
 'http': http,
 'browser': {'observations': browser, 'isolation': 'Named isolated browser with synthetic prerequisite records for boundary tests. Original storage restored. No user study history changed.', 'coverage': 'Old-to-new transition 20→21; actual new-topic wrong-answer gate, completion, auto-next and dashboard resume; 30→31, 40→41, 50→51, 60→department; all ten departments at 390px with no document overflow; mobile capstone; desktop and mobile screenshots visually inspected. This is sampled interaction QA, not manual completion of all topics or a new exhaustive Russian speech audit.'},
 'diagnostics': ['Expected RED failures preceded content integration and dynamic published-count changes; the final full suite passes.', 'Bare vercel command was unavailable; npx vercel successfully deployed and inspect read back READY and production aliases.'],
 'curriculumAudit': '/curriculum-audit.json',
 'limitations': audit['limitations']
}
(root / 'artifacts/expansion-browser.json').write_text(json.dumps(browser, indent=2)+'\n')
(root / 'public/verification-report.json').write_text(json.dumps(report, indent=2)+'\n')
print(json.dumps({'scope': report['scope'], 'localChecks': report['localChecks'], 'httpPassed': http['passed'], 'browserObservations': len(browser)}, indent=2))
