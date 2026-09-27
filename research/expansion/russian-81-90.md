# Russian level: lessons 81–90 (authored continuation)

## Paths

- Pack (staged, inert — not registered, not imported anywhere): `src/lib/course-packs/staged/russian-81-90.json`
- This handoff: `research/expansion/russian-81-90.md`
- No other repository file was created or modified. The parent owns `course-pack-registry.ts`, `programs.ts`, tests, audit and deployment.

## Shape

- `subject`: `russian`. One new level, two units, ten lessons (IDs `81`–`90`), continuing directly after `71`–`80`.
- Unit 1 — "Reading written Russian closely: argument, register, subjectless sentences and compressed clauses" (lessons 81–85), 5 unit questions `uq-81-90-a` … `uq-81-90-e`.
- Unit 2 — "Producing Russian: uncertainty, opinion, procedure, summary and a sustained conversation" (lessons 86–90), 5 unit questions `uq-81-90-f` … `uq-81-90-j`.
- Level test: 12 questions `lq-81-90-a` … `lq-81-90-l` (longer than a unit quiz, as the adapter requires).
- Level title: "Reading real prose and holding your ground: register, compression, and sustained conversation".

### Lesson topics

| ID | Title |
|----|-------|
| 81 | Reading a short argumentative passage: the claim, its support, and the author's stance |
| 82 | Written register and spoken register: the same content, two grammars |
| 83 | Impersonal and passive constructions: reading sentences with no Nominative subject |
| 84 | Verbal nouns and how they compress a clause into a word |
| 85 | Aspect in narrative versus aspect in instruction |
| 86 | Uncertainty, inference and deduction: saying how you know and how sure you are |
| 87 | Opinions, agreement and disagreement: saying no without doing damage |
| 88 | Describing a process out loud: building a spoken procedure step by step |
| 89 | Summarising aloud in your own words: paraphrase, attribution and compression |
| 90 | Capstone: a sustained conversation about work, study and plans |

## Counts computed in code

Instructional words = `explanation` + `example` + the six `depth` fields, split on whitespace, exactly as `attachCoursePacks` and `scripts/validate-packs.ts` compute them.

| Lesson | Words |
|--------|-------|
| 81 | 1639 |
| 82 | 1717 |
| 83 | 1921 |
| 84 | 1781 |
| 85 | 2003 |
| 86 | 1913 |
| 87 | 2233 |
| 88 | 2174 |
| 89 | 2422 |
| 90 | 2457 |
| **Total** | **20 260** |

Minimum 1 639 words, floor 600. Arithmetic checked in code: `sum(counts) == 20260`, `min(counts) == 1639`.

Other inventory: 129 `russianItems` entries (12, 12, 12, 12, 12, 12, 14, 14, 14, 15 per lesson); 32 reading entries over 30 unique URLs; 10 unit questions; 12 level questions. Pack file 228 539 bytes; `json.loads` of the exact written bytes re-parsed to the same object before the write.

## Question IDs and invariants (checked in code)

- Namespaced to this level's range: `uq-81-90-a`…`-j`, `lq-81-90-a`…`-l`.
- No ID collision with the published Russian packs (`russian.json`, `51-60`, `61-70`, `71-80`): 0 collisions on both lesson IDs (50 existing, 31–80) and question IDs (110 existing).
- For each of the three banks (unit 1, unit 2, level) all answers are pairwise distinct and all distractors are pairwise distinct, and no answer equals its own distractor.
- `reviewLessonIds` use two-digit IDs only, all inside the published Russian catalog (base program 01–30 plus packs 31–90). Unit questions cite their own lesson plus one earlier lesson where the skill genuinely recurs (e.g. `74`, `79`, `77`, `69`, `80`); level questions cite 2–4 lessons each to make the test cumulative.

## Pronunciation contract

- Every one of the 129 `russianItems` entries has a Cyrillic `text`, an ASCII-only `latin`, and a non-trivial English gloss.
- Every `latin` contains at least one uppercase letter, checked with `/[A-Z]/` per entry (the exact assertion in `programs.test.ts`: `expect(item.latin).toMatch(/[A-Z]/)`).
- Standalone monosyllables are written in full uppercase: `SOOT` (суть), `TO YEST` (то есть), `VRYAD lee` (вряд ли), plus `LEE`, `SHAG` style forms inside longer phrases where another syllable carries the mark.
- Two entries were corrected during authoring after a self-check found them unstressed: `вряд ли` (`vryad lee` → `VRYAD lee`) and `то есть` (`to yest` → `TO YEST`); `на мой взгляд` (`na moy vzglyad` → `na MOY vzglyad`).
- Coverage check: every `russianItems.text` also occurs in that lesson's prose (`explanation`/`example`/depth), and where it did not, the lesson's `explanation` was extended with a sentence placing the word beside stressed Latin pronunciation and an English gloss (lessons 81, 82, 83, 84, 85, 88, 89, 90). No list of forms is inconsistent with its own item entries.

