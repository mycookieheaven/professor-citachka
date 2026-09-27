# Business Funding — level for lesson IDs 61–70 (staged authoring handoff)

## Deliverable and scope

- **Files written (only these two):**
  - `src/lib/course-packs/staged/business-funding-61-70.json` (149,478 bytes; the staged pack described below)
  - `research/expansion/business-funding-61-70.md` (this handoff)
- The `staged/` directory did not exist and was created for this deliverable. Nothing else in the repository was touched: no registry, no `programs.ts`, no tests, no `business-funding.json` (51–60), no shared components.
- **Not registered, not deployed, no server started, no browser automation used.** Parent owns integration and publication.
- Pack shape: one new level, **two units × five lessons = ten lessons (IDs 61–70)**, 5 unit questions per unit, 12 cumulative level questions. Subject `business-funding`. **No `russianItems` key anywhere** (subject-specific field omitted as instructed).
- Continuation: the existing 01–50 specialized course and the already-registered 51–60 pack are treated as prerequisites. This level goes deeper on operating decisions rather than repeating introductions: capital-stack layering, instrument matching, advance/remittance mechanics, reconciliation practice, guarantees/filings/jurisdiction, funding cost inside unit margin, renewal and refinancing lifecycle risk, seasonal cadence fit, honest objection handling, and a capstone recommendation with disclosure duties and decline conditions.

## Level and unit titles

- Level: **"Capital stacks, remittance mechanics and renewal risk under real operating decisions"**
- Unit 1: "Building and reading a capital stack for a concrete operating need" (lessons 61–65)
- Unit 2: "Pricing under funding cost, renewal pressure and honest selling" (lessons 66–70)

## Topic inventory and instructional word counts (computed in code)

Instructional count = Python/JS whitespace split of `explanation + example + depth.definitions + depth.mechanism + depth.secondExample + depth.mistake + depth.application + depth.summary`. Titles, retrieval prompts, quiz text, reading notes and visual steps are excluded, exactly as the parent's `scripts/validate-packs.ts` computes it.

| ID | Topic | Instructional words |
|---|---|---:|
| 61 | The capital stack: what each layer claims, costs and controls | 1,305 |
| 62 | Match the instrument to the use: duration, conversion and ownership | 1,229 |
| 63 | Advance and remittance mechanics: gross, net and the debit calendar | 1,219 |
| 64 | Reconciliation in practice: definitions, evidence and status | 1,162 |
| 65 | Guarantees, liens and jurisdiction: who can reach which assets | 1,270 |
| 66 | Funding cost inside unit margin: what the remittance does to contribution | 1,166 |
| 67 | Renewal and refinancing risk: what a new round costs after the first one | 1,247 |
| 68 | Seasonal receipts and cadence fit: fixed schedules versus share-of-receipts structures | 1,256 |
| 69 | Honest objection handling: price, speed, approval and consolidation | 1,309 |
| 70 | Capstone: a defensible recommendation, its disclosures and its decline conditions | 1,265 |

**Total instructional words: 12,428. Minimum lesson: 1,162 (floor is 600). Every lesson is well above the floor; none is padded with repeated mechanism text — each of the ten `depth.mechanism` fields states a different mechanism.**

## Structural verification actually exercised

- The staged JSON parses with `json.load` after every incremental save; the first unit (lessons 61–65 + its quiz) was written to the file before lessons 66–70 were authored, so interrupted progress would have survived.
- Asserted: exactly one level; exactly two units; five lessons per unit; ordered IDs 61–70 matching `/^\d{2,}$/`; five unit questions per unit; twelve level questions; all seven lesson text fields non-empty; all six depth keys non-empty; `answer !== distractor` for every lesson and every question.
- Asserted: 22 question IDs unique and **no collision** with the 51–60 pack's IDs (`uq-51-*`, `uq-56-*`, `lq-51-*`); no lesson-ID collision with the base course (51–60 ∪ 01–50); every `reviewLessonIds` entry resolves to a lesson inside this pack (all references deliberately kept inside 61–70 to avoid cross-pack assumptions).
- Asserted: all 22 assessment answers distinct, all 22 distractors distinct, all ten lesson answers distinct, all ten lesson distractors distinct.
- Asserted: HTTPS URLs with no embedded credentials on every reading, non-empty `title` and `note`; every visual has a title, description and ≥3 non-empty steps; no `russianItems` key present.
- **Replicated the parent validator's invariants in Python** (`src/lib/course-pack.ts` → `attachCoursePacks`, and the way `scripts/validate-packs.ts` calls it): all rules pass — multiple units, ≥5 lessons and ≥5 unit questions, ≥600 words per lesson, valid HTTPS readings with title and note, visual step sequences, unique question IDs, resolvable review lesson IDs, and a level test of ≥12 questions that is longer than the largest unit quiz (12 > 5). This is a faithful replication, **not** a run of the TypeScript script; the parent should still run `scripts/validate-packs.ts` after registration.
- A text scan for risky phrasing returned nothing in the risky classes: no guaranteed approval, no promise of approval/funding, no "always approved", no manufactured urgency ("act now" / "sign today or"), no instruction to hide an obligation or filing. The two hits for "reconciliation means…/you can always afford" are inside lesson 64's `depth.mistake`, where that exact sentence is quoted as the script to refuse.

