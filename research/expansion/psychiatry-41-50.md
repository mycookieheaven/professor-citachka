# Handoff: Psychiatry level, lesson IDs 41–50

**Subject slug:** `psychiatry`
**Batch type:** one new level, 2 units × 5 lessons, continuing after the published 31–40 level
**Status:** authored, validated, staged. NOT integrated, NOT deployed, NOT clinically reviewed.

## Files written (only these two)

| Path | Contents |
|---|---|
| `src/lib/course-packs/staged/psychiatry-41-50.json` | Full course pack: one level, 2 units, 10 lessons (ids 41–50), 10 unit questions, 12 cumulative level questions. 189,504 bytes on disk. |
| `research/expansion/psychiatry-41-50.md` | This handoff note |

No other file was created, edited, or deleted. `git status --porcelain` in the repo root reports exactly three entries, none of them mine apart from the staged pack:

```
 M artifacts/pedagogy/production-route-readback.json   (pre-existing, not touched by me)
?? research/expansion/music-41-50.md            (another worker's file)
?? src/lib/course-packs/staged/                 (untracked dir; my pack sits beside other workers' packs)
```

`psychiatry.json`, `psychiatry-31-40.json`, the registry, `programs.ts`, `course-pack.ts`, `scripts/validate-packs.ts` and all tests are untouched. No server started, no deployment, no browser automation, no `russianItems` key anywhere.

## Level and unit structure

**Level title:** *Symptoms, structure, or circumstance: separating what is experienced from what is explained*

Continues from 31–40 ("Syndromes, criteria, and the architecture of psychiatric knowledge") and from 21–30. It assumes the earlier material on timelines, formulation, criteria structure, syndrome families and treatment classes, and turns to the boundary cases where a presentation is easy to misname: behaviour mistaken for illness, substances mistaken for psychosis, an adult presentation mistaken for a recent decline, a trait pattern mistaken for a disorder, memory mistaken for a transcript, and a risk band mistaken for a prediction.

**Unit 1 — Distinguishing the experience, the adaptation, and the alternative explanation (lessons 41–45)**

| id | Title |
|---|---|
| 41 | Symptom or coping strategy: separating what a person experiences from what they do about it |
| 42 | Substance use, intoxication, and withdrawal as diagnostic confounders |
| 43 | Neurodevelopmental presentations across the lifespan |
| 44 | Personality structure versus personality disorder |
| 45 | Trauma-informed assessment, and why a memory report is not a transcript |

**Unit 2 — Risk, treatment, recovery, and reading the evidence (lessons 46–50)**

| id | Title |
|---|---|
| 46 | Risk assessment and the real limits of prediction |
| 47 | What the evidence for psychological therapies does and does not support |
| 48 | Rehabilitation and recovery-oriented practice |
| 49 | Stigma, language, and iatrogenic harm |
| 50 | How to read a psychiatric study critically |

Coverage against the brief: symptom vs coping strategy = 41 (revisited in 50 and in `lq-41-50-j`); substance use/withdrawal as confounder = 42; neurodevelopmental across the lifespan = 43; personality structure vs disorder = 44; trauma-informed assessment and memory reports = 45; risk assessment and predictive limits = 46; evidence base and limits of psychological therapies = 47; rehabilitation and recovery = 48; stigma, language, iatrogenic harm = 49; reading a psychiatric study critically = 50. The 12 cumulative questions deliberately span lesson pairs (41+42, 41+44, 43+42, 43+46+44, 45+49, 46+47, 50+47, 47+50, 48+46, 49+41, 42+43+41, 46+47+48+49).

## Instructional word counts (computed in code, not estimated)

