# Literature continuation — level 5 (lessons 61–70) authored handoff

## Delivered scope and exact paths written

- `src/lib/course-packs/staged/literature-61-70.json` — one new level, two units, **10 lessons (IDs 61–70)**, 10 unit-quiz questions (5 + 5), 12 separately authored cumulative level questions. **148,408 bytes**, strict `json.loads` run against the raw bytes on disk after the final edit.
- `research/expansion/literature-61-70.md` — this handoff.

No other repository file was created or modified. `course-pack-registry.ts`, `literature.json`, `literature-31-40.json`, `literature-41-50.json`, `literature-51-60.json`, tests, audits, shared components, dependencies and other workers' packs were not touched. No dev server, no deploy, no browser automation, no browser-based retrieval: every source was fetched with `curl` from the shell. `git status --porcelain` after finishing shows my contributions only inside the already-untracked `src/lib/course-packs/staged/` directory and this handoff; the many modified/untracked paths git lists (other `src/` files, `public/art/`, `src/data/`, other workers' staged packs and handoffs) were already there and are not mine.

Level title: **Words, lines and contested texts: reading at the smallest scale and arguing about poems**

| Unit | Lesson | Topic | Instructional words |
|---|---|---|---:|
| Reading at the smallest scale: one word, one line, one sound, one whole poem | 61 | The work one word does: 'charter'd' and 'mark' in Blake's 'London' | 1358 |
| | 62 | The line against the sentence: enjambment and suspended syntax in *Paradise Lost*, Book I | 1351 |
| | 63 | The extended conceit as argument: Donne's compasses and Johnson's objection | 1235 |
| | 64 | Stress, ear and a poet's own theory: Hopkins's sprung rhythm in 'God's Grandeur' and 'The Windhover' | 1354 |
| | 65 | The whole poem as one claim: Keats's 'Ode on a Grecian Urn' and the line that speaks | 1340 |
| Arguing about poems: comparison, adverse cases, replies and your own sustained case | 66 | Grounds for comparison: two 'Ozymandias' sonnets and Shelley's two texts | 1197 |
| | 67 | Making the adverse case: Peacock on poetry and Johnson on 'Lycidas' | 1187 |
| | 68 | The reply that changes the terms: Shelley's 'A Defence of Poetry' | 1125 |
| | 69 | Arguing about method: Wordsworth's Preface and Coleridge's equivocation | 1233 |
| | 70 | Capstone: your own comparative case, with its strongest objection and a falsification test | 1163 |

**Total instructional words: 12,543**, computed in Python over `explanation + example + the six depth fields` only (questions, answers, distractors, corrections, source notes, titles and visual steps excluded). Minimum lesson 1,125; maximum 1,358; required floor 600. This is a floor check against thinness, not evidence of quality. 33 reading entries across the ten lessons (2–5 per lesson, 23 unique URLs).

## How this level continues 21–60 instead of repeating it

Placement is deliberate: unit 1 is close reading at a finer grain than any earlier level, unit 2 is comparison and argumentative criticism.

