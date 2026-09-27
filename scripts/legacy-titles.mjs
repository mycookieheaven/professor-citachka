// Extract exact authored titles without importing lesson Client Components.
import ts from 'typescript';
import {readFileSync,readdirSync,writeFileSync} from 'node:fs';
import {join} from 'node:path';
const titles={};
function walk(dir){for(const e of readdirSync(dir,{withFileTypes:true})){const file=join(dir,e.name);if(e.isDirectory())walk(file);else if(/\.(ts|tsx)$/.test(file)&&!file.includes('.test.')){
 const subject=file.match(/subjects\/([^/]+)\//)?.[1]??(file.includes('components/neuroscience/')?'neuroscience':null);if(!subject)return;
 const ast=ts.createSourceFile(file,readFileSync(file,'utf8'),ts.ScriptTarget.Latest,true);
 function visit(n){if(ts.isObjectLiteralExpression(n)){const fields={};for(const p of n.properties)if(ts.isPropertyAssignment(p)&&ts.isStringLiteral(p.initializer))fields[p.name.getText(ast).replaceAll('"','')]=p.initializer.text;
 if(fields.title&&(fields.slug||fields.id)){const id=fields.id?.includes('/')?fields.id:`${subject}/${fields.slug??fields.id}`;titles[id]=fields.title;}}
 ts.forEachChild(n,visit);}visit(ast);
}}}
walk('src/app/subjects');walk('src/components/neuroscience');
const out=JSON.stringify(titles,null,2)+'\n';
if(process.argv.includes('--check')){if(readFileSync('src/lib/legacy-titles.json','utf8')!==out)throw new Error('Run node scripts/legacy-titles.mjs to update exact titles');}
else writeFileSync('src/lib/legacy-titles.json',out);
console.log(`Authored legacy title index: ${Object.keys(titles).length} entries`);
