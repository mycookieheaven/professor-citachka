# Catholic Theology, lessons 61-70 — authoring handoff

## Deliverables and paths

| Artifact | Path | Status |
| --- | --- | --- |
| Course pack (JSON) | `src/lib/course-packs/staged/theology-61-70.json` | written, parses, validates |
| This handoff note | `research/expansion/theology-61-70.md` | this file |

No other file in the repository was created or modified. `git status` shows the new untracked
directory `src/lib/course-packs/staged/` (this pack) and pre-existing untracked notes under
`research/expansion/` that belong to other workstreams. Nothing was deployed and no server was
started.

## Structure produced

- Subject: `theology`. One new level with two units of five lessons each, plus assessments.
- Level title: *Scripture Scholarship, Doctrine in Development, and Accountability: What the Church
  Defines, Permits, and Leaves Open*
- Unit 1 — *Inspiration, Criticism, Development and Councils: How the Church Reads Scripture and Her
  Own Doctrine* — lessons 61-65.
- Unit 2 — *Healing, Devotion, Politics and Accountability: Where Doctrine Ends and Judgement
  Begins* — lessons 66-70.
- Lesson IDs: 61, 62, 63, 64, 65, 66, 67, 68, 69, 70 (10 lessons, continuing 51-60; no ID collisions
  with the published packs, which the validator proves by attaching the whole catalogue at once).
- Questions: 10 unit questions `uq-61-70-a` … `uq-61-70-j` (unit 1: a-e, unit 2: f-j) and 12 cumulative
  level questions `lq-61-70-a` … `lq-61-70-l`. All 22 ids are namespaced to the 61-70 range; no
  answer equals its distractor, no answer or distractor text is repeated across questions, and all
  question fields are distinct prose.
- `reviewLessonIds` across all 22 questions reference only lessons 61-70 (maximum id 70). The
  contract permits referencing 01-70; this level keeps all references internal so the pack can be
  reviewed in isolation.
- No `russianItems` (this is not the `russian` subject).

## Topic map

| ID | Title | Core content |
| --- | --- | --- |
| 61 | Inspiration and inerrancy: what the Church defines, and what the argument over "without error" actually covers | Dei Verbum 11-13, 19; Providentissimus Deus 18-21; Divino Afflante Spiritu 23-25, 35-37; CCC 101-119, 375-390; the "for the sake of salvation" clause; what is defined vs. what is not |
| 62 | Historical criticism and the Catholic exegete: what Rome permits, requires and rules out | Pontifical Biblical Commission, *The Interpretation of the Bible in the Church* (1993) I.A and its "Evaluation", I.C, III; Divino Afflante Spiritu 23-24, 35-37; Dei Verbum 12, 19; Levada, "Dei Verbum – Forty Years Later" (2005) quoting the 1993 Preface |
| 63 | The development of doctrine: what development can and cannot mean | Vincent of Lérins, *Commonitorium* 23; Vatican I, *Dei Filius* ch. 4; *Mysterium Ecclesiae* 4-5; Dei Verbum 8; CCC 84-95, 100; the 2018 revision of CCC 2267 with the CDF letter |
| 64 | How a council works: Nicaea to Vatican II as historical events, and where conciliar authority rests | Chalcedon's Definition (newadvent NPNF text); Lumen Gentium 22-25 with the Nota Praevia; Vatican I, *Pastor Aeternus*; 1985 Extraordinary Synod final report; the pastoral/doctrinal distinction |
| 65 | Other religions after Vatican II: what Nostra Aetate teaches, what Dominus Iesus restates, and what remains disputed | Nostra Aetate 1-5; Lumen Gentium 16; CCC 839-848; Dominus Iesus 4-7, 16-17; the 2007 CDF Responses on "subsists in"; the PBC document on the Jewish people (2001); the Assisi 1986 address; honest statement of the contested questions |
| 66 | The sacraments of healing: penance and the anointing of the sick | Trent XIV (form, matter, necessity) and XXV; Sacrosanctum Concilium 72-75; CCC 1420-1498, 1499-1532; Misericordia Dei (2002) and the two conditions for general absolution; viaticum; doctrine vs. discipline |
| 67 | The communion of saints, purgatory, and praying for the dead | CCC 946-962, 1020-1060, 1471-1498, 2280-2283; Lumen Gentium 48-51; Trent XXV (purgatory and its restraint clause); Spe Salvi 45-48; 2 Maccabees 12:38-46; Orthodox and Reformation objections stated fairly |
| 68 | Mary and the saints: what is defined, what is devotion, what is disputed | Lumen Gentium 52-69; *Ineffabilis Deus*; *Munificentissimus Deus* 44-45; CCC 484-511, 963-975, 65-67, 2110-2111; Trent XXV on the saints; private revelation vs. public revelation; the four-box sorting method |
| 69 | The Church and political life: what binds, what is prudential, what is disputed | Gaudium et Spes 74-76; Dignitatis Humanae 1-4; CCC 1897-1927, 2244-2246; CDF *Doctrinal Note on the participation of Catholics in political life* (2002) including "the legitimate plurality of temporal options" and the abortion/euthanasia section; *Fratelli Tutti* 154-197; the 2018 letter on CCC 2267 as a contested case |
| 70 | Scandal and sin in the Church: the record, accountability, and reading a contested document | John Jay study (2004) figures; CCC 2284-2287; Matthew 18:1-14; *Vos estis lux mundi* (2019, revised 2023) read article by article; *Sacramentorum sanctitatis tutela* and the 2011 Levada letter; the USCCB Charter (June 2026 revision); the Holy See's 2020 McCarrick report; the six-question method for reading a contested document (capstone) |

