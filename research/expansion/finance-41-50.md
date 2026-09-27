# Finance continuation level — lessons 41–50 (handoff)

## Scope, isolation, and outputs

Authored one new finance level with **two units of five lessons each (IDs 41–50)**, ten unit questions (five per unit), and **twelve separately authored cumulative level questions**, following `research/expansion/CONTRACT.md`.

Files written — exactly two, both inside the permitted paths:

| Path | Bytes | Content |
|---|---:|---|
| `src/lib/course-packs/staged/finance-41-50.json` | 140,840 | The staged pack: `{"subject":"finance","levels":[ one level, 2 units, 10 lessons, 5+5 unit questions, 12 level questions ]}`. Valid JSON, parsed, edited, re-parsed. |
| `research/expansion/finance-41-50.md` | this file | Handoff note. |

Nothing else was written. The parent directory `src/lib/course-packs/staged/` did not exist when this task began and now also contains other workers' packs (`business-funding-71-80.json`, `music-41-50.json`, `psychiatry-41-50.json`, `russian-61-70.json`, `skincare-31-40.json`), which I did not open or modify. `git status` shows no change to `src/lib/course-packs/finance.json`, `finance-31-40.json`, `course-pack.ts`, `programs.ts`, the registry, tests, or any component. The one modified tracked file it reports (`artifacts/pedagogy/production-route-readback.json`) was already modified before my first write and is not mine. No deployment, no server, no browser automation, no GitHub operation, no Russian content (`russianItems` is absent from every lesson, as required for finance).

This is a bounded two-unit continuation toward the larger course target. It is **not** completion of a 100-unit course, **not** proof of professional competence, and **not** authorization to give individualized financial advice. Parent owns registration, application tests, and production verification.

## Topics and computed word counts

Level title: **Documents, Advisers, and Risk Transfer: Judgment at the Point of Decision**

Unit 1 — **Reading the Documents and the People Behind Them**

- 41: Find the fees inside a fund prospectus — 1,195 words
- 42: Broker, adviser, or salesperson: what each owes you — 1,141 words
- 43: Behavioral biases that cost money: loss aversion, recency, overconfidence, mental accounting — 1,197 words
- 44: Write your own investment policy statement — 1,224 words
- 45: Asset location and tax-aware ordering of withdrawals — 1,262 words

Unit 2 — **Transferring Risk, Shifting the Sequence, and Auditing Claims**

- 46: Sequence-of-returns risk near retirement — 1,234 words
- 47: Insurance as risk transfer, not investment — 1,317 words
- 48: Evaluating an annuity honestly — 1,294 words
- 49: Beneficiaries, probate, and why documents beat intentions — 1,292 words
- 50: Capstone: audit a financial claim with the whole toolkit — 1,304 words

**Total instructional words: 12,460.** Minimum lesson: 1,141. Maximum: 1,317. Count method: whitespace-delimited words in `explanation` + `example` + the six `depth` fields only, excluding readings, visual steps, prompts and assessments — the same method as `scripts/validate-packs.ts`. The floor is 600; every lesson exceeds it without filler, and each `depth.mechanism` paragraph is written for its own topic rather than reused (a programmatic check confirms no `depth` field repeats across the ten lessons).

Progression: the level continues after lesson 40 (debt ordering and claim auditing) and assumes the published prerequisites of lessons 21–40 — dated cash flows, nominal versus real figures, dispersion, fund disclosures, fee arithmetic, account taxation and financial statements are referenced rather than reintroduced. Lessons 41–42 turn the documents of 36–37 into a relationship standard; 43–44 supply the behavioral and policy machinery; 45 adds the account dimension; 46–48 move to withdrawal timing and risk transfer; 49 closes the estate channel; 50 reuses the whole toolkit as an audit procedure.

## Source verification results

23 reading entries across **22 unique URLs**. Every lesson has at least one verified source with section-specific reading directions; lessons 42, 49 and 50 have three each, and the Federal Deposit Insurance Corporation brochure is reused in 47 and 49 with different section directions.

Verification was an HTTP request per URL (`curl -L`, browser user agent, status and byte count recorded), run as a single batch over every URL in the pack after the pack was assembled, plus one separate check for the one URL added immediately after that batch.

Reachable to automated HTTPS GET (HTTP 200), 16 of the 22 URLs:

1. `https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/how-read-0` — 200, 47,036 bytes (41)
2. `https://www.investor.gov/introduction-investing/investing-basics/glossary/mutual-fund-prospectus` — 200, 59,897 (41)
3. `https://www.investor.gov/introduction-investing/getting-started/working-investment-professional` — 200, 50,323 (42)
4. `https://www.finra.org/media-center/newsreleases/2025/new-finra-foundation-research-examines-shifting-investor-behaviors` — 200, 88,450 (43)
5. `https://www.investor.gov/additional-resources/general-resources/publications-research/info-sheets/beginners-guide-asset` — 200, 59,524 (44)
6. `https://www.investor.gov/introduction-investing/getting-started/asset-allocation` — 200, 50,055 (44)
7. `https://www.irs.gov/publications/p550` — 200, 1,323,822 (45)
8. `https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/target-date-funds-investor-bulletin` — 200, 51,996 (46)
9. `https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-required-minimum-distributions` — 200, 113,845 (46)
10. `https://www.fdic.gov/resources/deposit-insurance/brochures/deposits-at-a-glance` — 200, 82,739 (47, 49)
11. `https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/updated-5` — 200, 72,619 (48)
12. `https://www.finra.org/investors/learn-to-invest/types-investments/annuities/variable-annuities` — 200, 119,962 (48)
13. `https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-beneficiary` — 200, 105,743 (49)
14. `https://www.irs.gov/publications/p559` — 200, 600,563 (49)
15. `https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/updated-0` — 200, 51,799 (50)
16. `https://www.investor.gov/protect-your-investments/fraud/how-avoid-fraud` — 200, 45,451 (50)
One further URL was checked while selecting sources and returned HTTP 200 but is not cited anywhere in the pack: `https://www.finra.org/investors/investing/investment-products/annuities/risks` — 200, 89,864 bytes; the FINRA variable-annuities page listed above is the one cited in lesson 48.

Refusing automated GET (HTTP 403) but read another way, 6 URLs. Each is disclosed inside the affected reading note, and each was retrieved through the web-extraction tool and inspected before its directions were written:

17. `https://content.naic.org/sites/default/files/publication-lig-lp-consumer-life.pdf` — NAIC *Life Insurance Buyer's Guide*; 403 to curl. Read: the coverage-sizing questions, term versus cash value, the affordability and low-early-cash-value warnings, the illustration advice, the beneficiary guidance including the caution against naming a minor (lesson 47).
18. `https://www.sec.gov/about/divisions-offices/division-trading-markets/broker-dealers/staff-bulletin-standards-conduct-broker-dealers-investment-advisers-care-obligations` — SEC staff bulletin on the care obligations; 403 to curl. Read: the Background section, the statement that both Reg BI and the adviser fiduciary standard are drawn from fiduciary principles, the three components of the care obligations, and the reference to reasonably available alternatives (lesson 42).
19. `https://www.sec.gov/files/rules/interp/2019/ia-5248.pdf` — SEC Commission Interpretation Regarding Standard of Conduct for Investment Advisers; 403 to curl. Read: the Introduction sentence that under federal law an investment adviser is a fiduciary and that the duty comprises a care duty and a loyalty duty, plus the section headings of Investment Advisers' Fiduciary Duty (lesson 42).
20. `https://www.sec.gov/investor/locinvestorbehaviorreport.pdf` — SEC-published *Behavioral Patterns and Pitfalls of U.S. Investors* (Federal Research Division, Library of Congress, August 2010); 403 to curl. Read: the Preface, Overview, The Role of Behavioral Finance (Prospect Theory, Overconfidence, Human Sentiment) and the Common Investment Mistakes entries Active Trading, Disposition Effect, Familiarity Bias, Naive Diversification and Underdiversification (lesson 43).
21. `https://www.sec.gov/answers/wash.htm` — SEC *Wash Sales* answer page; 403 to curl, read through extraction (lesson 45).
22. `https://www.sec.gov/search-filings/edgar-search-assistance/how-do-i-use-edgar` — SEC *How Do I Use EDGAR?*; 403 to curl, read through extraction. Cited as a pointer, with the lesson directing readers to the full text search interface and to *Researching Public Companies Through EDGAR* (lesson 50).

