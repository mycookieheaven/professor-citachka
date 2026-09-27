# Skincare continuation level 51–60 — authored pack handoff

## Paths written (only these two files were created or modified by this task)

- `src/lib/course-packs/staged/skincare-51-60.json` — the pack (valid JSON, not TypeScript). **276,309 bytes**, 798 lines. Not imported by the registry; integration is the parent's step. `staged/` is shared with other workers; only `skincare-51-60.json` inside it is mine. The directory did not exist before this task and was created by it.
- `research/expansion/skincare-51-60.md` — this note.

Nothing else was touched: no registry edit, no `programs.ts`, no tests, no existing pack, no deployment, no server, no browser automation. Every source check was `curl` (HTTP status) plus text extraction through the retrieval tool; no browser automation was used at any point.

## Level shape

- Subject: `skincare` (continues the base program from `skincare.json`, IDs `21`–`30`, and the published `31`–`40` and `41`–`50` packs).
- Level title: **Skin across a lifetime: hormonal context, skin of colour, working life, and reading products honestly**
- 2 units × 5 lessons = **10 lessons**, IDs `51`–`60`. Checked in code against the existing subject IDs (`21`–`50` present in the repository): **zero overlap**.
- Assessments: **5 unit questions per unit** (10 total) + **12 separately authored cumulative level questions**.
- No `russianItems` key anywhere in the pack (checked as a substring against the raw file text: absent).
- Question IDs namespaced to this range: `uq-51-60-a` … `uq-51-60-e` (unit 1), `uq-51-60-f` … `uq-51-60-j` (unit 2), `lq-51-60-a` … `lq-51-60-l`. Zero overlap with IDs used by earlier skincare packs (`skincare-u1-*`, `skincare-l-*`, `uq-31-40-*`, `uq-41-50-*`, `lq-31-40-*`, `lq-41-50-*`), checked as exact quoted-string searches in the three existing skincare files, because the loader keeps one question-ID set per subject across all packs.

### Unit 1 — Skin across a lifetime, hormonal context, and the environments it lives in

| ID | Lesson title |
|----|--------------|
| 51 | What actually changes with age, and which claims change differently |
| 52 | Hormonal context: cycle, pregnancy and perimenopause without the 'hormone-balancing' marketing |
| 53 | Skin of colour: why pigment, scarring and the sunscreen question run differently |
| 54 | When your hands and the outdoors are your workplace: dose, wet work and sunlight on shift |
| 55 | Cold, dry, humid and hot: what actually changes when the climate does, and what changes in the routine |

### Unit 2 — Reading products honestly and building a routine that fits one real life

| ID | Lesson title |
|----|--------------|
| 56 | Sensitive and reactive skin: practical guidance without reaching for a diagnosis |
| 57 | When a cosmetic routine is masking a medical problem: suppression, misattribution and delay |
| 58 | Reading an ingredient list in order: what the law fixes, and where the information stops |
| 59 | 'Clinically proven': how to audit a product's claims about its own testing |
| 60 | Capstone: one constraint set, one minimal routine, and the arithmetic that proves it fits |

Coverage against the requested territory: what genuinely changes with age versus what marketing ages differently (51), hormonal influences with honest expectations and clinical handoff (52), skin of colour — pigmentation, scarring and the sunscreen question (53), skin when work is your hands or the outdoors (54), climate and seasonal routine change (55), practical guidance for sensitive or reactive skin (56), when a routine masks a medical problem (57), reading an ingredient list in order (58), evaluating claims of testing (59), and the capstone minimal routine for one stated constraint set (60).

Every lesson states the education-only boundary and carries explicit referral triggers in its `application` or `mistake` field, as well as in the lesson prose. Marketing terms flagged as having no shared standard across the pack: `anti-ageing`, `cosmeceutical`, `hormonal` / `balancing` / `hormone-balancing`, `brightening` / `lightening` / `whitening`, `hypoallergenic`, `dermatologist tested`, `doctor recommended`, `clinical strength`, `pharmaceutical grade`, `medical grade`, `clean`, `for sensitive skin`, and `seasonal detox` / `winter barrier repair`. The `fragrance-free` versus `unscented` distinction is taught with its regulatory basis rather than as a slogan.

## Total instructional words (computed in code)

Counted exactly as the application validator does: `explanation` + `example` + the six `depth` fields, joined by whitespace and split. Excludes titles, questions, readings, visuals and quiz text.

| Lesson | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
|---|---|---|---|---|---|---|---|---|---|---|
| Words | 2122 | 2111 | 2485 | 2529 | 2478 | 2266 | 2518 | 2713 | 2267 | 2465 |

