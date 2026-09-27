# Veterinary science, lesson IDs 31–40 — authored batch handoff

## Delivered scope

- Content artifact: `/Users/melissaaguilera/professor-citachka/src/lib/course-packs/staged/veterinary-science-31-40.json`
- Handoff: `/Users/melissaaguilera/professor-citachka/research/expansion/veterinary-science-31-40.md`
- One new level, **Technician-Relevant Clinical Care: Handling, Assessment and Monitoring**, continuing after the published IDs 01–30. Two units, five substantive lessons each, **10 lessons, IDs 31–40**.
- Unit 1, **Safe Handling, Examination and Sampling Judgement**: 31–35.
- Unit 2, **Perioperative Monitoring, Fluids and Communication Under Pressure**: 36–40.
- Ten optional retrieval prompts, ten fresh unit-quiz questions (five per unit), twelve separately authored cumulative level questions. All question IDs are new (`uq-vet-31-a…e`, `uq-vet-36-a…e`, `lq-vet-31-a…l`) and do not collide with the published pack's `uq-vet-21-*`/`lq-vet-21-*`.
- Thirty reading entries across 27 distinct sources (three per lesson), each with section-specific reading directions. Ten labeled step-sequence diagrams. No `russianItems` (this subject has no Russian keys). No videos, no playback claims, no media URLs.
- No other repository file was created, edited or deleted. No registry, `programs.ts`, test, existing pack, shared component or script was touched. Nothing was deployed, no server or browser automation was used.

This is a bounded release toward the course target, not completion of it, and it builds on the published lessons rather than repeating them: observation and roles (01–03), low-stress handling (04), homeostasis and fluid concepts (07, 12), pain observation (08), infection control (09), records (10), triage and escalation (11), samples (14), reference intervals (15), monitoring trends (17), owner communication (18), welfare (19), handover (20), and the previous level's problem representation, sample chain, reference-interval, pain-integration, stewardship, consent and error-learning lessons (21–30).

## Topic list

| ID | Topic | Instructional words |
|---|---|---:|
| 31 | Restrain a patient safely and read the feedback you are given | 1216 |
| 32 | Perform a systematic physical examination and interpret each finding | 1131 |
| 33 | Change the plan for the species in front of you | 1093 |
| 34 | Obtain a diagnostic blood sample and protect the sample chain | 1197 |
| 35 | Assess pain across species and turn a score into a plan | 1174 |
| 36 | Monitor an anaesthetised patient parameter by parameter | 1169 |
| 37 | Reason about fluid therapy as a plan, not a rate | 1204 |
| 38 | Detect deterioration early and escalate in the right order | 1139 |
| 39 | Communicate with a distressed client without overpromising | 1233 |
| 40 | Reconstruct a critical case from the record | 1167 |

## Instructional word count (computed in code)

Counted in Python by whitespace splitting over `explanation`, `example` and exactly the six `depth` fields, per lesson:

- **Total: 11,723 instructional words.** Minimum 1,093 (lesson 33), maximum 1,233 (lesson 39). **Every lesson clears the 600-word floor by at least 82 percent.**
- Excluded from the count, as the contract specifies: titles, readings, prompts, unit quizzes and level questions.
- Interactive question banks are binary-choice checks and are **not** evidence of professional competence.

## Validation actually executed

