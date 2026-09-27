# Theology expansion: lessons 51–60 (new level) — handoff

## Paths written

- `src/lib/course-packs/staged/theology-51-60.json` — 266,268 bytes, valid JSON, re-parsed from disk after the write and after every validation run.
- `research/expansion/theology-51-60.md` — this note.

No other file was touched. `git status --porcelain` shows `src/lib/course-packs/staged/` as an untracked directory containing my file plus other workers' staged packs, and untracked `research/expansion/*-5x-60.md` notes from other workers. No existing `theology.json`, `theology-31-40.json`, `theology-41-50.json`, registry, catalog, test, dependency or audit output was modified. No server was started, nothing was deployed, and no browser automation was used (page bodies were fetched with `curl` and the extraction tool only).

## Structure

- Level title: **Vocation, Moral Method, and the Judgements the Church Leaves Open**
- Unit 1: **Vocation and the States of Life: Work, Marriage, Consecrated Life and Creation** — lessons 51–55, 5 unit questions (`uq-51-60-a` … `uq-51-60-e`)
- Unit 2: **Moral Method and the Contested Cases: From the Object of the Act to a Prudential Judgement** — lessons 56–60, 5 unit questions (`uq-51-60-f` … `uq-51-60-j`)
- Level: 12 cumulative questions (`lq-51-60-a` … `lq-51-60-l`)
- 10 lessons, 51 readings (5 per lesson; lesson 59 carries 6 because the beginning-of-life and end-of-life sources are distinct documents), a 6-step visual in every lesson, and no `russianItems` key anywhere (the subject is theology, per CONTRACT.md line 45).

Unit question suffixes run `a`–`j` across the two units and level suffixes `a`–`l`, so all 22 IDs are unique and namespaced to the range as the task required.

## Topics, lesson by lesson

| id | title | substance |
|---|---|---|
| 51 | Work as vocation: why the Church treats ordinary labour as a calling | Laborem Exercens 4–7, 10, 12–13, 24–27 (objective/subjective senses; economism; priority of labour); Gaudium et Spes 67, 43; CCC 2426–2434; Laudato Si' 124–128; Rerum Novarum 2–3, 19, 34–35, 42; Genesis 2:15; 2 Thess 3:10 as quoted in CCC 2427 |
| 52 | Marriage as covenant: what the Church defines, what she argues, and what is disputed | CCC 1601, 1640–1645, 1652–1658; Gaudium et Spes 47–52; Familiaris Consortio 13, 21, 84; Amoris Laetitia 291–312 read from the official PDF, including the footnote at 305/306; Matthew 19 (USCCB NAB with notes) |
| 53 | The theology of the body: catechesis, magisterium, and a reception in dispute | The dated audiences of 5 and 12 Sept 1979, 6 and 13 Feb 1980 (the "nuptial meaning of the body" appears in the 6 Feb 1980 text); Mulieris Dignitatem 6–7; CCC 2331–2337, 2357–2359, 2360–2372; Fiducia Supplicans 4, 11, 31, 38–39 reported with its differing implementations |
| 54 | Virginity, celibacy and the states of life: telling doctrine from discipline | Lumen Gentium 39–47 (esp. 42–43); Perfectae Caritatis 1–5; Vita Consecrata 7; CCC 914–944, 1579–1580 (the Latin and Eastern disciplines side by side); Sacerdotalis Caelibatus 1–3; 1 Corinthians 7:7 and Matthew 19:11–12 |
| 55 | Creation care: the human vocation inside a created order that belongs to God | CCC 339–341, 2415–2418, 2456; Laudato Si' 10–11, 23, 124–128, 159, 188; Compendium of the Social Doctrine ch. 10; Caritas in Veritate 48–51; Genesis 2 (USCCB) |
| 56 | Object, intention and circumstance: why consequences alone cannot settle a case | CCC 1749–1761 (full text); Veritatis Splendor 71–83 (incl. 78–80); Aquinas ST I–II q.18 a.2–6, q.20 a.5 (foreseen vs unforeseen consequences), II–II q.64 a.7 (the double-effect origin and its proportionality condition) |
| 57 | Natural law: how the argument actually runs, and how it is actually attacked | Aquinas ST I–II q.90 a.4, q.91 a.2, q.94 a.2/a.4/a.6; CCC 1950–1960; Veritatis Splendor 40–53; SEP "Natural Law Theories" plus its companion entry; four objections stated in their advocates' terms (is/ought, new vs traditional natural law, Barthian, critical/historical) |
| 58 | Virtue and habit: how character shapes what a person can see and do | CCC 1803–1806, 1810–1813, 1828, 1830–1841; Aquinas ST I–II q.55, q.63 a.1–3, II–II q.47; SEP "Virtue Ethics" for the situationist critique of Doris/Harman, answered without dismissing it; Amoris Laetitia 308 on stages of growth |
| 59 | Medical ethics at the beginning and end of life: where doctrine stops and judgement begins | Donum Vitae 1–8; Dignitas Personae 4, 21–22, 34 (including the vaccine permission and the duty to register disagreement); CCC 2270–2279, 2296; Declaration on Euthanasia I–IV; Samaritanus Bonus I–V; John Paul II's 2000 address to the Transplantation Society on the determination of death; Evangelium Vitae 57, 65 cited in prose |
| 60 | Capstone: weighing a contested prudential judgement, using migration policy as the case | CCC 2241–2242, 1905–1912, 2444; Erga Migrantes Caritas Christi 21, 30; Fratelli Tutti 37–41, 121–125; Gaudium et Spes 43, 65–66, 76, 87; USCCB migration committee material; the six-step method and the level's synthesis |

