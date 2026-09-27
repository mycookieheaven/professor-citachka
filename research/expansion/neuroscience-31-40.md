# Neuroscience 31–40 — authored handoff

## Deliverable

- Course pack: `src/lib/course-packs/staged/neuroscience-31-40.json` (new directory `staged/`; no existing file touched).
- Handoff: `research/expansion/neuroscience-31-40.md` (this file).
- One new level, **From transmission to regulation: synapses, systems, and the limits of measurement**.
- Two units, five substantive lessons per unit, stable IDs **31–40**, continuing after existing 01–30.
- Assessments: **5 unit questions** in each unit (10 total) and **12 separately authored cumulative level questions**. Unique IDs: `uq-31-a…e`, `uq-36-a…e`, `lq-31-a…l`. 10 optional lesson retrieval prompts remain nonblocking.
- No `russianItems` key anywhere in this subject, per contract. No video URLs, no playback claims; visuals are four-step instructional diagrams.
- Nothing else was modified. No edits to the registry, `programs.ts`, tests, `neuroscience.json`, dependencies, or audit artifacts. No server, no browser automation, no deployment.

## Topic list

Unit 1 — *Release, plasticity, and memory across synapses and systems*

| ID | Topic |
|---|---|
| 31 | Presynaptic release probability, quantal size, and separating pre- from postsynaptic change (binomial model and its assumptions) |
| 32 | Postsynaptic receptor complement, reversal potential and driving force, excitatory–inhibitory balance and disinhibition |
| 33 | Bidirectional plasticity: long-term depression, multiplicative synaptic scaling, metaplasticity |
| 34 | Systems consolidation, retrograde gradients, reconsolidation and its boundary conditions |
| 35 | Sleep architecture, slow oscillations and spindles, targeted memory reactivation, competing hypotheses |

Unit 2 — *Sensation, action, regulation, and the measurement of brain activity*

| ID | Topic |
|---|---|
| 36 | Transduction and adaptation: phototransduction, mechanoreception, nociceptor sensitization |
| 37 | Motor hierarchy, motor units and force gradation, basal ganglia loops, cerebellar modules and error-based learning |
| 38 | Autonomic reflexes, baroreflex arithmetic, thermoregulation, fast and slow glucocorticoid feedback, set point vs allostasis |
| 39 | EEG, ERPs and MEG: what extracellular currents are, component latency logic, inverse problem, resolution mismatch |
| 40 | BOLD signal basis, hemodynamic timing limits, lesion inference (compensation, disconnection), method-selection capstone |

## Instructional word counts (computed in code)

Counted as `explanation` + `example` + the six `depth` fields only — excludes titles, questions, readings and diagram text. Rule: whitespace-separated token sequences.

| ID | Words |
|---|---:|
| 31 | 1159 |
| 32 | 1132 |
| 33 | 1078 |
| 34 | 1123 |
| 35 | 1126 |
| 36 | 1118 |
| 37 | 1172 |
| 38 | 1168 |
| 39 | 1110 |
| 40 | 1171 |

**Total: 11,357 instructional words. Minimum 1,078; maximum 1,172.** Every lesson is well above the 600-word floor. All 80 instructional fields are distinct exact strings, and a 12-word shingle comparison found **zero** repeated shingles across lessons (no shared boilerplate paragraph).

## Validation actually executed (on the saved file)

PASS: JSON parses; `subject` is `neuroscience`; exactly one level; lesson IDs exactly `31`–`40`; 2 units × 5 lessons; 5 unit questions per unit; 12 level questions; 22 unique assessment IDs, 22 unique prompts, 22 distinct correct answers, 22 distinct distractors, and no answer equal to its own distractor; no quiz prompt copied from a lesson retrieval prompt; every level question references at least two lesson IDs; all `reviewLessonIds` resolve either to this pack (31–40) or to the preexisting course (01–30); all six depth fields present in every lesson; at least one reading with a `https://` URL and a note per lesson; four visual steps with title and description per lesson; no `russianItems`. Length normalization to US spelling was applied for consistency with the existing packs.

## Source verification results

Verification was performed by direct HTTP fetch (curl, browser user agent) plus content inspection: HTTP status, transferred size, document title, and presence of topic keywords in the returned body. **25 unique reading URLs; all 25 returned HTTP 200 with substantive content (118 KB–1.9 MB) in a final pass after authoring.** (An earlier pass verified 30 candidates; five were dropped for reasons below.)

- Ten UTHealth McGovern Medical School chapters from *Neuroscience Online*, an open electronic textbook (no login): `nba.uth.tmc.edu/neuroscience/s1/chapter05–07`, `s2/chapter06`, `s3/chapter01`, `s3/chapter03`, `s4/chapter02`, `s4/chapter03`. Titles and internal section numbers were read from the fetched pages, so reading directions cite real sections (for example 5.1 Role of Calcium in Transmitter Release; 6.4 Temporal and Spatial Summation; 7.2 Heterosynaptic Forms of Synaptic Plasticity; 1.7 Control of Muscle Force; 3.5 Encoding of Movement by Motor Cortex; 3.1 Defining the Central Autonomic Network).
- Webvision *Phototransduction in Rods and Cones* (Yingbin Fu), University of Pittsburgh mirror: fetched 200, body confirms cGMP and rhodopsin content.
- Fourteen PubMed Central articles, each fetched 200 with title and topic keywords confirmed, and cross-checked against the Europe PMC REST API for existence, title, year and accession. Section-level headings were read from the fetched pages, so notes cite real headings (for example Box 1 "Recording methods of extracellular events" in Buzsáki et al.; "What inferences can lesion studies support?" in Vaidya et al.; the P50/N100/P200/N200 subsections in Sur and Sinha).

