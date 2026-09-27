// Production HTTP and actual deployed JS in isolated jsdom. No browser, layout engine or local hosting.
import assert from 'node:assert/strict';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {JSDOM,VirtualConsole} from 'jsdom';
const origin=process.env.PRODUCTION_ORIGIN??'https://professor-citachka.vercel.app';
const deploymentId=process.env.DEPLOYMENT_ID;if(!deploymentId)throw Error('Supply the actual DEPLOYMENT_ID');
const audit=JSON.parse(await readFile('artifacts/pedagogy/inventory.json','utf8'));const reports=[];const KEY='citachka-study-v1';
const delay=ms=>new Promise(r=>setTimeout(r,ms));
async function wait(fn,label,seconds=20){for(let i=0;i<seconds*10;i++){if(fn())return;await delay(100);}throw Error('Timed out: '+label);}
const seed=(subject,ids,position)=>JSON.stringify({version:1,subjects:{[subject]:{completed:ids,days:[],interactions:0,...(position?{position}:{})}}});
async function persist(){await writeFile('artifacts/pedagogy/production.partial.json',JSON.stringify({origin,deploymentId,reports},null,2));}
async function open(path,storage=null,{blocked=false,legacy=false}={}){
 const errors=[];const vc=new VirtualConsole();vc.on('jsdomError',e=>{if(!/CSS|navigation|scrollTo/.test(e.message))errors.push(e.message);});
 const dom=await JSDOM.fromURL(origin+path,{resources:'usable',runScripts:'dangerously',pretendToBeVisual:true,virtualConsole:vc,beforeParse(w){
  Object.assign(w,{TextEncoder,TextDecoder,ReadableStream,TransformStream,Request,Response,Headers,AbortController,AbortSignal});
  w.fetch=(url,options)=>fetch(new URL(typeof url==='string'?url:(url.href??url.url),w.location.href),options);
  w.scrollTo=()=>{};w.HTMLElement.prototype.scrollIntoView=()=>{};for(const key of ['measure','mark','clearMeasures','clearMarks'])w.performance[key]=()=>{};
  w.matchMedia=q=>({matches:q.includes('prefers-reduced-motion'),media:q,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
  if(storage)w.localStorage.setItem(KEY,storage);if(legacy)w.localStorage.setItem('professor-citachka:completed-lessons',JSON.stringify(['finance/cash-flow-basics']));
  if(blocked)w.Storage.prototype.setItem=()=>{throw Error('QA synthetic blocked storage');};
 }});await wait(()=>dom.window.document.documentElement.dataset.focus,'hydration');return {dom,errors};
}
const button=(d,name)=>[...d.querySelectorAll('button')].find(b=>typeof name==='string'?b.textContent.trim()===name:name.test(b.textContent));
const status=d=>d.querySelector('.learning-article [role="status"]');
async function clickNext(d){const b=button(d,/Next lesson:|Unit quiz:/);assert.ok(b);await wait(()=>!b.disabled,'reading next enabled');assert.equal(d.querySelectorAll('input[type="radio"]:checked').length,0);b.click();}
try{
 await mkdir('artifacts/pedagogy',{recursive:true});
 const paths=[...new Set(['/',...audit.subjects.flatMap(s=>[`/subjects/${s.id}`,...s.lessonRoutes,...s.extendedRoutes,...s.assessments.map(a=>a.route)]),'/curriculum-audit.json'])];
 for(let i=0;i<paths.length;i+=8){await Promise.all(paths.slice(i,i+8).map(async path=>{const r=await fetch(origin+path);const html=await r.text();assert.equal(r.status,200,path);assert.ok(!/<h1[^>]*>404<\/h1>/.test(html),path);reports.push({kind:'http',path,status:r.status});}));await persist();}
 for(const s of audit.subjects){
  // No practice, writing or music confirmation is supplied.
  let raw;
  {const {dom,errors}=await open(`/learn/${s.id}/01`);const w=dom.window,d=w.document;try{await wait(()=>button(d,/Next lesson:/),'first lesson');await clickNext(d);await wait(()=>w.location.pathname===`/learn/${s.id}/02`,'ungated next');raw=w.localStorage.getItem(KEY);const saved=JSON.parse(raw).subjects[s.id];assert.deepEqual(saved.completed,['01']);assert.equal(saved.assessments,undefined);assert.equal(saved.position,'02');assert.equal(errors.length,0,errors.join('\n'));reports.push({kind:'ungated-reading',subject:s.id,passed:true});}finally{w.close();}}
  {const {dom,errors}=await open(`/learn/${s.id}/05`,seed(s.id,['01','02','03','04'],'05'));const w=dom.window,d=w.document;try{
   await wait(()=>button(d,/Unit quiz:/),'boundary arrow');await clickNext(d);await wait(()=>w.location.pathname===`/assess/${s.id}/unit-1-1`&&d.querySelectorAll('fieldset').length===5,'unit boundary');
   let groups=[...d.querySelectorAll('fieldset')];for(let i=0;i<groups.length;i++){groups[i].querySelectorAll('input')[i%2?0:1].click();await delay(20);}button(d,'Score this attempt').click();await wait(()=>status(d)?.textContent.includes('0 / 5'),'failed score');assert.match(status(d).textContent,/Not yet passed/);
   button(d,'Retry with a fresh attempt').click();await delay(40);groups=[...d.querySelectorAll('fieldset')];for(let i=0;i<groups.length;i++){groups[i].querySelectorAll('input')[i%2?1:0].click();await delay(20);}button(d,'Score this attempt').click();await wait(()=>status(d)?.textContent.includes('5 / 5'),'passing score');
   let saved=JSON.parse(w.localStorage.getItem(KEY)).subjects[s.id];assert.deepEqual(saved.assessments['unit-1-1'].map(a=>a.passed),[false,true]);assert.equal(saved.completed.length,5);
   button(d,/Next lesson:/).click();await wait(()=>w.location.pathname===`/learn/${s.id}/06`,'after quiz');raw=w.localStorage.getItem(KEY);assert.equal(errors.length,0,errors.join('\n'));reports.push({kind:'unit-boundary-failed-passed-retry',subject:s.id,passed:true});
  }finally{w.close();}}
  {const {dom,errors}=await open(`/subjects/${s.id}`,raw);try{await wait(()=>[...dom.window.document.querySelectorAll('.resume-link')].some(a=>a.getAttribute('href')===`/learn/${s.id}/06`),'fresh DOM resume');assert.equal(errors.length,0);reports.push({kind:'reload-resume',subject:s.id,passed:true});}finally{dom.window.close();}}
  {const {dom,errors}=await open(`/learn/${s.id}/10`,seed(s.id,Array.from({length:9},(_,i)=>String(i+1).padStart(2,'0')),'10'));const w=dom.window,d=w.document;try{
   await wait(()=>button(d,/Unit quiz:/),'second unit arrow');await clickNext(d);await wait(()=>button(d,/Continue to cumulative level test/),'second quiz');button(d,/Continue to cumulative level test/).click();await wait(()=>w.location.pathname===`/assess/${s.id}/level-1`&&d.querySelectorAll('fieldset').length===10,'longer cumulative level test');assert.equal(JSON.parse(w.localStorage.getItem(KEY)).subjects[s.id].assessments,undefined);button(d,/Next level:/).click();await wait(()=>w.location.pathname===`/learn/${s.id}/11`,'next level');assert.equal(errors.length,0);reports.push({kind:'level-boundary-cumulative-test',subject:s.id,questions:10,unitQuestions:5,passed:true});
  }finally{w.close();}}
  if(s.id==='literature'&&process.env.SKIP_JSDOM_STREAMING==='1'){reports.push({kind:'harness-limitation',subject:s.id,passed:false,note:'Final client transition to streaming Literature department cannot be established by jsdom; destination is verified separately by direct HTTP. Not a full browser navigation pass.'});await persist();continue;}
  const id=`level-${s.publishedMainLevels}`;
  {const ids=s.lessonRoutes.slice(0,s.publishedMainLevels*10).map(x=>x.split('/').at(-1));const {dom,errors}=await open(`/assess/${s.id}/${id}`,seed(s.id,ids,`assessment:${id}`));try{const w=dom.window,d=w.document;await wait(()=>button(d,/Review .* department/)&&!button(d,/Review .* department/).disabled,'final assessment ready');button(d,/Review .* department/).click();await wait(()=>w.location.pathname===`/subjects/${s.id}`,'final department',80).catch(e=>{throw Error(`${e}; URL=${w.location.href}; errors=${JSON.stringify(errors)}; status=${status(d)?.textContent}; saved=${w.localStorage.getItem(KEY)}`);});assert.equal(JSON.parse(w.localStorage.getItem(KEY)).subjects[s.id].position,undefined);assert.equal(errors.length,0);reports.push({kind:'final-return',subject:s.id,passed:true});}finally{dom.window.close();}}
  await persist();
 }
 for(const path of ['/subjects/finance/cash-flow-basics','/subjects/literature']){const {dom,errors}=await open(path);try{const w=dom.window,d=w.document;await wait(()=>button(d,/Next lesson:|Next reading guide:/),'legacy or guide');button(d,/Next lesson:|Next reading guide:/).click();await wait(()=>w.localStorage.getItem(KEY),'legacy save');const state=JSON.parse(w.localStorage.getItem(KEY));assert.equal(Object.values(state.subjects).some(s=>s.assessments),false);assert.equal(errors.length,0);reports.push({kind:'legacy-guide-ungated',path,passed:true});}finally{dom.window.close();}}
 {const {dom}=await open('/learn/finance/01',null,{blocked:true});try{const d=dom.window.document;await wait(()=>button(d,/Next lesson:/),'blocked lesson');await clickNext(d);await wait(()=>status(d)?.textContent.includes('Could not save'),'honest storage failure');assert.ok(button(d,'Continue without saving'));reports.push({kind:'blocked-reading-save',passed:true});}finally{dom.window.close();}}
 {const {dom}=await open('/subjects/finance',null,{legacy:true});try{await wait(()=>dom.window.document.body.textContent.includes('Extended lessons: 1 /'),'legacy migration');assert.match(dom.window.document.body.textContent,/0 \/ 6 assessments passed/);reports.push({kind:'legacy-migration-no-assessment',passed:true});}finally{dom.window.close();}}
 const result={origin,deploymentId,kind:'HTTP + deployed JavaScript in jsdom; not browser rendering',visualRenderingVerified:false,realAudioVerified:false,httpRoutes:reports.filter(r=>r.kind==='http').length,interactionChecks:reports.filter(r=>r.kind!=='http').length,inventory:audit.totals,reports};await writeFile('artifacts/pedagogy/production.json',JSON.stringify(result,null,2));console.log(JSON.stringify({...result,reports:undefined},null,2));
}catch(error){await writeFile('artifacts/pedagogy/production-failure.json',JSON.stringify({origin,deploymentId,error:String(error),reports},null,2));console.error(error);process.exitCode=1;}
