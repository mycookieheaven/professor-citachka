# Finance continuation level — lessons 51–60 (handoff)

## Scope, isolation, and outputs

Authored one new finance level with **two units of five lessons each (IDs 51–60)**, ten unit questions (five per unit), and **twelve separately authored cumulative level questions**, following `research/expansion/CONTRACT.md`, `scripts/validate-packs.ts` and the runtime contract in `src/lib/course-pack.ts`.

Files written — exactly two, both inside the permitted paths:

| Path | Bytes | Content |
|---|---:|---|
| `src/lib/course-packs/staged/finance-51-60.json` | 172,747 | The staged pack: `{"subject":"finance","levels":[ one level, 2 units, 10 lessons, 5+5 unit questions, 12 level questions ]}`. Valid JSON, parsed, edited, re-parsed by tooling. |
| `research/expansion/finance-51-60.md` | this file | Handoff note. |

Nothing else was written. Scratch and bundle intermediates live in the Hermes scratch directory, not the repository. `git status --porcelain` reports exactly one entry, `?? src/lib/course-packs/staged/`, an untracked directory that also contains other workers' packs (`business-funding-91-100.json`, `music-61-70.json`, `philosophy-91-100.json`, `psychiatry-61-70.json`, `skincare-51-60.json`), which I did not open or modify. No published pack, registry, component, test, dependency or audit output was touched. No deployment, no server, no browser automation, no GitHub operation. No Russian content: `russianItems` is absent from every lesson, as required for finance.

This is a bounded two-unit continuation toward the larger course target. It is **not** completion of a 100-unit course, **not** proof of professional competence, and **not** authorization to give individualized financial advice. Parent owns registration, application tests, and production verification.

## Topics and computed word counts

Level title: **Scale, Leverage, and Containers: Arithmetic Before Decision**

Unit 1 — **How Growth, Goals, Reserves, Debt and Credit Actually Behave**

- 51: Compounding at scale: why the curve bends late and where intuition breaks — 1,515 words
- 52: Saving rate against rate of return: which lever moves a goal, and by how much — 1,388 words
- 53: Building an emergency fund from your own expenses instead of a rule of thumb — 1,493 words
- 54: Ordering debts by rate and by psychology, and knowing which lever is which — 1,592 words
- 55: Credit scores: what moves them, what does not, and the cost of chasing one — 1,693 words

Unit 2 — **Long Horizons, Payslips, Containers, and the One-Page Plan**

- 56: Buying against renting: an arithmetic problem whose answer is the assumptions — 1,565 words
- 57: Inflation over a long horizon: real dollars, real returns and the plan that survives both — 1,637 words
- 58: Reading your payslip: withholding is an estimate, not your tax — 1,679 words
- 59: Retirement accounts as containers: the tax rule is not the investment — 1,674 words
- 60: Capstone: a one-page plan with stated assumptions and a review date — 1,669 words

**Total instructional words: 15,905.** Minimum lesson: 1,388. Maximum: 1,693. Count method: whitespace-delimited words in `explanation` + `example` + the six `depth` fields only, excluding readings, visual steps, prompts and assessments — the same method as `scripts/validate-packs.ts` and the same method the published 41–50 pack reported. Every lesson clears the 600-word floor by more than a factor of two without padding, and each `depth.mechanism` paragraph is written for its own topic rather than reused.

Progression: the level continues after lesson 50 and assumes the published prerequisites of 21–50 — dated cash flows, nominal and real figures, dispersion, fund disclosures, fee arithmetic, account taxation, statements, debt payoff order, adviser standards, policy statements, sequence risk, insurance and annuities — and references them rather than reintroducing them. 51 and 52 supply the scale and lever arithmetic; 53–55 apply it to reserves, debt ordering and credit; 56–57 move to the two largest long-horizon decisions, tenure and inflation; 58–59 handle the two documents most people read least carefully, the payslip and the retirement container; 60 assembles the toolkit into a one-page plan with a falsification condition.

## Source verification results

**25 reading entries, 25 unique URLs.** Every lesson has at least two; lessons 55, 56, 57, 58 and 59 have three each and lessons 51, 52, 53, 54 and 60 have two each. Verification was an HTTP request per URL (`curl -L`, browser user agent, status and byte size recorded), run as a single batch over every URL in the assembled pack, plus earlier probe batches used to select sources.

