import {russianLessons} from '@/app/subjects/russian/curriculum';
import titles from './legacy-titles.json';
export const legacyTitle=(subject:string,slug:string)=>(titles as Record<string,string>)[`${subject}/${slug}`];
export const legacyPaths:Record<string,string[]>={
 russian:russianLessons.map(l=>l.slug),
 neuroscience:['neural-foundations','sensation-and-movement','learning-memory-attention','emotion-and-motivation','clinical-and-cognitive-neuroscience'],
 'veterinary-science':['clinical-foundations','comparative-anatomy','physiology-pathology','pharmacology-diagnostics','patient-care-practice'],
 theology:['how-theology-reasons','god-creation-and-the-human-person','christ-and-salvation','church-sacraments-and-moral-life','history-philosophy-and-questions'],
 finance:['cash-flow-basics','debt-interest-and-risk','investing-fundamentals','markets-and-valuation','independent-financial-judgment'],
 music:['beat-and-counting','note-names-and-keyboard-map','scales-and-chords','guitar-ready','guitar-first-chords','guitar-rhythm-and-song','keyboard-map-and-posture','keyboard-first-melody','keyboard-chords-and-two-hands','fl-studio-tour','fl-studio-first-beat','fl-studio-midi-and-arrangement'],
 skincare:['skin-as-an-organ','build-a-basic-routine','read-a-product-label','barrier-and-irritation','sunscreen-and-pigment','acne-basics','retinoid-literacy','dark-marks-and-tone','sanitation-and-scope','professional-routine-audit']
};
export function nextLegacy(id:string){const [subject,slug]=id.split('/');const paths=legacyPaths[subject]??[];const index=paths.indexOf(slug);const next=index>=0?paths[index+1]:undefined;return {subject,slug:next,title:next?legacyTitle(subject,next):undefined,url:next?`/subjects/${subject}/${next}`:`/subjects/${subject}`};}
