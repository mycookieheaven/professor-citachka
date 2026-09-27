# Veterinary Science — authored level, lesson IDs 61–70

**Batch:** one new level continuing after `veterinary-science-51-60.json`. Bounded release batch, not fulfilment of the 100-unit target.

## Deliverable paths

| Path | Role | State |
|---|---|---|
| `src/lib/course-packs/staged/veterinary-science-61-70.json` | The authored course pack (valid JSON) | written, 298,138 bytes, re-parsed OK |
| `research/expansion/veterinary-science-61-70.md` | This handoff | written |

No other file was created or modified. `git status --porcelain` shows only my two new paths plus other workers' untracked artifacts (`src/lib/course-packs/staged/` also contains eight packs authored by other workers; none were touched). Nothing was deployed, no server was started, no browser automation was used, and no test file was edited.

## Structure

- `subject`: `veterinary-science`
- Level title: **Preventive Care and the Wellness Visit: Immunity, Parasites, Nutrition, the Mouth and the Honest Conversation**
- Unit 1: **Prevention as a Programme: Immunity, Parasites, Nutrition and the Mouth** — lessons 61–65, 5 unit questions
- Unit 2: **Inside the Wellness Visit: Handling, Skin, Senses, Evidence and Cost** — lessons 66–70, 5 unit questions
- Level assessment: 12 cumulative questions
- 10 lessons, 10 unit questions, 12 level questions = 22 authored questions
- `russianItems` absent from every lesson (no Russian items key for this subject)

### Lesson topics and titles

| ID | Title |
|---|---|
| 61 | Vaccination is an argument about immunity, not a box on a form |
| 62 | Parasite control: the patient is never the only patient in the room |
| 63 | Nutrition assessment and body condition scoring in the examination room |
| 64 | Dentistry: the most common disease in practice and the treatment most often deferred |
| 65 | Fear, aggression and handling: restraint as the last resort rather than the first move |
| 66 | Skin as the accessible organ: describing, sampling and sequencing dermatology cases |
| 67 | Ears and eyes: examining what the patient will not let you inspect |
| 68 | Imaging and sample collection: the technician's hands on the evidence chain |
| 69 | Talking about money honestly, including the conversation about what is affordable |
| 70 | Capstone: assembling a complete wellness visit from intake to discharge |

## Computed instructional word counts

Method matches the loader: `explanation + example + depth.definitions + depth.mechanism + depth.secondExample + depth.mistake + depth.application + depth.summary`, whitespace-split.

| Lesson | Words |
|---|---|
| 61 | 2,567 |
| 62 | 2,399 |
| 63 | 2,624 |
| 64 | 2,602 |
| 65 | 2,732 |
| 66 | 2,512 |
| 67 | 2,695 |
| 68 | 2,680 |
| 69 | 2,672 |
| 70 | 2,684 |
| **Total** | **26,167** |

Minimum per lesson 2,399 (floor is 600). No lesson relies on padding; each uses a distinct mechanism discussion rather than reusable boilerplate.

## Arithmetic — all computed in code, none invented

| Where | Check | Value |
|---|---|---|
| L61 | 8 wk → 16 wk series span | 56 days; 4 visits = 3 intervals; mean 18.67 days = 2.67 weeks |
| L61 | Herd-immunity illustration, R0 = 5 | threshold 0.8 (80%); 70% coverage leaves a 10 point gap. **Explicitly labelled in the lesson as an illustrative calculation, not a source finding** |
| L62 | Flea egg arithmetic from ESCCAP range | 20/day × 30 = 600 eggs/month; 50/day × 30 = 1,500; 140/week |
| L62 | CAPC faecal-testing schedule across a 10-year life | 4 (year 1) + 2 × 9 = 22 |
| L63 | 22.5 kg → 21.0 kg | −1.5 kg = 6.67% of starting weight; 0.5 kg/month = 2.22%/month |
| L63 | 10-year-old seen twice yearly | 20 weighings |
| L64 | 42 teeth × 200 dental patients | 8,400 charted positions |
| L64 | 3 mm loss on a 10 mm root | 30%, inside Merck's 25–50% stage-2 band (25% = 2.5 mm) |
| L65 | 24 patients/day, 30% fearful, +6 min each | 7.2 patients/day; 43.2 min/day; 3.6 h/week; 3 min vs 45 s = 135 s difference |
| L65 | Variance unexplained by owner-reported risk factors | 1 − 0.07 = 0.93 (93%) |
| L66 | 6 min scratching in a 16 h day = 1.25% of the day; 20 bouts/5 min = 4/min | 1.25%; 4/min; 3 sites × 2 ears = 6 cytology samples |
| L67 | 4 baseline tests × 2 eyes | 8 data points; 4 patients × 5 min saved = 20 min/day, 100 min/week |
| L68 | 2 mislabelled in 500 = 0.4%; 3 retained of 40 = 7.5% | 0.4%; 7.5%; 5 patients × 3 samples = 15 labels |
| L69 | Fictional estimate 85 + (3 × 165) + 210 + 145 + 305 | total 1,240; shares 39.9 / 24.6 / 16.9 / 11.7 / 6.9%, sum 100.0%; −10% = 1,116 |
| L69 | 30 estimates/week, one fifth with a stated financial limit | 6/week ≈ 300+/year |
| L70 | 30-minute visit budget 5+10+3+5+5+2 | 30 min; communication+documentation 10/30 = 33.3%; 16 visits = 480 min = 8.0 h |
| UQ-c | 4.6 kg → 4.2 kg | 0.4 kg = 8.7% of 4.6 kg |