Reachable to automated HTTPS GET (HTTP 200), **24 of 25**:

1. `https://www.investor.gov/introduction-investing/investing-basics/save-and-invest/define-your-goals` — 200, 59,453 bytes (52)
2. `https://www.investor.gov/free-financial-planning-tools` — 200, 43,486 (51)
3. `https://www.investor.gov/introduction-investing/investing-basics/invest-your-goals` — 200, 58,937 (60)
4. `https://www.finra.org/investors/insights/investment-returns` — 200, 92,798 (51)
5. `https://www.federalreserve.gov/publications/2026-economic-well-being-of-us-households-in-2025-savings-investments.htm` — 200, 125,167 (52)
6. `https://www.federalreserve.gov/faqs/economy_14400.htm` — 200, 83,885 (57)
7. `https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/` — 200, 163,195 (53)
8. `https://www.consumerfinance.gov/data-research/research-reports/evidence-based-strategies-build-emergency-savings/` — 200, 145,198 (53)
9. `https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-and-keep-a-good-credit-score-en-318/` — 200, 156,343 (55)
10. `https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/` — 200, 158,620 (55)
11. `https://www.consumerfinance.gov/about-us/blog/making-decision-rent-or-buy` — 200, 158,999 (56)
12. `https://files.consumerfinance.gov/f/documents/cfpb_your-money-your-goals_debt-action-plan_tool_2018-11.pdf` — 200, 95,752 (54)
13. `https://consumer.ftc.gov/articles/credit-scores` — 200, 491,340 (55)
14. `https://consumer.ftc.gov/all-scams/debt-credit-scams` — 200, 496,202 (54)
15. `https://www.irs.gov/publications/p936` — 200, 320,577 (56)
16. `https://www.irs.gov/publications/p523` — 200, 343,655 (56)
17. `https://www.irs.gov/publications/p15t` — 200, 1,979,038 (58)
18. `https://www.irs.gov/taxtopics/tc751` — 200, 100,010 (58)
19. `https://www.irs.gov/individuals/tax-withholding-estimator` — 200, 104,620 (58)
20. `https://www.irs.gov/retirement-plans/traditional-and-roth-iras` — 200, 103,999 (59)
21. `https://www.irs.gov/retirement-plans/401k-plans` — 200, 99,973 (59)
22. `https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-ira-contribution-limits` — 200, 110,105 (59)
23. `https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill` — 200, 105,352 (57)
24. `https://treasurydirect.gov/marketable-securities/tips/` — 200, 33,834 (57)

Refusing automated GET (HTTP 403) and read another way, **1 of 25**:

25. `https://www.sec.gov/investor/pubs/roadmap/goals.htm` — SEC *Roadmap to Saving and Investing: Define Your Goals*; 403 to a scripted request with a browser user agent. Read through the web-extraction tool and inspected before its directions were written: the instruction to make your own list of goals, put the most important first, decide how many years you have for each, and its five-row goal-and-date table. The reading note discloses the 403 explicitly and also discloses that the page was last modified in 2007 and that its outbound links are dated and should not be relied on, directing the reader to Investor.gov for current tools. This is the same pattern the published 31–40 and 41–50 packs disclosed for sec.gov URLs.

Claims made about the two host families named in the brief, reported as found rather than as expected:

- `sec.gov` **did** return 403 to a plain scripted request (`curl` without a browser user agent) and to a browser user agent. It was read via extraction and is disclosed in its reading note.
- `consumerfinance.gov` and `files.consumerfinance.gov` **did not** return 403 in this environment, with either a plain `curl/8.6.0` user agent or a browser user agent — nine URLs on those hosts all returned 200. They are therefore reported as verified HTTP 200, and no block is disclosed for them, because disclosing a block that did not occur would be a false caveat. If a future pipeline's checker reports 403 on those hosts, that would be a change in behaviour, not something this pack observed.

Also re-checked and NOT cited (reported so the parent does not re-discover them):

