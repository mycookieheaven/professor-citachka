# Progress and next-lesson repair — production verification

## Live deployment
- Stable production URL: https://professor-citachka.vercel.app
- Deployment: `dpl_5VnR2CtofcZhL9aQ3AmUaFiQHexV`
- Immutable URL: https://professor-citachka-g0luodeie-mycookieheavens-projects.vercel.app
- `vercel inspect professor-citachka.vercel.app` confirmed this exact deployment is Ready and owns the stable alias.

## Root causes and repairs
- Music, Skincare, and Veterinary lessons exposed independent forward links that bypassed the gated completion/save handler. Removed these duplicate next links.
- Modern/legacy/reading-guide completion used an eight-second delayed transition and a separate completion action. Replaced it with one explicit arrow containing the next authored title; clicking commits and immediately routes. Feedback remains available before clicking, without an automatic timer.
- Legacy completion keys were not migrated into the shared dashboard ledger. Existing recognized old completions now merge into the shared view without inventing historical study days. Extended completed counts and exact-title resume are visible separately from modern topic counts.
- Completion could clear a later resume position; legacy completion and next-position writes were separate. Completion and next resume now share one synchronous ledger write, followed by storage readback before navigation. Earlier completed reviews retain later resume.
- Legacy lesson components could preserve answers across changed lesson props. Keyed sessions reset retrieval gates on lesson identity changes.
- Storage failure now blocks automatic navigation, exposes an honest warning and explicit continue-without-saving action. Retry does not double-count a study interaction. Malformed ledger/legacy data is backed up before replacement; valid subject records and old keys are retained.
- Global `body::before` applied Monchhichi to every route. Removed it. Plain `#8b365f` rose pink applies to body, departments, and all lesson surfaces; only `/` mounts the wallpaper element. Existing dashboard glass, branding, quote, cursor, and hover animation remain.

## Reproducible checks
```sh
npm test -- --reporter=dot
npm run lint
node scripts/legacy-titles.mjs --check
npm run build
python3 scripts/verify-production.py https://professor-citachka.vercel.app
npx --yes vercel inspect professor-citachka.vercel.app
```

- Tests: **160 passed in 30 files**. The new next-action, legacy migration/recovery, bypass-link, and background tests were first observed failing before their corresponding repairs.
- Real jsdom interaction sweeps cover **all 250 modern topics**, every **66 legacy completion boundary**, and **all four literature guide transitions**. Existing actual subject component tests cover retrieval and compatibility persistence; additional Music/Skincare/Veterinary regressions cover bypass links and fresh route state.
- Storage coverage: synchronous write-before-navigation, unmount/remount resume, fresh-module reload, earlier review without regression, wrong answer gates, final destinations, date deduplication, malformed data, blocked writes/reads, silent write loss, retry without duplicated interactions.
- Lint: passed, no warnings. TypeScript and local/Vercel production builds passed. Build generated 322 static pages.
- HTTP readback: **327 routes returned 200**: dashboard, ten departments, 250 modern topics, 66 legacy lessons. Wallpaper markup occurs only on dashboard.
- Asset readback: **22 assets returned 200**; deployed CSS contains plain pink backgrounds and no global wallpaper selector, deployed JavaScript contains new title actions and durable-storage checks.
- All **66 legacy production H1 headings** matched the authored-title index; no title mismatches.
- Scope unchanged: ten subjects, 240 regular topics plus ten optional Russian strong-language topics, 66 legacy lessons, four literature guides. No curriculum expansion in this repair.

Raw HTTP evidence: `production-routes.json`, `production-assets.json`, `production-summary.json` in this directory. SHA-256 hashes identify returned content. The verification script and final two additional storage edge-case tests were added locally after deployment; deployed application code is the tested code, unchanged afterward.

## Limitations
No browser, Chrome, headless automation, CDP, localhost, or GitHub was used. jsdom verifies component interactions, not a real browser's Next.js hydration/scrolling or visual layout; those are not claimed verified. Production checks inspect returned HTML and assets, not user localStorage. Progress remains browser/device/origin-local, not cloud-synced. Use the stable production alias and the same browser/profile; another hostname/device cannot read its storage. Previously erased or never-recorded progress cannot be reconstructed. Vercel emitted a non-blocking `unrs-resolver` install-script approval warning; the build and deployment completed successfully.
