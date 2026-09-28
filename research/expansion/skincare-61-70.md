# Skincare continuation level, lessons 61-70 — author handoff

Author: parallel expansion author (one of ten). Subject: skincare. Level authored: one new level, two units, ten lessons.
This batch is a bounded authoritative release toward the 100-unit-per-course target. It is **not** fulfillment of that target and must not be described as such.

## Deliverables and exact paths

| Artifact | Path | Status |
|---|---|---|
| Course pack (inert staging, not imported by the registry) | `src/lib/course-packs/staged/skincare-61-70.json` | written, 220,242 bytes, valid JSON, real adapter accepts it |
| This handoff note | `research/expansion/skincare-61-70.md` | written |

`src/lib/course-packs/staged/` did not exist before this batch and was created for this deliverable. Nothing else in the repository was modified: the registry, tests, shared components and all pre-existing packs are untouched.

## Structure and exact counts (computed in code, not estimated)

- Level title: `Appraising and applying skin evidence: measurement, trials and formulation decisions`
- Units: 2. Lessons: 10. Lesson IDs, all as strings and continuing after lesson 60: `61`–`65` (unit 1), `66`–`70` (unit 2).
- Unit questions: 5 + 5 = 10, ids `uq-61-70-a` … `uq-61-70-e` (unit 1) and `uq-61-70-f` … `uq-61-70-j` (unit 2).
- Level questions: 12, ids `lq-61-70-a` … `lq-61-70-l`, each longer than a unit question and each cross-referencing 2–3 lessons.
- Total question objects: 22, all ids unique, no answer equal to its distractor.
- `reviewLessonIds` reference only valid IDs: `31, 34, 35, 42, 43, 45, 56, 57, 59` (earlier published skincare packs) and `61`–`70` (this pack).
- Reading rows: 38. Unique reading URLs: 32, all `https:`, no credentials in any URL.
- Visual study sequences: 10, each text-based with 6 labelled steps (no video, no playback claim, no imagery claim).

### Topic list

Unit 1 — `Skin as a measured surface: regional anatomy, instruments, and study design`

1. 61 One organ, many surfaces: regional anatomy and why skin type underspecifies the face
2. 62 What the instruments measure, and the error bars around the number
3. 63 How a trial is built: controls, randomisation, blinding and the honest unit of analysis
4. 64 Ladders of evidence, spin, and what to do when two syntheses disagree
5. 65 The periorbital region: thin skin, a shared tear film, and the deferral rule

Unit 2 — `Formulation, ingredients, and applied judgement: from base to decision`

6. 66 The vehicle carries the claim: ointments, creams, lotions and what delivery really means
7. 67 Preservatives, fragrance and free-from labels: hazard and risk are not the same question
8. 68 Antioxidants, peptides and growth factors: mechanism language versus outcome evidence
9. 69 The skin microbiome and biotic claims: preliminary evidence sold as settled
10. 70 Capstone: one dossier, one decision rule set, one honest limit

Placement rationale: unit 1 continues the evidence-literacy thread that began in levels 1–6 and moves it from ingredient auditing to instrument and study-design auditing; unit 2 is applied ingredient and formulation science ending in a personal dossier. Nothing here repeats the earlier levels. Checked against the twenty base lessons (skin barrier function, gentle cleansing, moisturiser roles, sun protection basics, introduce one change, read an ingredient list, irritation and allergy, cosmetic and medical claims, routine consistency, professional boundaries, exfoliation and tolerance, acne mechanisms, retinoid literacy, post-inflammatory marks, patch testing limits, formulation matters, sanitation and contamination, evaluate before-and-after images, inclusive skin observation, routine audit) and against packs 21–30, 31–40, 41–50 and 51–60, whose readings were inventoried first so that overlap in sources is deliberate rather than accidental. Lesson 66 extends base lesson 16 (formulation matters) into vehicle science; lessons 61–64 have no earlier counterpart.

## Instructional word count (computed in code)

Method, matching `scripts/validate-packs.ts` and `src/lib/course-pack.ts`: join `explanation`, `example` and the six `depth` fields, split on whitespace, count.

| Lesson | Words | Readings | Visual steps |
|---|---|---|---|
| 61 | 1,579 | 3 | 6 |
| 62 | 1,657 | 3 | 6 |
| 63 | 1,600 | 4 | 6 |
| 64 | 1,617 | 5 | 6 |
| 65 | 1,877 | 5 | 6 |
| 66 | 1,745 | 3 | 6 |
| 67 | 1,744 | 4 | 6 |
| 68 | 1,895 | 4 | 6 |
| 69 | 1,706 | 3 | 6 |
| 70 | 2,052 | 4 | 6 |

Total instructional words: **17,472**. Minimum per lesson: **1,579** against the 600-word floor. Mean: 1,747.2.

## Arithmetic checks (all computed with a tool, not mentally)

