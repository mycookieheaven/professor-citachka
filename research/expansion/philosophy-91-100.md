# Philosophy level 91-100 — authoring handoff

## Deliverables

- Course pack: `src/lib/course-packs/staged/philosophy-91-100.json` (189126 bytes, valid JSON)
- This handoff: `research/expansion/philosophy-91-100.md`

No other file was created or modified. No server was started, nothing was deployed, no browser automation was used, and no test was altered.

## Structure

- Subject: `philosophy`
- Level title: *Validity, evidence, and fair evaluation: soundness, the fallacies that persuade, and the limits of what an argument can establish*
- Units: 2. Lessons: 10 (IDs 91-100). Unit questions: 5 + 5. Level questions: 12.
- Unit 1, *Validity, soundness, and the fallacies that actually persuade*: lessons 91-95, questions `uq-91-100-a` … `-e`
- Unit 2, *Evidence, borderline cases, and reconstructing an argument fairly*: lessons 96-100, questions `uq-91-100-f` … `-j`
- Level questions: `lq-91-100-a` … `-l`
- `russianItems` omitted throughout (non-Russian subject, per contract).

## Topics

| Lesson | Topic | Instr. words | +Q&A words | Readings |
|---|---|---|---|---|
| 91 | Valid versus sound: the distinction, and how it is used to mislead | 1699 | 1838 | 3 |
| 92 | The fallacies that are actually common, and the long lists that are not | 1716 | 1875 | 3 |
| 93 | Thought experiments: what they can and cannot establish | 1744 | 1887 | 2 |
| 94 | Other minds: what inference from behaviour can and cannot reach | 1857 | 2018 | 2 |
| 95 | Testimony and trust: is believing what you are told rational by default? | 1766 | 1886 | 3 |
| 96 | The ethics of belief: when is evidence owed, and to whom? | 1780 | 1928 | 4 |
| 97 | Vagueness, borderline cases, and the sorites paradox | 1888 | 2051 | 2 |
| 98 | Causation and correlation: what a probabilistic association can and cannot license | 1954 | 2109 | 3 |
| 99 | Understanding versus prediction: what an explanation adds | 1683 | 1806 | 2 |
| 100 | Capstone: reconstructing an opponent's argument in its strongest form | 1968 | 2125 | 3 |

1. 91 validity vs soundness; enthymeme compression; the two-gate test
2. 92 the Copi/Hamblin/Finocchiaro lineage; appearance condition vs frequency; common formal errors and empirically documented ones (Wason 1960, Tversky & Kahneman); the fallacy fallacy
3. 93 thought experiments: Duhem's objection and Buzzoni's contestation of it; Norton's argument view; Brown's intuition-based account with the Galileo cannonball/musket-ball reductio; Kuhn's conceptual constructivism; Mach's experimentalism
4. 94 other minds: Mill's argument from analogy; best-explanation (Pargetter, Hyslop, Chalmers); Wittgenstein's criteria/symptom contrast; the conceptual problem; theory-theory vs simulation
5. 95 testimony: Reductionism/Positive Reasons (Hume) vs Non-Reductionism/Presumptive Right (Reid), defeaters, authoritative testimony and preemptive vs non-preemptive accounts
6. 96 the ethics of belief: Clifford's shipowner and the outcome-independent verdict vs James's forced/living/momentous genuine option; prudential vs moral vs epistemic norms; strict vs moderate evidentialism
7. 97 sorites: the three conditions, tolerance (Wright), epistemicism (Chrysippus, Cargile, Sorensen, Williamson), semantic approaches, higher-order vagueness, vagueness vs ambiguity vs generality
8. 98 causation vs correlation: Hume's constant conjunction; probability raising (Reichenbach, Suppes, Cartwright vs Skyrms, Eells); screening off; the Common Cause Principle and the conjunctive fork; Simpson's paradox; interventions
9. 99 understanding vs prediction: Hempel's DN model and nomic expectability; the flagpole/shadow asymmetry as a counterexample to sufficiency; Salmon's causal-mechanical and Kitcher's unificationist alternatives; purely phenomenal models and intelligibility
10. 100 capstone: steelmanning; the straw man as ignoratio elenchi; Davidson's principle of charity; adversarial vs cooperative argumentation and argumentative injustice

## Computed word counts (computed in code, not estimated)

- **Total instructional words across 10 lessons (explanation + example + the six `depth` fields): 18055**
- Same plus lesson-level question/answer/distractor/correction: 19523
- Per-lesson range: 1683-1968 words. Floor required: 600. No lesson is close to the floor.
- Unit-question prompt text: 410 words. Level-question prompt text: 585 words.

## Invariants exercised

- `json.loads` parses the file (exercised).
- Lesson count 10; unit question count 5 and 5; level question count 12 (exercised).
- 32 answer strings, 32 unique; 32 distractor strings, 32 unique; zero overlap between the answer set and the distractor set (exercised).
- 22 question IDs (`uq-91-100-a`..`-j`, `lq-91-100-a`..`-l`), all unique (exercised).
- Every `reviewLessonIds` entry is in 01-100 (exercised). References used: 87, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100. No reference to a lesson above 100.
- Every lesson has `readings` with an https URL and a `visual` with 6-9 labelled steps; no lesson carries `russianItems`.

## Source verification

Method: each candidate URL was fetched with `curl` (HTTP status recorded) and the page body was text-extracted and searched for the exact section headings and key attributions cited in the reading note. A page was rejected if the body was the SEP "Not Yet Available" placeholder, a "Document Retired" notice, a 404 page, or a stub.

