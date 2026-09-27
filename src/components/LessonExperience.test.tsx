import {cleanup,fireEvent,render,screen} from '@testing-library/react';
import {afterEach,expect,it,vi} from 'vitest';
import {LearningLesson} from './Learning';
import {PronunciationControls} from './PronunciationControls';
import {ReadAloudControls} from './ReadAloudControls';
import {getProgram} from '@/lib/programs';

const push=vi.fn();
vi.mock('next/navigation',()=>({useRouter:()=>({push}),usePathname:()=>'/learn/finance/01'}));

afterEach(()=>{
 cleanup();
 localStorage.clear();
 push.mockReset();
 vi.unstubAllGlobals();
});

it('renders authored definitions, mechanisms and worked applications without a lesson gate',()=>{
 const program=getProgram('philosophy')!;
 const topic=program.levels[0].topics[0];
 render(<LearningLesson program={program} topicId={topic.id}/>);

 expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
 expect(screen.getByRole('heading',{name:'Deeper explanation'})).toBeVisible();
 expect(screen.getByRole('heading',{name:'How to apply it'})).toBeVisible();
 expect(screen.getByRole('heading',{name:'Common mistake'})).toBeVisible();
 expect(screen.getByRole('heading',{name:'A second worked example'})).toBeVisible();

 const next=screen.getByRole('button',{name:/Next lesson:/});
 expect(next).toBeEnabled();
 fireEvent.click(screen.getByLabelText(topic.answer));
 expect(next).toBeEnabled();
});

it('reads lesson text aloud while excluding controls',()=>{
 const spoken:string[]=[];
 class MockUtterance {
  text:string;lang='';rate=1;voice=null;onend:undefined|(()=>void);onerror:undefined|(()=>void);
  constructor(text:string){this.text=text;}
 }
 const speech={
  cancel:vi.fn(),pause:vi.fn(),resume:vi.fn(),
  getVoices:vi.fn(()=>[{lang:'en-US',name:'English'}]),
  speak:vi.fn((utterance:MockUtterance)=>spoken.push(utterance.text)),
  paused:false,speaking:false,
 };
 vi.stubGlobal('SpeechSynthesisUtterance',MockUtterance);
 Object.defineProperty(window,'speechSynthesis',{value:speech,configurable:true});

 render(<><article id="lesson-copy"><h1>Cash-flow timing</h1><p>Income and expenses can arrive on different dates.</p><button>Do not narrate this control</button></article><ReadAloudControls targetId="lesson-copy"/></>);
 fireEvent.click(screen.getByRole('button',{name:'Listen'}));
 expect(spoken.join(' ')).toContain('Cash-flow timing');
 expect(spoken.join(' ')).toContain('Income and expenses can arrive on different dates.');
 expect(spoken.join(' ')).not.toContain('Do not narrate this control');
 fireEvent.click(screen.getByRole('button',{name:'Pause'}));
 expect(speech.pause).toHaveBeenCalledOnce();
 fireEvent.click(screen.getByRole('button',{name:'Stop'}));
 expect(speech.cancel).toHaveBeenCalled();
});

it('uses a phoneme-only speech value for isolated Russian letter sounds',()=>{
 const spoken:string[]=[];
 class MockUtterance {
  text:string;lang='';rate=1;voice=null;onend:undefined|(()=>void);onerror:undefined|(()=>void);
  constructor(text:string){this.text=text;}
 }
 const speech={cancel:vi.fn(),getVoices:vi.fn(()=>[{lang:'ru-RU',name:'Russian'}]),speak:vi.fn((utterance:MockUtterance)=>spoken.push(utterance.text))};
 vi.stubGlobal('SpeechSynthesisUtterance',MockUtterance);
 Object.defineProperty(window,'speechSynthesis',{value:speech,configurable:true});

 render(<PronunciationControls russian="А" latin="ah" spokenText="а-а-а" mode="sound"/>);
 fireEvent.click(screen.getByRole('button',{name:'Play slow sound for А'}));
 expect(spoken).toEqual(['а-а-а']);
 expect(spoken[0]).not.toMatch(/мама|кот|там/i);
});