| Used in | Check | Result |
|---|---|---|
| 61 | Palm vs forearm TEWL ratio, 41 / 11 g/m2/h | 3.727 (lesson text says about three times, matching the source's own statement) |
| 62 | 20% of a baseline of 40 capacitance units | 8 units; 8 / 40 = 0.20 |
| 62 | Standard error of measurement at reliability 0.75, SD 10 | 10 × sqrt(0.25) = 5.0 units |
| 62 | Standard error of measurement at reliability 0.4, SD 10 | 10 × sqrt(0.6) = 7.746 units |
| 63 | Paired vs parallel sample ratio, 1 − r at r = 0.5 / r = 0.7 | 0.5 / 0.3; 31 paired participants ≈ 103 parallel participants at r = 0.7 |
| 64 | Illustrative publication-bias effect: 10 published trials at 0.6 and 10 unpublished at 0 | pooled mean 0.3, so published-only literature doubles the estimate (labelled in the lesson as an illustration, not a measurement) |
| 65 | 22.3% × 50,799 vs the reported count 11,338 | 11,328.2 (rounding) and 11,338 / 50,799 = 22.32%, so the stated count and percentage reconcile |
| 66 | Delivery range ratio, 72.61 / 0.03 µg/cm² | 2,420.3, so more than three orders of magnitude |
| 66 | Share of a finite dose of 10 µL/cm² (assumed density ≈ 1 g/mL, stated as an assumption in the lesson) | top of range 72.61 / 10,000 µg = 0.726%; bottom 0.03 / 10,000 = 0.0003% |
| 67 | Methylisothiazolinone 12.2% vs paraben mix 1% | 12.2× difference; per 1,000 patch-tested patients 122 vs 10 |
| 68 | Mean participants per trial in the network meta-analysis, 3,905 / 23 | 169.8 |
| 68 | 32% relative change on a nine-point scale from a baseline of 5.0 (lesson 68 worked example) | 0.32 × 5.0 = 1.6 scale points |
| lq-61-70-i | 12% relative change on a nine-point scale from a baseline of 5.0 | 0.12 × 5.0 = 0.6 scale points |
| 69 | 15-volunteer granularity | 14 / 15 = 93.3%; one additional isolate moves any percentage by 6.7 points |
| 70 | Cost per millilitre and annual cost | 48 USD / 30 mL = 1.60 per mL; 0.5 mL × 2 × 365 = 365 mL/year = 12.17 bottles = 584 USD/year; 22 USD / 50 mL = 0.44 per mL = 7.3 bottles = 160.60 USD/year; difference 423.40 USD/year |

## Structural validation actually performed

1. **Independent invariant check in code** mirroring `src/lib/course-pack.ts`: lesson ID format and uniqueness against the base catalogue (`01`–`20`) plus the published skincare packs (`21`–`60`); presence of all seven required lesson strings; all six `depth` fields; answer ≠ distractor; word floor; at least one reading with an https URL; title, description and at least three non-empty visual steps; at least five unit questions per unit with valid `reviewLessonIds`; at least twelve level questions exceeding the largest unit quiz; question ID uniqueness. Result: zero violations. One initial run reported twelve "duplicate" level question IDs; that was a defect in my own checker (it re-scanned level questions once per unit), not in the pack, and it disappeared once the checker was corrected.
2. **The real adapter was exercised, unmodified.** `src/lib/course-pack.ts` and `src/lib/programs.ts` were compiled with the repository's own `tsc` into `/tmp/skbuild` (no repository file added or altered) and `attachCoursePacks` was called in Node with the four published skincare packs plus this staged pack. Result: accepted; skincare goes from 6 to 7 levels; the new level carries 2 units of 5 lessons and 12 level assessment questions; topic IDs `61`–`70` appear. The whole published registry set plus this pack was then attached in one call: accepted, 11 programs, 83 levels (82 published + 1), no duplicate lesson or assessment ID within any subject.
3. Not run by me: `scripts/validate-packs.ts` (it reads only `src/lib/course-packs/*.json`, so a staged pack is outside its scope by design), the application test suite, lint, and the production build. Those remain the parent's integration step. No test was modified, weakened or added.

## Source verification

- All 32 unique reading URLs were requested with an HTTP client sending a browser user-agent (`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 … Chrome/120.0`) and an HTML accept header. **Result: 32 of 32 returned HTTP 200. Zero 403, zero 404, zero 5xx, zero connection errors.** No URL is reported as blocked.
- Two FDA paths I first guessed were genuine 404s and were corrected after checking: `…/cosmetics/cosmetic-products/eye-cosmetics` → `…/cosmetics/cosmetic-products/eye-cosmetic-safety`, and `…/cosmetics/cosmetic-ingredients/parabens-in-cosmetics` → `…/cosmetics/cosmetic-ingredients/parabens-cosmetics`. Both replacements verify 200.
- Hosts used: `pmc.ncbi.nlm.nih.gov` (22), `www.ncbi.nlm.nih.gov` Bookshelf (1), `training.cochrane.org` (1), `www.fda.gov` (3), `www.ftc.gov` (1), `www.aad.org` (1), `www.nei.nih.gov` (1), `www.equator-network.org` (1). A non-browser client returns 405 on `nia.nih.gov` and 403 on Pressbooks hosts in this repository's experience; neither host is cited in this level, and the browser user-agent was used throughout so no false negative was produced.
- **Honest limit on verification depth.** The lesson claims are grounded in text I actually retrieved, but not every page was retrieved as a rendered article by my client. Twenty URLs were read as full text (including the Cochrane Handbook chapter, all three FDA pages, the FTC guidance, the NEI page, the AAD page, the EQUATOR entry, and the PMC articles PMC10155800, PMC11246752, PMC12547863, PMC12956423, PMC2844794, PMC5654877, PMC6099538, PMC7027575, PMC8052120, PMC8087451, PMC8703425, PMC9907714). Twelve were not served to a plain fetch (a JavaScript shell or an empty body) and were instead grounded through the Europe PMC REST record for the identical article, whose abstract contains every fact I used from them: PMC5108505, PMC6118859, PMC6350753, PMC9436228, PMC10334896, PMC11298934, PMC11795973, PMC12193160, PMC12289910, PMC12912124, PMC13084527, and StatPearls NBK441980 (read through the extraction tool, which returns the chapter's opening and Structure and Function text). For those twelve, the reading notes direct the learner to sections of the article itself; I verified the URL resolves and verified the abstract-level facts, but I did not open the full rendered text of those sections. This is the main residual source risk in the batch and is stated in the affected reading notes where it matters (for example, the review-quality study is cited for its methods and the lesson deliberately refrains from stating its results trend, leaving that to the learner reading the results section).
- No fabricated quotes are used anywhere in the pack. Where a source's own wording is load-bearing (for example the FDA statement that it does not have information showing that parabens as used in cosmetics have an effect on human health, or the acetyl hexapeptide-8 review's statement that the ability to reach neuromuscular junctions remains uncertain), the wording is paraphrased into the lesson and the source is cited for the learner to read.

## Health-content handling

- The level is education, not diagnosis or treatment, and it contains no individualized advice. Each lesson that touches clinical material says so explicitly.
- Lessons 65 and 70, and unit questions `uq-61-70-f`, `uq-61-70-j` and level questions `lq-61-70-f`, `lq-61-70-k` and `lq-61-70-l`, handle the periorbital region and the ocular surface for a learner with a corneal condition and impaired vision. The material states the evidence (eyelid skin 0.55 mm, periorbital allergen ordering, migration across the lid margin, inner-line versus outer eyeliner application, makeup remover effects on tear-film stability, regulatory contamination and applicator-injury warnings) and then defers: decisions at the lid margin, the lashes or the ocular surface belong to an eye-care clinician, and new eye pain, light sensitivity, discharge, persistent redness or any change in vision is a reason to seek care promptly. No product is recommended for that region and no self-treatment is described.
- Deterministic mechanism claims are avoided. Where the literature is uncertain it is named as uncertain: the peptide's neuromuscular claim, microbiome modulation, growth factors, and antioxidant class claims are all presented with their evidential status rather than as settled.
- Non-healing, changing or bleeding lesions, persistent rashes and suspected contact allergy are routed to a clinician rather than to a product decision.

## Unresolved limitations

1. **No clinical, dermatological or ophthalmological review.** Every factual claim is grounded in the cited sources as I read them, but no clinician has checked the level, and the pack must not be described as clinically reviewed.
2. **Twelve sources were abstract-grounded rather than full-text-read** (list above). A reviewer with browser access should confirm the specific sections the reading notes point to.
3. **The pack is inert until the parent integrates it.** `src/lib/course-pack-registry.ts` was not modified, so nothing here can publish by construction. Integration requires a static import, a place in subject order after `skincare-51-60.json`, and a rerun of `scripts/validate-packs.ts` in dependency order.
4. **The level's own comparisons are illustrative, not measured.** The publication-bias arithmetic in lesson 64 and the cost comparison in lesson 70 are labelled in the text as illustrations or as a worked example; they are not claims about a specific product or dataset.
5. **CONSORT version drift.** The level cites the CONSORT 2010 statement (verified) and notes, through the EQUATOR page (verified), that a 2025 update exists. A reviewer may prefer the pack to cite the 2025 statement directly, which would require reading it.
6. **Patch-test frequencies are clinical-population data.** The methylisothiazolinone 12.2 per cent and paraben-mix 1 per cent figures come from patch-tested patients, which licenses relative comparisons between preservatives but not population risk statements; the lesson says so in the reading note.
7. **No dev server, no deployment, no browser automation, no test or registry edits** were performed. Local build artifacts used for the adapter check live in `/tmp/skbuild`; scratch downloads live under the profile cache directory. Neither is part of the repository.
8. **Russian items are absent by design** (subject is not Russian); no `russianItems` key is present in this pack.
