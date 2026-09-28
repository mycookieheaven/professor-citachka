// Explicit registry of reviewed, complete course packs. Never glob-load author artifacts:
// only files imported here are published.
//
// Packs are listed per subject in teaching order: the original pack first, then each
// continuation level after it. The loader appends them in this array order, so a
// continuation must never appear before the content it builds on. Validation depends on
// this order too: a continuation legitimately references lessons taught in the packs that
// precede it for the same subject.
import type {CoursePack} from './course-pack';
import russian from './course-packs/russian.json';
import russian5160 from './course-packs/russian-51-60.json';
import russian6170 from './course-packs/russian-61-70.json';
import russian7180 from './course-packs/russian-71-80.json';
import russian8190 from './course-packs/russian-81-90.json';
import russian91100 from './course-packs/russian-91-100.json';
import businessFunding from './course-packs/business-funding.json';
import businessFunding6170 from './course-packs/business-funding-61-70.json';
import businessFunding7180 from './course-packs/business-funding-71-80.json';
import businessFunding8190 from './course-packs/business-funding-81-90.json';
import businessFunding91100 from './course-packs/business-funding-91-100.json';
import businessFunding101110 from './course-packs/business-funding-101-110.json';
import literature from './course-packs/literature.json';
import literature3140 from './course-packs/literature-31-40.json';
import literature4150 from './course-packs/literature-41-50.json';
import literature5160 from './course-packs/literature-51-60.json';
import literature6170 from './course-packs/literature-61-70.json';
import neuroscience from './course-packs/neuroscience.json';
import neuroscience3140 from './course-packs/neuroscience-31-40.json';
import neuroscience4150 from './course-packs/neuroscience-41-50.json';
import neuroscience5160 from './course-packs/neuroscience-51-60.json';
import neuroscience6170 from './course-packs/neuroscience-61-70.json';
import neuroscience7180 from './course-packs/neuroscience-71-80.json';
import veterinaryScience from './course-packs/veterinary-science.json';
import veterinaryScience3140 from './course-packs/veterinary-science-31-40.json';
import veterinaryScience4150 from './course-packs/veterinary-science-41-50.json';
import veterinaryScience5160 from './course-packs/veterinary-science-51-60.json';
import veterinaryScience6170 from './course-packs/veterinary-science-61-70.json';
import veterinaryScience7180 from './course-packs/veterinary-science-71-80.json';
import theology from './course-packs/theology.json';
import theology3140 from './course-packs/theology-31-40.json';
import theology4150 from './course-packs/theology-41-50.json';
import theology5160 from './course-packs/theology-51-60.json';
import theology6170 from './course-packs/theology-61-70.json';
import theology7180 from './course-packs/theology-71-80.json';
import finance from './course-packs/finance.json';
import finance3140 from './course-packs/finance-31-40.json';
import finance4150 from './course-packs/finance-41-50.json';
import finance5160 from './course-packs/finance-51-60.json';
import finance6170 from './course-packs/finance-61-70.json';
import music from './course-packs/music.json';
import music3140 from './course-packs/music-31-40.json';
import music4150 from './course-packs/music-41-50.json';
import music5160 from './course-packs/music-51-60.json';
import music6170 from './course-packs/music-61-70.json';
import music7180 from './course-packs/music-71-80.json';
import skincare from './course-packs/skincare.json';
import skincare3140 from './course-packs/skincare-31-40.json';
import skincare4150 from './course-packs/skincare-41-50.json';
import skincare5160 from './course-packs/skincare-51-60.json';
import skincare6170 from './course-packs/skincare-61-70.json';
import psychiatry from './course-packs/psychiatry.json';
import psychiatry3140 from './course-packs/psychiatry-31-40.json';
import psychiatry4150 from './course-packs/psychiatry-41-50.json';
import psychiatry5160 from './course-packs/psychiatry-51-60.json';
import psychiatry6170 from './course-packs/psychiatry-61-70.json';
import psychiatry7180 from './course-packs/psychiatry-71-80.json';
import philosophy from './course-packs/philosophy.json';
import philosophy7180 from './course-packs/philosophy-71-80.json';
import philosophy8190 from './course-packs/philosophy-81-90.json';
import philosophy91100 from './course-packs/philosophy-91-100.json';
export const reviewedCoursePacks=[russian,russian5160,russian6170,russian7180,russian8190,russian91100,businessFunding,businessFunding6170,businessFunding7180,businessFunding8190,businessFunding91100,businessFunding101110,literature,literature3140,literature4150,literature5160,literature6170,neuroscience,neuroscience3140,neuroscience4150,neuroscience5160,neuroscience6170,neuroscience7180,veterinaryScience,veterinaryScience3140,veterinaryScience4150,veterinaryScience5160,veterinaryScience6170,veterinaryScience7180,theology,theology3140,theology4150,theology5160,theology6170,theology7180,finance,finance3140,finance4150,finance5160,finance6170,music,music3140,music4150,music5160,music6170,music7180,skincare,skincare3140,skincare4150,skincare5160,skincare6170,psychiatry,psychiatry3140,psychiatry4150,psychiatry5160,psychiatry6170,psychiatry7180,philosophy,philosophy7180,philosophy8190,philosophy91100] as unknown as CoursePack[];
