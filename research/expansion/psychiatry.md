# Psychiatry continuation pack: authoring and verification handoff

## Delivered scope

- Owned JSON: `/Users/<user>/professor-citachka/src/lib/course-packs/psychiatry.json`
- Owned handoff: `/Users/<user>/professor-citachka/research/expansion/psychiatry.md`
- One new level: **Clinical reasoning under uncertainty: formulation, evidence, and collaborative care**.
- Two units, five substantive lessons each; stable lesson IDs **21–30** follow the **20** existing psychiatry rows verified from `src/lib/sciences.ts`.
- Unit one: **From observations to a revisable contextual formulation**.
- Unit two: **Evaluate treatment evidence and build accountable collaborative care**.
- Ten optional lesson retrieval prompts, ten separately authored unit questions, and twelve separately authored cumulative level questions. Questions are nonblocking educational checks, not evidence of professional competence.
- Ten topic-specific labeled step visuals, ten substantial practice/model-response/self-review sections, and verified readings in every lesson. These visuals are diagrams/sequences, not videos.
- **7,724 instructional words**, with every lesson above the 600-word floor. Unit one was saved as substantive completed lessons plus its questions before unit two was added; no placeholder lessons were saved.

## Lesson inventory and measured words

Counting uses Unicode word tokens with internal apostrophes/hyphens retained, across `explanation`, `example`, and exactly the six depth fields. Numeric citation markers are excluded. Titles, questions, choices, feedback, readings, and visual labels are excluded. Counts come from the final on-disk parsed JSON.

| ID | Topic | Instructional words |
|---|---|---:|
| 21 | Build a timeline that can change your hypothesis | 780 |
| 22 | Formulation as a testable map, not a persuasive story | 779 |
| 23 | Interpret symptom measures without surrendering judgment | 773 |
| 24 | Assess culture, communication, and context before interpreting behavior | 763 |
| 25 | Recognize acute change without premature psychiatric closure | 762 |
| 26 | Read treatment evidence through population, comparison, and outcome | 760 |
| 27 | Connect psychotherapy techniques to hypotheses and feedback | 774 |
| 28 | Medication evidence: separate benefit, burden, and causal attribution | 779 |
| 29 | Shared decisions require understandable options and revisable plans | 762 |
| 30 | Safety and recovery planning without false prediction | 792 |

## Pedagogy and safety boundaries

The sequence continues existing introductions to chronology, formulation, measures, mental status examination, treatment, and recovery. It adds discriminating hypotheses, evidence limits, communication access, acute-change recognition, study appraisal, mechanism-versus-outcome distinctions, multidimensional treatment review, and accountable planning. Fictional cases contrast different mechanisms and settings; tasks include explicit model responses and self-review criteria.

No learner medical details, individual diagnoses, drug selections, doses, taper schedules, or treatment instructions are included. Medication mechanisms are not used to infer deterministic chemical deficiencies. Safety content rejects false guarantees, gives urgent real-time support priority for immediate danger, and distinguishes professional assessment from educational recognition. The self-harm guidance is presented in its specific care context, not generalized into an argument against assessing safety. The delirium guidance's hospital and long-term-care population is identified. NICE is authoritative guidance for England; local law and service pathways differ.

The hypothetical evidence examples contain no invented study results or numerical effect sizes. They explicitly label their fictional status. No numerical clinical example required arithmetic. Word counts, existing-row counts, structural totals, and uniqueness checks were computed in code rather than estimated.

## Checks actually exercised

- Parsed final JSON successfully; write tool's JSON lint also passed.
- Subject exactly `psychiatry`; exactly one level and two units.
- Exactly five lessons and five unit questions per unit; exactly twelve level questions.
- Ordered lesson IDs equal strings `21` through `30`, without duplicates.
- All eight instructional fields present and nonempty; all six required depth keys present exactly.
- Every lesson exceeds 600 instructional words after excluding citation markers.
- Every lesson has a reading and at least three visual steps; no `russianItems` key.
- All 22 unit/level assessment IDs and prompts are unique; their prompts differ from optional lesson prompts and existing source text.
- All answers and distractors are distinct, including a global exact-string uniqueness check across new lesson and assessment choices.
- Every review reference resolves to a lesson in this pack.
- Every inline numbered citation resolves to a verified source also present in that lesson's reading cards.
- All five distinct reading URLs returned HTTP 200; quoted evidence fragments below were checked as literal substrings of the fetched visible text.

