# Russian level, lessons 61–70 — authoring handoff

## Files written (only these two)

- `src/lib/course-packs/staged/russian-61-70.json` — valid JSON, UTF-8, `indent=1` to match `russian.json` / `russian-51-60.json` style. 181,099 bytes / 166,041 characters (the intermediate unit-1 checkpoint was 73,602 bytes).
- `research/expansion/russian-61-70.md` (this note).

The `src/lib/course-packs/staged/` directory did not exist in this workspace and was created for the deliverable. No other file was created or modified: `russian.json`, `russian-51-60.json`, the registry/catalog, `programs.ts`, tests, and dependencies are untouched. Nothing was deployed, no server was started, no browser automation was used, and no intermediate checkpoints were left behind outside the scratch directory (`.hermes/profiles/citachka-ai/cache/scratch`, which is outside the repository). The parent owns integration, registry wiring, and production verification.

Incremental saving: unit 1 (lessons 61–65 plus its five questions) was written to the final path as a valid JSON checkpoint before unit 2 was authored, so an interruption would have preserved usable unit work. The final write replaced it with the complete two-unit level.

## Structure

One new level, `"Recipients, means, and motion: cases that carry a conversation"`, containing two units of five lessons each, five unit questions per unit, and twelve cumulative level questions.

- Unit 1 — `"Whom you give it to and what you use: dative and instrumental in action"` (lessons 61–65)
- Unit 2 — `"Getting there, staying put, and saying what must be done"` (lessons 66–70)
- Question IDs: unit 1 `uq-61-70-a` … `uq-61-70-e`; unit 2 `uq-61-70-f` … `uq-61-70-j`; level `lq-61-70-a` … `lq-61-70-l`. Every ID is namespaced with the level range `61-70`, so nothing can collide with another pack.

Prerequisites taken as given and not re-taught: the alphabet, greetings, gender and agreement (31–35, 41–45), clause joining and narration (46–50), accusative/prepositional/genitive introductions and the first dative and instrumental lesson (31–35), motion pairs and past agreement (36–40), case combinations (51–55), and aspect with past/present/future narration (56–60). Lesson 35 introduced the dative recipient and the instrumental of means and accompaniment at phrase level; this level makes both productive and pushes into impersonal constructions, prefixation, position verbs, modality, and counterfactual conditions.

## Topic list, ten lessons

| ID | Topic | Instructional words (raw) | Excl. Cyrillic tokens | Russian items | Readings | Visual steps |
|---|---|---|---|---|---|---|
| 61 | The dative for the recipient: whom you give, write, or speak to (endings -у/-ю, -е, -ии, -ам/-ям; pronoun set; verb government) | 1086 | 971 | 12 | 3 | 5 |
| 62 | Impersonal sentences: Мне холодно, мне нужно, мне нравится (o-forms, нужен agreement, нравиться as a different machine, было/будет) | 1122 | 1020 | 12 | 4 | 6 |
| 63 | Instrumental for the means: writing with a pen, paying by card (bare instrumental, no preposition; -ом/-ем, -ой/-ей, -ью, -ами/-ями) | 1183 | 1068 | 12 | 3 | 6 |
| 64 | Instrumental for company and roles: с другом, работает врачом (с + Inst. vs с + Gen.; linking verbs работать/стать/быть/считаться) | 1148 | 1013 | 13 | 4 | 6 |
| 65 | One transaction, four roles: role-labelling routine across a real exchange (unit synthesis) | 1222 | 1122 | 8 | 3 | 6 |
| 66 | Going and going regularly: идти/ходить, ехать/ездить, пойти/поехать/сходить/съездить, transport phrases, пешком | 1214 | 1053 | 14 | 5 | 6 |
| 67 | Prefixes give the path: прийти, уйти, выйти, дойти (в-/вы-/при-/у-/от-/до-/пере-/под-/за-/про-; куда/откуда/где) | 1242 | 1068 | 12 | 6 | 6 |
| 68 | Where things are and how they get there: стоять, лежать, сидеть; ставить/класть; state vs change, где/куда | 1200 | 1057 | 12 | 3 | 6 |
| 69 | Commands, requests, and obligation: садитесь, сядьте, вы должны (imperative -и/-ь/-й + -те; aspect in commands; должен vs надо/нужно) | 1218 | 1098 | 12 | 5 | 6 |
| 70 | Plans, permission, and unreal conditions: можно, нельзя, если бы (aspect with нельзя; не надо ambiguity; собираться; two verbs in a row; бы + л-form) | 1320 | 1131 | 15 | 6 | 7 |