1. **JSON parses** — `json.load` in Python and `JSON.parse` in Node both succeeded; the write tool's JSON lint also passed on both incremental saves (unit 1 alone, then the completed pack).
2. **Contract invariants mirrored from `src/lib/course-pack.ts` and checked programmatically** (Python, exit clean): one level; exactly two units; five lessons and five questions per unit; twelve level questions; lesson IDs exactly 31–40 in order and unique; required lesson strings nonempty; exactly the six depth fields; no `russianItems`; every lesson above the word floor; every reading `https:` with a title and note; every visual with at least three labeled steps; all 22 assessment IDs unique; no assessment prompt copied from a lesson retrieval prompt; no duplicate answer or distractor anywhere, including across lesson answers; every `reviewLessonIds` entry resolving to a lesson in this pack or to a published ID 01–30; every level question referencing more than one lesson.
3. **The real adapter was run.** `attachCoursePacks` from `src/lib/course-pack.ts` was imported unmodified with Node's type stripping (its imports are type-only, so no repository file had to be added or changed) and called with the staged pack and the genuine published ID inventory (base 01–20 plus pack 21–30). Result: **accepted.** The appended level reports the authored title, two unit definitions of five lessons and five quiz questions each, and twelve cumulative assessment questions. My harness lives in the Hermes scratch cache, not in the repository.
4. **Negative controls.** The same harness was re-run against seven deliberately mutated copies: thin lesson text, duplicated lesson ID, unknown `reviewLessonIds`, short unit quiz, an `http:` reading URL, a missing depth field, and a two-step visual. **All seven were rejected with the expected message** (for example, `veterinary-science/39 has only 8 instructional words`), which shows the acceptance above is a real check rather than a vacuous pass.
5. **Safety scan.** Full-text search of the pack for `mg/kg`, `mL/kg`, `mcg/kg`, `dose`/`doses` and `mg` returned **zero** hits. The only numeric-unit tokens present are seven volume readings used in observation arithmetic and the two risk percentages reported by the AAHA anaesthesia guidelines.

This is artifact, schema, adapter and content validation. It is **not** application integration, browser rendering, accessibility testing, deployment or production verification; those remain with the parent.

## Arithmetic checks

Every figure in the lessons was recomputed with a tool, not mentally:

| Used in | Computation | Result |
|---|---|---:|
| 36 | 8 breaths counted in 15 s → per minute | 32.00 |
| 36 | bag 1000 → 600 mL over 2 h → mL/h | 200.00 |
| 37 | manual's maintenance estimate, 30 × 12 kg + 70, mL/24 h (fictional 12 kg patient) | 430.00 |
| 37 | that estimate, per hour | 17.92 |
| 38 | 7 breaths in 30 s → per minute | 14.00 |
| 38 | 13 breaths in 30 s → per minute | 26.00 |
| 38 | change 14 → 26 breaths/min | 12.00 |
| 38 | percentage increase | 85.71 |
| 36 | AAHA reported canine risk 1/1849 as a percentage | 0.05 |
| 36 | AAHA reported feline risk 1/895 as a percentage | 0.11 |

The two percentage checks confirm that the guideline's stated "approximately 0.05% (1 in 1,849)" and "0.11% (1 in 895)" are internally consistent. The 430 mL/24 h and 17.9 mL/h figures are presented in lesson 37 as a **worked illustration of the manual's estimation method on a fictional patient, explicitly not as an instruction**, and the lesson states that the plan for any real patient is written by a veterinarian. All other numeric content is observation arithmetic (counted rates, bag volumes) rather than any prescription.

## Source verification results

All 27 distinct URLs were re-checked over HTTP with a browser user agent after the pack was finalised. **26 returned HTTP 200. One returned 403.**

HTTP 200 (26): the AAFP/ISFM cat-friendly interaction guidelines landing page (catvets.com); the 2020 Five Domains paper (PMC7602120); the University of Guelph VETM 3430 clinical skills textbook, Unit 3; the Virginia Tech University Veterinarian venipuncture SOP (PDF); Cornell eClinpath sample collection and common artifacts; the MSD Veterinary Manual pages on rabbits, pet birds, reptiles, the cardiovascular system, diagnosis of heart disease, pain recognition, pain perception, maintenance fluid plan, initial triage and resuscitation, the triage parameters table, the rule of 20, cardiopulmonary resuscitation, and emergency medicine in animals; the AAHA 2020 anesthesia guidelines PDF; both AAHA/AAFP fluid-therapy PDFs (full text and implementation toolkit key tasks); the WSAVA pain guidelines landing page; the RCVS Communication and consent and Clinical and client records guidance pages; and the AVMA communicating-with-clients page.

