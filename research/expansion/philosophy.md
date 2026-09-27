# Philosophy expansion handoff

## Delivered scope

- Authored one continuation level: **Political philosophy: authority, justice, and justified dissent**.
- Two units, five lessons each; stable new lesson IDs **61–70**.
- Unit 1: **Justifying power among free and equal citizens**.
- Unit 2: **Distributive justice, structural responsibility, and dissent**.
- Ten separately authored unit questions (five per unit) and twelve separately authored cumulative level questions: **22 assessed scenarios**, plus ten optional lesson retrieval prompts.
- Ten nonblocking written applications with explicit model responses/outlines and self-review criteria; the final application is a dissent dossier.
- **8,317 instructional words**, counting explanation + example + the six depth fields by Python whitespace splitting. Lesson range: **816–859** words. Readings, quiz text, diagrams, titles, and corrections are excluded from this total.
- Ten topic-specific visual reasoning sequences with accessible descriptions. These are diagrams, not videos.

## Owned files

- `/Users/<user>/professor-citachka/src/lib/course-packs/philosophy.json`
- `/Users/<user>/professor-citachka/research/expansion/philosophy.md`

No shared course source, renderer, assessment engine, catalog, dependency, or test file was edited. No browser, localhost server, deployment, or GitHub operation was performed.

## Progression from the existing six levels

Read `research/expansion/CONTRACT.md`, the complete philosophy segment of `src/lib/humanities.ts`, and all of `src/lib/philosophy-continuation.ts` before selecting the progression. The existing foundation and applied-reasoning material is followed by formal logic, epistemology, philosophy of science, and normative ethics. Existing content ends with a public-service justification integrating empirical uncertainty and ethical reasons.

The new level therefore moves from judging individual actions to justifying political institutions and their distributions. It reuses countermodels and necessary/sufficient conditions in authority and liberty arguments; source dependence in democratic epistemology; causal explanation and explicit normative bridges in structural injustice; and objections, reflective revision, and evidence audits in the dissent capstone. It does not restart introductory definitions of arguments or repeat the previous ethics survey.

## Lesson inventory and reading provenance

Every lesson contains an explicit argument, a serious objection or limitation, a worked contrast/counterexample, and an application with feedback. Historical theories are distinguished from original constructed examples. The readings are authoritative scholarly secondary sources, not falsely labeled primary texts. Each JSON reading supplies bounded, section-specific directions.

| ID | Topic | Instructional words | Reading |
|---|---|---:|---|
| 61 | Authority is not the same as getting things right | 834 | [1] |
| 62 | Fair play, public goods, and the unsolicited-benefit objection | 817 | [2] |
| 63 | Public reason without pretending everyone agrees | 832 | [3] |
| 64 | The harm principle: necessary condition, not blank permission | 816 | [4] |
| 65 | Democratic equality and epistemic authority | 819 | [5] |
| 66 | Rawls: fair institutions and the priority of liberty | 853 | [6] |
| 67 | Nozick: entitlement, voluntary transfer, and historical repair | 835 | [7] |
| 68 | Capabilities: equal resources, unequal freedom | 823 | [8] |
| 69 | Structural injustice: tracing interaction without dissolving responsibility | 829 | [9] |
| 70 | Civil disobedience and a defensible dissent dossier | 859 | [10] |

## Verification actually exercised

- Python JSON parsing succeeded after both incremental unit saves and after final edits.
- Asserted subject `philosophy`, one level, two units, five lessons per unit, exact ordered IDs 61–70, six required depth keys per lesson, all required instructional/retrieval fields, nonempty readings, and at least three visual steps.
- Asserted absence of `russianItems` for this non-Russian course.
- Asserted the 600-word floor for every lesson; total computed above from on-disk JSON.
- Asserted five questions per unit and twelve level questions, 22 unique question IDs and prompts, no assessment prompt copied from a lesson retrieval prompt, distinct answer/distractor pairs, and nonempty correction text.
- Asserted all `reviewLessonIds` resolve within this pack and every level question references multiple lessons.
- Retrieved all ten reading URLs with both web tools and Python HTTP GET; **10/10 returned HTTP 200**. Read substantive paragraphs, not only search snippets. Checked headings for the bounded assignments, including Political Obligation §4.2, Public Reason §5, Justice §1.4, and Rawls §4.
- JSON write and patch tools reported syntax/lint checks passing.
- Numerical-example arithmetic: **not applicable**. Worked cases deliberately use qualitative comparisons; no invented statistics, monetary calculations, or voting probabilities appear. Counts and word totals were calculated in Python, not estimated.

## Content safeguards and limitations

Authority, legitimacy, justice, and obligations are kept distinct. Mill’s historical exclusions are flagged rather than endorsed. Rawls’s priority rules are not confused with maximizing income; Nozick’s theory is not treated as validating all existing holdings; capability is not confused with compulsory functioning; structural responsibility does not assign everyone equal guilt; and civil-disobedience classification does not automatically establish permission. The sources explicitly present contested approaches, which the lessons retain rather than flatten into consensus.[1][4][6]

Fair-play receipt/acceptance problems and consensus/convergence disagreement receive distinct arguments.[2][3]

Democratic epistemic arguments acknowledge source dependence and do not apply a jury theorem without its assumptions.[5]

Entitlement includes historical rectification, capability frameworks require further normative specification, and structural injustice includes objections concerning agency.[7][8][9]

Dissent lessons distinguish legal consequences from philosophical justification and do not offer individualized legal advice.[10]

This is a bounded **two-unit expansion**, not completion of the 100-unit target. Binary-choice quizzes are practice, not proof of professional, legal, or philosophical competence. UI placement, persistence, narration, accessibility behavior, assessment ordering, integration tests, and Vercel production verification remain the parent’s responsibility. No video playback was authored or claimed.

## Execution note

The first unit was saved into the final JSON before the second was authored. One second-unit tool invocation failed because the execution kernel did not retain a helper definition; it made no file changes. The subsequent self-contained invocation reloaded the saved first unit, appended the completed second unit and cumulative questions, and passed validation. No unresolved content or source-access blocker remains.

## Sources

[1] https://plato.stanford.edu/entries/legitimacy — Political Legitimacy — sections 1–3
[2] https://plato.stanford.edu/entries/political-obligation — Political Obligation — section 4.2, Fair Play
[3] https://plato.stanford.edu/entries/public-reason — Public Reason — Why Public Reason?, Structure, and Objections
[4] https://plato.stanford.edu/entries/mill-moral-political — Mill’s Moral and Political Philosophy — section 3, Mill’s Liberalism
[5] https://plato.stanford.edu/entries/democracy — Democracy — sections 2–4, justification, authority, and participation
[6] https://plato.stanford.edu/entries/rawls — John Rawls — Justice as Fairness: basic structure, principles, and original position
[7] https://plato.stanford.edu/entries/nozick-political — Robert Nozick’s Political Philosophy — Justice in Holdings and Rectification
[8] https://plato.stanford.edu/entries/capability-approach — The Capability Approach — sections 2–4, core concepts and theories of justice
[9] https://plato.stanford.edu/entries/justice — Justice — section 1.4, Justice and Agency; section 2, conceptual distinctions
[10] https://plato.stanford.edu/entries/civil-disobedience — Civil Disobedience — sections 1–4, features, alternatives, justification, responses