- 404: `https://consumer.ftc.gov/articles/credit-scores-and-credit-reports`, `https://consumer.ftc.gov/articles/how-avoid-scams-debt-relief`, `https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2025`, `https://www.investor.gov/introduction-investing/investing-basics/set-financial-goals`, `https://www.irs.gov/newsroom/tax-withholding-estimator`, `https://www.irs.gov/individuals/employees-withholding-compliance`, `https://www.finra.org/investors/insights/compound-interest`.
- 403 to automated requests and not cited: `https://www.bls.gov/cpi/`, `https://www.ssa.gov/oact/cola/colaseries.html`, `https://www.dol.gov/agencies/whd/flsa`.
- 505 and superseded: `https://www.treasurydirect.gov/indiv/products/prod_tips_glance.htm` (the live path cited instead is `treasurydirect.gov/marketable-securities/tips/`).
- **Two CFPB Ask-CFPB URLs resolved with HTTP 200 but served content that did not match their slugs** — `.../ask-cfpb/what-factors-affect-my-credit-scores-en-319/` now renders a mortgage-score question and `.../ask-cfpb/what-is-compound-interest-en-1953/` now renders a mortgage-insurance question. Both were **rejected** rather than cited, and the pattern is worth recording: on this host a 200 does not prove that a slug still points to the topic named in the URL. The pages that were cited were read and confirmed to contain the content the reading notes describe.

Content actually inspected before writing directions (not merely resolved): the FINRA annualized-return worked example including the 25.7% three-year total, the 7.792% annualized figure and the 8.57% simple average it labels inflated; the Investor.gov tools index (compound interest and savings goal calculators); the Federal Reserve SHED *Savings and Investments* chapter headings including *Emergency Savings and Unexpected Expenses*, *Retirement Savings and Investments* and Table 30; the Bureau's emergency-fund guide sections on what the fund is, why it matters, how much depends on your situation, how to build it and when to use it, including the warning that using credit can make a one-time expense grow larger; the 2020 evidence-based savings review's three categories (savings products, financial incentives, behavioural approaches) and its date; the Bureau's debt action plan tool with its two-column strategy comparison, its pros and cons, and its statement that one strategy is not better than the other; the Bureau's credit-score guidance (on-time payments as the number one factor, the 30-percent utilisation advice attributed to experts, the statement that you do not need to carry a balance, the warning that concentrating balances can hurt, and the secured-card tip); the FTC credit-scores page (300–850, FICO, adverse-action rights, the statutory free-report site); the Bureau's credit hub (the statement that no company can legally remove accurate negative information); the FTC debt-and-credit scam alert index; the Bureau's rent-or-buy article listing the costs mortgage calculators may omit and warning that calculator assumptions about price growth have a big impact; IRS Publications 936 and 523 at contents level (secured-debt and qualified-home headings, points, Part II limits; and the sale-gain exclusion eligibility steps); the Fed's 2-percent FAQ answer and its related-inflation link; IRS Topic 751 in full (6.2% and 1.45% employee rates, the 0.9% additional Medicare tax above $200,000 withheld without regard to filing status, only Social Security having a wage base, and the published base figure for the year); the Tax Withholding Estimator page (inputs, the roughly twenty-five-minute estimate, and the pre-filled Form W-4 output); Publication 15-T at contents level (Worksheet 1A and the percentage-method tables, and the Form W-4 step fields); IRS *Traditional and Roth IRAs* (who may contribute, deductibility, the combined limit, the deadline, withdrawals, required minimum distributions and the pointers to Publications 590-A and 590-B); IRS *401(k) plans* (deferrals excluded except designated Roth deferrals, employer contributions, distributions taxable at retirement except qualified Roth distributions); IRS *IRA contribution limits* (the tax on excess contributions and the excess's income); TreasuryDirect TIPS (adjusted principal, fixed rate on the adjusted principal, the never-less-than-0.125% rate, the statement that auction rules allow negative real yields, and the TIPS-at-a-Glance table); the IRS inflation-adjustment release (more than sixty provisions, the standard deduction table by filing status and the marginal rate thresholds); Investor.gov *Define Your Goals* and *Invest For Your Goals* (the goal list, the years-to-goal instruction, and the six planning questions); and the SEC Roadmap goals page through extraction.

No quotation is attributed to a source that was not retrieved, and no paraphrase is presented as a quotation. Every rate, return, fee, threshold, payout, tax figure and price is either stated in the lesson as a hypothetical assumption with its own assumption list, or attributed to the named public source and flagged as statutory, indexed and subject to change.

