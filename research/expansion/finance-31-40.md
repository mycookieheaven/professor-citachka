# Finance continuation level — lessons 31–40 (handoff)

## Scope, isolation, and outputs

Authored one new finance level with **two units of five lessons each (IDs 31–40)**, ten unit questions (five per unit), and **twelve separately authored cumulative level questions**, following `research/expansion/CONTRACT.md`.

Files written — exactly two, both inside the permitted paths:

| Path | Bytes | Content |
|---|---:|---|
| `src/lib/course-packs/staged/finance-31-40.json` | 119,878 | The staged pack: `{"subject":"finance","levels":[ one level, 2 units, 10 lessons, 5+5 unit questions, 12 level questions ]}`. Valid JSON, parsed and re-parsed. |
| `research/expansion/finance-31-40.md` | this file | Handoff note. |

Nothing else was modified. `git status` shows the pack and this note, plus other workers' files in `src/lib/course-packs/staged/` (business-funding, literature, music, neuroscience, philosophy, psychiatry, russian, veterinary-science) which I did not touch. `artifacts/pedagogy/inventory.json` and `public/curriculum-audit.json` also show as modified with a timestamp (17:56:55) **earlier than my first write (18:01)**, so they are not mine. No registry, `programs.ts`, `assessments.ts`, component, test, dependency, or existing pack was edited. No deployment, no server, no browser automation, no GitHub operation, no Russian content (`russianItems` is absent from every lesson, as required for finance).

This is a bounded two-unit continuation toward the larger course target. It is **not** completion of a 100-unit course, not proof of professional competence, and not authorization to give individualized financial advice. Parent owns integration, application tests, and production verification.

## Topics and computed word counts

Level title: **Compounding, Risk, and Reading Financial Evidence**

Unit 1 — **Compounding, Purchasing Power, and the Price of Risk**

- 31: Compound growth: frequency, contributions, and the Rule of 72 — 1,030 words
- 32: Discounting: the rate is an assumption, not a fact — 1,001 words
- 33: Inflation and purchasing power: nominal versus real figures — 1,017 words
- 34: Risk and return: dispersion, not a promise — 998 words
- 35: Diversification and correlation: what combining can and cannot remove — 976 words

Unit 2 — **Fees, Taxes, Statements, and Debt: Reading the Documents**

- 36: Read a fund's required disclosures: what a fact sheet leaves out — 1,058 words
- 37: Fee disclosure: the arithmetic of a percentage point — 1,090 words
- 38: Taxes and account types in general terms — 1,078 words
- 39: Reading a balance sheet and a cash-flow statement — 1,049 words
- 40: Debt payoff order and auditing a financial claim — 1,143 words

**Total instructional words: 10,440.** Minimum lesson: 976. Maximum: 1,143. Count method: whitespace-delimited words in `explanation` + `example` + the six `depth` fields only, excluding headings, readings, visual steps, and assessments — the same method as `scripts/validate-packs.ts`. The floor is 600; every lesson exceeds it without padding (the shorter lessons, 35 and 34, carry the covariance and dispersion arithmetic rather than prose filler).

Progression: the level continues after the existing level's lesson 30 (auditable decision memos) and assumes its prerequisites — dated cash flows, NPV, nominal/real consistency, working capital, leverage, and decision triggers are referenced rather than reintroduced. Lesson 31 builds compound growth from the earlier date discipline; 32–33 formalise the rate and the inflation assumption; 34–35 introduce dispersion and covariance; 36–40 turn to the documents and claims an investor actually receives, ending with a claim audit that reuses the arithmetic of the whole level.

## Source verification results

21 unique source URLs. Every lesson has at least one verified source with section-specific reading directions; lesson 40 has three. Verification was by HTTP request (`curl -L`, browser user-agent, status and byte count recorded) plus content retrieval for every reading whose section directions are asserted.

Reachable to automated HTTPS GET (HTTP 200):

