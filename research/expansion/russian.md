# Russian expansion: authored pack handoff

## Delivered scope

- Pack: `src/lib/course-packs/russian.json`.
- Handoff: `research/expansion/russian.md`.
- One new level: **From useful phrases to connected accounts**.
- Two authored units; five lessons each; stable new IDs **31–40**.
- Five separately authored unit questions per unit and twelve cumulative level questions: **22 assessment questions**. Ten additional optional lesson prompts are nonblocking.
- **8,061 instructional words**, measured by whitespace splitting explanation, example, and all six depth fields, including adjacent pronunciation/glosses. Every lesson exceeds 600 words.
- **40 lesson-scoped Russian item entries**, **36 distinct Cyrillic strings**. Repeated items intentionally remain local to each lesson for pronunciation controls.
- Ten instructional visual sequences. These are diagrams, not videos.
- This is an incremental two-unit delivery toward the eventual 100-unit course target, not completion of that target.

## Prerequisites and progression

Read `src/lib/russian-program.ts` before authoring: its existing 30 lessons introduce alphabet samples, greetings, name/identity patterns, possession, requests, feminine past, imperfective future, directed homeward motion, reasons, register recognition, and a non-obscene boundary. No existing content, IDs, or progress was changed. The new level develops productive construction choice instead of restarting the alphabet or extending the insult inventory. It revisits prior possession, past, future, and motion phrases to explain their grammar and contrasts, not merely repeat phrase lists.

Unit one develops subject/object distinctions, location versus destination, absence, recipients, and implements/companions. Unit two develops directed versus repeated walking, subject-controlled past agreement, activity versus bounded event, future constructions, and a cumulative short account. Terminology follows plain-language functions. Spanish comparisons are limited and explicitly not one-to-one aspect translations.

## Lesson inventory and measured depth

| ID | Topic | Instructional words | Item entries |
|---|---|---:|---:|
| 31 | Track the actor and the object | 901 | 3 |
| 32 | Separate location from destination | 793 | 4 |
| 33 | Express missing resources with the genitive | 816 | 4 |
| 34 | Give an object to a recipient | 797 | 4 |
| 35 | Use a tool and name a companion | 807 | 4 |
| 36 | One journey or a repeated walking routine | 805 | 4 |
| 37 | Past agreement follows the subject | 799 | 5 |
| 38 | Activity versus a bounded reading event | 768 | 4 |
| 39 | Future activity and future result | 778 | 4 |
| 40 | Connect events without inventing results | 797 | 4 |

## Executed validation

Python parsed the final on-disk JSON and asserted:

- Exact subject, one level, two units, five lessons per unit, ordered IDs 31–40.
- Five unit questions each; twelve level questions; unique question IDs and valid review references.
- Answer/distractor distinction for every assessment and lesson prompt.
- Exactly six required depth fields, minimum word floor, readings, and at least three visual steps per lesson.
- Every Cyrillic span in instructional prose and prompts/answers/feedback/visual steps is consumed by an exact `text (latin) — meaning` match with a local `russianItems` entry. No unsupported Cyrillic spans remain.
- Inline source numbers in lesson prose have matching numbered reading entries in the same lesson.
- All **11 distinct published reading URLs** returned HTTP 200, HTML content, and unchanged final URLs in final validation. Pages were read, not merely checked for status.

No arithmetic teaching examples occur. Numerical checks are the code-computed lesson, question, item, word, and source counts above. JSON writes and edits passed tool JSON lint. Unit one was saved to the final JSON before unit two was appended.

## Sources and accuracy notes

The core source is Cornell University's *Beginning Russian Grammar* by R. L. Leed, A. D. Nakhimovsky, and A. S. Nakhimovsky.

Its distinction between case function and form grounds the first unit.[1]

The singular a-declension section supports the book's accusative ending.[2]

The location/destination section distinguishes prepositional location from accusative goal.[3]

The negative-existence section supplies the impersonal absence pattern.[4]

The dative section identifies giving and writing as recipient/addressee constructions and warns against exact English correspondence.[5]