The requested progression is covered in this order: dative recipients (61) → impersonal dative constructions (62) → instrumental of means (63) → instrumental of accompaniment and role predicates (64) → multi-case synthesis (65) → motion verb families and direction (66, 67) → verbs of position (68) → aspect in commands and requests plus obligation (69) → permission, counterfactual conditions, and a multi-sentence conversation about plans (70).

## Word counts (computed in code, per the contract)

Instructional words = `explanation` + `example` + the six `depth` fields, summed per lesson with Python `str.split()`.

- Level total: **11,955** instructional words (raw).
- Same count excluding tokens that contain any Cyrillic character: **10,601**.
- Per-lesson floor: every lesson clears 600 raw words by a wide margin (minimum 1086, lesson 61) and also clears 600 by the stricter Cyrillic-excluded measure (minimum 971).
- Both figures are reported because the raw count treats the Cyrillic form, its spaced Latin pronunciation guide, and the English gloss as separate tokens. The Cyrillic-excluded figure is the one that does not flatter the pack.
- Arithmetic checks were run in `execute_code`, not by hand: per-lesson sums, the level total, question counts, and the uniqueness sets below are all script outputs.

## Source verification

- 42 reading entries across the ten lessons, with **41 unique URLs** (36 Cornell, 5 Wikipedia); every lesson has at least one and two lessons cite six (67 and 70).
- All 41 URLs were fetched on 2026-09-27 with `curl -s -L -A "Mozilla/5.0"`; all returned HTTP **200**. No 403, 404, or redirect failures.
- 36 of the 41 are pages of the *Cornell Beginning Russian Grammar* (R. L. Leed, A. D. Nakhimovsky, A. S. Nakhimovsky, © 1981/1982/1991), reached through its Table of Contents and Subject Index: `gr05_a_1_a`, `gr05_a_2_1`, `gr05_a_2_3`, `gr05_a_2_4` (dative endings, dative-taking verbs, dative with o-forms, dative with нужен); `gr05_b_1`, `gr05_b_2` (preposition meanings; verb government); `gr06_a_1_a`, `gr06_a_2_1`, `gr06_a_2_2`, `gr06_a_2_3`, `le41_50_d`, `le103_110_k` (instrumental endings, by means of, с/под/между/за, работать, с instrumental vs genitive, linking verbs); `gr10_c`, `le71_78_n`, `le79_86_j`, `le95_102_c`, `le103_110_a`, `le103_110_e` (imperative endings, full imperative rules, polite imperatives, должен, надо and мочь with не, можно/нельзя); `gr11_b_a`, `gr11_b_b`, `le79_86_k` (position verbs, their conjugation, motion vs location); `gr12_a_a`, `gr12_a_c`, `le57_62_i`, `le71_78_m` (motion pairs, perfective motion, round trip vs one-way, travelling by X); `gr12_b_a`, `gr12_b_b`, `gr12_b_c`, `gr12_b_e`, `gr13_c_c`, `gr13_c_d` (prefixed motion, conjugation of -йти/-ходить, more prefixed pairs, от-/у-/вы-, до-, за-); `gr12_c_a`, `gr12_c_c`, `le87_94_d` (real and unreal conditions, unreal verb forms, бы plus л-forms); `le71_78_f` (two verbs in a row); and `le31_40_d` (past and future of short adjectives, used to confirm the tense pattern with нужен).
- 5 of the 41 are Wikipedia pages, used as encyclopaedia-level corroboration only, with the notes saying so: `Russian_declension` (dative and instrumental forms, pronouns), `Instrumental_case` (endings, and the warning that English *with* covers instrumental, comitative and other relations), `Russian_grammar#Impersonal_sentences`, `Russian_grammar#Verbs_of_motion`, and `Conditional_mood#Russian`.
- Anchor verification, not just page status: `id="Impersonal_sentences"`, `id="Verbs_of_motion"`, and `id="Russian"` were each confirmed present in the live HTML of the pages they are cited from.
- Page content, not only status, was read before citing: for example `gr05_a_2_3` really opens with the rule that predicate forms ending in -o govern the dative, `gr06_a_2_1` really states that no preposition is used and that adding с changes the meaning, `gr12_a_a` really opens with the two-column one-way/non-one-way table and an irregular past шёл, шла, шли, `gr12_b_a` really states that a prefixed one-way verb is perfective with its imperfective partner being the prefixed non-one-way verb, and `le103_110_k` really gives Он врач against Он работает врачом and says the category of linking verbs is vague.
- Access caveats are stated inside the readings where relevant: the Cornell files are legacy documents whose encoding renders stress marks as unfamiliar glyphs, so the notes tell the learner to read Cyrillic forms for their endings rather than for their accent marks.
- **No quotations were invented.** Where a source's legacy encoding made a Cyrillic form ambiguous (for instance the after-dinner buying example on `le71_78_f`), the reading note describes the page's point in English instead of reproducing a form I could not verify. No video URL, embed, or playback claim appears anywhere in the pack.

