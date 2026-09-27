# Handoff: Psychiatry level, lesson IDs 51–60

**Subject slug:** `psychiatry`
**Batch type:** one new level, 2 units × 5 lessons, continuing after the 41–50 batch
**Status:** authored, validated, staged. NOT integrated, NOT deployed, NOT clinically reviewed.

## Files written (only these two)

| Path | Contents |
|---|---|
| `src/lib/course-packs/staged/psychiatry-51-60.json` | Full course pack: one level, 2 units, 10 lessons (ids 51–60), 10 unit questions, 12 cumulative level questions. **237,306 bytes** on disk. |
| `research/expansion/psychiatry-51-60.md` | This handoff note |

No other file was created, edited or deleted. `git status --porcelain` in the repo root shows only untracked entries: my `staged/` directory (shared with other workers' packs) and other workers' `research/expansion/*.md` files. **No tracked file is modified.** No server started, no deployment, no browser automation, no `russianItems` key anywhere (checked by regex over the serialised pack: 0 matches).

## Level and unit structure

**Level title:** *Formulation, levels of care, and the person in context: integrating biological, psychological and social threads*

**Unit 1 — Formulation, escalation and the ethics of influence (lessons 51–55)**

| id | Title |
|---|---|
| 51 | Formulation as clinical method: what it is, what it is not, and how it differs from a diagnosis |
| 52 | Levels of care and escalation: what crisis, community and inpatient care can actually do |
| 53 | Capacity, consent and coercion: three different ethical problems that are usually confused |
| 54 | Physical illness and mental state: a two-way street with a differential diagnosis attached |
| 55 | Sleep, pain and fatigue: three symptoms that keep exchanging places |

**Unit 2 — Treatments, other people, and the whole case (lessons 56–60)**

| id | Title |
|---|---|
| 56 | Medication classes conceptually: what they target, what they cannot target, and why effects lag |
| 57 | Comparing psychotherapies without crowning a winner |
| 58 | Families and carers: partnership, burden and the real limits of confidentiality |
| 59 | Cultural formulation: when the difference is the thing that has to be understood |
| 60 | Capstone: one case, three threads, and an honest account of what remains unknown |

**Coverage against the brief:** formulation building and why it is not a diagnosis = 51; escalation and what levels of care mean = 52; capacity, consent and coercion = 53; physical illness interacting with mental state = 54; sleep, pain and fatigue as cause and consequence = 55; medication classes conceptually and lag = 56; psychotherapy modalities compared without a winner = 57; family/carer involvement and confidentiality limits = 58; cultural formulation and pathologising difference = 59; capstone integrating biological, psychological and social threads = 60. The 12 level questions deliberately span lesson pairs and triples (51+54, 52+53, 54+55, 51+56, 55+57, 58+53, 59+51, 52+60, 51+60, 54+53, 57+59, 52+56+60).

**Question ID namespacing:** unit questions `uq-51-60-a` … `uq-51-60-e` (unit 1) and `uq-51-60-f` … `uq-51-60-j` (unit 2); level questions `lq-51-60-a` … `lq-51-60-l`. All 22 are new and none duplicates a lesson prompt.

**`reviewLessonIds` policy:** every question references lessons only from this pack (51–60). This is deliberate. The 31–40 and 41–50 psychiatry packs sit in `staged/` alongside this one, and if the parent registers this pack without them, a reference to e.g. `"46"` would fail `attachCoursePacks`'s `unknown review lesson` assertion. Lessons 21–30 are in the registered `psychiatry.json` and were therefore safe to cite, but citing them added nothing the 51–60 references do not already cover, so none were used. If the parent integrates 31–50 first, cross-references can be added — but nothing in the current pack depends on that.

## Instructional word counts (computed in code, not estimated)

Two counts, because the codebase's validator tokenises differently from a regex count. `src/lib/course-pack.ts` uses `join(' ').trim().split(/\s+/)`; the regex count is `[\w'’-]+`.

| Lesson | Validator (whitespace) | Regex |
|---|---|---|
| 51 | 1998 | 1998 |
| 52 | 2112 | 2112 |
| 53 | 2302 | 2306 |
| 54 | 2282 | 2283 |
| 55 | 2239 | 2250 |
| 56 | 2274 | 2275 |
| 57 | 2257 | 2269 |
| 58 | 2618 | 2624 |
| 59 | 2351 | 2365 |
| 60 | 2658 | 2658 |
| **Total** | **23,091** | **23,140** |

Counted as `explanation + example + all six depth fields`. Minimum lesson: **1,998 words** (lesson 51) against the 600-word floor, i.e. **3.3× the floor**. No `mechanism` field is a repeat: each of the ten is written for its own topic (formation as clinical method; capability/authority/plan content; the three-question separation in capacity law; two-directional symptom overlap and delayed harm; mutual reinforcement and pattern-dependent meaning; symptom-specific onset and withdrawal-versus-relapse; comparator dependence and recommendation shape; the asymmetry of information flow; meaning versus pathways; and selection under irreducibility). No boilerplate `application` rubric repeats: each names its own deliverable and its own weak-response signature.

## Arithmetic checks (all computed with a tool and recorded here)

1. **Lesson 57, comparator effect (Cuijpers et al. 2024).** 0.95 ÷ 0.63 = **1.5079**, i.e. the waiting-list-controlled estimate is **50.8 %** larger than the care-as-usual-controlled estimate. Written in the lesson as “roughly 51 per cent larger”. Both inputs (g = 0.95, 95 % CI 0.85–1.04; g = 0.63, 95 % CI 0.55–0.71) are the published figures. Also computed: 41,480 ÷ 333 = 124.6 mean participants per trial; 472 ÷ 333 = 1.42 comparisons per trial. Only the 50.8 % figure appears in the lesson text.
2. **Lesson 58, carer numbers (Carers Trust).** 0.13 × 7,000,000 = **910,000**. Written as “roughly 910,000 people on those figures alone”, with the explicit caveat that the source page does not state the base population for the 13 per cent — so the multiplication is an illustration of the source's own figures, not a reconciled statistic. This caveat is in the lesson text, not only here.
3. **Lesson 59, odds-ratio comparisons (Halvorsrud et al. 2018).** 3.43 ÷ 1.50 = **2.29**; 3.11 ÷ 1.50 = **2.07**; 3.43 ÷ 3.11 = **1.10**. The lesson uses only the first: “the odds ratio for Black Caribbean patients is about 2.3 times the odds ratio for South Asian patients”. All four input odds ratios and their confidence intervals and study counts were read from the source abstract/results.
4. **Structural counts.** lessons = 10 = `[5, 5]`; unit questions = 10 = `[5, 5]`; level questions = 12 (greater than the 5-question unit quiz, as the validator requires); total questions = 22; distinct answer strings = 32 (22 questions + 10 lesson answers) with **32/32 unique**; distinct distractor strings = 32 with **32/32 unique**; answer set ∩ distractor set = **0** (both across questions and across lesson fields); lesson ids exactly `['51'…'60']`, unique and ascending; readings = 36 entries over **29 distinct URLs**; visual step counts 5–7 per lesson (floor is 3).

## Structural validation performed

Three checks, all run after the final write:

- **JSON parse:** `json.loads` on the file as written succeeds.
- **Replicated `attachCoursePacks` invariants:** I re-implemented every assertion in `src/lib/course-pack.ts` against the pack. Result: **ALL PASS, zero errors.** That covers: known subject; ≥1 level with a title and ≥2 units; ≥5 lessons per unit; lesson ID matching `/^\d{2,}$/` and not duplicated; all seven required lesson strings non-empty; `answer !== distractor`; all six depth fields non-empty; ≥600 words by the validator's own tokenisation; ≥1 reading per lesson with a credential-free `https:` URL plus title and note; a visual with title, description and ≥3 non-empty steps; ≥5 questions per unit; ≥12 level questions and more level questions than any unit quiz; and every `reviewLessonIds` entry resolving to a lesson ID already registered.
- **Content regex scan:** zero matches for dose patterns (`\d+\s?(mg|mcg|µg|ml)`), zero for `russianItems`. The word “prescribe” appears twice, both times in descriptions of what a source says (NHS on sleeping tablets; the lesson's own statement that it contains no prescribing content), never as instruction.

I did **not** execute the real `attachCoursePacks` or `scripts/validate-packs.ts`: the latter only scans `src/lib/course-packs/*.json` and this pack lives in `staged/`, and the contract assigns application integration and TDD to the parent. The replication is faithful to the source I read, but it is a replication, not the real function.

## Source verification

**27 of the 29 distinct reading URLs returned HTTP 200** to a live `curl` request with a browser user-agent. Two returned **403** and were read through a web-extraction tool instead; both notes in the pack say so explicitly, and the handoff records them here:

- `https://www.gmc-uk.org/.../confidentiality/disclosing-patients-personal-information-a-framework` — **403 to direct requests**; paragraphs 9 and 13–15 were read via extraction and the reading note tells the reader to open the page in a browser for the surrounding paragraphs.
- `https://carers.org/triangle-of-care/the-triangle-of-care` — **403 to direct requests**; the scheme description and the six standards were read via extraction and the note says so.

No other source was excluded on access grounds. Every claim, criteria item, figure and quotation in the pack is traceable to text that was actually retrieved; **no quotation is fabricated and no criteria text or prevalence figure is invented.**

**Access routes used (disclosed in the relevant notes):**

- **NICE guidance** (NG53, NG59, NG206, NG222, NG116, CG103) was fetched as HTML and read directly. All sections cited are quoted or paraphrased from the fetched pages.
- **PMC articles** serve a script-only shell to automated requests, so full texts were read through the **Europe PMC REST full-text service** for the same records (Owen PMC10106283; Macneil PMC3523045; Cuijpers PMC11561681; Halvorsrud PMC6290527; AESOP-10 PMC5537567; the NG206 summary PMC9778354). Each affected reading note states this; PMC URLs in the pack were independently verified as resolving (HTTP 200).
- **The APA Cultural Formulation Interview PDF** was read via the extraction tool (the PDF itself also returns 200). The note records the copyright position and that the instrument is not a basis for diagnosis on its own.
- **StatPearls** ("Competency and Capacity", NBK532862) is cited once, as further clinician-facing background, with a note stating that the Bookshelf page returns only a partial view to automated extraction and that the reader should open it in a browser. Nothing load-bearing depends on it.

**Sources used, by publisher:** NICE (NG53, NG59, NG206 ×2 pages, NG222, NG116, CG103 — 7 URLs); WHO (community mental health services executive summary, mental health/human rights/legislation guidance, World mental health report — 3); legislation.gov.uk (MCA 2005 s.1 and s.3, MHA 1983 s.2 — 3); NHS (consent to treatment, insomnia — 2); NIMH (chronic illness and depression, mental health medications — 2); Royal College of Psychiatrists (carers, antidepressants — 2); PMC open access (6); APA (CFI PDF); GMC; Carers Trust; StatPearls/NCBI Bookshelf.

**Deliberate reuse with section-specific directions:** NG222 appears in lessons 52, 54, 56, 57 and 60, each time pointing at a different recommendation block (1.16.8–1.16.9; 1.2.1; 1.4.11–1.4.14; 1.5.1–1.5.3 and table 1; 1.1.1–1.1.4 and 1.16.6–1.16.9). Owen 2023 appears in lessons 51, 59 and 60 with different sections or endnotes each time. This is the contract's permitted reuse of a valid multi-section authoritative reading.

## Content accuracy constraints observed

- **Two quotations appear in the pack, both attributed to the source that reports them.** Lesson 51 quotes "almost entirely sterile" and "too muddled for the examination room" **as reported by Owen's review of the two textbooks**, not as text read from the textbooks themselves. This framing is in the lesson text.
- **Contested claims are presented as contested**, with what would settle them named: the biopsychosocial model's criticisms; the causes of ethnic disparities in pathways to care (misdiagnosis vs social disadvantage vs service response vs measurement), where the follow-up study's own misdiagnosis prediction is stated and reported as unresolved; the mechanisms behind medication lag (three competing explanations, relative contribution stated as unsettled); the common-versus-specific-factors debate; the July 2026 removal of NICE NG59's psychological-therapy recommendations (explicitly **not** a finding of ineffectiveness, and the removal is contrasted with genuine prohibitions elsewhere).
- **Evidence churn is taught rather than smoothed:** the NG59 removal, the NG206 post-COVID scope caveat, and the NG206 January 2025 surveillance status are all dated in the pack.
- **No deterministic neurotransmitter or single-mechanism claims** appear; medication timing is described as symptom-specific observation, and explanatory accounts are labelled as models or hypotheses.

## Clinical and safety constraints observed

- **Education only.** Every lesson states its scope in plain language and labels all cases as fictional. No diagnosis, no treatment or prescribing instruction, **no drug doses and no dose patterns of any kind** (verified by regex).
- **Lesson 56 reproduces guideline content about monitoring, continuation and stopping and states expressly that it "does not tell anyone what to take, when to start, when to stop, or how much of anything to use, and it contains no doses".** The same lesson frames the guidance's stopping material as a description of what guidance requires clinicians to discuss, not as advice to a reader.
- **Risk and prediction limits** are carried from lesson 46's material into 52 and 60 without re-teaching: escalation decisions are justified by unmet need, capability and legal authority, and every plan is given a review date because it can be wrong.
- **Coercion** is handled by separating lawfulness from justification, quoting MHA 1983 s.2's grounds, procedural requirements and 28-day limit descriptively, and using the WHO/OHCHR guidance's stated aims (including eliminating coercion) as the reason lawfulness and justification are different achievements. The lesson states it is not legal advice.
- **No public learner detail appears anywhere. No quiz is described as proof of professional competence.** No test file was modified.

## Unresolved limitations

1. **No clinical review has been performed.** This is the most important line in this handoff. The pack is source-grounded and written to the contract's education-only standard, but **no psychiatrist, psychologist, nurse or subject-matter expert has read it.** Every clinical-reasoning passage — the formulation method, the escalation reasoning, the capacity/coercion framing, the delirium material, the ME/CFS material, the medication-timing framing, the carer and confidentiality material, and the cultural formulation material — is unreviewed by a clinician. For this subject, subject-matter review before publishing is not optional in my view.
2. **IP ownership mismatch (unchanged from the 31–50 and 41–50 batches).** The contract assigns workers `src/lib/course-packs/<subject>.json`; this task mandated `staged/`. The parent should confirm the integration step expects `staged/psychiatry-51-60.json`.
3. **Validation is a faithful replication, not the real function.** All invariants pass in my re-implementation; the TypeScript was not executed. Integration and application tests remain the parent's.
4. **One secondary source carries a load-bearing position.** The NG206 position that fixed-increment exercise programmes should not be offered and that CBT is supportive rather than curative is quoted from a peer-reviewed open-access summary, because the guideline's own recommendations page returned only part of its content to automated fetching (the "Managing ME/CFS" section, 1.11, was not present in the fetched rendering). The guideline's own definitions (energy limit, energy management, post-exertional malaise, flare-up versus relapse, graded exercise therapy) were read from the guideline page itself. A teacher repeating the treatment position in class should read NG206 §1.11 directly.
5. **Two of the 29 sources are behind automated-request blocks** (GMC, Carers Trust). They were read via an extraction tool and the notes disclose this, but the reader should open both in a browser before relying on wording — the Carers Trust figure in particular lacks a stated base population, which the lesson says openly.
6. **StatPearls is the thinnest source in the pack** and least load-bearing: one lesson cites it as further background with an explicit partial-extraction caveat.
7. **The three computed figures are derivations from published numbers, not new data** (50.8 %, 910,000, 2.29). Each input is the source's own; the arithmetic is recorded above so it can be re-run, and each is labelled in the lesson as a computation from the cited figures.
8. **This is one level, not fulfilment of the 100-unit target.** The pack is inert in `staged/` and publishes only if the parent registers it explicitly. No claim of curriculum completeness is made.
9. **Russian and other-subject keys are absent by design.** No `russianItems` key exists anywhere in the pack, verified by regex.
