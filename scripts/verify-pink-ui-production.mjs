// Post-deploy UI QA. HTTP + deployed JavaScript in jsdom; NOT a browser/layout test.
// Usage: DEPLOYMENT_ID=dpl_... node scripts/verify-pink-ui-production.mjs
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
import {JSDOM,VirtualConsole} from 'jsdom';
const origin=process.env.PRODUCTION_ORIGIN??'https://professor-citachka.vercel.app';
const reports=[];
const KEY='citachka-atmosphere-v1';
const delay=ms=>new Promise(r=>setTimeout(r,ms));
async function wait(fn,label){for(let n=0;n<160;n++){if(fn())return;await delay(100);}throw Error('Timed out: '+label);}
async function http(path){const response=await fetch(origin+path);assert.equal(response.status,200,path);const text=await response.text();assert.ok(!/<h1[^>]*>404<\/h1>/.test(text),path);return text;}
async function open(path,{preferences=null,reduced=false,blocked=false}={}){
 const errors=[];const listeners=[];const vc=new VirtualConsole();vc.on('jsdomError',e=>{if(!/CSS|navigation|scrollTo/.test(e.message))errors.push(e.message);});
 const dom=await JSDOM.fromURL(origin+path,{resources:'usable',runScripts:'dangerously',pretendToBeVisual:true,virtualConsole:vc,beforeParse(w){
  Object.assign(w,{TextEncoder,TextDecoder,ReadableStream,TransformStream,Request,Response,Headers,AbortController,AbortSignal});
  w.fetch=(url,opts)=>fetch(new URL(typeof url==='string'?url:(url.href??url.url),w.location.href),opts);
  w.scrollTo=()=>{};w.HTMLElement.prototype.scrollIntoView=()=>{};
  for(const key of ['measure','mark','clearMeasures','clearMarks'])w.performance[key]=()=>{};
  w.matchMedia=q=>({get matches(){return q.includes('prefers-reduced-motion')?reduced:q.includes('pointer: fine');},media:q,addEventListener(_,fn){listeners.push(fn);},removeEventListener(){},addListener(){},removeListener(){},dispatchEvent(){return true;}});
  if(preferences)w.localStorage.setItem(KEY,JSON.stringify(preferences));
  if(blocked)w.Storage.prototype.setItem=()=>{throw Error('Synthetic QA blocked storage');};
 }});
 await wait(()=>dom.window.document.querySelector('.study-atmosphere')&&dom.window.document.documentElement.dataset.focus,'atmosphere hydration');
 return {dom,errors,setReduced(value){reduced=value;listeners.forEach(fn=>fn());}};
}
try{
 await mkdir('artifacts/pink-ui',{recursive:true});
 const home=await http('/');const doc=new JSDOM(home).window.document;
 const departments=[...new Set([...doc.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')).filter(h=>/^\/subjects\/[^/]+$/.test(h)))];
 assert.equal(departments.length,11,'department inventory');assert.deepEqual(departments.slice(0,2),['/subjects/russian','/subjects/business-funding']);
 const routes=['/',...departments,...departments.map(p=>'/learn/'+p.split('/').at(-1)+'/01')];
 for(const path of routes){const text=path==='/'?home:await http(path);assert.match(text,/Study atmosphere/);assert.match(text,/Reading focus/);reports.push({path,http:200,sharedControls:true});}
 const assets=[...new Set([...doc.querySelectorAll('script[src],link[rel="stylesheet"]')].map(e=>e.getAttribute('src')??e.getAttribute('href')))];
 for(const asset of ['/icons/panda-32.png','/icons/panda-180.png','/images/monchhichi-wallpaper.jpg',...assets]){const r=await fetch(new URL(asset,origin));assert.equal(r.status,200,asset);reports.push({asset,status:r.status,bytes:(await r.arrayBuffer()).byteLength});}
 for(const path of ['/','/subjects/business-funding','/learn/russian/01','/subjects/literature']){
  const {dom,errors,setReduced}=await open(path);const w=dom.window;const d=w.document;const button=name=>[...d.querySelectorAll('.study-atmosphere button')].find(b=>b.textContent===name);
  try{
   assert.equal(d.documentElement.dataset.motion,'lively');button('Calm').click();await wait(()=>d.documentElement.dataset.motion==='calm','Calm');assert.equal(JSON.parse(w.localStorage.getItem(KEY)).motion,'calm');
   button('Lively').click();await wait(()=>d.documentElement.dataset.motion==='lively','Lively');button('Reading focus').click();await wait(()=>d.documentElement.dataset.focus==='on','focus');assert.equal(d.documentElement.dataset.motion,'calm');button('Reading focus').click();await wait(()=>d.documentElement.dataset.motion==='lively','focus off');
   setReduced(true);await wait(()=>d.documentElement.dataset.motion==='calm','live OS reduced motion');setReduced(false);await wait(()=>d.documentElement.dataset.motion==='lively','live OS restored');
   d.querySelector('.focus-session').open=true;button('Start focus').click();await wait(()=>button('Pause focus'),'timer start');button('Pause focus').click();await wait(()=>button('Resume focus'),'timer pause');button('Reset timer').click();await wait(()=>d.querySelector('[aria-label="Focus time remaining"]').textContent==='05:00','timer reset');
   assert.equal(w.localStorage.getItem('citachka-study-v1'),null,'UI controls do not invent study');assert.equal(errors.length,0,errors.join('\n'));reports.push({path,hydrated:true,motion:true,focus:true,liveOS:true,silentTimer:true,noInventedProgress:true,errors});
  }finally{w.close();}
 }
 for(const fixture of [{preferences:{motion:'calm',focus:true}},{reduced:true},{blocked:true}]){
  const {dom,errors}=await open('/learn/russian/01',fixture);try{const d=dom.window.document;if(fixture.blocked){[...d.querySelectorAll('button')].find(b=>b.textContent==='Calm').click();await wait(()=>d.querySelector('.atmosphere-note').textContent.includes('this tab only'),'blocked preference notice');}else{assert.equal(d.documentElement.dataset.motion,'calm');}assert.equal(errors.length,0);reports.push({fixture,passed:true,errors});}finally{dom.window.close();}
 }
 const result={origin,deploymentId:process.env.DEPLOYMENT_ID??'NOT_SUPPLIED',kind:'HTTP and real deployed JavaScript in jsdom; no browser',visualRenderingVerified:false,reports};await writeFile('artifacts/pink-ui/production.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result,null,2));
}catch(error){await mkdir('artifacts/pink-ui',{recursive:true});await writeFile('artifacts/pink-ui/production-failure.json',JSON.stringify({origin,error:String(error),reports},null,2));console.error(error);process.exitCode=1;}
