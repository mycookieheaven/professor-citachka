# Isolated authored course packs

This is a bounded release batch toward 100 substantive units per course, NOT fulfillment of that target. Each worker owns ONLY `src/lib/course-packs/<subject>.json` and `research/expansion/<subject>.md`. Do not edit shared components, catalogs, existing data, dependencies, audit outputs, or other workers' files. Do not deploy. Do not run a server or browser automation. Source edits/nonhosting checks are permitted; hosting and delivery are Vercel-only. Preserve existing IDs and progress. Parent owns integration and production verification.

Read teaching-and-tutoring (including learner-context), grounded-citations and the current subject source before authoring. Author one NEW coherent level, TWO substantive units, FIVE lessons per unit. Continue existing prerequisites rather than repeat beginner introductions. Use unique stable lesson IDs starting after the subject's current maximum ID (Russian existing 01–30, Funding 01–50, Philosophy 01–60, other subjects 01–20). Do not call these 100 units. Save completed unit work incrementally into the final JSON so interrupted progress survives. No placeholder lessons.

JSON contract (valid JSON, not TypeScript):
{
 "subject": "subject-slug",
 "levels": [{
  "title": "Meaningful authored level title",
  "units": [{
   "title": "Meaningful authored unit title",
   "lessons": [{
    "id": "31",
    "title": "Specific concept or skill",
    "explanation": "Plain-language core explanation.",
    "example": "Detailed worked example with explicit reasoning.",
    "question": "Optional retrieval prompt?",
    "answer": "Correct answer",
    "distractor": "Plausible but incorrect answer",
    "correction": "Why the answer is right and misconception wrong.",
    "depth": {
      "definitions": "Define terms and prerequisites.",
      "mechanism": "Substantial how/why reasoning, limitations, source-aware distinctions.",
      "secondExample": "A contrasting worked application, not a renamed first example.",
      "mistake": "Specific misconception and diagnostic correction.",
      "application": "Nonblocking task plus explicit model response/self-review rubric.",
      "summary": "Conceptual synthesis and transfer."
    },
    "readings": [{"title":"Real source title/section", "url":"https://verified-authoritative-url", "note":"What to read and how it supports the lesson; accurate access caveat if necessary."}],
    "visual": {"title":"Specific visual reasoning sequence", "description":"Accessible description of this lesson's concept", "steps":["First labeled relationship or step", "Second", "Third"]},
    "russianItems": [{"text":"Only for Russian: new Cyrillic item", "latin":"Stressed easy pronunciation", "meaning":"English gloss"}]
   }],
   "questions": [{"id":"uq-31-a", "prompt":"New scenario question, not a copied optional lesson prompt", "answer":"Correct answer", "distractor":"Plausible incorrect answer", "correction":"Specific reasoning and feedback", "reviewLessonIds":["31"]}]
  }],
  "questions": [{"id":"lq-31-a", "prompt":"Cumulative application spanning skills", "answer":"Correct answer", "distractor":"Plausible incorrect answer", "correction":"Worked reasoning", "reviewLessonIds":["31","36"]}]
 }]
}

Each unit needs five questions; the level needs TWELVE separately authored cumulative questions (longer than a unit quiz). Reference only valid reviewLessonIds in this pack or the preexisting course. Use unique question IDs. All answers/distractors distinct. Do NOT mark these binary-choice quizzes as proof of professional competence. Include substantial application tasks/rubrics in lessons as well.

Each lesson should have at least 600 words of meaningful instruction across explanation, example and the SIX depth fields combined. This is a floor against thinness, not a license to pad. Explain plainly, add academic substance, evidence limits, primary/authoritative readings, comparison and transfer. Do not repeat a boilerplate mechanism across topics. For numerical examples calculate with a tool and record checks in your handoff. At least one verified source per lesson; reuse a valid multi-section authoritative reading when genuinely applicable, but give section-specific reading directions and do not fabricate quotes. Verify actual URLs through HTTP or web tools. No browser automation.

Visual steps will be rendered as labeled instructional diagrams/step sequences; these are NOT videos. Do not invent video URLs or claim playback. Russian: each newly introduced Cyrillic word/phrase must be adjacent to stressed Latin pronunciation and English gloss in prose, AND present in russianItems for item-level Slow/Natural audio. No Russian items key for other subjects. Use a consistent accessible transliteration; Spanish comparisons when helpful. No public learner medical/private details.

Health/veterinary/psychiatry/skincare: education not diagnosis/treatment, clinical reasoning grounded in sources, avoid deterministic neurotransmitter claims and prescribing. Funding/finance: factor not APR, net proceeds vs gross, timing assumptions, reconciliation, jurisdiction, truthful selling, no fraud/coercion/guarantees. Theology: identify Catholic doctrinal commitments vs interpretation. Literature: genuine bounded reading, public-domain original texts, do not invent quotations. Music: practical physical steps, safe setup, MIDI vs audio, no autoplay.

Handoff: exact paths, actual counts, list of topics, total instructional words computed in code, source verification results, arithmetic checks, unresolved limitations. JSON parse + invariants should be exercised; parent runs application TDD/integration. Do not modify tests to falsely claim all curricula complete.
