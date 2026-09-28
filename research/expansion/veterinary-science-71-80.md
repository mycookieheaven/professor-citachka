# Veterinary Science — authored level, lesson IDs 71–80

**Batch:** one new level continuing after `veterinary-science-61-70.json`. Bounded release batch, not fulfilment of the 100-unit target.

## Deliverable paths

| Path | Role | State |
|---|---|---|
| `src/lib/course-packs/staged/veterinary-science-71-80.json` | The authored course pack (valid JSON) | written, 273,400 bytes, re-parsed OK, no duplicate object keys |
| `research/expansion/veterinary-science-71-80.md` | This handoff | written |

No other file was created or modified. `src/lib/course-packs/staged/` is shared with other workers' packs; none were touched. Nothing was deployed, no server was started, no browser automation was used, the registry and tests were not edited, and no dev server was run.

## Structure

- `subject`: `veterinary-science`
- Level title: **Species as Physiology: Comparative Reasoning and Applied Diagnostics Beyond the Dog and Cat**
- Unit 1: **The Patient Is a Species, Not a Size: Comparative Physiology for Clinical Reasoning** — lessons 71–75, 5 unit questions
- Unit 2: **Applied Diagnostics: Pretest Probability, Point-of-Care Limits, Cytology and Culture** — lessons 76–80, 5 unit questions
- Level assessment: 12 cumulative questions
- 10 lessons, 10 unit questions, 12 level questions = 22 authored questions
- `russianItems` absent from every lesson (no Russian items key for this subject)
- Visual steps are labelled instructional step sequences (diagrams), not videos; no video URL is invented or claimed anywhere.

### Lesson topics and titles

| ID | Title |
|---|---|
| 71 | One patient, many physiologies: why species changes the question, not just the dose |
| 72 | Breathing without a diaphragm: avian and reptilian cardiorespiratory architecture |
| 73 | Temperature is a clinical variable, not a comfort setting |
| 74 | Nitrogen, water and the kidney: reading hydration across very different plumbing |
| 75 | The fermenting gut: foregut and hindgut strategies, and why stasis behaves like an emergency |
| 76 | Pretest probability: what a positive result actually buys you |
| 77 | Point of care: the instrument in front of you has a documented blind spot |
| 78 | Cytology: making a slide worth reading |
| 79 | Culture and susceptibility is a chain of decisions, not a single number |
| 80 | Capstone: defending a diagnostic plan for an unusual patient under real constraints |

Placement follows the brief: unit 1 is species physiology and clinical reasoning; unit 2 is applied diagnostics and practice. Nothing from lessons 21–70 is re-taught: earlier levels covered evidence and problem representation (21–30), handling/examination/anaesthesia/fluids/emergency (31–50), hospitalised-patient nursing (51–60) and preventive care, wellness visits, skin, ears/eyes, imaging and cost (61–70). This level adds comparative species physiology (avian air sacs and air-flow routing, reptilian shunts and anaesthetic equilibration, thermal physiology, uricotelic nitrogen handling, foregut/hindgut fermentation) and then the applied diagnostic chain (predictive values, point-of-care quality, cytology adequacy, culture and susceptibility provenance, constrained plan design).

## Computed instructional word counts

Method matches the loader: `explanation + example + depth.definitions + depth.mechanism + depth.secondExample + depth.mistake + depth.application + depth.summary`, whitespace-split.

| Lesson | Words | Readings | Visual steps |
|---|---|---|---|
| 71 | 2,509 | 7 | 6 |
| 72 | 2,303 | 5 | 5 |
| 73 | 2,269 | 5 | 5 |
| 74 | 2,423 | 5 | 6 |
| 75 | 2,402 | 5 | 6 |
| 76 | 2,394 | 4 | 6 |
| 77 | 2,426 | 5 | 6 |
| 78 | 2,466 | 5 | 6 |
| 79 | 2,391 | 5 | 6 |
| 80 | 2,522 | 5 | 7 |
| **Total** | **24,105** | **51** | **59** |

Minimum per lesson 2,269 (loader floor is 600). Each lesson uses a distinct mechanism discussion rather than reusable boilerplate; the capstone and each application field describe a specific nonblocking task with a self-review rubric.

## Arithmetic — all computed in code, none invented

