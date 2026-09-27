# Literature continuation — level 2 (lessons 31–40) authored handoff

## Delivered scope and exact paths written

- `src/lib/course-packs/staged/literature-31-40.json` — one new level, two units, **10 lessons (IDs 31–40)**, 10 unit-quiz questions, 12 cumulative level questions. 118,830 bytes, valid JSON.
- `research/expansion/literature-31-40.md` — this handoff.

No other file was created or modified. `literature.json`, the registry, `programs.ts`, tests, audits and shared components were not touched; nothing was deployed and no server, browser automation, GitHub action or dependency change was used. Verified with `git status --porcelain` immediately after writing: my only entry is the new `src/lib/course-packs/staged/` directory (other staged files in that directory belong to other workers).

Level title: **Voice, form and the discipline of interpretation**

| Unit | Lesson | Topic | Instructional words |
|---|---|---|---:|
| Who speaks: voice, access and irony in narrative | 31 | First-person narration and the divided self: *Great Expectations*, ch. I | 1190 |
| | 32 | Third-person access: what a narrator is allowed to know in *Middlemarch* | 1078 |
| | 33 | Free indirect discourse: whose judgement is inside the sentence? (*Emma*) | 1107 |
| | 34 | Frames and filters: interested testimony in *Wuthering Heights*, ch. I | 1037 |
| | 35 | Irony: when the sentence means more, or less, than it says (*Northanger Abbey*) | 1231 |
| Craft and evidence: close reading, form, setting, and the defensible claim | 36 | Characterisation through action: the love test in *King Lear*, 1.1 | 1119 |
| | 37 | Close reading line by line: Shakespeare's Sonnet 73 | 1191 |
| | 38 | Metre and form: ballad measure and the sonnet (1798 *Rime*) | 1203 |
| | 39 | Setting as argument: Coketown in *Hard Times*, ch. V | 1184 |
| | 40 | Symbol, over-reading and the defensible interpretive claim (*The Scarlet Letter*, chs I–II) | 1267 |

**Total instructional words: 11,607**, computed in Python over `explanation + example + the six depth fields` only (prompts, answers, source notes, visual steps and assessments excluded). Minimum lesson 1,037; maximum 1,267; floor is 600. The count is a floor check, not evidence of quality.

Every required territory is covered: narrative voice and point of view (31–34), irony (35), characterisation through action (36), line-by-line close reading (37), metre and form (38), setting as argument (39), symbolism and how to avoid over-reading (40), and the construction of a defensible interpretive claim with textual evidence (40, with the claim → evidence → warrant → counterreading → falsification procedure reused in the level questions).

## Source verification results

25 unique source URLs, all re-checked by HTTP GET with a normal user agent immediately before finishing: **25/25 returned 200**.

- Project Gutenberg primary texts (all 200): `1400` (*Great Expectations*), `145` (*Middlemarch*), `158` (*Emma*), `768` (*Wuthering Heights*), `121` (*Northanger Abbey*), `1041` (Sonnets), `100` (Complete Works, *King Lear*), `9622` (*Lyrical Ballads*, 1798), `29090` (Coleridge, *Complete Poetical Works*), `786` (*Hard Times*), `33` (*The Scarlet Letter*).
- Living Handbook of Narratology nodes (all 200): `44` Narrator, `26` Perspective – Point of View, `47` Speech Representation, `32` Narrative Levels, `66` Unreliability, `58` Implied Author, `55` Space, `84` Telling vs. Showing, `138` Fictionality. Section pointers used in the notes were taken from the fetched pages' own headings (`Definition`, `Explication`, `Fictionality as a feature of fiction`, etc.).
- Other free scholarly/reference pages (all 200): SEP `hermeneutics` (sections `1.3 The Hermeneutical Circle`, `5. Symbol, Metaphor, and Narrative`), Folger Shakespeare Library *King Lear* 1.1 (line-numbered, lines 88–105 used), poets.org glossary `sonnet` and `ballad`, The Victorian Web *Hard Times* index.

Rejected during verification and **not** used: `poetryfoundation.org` glossary and poem pages (HTTP 403 to automated requests), `britannica.com` topics (403), and `rpo.library.utoronto.ca` per-term glossary URLs, which return HTTP 200 with navigation only (soft 404) so only the single glossary index page was treated as valid and it was ultimately dropped.

## Quotation verification: all quoted text is public domain and checkable

