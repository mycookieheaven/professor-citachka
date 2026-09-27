# Literature continuation — authored handoff

## Delivered scope

This bounded release adds **one level, two units and ten lessons (21–30)**. It is not fulfillment of the larger 100-unit course goal, and it does not claim institutional accreditation or mastery from binary-choice quizzes.

Owned files:
- `src/lib/course-packs/literature.json`
- `research/expansion/literature.md`

Read the expansion contract, current Literature tuples in `humanities.ts`, all four existing reading guides, teaching-and-tutoring including learner context, and grounded-citations before authoring. The continuation develops existing narration, evidence, counterreading and revision prerequisites through longer primary-text encounters, rather than replacing them. Existing guides, audio recommendations, progress identifiers and shared files were not modified.

## Content map and actual instructional word counts

| ID | Topic | Words |
|---|---|---:|
| 21 | The failed proposal: intention, uptake and narrative distance | 800 |
| 22 | Darcy's letter: admissions, explanations and corroboration | 787 |
| 23 | Elizabeth rereads: recognition without omniscience | 765 |
| 24 | Pemberley: material beauty and interested testimony | 769 |
| 25 | Jane's hearing: credibility, care and public repair | 763 |
| 26 | The creature learns to read suffering | 780 |
| 27 | Books as mirrors: Adam, Satan and the limits of analogy | 775 |
| 28 | The demand for a companion: reasons, threats and absent consent | 766 |
| 29 | Walton turns back: changed action, unfinished conviction | 759 |
| 30 | Comparative capstone: who gets an adequate hearing? | 839 |

Total: **7,803 instructional words**, counting whitespace-separated words across explanation, worked example and the six depth fields only. Minimum: **759 words**. Prompts, source notes, diagrams and assessments are excluded from that total. The count is a floor check, not a claim that length alone establishes quality.

Unit 1 develops failed proposals, documentary defense, rereading, estate description and institutional vindication. Unit 2 develops ethical perception, literary analogy, coercive bargaining, qualified closure and comparative argument. Every lesson has bounded primary reading, two applications of analysis, a serious counterreading, retrieval feedback, a writing task with a rubric and a specific next step. The final task is a 700–900-word comparative essay with a third-text pressure test.

## Verification performed

Executed Python JSON parse and assertions against the saved pack:
- Exact subject and one-level/two-unit hierarchy.
- Five lessons per unit; consecutive unique stable IDs 21–30.
- All required prose fields and precisely the six required depth keys.
- Every lesson above 600 instructional words, with source links and at least three visual steps.
- No Russian-only fields.
- Five fresh scenario questions per unit, plus twelve separately authored cumulative questions.
- Twenty-two unique assessment IDs and prompts; no assessment prompt copied from lesson retrieval.
- Every answer differs from its distractor; every review reference resolves within this pack.
- All three unique primary-text URLs returned HTTP 200 and their bodies were read, not just landing-page summaries.
- The three directly quoted primary-text passages were checked against whitespace-normalized fetched source bodies: Darcy's opening struggle, Elizabeth's self-knowledge declaration and the creature's causal claim about misery.
- Ran the citation ledger's strict verifier on this handoff: exit 0, `citations OK`; all three cited sources resolve to the ledger-generated source list. Quote matching was performed separately in Python, not through the ledger's evidence-quote gate.

No numerical worked examples needed arithmetic validation. Lesson counts, question counts and word totals were computed in Python rather than estimated. Source writes received JSON syntax validation. These are content/schema checks, not application TDD, rendering tests, deployed route checks or persistence verification; parent owns integration.

## Source and edition findings

Austen chapter references are continuous chapter numbers, not volume-local numbers. The Pemberley reading is chapter 43; the proposal/letter/rereading sequence is chapters 34–36.[1]

The linked Jane Eyre transcription identifies the 1897 Service & Paton printing. The pack uses chapters 7–8 for the hearing and distinguishes private reassurance from public clearance.[2]

The linked Frankenstein text uses continuous numbered chapters and contains the revised narrative's account of Elizabeth as the daughter of a Milanese nobleman, rather than treating the landing page's original-publication date as edition identification. Lessons specify the linked text's chapter numbering and do not claim an 1818 critical edition. Closing Walton entries are located by dates within the final narrative chapter. The creature's final self-destruction is an announced intention, not a witnessed event in Walton's report.[3]

All assigned originals are public domain in the USA and openly accessible at the checked URLs. Notes advise checking local rules elsewhere. This pack contains no commercial audio, copied audio guide, invented video, new recording or playback claim. Visuals are original text-based reasoning sequences, not videos. No quotations are attributed to an author where a fictional speaker is the relevant voice.

## Limitations and integration notes

- Selective chapter readings are explicitly bounded and bridge context is labeled; guide completion does not mean completing the novels.
- The sources are public-domain electronic reading texts, not a scholarly textual apparatus. Historical and ethical readings are identified as interpretations rather than claims of settled authorial intention.
- Numeric source labels in teaching prose correspond to the labeled reading cards and the ledger-generated list below. The literature-specific citation ledger used `/tmp/literature-expansion-citations.json`; it is not a repository artifact.
- No server, browser automation, deployment, GitHub action, dependency change, shared test edit or audio modification was performed.
- Binary unit and level questions support retrieval and application; the essay rubric is needed for sustained independent argument. Automated quiz performance is not proof of competence.
- User-facing video coverage and app-level narration are outside this isolated content contract; no new videos or audio assets were fabricated to imply coverage.

## HTTP results

- HTTP 200: `https://www.gutenberg.org/ebooks/1260.txt.utf-8` — 1,063,115 decoded characters retrieved.
- HTTP 200: `https://www.gutenberg.org/ebooks/1342.txt.utf-8` — 763,082 decoded characters retrieved.
- HTTP 200: `https://www.gutenberg.org/ebooks/84.txt.utf-8` — 446,582 decoded characters retrieved.

## Sources

[1] https://www.gutenberg.org/ebooks/1342.txt.utf-8
[2] https://www.gutenberg.org/ebooks/1260.txt.utf-8
[3] https://www.gutenberg.org/ebooks/84.txt.utf-8
