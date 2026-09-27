# Business Funding & Sales — release verification

## Production
- Deployment: `dpl_FjwdSbPigXqpZHtam7moWyCsu73Z`
- Immutable URL: https://professor-citachka-1q8o3jhyq-mycookieheavens-projects.vercel.app
- Public department: https://professor-citachka.vercel.app/subjects/business-funding
- First lesson: https://professor-citachka.vercel.app/learn/business-funding/01
- `npx vercel --prod --yes` completed; subsequent `vercel inspect` readback reported Ready, production target, and the public alias pointing at this deployment.

## Authored scope (programmatic audit)
5 of 50 requested levels, each with one ten-topic unit: 50 distinct authored topics, 50 worked merchant examples, 50 writing prompts, 50 models, 100 self-review criteria and 50 two-choice merchant branch checks. 45 levels, approximately 450 topics, remain unfinished and are explicitly disclosed on the department page. This is a substantive initial course including advanced integration, not an expert credential or a claim that the full requested curriculum is complete.

Coverage includes opening calls, discovery, permission, pitch relevance, all requested objections, consent-based closes, post-funding checks and renewals; MCAs, business LOCs, HELOCs, legitimate credit repair, consolidation, reverse-consolidation marketing, traditional term/SBA loans, equipment and invoice financing; factor versus APR, net proceeds, fees, remittance calendars, reconciliation, guarantees, UCC interests, stacking restrictions, records/privacy and cash-flow stress.

Nine primary sources and one explicitly labeled industry source support the curriculum. The latter is used only to establish reverse-consolidation marketing usage, not legal uniformity or safety. The citation ledger and evidence gate passed for all ten referenced sources; this verifies citation IDs and stored evidence, not professional legal review of every sentence.

## Verification
- 234 tests passed across 41 test files. New regression coverage exercises all 50 funding topics, every unit boundary, the final return, writing/self-review gates, incorrect responses, review without resume regression, subject independence, malformed storage, same-day deduplication and blocked-save retry.
- Lint passed.
- Local production build passed with Webpack; Vercel production build also passed, generating 373 static pages.
- HTTP readback: 384 public routes/assets checked, no failures, including all 50 funding lesson routes, every department and retained Finance legacy routes. Internal `/_global-error` intentionally returns 500 and was removed from the public-course success denominator; initial diagnostic retained separately.
- Real deployed JavaScript executed in jsdom: lesson 01 → 02; advanced lesson 41 → 42; capstone 50 → department. Writing gate, wrong-answer block, self-review, synchronous durable-save readback, next URL and next authored heading passed.
- A fresh production DOM restored saved department and dashboard resume. Mobile-menu interaction with a synthetic 390px width confirmed Russian first, Business Funding & Sales second; production desktop cards/navigation matched. Existing departments remain present.
- Production CSS readback confirms mobile breakpoint/single-column rules, 19px reading text, visible-focus rules and reduced-motion support.

## Limitations and diagnostics
No browser automation, browser windows, local hosting or GitHub were used. jsdom is not a visual layout engine: actual mobile/desktop rendering, screenshots, clipping/overflow, computed contrast and real-browser compatibility were NOT verified. Follow the learner-specific no-browser preference unless the learner explicitly changes it.

Practice writing is page-memory-only and is cleared on refresh/navigation, as the interface states. Completion, study dates and resume are browser-local, not cross-device. Models and self-review are explicitly not AI evaluation; no credential-dependent AI calls were added. A correct branch plus self-attestation is not evidence of independent expert sales competence.

Initial default Turbopack build failed in the Google-font resolver. A verified Webpack build preserves the fonts; package build now explicitly uses `next build --webpack`. Next's generated types also rejected existing named Finance route exports. The unchanged legacy Finance implementation was moved to `FinanceLesson.tsx`, the page now re-exports only its default, and its tests import the implementation. No Finance lesson content or behavior was rewritten.

Initial deployed jsdom navigation timed out because the harness fetch shim discarded URL-object hrefs. Correcting the test shim resolved production navigation; no application fix was needed. The failed harness report is retained alongside successful reports.

## Files
Course: `src/lib/funding*.ts`; UI: `src/components/FundingLesson.tsx`, `FundingDepartment.tsx`; integration: program priority order, dashboard count, subject icon and subject/lesson route dispatch. Tests cover content/math/navigation/department/interaction and update existing catalog/dashboard scope assertions. Build/legacy-route compatibility changes are noted above. Research and exact outputs: `research/funding/audit.json`, `live-http.json`, `live-interactions.json`, `ledger.json`, `course-citations.md`, retrieved evidence files. Repeatable QA scripts are in `scripts/verify-funding-*`.

Verification scripts/reports produced after deployment are local evidence files; they were not redeployed as a second application release. The application verified is the exact deployment named above.