**Total: 23,954 instructional words** (minimum 2,111, maximum 2,713, average 2,395.4). Every lesson is above three times the 600-word floor, so the floor is not binding anywhere. Mechanism text is written topic by topic and does not repeat boilerplate: chronological and photoageing with the 65 percent lipid figure (51), oestrogen-receptor and pregnancy physiology (52), inflammatory mediators, melanophages and keloid wound healing (53), surfactant-lipid extraction and glove occlusion (54), vapour-pressure gradients, ceramides and eccrine confounding (55), sensory and barrier routes with TRPV1 (56), suppression pharmacology and rosacea progression (57), the descending-order and one percent rules with naming conventions (58), substantiation standards and resolution arithmetic (59), and constraint-ordering with cost, dose and trial logic (60).

## Arithmetic checks (calculated with a tool, recorded here)

All figures below were computed in Python during authoring and reused verbatim in the lesson text. Illustrative prices in lesson 60 are stated in the lesson as illustrative price points, not recommendations.

- **Lesson 51, bathing exposure:** 10 minutes/day → 3,650 minutes/year (60.8 h); 20 minutes/day → 7,300 minutes/year (121.7 h); difference **3,650 minutes = 60.8 hours ≈ two and a half days**, quoted in the example as about 61 hours.
- **Lesson 52, observation windows:** 90 days ÷ 28-day cycle = **3.21 cycles**; two cycles = **56 days**; three cycles = **84 days**.
- **Lesson 53, reported ranges:** keloid incidence range 4.5–16 percent → 16 ÷ 4.5 = **3.56×** spread; PIH-prevention systematic review 3,205 screened, 261 full-text, **14 studies**, 369 participants → 369 ÷ 14 = **26.36 participants per study**.
- **Lesson 54, prevention evidence (published pooled figures, reinterpreted as arithmetic and labelled low quality):** barrier creams 29 % vs 33 % → relative risk ratio 0.87, relative reduction **13 %**, absolute difference **4 percentage points**, number needed to treat **25**; moisturisers 13 % vs 19 % → RR 0.71, relative reduction **29 %**, absolute difference **6 pp**, NNT **16.7**; barrier cream + moisturiser 8 % vs 13 % → RR 0.68, **32 %** relative, **5 pp**, NNT **20**. All published intervals cross 1 and the review calls the evidence low quality, which the lesson states.
- **Lesson 54, exposure counts:** 40 wetting events/day × 5 shifts = **200/week → 10,400/year**; halved plan = **100/week → 5,200/year**, so **5,200 events removed annually**; an eight-hour outdoor shift = application at the start plus two-hourly reapplications = **4 reapplications (5 applications)**.
- **Lesson 55, psychrometrics (computed illustration, labelled as such in the visual):** saturation vapour pressure at 21 °C = **2.487 kPa**; absolute humidity at 60 % RH = **10.99 g/m³**, at 25 % RH = **4.58 g/m³**; ratio **2.40**; difference **6.41 g/m³ = 58.3 % less** water in the drier room.
- **Lesson 55, seasonal figures (as reported in the source):** reported shares of atopic exacerbation 25 % spring, 19 % summer, 11 % autumn, 36 % winter; 36 ÷ 11 = **3.27×** winter against autumn; the four shares sum to **91**, which the lesson uses to explain that these are shares rather than a partition.
- **Lesson 55, sweat confounding:** 59.4 ÷ 8.6 = **6.91×** rise in measured transepidermal water loss after six minutes of cycling (source figures 8.6 → 59.4 g/m²/h).
- **Lesson 56, subtraction arithmetic:** 11 products × 2 applications/day = 22/day = **154 applications/week**; 3 products × 2/day = 6/day = **42/week**; difference **112/week** and **224 across a fortnight**; a 3-product, twice-daily, 14-day window = **84 applications**.
- **Lesson 57, delay count:** about six months of twice-daily use ≈ 180 days ≈ **360 applications**.
- **Lesson 58, order and tail arithmetic:** 5 % of a 30 g tube = **1.5 g** of active in the whole tube; water ≈ 70 % and glycerin ≈ 5 % leave 100 − 75 = **25 %** shared by 28 declared ingredients = **0.893 % average each**, i.e. below the one percent line where order carries no information.
- **Lesson 59, claim resolution:** 94 % of 100 = 94 agreeing and **6 not agreeing**; 1 ÷ 100 = **1 percentage point** per participant; 1 ÷ 32 = **3.125 pp** per participant.
- **Lesson 60, capstone ledger:** cleanser $12/236 mL at 2 mL/day → 118 days, 3.09 units/year, **$37.12**; moisturiser $16/454 g at 3 g/day → 151.3 days, 2.41 units, **$38.59**; at 6 g/day (hands plus face) → 75.7 days, 4.82 units, **$77.18**; sunscreen $14/88 mL at 1.2 g/day → 73.3 days, 4.98 units, **$69.68**, which is **438 g of sunscreen a year**. Three-step total **$145.39/year = $12.12/month** (fits the stated $12 budget); with hand use **$183.98/year = $15.33/month** (over by about $3/month), which is the binding constraint the example resolves by consolidation and reallocation, never by cutting protection. Time: 9 steps × 2 min = **109.5 h/year** against 4 min/day = **24.3 h/year**, saving **85.2 h**; 5 applications/day ≈ **1,825 events/year**; tested dose 2 mg/cm² × 600 cm² face = **1.2 g**; blocked fraction 1 − 1/SPF: 30 → **96.67 %**, 50 → **98.00 %**.