Every lesson distinguishes defined doctrine from theological opinion from contested questions, marks
where doctrinal latitude exists (e.g. whether Mary died; whether a further Marian title should ever
be defined; the weight of issues in a vote; what a particular national guide to political
responsibility may require), presents Protestant and Orthodox positions in their own terms, and, in
lesson 70, states the abuse record and the critiques of the Church's response without evasion —
including the disclosure that the CIASE figure is reported from press coverage rather than from the
report itself.

## Word counts (computed in code, not estimated)

Instructional words = `explanation` + `example` + the six `depth` fields, counted with
`split(/\s+/)` exactly as `scripts/validate-packs.ts` and `src/lib/course-pack.ts` count them.

| Lesson | Words |
| --- | --- |
| 61 | 2,826 |
| 62 | 2,958 |
| 63 | 3,062 |
| 64 | 2,829 |
| 65 | 3,189 |
| 66 | 3,047 |
| 67 | 3,316 |
| 68 | 3,298 |
| 69 | 3,091 |
| 70 | 3,520 |
| **Total** | **31,136** |

Minimum per lesson 2,826 (contract floor 600; the previous four theology packs run 730 / 1,257 /
1,805 / 2,126 minimums, so this level continues the upward trend). Assessment text (prompt + answer +
distractor + correction across all 22 questions) adds 10,512 words; the file's grand total of
instructional plus assessment prose is 41,648 words. File size 358,350 bytes.

## Source verification

Method: candidate URLs were fetched with `curl` (HTTP status and byte count recorded), page bodies
were stripped of markup and searched for the exact passage to be cited, and every quotation used in
the pack was then re-checked against the fetched body in a final sweep (60+ phrases). Quotations in
the pack are verified substrings of the cited page, with two deliberate exceptions noted below where
the wording was aligned to the cited translation instead.

- **45 unique reading URLs. All 45 returned HTTP 200 at verification time.** No URL was invented; one
  fabricated conference URL found during drafting was removed and replaced (see "Corrections made").
