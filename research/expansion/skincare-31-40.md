# Skincare continuation level 31–40 — authored pack handoff

## Paths written (only these two files were created or modified)

- `src/lib/course-packs/staged/skincare-31-40.json` — the pack (valid JSON, not TypeScript). Not imported by the registry; integration is the parent's step.
- `research/expansion/skincare-31-40.md` — this note.

Nothing else was touched: no registry edit, no `programs.ts`, no tests, no existing pack, no deployment, no server, no browser automation. All source checks were HTTP/curl and text extraction.

## Level shape

- Subject: `skincare` (continues the published lessons `01`–`20` from the base program and `21`–`30` from `skincare.json`).
- Level title: **Mechanism-led skincare: barrier repair, photoprotection, and active-ingredient control**
- 2 units × 5 lessons = **10 lessons**, IDs `31`–`40` (no overlap with existing lesson IDs; checked in code).
- Assessments: **5 unit questions per unit** (10 total) + **12 separate cumulative level questions**.
- No `russianItems` key anywhere in the pack (checked in code).
- Question IDs namespaced to this level: `uq-31-40-a` … `uq-31-40-e` (unit 1), `uq-31-40-f` … `uq-31-40-j` (unit 2), `lq-31-40-a` … `lq-31-40-l`. Zero overlap with the published skincare pack's IDs (which use `skincare-u1-*` / `skincare-l-*`).

### Unit 1 — Barrier mechanics: cleansing, moisture, and sensitisation

| ID | Lesson title |
|----|--------------|
| 31 | The stratum corneum as a brick-and-mortar composite, and what the structure predicts |
| 32 | Over-cleansing: how surfactants strip the lipid mortar, and why tightness is a warning |
| 33 | Humectants: what water-binding actually means, and the ambient-humidity caveat |
| 34 | Emollients and occlusives: filling gaps in the mortar versus forming a film |
| 35 | Sensitisation, irritation, and patch testing: why a breached barrier admits allergens |

### Unit 2 — Light, breakouts, pigment, and active-ingredient control

| ID | Lesson title |
|----|--------------|
| 36 | UVB and UVA: different wavelengths, different depths, different damage |
| 37 | SPF, broad spectrum, and quantity: reading protective numbers and applying the tested dose |
| 38 | Acne as a follicular process, and why drying it out backfires |
| 39 | Hyperpigmentation: how melanin gets deposited, and why the marks are stubborn |
| 40 | Retinoids: the irritation curve, titrating exposure, and reading a retinol claim sceptically |

