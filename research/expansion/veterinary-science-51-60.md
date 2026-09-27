# Veterinary Science, lesson IDs 51–60 — authoring handoff

**Scope:** one new level continuing after IDs 41–50, authored as an isolated course pack fragment per `research/expansion/CONTRACT.md`. Education only. No drug doses, no deployment, no server, no browser automation.

## Deliverables (exact paths)

| Artefact | Path |
|---|---|
| Course pack (valid JSON) | `src/lib/course-packs/staged/veterinary-science-51-60.json` |
| This handoff note | `research/expansion/veterinary-science-51-60.md` |

No other file was created or modified. Nothing was written to the live `src/lib/course-packs/*.json` files.

## Structure and counts

- `subject`: `veterinary-science`
- `levels`: 1 — *"Hospitalised Patient Nursing: Reading Depth, Comfort and Continuity"*
- `units`: 2 × 5 lessons = **10 lessons, IDs 51–60**
- unit questions: **5 per unit = 10** (`uq-51-60-a` … `uq-51-60-j`)
- level questions: **12** (`lq-51-60-a` … `lq-51-60-l`)
- readings: 31 (3 per lesson; lesson 56 has 4) — **27 distinct URLs**
- `visual.steps`: 4 per lesson; `russianItems` absent from every lesson
- file size 207,207 bytes; `json.load` parses cleanly after every save

### Unit map

**Unit 1 — "Anaesthesia Depth, Pain and the Recovery Room" (51–55)**

| ID | Lesson | Grows out of |
|---|---|---|
| 51 | Anaesthetic depth is a pattern, not a single number | 36 |
| 52 | The monitoring toolkit: what each channel measures and how it misleads | 36 |
| 53 | Pain scoring in patients that conceal pain: matching the tool to the question | 35, 25 |
| 54 | The recovery period: airway, temperature and the first hours after extubation | 36 |
| 55 | Post-operative complications: describing what you see so someone else can act | 40 |

**Unit 2 — "Nursing the Hospitalised Patient and Handing Over Safely" (56–60)**

| ID | Lesson | Grows out of |
|---|---|---|
| 56 | The hospitalised patient's day: feeding, elimination, comfort and hygiene | 26 (continues), new |
| 57 | Hydration and fluid balance: reading the deficit and watching for the overload | 37 |
| 58 | Transfusion basics: why cross-matching exists and what the technician monitors | new |
| 59 | Isolation and infection control in practice: barriers, order of operations and cleaning | 26 |
| 60 | The nursing record, the discharge conversation, and the integrated patient plan | 39, 40 |

