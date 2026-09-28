# Russian level: lessons 91-100 (authored continuation)

## Paths and scope

- Pack (staged, inert — not registered, not imported anywhere): `src/lib/course-packs/staged/russian-91-100.json`
- This handoff: `research/expansion/russian-91-100.md`
- SHA-256 of the pack as written: `423a0f028421cf4e0d88129ce91df75f967ef67885a5d795a05fd95469ae753f`
- No other repository file was created or modified by this author. `src/lib/course-pack-registry.ts`, tests, shared components, other packs, `programs.ts` and all deployment configuration were left untouched. The staged directory is shared with other workers' files; only the file above is mine.

## Shape

- `subject`: `russian`. One new level, two units, ten lessons (IDs `91`-`100`), continuing directly after the published `81`-`90` pack.
- Level title: "Reading the real world and answering it: news, rules, voice, numbers and implication, then summary, correspondence, argument, recommendation and a capstone brief".
- Unit 1 (reading skill, lessons 91-95): "Reading Russian that was not written for learners: news reports, rule sheets, personal voice, numbers and unstated meaning" — unit questions `uq-91-100-a` … `uq-91-100-e`.
- Unit 2 (production skill, lessons 96-100): "Producing Russian that holds up: summary, message, argument, comparison and a capstone brief in two registers" — unit questions `uq-91-100-f` … `uq-91-100-j`.
- Level test: 12 cumulative questions `lq-91-100-a` … `lq-91-100-l` (longer than a unit quiz, as `attachCoursePacks` requires).

Note on namespacing: the brief specified `uq-91-100-a` … `uq-91-100-e` per unit. Using `a`-`e` in both units would have duplicated question IDs inside one subject, which `attachCoursePacks` rejects (`duplicate question`). Unit 2 therefore continues the same namespace as `-f` … `-j`, matching the published `81`-`90` pack's convention. Every ID is prefixed, no bare `uq-1-a`-style ID exists.

### Lesson topics

| ID | Title |
|----|-------|
| 91 | Reading a news report: what happened, who says it, and what the writer thinks |
| 92 | Reading rules and instructions: obligation, prohibition and the administrative register |
| 93 | Reading a personal voice: time ordering, discourse markers and irony in first-person prose |
| 94 | Reading numbers and comparison: quantity, rate and the arithmetic behind a claim |
| 95 | Reading what is not said: presupposition, implication and hedging |
| 96 | Writing a summary in Russian: compression, cohesion and the connectives that carry them |
| 97 | Writing a message that gets a reply: address forms, requests and the written politeness register |
| 98 | Writing an argument in Russian: claim, evidence, concession and the reply to an objection |
| 99 | Writing a comparison and a recommendation: advantage, drawback and the language of ranking |
| 100 | Capstone: a written brief and a spoken presentation of the same piece of work |

No topic repeats an earlier level: 81-85 covered close reading of one argumentative paragraph, register contrast, impersonal/passive constructions, verbal nouns and aspect in narrative versus instruction; 86-90 covered spoken uncertainty, opinions, procedure, summarising aloud and a conversational capstone. This level moves outward to genres learners actually meet (news item, rule sheet, first-person text, numerical release, advertisement) and then to written production, ending with a written brief plus its spoken re-derivation.

## Counts computed in code

Instructional words = `explanation` + `example` + the six `depth` fields, split on whitespace, exactly as `attachCoursePacks` and `scripts/validate-packs.ts` compute them.

| Lesson | Words |
|--------|-------|
| 91 | 2193 |
| 92 | 2037 |
| 93 | 2241 |
| 94 | 2340 |
| 95 | 2451 |
| 96 | 2310 |
| 97 | 2441 |
| 98 | 2528 |
| 99 | 2518 |
| 100 | 2901 |
| **Total** | **23 960** |

Minimum 2037 words, floor 600. Arithmetic checked in code: `sum(wordsPerLesson) == 23960`, `min == 2037`.

Other inventory (all counted from the written file): 136 `russianItems` entries (13, 12, 14, 14, 15, 13, 13, 14, 14, 14 per lesson); 41 reading entries over 39 unique URLs (two URLs are genuinely reused: `Percentage_point` in lessons 94 and 99, `Abstract_(summary)` in lessons 96 and 100); 10 unit questions; 12 level questions; file 291 775 bytes; `json.loads` of the exact written bytes re-parsed to the same object.

## Structural validation actually executed

The repository's own validator was executed, not re-implemented, from a scratch script outside the repo (`~/.hermes/profiles/citachka-ai/cache/scratch/validate-staged-russian-91-100.ts`, run with `npx tsx`). It imports `basePrograms` and `attachCoursePacks` from `src/lib/` and calls `attachCoursePacks(basePrograms, [...five published Russian packs, staged pack])`.

Result: `status: valid`; Russian program then has 10 levels and 100 topics; the appended level's `unitDefinitions` are `[['91','92','93','94','95'], ['96','97','98','99','100']]`; its `assessmentQuestions` length is 12. All ten lesson IDs are accepted as new, so no collision with the published 60 lessons (IDs 31-90) or the base catalog (01-30).

