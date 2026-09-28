"use client";
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {BrandMark} from './Brand';
import {programs} from '@/lib/programs';

/**
 * Site-wide header.
 *
 * Hidden on `/study`, where the Professor's Study dashboard supplies its own
 * full sidebar navigation; showing both would be two competing menus.
 *
 * On the personal homepage it becomes the homepage header: the brand reads
 * cookieheaven.art and a short set of section links appears. Everywhere else it
 * stays the study header with the department menu.
 */
export function SiteNavigation(){
 const path=usePathname();
 if(path==='/study')return null;
 const onHome=path==='/';
 return <header className="global-study-header">
  <Link href="/" className="global-brand" aria-label={onHome?'cookieheaven.art home':'Professor Citachka home'}><BrandMark/><strong>{onHome?'cookieheaven.art':'Professor Citachka'}</strong></Link>
  {onHome&&<nav className="global-quick-nav" aria-label="Site sections">
   <Link href="#about">About</Link>
   <Link href="#art">Art</Link>
   <Link href="#photography">Photography</Link>
   <Link href="#music">Music</Link>
   <Link href="/study">Professor’s Study</Link>
  </nav>}
  <details className="all-departments"><summary>All departments</summary><nav aria-label="All subject navigation"><Link href="/study">Professor’s Study</Link>{programs.map(p=><Link key={p.id} aria-current={path.includes('/'+p.id)?'page':undefined} href={`/subjects/${p.id}`}>{p.title}</Link>)}</nav></details>
 </header>;
}
