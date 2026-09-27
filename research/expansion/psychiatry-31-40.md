# Handoff: Psychiatry level, lesson IDs 31–40

**Subject slug:** `psychiatry`
**Batch type:** one new level, 2 units × 5 lessons, continuing after pre-existing content
**Status:** authored, validated, staged. NOT integrated, NOT deployed.

## Files written (only these two)

| Path | Contents |
|---|---|
| `src/lib/course-packs/staged/psychiatry-31-40.json` | Full course pack: one level, 2 units, 10 lessons (ids 31–40), 10 unit questions, 12 cumulative level questions |
| `research/expansion/psychiatry-31-40.md` | This handoff note |

No other file was created, edited, or deleted. `psychiatry.json`, the registry, `programs.ts`, and all tests are untouched. No server started, no deployment, no browser automation.

## Level and unit structure

**Level title:** *Syndromes, criteria, and the architecture of psychiatric knowledge*

This continues the existing level (lessons 21–30, "Clinical reasoning under uncertainty"). It assumes the earlier material on timelines, formulation, symptom measures, cultural context, acute change, treatment evidence, shared decisions, and safety planning, and moves into the structure of psychiatric knowledge itself: how observations become categories, what the categories actually specify, and how the main syndrome families and treatment modalities differ.

**Unit 1 — Assessment, criteria, and how psychiatric knowledge is constructed (lessons 31–35)**

| id | Title |
|---|---|
| 31 | Four levels of description: symptom, sign, syndrome, and diagnosis |
| 32 | The psychiatric history as structured inquiry |
| 33 | The mental status examination as structured observation |
| 34 | Differential reasoning and why medical causes come first |
| 35 | What DSM and ICD criteria actually specify, and what they cannot settle |

**Unit 2 — Syndrome families and the tools used to treat them (lessons 36–40)**

| id | Title |
|---|---|
| 36 | Mood syndromes: depressive and bipolar patterns |
| 37 | Psychotic syndromes and the boundaries between them |
| 38 | Fear, obsession, and trauma: three families that look alike |
| 39 | Medication classes: actions, burdens, and intellectual honesty |
| 40 | Psychotherapy modalities and the evidence that supports them |

Topic coverage against the brief: psychiatric assessment (history, mental status exam, differential) = 32–34; major syndrome categories and their criteria = 35–38; symptom vs syndrome vs diagnosis = 31 and 35; medication classes and side-effect profiles = 39; psychotherapy modalities and evidence base = 40; limits and controversies of DSM/ICD = 35 (with RDoC) and 40 (evidence specificity).

## Instructional word counts (computed in code, not estimated)

Counted as `words in explanation + example + all six depth fields`, using regex tokenisation `[\w'’-]+`.

| Lesson | Words |
|---|---|
| 31 | 1043 |
| 32 | 917 |
| 33 | 920 |
| 34 | 960 |
| 35 | 1045 |
| 36 | 966 |
| 37 | 965 |
| 38 | 982 |
| 39 | 1047 |
| 40 | 985 |
| **Total** | **9830** |

Minimum lesson: 917 (lesson 32). Floor required: 600. All ten lessons clear it with margin and no padding fields; mechanism text is composed per topic and does not repeat between lessons.

**Arithmetic checks recorded.** There are no numerical or clinical-quantity examples in this level, so no prevalence, dose, or effect-size figures required calculation — and none were invented. Every computed figure in this deliverable is a structural count, verified in code:

- lessons = 10 = 2 units × 5 (`[5, 5]`)
- unit questions = 10 = 2 units × 5 (`[5, 5]`)
- level cumulative questions = 12
- total questions = 32; answers distinct = 32/32; distractors distinct = 32/32; answer∩distractor = ∅
- distinct reading URLs = 19
- lesson ids = exactly `['31'…'40']`, ascending, unique, continuing past the existing maximum of 30

## Source verification

All 19 distinct URLs were fetched with `curl` over the live network and returned **HTTP 200**. No URL is invented, no video URL is present, and no quotation is fabricated.

**19 URLs, all 200:**

- NICE (9): NG222 depression, CG178 psychosis/schizophrenia, CG185 bipolar, CG113 GAD and panic, CG31 OCD and BDD, NG116 PTSD, CG103 delirium, plus reuse of NG222/CG178 across lessons
- NIMH (4): Anxiety Disorders, Schizophrenia, About RDoC, (plus RDoC reused)
- WHO (2): Mental disorders fact sheet, ICD-11
- NHS (2): Antidepressants, Talking therapies
- Royal College of Psychiatrists (1): Cognitive behavioural therapy (CBT)
- American Psychiatric Association (1): DSM-5 / DSM-5-TR
- StatPearls on NCBI Bookshelf (1): Mental Status Examination
- Merck Manual Professional (2): Initial Psychiatric Assessment; Medical Assessment of the Patient With Psychiatric Symptoms

