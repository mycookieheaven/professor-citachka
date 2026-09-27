# Russian level, lessons 71–80 — authoring handoff

## Files written (only these two)

- `src/lib/course-packs/staged/russian-71-80.json` — valid JSON, UTF-8, `indent=1` to match the
  style of `russian.json`, `russian-51-60.json` and `russian-61-70.json`. 229,387 bytes on disk
  (211,949 characters).
- `research/expansion/russian-71-80.md` (this note).

No other file in the repository was created or modified: `russian.json`, `russian-51-60.json`,
`russian-61-70.json`, the registry/catalog, `programs.ts`, tests and dependencies are untouched.
Nothing was deployed, no server was started, no browser automation was used. The staged file sits
in `src/lib/course-packs/staged/`, which `scripts/validate-packs.ts` does not scan
(its `readdirSync` is non-recursive), so it stays out of the published set until the parent moves
it. The only artefact outside the repository is a throwaway validator script under
`.hermes/profiles/citachka-ai/cache/scratch/`. The parent owns integration, registry wiring and
production verification.

Incremental saving: unit 1 (lessons 71–75 plus its five questions) was written to the final path as
a valid JSON checkpoint (~92 KB) before unit 2 was authored, so an interruption would have
preserved usable unit work. The final write replaced it with the complete two-unit level.

## Structure

One new level, `"Reading and holding a conversation: participles, subordination, and register"`,
containing two units of five lessons each, five unit questions per unit, and twelve cumulative level
questions.

- Unit 1 — `"Reading longer Russian: participles, gerunds, and the clauses they compress"` (71–75)
- Unit 2 — `"Hearing and speaking: reported speech, register, idiom, and long narration"` (76–80)
- Question IDs: unit 1 `uq-71-80-a` … `uq-71-80-e`; unit 2 `uq-71-80-f` … `uq-71-80-j`;
  level `lq-71-80-a` … `lq-71-80-l`. Every ID is namespaced with the level range `71-80`.

Prerequisites taken as given and not re-taught: the alphabet and stress (01–05, 31–50),
gender/agreement and adjectives (31–35, 41–45), clause joining and narration (46–50), the case
system in real sentences (51–55), aspect with past/present/future narration (56–60), dative and
instrumental (61–65), motion verbs, position verbs, imperatives and modality (66–70).

## Topic list, ten lessons

| ID | Topic | Instructional words | Russian items | Readings | Visual steps |
|---|---|---|---|---|---|
| 71 | Participles as a reading tool: recognizing причастия instead of translating them (-ущ-/-ющ-/-ащ-/-ящ-, -вш-, -ем-/-им-, -нн-/-т-; active vs passive; the который paraphrase; deverbal nouns vs participles) | 1372 | 15 | 7 | 6 |
| 72 | Gerunds as a reading tool: деепричастия and the 'while -ing' clause (-я/-а present, -в/-вши/-вшись past; same-subject rule; set expressions) | 1393 | 15 | 5 | 6 |
| 73 | Relative clauses with который: gender/number from the antecedent, case from the clause; box constructions | 1423 | 13 | 5 | 6 |
| 74 | Cause, purpose, and concession: потому что, так как, поэтому; чтобы + infinitive vs + past; для + Gen.; хотя, несмотря на | 1440 | 14 | 6 | 6 |
| 75 | Time expressions and sequencing: в + Acc./Prep., instrumental time, genitive dates, duration, тому назад, через, по + Dat.Pl., раз в; то, как correlatives | 1549 | 16 | 8 | 7 |
| 76 | Reported speech and hearsay: что, чтобы, the particle ли, no tense backshift; слышал, что vs слышал, как; говорят | 1446 | 13 | 6 | 7 |
| 77 | Hedging and politeness registers: ты/вы, -те, не in questions, наверное/может быть/кажется/пожалуй/вероятно, мне хочется, negated стать | 1514 | 15 | 6 | 6 |
| 78 | Idioms that resist word-for-word translation: ничего себе, валять дурака, бить баклуши, ни пуха ни пера / к чёрту, руки не доходят, не за что, кстати | 1439 | 15 | 7 | 6 |
| 79 | Telling a story with aspect contrast across a long narrative: foreground/background, negation tendency, out-of-the-blue questions, habit phrases, time markers | 1490 | 16 | 8 | 6 |
| 80 | Reading a short authentic-style text and holding five minutes about work and study: layered reading plus a five-turn speaking plan | 1589 | 17 | 8 | 6 |