## Source verification

47 distinct reading URLs, all HTTP 200 at verification time (final sweep run after the last edit, on the delivered file; no non-200 results). Every lesson carries at least five readings, with six in lessons 68 and 70. Cited bodies were fetched and checked for the specific section cited, for example:

- **WSAVA 2024 Vaccination Guidelines** (`wsava.org/wp-content/uploads/2024/05/...pdf`, 200): MDA sentence, core/non-core definition, "broad guidance … not mandatory or minimum standards of care" verified in body.
- **WSAVA dog/cat vaccination tables** (200 each): 16-week series, "no more frequently than every 3 years", FeLV core-risk panel and "only FeLV-negative cats should be vaccinated" verified.
- **ESCCAP GL1** (200) and **GL3** (200): environmental persistence "months to years", hygiene measures, faecal examination with 3–5 g, flea egg production (average 20, max 40–50/day), shampooing/swimming and simultaneous-treatment failure modes, year-round control wording — all matched in the PDFs.
- **CAPC general guidelines and Fleas** (200 each): year-round control, fecal testing at least four times in year one and at least twice yearly in healthy adults, tick-pathogen testing, zoonotic-control wording verified.
- **WSAVA nutrition toolkit, combined BCS chart, dog MCS chart, PMC11107980** (200 each): MCS palpation sites and "assessed at every visit", 9-point BCS descriptors, fifth-vital framing verified.
- **AAHA dental guidelines** (200): the stage-0–4 framework came from Merck; the anaesthesia statement — "expert opinion and published data strongly support the use of general anesthesia for dentistry … so-called anesthesia-free dentistry has not been shown to be safer or comparable" — was verified verbatim in the AAHA PDF, as was the client-communication/terminology section.
- **WSAVA Global Dental Guidelines** (200): "dental, oral, and maxillofacial diseases are by far the most common problem facing small animal practice … significant pain, as well as localized and potentially systemic infection" verified.
- **Merck periodontal disease** (200): staging thresholds (stage 1 gingivitis only; stage 2 25–50% attachment loss or furcation involvement) and diagnosis by probing plus radiography verified.
- **AAHA behaviour guidelines** (200): recommendation one (culture of kindness, avoid forced restraint and punitive methods), body-language awareness, low-fear/low-stress aim, technician specialty wording verified.
- **PMC7826566** (200): full body restraint and scruffing → stronger defensive reactions and more escape attempts than minimal fixation; environmental contributors; towel/muzzle/food guidance verified.
- **PMC6645454** (200): examination-table fear finding and the ~7% variance figure verified.
- **PMC10845437** (200): the 2022 AAFP/ISFM interaction guidelines' abandonment of "minimal restraint" (restraint implies lack of control or consent; evidence that interactions without restraint are more efficient and effective), carrier/preferred-location guidance and "avoiding negative interactions is not enough" wording verified. Companion environment guidelines **PMC10845436** (200) verified and referenced in a note.
- **Merck otitis externa** (200): predisposing/primary/perpetuating framework, epithelial migration failure, stenosis, sampling categories, otoscopy recommendation verified.
- **Merck physical examination of the eye** (200): 2–3 feet distance with minimal head restraint, menace/PLR/dazzle, STT before drops or cleansing, culture before other baseline tests verified.
- **PMC5432159, PMC12058580, PMC4531508, PMC4537558, PMC12967878, PMC9324598** (200 each): cytology procedure and findings, ISCAID "cytology should be performed in all cases before antimicrobials are used" and topical-first statements, ICADA "no accurate commercial allergy test" and elimination-diet wording, ICADA treatment-guideline chronic/remission language, canal sampling comparisons — verified.
- **Merck radiography** (200): collimation/scatter, technique chart, consistent positioning, "some states … manual restraint is not allowed", chemical restraint producing fewer unacceptable radiographs verified; **NZ code of practice** (200) justification and no-manual-restraint-unless wording verified; **Virginia VDH** (200) minimum-exposure and personnel-monitoring wording verified; **TVN positioning PDF** (200) PPE list and exposure log recommendation verified; **TVN radiography chart** (200) positioning table verified.
- **eClinpath urine sample collection** (200): cystocentesis cleanest/most sterile but traumatic with >100 RBC/HPF possible, refrigeration within 30 min and analysis within 12 h verified; **Merck urinalysis** (200) verified.
- **PMC11117253, PMC9376616, PMC12631339, PMC11740408** (200 each): cost as primary barrier and across income groups, options "in a range from less to more sophisticated", financial fragility and the "not at all confident … $2,000" survey figure, cost/financially driven euthanasia stress wording — verified; **AVMA language page** (200) verified for the cost-of-care language initiative.
- **AAHA canine life-stage 2019** (200): five stages and the ten health-related factors verified; **AAHA/AAFP feline life-stage 2021** (200): feline wellness-visit components table verified; **CVO Guide to Medical Records** (200): "Plans: Recommendations and treatments …", verbal-and-written communication question, retention/access sections verified.

