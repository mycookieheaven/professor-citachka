# Neuroscience 41–50 — authored handoff

## Deliverable

- Course pack: `src/lib/course-packs/staged/neuroscience-41-50.json` (new `staged/` directory created; no existing file touched). 170,603 bytes, valid JSON, one level.
- Handoff: `research/expansion/neuroscience-41-50.md` (this file).
- One new level, **Cortex, wiring and modulation: from maps to habits and the appraisal of brain claims**, continuing after published 01–40.
- Two units, **five substantive lessons each**, stable IDs **41–50**.
- Assessments: **5 unit questions in each unit** (10 total) and **12 separately authored cumulative level questions**. 10 optional lesson retrieval prompts remain nonblocking.
- No `russianItems` key anywhere in this subject, per contract. No video URLs, no playback claims; every visual is a labelled instructional sequence of four or five steps.
- Nothing else was modified. No edits to the registry, `programs.ts`, tests, other packs, dependencies or audit artifacts. No server started, no browser automation, no deployment.

## Topic list

Unit 1 — *Cortical organisation, development and neuromodulation* (lesson IDs 41–45)

| ID | Topic |
|---|---|
| 41 | Cortical maps and topographic organisation: retinotopy and somatotopy, magnification factor, overlapping receptive fields, what a map claim requires |
| 42 | How experience wires circuits: over-production and elimination, critical vs sensitive periods, inhibitory gating of onset, perineuronal nets and myelination as braking factors, experience-expectant vs experience-dependent plasticity |
| 43 | Dopamine: reward prediction error, incentive salience and 'wanting' vs 'liking', behavioural activation and effort, neuronal heterogeneity, and why 'the pleasure molecule' is a misreading |
| 44 | Stress physiology: HPA axis feedback, fast neural vs slow glucocorticoid arms, mineralocorticoid and glucocorticoid receptors, inverted-U dose relations, consolidation vs retrieval timing, allostatic load and its undefined tipping point |
| 45 | Sleep as a controlled system: two-process model, slow-wave activity as a contested marker, arousal and orexin circuits, state stability, and the difference between regulation claims and function claims |

Unit 2 — *Networks, habits and the appraisal of evidence* (lesson IDs 46–50)

| ID | Topic |
|---|---|
| 46 | Language and its lateralisation: Broca, Wernicke and the other syndromes as descriptions, dual-stream and network accounts, subcortical and thalamic contributions, graded population-level dominance |
| 47 | Executive function and the limits of grey-matter claims: association cortex and connectivity, voxel-based morphometry as an indirect measure, near vs far transfer, power and multiple-comparison arithmetic |
| 48 | The biology of habit: outcome devaluation as the operational test, dorsomedial vs dorsolateral striatum, direct and indirect pathway contributions, HDAC3 and cellular regulators, habit vs compulsion |
| 49 | Reading a neuroscience headline: the study–abstract–press release–news chain, causal overstatement in press releases, power, positive predictive value, multiplicity, and reading a live disagreement |
| 50 | Capstone: appraising 'learning London's streets enlarges the hippocampus' across cross-sectional, matched-comparison and longitudinal within-subject designs, plus reproducible-science practice |

## Assessment IDs and namespace

- Unit 1: `uq-41-50-a` … `uq-41-50-e`
- Unit 2: `uq-41-50-f` … `uq-41-50-j`
- Level: `lq-41-50-a` … `lq-41-50-l`

Every question ID carries this level's range as the task required. Because all 22 IDs share the `-41-50-` range, the unit is indicated by the letter block rather than by a second number, and the two sets are disjoint (a–e for unit 1, f–j for unit 2). All 22 IDs are unique; all 22 prompts are distinct; all 22 correct answers are distinct; all 22 distractors are distinct; no answer equals its own distractor; no quiz prompt is copied from any lesson's optional retrieval prompt.

`reviewLessonIds` used: 41–50 within this pack, plus 21–30 (published in `neuroscience.json`) and 31–40 (published in `neuroscience-31-40.json`). Every level question references at least two lesson IDs; specific cross-references used include 23, 25, 27, 28, 29, 30, 33, 34, 35, 36, 38, 39 and 40.

## Instructional word counts (computed in code)

Counted as `explanation` + `example` + the six `depth` fields, whitespace-separated token sequences; titles, questions, readings and diagram text are excluded.

