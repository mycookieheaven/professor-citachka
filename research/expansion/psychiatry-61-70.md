# Psychiatry level 61-70 — handoff note

**Pack written to:** `src/lib/course-packs/staged/psychiatry-61-70.json` (263,197 bytes, parses as valid JSON)
**Note written to:** `research/expansion/psychiatry-61-70.md` (this file)
**No other file was created or modified.** No server was started, nothing was deployed, no browser automation was used.

---

## 1. What this level is

One level, ten lessons, two units of five, continuing directly after `psychiatry-51-60.json`.

- **Level title:** The interview as an instrument: elicitation, observation, translation and honest documents
- **Unit 1 — Structure, questions, observation and instruments** (lessons 61-65, questions `uq-61-70-a` … `-e`)
- **Unit 2 — Difficult questions, contested concepts and the written record** (lessons 66-70, questions `uq-61-70-f` … `-j`)
- **Level questions:** `lq-61-70-a` … `lq-61-70-l` (12)

### Lesson topics

| ID | Title | Territory |
|---|---|---|
| 61 | The psychiatric interview as an instrument | narrative vs focused phases, open/closed questions, semi-structured vs fully structured, the validity problem (Nordgaard/Sass/Parnas), the mental status examination as a category system |
| 62 | Question form, silence, and what a "no" means | leading and compound questions, minimal encouragers, the functions of silence (systematic review), the meaning of denial, why a checklist is not an examination |
| 63 | Reported versus observed | mood vs affect, the objective/subjective neutrality rule, inference in the grammar of findings, dissociation, hallucination modality, and what a report can never establish |
| 64 | Working with interpreters | proficiency as a task-specific judgement, third-person effects on disclosure, professional vs ad hoc interpreters, instrument administration and translation validity, recording language conditions |
| 65 | Symptom checklists and rating scales: what they are for, how they fail | sensitivity/specificity vs predictive value and base rates, kappa 0.18 and 0.21 with clinical reference standards, what instruments do well (standardisation, change over time, recall), the developer conflict of interest |
| 66 | Suicide risk inquiry done plainly | asking directly and non-euphemistically, why the guidance rejects prediction tools and risk stratification, formulation of needs/triggers/actions instead of categories, what the evidence on asking does not show |
| 67 | Insight: a contested concept and its clinical consequences | Pick 1882 and Lewis 1934 as reported by the review, clinical vs cognitive insight, the insight paradox, plural roots, measurement disagreement, insight is not capacity |
| 68 | Distress and disorder | the WHO definition and the broader "mental health conditions" term, a worked example of a threshold being placed (NICE NG222 and PHQ-9 score 16), dimensional critique (NIMH RDoC), both failure modes (medicalisation and under-recognition) |
| 69 | Substance use assessed without moralising | person-first language and the specific substitutions with reasons (NIDA), motivational style and function-of-use assessment, pattern/context/consequences/goals, sequencing comorbid problems (NICE CG115), no treatment advice and no doses anywhere |
| 70 | Capstone: findings, formulation and plan, with uncertainty documented | three-layer report structure, summary vs formulation and the 4Ps, record-keeping content requirements (GMC), declared provenance, explicit unknowns, falsifiable revision conditions, review dates |

Instructional design follows the existing packs: each lesson has `explanation`, `example`, a single `question`/`answer`/`distractor`/`correction`, six `depth` fields, 2-4 `readings` with section-specific directions, and a `visual` with steps. The subject is `psychiatry`; `russianItems` is absent, matching the contract.

## 2. Computed word counts

Words were counted programmatically (`len(str.split())`) over `explanation + example + depth.definitions + depth.mechanism + depth.secondExample + depth.mistake + depth.application + depth.summary` for each lesson.

| Lesson | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 |
|---|---|---|---|---|---|---|---|---|---|---|
| Words | 2453 | 2626 | 2374 | 2583 | 2820 | 2627 | 2574 | 2702 | 2879 | 3253 |

- **Total instructional words: 26,891**
- Minimum 2,374 (lesson 63) — requirement was ≥600 per lesson
- Mean 2,689.1 per lesson

Arithmetic used inside the content, computed with tools and recorded here:

- Positive predictive value, illustrative test with sensitivity 90% and specificity 90%: at 1% prevalence **8.3%** (per 10,000: 90 true positives, 990 false positives); at 5% **32.1%** (per 1,000: 45 and 95); at 20% **69.2%** (per 1,000: 180 and 80); at 40% **85.7%**.
- WHO fact sheet scale check: 1.2 billion ÷ 8.1 billion = **14.8%**; 1 in 7 = **14.3%** — the lesson uses WHO's own "nearly 1 in 7" wording and shows both.
- The study figures quoted in lesson 65 (kappa 0.18; sensitivity 19%, specificity 100% for schizophrenia; kappa 0.21; sensitivity 45.5%, specificity 91% for schizophrenia-spectrum; 24 of 44 undetected; 33 of 55 discordant) are **quoted, not derived**.

## 3. Structure validation (scripted)

- `subject` = `psychiatry`; one level; two units; five lessons and five questions per unit; twelve level questions.
- Lesson IDs exactly `61`…`70` in order; question IDs exactly `uq-61-70-a`…`-j` and `lq-61-70-a`…`-l`.
- Every lesson has exactly the keys `id, title, explanation, example, question, answer, distractor, correction, depth, readings, visual`; every `depth` has exactly the six required fields; every reading has `title, url, note`; every visual has `title, description, steps` (6-7 steps each).
- 22 questions total; all 22 answers distinct, all 22 distractors distinct, no answer text repeated as a distractor, no duplicate IDs.
- `reviewLessonIds` values used: 53, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70 — all within 01-70 (53 is "Capacity, consent and coercion" in `psychiatry-51-60.json`).
- Citation markers `[n]` inside each lesson were checked against the length of that lesson's `readings` array; none out of range.
- No `russianItems` key; no placeholder strings (TODO/PLACEHOLDER/lorem) anywhere.

## 4. Source verification results

24 unique URLs are cited. Every one was requested programmatically at authoring time; all returned HTTP 200 except one, noted below. Bodies were then searched for the specific section or figure cited in that lesson's note, and where a source refused automated retrieval it was read through an extraction tool or the publisher's own page.

**Verified 200 and content-matched:**

