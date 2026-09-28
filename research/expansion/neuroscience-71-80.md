# Neuroscience 71–80 — authored handoff

## Deliverable

- Course pack: `src/lib/course-packs/staged/neuroscience-71-80.json` — 335,442 bytes, valid JSON, one new level.
- Handoff: `research/expansion/neuroscience-71-80.md` (this file).
- Level title: **Beyond the point neuron: circuit mechanisms beneath behaviour and the methods that can test them**, continuing after the published 01–70 (see the registry-order note below: the real base catalog exposes 01–20 and the five published packs cover 21–70, which is the seven published levels the brief described).
- Two units, **five substantive lessons each**, stable IDs **71–80**.
- Assessments: **5 unit questions per unit** (10 total) and **12 separately authored cumulative level questions**.
- No `russianItems` key anywhere. No video URLs, no playback claims; every visual is a labelled instructional sequence of 7 steps (lesson 80 has 8).
- Nothing else modified. `git status --porcelain` in the repository lists exactly one changed path, this pack. No registry, test, component, dependency, audit artifact or other worker's pack was touched. No server, no browser automation, no deploy.

Note on git: the working tree path was swept into commit `dd8ba1e` by another process while I was still writing it (that commit also contains unrelated homepage work). The working-tree file is the final version; the committed snapshot is an earlier draft. The parent owns the commit.

## Placement and non-repetition

Unit 1 is mechanism/analysis, unit 2 is methods/applied reasoning, continuing the trajectory of levels 61–70 (which ended on evaluating a commercial brain-training claim).

| Unit | Lessons | Focus |
|---|---|---|
| 1 — *Mechanisms beneath the circuit: dendrites, glia, matrix and pruning* | 71–75 | subcellular and non-neuronal mechanisms, and how to weigh contested mechanistic evidence |
| 2 — *Methods that carry mechanistic claims: tools, recordings, genes and models* | 76–80 | causal tools, spike-sorting inference, human genetics, model-based inference, capstone design |

Topics already used in 01–70 were deliberately avoided: synaptic integration (21), LTP induction/expression (25), BOLD/LFP and reverse inference (27–29), cortical maps and plasticity windows (41–42), stress and sleep (44–45), sensation (51–55), interoception and circadian (56–59), skill/training/ageing (61–65), reconsolidation, attention and multitasking, habit (66–68), interventions and brain training (69–70). Overlaps that do occur are explicit continuations: lesson 73 extends the critical-period material of lesson 63 to the extracellular matrix, lesson 74 extends lesson 65's measurement decision to a two-sided literature dispute, and lesson 75 places microglial pruning against the developmental wiring of lesson 42.

## Topic list

Unit 1 (lesson IDs 71–75)

| ID | Topic |
|---|---|
| 71 | Dendrites compute: nonlinear integration inside a single neuron — the textbook linear baseline (50 mV NMJ vs 1 mV CNS EPSP, passive summation), NMDA-receptor-dependent regenerative events, plateau amplitudes of 10–20 mV lasting 200–500 ms, attenuation, input clustering (~10 clustered vs ~20 distributed inputs), and the measured/modelled/argued separation including an apical-amplification hypothesis paper read as a proposal |
| 72 | Astrocytes at the tripartite synapse — calcium microdomains vs soma-wide events, indicator dependence (GCaMP3 0.09±0.01 vs GCaMP6f 0.21±0.02 deviation statistic), the dnSNARE specificity challenge (leaky GFAP-driven transgene, second leaky line), 20–30% reported modulation versus artifact size, and what a release claim needs |
| 73 | Perineuronal nets and the extracellular matrix — hyaluronan, tenascins, four lecticans, aggrecan essential while three of four tested lecticans are dispensable for WFA staining, chondroitinase ABC's blindness to sulfation, and the dose arithmetic of adult ocular dominance plasticity (small reversible shifts after hours vs 582–728 h of clinical-scale patching) |
| 74 | Adult hippocampal neurogenesis — two 2018 papers with opposite answers, the DCX/PSA-NCAM identification dispute, the sub-5-hour postmortem interval control with positive signal elsewhere in the same tissue, fixation and RNA trade-offs, and the two-to-three-orders-of-magnitude gap between the daily-addition estimate and adult densities |
| 75 | Microglia and synapse elimination — engulfment at the peak of the mouse retinogeniculate pruning window, dependence on activity and on CR3/C3, input-specific and negative results from the mouse genetic literature, the neuromuscular-junction competition account as a non-immune comparator, and the species/timescale/measurement gaps in human adolescent-pruning claims |

