# Russian level, lessons 51–60 — authoring handoff

## Files written (only these two)

- `src/lib/course-packs/staged/russian-51-60.json` (~139 KB, valid JSON, UTF-8, `indent=1` matching `russian.json` style)
- `research/expansion/russian-51-60.md` (this note)

No other file was created or modified. I did not touch `src/lib/course-packs/russian.json`, the registry, `programs.ts`, tests, catalogs, or dependencies. Nothing was deployed, no server was started, and no browser automation was used. The parent owns integration, registry wiring, and production verification.

## Structure

One new level, `"Cases in real sentences, verb aspect, and narrating time"`, containing two units of five lessons each, five unit questions per unit, and twelve cumulative level questions.

- Unit 1 — "Cases that carry a whole sentence: object, place, and source" (lessons 51–55, questions `uq-51-a`–`uq-51-e`)
- Unit 2 — "Aspect and narrating past, present, and future" (lessons 56–60, questions `uq-56-a`–`uq-56-e`)
- Level questions `lq-51-a`–`lq-51-l` (12)

Lesson IDs 51–60 continue after the preexisting content. Prerequisites taken as given (not re-taught): alphabet, greetings, gender/agreement, comparison/quantity (41–45), clause joining and narration markers (46–50), accusative/prepositional/genitive/dative/instrumental introductions (31–35), motion pairs, past agreement, and the first aspect contrast (36–40).

## Topic list, one level, ten lessons

| ID | Topic | Instructional words (raw) | Excl. Cyrillic tokens | Items | Readings |
|---|---|---|---|---|---|
| 51 | The accusative for people and for things (animacy; genitive-shaped objects) | 1104 | 1037 | 5 | 2 |
| 52 | Location and topic in the prepositional case (-е, -ии, о/об) | 1100 | 972 | 5 | 3 |
| 53 | The genitive after prepositions: origin, absence, purpose (из/от, без, для, около, до, у) | 1044 | 934 | 5 | 3 |
| 54 | Genitive plural: counting and absence at scale (нет + gen. sg/pl, measure words) | 1057 | 968 | 5 | 3 |
| 55 | Reading three cases inside one real sentence (role-labelling procedure) | 1225 | 1119 | 5 | 3 |
| 56 | Aspect pairs do not all look alike (prefix, stem change, suppletion; prefixes can add meaning) | 1186 | 1104 | 6 | 3 |
| 57 | Why the present tense belongs to the imperfective (perfective non-past = future) | 1092 | 1023 | 5 | 3 |
| 58 | Time phrases that choose the aspect for you (bare acc. duration, за + acc., на + acc., через + acc., repetition) | 1165 | 1046 | 5 | 3 |
| 59 | Background and foreground: one story, two aspects (когда-clauses, event vs scene) | 1126 | 1044 | 5 | 3 |
| 60 | One account across past, present, and future (integration + revision control) | 1352 | 1243 | 5 | 3 |

## Word counts (computed in code, per the contract)

Instructional words = `explanation` + `example` + the six `depth` fields, summed per lesson with Python `str.split()`.

- Level total: **11,451** instructional words (raw).
- Same count excluding tokens that contain any Cyrillic character: **10,490**.
- Per-lesson floor check: every lesson exceeds 600 raw words (minimum 1044, lesson 53); every lesson also exceeds 600 by the stricter Cyrillic-excluded measure (minimum 934).
- The raw figure counts the inline Cyrillic form, its spaced Latin pronunciation guide, and the English gloss as separate tokens, which is why it runs about 9% above the Cyrillic-excluded figure. Both figures are reported so the number is not flattered by the transliteration convention the learner needs.
- Arithmetic checks were run in code (`execute_code`), not by hand: per-lesson sums, the level total, question counts, and the uniqueness sets below are all script outputs.

## Source verification