| Where | Check | Value |
|---|---|---|
| L71 | MSD rabbit normal temperature, printed as 100.5–104 °F (39.6–40 °C) | 104 °F = 40.0 °C ✓; 100.5 °F = 38.1 °C ✗ against the printed 39.6 °C → printed lower bound is too narrow by ≈1.5 °C |
| L71 | Avian normal, printed as 103–106 °F (39–41 °C) | 103 °F = 39.4 °C; 106 °F = 41.1 °C (printed band is a rounded approximation) |
| L71 | Ectotherm vs mammal anaesthetic t90 (model) | 200 min ÷ 0.8 min = 250×; vs sevoflurane 0.7 min ≈ 286×; vs halothane 7.3 min ≈ 27×; 200 min = 3.33 h |
| L73 | Surface-area-to-volume scaling, cube model | (25,000 g ÷ 25 g)^(1/3) = 10× ratio between a 25 g rodent and a 25 kg dog |
| L73 | POTZ arithmetic from the Merck table rules (basking +5 °C, night −5 °C) | Corn snake 25–30 °C → span 5 °C, basking 30–35 °C, night 20–25 °C; boa constrictor 28–31 °C → span 3 °C |
| L76 | VER Chapter 5, Example 5.4 two-by-two (178 TP, 55 FN, 622 FP, 818 TN; cut-off optical density 0.92) | n = 1,673; Se = 178/233 = 76.4%; Sp = 818/1,440 = 56.8%; PPV = 178/800 = 22.3%; NPV = 818/873 = 93.7%; apparent prevalence = 47.8%; Rogan–Gladen true prevalence = (AP + Sp − 1)/(Se + Sp − 1) = 13.9% |
| L76 | PPV at fixed Se 0.90 / Sp 0.95 | prevalence 1% → 15.4%; 5% → 48.7%; 25% → 85.7%; 50% → 94.7% |
| L76 | Two-patient illustration (Se 0.90 / Sp 0.95) | prevalence 2% → PPV 26.9%; prevalence 60% → PPV 96.4% |
| L77 | Portable lactate meter bias, 18% positive, mainly additive (published) | 2.0 → 2.36 (Δ 0.36); 5.0 → 5.9 (Δ 0.90); 10.0 → 11.8 (Δ 1.80). Correlation R = 0.906 → R² = 0.821, so ≈17.9% of variance unexplained |
| L78 | eClinpath smear count guidance | 20 imprints ÷ 3 = ≈6.7× the recommended 2–3 imprints per slide |
| L79 | Blood culture yield and contamination (750 cultures) | 102/750 = 13.6% clinically relevant growth; 1.9% contamination ≈ 14 of 750 (=1.87%). Odds ratio 10.74 (95% CI 3.62–31.86) quoted, not recomputed |

Every figure in the pack is either a quoted source value, a conversion computed above, or arithmetic explicitly labelled in the lesson as illustrative over published or stated values. No fabricated data.

## Source verification

51 readings, **38 distinct URLs**, swept with `curl` using a desktop browser user-agent (Chrome 126 on macOS) after the final edit. **All 38 returned HTTP 200.** Readings per lesson: 4–7; every lesson carries at least one verified source.

Bodies were fetched and read (browser UA, then HTML/PDF text extraction) before each reading note was written, and the specific facts attributed to each source were located in the fetched text, including:

