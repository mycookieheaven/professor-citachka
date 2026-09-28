# Psychiatry level 71-80 — handoff note

**Pack written to:** `src/lib/course-packs/staged/psychiatry-71-80.json` (318,254 bytes, 795 lines, valid JSON, sha256 prefix `dc5fb9cd1ae9b89e`)
**Note written to:** `research/expansion/psychiatry-71-80.md` (this file)
**Nothing else was created or modified.** `git status` shows my contributions as `src/lib/course-packs/staged/` (shared with other workers' packages) and this note; the pre-existing dirty files in the worktree belong to other workers. No dev server, no deploy, no browser automation, no test or shared-component edits.

---

## 1. What this level is

One new level continuing directly after `psychiatry-61-70.json`, two units of five lessons, unit quizzes of five questions and twelve cumulative level questions.

- **Level title:** From lived experience to service systems: how psychiatric knowledge is made, measured and contested
- **Unit 1 — Describing experience, measuring it, and revising the categories** (lessons 71-75; `uq-71-80-a` … `-e`)
- **Unit 2 — Reading treatment evidence and reasoning about services** (lessons 76-80; `uq-71-80-f` … `-j`)
- **Level questions:** `lq-71-80-a` … `lq-71-80-l` (12)

**ID-scheme deviation, disclosed:** the task text said `uq-71-80-a` … `-e` *per unit*. Two units cannot both use `a`-`e` without duplicate IDs, and the CONTRACT requires unique question IDs, so unit 2 continues `f`-`j`, exactly as `psychiatry-61-70.json` did (`a`-`e` then `f`-`j`). No ID collides with any published pack (the app validator confirms this).

### Lesson topics

| ID | Title | Territory |
|---|---|---|
| 71 | Phenomenology as method | Husserl's natural attitude and epoché as bracketing (not denial); Jaspers' 1912 paper on phenomenological method in psychiatry and *Allgemeine Psychopathologie* 1913; *verstehende* vs *erklärende* psychology; form vs content of experience; Stanghellini & Broome on the complaint that carries meaning; limits (theory-ladenness, inter-rater agreement, description ≠ causation) |
| 72 | Self-disorder research as a case study | basic/minimal self and ipseity; EASE published 2005; group aggregation with one factor and high internal consistency; the ultra-high-risk Cox model (49 participants, ~569 days); the construct's own critical literature on specificity, structure and pathogenesis; group result ≠ individual prediction |
| 73 | What a scale claims | the COSMIN taxonomy and why it exists; reliability/measurement error/validity/responsiveness as separate claims; internal consistency ≠ validity; measurement invariance and differential item functioning (PHQ-9/GAD-7 across four countries); instrument-, anchor- and severity-specific minimal important differences (−1.7 PHQ-9, −3.5 BDI-II, −1.5 GAD-7 at moderate severity; PROMIS 3-4 T-score points); noise floor vs importance |
| 74 | How a category changes | Robins & Guze's validation programme and the concept of validators; Kendler's standard for revisions; the 1973 removal of homosexuality and the residual ego-dystonic category removed in 1987; DSM-5 field-trial reliability dispute (mean kappa 0.80 audio-review vs 0.47 test-retest) and how rarely kappa is reported; ICD-11 field study (13 countries, weighted kappa 0.45-0.88) as reliability improved by design; criteria vs clinical judgement |
| 75 | The replication problem | replication vs reproducibility; Ioannidis's prior-odds/power/significance argument as an analytic claim; the manifestos' remedies with their own hedge; measured registration compliance in five psychiatry journals (181 trials: 11.6% unregistered, 33.7% retrospective, 33.1% prospective, 20.4% unclear primary outcomes); what a failed replication does and does not mean |
| 76 | Averages and the person | the average may be non-representative of a typical participant; risk-based vs effect-based heterogeneity; underpowered interaction tests; the prior-probability requirement for credible subgroups; absolute benefit and NNT computed at three baseline risks; prognostic vs predictive vs individual prediction |
| 77 | The published record as a biased sample | regulator-anchored comparison (30 trials, 13,747 patients; 15/15 vs 7/15 transparent; effect size 0.24 FDA vs 0.29 journals; transparent reporting 11%→47%); funder-anchored comparison (0.52 published-only vs 0.39 with unpublished, −25%); funnel-plot limits (asymmetry ≠ bias; <10 studies); risk-of-bias appraisal; GRADE's four levels and five downgrading factors as judgement |
| 78 | What the control condition does | the 1.80-point drug-placebo difference against a contested 3-point clinical-significance threshold, increasing with severity but small even at high severity, with Kirsch's interpretation flagged as contested; network meta-analysis of 49 RCTs where no-treatment exceeded waiting list (OR 2.9, 1.3-5.7) and its author-disclosed caveats; therapist effects (8.6% of outcome variance across 27 treatment groups); allegiance across 30 meta-analyses (r = .262) including allegiance to the allegiance hypothesis as a moderator |
| 79 | Systems reasoning | WHO figures (1 in 8; 970m in 2019, 82% in LMICs; 71% of people with psychosis not in contact with services; ~2% of health budgets); the Atlas as the country-level reference with definitional and periodic-collection caveats; community models of care and lived-experience involvement; poverty–mental illness as bidirectional with a 1.5-3× income gradient; named failure modes (substitution, threshold shifting, target gaming, inequity, condition-dependence); a worked ward-closure critique and a caseload arithmetic example |
| 80 | Capstone | the six-question appraisal (claim, provenance, measurement, comparator and delivery, literature context, system frame) followed by the uncertainty register (provenance, unknowns, revision conditions); ritual appraisal as the failure mode; the explicit statement that no quiz item in the pack is evidence of clinical competence |

Instructional design matches the published packs: each lesson has `explanation`, `example`, one `question`/`answer`/`distractor`/`correction`, the six `depth` fields, 3-5 `readings` with section-specific directions and honest access caveats, and a `visual` with 5-7 labelled steps. No `russianItems` key (subject is not Russian, per the contract).

## 2. Computed word counts

Words counted programmatically over `explanation + example + depth.definitions + depth.mechanism + depth.secondExample + depth.mistake + depth.application + depth.summary` for each lesson, mirroring `scripts/validate-packs.ts`.

| Lesson | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 |
|---|---|---|---|---|---|---|---|---|---|---|
| Words | 2755 | 2621 | 2852 | 3040 | 2869 | 2799 | 3146 | 3175 | 3362 | 3535 |

- **Total instructional words: 30,154** (requirement ≥600 per lesson)
- Minimum **2,621** (lesson 72); mean **3,015.4**

**Arithmetic used inside the content, computed with a tool and recorded here:**

- NNT conversions at a 25% relative reduction: 40%→30% (10.0 points, NNT 10.0); 8%→6.0% (2.0, NNT 50.0); 2%→1.5% (0.5, NNT 200.0); 50%→37.5% (12.5, NNT 8.0); 10%→7.5% (2.5, NNT 40.0).
- NNT conversions at a 20% relative reduction (level questions e and l): 45%→36.0% (9.0 points, NNT 11.1); 12%→9.6% (2.4, NNT 41.7 — written as "about 42"); 5%→4.0% (1.0, NNT 100.0).
- Illustrative minimal detectable change used in lesson 73, labelled as illustrative arithmetic and not attributed to any named scale: with SEM 2.0, MDC at 95% = 1.96 × √2 × 2.0 = **5.54** (written "5.5"); at 80% = 1.28 × √2 × 2.0 = **3.62** (written "3.6").
- Percentage checks: 82% of 970 million = **795.4 million**; 71% of 1,000 = **710**; 20% of a PHQ-9 score of 15 = **3.0**.
- Registration proportions recomputed for the briefing task: 21/181 = **11.6%**; 61/181 = **33.7%**; 60/181 = **33.1%**; 37/181 = **20.4%**; and 11.6 + 33.7 + 33.1 + 20.4 + 1.1 = **99.9%** (rounding).
- Capacity arithmetic in lesson 79's application task: 40,000 ÷ 8 = **5,000**; 6 clinicians × 60 active cases = **360**; 6 × 3 sessions × 200 days = **3,600** sessions per year; ÷ 10 sessions = **360** people; a fifth of clinician time gives **72** people per year = **1.44%** of 5,000.
- Reach arithmetic in `uq-71-80-i`: 4% of 250,000 = **10,000**; 500 of those = **5.0%**.
- All study figures quoted (kappa values, effect sizes, confidence intervals, sample sizes, percentages, r = .262, I² = 28.98%) are **quoted from the cited sources, not derived**.

## 3. Structure validation (scripted)

- `subject` = `psychiatry`; one level; two units (5 lessons and 5 questions each); 12 level questions; 10 lessons with IDs exactly `71`-`80` in order; 22 questions total.
- Every lesson has exactly the keys `id, title, explanation, example, question, answer, distractor, correction, depth, readings, visual`; every `depth` exactly the six required fields; every reading exactly `title, url, note`; every `visual` a title, description and 5-7 steps.
- All 22 answers distinct; all 22 distractors distinct; no answer text reused as a distractor; no duplicate question IDs; every `reviewLessonIds` value exists (35, 63, 65 from published packs; 71-80 from this one).
- In-lesson citation markers `[n]` checked against each lesson's own `readings` array length — none out of range. Bracketed numeric citations were deliberately stripped from unit and level questions (those objects have no readings array).
- No `russianItems` key anywhere; no placeholder/TODO strings; no dosing, prescribing instruction or drug doses anywhere in the pack (the only occurrence of "prescribing" is the disclaimer that the pack contains none).
- **Exercised against the app's own validator** (not just a bespoke check): a temporary driver in the scratch directory called the real `attachCoursePacks(basePrograms, [...5 published psychiatry packs, staged pack])` from `src/lib/course-pack.ts`, importing the staged JSON read-only. Result: `status: "valid"`, 10 lessons, ids 71-80, minWords 2621, totalWords 30154, 38 unique readings, unit questions [5,5], level questions 12. The driver lived outside the repo and no repo file was touched. `npx vitest` / the repo test suite was **not** run — the parent owns application TDD and integration.

## 4. Source verification results

**42 reading entries, 38 unique URLs. Every one was requested with a browser user-agent (Chrome 122 on macOS) and returned HTTP 200.** Bodies were then searched for the specific figures, quotes and section claims used. Counts by host: 20 PMC, 5 PLOS.

**Blocked or awkward to scripted clients, disclosed here and inside the pack's reading notes (never called dead):**

| Host | Behaviour with browser UA | Disposition |
|---|---|---|
| `bmj.com` (RoB 2, GRADE, funnel-plot papers) | **HTTP 403** to scripted clients while serving browsers normally | Not cited. The funnel-plot guidance is cited through the London School of Hygiene & Tropical Medicine repository copy of the same paper, with the publisher URL given in the reading note for browser use. |
| `pubmed.ncbi.nlm.nih.gov` (Robins & Guze 1970; Furukawa 2014; Munder 2013) | HTTP 200 but a reduced 170-character body to scripted clients | Cited as records; the lesson text is limited to what the title, publication data and (for the two 2013/2014 papers) the abstracts state, all read through the NCBI E-utilities API. Reading notes tell the learner to open PubMed in a browser. |
| `riskofbias.info` | HTTP 200, JavaScript-rendered so little text is available to scripted clients | Cited as the official home of the current RoB 2 tool. The lesson deliberately does **not** enumerate the tool's domains, telling the reader to obtain the current domain list from the site rather than from recollection. |
| `springer.com` / `bmcpsychiatry`; `europepmc.org` | **305-character stub / HTTP 403** to scripted clients | Replaced by PMC copies (e.g. `PMC10539575` instead of the BMC continuity review; `PMC11290608` instead of the Europe PMC page). |
| `www.cambridge.org` editorial (Stanghellini & Broome) | HTTP 200; summary and opening sections visible, full text may require login | Cited for the passages actually read (the summary and the complaint→symptom argument); the note warns the full text may need institutional access. |
| Author/repository copies used instead of versions of record | `discovery.ucl.ac.uk` (Kounali), `eprints.whiterose.ac.uk` (Johns et al.), `economics.mit.edu` (Ridley et al.), `researchonline.lshtm.ac.uk` (Sterne et al.) | Each reading note states that it is an accepted manuscript or author copy and that pagination or the version of record may differ. |

**Verification highlights (figures matched in the fetched full text, not in search snippets):**

- Turner 2022 (PLOS Med): 30 trials, 13,747 patients; transparent publication 15/15 positive (100%) vs 7/15 negative (47%); ES 0.24 (0.18-0.30) FDA vs 0.29 (0.23-0.36) journals; inflation 0.05 vs 0.10; transparent reporting 11%→47%.
- Driessen 2015 (PLOS ONE): unpublished g = 0.20 added to published g = 0.52 gives 0.39 (0.08-0.70), a 25% reduction.
- Scott & Rucklidge 2015 (PLOS ONE): 181 trials from 3,305 articles; 21 (11.6%), 61 (33.7%), 37 (20.4%), 2 (1.1%), 60 (33.1%).
- Method matters (PMC4573819): mean kappa 0.80 audio-recording vs 0.47 test-retest, about a quarter of test-retest estimates poor; the task-force vs critic dispute over kappa guidelines; 27% of 67 articles reporting sample-derived kappa.
- Reed 2018 (World Psychiatry): weighted kappa 0.45 (dysthymic disorder) to 0.88 (social anxiety disorder), 13 countries, "superior to that previously reported for equivalent ICD-10 guidelines".
- Drescher 2015: 1973 removal from DSM-II; ego-dystonic homosexuality removed in **DSM-III-R in 1987**; the "why not ego-dystonic masturbation" style objection quoted from the article.
- Nordgaard & Parnas 2014 (PMC4193705): aggregation in the schizophrenia spectrum with no difference between schizophrenia and schizotypal disorders; one factor; excellent internal consistency.
- Nelson 2012 (PMC3494062): 49 ultra-high-risk participants, 52 controls, mean follow-up 569 days, EASE total predicted time to transition in Cox regression.
- PHQ-9/GAD-7 invariance (PMC8886334): unidimensional, reliable, largely free of differential item functioning; higher latent means in some countries.
- Kounali 2020: threshold scores −1.7 (PHQ-9), −3.5 (BDI-II), −1.5 (GAD-7) at moderate baseline severity; "20% reduction" conclusion.
- Kirsch 2008: 1.80-point mean drug-placebo HRSD difference vs the 3-point NICE threshold cited in the paper.
- Furukawa 2014 and Munder 2013: abstracts read via E-utilities (OR 2.9, 95% CI 1.3-5.7, and its own caveats; r = .262, p = .002, I² = 28.98% across 30 meta-analyses).
- Sterne 2011: "should not be equated with publication bias"; "not be used when there are fewer than 10 studies"; minimum "substantially more than 10" with heterogeneity.
- GRADE handbook: four certainty categories with definitions; downgrading factors including risk of bias, inconsistency, indirectness, imprecision, publication bias; the statement that the system is not quantitative and the factors are continua decided by judgement.
- WHO world mental health report: one in eight; 970 million in 2019 with 82% in LMICs; 71% of people with psychosis not receiving services; about 2% of health budgets.
- Ridley et al. 2020: bidirectional causal relationship; lowest incomes typically 1.5-3× more likely to experience depression or anxiety.
- Johns et al.: therapists accounted for an average of 8.6% of outcome variance across 27 treatment groups, with Wampold's ~8% cited alongside.

**Claims deliberately not made:** the Open Science Collaboration's widely repeated 36%/97% replication figures were **not** cited, because I could not verify them in a source I actually read; lesson 75 therefore argues the replication case from the sources above, including the measured registration data and Driessen's funder-anchored comparison. Similarly, the five numbered rules in Burke et al. 2015 are described but not reproduced, since the numbered text was not recovered from the fetched body; only the prior-probability statement actually read is quoted.

## 5. Clinical safety and scope

- Education only. Nothing in the pack diagnoses a real person, recommends treatment, or gives prescribing or dosing information; there is no drug dose anywhere.
- No deterministic neurotransmitter-deficiency explanations appear; where biology is discussed (e.g. the ultra-high-risk research programme) it is described as a research construct with contested specificity, not as a mechanism of illness.
- Diagnostic uncertainty is represented as the content of the level, not as a caveat bolted on: contested categories and their revision history, criteria vs clinical judgement, method-dependent reliability, unresolved specificity, publication bias, and the difference between group results and individual prediction.
- Lesson 80 states explicitly that completing the level, or answering its quiz items, is not evidence of clinical competence, and that judgements about an individual's care belong to a qualified clinician. No quiz item is framed as a test of competence.
- Suicide, risk and medication material from earlier levels is not re-taught here; lesson 77's discussion of antidepressant trial reporting is about trial conduct and appraisal and takes no position on what any individual should be offered, flagging Kirsch's interpretation as contested.

## 6. Integration status and unresolved limitations

1. **Not published.** The pack is at `src/lib/course-packs/staged/psychiatry-71-80.json` and is inert: `src/lib/course-pack-registry.ts` was **not** modified (as instructed), so nothing loads it yet. Wiring it in is the parent's step, and it must be appended *after* `psychiatry6170` in the registry array for pack-order validation to hold.
2. **No clinical review.** No psychiatrist, psychologist, nurse or peer reviewer has read this level. Every clinical statement rests on the cited sources and my reading of them; treat it as unreviewed draft content.
3. **Guideline and database drift.** WHO report figures, the Atlas collection, GRADE handbook wording, the RoB 2 tool version, NICE-style thresholds, PubMed record contents and the gov.uk statistics collection are all revised over time. Figures should be re-checked at integration time; the WHO Atlas in particular was cited at publication-page level (the full PDF was not retrieved, so no per-country workforce or bed figures are quoted anywhere in the pack).
4. **Deliberate gaps recorded as such.** No RoB 2 domain list, no Burke et al. numbered rules, no OSC replication percentages, and no deinstitutionalisation outcome figures are asserted, because the readable text did not supply them in a checkable form. These are the first places a second author could strengthen the level.
5. **Two judgement calls:** (a) unit 2's topic is treatment literacy *and* systems reasoning, chosen because lessons 26-30, 47, 50 and 56-57 already cover treatment evidence at an introductory level, so this level works the meta-research layer (reporting bias, certainty grading, comparators, heterogeneity) and the service level instead of repeating them; (b) the Robins & Guze programme is described through Kendler's history of nosology plus what the PubMed record states, rather than paraphrasing an article I could not read in full.
6. **Arithmetic labelled as illustrative.** The NNT examples, the minimal-detectable-change figures and the capacity computations are clearly presented as illustrative calculations rather than properties of any named instrument or service.
