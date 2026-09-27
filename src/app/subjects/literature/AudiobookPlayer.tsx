"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./literature.module.css";

export type Recording = {
  narrator: string; archiveId: string; catalogUrl: string; rightsUrl: string;
  edition: string; chapters: { title: string; url: string }[];
};

export function AudiobookPlayer({ id, title, recording }: { id: string; title: string; recording: Recording }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [chapter, setChapter] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [storageFailed, setStorageFailed] = useState(false);
  const pendingPosition = useRef(0);
  const ready = useRef(false);
  const key = `citachka-audio-${id}-v1`;
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(key) || 'null');
      if (saved && saved.recording === recording.archiveId && Number.isInteger(saved.chapter) && saved.chapter >= 0 && saved.chapter < recording.chapters.length && Number.isFinite(saved.position) && saved.position >= 0 && [0.75, 1, 1.25, 1.5, 1.75, 2].includes(saved.speed)) {
        // Browser-local restoration must happen after hydration, never during server rendering.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setChapter(saved.chapter);
        setSpeed(saved.speed); setPosition(saved.position);
        pendingPosition.current = saved.position;
      }
    } catch { setStorageFailed(true); }
    ready.current = true;
  }, [key, recording]);
  function save(nextChapter: number, nextPosition: number, nextSpeed = speed) {
    if (!ready.current) return;
    try { localStorage.setItem(key, JSON.stringify({ recording: recording.archiveId, chapter: nextChapter, position: nextPosition, speed: nextSpeed })); } catch { setStorageFailed(true); }
  }
  function chooseChapter(index: number) {
    audio.current?.pause();
    pendingPosition.current = 0;
    setPosition(0); setDuration(0); setPlaying(false); setChapter(index);
    setError(false); setLoading(false);
    save(index, 0);
  }
  function seek(value: number) {
    if (!audio.current || !duration) return;
    audio.current.currentTime = Math.max(0, Math.min(duration, value));
    setPosition(audio.current.currentTime);
    save(chapter, audio.current.currentTime);
  }
  function toggle() {
    const element = audio.current;
    if (!element) return;
    if (!element.paused) element.pause();
    else {
      setError(false); setLoading(true);
      void element.play().catch(() => { setLoading(false); setError(true); setPlaying(false); });
    }
  }
  const clock = (value: number) => `${Math.floor(value / 60)}:${String(Math.floor(value % 60)).padStart(2, '0')}`;
  return <section className={styles.audio} aria-label={`${title} audiobook`}>
    <h3>Listen here · {title}</h3>
    <p>Read by {recording.narrator} for LibriVox · {recording.edition} · {recording.chapters.length} audio sections.</p>
    <label htmlFor={`${id}-chapter`}>{title} chapter</label>
    <select id={`${id}-chapter`} value={chapter} onChange={event => chooseChapter(Number(event.target.value))}>
      {recording.chapters.map((part, index) => <option key={part.url} value={index}>{part.title}</option>)}
    </select>
    <audio ref={audio} controls preload="none" src={recording.chapters[chapter].url} aria-label={`${title}: ${recording.chapters[chapter].title}`}
      onPlay={() => { document.querySelectorAll('audio').forEach(other => { if (other !== audio.current) other.pause(); }); setPlaying(true); }}
      onPlaying={() => { setLoading(false); setError(false); }}
      onPause={() => setPlaying(false)} onEnded={() => { setPlaying(false); setLoading(false); }}
      onWaiting={() => setLoading(true)} onCanPlay={() => setLoading(false)}
      onError={() => { setError(true); setLoading(false); setPlaying(false); }}
      onTimeUpdate={event => { if (event.currentTarget.readyState < 1 && pendingPosition.current > 0) return; setPosition(event.currentTarget.currentTime); save(chapter, event.currentTarget.currentTime); }}
      onLoadedMetadata={event => {
        const element = event.currentTarget;
        setDuration(Number.isFinite(element.duration) ? element.duration : 0);
        element.currentTime = Math.min(pendingPosition.current, element.duration || 0);
        pendingPosition.current = 0;
        element.playbackRate = speed;
      }} />
    {loading && <p aria-live="polite">Loading audio… If this takes too long, pause and retry.</p>}
    {error && <div role="alert"><p>We could not play this chapter. Check your connection, then retry here. Internet Archive may be temporarily unavailable.</p><button type="button" onClick={() => { if (audio.current) { pendingPosition.current = position; audio.current.load(); } toggle(); }}>Retry audio</button></div>}
    <div className={styles.playerButtons}>
      <button type="button" onClick={toggle}>{playing ? 'Pause' : 'Play'} {title}</button>
      <button type="button" disabled={!duration} onClick={() => seek(position - 15)}>Back 15 seconds</button>
      <button type="button" disabled={!duration} onClick={() => seek(position + 15)}>Forward 15 seconds</button>
      <button type="button" disabled={chapter === 0} onClick={() => chooseChapter(chapter - 1)}>Previous chapter</button>
      <button type="button" disabled={chapter === recording.chapters.length - 1} onClick={() => chooseChapter(chapter + 1)}>Next chapter</button>
    </div>
    <label htmlFor={`${id}-position`}>{title} playback position · {clock(position)} / {clock(duration)}</label>
    <input id={`${id}-position`} type="range" min="0" max={duration || 1} step="1" value={position} disabled={!duration} aria-label={`${title} playback position`} aria-valuetext={`${clock(position)} of ${clock(duration)}`} onChange={event => seek(Number(event.target.value))} />
    <label htmlFor={`${id}-speed`}>{title} playback speed</label>
    <select id={`${id}-speed`} value={speed} onChange={event => { const rate = Number(event.target.value); setSpeed(rate); save(chapter, position, rate); if (audio.current) audio.current.playbackRate = rate; }}>
      {[0.75, 1, 1.25, 1.5, 1.75, 2].map(rate => <option value={rate} key={rate}>{rate}×{rate === 1 ? ' · normal' : ''}</option>)}
    </select>
    {storageFailed && <p aria-live="polite">Your listening position could not be saved. Listening still works for this session.</p>}
    <p>Listening position and speed are saved in this browser only when storage is available. This is separate from reading-guide progress.</p>
    <details><summary>Recording credits and rights</summary><p>Human narration by {recording.narrator}. Audio streamed from Internet Archive; playback stays on this page. LibriVox dedicates its recordings to the public domain in the USA. The underlying text is also public domain in the USA. Outside the USA, check local copyright law before listening or downloading.</p><p>Catalog: {recording.catalogUrl}</p><p>Internet Archive identifier: {recording.archiveId}</p><p>Archive rights statement: {recording.rightsUrl}</p></details>
  </section>;
}
