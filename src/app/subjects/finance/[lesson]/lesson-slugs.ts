/**
 * The addresses of the finance lessons.
 *
 * These live apart from the lesson copy for one reason: the copy sits in a
 * `"use client"` module, and a static build has to know every address before any
 * browser code is involved. A test holds this list and the lessons themselves to
 * the same slugs, so the two cannot drift apart without the build saying so.
 */
export const FINANCE_LESSON_SLUGS = [
  "cash-flow-basics",
  "debt-interest-and-risk",
  "investing-fundamentals",
  "markets-and-valuation",
  "independent-financial-judgment",
] as const;
