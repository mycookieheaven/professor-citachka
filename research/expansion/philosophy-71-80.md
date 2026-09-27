# Handoff — Philosophy level, lessons 71–80

## Exact paths written (only these two)
- `src/lib/course-packs/staged/philosophy-71-80.json` — the authored level, valid JSON (127,422 bytes, re-parsed successfully after write).
- `research/expansion/philosophy-71-80.md` — this note.

No other file was edited. `src/lib/course-packs/philosophy.json`, the registry, `programs.ts`, tests, catalogs and audit outputs were left untouched. `git status` shows `src/lib/course-packs/staged/` as the only addition from this task; the two tracked files also showing as modified (`artifacts/pedagogy/inventory.json`, `public/curriculum-audit.json`) were already modified before this task began and are not mine.

## Counts
- Levels: 1. Units: 2. Lessons: **10** (IDs `71`–`80`).
- Unit quizzes: **5** questions each (10 total). Level questions: **12** cumulative (`lq-71-a` … `lq-71-l`).
- Readings: 20 entries across the 10 lessons (1–3 each), all section-specific pointers.
- `russianItems`: intentionally omitted for this subject, per contract.

## Topic list
**Level: Epistemology, the self, and the reach of reason: knowledge, mind, freedom, and value**

Unit 1 — *Knowing, doubting, and being the same self*
- L71 Knowledge as justified true belief, and Gettier’s challenge
- L72 Justification and the regress of reasons: foundationalism and coherentism
- L73 Scepticism and its limits: hyperbolic doubt and the closure argument
- L74 Personal identity over time: psychological continuity and its rivals
- L75 Free will and determinism: compatibilism, libertarianism, hard determinism

Unit 2 — *Mind, value, and the discipline of argument*
- L76 The nature of mind: dualism, physicalism, and the explanatory gap
- L77 Moral realism versus anti-realism: truth, error, and expression
- L78 Justice and political obligation: the particularity problem and philosophical anarchism
- L79 Constructing a philosophical argument: premises, validity, and charity
- L80 Evaluating arguments: counterexamples, reductio, and the strongest objection

Continuity: L78 deliberately avoids repeating the prior level’s distributive-justice material (Rawls, Nozick, capabilities, civil disobedience, L61–70) by framing the topic as the *particularity problem* and *philosophical anarchism* (Simmons), and it cross-references L61/L62 conceptually in prose without re-teaching them. Level question `lq-71-*` set is authored fresh, not copied from unit prompts.

## Total instructional words (computed in code)
Definition used: `explanation + example + depth.{definitions, mechanism, secondExample, mistake, application, summary}` (the 8 fields the contract names).

**Total instructional words: 13,382**

Per lesson (all far above the 600-word floor):

| Lesson | Words |
|---|---|
| 71 | 1,382 |
| 72 | 1,227 |
| 73 | 1,299 |
| 74 | 1,270 |
| 75 | 1,355 |
| 76 | 1,413 |
| 77 | 1,338 |
| 78 | 1,401 |
| 79 | 1,286 |
| 80 | 1,411 |

Min 1,227 / max 1,413. Grand total of all lesson text including retrieval Q/A, readings and visual text: **15,776** words. Word counts computed with `re.findall(r"\S+", text)` in the build script.

## Automated checks run (all passed, 0 errors)
- JSON parses; written then re-read and re-parsed.
- 10 lessons, ID set exactly `71`–`80`; every lesson has all required keys including all six depth fields.
- Each lesson ≥600 instructional words.
- Every lesson has ≥1 reading with non-empty `title`/`url`/`note`; every URL is `https://`.
- 5 unit questions in each unit; 12 level questions; unique question IDs.
- Every `reviewLessonIds` ID is valid against the known set `61`–`80` (this pack or the pre-existing course).
- All 24 answer strings and all 24 distractor strings are pairwise distinct (global check across unit + level questions).

## Source verification (HTTP)
All 20 unique reading URLs re-checked with `curl -s -o /dev/null -w "%{http_code}" -L`; **all returned 200**. Sources are 17 Stanford Encyclopedia of Philosophy entries plus 3 primary/public-domain texts:
- SEP: `knowledge-analysis`, `justep-foundational`, `justep-coherence`, `skepticism`, `identity-personal`, `freewill`, `compatibilism`, `dualism`, `physicalism`, `qualia-knowledge`, `moral-realism`, `moral-anti-realism`, `moral-cognitivism`, `political-obligation`, `argument`, `fallacies`, `logic-informal`.
- Primary texts (all 200):
  - Descartes, *Meditations* I–II — Early Modern Texts free modernized English PDF (`earlymoderntexts.com/assets/pdfs/descartes1641.pdf`); note flags it as a simplified translation, not a critical edition.
  - Locke, *Essay* II.xxvii “Of Identity and Diversity” — Project Gutenberg #10615 (heading confirmed in the fetched text).
  - Hume, *Enquiry* §VIII “Of Liberty and Necessity” — Project Gutenberg #9662 (heading confirmed in the fetched text).

Section pointers were verified by fetching each SEP entry and reading its actual `<h2>/<h3>` headings, so citations name real sections (e.g. knowledge-analysis §1 and §3; justep-foundational §1–2 and §3.2 Sellarsian dilemma; skepticism §2/§4/§5; identity-personal §3/§4/§5; compatibilism §1/§3.1/§4; qualia-knowledge §2–§4; moral-anti-realism §1/§3; political-obligation §2/§3.1/§4; argument §1/§2; fallacies §1/§3; logic-informal §3/§4). No quotation is attributed to any source; passages are paraphrased, so no fabricated quotes are present.

## Arithmetic checks
No numerical or quantitative worked examples occur in this philosophy level, so no calculations were required; the only computed quantity is the word count above, produced and reported by code (`scratch/build.py`).

## Philosophical-accuracy notes
- Positions are attributed to their standard proponents (Gettier; Sellars; Reid’s objection to Locke; Parfit; van Inwagen; Frankfurt; Strawson; Jackson; Nagel; Mackie; Ayer/Blackburn; Moore; Simmons; Horton/Gilbert) without over-claiming.
- Each contested issue is explicitly marked contested versus settled (e.g. L71 states the *three-condition analysis* is refuted but the repairs are unresolved; L75 states determinism alone does not entail no-responsibility; L76 states the explanatory gap is an epistemic fact, not a proof of dualism).
- Strongest-form-first discipline is written into the content: L72 gives Sellars’s dilemma against foundationalism; L75 gives the manipulation argument against compatibilism; L77 gives Mackie’s two arguments in full and then the constructivist/procedural reply; L78 gives the fair-play, associative and Kantian natural-duty replies to Simons before Simmons’s counter-replies.

## Unresolved limitations
- `philosophy.json` in the repo currently contains only lessons `61`–`70`, not the `01`–`60` the contract describes as pre-existing. This pack was authored as `71`–`80` continuing after the “70 existing” lessons per the task, and all `reviewLessonIds` were restricted to the verifiable set `61`–`80`. If the parent’s canonical tree contains `01`–`60` elsewhere, no action is needed; if not, the `61`–`60` gap is a pre-existing discrepancy outside this task’s scope.
- Integration, progress-key migration, unit/level assessment placement, and production build/deploy are the parent’s responsibility; nothing was deployed and no server or browser automation was used.
- The Early Modern Texts Descartes PDF is a free modernized translation; for scholarly citation the parent may prefer a critical edition, though the free version is verified live.
- Visual blocks are step sequences for instructional diagrams, not videos, as required; no video URLs are claimed.
- Not marked as proof of professional competence; quizzes remain binary-choice practice items only.