Method: every primary text was downloaded and its body searched. A sweep extracted all 187 single-quoted fragments from the lesson prose, split multi-line verse quotes on ` / `, whitespace-normalised them and matched each against the fetched source bodies. **175 fragments matched the cited texts verbatim.** The 12 non-matches are all deliberately constructed phrases that are *not* attributed to any source: my own illustrations of indirect speech and of a direct-speech rewrite (lesson 33), my own questions and test sentences (34, 35, 37, 39), the two hypothetical candidate readings I ask the reader to test and reject (40), and a template sentence. One residual flag was a filename mismatch in my own sweep script (`lhn138.html` vs `lhn_138.html`); the heading `Fictionality as a feature of fiction` was confirmed directly in the fetched HTML as `<h2>Fictionality as a feature of fiction</h2>`.

Three misrememberings were caught by this check and corrected in the pack rather than written from memory: *Great Expectations* reads `Oh! Don't cut my throat, sir,` (not "O!"); *Northanger Abbey* reads `would have supposed her born to be an heroine` (not "a heroine"); Goneril says `I love you more than word can wield the matter` (not "words"). The *Rime* stanza is quoted from the **1798** printing, which reads `Ne any drop to drink`, while the later Coleridge text reads `Nor any drop to drink` — both were confirmed in their respective sources, and the lesson uses the difference to teach that a metrical or quoted claim must name its edition.

All primary quotations come from works long in the public domain in the USA and hosted by Project Gutenberg; the notes repeat that local copyright rules should be checked elsewhere. No text is reproduced from the scholarly references (SEP, Living Handbook of Narratology, Folger, poets.org, Victorian Web); they are cited as reading directions only. The Folger digital text is a free scholarly edition with its own licence, and the pack links to it without reproducing it. No invented quotation, no fictional video, no audio claim, no Russian items (correctly omitted for this subject).

## Arithmetic and other computed checks

- Lesson word counts and the 11,607 total were computed in Python, not estimated (per-lesson figures in the table above).
- The metrical claims in lesson 38 were computed word by word: `Water, water, every where` = 2+2+2+1 = **7 syllables, 4 stresses**; `And all the boards did shrink` = 1+1+1+1+1+1 = **6 syllables, 3 stresses**; `Ne any drop to drink` = 1+2+1+1+1 = **6 syllables, 3 stresses**; `That time of year thou mayst in me behold` = **10 syllables, 5 stresses (iambic pentameter)**. Because the stanza is 7/6/7/6 it is described in the lesson as loose ballad measure with anapaestic substitution, explicitly *not* the strict 8.6.8.6 common metre of hymn books.
- 22 assessment items: 10 unit questions (5 per unit) and 12 level questions; **22 unique answers and 22 unique distractors, with no string reused and no answer equal to its distractor**. Every `reviewLessonIds` entry resolves inside this pack (31–40) only, so the parent can validate against a base catalogue that does not yet contain 21–30.
- Structural validation run after writing (mirroring `attachCoursePacks` plus the contract's own invariants): JSON parse from disk, subject/level/unit/lesson shape, consecutive IDs 31–40, presence of all seven lesson prose fields, exactly the six depth keys, six or more visual steps, readings with `https:` URLs and non-empty notes, no `russianItems`, no empty lesson, level test longer than a unit quiz. Result: **no errors**.
- The **real adapter was exercised**: a throwaway script outside the repository (`~/.hermes/profiles/citachka-ai/cache/scratch/packcheck.mjs`, not a repo artifact) imported `src/lib/course-pack.ts` and called `attachCoursePacks(base,[pack])` with a minimal literature base. It returned without throwing: one appended level, 10 topics, 2 unit definitions of 5 topics and 5 questions each, and 12 cumulative assessment questions. No repository file was created or modified to run this.

## Limitations and integration notes

- Structural validation is not source or pedagogy validation, and these checks are not application TDD, rendering tests, deployed-route checks or persistence verification. The parent owns integration, registration and production read-back.
- Readings are bounded to named chapters, scenes and lines; guide completion is not completion of a novel, and no lesson claims otherwise.
- The unit and level questions are binary-choice items for retrieval and application; they are not proof of interpretive competence. The essays and rubrics inside `depth.application` are the substantive evidence of learning.
- The Living Handbook of Narratology and SEP entries are free scholarly surveys, not a textual apparatus for the primary works; the *Scarlet Letter* and *Hard Times* transcriptions are ordinary reading texts, so edition-specific claims are limited to what the linked text actually prints.
- No browser automation, local server, deployment, GitHub action, dependency change, shared-file edit or audio change was performed. Visuals are original text-based reasoning sequences, not images or videos.