Unit 2 (lesson IDs 76–80)

| ID | Topic |
|---|---|
| 76 | Causal tools — optogenetics and chemogenetics, the artifact taxonomy (protein expression, heat and light, ion conduction, network-level effects), the quantified heating relationship (0.2–2 °C over 3–30 mW, ≈0.067 °C/mW; Q10 consequences), CNO's failure to cross the blood-brain barrier and its conversion to clozapine (10 mg/kg CNO ≈ 0.1 mg/kg clozapine, ~2% conversion), and the control suite each tool requires |
| 77 | Reading spikes — detection, feature extraction, clustering and validation; refractory logic vs separation metrics vs stability; the nonlinear ISIv-to-FDR relation with predicted median FDRs of 3.1–50% in public mouse data; a Poisson illustration of rate-dependent violation counts; and ultra-high-density probes trading span for density with an up-to-threefold yield change |
| 78 | Human genetics as evidence — the 5×10⁻⁸ threshold as a multiplicity correction, effect sizes and polygenicity, heritability of brain morphology (60–80%) versus function (~40%), polygenic-score prediction failing at the individual level, sample-size projections (≈8M for cortical surface area, >20M for depression), and the three Mendelian randomization assumptions |
| 79 | Computational models as evidence — encoding vs decoding claims, generalisation levels, the feature fallacy, inferential model comparison and the expected-maximum cost of selection, precision of accuracy estimates, brain-to-network correspondence levels and the absence of settled benchmarking standards |
| 80 | Capstone: designing a study that could actually refute a circuit claim — the eight-step protocol (decompose, measure with reliability, manipulate both directions, control with artifact magnitudes, power for a stated minimum effect, pre-specify with multiplicity, write the interpretation ladder, report the descriptive statistics), worked on a projection claim and contrasted with a human design |

## Assessment IDs and namespace

- Unit 1: `uq-71-80-a` … `uq-71-80-e` (review lessons 71–75)
- Unit 2: `uq-71-80-f` … `uq-71-80-j` (review lessons 76–79, with cross-references)
- Level: `lq-71-80-a` … `lq-71-80-l` (each references two or more lesson IDs)

**Deviation from the brief's wording, stated openly.** The brief said `uq-71-80-a` … `uq-71-80-e` *per unit*. Two units cannot both own those five IDs, and `attachCoursePacks` rejects duplicate question IDs outright, so unit 2 uses the `f`–`j` block, exactly as the published 41–50 and 61–70 packs do. Question ID uniqueness was preferred over a literal reading that would have failed validation.

All 22 IDs are unique. Answers, distractors and prompts are pairwise distinct within each set; no answer equals its own distractor; answers and distractors are mutually disjoint within each set (checked in code). Level questions are longer than unit quizzes in both senses: 12 questions, mean 320 words of prompt+answer+distractor+correction versus 183 for unit items on the same measure (mean prompt+correction was 226.7 vs 183.8 words).

`reviewLessonIds` used: 71–80 within this pack plus published **21, 28, 29, 30, 42, 49, 63, 65, 69**. All resolve. The repository base catalog does expose lessons **01–20** (generated in `src/lib/programs.ts` from `src/lib/sciences.ts`-style rows), so references below 21 would also have been valid; I kept to 21+ for safety since I did not read those base lessons' content and did not want to cite material I had not seen.

## Instructional word counts (computed in code)

Counted as `explanation` + `example` + the six `depth` fields, whitespace-separated tokens, excluding title, optional prompt, readings and visual text — the contract's floor formula, and the same formula the validator applies.

