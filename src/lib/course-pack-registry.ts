// Explicit registry of reviewed, complete course packs. Never glob-load author artifacts:
// only files imported here are published.
import type {CoursePack} from './course-pack';
import russian from './course-packs/russian.json';
import businessFunding from './course-packs/business-funding.json';
import literature from './course-packs/literature.json';
import neuroscience from './course-packs/neuroscience.json';
import veterinaryScience from './course-packs/veterinary-science.json';
import theology from './course-packs/theology.json';
import finance from './course-packs/finance.json';
import music from './course-packs/music.json';
import skincare from './course-packs/skincare.json';
import psychiatry from './course-packs/psychiatry.json';
import philosophy from './course-packs/philosophy.json';
export const reviewedCoursePacks=[russian,businessFunding,literature,neuroscience,veterinaryScience,theology,finance,music,skincare,psychiatry,philosophy] as unknown as CoursePack[];