Content actually inspected before writing directions (not merely resolved): the Investor.gov prospectus bulletin's fee-table and performance sections including the three required fee presentations and the share-class example; the Investor.gov glossary entry on the prospectus; the Investor.gov working-with-a-professional page's relationship-summary section; the Investor.gov beginners' guide's Time Horizon and Risk Tolerance sections and the asset-allocation page's Rebalancing section with its 60%-to-80% example and its warning that free risk questionnaires may be biased toward the sponsor's products; IRS Publication 550's Wash Sales section verbatim, including the four listed acquisition events, the 30-days-before-or-after window, the spousal and controlled-corporation extension, the basis and holding-period adjustment, and Example 1; the IRS required minimum distributions FAQ, including the age threshold, the April 1 first-year deadline, the 25% excise tax with the 10% reduction for a timely correction within two years, and the treatment of Roth accounts; the IRS beneficiary page's spouse options, eligible designated beneficiary definition, ten-year rule and five-year rule; IRS Publication 559's introductory framing of the personal representative; the FDIC *Deposit Insurance at a Glance* trust-account formula, the $250,000 per depositor per bank per ownership category standard, and the Summary of Trust Rule Change effective April 1, 2024 with the $1,250,000 per owner cap for five or more beneficiaries; the Investor.gov target date funds bulletin's description of the stock-to-bond shift, the to and through glide paths, the statement that funds with the same target date can differ materially, and the pre-investing checklist; the Investor.gov variable annuities bulletin's contents, its "you will pay extra for the features" warning, the ordinary-income treatment of withdrawals, the advice to make the most of IRA and employer plan contributions first, the statement that a variable annuity inside a tax-advantaged plan gives no additional tax advantage, and the note that contract fees may fund the seller's compensation; the FINRA variable-annuities page on surrender charges, mortality and expense risk charges, administrative fees, riders, surrender periods of eight years or more, higher annual expenses than a typical mutual fund, and state guaranty protection rather than federal; the Investor.gov check-out bulletin's description of the Investment Adviser Public Disclosure site, BrokerCheck, state regulators, free and unnotified searches, and the warning about unlicensed persons; and the Investor.gov how-to-avoid-fraud page.

No quotation is attributed to a source that was not retrieved. No rate, return, threshold, tax figure, payout percentage or fee is asserted as a fact about the current world; every number in the pack is either an assumption stated in the text as hypothetical or an arithmetic consequence of assumptions stated beside it.

## Arithmetic checks (all computed in code, never mentally)

Python computed every number; the lesson text carries the rounded rendering. Key checks:

| Check | Computed |
|---|---|
| 41: $10,000 ten years at assumed 6% gross, 0.05% expenses (net 5.95%) | 17,824.18 |
| 41: same, 3.75% front-end sales charge and 1.00% expenses (net 5.00%) | 15,678.11; gap 2,146.07 |
| 41: first-year cost of a 0.90 percentage-point difference on $10,000 | 90.00 |
| 41: waiver case, $10,000 ten years at net 5.15% vs contractual 4.80% | 16,523.15 vs 15,981.33; gap 541.82 |
| 42: 1.00% of $400,000 vs a flat $2,400 | 4,000 vs 2,400 |
| 42: $400,000 ten years, net 4.00% vs net 4.40% | 592,097.71 vs 615,268.92; gap 23,171.21 |
| 42: 5.75% sales charge on $100,000; cumulative 1.00% fee on a level balance | 5,750 once; cumulative charges pass 5,750 during year six |
| 43: recovery gain after a 10/20/30/40/50% fall | 11.11 / 25.00 / 42.86 / 66.67 / 100.00% |
| 43: −20% then +20% | 0.96 of the starting value |
| 43: $100,000, −30%, then a missed +25% rebound | 70,000 vs 87,500; difference 17,500 |
| 43: two $50,000 halves at −10% and +10%, versus $100,000 through −10% then +10% | 100,000 vs 99,000 |
| 43: $4,000 realized gain at a hypothetical 15%, alone versus offset by a $3,000 realized loss | 600 vs 150 |
| 44: $2,000 a month for 15 years at an assumed 6% nominal, monthly compounding | 581,637.42; shortfall 18,362.58 against $600,000; required contribution about 2,063.14 |
| 44: 60/40 with stocks +25%, bonds flat, on $115,000 | 65.22% / 34.78%; rebalance to 69,000 / 46,000, moving 6,000 |
| 44: 60/40 with stocks −25%, bonds flat, on $85,000 | 52.94% / 47.06%; rebalance to 51,000 / 34,000, moving 6,000 into stocks |
| 44: $600,000 nominal in 15 years at an assumed 2.5% inflation | 414,279.33 in today's purchasing power |
| 45: $10,000 ten years, 3% annually taxed at 24% plus 3% appreciation taxed at 15% | taxable 16,191.25 after tax; deferred 17,908.48 gross, 16,010.44 at a 24% withdrawal rate, 16,959.46 at 12%, 15,377.77 at 32% |
| 45: wash sale, basis $5,000, sold $4,000, repurchased at $4,200 | disallowed loss 1,000; new basis 5,200 |
| 45: $20,000 from a tax-deferred account at 22% versus $20,000 of shares with a $12,000 basis at 15% | tax 4,400 vs 1,200 |
| 46: $500,000, $25,000 withdrawn at the start of each year, +20%/−20% alternating versus reversed, ten years | 204,596.32 vs 158,439.49; gap 46,156.83 |
| 46: the same ten returns with no withdrawals | 407,686.35 either way (0.96 to the fifth power) |
| 46: $500,000 with an illustrative divisor of 26.5 | 18,867.92 required |
| 46: $500,000 after a 20% fall, withdrawing 25,000 versus 22,500 | 375,000 vs 377,500 |
| 47: term premiums, $600 a year for 20 years | 12,000 |
| 47: $5,400 a year invested for 20 years at an assumed 5% | 178,556.15 |
| 47: expected payout at a hypothetical 0.2% annual mortality probability against a $600 premium | 1,000 vs 600 |
| 47: a $150 a year premium difference on a higher deductible | 1,500 over ten years |
| 47: $24,000 of cash forgoing an assumed 4% differential | 960 a year |
| 48: $300,000 at a hypothetical 6.0% payout versus a 4% withdrawal | 18,000 vs 12,000 a year; 450,000 vs 300,000 over 25 years |
| 48: $18,000 after 20 years at an assumed 2.5% inflation | 10,984.88 |
| 48: $200,000, 25 years, assumed 6% gross, total costs 0.35% vs 2.25% | 790,255.51 vs 502,033.42; gap 288,222.08 |
| 48: a 7% surrender charge on $200,000 | 14,000 |
| 48: $300,000 at a hypothetical 5.2% twenty-year period-certain payout versus a 6.0% life payout over 30 years | 312,000 vs 540,000; gap 228,000 |
| 49: FDIC trust-account formula, one owner with three distinct beneficiaries; six beneficiaries | 750,000 covered; 1,250,000 cap |
| 49: $400,000 inherited tax-deferred account at hypothetical flat 24% / 32% / 12% | 96,000 / 128,000 / 48,000 |
| 50: $50,000 at 8% for nine years; exact doubling time at 8% | 99,950.23 (1.999 times); ln2/ln1.08 = 9.006 years against the rule of 72's 9.00 |
| 50: $10,000 for 20 years at 8% vs 4% | 46,609.57 vs 21,911.23 |
| 50: 2.25 points of costs, net 5.75%, $50,000 for nine years | 82,697.69; the doubling claim fails by 17,252.54 |
| 50: returns of +30, −15, +25, −2, +22% on $50,000 | 82,571.12; arithmetic mean 12.00%, compound rate 10.55% |
| 50: a claimed 12% on $50,000 for five years | 88,117.08 |

Method notes: the sequencing model in lesson 46 withdraws at the start of each year and then applies the return, with no inflation indexing, taxes, or fees; the taxable-versus-deferred model in lesson 45 states both rates in the text and treats the load-style items explicitly; the FDIC figures are quoted from the regulator's published formula rather than modelled. All of these limitations are stated in the lessons themselves.

## Invariants exercised

1. **Structural validation in Python** (replicating the adapter field by field): JSON parses; subject is `finance`; one level, two units, five lessons per unit; ten unique lesson IDs equal to 41–50 matching `/^\d{2,}$/`; all seven required lesson text fields non-empty; all six `depth` keys non-empty and no `depth` field duplicated between lessons; 600-word floor met with a minimum of 1,141; every reading has a non-empty title and note and an `https://` URL with no embedded credentials; every visual has a title, description and at least three non-empty steps; five questions per unit; twelve level questions, more than a unit quiz; all 22 question IDs unique; every `reviewLessonIds` entry resolves to a lesson in this pack; no `russianItems`; no lesson `answer` equals its `distractor`; no duplicate answer, distractor or prompt across the 22 assessments; no unit or level prompt copied from a lesson retrieval prompt; no non-ASCII characters.
2. **The repository's real adapter.** `tsx` is not installed in this repository, so the adapter script was bundled with the repository's own `rolldown` into a single ESM file held in the scratch directory (no repository file was created) and executed with `node`. It imports `basePrograms` from `src/lib/programs.ts` and `attachCoursePacks` from `src/lib/course-pack.ts`, and attaches the two published finance packs plus this one. Result: `attachCoursePacks` returned without exception; finance carries 5 levels; the new level exposes 2 units of 5 lessons with 5 questions each and 12 assessment questions; lesson IDs 41–50 appended; minimum words 1,141 and total 12,460; the finance program now holds 50 lesson IDs; and all **66** question IDs across the three finance packs are unique (22 existing + 22 existing + 22 new), proving no ID collision with published assessments.

