# Business Funding & Sales — authored expansion handoff

## Deliverable and scope

- Repository: `/Users/<user>/professor-citachka`.
- Authored artifact: `src/lib/course-packs/business-funding.json`.
- Handoff: `research/expansion/business-funding.md` (this file).
- One new level, **two units, ten lessons (51–60)**, five questions per unit and twelve separately authored cumulative questions. This is a bounded expansion, not the requested long-term 100-unit curriculum and not professional certification.
- Ten topic-specific step diagrams, not videos. Ten nonblocking application tasks with explicit models/self-review criteria. No Russian-only fields.
- The first unit was saved to the final JSON before authoring the second; cumulative assessment was then added. No shared code, original funding data, tests, hosting or deployment was modified.

## Prerequisite audit and continuation

Read CONTRACT.md; teaching-and-tutoring and its learner-context reference; grounded-citations; funding.ts; all five original data files: funding-foundations.ts, funding-products.ts, funding-numbers.ts, funding-execution.ts and funding-advanced.ts. Programmatic source count confirmed ten lessons in each original file, fifty total, ending at ID50.

The old course already covers openings, consent, product taxonomy, factor versus APR, basic payment math, cash troughs, reconciliation, stacking, renewals, reverse-consolidation diligence, legal boundaries and an initial recommendation capstone. This pack does not repeat introductory openings. It extends those prerequisites into an order-level contribution model, borrowing-base contraction, forecast-error diagnosis, normalized competing offers, reconciliation implementation lag, a numerical layered-funding lifecycle, constraint negotiation, incentive-aware multi-party review, auditable discrepancy resolution and a conditional decision defense.

## Topic and instructional-word inventory

Instructional count uses Python whitespace splitting across explanation + example + the six depth fields only. It excludes titles, retrieval questions, quiz text, reading notes and visual steps.

| ID | Topic | Instructional words |
|---|---|---:|
| 51 | Separate project contribution from the cash needed to survive it | 803 |
| 52 | Borrowing-base contraction: when a line shrinks as you need it | 764 |
| 53 | Forecast variance: explain what changed before recommending more money | 762 |
| 54 | Offer normalization without inventing an APR or a winner | 743 |
| 55 | Reconciliation lag: a contractual adjustment is not today's liquidity | 761 |
| 56 | Reverse-consolidation lifecycle: separate relief, cost and the payment tail | 767 |
| 57 | Negotiate the constraint, not the merchant's resistance | 771 |
| 58 | Run a multi-party decision meeting with visible incentives and bounded consent | 781 |
| 59 | Funding discrepancy response: preserve evidence and close the loop | 753 |
| 60 | Decision defense: recommend conditionally and name what would reverse you | 796 |

**Total: 7,701 instructional words. Every lesson exceeds the 600-word floor.**

## Verification actually exercised

- JSON parsed successfully; write-tool JSON syntax checks passed on incremental saves.
- Asserted subject identity, exactly one level/two units, five lessons and five unit questions per unit, and twelve cumulative questions.
- Asserted ordered stable IDs51–60, distinct question IDs, distinct answers/distractors, nonempty required fields, all six depth keys, ten reading sections and visuals with at least three steps.
- Asserted all reviewLessonIds resolve inside the new pack, no copied lesson question is used as a quiz prompt, and all twenty-two assessment prompts are distinct.
- Asserted every inline numbered source reference in each lesson resolves to that lesson's reading entries. Six unique authoritative URLs are used.
- Citation ledger contains verified extracted evidence for all six sources. The generic ledger verifier expects a prose Sources block, which the JSON contract does not contain. Its raw-JSON run therefore correctly rejected the missing prose block. A cache-only adapter containing the unchanged JSON plus the ledger-rendered Sources block passed `verify --evidence`; the schema-bound JSON was not polluted with extra prose fields. This handoff has its own ledger-rendered Sources block.
- Application rendering, progress migration, narration, accessibility and production route checks remain with the parent integrator. No application-test or live-site success is claimed here.

## Source verification and evidence limits

