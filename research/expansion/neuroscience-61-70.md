# Neuroscience 61–70 — authored handoff

## Deliverable

- Course pack: `src/lib/course-packs/staged/neuroscience-61-70.json` — 239,864 bytes, valid JSON, one level. When this worker first checked, `staged/` did not exist; it now also holds other workers' packs (created concurrently), and none of them was read, edited or deleted. No pre-existing repository file was edited.
- Handoff: `research/expansion/neuroscience-61-70.md` (this file).
- One new level, **Change under scrutiny: how learning, development, ageing and interventions change the brain, and how such claims are tested**, continuing after the published 01–60.
- Two units, **five substantive lessons each**, stable IDs **61–70**.
- Assessments: **5 unit questions in each unit** (10 total) and **12 separately authored cumulative level questions** (longer and cumulative by construction; every level question references at least two lesson IDs).
- No `russianItems` key anywhere (subject is neuroscience). No video URLs and no playback claims; every visual is a labelled instructional sequence of 6–7 steps.
- Nothing else modified: no registry, no `programs.ts`, no tests, no other packs, no dependencies, no audit artifacts. No server started, no browser automation, no deployment. Source reads and a scratch Node harness only.

## Topic list

Unit 1 — *Plasticity in practice: skills, training, development and ageing* (lesson IDs 61–65)

| ID | Topic |
|---|---|
| 61 | What a skill is, neurally: skill as a reproducible performance change, the five components any skill claim must specify, the after-effect logic of internal models, cortico-basal ganglia and cerebellar contributions, and why "muscle memory" and "the skill area" are category errors |
| 62 | Training-induced change versus everyday plasticity claims: randomised training evidence versus self-selected expertise comparisons, near versus far transfer, expectancy and regression artefacts, and the mechanism-versus-benefit distinction at the synaptic level |
| 63 | Critical periods revisited: critical versus sensitive period, the monocular-deprivation/Ocular-dominance canonical model with its 1960s–70s animal origin disclosed, adult reactivation work, American Sign Language natural experiments, and the statistical critiques of fitted breakpoints |
| 64 | Adolescent brain development: what volume, thickness, diffusion and BOLD measures actually index, the dual-systems model and its critique, the reliability of imbalance scores, attenuation of correlations by unreliable difference scores, and within-person tests |
| 65 | Ageing: near-linear decline in speed with accelerating memory and reasoning decline, vocabulary preserved into the sixties, cohort effects in cross-sectional designs, categorical versus continuous models of dementia, reliable change arithmetic and base-rate arithmetic for a positive screen |

Unit 2 — *Mechanisms and interventions put to the test* (lesson IDs 66–70)

| ID | Topic |
|---|---|
| 66 | Memory reconsolidation: the four-step hypothesis (retrieval, prediction-error-driven destabilisation, protein-synthesis-dependent restabilisation, reduced later expression), the 2000 animal demonstration with its era stated, the review's own reliability section, two documented failures including a preregistered unsuccessful replication, and the storage-versus-expression problem |
| 67 | Attention as selection and the limits of multitasking claims: selection with a cost, the perceptual-load account and its circularity critique, the attentional boost effect and the dual-task interaction model, contralateral neglect as a neural constraint, and the two replication studies plus 39-effect-size meta-analysis of media multitasking |
| 68 | Habit and intention: goal-directed versus habitual control defined by devaluation and contingency degradation, the slips-of-action task, striatal and cortico-basal ganglia contributions, the argument against treating habit as uniquely persistent, and wide variation in time to maximal self-reported automaticity |
| 69 | Pharmacological versus behavioural interventions: what blinding buys and what an active control must buy, the placebo-control taxonomy, the 2016 expectancy demonstration in cognitive training, surrogate-endpoint interpretation, power arithmetic, and the education/clinical boundary stated explicitly |
| 70 | Capstone — evaluating a commercial brain-training claim end to end: the seven-step audit applied to the FTC–Lumosity 2016 settled action, the negative far-transfer reviews, the ACTIVE ten-year trial as the strongest supportive evidence with its own qualification of its outcome measures, cost arithmetic, and a calibrated verdict with change-my-mind conditions |

## Assessment IDs and namespace

- Unit 1: `uq-61-70-a` … `uq-61-70-e` (review lessons 61–65)
- Unit 2: `uq-61-70-f` … `uq-61-70-j` (review lessons 66–70, with cross-references to 62 and 34)
- Level: `lq-61-70-a` … `lq-61-70-l`

