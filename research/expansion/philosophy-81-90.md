# Handoff — Philosophy level, lessons 81–90

## Exact paths written (only these two)
- `src/lib/course-packs/staged/philosophy-81-90.json` — the authored level, valid JSON (186,367 bytes; written, re-read, re-parsed successfully by `build.py` and independently re-checked by `verify.py`).
- `research/expansion/philosophy-81-90.md` — this note.

No other file in the repository was created or edited. `git status --porcelain` shows `src/lib/course-packs/staged/` as untracked (shared with other workers' staged packs) and no modified tracked files from this task. The build scripts and downloaded source files live outside the repo in the session scratch directory (`.../cache/scratch/p81/`, `.../cache/scratch/src/`). No registry, `programs.ts`, test, catalog, existing pack, or audit output was touched. Nothing was deployed and no server or browser automation was run.

## Counts
- Levels: 1. Units: 2. Lessons: **10** (IDs `81`–`90`, five per unit).
- Unit quizzes: **5** questions each (10 total) — `uq-81-90-a`…`-e` (unit 1), `uq-81-90-f`…`-j` (unit 2).
- Level questions: **12** cumulative — `lq-81-90-a`…`-l`.
- Readings: **36** entries across 10 lessons (3–5 each), on **34 unique URLs** (two SEP entries are reused deliberately in two lessons each, with different section pointers).
- Visuals: 10, each with 6–7 labelled steps.
- `russianItems`: deliberately absent from every lesson (not applicable to this subject).
- Question-ID collision check: every ID is namespaced in the `81-90` range and the pattern was asserted in code (`^(uq|lq)-81-90-[a-l]$`).

## Topic list
**Level — Persons, reasons, and legitimate power: consciousness, responsibility, desert, and epistemic justice**

Unit 1 — *Persons, minds, and the reach of responsibility*
- L81 Narrative identity: is a life story what makes you the same self? (Schechtman’s self-constitution view and the reality constraint; Ricoeur’s idem/ipse; MacIntyre and Taylor; Galen Strawson’s episodic counterexample)
- L82 The hard problem of consciousness: statement, challenge, and the illusionist reply (easy/hard distinction; Chalmers’s extra ingredient; Russellian monism; Frankish/Dennett illusionism; phenomenal-concept strategy)
- L83 Responsibility as a practice: reactive attitudes, excuses, and standing (P. F. Strawson; participant vs objective stance; excuse vs exemption; Watson’s attributability/accountability; standing to blame)
- L84 Manipulation and personal history (Pereboom’s four-case argument; bypassing; soft-line vs hard-line replies; Mele’s zygote argument; hard incompatibilism)
- L85 Normative reasons and rationality (motivating vs normative reasons; Williams’s internalism and the subjective motivational set; the gin-and-tonic case; conditional fallacy; wrong kind of reason; structural vs substantive rationality)

Unit 2 — *Desert, testimony, and the limits of legitimate authority*
- L86 Desert, luck, and equality (desert bases; Rawls’s metaphysical argument vs the epistemological/pragmatic argument; Dworkin’s equality of resources; option vs brute luck; Anderson’s abandonment and option-set objections; relational equality)
- L87 Epistemic injustice: credibility, interpretation, and whose testimony counts (Fricker’s testimonial and hermeneutical injustice and the virtue of testimonial justice; Dotson’s smothering and contributory injustice; Medina’s resistance; Mills’s epistemologies of ignorance)
- L88 Legitimacy and the limits of authority (legitimacy vs justice; Raz’s service conception, dependence/preemption/normal justification; neutrality vs perfectionism; Waldron on judicial review; emergency powers; the demos problem)
- L89 Working a genuinely unsettled question (higher-order evidence; equal weight, steadfast, justificationist, total evidence views of peer disagreement; rebutting vs undercutting defeaters; Rawlsian reflective equilibrium and its failure modes)
- L90 Capstone: opaque risk prediction and the limits of state authority (algorithmic decision support; the Kleinberg–Mullainathan–Raghavan trade-off; contestability; the responsibility gap; legitimacy scope test)

Continuity and non-repetition relative to lessons 61–80: L81 pushes past L74 (persistence conditions) to the descriptive/constitutive dispute about narrativity; L82 works the structure of the hard problem rather than re-mapping dualism/physicalism (L76); L83 and L84 extend L75 from the metaphysical leeway/sourcehood question to the practice of responsibility and to manipulation history; L86 is the desert-and-luck axis, not a re-teach of Rawls/Nozick/capabilities (L66–L68); L88 is about the *limits* of legitimate authority and the institutional decision-maker, not about authority’s existence (L61, L63, L78); L89/L90 supply the “live question” method that L79–L80 set up but did not apply.

## Total instructional words (computed in code)
Definition used, matching the contract: `explanation + example + depth.{definitions, mechanism, secondExample, mistake, application, summary}` (the eight fields named in the brief).

**Total instructional words: 18,560**

| Lesson | Words | Lesson | Words |
|---|---|---|---|
| 81 | 1,614 | 86 | 1,862 |
| 82 | 1,731 | 87 | 1,897 |
| 83 | 1,822 | 88 | 1,962 |
| 84 | 1,705 | 89 | 1,930 |
| 85 | 1,910 | 90 | 2,127 |

Min 1,614 / max 2,127; floor check for ≥600 passed for every lesson with a large margin. Counting **all** lesson and question text (adding retrieval Q/A/correction, reading titles and notes, visual titles, descriptions and steps, and the 22 quiz items) gives **26,689** words. Counts were produced with `re.findall(r"\S+", text)` in `build.py` / `verify.py`.

## Automated checks run (0 errors)
JSON parses; re-read and re-parsed after write. Lesson IDs exactly `81`–`90`; every lesson carries all required keys including all six depth fields; every lesson ≥600 instructional words; every reading has non-empty `title`/`url`/`note` and an `https://` URL; every visual has `title`, `description`, and ≥3 steps; 5 questions per unit and 12 level questions; question IDs unique and namespaced; every `reviewLessonIds` value inside `01`–`90` (values used: 75, 76, 78, 80, 81–90); all **22 answer strings pairwise distinct** and all **22 distractor strings pairwise distinct**; no answer equal to its own distractor; no `russianItems` key anywhere.

## Source verification (HTTP + content)
All 34 unique reading URLs were fetched at build time (and re-fetched afterwards by `verify.py`); **all returned 200**. Titles were read back so that no page is a placeholder: SEP’s `/entries/epistemic-injustice/` and `/entries/rationality/` were **rejected** during research precisely because they return HTTP 200 while serving a “Not Yet Available” stub, and nothing from them is cited. Content type was checked for every PDF (`%PDF` and extracted text), not just the status code.

Composition: **24 SEP entries**, **3 IEP entries**, **4 primary/authoritative texts**, **2 technical/governance items**, **1 investigative-journalism source with its methodology page**.

- SEP entries cited (all verified live, section headings read from the fetched pages): `ricoeur` (§5 Narrative Identity and the Turn to Selfhood), `memory` (§7 The Self, 7.1–7.2), `identity-ethics` (§2, §3, §6), `consciousness` (§5 The explanatory question, 5.2–5.4), `qualia` (§10 Illusionism about Qualia), `zombies` (§3–§4), `moral-responsibility` (§2.2, §3.1, §3.4, §3.8, §3.9), `incompatibilism-arguments` (§3.2 Manipulation and Design Arguments, §4 Sourcehood Arguments), `reasons-internal-external` (§1.1, §2.1, §2.4, §3.1–3.2), `practical-reason` (§3–§5), `fitting-attitude-theories` (§3.1 The Wrong Kind of Reason Problem), `desert` (§1–§3), `equality` (§3.6, §4, §6.2), `egalitarianism` (§4.2 — surveyed, not cited), `justice-distributive` (§4, §6 — surveyed), `feminism-epistemology` (§2, §9), `testimony-episprob` (§1, §5), `legitimacy` (§2.1–2.3, §3.2, §4.3), `authority` (§1.1, §1.2, §2.4–2.6), `democracy` (§3, §3.3, §4), `disagreement` (§4, §5.1–5.4), `moral-epistemology` (§5 Reflective Equilibrium), `evidence` (§1–§2), `computing-responsibility` (§1, §3), `ethics-ai` (§2.3, §2.4, §2.7).
- IEP: `epistemic-injustice` (§1, §2, §5, §6, §8), `freewill` (§2, §4, §5c), `desert` (§5a Rawls’s metaphysical argument, §5b epistemological and pragmatic arguments).
- Primary/authoritative texts (fetched, text-extracted, and read for section pointers): Chalmers, *Facing Up to the Problem of Consciousness* (author’s site; sections 2, 3, 5, 6, 7 confirmed from the PDF); P. F. Strawson, *Freedom and Resentment* (15-page university course copy); Elizabeth Anderson, *What Is the Point of Equality?* (department-hosted JSTOR scan; section titles “The Ills of Luck Egalitarianism: A Diagnosis” and “Equality in the Space of Freedom” confirmed in the extraction); Jeremy Waldron, *The Core of the Case Against Judicial Review* (61-page scan hosted on a McMaster University course page; the running head confirms Yale Law Journal 115:6, p. 1346). Galen Strawson’s *Against Narrativity* is a fourth primary text, an author copy hosted by UC San Diego’s Laboratory of Comparative Human Cognition.
- Technical/governance: Kleinberg, Mullainathan & Raghavan, *Inherent Trade-Offs in the Fair Determination of Risk Scores* (arXiv:1609.05807 — verified as that paper; note that a plausible-looking companion ID, arXiv:1706.02413, turned out to be an unrelated computer-vision paper and was discarded); NIST AI Risk Management Framework.
- Journalism: ProPublica, *Machine Bias*, plus its *How We Analyzed the COMPAS Recidivism Algorithm* methodology page. Both verified; the reading note tells the learner to read a documented criticism of the analysis because the error-rate claims were disputed by researchers who argued the tool is calibrated.

No quotation is attributed to any source. Every source is paraphrased and located by section; quotations appear only inside scare quotes as the learner’s own formulations. No video URLs are claimed, and the visuals are labelled diagram/step sequences only.

## Arithmetic checks
Computed in code (`execute_code`), results reproduced in the lesson text:
- L86 illustration. Equal 100-unit endowments; a voluntary gamble risking 60 with probability ½; expected value 0.5 × 40 + 0.5 × 100 = **70**. Equalising to the mean: (40 + 100) / 2 = 70, transfer **30**, totals conserved at **140** (70 + 70). Threshold-of-60 rule: transfer **20**, leaving 60 and 80, totals again **140**. Verified with exact fractions.
- L90 illustration. Group A: 100 members, 20 true positives; group B: 100 members, 40 true positives; a balance rule flags 30 in each group. Group A: 20 true positives + 10 false positives → false positive rate 10/80 = **12.5 %**, false negative rate 0/20 = **0 %**. Group B: 30 true positives + 10 false negatives → false positive rate 0/60 = **0 %**, false negative rate 10/40 = **25 %**. Checked with exact fractions (1/8 and 1/4).
- Both figures are labelled in the lessons as constructed illustrations, not as quotations or empirical findings.

## Unresolved limitations
- **Pereboom has no primary-source link.** The four-case argument in L84 is presented from SEP’s exposition (`incompatibilism-arguments` §3.2, `moral-responsibility` §3.9). Candidate PDFs (`joelvelasco.net` course scan, `stafforini.com`) were downloaded and either failed text extraction (image-only scan) or were hosted on low-authority personal sites, so they were not cited. The case descriptions are therefore paraphrased from an authoritative secondary source, and the lesson says so.
- **Fricker’s book is not cited directly**; L87 rests on the IEP entry, SEP’s `feminism-epistemology` §9, and named attributions in prose. No publisher-hosted open copy of *Epistemic Injustice* was verified.
- **Two cited PDFs are not on publisher sites**: the Strawson essay (Brandeis course page) and the Anderson article (Rutgers department scan beginning with a JSTOR terms page). Both are readable, but they are teaching copies with different pagination, and each reading note states this.
- **Pagination in the Anderson scan is not tied to the journal**, so section names rather than page numbers are used as pointers.
- **Waldron is one side of a live dispute and no paired reply is linked**; the reading note instructs the learner to pair it with a response but the pack names no specific reply article. L88’s treatment of judicial review is therefore an argument-map, not a balanced dossier.
- **Two empirical claims are flagged rather than evidenced**: (i) official deference to automated recommendations (“a formal human in the loop may be a signature”), and (ii) the comparative unreliability of unaided human decisions. Both are marked in L90 as claims the learner should check in the literature, since no verified source for the specific studies was cited.
- **Contested status is stated, not resolved**, at each flashpoint: the hard problem’s existence (L82), whether narrativity is constitutive or an ideal (L81), whether manipulation cases transfer to ordinary agents (L84), whether responsibility-tracking survives the regress (L86), whether the concept of epistemic injustice is over-extended (L87), and which fairness criterion a state should adopt (L90). Where a position is unsettled in the literature, the lesson says so and attributes the position to a named proponent instead of asserting it.
- **Not integrated.** This pack is staged only. The parent owns registry wiring, `programs.ts` continuation numbering, and application-level TDD; no test was modified and no claim of curriculum completion is made.