The past-tense section supports subject-controlled gender and number agreement and identifies irregularity limits.[9]

The aspect explanation explicitly cautions that endpoint language is not a complete rule; the pack therefore avoids equating imperfective with unfinished or all perfective verbs with finishing an object.[7]

Both walking patterns are explicitly imperfective.[8]

The tense table grounds the future contrast; the pack distinguishes projecting a bounded event from guaranteeing its real-world occurrence.[10]

Accompaniment is corroborated separately from bare instrumental means.[6][12]

Some source stress characters are legacy glyphs. English explanations are legible; the pack uses its own ordinary Cyrillic and accessible approximate stress-marked Latin support rather than copying garbled glyphs. Scenarios, practice tasks, model responses, rubrics, diagrams, and assessments are original teaching material, not quotations. Latin support is not IPA and cannot capture all vowel reduction or consonant softness.

### HTTP verification

- HTTP 200: https://russian.cornell.edu/grammar/html/gr01_b_2_a.htm
- HTTP 200: https://russian.cornell.edu/grammar/html/gr01_b_2_c.htm
- HTTP 200: https://russian.cornell.edu/grammar/html/gr02_c_1.htm
- HTTP 200: https://russian.cornell.edu/grammar/html/gr03_a_2.htm
- HTTP 200: https://russian.cornell.edu/grammar/html/gr04_b_2_1.htm
- HTTP 200: https://russian.cornell.edu/grammar/html/gr04_d.htm
- HTTP 200: https://russian.cornell.edu/grammar/html/gr05_a_2_1.htm
- HTTP 200: https://russian.cornell.edu/grammar/html/gr05_c_2.htm
- HTTP 200: https://russian.cornell.edu/grammar/html/gr06_a_2_1.htm
- HTTP 200: https://russian.cornell.edu/grammar/html/gr06_a_2_2.htm
- HTTP 200: https://russian.cornell.edu/grammar/html/le57_62_a.htm

## Integration boundaries and remaining work

No shared code, existing course data, tests, dependencies, browser automation, server, GitHub operation, or deployment was changed/run. Parent owns application integration and production verification.

The content contract is verified; actual rendered Slow/Natural controls, accessible names, voice availability, interruption behavior, lesson narration, progress persistence, and next-step routing remain unverified here. With two controls per local item the expected aggregate is 80 item-control instances across these ten lessons; this is an integration expectation, not a claimed observed UI count. Test every lesson, including repeated phrases. No recorded audio or video was created or claimed.

Binary-choice questions sample bounded distinctions and do not certify fluency. Optional production tasks and the final multi-criterion rubric provide richer evidence while remaining nonblocking. Learner reading completion must remain distinct from mastery.

Tool issue: long composition intervals reset the execution kernel unexpectedly; calls that relied on its variables failed before writing. Authoring was resumed with self-contained calls loading the saved JSON. A missing optional HTML parser was avoided using stdlib text extraction. Final JSON and content validation completed successfully and no placeholder lessons remain. Optional Git status/diff checks were unavailable because this workspace is not a Git repository; no Git cleanliness claim is made.

## Sources

[1] https://russian.cornell.edu/grammar/html/gr01_b_2_a.htm
[2] https://russian.cornell.edu/grammar/html/gr01_b_2_c.htm
[3] https://russian.cornell.edu/grammar/html/gr03_a_2.htm
[4] https://russian.cornell.edu/grammar/html/gr04_b_2_1.htm
[5] https://russian.cornell.edu/grammar/html/gr05_a_2_1.htm
[6] https://russian.cornell.edu/grammar/html/gr06_a_2_1.htm
[7] https://russian.cornell.edu/grammar/html/gr04_d.htm
[8] https://russian.cornell.edu/grammar/html/le57_62_a.htm
[9] https://russian.cornell.edu/grammar/html/gr02_c_1.htm
[10] https://russian.cornell.edu/grammar/html/gr05_c_2.htm
[12] https://russian.cornell.edu/grammar/html/gr06_a_2_2.htm