All 22 IDs are unique. Answers, distractors and prompts are pairwise distinct within each question set; no answer equals its own distractor; answers and distractors are mutually disjoint across each set; no quiz prompt duplicates any lesson's optional retrieval prompt (verified by a 10-word shingle comparison: zero overlap between any two prompts).

`reviewLessonIds` used: 61–70 within this pack, plus published lessons **28, 29, 34, 36, 39, 40, 42, 43, 47, 48, 49, 50**. Every referenced ID resolves inside the published packs `neuroscience.json` (21–30), `neuroscience-31-40.json`, `neuroscience-41-50.json`, `neuroscience-51-60.json`. (See limitation 4: lesson IDs 01–20 are not present in the repository packs I could read, so no reference to them was used even though the task permitted 01–70.)

## Instructional word counts (computed in code)

Counted as `explanation` + `example` + the six `depth` fields, whitespace-separated tokens; lesson `title`, `question`, readings and diagram text are excluded, matching the contract's floor formula.

| ID | Words | | ID | Words |
|---|---:|---|---|---:|
| 61 | 1,885 | | 66 | 1,849 |
| 62 | 1,839 | | 67 | 1,923 |
| 63 | 1,972 | | 68 | 1,956 |
| 64 | 1,813 | | 69 | 1,999 |
| 65 | 1,924 | | 70 | 2,203 |

**Total: 19,358 instructional words. Minimum 1,813; maximum 2,203; mean 1,935.8.** Every lesson is more than three times the 600-word floor. Adding the ten lesson-level retrieval prompts with their answers, distractors and corrections gives **21,721 words**. The 22 unit and level questions contribute a further **7,125 words** of prompts, answers, distractors and corrections. Anti-boilerplate check: an 8-word shingle comparison across the ten `depth.mechanism` fields found **zero** shared shingles between any pair of lessons, so no mechanism paragraph is reused in disguised form.

## Validation actually executed

1. **JSON parse** — the written file was re-read from disk and parsed; `subject` is `neuroscience`; one level; two units; ten lessons with IDs exactly `61`–`70`; 10 unit questions; 12 level questions.
2. **The project's real validator, not a re-implementation** — a scratch Node harness (`check61.ts`, held outside the repository) imported the actual `attachCoursePacks` from `src/lib/course-pack.ts` and applied it to a base catalog built from the four published neuroscience packs (topics 21–60) using that same function, then attached this staged pack. Result: **`attach: PASS`**, 5 levels after attach, new level topics exactly `61`–`70`, two unit definitions carrying 5 lessons and 5 questions each, 12 assessment questions, and lesson word counts computed by the validator's own formula of 1,885 / 1,839 / 1,972 / 1,813 / 1,924 / 1,849 / 1,923 / 1,956 / 1,999 / 2,203. Re-attaching the same pack was correctly rejected (`duplicate or invalid lesson ID 61`), confirming the duplicate guard is live.
3. **Independent Python invariant harness, all passing (0 errors)** — one level; two units; five lessons per unit; lesson IDs exactly 61–70 and unique; every required lesson key present; all six depth fields present and non-empty; every lesson ≥600 words with the minimum 1,813; no `russianItems` key in any lesson; 41 reading entries across 38 unique URLs, every URL `https://` with a non-trivial note; every visual with a title, a description and ≥5 steps (actual range 6–7); 5 unit questions per unit; 12 level questions; 22 unique question IDs; no answer equal to its own distractor; distinct answers, distinct distractors and mutually disjoint answers/distractors within each question set; every `reviewLessonIds` entry in the range 01–70; unit question ID block `a`–`j` and level block `a`–`l` exactly as required.

## Source verification results

All 41 reading entries were fetched over HTTPS after the pack was written (three attempts each, with backoff), giving **41/41 HTTP 200 responses with substantive bodies** (13,700–132,800 characters of extracted text each). 38 unique URLs: 33 PMC full-text articles, 7 open-access UTHealth *Neuroscience Online* chapter pages (some chapters reused across lessons with different section directions), 1 Nature article landing page, and 1 FTC press release.

Verification also checked that the cited *sections* exist in the fetched body, not merely that the URL resolved:

- PMC4346332 — `CHARACTERIZING BEHAVIOR`, `Sequence Learning`, `Adaptation`, `OFF-LINE PROCESSING AND CONSOLIDATION`, `CONCLUSIONS`; authors Dav Clark and Richard B. Ivry.
- PMC6047524 — "Critical periods in amblyopia", authors Takao K. Hensch and Elizabeth M. Quinlan; sections `Inhibition and critical period induction`, `Molecular reactivation of critical period in adulthood`, `Environmental reactivation of critical period in adulthood`, `Reactivating plasticity to enhance recovery`; body contains the ocular-dominance/monocular-deprivation definition and the Wiesel & Hubel 1963 attribution.
- PMC6329394 — authors Rachel I. Mayberry and Robert Kluender; sections `Points of Agreement`, `What We Did Not Claim`, `The Shape of the L2 AoA Function`.
- PMC3723803 — author Jan Vanhove; sections `Inferring non-linearities in critical period research`, `Modelling the link between age of onset of acquisition and ultimate attainment`, `On partialling out 'age at testing'`.
- PMC5605913 — authors Jonathan L. C. Lee, Karim Nader, Daniela Schiller; sections `Reconsolidation updates memories`, `The reliability of reconsolidation effects`, Box 1 on alternative interpretations; body contains the prediction-error requirement and the propranolol statement.
- PMC5395559 and PMC8831535 — both contain reconsolidation/boundary content; PMC8831535 has `Preregistration`, `Bayesian sequential updating` and "No evidence for an effect of propranolol on disrupting memory reconsolidation".
- PMC5662702 — contains "Ophir, Nass, and Wagner (2009 …)", "meta-analysis on a total of 39 effect sizes", the small-study correction sentence, and the published correction notice.
- PMC6990093 / PMC3711850 / PMC6969358 — numbered sections on sensation seeking, self-regulation, "Evidence of complexity in adolescent brain-behavior relationships", Boxes 1–2, and sections 1.1–1.6 on evaluating imbalance.
- PMC8153102, PMC6367038, PMC4767530 — `Categorical and continuous models of cognitive aging and dementia`, `Toward a change-based assessment of dementia`, plus Salthouse's three comparison types and the vocabulary finding.
- PMC10842266 — `Distinguishing between habit and goal direction`, `Are habits unusually sticky and persistent?` with its subsections, `Habit conversion as a behavioral end point`.
- PMC6105188 — `slips-of-action task`, `Diary study using the key-cover procedure`, and the sentence that the time before a habit reaches its maximal self-reported strength can vary widely.
- PMC4941515 — `Significance`, `Materials and Methods`, `Results`; body contains the expectancy manipulation, the belief-index contrast (reported B = 14.96, SE = 1.93, t(48) = 7.75, d = 2.15), the statement that the authors' positive effects on fluid intelligence were the result of overt and suggestive recruitment, and the 0.5 SD ≈ 6–8 IQ point conversion.
- PMC7381254 — `Active Controls: Active-Ingredient and Similar-Form Types`, `Passive Controls: No-Contact and Passive-Task Types`, `Placebo Effect Versus a Motivation Effect`.
- PMC6701629 — body contains the meta-analytic result used: global cognitive function g = 0.23, 95% CI 0.03 to 0.44, with 690 participants across included studies.
- PMC4055506 — `Sample Characteristics`, `Training Effects on Cognitive Abilities`, `Training Effects on Daily Function`; group sizes ≈700 per arm, ten-year retention 44%, and the discussion's statement that the performance-based daily-function measures are multi-ability cognitive tests.
- PMC5724589 — authors Giovanni Sala and Fernand Gobet; `Does Far Transfer Occur? Insights From Chess, Music, and WM Training`, `Experimental studies`, `Theoretical and Practical Implications`.
- PMC9903001 — `Meta-Analytic Evidence`, `Active versus passive control groups`, `Publication bias and laboratory bias`, `Some methodological recommendations`; body contains "The overall effect of far transfer is null" and the treatment-versus-active-control ≈ zero statement.
- PMC3657623 / PMC3741554 / PMC2747151 / PMC5580524 — section and content checks passed (attentional boost, load-circularity sections, the PNAS commentary text, and the strong/old-memory framing).
- UTHealth chapters — `Section 3 Ch 3` (§3.5 Encoding of Movement by Motor Cortex; §3.10 premotor preparation), `Section 3 Ch 4` (§4.6 Functions, §4.8 Habit learning in striatum, §4.9), `Section 3 Ch 5` (§5.3, §5.6), `Section 1 Ch 7` (§7.1 Homosynaptic Plasticity, §7.3 Long-Term Potentiation), `Section 4 Ch 8` (§8.2 Is Language Innate or Learned, §8.6), `Section 4 Ch 9` (§9.2 Contralateral Neglect), `Section 4 Ch 10` (§10.1 Aging Is a Normal Biological Process, §10.3, §10.4, §10.9). Each label was read from the live page HTML, not from memory.
- FTC press release — body contains the 5 January 2016 settlement, the $2 million redress, the notification and auto-renewal cancellation terms, the allegation list (everyday performance at work, school, athletics; delaying age-related decline and claims about mild cognitive impairment, dementia and Alzheimer's disease; cognitive impairment from health conditions) and the Director's quoted comment. The handoff and the lesson both state its procedural status as a settled action with agency allegations.
- Blocked sources avoided: NCBI Bookshelf and StatPearls were not used. `royalsocietypublishing.org` (the deliberate-practice replication) returned HTTP 403 to automated fetching, so it was **not** cited; the lesson discusses practice-hours arithmetic and retrospective self-report limits without attributing effect sizes to a source it could not read. PMC returned stub pages intermittently (the two lesson-66 reconsolidation URLs failed on the first pass and returned full text on retry), consistent with the briefed intermittent blocking — so a single failure was not treated as a dead link.

## Arithmetic checks (computed in code, recorded here)

- Practice-hours arithmetic: 3 h/day × 6 days = 18 h/week; 10,000/18 = **555.6 weeks**; /52 = **10.7 years**; at 28 h/week = **6.9 years**.
- Effect sizes: 12 points at SD 15 = **d 0.80**; 2.25 points = **d 0.15**; r = 0.30 → **9.0%** variance; r = 0.20 → **4.0%** variance.
- Regression to the mean: baseline 1.0 SD below the mean with retest reliability 0.70 → expected move (1 − 0.70) × 1.0 = **0.30 SD ≈ 4.5 points** at SD 15.
- Age-of-arrival illustration (constructed): 2.5 points/year × 10 years = **25 points = 1.67 SD** at SD 15; ceiling headroom 95 − 80 = 15 points = **1.00 SD**, so a 1.67 SD difference cannot be observed; attrition of 30% of a group 0.50 SD below the mean raises the retained mean by 0.30 × 0.50 = **0.15 SD = 2.25 points**.
- Screening base-rate arithmetic, 90% sensitivity and 90% specificity: prevalence 5% → 50 cases, 45 TP, 95 FP, **PPV 32.1%**; prevalence 1% → 9 TP, 99 FP, **PPV 8.3%**; prevalence 20% → 180 TP, 80 FP, **PPV 69.2%**.
- Reliable change: SEM = 15 × √(1 − 0.85) = **5.81**; 1.96 SEM = **11.39 points**.
- Reliability/attenuation: √0.45 = **0.671**; true r 0.30 with difference-score reliability 0.45 → observed r **0.201**. (Used with reliability 0.45 and r 0.20 in lesson 64; the lesson states the assumptions explicitly.)
- Power — two-sample t (80% power, two-sided α 0.05), n per group: d 0.2 → **393**; d 0.3 → **175**; d 0.5 → **63**; d 0.8 → **25**; d 0.1 → **1,570**. Power of a 40-per-group trial for d 0.2: **≈14%**.
- Power — correlations, n for 80% power: r 0.10 → **783**; r 0.20 → **194**; r 0.30 → **85**.
- Power — two proportions: 60% vs 50% → **388 per group**; 70% vs 60% → **356 per group**.
- Multiple comparisons: 10 independent tests at α 0.05 → family-wise error **0.4013**.
- Habit arithmetic: 80% of 30 days = **24 days**; 70% of 90 days = **63 days**; 5 minutes daily for 30 days = **150 minutes = 2.5 hours**.
- Reconsolidation illustration (explicitly labelled constructed in the lesson text): 60 → 30 units = **50.0%** reduction; 60 → 58 = **3.3%**.
- Scale conversions: 2 points at SD 3 = **0.67 SD**; 1.5 SD at SD 15 = **22.5 points**; 0.5 SD at SD 15 = **7.5 points**; "20% better" on a mean of 50 at SD 15 = 10 points = **0.67 SD**, on a mean of 80 = 16 points = **1.07 SD**.
- Cost arithmetic: $14.99/month = **$179.88/year**; × 36 = **$539.64 over three years**.
- Meta-analytic anchors used verbatim from sources: g = 0.23 (95% CI 0.03–0.44) for computerised training in mild cognitive impairment; 39 effect sizes in the media-multitasking meta-analysis; ≈0.5 SD ≈ 6–8 IQ points for the expectancy manipulation; ten-year ACTIVE retention 44%.

Constructed numbers are labelled as constructed in the lesson text (the reconsolidation percentages and the switching-overhead illustration) and are not attributed to any study. No quotation is invented; the only near-quotations are short phrases checked against fetched page text (e.g. the FTC allegations and the review's "overall effect of far transfer is null") and all are attributed with their procedural or review status.

## Education/scope compliance

- Education only: no diagnosis, no treatment advice, no prescribing. Lesson 65 states explicitly that interpreting a real person's results belongs with a qualified clinician; lesson 66 describes propranolol as an experimental research tool and gives no clinical guidance; lesson 69 states the boundary in both the explanation and the retrieval item.
- No deterministic single-neurotransmitter explanations: dopamine, noradrenaline and acetylcholine appear only as one contributing signalling system within circuit-level accounts, never as sufficient causes of behaviour.
- Contested findings are presented as contested with the disagreement visible: dual-systems models (reaffirmation paper read against the critique and the statistical-evaluation paper), perceptual load theory (review read against the circularity critique), media multitasking (original finding, commentary, two replications and meta-analysis), reconsolidation (review's own reliability section plus two documented failures), and habit persistence (a review arguing against the standard stickiness assumption).
- Era disclosure for older citations: Wiesel & Hubel (1963) and 1960s–70s monocular-deprivation animal work in lesson 63; the 1997 Shadmehr & Brashers-Krug consolidation study in lesson 62; the 2000 Nature fear-memory study in lesson 66; the UTHealth ageing/AD chapter, flagged as predating current biomarker frameworks, in lesson 65; the 2009 Ophir/Nass/Wagner study and its 2017 replications in lesson 67; the 2016 FTC action and the 2014 ten-year ACTIVE results in lesson 70.
- Word counts, evidence limits and reading caveats are stated inside the lessons rather than assumed.

## Unresolved limitations

1. **Not registered for publication.** `src/lib/course-pack-registry.ts` was intentionally not edited (contract: one worker, one pack plus handoff). The parent must import `neuroscience-61-70.json` after `neuroscience-51-60.json` in registry order for the level to appear on the site.
2. **No production verification.** Nothing was deployed and no server was started, per the brief; no route, renderer or progress behaviour was exercised, and the standing site requirements (Listen control, next-lesson arrow, saved position) are parent-side integration concerns.
3. **PMC fetching is intermittent.** Two lesson-66 URLs returned stub pages on the first pass and full text on retry. All 41 entries were verified at 200 with substantive bodies on the final pass, but a future re-check could show transient failures that are not dead links.
4. **Lesson IDs 01–20 could not be read in the repository.** The four neuroscience packs cover 21–60 only; the legacy 01–20 catalog is generated elsewhere in the source. To be safe, no `reviewLessonIds` entry below 21 was used. If the parent confirms 01–20, additional cross-references would be legitimate but are not required for validity.
5. **Some numbers are intentionally constructed illustration.** Lesson 66's reconsolidation percentages and lesson 67's switching-overhead percentage are labelled in the text as constructed arithmetic rather than findings, and lesson 63/64/65 use constructed illustrations for censoring, attrition and difference-score attenuation. Every source-backed figure carries its source; readers should not treat the illustrative figures as measurements.
6. **No independent subject-matter review.** The pack was authored and checked by one worker; the real validator proves structural validity, not scientific accuracy. A domain reviewer should spot-check the contested-literature summaries (lessons 66 and 67 especially), where the balance of emphasis is a judgement.
7. **Word counts exclude readings and visuals.** The contract's floor formula was followed, so the reported totals understate total page text; reading notes and diagram steps were not counted.
8. **No `russianItems`, no video, no autoplay:** correct for this subject, but it means the level provides no item-level audio; its visual support is labelled step sequences only.
