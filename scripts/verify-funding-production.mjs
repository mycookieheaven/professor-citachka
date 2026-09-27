// HTTP/DOM readback only: no browser, local server or rendering engine.
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
const origin='https://professor-citachka.vercel.app';
const audit=JSON.parse(await readFile('research/funding/audit.json','utf8'));
const manifest=JSON.parse(await readFile('.next/prerender-manifest.json','utf8'));
const paths=[...new Set([...Object.keys(manifest.routes).filter(p=>p!=='/_not-found'&&p!=='/_global-error'),...audit.allDepartments.map(p=>`/subjects/${p.id}`),...['cash-flow-basics','debt-interest-and-risk','investing-fundamentals','markets-and-valuation','independent-financial-judgment'].map(s=>`/subjects/finance/${s}`),'/icons/panda-32.png','/icons/panda-180.png','/icons/panda-192.png','/icons/panda-512.png','/favicon.ico'])];
const results=[];let cursor=0;
async function worker(){while(cursor<paths.length){const path=paths[cursor++];try{const r=await fetch(origin+path);const html=await r.text();let headingError=false,heading='';if(r.headers.get('content-type')?.includes('text/html')){const dom=new JSDOM(html);heading=[...dom.window.document.querySelectorAll('h1,h2')].map(e=>e.textContent).join(' | ');headingError=/This page could not be found|Application error|Internal Server Error/i.test(heading);dom.window.close();}results.push({path,status:r.status,heading,headingError});}catch(e){results.push({path,error:String(e)});}if(results.length%25===0)await writeFile('research/funding/live-http.partial.json',JSON.stringify(results,null,2));}}
await mkdir('research/funding',{recursive:true});await Promise.all(Array.from({length:8},worker));
const r=await fetch(origin);const html=await r.text();const dom=new JSDOM(html);const doc=dom.window.document;
const cards=[...doc.querySelectorAll('.subject-study-card .subject-copy strong')].map(e=>e.textContent);
const nav=[...doc.querySelectorAll('.primary-nav a')].map(e=>e.textContent);
const cssUrls=[...doc.querySelectorAll('link[rel="stylesheet"]')].map(e=>new URL(e.getAttribute('href'),origin).href);
const css=(await Promise.all(cssUrls.map(async u=>{const r=await fetch(u);if(!r.ok)throw Error(`CSS ${r.status}`);return r.text();}))).join('\n');
const cssChecks={mobileBreakpoint:/max-width:\s*760px/.test(css),mobileSingleColumn:/grid-template-columns:\s*1fr/.test(css),reducedMotion:/prefers-reduced-motion:\s*reduce/.test(css),largeReadingText:/font-size:\s*19px/.test(css),visibleFocus:/focus-visible/.test(css)};
const failures=results.filter(r=>r.status!==200||r.headingError||r.error);
const fundingRoutes=results.filter(r=>r.path.startsWith('/learn/business-funding/'));
const report={origin,deploymentId:'dpl_FjwdSbPigXqpZHtam7moWyCsu73Z',deploymentUrl:'https://professor-citachka-1q8o3jhyq-mycookieheavens-projects.vercel.app',checkedAt:new Date().toISOString(),routeCount:results.length,fundingRouteCount:fundingRoutes.length,failures,cards,nav,cssChecks,results,visualRenderingVerified:false};
await writeFile('research/funding/live-http.json',JSON.stringify(report,null,2));
console.log(JSON.stringify({routeCount:results.length,fundingRouteCount:fundingRoutes.length,failures,cards,nav,cssChecks,visualRenderingVerified:false},null,2));
if(failures.length||fundingRoutes.length!==50||cards[0]!=='Russian'||cards[1]!=='Business Funding & Sales'||!Object.values(cssChecks).every(Boolean))process.exitCode=1;
dom.window.close();