These are data-contract and attachment checks. They are not application integration, rendering, accessibility, audio, or deployment tests.

## Honesty, accuracy, and scope boundaries honoured in the content

- **Education, not advice.** No lesson recommends a security, fund, allocation, account, contribution amount, tax position, insurance product, annuity contract or beneficiary arrangement for an identifiable person. Lesson 49 states that probate, spousal rights and estate tax are jurisdiction-dependent and directs readers to a qualified professional in the relevant jurisdiction; lesson 50 defines its deliverable as an audit and states explicitly that a record ending in a personal recommendation fails the rubric.
- **No guaranteed returns.** Every projection is labelled as conditional on an assumed rate. The rule of 72 is presented with its error quantified against the exact calculation. Averages are separated from the compound rates that actually accrue.
- **Assumptions stated.** Each example declares the rate, compounding convention, horizon, withdrawal timing, fee, tax and inflation treatment, usually with an explicit exclusion list; several examples state that the numbers are hypothetical illustrations of mechanism rather than quotations.
- **Nominal distinguished from real.** Lessons 46, 48 and 44 keep nominal and real figures separate, and lesson 44 requires the policy statement to declare which one the goal is stated in.
- **Jurisdiction and change flagged.** Lesson 45 states repeatedly that rates, brackets, limits, preferential treatment and penalties are statutory, change, and vary by state; lesson 46 notes that required-distribution ages have been changed by legislation and directs the reader to the current figure; lesson 47 notes that insurance regulation and guaranty protection are state-based with limits that vary; lesson 49 makes the same point for probate, spousal rights and estate and inheritance taxes. The IRS pages are described as annual publications to be re-read in the current edition.
- **Recency of sources disclosed.** The behavioral literature review is identified in the lesson and its reading note as an August 2010 report, explicitly not a description of current conditions, and the FINRA Foundation survey is described as self-reported attitudes rather than measured returns.
- **No invented quotation.** Nothing is quoted from a source that was not retrieved, and no paraphrase is presented as a quotation.
- **No products or current rates.** No live yield, fee, payout rate, threshold or tax figure is asserted as a fact about the market or the law; the lesson text labels each as an assumption.

## Unresolved limitations

- **Parent verification still required.** Rendered layout, the text-sequence visuals as displayed, reading links as they appear, assessment wiring, accessible narration, and production behaviour were not tested here by design (no server, no browser automation, no deployment).
- **Six sources return HTTP 403 to automated requests** (five on sec.gov plus the NAIC PDF). Each was read through a web-extraction tool and is disclosed inside its own reading note, but automated link-checking in the parent's pipeline will report those six URLs as failures. They are canonical regulator publications, not dead links. This is the same pattern the published 31–40 pack disclosed for three sec.gov URLs.
- **No independent subject-matter review.** The financial content has not been reviewed by a licensed professional, a tax adviser, an actuary or an estate lawyer. Several topics (estate transfer, annuity guarantees, insurance regulation) are treated at the level of mechanism and arithmetic rather than of jurisdiction-specific law, and the lessons say so.
- **The target date funds bulletin was read in parts.** The sections on what target date funds are, how they differ, the glide path (to and through), and the pre-investing checklist were read; the bulletin's mid-document worked examples were not read and nothing in the pack depends on them.
- **Word counts are above the historical pack average.** 12,460 words for ten lessons (1,141–1,317 each) against 10,440 for the 31–40 level at about 1,044 each and roughly 717 each in lessons 21–30. The additional length carries worked arithmetic, source-aware distinctions and rubrics. If the parent enforces a house style nearer 1,000 words, `depth.application` and `depth.summary` are the compressible fields, and no numeric example would need to be removed.
- **One source is reused from the published level.** Investor.gov's *How to Avoid Fraud* is cited in lesson 50 with audit-specific directions and an explicit note that lesson 40 in the published pack cites the same page for a different purpose. If the parent prefers zero cross-level source reuse, that URL is the one to swap.
- **Rebalancing, sequencing and tax models are models.** They assume constant returns in the projections, no fees unless stated, no taxes unless stated, level contributions or withdrawals, and monthly or annual compounding as stated. Real contracts, real tax rules and real market paths differ, and each lesson states the relevant limitation in its `depth.mechanism`.
- **The quizzes remain binary retrieval checks.** They are not evidence of professional competence, and the lessons do not present them as such.