## Source ledger and reading map

The source IDs below are stable throughout the JSON. Reading cards identify their relevant sections and source number. This embedded ledger stays inside the two owned files rather than creating a shared research artifact. The public pages were also retrieved through the web extractor; its abbreviated output was supplemented with complete HTTP fetches.

- [1]: lessons 21, 22, 23, 27, and 28. Initial assessment (1.2), starting/reviewing/stopping treatment (1.4), and CBT/behavioral activation treatment tables (1.5–1.6). The source supports clinical guidance; pedagogical definitions and fictional causal-inference exercises are explanatory synthesis, not quoted NICE recommendations.
- [2]: lesson 24. Cultural competence and comprehensive multidisciplinary assessment (1.1 and 1.3.3).
- [3]: lesson 30. Psychosocial assessment, limits of predictive scales, needs-based care, and collaborative safety planning (1.5–1.7 and 1.11).
- [4]: lessons 26 and 29. Shared decisions, uncertainty, absolute-risk communication, and records of person-valued decisions (1.2–1.4). General study-design reasoning is educational synthesis; this guideline is not presented as the primary report of a psychotherapy trial.
- [5]: lessons 21 and 25. Recent changes, hypoactive presentations, assessment, and underlying causes (1.3, 1.6, and 1.7).

### [1] NICE — Depression in adults: treatment and management

URL: https://www.nice.org.uk/guidance/ng222/chapter/Recommendations

Verification: HTTP 200; final URL https://www.nice.org.uk/guidance/ng222/chapter/Recommendations. Full HTML fetched and visible text inspected, rather than relying only on search snippets.

Verified evidence excerpt: “Conduct a comprehensive assessment that does not rely simply on a symptom count”

### [2] NICE — Psychosis and schizophrenia in adults: prevention and management

URL: https://www.nice.org.uk/guidance/cg178/chapter/recommendations

Verification: HTTP 200; final URL https://www.nice.org.uk/guidance/cg178/chapter/recommendations. Full HTML fetched and visible text inspected, rather than relying only on search snippets.

Verified evidence excerpt: “using explanatory models of illness for people from diverse ethnic and cultural backgrounds”

### [3] NICE — Self-harm: assessment, management and preventing recurrence

URL: https://www.nice.org.uk/guidance/ng225/chapter/Recommendations

Verification: HTTP 200; final URL https://www.nice.org.uk/guidance/ng225/chapter/Recommendations. Full HTML fetched and visible text inspected, rather than relying only on search snippets.

Verified evidence excerpt: “Do not use risk assessment tools and scales to predict future suicide or repetition of self-harm.”

### [4] NICE — Shared decision making

URL: https://www.nice.org.uk/guidance/ng197/chapter/Recommendations

Verification: HTTP 200; final URL https://www.nice.org.uk/guidance/ng197/chapter/Recommendations. Full HTML fetched and visible text inspected, rather than relying only on search snippets.

Verified evidence excerpt: “Use absolute risk rather than relative risk.”

### [5] NICE — Delirium: prevention, diagnosis and management in hospital and long-term care

URL: https://www.nice.org.uk/guidance/cg103/chapter/Recommendations

Verification: HTTP 200; final URL https://www.nice.org.uk/guidance/cg103/chapter/Recommendations. Full HTML fetched and visible text inspected, rather than relying only on search snippets.

Verified evidence excerpt: “Be particularly vigilant for changes that may indicate hypoactive delirium”

## Issues and remaining verification

The initial extractor returned abbreviated page bodies; full HTTP retrieval supplied the needed recommendation text. An unavailable optional HTML parser and intermittent execution-kernel state resets were bypassed with standard-library text extraction and self-contained file-based operations. These did not leave incomplete final content.

No shared source, components, dependencies, tests, or other course packs were edited. No browser automation, server, localhost, GitHub operation, or deployment was performed. Application integration, rendered accessibility, persistence, assessment placement, and Vercel production verification remain the parent agent's responsibility. This is a bounded two-unit continuation, not completion of the larger 100-unit target or clinical accreditation.
