// Exercise the deployed JS in jsdom. This is NOT real-browser or visual QA.
import {JSDOM,VirtualConsole} from 'jsdom';
import {readFile,writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const origin='https://professor-citachka.vercel.app';
const audit=JSON.parse(await readFile('research/funding/audit.json','utf8'));
const reports=[];
const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function wait(fn,label){for(let i=0;i<160;i++){if(fn())return;await delay(100);}throw Error('Timed out: '+label);}
async function open(path,storage,width=1280){
 const errors=[];const vc=new VirtualConsole();vc.on('jsdomError',e=>{if(!/CSS|navigation|scrollTo/.test(e.message))errors.push(e.message);});
 const dom=await JSDOM.fromURL(origin+path,{resources:'usable',runScripts:'dangerously',pretendToBeVisual:true,virtualConsole:vc,beforeParse(w){
  w.TextEncoder=TextEncoder;w.TextDecoder=TextDecoder;w.ReadableStream=ReadableStream;w.TransformStream=TransformStream;w.Request=Request;w.Response=Response;w.Headers=Headers;w.AbortController=AbortController;w.AbortSignal=AbortSignal;
  w.fetch=(url,opts)=>fetch(new URL(typeof url==='string'?url:(url.href??url.url),w.location.href),opts);
  w.scrollTo=()=>{};w.HTMLElement.prototype.scrollIntoView=()=>{};w.performance.measure=()=>{};w.performance.mark=()=>{};w.performance.clearMeasures=()=>{};w.performance.clearMarks=()=>{};
  Object.defineProperty(w,'innerWidth',{value:width});
  w.matchMedia=q=>({matches:q.includes('max-width')?width<=760:q.includes('prefers-reduced-motion'),media:q,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){},dispatchEvent(){return true;}});
  if(storage)w.localStorage.setItem('citachka-study-v1',storage);
 }});
 return {dom,errors};
}
async function runLesson(index,width){
 const topic=audit.routes[index];const previous=audit.routes.slice(0,index).map(t=>t.path.split('/').at(-1));
 const seed=JSON.stringify({version:1,subjects:{'business-funding':{completed:previous,days:[],interactions:0,position:topic.path.split('/').at(-1)}}});
 const {dom,errors}=await open(topic.path,seed,width);const w=dom.window;const doc=w.document;
 try{
  await wait(()=>doc.querySelector('textarea'),'deployed lesson hydration');assert.equal(doc.querySelector('h1').textContent,topic.title);
  const arrow=()=>[...doc.querySelectorAll('button')].find(b=>/Next lesson:|Complete path & review/.test(b.textContent));assert.equal(arrow().disabled,true);
  const textarea=doc.querySelector('textarea');Object.getOwnPropertyDescriptor(w.HTMLTextAreaElement.prototype,'value').set.call(textarea,'Fictional practice: identify my independent role, ask permission, disclose full costs and restrictions, invite qualified review, and pause if evidence is insufficient.');textarea.dispatchEvent(new w.Event('input',{bubbles:true}));textarea.dispatchEvent(new w.Event('change',{bubbles:true}));
  await wait(()=>![...doc.querySelectorAll('button')].find(b=>b.textContent==='Compare with the authored model').disabled,'writing gate');
  [...doc.querySelectorAll('button')].find(b=>b.textContent==='Compare with the authored model').click();await wait(()=>doc.querySelectorAll('.model-feedback input[type="checkbox"]').length===2,'model self review');
  for(const c of doc.querySelectorAll('.model-feedback input[type="checkbox"]')){c.click();await delay(30);}
  const radios=[...doc.querySelectorAll('input[type="radio"]')];const id=index+1;const correctIndex=id%2?0:1;radios[1-correctIndex].click();await delay(50);assert.equal(arrow().disabled,true);assert.match(doc.querySelector('[role="status"]').textContent,/Unsafe or incomplete/);
  radios[correctIndex].click();await wait(()=>!arrow().disabled,'correct branch unlock');assert.match(doc.querySelector('[role="status"]').textContent,/Sound branch/);
  arrow().click();const saved=JSON.parse(w.localStorage.getItem('citachka-study-v1'));assert.ok(saved.subjects['business-funding'].completed.includes(String(id).padStart(2,'0')));assert.equal(saved.subjects['business-funding'].interactions,1);
  const next=audit.routes[index+1]?.path??'/subjects/business-funding';await wait(()=>w.location.pathname===next,'deployed next-arrow navigation').catch(e=>{console.error(JSON.stringify({url:w.location.href,errors,status:doc.querySelector('[role="status"]')?.textContent,saved},null,2));throw e;});
  const expectedHeading=audit.routes[index+1]?.title??'Business Funding & Sales';await wait(()=>doc.querySelector('h1')?.textContent===expectedHeading,'next authored page heading');
  const raw=w.localStorage.getItem('citachka-study-v1');
  reports.push({path:topic.path,width,hydrated:true,writingGate:true,wrongBranchBlocked:true,selfReview:true,saved:true,navigatedTo:w.location.pathname,errors:[...errors]});
  return raw;
 }finally{dom.window.close();await writeFile('research/funding/live-interactions.partial.json',JSON.stringify(reports,null,2));}
}
try{
 const saved=await runLesson(0,1280);
 const reload=await open('/subjects/business-funding',saved,390);
 try{await wait(()=>reload.dom.window.document.querySelector('.resume-link')?.textContent.includes(audit.routes[1].title),'department saved resume');assert.equal(reload.dom.window.document.querySelector('.resume-link').getAttribute('href'),audit.routes[1].path);reports.push({path:'/subjects/business-funding',width:390,resumeAfterFreshDOM:true,errors:reload.errors});}finally{reload.dom.window.close();}
 await runLesson(40,390);await runLesson(49,390);
 const home=await open('/',saved,390);try{await wait(()=>home.dom.window.document.querySelector('[aria-label="Business Funding & Sales progress"] .resume-link')?.textContent.includes(audit.routes[1].title),'dashboard saved resume');const doc=home.dom.window.document;doc.querySelector('[aria-label="Open navigation"]').click();await wait(()=>doc.querySelector('.mobile-nav'),'mobile menu');const items=[...doc.querySelectorAll('.mobile-nav a')].map(e=>e.textContent);assert.deepEqual(items.slice(1,3),['Russian','Business Funding & Sales']);reports.push({path:'/',width:390,mobileMenuPriority:items.slice(1,3),dashboardResume:true,errors:home.errors});}finally{home.dom.window.close();}
 const result={deploymentId:'dpl_FjwdSbPigXqpZHtam7moWyCsu73Z',kind:'deployed production JavaScript exercised in jsdom; no browser or layout engine',visualRenderingVerified:false,reports};await writeFile('research/funding/live-interactions.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result,null,2));
}catch(error){await writeFile('research/funding/live-interactions.failure.json',JSON.stringify({error:String(error),reports},null,2));console.error(error);process.exitCode=1;}
