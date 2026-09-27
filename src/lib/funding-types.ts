import type {Topic} from './programs';
export type FundingTopic = Topic & {objective:string;prompt:string;model:string;rubric:[string,string];sources:number[]};
export type FundingRow = Omit<FundingTopic,'id'>;
