# Catholic Theology, lessons 71-80 — authoring handoff

## Deliverables and paths

| Artifact | Path | Status |
| --- | --- | --- |
| Course pack (JSON) | `src/lib/course-packs/staged/theology-71-80.json` | written, parses, validates, 329,869 bytes |
| This handoff note | `research/expansion/theology-71-80.md` | this file |

No registry, test, shared component or other pack was modified. `git status` shows this pack as the
only file I added (`?? src/lib/course-packs/staged/theology-71-80.json`); other staged packs and
untracked files in the working tree belong to other workstreams. No server was started and nothing
was deployed. Validation and URL-verification harnesses live outside the repository, in
`~/.hermes/profiles/citachka-ai/cache/scratch/` (`validate_th71.ts`, `verify_final.py`, `check2.py`,
`check_quotes.py`, plus cached page bodies in `th71cache/`, `th71final/`, `th71final2/`,
`th71final3/`).

## Structure produced

- Subject: `theology`. One new level, two units of five lessons each, plus assessments.
- Level title: *Systematic Doctrine, Sources and Contested Cases after Chalcedon: Trinity,
  Christology, Atonement, the Human Person, the Last Things, and How the Church Settles or Leaves
  Open a Question*.
- Unit 1 — *Doctrine and Systematic Reasoning: Trinity, Christology, Atonement, the Human Person and
  the Last Things* — lessons 71-75.
- Unit 2 — *Sources, History and Applied Ethics: Creed, Fathers, Canon Law, the Galileo Archive and
  the Ethics of War* — lessons 76-80.
- Lesson IDs 71, 72, 73, 74, 75, 76, 77, 78, 79, 80 (strings, continuing 61-70). Attaching base
  catalogue + theology.json + 31-40 + 41-50 + 51-60 + 61-70 + this pack yields 8 theology levels and
  80 topics with no ID collision.
- Questions: 10 unit questions `uq-71-80-a` … `uq-71-80-j` (unit 1 a-e, unit 2 f-j) and 12 cumulative
  level questions `lq-71-80-a` … `lq-71-80-l`. All 22 ids are namespaced to the 71-80 range; no answer
  equals its distractor; no question id is repeated.
- `reviewLessonIds` across all 22 questions reference only lessons 71-80, so the pack can be reviewed
  in isolation. The contract would also permit referencing 61-70 once this pack is registered after
  `theology-61-70.json`; that was left undone deliberately (see limitations).
- No `russianItems` (not the `russian` subject).

## Topic map

