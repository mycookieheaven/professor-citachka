import type {MetadataRoute} from 'next';
// The manifest is the same for every visitor, so it is written once at build time
// rather than computed per request. A static export has no server to run it later.
export const dynamic='force-static';
export default function manifest():MetadataRoute.Manifest{return {id:'/',name:'Professor Citachka',short_name:'Citachka',description:'Melissa’s private university for lifelong learning.',start_url:'/',scope:'/',display:'standalone',background_color:'#3b102d',theme_color:'#721c50',icons:[{src:'/icons/panda-192.png',sizes:'192x192',type:'image/png',purpose:'any'},{src:'/icons/panda-512.png',sizes:'512x512',type:'image/png',purpose:'any'},{src:'/icons/panda-maskable-512.png',sizes:'512x512',type:'image/png',purpose:'maskable'}]};}
