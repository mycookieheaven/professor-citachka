# Professor Citachka

A personal, accessible learning platform — a private university covering eleven
subjects, built for sustained daily study rather than casual browsing.

**Live site:** https://professor-citachka.vercel.app

## What it is

Professor Citachka is a structured curriculum platform. Each subject is organised
into levels, levels into units, and units into individually authored lessons with
reading passages, worked examples, guided practice, pronunciation or vocabulary
work where relevant, and an application task. Units close with a quiz; levels
close with a cumulative exam.

Current scope:

| Measure | Count |
|---|---:|
| Subjects | 11 |
| Authored lessons | 420 |
| Published core units | 82 of a planned 1,100 |
| Unit quizzes | 84 |
| Cumulative level tests | 42 |

Subjects: Russian, business funding and sales, philosophy, neuroscience,
psychiatry, veterinary science, Catholic theology, finance, literature, music,
and skincare.

## How the content is organised

Course content lives in typed pack files under `src/lib/course-packs/`. A pack
declares its subject, level, units, lessons, pronunciation or vocabulary items,
cited readings, and assessment banks.

Critically, packs are published through an **explicit registry**
(`src/lib/course-pack-registry.ts`) rather than being glob-loaded. A pack that is
not imported there is not published. This means unreviewed or incomplete author
output can never leak onto the site.

`scripts/validate-packs.ts` checks every registered pack against the pre-pack
catalog for duplicate lesson IDs, structural completeness, instructional word
floor, and source attribution.

## Accessibility

The interface is built around large, high-contrast type and short, bounded
sections, with keyboard and touch support, reduced-motion handling, a reading
focus mode, and an optional silent study timer. There are no compulsory quiz
gates on reading: assessment is available without blocking progress.

## Tech stack

Next.js (App Router) and TypeScript, with Vitest for tests. Content is served
statically where possible.

## Development

```bash
npm install
npm run lint
npx tsc --noEmit
npx vitest run
npm run build
```

Content integrity checks:

```bash
npx tsx scripts/validate-packs.ts
python3 scripts/verify-source-urls.py
```

Production deploys run through Vercel. This repository is connected to the
`professor-citachka` Vercel project, so a push to `main` deploys to production.

## Disclaimer

All material here is educational. It is not individualized medical, legal,
financial, or veterinary advice, and it is not a substitute for consulting a
qualified professional about your own circumstances.
