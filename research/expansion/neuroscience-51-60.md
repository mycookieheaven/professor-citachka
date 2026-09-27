# Neuroscience 51–60 — authored handoff

## Deliverable

- Course pack: `src/lib/course-packs/staged/neuroscience-51-60.json` — 206,602 bytes, valid JSON, one level. The `staged/` directory already existed (it also holds other workers' packs, which were not touched); no existing file was edited.
- Handoff: `research/expansion/neuroscience-51-60.md` (this file).
- One new level, **Sensation, regulation and the brain-body boundary: what the pathways do and do not prove**, continuing after the published 01–50.
- Two units, **five substantive lessons each**, stable IDs **51–60**.
- Assessments: **5 unit questions in each unit** (10 total) and **12 separately authored cumulative level questions**. 10 optional lesson retrieval prompts remain nonblocking.
- No `russianItems` key anywhere. No video URLs and no playback claims; every visual is a labelled instructional sequence of five or six steps.
- Nothing else modified: no registry, `programs.ts`, tests, other packs, dependencies or audit artifacts. No server started, no browser automation, no deployment.

## Topic list

Unit 1 — *Sensation as construction: from receptor sheets to perceptual signals* (lesson IDs 51–55)

| ID | Topic |
|---|---|
| 51 | The visual system as a worked example of hierarchical processing: retinal convergence, centre–surround fields, simple and complex cells, what a hierarchy claim must establish, and why pooling size alone is not convergence evidence |
| 52 | Hearing: basilar membrane mechanics and the tonotopic place code, hair cell transduction, binaural comparison in the brainstem, the half-millisecond interaural delay, cycle ambiguity above roughly 1 kHz, and pitch extraction for a missing fundamental |
| 53 | Touch: mechanically gated transduction at the afferent terminal, adaptation and the low-threshold mechanoreceptor classes, modality specificity in parallel channels, and the labelled-line versus population-coding question |
| 54 | Pain as a constructed signal: nociception versus pain, A-delta and C fibre conduction and the double pain sensation, gate control and descending modulation, central sensitisation, and the disputed newer mechanistic descriptor |
| 55 | Vestibular and proprioceptive sense of self-position: muscle spindles and gamma drive, Golgi tendon organs, canal mechanics and the cupula time constant, the otolith tilt-versus-acceleration ambiguity, and multisensory integration |

Unit 2 — *Inside the body and outside the moment: regulation, timing, and a contested metaphor* (lesson IDs 56–60)

| ID | Topic |
|---|---|
| 56 | Movement is planned before it is executed: premotor and supplementary motor preparation, feedback versus feedforward control, forward models and the sense of agency, and what the readiness potential timing does and does not establish |
| 57 | Interoception and the immune-to-brain conversation: the blood-brain barrier and circumventricular organs, neural, humoral and local signalling routes, cytokines and coordinated sickness behaviour, and the contested measurement of interoceptive accuracy |
| 58 | How the brain regulates temperature, hunger and thirst: the thermoregulatory loop and the raised regulated level in fever, satiety signals and hypothalamic circuitry, the disputed body-weight set point versus settling point, and overlapping hunger and thirst ensembles |
| 59 | Circadian biology beyond sleep: the transcription–translation feedback loop, SCN afferents and efferents, the free-running period near 24.2 hours, entrainment range and free-running, and the timing-versus-duration distinction |
| 60 | Capstone: what the computational metaphor asserts, the processor demonstration that structural methods do not recover function, order-of-magnitude scaling, and the criteria that make a computational claim load-bearing |

## Assessment IDs and namespace

- Unit 1: `uq-51-60-a` … `uq-51-60-e` (review lessons 51–55)
- Unit 2: `uq-51-60-f` … `uq-51-60-j` (review lessons 56–60; `uq-51-60-j` also reviews 43)
- Level: `lq-51-60-a` … `lq-51-60-l`

All 22 IDs are unique and every ID carries this level's range as the task required; the two unit blocks are disjoint (a–e and f–j), so the unit is indicated by the letter block rather than by a second number. All 22 prompts are distinct, all 22 correct answers are distinct, all 22 distractors are distinct, correct answers and distractors are mutually disjoint, no answer equals its own distractor, and no quiz prompt is a copy of any lesson's optional retrieval prompt.

`reviewLessonIds` used: 51–60 within this pack, plus published earlier lessons. Cross-references used include 23, 24, 27, 28, 29, 36, 38, 40, 41, 43, 44, 45, 49 and 50, all of which resolve to published packs (`neuroscience.json` 21–30, `neuroscience-31-40.json`, `neuroscience-41-50.json`) or the legacy catalog 01–20. Every level question references at least two lesson IDs.

## Instructional word counts (computed in code)

Counted as `explanation` + `example` + the six `depth` fields, whitespace-separated token sequences; titles, questions, readings and diagram text are excluded.

| ID | Words |
|---|---:|
| 51 | 1718 |
| 52 | 1617 |
| 53 | 1627 |
| 54 | 1621 |
| 55 | 1750 |
| 56 | 1653 |
| 57 | 1582 |
| 58 | 1649 |
| 59 | 1671 |
| 60 | 1626 |

**Total: 16,514 instructional words. Minimum 1,582; maximum 1,750.** Every lesson is more than 2.6 times the 600-word floor, and the thinness floor is met without padding: a 12-word shingle comparison across all ten lessons found **zero** repeated shingles after the only overlap found during drafting (the pooling-progression sentence in lesson 51) was corrected; all ten `explanation` strings, all ten `depth.definitions` strings and all ten `depth.mechanism` strings are distinct exact strings.

## Validation actually executed

1. **JSON parse** — parses as valid JSON; `subject` is `neuroscience`; one level; two units; ten lessons with IDs exactly `51`–`60`.
2. **The project's real validator, not a re-implementation** — a Node harness (`/tmp/check.ts`, scratch, outside the repo) imported the actual `attachCoursePacks` from `src/lib/course-pack.ts` and applied it to a base catalog mirroring the published neuroscience topics 01–50 plus this pack. Result: `attach: PASS`, 3 levels after attach, new level topics exactly `51`–`60`, both unit definitions carrying 5 topics and 5 questions, 12 assessment questions. This exercises the real duplicate-ID, depth-completeness, 600-word-floor, reading-URL-scheme, visual-step, quiz-size and review-ID checks. Re-run after the final edit: still `PASS`.
3. **29 invariant checks, all passing** — 1 level; 2 units; 5 lessons per unit; lesson IDs exactly 51–60 and unique; all ten required lesson keys and all six depth fields present and non-empty; every lesson ≥600 words; no `russianItems` key anywhere; every reading URL `https://` with a title and a note; every visual with a title, a description and ≥5 labelled steps (actual range: 5–6); no video or playback strings; 5 unit questions per unit; 12 level questions and 12 > 5; 22 unique question IDs, prompts, answers and distractors; no answer equal to its own distractor; every `reviewLessonIds` entry resolving to 01–60; every level question referencing ≥2 lessons; every unit question reviewing its own unit; no quiz prompt copied from a lesson prompt.

## Source verification results

**34 reading slots, 34 unique URLs, on three distinct hosts. All 34 returned HTTP 200 with real content on the first attempt in the final sweep; no retries and no substitutions were needed.**

- **15 chapters of *Neuroscience Online* (UTHealth McGovern Medical School, an open electronic textbook, no login):** `s2/chapter02`, `s2/chapter05`, `s2/chapter06`, `s2/chapter08`, `s2/chapter10`, `s2/chapter12`, `s2/chapter13`, `s2/chapter14`, `s2/chapter15`, `s3/chapter01`, `s3/chapter03`, `s3/chapter05`, `s4/chapter03`, `s4/chapter04`, `s4/chapter11`. Sizes ranged from 25 KB to 128 KB of real chapter HTML with the expected titles.
- **18 PubMed Central articles**, each fetched with title and topic content confirmed: PMC6634416, PMC10149680, PMC4635202, PMC9833821, PMC4133057, PMC4676495, PMC5175995, PMC11651655, PMC3479453, PMC8082178, PMC6797703, PMC13538376, PMC2990627, PMC9618039, PMC10136320, PMC7437048, PMC4710129, PMC5230747. Each record was independently located through the Europe PMC REST API before fetching, so no PMCID was guessed; the API also returned journal, publication year and open-access status for each. Publication years present include 2010, 2012, 2014, 2015, 2017, 2019, 2020, 2021, 2022, 2023, 2024 and 2026.
- **1 open-access reference entry:** the *Stanford Encyclopedia of Philosophy* entry *The Computational Theory of Mind* (`plato.stanford.edu/entries/computational-mind/`), fetched 200 with its real section headings recorded.

**Section names cited in the reading notes were read from the fetched pages, so they are real headings rather than reconstructions.** Examples: `14.1 Measures of Visual Sensation`; `14.3 The Retina`; `15.1 The Visual Pathway from Retina to Cortex`; `12.1 The Vertebrate Hair Cell: Mechanoreceptor Mechanism, Tip Links`; `12.4 Tonotopic Organization`; `13.1 Connections in the Central Auditory System: Cochlear Nucleus, Superior Olive`; `2.3 Sensory Transduction: The Adequate Stimulus`; `2.4 Somatosensory Receptor Types`; `5.2 Modality Specificity is Maintained up to the Cortex`; `6.5 Double Pain Sensations`; `6.7 Classification of Pain`; `8.1 Pain Modulation`; `8.2 Neuronal Circuits that Modulate Pain`; `1.11 Gamma Motor Neurons`; `1.12 Difference between muscle spindle and Golgi tendon organ`; `10.3 Actions of the Static Vestibular System`; `3.5 Encoding of Movement by Motor Cortex` (figure `3.10 Premotor cortex neurons signal preparation for movement`); `5.6 Cerebellum and Control Systems` (figures `5.9` feedback and `5.10` feedforward); `11.1 Blood-brain Barrier Maintains the Constancy of the Brain's Internal Environment`; `11.4 Circumventricular organs`; `3.4 Neuronal Mechanism for Body Temperature Set-Point`; `3.5 Mechanism of Change for Body Temperature Set-Point During Fever`; `4.1 Theories of Caloric Homeostasis`; `1. Introduction` / `2. Inputs to the SCN: Afferent Projections` / `4. Outputs from the SCN: Efferent Projections`; `Connectomics` and `Lesion a single transistor at a time`; `5.1 Computation as formal`.

**Era and contestability disclosures carried in the pack rather than hidden:** the 2015 gate-control retrospective is described as a historical assessment rather than current evidence; the 2017 mechanistic-descriptor letter is identified as one side of a live disagreement and as a letter rather than a review; the 2010 body-weight set point review carries an explicit publication-era note; the 2015 SCN clock-gene study is described as an animal working model; the 2015 auditory fMRI study's regional assignments are presented as one dataset with a decade-old analysis pipeline; the 2026 immune-to-brain review is flagged as recent and as drawing largely on animal models; the Schurger accumulator paper is presented against the classic readiness potentials from the 1980s and earlier, with that debate explicitly unresolved. Claims whose direction the fetched text did not state are presented as the authors' position with an instruction to read the Results rather than as a result quoted from a secondary summary.

## Arithmetic checks (all computed with a tool; every value below was recomputed and matched the prose)

- **L51 convergence and pooling.** 126,000,000 ÷ 1,200,000 = 105; the simplified 120M ÷ 1.2M = 100. Pooling progression 1° → 4° → 16°, i.e. a fourfold increase per stage and 16× the single ganglion cell field by the second stage.
- **L52 delay versus period.** 0.18 m ÷ 343 m s⁻¹ = 0.000525 s (about half a millisecond); at 1 kHz the period is 0.001 s so the delay spans 0.525 of a cycle; at 4 kHz the period is 0.00025 s so it spans 2.10 cycles; 0.00052 ÷ 0.00025 = 2.08.
- **L53 density and receptive fields.** 140 ÷ 25 = 5.6; 15 mm ÷ 2 mm = 7.5.
- **L54 double pain.** 0.5 m ÷ 20 m s⁻¹ = 0.025 s (25 ms); 0.5 m ÷ 1 m s⁻¹ = 0.5 s (500 ms); gap = 475 ms.
- **L55 canal time constant.** e⁻¹ = 0.3679, so about 36.8 per cent after one 5-second time constant; e⁻³ = 0.0498, so about 5.0 per cent after fifteen seconds (used in `uq-51-60-e`).
- **L56 control delays.** 2 m ÷ 60 m s⁻¹ = 0.0333 s (33.3 ms); 200 ms ÷ 33.3 ms = 6.0; readiness potential onset to reported awareness = 550 − 200 = 350 ms.
- **L57 heartbeat scores.** 48 ÷ 60 = 0.80; the belief-driven count 70 ÷ 60 = 1.17.
- **L58 fever energy and the weight rule.** 70 × 3470 × 1.5 = 364,350 J = 364.4 kJ = 87.1 kcal (÷4184). Weight rule: 500 ÷ 3500 = 0.143 lb day⁻¹; × 365 = 52.1 lb yr⁻¹.
- **L59 period and jet lag.** 24.18 − 24 = 0.18 h = 10.8 min day⁻¹; × 7 = 1.26 h; × 30 = 5.4 h; × 365 = 65.7 h. Six zones westward at 1 h day⁻¹ = 6 days; eastward at 1.5 h day⁻¹ = 4 days; a 25-hour imposed day requires 0.82 h of daily correction (used in `uq-51-60-i`).
- **L60 scaling.** 10¹⁴ synapses ÷ 10⁴ transistors = 10¹⁰.

All numeric scenarios are labelled in the pack as textbook illustration values, hypothetical models or arithmetic practice, and each states which constants were invented. No effect size, quotation or study result is invented; source claims are paraphrases of fetched abstract, heading or figure-caption text.

## Health-adjacent accuracy and scope

Every health-adjacent lesson states that it is education and not diagnosis or treatment. No lesson recommends a drug, dose, supplement, schedule or device protocol; the pain, vestibular, interoceptive and circadian material explicitly refuses self-directed physiological intervention, routes individual interpretation to a clinician, and refuses to turn group findings into individual predictions. No deterministic single-neurotransmitter explanation appears anywhere: dopamine is referenced only as one variable among several in `uq-51-60-j`, pain is presented through multiple contributing processes rather than one molecule, cytokines are presented as coordinated signalling whose expression depends on dose, timing and context, and interoceptive constructs are presented as contested and partly belief-driven. Contested findings are labelled as contested, older citations carry era disclosures, and no individual medical or private detail is referenced. The two application tasks with physical components (two-point discrimination, and attending to rotation) carry explicit safety framing.

## Unresolved limitations

- **PMC accessibility is intermittent by nature.** All 34 URLs returned 200 on the first attempt in this session's final sweep, including 18 PMC articles, which is a stronger result than the previous level's run reported. This is a property of the moment, not a guarantee: a future reader may meet a bot check, and the reading notes state where to retry.
- **No NCBI Bookshelf and no StatPearls source**, following the standing warning from the previous handoff that those hosts are fully bot-blocked. A future author with access could add chapters as alternative readings for lessons 54, 57 and 58.
- **Two sources are letters or single studies rather than reviews** — the 2017 mechanistic-descriptor letter (PMC5175995) and the 2015 clock-gene study (PMC4710129) — and the notes say so, so their evidential weight is not overstated.
- **Several quantitative claims rest on textbook illustration values, not measurements.** The photoreceptor-to-ganglion convergence ratio, receptor densities, conduction velocities, the cupula time constant, and the one-versus-one-and-a-half-hour daily jet-lag shift rates are all labelled as illustrative. The reasoning is durable; the constants should not be quoted as effect sizes.
- **The circulating-receptor-density and two-point-discrimination figures in lesson 53 are illustrative textbook values**, and the learner's own informal measurement in the application task is explicitly not a study.
- **Curriculum position.** Lesson 51 deliberately reuses the visual chapters already used in lesson 41 but reads them for retinal layering and hierarchy rather than for the map claim, and lesson 55 complements lesson 38 by supplying the receptor physiology the earlier lesson assumed. The level assumes 21–50 as prerequisites and does not reteach them.
- **Assessment weight.** The unit quizzes and the level test are recognition and short-reasoning items with feedback. They are **not** evidence of professional competence and are not a substitute for the application tasks and rubrics carried in the lessons.
- **Scale.** This is one level, ten lessons and 22 assessment items. It is not 100 units and does not claim to be; it is a bounded release batch.
- **A content invariant pass is not an application test pass.** The parent retains integration into the registry or `neuroscience.json`, route and rendering work, accessibility and assessment-flow testing, and production verification on Vercel. This worker did not deploy, did not start a server and did not use browser automation.