- **MSD/Merck Veterinary Manual pages** (rabbits 200, rabbits nutrition 200, pet birds 200, reptiles husbandry 200, reptile husbandry table 200, guinea pigs 200, digestive system 200, urinary system 200, horse nutrition 200, horse respiratory overview 200, bird owner kidney page 200, skin diagnosis 200) — rabbit normal temperature and its internal conversion mismatch, rabbit oral-examination/sedation statement, avian normal temperature and metabolic/handling warning, crop palpation instruction, POTZ definition plus the +5 °C basking / −5 °C night rules, guinea pig absence of L-gulonolactone oxidase, herbivore microbiota in forestomachs vs cecum and colon and "abnormal motor function usually manifests as decreased motility", equine cecal and colonic fermentation with little protein absorption from the large intestine, uric acid produced in the liver and appearing as the chalky portion of droppings.
- **Schachner, PMC11864838 (200)** and **Klein, PMC11864834 (200)** — unidirectional flow through parabronchi, dorsobronchi and the parabronchial network, proposed isovolumetric immobility of the avian lung, aerodynamic valves that "do not operate at 100% efficiency" and depend on gas density, flow velocity and air sac compliance, posterior air sacs more compliant than anterior in ducks.
- **Williams et al., PMC7555730 (200)** — five- to tenfold lower cardiac output and minute ventilation in ectotherms, modelled t90 beyond 200 min vs 0.8 min for isoflurane in the modelled mammal, shunt fractions above ≈0.8 erasing the faster-agent advantage, and the note that most ectotherm preferred temperature zones sit below mammalian core temperature so the estimate is conservative. Treats it as a model, not a protocol.
- **PMC7129257 (200)** and **PMC7110740 (200)** — uric acid eliminated by active tubular secretion, water needed to flush the suspension, urates accumulating without diuresis, prerenal/renal/postrenal framing, the high-dietary-protein cockatiel observation (uric acid within normal limits, no renal lesions).
- **PMC7258705 (200)** — stasis syndrome definition, dietary and stress/pain initiation, cecocolic hypomotility and microflora change, fluid absorption and compaction, and the explicit correction that "hairball", "wool block" and "trichobezoar" invert cause and effect.
- **VER Chapter 5, projects.upei.ca (200, PDF text extracted)** — section map 5.1–5.12 confirmed from the file; verbatim statements located for the sensitivity definition (proportion of diseased animals that test positive, p(T+|D+)), the predictive-value paragraph (driven by true prevalence as well as test characteristics), and the Example 5.4 two-by-two counts used above.
- **PMC11294685 (200)**, **PMC7104979 (200)** — PPV/NPV dependence on prevalence; assay classification with organism demonstration as generally the best definitive route while some techniques have low sensitivity, are expensive, invasive, inadequately validated or need specialised equipment, and antibody detection is generally inferior when used alone.
- **ASVCP POCT QA guideline via avcpt.net mirror (200, PDF text extracted)** — quality assurance vs quality control definitions, "lack of governmental regulation of POCT in veterinary medicine", documented training and competence requirement, instrument performance study with bias/imprecision and observed vs allowable total error, at least one control level daily after set-up, low/normal/high control materials at evaluation, EQA not a substitute for daily in-house QA, and the implementation pitfalls list.
- **PMC12159205 (200)** — 118 dogs, R ≈ 0.906, ≈18% positive bias, mainly additive, worse at high values. **PMC8229840 (200)** — clinically acceptable bias overall and the statement that serial measurements in a single animal should be performed on the same analyser whenever possible.
- **eClinpath pages** (sample-collection cytology 200, cytologic patterns 200, overview 200, common artifacts 200, quality assurance 200, test interpretation 200, test-basics sample collection 200) — technique indications for FNA/contact/aspiration/impression, "make 2-3 versus 20 imprints per slide", formalin-fume artifact caution, the non-diagnostic causes and the interpretation categories, the interference list. **Today's Veterinary Nurse cytology guide (200)** — lesion-based sampling, equipment list, Diff-Quik timings, intracellular-bacteria and artifact cautions.
- **PMC12944951 (200)** and **PMC12881953 (200)** — swabs most frequent but limited by reduced representativeness and higher contamination risk, tissue/aspirates more reliable, inconsistent reporting of prior antimicrobial exposure and transport/storage; 102/750 yield, 1.9% contamination, single-bottle design forcing coagulase-negative staphylococci to be classified as contaminants, no approved breakpoints for canine blood samples so breakpoints from other sites/species/humans were applied, and the 10.74 odds ratio.
- **CLSI VET01 shop page (200)** — cited as a pointer only; the standard is a paid publication and no numeric breakpoints, concentrations or interpretive criteria are reproduced anywhere in the pack.

### Blocked URLs — named honestly

- **asvcp.org** returns **HTTP 403** to scripted retrieval on every path tested (`/page/QALS_Guidelines`, the alternate query-string form, bare `/`, and the http form), consistent with a bot-protection layer. The ASVCP point-of-care guideline is therefore cited from the **AVC PT-hosted mirror PDF (200)**, which carries the document's own title page, authors and suggested citation; the access caveat is disclosed in the reading note itself.
- **cdc.gov** Principles of Epidemiology lesson page returned **403** and **onlinelibrary.wiley.com/doi/10.1111/vcp.12810** returned **403**; both were rejected and are not cited anywhere in the pack.
- Two candidate URLs that returned 404 were rejected rather than cited: `eclinpath.com/cytology/cytologic-evaluation` (the real page is `.../cytology/cytology-interpretation/`) and `en.wikivet.net` exotic urinary system (500).

## Invariants validated (simulated against `src/lib/course-pack.ts` rules)

