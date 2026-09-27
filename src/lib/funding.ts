import type {Program} from './programs';
import type {FundingTopic} from './funding-types';
import {fundingFoundations} from './funding-foundations';
import {fundingProducts} from './funding-products';
import {fundingNumbersLessons} from './funding-numbers';
import {fundingExecution} from './funding-execution';
import {fundingAdvanced} from './funding-advanced';
const units=[
 {title:'Permission, discovery and conversational foundations',topics:fundingFoundations},
 {title:'Product distinctions and household-risk boundaries',topics:fundingProducts},
 {title:'Cost, remittance and cash-flow arithmetic',topics:fundingNumbersLessons},
 {title:'Underwriting, objections and informed closes',topics:fundingExecution},
 {title:'Advanced case analysis and ethical sales capstone',topics:fundingAdvanced},
];
export const fundingProgram:Omit<Program,'levels'> & {levels:{title:string;topics:FundingTopic[]}[]}={id:'business-funding',title:'Business Funding & Sales',description:'Priority 2 · Consultative MCA sales, business financing, cash-flow analysis and ethical opening-to-close practice.',levels:units.map((unit,i)=>({...unit,topics:unit.topics.map((topic,j)=>({...topic,id:String(i*10+j+1).padStart(2,'0')}))}))};
export const fundingTopics=fundingProgram.levels.flatMap(l=>l.topics);
export const fundingNotice='U.S. educational baseline, not individualized financial, legal or tax advice. State-specific rules, product classification and provider requirements vary. All merchants, scripts and numeric examples are fictional. Never enter real merchant/client names, account details, credit reports or other sensitive data. This course does not determine eligibility, compliance or suitability for an actual transaction.';