| ID | Words |
|---|---:|
| 41 | 1214 |
| 42 | 1315 |
| 43 | 1299 |
| 44 | 1346 |
| 45 | 1359 |
| 46 | 1272 |
| 47 | 1362 |
| 48 | 1418 |
| 49 | 1419 |
| 50 | 1470 |

**Total: 13,474 instructional words. Minimum 1,214; maximum 1,470.** Every lesson is more than twice the 600-word floor. A 12-word shingle comparison across all ten lessons found **zero** repeated shingles after one prerequisite clause that was duplicated between lessons 43 and 47 was rewritten; all ten `explanation` strings and all ten `mechanism` strings are distinct exact strings.

## Validation actually executed (re-run against the saved file after the last edit)

PASS: JSON parses; `subject` is `neuroscience`; exactly one level; exactly two units; five lessons per unit; lesson IDs exactly `41`–`50`; five unit questions per unit; twelve level questions; 22 unique question IDs; 22 unique prompts; 22 distinct correct answers; 22 distinct distractors; no answer equals its distractor; no quiz prompt copied from a lesson retrieval prompt; every level question references at least two lesson IDs; every `reviewLessonIds` entry resolves either to this pack (41–50) or to published lessons (21–40); all six depth fields present in all ten lessons; no `russianItems` key anywhere in the file; every lesson has at least one reading with an `https://` URL and a note; every visual has a title, a description and at least four labelled steps; every lesson exceeds 600 instructional words. 23 of 23 checks passed, with no failures. US spelling throughout, for consistency with the existing packs.

## Source verification results

Verification method: direct HTTP fetch with a browser user agent, inspecting HTTP status, transferred size, document title and the real section headings of the returned body; PMC records were additionally cross-checked against the Europe PMC REST API for existence, year, journal, author string and open-access status. Section names cited in reading notes and in the lesson prose were read from the fetched pages, so they are real headings (for example `15.2 Retinotopic Organization in the Visual Pathway`; `5.4 Spatial Information is Topographically Mapped in Sensory Pathways`; `9.7 Target Recognition-Topographic Maps`; `2.10 Stress`; `8.9 Wernicke Aphasia`; `9.4 Anterior Association Area`; `4.6 Functions of the Basal Ganglia` and the figure caption in that chapter about dopaminergic neurons signalling unexpected reward or its unexpected absence).

**39 unique reading URLs across 40 reading slots (one source is reused in lessons 49 and 50 with different section directions). All 39 returned HTTP 200 with substantive content in the final verification pass, or on an immediate retry in the same pass.** Three entries needed a retry or a substitution, described below rather than hidden.

- **8 UTHealth McGovern Medical School chapters** from *Neuroscience Online*, an open electronic textbook (no login): `s1/chapter09` (Synapse Formation, Survival, and Elimination), `s1/chapter12` (Biogenic Amine Neurotransmitters), `s2/chapter05` (Somatosensory Processes), `s2/chapter15` (Visual Processing: Cortical Pathways), `s3/chapter04` (Basal Ganglia), `s4/chapter02` (Hypothalamic Control of Pituitary Hormones), `s4/chapter08` (Higher Cortical Functions: Language), `s4/chapter09` (Higher Cortical Functions: Association and Executive Processing). All eight fetched 200 with 45 KB–130 KB of real chapter content.
- **30 PubMed Central articles**, each fetched 200 with title and topic content confirmed and cross-checked in Europe PMC: PMC9540767, PMC13287481, PMC4345701, PMC5767105, PMC18253, PMC3268356, PMC2767426, PMC8186903, PMC7513795, PMC6526538, PMC5599941, PMC3176615, PMC3325516, PMC8116345, PMC4450094, PMC10949071, PMC9118500, PMC1950232, PMC6606454, PMC7731670, PMC4968033, PMC7305076, PMC7183880, PMC4262123, PMC5158314, PMC7236584, PMC5566862, PMC10618090, PMC10076339 (29 listed; the thirtieth slot is the reuse of PMC5566862 in lesson 50). Publication years recorded: 2000, 2007, 2009, 2011, 2012, 2013, 2014, 2016, 2017, 2018, 2020, 2021, 2022, 2023, 2024, 2026.
- **1 open-access article hosted by the publisher**: *A manifesto for reproducible science*, Nature Human Behaviour, `nature.com/articles/s41562-016-0021`, fetched 200 (505 KB) with section headings read.
- **1 author-institute-hosted full-text PDF**: Maguire, Woollett and Spiers, *Hippocampus* 2006, at `fil.ion.ucl.ac.uk/Maguire/Maguire2006.pdf`, fetched 200 (613 KB), PDF title metadata read from the file and confirmed to match the article, with two occurrences each of "taxi" and "bus driver" in the byte stream.

