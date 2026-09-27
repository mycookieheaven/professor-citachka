# Finance continuation — authored pack handoff

## Scope and isolation

Created `src/lib/course-packs/finance.json` and `research/expansion/finance.md` only. One new level, two units, ten lessons (stable IDs 21–30), ten unit questions (five each), and twelve fresh cumulative level questions. All cumulative questions reference multiple lessons. No existing curriculum, progress IDs, shared components, tests, dependencies, browser sessions, servers, deployment, or GitHub state were modified. Units were saved incrementally before the level assessment was added.

This is a bounded two-unit expansion toward the larger course target, not fulfillment of 100 units or proof of professional competence. Parent owns integration, application tests, and Vercel verification.

## Continuation and topics

Read CONTRACT.md, current finance rows in practical.ts, teaching-and-tutoring and learner-context, and grounded-citations. The existing sequence ends with investment-policy literacy. This level develops quantitative valuation, operating funding requirements, and uncertainty analysis rather than repeating budgeting or asset-class introductions.

### From Dated Cash Flows to Defensible Project Value

- 21: Discount dated cash flows before comparing choices — 723 instructional words.
- 22: Net present value and the cost of an alternative — 713 instructional words.
- 23: Keep nominal, real, and required returns consistent — 699 instructional words.
- 24: When internal rate of return misranks projects — 712 instructional words.
- 25: Working capital: why profitable growth consumes cash — 717 instructional words.
### Risk, Financing, and Auditable Decisions

- 26: Scenario distributions, break-even values, and uncertainty — 720 instructional words.
- 27: Quantify diversification with covariance and stress — 717 instructional words.
- 28: Compounded growth and the order of withdrawals — 708 instructional words.
- 29: Leverage, debt service, and refinancing dependence — 714 instructional words.
- 30: Build an auditable decision memo and a review rule — 747 instructional words.

**Total instructional words: 7,170.** Count method: whitespace-delimited words in explanation, example, and the six depth fields only; excludes headings, readings, visuals, and assessments. Minimum lesson count: 699. All lessons include contrasting examples, nonblocking application tasks with model responses/self-review criteria, topic-specific feedback, readings, and labeled visual steps. Visuals are instructional sequences, not videos; no video identity or playback claim is made.

## Executed invariant checks

Python JSON parse passed. Verified exact subject and IDs, one level/two units/five lessons per unit, six depth keys, minimum 600 instructional words per lesson, required readings and at least three visual steps, no Russian fields, distinct answers/distractors, ten unit plus twelve cumulative questions, unique assessment IDs and prompts, no unit/level prompt copied from a lesson retrieval prompt, valid reviewLessonIds, and multiple reviewed lessons for every cumulative question. These are data-contract checks, not application integration or accessibility behavior tests.

## Source verification and provenance

Every lesson has a verified reading with section-specific directions. OpenStax Principles of Finance (Julie Dahlquist and Rainford Knight) provides university-textbook support; Federal Reserve education provides institutional support for the nominal/real distinction. Lesson prose, scenarios, diagrams, and assessments are original; textbook scenarios and figures are not reproduced. The exact discrete-rate identity is derived algebraically in lesson 23 and checked against identical nominal/real NPVs. No current market returns, tax thresholds, or personal eligibility claims are asserted.

Web extraction retrieved all listed reading URLs without an error. Some OpenStax responses included cookie text or partial excerpts; targeted larger extractions recovered relevant sections. Source concepts actually inspected include NPV and NPV profiles, IRR scale/multiple-root limitations, working-capital definitions, covariance/diversification, leverage/capital structure, and cash-flow risk. The inflation PDF was extracted in full. Direct HTTP read checks follow; these verify reachability, not future availability. Source numbering below is generated from the deduplicated pack URL set, not inferred from memory.