## Automated checks run on the final JSON

- `json.load` parses the file after the final write (re-parsed after the post-write text repairs).
- Structure: exactly one level, two units, five lessons per unit, lesson IDs `"61"`–`"70"` in order and unique, five unit questions in each unit, exactly twelve level questions, 22 questions in total with all IDs unique.
- Every lesson has all twelve required keys, a `depth` object with exactly the six contract fields in order, at least one reading with `title`/`url`/`note`, a `visual` with at least five labelled steps, and non-empty `russianItems` with `text`, `latin`, and `meaning` (122 items total). No empty `explanation`, `example`, `question`, `answer`, `distractor`, or `correction` fields.
- Uniqueness: no duplicated `answer` string and no duplicated `distractor` string anywhere in the pack (checked across the ten lesson question pairs, the ten unit questions, and the twelve level questions).
- `reviewLessonIds` resolution: every reference resolves either to a lesson in this pack (61–70) or to an existing lesson ID in `src/lib/course-packs/russian.json` and `russian-51-60.json` (31–60). **No dangling references.** Lessons cited from the earlier packs are 35, 37, 49, 52, 53, 56, 57, 58, and 59.
- Cyrillic-in-prose contract: every `russianItems.text` was confirmed to appear verbatim in that lesson's own prose (explanation, example, question, answer, distractor, correction, or a depth field), so each item sits beside a stressed Latin pronunciation and an English gloss in the instruction text as well as in the item list.
- Mixed-script scan: a script-checked scan for tokens mixing Latin and Cyrillic letters found 13 flags, all of which were either intentional hyphenated compounds (`нужен-family`, `с-plus-genitive`, `читать-style`, `л-form`) or slash-joined verb-pair notation, plus two genuine defects that were repaired — a Latin transliteration in lesson 66 containing a Cyrillic `а`, and slash-joined prefixed verb pairs in lesson 67 rewritten with spaces. No Cyrillic characters remain in any `latin` field.
- Artifact scan for editing residue (`No:`, `? No`, `collecting-about`, `отрицание`, `должена`, mojibake sequences) is clean after repair.

## Unresolved limitations (honest list)

1. **No native-speaker or instructor proofreading.** Every Russian form was composed from the documented paradigms and the cited teaching grammar, and the pack has not been reviewed by a fluent speaker. This is the single most valuable next step before publishing, and it is a hard limitation on any claim about the accuracy of individual forms.
2. **Transliteration is a scaffold, not a transcription.** Stress is marked with capitals and syllables are hyphenated, following the convention already deployed in lessons 31–50 and 51–60. Soft consonants (ь) are dropped in the Latin strings, unstressed vowel reduction is approximated, and no Latin spelling can teach palatalisation. The reading notes point learners to the item audio for the real sounds.
3. **Word counts include the pronunciation guides.** Reported both ways (11,955 raw / 10,601 excluding Cyrillic tokens) rather than quoting only the larger figure.
4. **Scope is deliberately bounded.** This level does not teach participles, gerunds, deverbal nouns, the full system of aspect under negation, secondary imperfective derivation as a productive skill, the marginal cases, or dative plurals of adjectives beyond the forms used. Where a point needs more than this level can carry — the fine distinction among от-, у-, and вы- with carrying verbs, or the ambiguity of не надо — the lesson says so and points to the source instead of inventing a rule.
5. **Genuine gaps flagged as look-ups rather than rules.** The stressed locative (на мосту), irregular imperative forms, and per-verb government patterns are presented as dictionary facts, because the sources themselves say a dictionary settles them.
6. **The "-l form" label in the conditional lesson** is a pedagogical nickname for the past-tense shape used as a mood marker with бы; the sources use the same nickname, and the lesson cites the source statement that Russian, unlike English, does not distinguish hypothetical from contrary-to-fact in this construction.
7. **Audio not produced.** `russianItems` supply the item-level Slow/Natural controls the interface already expects; no recordings or narration text were made, and no autoplay is assumed anywhere.
8. **First-person models use feminine past forms** (купила, ходила, была, поехала) because the learner is a woman, with the masculine forms shown where the contrast matters. The pack does not claim to be gender-neutral in its models.
9. **Assessments are low-stakes.** The unit and level questions are recognition-and-reasoning checks on specific constructions. They are not evidence of general proficiency in Russian, and nothing here should be reported as certifying or guaranteeing competence.
10. **Staged only.** The file is not registered, wired into a level map, or published. Counts of delivered curriculum should not treat this level as integrated until the parent wires and deploys it and verifies the live routes.