1. **OCC Asset-Based Lending handbook:** official PDF fetched directly with HTTP200, eighty pages; text extracted with PyMuPDF. Read borrower analysis, liquidity, concentrations, dilution, borrowing-base controls and glossary. The version includes the notice about removal of reputation-risk references in 2025. Its scope is bank supervision, not an endorsement of any merchant product or a universal eligibility rule.[1]
2. **NY DFS Part 600:** official regulation URL successfully extracted through web tools with introduction, definitions, finance-charge/APR provisions and sales-based true-up disclosures. A direct urllib request to the PDF returned HTTP403; the web-extraction route recovered substantive regulation text, including section600.3 and section600.6. The official URL redirects/resolves to a PDF. This is the retrieved final-adoption text, not a claim that this research independently verified every subsequent amendment or every jurisdiction's current law.[2]
3. **FTC RCG enforcement:** substantive official page retrieved successfully. Its alleged undisclosed funding deductions, guarantee misrepresentations and overcollection support the truthful-sales and discrepancy-control lessons. These are case-specific enforcement facts, not a finding about the fictional merchants.[3]
4. **FTC personal-information guide:** substantive official page retrieved successfully. Take Stock, Scale Down, Lock It and retention/disposal principles support controlled access and minimum-necessary data handling. The guide is not treated as complete transaction-specific authorization advice.[4]
5. **NY Attorney General Yellowstone settlement:** substantive official page retrieved successfully. Used only to show why contract labels and conduct require examination, never to promise universal cancellation or apply that settlement to another provider.[5]
6. **SBA 7(a) page:** substantive official page retrieved successfully, including repayment ability, cash-flow repayment and lender-led application review. Used within its program scope; not as a guarantee that a merchant or product qualifies.[6]

No source is presented as defining or endorsing a standardized reverse-consolidation product. Lesson56 explicitly constructs a hypothetical layered structure and uses authoritative liquidity reasoning, not an industry marketing article, for the analysis. All merchants, amounts and dialogue are original fictional examples. Legal classification, creditworthiness, enforceability, tax treatment, actual fees and real-world suitability remain professional-review questions.

### Reproducible research artifacts (profile cache, not application dependencies)

`/Users/<user>/.hermes/profiles/citachka-ai/cache/funding-expansion/` contains the isolated citation ledger, extracted source text, calculation output, structural validation output and citation-check adapter. Numbered IDs in this pack are local to this research ledger and displayed in each lesson's readings; they are not the original specialized funding renderer's source-number scheme. Parent integration must preserve the new pack's own reading mapping rather than substitute the old funding ledger.

## Arithmetic checks and cash-flow boundaries

All following expressions were executed and asserted against expected values in Python. Decimal literals were used for factors and percentage multiplication. The isolated examples assume no unstated fees or obligations; actual documents may differ.

| Lesson | Executed expression | Verified result |
|---|---|---:|
| 51 | `72000 - 45000 - 9000` | 18,000 |
| 51 | `45000 + 9000` | 54,000 |
| 51 | `18000 - 6000` | 12,000 |
| 51 | `54000 - 14000` | 40,000 |
| 51 | `60000 - 45000 - 9000 - 6000` | 0 |
| 52 | `100000 - 20000 - 15000 - 5000` | 60,000 |
| 52 | `60000 * Decimal("0.80")` | 48,000.00 |
| 52 | `min(80000,48000) - 35000 - 3000` | 10,000 |
| 52 | `80000 - 35000` | 45,000 |
| 52 | `60000 - 10000` | 50,000 |
| 52 | `50000 * Decimal("0.80")` | 40,000.00 |
| 52 | `40000 - 35000 - 3000` | 2,000 |
| 53 | `8000 + 22000 - 17000 - 4000` | 9,000 |
| 53 | `8000 + 18000 - 19000 - 4000` | 3,000 |
| 53 | `3000 - 9000` | -6,000 |
| 53 | `18000 - 22000` | -4,000 |
| 53 | `19000 - 17000` | 2,000 |
| 53 | `3000 - 7000` | -4,000 |
| 53 | `3000 - 7000 + 12000` | 8,000 |
| 54 | `40000 - 2000` | 38,000 |
| 54 | `40000 * Decimal("1.25")` | 50,000.00 |
| 54 | `50000 / 20` | 2,500.0 |
| 54 | `50000 - 38000` | 12,000 |
| 54 | `40000 - 1000` | 39,000 |
| 54 | `2100 * 24` | 50,400 |
| 54 | `50400 - 39000` | 11,400 |
| 54 | `2500 - 2100` | 400 |
| 54 | `Decimal("1.25") - 1` | 0.25 |
| 55 | `14000 - 2000` | 12,000 |
| 55 | `12000 * Decimal("0.10")` | 1,200.00 |
| 55 | `1800 - 1200` | 600 |
| 55 | `2 * 600` | 1,200 |
| 56 | `6000 * 4` | 24,000 |
| 56 | `5000 * 4` | 20,000 |
| 56 | `2500 * 10` | 25,000 |
| 56 | `24000 + 25000` | 49,000 |
| 56 | `49000 - 20000` | 29,000 |
| 56 | `29000 - 24000` | 5,000 |
| 56 | `6000 + 2500 - 5000` | 3,500 |
| 56 | `10 - 4` | 6 |
| 56 | `2500 * 6` | 15,000 |
| 56 | `6000 + 2500` | 8,500 |
| 56 | `3500 * 4 + 15000` | 29,000 |
| 57 | `30000 - 8000` | 22,000 |
| 57 | `22000 + 1000` | 23,000 |
| 57 | `23000 * Decimal("1.20")` | 27,600.00 |
| 57 | `27600 - 22000` | 5,600 |
| 58 | `30000 * Decimal("0.04")` | 1,200.00 |
| 58 | `30000 * Decimal("0.02")` | 600.00 |
| 59 | `40000 - 2000` | 38,000 |
| 59 | `38000 - 36500` | 1,500 |
| 59 | `3500 - 2000` | 1,500 |
| 59 | `40000 - 3500` | 36,500 |
| 60 | `28000 - 18000 - 4000` | 6,000 |
| 60 | `6000 - 3500` | 2,500 |
| 60 | `9000 + 28000 - 23000 - 5000` | 9,000 |
| 60 | `28000 - 10000` | 18,000 |
| 60 | `9000 + 18000 - 23000 - 5000` | -1,000 |

