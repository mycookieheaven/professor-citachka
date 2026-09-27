import {expect,it} from 'vitest';
import {execFileSync} from 'node:child_process';

it('validates each registered pack against its pre-pack course inventory',()=>{
 const stdout=execFileSync('npx',['tsx','--tsconfig','tsconfig.json','scripts/validate-packs.ts'],{cwd:process.cwd(),encoding:'utf8'});
 const result=JSON.parse(stdout) as Record<string,{status:string}>;
 expect(Object.values(result).map(item=>item.status)).toEqual(Array(11).fill('valid'));
});