Retries and substitutions:

- `pmc.ncbi.nlm.nih.gov/articles/PMC4345701/` and `pmc.ncbi.nlm.nih.gov/articles/PMC8186903/` returned transport errors in the last verification sweep and returned 200 with the correct full content on immediate retry. Both had also been fetched successfully earlier in the session (135 KB and 506 KB respectively, with their section headings read).
- The PubMed record for the 2006 taxi/bus driver study (`pubmed.ncbi.nlm.nih.gov/17024677/`) returned a reCAPTCHA interstitial to this session's HTTP client in every attempt, so it was **replaced** as the lesson 50 reading with the authors' institute-hosted full-text PDF of the same article. The PubMed identifier is not relied on anywhere in the pack.

Source-specific caveats stated in the pack rather than hidden: Silver and Kastner is a 2009 review, so its specific map assignments are framed as a historical snapshot; Glimcher (2011) is presented as the settled core of prediction error theory with heterogeneity treated as newer material; Berridge (2012) carries an explicit publication-era note; Sandi and Pinelo-Nava (2007) is disclosed as an older review to be paired with the 2022 and 2024 sources; the Liu and colleagues eLife study on de-differentiated somatosensory maps is presented as an open question whose Results the reader should check rather than a settled claim about ageing; the Sumner press-release studies are described by their measured outcome categories and designs with directions for reading the actual proportions from the Results rather than any figure quoted from a secondary summary; the Wellcome Open Research study on causal overstatement is described by design with an explicit instruction that its direction be read rather than assumed from the title; the serotonin umbrella review and its narrative reply are presented as a live disagreement with instructions to compare the questions asked before comparing conclusions; the power synthesis and its mixture-model reanalysis are presented as a dispute in which both sides are empirical claims.

No NCBI Bookshelf and no StatPearls chapter is used, because that host was fully bot-blocked in a previous run of this expansion; the previous handoff's warning was honoured rather than rediscovered.

## Arithmetic checks (all computed with a tool; values below were recomputed and matched the prose)

- **L41 magnification and sampling.** 5 mm/degree central versus 0.5 mm/degree peripheral gives a ratio of 10; a 1 mm voxel spans 0.2 degrees centrally and 2.0 degrees peripherally, a 10× resolution difference. Two-point discrimination illustration: 40 mm ÷ 2.5 mm = 16.
- **L42 development.** 12,000 − 7,000 = 5,000 synapses, 5,000 ÷ 12,000 = 41.7 per cent. Exponential plasticity decline with a 2-year time constant: e^−0.5 = 0.607, e^−1 = 0.368. Window arithmetic: deprivation from age 2 to 6 covers 4 of 8 years (one half) with 2 years (one quarter) remaining.
- **L43 prediction error.** delta = reward + 0.9 × V(next) − V(current); with V(cue) = 0.2 and reward 1 the error is 0.8; at V(cue) = 1.0 the error is 0; on omission it is −1.0. Magnitude example: expectation 10 with outcomes 6, 10 and 14 gives errors of −4, 0 and +4, that is −40, 0 and +40 per cent.
- **L44 stress and exposure.** 700 − 300 = 400, 400 ÷ 300 = 133.3 per cent above baseline. Inverted-U illustration: concentrations 200, 400 and 700 mapping to scores 50, 80 and 30. Exposure: 50 per cent excess for 2 hours = 100 per cent-hours; the same excess for 8 hours = 400 per cent-hours, four times the exposure at the same peak.
- **L45 sleep.** 480 minutes ÷ 90 minutes = 5.33 cycles. Illustrative homeostasis: 1 − e^(−16/18) = 0.589 after 16 hours awake; e^−2 = 0.135 after 8 hours asleep with a 4-hour decay constant. Timescales: a 14 Hz spindle has a period of 71 ms and a 0.8 Hz slow oscillation 1250 ms, a ratio of about 18.
- **L46 lateralisation and dissociations.** 60 ÷ 62 = 96.8 per cent left-dominant; 13 ÷ 20 = 65.0 per cent; the remainder splits between right-dominant and bilateral patterns.
- **L47 power and multiplicity.** Required participants per group at 80 per cent power, alpha 0.05 two-tailed: d = 0.3 → 175; d = 0.5 → 63; d = 0.9 → 20; d = 1.2 → 11. A 2.5 per cent grey-matter difference with a 5 per cent between-subject standard deviation is d = 0.5 → 63 per group. Multiplicity: 100,000 voxels × 0.001 = about 100 chance exceedances; 1 − 0.95³ = 14.3 per cent; 1 − 0.95¹⁴ = 51.2 per cent.
- **L48 devaluation index.** 80 → 30 gives (80 − 30) ÷ 80 = 62.5 per cent suppression; 80 → 74 gives 7.5 per cent; the persistence contrast of 20 versus 5 trials is 15 trials.
- **L49 base rates.** With prior 0.2, alpha 0.05: power 0.5 gives PPV = 0.1 ÷ 0.14 = 0.714; power 0.2 gives 0.04 ÷ 0.08 = 0.5; with prior 0.8 and power 0.5, PPV = 0.4 ÷ 0.41 = 0.976.
- **L50 design arithmetic.** Paired-design variance factor 2(1 − r): r = 0.5 → 1.0 (no saving); r = 0.8 → 0.4 (60 per cent fewer participants for the same effect). Family-wise error: 1 − 0.95³ = 14.3 per cent, 1 − 0.95⁴ = 18.5 per cent, 1 − 0.95¹⁴ = 51.2 per cent.