| Source | Used for | Check performed |
|---|---|---|
| NICE NG225 recommendations | no risk scales to predict, no stratification | exact wording "Do not use global risk stratification into low, medium or high risk to predict future suicide or repetition of self-harm" found |
| NICE NG225 rationale and impact | why prediction tools fail; 48-hour aftercare | matched |
| NICE NG222 recommendations | severity categories; score of 16 as an indicator | exact "16 on the PHQ-9" and indicator wording found |
| NICE CG115 recommendations | 1.2.2.8 comorbidity after abstinence (3-4 weeks); independent interpreters | matched |
| NIMH "5 Action Steps" | asking directly: "Are you thinking about suicide?" | exact phrasing found |
| NIMH "About RDoC" | dimensional critique; not a diagnostic guide | matched |
| WHO "Mental disorders" fact sheet | definition of a disorder; broader term; ~1.2 billion in 2023 / nearly 1 in 7 | matched |
| StatPearls, Mental Status Examination (NBK546682) | mood verbatim vs affect as clinician interpretation; neutrality rule | read via extraction tool (direct fetch returned a thin page) |
| NIDA "Words Matter" | the substitutions and the stated reasons (habit, abuse, clean/dirty, return to use, substitution therapy) | table content found |
| Nordgaard, Revsbech, Sæbye & Parnas 2012, World Psychiatry 11(3):181-185 (PMC3449355) | kappa 0.18; sensitivity 19%, specificity 100% | matched |
| Nordgaard & Parnas 2013, Psychopathology (PMC3668119) | structure/validity argument; "a significant number dissimulate… shameful or strange" | quote found verbatim |
| Knol, Koole, Desmet, Vanheule & Huiskes 2020, Frontiers in Psychology (PMC7750524) | functions of silence in clinical interaction | matched |
| Kvig & Nilssen 2023, Frontiers in Psychiatry | kappa 0.21; 45.5%/91%; 24 of 44; 33 of 55; the three proposed mechanisms | every figure read from the article's own Results and Discussion |
| Bauer & Alegría 2010, Psychiatric Services (PMC2946248) | interpreter errors; 77% vs 46% disclosure; 84%/72%/94% communication ratings; the authors' own statement that evidence is insufficient for guidelines | figures found in the review text |
| Victorian Transcultural Psychiatry Unit (2006), guidelines PDF | proficiency categories and movement during acute illness; occasions requiring an interpreter; instrument translation limits; not leaving interpreters alone with clients | read from the full PDF text |
| Aboraya et al. 2016 (PMC5077257) | "72.5 percent of psychiatrists said that they do not use structured interviews in clinical settings" and time constraints as the reasons | exact sentence found in the article and on the publisher's page |
| Uysal, İlhan, Esmeray & Arıkan 2023, Alpha Psychiatry 24(4):113-118 | 314 patients; AUC 0.74-0.92 | sample size and AUC values confirmed via the indexed abstract |
| Lysaker et al. 2018, World Psychiatry 17(1):12-23 (PMC5775127) | Pick 1882 and Lewis 1934 as the review reports them (both confirmed in the review's reference list); the insight paradox; plural roots; suicidality association | quotes and reference entries matched |
| Psychological Medicine (2025) 55:e362 insight instruments review (PMC12671917) | multidimensional construct; variability hindering assessment; self-report vs clinician divergence | matched |
| Owen 2023, Psychological Medicine (PMC10106283) | summary (descriptive) vs formulation (analytical, evaluative); 4P model | matched |
| Mathias et al. 2012 (PubMed 22548324) | the study NIMH links from its "ask" step; read via the indexed record | record confirmed |
| Biteniekytė & Vaštakė 2024, Psichologija 71:104-117 | PRISMA-guided systematic review of pauses of silence | year, method and scope confirmed |

**Access caveat, disclosed in the pack itself and repeated here:** the General Medical Council site returned **HTTP 403** to automated requests. Its record-keeping content (records "clear, accurate, contemporaneous and legible"; the list of what records should usually include, including decisions to take no action, concerns or preferences expressed by the patient and whether they were addressed, and review dates) was therefore read through an extraction tool and the Council's own pages as returned through a search index, and lesson 70's reading note tells the reader to confirm the current wording in a browser. Two further source limits are declared inside the pack: the SCIP paper is written by the developer of the instrument it presents (conflict of interest, stated in lesson 65's text and note), and NICE guidance is written for specified national health systems (England/Wales/Northern Ireland) so its thresholds and tools do not transfer automatically elsewhere.

Attribution errors caught and fixed during verification (recorded here because they were real): three sentences initially attributed Fennig-1994 denial data to the Frontiers replication (not in that paper — replaced with the verified Nordgaard dissimulation finding), and one attributed "lack of time" to rating scales when the source attributes time constraints to structured interviews. Both were corrected before final validation.

## 5. Clinical safety and scope

- Education only: no diagnosis of any real person, no treatment or prescribing instruction, **no drug doses anywhere in the pack**.
- Suicide-risk material (lesson 66 and two questions) is written soberly, contains no method content, no means-restriction instruction and no assessment checklist to be applied mechanically; it states plainly what the guidance says cannot be predicted and directs the reader to the written formulation requirement instead of a score. The lesson states that this is not a risk-assessment protocol.
- Contested claims are presented as contested: insight (concept and direction of its associations), the distress/disorder boundary (line drawn, not discovered), the role of instruments (with the conflict of interest declared), the effectiveness of the fully structured interview, and the question of whether simple questions can rival scales (explicitly labelled a single retrospective study held as a complication, not a verdict).
- Limits of prediction and of evidence are stated in the lessons that rely on them: correlational designs, single-centre replications, small interpreter studies whose authors say the evidence cannot support guidelines, and survey data about practice.

## 6. Integration status and unresolved limitations

**Unresolved:**

1. **No clinical review has been done.** No psychiatrist, psychologist, nurse or peer reviewer has read this level. Every clinical statement rests on the cited sources and the author's reading of them, and the notes in the pack flag where a source is weak. Treat the whole pack as unreviewed draft content.
2. **Not wired into the app.** `src/lib/course-packs/staged/` was created by this task because it did not exist. A search of `src/**/*.ts(x)` found no code referencing `staged`, so the pack is inert until someone adds loader wiring; `psychiatry-51-60.json` and the other live packs were left untouched.
3. **Guideline drift.** NICE, WHO and NIMH pages are revised. The WHO fact sheet retrieved for this work carries a 2026 revision date; the NG222 and NG225 chapters and CG115 may be updated or replaced. Figures and recommendation wording should be re-checked at integration time.
4. **One pack-level judgement call:** the lesson-65 base-rate arithmetic is presented as an illustrative teaching example (90%/90% at several prevalences), not as the properties of any named instrument; no published test characteristics are asserted beyond the quoted study figures.
5. **GMC wording** rests on extraction plus search-index copies rather than a direct page fetch from the publisher, as disclosed above; this is the one citation in the pack that a reviewer should confirm by hand first.
