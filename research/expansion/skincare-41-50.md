# Skincare continuation level 41–50 — authored pack handoff

## Paths written (only these two files were created or modified by this task)

- `src/lib/course-packs/staged/skincare-41-50.json` — the pack (valid JSON, not TypeScript). 215,346 bytes. Not imported by the registry; integration is the parent's step. `staged/` is shared with other workers; only `skincare-41-50.json` inside it is mine.
- `research/expansion/skincare-41-50.md` — this note.

Nothing else was touched: no registry edit, no `programs.ts`, no tests, no existing pack, no deployment, no server, no browser automation. Every source check was `curl` (HTTP status) plus text extraction through the retrieval tool.

## Level shape

- Subject: `skincare` (continues the base program `01`–`20`, published `21`–`30` from `skincare.json`, and published `31`–`40` from `skincare-31-40.json`).
- Level title: **Stable routines, honest expectations, and the whole-body toolkit**
- 2 units × 5 lessons = **10 lessons**, IDs `41`–`50`. Checked in code against the existing subject IDs `01`–`40` (no overlap).
- Assessments: **5 unit questions per unit** (10 total) + **12 separately authored cumulative level questions**.
- No `russianItems` key anywhere in the pack (checked in code).
- Question IDs namespaced to this range: `uq-41-50-a` … `uq-41-50-e` (unit 1), `uq-41-50-f` … `uq-41-50-j` (unit 2), `lq-41-50-a` … `lq-41-50-l`. Zero overlap with the IDs used by earlier skincare packs (`skincare-u1-*`, `skincare-l-*`, `uq-31-40-*`, `lq-31-40-*`), which matters because the loader keeps one question-ID set per subject across all packs.

### Unit 1 — Building a routine that is stable before it is ambitious

| ID | Lesson title |
|----|--------------|
| 41 | Stable before ambitious: the four jobs a routine has to do, and why additions come last |
| 42 | One change at a time: attribution logic, washout, and how to read a reaction honestly |
| 43 | Niacinamide, azelaic acid, and vitamin C: what the evidence supports, and what it does not |
| 44 | Exfoliation types and why more is not better: mechanical, chemical, and the biology of shedding |
| 45 | Barrier repair after over-use: a subtraction protocol and an honest recovery timeline |

### Unit 2 — Beyond the face: scalp, body, daily sun, and accountable claim auditing

| ID | Lesson title |
|----|--------------|
| 46 | Scars and marks are not the same tissue: distinguishing redness, pigment, and textural change |
| 47 | Scalp and hair: the same barrier with different exposure, and why hair damage is mostly cumulative |
| 48 | Body and hand care for dry or reactive skin: dose, wet work, and site-specific vehicles |
| 49 | Sun protection for ordinary days: incidental exposure, missed surfaces, and habits that beat intensity |
| 50 | Capstone: auditing one label and one claim with the whole toolkit |

Coverage against the requested territory: stable-before-ambitious routine design (41), one-active-at-a-time introduction and reaction reading (42), niacinamide / azelaic acid / vitamin C evidence and non-evidence (43), exfoliation types and the "more is not better" argument (44), barrier repair after over-use (45), scarring versus marks with honest expectations (46), hair and scalp basics (47), body and hand care for dry or reactive skin (48), sun protection in daily life rather than holidays (49), and the capstone label-and-claim audit (50).

Every lesson states the education-only boundary and a referral trigger. Marketing terms flagged as having no shared standard: `cosmeceutical` (FDA: "no meaning under the law"), `hypoallergenic` (FDA: no federal standards or definitions), `pharmaceutical grade`, `dermatologist tested`, `non-comedogenic`, `clinically proven` as an unsubstantiated comparative, and `waterproof`/`sweatproof` as impermissible sunscreen claims.

## Total instructional words (computed in code)

Counted exactly as the application validator does: `explanation` + `example` + the six `depth` fields, joined by whitespace and split. Excludes titles, questions, readings, visuals and quiz text.

| Lesson | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 |
|---|---|---|---|---|---|---|---|---|---|---|
| Words | 1681 | 1718 | 1754 | 1680 | 1833 | 1770 | 1842 | 1974 | 2039 | 2102 |

**Total: 18,393 instructional words** (minimum 1680, maximum 2102, average 1839). Every lesson is well above double the 600-word floor, so the floor is not binding anywhere. Mechanism text is written topic by topic (barrier and attribution for 41–42, receptor/enzyme/zinc-chemistry mechanisms for 43, desmosome and pH chemistry for 44, recovery kinetics for 45, wound-healing and collagen for 46, 18-MEA and fibre mechanics for 47, wet-work and dose arithmetic for 48, spectral transmission for 49, claim epistemology and delivery limits for 50); there is no repeated boilerplate paragraph.