### Access caveat used in the pack (as instructed)

AAHA guideline **HTML** pages block scripted retrieval (Cloudflare "Just a moment…", HTTP 403) while their directly linked public **PDFs** return 200. Three lessons therefore cite the PDFs (`aaha.org/wp-content/uploads/...` for dental, behaviour, canine life-stage, feline life-stage, nutrition & weight management) and the reading notes disclose the substitution. Also disclosed in the notes: the feline association landing page for the 2022 interaction guidelines returns only navigation, so the **open access full text on PMC** is cited instead; and a Queensland Health PDF was rejected (403) and not used.

## Invariants validated (simulated against `src/lib/course-pack.ts` rules)

- JSON parses; no duplicate object keys (checked with an `object_pairs_hook` scan).
- Lesson IDs exactly `61`–`70`, unique, and none collide with the existing veterinary lesson IDs 21–60 in the four published packs.
- All seven required text fields present and non-empty per lesson; `answer !== distractor` everywhere.
- All six `depth.*` fields present and non-empty per lesson.
- Every lesson has ≥1 https reading with title and note; every visual has ≥3 non-empty steps.
- 5 unit questions in each unit; 12 level questions, which is more than the largest unit quiz (5).
- Question IDs namespaced `uq-61-70-a … -j` and `lq-61-70-a … -l`; all 22 unique.
- All 22 answers distinct; all 22 distractors distinct; no answer equals any distractor.
- `reviewLessonIds` reference only lessons that exist in the published packs (21–60) or this pack (61–70): checked against the union, zero violations. Lessons 61–70 are each referenced by at least one unit question.
- Zero occurrences of `mg/kg`, `mL/kg`, `mg per kg`, `per kilogram`, `mcg/kg`, `IU/kg` or any dose-like construct anywhere in the pack. Vaccination and parasite material describes concepts, guideline architecture and protocol variation, with species, weight, clinical context and the veterinarian's judgement named as governing, and no schedule presented as something to apply without a veterinarian.

## Unresolved limitations

- **No clinical or veterinary review.** Content is education only, grounded in the cited public sources, and has not been reviewed by a veterinarian or a credentialed veterinary technician. No lesson should be read as diagnosis, treatment or protocol.
- **No live rendering or integration check.** The pack has not been loaded through `attachCoursePacks`, added to `course-pack-registry.ts`, built, or rendered. Only the loader's validation rules were simulated in Python. Registry integration and production verification belong to the parent.
- **Guideline schedules are quoted as guideline content, not as instruction.** Where CAPC/ESCCAP sources specify testing frequencies or intensified programmes for young animals, the lesson attributes them to the source, labels them population-level frameworks, and states that adaptation is the veterinarian's decision. If the review standard requires zero numeric schedules even when attributed, these passages would need rewording.
- **Two illustrative calculations are the author's own and are labelled as such in the text**: the herd-immunity threshold in lesson 61 and the CAPC-template faecal-test count in lesson 62. All other figures are either quotes from cited sources or arithmetic over fictional teaching data (estimates, timings, counts).
- **Prices in lesson 69 are explicitly fictional** and are used only to demonstrate the structure of an itemised estimate and the honesty problem with discounts. No real fee schedule is asserted.
- **Species and regional coverage is skewed to dogs and cats** with small-animal guidance; exotic, equine and production-animal preventive care is not covered in this level.
- **Reference ranges and quantitative clinical thresholds are deliberately absent** (for example tear production values, intraocular pressure values, body-condition-linked ideal-weight formulas) because no verified source was extracted for them in this batch. Lessons teach sequence and interpretation limits instead.
- **Some cited sources contain material this pack deliberately does not reproduce.** The ICADA treatment guideline for canine atopic dermatitis includes specific drug recommendations and amounts, and the CAPC and ESCCAP sources include programme intervals. The pack cites them so a learner can see the reasoning and the professional boundary, reproduces no drug amounts, and states in each reading note that product selection, dosing and programme adaptation are veterinary decisions. If a reviewer requires that no source containing dose figures be cited at all, lesson 66's fifth reading and the CAPC/ESCCAP programme passages in lesson 62 would need replacing.
- **Reading notes describe what the source contains, not quotations in all cases**; where wording is presented as the source's, it was verified in the fetched body. No fabricated quotes were used.
