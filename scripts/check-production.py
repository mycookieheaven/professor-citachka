import json, urllib.request, urllib.error, concurrent.futures, time, struct, re
from pathlib import Path
root=Path(__file__).resolve().parents[1]
audit=json.loads((root/'public/curriculum-audit.json').read_text())
base='https://professor-citachka.vercel.app'
paths=['/']+[p['department'] for p in audit['programs']]+[t['route'] for p in audit['programs'] for u in p['units'] for t in u['topics']]+audit['extendedRoutes']
paths=list(dict.fromkeys(paths))
def check(path):
 try:
  with urllib.request.urlopen(base+path,timeout=25) as response:
   data=response.read();return {'route':path,'status':response.status,'bytes':len(data),'type':response.headers.get('content-type'),'contains404':bool(re.search(r'<h1[^>]*>404</h1>',data.decode('utf8',errors='ignore')))}
 except urllib.error.HTTPError as e:return {'route':path,'status':e.code}
 except Exception as e:return {'route':path,'error':str(e)}
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool: rows=list(pool.map(check,paths))
assets=[]
for path in ['/icons/panda-192.png','/icons/panda-512.png','/icons/panda-maskable-512.png','/icons/panda-180.png','/favicon.ico','/manifest.webmanifest','/curriculum-audit.json']:
 row=check(path)
 if path.endswith('.png') and row.get('status')==200:
  data=urllib.request.urlopen(base+path).read();row['dimensions']=list(struct.unpack('>II',data[16:24]))
 assets.append(row)
negative=[check(p) for p in ['/learn/not-a-subject/01','/learn/finance/999','/subjects/toString']]
report={'base':base,'checkedAt':time.strftime('%Y-%m-%dT%H:%M:%SZ',time.gmtime()),'routeCount':len(rows),'passed':sum(r.get('status')==200 and not r.get('contains404') for r in rows),'rows':rows,'assets':assets,'negativeRoutes':negative}
(root/'artifacts').mkdir(exist_ok=True);(root/'artifacts/production-http.json').write_text(json.dumps(report,indent=2))
print(json.dumps({k:v for k,v in report.items() if k!='rows'},indent=2))
failed=[r for r in rows if r.get('status')!=200 or r.get('contains404')]
print('FAILED',failed)
assert not failed
assert all(r.get('status')==200 for r in assets)
assert all(r.get('status')==404 for r in negative)
