import {expect,it} from 'vitest';
import {execFileSync} from 'node:child_process';
import {readdirSync} from 'node:fs';

it('validates every published pack against its pre-pack course inventory',()=>{
 const files=readdirSync('src/lib/course-packs').filter(file=>file.endsWith('.json'));
 const stdout=execFileSync('npx',['tsx','--tsconfig','tsconfig.json','scripts/validate-packs.ts'],{cwd:process.cwd(),encoding:'utf8'});
 const result=JSON.parse(stdout) as Record<string,{status:string}>;
 const packs=Object.entries(result).filter(([key])=>!key.startsWith('__'));
 expect(packs.length).toBe(files.length);
 expect(packs.map(([,item])=>item.status)).toEqual(Array(files.length).fill('valid'));
 expect(result.__published).toMatchObject({status:'valid',packs:files.length});
});