Deliberate non-repetition: 36 taught anaesthesia as a four-phase continuum and a parameter list; 51 goes to reflex/tone/response-to-stimulation reading with species and drug exceptions (Guedel's stages and why they no longer fit). 35 taught that pain recognition is hard; 53 teaches tool-by-tool validity, purpose and reassessment. 37 taught fluid therapy as a plan; 57 moves to hydration assessment, balance arithmetic and overload. 26 taught transmission pathways; 59 teaches the published control hierarchy, donning/doffing order and the cleaning sequence.

## Computed instructional words (tool-checked)

Computed in code as `len(explanation.split()) + len(example.split()) + sum(len(depth[field].split()) for the six depth fields)`:

| Lesson | Words | Lesson | Words |
|---|---|---|---|
| 51 | 1,680 | 56 | 1,715 |
| 52 | 1,598 | 57 | 1,669 |
| 53 | 1,621 | 58 | 1,825 |
| 54 | 1,748 | 59 | 1,790 |
| 55 | 1,735 | 60 | 2,024 |

**Total instructional words: 17,406.** Minimum per lesson: 1,598 (lesson 52). Floor required: 600 — met everywhere, roughly 2.7× at the weakest point.

## Source verification

Every URL was checked with `curl -L -A 'Mozilla/5.0'` on the authoring host. **All 27 distinct URLs returned HTTP 200** (26 in the first pass; the feeding-practices page for lesson 56 was added and checked separately).

Access caveats disclosed in the reading notes themselves, not hidden:

- **AAHA HTML pages return 403 to scripted requests** (the 2018 infection-control resource page, the 2013 fluid-therapy landing page, and `veccs.org/recover-cpr`). All AAHA material used here is therefore cited as the **direct public PDF** AAHA publishes, which returns 200: the 2020 anesthesia guidelines, the 2022 pain guidelines, the 2018 infection-control guidelines, and the 2013 AAHA/AAFP fluid therapy guidelines. Each such note states the 403 behaviour explicitly. Read via PDF extraction, not the HTML page.
- **`vaajournal.org` full text returns 403 to scripted requests** (the 2025 ACVAA monitoring guidelines). That document is cited indirectly through two pages that return 200 and link to it: the ACVAA announcement page and the AVMA news article. The local note points the reader onward rather than pretending the 403 page was read.
- **PubMed returns a reCAPTCHA wall to `curl`** for the skin-turgor study (`30681353`). It is cited honestly as an **abstract-level** source with a note saying full text may be restricted and that no result beyond the abstract should be attributed to it.
- **MDPI returned 403** to scripts; that candidate was dropped rather than cited.
- Two sources are **abstract-level only** and are labelled as such in the notes: the gastrotomy dehiscence record (PMC12507053) and the owner-terminology paper (PMC12047061).
- Institutional/scoped sources are labelled rather than universal: the University of Edinburgh guide is written for dogs in a community programme, the UC Davis protocol is one hospital's protocol with institutional values, the CVO record-keeping guide is one regulator's standard, and the llama/alpaca pulse-oximetry study transfers by measurement principle only.

Source families used: AAHA guidelines (4), Merck Veterinary Manual (5 pages), ACVAA/AVMA (2), University of Edinburgh and Western University teaching material (2), UC Davis teaching-hospital protocol (1), CVO regulator guidance (1), Today's Veterinary Practice clinical review (1), PMC open-access articles (9), PubMed record (1).

## Arithmetic checks (all run through the terminal/execute tool, not mental)

| Check | Result | Where used |
|---|---|---|
| 660 mL ÷ 8 h | **82.5 mL/h** | L57 example, observed rate against the written order |
| 90 g offered − 68 g remaining | **22 g** intake | L56 example, intake calculated from offered/remaining |
| 12 ÷ 93 | **12.9 % → quoted as 13 %** | L55, matches the paper's own rounding of "12 of 93 (13%)" |
| 4 ÷ 87 | **4.6 % → quoted as 5 %** | L55, matches the paper's "4 of 87 (5%)" |
| 2 ÷ 212 | **0.94 %** | L55, gastrotomy dehiscence rate |
| 90 min ÷ 15 min | **6 data points** | L54 example, temperature checks |
| 90 min ÷ 5 min and ÷ 2 min | **18 and 45 data points** | L51 example, charting frequency |
| 12 breaths per 30 s | **24 breaths/min** | L51 example, method stated with the value |
| 95 % displayed SpO₂ + 2.6 bias | **≈ 97.6 %** (band 95.9–99.3) | L52 example, oximeter bias |

No figure anywhere is presented as an instruction. A regex scan of the serialised pack for `mg/kg`, `mL/kg`, `mEq/kg`, `units/kg`, bare `mg`, `mL` and numeric dose patterns returned **zero hits**. The only occurrence of "kilogram" is in a reading note stating that the fluid guideline publishes per-kilogram starting figures and that this course deliberately does not reproduce them. Every occurrence of "dose" is a prohibition ("no dose figures", "no entry contains a dose") or an explicit statement that re-dosing anaesthetic is something the technician does not do. Clinical safety is restated in every lesson's application task and in most level questions: species, weight and clinical context govern decisions, and a veterinarian's judgement leads.

## Invariants exercised

- Valid JSON, re-parsed after each incremental save (unit 1 saved before unit 2 was written, so an interruption would have preserved unit 1).
- Exactly 10 lessons with IDs `51`–`60`, 5 unit questions per unit, 12 level questions.
- All answer/distractor strings distinct — checked pairwise within each question and across the whole pack (no duplicates).
- All `reviewLessonIds` resolve to numeric IDs within 01–60; referenced set is {25, 26, 30, 35, 36, 37, 38, 39, 40, 51–60}.
- Every lesson has all 11 required keys and all 6 depth fields; no `russianItems` key anywhere.
- Mechanisms, examples and mistake sections are written per topic; no shared mechanism boilerplate.

## Unresolved limitations

1. **No clinical or veterinary review.** No veterinarian, veterinary technician, or subject-matter reviewer has read this content. It is curriculum draft material and must be reviewed before use with learners, particularly lessons 53–55 (pain tools, recovery criteria, complication recognition) and 58 (transfusion process).
2. **No integration or application test run.** Per the contract, the parent owns integration and production verification. This pack has been validated as JSON with structural invariants only; no test in the application has been executed or modified.
3. **Not merged into the live subject pack.** It sits in `staged/` as instructed; lesson IDs 51–60 are therefore not yet reachable in the application.
4. **Two readings are abstract-level** and two are institutional rather than universal in scope (listed above); the notes say so, but a reviewer should confirm they are appropriate for the audience.
5. **Rate and dose figures from sources are deliberately omitted.** Lessons 57 and 58 describe the existence and role of per-kilogram and product-volume figures without reproducing them, so the pack is intentionally incomplete as a clinical reference. That is a safety feature, but it means the pack cannot stand alone as a protocol.
6. **Species coverage is uneven.** Most clinical examples are dogs and cats, with rabbits, horses, camelids and small mammals used to make specific points. Exotic and large-animal hospital nursing is under-represented.
7. **Word counts are mechanical.** They count whitespace-separated tokens, do not verify instructional quality, and include no weighting for difficulty; the floor is a thinness guard, not a quality measure.
8. **Source currency.** Several guidelines are the current edition at the time of authoring (ACVAA 2025, AAHA 2020 anesthesia, 2022 pain, 2018 infection control, 2013 fluids). AAHA fluid and infection-control guidance is now more than a decade old and a reviewer should confirm whether superseding documents exist. The AAHA 403 behaviour at the time of authoring may change, and the direct PDF links used here could move even if the guidance does not.