1. `https://files.consumerfinance.gov/f/documents/cfpb_your-money-your-goals_debt-action-plan_tool_2018-11.pdf` — 200, 95,752 bytes (lesson 40)
2. `https://openstax.org/books/principles-finance/pages/15-2-risk-and-return-to-multiple-assets` — 200, 298,898 (35)
3. `https://openstax.org/books/principles-finance/pages/5-5-the-statement-of-cash-flows` — 200, 301,791 (39)
4. `https://openstax.org/books/principles-finance/pages/7-3-methods-for-solving-time-value-of-money-problems` — 200, 376,751 (32)
5. `https://openstax.org/books/principles-finance/pages/8-4-stated-versus-effective-rates` — 200, 294,362 (31)
6. `https://www.consumerfinance.gov/about-us/blog/how-reduce-your-debt` — 200, 153,086 (40)
7. `https://www.federalreserve.gov/faqs/economy_14400.htm` — 200, 83,885 (33)
8. `https://www.federalreserve.gov/faqs/economy_14419.htm` — 200, 89,407 (33)
9. `https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator` — 200, 48,877 (31)
10. `https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/mutual-fund-and-etf-fees-and-expenses-investor-bulletin` — 200, 61,085 (37)
11. `https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/updated-investor-bulletin-how-read-mutual-fund-or-etf-shareholder-report` — 200, 133,739 (36)
12. `https://www.investor.gov/introduction-investing/investing-basics/glossary/compound-interest` — 200, 57,632 (32)
13. `https://www.investor.gov/introduction-investing/investing-basics/glossary/diversification` — 200, 57,448 (35)
14. `https://www.investor.gov/introduction-investing/investing-basics/investment-products/mutual-funds-and-exchange-traded-funds-etfs/mutual-funds` — 200, 71,165 (36)
15. `https://www.investor.gov/introduction-investing/investing-basics/what-risk` — 200, 62,645 (34)
16. `https://www.investor.gov/protect-your-investments/fraud/how-avoid-fraud` — 200, 45,451 (40)
17. `https://www.irs.gov/retirement-plans/individual-retirement-arrangements-iras` — 200, 105,511 (38)
18. `https://www.irs.gov/taxtopics/tc409` — 200, 108,118 (38)

Refusing automated GET (HTTP 403, sec.gov rate threshold), content retrieved through the web-extraction tool — disclosed inside the affected reading notes:

19. `https://www.sec.gov/investor/alerts/ib_fees_expenses.pdf` — 403 to curl; full bulletin text retrieved via extraction (lesson 37)
20. `https://www.sec.gov/investor/pubs/sec-guide-to-mutual-funds.pdf` — 403 to curl; table of contents and "Key Points to Remember" retrieved (lesson 34)
21. `https://www.sec.gov/about/reports-publications/investorpubsbegfinstmtguide` — 403 to curl; body text of "Balance Sheets", "Income Statements", and "Bringing It All Together" retrieved via extraction (lesson 39)

Content actually inspected before writing directions (not merely resolved):