## Source verification results

Every URL in the pack was fetched over HTTP (curl, following redirects, browser user-agent) and/or read with the extraction tool this session. **All 19 unique source URLs returned HTTP 200** (re-checked against the final file contents). Reading counts per lesson: 4, 3, 3, 3, 6, 3, 3, 3, 3, 3 for lessons 61–70. No quote or statistic appears in the pack that was not read directly from the source page/PDF.

| Source | Used in | Verification |
|---|---|---|
| SBA — 7(a) loans (`sba.gov/funding-programs/loans/7a-loans`) | 61, 66 | Page fetched and read: $5M maximum, use of proceeds, creditworthy + reasonable ability to repay, guarantee/lender framework |
| SBA — 504 loans | 61, 62 | Fetched and read: long-term fixed-rate financing of major fixed assets, delivered through CDCs, $5.5M maximum |
| SBA — Microloans | 61 | Fetched and read: up to $50,000 through designated intermediary lenders |
| SBA — 7(a) Terms, conditions and eligibility | 61 | Fetched and read: guarantee percentages, maturity rules, upfront and annual service fees, prepayment-penalty conditions |
| OCC Comptroller's Handbook — Asset-Based Lending (PDF) | 62, 66, 68, 70 | PDF fetched and read: table of contents, Overview ("conversion of collateral to cash over the company's business cycle"), Borrower Analysis, Establishing the Borrowing Base, Term Loans, Controls, glossary. Supervisory guidance — used for reasoning, never as market terms |
| OCC Comptroller's Handbook — Lease Financing v2.0 (PDF) | 62, 67 | PDF downloaded and read via file extraction: contents list confirming "Leases Equivalent to Loans", "Equipment Finance Agreement", "Sale-Leaseback", "Renewals, Extensions, and Off-Lease Property", "Valuation and Residual Analysis" |
| NY DFS — 23 NYCRR Part 600 text | 63, 64 | Fetched (resolves to a PDF). Cited only for the existence of a jurisdiction-specific disclosure regime; no term is asserted as universal |
| DFPI (California) — Commercial Financing Disclosures | 63, 66, 68 | Page read: SB 1235 disclosure list (total funds provided, total dollar cost, term or estimated term, method/frequency/amount of payments, prepayment policies) and the note that the annualized-rate item applied **until January 1, 2024** |
| Code of Virginia — Ch. 22.1 Sales-Based Financing Providers | 63, 64, 65, 68 | Page read: § 6.2-2228 definitions (percentage-of-revenue repayment and fixed payment with true-up; broker ≠ recipient), § 6.2-2229 exemptions (financial institutions; ≤5 transactions in 12 months; single transaction over $500,000) |
| Utah DFI — Commercial Financing Registration and Disclosure Act | 65 | Page read: § 7-27-201 registration requirement (Utah or Utah resident), § 7-27-202 disclosures, effective January 1, 2023 |
| FTC — "Strictly Business" Forum Staff Perspective (Feb 2020) | 64, 67, 69 | Landing page fetched and the linked staff paper PDF downloaded and read: factor commonly described in the 20%–50% range; TILA's APR requirement generally does not apply to small business financing; concerns about providers failing promised true-ups; stacking; confessions of judgment; brokers/lead generators must avoid false or unsubstantiated claims |
| FTC — RAM Capital Funding settlement (Jan 5, 2022) | 65, 69 | Page read: alleged personal guarantees and upfront fees after representations they would not be required, less funding than promised, debits larger than stated; lien and judgment relief |
| CFPB — Reg B § 1002.9 Notifications | 69, 70 | Regulation text read: § 1002.9(a)(3) business-credit notification rules, including the ≤$1M gross-revenue treatment, and the >$1M / trade-credit / factoring-type rule (notify within a reasonable time; written statement of reasons on written request within 60 days) |
| CFPB — Small business lending rulemaking (section 1071) | 70 | Page read: May 1, 2026 reconsideration rule amending Reg B subpart B, compliance date **extended to January 1, 2028** |
| Federal Reserve Small Business Credit Survey — 2026 Report on Employer Firms | 65 | Page read: section "Debt and credit demand" states that of firms with debt, **59% used a personal guarantee**; also used for section-level reading directions ("Financing applications and outcomes") |
| UCC § 9-310 (Cornell LII) | 65 | Section text read: general rule in subsection (a) that a financing statement must be filed to perfect, with exceptions listed in (b); cited in lesson 65 and added as one of its readings so the claim has a section-specific reference |
| UCC § 9-324 (Cornell LII) | 65 | Section text read: purchase-money priority where perfected when the debtor receives possession or within 20 days thereafter; separate inventory conditions in (b) |
| UCC § 9-515 (Cornell LII) | 65 | Section text read: five-year effectiveness, lapse, continuation only within six months before expiration |
| NY AG — Yellowstone Capital settlement | 67 | Current URL verified (`ag.ny.gov/resources/individuals/credit-debt-lending/yellowstone-settlement`; the older `ag.ny.gov/credit-lending/yellowstone-settlement` path redirects there). Page read: cancelled merchant debts, vacated judgments, lien terminations on request, April 2026 update, and the office's statement that it cannot give legal advice |

