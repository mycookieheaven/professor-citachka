"""Preserve retrieved evidence and validate existing course citation IDs.
No network requests or new source registrations; uses the task's existing ledger.
"""
import json
import re
import subprocess
from pathlib import Path

root=Path(__file__).resolve().parents[1]
research=root/'research/funding'
script=Path.home()/'.hermes/profiles/citachka-ai/skills/research/grounded-citations/scripts/sources.py'
ledger=research/'ledger.json'
needles={1:'Most 7(a) term loans',2:'require providers of commercial financing',3:'permanently bans the company',4:'If you fall behind',5:'cannot legally',6:'Scammers tell you to lie',7:'SCALE DOWN',8:'illegal high-interest loans disguised',9:'Reverse consolidation is when',10:'SBA only makes direct loans'}
for id,needle in needles.items():
    if id==1:
        text=(research/'source-1.txt').read_text()
    else:
        data=json.loads((research/f'source-{id}.json').read_text())
        text=data['results'][0]['content']
    # Whitespace only is normalized; sentences remain the retrieved source's words.
    text=re.sub(r'\s+',' ',text)
    evidence=research/f'evidence-{id}.txt'
    evidence.write_text(text)
    pos=text.lower().find(needle.lower())
    if pos<0: raise RuntimeError(f'Missing source {id} evidence phrase: {needle}')
    end=text.find('.',pos)
    quote=text[pos:end+1] if end>=0 else text[pos:pos+200]
    subprocess.run(['python3',str(script),'--ledger',str(ledger),'quote',str(id),'--text',quote,'--from',str(evidence)],check=True)
subprocess.run(['python3',str(script),'--ledger',str(ledger),'render','--replace-in',str(research/'course-citations.md')],check=True)
subprocess.run(['python3',str(script),'--ledger',str(ledger),'verify',str(research/'course-citations.md'),'--evidence'],check=True)