- **vatican.va served reliably** for: Dei Verbum, Lumen Gentium, Gaudium et Spes, Nostra Aetate,
  Dignitatis Humanae, Sacrosanctum Concilium, Providentissimus Deus, Divino Afflante Spiritu,
  Munificentissimus Deus, Mysterium Ecclesiae, Dominus Iesus, the 2007 Responses on "subsists in",
  the 2018 letter on CCC 2267, Spe Salvi, Fratelli Tutti, the 2002 Doctrinal Note, Vos estis lux
  mundi (2023), the PBC document on the Jewish people, the 1986 Assisi address, the Levada 2011
  letter, and the McCarrick report PDF (2.6 MB).
- **Catechism.** The Holy See serves ENG0015 as a hex-named page index, not as paragraph pages, so
  every cited Catechism paragraph was verified in the mirror of the official English text at
  `scborromeo.org/ccc/` (pages `p1s1c2a1`, `p1s1c2a2`, `p1s1c2a3`, `p2s2c2a4`, `p2s2c2a5`,
  `p3s2c1a1`, `p3s2c2a5`, `p123a12`). The English wording in the pack matches that mirror of the
  official text, not a paraphrase.
- **Disclosures of indirect access** (each is stated in the pack's own reading notes as well):
  - *The Interpretation of the Bible in the Church* (PBC 1993): no reachable English page was found on
    vatican.va; read from the full-text mirror at `catholic-resources.org`. The "indispensable
    method" and "Evaluation" quotations verified there.
  - *Misericordia Dei* (2002): no reachable vatican.va English page; read from the EWTN library
    reproduction, whose excerpting is noted in the pack. The Latin original is cited as
    AAS 94 (2002) 452-459 — that pagination was **not** independently verified.
  - *1985 Extraordinary Synod final report*: not on vatican.va in English at the paths tried; read
    from the EWTN library page; the three quotations used were verified there.
  - *John Jay report* (2004): the USCCB's own PDF path returns 403 to scripted requests; the 291-page
    PDF was downloaded from an advocacy archive and parsed locally, and the figures in lesson 70
    (4,392 priests and deacons with non-withdrawn or non-falsified allegations; 10,667 individuals
    alleging abuse; 3-6 per cent of priests by region; 81 per cent of victims male; 50.9 per cent
    aged 11-14, 27.3 per cent aged 15-17) were read out of the study's own text.
  - *USCCB Charter for the Protection of Children and Young People*: usccb.org returns 403 to
    scripted requests, so the page was read through an extraction tool; the June 2026 revision is the
    current edition, and the previously circulating charter URL now returns 404.
  - *CIASE (France, 2021)*: the estimate of some 216,000 victims over seven decades is reported in
    the lesson **from press coverage only** (Church Times, Brussels Times); the commission's report
    itself could not be obtained.
- **Deliberately not cited**: the 1973 common declaration with the Syriac Orthodox patriarch and the
  1980 Mainz address on relations with Jews were dropped as unverifiable, and the Oriental Orthodox
  position in lesson 64 and the question of mission to Jews in lesson 65 are described in prose
  without a documentary citation. Canon-law provisions (c. 960-963 CIC, c. 228 CIC) are named in prose
  without a canonical-text URL because the vatican.va Code pages fetched returned the index rather
  than the part files; the substantive rules are documented instead through CCC 1483-1484,
  Misericordia Dei and Vos estis art. 14.

### Corrections made during verification (recorded for review)

1. **CCC 67 wording.** Draft text quoted "do not perfect or complete Christ's definitive revelation".
   The official English text reads "They do not belong, however, to the deposit of faith. It is not
   their role to improve or complete Christ's definitive Revelation, but to help live more fully by
   it in a certain period of history." All nine occurrences were replaced with the accurate wording.
2. **Ineffabilis Deus.** Draft text quoted a rendering that does not match the cited page. The pack
   now quotes the definition as published on the cited page ("in the first instance of her
   conception, by a singular grace and privilege granted by Almighty God, in view of the merits of
   Jesus Christ, the Savior of the human race, was preserved free from all stain of original sin"),
   with a note that older English versions read "preserved immune from all stain".
3. **CCC 2111.** Draft note paraphrased the paragraph. It now quotes the text: superstition "can even
   affect the worship we offer the true God, e.g., when one attributes an importance in some way
   magical to certain practices otherwise lawful or necessary"; and attributing "the efficacy of
   prayers or of sacramental signs to their mere external performance, apart from the interior
   dispositions that they demand, is to fall into superstition".
4. **Removed a fabricated reading.** A draft reading pointed at a `usccb.org/resources/form.cfm?sid=…`
   URL that does not exist. It was replaced with the Pontifical Council for Justice and Peace's
   *Compendium of the Social Doctrine of the Church* (vatican.va, verified 200) as the genre example,
   with the USCCB's *Forming Consciences for Faithful Citizenship* named in the note as a national
   parallel and its 403 behaviour disclosed.

## Validation performed

1. **The repository's own contract, executed.** A scratch harness (kept in the profile cache at
   `~/.hermes/profiles/citachka-ai/cache/scratch/validate-61-70b.ts`, not in the repository) imports
   `basePrograms` and the real `attachCoursePacks` from `src/lib/course-packs.ts` and `src/lib/course-pack.ts`,
   replicates `scripts/validate-packs.ts` ordering exactly, and adds the staged pack:
   `staged/theology-61-70.json → valid, subject theology, levels 1, units 2, lessons 10, ids 61-70,
   minWords 2826, totalWords 31136, uniqueReadings 45, unitQuestions [5,5], levelQuestions [12]`;
   `__published → valid, packs 42, programs 11, levels 73, lessons 730`; `failures: 0`.
2. **`npx tsx scripts/validate-packs.ts`** (unmodified, run from the repo root): all 41 published packs
   valid, `__published` valid, 720 lessons. Note that this script reads only `src/lib/course-packs/*.json`,
   so it does not see the `staged/` subdirectory; the harness above covers the staged pack until it is
   promoted.
3. JSON parses (`json.load` / `JSON.parse`), all 10 lessons carry the full field set, all six depth
   fields are non-empty strings, every reading is `https:` with title and note, every visual has ≥3
   steps, every unit has 5 questions, the level has 12 (more than a unit quiz), and no answer equals
   its distractor.

## Unresolved limitations and risks

1. **Mirror-hosted primary sources.** Two load-bearing documents (PBC 1993, Misericordia Dei) and the
   Catechism paragraph text are cited via high-fidelity mirrors because the Holy See pages were
   unreachable or index-only. The paragraph and section numbers are authoritative; the mirror wording
   should be spot-checked against a Holy See copy before publication if a stricter standard is wanted.
2. **John Jay English PDF** comes from an advocacy archive (the USCCB path 403s). The document is the
   study itself, with its USCCB imprint and ISBN, but a reviewer may prefer the USCCB-hosted copy
   fetched manually.
3. **CIASE figure (216,000)** is second-hand. Lesson 70 says so explicitly; if the number cannot be
   verified at source, consider dropping it and keeping only the wording "far larger estimates from
   later independent commissions elsewhere".
4. **AAS pagination for Misericordia Dei** and the canon-law citations are unverified as noted above.
5. **Historical claims** in lessons 64 and 70 are kept at a level of generality chosen so that nothing
   in the teaching depends on an uncited source; the only hard numbers are the John Jay figures. A
   reviewer wanting more detail (e.g. the Munich report, the Pennsylvania grand jury, the 2019
   Vatican summit) will need sources that were not verified here and were therefore left out.
6. **Not published.** The pack sits in `staged/` and is not registered or deployed; nothing in the
   running site changes until it is promoted into `src/lib/course-packs/` and the registry, which was
   out of scope for this task.
7. **Cross-level references not used.** All `reviewLessonIds` stay inside 61-70. If the intended
   learner experience is to review earlier material (e.g. lesson 61 against 51-60 on method), those
   references must be added deliberately — the contract allows 01-70.
