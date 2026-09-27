import {JSDOM,VirtualConsole} from 'jsdom';
const origin='https://professor-citachka.vercel.app';const vc=new VirtualConsole();for(const type of ['jsdomError','error','warn'])vc.on(type,(...args)=>console.log(type,...args.map(a=>a?.stack??String(a))));
const dom=await JSDOM.fromURL(origin+'/assess/literature/level-2',{resources:'usable',runScripts:'dangerously',pretendToBeVisual:true,virtualConsole:vc,beforeParse(w){
 Object.assign(w,{TextEncoder,TextDecoder,ReadableStream,TransformStream,Request,Response,Headers,AbortController,AbortSignal});
 w.fetch=async(url,options)=>{const target=new URL(typeof url==='string'?url:(url.href??url.url),w.location.href);console.log('FETCH',target.href,options?.headers);const res=await fetch(target,options);console.log('RESPONSE',res.status,res.headers.get('content-type'),res.headers.get('content-length'));return res;};
 w.scrollTo=()=>{};w.HTMLElement.prototype.scrollIntoView=()=>{};for(const k of ['measure','mark','clearMeasures','clearMarks'])w.performance[k]=()=>{};
 w.matchMedia=q=>({matches:q.includes('prefers-reduced-motion'),media:q,addEventListener(){},removeEventListener(){}});
 w.localStorage.setItem('citachka-study-v1',JSON.stringify({version:1,subjects:{literature:{completed:Array.from({length:20},(_,i)=>String(i+1).padStart(2,'0')),days:[],interactions:0,position:'assessment:level-2'}}}));
}});
for(let i=0;i<60;i++){await new Promise(r=>setTimeout(r,100));const b=[...dom.window.document.querySelectorAll('button')].find(b=>/Review Literature department/.test(b.textContent));if(b&&!b.disabled){console.log('CLICK',b.textContent);b.click();break;}}
await new Promise(r=>setTimeout(r,15000));console.log('PENDING LINKS',[...dom.window.document.querySelectorAll('link')].map(n=>({rel:n.rel,href:n.href})));await new Promise(r=>setTimeout(r,55000));console.log('FINAL',dom.window.location.href,dom.window.document.querySelector('h1')?.textContent);dom.window.close();