## Arithmetic checks (all computed in code, never mentally)

Python computed every number; the lesson text carries the rounded rendering. Key checks:

| Check | Computed |
|---|---|
| 51: $10,000 at assumed 7% annual compounding, 10/20/30/40 years | 19,671.51 / 38,696.84 / 76,122.55 / 149,744.58 |
| 51: additive expectation 7% × 40 years on $10,000 | 38,000; shortfall against compounding 111,744.58 |
| 51: share of the 30-year gain arriving in years 20–30 | 56.6% ($37,425.71 of $66,122.55) |
| 51: rule of 72 vs exact doubling, 7% and 3% | 10.29 vs 10.245; 24.0 vs 23.45 years |
| 51: $500/month end-of-month vs $6,000/year for 30 years at 6% | 502,257.52 vs 474,349.12; gap 27,908.40 |
| 51: beginning-of-month variant; $100/month for 30 and 40 years at 6% | 504,768.81; 100,451.50 and 199,149.07 |
| 51: $200/month 30 years at 5% and 6% | 166,451.73 vs 200,903.01; gap 34,451.28 |
| 52: monthly contribution for $500,000 in 25 years at 5% and 7% | 839.62 vs 617.23 |
| 52: same goal at 5% over 20 and 30 years | 1,216.45 and 600.77 |
| 52: $500 / $750 / $1,000 a month for 25 years at 5% | 297,754.85 / 446,632.28 / 595,509.71 |
| 52: return required for $500 a month to match the $1,000 outcome | 9.36% a year |
| 53: essentials list 1,600+180+520+320+150+260+600 | 3,630 a month; 3,630 / 10,890 / 14,520 / 21,780 over 1/3/4/6 months |
| 53: six months of $5,000 gross income vs six months of essentials | 30,000 vs 21,780; gap 8,220 |
| 53: repair reserve 1,200+900+1,500; 3 months plus one episode | 3,600 a year; 14,490 |
| 53: months to reach 10,890 at 500 / 750 / 1,000 a month | 21.8 / 14.5 / 10.9 |
| 53: opportunity cost of 60% of the fund at a 2-point gap | 130.68 a year |
| 54: S1 (900 at 9%, 3,200 at 24%, 12,000 at 7%), $300 extra | rate order 35 payments / 1,915.97; balance order 36 / 2,038.29 |
| 54: S2 (1,500 at 6%, 4,000 at 26%, 9,000 at 12%), $300 extra | rate order 30 payments / 2,361.57; balance order 32 / 2,805.37; gap 443.80 |
| 54: same three debts with only $150 extra | both orders 52 payments, 2,844.56 |
| 54: aligned case (smallest is also highest rate), $300 extra | both orders 36 payments, 1,944.44 |
| 54: prepaying a 24% card vs an assumed 5% investment on 5,000 | 1,200 vs 250; 30.77% pre-tax return needed to match at a 22% tax rate |
| 54: $12,000 moved from 24% to 9% with a 3% fee | monthly interest 240 vs 90; fee 360 recovered in ~2.4 months |
| 55: utilisation 1,800/6,000; 3,000/6,000; 4,000/20,000; closing a 5,000-limit card | 30.0% / 50.0% / 20.0% / 26.7% |
| 55: $300,000 30-year mortgage at 6.5% vs 6.0% | 1,896.20 vs 1,798.65 a month; 382,633.47 vs 347,514.57 total; gap 35,118.90 |
| 55: $25,000 20-year loan at 7.25% vs 6.875% | 5.64 a month |
| 55: carrying 1,500 at an assumed 22% | 27.50 a month, 330 a year |
| 56: $400,000 price, 20% down, $320,000 at 6.5% for 30 years | P&I 2,022.62; all-in 2,905.95 against rent 2,000 |
| 56: year-1 split | payments 24,271.41; interest 20,694.69; principal 3,576.72; other costs 10,600; total 34,871.41 |
| 56: 10-year base case (3% appreciation, 3% rent growth, 5% renter return, 6% selling cost) | home 537,566.55; balance 271,283.60; owner equity 234,028.95; renter portfolio 231,273.51; margin 2,755.44 |
| 56: sensitivity — 1% appreciation / 10% selling cost / renter at 7% / rent growth 5% | 144,054.31, −87,219.20 / 212,526.29, −18,747.22 / 273,572.20, −39,543.25 / +33,898.87 |
| 56: horizon sweep | year 2 −24,184.40; year 5 −19,962.87; year 8 −9,060.16; year 10 +2,755.44; year 15 +52,696.20; year 20 +141,512.19; year 30 +504,642.75 |
| 56: selling cost at 10 years; dead-heat first-year rent | 32,253.99; 1,984.33 |
| 57: $60,000 spending in 25 years at 1.5% / 2.5% / 4% | 87,056.72 / 111,236.65 / 159,950.18 |
| 57: $60,000 at 2.5% for 5/10/20/30/40 years | 67,884.49 / 76,805.07 / 98,316.99 / 125,854.05 / 161,103.83 |
| 57: real return from 6% nominal at 2.5% and 4% inflation; 2% nominal at 2.5% | 3.4146% / 1.9231% / −0.4878% |
| 57: nominal needed for a 4% real return at 2.5% and 4% inflation | 6.6% and 8.16% |
| 57: $1,000,000 nominal, deflated at 2.5% over 10/20/30 years | 781,198.40 / 610,270.94 / 476,742.69 |
| 57: $2,000 a month fixed, real value after 20 and 25 years at 2.5% | 1,220.54 / 1,078.78 |
| 57: 3% nominal taxed at 22% with 3% inflation | after-tax 2.34%; real −0.6408%; −1,281.55 a year on 200,000 |
| 57: monthly for $900,000 real in 25 years at 3.5% / 2% / 5% real | 1,880.61 / 2,314.69 / 1,511.31 |
| 57: $600,000 real expressed nominally at 2.5% and 4% | 1,112,366.46 / 1,599,501.80 |
| 58: $5,000 monthly gross — Social Security, Medicare, FICA | 310.00, 72.50, 382.50 |
| 58: illustrated annualised federal income tax on $60,000 (TY2026 single figures) | 5,020.00 a year, 418.33 a month; net 4,199.17; net 83.98% of gross |
| 58: average federal tax on gross vs marginal rate | 8.37% vs 12% |
| 58: payroll tax at salaries of 60,000 / 184,500 / 200,000 / 250,000 | 4,590 / 14,114.25 / 14,339 / 15,514 |
| 58: 6% and 10% deferrals on $5,000 a month | 36.00 and 60.00 of illustrated income tax saved a month; FICA unchanged at 382.50 |
| 59: $7,000 a year for 30 years at 6% | 553,407.30 gross; 486,998.43 at 12%; 431,657.70 at 22%; 376,316.97 at 32% |
| 59: Roth equivalent at a 22% contribution rate | 5,460 a year grows to 431,657.70 — identical to the tax-deferred result at 22% |
| 59: container costs 0.05% / 1.05% / 2.05% | 548,561.04 / 461,098.45 / 389,331.56; costs 4,846.27 / 92,308.85 / 164,075.74 |
| 59: 1-point and 2-point drags on the same stream | 88,335.37 and 160,812.74 |
| 59: assumed $1,800 a year employer match, 30 years at 6% | 142,304.74 |
| 59: $20,000 early withdrawal at 22% plus a 10% additional tax | 4,400 + 2,000 = 6,400 |
| 59: Roth alternative at a 12% contribution rate against a 32% withdrawal rate | 486,998.43 vs 376,316.97; gap 110,681.46 |
| 60: $600,000 real in 25 years with $40,000 existing | 40,000 grows to 94,529.80; shortfall 505,470.20; monthly 1,056.21 / 1,300.01 / 848.80 at 3.5% / 2% / 5% real |
| 60: five-year review | at 3.5% real, balance 116,653.42 and remaining requirement 1,053.22; at 2% real, balance 110,754.48 and requirement 1,087.43 (gap 34.21) |
| 60: goal in nominal units and the nominal-return cases | 1,112,366.46 at 2.5% inflation; 1,580.61 a month at 6.1% nominal and 2,163.59 at 4.0% nominal |
| 60: falsification case (6% nominal, 4% inflation ⇒ 1.9231% real) | required contribution about 1,392.53 a month, a 32% increase |
| level questions | $600 a month for 25 years at 5% = 357,305.83, gap 142,694.17, required return 7.18%; $10,890 / $240 = 45.4 months; $3,200 / $130.68 ≈ 24.5 years; $600 is 12.0% of gross and 14.29% of net |