Notable source-specific caveats that the pack states rather than hides: Wang, Pinter and Rich report that a binomial estimate of *n* can appear calcium dependent; Handler and Ginty state that the site of transduction across end organs remains unclear; Squire et al. state that empirical inconsistencies and theoretical disagreements about consolidation gradients remain; Rasch and Born lay out competing hypotheses (passive protection, REM accounts, dual-process, sequential, active system consolidation); Moulin et al. show that most scaling studies used one family of manipulations.

## Arithmetic checks (all computed with a tool, results recorded)

- **L31 binomial quantal analysis.** n=5, p=0.4, q=0.5 mV → quantal content 2.0, mean 1.0 mV, variance 0.30 mV², SD 0.5477 mV, CV 0.55, failure probability 0.6⁵ = 0.0778. Same n and q with p=0.2 → mean 0.5 mV, CV 0.894, failure 0.328.
- **L31 equal-mean contrast.** n=10, p=0.2, q=0.5 mV → mean 1.0 mV, variance 0.40 mV², SD 0.6325, CV 0.63, failure 0.1074 (same mean, different reliability).
- **L32 driving forces.** E_rev(AMPA)=0 mV, E_rev(GABA-A)=−70 mV: at V=−65 mV driving forces are 65 mV inward and 5 mV outward; at V=−40 mV they are 40 mV and 30 mV, so inhibition strengthens as the cell depolarizes.
- **L33 reference-set arithmetic.** 6 pA on one of ten inputs → mean 9.6 pA (−4%); common factor 1.5 → mean 15.0 pA (+50%) with ratios preserved.
- **L34 interval spacing.** Linear ratio of a 30-day to 1-day test is 30; log10 values 1.477 and 1.778; the 1/3/10-day ladder spans 1.00, 1.48, 2.00 log units.
- **L35 sleep arithmetic.** 480 min ÷ 90 min ≈ 5.33 cycles; first third ≈ 160 min; 3 spindles/min → ≈ 480 spindles; 14 Hz spindle period ≈ 71 ms vs 0.8 Hz slow oscillation ≈ 1250 ms.
- **L36 adaptation and discrimination.** 100 Hz → 10 ms per cycle; 2 Hz for 30 s → 60 stimuli; 20 → 6 impulses/s = 70% decline; 5% relative threshold at a 32-unit baseline = 1.6 units.
- **L37 motor units.** 0.5 N smallest unit of a 50 N maximum = 1% step; 8 Hz → 125 ms interval, 30 Hz → 33.3 ms, ratio 3.75.
- **L38 circulation and timing.** MAP = 5 L/min × 18.6 = 93 mmHg; CO falling 20% to 4 L/min requires resistance 23.25, a +25% change; 75 bpm → 0.8 s per beat; 5 s at 60 bpm = 5 beats.
- **L39 resolution.** 10 Hz → 100 ms, 1 Hz → 1000 ms, 1000 Hz sampling → 1 ms; a 300 ms minus 100 ms component difference = 200 ms; 600 cm² over 64 electrodes → 9.375 cm² each, ≈3.06 cm spacing ≈ 30.6 mm, about a 30× mismatch with a 1 mm cortical column.
- **L40 imaging and lesion limits.** TR 2 s → Nyquist 0.25 Hz → shortest resolvable period 4 s; 2000 ms ÷ 1 ms = 2000× coarser sampling than a 1000 Hz EEG recording; a 250 ms component is ~16× faster than the 4 s limit; 3 of 4 patients = 75% consistency.
- **Literature sampling arithmetic.** 168 scaling studies × 86% ≈ 144 studies using inhibitory interventions; ×41% ≈ 59 if that rate applies to the same subset (the abstract's referent is ambiguous, and the pack says so).

All numeric scenarios are labeled as textbook illustrations or hypothetical models with stated assumptions. No effect size, quote, or study result is invented; source claims are paraphrases of fetched abstract or section text.

## Unresolved limitations

- **NCBI Bookshelf was unreachable this session.** Every `ncbi.nlm.nih.gov/books/...` request (Purves *Neuroscience*, StatPearls chapters) returned a reCAPTCHA interstitial under both curl and the extraction tool, including through a text-proxy route. Because the contract requires verified URLs, **no Bookshelf or StatPearls source is used as a reading**; candidates such as NBK11028, NBK10866, NBK10899, NBK10962, NBK52768 and NBK538172 were removed and replaced with the open textbook, Webvision, and PMC material listed above. A future author with Bookshelf access could add those as alternative readings for lessons 31, 33, 36, and 38.
- The extraction tool returned a "cookies must be enabled" page for `pmc.ncbi.nlm.nih.gov`; PMC content was therefore verified with direct HTTP fetch and cross-checked through the Europe PMC API. Verification means the page returned real content with the expected title and topic terms — it is not a claim that every sentence of a long review was read in full.
- Sources deliberately include classic work and historical theory (Rasch and Born 2013; Logothetis and Wandell 2004; Sur and Sinha 2009). Their publication-era limits are disclosed in the reading notes; this is not a survey of the most recent literature in any of these areas.
- Source counts per lesson are two or three; a lesson could carry more primary literature if the parent wants deeper reading.
- Content scope excludes individual diagnosis, treatment selection, sleep or blood-pressure self-manipulation, and any individualized medical advice. The level treats these topics as education with cited sources and states that group-level findings do not license inferences about an individual.
- Assessment items are recognition and short-reasoning prompts with feedback; they are **not** evidence of professional competence, and they are not a substitute for the application tasks and rubrics carried in the lessons.
- A content invariant pass is not an application test pass. Parent retains integration into `neuroscience.json` or the registry, route/rendering work, accessibility and assessment-flow tests, and production verification on Vercel.