## Source verification

**29 distinct source URLs.** 28 returned **HTTP 200** to `curl -sSL` with a browser user agent, and every page was additionally content-checked by text extraction before its reading note was written, so each note names a heading, subsection or quoted result that was actually read.

- **Regulatory:** 21 CFR 701.3 read via the Cornell Legal Information Institute copy of the eCFR text (paragraphs (a), (f) and (g)) — the eCFR page itself returned 200 but rendered truncated when extracted, and the note says so; FDA Cosmetics Labeling Guide; FDA Cosmetic Ingredient Names; FDA Fragrances in Cosmetics; FDA "Is It a Cosmetic, a Drug, or Both?"; FDA Cosmetics Safety Q&A on "Hypoallergenic"; FTC Health Products Compliance Guidance.
- **Public health and dermatology bodies:** NIA "Skin Care and Aging"; NIAMS Rosacea; NCI "Common Moles, Dysplastic Nevi, and Risk of Melanoma"; CDC NIOSH "Sun Exposure at Work"; AAD hand eczema; AAD "How to care for your skin in your 60s and 70s"; AAD "How to fade dark spots in darker skin tones"; AAD "Should I apply my skin care products in a certain order?".
- **StatPearls / NCBI Bookshelf:** Keloid (NBK507899).
- **PMC open access:** PMC3840548 (characteristics of the aging skin), PMC10092853 (menopause, skin and common dermatoses part 2), PMC11497768 (cutaneous changes during pregnancy), PMC2921758 (post-inflammatory hyperpigmentation review), PMC12062726 (prevention of PIH in skin of colour), PMC8072489 (sunscreen in skin of colour), PMC6494486 (Cochrane, occupational irritant hand dermatitis), PMC9724726 (occupational dermatoses and PPE in health care workers), PMC10264749 (winter indoor environment), PMC9440333 (factors impacting skin hydration), PMC9815790 (eccrine glands and measured TEWL), PMC12318783 (sensitive skin), PMC4171912 (topical steroid-damaged skin).

Access caveats, stated honestly:

- **CDC NIOSH "Sun Exposure at Work" returns HTTP 403 to scripted requests** and was therefore read with a text-extraction tool, not curl. Its content was confirmed by extraction (the SPF 15 minimum, the 10 a.m. to 4 p.m. peak, light-coloured sand and snow reflection, risk on cloudy days, the photosensitivity drug list including ibuprofen, shaded or indoor break areas, and the "Treating a sunburn" heading). Both reading notes that cite it (lessons 54 and 60) carry this caveat explicitly and tell the reader to open it in a browser.
- **21 CFR 701.3:** the eCFR page returned 200 but its extracted text was clipped; the full paragraph text used here (including the one percent grouping rule and the "may contain" provision) was read from the Cornell copy, which is named as the cited URL in the reading.
- **PMC12062726 (PIH prevention systematic review):** a Wiley-published article cited through its PMC copy because publisher pages for that journal have blocked scripted requests before; only the Methods and Results text that extracted is cited (the screening counts and the 14-study, 369-patient total), and the note says the rest of the body is carried in figures and supporting files.
- **PMC11193462, PMC7838243, StatPearls NBK537176 (Miliaria) and StatPearls NBK559150 (Postinflammatory Hyperpigmentation) were dropped.** PMC11193462 and PMC7838243 extracted inconsistently (2–8 kB, body not reliably present), NBK537176 returned 1,205 characters with no retrievable sections, and NBK559150 returned a 783-character placeholder. None is cited anywhere in the pack.
- **`cdc.gov/niosh/skin-exposure/about/index.html` was dropped** after it redirected to the CDC home page rather than the topic page.
- **No MDPI or Taylor & Francis article pages were used as citations,** and no Elsevier-hosted abstract is cited. No study, figure, quotation, threshold or price is invented; every number in the pack is either traceable to one of the 29 URLs above or is an explicitly labelled computation of the author's own.
- Where two authorities disagree, both are stated rather than harmonised silently: NIOSH names a minimum of SPF 15 for outdoor workers while AAD public guidance recommends SPF 30 or higher with water resistance, and lessons 54 and 60 attribute each to its source.

