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
 * cookieheaven.art and a short set of section links appears, in the language of
 * whichever homepage you are on. Everywhere else it stays the study header with
 * the department menu.
 */
const HOME_LABELS: Record<string,{
  about:string;art:string;photography:string;music:string;study:string;ariaLabel:string;
}>={
  '/':{about:'About',art:'Art',photography:'Photography',music:'Music',study:'Professor’s Study',ariaLabel:'Site sections'},
  '/es':{about:'Sobre mí',art:'Arte',photography:'Fotografía',music:'Música',study:'El Estudio del Profesor',ariaLabel:'Secciones del sitio'},
  '/ru':{about:'Обо мне',art:'Творчество',photography:'Фотография',music:'Музыка',study:'Кабинет профессора',ariaLabel:'Разделы сайта'},
};

export function SiteNavigation(){
 const path=usePathname();
 if(path==='/study')return null;
 const labels=HOME_LABELS[path];
 const onHome=Boolean(labels);
 return <header className="global-study-header">
  <Link href="/" className="global-brand" aria-label={onHome?'cookieheaven.art home':'Professor Citachka home'}><BrandMark/><strong>{onHome?'cookieheaven.art':'Professor Citachka'}</strong></Link>
  {labels&&<nav className="global-quick-nav" aria-label={labels.ariaLabel}>
   <Link href="#about">{labels.about}</Link>
   <Link href="#art">{labels.art}</Link>
   <Link href="#photography">{labels.photography}</Link>
   <Link href="#music">{labels.music}</Link>
   <Link href="/study">{labels.study}</Link>
  </nav>}
  <details className="all-departments"><summary>All departments</summary><nav aria-label="All subject navigation"><Link href="/study">Professor’s Study</Link>{programs.map(p=><Link key={p.id} aria-current={path.includes('/'+p.id)?'page':undefined} href={`/subjects/${p.id}`}>{p.title}</Link>)}</nav></details>
 </header>;
}