| ID | Words | | ID | Words |
|---|---:|---|---|---:|
| 71 | 3,227 | | 76 | 3,159 |
| 72 | 2,706 | | 77 | 3,352 |
| 73 | 2,837 | | 78 | 3,283 |
| 74 | 3,201 | | 79 | 3,324 |
| 75 | 3,089 | | 80 | 3,899 |

**Total 32,077 instructional words. Minimum 2,706, maximum 3,899, mean 3,207.7** — every lesson is more than four times the 600-word floor. The validator's own count agrees exactly with the Python count. The 10 unit questions contribute 2,607 words and the 12 level questions 3,844 words, giving 38,528 words of assessed content in total.

Anti-boilerplate: an 8-word shingle comparison across the ten `depth.mechanism` fields found **zero** shared shingles between any pair of lessons. A 12-word shingle comparison across the whole instructional text of all ten lessons found **only** the deliberately repeated device-sentence "Objective: by the end of this lesson you should be able to …", which every lesson opens with (the same convention the 61–70 pack used). Two substantive duplicates found on the first pass — a shared attenuation formula and a shared heating figure, both between lesson 80 and an earlier lesson — were rewritten in lesson 80 and now return no overlap. A 10-word shingle comparison found **zero** overlap between any quiz prompt and any lesson's optional retrieval prompt, and zero between quiz prompts.

## Validation actually executed

1. **JSON parse** — the file on disk was re-read and parsed after every writing step; `subject` is `neuroscience`; one level; two units; ten lessons with IDs exactly `71`–`80`; 10 unit questions; 12 level questions; 41 readings; 41 unique URLs.
2. **The project's real validator, not a re-implementation** — a scratch harness held outside the repository (`n7180-check.mts`) imported the actual `attachCoursePacks` from `src/lib/course-pack.ts` and the real base catalog `basePrograms` from `src/lib/programs.ts` (which exposes neuroscience topics 01–20), then attached the five published neuroscience packs followed by this one. Result: **`attach: PASS`**; 8 levels after attach (2 base + 5 published + 1 new); the new level's topics are exactly `71`–`80`; two unit definitions carrying 5 lessons and 5 questions each; 12 assessment questions; and word counts identical to the Python figures (71: 3,227 … 80: 3,899; total 32,077). Re-attaching the same pack set was correctly rejected (`duplicate or invalid lesson ID 21`), confirming the duplicate guard is live. Run with `npx tsx` from the repository root.
3. **Independent Python invariant harness, 0 errors** — one level; two units; five lessons per unit; lesson IDs exactly 71–80 and unique; every required lesson key present; all six depth fields present and non-empty; every lesson ≥600 words; no `russianItems` key; every reading `https://` with a title and a note longer than 80 characters; every visual with a title, a description and ≥5 steps (actual 7–8); 5 unit questions per unit; 12 level questions; 22 unique question IDs; no answer equal to its own distractor; distinct answers, distinct distractors and no answer/distractor cross-overlap within each set; every `reviewLessonIds` entry resolving to a valid ID in this pack or the published course.

## Source verification results

All 41 reading entries were fetched over HTTPS with a browser user-agent (`Chrome/124` on macOS) and the retrieved **body was inspected**, not merely the status code: for each URL the HTML was saved, converted to text, and the document title checked against the intended source. Every cited section and every figure used in a lesson was then read out of that saved text.

