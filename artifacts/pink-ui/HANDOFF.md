# Pink UI integration handoff

## Status
UI implementation is ready to integrate. **Not deployed**, per parent's explicit instruction to wait for curriculum/assessment worker. No browsers, CDP, Playwright, local servers, new tabs, or GitHub were used. Screenshots/mobile rendering/overflow and real audio playback remain unverified.

## Implemented
- Shared atmosphere toolbar on every route: persistent Lively/Calm and Reading focus; live OS reduced-motion override; initial SSR/client Calm prevents animation flash before stored preferences restore; storage readback and session-only failure notice.
- Pink interaction system across dashboard subject cards, department/unit paths, navigation menus, lesson panels/choices/actions, audio controls, and progress bars: staged entrances, icon flourish, button sheen, navigation reveal, tactile press/focus cues, restrained toolbar ornament. Reading paragraphs/labels never translate on hover. No new artwork/dependencies.
- Silent, optional five-minute focus timer with start/pause/resume/reset, wall-clock deadline and visibility resync; no autoplay, no fabricated study, no reload persistence (disclosed).
- Presentation-only saved-progress observer: brief saved reading/review acknowledgement, distinct assessment passed vs neutral failed-assessment save feedback. No per-lesson quiz event dependency and no mastery claim. Maximum 12 new celebration petals, 1.1s particle animation, full toast removed after 2.4s; Calm/reduced motion removes burst.
- Calm integrates with existing single pink cursor, clears particles and requires fresh pointer movement on return to Lively. No progress-store or assessment/curriculum edits by this worker.
- Preserved exact quote, wallpaper scope, panda icons, woman-reader brand, fonts, program order, audiobook components, and learning record keys. Preference key is separate: `citachka-atmosphere-v1`.

## Files owned/changed
- `src/app/layout.tsx` (imports/mounts toolbar + celebration, motion.css, initial html data-motion=calm)
- `src/app/motion.css` (new, imported after existing styles)
- `src/app/motion.test.ts` (new)
- `src/components/StudyAtmosphere.tsx` + `.test.tsx` (new)
- `src/components/StudyCelebration.tsx` + `.test.tsx` (new)
- `src/components/FocusSession.tsx` + `.test.tsx` (new)
- `src/components/PinkGlitterCursor.tsx` + `.test.tsx` (Calm lifecycle integration)
- `scripts/verify-pink-ui-production.mjs` (new post-deployment QA script)
- `artifacts/pink-ui-tests.json` (full-tree test snapshot during migration)

## Verification actually run
- UI-targeted: **15 tests passed in 5 files**.
  `npm test -- src/app/motion.test.ts src/components/StudyAtmosphere.test.tsx src/components/FocusSession.test.tsx src/components/StudyCelebration.test.tsx src/components/PinkGlitterCursor.test.tsx`
- Full ESLint: **passed** after fixing initial hydration-state lint issue.
- `node --check scripts/verify-pink-ui-production.mjs`: passed. Script has NOT been exercised against the new UI because this worker did not deploy.
- Full-tree test run DURING content migration: **107 passed / 147 failed / 254 total**; failures are older lesson quiz/eligibility contracts undergoing migration. JSON evidence above. Do not report full suite green.
- Latest production build: webpack compilation passed (1551ms), then type check blocked by in-progress `src/lib/lesson-depth.test.ts` import of not-yet-created `./lesson-depth` and resulting unknown `d`. Previous run caught temporary assessment module/store issues. These are shared worker edits; left untouched.

## Integration-sensitive surfaces
`StudyCelebration` only calls `useStudy()` and reads existing `completed`, `interactions`, optional `assessments` attempt arrays (`passed`), plus `ready`/`unavailable`. Tests exercise real `recordStudy` and new `recordAssessment` APIs. It writes nothing. It suppresses saved claims when storage is unavailable, and treats assessments separately from reading.

`motion.css` targets stable existing classes `.path-unit`, `.topic-path`, `.learning-panel`, `.answer-choice`, `.subject-study-card`, etc. New assessment templates using these inherit the system. If the content worker invents different classes, add selectors, not gate logic.

## Measurements / safeguards
- New motion CSS source: **14,373 bytes**, gzip **4,293 bytes** (source compression, NOT measured deployed transfer/bundle size).
- New component source gzip: atmosphere 1,124 bytes; celebration 979 bytes; focus timer 926 bytes at measurement time.
- No animation package, external artwork, scroll listener or scroll observer added. New decorative keyframes use transform/opacity. Existing quote/glitter styling remains inherited.
- No changes to curriculum, lesson gates, canonical study storage, audiobook playback, or chat connectivity.
- 48px control minima and 18px secondary/control type floor in shared new styles; intended mobile adaptations are CSS/source-reviewed only, not visually rendered.

## Parent next steps
1. Wait for assessment/deep-content worker, rerun all tests, lint and production build on final tree.
2. Deploy combined tree and read exact deployment ID/alias back.
3. Run `DEPLOYMENT_ID=dpl_ACTUAL node scripts/verify-pink-ui-production.mjs` after deployment. It checks home + all 11 departments + first lesson per department; fetches icons/wallpaper/Next script and CSS assets; exercises real deployed JS for Lively/Calm, live OS changes, focus, timer, preference restoration and blocked storage in isolated jsdom; asserts UI controls do not write fake study. Output: `artifacts/pink-ui/production.json`, failure evidence retained separately.
4. Run assessment worker's new production progression QA separately; older funding script assumes per-lesson writing/quiz gates and must not be used unchanged.
5. Report real-browser visual checks explicitly unverified.