- JSON parses; duplicate-key scan with an `object_pairs_hook` raises on any repeated key — clean.
- Lesson IDs exactly `71`–`80`, matching `/^\d{2,}$/`, unique, and none colliding with the published veterinary lesson IDs 21–70.
- All seven required text fields present and non-empty per lesson; `answer !== distractor` everywhere.
- All six `depth.*` fields present and non-empty per lesson; every lesson ≥600 words (minimum 2,269).
- Every lesson has ≥1 https reading with a non-empty title and note (51 readings, 38 distinct URLs); every visual has ≥3 non-empty steps (5–7 each).
- 5 lessons and 5 unit questions in each unit; 12 level questions, which is more than the largest unit quiz (5).
- Question IDs: unit 1 `uq-71-80-a … -e`, unit 2 `uq-71-80-f … -j`, level `lq-71-80-a … -l`; all 22 unique across the subject. Note for the parent: the brief's "`uq-71-80-a … -e` per unit" would collide between the two units, and the loader enforces uniqueness per subject, so unit 2 continues the same prefix from `f`. This matches the convention used by `veterinary-science-61-70.json` (`uq-61-70-a … -j`).
- All 22 answers distinct; all 22 distractors distinct; no answer equals any distractor.
- `reviewLessonIds` reference only lessons present in the published packs (71–80 within this pack; 21, 22, 23, 28, 49, 51, 56, 60 and 68 in the packs that precede it in registry order): zero violations. Lessons 71–80 are each referenced by at least one unit question.
- Zero occurrences of `mg/kg`, `mL/kg`, `mg per kg`, `per kilogram`, `mcg/kg`, `IU/kg` or any dose-like construct anywhere in the pack (regex sweep over every lesson object). No drug names are recommended, no dose appears, no treatment schedule is presented, and no advice is directed at anyone for their own animal.
- Every application task ends at observation, documentation or escalation, with treatment selection explicitly assigned to the veterinarian.

## Unresolved limitations

- **No clinical or veterinary review.** Content is education, not diagnosis, treatment or individualized advice, and has not been reviewed by a veterinarian or a credentialed veterinary technician.
- **No live integration or rendering check.** The pack has not been loaded through `attachCoursePacks`, added to `course-pack-registry.ts`, built, rendered or deployed. Only the loader's validation rules were simulated in Python. Registry integration and production verification belong to the parent.
- **Registry order dependency.** Cross-level `reviewLessonIds` (`21`, `22`, `23`, `28`, `49`, `51`, `56`, `60`, `68`) are valid only if this pack is appended after `veterinary-science-61-70.json`, which is the existing order. Reordering would break validation by design.
- **Source-level errors are disclosed, not smoothed over.** The MSD rabbit temperature range mis-converts its own lower bound; this is used deliberately as a unit-literacy teaching example and flagged in the lesson and the reading note. Two other printed Fahrenheit-to-Celsius bands are rounded approximations.
- **One non-veterinary citation.** `PMC13414681` (Pharmaceutics, human dose-prediction review) is cited in lesson 71 solely for the principle that weight-based extrapolation is limited by species-specific differences. Its reading note states that no veterinary dose, schedule or protocol is derived from it, and the lesson says the same.
- **Some cited sources contain clinical management, drug and volume information that the pack deliberately does not reproduce** (the avian renal disease review, the rabbit gastrointestinal chapter, the MSD pet bird chapter incl. crop-feeding volumes, the CLSI standard incl. breakpoints, the microbiology studies incl. agent categories). Each such reading note says so and states that selection and treatment are veterinary decisions. If a reviewer requires that sources containing any drug or volume figures not be cited at all, lessons 74, 75 and 79 would need replacement sources.
- **Model predictions are labelled as models.** The ectotherm anaesthetic equilibration figures are computational predictions, not measured clinical data; the lesson and reading note say so and draw no protocol from them.
- **Species coverage is bounded.** Dogs, cats, rabbits, guinea pigs, birds, reptiles and (for hindgut fermentation only) horses are used. No aquaculture, no production animals, no equine clinical content, and no exotic-species imaging or laboratory reference intervals are taught, because no verified source was extracted for them in this batch.
- **Quantitative reference intervals are deliberately sparse** in the lessons that discuss them: where no verified source was extracted, the pack teaches the reasoning and the provenance question rather than quoting a range.
- **The pack is not proof of professional competence**, and nothing in it should be read as such; the level questions are authored quizzes, and the lesson tasks are rubrics for practice with a supervisor.