**403 (1):** `https://www.aaha.org/resources/2026-aaha-oncology-guidelines-for-dogs-and-cats/section-4-client-communication/`. The page content was retrieved through web extraction and read before authoring; only the automated HTTP request is blocked. The reading note for lesson 39 discloses this, and lesson 39 also carries two fully reachable sources (RCVS and AVMA), so no lesson depends solely on a bot-blocked URL.

Reading directions are section-specific throughout. Volatile or weak candidates were rejected rather than included: three AAHA resource pages that also returned 403 were dropped where a reachable equivalent existed, an MDPI-hosted copy of the Five Domains paper (403) was replaced by the PubMed Central copy, a Europe PMC mirror of the cat-friendly guidelines (403) was replaced by the publisher landing page, an incorrect PMC identifier for the Five Domains paper was caught and discarded before it entered the pack, and a set of MSD URLs that resolved to 404 or redirected to the manual's home page were removed entirely. No browser automation, access-wall circumvention or URL with embedded credentials exists anywhere in the pack.

## Clinical safety and role review

- Every case is explicitly fictional or a paper exercise; the lessons state repeatedly that this is education, not diagnosis or treatment.
- Species, weight and clinical context are named as variables that change every decision in lessons 31, 32, 33, 34, 35, 36 and 38.
- No dose, drug, fluid rate, analgesic or sedative is ever presented as an instruction. Sedation, analgesia, fluid prescription, prognosis, consent and stabilisation targets are consistently assigned to the veterinarian, and three lessons include an explicit line saying which decisions a technician does not make.
- Clinical urgency is never subordinated to documentation: perfusion findings and deteriorating patients route to immediate veterinary assessment.
- Known evidence limits are stated rather than smoothed over: no gold standard for animal pain assessment, few validated scales, observer variability, physiological measures that fail to separate pain from other stressors, and the AAHA, WSAVA and MSD documents' own statements that they are guidelines and not standards of care.
- Species-specific constraints are taken from the sources rather than invented, for example the rabbit ear-vein and central ear artery restrictions and the oxygen-deprivation risk in birds.
- No certificate, accreditation, clinical competence or treatment authorisation is implied anywhere.

## Unresolved limitations

1. **Adapter verification used a stand-in base catalog.** The real `attachCoursePacks` ran, but `base` contained the genuine published ID inventory for this subject (base 01–20 plus pack lessons 21–30) rather than the full `Program`/`Topic` objects from `programs.ts`. It validates ID collision, word floor, URL scheme, depth completeness, review-ID resolution and question counts exactly; it does not exercise the full catalog. The parent's integration run does.
2. **One source is bot-blocked.** The AAHA oncology client-communication page returns 403 to automated requests. Its content was read via extraction; the URL is not claimed to have passed direct HTTP verification, and the reading note says so.
3. **No independent content review.** This batch has not been reviewed by a second author, a veterinarian or a veterinary technician, and it has not been through the project's reviewer delegation. Clinical terminology follows the cited sources, but nothing here is a substitute for supervised clinical training or a credential.
4. **Source-section granularity varies.** Some MSD pages are single long articles whose extracted text is partial at the padding level, so reading directions name sections that were inspected rather than every subsection on the page. The AAHA anesthesia and fluid-therapy PDFs are large documents; directions point at the abstract, introduction, perianaesthetic, monitoring and key-task sections that were read, not the dose tables.
5. **The staged file is not registered or published.** It sits at `src/lib/course-packs/staged/`, which is not in the reviewed-pack registry. Nothing glob-loads it. It must not be published until the parent integrates it, runs application and integration tests, and verifies the deployed route.
6. **No rendering, layout, screen-reader, audio or progress-persistence verification was performed.** The visuals are text step sequences rendered as diagrams; they are not images or videos, and no claim is made about how they will look or read on the deployed site.
7. **This is 10 lessons of an unfinished course target.** It adds two units toward the larger per-course goal and says nothing about the remaining scope.