- Investor.gov *What is Risk?* — read the definition and the business, volatility, inflation, interest-rate, and liquidity risk sections.
- Investor.gov *Mutual Funds* page — read the product description, the diversification and liquidity features, and the three ways investors earn money.
- Investor.gov *Mutual Fund and ETF Fees and Expenses* bulletin — read the prospectus fee-table structure: management fees, distribution/12b-1 fees, other expenses, total annual fund operating expenses (expense ratio), and shareholder fees (sales load, redemption fee).
- Investor.gov *Updated Investor Bulletin: How to Read a Mutual Fund or ETF Shareholder Report* — read the twice-yearly delivery requirement, the multiple-share-class warning, and the required item list in order.
- Investor.gov compound interest calculator — read the four labelled steps (Initial Investment, Contribute, Interest Rate with a variance range, Compound It).
- Investor.gov glossary *Compound Interest* — read the definition; its link target to the calculator confirmed.
- Investor.gov glossary *Diversification* — **limitation:** the entry's definition text is loaded dynamically and did not render for automated retrieval. The URL resolves (HTTP 200) and the entry is included only as the regulator's index to the concept; the lesson's own explanation and calculation are the author's and do not paraphrase or quote the page. Disclosed in the reading note.
- Investor.gov *How to Avoid Fraud* — read the warning-sign and verification framing.
- Federal Reserve FAQ *What is inflation…* — read the definition of inflation as a general price-level increase, the insistence that one or several products cannot measure it, the PCE versus CPI discussion, and the 2% longer-run goal.
- Federal Reserve FAQ *Why does the Federal Reserve aim for inflation of 2 percent…* — read the rationale for the longer-run target.
- CFPB *Debt action plan* tool (PDF) — read the two-column strategy comparison with its stated pros and cons and the statement that one strategy is not better than the other.
- CFPB *How to reduce your debt* — read the highest-interest-rate and snowball descriptions, including the momentum versus cost trade-off.
- IRS *Individual retirement arrangements (IRAs)* — read "Types of IRAs", the traditional-versus-Roth descriptions, and the contribution, deduction, distribution, and rollover headings.
- IRS *Topic no. 409* — grepped and read the "Short-term or long-term" section (more than one year versus one year or less; gift, decedent, futures, and partnership exceptions).
- SEC Buyer's Guide… i.e. *Mutual Funds and ETFs: A Guide for Investors* — read the table of contents, the "Key Points to Remember" block, and the "Avoiding Common Pitfalls" section list.
- SEC *Beginners' Guide to Financial Statements* — read the balance-sheet section (point-in-time, `ASSETS = LIABILITIES + SHAREHOLDERS' EQUITY`, current versus noncurrent), the income-statement section, and "Bringing It All Together" (cash flows related to, but not equivalent to, net income).
- OpenStax 8.4 — read the stated-versus-effective-rate discussion and the credit-card compounding table showing 1.5% per month as 19.562% effective.
- OpenStax 7.3 — read the learning outcomes and "Using Timelines to Organize TVM Information" with Tables 7.1–7.2.
- OpenStax 15.2 — read the learning outcomes (diversification benefits; firm-specific versus systematic risk) and the "Diversification" section.
- OpenStax 5.5 — read "Importance of the Statement of Cash Flows" (profitable but cash-poor; indirect method; earnings-quality comparison) and the start of "Operating Activities".

No quotation is attributed to any source that was not retrieved, and no rate, return, threshold, or current tax figure is asserted as a fact about the world.

## Arithmetic checks (all computed in code, never mentally)

Python (session kernel) computed every number; the value in the lesson text is the rounded rendering of the computed result. Key checks:

| Check | Computed |
|---|---:|
| 31: $10,000 at 6% annual, 10 years | 17,908.48 |
| 31: $10,000 at 6% nominal monthly, 10 years | 18,193.97 |
| 31: effective annual rate from 6% monthly | 6.1678% |
| 31: Rule of 72 at 6% vs exact doubling (ln2/ln1.06) | 12.00 vs 11.8957 years |
| 31: Rule of 72 at 3% vs exact | 24.00 vs 23.4498 years |
| 31: $300/month, 30 years, 6% monthly (360 contributions, $108,000) | 301,354.51 |
| 31: same with a 10-year-late start (240 contributions) | 138,612.27; delay removes 162,742.24 |
| 32: PV of $50,000 in 15 years at 5% / at 4% | 24,050.85 / 27,763.23; gap 3,712.37 |
| 32: PV of five $25,000 year-end receipts at 5% / 7% | 108,236.92 / 102,504.94 (−5.30%) |
| 32: annualised rate of $10,000 → $18,000 over 10 years | 6.0540% (vs 8% implied by 80/10) |
| 32: $10,000 at a true 8% for 10 years | 21,589.25 |
| 32: shortfall of the $26,000 ask at a 5% rate | 1,949.15 |
| 33: purchasing power of $100,000 after 20 years at 2.5% | 61,027.09 |
| 33: $3,000 monthly payment after 15 years at 2.5% | 2,071.40 (−30.95%) |
| 33: real return of 4% nominal at 3% inflation (pre-tax) | 0.9709% |
| 33: same with 20% tax on a nominal 2% rate | −0.9709% pre-tax; −1.3592% after tax |
| 34: three-state expectation and standard deviation | 5.0000% / 21.2132% (variance 450; probabilities sum 1.00) |
| 34: +40% then −20% — cumulative and geometric | +12.00%; 5.8301% a year (arithmetic mean 10%) |
| 35: portfolio σ with 50/50 weights, σ 18% and 12%: ρ=+1 / 0.3 / 0 | 15.0000% / 12.2229% / 10.8167% |
| 35: variance reduction at ρ=0.3 versus ρ=+1 | 33.60% |
| 36: $10,000 for 10 years at net 5.95% / net 4.95% | 17,824.18 / 16,211.55; gap 1,612.64 |
| 36: $100,000 at 4% for 20 years with fees 0.25% / 0.50% / 1.00% | 208,815.20 / 198,978.89 / 180,611.12 |
| 37: $100,000 at 4% for 20 years, no fee vs 1% fee | 219,112.31 vs 180,611.12; wealth difference 38,501.19 |
| 37: sum of the twenty annual fee amounts (year-end deduction model) | 26,761.31; that model ends at 179,213.48 |
| 37: $50,000 for 30 years at 6% vs 5.25% | 287,174.56 vs 232,077.55; difference 55,097.00 |
| 38: $5,000 pre-tax for 30 years at 6% | 28,717.46; after 22% withdrawal tax 22,399.62 |
| 38: $3,900 after 22% tax now, tax-free growth | 22,399.62 (identical to the cent) |
| 38: withdrawal-rate variants 12% / 32% | 25,271.36 / 19,527.87 |
| 38: $10,000 gain at hypothetical 22% vs 15% | 2,200 vs 1,500; difference 700 |
| 39: operating cash flow from the worked example | 45,000 |
| 39: free cash flow before financing; net change; closing cash | −25,000; +15,000; 35,000 from 20,000 |
| 39: second case (profit 30,000, receivables +50,000, dep 8,000) | OCF −12,000 |
| 39: third case (loss −10,000, impairment 40,000, dep 8,000, collections 20,000) | OCF 58,000 |
| 40: monthly rate for a 22% APR | 1.8333% |
| 40: highest-rate-first vs smallest-balance-first, fixed $500 budget | 34 vs 35 payments; interest 2,894.50 vs 3,127.85; difference 233.36 |
| 40: paying only the $320 of minimums | 66 payments; interest 6,875.16; the $180 extra saves 3,980.66 and 32 payments |
| 40: first debt cleared — snowball (B) vs highest-rate (A) | month 5 vs month 19 |
| 40: 3% transfer fee on $4,200 vs 12 months of 22% interest | 126.00 vs 1,023.11 |

The $100,000 fee comparison in lesson 37 is deliberately reported two ways: the ongoing proportional deduction (net 3% → 180,611.12) and a coarser year-end deduction model (179,213.48, with 26,761.31 of fees charged). The lesson states explicitly that "fee amounts charged" and "wealth given up" are different quantities, which is the mechanism the SEC bulletin describes.

Method note for lesson 40: the debt model accrues monthly interest at APR ÷ 12, applies minimums first, then directs the remaining budget at the target debt, and holds the total monthly budget fixed across strategies. This is a simplification of real contracts, which may accrue daily and allocate payments among fees, interest, and principal in an order set by the agreement and by jurisdiction-specific law. That limitation is stated in the lesson's `depth.mechanism`.

## Invariants exercised

1. **Python structural validation** (replicating `attachCoursePacks` field by field): JSON parses; subject is `finance`; 1 level, 2 units, 5 lessons per unit, 10 unique lesson IDs matching `/^\d{2,}$/` and equal to 31–40; all seven required lesson text fields non-empty; all six `depth` keys non-empty; ≥600 instructional words per lesson; every reading has a non-empty title and note, an `https://` URL with no embedded credentials; every visual has a title, description, and ≥3 non-empty steps; every unit has ≥5 questions; the level has ≥12 questions and more than a unit quiz; all 22 question IDs unique; every `reviewLessonIds` entry resolves to a lesson in this pack; no `russianItems`; no lesson `answer` equals its `distractor`; no duplicate answer, distractor, or prompt across the 22 assessments; no unit or level prompt copied from a lesson's retrieval prompt.
2. **The repository's real adapter**: `attachCoursePacks(basePrograms, [existing finance.json, staged pack])` executed through `tsx` with no exception. Result: finance carries 4 levels (base 2 + existing pack 1 + this level 1); the new level exposes 2 units with 5 lessons and 5 questions each and 12 assessment questions; attachment adds topics 31–40; minimum words 976; total 10,440; all 22 new question IDs unique; every review route resolvable in the new level.