Coverage against the requested territory: barrier structure/function (31), over-cleansing (32), humectant/emollient/occlusive classes and when each helps (33, 34), UVB vs UVA (36), SPF vs broad-spectrum with quantity and reapplication (37), acne mechanistically with the drying paradox (38), hyperpigmentation stubbornness (39), retinoids with irritation/titration (40), sensitisation and patch testing (35), sceptical claim evaluation (40, reinforced by 35's treatment of "hypoallergenic" and the level quiz `lq-31-40-k`).

## Total instructional words (computed in code)

Counted exactly as the application validator does: `explanation` + `example` + the six `depth` fields, joined by whitespace and split. Excludes titles, questions, readings, visuals and quiz text.

| Lesson | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 |
|---|---|---|---|---|---|---|---|---|---|---|
| Words | 1300 | 1325 | 1314 | 1386 | 1474 | 1415 | 1670 | 1493 | 1544 | 1650 |

**Total: 14,571 instructional words** across 10 lessons (minimum 1314, maximum 1670; average ≈ 1457). Every lesson is more than double the 600-word floor, so the floor is not the binding constraint anywhere. Mechanism text is written topic-by-topic; there is no repeated boilerplate paragraph across lessons.

## Arithmetic checks (calculated with a tool, and recorded here)

- UVB blocked fraction `1 − 1/SPF`: SPF 15 → 93.33%, SPF 30 → 96.67%, SPF 50 → 98.00%, SPF 70 → 98.57%, SPF 100 → 99.00%. SPF 30 → 50 gains **1.33 percentage points**; SPF 30 → 100 gains 2.33 points. Transmitted dose falls 3.33% → 2.00% between SPF 30 and 50, a ≈40% relative reduction (both framings used deliberately in lesson 37).
- Tested dose arithmetic at 2 mg/cm²: 600 cm² (face) → **1.20 g** ≈ 0.24 tsp at density 1.0 g/mL; 900 cm² (face + neck + ears) → **1.80 g** ≈ 0.36 tsp; 1620 cm² (head/neck/face, 9% rule of nines of 1.8 m²) → **3.24 g**; 18,000 cm² (whole body) → **36 g = 1.27 oz**.
- Density sensitivity: at 1.2 g/mL a teaspoon holds 6.0 g, so the mass is the invariant quantity and the volume is not. Stated explicitly in lesson 37's rubric.
- Cumulative retinoid exposure: twice weekly = 104 applications/year; alternate nights = 183; nightly = 365, i.e. ≈ 3.5× the twice-weekly total. Used in lesson 40 instead of any dosing schedule.
- Cross-checks against the rounded consumer figures in AAD's Sunscreen FAQs (about 1 oz body, at least 1 tsp face) are discussed in lesson 37 as a difference of assumed surface area, product density, and deliberate rounding — not presented as an error by either source.

## Source verification

25 distinct sources, each **HTTP-verified 200** with `curl -sSL` (browser user-agent) before writing, and page titles matched to the citation:

- NCBI Bookshelf / StatPearls: `NBK513299` (Stratum Corneum), `NBK470464` (Anatomy, Skin, Epidermis), `NBK459173` (Acne Vulgaris), `NBK559150` (Postinflammatory Hyperpigmentation). Bookshelf returns a browser-check page to curl, so titles and content were confirmed via the extraction tool as well as HTTP status.
- PMC open-access: `PMC11617626`, `PMC12359141`, `PMC8954092`, `PMC3425021`, `PMC5849435`, `PMC9205919`, `PMC5948135`, `PMC1123459`, `PMC13000865`, `PMC12429606`, `PMC11344648`, `PMC2699641`, `PMC7087054`, `PMC7582305`.
- Regulators and professional bodies: FDA Cosmetics Labeling Claims, FDA "Hypoallergenic" Cosmetics, FDA "Cosmeceutical" (canonical URL after its 301 redirect), FDA sunscreen Q&A, FDA small-entity sunscreen compliance guidance, AAD Sunscreen FAQs, AAD patch-testing page, NCI Sunlight.
- Every reading carries a section-specific direction (which heading or result to read and why), and claims that came from a source are paraphrased, never quoted as invented text. Key phrases used closely are attributed: the 20–100 fold UVA abundance and the "less filtered by car windows" point (PMC7087054), the "no Federal standards or definitions" wording for hypoallergenic (FDA), `cosmeceutical` having "no meaning under the law" (FDA), the dose-dependent retinoid irritation and the authors' statement that the mechanism is not comprehensively explained (PMC11344648), and the 2 mg/cm² test thickness with 0.5–1.5 mg/cm² real-world application (PMC1123459).
- Rejected during sourcing: `mdpi.com` and `tandfonline.com` article pages (403 / bot-wall on direct request) and an EU Commission Recommendation PDF (returned 202 with 0 bytes). None of these are cited. Where an EU-style "UVA must be a fixed fraction of SPF" rule would have been useful, lesson 37 instead uses only the FDA broad-spectrum framing that was verifiable, and treats plus-mark PA grading as a separate regional scale without asserting numeric boundaries that could not be checked against a primary source.

## Invariant checks exercised

Validated both in a Python mirror of the application's `attachCoursePacks` invariants and by calibration against already-published packs:

- Staged pack: **no errors**. Published `skincare.json` (21–30) and published `finance-31-40.json`: also no errors under the same mirror, which confirms the mirror is not stricter or laxer than the accepted material.
- Checks run: lesson ID format and uniqueness; required lesson and depth fields non-empty; `answer !== distractor` for every lesson and question; ≥600 words per lesson; ≥1 https reading per lesson with non-empty title and note; ≥3 non-empty visual steps; ≥5 lessons and ≥5 questions per unit; ≥12 level questions and more than a unit quiz; unique question IDs across the pack; all `reviewLessonIds` inside the valid set `01`–`40`; all 22 answers pairwise distinct; all 22 distractors pairwise distinct; and no answer text reused as any other question's distractor.
- `reviewLessonIds` reference only `01`–`20` (base program), `21`–`30` (published pack) and `31`–`40` (this pack). Cross-pack references are deliberate and used sparingly: `21` (claim audit vs registration), `22` (sunscreen claim translation), `25` (reaction triage), `26` (active acne vs residual marks).

## Integration note for the parent

The pack is intentionally **not** registered. To publish, add a deep import and append it after the existing skincare entry so teaching order is preserved:

```ts
import skincare3140 from './course-packs/skincare-31-40.json';
// … in reviewedCoursePacks, after `skincare`:
skincare, skincare3140,
```

The staged file already matches the `levels[0]` shape the loader expects (`title`, two `units` with `lessons` + `questions`, and 12 level-level `questions`).

## Unresolved limitations

- **Clinical boundary, not coverage.** The pack teaches mechanism, label literacy and referral triggers. It deliberately contains no diagnosis, no prescribing and no product-specific recommendation, so a learner with an active condition still needs a clinician; that is a design constraint, not a gap to be filled later.
- **PA/plus-mark grading is described qualitatively.** A primary source for the numeric PPD boundaries could not be verified within the tooling available, so lesson 37 says what the scale is and that more marks mean more UVA protection on that scale, without quoting thresholds. If the parent can verify ISO 24442 or a JCIA source, that lesson could be extended.
- **Regional regulatory framing is U.S.-centred** (FDA cosmetics/drug split, broad-spectrum claim wording, SPF testing). Lesson 37 and the `PMC13000865` reading flag that other jurisdictions differ, but the pack does not attempt a full international comparison.
- **Two sources are dated** (`PMC2699641`, a 2009 retinoid overview, and the FDA hypoallergenic statement, whose text dates to 2000 with a 2022 modification). Both are used for stable, structural points and are labelled as dated in the reading notes.
- **TEWL and glycerol nuance rests on partly in-vitro work** (`PMC11617626` is a lipid-film model). The lesson states the limitation in the text and in the reading note rather than generalising to living skin.
- **No in-app rendering was tested.** Visual steps are authored as labelled step sequences for the existing diagram renderer; lesson narration, image rendering and progress-state behaviour are parent-side integration checks and were out of scope here.
- **Word counts are computed from this pack's own fields**, matching the validator's formula; they are not a claim about rendered page length or reading time.