Method notes: the lesson-54 simulations apply monthly interest at one twelfth of the stated annual rate, pay level minimums, direct the extra payment to one target, roll a cleared payment to the next debt, and assume no new charges, no fees and no rate changes. The lesson-56 model gives both paths the same $80,000 of starting capital, holds the mortgage payment, taxes, insurance and maintenance flat in nominal terms, grows rent and the home price at the stated rates, charges the stated selling cost at exit, and invests the monthly difference (positive or negative) at the stated rate. The lesson-58 income-tax figure uses the published single standard deduction and bracket thresholds for the stated tax year and annualises them, which is an illustration of the mechanism and is **not** the employer's percentage-method calculation under Publication 15-T. Every one of these limitations is stated inside the lesson that uses the model.

## Invariants exercised

1. **Structural validation in Python**, replicating `src/lib/course-pack.ts` field by field: JSON parses; subject is `finance`; one level, two units, five lessons per unit; ten unique lesson IDs equal to 51–60 matching `/^\d{2,}$/`; all seven required lesson text fields non-empty; all six `depth` keys non-empty; 600-word floor met with a minimum of 1,388 and a total of 15,905; every reading has a non-empty title and note and an `https://` URL with no embedded credentials; every visual has a title, a description and at least three non-empty steps; five questions per unit; twelve level questions, more than any unit quiz; all 22 question IDs unique and namespaced `uq-51-60-a … -j` and `lq-51-60-a … -l`; every `reviewLessonIds` entry resolves to a lesson ID in the range 01–60; no `russianItems`; no lesson `answer` equal to its `distractor`; no duplicate answer, distractor or prompt across the 22 assessments; no assessment prompt copied from a lesson retrieval prompt; **zero non-ASCII characters** in any field.
2. **The repository's real adapter and validator.** `tsx` is not installed, so `scripts/validate-packs.ts` was bundled with the repository's own `rolldown` into a single ESM file held in the scratch directory (no repository file was created) and executed with `node`. Result: all 41 registered packs report `valid`, the whole published set attaches in one call (`41 packs, 11 programs, 72 levels, 720 lessons`), and the published finance packs read `finance` min 699 / total 7,170, `finance-31-40` min 976 / total 10,440, `finance-41-50` min 1,141 / total 12,460 — unchanged.
3. **A second bundle** imported `basePrograms` from `src/lib/programs.ts` and `attachCoursePacks` from `src/lib/course-pack.ts`, attached the three published finance packs plus this one, and reported: `attachCoursePacks` returned without exception; finance carries 6 levels; the appended level exposes 2 units of 5 lessons with 5 questions each and 12 assessment questions; lesson IDs 51–60 appended; the finance program now holds **60** lesson IDs with no duplicates; and all **88** question IDs across the four finance packs (22 + 22 + 22 + 22) are unique, proving no ID collision with published assessments.