Two counts are reported because the codebase's own validator tokenises differently from a regex count. `scripts/validate-packs.ts` and `src/lib/course-pack.ts` both use `join(' ').trim().split(/\s+/)`; my handoff also reports a `[\w'’-]+` regex count. Both are computed below from the file on disk.

| Lesson | Validator method (whitespace) | Regex method |
|---|---|---|
| 41 | 1545 | 1552 |
| 42 | 1618 | 1626 |
| 43 | 1626 | 1636 |
| 44 | 1740 | 1757 |
| 45 | 1773 | 1780 |
| 46 | 1693 | 1708 |
| 47 | 1650 | 1664 |
| 48 | 1601 | 1611 |
| 49 | 1715 | 1732 |
| 50 | 1908 | 1929 |
| **Total** | **16,869** | **16,995** |

Counted as `explanation + example + all six depth fields`. Minimum lesson: 1545 words (lesson 41) against a 600-word floor, i.e. 2.6× the floor. No field is padding: each lesson's `mechanism` is composed for its own topic and no mechanism text is repeated between lessons (checked by eye across all ten; the shared term "limits" appears with different content each time).

## Arithmetic checks (all computed in code, recorded here)

1. **Base-rate / positive predictive value demonstration in lesson 46.** N = 1000, prevalence = 1% → 10 cases; sensitivity 0.80 → TP = 8, FN = 2; specificity 0.70 → FP = 0.30 × 990 = 297, TN = 693. Flagged = 8 + 297 = 305. PPV = 8/305 = 0.0262 = **2.6%**. False-positive share of flagged = 297/305 = **97.4%**, written in the lesson as "roughly 97 per cent". This is a **constructed teaching illustration**, labelled as such in the lesson text and in the visual, and is not the performance of any real instrument.
2. **Publication-bias figures in lesson 47.** 13 of 55 funded grants = 13/55 = **23.6%**, matching the source. Pooled effect g = 0.52 published → g = 0.39 with unpublished studies restored; 1 − 0.39/0.52 = **25.0%**, matching the source's "by 25%".
3. **Prevalence figures in lesson 44.** StatPearls (citing WHO) gives an overall personality-disorder prevalence of 6.1% and cluster estimates of 3.6%, 1.5%, 2.7%. Those three sum to **7.8%**, which exceeds the overall figure. The lesson reports this arithmetic openly as evidence that the published estimates come from different sources and designs rather than forming a reconciled ledger. No figure was invented and none was adjusted.
4. Structural counts: lessons = 10 = 2 units × 5 (`[5, 5]`); unit questions = 10 = `[5, 5]`; level questions = 12; total questions = 22; distinct answer strings = 22/22; distinct distractor strings = 22/22; answer ∩ distractor = ∅; distinct reading URLs = 31; lesson ids exactly `['41'…'50']`, unique and ascending.

## Structural validation performed

Two independent checks, both run after the final write:

- **JSON parse:** `json.loads` on the written file succeeds.
- **Replicated `attachCoursePacks` invariants:** I re-implemented every assertion in `src/lib/course-pack.ts` in Python and ran it against the pack. Result: **ALL PASS**. That covers: known subject; ≥1 level with a title and ≥2 units; ≥5 lessons per unit; lesson ID matches `/^\d{2,}$/` and is not a duplicate; all seven required lesson strings non-empty; `answer !== distractor`; all six depth fields non-empty; ≥600 words by the validator's own tokenisation; ≥1 reading per lesson with a credential-free `https:` URL, title and note; a visual with a title, description and ≥3 non-empty steps; ≥5 questions per unit; ≥12 level questions and more level questions than any unit quiz; every question's `reviewLessonIds` resolving to a lesson ID already registered.

I did **not** run the real `attachCoursePacks` or `scripts/validate-packs.ts`, for two reasons: `scripts/validate-packs.ts` only scans `src/lib/course-packs/*.json` and my pack is in `staged/`, and the contract assigns application integration and TDD to the parent. The replication is faithful to the source I read, but it is a replication, not the real function.

## Source verification

**All 31 distinct reading URLs in the pack were fetched with `curl` over the live network and returned HTTP 200.** Full list checked, zero non-200. No URL is invented, no video URL is present, and no quotation, criteria text or prevalence figure is fabricated.

Sources used, by publisher:

- **NICE (9):** NG225 self-harm recommendations; NG225 rationale-and-impact; NG58 dual diagnosis; CG78 borderline personality disorder; NG87 ADHD; CG142 autism in adults; NG116 PTSD; NG222 depression; NG181 rehabilitation for adults with complex psychosis.
- **WHO (3):** Alcohol fact sheet; Autism fact sheet; Suicide fact sheet; plus the World Mental Health Report overview page (4 WHO pages in total).
- **NHS (2):** "Why people self-harm"; "Talking therapies".
- **NIMH (1):** Co-occurring substance use and mental disorders.
- **Royal College of Psychiatrists (1):** Personality disorder.
- **StatPearls on the NCBI Bookshelf (2):** Alcohol Withdrawal Syndrome (NBK441882); Personality Disorder (NBK556058).
- **PMC open-access (5):** Rubin et al. on trauma-memory coherence (PMC2928852); Brewin, "Memory and Forgetting" (PMC6132786); a CHIME companion review (PMC8715254); "How to read a clinical trial paper" (PMC3380258); "Interpreting Randomized Controlled Trials" (PMC10571666).
- **Other verified (4):** Driessen et al. 2015 in PLOS ONE; Leamy et al. 2011 via its DOI landing page; Mind's "Talking about mental health" media guidelines PDF; SPIRIT-CONSORT; the EQUATOR Network; the Cochrane Handbook; NICE's "How we develop NICE guidelines".

**Content actually read before citing.** Every reading direction names sections I retrieved and read, not sections inferred from a snippet:

- NHS "Why people self-harm" — the function list (intrusive thoughts, cry for help, relief of unbearable distress, self-punishment, control, expressing or coping with distress), the "Common causes of emotional distress" list, and the "Self-harm and suicide" statement that not everyone who self-harms wants to end their life, are all from the fetched page.
- NICE NG225 — §1.6.1–1.6.6 were read verbatim on the recommendations page ("Do not use risk assessment tools and scales to predict future suicide or repetition of self-harm", etc.). §1.1.1's inclusion of "the impact of encountering stigma around self-harm", §1.1.4's discrimination list, §1.14.2's training content, §1.6.6's requirement for a risk formulation, and §1.4.2's prohibition on triggers such as noisy wards and restraint (NG116) are all likewise from the fetched pages. The rationale-and-impact page was fetched and its committee reasoning was read.
- StatPearls Alcohol Withdrawal — the symptom timeline, the 48-hour hallucinosis resolution, the 3-to-8-day delirium window, the 3–5% progression estimate, the kindling observation, the CIWA-Ar bands (≤8 mild, 8–15 moderate, >15 severe) and the note that CIWA-Ar cannot be used in a non-alert patient are all from the fetched page.
- StatPearls Personality Disorder — the DSM-5-TR definition including the "norms and expectations of the surrounding culture" clause, the WHO-derived 6.1% prevalence and cluster estimates, the countertransference-as-evaluation-tool passage, the antisocial-PD remission finding, and the "Enhancing Healthcare Team Outcomes" warning about overmedicalisation and iatrogenic harm are from the fetched page.
- WHO Autism — the 1-in-127 (2021) estimate, the "often not diagnosed until much later" statement, the prevalence-varies caveat, and the MMR section (study withdrawn, author struck off) are from the fetched page.
- RCPsych Personality disorder — the trait domains (negative affectivity, detachment, dissociality, disinhibition, anankastia), the severity ladder including "personality difficulty" as explicitly not a diagnosis, the "some of these terms are now considered stigmatising" statement about the pre-2019 categories, the "upsetting and hurtful … does not mean there is something wrong with who you are" passage, and the sections "Do people with a personality disorder diagnosis get better?" and "What happens if someone doesn't get help?" are from the fetched page. **I deliberately did not quote the 4.4% UK prevalence figure or the 50–70% BPD improvement figure**, because both appeared only in a search-engine rendering of a translated mirror and not in the page body I retrieved.
- Rubin et al. and Brewin — the findings used (trauma memories not more incoherent than comparison memories; the global-narrative versus frightening-moment-episodic distinction; ICD-11's emphasis on intrusions relived in the present; the list of reasons repeated events may be forgotten) are from the fetched article text.
- Driessen et al. — abstract numbers read on the PLOS page, including the authors' own limitation that outcome reporting bias could not be examined quantitatively.
- CONSORT — "a 30-item checklist and a flow diagram" (CONSORT 2025) and "a 34-item checklist" (SPIRIT 2025) are on the fetched landing page.
- Cochrane Handbook — chapter titles (8, 13, 14, 15) were read from the fetched contents page.
- NICE "How we develop NICE guidelines" — the seven process steps and the "quality of the evidence / expert testimony / how they will be used in practice" list are from the fetched page.
- NHS Talking therapies — the therapy-type table (guided self-help, counselling, interpersonal therapy, dynamic interpersonal therapy, couples therapy, EMDR, MBCT) and the "depends on what you need it for and what's available in your area" sentence are from the fetched page.
- WHO World Mental Health Report overview page — retrieved and its framing read.

**Access caveats recorded in the pack:**

- WHO fact-sheet **Key facts panels are rendered dynamically**, so the lesson 46 note tells the reader to open the Suicide page in a browser rather than rely on an extract.
- **StatPearls** is clinician-facing study material and its host may intermittently present a verification step to automated requests; both StatPearls notes say so.
- **Leamy et al. is paywalled.** Lesson 48 uses the DOI landing page for the free abstract and pairs it with a free open-access review that describes CHIME, with the note saying exactly that.
- NICE guidance is written **for England**, and several reading notes say so. NICE CG78 **predates** the dimensional reclassification, and lesson 44's reading note tells the reader to compare the two rather than read either alone.
- **The Lancet Commission on ending stigma and discrimination in mental health returned HTTP 403 to automated requests** (`thelancet.com/journals/lancet/article/PIIS0140-6736(22)01470-2/fulltext`). I therefore **did not cite it at all**; lesson 49 relies on Mind, NICE NG225 and the RCPsych page instead. Recorded here because its person-first-language position is the same as Mind's, so nothing was lost, but the exclusion is deliberate rather than an oversight.

## Clinical and safety constraints observed

- Framed throughout as **education, not diagnosis, treatment or prescribing**. Every lesson states its scope; all cases are labelled fictional; explicit "constructed illustration" labelling was added to the risk arithmetic and the visual that renders it.
- **No prescribing content.** No drug choice, dose, taper, or start/stop instruction appears. Medications are named only where a source names them and never with an instruction. Lesson 43's NG87 reading note states explicitly that none of the guideline's medication content is used.
- **No deterministic neurotransmitter claims.** Lesson 42 presents the GABA/glutamate shift as a published explanatory model and says outright that it is "a useful organising description … not a licence to explain any individual person's presentation from a single transmitter story", with the same source's own emphasis on history, examination and severity scales rather than biochemistry.
- **Risk prediction limits** are handled with the guideline's verbatim prohibitions plus the committee's own reasoning, and the lesson states that abandoning tools is not the same as ignoring risk (NG225 still requires a risk formulation in every psychosocial assessment).
- **Memory reports** are handled symmetrically: the lesson warns against treating a vivid detailed account as proof *and* against treating gaps or inconsistency as fabrication.
- No public learner detail appears anywhere. No quiz is described as proof of professional competence.

## Unresolved limitations

1. **Not clinically reviewed.** This is the most important line in this handoff. The content is source-grounded and written to the contract's education-only standard, but **no clinician has reviewed it**, and no psychiatrist, psychologist or subject-matter expert has checked the clinical reasoning, the framing of the risk material, the trauma material, or the neurodevelopmental material. Given the subject, subject-matter review before publishing is not optional in my view.
2. **IP ownership mismatch.** The contract assigns workers `src/lib/course-packs/<subject>.json`; this task mandated the `staged/` path, as it did for the 31–40 batch. The parent should confirm the integration step expects `staged/psychiatry-41-50.json` and route it accordingly.
3. **Validation is a faithful replication, not the real function.** I re-implemented `attachCoursePacks`'s invariants from source and they all pass, but I did not execute the TypeScript. Integration and application tests remain the parent's.
4. **One regulatory-reasoning reading is a generated summary, not the primary guideline.** `PMIDs` are not used; the two StatPearls chapters are third-party summaries written for clinicians. They are accurate where I read them and I quoted dated figures from them, but a primary guideline is preferable for any figure that a teacher will repeat in class.
5. **The base-rate example in lesson 46 is constructed.** It is labelled as such in three places, but a reader skimming will see numbers and may take them for a validated instrument. If the parent wants a real instrument's operating characteristics, that would require a specific paper and a specific population, which was outside this batch's scope.
6. **No prevalence figures beyond what the sources state.** The pack contains WHO alcohol figures (2.6 million deaths in 2019; ~400 million with alcohol use disorders; ~209 million with dependence), the WHO autism estimate (about 1 in 127 in 2021), and the StatPearls personality-disorder estimates. Nothing else, because nothing else could be verified to the standard the contract requires. This is a scope choice, not an omission.
7. **No numerical clinical-quantity examples** (no doses, no effect sizes beyond the Driessen figures) were included, so the only arithmetic requiring a tool was the three checks recorded above. All three are recorded with their inputs so they can be re-run.
8. **Russian and other-subject keys are absent by design**, and no `russianItems` key exists anywhere in the pack.
9. **This is one level of a 100-unit target, not fulfilment of it.** No test file was modified and no claim of curriculum completeness is made. The pack is inert in `staged/` and publishes only if the parent registers it explicitly.