Both checks passed with zero errors. These are data-contract and attachment checks, not application integration, rendering, accessibility, audio, or deployment tests.

## Honesty, accuracy, and scope boundaries honoured in the content

- **Education, not advice.** No lesson recommends a security, a fund, an allocation, an account, a contribution amount, a tax position, or a repayment strategy for an identifiable person. Lesson 40 states that a strategy comparison is educational and directs a reader facing unmanageable debt to a qualified professional or a recognised non-profit service in their jurisdiction.
- **No guaranteed returns.** Every projection is labelled as conditional on an assumed rate being earned. The Rule of 72 is presented as an approximation with its error quantified. Expected return is explicitly separated from any state that occurs.
- **Assumptions always stated.** Each example declares rate, compounding convention, horizon, timing (year-end versus monthly), and its fee, tax, and inflation treatment, usually with an explicit exclusion list.
- **Nominal distinguished from real.** Lessons 31–33 and 38 keep nominal and real units separate, use the exact `(1+nominal)/(1+inflation) − 1` conversion, and show the approximation's error.
- **Jurisdiction dependence flagged.** Lesson 38 states repeatedly that taxes, account rules, limits, penalties, required distributions, and preferential treatment are set by statute in a jurisdiction and change; its 22% and 15% figures are labelled hypothetical. Lesson 40 flags that payment allocation and APR composition are jurisdiction- and contract-dependent. Lesson 33 notes that an indexed tax on nominal gains and the applicable treatment depend on the account and jurisdiction.
- **No invented quotation.** Nothing is quoted from a source that was not retrieved. The one page whose definition text did not render (Investor.gov glossary *Diversification*) is disclosed as such in its reading note.
- **No products, no current rates.** No live yield, threshold, rate, or fee is asserted as a current market fact anywhere in the pack.

