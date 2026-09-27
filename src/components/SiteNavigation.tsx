"use client";
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {BrandMark} from './Brand';
import {programs} from '@/lib/programs';
export function SiteNavigation(){const path=usePathname();if(path==='/')return null;return <header className="global-study-header"><Link href="/" className="global-brand" aria-label="Professor Citachka home"><BrandMark/><strong>Professor Citachka</strong></Link><details className="all-departments"><summary>All departments</summary><nav aria-label="All subject navigation"><Link href="/">Professor’s Study</Link>{programs.map(p=><Link key={p.id} aria-current={path.includes('/'+p.id)?'page':undefined} href={`/subjects/${p.id}`}>{p.title}</Link>)}</nav></details></header>;}