- 26 unique URLs are cited across the ten lessons (two to three per lesson, all with section-specific reading directions).
- All 26 were fetched on 2026-09-27 with `curl -s -L -A "Mozilla/5.0"` and all returned HTTP **200**.
- 21 of the 26 are pages of the *Cornell Beginning Russian Grammar* (Leed, Nakhimovsky & Nakhimovsky, ©1981/1982/1991), including `gr04_c.htm` (accusative endings and animacy, with its `#acc_plur` anchor), `gr03_a_1_a.htm` and `gr03_a_2.htm` (prepositional forms and functions), `gr04_b_2_3.htm` (genitive after у, от, из), `gr07_c_3.htm` (genitive plural endings), `le51_56_a.htm` (genitive with quantity words), `le95_102_g.htm` and `gr10_d_c.htm` (intended and elapsed time), `le31_40_f.htm` and `le41_50_b.htm` (aspect and specific instances, imperfective and plurality), `gr14_b_a.htm` and `gr05_c_3.htm` (aspect-pair formation), `gr05_c_2.htm` (the past/present/future grid), `gr05_b_2.htm` (verb government with prepositions).
- 5 are Wikipedia pages: `Accusative_case` (Russian section), `Genitive_case` (Slavic/prepositional-constructions sections), `Grammatical_aspect_in_the_Slavic_languages`, `Russian_grammar#Present-future_tense`. Wikipedia is used only as encyclopaedia-level corroboration, with the reading notes saying so where it applies.
- Page content, not just status, was inspected before citing: each Cornell page was fetched and its opening text read to confirm it teaches the point attributed to it (for example `gr04_c.htm` really opens with "Nouns fall into two classes based on animacy"; `le95_102_g.htm` really contrasts на + accusative with the bare accusative duration).
- Access caveats are stated inside the readings where relevant: the Cornell pages are legacy files whose encoding renders stress marks as unfamiliar glyphs, and two lessons restrict a Wikipedia reading to a named section because the full page is far longer than needed.
- No quotations were invented; no video URL, embed, or playback claim appears anywhere in the pack.

## Automated checks run on the JSON

- `json.load` parses the file after the final write (also re-parsed after reformatting).
- 10 lessons, IDs `51`–`60`, unique; 2 units × 5 lessons; 5 unit questions per unit; exactly 12 level questions; 22 questions total, all IDs unique and disjoint from the preexisting question IDs.
- Every `reviewLessonIds` entry resolves either to a lesson in this pack or to an existing ID in `src/lib/course-packs/russian.json` (31–50) and the subject inventory (01–). No dangling references.
- Every lesson has all twelve required keys, a `depth` object with exactly the six contract fields, at least one reading with a section-specific note, a `visual` with at least three steps, and non-empty `russianItems` with `text`, `latin`, `meaning`.
- Uniqueness: no duplicated `answer` string and no duplicated `distractor` string anywhere in the pack (checked across the 10 lesson question pairs, the 10 unit questions, and the 12 level questions).
- Every `russianItems` `text` was confirmed to appear verbatim in that lesson's instruction prose (Russian items therefore sit beside stressed Latin pronunciation and an English gloss in prose, as required).
- A mixed-script scan found and fixed three stray tokens (Latin `p`/`u` inside Cyrillic words, and one hyphenated English word).

## Unresolved limitations (honest list)

1. **No native-speaker or instructor review.** All Russian forms were composed from documented paradigms and the cited teaching grammar; the pack has not been proofread by a fluent speaker. A review pass is the single highest-value next step before publishing.
2. **Transliteration is a scaffold, not a transcription.** Stress is marked with capitals and chunks with hyphens, following the convention already used in lessons 31–50; soft consonants and unstressed vowel reduction are approximated and cannot be taught in Latin letters. The reading notes point learners to the item audio for the real sounds.
3. **Word counts include the pronunciation guides.** Reported both ways (11,451 / 10,490) rather than choosing the larger.
4. **Coverage is deliberately bounded.** This level deepens three cases and aspect. It does not teach dative plurals, instrumental beyond lesson 35, participles, the imperative, aspect under negation, or secondary imperfective derivation as a productive skill; where such material would be needed, the lessons say a dictionary or later lesson is required instead of inventing forms. Two items are explicitly flagged as look-ups rather than rules: the stressed -у locative (на мосту) and irregular genitives such as времени.
5. **The foreground/background labels are a teaching metaphor.** The sources cited support the specific-instance versus general-use contrast; the lesson says plainly that the label is descriptive, not a formal rule.
6. **Audio not produced here.** `russianItems` supply the item-level Slow/Natural controls the interface already expects; no recordings were made and no narration text was added beyond the lesson prose.
7. **First-person models use feminine past forms** (купила, писала, читала) with the masculine counterpart shown explicitly in lessons 37, 55, and 60, since the learner is a woman; the pack flags both so the models are usable by any speaker.
8. **Staged only.** The file is not registered, wired into a level map, or published. Counts of "delivered" curriculum should not treat this level as integrated until the parent wires and deploys it.
9. **Assessments are low-stakes.** Unit and level questions are recognition-and-reasoning checks; they are not evidence of general proficiency or professional competence, and the level text says so where it matters.