## Unresolved limitations

- **Parent verification still required.** Rendered math, visual step sequences, reading links as displayed, progress/assessment integration, accessible narration, and production behaviour were not tested here by design (no server, no browser automation, no deployment).
- **Three sec.gov sources return HTTP 403 to automated requests.** Their content was retrieved through the extraction tool and is disclosed inside the reading notes, but automated link-checking in the parent's pipeline will report those three URLs as failures. They are canonical regulator publications, not dead links.
- **One dynamic page.** Investor.gov's glossary *Diversification* does not expose its definition text to automated retrieval; it is cited only as an index entry, with the limitation stated in the note.
- **The level overlaps deliberately with lesson 27 (covariance) and lesson 30 (decision memos).** Lesson 35 reuses OpenStax 15.2 with different, section-specific directions and a different worked example; content is not recycled. If the parent prefers zero source reuse across a course, 15.2 is the one URL to swap.
- **Word counts exceed the historical pack average** (10,440 for ten lessons, ~1,044 each, against ~717 each in lessons 21–30). Every lesson clears the 600-word floor; the additional length carries worked arithmetic and source-aware distinctions rather than repetition. If the parent enforces a house style nearer 700 words, the `application` and `summary` fields are the compressible ones.
- **Debt simulation is a model.** Monthly accrual at APR ÷ 12, fixed budgets, no fees, no new borrowing, and all-on-time payments; real contracts differ, and the lesson says so.
- **Spelling convention normalised.** The pack originally mixed conventions; all British forms (`labelled`, `behaviour`, `standardised`, `recognised`, `realised`, `modelled`, `favourable`, `authorising`, `annualised`, `amortising`, and related) were replaced with the US spelling used by the existing `finance.json`, verified by search over the final JSON. 58 replacements; no meaning changed.
- **The binary retrieval checks and unit quizzes test bounded conceptual distinctions.** They are not evidence of professional competence, and the contract's requirement not to present them as such is respected in the lesson text (stated explicitly in lesson 40's `depth.mistake`).
