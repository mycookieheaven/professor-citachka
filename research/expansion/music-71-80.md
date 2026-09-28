# Music — level for lesson IDs 71–80 (staged authoring handoff)

**Status:** authored, validated against the repository's real `attachCoursePacks`, staged. NOT registered, NOT published, NOT deployed.

## 1. Files written (exactly two)

| Path | Size | Content |
| --- | --- | --- |
| `src/lib/course-packs/staged/music-71-80.json` | 197,712 bytes | The authored course pack: `{"subject":"music","levels":[ one level, 2 units, 10 lessons (ids "71"–"80"), 5 + 5 unit questions, 12 cumulative level questions ]}` |
| `research/expansion/music-71-80.md` | this note | Handoff record |

Nothing else in the repository was created, edited or deleted by this task. `git status --porcelain` shows my new pack inside the pre-existing untracked `src/lib/course-packs/staged/` directory (which also holds seven other workers' concurrently written packs — `business-funding-101-110.json`, `finance-61-70.json`, `literature-61-70.json`, `neuroscience-71-80.json`, `russian-91-100.json`, `skincare-61-70.json`, `veterinary-science-71-80.json` — none of which I opened, read, edited or removed). The registry, `course-pack.ts`, `programs.ts`, `music-program.ts`, every published music pack, every test file, shared components, dependencies and audit outputs were not touched. No dev server was started, nothing was deployed, and no browser automation was used; all URL checks were plain HTTP requests with a browser user agent.

## 2. What the level teaches

**Level title:** *Keys that move and modes that colour: applied chords, cadences, modes, and a key change you can play, prove and deliver*

Continuation after lesson 70 (which ended on the three-takes capstone). Unit 1 is theory/analysis, unit 2 is applied production and physical technique, per the placement rule. Nothing repeats the introductions of lessons 21–70: the chart-symbol decomposition (61), form marking (46/47/62), ensemble timing (64), practice method (65), pentatonic vocabulary (66), phrasing (67), recording and editing (68–70), quantisation (38), voicing (57) and movable shapes (54) are treated as prerequisites and referenced rather than retaught.

**Unit 1 — "Analysing harmony that leaves the key: applied chords, tonicisation versus modulation, modes, and cadences that mark an ending"**

| ID | Lesson |
| --- | --- |
| 71 | Applied chords and secondary dominants: a dominant that points somewhere other than home |
| 72 | Tonicisation or modulation? Two tests that separate a visit from a move, and the pivot chord between keys |
| 73 | Diatonic modes: the same seven pitches around a different centre, and the one note that supplies the colour |
| 74 | Cadences: naming how a phrase ends, and why V-to-not-I is the more honest description |
| 75 | Analyse a whole section: phrase model, strong predominant, cadence, and a key you can defend |

**Unit 2 — "Putting the analysis into the hands and the project: applied chords on guitar and keyboard, modal colour, harmony as editable note data, and one proven key change"**

| ID | Lesson |
| --- | --- |
| 76 | Play a secondary dominant: the shape you already own, and two voices that move one semitone |
| 77 | Modal colour in the hands: one shape per mode, and the single fret or key that changes the sound |
| 78 | Program the harmony: note data is not sound, and the piano roll is where the analysis becomes editable |
| 79 | Put the key change in the project: a pivot on paper, a chord in your hands, a boundary in the Playlist |
| 80 | Capstone: two sections, one proven key change, a rendered file and an honest note |

**Unit 1 questions** `uq-71-80-a` … `uq-71-80-e` (applied-chord labelling with a perfect-fifth test; tonicisation versus modulation decided by cadence evidence; Dorian against D major; perfect versus imperfect versus deceptive cadence; phrase-model labelling with durations). **Unit 2 questions** `uq-71-80-f` … `uq-71-80-j` (guide-tone execution; the one-fret Dorian conversion plus the Dorian shuttle; note data versus recorded audio for edit/transpose/re-voice; boundary placement and pivot choice; practice and monitoring safety). See limitation 3 for the ID-namespacing decision.

**Level test** `lq-71-80-a` … `lq-71-80-l` (12 questions, each longer than a unit question and each spanning at least three lessons across the whole course).

## 3. Counts (measured, not estimated)

- 1 level, 2 units, **10 lessons** with ids exactly `"71"`–`"80"` (strings), in order.
- **10 unit questions** (5 per unit, exact), **12 cumulative level questions**.
- **31 readings**, numbered `[93]`–`[123]` continuing the course-wide sequence (previous maximum was `[92]`); no gaps, no duplicate numbers.
- **29 unique cited URLs**; **22 unique new question IDs**; 32 unique answer strings and 32 unique distractor strings across lessons and questions.
- **Instructional words** = `explanation` + `example` + the six `depth` fields, counted with the same expression the validator uses (`.split(/\s+/)`): 1773, 1848, 1800, 1911, 1825, 1836, 1896, 1943, 1938, 1993 → **total 18,763 words**, minimum **1773**, against a 600-word floor. The `question`/`answer`/`correction` fields are not counted here because the validator does not count them.
- All 10 lessons have a `visual` block with title, description and 5 labelled reasoning steps; all 10 have three or four readings; none has `russianItems` (music is not a Russian-keyed subject).

## 4. Validation actually run

The repository's real validator was executed, not re-implemented. A scratch harness (`~/.hermes/profiles/citachka-ai/cache/scratch/verify_music7180.mts`, held **outside** the repository) imported `attachCoursePacks` from `src/lib/course-pack.ts`, built the music base from the real `basePrograms` in `src/lib/programs.ts` (music ids `01`–`20`), then attached the five published music packs plus the staged pack in registry order, all in one call so that cross-pack lesson-ID and question-ID uniqueness was exercised. Run with `npx --no-install tsx`.

Result:

```
base source: real src/lib/programs.ts basePrograms (music)
music topic ids before attach: 01..20 (count 20)
attach: PASS
levels after attach: 8
new level topic ids: 71,72,73,74,75,76,77,78,79,80
unit definitions: unit1 [71..75 lessons=5 questions=5] | unit2 [76..80 lessons=5 questions=5]
level assessment questions: 12
instructional words per new lesson: 1773,1848,1800,1911,1825,1836,1896,1943,1938,1993
min words: 1773 total: 18763
new question ids: 22 unique: 22
all topic ids after attach: 80 ( 01 .. 80 )
every reviewLessonId resolves to a topic in the attached program: true
```

**Negative controls** (proving the harness really exercises the published checks rather than passing trivially) — three mutated copies of the staged pack were rejected by the same function:

```
negative control (duplicate answer)         rejected: music/uq-71-80-a ambiguous or incomplete question
negative control (non-https reading)        rejected: music/71 invalid reading
negative control (unknown review lesson)    rejected: music/lq-71-80-a unknown review lesson
```

Independently, a Python pass over the written file confirmed: both units have exactly 5 lessons and 5 questions, the level has 12 questions, lesson ids are `"71"`–`"80"` in order, question IDs match `uq-71-80-[a-j]` and `lq-71-80-[a-l]`, no duplicate question ID, every `reviewLessonIds` entry is in `21`–`80`, no answer equals any distractor and no two answers or two distractors collide, every JSON field required by the contract is present and non-empty, and the file re-parses.

## 5. Source verification (HTTP, browser user agent)

Every citation was fetched rather than assumed: `curl` with a browser user agent and follow-redirects, and every URL used in the pack was checked again after the file was written.

- **29 of 29 unique cited URLs returned HTTP 200. Zero dead links.**
- **12 Pressbooks URLs return HTTP 403 to a plain command-line request and HTTP 200 to a browser user agent** — verified both ways during authoring (`viva.pressbooks.pub/openmusictheory/...`, used for readings `[95] [96] [100] [101] [102] [104]–[108] [112]–[114] [119] [120]`). All 15 reading notes attached to those URLs disclose this caveat in prose so the parent can see it is a scripted-client block, not a broken source. They are **not** called dead.
- `musictheory.pugetsound.edu`, `image-line.com` and `iowaprotocols.medicine.uiowa.edu` returned 200 with and without a user agent; no caveat was needed.
- Claims drawn from sources are paraphrases with section-level direction, not quotations, with two exceptions where the source's own wording is short and load-bearing ("MIDI is not an audio format" from the FL Studio export page; "MIDI Out does not make any sound of its own" from the MIDI Out page). Every such sentence was checked against text fetched in this session; no quotation is reconstructed from memory.
- **No source was rejected after a check and no URL in the pack is unverified.**

## 6. Arithmetic checks (all computed in code this session)

Every numeric figure in the pack was produced by Python and written down rather than estimated.

- Tempo/bar/duration: 96 bpm → beat 0.625 s, bar 2.5 s, 8 bars 20.0 s; 92 bpm → beat 0.652 s, bar 2.609 s, 16 bars 41.739 s, 32 bars 83.478 s; 84 bpm → beat 0.714 s, bar 2.857 s, 4 bars 11.429 s, 8 bars 22.857 s; 100 bpm → beat 0.6 s, bar 2.4 s, two beats 1.2 s; 104 bpm → beat 0.577 s, bar 2.308 s, 5 bars 11.538 s.
- Tempo ladder 60/68/76/84/92/100 bpm → bar 4.0 / 3.529 / 3.158 / 2.857 / 2.609 / 2.4 s; slowest-to-fastest ratio 1.667. Two-bar loop at 76 bpm 6.316 s; at 60 bpm 8.0 s; at 100 bpm 4.8 s.
- Grid: 120 bpm sixteenth = 0.125 s = 5,512.5 samples at 44.1 kHz; 128 bpm sixteenth = 0.1172 s ≈ 5,168 samples.
- File sizes (16-bit stereo, 44.1 kHz, 2 bytes/sample, 1 MB = 1,048,576 bytes): 30 s = 5,292,000 B = 5.05 MB; 40 s = 7,056,000 B = 6.73 MB; 76.8 s = 13,547,520 B = 12.92 MB; 83.478 s = 14,725,565 B = 14.04 MB.
- Set arithmetic: the five applied dominants available in a major key introduce five chromatic pitch classes out of twelve, 41.7 %, leaving 58.3 % diatonic; G major and D major share four of seven diatonic triads, 57.1 %; a mode uses seven of twelve pitch classes, 58.3 %.
- Mode spellings checked against each other: D Dorian differs from D Aeolian only at the sixth degree (B natural against B flat, one semitone); D Mixolydian differs from D Ionian only at the seventh (C against C sharp, one semitone); black-key counts on D are Dorian 0, Aeolian 1 (B flat), Mixolydian 1 (F sharp), Ionian 2 (F sharp and C sharp).
- Guitar arithmetic checked note by note: D string open + frets 2, 3, 5, 7, 9, 10 = D, E, F, G, A, B, C (Dorian), and fret 8 instead of 9 = B flat (Aeolian); G string open + frets 2, 4, 5, 7, 9, 10 = G, A, B, C, D, E, F (Mixolydian) and fret 11 = F sharp (Ionian); F7 = the open F shape with the fourth string moved from fret 3 to fret 1 (E flat).
- Health numbers taken from the cited pages and converted, not invented: 53 % of 105 guitar players surveyed ≈ 55.7 people; one practice injury per 2,381 hours = about 13.0 years at 30 minutes a day (182.5 h/yr) and about 3.3 years at two hours a day.

## 7. Music-specific rules honoured

- **Physically executable steps with safe setup** in every lesson that asks for playing: shoulders relaxed, wrists straight, elbows slightly bent, chair set so the forearms are level with the keys, feet supported, two-minute warm-up, sessions under 25–30 minutes with a break, stop on pain rather than pushing through it. Sessions are described as sittings, never as endurance tests.
- **MIDI data versus audio is separated at every point where it matters**: lessons 76 (what a pitch is when you play it), 78 (note data versus recorded sound, the recording filter's Notes/Audio split, the chord stamp and scale-snapping tools, per-note velocity versus a mixer fader), 79 (transposing data exactly versus processing a waveform) and 80 (a `.mid` file is not audio; the Master mixer track is what a render captures). The conflation is named explicitly as the beginner's error the lessons are designed to avoid.
- **No media claims.** `visual.steps` are labelled reasoning sequences; the word "video" does not appear anywhere in the pack, no playback is asserted, no autoplay of any kind is described, and no external audio is claimed to play inside the product.
- **No copied commercial recordings.** No recording, recording link, or track excerpt is used as content anywhere in the level. Sources are textbooks (Open Music Theory, Music Theory for the 21st-Century Classroom), the FL Studio online manual, and two University of Iowa Head and Neck Protocols pages.
- **Health material is education, not diagnosis**: the playing-injury and hearing-conservation pages are cited as prevention guidance for practice habits, and the notes say so; nothing is prescribed and no individual symptoms are interpreted. No public learner medical or private details appear.
- **No claim of professional competence**, and the two-binary-choice format is not presented as proof of it. Application tasks carry their own model responses and self-review rubrics, and the capstone is described as a bounded demonstration.

## 8. Unresolved limitations (for the parent)

1. **Not published.** `course-pack-registry.ts` imports explicit paths and never glob-loads, so this level is inert until the parent moves `src/lib/course-packs/staged/music-71-80.json` to `src/lib/course-packs/music-71-80.json` and imports it in the music group **after `music6170`**, then verifies in production (Vercel only) that it appends as level 8 with routes for topics 71–80.
2. **The repository's own scripts cannot see it.** `scripts/validate-packs.ts` and `scripts/verify-source-urls.py` both glob only `src/lib/course-packs/*.json` at the top level, so neither reaches a staged pack. That is why the real `attachCoursePacks` was exercised directly through a scratch `tsx` harness instead. The parent should re-run both scripts after the file is moved.
3. **Unit-2 question IDs continue the pack-wide sequence rather than restarting.** Unit 1 uses `uq-71-80-a` … `uq-71-80-e` and unit 2 uses `uq-71-80-f` … `uq-71-80-j`, matching the convention in every published music pack (61–70 uses `a`–`e` then `f`–`j`). Reading the task's "`uq-71-80-a`..`uq-71-80-e` per unit" literally would repeat five IDs inside one pack, which the validator rejects as duplicate questions. If the parent intended a different scheme, this is the one thing to change.
4. **Source scope.** Several readings are common-practice or pop textbooks; the analysis lessons state their limits in prose (tonicisation versus a short modulation can be genuinely ambiguous where harmonic rhythm is fast; modal music may contain pitches outside the collection; pop songs do not always have one unambiguous tonic). The practice-injury figures come from one survey of 105 guitar players and are labelled as such; the hearing guidance is public health material, not audiology.
5. **Word counts are the validator's measure.** 18,763 words across ten lessons counts `explanation`, `example` and the six depth fields only; titles, readings, visual steps and assessment text are excluded.
6. **Scope honesty.** This is one level of two units toward the 100-unit target, not fulfilment of it, and no audit output, catalogue or test was edited to suggest otherwise. No test file was modified.
