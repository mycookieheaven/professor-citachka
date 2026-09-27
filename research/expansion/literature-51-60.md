# Literature continuation — level 4 (lessons 51–60) authored handoff

## Delivered scope and exact paths written

- `src/lib/course-packs/staged/literature-51-60.json` — one new level, two units, **10 lessons (IDs 51–60)**, 10 unit-quiz questions (5 + 5), 12 separate cumulative level questions. **153,350 bytes**, valid JSON (strict `json.loads` run against the file on disk after the final edit).
- `research/expansion/literature-51-60.md` — this handoff.

No other repository file was created or modified. `literature.json`, `literature-31-40.json`, `literature-41-50.json`, the registry, tests, audits and shared components were not touched; nothing was deployed; no server, browser automation, dependency change or GitHub action was used. `git status --porcelain` after finishing shows my only entries inside the untracked `src/lib/course-packs/staged/` directory (which also holds other workers' staged files — theirs, not mine) and `research/expansion/literature-51-60.md`. The other untracked `research/expansion/*.md` handoffs listed by git belong to other workers.

Level title: **Time, borrowed voices and contested meanings: narrative pace, adaptation and the critic's task**

| Unit | Lesson | Topic | Instructional words |
|---|---|---|---:|
| Narrative time and the compressed form: pace, silence and the shape of telling | 51 | Scene and summary: the two speeds of narration in *Persuasion*, chapter I | 1403 |
| | 52 | Ellipsis and pause: what *Dubliners* skips and what it holds still to show | 1385 |
| | 53 | The short story as compressed form, and what compression costs: Poe on Hawthorne and 'Wakefield' | 1406 |
| | 54 | The essay as a literary form: Montaigne's 'Of Idleness' and the mind on the page | 1289 |
| | 55 | Epistolary and diary structures: the record that knows only its own present | 1457 |
| Borrowed words: translation, adaptation, criticism and interpretation | 56 | Translation as interpretation: beginning the *Odyssey* in Butler's prose and Pope's couplets | 1410 |
| | 57 | Adaptation and medium change: what Lamb's *Tales from Shakespeare* keeps and loses | 1437 |
| | 58 | The critic's job: review, scholarship and appreciation | 1627 |
| | 59 | Symbolism that earns its place: 'The Whiteness of the Whale' and the limits of the symbol | 1442 |
| | 60 | Capstone: defending an interpretation against its strongest objection | 1529 |

**Total instructional words: 14,385**, computed in Python over `explanation + example + the six depth fields` only (prompts, answers, distractors, corrections, source notes, titles and visual steps excluded). Minimum lesson 1,289; maximum 1,627; required floor 600. The count is a floor check against thinness, not evidence of quality.

Topics continue after 41–50 rather than repeating it: narrative time — scene, summary, ellipsis and pause (51, 52); the short story as compression and what compression costs (53); the essay as a literary form (54); epistolary and diary structures (55); translation as interpretation, comparing two public-domain translations of the same passage (56); adaptation and medium change (57); the critic's job — review, scholarship, appreciation (58); symbolism that earns its place versus symbolism imposed by the reader (59); a capstone defending an interpretation against its strongest objection (60). Where an earlier lesson had touched related ground (free indirect discourse at 33, symbol and over-reading at 40, the interpretive essay at 50, unreliable narration at 45, the frame and interested testimony at 34), the lesson continues at a higher difficulty and says so rather than re-teaching the earlier material. Every lesson models the difference between an evidential reading and an unsupported one, and every interpretive claim is stated as contestable with a rival reading attached.

## Source verification results

**29 unique reading URLs, all re-checked by HTTP GET (`curl -L`, browser UA) immediately before finishing: 29/29 returned 200.** No URL was written from memory; each was fetched and its title verified before use.

- Project Gutenberg primaries, in the `.txt.utf-8` form the notes describe, all downloaded and searched locally (all 200): `105` (*Persuasion*), `2814` (*Dubliners*), `508` (*Twice-Told Tales*), `345` (*Dracula*), `376` (*A Journal of the Plague Year*), `1727` (*Odyssey*, trans. Samuel Butler), `3160` (*Odyssey*, trans. Alexander Pope), `1286` (*Tales from Shakespeare*), `100` (Complete Works — *Macbeth*), `2701` (*Moby-Dick*), `1952` ('The Yellow Wallpaper'), `3600` (*Essays of Michel de Montaigne*, trans. Cotton, ed. Hazlitt), `5429` (Johnson, *Preface to Shakespeare*), `77244` (Arnold, *Essays in Criticism*), `575` (Bacon, *Essays or Counsels*), `4200` (Pepys, *Diary*), `65381` (Arnold, *On Translating Homer*).
- Public-domain non-Gutenberg primaries (both 200 and both fetched): Poe, 'Review of Twice-Told Tales', *Graham's Magazine*, May 1842 — Wikisource transcription and the Edgar Allan Poe Society of Baltimore collated text (Text-02, pp. 298–300); Gilman, 'Why I Wrote The Yellow Wall-Paper' (1913), Wikisource.
- Open-access scholarly reference (all 200, heads of each entry read before citing sections): The Living Handbook of Narratology nodes `84` ('Telling vs. Showing'), `91` ('Sequentiality'), `36` ('Diegesis – Mimesis'), `44` ('Narrator'), `56` ('Fictional vs. Factual Narration'), `53` ('Narration in Various Media'), `66` ('Unreliability'), `99` ('Ideology and Narrative Fiction'). These are reading directions only — no text is reproduced from them.
- Free writing reference used for the essay/capstone lessons and **not** as a source about any literary text: Purdue OWL, 'Argumentative Essays' (200).
- Rejected and **not** used after testing: UNC Writing Center 'Argument' (HTTP 403 to automated requests), so it was dropped in favour of Purdue OWL; `gutendex.com` returned an empty body from this host, so Project Gutenberg was searched and confirmed through its own `/ebooks/search/` pages instead.

## Quotation verification: every quoted line checked against the cited text

Method, run in code against the final on-disk JSON:

1. All nineteen primary texts (and the two Wikisource documents) were downloaded and stored. Each was normalised: curly quotes and dashes folded, `--`/`—` spacing collapsed, markdown italic markup (`_`, `**`, `''`), wiki markup and HTML tags stripped, `/` treated as a line-break marker, case folded, whitespace collapsed.
2. Every instructional field in the pack — `explanation`, `example`, `question`, `answer`, `distractor`, `correction`, all six depth fields, every reading title and note, every visual step, and all 22 question prompts/answers/distractors/corrections — was swept for single- and double-quoted spans.
3. Each span was split on ellipsis (`…`, `...`) so that non-contiguous presentations are checked as separate fragments; fragments of three words or fewer were skipped as too short to be evidence.
4. Each fragment was then matched as a verbatim substring against the bodies of that lesson's cited sources, and against the whole corpus as a fallback.

**Result: 129 fragments of four or more words extracted; 114 verified verbatim in a cited source. The 15 non-matches are not quotations attributed to any source** — they are (a) titles of the reference works cited (`Review of Twice-Told Tales [Text-02]`, `Fictional vs. Factual Narration`, `Narration in Various Media`, `Ideology and Narrative Fiction`, 'The Cask of Amontillado'), (b) phrasings I invented for exercises and model answers ('how long this would take', 'idle time is never wasted', 'but the fortnight showed otherwise', 'renowned for every kind of wisdom', 'the whale means God', 'the ending is a triumph'), (c) my own restated thesis sentences ('the whale defeats interpretation…', 'the liberation and the derangement are the same event', 'Johnson says Shakespeare lacks moral purpose, therefore he does'), and (d) three extractor artefacts where a nested quotation mark inside one of my own sentences produced an over-long span. No fragment is presented as a quotation from a source without matching that source.

All quoted text is public domain: the Gutenberg primaries were published between 1580 (Montaigne, in the seventeenth-century Cotton translation used here) and 1914 (*Dubliners*), the two Wikisource documents are 1842 and 1913, and each reading note states "public domain in the USA" and, where relevant, the first publication date. Project Gutenberg's own header marks every text public domain in the USA; the notes repeat that local copyright rules should be checked outside the USA.

### Misrememberings and variants caught by the check and corrected in the pack rather than written from memory

- **Poe, 'Review of Twice-Told Tales' — a real variant between witnesses.** The Wikisource transcription reads `the limits of our Magazine will **nor** permit us to pay him that full tribute of commendation'; the Edgar Allan Poe Society collated text reads `will **not** permit us'. Lesson 58 quotes the collated reading, cites the collated text, and records the variant in the reading note as a collation exercise.
- My own first draft of lesson 53 dropped a word from Poe: `as it cannot be read at one sitting, deprives itself…` was corrected to `as it cannot be read at one sitting, **it** deprives itself, of course, of the immense force derivable from totality`. Caught by this check, not by rereading.
- **Gilman's ending is not contiguous.** The text runs `"I've got out at last," said I, "in spite of you and Jane! And I've pulled off most of the paper, so you can't put me back!"`. Lesson 60 originally quoted it as one continuous string; it is now presented with an ellipsis (`‘I've got out at last … in spite of you and Jane! And I've pulled off most of the paper, so you can't put me back!’`) so that each side of the ellipsis is independently verifiable.
- **Dracula's opening date** in `345` prints `Left Munich at 8:35 P. M., on 1st May` with a spaced `P. M.` and an italicised shorthand note. The lesson avoids quoting the time and quotes only the dated heading `3 May. Bistritz.` and the editor's note.
- **Montaigne `3600` omits 'To the Reader'.** The Hazlitt edition prints `THE AUTHOR TO THE READER.--[Omitted by Cotton.]`, so Cotton's translation of that prefatory piece is **not** in the file. Lesson 54 therefore anchors on Book I, chapter 8, 'Of Idleness', where Cotton's text is present, and quotes `The soul that has no established aim loses itself` and the untilled-fields simile from there.
- **Pepys `4200` is a selective transcription.** Its own preface records that the 1825 edition printed `scarcely half of the manuscript` and that the 1875–6 edition's editor left `about one-fifth` unprinted. Lesson 55 turns this into teaching material about the diary as an editorial product rather than quoting the diary as if it were a transparent record.
- **Arnold `65381`** prints italics as underscores (`_faithful_`, `_noble_`); quotations are given without the markup. The review of Homer's qualities (rapidity, plainness of thought, simplicity of style, nobility) and the sentence on what faithfulness consists in were both verified at line level before use.
- **Lamb `1286`** prints the Macbeth paraphrase as `"Sleep no more! Macbeth doth murder sleep, the innocent sleep, that nourishes life."` — `doth`, not Shakespeare's `does` — while Gutenberg `100` prints Shakespeare as `Methought I heard a voice cry, "Sleep no more! / Macbeth does murder sleep,"--the innocent sleep;`. Lesson 57 quotes both exactly and uses the small verbal difference as part of the adaptation argument.
- **Hawthorne `508`** prints the story title as `WAKEFIELD` in caps after the previous tale, and the frame sentences as `In some old magazine or newspaper I recollect a story` and `This outline is all that I remember.` The `--` dashes were kept as printed rather than converted to em dashes.

No invented quotation, no fictional video or audio, no `russianItems` key (correctly omitted for this subject — the key is absent from all ten lessons).

## Structural and invariant checks (all run in code against the final file)

- JSON parses strictly from disk (`json.loads` on the raw bytes, not on a re-serialised object).
- Lesson IDs are exactly `51 … 60`, ten lessons, two units of five, in order.
- Every lesson carries all eleven required keys (`id`, `title`, `explanation`, `example`, `question`, `answer`, `distractor`, `correction`, `depth`, `readings`, `visual`) and all six depth fields; every reading carries `title`, `url`, `note`; every visual has at least three labelled steps.
- Question IDs are exactly `uq-51-60-a … -e` (unit 1), `uq-51-60-f … -j` (unit 2) and `lq-51-60-a … -l` (level); 5 + 5 unit questions and 12 level questions; all 22 IDs unique.
- **All 22 answers are distinct from one another and all 22 distractors are distinct from one another**; within every question the answer and distractor differ; no lesson's answer equals its own distractor.
- Every question has a non-empty `correction` and at least one `reviewLessonIds` entry; **the highest referenced lesson ID is 60**, so no question looks forward past the end of the pack. Earlier-course references used are 32, 33, 34, 37, 40, 41, 42, 45, 50 and 52–60, all inside 01–60.
- Each of the 12 level-question prompts is longer than the longest unit-question prompt (level prompts 327–458 characters; longest unit prompt 285), so the cumulative quiz is materially longer than a unit quiz at the level of the item itself.
- No lesson references a source URL that is absent from its own `readings` list; every lesson has at least one verified source.

## Unresolved limitations

- The Living Handbook of Narratology entries are scholarly but now frozen (the site was closed to revisions in 2019, and the `www.lhn.uni-hamburg.de` host redirects to an archive host for some paths; the canonical host answered 200 for all eight nodes I cite). They supply vocabulary and named debates, not readings of the primary texts, and the notes say so.
- The narratological four-speed scheme (scene, summary, ellipsis, pause) is used as a descriptive grid rather than a measurement, and lessons 51 and 52 both state that duration in fiction is a convention rather than a clock. A reader who wants durations in seconds will not find them here, deliberately.
- Lesson 56's comparison of Butler and Pope does not include a Greek text, so the claim about the source's first emphasis is stated as a decision each translator had to make rather than as a literal gloss on a word I did not read in the original.
- Pepys's diary exists in several competing editions with different expurgations; the pack cites the Wheatley/Bright *Complete* transcription and flags the editorial history rather than treating it as the manuscript.
- Russian items, audio, video and playback claims are absent by design for this subject.
- The parent agent owns integration, registry wiring and production verification; these two files are staged, not merged, and the pack is deliberately **not** claimed to complete any unit target.