- **25 distinct URLs cited across the 10 lessons; all 25 returned HTTP 200 and served a real article body (no placeholder, no retirement notice, no 404 page).**
- 94 section-heading/attribution keyword checks run against the fetched bodies; 93 matched exactly and 1 matched only after markup normalisation (SEP renders the heading "1.2 The ethics of belief before the 19 th -century" with a space inside the ordinal), which is a rendering artefact rather than a missing section.

### Sources rejected during verification (recorded per requirement)

| Candidate | Result | Replacement used |
|---|---|---|
| `plato.stanford.edu/entries/scientific-explanation/` | **HTTP 200 but body is a "Document Retired" notice**, stating the entry was revised and republished under a new title | `plato.stanford.edu/entries/scientific-explanation-20th/` (lesson 99) |
| `plato.stanford.edu/entries/principle-charity/` | HTTP 404, no such entry | SEP *Donald Davidson* §3.3 Radical Interpretation (lesson 100) |
| `plato.stanford.edu/entries/scientific-understanding/` | HTTP 404 | mechanism material in SEP *Mechanisms in Science* |
| `plato.stanford.edu/entries/pragmatic-belief/` | HTTP 404 | SEP *The Ethics of Belief* §6.1 |
| `plato.stanford.edu/entries/causal-explanation/` | HTTP 404 | SEP *20th Century Theories of Scientific Explanation* §4 |
| `plato.stanford.edu/entries/theory-of-mind/` | HTTP 404 | SEP *Other Minds* §3.1 |
| `iep.utm.edu/othermin/` | HTTP 404 | SEP *Other Minds* |
| `iep.utm.edu/testimony/` | HTTP 404 | `iep.utm.edu/ep-testi/` |
| `iep.utm.edu/vagueness/` | HTTP 404 | SEP *Vagueness* |
| `informationphilosopher.com/.../clifford/ethics_of_belief.html` | HTTP 404 | Wikisource full text of Clifford 1877 |
| `iep.utm.edu/sci-explanation/` | HTTP 200 but only ~7.5k characters, a stub with none of the expected content | not used |

Note on the placeholder hazard: no SEP page in this sweep returned the literal "Not Yet Available" placeholder, but the closely related "Document Retired" 200 response was found, which is the same class of failure (status 200, no usable entry body). Both were caught by body inspection rather than by status code.

### Quotation discipline

No quotation was invented. Two short verbatim quotations are used and each was confirmed character-for-character in the fetched page text:

- Clifford: "it is wrong always, everywhere, and for anyone, to believe anything upon insufficient evidence." (Wikisource, retrieved this session)
- James: "Our passional nature not only lawfully may, but must, decide an option between propositions, whenever it is a genuine option that cannot by its nature be decided on intellectual grounds." (Project Gutenberg e-text 26659, retrieved this session)

All other source-derived content is paraphrase with a section-specific reading direction, and contested positions are presented as contested and attributed to named authors (for example, Buzzoni's contestation of the standard reading of Duhem, Hyslop against Pargetter, Norton against Brown).

## Arithmetic checks

Only lesson 98 contains numerical work. The Simpson's-paradox table in lesson 98 was computed with `fractions.Fraction` and verified:

- rural stratum: non-smokers 2,000 with 100 cancers = 0.0500; smokers 8,000 with 800 cancers = 0.1000; stratum total 900/10,000 = 0.0900
- urban stratum: non-smokers 8,000 with 2,400 cancers = 0.3000; smokers 2,000 with 700 cancers = 0.3500; stratum total 3,100/10,000 = 0.3100
- pooled: non-smokers 2,500/10,000 = 0.2500; smokers 1,500/10,000 = 0.1500 — reversal confirmed (0.15 < 0.25) while smoking raises risk in both strata
- pooled population 20,000 = 10,000 + 10,000; all stratum counts sum to the pooled counts (checked)

These figures reproduce the illustration in SEP *Probabilistic Causation* §2.4, whose shape the lesson credits to that section.

## Unresolved limitations

1. Section numbering in SEP entries is not stable across revisions. The section numbers and titles in the reading notes were verified against the live pages on 2026-09-27; a future revision can renumber them. The titles, not the bare numbers, are the durable part of each reading direction.
2. Lesson 94's second reading is the SEP entry on analogy rather than an entry on simulation theory, because no SEP entry exists at the natural URL for the latter (`theory-of-mind` returned 404). The simulation/theory-theory material is covered by SEP *Other Minds* §3.1 only.
3. Lesson 92 cites the Wason task, base-rate neglect, and the conjunction error as documented empirical findings and names Wason and Tversky and Kahneman as their sources. Those are well-established results but were not fetched from primary papers in this batch; they are presented as background rather than as verified citations. If the parent wants per-claim citations for them, they need a separate retrieval pass.
4. One unit question (`uq-91-100-j`, on the straw man) reviews lesson 92 as well as lesson 100, so a learner taking that quiz draws on the other unit's material. This is permitted by the contract (all review IDs are within 01-100) but is worth knowing before the parent wires quiz-to-unit gating.
5. Coverage breadth: the level deliberately stops at the concepts named in the brief. Bayesian confirmation theory, formal decision theory, and epistemology of disagreement (beyond the higher-order evidence already covered in lesson 89) were not added, to avoid duplicating lessons 71-90.
6. This worker validated the JSON and the invariants listed above only. Application-level integration, rendering of `visual.steps`, route wiring, and end-to-end TDD remain the parent's responsibility; nothing here asserts that the site serves these lessons.
