// Explicit registry of reviewed, complete course packs. Never glob-load author artifacts:
// only files imported here are published.
//
// Packs are listed per subject in teaching order: the original pack first, then each
// continuation level after it. The loader appends them in this array order, so a
// continuation must never appear before the content it builds on.
import type {CoursePack} from './course-pack';
import russian from './course-packs/russian.json';
import russian5160 from './course-packs/russian-51-60.json';
import businessFunding from './course-packs/business-funding.json';
import businessFunding6170 from './course-packs/business-funding-61-70.json';
import literature from './course-packs/literature.json';
import literature3140 from './course-packs/literature-31-40.json';
import neuroscience from './course-packs/neuroscience.json';
import neuroscience3140 from './course-packs/neuroscience-31-40.json';
import veterinaryScience from './course-packs/veterinary-science.json';
import veterinaryScience3140 from './course-packs/veterinary-science-31-40.json';
import theology from './course-packs/theology.json';
import theology3140 from './course-packs/theology-31-40.json';
import finance from './course-packs/finance.json';
import finance3140 from './course-packs/finance-31-40.json';
import music from './course-packs/music.json';
import music3140 from './course-packs/music-31-40.json';
import skincare from './course-packs/skincare.json';
import psychiatry from './course-packs/psychiatry.json';
import psychiatry3140 from './course-packs/psychiatry-31-40.json';
import philosophy from './course-packs/philosophy.json';
import philosophy7180 from './course-packs/philosophy-71-80.json';
export const reviewedCoursePacks=[russian,russian5160,businessFunding,businessFunding6170,literature,literature3140,neuroscience,neuroscience3140,veterinaryScience,veterinaryScience3140,theology,theology3140,finance,finance3140,music,music3140,skincare,psychiatry,psychiatry3140,philosophy,philosophy7180] as unknown as CoursePack[];
