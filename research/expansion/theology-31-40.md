# Theology expansion: lessons 31–40 (new level) — handoff

## Paths written

- `src/lib/course-packs/staged/theology-31-40.json` — 157,477 bytes, valid JSON, reparsed from disk after the final edit.
- `research/expansion/theology-31-40.md` — this note.

No other file was touched. No registry, catalog, program, test, dependency, audit output, or existing `theology.json` was modified (`git status` shows only the new `staged/` directory and this note from my work; `artifacts/pedagogy/inventory.json` and `public/curriculum-audit.json` were already modified by other workers before I started). No server started, no deployment, no browser automation.

## Structure

- Level title: "Dogma, Grace, and the Moral Life: Defining, Reading, and Living the Faith"
- Unit 1: "How Doctrine Is Defined, Read, and Received" — lessons 31–35, 5 unit questions (`uq-31-a` … `uq-31-e`)
- Unit 2: "Grace, Sacraments, and the Formed Conscience" — lessons 36–40, 5 unit questions (`uq-36-a` … `uq-36-e`)
- Level: 12 cumulative questions (`lq-31-a` … `lq-31-l`)
- No `russianItems` key anywhere (subject is theology).

## Topics, lesson by lesson

| id | title |
|---|---|
| 31 | Dogma, definitive teaching, and the response each claim asks for (three-paragraph Profession of Faith; canon 750 §1–§2; canon 751–752; anathema as censure of a proposition) |
| 32 | Development of doctrine: tests, not slogans (Vincent of Lérins; Newman's seven notes; the 2018 revision of CCC 2267 as the worked case) |
| 33 | Scripture and Tradition in Catholic reading (Dei Verbum 9–12; literal and spiritual senses; rule of faith; 2 Thess 2:15 against Matthew 15:1–9; John 6 as an interpretive divergence) |
| 34 | Reading a Church document accurately (four-question method; genre/modality taxonomy; Donum Veritatis 24 criteria; Mysterium Ecclesiae 5 on the historical condition of dogmatic formulas) |
| 35 | Defined dogma in practice: the Immaculate Conception and the Assumption (definition formulas; what is deliberately left undefined; Scotist vs Thomist explanation; "Mediatrix"/"Coredemptrix" status; ARCIC) |
| 36 | Grace and justification: Trent, the Reformation, and the current state of the dispute (Trent VI; Lutheran/Reformed positions stated fairly; 1999 Joint Declaration and its status) |
| 37 | The sacraments of initiation: Baptism, Confirmation, and the Eucharist (Trent VII canons I, VIII, IX; Trent XIII ch. IV transubstantiation; doctrine vs discipline; WCC Baptism, Eucharist and Ministry) |
| 38 | Penance, anointing, and the shape of conversion (Trent XIV on the parts of penance; James 5; Sacrosanctum Concilium 73 and Sacram Unctionem Infirmorum; social sin per Reconciliatio et Paenitentia; Trent XXV on indulgences) |
| 39 | Conscience and moral reasoning (Gaudium et Spes 16; Veritatis Splendor 65, 75, 78, 80; object/intention/circumstances; erroneous conscience) |
| 40 | The communion of saints: Mary, the saints, and what devotion does and does not claim (Trent XXV invocation and images; Lumen Gentium 48–51, 62, 67; Marialis Cultus 38; Directory on Popular Piety ch. V; ARCIC) |

## Word counts (computed in code, not estimated)

Counted with a tokenizer on `explanation + example + definitions + mechanism + secondExample + mistake + application + summary`:

| lesson | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 |
|---|---|---|---|---|---|---|---|---|---|---|
| words | 1418 | 1256 | 1348 | 1255 | 1369 | 1460 | 1406 | 1519 | 1464 | 1519 |

- Minimum per lesson: 1255 (floor is 600; all ten lessons exceed it by more than double).
- **Total instructional words: 14,014.**
- Including question, answer, distractor, correction, reading titles/notes, and visual text: 18,158.
- No numerical worked examples occur in this pack (theology has no calculation content), so no arithmetic beyond word counting required a tool check; all counts above were produced by script on the file as written to disk.

## Invariants exercised (script, on the written file)

- JSON parses; `subject` = `theology`; 1 level, 2 units, 5 lessons per unit, 10 unique lesson IDs `31`–`40`.
- Every lesson has all required keys, exactly the six depth fields, ≥4 readings with `title`/`url`/`note`, and a visual with ≥4 steps; no `russianItems`; no placeholder strings (`TODO`, `TBD`, `lorem`, `FIXME`).
- 22 questions: 5 + 5 unit, 12 level; 22 unique question IDs; all four fields non-empty.
- All 22 answers distinct, all 22 distractors distinct, no answer equal to its own distractor, no duplicate prompts. No unit or level prompt duplicates a lesson retrieval prompt.
- All `reviewLessonIds` resolve to this pack (31–40) or to the preexisting course (one reference to `26`, a lesson that exists in the current `theology.json`).

## Source verification results

34 distinct reading URLs. All were exercised over HTTP in this session.

- **32/34 returned HTTP 200** to a direct request (vatican.va documents, the Holy See's Catechism index, the Dicastery for Promoting Christian Unity pages for the Joint Declaration and ARCIC, history.hanover.edu Trent sessions VI/VII/XIII/XIV/XXV, newmanreader.org, newadvent.org, papalencyclicals.net, oikoumene.org, and 3 of the USCCB Scripture chapters).
- **2/34 returned 403 to curl but resolve normally in a browser-class fetch** and were confirmed by a separate web extraction: `bible.usccb.org/bible/john/6` and `bible.usccb.org/bible/romans/5`. The USCCB site rate-limits automated clients intermittently; earlier in the session `john/6` returned 200 to the same client and both returned 200 to the extraction tool. Pages cited from that site are labelled as NABRE text with editorial notes, and lessons tell learners to keep the notes distinct from the sacred text.
- **Claims checked against primary text before writing** (so that no quotation is invented and no section number is guessed): the three paragraphs of the Profession of Faith and the doctrinal commentary's own examples of the second and third category; canon 750 §1–§2 in Ad tuendam fidem; canon 751; Donum Veritatis 16, 23, 24; Mysterium Ecclesiae 5; Dei Verbum 8–12; Lumen Gentium 25, 48–51, 53, 62, 67; Gaudium et Spes 16; Veritatis Splendor 65, 75, 78, 80; Trent VI chs. V, XI–XII and canons XV–XVII; Trent VII canons I, VII–IX; Trent XIII ch. IV; Trent XIV on the parts of penance, contrition, confession, and venial sins; Trent XXV on indulgences and on the invocation of saints and images; Munificentissimus Deus 44–45; Ineffabilis Deus' defining formula; Marialis Cultus 38; the 2018 CDF letter on CCC 2267 and the revised paragraph; Vincent of Lérins, Commonitory ch. 23 §§54–55; Newman's contents page and the seven notes' chapter list; Arcic II (Mary) page structure; Directory on Popular Piety ch. V nn. 183–207; Ecclesia de Eucharistia ch. 1 (n. 11 ff.).

Verification work also **rejected or corrected** four candidate links, recorded so the parent does not re-cite them:

- The Pontifical Biblical Commission's *The Interpretation of the Bible in the Church* (1993) has no English page on vatican.va (only ge/it/po/sw/uk at the documented path); the pack therefore uses the PBC's *The Jewish People and their Sacred Scriptures in the Christian Bible* (2001), whose English page returns 200.
- The old per-article Catechism archive (`/archive/ccc_css/archive/catechism/p3s1c3a2.htm` and similar) returns 404 for every path tried. Catechism readings therefore cite the Holy See's Catechism index plus explicit paragraph numbers.
- `newadvent.org/fathers/3503.htm` is Sulpitius Severus' *Dialogues*, not Vincent's *Commonitory*; the correct URL is `3506.htm`, which is what the pack cites.
- The dicastery letter on the death penalty exists at two spellings; the pack cites the verified `rc_con_cfaith_doc_20180801_lettera-vescovi-penadimorte_en.html` and mentions the companion `..._catechismo-penadimorte_en.html` in the note text only (that one also returns 200).

## Doctrinal handling

- Defined dogma is labelled as such (the seven sacraments; the character in Baptism, Confirmation, Order; the real presence and transubstantiation; the two Marian definitions; the categories of canon 750).
- Authoritative but non-definitive teaching is labelled separately (Veritatis Splendor's moral sections; Donum Veritatis' account of assent; dicastery letters).
- Theological explanations and contested positions are marked as such rather than presented as doctrine: Scotist vs Thomist accounts of the Immaculate Conception; the theological vocabulary of latria/dulia/hyperdulia and of attrition; the three conditions for mortal sin as a description of the human act rather than a tool for judging others; the theory of the fundamental option and the criticisms of the encyclical that rejects it; the 2018 death-penalty revision as a case where Catholic readers divide over whether the change concerns application or judgment; "social sin" as an analogy the source itself limits; "differentiated consensus" flagged as commentators' vocabulary rather than a phrase in the Joint Declaration.
- Other Christian and non-Catholic positions are stated in their own terms where the pack discusses them: Lutheran and Reformed accounts of justification, the WCC's Baptism, Eucharist and Ministry on convergences and remaining divergences, Orthodox non-reception of the 1854/1950 definitions, classical Protestant objections to the invocation of saints, and the ARCIC agreed statement (explicitly described as a dialogue commission's text and not an act of the magisterium).

## Unresolved limitations

1. **Staged single level, not a merged file.** The task specified `staged/theology-31-40.json`, which differs from CONTRACT.md's one-file-per-subject convention. The parent must merge this level into `theology.json` (or the registry that reads the staged directory) without touching lesson IDs 21–30.
2. **Catechism citations are paragraph-numbered, not deep-linked.** The Holy See serves the English Catechism in part files whose per-paragraph addresses are not stable; every CCC reference therefore names the paragraph (`88–90`, `891–892`, `946–962`, `1749–1789`, `1987–2029`) against the index URL. A parent who wants paragraph-level links must verify each one.
3. **One historical claim lacks a cited reading.** Lesson 35 says the responses to the 1849 consultation before the Immaculate Conception definition ranged from enthusiastic to cautious about timing. That is accurate in substance but the pack supplies no URL for it; add a source or soften the sentence if the publisher requires a citation for every factual claim.
4. **The 1999 signing process is described generally.** The pack refers to "further Catholic clarifications" accompanying the signing of the Joint Declaration (the official common statement and annex) without quoting them, because those specific texts were not verified in this session.
5. **Some standard theological vocabulary is attributed to "the tradition" rather than to a document** — attrition, latria/dulia/hyperdulia, invincible and vincible ignorance, the classical principles on a certain and a doubtful conscience, and the treasury of merit. The lessons say so in the prose; a publisher wanting tighter sourcing could anchor each to the Catechism.
6. **Trent quotations come from a public-domain 1848 translation** (Waterworth, hosted at Hanover College), which the readings label for what it is; an official Holy See edition is preferable for any text the site displays as a quotation rather than a paraphrase. The lessons paraphrase rather than quote Trent, except for short phrases verified in that text.
7. **Pending behaviour is untested by design.** No renderer, progress storage, assessment gating, or accessibility behaviour was exercised here (no server, no browser automation per the contract). This pack is content only; the parent owns integration tests and production verification.
8. **Question count.** 5 unit questions per unit and 12 level questions, as specified. Correct answers in a binary-choice quiz are retrieval practice, not evidence of theological competence; the lessons say so where the stakes are highest (lessons 30 in the prior level and the capstone question here).