## Word counts (computed in code, not estimated)

Tokenizer `[\w'’-]+` applied to `explanation + example + definitions + mechanism + secondExample + mistake + application + summary`, on the file as written to disk:

| lesson | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
|---|---|---|---|---|---|---|---|---|---|---|
| words | 2400 | 2380 | 2132 | 2280 | 2275 | 2643 | 2729 | 2616 | 3028 | 2945 |

- Minimum per lesson **2132** against a 600-word floor; every lesson clears the floor by more than three times.
- **Total instructional words: 25,428.**
- No arithmetic beyond word counting was required: the pack contains no numerical worked examples (no financial or scientific calculations), so there are no numeric checks to record.

## Invariants exercised (script, on the written file)

`errors: 0` from `build.py`, which re-reads the JSON from disk and asserts:

- JSON parses; `subject` = `theology`; one level; two units; five lessons per unit; lesson IDs exactly `51`–`60` in order.
- Every lesson carries all 11 required keys, exactly the six `depth` fields (each non-empty and over 200 characters), 5–6 readings with non-empty title/url/note, a visual with a title, description and ≥3 steps, and no `russianItems`. No placeholder tokens (`TODO`, `TBD`, `lorem`, `FIXME`, `placeholder`, `XXX`) anywhere.
- 22 questions: 5 + 5 unit and 12 level; 22 unique IDs; all six fields non-empty on every question; all answers distinct; all distractors distinct; no answer equal to its own distractor; no duplicate prompts; no unit or level prompt duplicates a lesson retrieval prompt.
- All `reviewLessonIds` resolve inside 51–60 (the range used is 51–60 only, well inside the 01–60 limit).
- Unit suffixes are exactly `a`–`j` and level suffixes exactly `a`–`l`, all namespaced `uq-51-60-…` / `lq-51-60-…`.

## Source verification results

**38 distinct reading URLs (51 reading entries). All 36 vatican.va, newadvent.org and plato.stanford.edu URLs returned HTTP 200 to a direct request on the final pass.** That includes every encyclical, conciliar document, dicastery document, dated general audience, the Catechism index, the four Summa questions on human acts, law and virtue, and the two Stanford Encyclopedia entries.

**USCCB (2 URLs) 403s to scripted clients but resolves in a browser or extraction tool — disclosed, and re-verified this session.** `bible.usccb.org/bible/matthew/19` and `bible.usccb.org/bible/genesis/2` both returned 403 to `curl` and full chapter text with editorial notes to the extraction tool; `www.usccb.org/committees/migration/immigration` likewise returned 403 to `curl` and the complete page to the extraction tool note that the `/issues-and-action/human-life-and-dignity/immigration` path used originally now redirects to the `/committees/migration/immigration` address, which is the URL the pack cites. The two Scripture readings and the USCCB reading each carry a written access caveat in their `note`, as does the Catechism index (paragraph-numbered references because the Holy See serves the English Catechism as a paragraph index rather than as stable per-paragraph URLs).

