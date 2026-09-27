# Neuroscience continuation pack — authored handoff

## Delivered scope

- Owned artifact: `src/lib/course-packs/neuroscience.json`.
- Owned report: `research/expansion/neuroscience.md`.
- One new level, **Mechanisms, representations, and the logic of neural evidence**.
- Two units, five substantive lessons per unit, stable IDs **21–30**.
- Five independently authored questions per unit and twelve independently authored cumulative questions: **22 assessment items**, plus ten optional lesson retrieval prompts.
- Every lesson has six depth fields, contrasting worked examples, a nonblocking written/sketch task with a model response and rubric, verified-source reading directions, and a topic-specific four-step visual sequence.
- These are instructional diagrams, not videos. No video URLs or playback claims.
- Recognition questions are not claims of clinical or professional research competence. Educational scope excludes individual diagnosis, treatment selection, and biological self-experimentation.
- This is a bounded expansion, not completion of the 100-unit course target. Integration and deployment are not part of this artifact.

## Scaffold from the existing course

Read the contract, teaching skill and learner context, grounding skill, `src/lib/sciences.ts`, and relevant `src/lib/programs.ts` mapping. Existing neuroscience rows supply lessons 01–20, ending with correlation/intervention, reverse inference, and headline evaluation. This level deepens actual earlier membrane, integration, sensory-coding, plasticity, memory, and evidence prerequisites rather than repeating introductory definitions as entire lessons. `programs.ts` assigns IDs from row order and takes the first twenty rows for the existing two levels. No existing IDs or progress data were changed.

## Instructional word counts

Counted only `explanation`, `example`, and the six `depth` fields, excluding questions, citations/readings, titles, and diagrams. Token rule: Unicode word sequences allowing internal apostrophes/hyphens. Counts were computed from the saved parsed JSON.

| ID | Topic | Instructional words |
|---|---|---:|
| 21 | Synaptic integration is a spatiotemporal computation | 782 |
| 22 | Inhibition changes responsiveness, not only voltage | 785 |
| 23 | Center–surround fields encode contrast | 781 |
| 24 | Population codes and ambiguous single-cell responses | 780 |
| 25 | NMDA-dependent potentiation: induction versus expression | 758 |
| 26 | Hippocampal indexing: a model across explanatory levels | 785 |
| 27 | BOLD, local field potentials, and what a signal measures | 778 |
| 28 | Necessity, sufficiency, and competing causal pathways | 758 |
| 29 | Reverse inference requires selectivity and a comparison set | 755 |
| 30 | Build a multi-level evidence argument without overclaiming | 801 |

**Total: 7,763 instructional words. Minimum: 755. Maximum: 801.** Every lesson exceeds the 600-word floor.

### Unit sequence

1. **From synaptic integration to experience-dependent circuits:** spatial/temporal summation; conductance and shunting; retinal center–surround computation; population coding and decoding limits; NMDA-dependent LTP induction versus expression.
2. **From memory models to defensible neuroscience claims:** hippocampal indexing as a historical theory; BOLD/LFP/spike measurement distinctions; necessity/sufficiency and experimental controls; selective reverse inference; a multi-level evidence memo capstone.

## Source verification ledger

The following unique reading URLs were retrieved during authoring. Verification means actual relevant source content was returned, not merely a successful HTTP status. Each JSON reading gives bounded directions and an access or historical-context caveat where needed. Scenarios and proposed experiments are expressly hypothetical; they are not manufactured research results.

### Source 1: Summation of Synaptic Potentials — Neuroscience, Purves et al.

- URL: https://www.ncbi.nlm.nih.gov/books/NBK11104/
- Lessons: 21.
- Verification and scope: Web extraction returned the actual textbook title, spatial/temporal summation discussion, and Figure 7.7 context. Historical 2001 source; search-feature access caveat appears on Bookshelf.

### Source 2: Gain control of firing rate by shunting inhibition: Roles of synaptic noise and dendritic saturation

- URL: https://www.pnas.org/doi/10.1073/pnas.0337591100
- Lessons: 22.
- Verification and scope: Web extraction returned the abstract and substantive introduction, including reduced input resistance with little voltage change and conditional firing-rate effects. Primary computational mechanism study; no claims of universal divisive gain.

### Source 3: How the Retina Works — Webvision

- URL: https://www.ncbi.nlm.nih.gov/books/NBK610611/
- Lessons: 23, 24.
- Verification and scope: Web extraction returned the Webvision chapter and author/update metadata; search retrieval also exposed center–surround and parallel-pathway passages. The chapter reports an update of July 4, 2025. Used for retinal function, not general human mind-reading.