## Invariant checks exercised

Validated in a Python mirror of the pack-level checks in `src/lib/course-pack.ts` plus the distinctness rules from the contract. Result: **0 errors**.

- Lesson IDs `51`–`60`, no overlap with the existing subject IDs `21`–`50`; required lesson fields and all six `depth` keys present and non-empty in the exact key order used by the published packs; `answer !== distractor` for every lesson and every question; ≥600 words per lesson; ≥1 reading per lesson with an `https:` URL, non-empty title and non-empty note; ≥3 non-empty visual steps plus non-empty visual title and description; 2 units, 5 lessons and 5 questions per unit; 12 level questions.
- Distinctness: all 32 answers (10 lessons + 22 questions) pairwise distinct; all 32 distractors pairwise distinct; **no answer string reused as any other item's distractor** (empty intersection).
- All `reviewLessonIds` inside the valid set `01`–`60` and verified to exist in this pack or the existing subject files: `21, 22, 26, 29, 33, 34, 35, 37, 39, 41, 42, 44, 45, 46, 48, 49, 50` cross-pack plus internal `51`–`60`. **Zero dangling references.**
- Unique question IDs across all four skincare files (exact quoted-string search in the three existing files).
- `json.loads` parses the file, and `json.dumps(..., ensure_ascii=False, indent=1)` round-trips byte-for-byte to the on-disk content, matching the published packs' formatting.

## Integration note for the parent

The pack is intentionally **not** registered, and it currently lives under `staged/`. To publish, either move it to `src/lib/course-packs/` or import it from the staged path, then append it after the existing skincare entry so teaching order is preserved:

```ts
import skincare5160 from './course-packs/staged/skincare-51-60.json';
// … in the skincare group of reviewedCoursePacks, after skincare4150:
skincare, skincare3140, skincare4150, skincare5160,
```

The file already matches the `levels[0]` shape the loader expects (`title`, two `units` each with `lessons` + `questions`, and 12 level-level `questions`). The three staged siblings from other subjects that are already registered show the parent's pattern of importing 51–60 packs directly from `course-packs/`.

## Unresolved limitations

- **Clinical boundary, not coverage.** The pack teaches mechanism, exposure arithmetic, label and claim literacy, and referral triggers. It contains no diagnosis, no prescribing and no dosing, so a learner with an active condition still needs a clinician. That is a design constraint, not a gap to be filled later.
- **The hot-and-humid quadrant is reasoned rather than trialled.** I could not verify a source that studies hot, humid ambient exposure as its own intervention, so that part of lesson 55 is built from the sweat-and-TEWL review plus the hydration physiology and is phrased as mechanism (occlusion, residue, friction, sweat confounding measurement) rather than as a climate-trial result. The cold-and-dry half rests on the winter indoor-environment study and the hydration review. If the parent wants a stronger humid-climate evidential base, it needs a source I could not verify within this task.
- **Seasonal figures are one population's shares, not a forecast.** The 25/19/11/36 pattern comes from a single study's reported incidence of atopic exacerbation and is used to show magnitude and the winter-autumn ratio, not to predict an individual's month.
- **No humidity threshold is quoted.** The reviewed literature states that the relationship between relative humidity and transepidermal water loss has not been clarified, and the psychrometric numbers in lesson 55 are labelled as the author's own computed illustration of the vapour-pressure relation.
- **No numeric personal risk.** Keloid incidence is reported as a 4.5–16 percent range in darker-pigmented populations, and the lesson explains the spread rather than translating it into an individual risk.
- **Two useful in-lesson readings are tertiary summaries** (StatPearls `Keloid`, and the Cureus sweat-and-TEWL review), used for definitional, epidemiological and measurement framing, with mechanism claims sourced to the PMC reviews wherever possible.
- **Claims about prescription products are cited, not taught as practice.** The topical steroid review and the pregnancy drug table are used only to explain why suppression masks a problem and why treatment choices in pregnancy are clinician decisions; the pack instructs no starting, stopping or tapering of anything, and the reading notes say so.
- **Prices in the capstone are illustrative units chosen to make the arithmetic visible.** They are labelled as such inside the lesson; a learner re-runs the same formulas with their own shelf prices.
- **No in-app rendering was tested.** Visual steps are authored as labelled instructional step sequences for the existing diagram renderer; narration, image rendering and progress-state behaviour are parent-side integration checks and were out of scope here.
- **Word counts are computed from this pack's own fields** using the validator's formula; they are not a claim about rendered page length or reading time.
- **The quizzes are retrieval practice, not certification.** Twenty-two multiple-choice items across a level cannot establish professional competence, and nothing in the pack claims that they do; the substantial application tasks and self-review rubrics inside each lesson carry the practice element.