All numeric scenarios in the pack are labelled as textbook illustrations, hypothetical models or arithmetic practice with stated assumptions, and each labels the constants it invents. No effect size, quote or study result is invented; source claims are paraphrases of fetched abstract, abstract-section or heading text, and where the fetched text did not state a direction the pack says so and directs the reader to the Results.

## Health-adjacent accuracy and scope

Every health-adjacent lesson states that it is education, not diagnosis or treatment. No lesson recommends a supplement, drug, schedule, dose or behavioural protocol; the stress, sleep, dopamine and habit material explicitly refuses self-directed physiological intervention and refuses to turn group findings into individual predictions. No deterministic single-neurotransmitter explanation is offered anywhere: dopamine is presented through prediction error, incentive salience, effort and heterogeneity with unification described as unresolved; glucocorticoid effects are presented as dose-, timing-, receptor- and context-dependent with the tipping point described as undefined; serotonin and depression appear only as an example of reading a live controversy. Contested findings are labelled as contested, and older sources carry era disclosures. Individual medical or private details are not referenced.

## Unresolved limitations

- **PMC bot checks are intermittent.** Several `pmc.ncbi.nlm.nih.gov` URLs returned a reCAPTCHA interstitial on first request in some sweeps and 200 with full content on retry or via the `www.ncbi.nlm.nih.gov/pmc` mirror. Two readings (PMC4345701, PMC8186903) are recorded as verified in an earlier sweep plus a successful retry rather than in the single final sweep. Verification means the page returned real content with the expected title and topic terms; it is not a claim that every paragraph of a long review was read in full.
- **No bookshelf or StatPearls source.** These hosts were not usable; a future author with access could add chapters as alternative readings for lessons 42, 44 and 46.
- **One reading is an author-hosted PDF** (Maguire, Woollett and Spiers 2006) because the PubMed record is bot-blocked. Author-hosted files can move; if the parent prefers a publisher-stable link for the citation record, this is the one reading to revisit.
- **Two lessons carry only two or three readings** (48 has two, 46 and 47 have three) while lesson 49 carries six, because lesson 49 needs the paired-controversy and paired-power readings. A parent wanting uniform depth per lesson could add primary literature to lesson 48.
- **Curriculum position.** Lesson 45 deliberately avoids duplicating lesson 35's consolidation material and stays on regulation and state control; the two lessons are complementary but a learner should read 35 before 45. The level assumes 21–40 as prerequisites and does not re-teach them.
- **Scale.** This is one level, ten lessons, 22 assessment items. It is not 100 units and does not claim to be; it is a bounded release batch.
- **Assessment weight.** The unit quizzes and level test are recognition and short-reasoning items with feedback. They are **not** evidence of professional competence and are not a substitute for the application tasks and rubrics carried in the lessons.
- **A content invariant pass is not an application test pass.** Parent retains integration into the registry or `neuroscience.json`, route and rendering work, accessibility and assessment-flow testing, and production verification on Vercel. This worker did not deploy, did not start a server and did not use browser automation.