**Every quotation and paragraph number was checked against a primary text fetched this session, not from memory.** Documents downloaded and read include: Laborem Exercens, Gaudium et Spes, Lumen Gentium, Perfectae Caritatis, Presbyterorum Ordinis (checked, not cited), Familiaris Consortio, Veritatis Splendor, Evangelium Vitae, Donum Vitae, Dignitas Personae, the 1980 Declaration on Euthanasia, Laudato Si', Amoris Laetitia (via the official PDF linked from the exhortation page, since the HTML body is served dynamically), Vita Consecrata, Fratelli Tutti, Rerum Novarum, Mulieris Dignitatem, Sacerdotalis Caelibatus, Samaritanus Bonus, the 2007 responses on artificial nutrition and hydration, Persona Humana (checked, not cited), Fiducia Supplicans, the 2000 transplantation address, Erga Migrantes Caritas Christi, Caritas in Veritate and the Compendium of the Social Doctrine. The complete English Catechism (all 374 part files) was indexed locally so that every CCC paragraph cited or paraphrased was read at source: 339–341, 914–944, 1577–1580, 1652–1666, 1749–1761, 1803–1841, 1905–1912, 1950–1960, 2241–2242, 2267, 2270–2279, 2296, 2321, 2331–2372, 2426–2434, 2444–2448, 2456.

Candidate sources **rejected or corrected during verification**, recorded so the parent does not re-cite them:

- `…/john-paul-ii/…/hf_jp-ii_enc_30091993_mulieris-dignitatem.html` and `…/apost_exhortations/documents/hf_jp-ii_exh_19960325_vita-consecrata.html` both 404. The correct addresses are the `apost_letters/1988/…_apl_19880815_mulieris-dignitatem.html` and `apost_exhortations/…_exh_25031996_vita-consecrata.html` pages used in the pack (both 200).
- **Querida Amazonia has no working English page under any path tried** (three variants, all 404), so the pack does not cite it; the celibacy discussion cites CCC 1580 and Sacerdotalis Caelibatus only, and the 2019 synodal debate is described in prose without document citation.
- The USCCB "Strangers No Longer" resource page is 404 and the `/issues-and-action/…/immigration` page redirects; the pack cites the committee page that actually resolves.
- Two 2019/2020 papal messages for the World Day of Migrants and Refugees 404 under the paths tried; not cited.
- The JPII Galileo address (1992) fetches a page whose body is not readable by script, as a previous worker recorded; not needed here.
- **Laudato Si' 61 vs 188:** the sentence "the Church does not presume to settle scientific questions or to replace politics" is at **LS 188**, not 61. The pack cites 188, which was verified in the fetched text.
- **Amoris Laetitia's HTML body cannot be read by script** at either the vatican.va or w2.vatican.va address (a ~35 KB shell in both cases). Paragraphs were read from the official PDF linked on that page; the reading note tells the learner how to get the PDF.

## Doctrinal handling