Two research dead ends are recorded honestly: `dfpi.ca.gov/regulated-industries/commercial-financing/` and the older CFPB 1071 final-rule URL both return 404 and were replaced with the verified pages above. The FTC staff paper and the NY DFS regulation are PDFs behind landing/redirect URLs; reading directions say so.

## Arithmetic checks (all computed with a tool, results recorded)

All computations were run in Python with `Decimal` rounding to 2 decimals; the lesson text was then checked to contain each result string (118 numeric assertions, 0 missing). No annualized rate is computed anywhere in the pack.

| Lesson | Computation | Result used |
|---|---|---|
| 61 | Amortising payment, $40,000 at 9% nominal over 84 months | $643.56/month; $54,059.30 total; $14,059.30 interest |
| 61 | Amortising payment, $30,000 at 8% over 60 months | $608.29/month; $36,497.51 total; $6,497.51 interest |
| 61 | $20,000 × 1.35 factor; 24 weekly collections; dollar cost | $27,000 total; $1,125/week; $7,000 |
| 61 | Month-1 debt service and the advance layer's share | $6,126.85; $4,875; 79.57% |
| 61 | Total modeled financing cost and share of $120,000 uses | $27,556.81; 22.96% |
| 61 | Contrast: $85,000 at 8.5%/60 months vs $85,000 × 1.18 over 26 weeks | $1,743.91/mo, $104,634.31, $19,634.31 interest vs $100,300, $3,857.69/week |
| 62 | $60,000 van: 60 months at 8% vs 26 weeks at 1.15 factor | $1,216.58/mo, $72,995.02, $12,995.02 vs $69,000, $2,653.85/wk, $9,000 |
| 62 | $45,000 inventory: 22 weeks at 1.12 vs 48 months at 9% (43 remaining payments) | $50,400, $2,290.91/wk, $5,400 vs $1,119.83/mo, $8,751.69 interest, $48,152.56 carried |
| 62 | $90,000 receivable: 80% advance at 2% per 30 days for 45 days vs 12% drawn line for 45 days | Advance $72,000; fee $2,700; later receipt $15,300 vs $1,065.21 |
| 62 | Contrast: $22,000 press at 8.5%/60 months vs $470×60 + $3,000 option | $451.36/mo, $27,081.82 total vs $31,200 |
| 63 | Gross/net/total/remittance: $50,000, deductions $1,500+$500, 1.32 factor, 24 weeks | Net $48,000; total $66,000; $18,000 difference; $2,750/wk; $750/wk |
| 63 | Cadence variants: 12% of $22,000 card sales; 120 business-day debits | $2,640/wk → 25.0 weeks; $550/debit |
| 63/69 | Ratio checks: $18,000/$50,000 and $2,750/$6,000 | 36% (explicitly labelled a category error, not a rate); 45.83% |
| 64 | $31,000 + $14,000 − $2,500 = base; 9% share vs $4,250 estimate; 8 weeks | $42,500; $3,825; $425/wk; $3,400 |
| 64 | Same events without deducting refunds | $45,000; $4,050; $200/wk; $1,600 |
| 65 | Claims vs appraised collateral in two states | $105,000 vs $95,000 = $10,000 gap; later $75,000 vs $95,000 = $20,000 margin |
| 66 | $42 − $26 contribution; $2,750 ÷ $16 (rounded up); 171-unit shortfall check | $16; 171.875 → 172 units; 171 × $16 = $2,736 ($14 short) |
| 66 | $39 price: $13 contribution | 211.538 → 212 units; 211 × $13 = $2,743 |
| 66 | Coverage at 350 units; per-unit load; fixed cost $3,200 | $5,600 contribution; 49.11%; $7.86/unit; (2,750+3,200)/16 = 371.875 → 372 units; $5,952 vs $5,950; 128 units = 25.6% of 500 capacity |
| 67 | Week-14 position; renewal arithmetic; lifecycle comparison | Paid $38,500; remaining $27,500; net $38,500; total $52,000 at $2,600/wk; $11,000 spendable; lifecycle $90,500 vs $66,000 = +$24,500 (2.23×) |
| 67 | Stacking variant | $5,350/wk; $38,500 ÷ $5,350 = 7.2 weeks |
| 68 | Weekly receipts from monthly figures; remittance share | $19,615.38 and $8,076.92/wk; 14.02% and 34.05% |
| 68 | Eight winter weeks vs net proceeds; share structure to completion | $22,000 = 45.83% of $48,000; 8% → $1,569.23/wk, $25,107.69 over 16 weeks, $40,892.31 remaining, $646.15/wk → ≈63.3 more weeks |
| 69 | $50,000 × 1.30, $2,000 deductions, 26 weeks; descriptive dollars; refused shortcuts | Total $65,000; net $48,000; cost $15,000; $576.92/wk; $31.25 per $100 net; naive doublings 60% and 62.5% shown only to be refused |
| 70 | $45,000 at 9% over 60 months; $30,000 × 1.28 less $900 over 24 weeks | $934.13/mo, $56,047.56, $11,047.56 interest; net $29,100; total $38,400; $1,600/wk |
| 70 | Combined monthly obligations; coverage; runway; scenario check | $7,867.46; $3,200 = 40.67%, shortfall $4,667.46; $1,815.57/wk → 16.03 weeks; $6,500/$7,867.46 = 0.83 |

