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
import businessFunding from './course-packs/business-funding.json';
import businessFunding6170 from './course-packs/business-funding-61-70.json';
import businessFunding7180 from './course-packs/business-funding-71-80.json';
import literature from './course-packs/literature.json';
import literature3140 from './course-packs/literature-31-40.json';
import literature4150 from './course-packs/literature-41-50.json';
import neuroscience from './course-packs/neuroscience.json';
import neuroscience3140 from './course-packs/neuroscience-31-40.json';
import neuroscience4150 from './course-packs/neuroscience-41-50.json';
import veterinaryScience from './course-packs/veterinary-science.json';
import veterinaryScience3140 from './course-packs/veterinary-science-31-40.json';
import veterinaryScience4150 from './course-packs/veterinary-science-41-50.json';
import theology from './course-packs/theology.json';
import theology3140 from './course-packs/theology-31-40.json';
import theology4150 from './course-packs/theology-41-50.json';
import finance from './course-packs/finance.json';
import finance3140 from './course-packs/finance-31-40.json';
import finance4150 from './course-packs/finance-41-50.json';
import music from './course-packs/music.json';
import music3140 from './course-packs/music-31-40.json';
import music4150 from './course-packs/music-41-50.json';
import skincare from './course-packs/skincare.json';
import skincare3140 from './course-packs/skincare-31-40.json';
import psychiatry from './course-packs/psychiatry.json';
import psychiatry3140 from './course-packs/psychiatry-31-40.json';
import psychiatry4150 from './course-packs/psychiatry-41-50.json';
import philosophy from './course-packs/philosophy.json';
import philosophy7180 from './course-packs/philosophy-71-80.json';
export const reviewedCoursePacks=[russian,russian5160,russian6170,businessFunding,businessFunding6170,businessFunding7180,literature,literature3140,literature4150,neuroscience,neuroscience3140,neuroscience4150,veterinaryScience,veterinaryScience3140,veterinaryScience4150,theology,theology3140,theology4150,finance,finance3140,finance4150,music,music3140,music4150,skincare,skincare3140,psychiatry,psychiatry3140,psychiatry4150,philosophy,philosophy7180] as unknown as CoursePack[];
