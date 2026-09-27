"""HTTP-only production verification; never launches a server or browser."""
import concurrent.futures, hashlib, json, re, sys, urllib.request
from pathlib import Path
from html.parser import HTMLParser
BASE=sys.argv[1] if len(sys.argv)>1 else 'https://professor-citachka.vercel.app'
assert BASE.startswith('https://') and '.vercel.app' in BASE
OUT=Path('verification');OUT.mkdir(exist_ok=True)
class Page(HTMLParser):
 def __init__(self):super().__init__();self.assets=set();self.wallpaper=0;self.text=[];self.skip=0
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag in ('script','style'):self.skip+=1
  if 'monchhichi-wallpaper' in a.get('class','').split():self.wallpaper+=1
  for k in ('src','href'):
   url=a.get(k,'')
   if url.startswith('/_next/') and re.search(r'\.(css|js)(\?|$)',url):self.assets.add(url)
 def handle_endtag(self,tag):
  if tag in ('script','style'):self.skip=max(0,self.skip-1)
 def handle_data(self,data):
  if not self.skip:self.text.append(data)
def get(path):
 req=urllib.request.Request(BASE+path,headers={'User-Agent':'Citachka-HTTP-Regression/1.0'})
 with urllib.request.urlopen(req,timeout=60) as r:return r.status,r.read(),r.headers.get('Content-Type','')
manifest=json.loads(Path('.next/prerender-manifest.json').read_text())['routes']
modern=sorted(p for p in manifest if p.startswith('/learn/'))
legacy=sorted(set([p for p in manifest if p.startswith('/subjects/') and len(p.strip('/').split('/'))==3]+['/subjects/'+id for id in json.loads(Path('src/lib/legacy-titles.json').read_text()) if id.startswith('finance/')]))
subjects=sorted({p.split('/')[2] for p in modern})
assert len(modern)==250,(len(modern),'modern topic count changed')
assert len(legacy)==66,(len(legacy),'legacy lesson count changed')
assert len(subjects)==10
paths=['/']+['/subjects/'+s for s in subjects]+modern+legacy
assets=set();results=[]
def page_check(path):
 status,body,typ=get(path);assert status==200 and 'text/html' in typ,(path,status,typ)
 p=Page();p.feed(body.decode());assert p.wallpaper==(1 if path=='/' else 0),(path,'wallpaper leaked')
 text=' '.join(p.text);assert 'Mark lesson complete' not in text,(path,'obsolete action')
 if path in legacy:assert 'Next lesson:' in text or 'Complete sequence & review' in text,(path,'missing next action')
 return {'path':path,'status':status,'bytes':len(body),'sha256':hashlib.sha256(body).hexdigest(),'wallpaper_elements':p.wallpaper},p.assets
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
 for row,found in pool.map(page_check,paths):results.append(row);assets.update(found)
(OUT/'production-routes.json').write_text(json.dumps(results,indent=2)+'\n')
asset_results=[];css='';javascript=''
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
 for path,(status,body,typ) in zip(sorted(assets),pool.map(get,sorted(assets))):
  assert status==200,(path,status);asset_results.append({'path':path,'status':status,'bytes':len(body),'sha256':hashlib.sha256(body).hexdigest()})
  if '.css' in path:css+=body.decode()+'\n'
  else:javascript+=body.decode()+'\n'
wallpaper_rules=re.findall(r'([^{}]+)\{([^{}]*monchhichi-wallpaper[^{}]*)\}',css)
assert wallpaper_rules and all('.monchhichi-wallpaper' in selector for selector,_ in wallpaper_rules),wallpaper_rules
assert re.search(r'body\{[^}]*background:#8b365f',css),'plain pink body missing'
assert re.search(r'\.subject-room-page[^}]*background:#8b365f',css),'matching page backgrounds missing'
assert 'Next lesson:' in javascript and 'Next reading guide:' in javascript
assert 'Storage readback failed' in javascript and 'Continue without saving' in javascript
for path in ['/images/monchhichi-wallpaper.jpg','/manifest.webmanifest']:
 status,body,typ=get(path);assert status==200;asset_results.append({'path':path,'status':status,'bytes':len(body),'sha256':hashlib.sha256(body).hexdigest()})
(OUT/'production-assets.json').write_text(json.dumps(asset_results,indent=2)+'\n')
summary={'base':BASE,'routes':len(results),'modern_topics':len(modern),'legacy_lessons':len(legacy),'subjects':len(subjects),'assets':len(asset_results),'wallpaper_only_dashboard':True,'plain_pink_css_verified':True,'verification':'HTTP HTML/assets and separate jsdom interaction tests; no browser rendering'}
(OUT/'production-summary.json').write_text(json.dumps(summary,indent=2)+'\n');print(json.dumps(summary,indent=2))
