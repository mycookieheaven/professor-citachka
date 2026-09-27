"use client";
import {useEffect,useRef,useState,type ReactNode} from 'react';
import styles from './ReadingNext.module.css';
export function ReadingNext({children,onClick,disabled=false}:{children:ReactNode;onClick:()=>void;disabled?:boolean}){
 const sentinel=useRef<HTMLDivElement>(null);const [reached,setReached]=useState(false);
 useEffect(()=>{if(typeof IntersectionObserver==='undefined'||!sentinel.current)return;const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting))setReached(true);},{threshold:0.1});observer.observe(sentinel.current);return()=>observer.disconnect();},[]);
 return <div className={styles.end} data-reading-end={reached?'reached':'manual'} data-skip-read-aloud><div ref={sentinel} className={styles.sentinel} aria-hidden="true"/><p>{reached?'You reached the reading checkpoint.':'Ready to continue? The reading action is always available here.'} This is a reading position, not proof of understanding. Nothing advances automatically.</p><button type="button" className={`primary-action ${styles.next}`} disabled={disabled} onClick={onClick}><span className={styles.arrow} aria-hidden="true">→</span> {children}</button></div>;
}