- **41/41 HTTP 200 with substantive bodies** (bodies 10 KB–943 KB; the largest are the eLife and Nature-family articles).
- Composition: 39 PMC full-text articles, 2 open-access UTHealth *Neuroscience Online* chapter pages (§6.3/§6.4 temporal and spatial summation; §9.17 neuronal survival/synapse elimination). 41 readings, 41 distinct URLs, no URL used twice.
- **Bot-wall experience, disclosed in full.** PMC is rate-limited, not uniformly blocked. A first verification pass that fired all 41 requests back-to-back returned a "Checking your browser - reCAPTCHA" interstitial for **12 URLs** (PMC5743236, PMC10473688, PMC5505787, PMC7615637, PMC7064332, PMC8675430, PMC6705607, PMC11576090, PMC10604784, PMC5856500, PMC9380892, PMC9351632), each with a ~20 KB body. Every one of those 12 returned its full article on the **first retry after a 6-second pause**, with matching titles and full-size bodies. Full text for all 12 had also been retrieved and read earlier in the session (byte sizes recorded then: 272,755 / 390,052 / 343,155 / 230,488 / 247,475 / 225,678 / 244,981 / 483,774 / 249,417 / 196,972 / 117,552 / 396,021). So: no citation rests on an interstitial page, and no quotation or figure was written from a page I did not read.
- **URLs that could not be read and were therefore NOT cited** (recorded so the parent can disclose rather than imply full coverage):
  - `https://learnmem.cshlp.org/content/22/4/232.full` — HTTP 403, Cloudflare "Just a moment" challenge. The same paper was located on PMC and cited there (PMC4371169).
  - `https://elifesciences.org/articles/90046` — HTTP 406, refused to the scripted client.
  - `https://pmc.ncbi.nlm.nih.gov/articles/PMC5695788` (power in fMRI) — returned the reCAPTCHA interstitial on the attempt and was dropped rather than retried to exhaustion.
  - `https://pmc.ncbi.nlm.nih.gov/articles/PMC3685413` — resolved, but to an unrelated oncology paper ("SF3B1 and Other Novel Cancer Genes in Chronic Lymphocytic Leukemia"), i.e. the ID I guessed for the Button "power failure" paper is wrong. The intended article has no verified open-access copy here, so **no power-failure citation appears in this pack**; the power arithmetic in lessons 76 and 80 is computed by me and labelled as a normal approximation, not attributed to that paper.
  - `https://nba.uth.tmc.edu/neuroscience/index.html` — HTTP 404; chapters were located directly instead.
- **Preprint disclosure:** PMC10473688 (used in lesson 77) is a bioRxiv preprint, not a peer-reviewed article. The lesson says so in the text and the reading note says "treat the figures as provisional".
- **Vintage/status disclosures:** the Sloan & Barres gliotransmission item is a preview commentary, not a primary study (stated in lesson 72 and its reading note); the Lima & Gomes-Leal item is an advocacy commentary (stated); the Picciotto item is a two-page journal editorial (stated); the pre-2019 optogenetics and 2012 microglial sources are dated in the lesson text.

## Arithmetic checks (all computed in code during authoring; values as printed by the tool)

Lesson 71
- NMJ 50 mV ÷ CNS 1 mV = **50×**; plateau 10–20 mV ÷ unitary 1 mV = **10×–20×**; 200–500 ms ÷ 10 ms EPSP = **20×–50×** (÷ 20 ms = 10×–25×).
- Attenuation illustration: 10/30 = **33.3%** and 20/30 = **66.7%**, i.e. one third to two thirds of a local signal lost (labelled constructed).
- Threshold arithmetic: −65 mV rest to −50 mV threshold = **15 mV**, ÷ 1 mV unitary = **15 coincident unitary EPSPs** (labelled a lower bound).
- Clustered vs distributed input requirement: 20/10 = **2×**.

Lesson 72
- Indicator statistic ratio: 0.21 ÷ 0.09 = **2.33** (stated in the lesson as about 2.3 times larger).
- Reported gliotransmission modulation range 20–30% → midpoint **25%**, compared with artifacts of similar size.

Lesson 73
- Lectican knockouts with largely normal PNNs: 3 of 4 = **75%**.
- Clinical-scale patching: 40–50% of 16 waking hours = **6.4–8 h/day**; × 91 days = **582.4–728 h**; ÷ a 3 h acute session = **194.1×–242.7×** (stated as 194–243).

Lesson 74
- Density falls: 1,618 → 292.9 = **81.9%**; 292.9 → 12.4 = **95.8%**; 1,618 → 12.4 = **99.2%**, a factor of **130.5**.
- Cross-anchor gap: 700 ÷ 7 = **100**; 700 ÷ 1 = **700** (stated as two to three orders of magnitude).
- Sample sizes 59 vs 28 = **2.11×** (not used in the lesson; recorded for completeness).

