"use client";
import Link from 'next/link';
import {useState} from 'react';
import {SubjectIcon,type SubjectIconName} from '@/components/SubjectIcon';
import {BrandMark} from '@/components/Brand';
import {SubjectProgress,StorageNotice} from '@/components/Learning';
import {programs} from '@/lib/programs';
import {ProfessorChat} from '@/components/ProfessorChat';
const navItems=[['Study','/study'],...programs.map(p=>[p.title,`/subjects/${p.id}`])];
export default function StudyPage(){
 const [mobileOpen,setMobileOpen]=useState(false);
 return <div className="site-shell"><div className="monchhichi-wallpaper" aria-hidden="true"/><div className="celestial-field" aria-hidden="true"><span className="star-layer star-layer-near"/><span className="star-layer star-layer-middle"/><span className="star-layer star-layer-far"/><span className="wandering-star wandering-star-one"/><span className="wandering-star wandering-star-two"/></div>
  <header className="mobile-header"><Link className="mobile-brand" href="/study"><BrandMark/><span>Professor Citachka</span></Link><button className="menu-button" aria-label={mobileOpen?'Close navigation':'Open navigation'} aria-expanded={mobileOpen} onClick={()=>setMobileOpen(!mobileOpen)}><span/><span/></button></header>
  {mobileOpen&&<nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map(([label,href])=><Link key={href} href={href} onClick={()=>setMobileOpen(false)}>{label}</Link>)}</nav>}
  <aside className="sidebar"><Link className="brand" href="/study" aria-label="Professor Citachka home"><BrandMark/><div><strong>Professor Citachka</strong><span>Melissa’s private university</span></div></Link><nav className="primary-nav" aria-label="Primary navigation"><p className="nav-label">Your study rooms</p>{navItems.map(([label,href])=><Link key={href} href={href} className={href==='/study'?'active':''}><span className="nav-marker" aria-hidden="true"/>{label}</Link>)}<Link href="/" className="nav-home-link"><span className="nav-marker" aria-hidden="true"/>cookieheaven.art</Link></nav><div className="sidebar-note"><p>Professor’s principle</p><blockquote>“Knowledge expands the boundaries of agency.”</blockquote></div></aside>
  <main className="dashboard" id="main-content">
   <section className="dashboard-heading" aria-labelledby="welcome-title"><div><p className="eyebrow">Professor’s Study · your growing library</p><h1 id="welcome-title">Good morning, Melissa.</h1><p>Your private university, one clear idea at a time. Every subject remembers its own place. Pick the thread you want to follow today.</p></div><div className="date-seal"><span>Your rhythm</span><strong>Small &amp; steady</strong></div></section>
   <section className="next-lesson" aria-labelledby="next-lesson-title"><div className="lesson-index" aria-hidden="true"><span>First steps</span><strong>Ж</strong></div><div className="lesson-copy"><p className="eyebrow">An extended Russian introduction</p><h2 id="next-lesson-title">Alphabet Foundations</h2><p>Prefer a longer opening lesson? Meet six Cyrillic letters with listening and retrieval. Your personalized, ten-topic paths are below.</p></div><Link className="primary-action" href="/subjects/russian/alphabet-foundations">Begin Alphabet Foundations <span aria-hidden="true">→</span></Link><div className="orbit-mark" aria-hidden="true"><span/></div></section>
   <ProfessorChat/>
   <section className="study-section" aria-labelledby="subjects-title"><div className="section-heading"><div><p className="eyebrow">{programs.length} departments · a place for every curiosity</p><h2 id="subjects-title">Where would you like to grow?</h2></div><p>Choose your next unfinished topic or open a department to review. Each saved check counts as study; simply visiting does not.</p></div>
    <div className="subject-list learning-subject-list">{programs.map(p=><article className="subject-study-card" key={p.id}><Link className="subject-row" href={`/subjects/${p.id}`}><span className="subject-code pink"><SubjectIcon subject={p.id as SubjectIconName}/></span><span className="subject-copy"><strong>{p.title}</strong><span>{p.description}</span></span><span className="row-arrow" aria-hidden="true">↗</span></Link><SubjectProgress subject={p.id} compact/></article>)}</div>
   </section><StorageNotice/>
   <footer className="dashboard-footer"><p>Professor Citachka · Academia mode</p><p>Published curriculum: {programs.reduce((sum,p)=>sum+p.levels.filter(level=>!level.supplemental).length,0)} regular levels across {programs.length} subjects, plus optional Russian strong language. See each department for its published count. The full requested curriculum is not yet authored.</p></footer>
  </main>
 </div>;
}