Additional invariants checked in code against the written file:

- Question IDs: 22 total, all unique, namespaced `uq-91-100-*` / `lq-91-100-*`, disjoint from the 132 published question IDs.
- Per bank (unit 1, unit 2, level): all answers pairwise distinct, all distractors pairwise distinct, and no answer equal to its own distractor.
- `reviewLessonIds`: every id resolves inside the published Russian catalog (01-30, 31-90) or this pack (91-100); every level question cites 2-4 lessons.
- Russian item contract: every `russianItems` entry has Cyrillic in `text`, ASCII-only `latin` containing at least one uppercase letter, and a gloss longer than one character.
- Item/prose coverage: every `russianItems.text` and its `latin` string occur in that same lesson's prose, so each new word appears beside its stressed pronunciation and gloss.
- Monosyllabic items are uppercased whole (`VDROOK`, `VLOOK`, `ROST`, `MOL`, `SROK`, `PLAN`); monosyllables stay lowercase inside multi-word items where another syllable carries the mark (`pa DAN-nym`, `f SRYED-nyem`, `s oo-va-ZHEH-nee-yem`).
- Readings: 41 entries, all `https:` with no credentials in the URL, all with non-empty title and section-specific note.
- Visuals: every lesson has a title, an accessible description stating that the sequence is rendered as text (not video) and at least three labelled reasoning steps.
- No placeholder content (`PLACEHOLDER`, `TODO`, `Lorem`, `TEST `) anywhere in the file.
- Anti-boilerplate: pairwise word-overlap between the ten `depth.mechanism` fields has a maximum of 0.065 (lessons 94 and 98), i.e. no shared paragraph.

## Source verification

Method: one fresh HTTP request per URL with a browser-like User-Agent (`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36`) and an English `Accept-Language`, then strip tags and assert that a distinctive phrase from the cited section is present. A 200 alone was never treated as evidence.

- 39 unique URLs cited across the 10 lessons: **39 × HTTP 200, 0 × 403, 0 × 404, 0 × 5xx.** No URL had to be replaced for being blocked.
- 62 probe phrases across those 39 pages. **62/62 present after normalising markup-inserted whitespace.**
- The single initial mismatch was `en.wikipedia.org/wiki/News_style`: the HTML carries the phrase as `called the " inverted pyramid ", to refer` because the quotation marks sit inside markup, so a plain-text search missed it. Reading the raw HTML region confirmed the rendered sentence, and the lesson quotes it with normal typography.
- Source mix (counted from the file): 23 Cornell *Beginning Russian Grammar* pages (`le*`, `gr*`, `numbers_2`, `patronymics`, `ty_vy`), 15 English Wikipedia pages and 1 Russian Wikipedia page = 39 unique URLs. No stub, paywalled or replaced URL; no URL had to be substituted because of a block.
- Cyrillic was never quoted from Cornell. Those pages are a legacy non-UTF-8 project whose Cyrillic bytes decode inconsistently outside a browser (verified: `ле103_110`-style mojibake), so all Cyrillic in this pack is authored by me and every Cornell quotation is English prose. Each such reading note states the browser-access caveat.
- The Russian Wikipedia article `Официально-деловой стиль` carries a maintenance banner asking for sources (`В статье не хватает ссылок на источники`); it is cited only for its explicit feature list, and the caveat is written into the lesson's reading note. All six quoted register features were confirmed verbatim in the page body.

## Arithmetic checks (computed, not estimated)