## Source verification

Method: fresh HTTP request per URL with a browser-like User-Agent, then normalise the body (strip tags/scripts) and assert a distinctive phrase from the cited section is present. A 200 alone was never accepted as evidence.

- 30 unique URLs cited across the 10 lessons: **30 × HTTP 200, 0 × 404, 0 × 5xx, 0 × 403, 0 × non-200.**
- 30 of 30 also contained the specific section text quoted or paraphrased (e.g. Cornell `gr14_c_a.htm` → "keep your eyes peeled"; `le95_102_h.htm` → "short form of the past passive participle"; `le79_86_j.htm` → "tone of politeness and friendliness"; Wikipedia `Abstract_(summary)` → "brief summary of a research article"). The two initial "phrase missing" flags were my probe strings, not the pages: `le12_21_j.htm` contains "make a question less abrupt / turn it into a polite request" and `le63_70_a.htm` contains "infinitive to express … with Imperfective verbs … future expression". Re-probed and confirmed present.
- Sources used: 15 Cornell *Beginning Russian Grammar* pages and 15 Wikipedia pages. No SEP-style stub pages were used; nothing was cited that failed the body check.
- Quotations are all from verified English-language prose on those pages. Cyrillic was never quoted from Cornell: those pages are a legacy non-UTF-8 project and their Cyrillic bytes decode inconsistently outside a browser, so all Cyrillic in this pack is authored by me, not quoted. Each reading note states the section to read and one honest access caveat (read Cornell in a browser; two Wikipedia pages carry maintenance/citation banners and are used for terminology, not as settled doctrine).

## Fit with the existing course

- Continues from 71–80 (participles, gerunds, `который`, subordination, reported speech, register, idioms, long narrative) rather than repeating it; assumes lessons 31–80 throughout and says so in each lesson's `depth.definitions` prerequisites.
- Follows the CONTRACT: no placeholder lessons, six distinct depth fields per lesson with varied mechanism text (no shared boilerplate paragraph), text `visual.steps` sequences explicitly described as text (not video, no invented media URLs), no fabricated quotations, no medical/private learner data, no deployment, no server, no browser automation, no test edits.

## Limitations (unresolved)

1. **No native-speaker proofreading has been done.** Stress marks, aspect choices, case government and idiomatic naturalness in the authored Russian examples are my own reasoned output, checked against Cornell's rules and my own re-reading, not against a native informant or a corpus. This is the main risk in the pack.
2. No independent subject-matter reviewer has read the level; the parent's own review step is still required.
3. Structural validation was replicated in Python against the exact rules in `src/lib/course-pack.ts` and `scripts/validate-packs.ts`. The repository's TypeScript validator was **not** executed on this pack, because it reads only `src/lib/course-packs/*.json` and deliberately does not read `staged/`; running it would have required writing the pack into the live pack directory, which this brief forbids. The parent should run `npx tsx scripts/validate-packs.ts` (or the equivalent) after integration.
4. Questions are binary-choice retrieval checks. They are not evidence of fluency or of professional competence, and passing them does not demonstrate that the learner can read real prose or hold the capstone conversation; lesson 90 states that limitation inside its own `summary`.
5. The capstone conversation is a written model and a recording task; no live interlocutor was available, so the conversation itself was not performed or verified.
6. No audio, rendering, layout, type-setting or pronunciation-audio behaviour was verified. Item-level Slow/Natural playback and the read-aloud control are the parent's rendering concern; this pack only supplies `text`/`latin`/`meaning` per the schema.
7. The two Wikipedia articles used as terminology sources (`Nominalization`, `Verbal_noun`) carry maintenance and citation banners, and `Text_linguistics` and `Cohesion` are short; they are cited as orientation with that caveat written into the reading notes, not as authorities on Russian.
8. The invented teaching passages (lesson 81's remote-work paragraph, lesson 85's recipe and equipment procedure, lesson 89's metro notice) are authored model texts and are labelled as such in each lesson; they are not quotations from any source.

## Self-checks performed during authoring

- Caught and fixed a stated count that contradicted its own list: lesson 88 said "Seven imperatives" while listing eight → "Eight imperatives".
- Caught and fixed a non-ASCII character inside a Latin transliteration (`dva` had a Cyrillic `е`), and normalised three transliterations of `продолжать` (`prad-al-…` → `pra-dal-…`).
- Caught and fixed a Cornell misquote risk: verified the quoted clause reads "directions that **he wants you** to follow to the end", and reworded two Wikipedia-derived sentences so that no quotation marks surround text that is actually a short description rather than a body sentence.