Requested progression, in order: participles (71) → gerunds (72) → relative clauses (73) →
cause/purpose/concession (74) → time and sequencing (75) → reported speech and hearsay (76) →
hedging and politeness (77) → idioms (78) → long narrative with aspect contrast (79) →
reading an authentic-style text plus a five-minute conversation (80). Participles and gerunds were
split into two lessons rather than one, and the reading task and the conversation task were combined
into lesson 80, so the ten requested topics map onto ten lessons with room for real instruction.

## Word counts (computed in code, per the contract)

Instructional words = `explanation` + `example` + the six `depth` fields, summed per lesson with
Python `str.split()`.

- Level total: **14,655** instructional words (raw).
- Same count excluding tokens containing any Cyrillic character: **13,022**.
- Per-lesson floor: the minimum is **1,372** words (lesson 71), more than double the 600-word floor;
  the minimum on the stricter Cyrillic-excluded measure is **1,242**.
- Both figures are reported because the raw count treats a Cyrillic form, its spaced Latin
  pronunciation guide and its English gloss as separate tokens. The Cyrillic-excluded figure is the
  one that does not flatter the pack.
- Arithmetic was run in `execute_code`, not by hand: per-lesson sums, the level total, the floor
  check, question counts and the uniqueness sets below are all script outputs.

## Source verification

- 66 reading entries across the ten lessons, with **54 unique URLs**: 43 *Cornell Beginning Russian
  Grammar* pages, 7 Wikipedia pages, 4 Wiktionary entries. Every lesson cites at least five and
  three lessons cite eight (75, 79, 80).
- All 54 unique URLs were fetched on 2026-09-27 with `curl -s -L -A "Mozilla/5.0"`; every one
  returned HTTP **200**. No 403, 404 or redirect failures; every URL is `https:` with no credentials.
- Wikipedia anchors were verified as present in the live HTML, not assumed:
  `id="Adjectival_participle"`, `id="Adverbial_participle"`, `id="Subordination"`,
  `id="Coordination"`, `id="Adverbial_answers"` (all in `Russian_grammar`) and `id="Russian"`
  (in `Indirect_speech`).
- Page content, not only status, was read before citing. For example `gr14_a_b` really reduces the
  register contrast to "Written style participles = Conversational style который clauses";
  `gr14_a_c` really prints the same participle играющими with a present and a past main verb to show
  that tense follows the main clause; `le41_50_i` really states that который agrees with its
  antecedent in gender and number but takes its case from its own clause; `le71_78_g` really frames
  negation aspect as "a rough rule of thumb" and contrasts не решила with не решала;
  `le41_50_b` really calls the imperfective/plural-object affinity "somewhat vague… a statistical
  fact rather than a grammatical rule"; `ty_vy` really gives the rule of thumb to use вы until
  advised otherwise with an exception for small children and teenagers.
- The Cornell files are legacy 1991 documents whose accent glyphs render as unfamiliar characters in
  some browsers. The reading notes say so explicitly and direct the learner to read the Cyrillic for
  its suffixes and endings rather than for its accent marks. No quotation was reproduced where the
  legacy encoding made a form ambiguous.
- **No quotations were invented.** Every Cyrillic example printed inside the pack prose is either
  the documented example from the cited page or an authored model sentence constructed from the
  documented paradigms, and where a page's point is described rather than quoted the note says so.
- Wiktionary is cited only for four idiom entries and is labelled in the notes as a community-edited
  dictionary used for the entry, the sense and the stated etymology, not as an authority on usage.
- No video URL, embed or playback claim appears anywhere in the pack.

## Automated checks run on the final JSON

- `json.load` parses the file after the final write.
- Structure: exactly one level, two units, five lessons per unit, lesson IDs `"71"`–`"80"` in order
  and unique, five unit questions in each unit, exactly twelve level questions, 22 questions total
  with all IDs unique.
- Every lesson has all twelve required keys, a `depth` object with exactly the six contract fields,
  at least one reading with `title`/`url`/`note`, a `visual` with at least six labelled steps, and
  non-empty `russianItems` (149 items total) with `text`, `latin` and `meaning`.
- Uniqueness: no duplicated `answer` string and no duplicated `distractor` string anywhere in the
  pack (checked across the ten lesson question pairs, the ten unit questions and the twelve level
  questions). No question has `answer` equal to `distractor`.