| ID | Title | Core content |
| --- | --- | --- |
| 71 | The Trinity: what Nicaea and Constantinople defined, and what the definition leaves open | Nicene *homoousios*; the 381 Symbol received at Chalcedon (per the 1995 PCPCU clarification); CCC 232-267 (252 substance/person/relation, 253 "one God in three persons, the 'consubstantial Trinity'" quoting Lateran IV, 254 "God is one but not solitary"); Paul VI's *Credo* 1968 on the Spirit as the Father's and the Son's eternal love; Florence 1439 on the single spiration; the 1995 clarification; ST I q. 28 as theology, not dogma; open questions (analogies, relations of origin); SEP *Trinity* as the analytic survey |
| 72 | Christology after Chalcedon: one person, two natures, two wills, and the unfinished question of Christ's human knowledge | Chalcedon's Definition verbatim (four adverbs, "the peculiar property of each nature being preserved"); the acts' formation of the definition ("Add then to the definition …"); Constantinople III on "two natural wills and operations, to wit, the divine and the human"; communicatio idiomatum; CCC 464-483 (470 "human nature was assumed, not absorbed"); ST III q. 10 as a school position; the open question of Christ's human knowledge (Mark 13:32) |
| 73 | The atonement: what the Church defines about the cross, and which theories are permitted | Trent VI ("merited Justification for us by His most holy Passion on the wood of the cross, and made satisfaction for us unto God the Father"), Trent XXII ("a true and singular sacrifice"), CCC 613-622 (613 unique and definitive sacrifice, 614 surpasses all others, 615 "Jesus substitutes his obedience for our disobedience", 617 Trent on merit, 618 participation, 620/622); Anselm *Cur Deus Homo* chapter titles; Westminster Confession VIII.5 and XI.3 compared; *Salvifici Doloris* 17-20; the defined floor versus the undefined mechanism |
| 74 | Theological anthropology: the image of God, body and soul, evolution, and what original sin does and does not explain | *Humani Generis* 36-37 (Latin tag on immediate creation of souls; "by no means enjoy such liberty"; "it is in no way apparent"); John Paul II 1996 on evolution ("more than a hypothesis", "several theories of evolution", materialist readings "incompatible with the truth about man", the transition to the spiritual "cannot be the object of this kind of observation"); Trent V canons 1-2, 5; CCC 403-409 ("born afflicted"; transmission "a mystery that we cannot fully understand"); ST I q. 118; ITC 2007 on limbo as "a possible theological hypothesis" and the "theological and liturgical reasons to hope" |
| 75 | Eschatology: heaven, hell, resurrection, and the questions the Church has deliberately left open | CDF 1979 letter points 1-7 (resurrection of "the whole person"; the subsisting "human self"; "loci theologici"; the deferral of the glorious manifestation; eternal punishment and purification; "Neither Scripture nor theology provides sufficient light for a proper picture of life after death"); CCC 1020-1060 (1024 heaven, 1033/1035 hell, 1051-1053); John Paul II audiences of 7 and 28 July 1999; the undefined population of hell and the permitted hope |
| 76 | The creed as a source: reading Nicaea-Constantinople, the anathemas, and the filioque clause | The 1998 Profession of Faith's Symbol; Paul VI's *Credo* 1968; the 1995 clarification (Rome's reception of the Symbol "on the occasion of the Ecumenical Council of Chalcedon in 451"; the presentation rule about the Monarchy of the Father; *ekporeusis* "signifies only the relationship of origin to the Father alone as the principle without principle of the Trinity"); Florence 1439 ("one principle and a single spiration"; "licitly and reasonably added"); the First Council of Constantinople (381) Symbol and canons (newadvent 3808, with the file-numbering caution); CCC 232-267 |
| 77 | The Fathers as sources: consensus, proof-texting, and what patristic testimony can and cannot settle | Ephesus Session I (Cyril's letters "approved as being orthodox and without fault"; the test against "the faith handed down and set forth in the great synod of holy Fathers"); Chalcedon's acclamation and the judges' instruction; Irenaeus *Against Heresies* III.3.1 (public succession); Basil *On the Holy Spirit* 65-66 ("the unwritten tradition of the Fathers"; opponents who "clamour for written proof"); CDF 1974 on abortion distinguishing the defined norm from "the various opinions on the infusion of the spiritual soul"; CCC 74-83 |
| 78 | Canon law as a source: reading a canon, and telling doctrine from discipline | CIC canons 17-18 (interpretation; strict reading of exceptions); canon 1024 ("a baptized male alone receives sacred ordination validly") behind it *Ordinatio Sacerdotalis* 1994 and the 1995 *Responsum*; canon 844 §§1-4 with the Ecumenical Directory's rationale; canon 1095 (three grounds); *Mitis Iudex Dominus Iesus* 2015 (procedural reform; the circumstances incl. "the defect of faith which can generate simulation of consent or error that determines the will", "a brief conjugal cohabitation", "an abortion procured to avoid procreation"); celibacy as discipline that Eastern Catholic Churches do not share |
| 79 | History as a source: the Galileo affair, the archive, and how to weigh a papal reassessment | Bellarmine to Foscarini 1615 (the conditional on demonstration; "none has been shown to me"; the faith "on the part of the ones who have spoken"); the 1633 Inquisition sentence ("vehemently suspected by this Holy Office of heresy") with Fordham's own source caveat; John Paul II's 1992 address ("this sad misunderstanding now belongs to the past"; the standing lesson; theologians to keep informed); the 1996 address as companion; the 1913 Catholic Encyclopedia article as a deliberately dated source |
| 80 | War, peace and the modern magisterium: how to read a text that says the criteria are hard to invoke | CCC 2309 (the four conditions; prudential evaluation; "the power of modern means of destruction weighs very heavily"), 2312-2314; *Veritatis Splendor* 80 ("there exist acts which per se and in themselves, independently of circumstances, are always seriously wrong by reason of their object"); *Pacem in Terris* 112; Francis's 2017 disarmament address ("the threat of their use, as well as their very possession, is to be firmly condemned"; a "mentality of fear"; "a false sense of security"); *Fratelli Tutti* 258; *Gaudium et Spes* 77-82 (capstone: three layers — constants, criteria, policy) |

Every lesson separates three things in its own words: what the Church has defined (with document and
section), what it teaches authoritatively without a definition, and what is theological opinion,
historical reconstruction or an open question. Protestant and Orthodox positions are stated from their
own confessional texts where the topic touches them (Westminster Confession, the Orthodox objections
in the filioque and eschatology lessons), and the pack says plainly where the Church has not settled a
question (Christ's human knowledge; the metaphysics of the Trinity; the mechanism of the atonement;
the transmission of original sin; the population of hell; the biology of human origins; the liturgical
form of the creed in the East; the metaphysics of the filioque).

## Word counts (computed in code, not estimated)

Instructional words = `explanation` + `example` + the six `depth` fields, counted with
`split(/\s+/)` exactly as `scripts/validate-packs.ts` and `src/lib/course-pack.ts` count them.

| Lesson | Words |
| --- | --- |
| 71 | 2,255 |
| 72 | 2,213 |
| 73 | 2,343 |
| 74 | 2,509 |
| 75 | 2,505 |
| 76 | 2,395 |
| 77 | 2,553 |
| 78 | 2,580 |
| 79 | 2,755 |
| 80 | 2,765 |
| **Total** | **24,873** |

Minimum per lesson 2,213 against a contract floor of 600. Assessment text (prompt + answer +
distractor + correction across all 22 questions) adds 11,827 words, so the file's total prose is
36,700 words. Every lesson has 5-6 readings and a 6-step visual.

## Source verification

Method: candidate URLs were fetched with `curl` and a browser User-Agent
(`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) … Chrome/126.0.0.0 Safari/537.36`), status code,
byte count and stripped text length recorded, bodies cached to disk, and then every quotation in the
draft pack was checked as a literal substring of the cited page in a final sweep (100+ targeted
phrases; all pass after the corrections below).

- **51 unique reading URLs, 58 reading entries. All 51 returned HTTP 200 with substantive content in
  the final sweep (0 problems).** Raw results: `th71final3/url_results.json`.
- **vatican.va served reliably** for: *Pacem in Terris*; *Humani Generis*; *Salvifici Doloris*;
  *Ordinatio Sacerdotalis*; the 1974 abortion declaration; the 1979 eschatology letter; the 1998
  Profession of Faith; *Credo* of Paul VI (1968); *Veritatis Splendor*; *Fratelli Tutti*; *Gaudium et
  Spes*; the ITC 2007 study; the John Paul II audiences of 7 and 28 July 1999; *Mitis Iudex* (corrected
  slug); Francis's 10 November 2017 disarmament address; and three Code of Canon Law part-pages
  (cann. 7-22, 834-878, 998-1165).
- **Catechism.** Every cited paragraph was verified in the mirror of the official English text at
  `scborromeo.org/ccc/` (pages `p1s1c2a2`, `p1s2c1p2`, `p1s2c1p7`, `p122a3p1`, `p122a4p2`,
  `p123a12`, `p3s2c2a5`). Paragraph numbers are authoritative; the wording in the pack matches that
  mirror.
- **Council and Father texts** came from New Advent's NPNF transmission (Ephesus, Chalcedon,
  Constantinople III, the First Council of Constantinople, Basil, Irenaeus, the Summa, the Knox
  1 Corinthians) and from `history.hanover.edu` for Trent VI, V and XXII; the Florence decree was read
  on `papalencyclicals.net`.
- **SEP hazard checked.** `plato.stanford.edu/entries/trinity/` was fetched and confirmed to serve the
  live article ("Trinity (Stanford Encyclopedia of Philosophy)", ~226k characters of text), not a
  "Document Retired" or "Not Yet Available" notice, before it was cited.

### Corrections made during verification (recorded for review)

1. **Mitis Iudex quotations.** The draft quoted a rendering that is not on the document ("the lack of
   faith which can generate a simulation of consent or an error of will"; "the brevity of conjugal
   life"). The motu proprio actually reads "the defect of faith which can generate simulation of
   consent or error that determines the will; a brief conjugal cohabitation; an abortion procured to
   avoid procreation". All three phrases were corrected in all four places they appear.
2. **Mitis Iudex URL.** The draft URL `…_20150815_motu-proprio-mitis-iudex-dominus-iesus.html` returns
   **HTTP 404**; the working path is `…papa-francesco-motu-proprio_20150815_mitis-iudex-dominus-iesus.html`
   (200, 73 KB). Fixed.
3. **Ecumenical Directory URL.** The draft christianunity.va path returns **HTTP 404**. Replaced with
   the Dicastery's current English-text page
   (`…/unitacristiani/en/documenti/testo-in-inglese.html`, 200, ~212k characters) and the reading note
   now discloses the dead path.
4. **A reading that served no content.** The draft cited a Holy See Mission statement page
   (`holyseemission.org/contents/statements/5973f074a0f4c.php`): HTTP 200 but only a 153-character
   JavaScript stub to a non-browser client, with the quoted phrases ("a climate of fear, mistrust and
   hostility", "the security of our common home") not present. Replaced with Francis's 2017 address on
   vatican.va, and the quotations re-verified there ("the threat of **their use**, as well as their
   very possession, is to be firmly condemned"; "a mentality of fear"; "create nothing but a false
   sense of security").
5. **Francis 2017 wording.** The bracketed rendering "the threat of the use [of nuclear weapons]…" was
   replaced with the verbatim "the threat of their use, as well as their very possession, is to be
   firmly condemned" (5 occurrences).
6. **Pacem in Terris.** The draft quote "in this age of ours, in which atomic weapons are becoming
   increasingly destructive" is not in the encyclical. Replaced with the verified §112 wording
   ("justice, right reason, and the recognition of man's dignity cry out insistently for a cessation
   to the arms race", then "Nuclear weapons must be banned").
7. **Veritatis Splendor.** The draft put a sentence from §78 into §80's mouth ("deliberate the choice
   of certain kinds of behaviour or specific acts…"). Replaced in both places with the verified §80
   sentence ("there exist acts which per se and in themselves, independently of circumstances, are
   always seriously wrong by reason of their object").
8. **Filioque and Greek terms.** The 1995 clarification's HTML renders Greek in mangled transliteration
   ("arch, aitia", "ekporeusiVof"), so the draft's `(archē, aitia) of the ekporeusis of the Spirit`
   inside quotation marks implied a verbatim text that does not exist on the page. The quotations now
   carry only verified English, with the Greek terms described outside the quotation marks (5
   occurrences).
9. **A reading pointing at the wrong document.** The EWTN library URL ending `…-1150` serves a chapter
   of Sheed's *Theology for Beginners* on the Eucharist, not the filioque clarification (its page title
   is "The Eucharist and the Mass"). Replaced with the correct EWTN copy (`…-29259`, title "Greek and
   Latin Traditions Regarding the Procession of the Holy Spirit"), which is where the cited sentences
   were verified.
10. **New Advent file numbering.** The draft cited `newadvent.org/fathers/3812.htm` as the First Council
    of Constantinople; that file is the **Second Council of Constantinople (553)**. Replaced with
    `3808.htm` ("First Council of Constantinople (A.D. 381)", containing the Symbol and the canons) and
    the reading note now warns students to check the page heading, not the file number.
11. **Catechism reading label.** `232-267` was mislabelled as "'I believe in God the Father, Son and
    Holy Spirit'"; the page is Paragraph 2, "The Father", under Article 1. Corrected.

### Disclosures of indirect or awkward access (also stated inside the pack's reading notes)

- **John Paul II, 31 October 1992 (Galileo).** The Holy See's English page returns a stub with no body
  text; the verified copy is the Pontifical Academy of Sciences' own page, which presents the Academy's
  summary followed by the address, with a visible "Read all" truncation inside the summary. The
  Academy's site sits behind a JavaScript challenge for scripted clients; the text was retrieved and
  read.
- **John Paul II, 22 October 1996 (evolution).** Same pattern: the vatican.va English page is a header
  without body text; the PAS page is the verified copy.
- **1995 filioque clarification.** The Holy See path for this English text now returns 404; the
  verified copy is the EWTN library mirror, and the reading note says so and asks a scholar to confirm
  against a Holy See or printed edition.
- **Inquisition sentence of 22 June 1633.** The Fordham page carries its editor's own note that he
  could not locate a printed source for the translation and points to another online rendering; the
  reading note reproduces that caveat.
- **Catholic Encyclopedia (1913), "Galileo Galilei".** Included on purpose as a dated source, with the
  note instructing students not to cite it as current scholarship.
- **Florence 1439** is read on `papalencyclicals.net`, whose page heading reflects the council's Basel
  years; the decree text itself was verified there (secondary host, primary text).
- **Code of Canon Law rendering artefact.** The vatican.va English pages render "ff" as "V" in places
  (canon 1095 reads "those who suVer from a grave defect of discretion of judgment"); the pack quotes
  the intended "suffer" and the phrase was verified around the artefact.
- **Dead candidates not used:** `sourcebooks.fordham.edu/mod/galileo-letter-christina.asp` and
  `…/mod/1616index.asp` return **HTTP 500**; `vaticanobservatory.org` serves a Sucuri JavaScript
  challenge to scripted clients. None of these was cited.

## Validation performed

1. **The repository's own contract, executed.** A scratch harness
   (`~/.hermes/profiles/citachka-ai/cache/scratch/validate_th71.ts`, outside the repository) imports
   `basePrograms` from `src/lib/programs` and the real `attachCoursePacks` from
   `src/lib/course-pack`, replicates `scripts/validate-packs.ts` ordering (base catalogue, then
   theology.json, 31-40, 41-50, 51-60, 61-70, then the staged pack), and reports:
   `status: valid, subject: theology, levels: 1, units: 2, lessons: 10, ids 71-80, minWords 2213,
   totalWords 24873, uniqueReadingUrls 51, unitQuestions [5,5], levelQuestions [12]`; and, after full
   attach, **8 theology levels / 80 topics** — proving no lesson-id or question-id collision with the
   published catalogue.
2. **Question-name and answer hygiene:** 22 question ids, all unique and namespaced `uq-71-80-*` /
   `lq-71-80-*`; no answer equals its distractor; every `reviewLessonIds` resolves inside 71-80.
3. **Field completeness:** all 10 lessons carry the full field set, all six `depth` fields are
   non-empty, every reading is `https:` with title and note, every visual has 6 steps, every unit has
   5 questions, the level has 12 (more than any unit quiz).
4. **JSON parses** with both `json.load` and `JSON.parse`; the file is 1-space indented like its
   siblings. `scripts/validate-packs.ts` was not modified and was not re-run against the staged pack
   because it reads only `src/lib/course-packs/*.json`; the harness above covers the staged file until
   it is promoted.

## Unresolved limitations and risks

1. **The 1995 filioque clarification is cited from an EWTN mirror** because the Holy See path 404s. The
   document is short and well known; a reviewer promoting the pack may prefer to restore a
   holysee-hosted or printed citation.
2. **Two John Paul II addresses are cited from the Pontifical Academy of Sciences** because the
   vatican.va English pages are stubs. The Academy's page carries its own summary alongside the text;
   the pack says so.
3. **Greek terminology is paraphrased, not quoted** in the clarification citations, because the HTML
   mutilates the Greek transliteration. Anyone quoting the Greek should take it from a printed edition.
4. **Historiography of the Galileo affair** is deliberately thin on unverified specifics: the pack
   leans on Bellarmine's letter, the 1633 sentence, the 1992 address and Fordham's own caveats, and
   avoids datable claims (later Index editions, the 1820s permissions, the 1979–1992 commission's
   internal reports) that were not verified here.
5. **"Where the Church has not settled a question"** is my synthesis of the documents' silence, not a
   citation from a document that lists open questions. The pack words these sentences as open
   questions rather than as magisterial statements, but a doctrinal reviewer should confirm each one
   (the clearest cases: Christ's human knowledge; the mechanism of original sin's transmission; the
   metaphysics of the distinctions in the Trinity; the population of hell).
6. **Cross-pattern in the repo.** Other authors are filling `staged/` with other subjects. This pack is
   **not registered**; nothing in the running site changes until it is promoted into
   `src/lib/course-packs/` and added to `src/lib/course-pack-registry.ts` after `theology-61-70`
   (the registry was out of scope and was not touched). Because the promotion is what makes 61-70
   available for review references, all `reviewLessonIds` stay inside 71-80.
7. **Not run:** `npm test` / `npx vitest run`. The suites read the published registry only, so they
   cannot see a staged pack, and running them would prove nothing about this file. The harness in
   §Validation is the substantive check and it passes.