**58 arithmetic assertions passed.**

### Timing and interpretation audit

- **51:** materials and incremental labor leave before collection. Contribution after a stated financing cost is not present liquidity, accounting net profit or APR; operating reserves require separate verification.
- **52:** exclusions are explicitly disjoint; the hypothetical reserve is deducted once after the lower-of limit/base test. An availability reserve is not modeled as a paid fee. Delayed collections can weaken the backup line simultaneously.
- **53:** actual closing cash becomes next opening cash. Monday outflow precedes Friday collection. Financing deposits never become sales, and a credit loss is distinguished from a delayed collection.
- **54:** week-zero funding, first payment at week-one end, full twenty- and twenty-four-week schedules. Net proceeds differ. Remittance-minus-net is labeled a descriptive dollar measure, not automatic legal finance charge or APR. No fabricated annualized quote is produced.
- **55:** refund definition and share are fictional contract assumptions. A calculated adjustment, accepted request, actual refund and future debit credit are different statuses; cash planning never counts both mechanisms for the same adjustment.
- **56:** deposits occur at week starts and debits at week ends; old positions survive through weekfour. All ten weeks are included. One missing-deposit week's scheduled outflow is stressed, while obligations after permanent termination are explicitly left to actual contract review. The entire lifecycle and the new provider's stream are not mislabeled as the same cost.
- **57:** earlier customer deposit reduces the later customer balance; revised provider terms are not guaranteed. The deposit must clear before the supplier payment to change the isolated gap.
- **58:** commissions are hypothetically provider-paid and already reflected in offer economics, not additional merchant deductions. Incentive disclosure does not itself cure bias or authorize additional data sharing.
- **59:** the comparison starts from final written net, not gross. Matching fee and deposit differences are evidence to investigate, not proof of authorization. A funds-flow reconciliation is not payoff or account-closure verification.
- **60:** project economics and whole-business weekly figures are separate views of overlapping flows, not additive budgets. The receipt-delay scenario moves cash beyond the week; intraperiod sequencing remains a required check even in the positive base case.

## Remaining integration and limitations

The parent must integrate these generic lessons alongside the original specialized renderer while preserving IDs01–50 and stored progress. No shared catalog, route, renderer, prior content, tests or deployment was changed. The binary review questions are learning aids, not a professional-competence assessment. No video links, market-pricing claims, approval promises, legal advice or real client information were introduced. Current transaction-specific compliance must still be checked by qualified personnel; the retrieved sources are an educational baseline.

## Sources

[1] https://www.occ.treas.gov/publications-and-resources/publications/comptrollers-handbook/files/asset-based-lending/pub-ch-asset-based-lending.pdf — OCC Asset-Based Lending handbook
[2] https://www.dfs.ny.gov/industry_guidance/regulations/final_financial_services/rf_finservices_23nycrr600_text — NY DFS Part 600
[3] https://www.ftc.gov/news-events/news/press-releases/2022/06/ftc-action-results-ban-richmond-capital-owner-merchant-cash-advance-debt-collection-industries — FTC RCG enforcement
[4] https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business — FTC Protecting Personal Information
[5] https://ag.ny.gov/credit-lending/yellowstone-settlement — NY AG Yellowstone settlement
[6] https://www.sba.gov/funding-programs/loans/7a-loans — SBA 7(a) loans
