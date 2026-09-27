# Integrated release handoff

Live: https://professor-citachka.vercel.app
Deployment: dpl_AeVUkuo8HMiGnN4k89peZh9g8qE4 (READY; alias inspected)
Immutable: https://professor-citachka-kl0syjq9o-mycookieheavens-projects.vercel.app

## Verified
- 274/274 tests; eslint; Next production build passed before deployment.
- Direct production readback: 468 public routes and 41 linked JS/CSS assets successful. `release-readback.json`.
- Pink UI deployed-JS jsdom QA: 45 reports, exit 0.
- Pedagogy deployed-JS QA is NOT a clean pass: partial evidence saved; streamed Literature final-navigation is outside reliable jsdom coverage, and latest harness crashed during window teardown (`null ... _location`). Full local component suite passed. Do not claim real-browser validation, audible playback, video captions or playback.

## Delivered
- Modern hierarchy: two five-lesson units per published level, five-question unit quizzes and ten-question cumulative level tests; 60 unit quizzes/30 level tests, including optional Russian supplemental sequence.
- Ungated save-and-continue on modern, funding, extended legacy, and literature reading guides. Reading and score attempts separate; retries/review, forward resume, migration without fabricated scores, corrupt/blocked storage handling.
- Shared ReadingNext: IntersectionObserver checkpoint, always-reachable manual action, exact destination, no automatic navigation, static accessible button; inner arrow motion only Lively with reduced-motion override. Reaching sentinel never records mastery.
- Narration: actual text extraction, device English/Russian voices, play/pause/resume/stop/speed, dynamic voices, missing voice handling, cancellation on route/unmount. Implemented across 300 modern +66 extended +4 guides; speech tested with mocks only, not actual audible device output.
- Preserved Astra/pink UI and original course/audio content.
- Authored depth additions only Russian 01–10 and Philosophy 01–10 (20 lessons, 5,353 additional words); not an all-course university-level rewrite.
- 4 new topic diagrams with controllable animation; video metadata/provider embed checked for 4 distinct sources across 8 lesson entries. Captions/playback remain unverified and explicitly disclosed.

## Exact gaps
`release-coverage.json` has per-course levels/units/lessons/gaps to 100 units. Russian 6 units (4 main +2 optional), funding 10, philosophy 12, each of remaining eight courses 4. No department has 100 units. 300 modern lessons retained, 66 extended lessons, 4 guides. Legacy/guides have ungated reading but are NOT reorganized into independent assessed multi-unit levels. Assessment questions reuse authored lesson questions; unseen cumulative application banks and richer answer-specific distractor feedback remain unfinished. 280 modern lessons did not receive new depth; 366 learning entries lack new topic illustrations, 362 lack verified-metadata video. Existing art is not counted as new instructional imagery.

## Main changed implementation files
src/lib/{assessments,progress,study-store,lesson-depth,lesson-visuals,instructional-videos}.ts
src/components/{Learning,FundingLesson,FundingDepartment,LegacyCompletion,AssessmentLesson,ReadingNext,ReadAloudControls,LessonVisual,InstructionalVideo}.tsx
src/components/{ReadingNext,LessonVisual}.module.css
src/app/assess/[subject]/[assessment]/page.tsx
src/app/subjects/literature/{page,ReadingPractice}.tsx
src/app/subjects/music/MusicLesson.tsx
Associated regression/new tests, vitest.config.ts, scripts/audit-curriculum.ts and QA scripts.

QA artifacts/scripts written after deployment do not change website runtime. No pending application feature changes after deployed passing build.