- Lessons 21–40 taught voice, frame, irony, metre, setting and symbol; 37 read Sonnet 73 line by line and 40 policed over-reading. Lessons 61–65 therefore move underneath those units: the single word and its grammar (61), syntax against the line (62), a figure's internal mapping (63), a poet's own prosodic theory tested against the lines (64), and a whole poem's dependency structure, including a genuine textual crux (65).
- Lessons 41–60 taught constraint and genre (41–45), modes of the real (46–48), comparison and the sustained essay (49–50), narrative time and the compressed form (51–55), translation, adaptation, criticism and the symbol (56–59), and a capstone defending an interpretation (60). Lessons 66–70 build the corresponding argumentative apparatus: a defined ground of comparison with two poems written on one occasion (66), adverse readings taken seriously as arguments with premises and testable predictions (67), a reply that relocates a dispute rather than denying it (68), a printed methodological quarrel examined for equivocation and for edition problems (69), and a five-component comparative essay with a falsification clause (70).
- Where an earlier lesson had touched related ground (the symbol at 40 and 59, the critic's job at 58, unreliable narration at 45, collage of witnesses nowhere) the lesson says what it is continuing rather than re-teaching it. Nothing from 51–60 is repeated: no lesson re-treats scene and summary, ellipsis and pause, Montaigne's essay, epistolary form, Butler and Pope, Lamb, the *Yellow Wall-Paper*, or the whale.

## Source verification results

**23 unique URLs, all re-checked by HTTP GET (`curl -L`, browser user-agent `Mozilla/5.0 … Chrome/124` ) against the final file after the last edit: 23/23 returned 200.** Every URL was fetched and its title checked before use; no URL was written from memory.

- Project Gutenberg primaries, all downloaded in the `.txt.utf-8` form the notes describe and searched locally (all 200): `1934` (Blake, *Songs of Innocence and of Experience*, 1901 letterpress), `26` (*Paradise Lost*), `48688` (Donne, *Poems*, vol. 1, ed. Grierson, with textual apparatus), `5098` (Johnson, *Lives: Waller, Milton, Cowley*, Cassell 1891), `22403` (Hopkins, *Poems*, ed. Bridges, 1918, including the Author's Preface and the note on sprung rhythm), `23684` (Keats, *Poems Published in 1820*), `8905` (Wordsworth, *Lyrical Ballads … 1800*, vol. 1, with the Preface), `6081` (Coleridge, *Biographia Literaria*), `5428` (Shelley, *A Defence of Poetry and Other Essays*), `4800` (Shelley, *Complete Poetical Works*).
- Wikisource primaries (all 200): Blake 'London' under *Songs of Innocence and of Experience* (1826) and the 1793 *Notebook* draft; *Paradise Lost* (1674) Book I and 'The Verse'; Shelley's 'Ozymandias' as printed in *The Examiner* and in *Rosalind and Helen* (1819); Horace Smith's 'Ozymandias'; Peacock, 'The Four Ages of Poetry'; Keats's ode in the 1884 *Poetical Works*.
- Other free scholarly/teaching sources (all 200): Representative Poetry Online (University of Toronto) *Paradise Lost*, Book I; The Victorian Web, 'Sprung Rhythm in Hopkins' (Glenn Everett); British Literature Wiki (University of Delaware), 'Grecian Urn—Notes'; Purdue OWL, 'Argumentative Essays' (used only for the mechanics of essay writing, never as a source about a literary text).
- Tested and **not used**: `poetryfoundation.org` glossary page (403 to a browser user-agent), `bl.uk` article paths (redirect to a generic learning-resources page), `blakearchive.org` copy page (200 but a JavaScript shell with no readable plate text), `gutenberg.org/ebooks/22447`, `23600`, `5423` (all 200 but wrong or duplicate books: *Lippincott's Magazine*, *La gaviota*, *L'Homme qui rit* — abandoned after reading their titles), `en.wikisource.org/wiki/Ozymandias_(Horace_Smith)` (404; correct title is `Ozymandias_(Smith)`), `en.wikisource.org/wiki/London_(Songs_of_Experience)` (a redirect to the 1826 transcription page), `Paradise Lost (1668)/The Verse` (transcribed as page images only, so it cannot supply quotable text), `rpo.library.utoronto.ca/search/...` (404).

## Quotation verification: every quoted passage was checked against the text actually fetched

Method, run in code against the final on-disk JSON: all 33 cited sources were downloaded and stored; each was normalised (HTML entities decoded, HTML tags, wiki templates and links, Gutenberg italic underscores and bare 1–3 digit line numbers removed; curly quotes folded to a single form; dashes and whitespace collapsed; case folded). Every instructional field — `explanation`, `example`, `question`, `answer`, `distractor`, `correction`, all six depth fields, every reading title and note, and every visual step — was swept for single- and double-quoted spans; each span was split on ellipsis so that non-contiguous presentations are checked as independent fragments, and each fragment of four or more words was matched as a verbatim substring against the sources cited in *that* lesson, then against the pack's whole corpus as a fallback.

**Result: 188 fragments of four or more words; 168 verified verbatim in a source fetched for that lesson. The 20 non-matches are not attributed to any source** — 14 are phrasings I invented for exercises, model answers and deliberately weak example theses; 5 are source titles quoted as titles ('Paradise Lost, Book I', 'The Four Ages of Poetry' twice, 'A Valediction: forbidding mourning', 'Ode on a Grecian Urn'); 1 is an extractor artefact where one of my own sentences enclosed a nested quotation mark, so the swept span began at my own words ("the plate prints "the hapless Soldier's sigh""). The inner quotation in that last case — `the hapless soldier's sigh` — verifies verbatim. A second sweep of *short* quoted fragments (1–3 words) found 229, of which the only 16 not present in the cited sources are my own coinages and names ('no scan', 'Earliest wins', 'real question', 'Coleridge misquotes', 'prose is enough', 'some might disagree', the poem titles and poet surnames in lesson 70's list). No fragment is presented as a quotation from a source without matching that source.

The full per-quotation inventory — fragment, field, and which fetched file it was verified in — is appended below.

All quoted text is public domain: the primaries range from *Paradise Lost* (1674) and Donne's posthumous 1633 text to Hopkins (1918 edition of poems written 1876–89) and the 1901 Blake letterpress; each note states "public domain in the USA" where the source itself does, and the Gutenberg files carry their own licence headers. Local copyright law outside the USA should be checked by the reader; the notes say so where it matters.

### Variants, misrememberings and edition traps found by the check and handled in the pack rather than written from memory

- **Blake, 'London' — a one-word variant that changes grammar.** The plate transcription on Wikisource reads `And mark in every face I meet`; the 1901 letterpress reprint prints `A mark in every face I meet`. Two of three witnesses (plate transcription, 1793 *Notebook* draft, whose transcription reads `And [see del.] mark in every face I meet`) support a verb, so the lesson argues for 'And mark' and treats 'A mark' as a posthumous editorial change — while stating that the plate witness is a *transcription* carrying a "no scan" maintenance notice, which is a real limitation on the inference.
- **Blake collation, normalisation vs inert change.** The same reprint prints `chartered`, `through`, `mind-forged`, `blackening`, `appals`, `palace-walls` and lower-case `man`, `church`, `harlot`, where the plate has `charter'd`, `thro'`, `mind-forg'd`, `black'ning`, `appalls`, `Palace walls` and capitals. The lesson grades these as elisional, personifying and inert, and says explicitly that 'appalls'/'appals' must not be over-read.
- **Syllable arithmetic corrected.** My first draft claimed the quatrain ran 8, 8, 8, **6** syllables. A check (vowel-group count run in code, then corrected by hand where the heuristic miscounts 'every' and 'Thames') gives 8, 8, 8, **7**: *Marks of weakness, marks of woe* = Marks(1) of(2) weak(3) ness(4) marks(5) of(6) woe(7). The lesson now reads "the first three lines at eight syllables each and the fourth at seven". The stress count (4, 4, 4, 3) was re-checked against the scansion and kept.
- **Milton line references corrected.** A passage quoted as "lines 27 to 34" actually runs to line 36 (`The mother of mankind`); the number in the lesson was corrected after locating the `{{verse}}` markers in the transcription. "Lines 44 to 47" and "lines 50 to 52" were verified against the same markers.
- **Hopkins, page marks inside a sentence.** The 1918 text reads `… regularly, and for / (4) particular effects any number of weak or slack syllables / may be used.` My first version quoted the sentence continuously, which is not what the page prints; the lesson now shows an explicit ellipsis (`and for … particular effects`) and says what the ellipsis marks.
- **Hopkins, 'ecstacy' and split compounds.** The 1918 edition prints `In his ecstacy!` and breaks `king- / dom` and `Fal- / con` across line-ends. The lesson quotes them as this edition prints them, names the edition, and offers the compositor explanation as the rival reading.
- **Donne, real apparatus variants.** Grierson's apparatus records `circle` in the copy-text against `circles` in the 1639–54 printings, and `the other` against `my other` in Walton's *Life*; the poem's title itself varies across witnesses. The lesson points to the apparatus rather than quoting the poem as if it were fixed.
- **Shelley, three witnesses and a manuscript note.** 1818 *Examiner*: `No thing beside remains`, `Stand in the desart`, `My name is Ozymandias, King of Kings.` with the consequent line outside the quotation marks, signed `Glirastes`. 1819 *Rosalind and Helen*: `Nothing beside remains` and a moved closing quotation mark. The critical edition notes a Bodleian manuscript reading `this legend clear` for `these words appear`. All three are used as evidence rather than merged into one text.
- **Keats, witnesses and a crux left open.** The 1820-volume reprint and the 1884 *Poetical Works* differ at `quietness,`/`quietness!`, `leaf-fring'd`/`leaf-fringed`, `What maidens loth?`/`what maidens loath?`, `For ever wilt thou love`/`Forever wilt thou love`, and `Thou, silent form, dost`/`Thou, silent form! dost`; they **agree** in closing the quotation marks after `truth beauty,`. The lesson states that agreement as evidence about the transmitted text, not about intention, and reports the UDel wiki's claim that the *Annals of the Fine Arts* printing has no quotation marks as **the page's claim, unverified**, because that printing could not be fetched.
- **Wordsworth/Coleridge, the unlocatable quotation.** Coleridge quotes Wordsworth as writing `I have proposed to myself to imitate, and, as far as is possible, to adopt the very language of men`. Those words do **not** appear in the 1800 Preface text I fetched (Gutenberg `8905`), which reads `endeavoured to bring my language near to the real language of men`. The likely explanation is that Coleridge quotes the revised Preface of a later edition; I could not fetch that text, so the lesson turns the fact into the teaching point (establish the edition before alleging misquotation) instead of asserting misquotation.
- **Peacock, a transcription artefact.** The Wikisource transcription prints `taking a retrograde stride to the barbarisms and erude traditions of the age of iron`, where sense requires `rude`. With the 1820 printing unavailable, the lesson calls this a probable copying error and uses it to distinguish a transcription artefact from a witness variant — the opposite discipline to lesson 61.
- **Shelley's *Defence*, bracketed Greek and no date.** Gutenberg `5428` prints `[word in Greek]` placeholders and gives no date for the essay, while dating other pieces in the volume; the lesson therefore quotes nothing from the placeholders and rests no argument on the essay's date.
- **Milton's *Paradise Lost* text (Gutenberg `26`).** The file's own preface says the source edition of its 1964–65 e-text was never identified. It is cited only as a check that a lineation is not a Wikisource artefact, and the note says not to treat it as an authority on spelling.
- **Johnson, italics and line breaks.** The Cassell transcription prints italics with underscores and wraps `yoked by / violence` across a line; quotations are given without the markup, and the checker strips markup on both sides.

No invented quotation, no fictional video or audio, no autoplay claim, and no `russianItems` key anywhere in the pack (correctly omitted for this subject).

## Structural and invariant checks (all run in code against the final file)

- JSON parses strictly from the raw bytes on disk; exactly one level, two units, five lessons per unit, lesson IDs exactly `61 … 70` in order.
- Every lesson carries the eleven required keys (`id`, `title`, `explanation`, `example`, `question`, `answer`, `distractor`, `correction`, `depth`, `readings`, `visual`), all six depth fields, at least three visual steps (minimum 6), and every reading has `title`, `url` (https) and `note`.
- Question IDs are exactly `uq-61-70-a … -e` (unit 1), `uq-61-70-f … -j` (unit 2), `lq-61-70-a … -l` (level); 5 + 5 + 12 = 22, all unique.
- **All 22 answers are distinct from one another and all 22 distractors are distinct from one another**; within every question the answer differs from its distractor, and no lesson's answer equals its own distractor.
- Every question has a non-empty `correction` and at least one `reviewLessonIds` entry; the referenced IDs are 34, 37, 38, 40, 45, 49, 50, 58, 59 and 61–70, so nothing references a lesson outside 01–70 and nothing looks forward past the end of the pack.
- Each of the 12 level prompts is longer than the longest unit prompt (level prompts 330–490 characters; longest unit prompt 310).
- No lesson quotes or points to a source that is absent from its own `readings` list; every lesson has at least one verified source (minimum two).
- No `russianItems` key; no video, embed or playback claim; no fabricated URL.
- **The runtime validator was emulated in code, not modified**: every check performed by `attachCoursePacks` in `src/lib/course-pack.ts` (lesson ID format and uniqueness across the subject, the seven non-empty lesson text fields, `answer !== distractor`, the six depth fields, the 600-word floor, readings with an https URL and non-empty title/note, the visual title/description/three non-empty steps, unit quizzes of at least five, a level test of at least twelve and longer than any unit quiz, and `reviewLessonIds` resolving to known lesson IDs) was reproduced in Python against this staged pack plus the four published literature packs. **Result: no violations.** The published literature lesson IDs are 21–60, so the pack's references to 34, 37, 38, 40, 45, 49, 50, 58 and 59 all resolve, and none of its lesson or question IDs collides with a published one.

## Arithmetic checks recorded

- Instructional word counts computed in Python per lesson (see table); total 12,543; floor 600 respected with a wide margin.
- Syllable counts for Blake's first quatrain computed with a vowel-group script and then corrected by hand where the heuristic over-counts ('every', 'Thames') — final figures 8, 8, 8, 7, with stress counts 4, 4, 4, 3.
- Line references in *Paradise Lost*, Book I were checked against the `{{verse|1|n}}` markers in the transcription rather than counted from memory.
- URL statuses counted in code: 23/23 unique URLs returned HTTP 200 (with size downloaded recorded for each).

## Unresolved limitations

- The Blake plate reading rests on a Wikisource transcription whose page carries a "no scan" notice; I read a transcription, not the engraved plate, and the lesson says so.
- The 1802 revision of Wordsworth's Preface could not be fetched, so the Coleridge quotation problem is presented as a rule about editions rather than resolved; the same is true of the *Annals of the Fine Arts* printing of Keats's ode, which is reported as a claim by a teaching page.
- Peacock's 1820 printing was not available, so one apparent copying error in the transcription is flagged and not interpreted.
- The 1668 printing of Milton's 'The Verse' is transcribed as page images only and could not be used as a textual witness; only the 1674 transcription is quoted.
- The Victorian Web and British Literature Wiki pages are teaching/reference material of uneven editorial authority; both are labelled as such, and no text is reproduced from them beyond one short clause (marked as a quotation) from the Victorian Web.
- The Gutenberg *Paradise Lost* (`26`) has an unidentified source edition; it is used only as a lineation cross-check.
- Lyric poems do not support narratological machinery, so this level cites no narratology handbook; the vocabulary it uses (witness, variant, collation, crux, conceit, sprung rhythm, peroration) is defined in-lesson from the primary sources.
- These two files are staged, not merged: the parent owns registry wiring, integration and production verification. The pack is deliberately **not** claimed to complete any 100-unit target, and its quizzes are not evidence of professional competence.

## Appendix — every quotation in the pack, its source, and the result of the verbatim check

Conventions in this appendix: the source name is the local file of the URL cited in that lesson's `readings`; ellipsis-separated fragments are listed independently; fragments that are my own words, a source title, or an extractor artefact are marked as such. The check treats `/` as a line-break marker and folds quotation styles, so a fragment labelled verbatim matches the fetched text for wording, not necessarily for typography.
#### Lesson 61 — The work one word does: ‘charter’d’ and ‘mark’ in Blake’s ‘London’
- `explanation` — “I wander through each chartered street, / Near where the chartered Thames does flow, / A mark in every face I meet, / Marks of weakness, marks of woe.” → **verbatim** in blake1934.txt
- `explanation` — “a mark in every face I meet” → **verbatim** in blake1934.txt
- `explanation` — “Blasts the new born Infant” → **verbatim** in wiki_london_1826.txt, wiki_london_notebook.txt
- `example` — “And mark in every face I meet” → **verbatim** in wiki_london_1826.txt
- `example` — “And [see del.] mark in every face I meet” → **verbatim** in wiki_london_notebook.txt
- `example` — “smites with plagues the Marriage hearse” → **verbatim** in wiki_london_notebook.txt
- `example` — “Runs in blood down Palace walls” → **verbatim** in wiki_london_1826.txt, wiki_london_notebook.txt
- `depth.secondExample` — “Ode on a Grecian Urn” → **verbatim** in keats1820.txt, wiki_urn_1884.html
- `depth.secondExample` — “For ever wilt thou love” → **verbatim** in keats1820.txt
- `depth.secondExample` — “Forever wilt thou love” → **verbatim** in wiki_urn_1884.html
- `depth.application` — “The plate prints “the hapless Soldier” → not a source quotation (author’s own words, a source title, or an extractor artefact)
- `depth.application` — “the hapless Soldier’s sigh” → **verbatim** in wiki_london_1826.txt, blake1934.txt, wiki_london_notebook.txt
- `depth.application` — “Runs in blood down Palace walls” → **verbatim** in wiki_london_1826.txt, wiki_london_notebook.txt
- `reading[0].note` — “And mark in every face I meet” → **verbatim** in wiki_london_1826.txt
- `reading[2].note` — “And [see del.] mark in every face I meet” → **verbatim** in wiki_london_notebook.txt
- `reading[3].title` — “Ode on a Grecian Urn” → **verbatim** in keats1820.txt, wiki_urn_1884.html
- `reading[4].title` — “Ode on a Grecian Urn” → **verbatim** in keats1820.txt, wiki_urn_1884.html
- `reading[4].note` — “Forever wilt thou love” → **verbatim** in wiki_urn_1884.html
- `visual.steps[1]` — “And mark in every face I meet” → **verbatim** in wiki_london_1826.txt
- `visual.steps[1]` — “And [see del.] mark in every face I meet” → **verbatim** in wiki_london_notebook.txt
- `visual.steps[1]` — “A mark in every face I meet” → **verbatim** in blake1934.txt

#### Lesson 62 — The line against the sentence: enjambment and suspended syntax in Paradise Lost, Book I
- `explanation` — “is English Heroic Verse without Rime as that of Homer in Greek, and of Virgil in Latin” → **verbatim** in wiki_verse_1674.txt
- `explanation` — “no necessary Adjunct or true Ornament of Poem or good Verse” → **verbatim** in wiki_verse_1674.txt, rpo_milton.txt
- `explanation` — “consists only in apt Numbers, fit quantity of Syllables, and the sense variously drawn out from one Verse into another, not in the jingling sound of like endings” → **verbatim** in wiki_verse_1674.txt, rpo_milton.txt
- `explanation` — “That, to the height of this great argument, / I may assert Eternal Providence, / And justify the ways of God to men” → **verbatim** in wiki_pl1674_book1.txt, milton26.txt
- `example` — “Say first--for Heaven hides nothing from thy view, / Nor the deep tract of Hell--say first what cause / Moved our grand parents, in that happy state, / Favoured of Heaven so highly, to fall off / From their Creator, and transgress his will / For one restraint, lords of the World besides. / Who first seduced them to that foul revolt? / Th” → **verbatim** in wiki_pl1674_book1.txt, milton26.txt
- `example` — “Him the Almighty Power / Hurled headlong flaming from th” → **verbatim** in wiki_pl1674_book1.txt, milton26.txt
- `depth.secondExample` — “Nine times the space that measures day and night / To mortal men, he, with his horrid crew, / Lay vanquished, rolling in the fiery gulf” → **verbatim** in wiki_pl1674_book1.txt, milton26.txt
- `depth.application` — “And justify the ways of God to men” → **verbatim** in wiki_pl1674_book1.txt, rpo_milton.txt, milton26.txt
- `depth.application` — “Four of the six line-ends in the opening six lines occur inside noun phrases” → not a source quotation (author’s own words, a source title, or an extractor artefact)
- `depth.application` — “the suspension makes the reader supply the verb, so the assertion about Providence arrives as a completion the reader has been holding open” → not a source quotation (author’s own words, a source title, or an extractor artefact)
- `depth.application` — “The counter-argument is that the same suspensions occur throughout Latin epic and carry no local emphasis; it is weakened, not refuted, by the prefatory note, and a full answer would collate two or three comparable suspensions elsewhere in Book I.” → not a source quotation (author’s own words, a source title, or an extractor artefact)
- `reading[1].note` — “the sense variously drawn out from one Verse into another” → **verbatim** in wiki_verse_1674.txt, rpo_milton.txt
- `reading[2].title` — “Paradise Lost, Book I” → not a source quotation (author’s own words, a source title, or an extractor artefact)

#### Lesson 63 — The extended conceit as argument: Donne’s compasses and Johnson’s objection
- `explanation` — “A Valediction: forbidding mourning” → **verbatim** in donne48688.txt
- `explanation` — “If they be two, they are two so / As stiffe twin compasses are two, / Thy soule the fixt foot, makes no show / To move, but doth, if the” → **verbatim** in donne48688.txt
- `explanation` — “Our two soules therefore, which are one” → **verbatim** in donne48688.txt
- `example` — “a kind of discordia concors; a combination of dissimilar images, or discovery of occult resemblances in things apparently unlike” → **verbatim** in johnson5098.txt
- `example` — “The most heterogeneous ideas are yoked by violence together” → **verbatim** in johnson5098.txt
- `example` — “the reader commonly thinks his improvement dearly bought, and though he sometimes admires, is seldom pleased” → **verbatim** in johnson5098.txt
- `depth.mechanism` — “Thy firmnes makes my circle just” → **verbatim** in donne48688.txt
- `depth.secondExample` — “will flame out, like shining from shook foil” → **verbatim** in hopkins_b.txt
- `depth.secondExample` — “It gathers to a greatness, like the ooze of oil / Crushed” → **verbatim** in hopkins_b.txt
- `depth.application` — “Fixed foot = beloved; moving foot = speaker; the drawn circle = the completed relationship; firmness of the fixed foot = constancy that ensures return. The mapping is inexact at “growes erect, as that comes home”, where the compasses” → not a source quotation (author’s own words, a source title, or an extractor artefact)
- `depth.application` — “growes erect, as that comes home” → **verbatim** in donne48688.txt
- `reading[0].title` — “A Valediction: forbidding mourning” → **verbatim** in donne48688.txt
- `reading[0].note` — “As virtuous men passe mildly away” → **verbatim** in donne48688.txt
- `reading[0].note` — “And makes me end, where I begunne” → **verbatim** in donne48688.txt
- `reading[1].note` — “Wit, like all other things subject by their nature to the choice of man, has its changes and fashions” → **verbatim** in johnson5098.txt
- `reading[2].note` — “like shining from shook foil” → **verbatim** in hopkins_b.txt
- `reading[2].note` — “like the ooze of oil / Crushed” → **verbatim** in hopkins_b.txt
- `visual.steps[0]` — “if they be two” → **verbatim** in donne48688.txt, johnson5098.txt
- `visual.steps[3]` — “growes erect, as that comes home” → **verbatim** in donne48688.txt

#### Lesson 64 — Stress, ear and a poet’s own theory: Hopkins’s sprung rhythm in ‘God’s Grandeur’ and ‘The Windhover’
- `explanation` — “Sprung Rhythm, as used in this book, is measured by feet of from one to four syllables, regularly, and for” → **verbatim** in hopkins_b.txt
- `explanation` — “particular effects any number of weak or slack syllables may be used.” → **verbatim** in hopkins_b.txt
- `explanation` — “Sprung Rhythm is the most natural of things” → **verbatim** in hopkins_b.txt
- `explanation` — “the rhythm of common speech and of written prose, when rhythm is perceived in them” → **verbatim** in hopkins_b.txt
- `explanation` — “Generations have trod, have trod, have trod” → **verbatim** in hopkins_b.txt
- `explanation` — “THE world is charged with the grandeur of God” → **verbatim** in hopkins_b.txt
- `explanation` — “It will flame out, like shining from shook foil; / It gathers to a greatness, like the ooze of oil / Crushed.” → **verbatim** in hopkins_b.txt
- `example` — “Generations have trod, have trod, have trod; / And all is seared with trade; bleared, smeared with toil; / And wears man” → **verbatim** in hopkins_b.txt
- `example` — “And for all this, nature is never spent; / There lives the dearest freshness deep down things” → **verbatim** in hopkins_b.txt
- `example` — “And for all this” → **verbatim** in hopkins_b.txt
- `example` — “Because the Holy Ghost over the bent / World broods with warm breast and with ah! bright wings.” → **verbatim** in hopkins_b.txt
- `depth.mechanism` — “have trod, have trod, have trod” → **verbatim** in hopkins_b.txt
- `depth.mechanism` — “no other poet has since used sprung rhythm regularly” → **verbatim** in vw_hopkins13.html
- `depth.secondExample` — “Marks of weakness, marks of woe” → **verbatim** in blake1934.txt
- `depth.application` — “The octave is dominated by one- and two-syllable feet and by adjacent stresses in “seared”, “trade”, “bleared”, “smeared”” → not a source quotation (author’s own words, a source title, or an extractor artefact)
- `depth.application` — “The sestet admits a three-syllable foot at “dearest freshness” and a four-syllable stretch around “with warm breast and with ah!”” → not a source quotation (author’s own words, a source title, or an extractor artefact)
- `depth.application` — “If the counts were identical across octave and sestet, the volta would have to be argued on lexical and syntactical grounds alone, since metre could not be carrying it.” → not a source quotation (author’s own words, a source title, or an extractor artefact)
- `depth.application` — “with warm breast and with ah!” → **verbatim** in hopkins_b.txt
- `reading[1].title` — “Sprung Rhythm in Hopkins” → **verbatim** in vw_hopkins13.html
- `visual.steps[2]` — “have trod, have trod, have trod” → **verbatim** in hopkins_b.txt
- `visual.steps[3]` — “And for all this” → **verbatim** in hopkins_b.txt
- `visual.steps[4]` — “with ah! bright wings” → **verbatim** in hopkins_b.txt

#### Lesson 65 — The whole poem as one claim: Keats’s ‘Ode on a Grecian Urn’ and the line that speaks
- `explanation` — “Ode on a Grecian Urn” → **verbatim** in keats1820.txt, wiki_urn_1884.html, udel_urn.html
- `explanation` — “Heard melodies are sweet, but those unheard / Are sweeter” → **verbatim** in keats1820.txt, wiki_urn_1884.html
- `explanation` — “For ever wilt thou love, and she be fair!” → **verbatim** in keats1820.txt
- `explanation` — “Thou, silent form, dost tease us out of thought / As doth eternity: Cold Pastoral!” → **verbatim** in keats1820.txt
- `explanation` — ““Beauty is truth, truth beauty,”--that is all / Ye know on earth, and all ye need to know.” → **verbatim** in keats1820.txt, wiki_urn_1884.html
- `explanation` — “that is all / Ye know on earth, and all ye need to know” → **verbatim** in keats1820.txt, wiki_urn_1884.html
- `explanation` — “Beauty is truth, truth beauty,” → **verbatim** in keats1820.txt, wiki_urn_1884.html, udel_urn.html
- `example` — “leaves a heart high-sorrowful and cloy” → **verbatim** in keats1820.txt
- `example` — “For ever warm and still to be enjoy” → **verbatim** in keats1820.txt
- `example` — “Beauty is truth, truth beauty” → **verbatim** in keats1820.txt, wiki_urn_1884.html, udel_urn.html
- `example` — “Thou, silent form! dost tease us out of thought” → **verbatim** in wiki_urn_1884.html
- `example` — “Thou, silent form, dost tease us out of thought” → **verbatim** in keats1820.txt
- `question` — ““Beauty is truth, truth beauty,”--that is all / Ye know on earth, and all ye need to know.” → **verbatim** in keats1820.txt, wiki_urn_1884.html
- `question` — “Beauty is truth, truth beauty,” → **verbatim** in keats1820.txt, wiki_urn_1884.html, udel_urn.html
- `correction` — “that is all / Ye know on earth” → **verbatim** in keats1820.txt, wiki_urn_1884.html
- `depth.secondExample` — ““My name is Ozymandias, King of Kings.”” → **verbatim** in page_exp_oz.txt
- `depth.secondExample` — “Look on my works ye Mighty, and despair!” → **verbatim** in page_exp_oz.txt
- `depth.secondExample` — “My name is Ozymandias, King of Kings.” → **verbatim** in page_exp_oz.txt
- `depth.application` — “Beauty is truth, truth beauty” → **verbatim** in keats1820.txt, wiki_urn_1884.html, udel_urn.html
- `reading[0].title` — “Ode on a Grecian Urn” → **verbatim** in keats1820.txt, wiki_urn_1884.html, udel_urn.html
- `reading[1].title` — “Ode on a Grecian Urn” → **verbatim** in keats1820.txt, wiki_urn_1884.html, udel_urn.html
- `reading[1].note` — “For ever wilt thou love” → **verbatim** in keats1820.txt
- `reading[1].note` — “Forever wilt thou love” → **verbatim** in wiki_urn_1884.html
- `reading[1].note` — “Thou, silent form, dost” → **verbatim** in keats1820.txt
- `reading[1].note` — “Thou, silent form! dost” → **verbatim** in wiki_urn_1884.html
- `visual.title` — “Ode on a Grecian Urn” → **verbatim** in keats1820.txt, wiki_urn_1884.html, udel_urn.html
- `visual.steps[0]` — “What men or gods are these?” → **verbatim** in keats1820.txt, wiki_urn_1884.html
- `visual.steps[1]` — “Heard melodies are sweet, but those unheard / Are sweeter” → **verbatim** in keats1820.txt, wiki_urn_1884.html
- `visual.steps[2]` — “For ever warm and still to be enjoy” → **verbatim** in keats1820.txt
- `visual.steps[4]` — “Thou, silent form, dost tease us out of thought / As doth eternity: Cold Pastoral!” → **verbatim** in keats1820.txt

#### Lesson 66 — Grounds for comparison: two ‘Ozymandias’ sonnets and Shelley’s two texts
- `explanation` — “I met a Traveller from an antique land, / Who said, “Two vast and trunkless legs of stone / Stand in the desart” → **verbatim** in page_exp_oz.txt
- `explanation` — “Look on my works ye Mighty, and despair! / No thing beside remains. Round the decay / Of that Colossal Wreck, boundless and bare, / The lone and level sands stretch far away.” → **verbatim** in page_exp_oz.txt
- `explanation` — ““I am great Ozymandias,” saith the stone” → **verbatim** in smith_wiki.txt
- `explanation` — “We wonder,—and some Hunter may express / Wonder like ours, when thro” → **verbatim** in smith_wiki.txt
- `explanation` — “I am great Ozymandias,” → **verbatim** in smith_wiki.txt
- `example` — “My name is Ozymandias, King of Kings.” → **verbatim** in page_exp_oz.txt, page_rh_oz.txt, shelley_poems.txt
- `example` — “Look on my works ye Mighty, and despair!” → **verbatim** in page_exp_oz.txt
- `example` — ““My name is Ozymandias, king of kings: / Look on my works, ye Mighty, and despair!”” → **verbatim** in page_rh_oz.txt, shelley_poems.txt
- `example` — “No thing beside remains” → **verbatim** in page_exp_oz.txt
- `example` — “My name is Ozymandias, king of kings: / Look on my works, ye Mighty, and despair!” → **verbatim** in page_rh_oz.txt, shelley_poems.txt
- `depth.mistake` — “both poems are about the transience of power” → not a source quotation (author’s own words, a source title, or an extractor artefact)
- `depth.application` — “My name is Ozymandias, King of Kings.” → **verbatim** in page_exp_oz.txt, page_rh_oz.txt, shelley_poems.txt
- `depth.application` — “I am great Ozymandias,” → **verbatim** in smith_wiki.txt
- `reading[0].note` — “Stand in the desart” → **verbatim** in page_exp_oz.txt, page_rh_oz.txt
- `reading[0].note` — “No thing beside remains” → **verbatim** in page_exp_oz.txt
- `reading[2].note` — “No thing beside remains” → **verbatim** in page_exp_oz.txt
- `visual.steps[1]` — “My name is Ozymandias, King of Kings.” → **verbatim** in page_exp_oz.txt, page_rh_oz.txt, shelley_poems.txt
- `visual.steps[2]` — “Look on my works, ye Mighty, and despair!” → **verbatim** in page_rh_oz.txt, shelley_poems.txt
- `visual.steps[3]` — “I am great Ozymandias,” → **verbatim** in smith_wiki.txt

#### Lesson 67 — Making the adverse case: Peacock on poetry and Johnson on ‘Lycidas’
- `explanation` — “Poetry, like the world, may be said to have four ages, but in a different order: the first age of poetry being the age of iron; the second, of gold; the third, of silver; and the fourth, of brass.” → **verbatim** in peacock_wiki.txt
- `explanation` — “A poet in our times is a semi-barbarian in a civilized community” → **verbatim** in peacock_wiki.txt
- `explanation` — “The march of his intellect is like that of a crab, backward.” → **verbatim** in peacock_wiki.txt
- `explanation` — “Poetry was the mental rattle that awakened the attention of intellect in the infancy of civil society” → **verbatim** in peacock_wiki.txt
- `explanation` — “the subordinacy of the ornamental to the useful will be more and more seen and acknowledged” → **verbatim** in peacock_wiki.txt
- `explanation` — “of which the diction is harsh, the rhymes uncertain, and the numbers unpleasing” → **verbatim** in johnson5098.txt
- `explanation` — “It is not to be considered as the effusion of real passion; for passion runs not after remote allusions and obscure opinions” → **verbatim** in johnson5098.txt
- `explanation` — “Where there is leisure for fiction, there is little grief” → **verbatim** in johnson5098.txt
- `example` — “What beauty there is we must therefore seek in the sentiments and images” → **verbatim** in johnson5098.txt
- `example` — “Its form is that of a pastoral; easy, vulgar, and therefore disgusting” → **verbatim** in johnson5098.txt
- `example` — “taking a retrograde stride to the barbarisms and erude traditions of the age of iron” → **verbatim** in peacock_wiki.txt
- `depth.application` — “Premise 1: the value of an activity is a function of its contribution to useful knowledge. Premise 2: poetry contributed to knowledge when it was the sole repository of learning. Premise 3: poetry no longer contributes, since mathematics and political economy have taken the field. Conclusion: poetry” → not a source quotation (author’s own words, a source title, or an extractor artefact)
- `reading[0].title` — “The Four Ages of Poetry” → not a source quotation (author’s own words, a source title, or an extractor artefact)
- `visual.steps[0]` — “passion runs not after remote allusions” → **verbatim** in johnson5098.txt

#### Lesson 68 — The reply that changes the terms: Shelley’s ‘A Defence of Poetry’
- `explanation` — “A Defence of Poetry” → **verbatim** in shelley_defence.txt
- `explanation` — “Poetry, in a general sense, may be defined to be “the expression of the imagination”” → **verbatim** in shelley_defence.txt
- `explanation` — “Reason is the enumeration of quantities already known; imagination is the perception of the value of those quantities, both separately and as a whole” → **verbatim** in shelley_defence.txt
- `explanation` — “Reason is to the imagination as the instrument to the agent, as the body to the spirit, as the shadow to the substance.” → **verbatim** in shelley_defence.txt
- `explanation` — “The great instrument of moral good is the imagination” → **verbatim** in shelley_defence.txt
- `explanation` — “calculations have outrun conception” → **verbatim** in shelley_defence.txt
- `explanation` — “Poets are the unacknowledged legislators of the world” → **verbatim** in shelley_defence.txt
- `explanation` — “the expression of the imagination” → **verbatim** in shelley_defence.txt
- `example` — “We have more moral, political and historical wisdom, than we know how to reduce into practice” → **verbatim** in shelley_defence.txt
- `example` — “We want the creative faculty to imagine that which we know” → **verbatim** in shelley_defence.txt
- `example` — “Poets are the unacknowledged legislators of the world” → **verbatim** in shelley_defence.txt
- `depth.mechanism` — “the disputants attaching each a different meaning to the same word” → **verbatim** in coleridge6081.txt
- `depth.application` — “Argument: “Reason is the enumeration of quantities already known; imagination is the perception of the value of those quantities”, which is a premise with consequences and can be contested by anyone who thinks valuation is a form of calculation. Rhetoric: “Poets are the unacknowledged legislators of the world”, which compresses a complex claim into an image and offers no evidence of legislative effect. Both: “We want the creative faculty to imagine that which we know”, which states a diagnosis and does so in a phrase that would not survive being unpacked into literal terms.” → not a source quotation (author’s own words, a source title, or an extractor artefact)
- `depth.application` — “Reason is the enumeration of quantities already known; imagination is the perception of the value of those quantities” → **verbatim** in shelley_defence.txt
- `depth.application` — “Poets are the unacknowledged legislators of the world” → **verbatim** in shelley_defence.txt
- `depth.application` — “We want the creative faculty to imagine that which we know” → **verbatim** in shelley_defence.txt
- `reading[0].title` — “A Defence of Poetry” → **verbatim** in shelley_defence.txt
- `reading[1].title` — “The Four Ages of Poetry” → not a source quotation (author’s own words, a source title, or an extractor artefact)
- `visual.steps[0]` — “the expression of the imagination” → **verbatim** in shelley_defence.txt
- `visual.steps[3]` — “Poets are the unacknowledged legislators of the world” → **verbatim** in shelley_defence.txt

#### Lesson 69 — Arguing about method: Wordsworth’s Preface and Coleridge’s equivocation
- `explanation` — “fitting to metrical arrangement a selection of the real language of men in a state of vivid sensation” → **verbatim** in wordsworth8905.txt
- `explanation` — “to make the incidents of common life interesting by tracing in them, truly though not ostentatiously, the primary laws of our nature” → **verbatim** in wordsworth8905.txt
- `explanation` — “Low and rustic life was generally chosen because in that situation the essential passions of the heart find a better soil in which they can attain their maturity” → **verbatim** in wordsworth8905.txt
- `explanation` — “chosen subjects from common life” → **verbatim** in wordsworth8905.txt
- `explanation` — “endeavoured to bring my language near to the real language of men” → **verbatim** in wordsworth8905.txt
- `explanation` — “Poetry is the spontaneous overflow of powerful feelings: it takes its origin from emotion recollected in tranquillity” → **verbatim** in wordsworth8905.txt
- `explanation` — “Rustic life (above all, low and rustic life) especially unfavourable to the formation of a human diction--The best parts of language the product of philosophers, not of clowns or shepherds--Poetry essentially ideal and generic--The language of Milton as much the language of real life, yea, incomparably more so than that of the cottager.” → **verbatim** in coleridge6081.txt
- `explanation` — “I object, in the very first instance, to an equivocation in the use of the word “real.”” → **verbatim** in coleridge6081.txt
- `example` — “a selection of the real language of men” → **verbatim** in wordsworth8905.txt, coleridge6081.txt
- `example` — “Between the language of prose and that of metrical composition, there neither is, nor can be, any essential difference” → **verbatim** in coleridge6081.txt
- `example` — “whether there are not modes of expression, a construction, and an order of sentences, which are in their fit and natural place in a serious prose composition, but would be disproportionate and heterogeneous in metrical poetry” → **verbatim** in coleridge6081.txt
- `example` — “For “real” therefore, we must substitute ordinary, or lingua communis.” → **verbatim** in coleridge6081.txt
- `example` — “I have proposed to myself to imitate, and, as far as is possible, to adopt the very language of men” → **verbatim** in coleridge6081.txt
- `example` — “endeavoured to bring my language near to the real language of men” → **verbatim** in wordsworth8905.txt
- `depth.application` — “Poetry is the spontaneous overflow of powerful feelings: it takes its origin from emotion recollected in tranquillity” → **verbatim** in wordsworth8905.txt
- `reading[0].note` — “the real language of men” → **verbatim** in wordsworth8905.txt, coleridge6081.txt
- `reading[1].note` — “Examination of the tenets peculiar to Mr. Wordsworth” → **verbatim** in coleridge6081.txt
- `visual.steps[0]` — “a selection of the real language of men” → **verbatim** in wordsworth8905.txt, coleridge6081.txt
- `visual.steps[3]` — “ordinary, or lingua communis” → **verbatim** in coleridge6081.txt
- `visual.steps[4]` — “adopt the very language of men” → **verbatim** in wordsworth8905.txt, coleridge6081.txt

#### Lesson 70 — Capstone: your own comparative case, with its strongest objection and a falsification test
- `explanation` — “A poem is that species of composition, which is opposed to works of science, by proposing for its immediate object pleasure, not truth” → **verbatim** in coleridge6081.txt
- `explanation` — “Controversy is not seldom excited in consequence of the disputants attaching each a different meaning to the same word” → **verbatim** in coleridge6081.txt
- `explanation` — “that willing suspension of disbelief for the moment, which constitutes poetic faith” → **verbatim** in coleridge6081.txt
- `example` — “A Valediction: forbidding mourning” → not a source quotation (author’s own words, a source title, or an extractor artefact)
- `example` — “Ode on a Grecian Urn” → not a source quotation (author’s own words, a source title, or an extractor artefact)
- `example` — “The frame is a convention of Romantic orientalism and carries no argumentative weight, so the difference in naming is a difference of opportunity, not of design.” → not a source quotation (author’s own words, a source title, or an extractor artefact)
- `depth.secondExample` — “Both Shelley and Smith use the image of a ruined statue to show that power does not last.” → not a source quotation (author’s own words, a source title, or an extractor artefact)
- `depth.mistake` — “Both poems explore the transience of earthly power with rich imagery” → not a source quotation (author’s own words, a source title, or an extractor artefact)
- `depth.application` — “Thesis names one respect: the frame. Quotations: two from each poem, each with edition and witness identified, both checked against the text I fetched. Objection: stated in a form a defender of the opposing view would accept, and it is granted the convention. Reply: concedes the convention” → not a source quotation (author’s own words, a source title, or an extractor artefact)
- `reading[1].title` — “A Defence of Poetry” → **verbatim** in shelley_defence.txt