## Funding-accuracy compliance

- Factor is never described as an interest rate or APR; lesson 69 explicitly shows and refuses two invalid annualization shortcuts, and lesson 61/63/67 state that a compliant annualized figure needs the amounts and timing of value received and payments made under an applicable method.
- Gross advance and net proceeds are separated in every numerical example (61, 63, 65, 67, 70) and lesson 63 itemises the deductions that reconcile them.
- Fees appear as named deductions and as program fees (SBA upfront/annual service fee distinction); remittance cadence is stated in dates and units; reconciliation is treated as a process with a definition, evidence, status and implementation step; guarantees, UCC filings (perfection, purchase-money priority, five-year lapse and continuation window), stacking and jurisdictional variation are addressed directly and with the correct caveats (Virginia thresholds, Utah registration, California's sunset annualized item, NY's separate regime).
- No approval, funding, rate, relief or outcome is promised anywhere; every commercial figure is labelled fictional or assumed; the decline path and "no deal" outcome are presented as legitimate conclusions; nothing suggests deception, coercion, hiding obligations or manufactured urgency, and lesson 65/69 explicitly refuse concealment.

## Unresolved limitations (for the parent)

1. **Structural replication, not the parent's runner.** The `attachCoursePacks` invariants were reimplemented and pass, but `scripts/validate-packs.ts` was not executed (it validates registered packs from the program catalog, and no registry entry was created per the write restriction). Parent must run it after registration.
2. **Legal and compliance questions are flagged, not resolved.** Legal characterization (loan vs purchase), guarantee enforceability, filing priority in a specific state, and the applicability of NY/CA/UT/VA regimes to a specific transaction all require qualified review; the lessons say so, but a reviewer may want the caveats strengthened further.
3. **Jurisdiction currency.** Rule status changes: California's annualized-rate disclosure item ended January 1, 2024 per the DFPI page; Regulation B subpart B was amended by a May 1, 2026 reconsideration rule with a compliance date of January 1, 2028. Both are stated as the sources state them, without asserting nationwide applicability.
4. **Marketplace statistics are second-hand and dated where they are.** The 59% personal-guarantee figure is from the Federal Reserve's 2026 Report on Employer Firms (2025 survey); the 20%–50% factor range is from the FTC's February 2020 staff perspective on a marketplace sample. Neither is presented as a current market rate.
5. **No real client data, no practitioner input.** All merchants, amounts, terms and dialogues are fictional; no practising underwriter, broker or lawyer reviewed the content, and passing the recognition assessments is explicitly not professional certification.
6. **Not delivered in this batch:** application/renderer tests, registration, audit-script updates, production build, deployment, HTTP readback, and any visual/audio verification (all parent-owned). No claim is made that any of these packs are live.
