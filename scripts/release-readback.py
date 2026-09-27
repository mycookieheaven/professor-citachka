import json, urllib.request, concurrent.futures, re
from pathlib import Path
origin='https://professor-citachka.vercel.app'
audit=json.loads(Path('artifacts/pedagogy/inventory.json').read_text())
paths={'/','/subjects/literature'}
for s in audit['subjects']:
 paths.add('/subjects/'+s['id'])
 paths.update(s['lessonRoutes'])
 paths.update(s.get('extendedRoutes',[]))
 for a in s['assessments']: paths.add(a['route'])
def get(path):
 with urllib.request.urlopen(origin+path,timeout=45) as response:
  text=response.read().decode();status=response.status
 if path.startswith('/learn/') or path.count('/')==3 and path.startswith('/subjects/'):
  assert 'Listen to this lesson' in text,path
  # Save arrows in hydrated/progress-dependent renderers are covered by integration tests.
 return {'path':path,'status':status,'narration':'Listen to this lesson' in text,'readingArrow':'data-reading-end' in text},text
with concurrent.futures.ThreadPoolExecutor(max_workers=12) as pool: results=list(pool.map(get,sorted(paths)))
assets=set()
for _,text in results:
 assets.update(re.findall(r'(?:src|href)="(/_next/static/[^\"]+\.(?:js|css))"',text))
with concurrent.futures.ThreadPoolExecutor(max_workers=12) as pool: asset_results=list(pool.map(get,sorted(assets)))
report={'origin':origin,'deploymentId':'dpl_AeVUkuo8HMiGnN4k89peZh9g8qE4','routes':len(results),'assets':len(asset_results),'checks':[r for r,_ in results],'assetChecks':[r for r,_ in asset_results],'limitations':'HTTP verifies published text/assets, not audible playback or real browser visual rendering. Extended legacy sequences and reading guides remain outside the new unit/level assessment hierarchy.'}
Path('artifacts/pedagogy/release-readback.json').write_text(json.dumps(report,indent=2))
print(json.dumps({k:v for k,v in report.items() if k not in ['checks','assetChecks']},indent=2))