| Check | Result | Where used |
|-------|--------|-----------|
| 22.4 − 19.8 | 2.6 percentage points | lesson 94, depth.example |
| 22.4 / 19.8 − 1 | 13.13 % relative | lesson 94, depth.example |
| 265 / 250 − 1 | 6 % | lesson 94, example (Wikipedia's own example reuse: 0.15/2.50 = 6 %) |
| 44 / 40 − 1 | 10 % | lesson 94, retrieval question (with 44 − 40 = 4 pp) |
| shortfall 150 vs 100 | 50 = 33.3 % of 150 and 50 % of 100 | lesson 94, depth.secondExample ("a third" is base-dependent) |
| 41 / 118 | 0.3475 → ~35 % kept, ~65 % removed | lesson 96, example (summary compression ratio) |
| 70 × 2/3 | 46.67 → ~47 %; difference 23.3 pp | lesson 98, example ("на треть ниже" of 70 %) |
| 100 × 1.3 ; 130 / 2 | 130 ; 65 | lesson 99, example (why "на треть дороже" and "вдвое дешевле" cannot describe one pair) |
| 90 000 vs 30 000 | 60 000 less = 2/3 of 90 000 and **2×** 30 000 | lesson 99, depth.secondExample |
| 3.2 − 2.1 ; 2.1 / 3.2 | 1.1 days ; 0.65625 → 34.4 % reduction | lesson 100, example |
| 52 − 40 ; 52 / 40 − 1 | 12 percentage points ; 30 % | lesson 100, example |
| 2 / 5 | 0.40 = 40 % | lesson 100 (spoken rounding "две из пяти" checked to be exact) |
| 18 − 12 ; 18 / 12 − 1 | 6 pp ; 50 % | unit question `uq-91-100-d` |
| 52 − 40 ; 52 / 40 = 1.3 ; 240 − 180 ; 60 / 240 | 12 pp ; 30 % ; 60 ; 0.25 = 25 % | level question `lq-91-100-c` |
| 9 / 12 | 0.75 → 25 % fall (not "на три процента") | level question `lq-91-100-g` |
| 92 − 88 | 4 percentage points | unit question `uq-91-100-i` |
| 96 % vs "примерно вдвое" | consistent (a little less than doubling) | level question `lq-91-100-j` |

## Corrections made during authoring (self-caught)

1. Lesson 99 `depth.secondExample` originally said the 60 000 difference was "three times the internal figure"; 60 000 / 30 000 = 2, so it now reads "twice the internal one". The same paragraph's 65 000 / 65 figure was checked and left as written.
2. Lesson 91 example contained a non-ASCII accented character inside a Latin transliteration (`sa-ap-shchée-la`); fixed to `sa-ap-SHCHEE-la` and the stressed `ща` form normalised to `SHCHA` throughout the pack.
3. Lesson 98 example contained a Cyrillic `п` inside a Latin transliteration (`f GROO-пye`) and lesson 93 `mistake` had a Latin `a` inside the Cyrillic word `Зато`; both fixed, and a regex scan for Latin/Cyrillic token mixing now returns clean for all ten lessons.
4. Lesson 100 `explanation` retained an authoring artifact ("назывной... no —"); removed.
5. Eight lessons needed extra prose so that every `russianItems` entry occurs in that lesson's own prose beside its stressed Latin and gloss (91, 93, 94, 95, 96, 97, 98, 100). Coverage now checks clean for all 136 entries.
6. Unit question `uq-91-100-i` originally stated that "92 against 88 favours the first supplier" as a table error; it does, and the question keeps that reading deliberately, with the percentage-point arithmetic (4 pp) stated.

## Fit with the existing course

- Assumes the published prerequisite chain rather than repeating beginner material: cases 31-70, motion and modality 61-70, participles and subordination 71-80, argument/register/impersonal constructions 81-85, spoken production 86-90. Each lesson's `depth.definitions` names the specific earlier lessons it builds on.
- Question `reviewLessonIds` pull earlier lessons back in where the skill recurs (69, 62, 80, 82, 83, 84, 87, 90 and others), so the level test is genuinely cumulative rather than a repeat of the unit quizzes.
- Follows the CONTRACT: no placeholder lessons, six distinct depth fields per lesson with no shared mechanism text, text `visual.steps` explicitly described as text (not video, no invented media URLs), no fabricated quotations, no public learner medical or private details, no deployment, no server, no browser automation, no test edits, no shared-file edits.

## Unresolved limitations

1. **No native-speaker or corpus verification of the Russian.** Stress marks, case government, aspect choices and idiomatic naturalness of the authored Cyrillic are my own reasoned output, checked against Cornell's rules and re-reading. This is the main risk in the pack.
2. No independent subject-matter reviewer has read the level; the parent's review step is still required.
3. The pack is **staged and not published**: the parent must import it into `src/lib/course-pack-registry.ts` after the packs that precede it for the same subject, and should then run `npx tsx scripts/validate-packs.ts` (that script reads only `src/lib/course-packs/*.json`, never `staged/`, so it cannot see this file where it currently sits).
4. The structural evidence above comes from a scratch script outside the repo that calls the real `attachCoursePacks`; the repository's own `scripts/validate-packs.ts` was not run against the staged path for the reason in point 3.
5. Questions are binary-choice retrieval checks. They are not evidence of fluency, comprehension of any specific real-world document, or professional competence, and the capstone lesson says so inside its own `summary` and `application`.
6. No audio, rendering, layout or item-level Slow/Natural playback behaviour was verified. The pack only supplies `text` / `latin` / `meaning` per the schema; the read-aloud control and item audio remain the parent's rendering concern.
7. The capstone presentation and the question-period model in lesson 100 are written models; no live interlocutor or audience was available, so neither was performed or assessed by a listener.
8. The invented teaching texts (the news item, the reading-room notice, the first-person passage, the first-person anecdote, the release and memo, the rental and job advertisements, the two argument paragraphs, the two comparison texts, the brief and the spoken version, the question-period exchange) are authored model texts labelled as such in each lesson. They are not quotations from any source, and no real organisation or person is described.
9. Orientation sources are encyclopaedia pages, several of which carry maintenance or citation banners (`News_style`, `Coherence_(linguistics)`, `Argument_map`, `Официально-деловой стиль`). They are used for conventions and definitions, not as authorities on Russian; the caveats are written into the reading notes.
10. Two reading URLs are reused across the level (94/99 and 96/100) with section-specific directions rather than fresh sources; this is deliberate reuse of a valid multi-section source, but it means those two lessons' reading lists are not independent of the earlier lessons.