Lesson 75
- Mouse window (~10 postnatal days) vs a ten-year human span (3,650 days) = **365×** (labelled a scaling illustration).
- Power by normal approximation, two-group, α = 0.05 two-sided: n = 3/group → **9%** at d = 0.5, **23%** at d = 1.0, **69%** at d = 2.0; n = 17/group → **83%** at d = 1.0. Labelled an approximation, and explicitly *not* used to dismiss the reported significant result.

Lesson 76
- Heating per milliwatt: 0.2 ÷ 3 mW = **0.0667** and 2 ÷ 30 mW = **0.0667 °C/mW** — the two published endpoints of the range scale identically.
- Temperature coefficient 2: +2 °C → 2^0.2 = **1.149** (≈15%); +1 °C → 2^0.1 = **1.072** (≈7%); +0.2 °C → **1.014** (≈1.4%).
- Dose equivalence: 10 mg/kg ÷ 0.1 mg/kg = **100×**; 10 mg/kg × 2% conversion = **0.2 mg/kg** clozapine-equivalent, about **2×** the 0.1 mg/kg dose that produced the effect alone; 0.1 ÷ 0.02 = **5 mg/kg** CNO would be the equivalent-matched dose.

Lesson 77
- FDR span: 50 ÷ 3.1 = **16.1×**.
- At a 20% FDR, 1,000 spikes → **200** misassigned.
- Poisson illustration, 600 s observation, short-interval window 1.5 ms: r = 1 Hz → **0.9** expected short intervals (0.15% of spikes); r = 10 Hz → **89.3** (1.49%); r = 50 Hz → **2,167.7** (7.23%). Labelled an illustration of the arithmetic, not a model of real neurons.
- Precision: 0.70 accuracy with n = 20 → ±**0.201**; n = 100 → ±**0.090**; n = 1,000 → ±**0.028**.

Lesson 78
- Genome-wide threshold: 1,000,000 tests × 5×10⁻⁸ = **0.05** expected false positives.
- Heritability contrast: 60/40 = **1.5×** and 80/40 = **2×**.
- Variance explained by correlation: r = 0.1 → **1%**; 0.2 → **4%**; 0.3 → **9%**; 0.5 → **25%**.
- Sample-size multipliers against an illustrative 50,000-participant cohort: 8×10⁶ ÷ 5×10⁴ = **160×**; 2×10⁷ ÷ 5×10⁴ = **400×**.
- MR ratio example: 0.01 ÷ 0.05 = **0.2** (labelled illustrative).

Lesson 79
- Expected maximum of k standard normal draws: k = 40 → ≈**2.26** SD; k = 100 → ≈**2.51**; k = 1,000 → ≈**3.24** (used for the selection-inflation argument).
- Accuracy confidence intervals as above; correlations squared: 0.3 → **9%**, 0.5 → **25%**, 0.7 → **49%**.

Lesson 80
- Animals per group for 80% power (normal approximation, α = 0.05 two-sided): d = 0.2 → **393**; 0.3 → **175**; 0.5 → **63**; 0.8 → **25**; 1.0 → **16**.
- Power of a 40-per-group design: d = 0.2 → **14%**; d = 0.5 → **61%**.
- Multiplicity: ten independent tests at α = 0.05 → family-wise error **0.4013** (fourteen tests, used in the level question, is above 0.5).
- Reliability attenuation: √0.5 = **0.707** → 0.4 × 0.707 = **0.283**; √0.7 = **0.837** → 0.4 × 0.837 = **0.335**.

Constructed numbers are labelled as constructed or illustrative in the lesson text (the attenuation illustration in 71 and 80, the 365× timescale scaling in 75, the MR ratio in 78, the Poisson arithmetic in 77, and the power figures in 80, which are stated as a normal approximation rather than as exact t-test power). Every source-backed figure carries its source and the reading note that supports it. No quotation is invented; the only near-quotations are short phrases checked against the saved page text (for example the peripheral-heating range, the "strictly a passive property of nerve cells" phrase from the UTHealth chapter, and the "eat-me/find-me/do-not-eat" vocabulary).

## Science-accuracy compliance

