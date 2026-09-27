# Theology expansion: lessons 41–50 (new level) — handoff

## Paths written

- `src/lib/course-packs/staged/theology-41-50.json` — 207,387 bytes, valid JSON, re-parsed from disk after the final write.
- `research/expansion/theology-41-50.md` — this note.

No other file was touched. `git status --porcelain` shows only `src/lib/course-packs/staged/` and this note from my work (plus other workers' untracked `research/expansion/*-4x-50.md` files and one pre-existing modification to `artifacts/pedagogy/production-route-readback.json` that was already dirty before I started). No registry, catalog, program, test, dependency, audit output, or existing `theology.json` / `theology-31-40.json` was modified. No server started, no deployment, no browser automation.

## Structure

- Level title: **Prayer, Worship, and the Church in a Contested World**
- Unit 1: **The Life of Prayer and the Liturgy That Feeds It** — lessons 41–45, 5 unit questions (`uq-41-50-a` … `uq-41-50-e`)
- Unit 2: **Conscience, Communion, and the Questions That Are Not Settled** — lessons 46–50, 5 unit questions (`uq-41-50-f` … `uq-41-50-j`)
- Level: 12 cumulative questions (`lq-41-50-a` … `lq-41-50-l`)
- 10 lessons, each with 5 readings and a 5–6 step visual; no `russianItems` key anywhere (subject is theology).

Question IDs are namespaced to this level's range as required; because there are two units in one level, unit 1 takes `a`–`e` and unit 2 continues at `f`–`j` so all 22 IDs stay unique.

## Topics, lesson by lesson

| id | title | substance |
|---|---|---|
| 41 | Prayer as grace and as battle: what the Church claims and what it does not | CCC 2559/2565 definition and relational account; five forms (2626–2649); three sources (2662); three expressions (2700–2719); distraction, dryness, acedia (2729–2733); petition and providence per Aquinas ST II–II q.83 a.2; Luke 11:1–13; Matthew 6:8; Didache 8; Augustine, Letter 130 |
| 42 | The senses of Scripture, and how to detect a proof-text | CCC 115–119 (literal sense as foundation); Aquinas ST I q.1 a.10; four proof-text failure modes worked on 1 Tim 6:10, Ps 14:1, 2 Cor 3:6, Ps 137:9, Matt 2:15/Hos 11:1; Dei Verbum 12 criteria; PBC *The Jewish People…* |
| 43 | The liturgy as source and summit: what liturgical reform can and cannot change | SC 5–14, 21–23, 36–40; CCC 1124–1126, 1205–1206; immutability vs adaptation; competence (SC 22); worked case = *Summorum Pontificum* (2007) arts 1–2 vs *Traditionis Custodes* (2021) arts 1–3 |
| 44 | The Eucharist in doctrine and history: presence, sacrifice, and the disputes around them | Trent XIII chs IV–V and canons; CCC 1324, 1374–1375, 1398–1401; Didache 9–10; Ignatius, *Smyrnaeans* 7; Justin, *First Apology* 65–67; SC 47; *Ecclesia de Eucharistia* 1, 5, 44–46; WCC *Baptism, Eucharist and Ministry* |
| 45 | Catholic social teaching: four principles and the policy questions they do not settle | *Compendium* 160–162 (four permanent principles); GS 26, 74 (common good); *Quadragesimo Anno* 79–80, 83 (subsidiarity; labour not a commodity); *Sollicitudo Rei Socialis* 38, 42; CCC 1905–1912, 1939–1943, 2444–2448; *Rerum Novarum* 4–8; *Octogesima Adveniens* 4 |
| 46 | Formed conscience and public dissent: what may be argued, and how | CCC 1783–1785, 1790; *Dignitatis Humanae* 1–2; *Donum Veritatis* 27–38 (definition of dissent, theological positivism, the two standard defences, the argument from majority opinion, freedom of faith, conscience); worked case = contested reception of *Humanae Vitae* (HV 4, 11–12); *Veritatis Splendor* 54–64 |
| 47 | Ecumenism: unity as communion, not absorption | *Unitatis Redintegratio* 1, 3, 4, 7, 11 (hierarchy of truths); LG 8 (*subsistit in*), 15; *Ut Unum Sint* 14, 36, 39, 95; *Ecclesia de Eucharistia* 44–46; CCC 817–819, 838, 1398–1401; *Dominus Iesus* 16–17; ARCIC as a worked genre case |
| 48 | Interreligious dialogue: what it is, what it is not, and what remains open | *Nostra Aetate* 1–5; *Dialogue and Proclamation* 42–43, 54 (four forms); *Dominus Iesus* 13–15; CCC 846–848, 838; LG 16; GS 22; the open theological question and a critic's position stated in its own terms |
| 49 | The problem of suffering: the range of legitimate Catholic responses | CCC 309–314, 618; *Salvifici Doloris* 1–4, 11–12, 18–19, 25–27; Job 38–42; John 9:1–3; Ps 88 (despairing lament, ends "my only friend is darkness"); Aquinas ST I q.49 a.2 (*culpa* vs *poena*); *Spe Salvi* 35–37 |
| 50 | Science, faith, and how to read a question the Church has not settled | GS 36, 59; *Fides et Ratio* 9, 49 and note 29 (Galileo, citing JPII 1979); *Providentissimus Deus* 18; *Humani Generis* 36–37 (polygenism warning); ITC *Communion and Stewardship* 63–65 (including its quotation of the 1996 message on evolution); CCC 159, 283; a five-step procedure for contested questions |

## Word counts (computed in code, not estimated)

Counted with a tokenizer (`[\w'’-]+`) on `explanation + example + definitions + mechanism + secondExample + mistake + application + summary`, on the file as written to disk:

| lesson | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 |
|---|---|---|---|---|---|---|---|---|---|---|
| words | 1817 | 1797 | 1905 | 1845 | 1884 | 1952 | 1893 | 1880 | 2045 | 2195 |

- Minimum per lesson: **1797** (floor is 600; every lesson exceeds it by roughly three times).
- **Total instructional words: 19,213.**
- Including question, answer, distractor, correction, reading titles/notes and visual text: **31,003**.
- No numerical worked examples occur in this pack (theology has no calculation content), so no arithmetic beyond word counting required a tool check; all counts above were produced by script on the file on disk.

## Invariants exercised (script, on the written file)

- JSON parses (re-parsed after the final edit); `subject` = `theology`; 1 level, 2 units, 5 lessons per unit; 10 unique lesson IDs `41`–`50`.
- Every lesson has all 11 required keys, exactly the six `depth` fields, 5 readings each (50 readings total, every one with non-empty `title`/`url`/`note`), a visual with 5–6 steps, and no `russianItems`; no placeholder strings (`TODO`, `TBD`, `lorem`, `FIXME`, `placeholder`) anywhere.
- 22 questions: 5 + 5 unit, 12 level; 22 unique IDs; all five fields non-empty on every question.
- All 22 answers distinct; all 22 distractors distinct; no answer equals its own distractor; no duplicate prompts; no unit or level prompt duplicates a lesson retrieval prompt.
- All `reviewLessonIds` resolve to this pack (41–50) or to published theology lessons (29, 31, 33, 34, 37, 39, 40) — nothing outside 21–50 is referenced.

## Source verification results

**37 distinct reading URLs; all 37 returned HTTP 200 to a direct request on the final verification pass.** That includes every vatican.va document and Catechism index, `history.hanover.edu` (Trent XIII), `newadvent.org` (Aquinas, Augustine, Didache, Ignatius, Justin), `oikoumene.org` (Lima text) and the three USCCB page URLs used as readings.

Caveat for the publisher: **USCCB pages (`bible.usccb.org`) rate-limit automated clients intermittently** — during this session several returned 403 to `curl` while others returned 200 to the same client, and all subsequent requests succeeded. Every USCCB passage used as a worked example was separately confirmed through a browser-class extraction tool, which returned full chapter text with editorial notes for: Job 38, Job 42, John 9, Psalm 22, Psalm 88, Psalm 137, 1 Timothy 6, 2 Corinthians 3 (plus Luke 11, Matthew 6, Hosea 11 and Matthew 2, which returned 200 to `curl` with full byte counts). A further 7 USCCB addresses are cited inside reading notes rather than as readings; these resolve in a browser and the lessons tell learners the pages load normally outside automated clients. Editorial notes are consistently labelled as annotation distinct from the sacred text.

**Claims checked against the primary text before writing** (so that no quotation is invented and no section number is guessed): SC 4, 5, 7, 10, 14, 21–24, 39, 47–48, 59; CCC 115–119, 159, 283, 309–314, 618, 818–819, 838, 846–848, 1124–1126, 1205–1206, 1324, 1373–1375, 1398–1401, 1502, 1783–1785, 1790, 1883–1885, 1905–1912, 1939–1943, 2444–2448, 2558–2565, 2626–2662, 2705–2712, 2725–2745; Lumen Gentium 8, 16, 26; Gaudium et Spes 22, 26, 36, 59, 74; Nostra Aetate 1–5; Unitatis Redintegratio 1, 3, 4, 7, 11; Dignitatis Humanae 1–2; *Ut Unum Sint* 14, 36, 39, 95; *Dialogue and Proclamation* 42, 43, 54; *Dominus Iesus* 13–15, 17; *Donum Veritatis* 28–38; *Veritatis Splendor* 54–64; *Humanae Vitae* 4, 11; *Ecclesia de Eucharistia* 44–46; *Mysterium Fidei* (checked, not cited); Trent XIII chs IV–V and canons I–VI; *Rerum Novarum* 4–8; *Quadragesimo Anno* 79–80, 83; *Sollicitudo Rei Socialis* 38, 42; *Caritas in Veritate* and *Centesimus Annus* (checked, not cited); *Octogesima Adveniens* 4; *Compendium of the Social Doctrine* nn. 2, 91, 160–162; *Salvifici Doloris* 1–4, 11–12, 18–19, 25–27; *Spe Salvi* 26, 35–37; *Fides et Ratio* 9, 49 and notes; *Humani Generis* 36–37; *Providentissimus Deus* 18; *Summorum Pontificum* arts 1–2; *Traditionis Custodes* arts 1–3; ITC *Communion and Stewardship* 43, 63–65; Aquinas ST I q.1 a.10, I q.49 a.1–2, II–II q.83 a.2; Augustine *Ep.* 130; Didache 8–10; Ignatius *Smyrnaeans* 7–8; Justin *Apology* 65–67.

Verification work **rejected or corrected** these candidate sources, recorded so the parent does not re-cite them:

- `vatican.va/…/hf_jp-ii_enc_20030417_ecclesia-eucharistia.html` and the `_en.html` variant both 404. *Ecclesia de Eucharistia* lives at `…/hf_jp-ii_enc_20030417_eccl-de-euch.html` (verified 200), which is what the pack cites.
- `vatican.va/content/francesco/en/encyclicals/documents/hf_francesco_enc_20150524_laudato-si.html` 404s; *Laudato Si'* is at `papa-francesco_20150524_enciclica-laudato-si.html`. (Checked while surveying social-teaching sources; not needed in the final pack.)
- The 1993 *Directory for the Application of Principles and Norms on Ecumenism* has no working `vatican.va` English page under the Pontifical Council paths tried (all 404), so the eucharistic-sharing rule is cited from *Ecclesia de Eucharistia* 44–46 and CCC 1398–1401 instead.
- `Musicam Sacram` and `Varietates Legitimae` English pages 404 under the Congregation for Divine Worship paths tried; neither is cited.
- The two 1996/1992 papal texts to the Pontifical Academy of Sciences (evolution message; Galileo address) resolve 200 but their page bodies are **not retrievable by automated fetch** (the pages return only site furniture; content is served dynamically). The pack therefore cites the 1996 message's wording **through the International Theological Commission's quotation of it** at *Communion and Stewardship* 64, and cites the Galileo reference **through *Fides et Ratio*'s note 29**, which quotes John Paul II's 1979 address. No text is attributed to a page whose body I could not read.
- `vatican.va/archive/hist_councils/i-vatican-council/documents/vat-i_const_18700424_dei-filius_en.html` 404s (Latin only at `…_dei-filius_la.html`), so the First Vatican Council's two-orders-of-knowledge text is quoted **as Fides et Ratio 9 quotes it in English**, not from the 404 page.

## Doctrinal handling

- **Defined or authoritatively taught** is labelled as such: the substantial presence and the conversion of the whole substance (Trent XIII ch. IV); the worship of *latria* (ch. V); the seven sacraments and the character in Baptism, Confirmation and Order (referenced from lesson 37); all grace is Christ's and Christ is the unique mediator (DI 13–14; CCC 846–848); God is in no way the cause of moral evil (CCC 311); the Church's teaching on prayer as a relationship; the four permanent principles of social doctrine and the dignity of labour; the prohibition of discrimination on religious grounds.
- **Non-definitive but authoritative** is labelled separately: *Humani Generis* 37's warning about polgyenism's reconcilability with original sin; *Humanae Vitae*'s teaching and the explicit note that the encyclical does not use the vocabulary of a solemn definition, with the ongoing theological argument about its precise status reported as ongoing; *Donum Veritatis*' account of assent and of dissent; dicastery letters; *Summorum Pontificum* and *Traditionis Custodes* as legislation.
- **Theological opinion and contested questions** are marked rather than presented as doctrine: Aquinas's explanation of petition and providence; the metaphysics of transubstantiation as distinct from the defined claim; the "hierarchy of truths" reading of *subsistit in* and DI 16–17's contested reception; the theological status of non-Christian religions, explicitly described as not settled by the council and still debated; the range of legitimate responses to suffering (free will, order of the universe, redemptive union with Christ, eschatological deferral, educative accounts), none canonised; the articulation of original sin given human ancestry, which the ITC treats as open work; the reception history of *Humanae Vitae*; the pastoral and prudential disagreement over the 2007/2021 liturgical legislation.
- **Other Christian and non-Christian positions are stated in their own terms**: Lutheran sacramental union and the Reformed spiritual-reception reading, and Zwinglian memorialism, distinguished from each other rather than bundled; the WCC Lima text's recorded convergences and divergences; Orthodox non-acceptance of the Petrine claims as the Catholic Church states them; ARCIC's agreed statements described as commission texts binding no one; a critic's objection to DI stated as its own best advocate would state it; a critic's objection to the Church's position on the unevangelised, with the defender's reply; the general call for the revision of *Humanae Vitae*'s pastoral application located as a real and contested question.
- No claim of "development" or doctrinal change is asserted without the two propositions and a bridge; where readers divide (the 2007→2021 liturgical law, the authority of *Humanae Vitae*, the status of the religions) the lesson says that readers divide.

## Unresolved limitations

1. **Staged single level, not a merged file.** Written to `staged/theology-41-50.json` per this task's instruction, which differs from CONTRACT.md's one-file-per-subject convention. The parent must merge it into `theology.json` (or the staged-directory registry) without altering existing lesson IDs 21–40.
2. **Catechism citations are paragraph-numbered against the index URL, not deep-linked.** The Holy See serves the English Catechism in 374 part files whose per-paragraph addresses are not stable, so every CCC reference names a paragraph range against `vatican.va/archive/ENG0015/_INDEX.HTM`, exactly as the 31–40 pack did. I verified paragraph *contents* by downloading all 374 part files and indexing them locally, so the numbers and paraphrases are checked; a publisher wanting paragraph-level links must re-verify each one.
3. **Two papal sources are cited only through secondary quotation** (the 1996 message on evolution via ITC n. 64; the 1979 Galileo address via *Fides et Ratio* note 29) because their `vatican.va` page bodies are not retrievable by automated fetch. The lessons do not quote from the unreadable pages directly.
4. **Trent quotations use the public-domain 1848 Waterworth translation** hosted at Hanover College, labelled in the readings; an official Holy See edition is preferable for any text the site displays as a quotation, so the lessons mostly paraphrase Trent and quote only short, verified phrases.
5. **Some standard theological vocabulary is attributed to "the theological tradition" rather than to a document** — *culpa*/*poena*, "ontological leap," the free-will and soul-making lines of response, "anonymous Christians," and the vocabulary of *dulia*/*hyperdulia* from the previous level. Where a term is a scholarly proposal rather than a teaching the lesson says so in the prose; a publisher wanting tighter sourcing could anchor each to a Catechism paragraph or a specific author.
6. **The liturgical legislation case (2007/2021) is reported, not adjudicated.** The lessons state the two acts accurately, cite both, and deliberately do not take a side on the prudential arguments, which continue among bishops, liturgists and faithful. If the publisher wants a house line on that dispute, this pack does not supply one.
7. **Pending behaviour is untested by design.** No renderer, progress storage, assessment gating, audio or accessibility behaviour was exercised here (no server, no browser automation per the contract). This is content only; the parent owns integration and production verification.
8. **Assessment weight.** 5 unit questions per unit and 12 level questions, as specified. Binary-choice retrieval is practice, not evidence of theological competence, and the capstone lesson says so where the stakes are highest.
9. **One deliberate judgement call worth flagging for review:** `Humani Generis` 37 and the ITC study are read together as a non-definitive intervention plus an open theological question. That reading is well supported by the documents themselves (the ITC quotes the 1996 message and limits its scope) and it is the position of most Catholic theologians who write on the topic, but a reader who holds that *Humani Generis* 37 enjoys a higher status than "non-definitive" would want the lesson's category assignment revisited. The lesson states the category with its reasons rather than asserting it flatly.