### Source 4: Lateral Inhibition in the Vertebrate Retina: The Case of the Missing Neurotransmitter

- URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC4675548/
- Lessons: 23, 28.
- Verification and scope: Web extraction returned the real title, authors, abstract, introduction, and open-access notice; retrieved page/search content also supplied block-it/move-it/show-it and pharmacological caveats. Historical 2015 review, not asserted as the final current answer about feedback signaling.

### Source 5: Long-Term Synaptic Potentiation — Neuroscience, Purves et al.

- URL: https://www.ncbi.nlm.nih.gov/books/NBK10878/
- Lessons: 25, 26, 30.
- Verification and scope: Web extraction returned the full substantive section, including specificity, associativity, preparation, and the explicit gap between LTP and behavioral plasticity. Historical 2001 textbook.

### Source 6: Molecular Mechanisms Underlying LTP — Neuroscience, Purves et al.

- URL: https://www.ncbi.nlm.nih.gov/books/NBK11101/
- Lessons: 25.
- Verification and scope: Web extraction returned the actual molecular-mechanism section explaining voltage-dependent magnesium block, calcium entry, and coincidence. Historical 2001 textbook; outdated statements about unresolved targets are not repeated as current consensus.

### Source 7: The hippocampal memory indexing theory — Teyler and DiScenna (1986)

- URL: https://pubmed.ncbi.nlm.nih.gov/3008780/
- Lessons: 26.
- Verification and scope: Search verified the PubMed record; extraction supplied the original theoretical article, including proposed index, hypothesized LTP role, and predictions. Clearly labeled historical theory. Normal reader access may be limited to abstract and full-text links.

### Source 8: Neurophysiological investigation of the basis of the fMRI signal — Logothetis et al. (2001)

- URL: https://pubmed.ncbi.nlm.nih.gov/11449264/
- Lessons: 27, 30.
- Verification and scope: Search verified the PubMed record; extraction supplied substantive primary-paper text on simultaneous electrophysiology/fMRI, signal comparisons, and the anesthetized-monkey preparation. Readings disclose that publisher full text may require access.

### Source 9: Can cognitive processes be inferred from neuroimaging data? — Poldrack (2006)

- URL: https://www.cell.com/trends/cognitive-sciences/abstract/S1364-6613(05)00336-0
- Lessons: 29, 30.
- Verification and scope: Publisher extraction returned the real title and public abstract supporting Bayesian/selectivity claims. Full text requires login/subscription/purchase; lesson uses only public abstract-level claims. PubMed alternative returned a CAPTCHA, so that route was not treated as verified content.

## Executed validation

PASS: JSON parse; one level; two units; five lessons and five questions in each unit; twelve cumulative questions; exact lesson IDs 21–30; unique assessment IDs and prompts; no quiz prompt copied from optional lesson retrieval; valid review references; distinct correct and distractor answers; all six depth fields; each lesson above 600 instructional words; readings present; four meaningful visual steps per lesson; no Russian-only fields. All eighty instructional fields are distinct exact strings, so no shared boilerplate paragraph was reused across lessons.

All cumulative questions combine at least two lesson references. Cross-unit cases include potentiation versus threshold, inhibition versus positive BOLD, decoding versus necessity, indexing versus physiological evidence, and training transfer versus claimed NMDA mechanisms.

Both complete units were saved incrementally in the final JSON. Final assessment completion and validation followed; no placeholder lessons were saved.

### Arithmetic and examples

No numerical physiological or statistical worked examples are used; all scenarios are explicitly qualitative. Therefore there are no invented numerical experimental results or uncomputed effect estimates. Word totals, lesson counts, assessment counts, source deduplication, and ID sequences were computed in code.

## Limitations and issues

- A PubMed reverse-inference fetch returned a CAPTCHA. The corresponding publisher public abstract was successfully retrieved and is the assigned URL; no full-text-access claim is made.
- A proposed Bookshelf inhibition URL returned incomplete metadata or a non-content HTTP 200 response. It was removed from assigned readings and replaced with the successfully extracted PNAS shunting/gain-control paper. A reader-mode retry failed; that failure is not counted as verification.
- The execution kernel did not preserve the first in-memory draft across calls. The unit was reauthored directly into the owned JSON, and subsequent completed units were saved in the same call that assembled them. The final on-disk artifact, not transient memory, supplied every final count.
- Sources intentionally include classic experiments and historical theory. Their publication-era limitations are disclosed; this is not a claim to exhaust contemporary molecular or systems-memory research.
- No browser, localhost, deployment, shared source, shared tests, dependencies, or GitHub operations were used. Parent retains application integration, rendering/accessibility, assessment-flow, and production verification. A content invariant pass is not an application test pass.