- [1] https://openstax.org/books/principles-finance/pages/15-1-risk-and-return-to-an-individual-asset — HTTP `200`, 349,621 bytes; lessons 28.
- [2] https://openstax.org/books/principles-finance/pages/15-2-risk-and-return-to-multiple-assets — HTTP `200`, 298,898 bytes; lessons 27.
- [3] https://openstax.org/books/principles-finance/pages/16-2-net-present-value-npv-method — HTTP `200`, 312,545 bytes; lessons 22, 23.
- [4] https://openstax.org/books/principles-finance/pages/16-3-internal-rate-of-return-irr-method — HTTP `200`, 298,044 bytes; lessons 24.
- [5] https://openstax.org/books/principles-finance/pages/17-1-the-concept-of-capital-structure — HTTP `200`, 294,977 bytes; lessons 29.
- [6] https://openstax.org/books/principles-finance/pages/19-1-what-is-working-capital — HTTP `200`, 344,805 bytes; lessons 25.
- [7] https://openstax.org/books/principles-finance/pages/20-1-the-importance-of-risk-management — HTTP `200`, 291,694 bytes; lessons 26, 30.
- [8] https://openstax.org/books/principles-finance/pages/9-1-timing-of-cash-flows — HTTP `200`, 352,418 bytes; lessons 21.
- [9] https://www.federalreserveeducation.org/resources/readings/reading--jargon-alert-real-interest-rate.pdf — HTTP `200`, 134,455 bytes; lessons 23.

## Tool-calculated numerical checks

All results below were calculated with Python rather than mental arithmetic. Displayed money is rounded to cents, rates to the stated precision, while equivalent nominal/real calculations retain the unrounded rate. Each lesson declares cash-flow timing and relevant tax/fee assumptions. No return is guaranteed; probabilities are hypothetical; portfolio volatilities are assumed inputs rather than empirical forecasts. Borrowing examples distinguish repayment factor, gross principal, net proceeds, and one-year effective cost from jurisdiction-dependent APR disclosure.

| Check | Python result |
|---|---:|
| 21: single receipt PV | 10075.4313963876 |
| 21: three-receipt PV | 10308.3879489915 |
| 22: nominal surplus | 2000.0000000000 |
| 22/30: base NPV | 308.3879489915 |
| 22/30: delayed NPV | -455.1963435264 |
| 23: real rate percent | 4.8543689320 |
| 23: real-model NPV | 308.3879489915 |
| 23: NPV at 12% | -392.6749271137 |
| 24: IRR A percent | 40.0000000000 |
| 24: IRR B percent | 30.0000000000 |
| 24: NPV A | 272.7272727273 |
| 24: NPV B | 1818.1818181818 |
| 25: operating working capital | 21000.0000000000 |
| 25: cash-cycle days | 55.0000000000 |
| 26: probability sum | 1.0000000000 |
| 26: expected return percent | 3.5000000000 |
| 26: equal annual receipt break-even | 3880.3351404633 |
| 26/30: downside NPV | -2268.7090382564 |
| 27: volatility at correlation zero percent | 11.1803398875 |
| 27: volatility at correlation one percent | 15.0000000000 |
| 28: ending balance without flows | 96.0000000000 |
| 28: arithmetic mean percent | 0.0000000000 |
| 28: cumulative return percent | -4.0000000000 |
| 28: geometric annual return percent | -2.0204102887 |
| 28: loss-first ending balance | 77500.0000000000 |
| 28: gain-first ending balance | 82000.0000000000 |
| 28: no-withdrawal comparison | 100000.0000000000 |
| 29: total debt service | 63000.0000000000 |
| 29: up equity balance | 52000.0000000000 |
| 29: down equity balance | 22000.0000000000 |
| 29: up equity return percent | 30.0000000000 |
| 29: down equity return percent | -45.0000000000 |
| 29: asset up percent | 15.0000000000 |
| 29: asset down percent | -15.0000000000 |
| 29: net loan proceeds | 48500.0000000000 |
| 29: repayment factor | 1.1000000000 |
| 29: one-year effective cost percent | 13.4020618557 |
| 29: base interest coverage | 6.0000000000 |
| 29: stressed interest coverage | 1.5000000000 |

## Limitations and issues

- No browser, localhost, server, deployment, or GitHub work was performed. Parent must validate rendered math, visual sequences, reading links, narration, assessment integration, progress preservation, and production behavior.
- A source search transiently returned an Exa backend error; a broader search succeeded. An initial execute_code attempt assumed session variables persisted but the kernel reset; no source files were damaged, and subsequent steps used explicit data or read the saved JSON.
- Finance rules vary by jurisdiction. Lessons use educational, tax-free simplifications where declared and do not give individualized investing, tax, lending, or legal advice. No specific products or promised returns are recommended.
- The binary assessments test bounded conceptual distinctions, not professional competence. The capstone memo rubric adds open-ended application but is not an accreditation claim.
- No videos are supplied: the contract authorizes labeled visual reasoning steps, and no playback verification was attempted.