- Pronunciation contract: every one of the 149 `latin` strings contains at least one uppercase
  letter. Standalone monosyllabic items are written in full uppercase (`SHTO`, `LEE`, `VY`, `TY`, `VDROOG`); monosyllables inside longer phrases stay lowercase where another syllable carries the
  mark (`mnye KHO-chet-sa`, `s TYEKH por`, `v SREE-doo`, `TAK kak`).
- Cyrillic-in-prose contract: every `russianItems.text` was confirmed programmatically to appear
  verbatim in that lesson's own prose (explanation, example, question, answer, distractor,
  correction, or a depth field).
- `reviewLessonIds` resolution: every reference resolves to a lesson in this pack (71–80) or to an
  existing lesson ID in the base Russian program or an earlier pack. References used:
  34, 56, 58, 59, 60, 62, 69, 71–80. **No dangling references.**
- Residue scan: no replacement characters, no `??`, no editing markers (`No:`, `? No`,
  `collecting-about`, `отрицание`, `должена`), no `.htmhttp` concatenations, no Cyrillic inside any
  `latin` field, no Latin/Cyrillic mixed-script tokens in prose.
- Real integration check: `attachCoursePacks(basePrograms, [...earlierPacks, thisPack])` was executed
  with `npx tsx` against the actual repository code. Result:
  `{"status":"valid","levels":8,"lastLevelTopics":["71",...,"80"],"totalTopics":80,"dupTotal":0}` —
  the pack attaches, Russian ends with 80 topics and nothing is duplicated. This exercises the same
  validator the published packs go through (theme floor, source URL safety, review-ID resolution,
  answer/distractor ambiguity, unit and level question counts, Russian item audio support).

## Unresolved limitations (honest list)

1. **No native-speaker or instructor proofreading has been done.** Every Russian form was composed
   from the documented paradigms and the cited teaching grammar; the pack has not been reviewed by a
   fluent speaker. This is the single most valuable next step before publishing, and it is a hard
   limit on any claim about individual forms.
2. **Transliteration is a scaffold, not a transcription.** Stress is marked with capitals and
   syllables are hyphenated, following the convention already deployed in lessons 31–70. Soft
   consonants (ь) are dropped in the Latin strings, unstressed vowel reduction is approximated, and
   no Latin spelling can teach palatalisation. The item audio is the authority for the real sounds.
3. **Word counts include the pronunciation guides.** Both figures are reported (14,655 raw / 13,022
   excluding Cyrillic tokens) rather than only the larger one.
4. **Scope is deliberately bounded.** This level teaches participles and gerunds as recognition
   devices only; it does not make them production targets, does not cover short-form passive
   participles systematically, does not derive secondary imperfectives, and does not treat the
   marginal cases. Where a point needs more than a lesson can carry — for instance the full set of
   verbs that reject чтобы plus an infinitive — the lesson cites the source rather than inventing a
   rule.
5. **The lesson 80 text is an authored model text, not a reproduced source text.** It is labelled as
   such inside the lesson, because the contract forbids inventing quotations and no licensed
   authentic passage was available to reproduce. It is written to authentic register (relative
   clause, instrumental profession, habitual imperfective sequence, concession, purpose clause,
   hedged future) but it is not evidence about any real company or person.
6. **Idiom coverage is a sample, not a system.** Seven idioms are treated in detail; Russian idiom is
   lexical and open-ended, so the lesson teaches a recognition method rather than a list.
7. **Register boundaries are conventions, not rules.** The ты/вы line varies by region and
   generation, as Cornell's own "rule of thumb" wording concedes, and the lesson says so.
8. **Audio not produced.** `russianItems` supply the item-level Slow/Natural controls the interface
   already expects; no recordings or narration text were made, and no autoplay is assumed.
9. **First-person models use feminine past forms** (закончила, работала, приехала) because the
   learner is a woman, with the masculine forms shown where the contrast matters. The pack does not
   claim to be gender-neutral in its models.
10. **Assessments are low-stakes.** The unit and level questions are recognition-and-reasoning checks
    on specific constructions. They are not evidence of general proficiency and nothing here should
    be reported as certifying or guaranteeing competence.
11. **Staged only.** The file is not registered, wired into a level map or published. Counts of
    delivered curriculum should not treat this level as integrated until the parent wires and deploys
    it and verifies the live routes.