These are data-contract and attachment checks. They are not application integration, rendering, accessibility, audio, or deployment tests.

## Honesty, accuracy, and scope boundaries honoured in the content

- **Education, not advice.** No lesson recommends a security, fund, account, allocation, contribution amount, insurance product, container, payoff strategy, tenure decision or tax position for an identifiable person. Lesson 53 states that the reserve's size is a matter of judgement with a stated reason; lesson 54 states that the choice of payoff order is decided by an objective the reader names; lesson 56 states that the output is a table of assumptions and its sensitivity rather than a verdict; lesson 60 states explicitly that a plan ending in a product recommendation has stopped being a plan.
- **No guaranteed returns.** Every projection is labelled as conditional on an assumed rate. The rule of 72 is quantified against the exact calculation. Arithmetic averages are separated from the compound rates that accrue, and every return is presented in lesson 60 as a range whose low end is computed.
- **Assumptions stated.** Each worked example declares the rate, the compounding convention, the horizon, the payment timing, the contribution amount, the fee, tax and inflation treatment, usually with an explicit exclusion list, and several state that the numbers are hypothetical illustrations of mechanism rather than quotations of the market.
- **Nominal distinguished from real.** Lessons 52, 56, 57 and 60 keep nominal and real figures separate, 57 makes the unit distinction its central mechanism, and 60 requires the goal to declare its unit.
- **Jurisdiction and change flagged.** Every statutory figure is attributed to the page it came from and flagged as set by statute, adjusted on a schedule and changeable: lesson 57 for indexed tax parameters and the annual republication, lesson 58 for payroll taxes, wage bases, thresholds, brackets and the existence of state and local systems, lesson 59 for contribution limits, required-distribution ages and early-distribution exceptions, lesson 55 for the reporting, dispute and free-report framework, and lesson 56 for the conditional and jurisdiction-specific treatment of mortgage interest and the gain on a sale. The IRS publications cited are identified as annual publications to be read in their current edition.
- **Recency of sources disclosed.** The 2020 emergency-savings review is identified in the lesson and its reading note as a July 2020 synthesis; the Federal Reserve SHED chapter is described as self-reported survey evidence rather than measured account data; the SEC roadmap page is disclosed as modified in 2007 with dated links; the Federal Reserve inflation FAQ is described as a policy aim rather than a guarantee.
- **No invented quotation.** Nothing is quoted from a source that was not retrieved, and no paraphrase is presented as a quotation.
- **No products or current market rates.** No live yield, fee, payout rate, price or market return is asserted as a fact about the market. Every rate in the pack is a labelled illustration; the statutory rates and thresholds that do appear are attributed to the public page that publishes them, with the year and the instruction to re-read the current edition.
- **The single 403 is disclosed at the point of use**, inside the reading note for the SEC roadmap page, together with the extraction method used and the age of the page.