**Content actually read before citing (not snippet-level).** The following were extracted and read, so the reading directions describe real sections:

- StatPearls MSE — the exact category list (appearance, behaviour, motor activity, speech, mood, affect, thought process, thought content, perceptual disturbances, cognition, insight, judgment) and the mood/affect distinction are quoted from the page.
- NIMH RDoC — the statements that RDoC is "not meant to serve as a diagnostic guide", is not intended to replace current diagnostic systems, and that consensus clinical criteria "are somewhat arbitrary" are taken verbatim from the fetched page and paraphrased in lesson 35.
- NIMH Anxiety — the "more than occasional worry" / does-not-go-away / interferes-with-daily-life framing is from the page.
- WHO fact sheet — the definition of a mental disorder as "a clinically significant disturbance in an individual's cognition, emotional regulation, or behaviour … usually associated with distress or impairment in important areas of functioning" is from the page.
- ICANN/ICD-11 — verified as the WHO's "global standard for diagnostic health information".
- NHS Antidepressants — the four main classes, SSRIs-being-first-and-why, and the withdrawal guidance are from the page.
- RCPsych CBT — the approach-to-problem table (behaviour therapy for phobias/anxiety/OCD/PTSD; behavioural activation for depression) is from the page.
- NHS Talking therapies — the therapy-type table (guided self-help, CBT, counselling, interpersonal therapy) is from the page.
- NICE CG178 §1.1.2 "Physical health" and CG178 §1.3 / NG222 §1.2 were confirmed by fetching the recommendation pages, which is why the lesson 39 direction cites 1.1.2 specifically.

**Access caveats recorded in the pack.** Several StatPearls/Merck pages intermittently present a browser-verification or honeypot step on this network; the pack states that the host may show a verification step, that Merck is written for clinicians, and that NICE guidance is for England with differing local pathways. APA's page is publisher material and the manual itself is a paid publication — stated in the reading note.

## Clinical and safety constraints observed

- Framed throughout as education, not diagnosis, treatment, or prescribing. Every lesson states its scope; fictional cases are labelled as fictional; no public learner detail appears.
- No prescribing content: lesson 39 gives no drug choice, dose, taper, or start/stop instruction, and its application task is explicitly "write questions for a prescriber".
- No deterministic neurotransmitter claims. Lesson 39 explicitly dismantles the "chemical imbalance" framing and contrasts drug action, class-level burden, and individual experience; NHS's own hedging language ("it's thought…") is the cited anchor.
- Criteria described structurally (polythetic lists, thresholds, duration, exclusion rules) rather than by reproducing criteria text from a copyrighted manual.
- Risk/safety content inherits the earlier level's framing; quizzes are nowhere presented as proof of professional competence.

## JSON contract conformance

Valid JSON (parsed with `json.load` after writing, and again after every edit). Structure matches the contract shape exactly: `subject`, `levels[].title`, `levels[].units[].title`, `units[].lessons[]`, `units[].questions[]`, `levels[].questions[]`. Each lesson carries `id, title, explanation, example, question, answer, distractor, correction, depth{6 fields}, readings[], visual{title, description, steps[]}`. **No `russianItems` key anywhere.** All `reviewLessonIds` resolve to valid ids in this pack (31–40) or the pre-existing pack (21–30).

## Unresolved limitations

1. **IP ownership mismatch.** The contract assigns workers `src/lib/course-packs/<subject>.json`, while this task mandated the `staged/` path. Written to `staged/` per the explicit task instruction. The parent should confirm the integration step expects `staged/psychiatry-31-40.json` and route it accordingly.
2. **Two Merck sources are cited on URL resolution plus page title only.** Their bodies are client-rendered and did not extract cleanly, so their reading directions name the assessment topics the page covers rather than quoting section headings. Both resolve HTTP 200. If the parent wants stricter grounding, swap these for StatPearls equivalents — but note StatPearls is captcha-gated on this network right now, so a re-verification pass may be needed.
3. **NICE section sub-numbering.** I initially cited NG222 §1.2.6–1.2.7 (matching the existing pack) but could not independently confirm those sub-numbers through the fetched page, so I softened the direction to §1.2. Any teacher-facing section links should be re-checked before publication.
4. **Prevalence and epidemiology.** The pack deliberately contains no prevalence figures beyond the WHO's own statements, because I could not verify finer numbers to the standard the contract requires. This is a scope choice, not an omission.
5. **Integration and application tests are the parent's.** No test file was modified and no claim of curriculum completeness is made. This is one level of a 100-unit target, not fulfillment of it.
6. **Not clinically reviewed.** Content is source-grounded and written to the contract's education-only standard, but it has not been reviewed by a clinician. Given the subject, a subject-matter review before publishing would be prudent.
