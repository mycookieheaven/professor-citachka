"use client";
import {useState} from 'react';
import {instructionalVideos} from '@/lib/instructional-videos';
export function InstructionalVideo({videoId}:{videoId:string}){
 const [loaded,setLoaded]=useState(false);const video=instructionalVideos[videoId];if(!video)return null;
 return <section className="learning-panel" aria-label="Instructional video"><p className="eyebrow">Video demonstration · optional</p><h2>{video.title}</h2><p>Creator: {video.creator}. Exact title and creator checked against the provider’s metadata. This is a longer beginner tutorial: use the parts relevant to this lesson and pause to practice.</p><p>Loading contacts YouTube. Nothing starts automatically; use the player’s controls to play, pause, change speed or request captions. English captions are requested, but their availability and accuracy depend on the provider and have not been verified here.</p>
 <button className="secondary-action" onClick={()=>setLoaded(!loaded)}>{loaded?'Hide video':'Load video here'}</button>
 {loaded&&<iframe src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&cc_load_policy=1&cc_lang_pref=en&rel=0`} title={video.title} loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" style={{width:'100%',aspectRatio:'16 / 9',border:0,marginTop:'1rem'}}/>}
 <p>If the player is blocked or unavailable, stay here and use the written explanation and practice steps. Hiding the player stops it. A missing video does not block reading or assessment.</p><details><summary>Source and playback limits</summary><p>Source: {video.source}. The provider supplied an embed through oEmbed. This is not a download or a claim to own the video. Playback, regional availability and captions can change; metadata verification is not a real-playback test.</p></details>
 </section>;
}
