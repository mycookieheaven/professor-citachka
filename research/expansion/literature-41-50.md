# Literature continuation — level 3 (lessons 41–50) authored handoff

## Delivered scope and exact paths written

- `src/lib/course-packs/staged/literature-41-50.json` — one new level, two units, **10 lessons (IDs 41–50)**, 10 unit-quiz questions, 12 cumulative level questions. **146,746 bytes**, valid JSON (parsed from disk after the final edit).
- `research/expansion/literature-41-50.md` — this handoff.

No other repository file was created or modified. `literature.json`, `literature-31-40.json`, the registry, `programs.ts`, tests, audits and shared components were not touched; nothing was deployed and no server, browser automation, dependency change or GitHub action was used. `git status --porcelain` after finishing shows my only entry as `src/lib/course-packs/staged/` (that directory also holds other workers' staged files, which are theirs, not mine; `artifacts/pedagogy/production-route-readback.json` was already modified before this task and was not touched by me).

Level title: **Constraint, genre and the sustained argument**

| Unit | Lesson | Topic | Instructional words |
|---|---|---|---:|
| Form and genre as arguments: constraint, tragedy, comedy | 41 | Constraint and the turn: Milton's sonnet XVI and Pope's closed couplet | 1364 |
| | 42 | Tragic structure and the question of responsibility: *Macbeth*, Act 1 | 1401 |
| | 43 | Comedy's social function and its costs: *Twelfth Night* and the gulling of Malvolio | 1419 |
| | 44 | The Gothic and the uncanny: the familiar made strange in *Dr Jekyll and Mr Hyde* | 1444 |
| | 45 | Detecting unreliable narration: the governess in *The Turn of the Screw* | 1439 |
| Modes of the real and the discipline of the essay | 46 | Realism and the detail that carries moral weight: *Scenes of Clerical Life*, 'Amos Barton' | 1476 |
| | 47 | The bildungsroman and the arc of a self: *Jane Eyre* | 1504 |
| | 48 | Satire and the risk of misreading tone: *A Modest Proposal* | 1503 |
| | 49 | Comparing two texts on a shared theme: the house with a hidden life in *Jane Eyre* and *Jekyll and Hyde* | 1548 |
| | 50 | Writing a sustained interpretive essay: thesis, counterargument and falsification | 1441 |

**Total instructional words: 14,539**, computed in Python over `explanation + example + the six depth fields` only (prompts, answers, distractors, corrections, source notes, visual steps excluded). Minimum lesson 1,364; maximum 1,548; floor is 600. The count is a floor check, not evidence of quality.

Territory covered as briefed: constraint and how form generates meaning (41); tragic structure and responsibility (42); comedy and its social function, with costs (43); the Gothic and the uncanny (44); unreliable narration and how a reader detects it (45); realism and the details that carry moral weight (46); the bildungsroman and the arc of a self (47); satire and the risk of misreading tone (48); comparing two texts on a shared theme with evidence (49); writing a sustained interpretive essay with a defensible thesis and counterargument (50). Every lesson models the difference between an evidential reading and an unsupported one, and every interpretive claim in the lessons is stated as contestable with a rival reading attached.

## Source verification results

**25 unique URLs, all re-checked by HTTP GET immediately before finishing: 25/25 returned 200.**

- Project Gutenberg primaries, in the `.txt.utf-8` form the notes describe (all 200): `100` (Complete Works — *Macbeth*), `1080` (*A Modest Proposal*), `1260` (*Jane Eyre*), `1526` (*Twelfth Night*), `1745` (Milton, *Poetical Works*), `17780` (*Scenes of Clerical Life*), `1974` (*Poetics*, trans. Butcher), `209` (*The Turn of the Screw*), `28289` (*The Essays of "George Eliot"*), `36483` (*Wilhelm Meister's Apprenticeship*, trans. Carlyle), `43` (*Dr Jekyll and Mr Hyde*), `7409` (Pope, *An Essay on Criticism*), `829` (*Gulliver's Travels*).
- Free scholarly/reference pages (all 200): Folger Shakespeare Library *Macbeth* 1.7 and *Twelfth Night* 2.5 (line-numbered, free scholarly editions, linked not reproduced); SEP 'Humor' (sections used were read from the fetched page: **2. The Superiority Theory, 4. The Incongruity Theory, 6. Comedy**); Academy of American Poets glossary 'Sonnet'; The Victorian Web author indexes for **Stevenson, Charlotte Brontë and George Eliot** (the Stevenson index was fetched and the two items named in the note — the 'Allusions' page and Michael Gold's essay on doubles and demons — are listed there); UNC Writing Center 'Argument' and 'Comparing and Contrasting'; Purdue OWL 'Argumentative Essays'.
- Living Handbook of Narratology nodes `58` ('Implied Author') and `66` ('Unreliability'): heading lists were read from the fetched pages before citing sections ('Definition', 'Explication', 'The Rhetorical Approach to Unreliability', 'The Constructivist/Cognitivist Approach and its Relation to the Rhetorical'). **Caveat recorded in the notes themselves:** the former `lhn.uni-hamburg.de` addresses now 301-redirect to the archive host `www-archiv.fdm.uni-hamburg.de`, so the pack links the archive URL directly.
- Rejected and **not** used after testing: Harvard Writing Center (HTTP 403 to automated requests), SEP 'Irony' and SEP 'Aristotle's Poetics' (both 404 — those entries do not exist), IEP 'Irony' (404), Purdue's 'Comparing and Contrasting' path (404), Dartmouth's Milton Reading Room sonnet path (404), poets.org 'heroic couplet' (404), `victorianweb.org/genre/gothic.html` (404), and gutendex.com (unreachable from this host, so Project Gutenberg was searched and confirmed through its own `/ebooks/search/` pages instead).

## Quotation verification: all quoted text is public domain and checkable

Method: all thirteen primary texts were downloaded and searched. Every instructional field was swept for single-quoted fragments; verse fragments were split on ` / ` and ellipsis fragments on `…`, whitespace-normalised (curly quotes, dashes, italics markup removed) and matched against the fetched bodies. **219 fragments → 205 sub-fragments → 189 verbatim matches.** The 16 non-matches are all deliberately constructed material that is *not* attributed to any source: my own topic-and-thesis illustrations and weak counterargument sentences in lessons 49–50, the labels students are asked to reject ('just its shape', 'a supernatural sign of evil', 'both novels explore duality', 'grows into herself', a model unfalsifiable thesis), one ellipsis fragment inside a visual step whose two components ('I was under the spell'; 'even at the time, I perfectly knew I was') each match separately, and 'Ere half my days', which is deliberately the *regularised* spelling contrasted with the transcription's printed `E're`.

Misrememberings caught by this check and corrected in the pack rather than written from memory:

- *Macbeth* in Gutenberg `100` prints `Life's but a walking shadow; a poor player` (semicolon, not the comma a modern anthology would print), `To be thus is nothing, But to be safely thus.`, and `I have liv'd long enough` / `Is fall'n into the sere, the yellow leaf` with elisions.
- *Twelfth Night* `1526` prints Maria's letter as `some have greatness thrust upon 'em` while Feste later quotes the same line as `some have greatness thrown upon them`; Olivia's line prints `He hath been most notoriously abus'd`; Fabian's sentence prints `played` not `play'd`; the riddle prints `M.O.A.I. doth sway my life.` with no spaces after the stops. Each quotation is attributed to its speaker in the lesson.
- *Jane Eyre* `1260` prints `mama says`, not "mamma says" — corrected in lesson 47.
- *Scenes of Clerical Life* `17780` heads the first story `The Sad Fortunes of the Rev. Amos Barton` (abbreviated) — corrected in lesson 46's reading title. The narrator's apology opens chapter 5 and the burial opens chapter 9, matching the note's pointers.
- *Jekyll and Hyde* `43` chapter headings confirmed as `STORY OF THE DOOR`, `THE CAREW MURDER CASE`, `Henry Jekyll's Full Statement of the Case`; the trampling sentence reads `It wasn't like a man; it was like some damned Juggernaut.`
- Milton `1745` prints `E're half my days`, `Lodg'd with me useless`, `light deny'd`, `milde yoak`, `waite` and `least he returning chide`; the lessons quote these as printed and describe 'Ere', 'Lodged', 'wait' only as *regularisations* rather than attributing them to a named modern edition I did not read.
- Pope `7409` prints the couplet in lower case (`True wit is nature to advantage dressed; / What oft was thought, but ne'er so well expressed;`), noticed in the note.

All primary quotations are from works long in the public domain in the USA and hosted by Project Gutenberg; the notes repeat that local copyright rules should be checked elsewhere. No text is reproduced from the scholarly references (Folger, SEP, Living Handbook, Victorian Web, UNC, Purdue, poets.org); they are reading directions only. No invented quotation, no fictional video or audio, no Russian items (correctly omitted for this subject).

## Arithmetic and other computed checks

- The **14,539-word total** and every per-lesson figure were computed in code, not estimated.
- **Milton sonnet XVI**: rhyme scheme derived by grouping the line-endings — octave `ABBAABBA` (spent/bent/present/prevent against wide/hide/chide/deny'd), sestet `CDECDE` (need/speed, best/rest, State/waite). Syllable count of the opening line (`When I consider how my light is spent`) = **10**, i.e. iambic pentameter; a heuristic vowel-group counter over-counted 'nature' and the count was corrected by hand, and the lesson treats scansion as a hypothesis rather than a measurement, as lesson 38 established.
- **A Modest Proposal**: from the figures the persona gives — 120,000 children computed; 20,000 reserved for breed = **1/6**; 100,000 remaining for sale; 100,000 × 10 shillings = 1,000,000 shillings = **£50,000** at 20 shillings to the pound; nursing cost 2 shillings against a sale price of 10 = **8 shillings**, matching the text's own `eight shillings neat profit`; the weight 'medium' runs 12 lb → 28 lb, a gain of **16 lb** (ratio 2.333).
- **Internal inconsistency found and used as teaching material**: one fourth of 20,000 breeders is 5,000 males to 15,000 females = **1:3**, not the `one male will be sufficient to serve four females` asserted in the same paragraph. Lesson 48 now records this as a check the reader can perform, which strengthens the lesson's coherence-test argument.
- **Eliot's census appeal**: `eighty out of a hundred` = **80%**; the lesson notes that a census does not record character, so the narrator's statistic is rhetoric with a programme rather than a sociological finding.
- **22 assessment items**: 10 unit questions (5 per unit) and 12 level questions. Verified: **22 unique answers, 22 unique distractors, no answer equal to its distractor, no duplicated question ID, and every `reviewLessonIds` entry resolves to a lesson in this pack (41–50) or to a published literature lesson (31–40).** Question IDs are namespaced to this level's range: unit items `uq-41-50-a` … `uq-41-50-j`, cumulative items `lq-41-50-a` … `lq-41-50-l`. (Note for integration: the earlier level used `uq-31-a`-style IDs; this level follows the range-namespacing rule the brief specified.)

## Structural validation exercised

JSON parse from disk; subject/level/unit/lesson shape; consecutive lesson IDs 41–50; presence of all required lesson fields; exactly the six depth keys; ≥3 visual steps; readings with `https:` URLs and substantive notes; **no `russianItems`**; no empty or placeholder lesson; unit five questions each; level twelve questions; the word floor per lesson. Result: **no errors**. This is structural validation only — not source or pedagogy validation, not application TDD, not rendering or persistence checks.

## Limitations and integration notes

- All readings are bounded to named chapters, scenes or sections, with edition-specific caveats where a transcription prints archaic or aberrant forms; guide completion is not completion of a novel, and no lesson claims otherwise.
- The unit and level questions are binary-choice retrieval and application items; they are **not** proof of interpretive competence. The essays and rubrics inside `depth.application` (including the 900–1,200-word capstone in lesson 50) are the substantive evidence of learning.
- Two of the level's secondary sources are contested or displaced by design: the Living Handbook 'Unreliability' entry presents a genuine scholarly dispute, and both its nodes are cited via the archive host after redirect. The Victorian Web items are short critical pieces to be tested against the primary text, as the notes say.
- No browser automation, local server, deployment, dependency change, shared-file edit or audio change was used. Visuals are original text-based reasoning sequences, not images or videos. Parent owns integration, registration and production read-back.