- **Education, not diagnosis or treatment.** Lesson 73 states that treatment decisions for a visual disorder belong with an ophthalmologist or orthoptist and that the reviewed work is research; lesson 74 treats the clinical material as research context; lesson 75 separates mechanism from disease implication and refuses the therapeutic inference in the level question; lesson 80 closes with an explicit scope note. No prescribing, dosing or clinical guidance appears anywhere.
- **No deterministic single-neurotransmitter explanations.** The level deliberately avoids dopamine-as-explanation (already treated at level 43); signalling molecules appear as one contributor within circuit-level accounts — the CR3/C3 pathway in lesson 75 is described as one required pathway among several with documented input-specific and negative results; the chemogenetic ligand discussion is pharmacological, not behavioural.
- **Robust versus preliminary is stated, not implied.** Each lesson tags its evidence: measured in a preparation, supported in a model system, contested, argued framework, or preprint. Lesson 71 explicitly labels an apical-amplification consciousness paper as a theoretical proposal that measures no consciousness; lesson 74 refuses to declare a winner in a live dispute and instead names the design that would settle it; lesson 75 labels human neurodevelopmental involvement as an implication of a mouse model; lesson 77 labels its yield source as an unreviewed preprint.
- **Contested findings are shown as contested with the disagreement visible:** gliotransmission (Araque-group reviews read against the dnSNARE specificity critique and the indicator comparison), the plasticity brake (digestion evidence read against the knockout redundancy), adult neurogenesis (Sorrells, Paredes, Tartt, Lima and a 2025 review all present, with the reply letters' arguments in their own terms), microglial pruning (positive genetic results against input-specific and negative results), and the evidential status of brain–network correspondence (a review that states the field has few settled standards).

## Unresolved limitations

1. **Not registered for publication.** `src/lib/course-pack-registry.ts` was intentionally not edited (contract: one worker, one pack plus handoff). The parent must import `neuroscience-71-80.json` after `neuroscience-61-70.json` in registry order for the level to appear on the site.
2. **No production verification.** Nothing was deployed and no server was started, per the brief. No route, renderer, progress behaviour or audio control was exercised; the standing site requirements are parent-side integration concerns.
3. **PMC throttling makes verification attempts flaky by default.** The same 41 URLs that all returned 200 with full bodies when spaced out returned 12 interstitials when requested in a single burst. A future re-check that reports failures may simply have been rate-limited; re-test with pauses before concluding a link is dead.
4. **One cited source is a preprint** (PMC10473688, lesson 77) and one is a commentary rather than a primary study (PMC4433290, lesson 72). Both are labelled as such in the lesson text and the reading notes, but a parent who wants only peer-reviewed primary sources should replace the preprint with a peer-reviewed probe-technology paper.
5. **The intended power-failure citation is missing.** The Button et al. "power failure" review has no verified open-access copy accessible from this environment, so the power arithmetic is stated as a computed normal approximation in my own words rather than attributed. If the parent can supply a verified copy, adding it as a reading in lesson 80 would strengthen the capstone.
6. **Some numbers are intentionally constructed illustrations**, labelled in the text: the attenuation percentages in lesson 71, the timescale scaling in lesson 75, the Poisson short-interval counts in lesson 77, the MR ratio and the 50,000-participant comparator in lesson 78, and the power figures in lessons 76 and 80 (normal approximation). They are teaching arithmetic, not measurements.
7. **No independent subject-matter review.** The pack was authored and checked by one worker. Structural validity is proven by the real validator; scientific accuracy is not. A domain reviewer should spot-check the contested-literature summaries — lessons 72, 74 and 75 in particular — where the balance of emphasis is a judgement.
8. **Word counts exclude readings and visuals**, per the contract's floor formula, so the reported totals understate total page text.
9. **No `russianItems`, no audio, no video:** correct for this subject, and it means the level provides labelled step sequences as its only visual support.
10. **The namespace instruction in the brief was internally impossible** (two units cannot share `uq-71-80-a` … `uq-71-80-e`); I used the `a`–`e` / `f`–`j` split that the published continuation packs use and that the validator requires. If the parent intended a different scheme, the ten unit-question IDs are the only thing that needs changing.