- **Defined or authoritatively taught** is labelled as such: the person as subject of work and the just-wage duty (GS 67; CCC 2428, 2434); the definition of matrimony and the indissolubility of a ratified and consummated sacramental marriage (CCC 1601, 1640); the object/intention/circumstance structure, the rejection of judging acts by intention or consequences alone, and the existence of intrinsically evil acts (CCC 1751–1756; VS 78–82); natural law as the rational creature's participation in the eternal law with universal, substantially valid precepts (CCC 1954–1960); the human origin of the moral virtues and the infusion of the theological virtues (CCC 1804, 1813; ST I–II q.63); the prohibition of direct abortion, deliberate embryo destruction, surrogate motherhood, heterologous fertilisation and direct euthanasia (CCC 2271, 2277; Donum Vitae 2–3; Dignitas Personae 21–22); the obligation to welcome the foreigner balanced with the authority's power to attach juridical conditions (CCC 2241).
- **Non-definitive but authoritative** is labelled separately: the papal catecheses of 1979–1984 and the observation that "theology of the body" is an editor's title for the collection; Laudato Si' as social teaching whose empirical and policy claims are contingent (LS 23, 188); the Amoris Laetitia application; Erga Migrantes and bishops' conference statements as dicastery and conference documents; the 2007 responses on nutrition and hydration, explicitly noted as themselves the product of a dispute among moralists.
- **Theological opinion and contested questions** are marked rather than presented as doctrine: the nuptial-meaning anthropology and the vocabulary of complementarity; the two schools within natural-law theory (traditional inclinations vs. the newer self-evident-goods reading); the status of the Latin celibacy discipline and proposals to change it; the determination of death under neurological criteria, which the Church explicitly declines to decide technically (2000 address); whether voluntarily stopping eating and drinking is refusal of treatment; whether particular nutrition-and-hydration decisions are proportionate; the reception of Fiducia Supplicans, reported with the fact that bishops' conferences have implemented it differently; and the migration policy argument, where the pack names two serious Catholic positions and states plainly that neither is dissent.
- **Other Christian and non-Christian positions are stated in their own terms**: the Barthian objection to natural-law theology; the situationist critique of virtue ethics attributed to Doris and Harman with its strongest form given; the proportionalist/teleological school described as its proponents argued it — goods are many and finite, material norms are reliable but not exceptionless — with Veritatis Splendor's rejection recorded as the magisterial answer rather than as a refutation by caricature.
- No claim of doctrinal change is asserted without the two propositions and the bridge; where readers divide (the Amoris Laetitia application, the celibacy discipline, the immigration balance, the reception of Fiducia Supplicans) the lesson says that readers divide.
- The capstone and lesson 59 both state explicitly that binary-choice retrieval and written exercises are practice, not evidence of theological competence or of prudence.

## Unresolved limitations

1. **Staged single level, not a merged file.** Written to `staged/theology-51-60.json` as instructed, which differs from CONTRACT.md's one-file-per-subject convention. The parent must merge it without altering existing lesson IDs 21–50. It is a new level (`levels[0]` of its own file), so merging means appending a further level object to `theology.json` or registering it in the staged-directory pipeline used for 31–50.
2. **Catechism citations are paragraph-numbered against the index URL, not deep-linked**, following the 31–40 and 41–50 packs. Paragraph contents were verified locally against all 374 part files, so the numbers and paraphrases are checked; a publisher wanting paragraph-level links must re-verify each one.
3. **Amoris Laetitia is cited by paragraph from the official PDF**, because the HTML body is not retrievable by script. The reading note instructs the learner to use the PDF; a publisher may prefer to host the relevant paragraphs.
4. **Two USCCB URLs 403 to scripts.** Both were confirmed to resolve through the extraction tool, and each reading carries the caveat in its note. If the publisher's link-checker treats 403 as failure, these two will need an allow-list entry or replacement.
5. **Fiducia Supplicans is reported, not adjudicated.** The pack states what the declaration permits and forbids and that implementation has differed between bishops' conferences, without taking a side; a reader who thinks the document settles the question either way will find the lesson deliberately agnostic on the pastoral application while firm about the doctrinal floor (that marriage is between a man and a woman, and that no union may be blessed as marriage).
6. **The 2019 synodal discussion of ordaining married men is described in prose without a document citation**, because Querida Amazonia could not be verified at any working URL. Nothing about its content is asserted.
7. **The migration capstone names two Catholic positions and refuses to choose between them**, since the Church does not. If the publisher wants a house line, this pack does not supply one; it supplies the method for reaching one and the boundaries the answer must respect.
8. **Assessment weight.** 5 unit questions and 12 level questions as specified; the questions are retrieval and application checks, and the lessons say so where the stakes are highest (lesson 59's application rubric and lesson 60's capstone self-review both include an explicit statement that a quiz cannot certify prudence).
9. **Pending behaviour untested by design.** No renderer, progress storage, assessment gating, audio or accessibility behaviour was exercised (no server, no browser automation per the contract). This is content only; the parent owns integration and production verification.