## Arithmetic checks (calculated with a tool, recorded here)

All figures below were computed in Python during authoring and reused verbatim in the lesson text.

- Tested-dose benchmark of 2 mg/cm²: face 600 cm² → **1.20 g**; two hands 360 cm² (2 % of 18,000 cm²) → **0.72 g**; whole body 18,000 cm² → **36.0 g = 1.27 oz**. Repeated face dose across a 12-week example: 0.72 g × 2 × 84 = **120.96 g** against a 100 g tube, which is why lesson 48 states the tube is insufficient.
- Package-to-cost arithmetic used in lesson 50: 600 cm² at 2 mg/cm² = 1.2 g/day; a 30 mL bottle at density ≈1 g/mL = **25 days**; a year ≈ **14.6 bottles** (stated as roughly fifteen).
- Purge/attribution combinatorics in lesson 42: four products started together permit 2⁴ − 1 = **15** non-empty subsets; sequential introduction gives **4** candidates; four 8-week windows = **32 weeks** versus 8 weeks simultaneous, i.e. **4×** the time for attributable answers.
- Exfoliation exposure counts in lesson 44: five weekly events = **260/year**; lesson 45 removal count: acid 4×/week = 16 avoided in 4 weeks, toner daily = 28, retinoid 3×/week = 12, total **56** (the example's "112 over eight weeks" is the same sum doubled).
- Retinoid/cadence arithmetic carried over from the previous level for continuity: twice weekly **104**/year, alternate nights **183**, nightly **365** (×3.51).
- Scar-type ranges in lesson 46 (icepick 60–70 %, boxcar 20–30 %, rolling 15–25 %) sum to **95–125 %**, which is used deliberately to show the types coexist within one person rather than partitioning a population.
- Sun exposure hours in lesson 49: 15 min × 2 × 5 = **2.5 h** walks + **10 h** driving + **30 h** desk-by-glass versus a 2-week holiday at 2 h/day = **28 h**; an 8-hour outdoor day with 2-hourly reapplication = initial application + **4** reapplications.
- SPF blocked fraction `1 − 1/SPF`: 15 → 93.33 %, 30 → 96.67 %, 50 → 98.00 %, 70 → 98.57 %, 100 → 99.00 %; SPF 30 → 50 gains **1.33 pp** while transmitted dose falls 3.33 % → 2.00 %, a **40 %** relative reduction (both framings used in lesson 49's cross-reference to the previous level).
- Concentration windows as reported by sources rather than asserted: niacinamide sebum studies **2–5 %**, no irritation to **5 %**, no stinging to **10 %**; vitamin C above about **8 %** and no added significance above **20 %**; azelaic acid **3.6 %** percutaneous absorption for the 20 % cream versus **25.3 %** into viable skin for the 15 % gel.

## Source verification

**32 distinct source URLs, all HTTP-verified 200** with `curl -sSL` and a browser user-agent, and content-checked by text extraction before the reading notes were written. Every reading carries section-specific directions naming the heading, subsection or result to read and why it supports that lesson; claims are paraphrased, and the few closely-followed phrasings are attributed to their source in the note.

- **FDA:** cosmetics labeling claims; summary of cosmetics labeling requirements (for "declared in descending order of predominance" and the recorded exception); the `cosmeceutical` statement page; alpha hydroxy acids; how to report a cosmetic product related complaint.
- **AAD:** applying products in order; 10 skin care secrets; safely exfoliate at home; dry-skin relief tips; acne scars; hair habits that damage hair; hairstyles that pull; seborrheic dermatitis diagnosis and treatment; Practice Safe Sun; cold-weather sun protection; sunscreen FAQs.
- **NIAMS:** atopic dermatitis; acne. **FTC:** Health Products Compliance Guidance (Sections I and II).
- **NCBI Bookshelf / StatPearls:** Cosmeceuticals (NBK544223), Contact Dermatitis (NBK459230), Moisturizers (NBK545171).
- **PMC open access:** PMC11047333 (niacinamide mechanisms), PMC12517662 (azelaic acid mechanisms), PMC5605218 (topical vitamin C), PMC6017965 (dual effects of AHAs), PMC11268769 (AHA peels review), PMC5749614 (acne scarring), PMC4387693 (hair cosmetics overview), PMC4266809 (wet-work exposure), PMC5595600 (sensitive skin), PMC12126400 (chronic hand eczema).

Access and sourcing caveats, stated honestly:

- **PMC12126400 (chronic hand eczema)** exposes its abstract and section headings to text extraction but not the full body (figure-heavy layout). The lesson cites only material read from the retrievable abstract and named headings, and the reading note says so explicitly and tells the reader to open it in a browser. Nothing in the pack depends on unread body text.
- **PMC6017965 (AHAs)** is an MDPI-published article read via its PMC copy, because MDPI article pages have previously returned 403 to scripted requests. The PMC copy returned 200 and extracted fully; the note cites only what was read there.
- **StatPearls/Bookshelf** pages can present a browser check to automated tools; each of the three used here returned 200 and its abstract/headings/body sections were confirmed by extraction, and the two affected notes carry that caveat.
- **Dropped during sourcing:** `PMC5608132` (Understanding the Epidermal Barrier in Healthy and Compromised Skin) was HTTP 200 but its body is a supplement PDF that did not extract, so it is **not cited**. `PMC10726041` (sensitive skin and the built environment) was replaced by `PMC5595600`, whose full text extracted. `mdpi.com` and `tandfonline.com` article pages were not used as citations. No study, figure, quotation or threshold in this pack is invented; where a number appears it is traceable to one of the 32 URLs above.
- **Counterintuitive findings are attributed rather than generalised:** the hair-dryer-at-15-cm result and the "no absolute visual distinction between irritant and allergic contact dermatitis" statement are both reported as their sources' findings inside the lesson text.

## Invariant checks exercised

Validated in a Python mirror of `attachCoursePacks` in `src/lib/course-pack.ts`. Result: **0 errors**. Checks run:

- lesson ID format and uniqueness against base `01`–`20` plus published `21`–`40`; required lesson and depth fields non-empty; `answer !== distractor` for every lesson and question; ≥600 words per lesson; ≥1 reading per lesson with `https:` URL, non-empty title and non-empty note; ≥3 non-empty visual steps; ≥5 lessons and ≥5 questions per unit; ≥12 level questions and more than a unit quiz; unique question IDs across the pack; all `reviewLessonIds` inside the valid set `01`–`50`.
- Distinctness: all 22 answers pairwise distinct; all 22 distractors pairwise distinct; no answer string reused as any other question's distractor.
- `json.load` parses the file, and `json.dumps(..., ensure_ascii=False, indent=1)` matches the formatting of the published packs.
- Cross-pack references are deliberate and limited to genuinely prerequisite content: `20`, `21`, `32`, `33`, `34`, `35`, `36`, `37`, `38`, `39`, `40`.

## Integration note for the parent

The pack is intentionally **not** registered. To publish, add a deep import and append it after the existing skincare entry so teaching order is preserved:

```ts
import skincare4150 from './course-packs/skincare-41-50.json';
// … in reviewedCoursePacks, after `skincare3140`:
skincare, skincare3140, skincare4150,
```

The file already matches the `levels[0]` shape the loader expects (`title`, two `units` with `lessons` + `questions`, and 12 level-level `questions`).

## Unresolved limitations

- **Clinical boundary, not coverage.** The pack teaches mechanism, label literacy, dose arithmetic and referral triggers. It contains no diagnosis, no prescribing, no dosing schedule and no product-specific recommendation, so a learner with an active condition still needs a clinician. That is a design constraint, not a gap to be filled later.
- **No numeric risk prediction and no vitamin D dose advice.** Lesson 49 deliberately stops at exposure design, repeating only the published product directions (broad-spectrum, water-resistant, SPF 30+, apply about 15 minutes before exposure, reapply at least every 2 hours or after swimming or sweating) and treating vitamin D status and pigmentary conditions as clinical questions. If the parent wants a fuller visible-light or vitamin D treatment, it needs clinical review.
- **Ingredient-list ordering is described with its exception, not with the numeric threshold.** The lesson states the predominance rule and that an exception permits certain ingredients to be declared without regard for predominance, without quoting the percentage cutoff, because the cutoff was not confirmed against the regulatory text within this task's tooling.
- **PA/plus-mark UVA grading is referenced but not extended.** Lesson 49 uses the validated AAD and FDA framing for the U.S. market and makes no quantitative claim about regional plus-mark scales, for the same reason the previous level noted.
- **Two readings are category-level rather than primary.** The StatPearls `Cosmeceuticals` and `Moisturizers` pages are tertiary summaries; they are used for definitional and regulatory framing, and mechanism claims are sourced to the PMC reviews instead.
- **No in-app rendering was tested.** Visual steps are authored as labelled instructional step sequences for the existing diagram renderer; narration, image rendering and progress-state behaviour are parent-side integration checks and were out of scope here.
- **Word counts are computed from this pack's own fields** using the validator's formula; they are not a claim about rendered page length or reading time.