## Unresolved limitations

- **Parent verification still required.** Rendered layout, the text-sequence visuals as displayed, reading links as they appear, assessment wiring, accessible narration, and production behaviour were not tested here by design (no server, no browser automation, no deployment).
- **Word counts are above the previous two finance continuations.** 15,905 words for ten lessons (1,388–1,693 each) against 12,460 for the published 41–50 level (1,141–1,317 each) and 10,440 for 31–40. The additional length carries the sensitivity tables in 56 and 60, the payslip decomposition in 58, and the container comparison in 59. If the parent enforces a house style nearer 1,100 words, `depth.application` and `depth.summary` are the compressible fields and no worked arithmetic would need to be removed. Within the current wave, other workers' packs range up to 25,448 words, so this is inside the observed distribution.
- **One source returns HTTP 403 to automated requests** (sec.gov). It was read through a web-extraction tool and the block is disclosed inside its own reading note, but automated link-checking in the parent's pipeline will report that URL as a failure. It is a canonical regulator publication, not a dead link.
- **consumerfinance.gov did not block in this environment.** The brief warned that it returns 403 to plain scripted requests; in this environment nine of its URLs returned 200 to both a plain and a browser user agent. The pack therefore claims 200 for those, which means the parent's checker and my reading note agree — but if the parent's pipeline sees 403 on those hosts, the reading notes will need the same disclosure added. This is reported rather than silently pre-disclosed.
- **CFPB Ask-CFPB slugs have drifted.** Two apparently canonical slugs now serve unrelated content while returning 200 (see the source section). Anyone re-verifying citations by status code alone will be misled; the two cited CFPB question pages were read and matched.
- **No independent subject-matter review.** The financial content has not been reviewed by a licensed adviser, a tax professional, an actuary or a mortgage lender. Lesson 58's income-tax illustration is deliberately simplified and is not a withholding calculation; lesson 56's tenure model is a model, not an appraisal; lesson 54's payoff simulations are arithmetic under stated assumptions, not a repayment plan for any real set of contracts.
- **Every model is a model.** Constant returns, level contributions, fixed-rate debt with no new charges, no fees unless stated, no taxes unless stated, monthly or annual compounding as stated, and no behaviour change during the horizon except where the lesson quantifies it.
- **Forward-dated source material.** Two cited sources carry dates later than the conversation's start date (the Federal Reserve's 2026 SHED release and the IRS 2026 inflation-adjustment release). They were retrieved live and their content matches how they are described, but the parent should be aware that no historical archive of these URLs was consulted and earlier editions will differ.
- **The quizzes remain binary retrieval checks.** They are not evidence of professional competence, and the lessons do not present them as such.
