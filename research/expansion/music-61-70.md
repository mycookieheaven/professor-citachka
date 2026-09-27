# Music level 61–70 — authored pack handoff

## Paths (only these two files were written)

- Pack: `src/lib/course-packs/staged/music-61-70.json` (170,134 bytes; `subject: "music"`, one level, two units)
- Handoff: `research/expansion/music-61-70.md` (this file)

`src/lib/course-packs/staged/` was created because it did not exist. No other file in the repository was created or modified (verified with `git status --porcelain`; the only entries visible in the working tree besides other workers' files are `src/lib/course-packs/staged/` and this handoff). No deployment, no server, no browser automation.

## Counts

| Item | Actual |
|---|---|
| Levels | 1 |
| Units | 2 |
| Lessons | 10 (IDs `61`–`70`; unit 1 = 61–65, unit 2 = 66–70) |
| Unit questions | 5 + 5 = 10 (`uq-61-70-a` … `-e`, `uq-61-70-f` … `-j`) |
| Level questions | 12 (`lq-61-70-a` … `-l`) |
| Readings | 32 citations across the 10 lessons, drawn from 30 distinct URLs (one URL is cited with different section directions in lessons 63 and 68; the sources are genuinely multi-section) |
| Visual step sequences | 10 (one per lesson, 5 steps each) |
| `russianItems` keys | 0 (none required for a non-Russian subject) |

## Level and units

**Level title:** *Playing with other people and capturing it honestly: charts, count-ins, first improvisation, and three takes you can defend*

**Unit 1 — Reading the page and holding time with other musicians: charts, lead sheets, count-ins and recoveries**

| ID | Topic | Instruction words |
|---|---|---|
| 61 | Read a chord chart: four things every symbol contains (root, quality, extensions, bass note; harmonic rhythm) | 1,524 |
| 62 | Read a lead sheet: melody, chord symbols, and the road map (sections, repeats, phrases) | 1,553 |
| 63 | Follow a count-in and start together (precount, count length, pickups, drift arithmetic) | 1,586 |
| 64 | Hold time with other players: listening roles, interlocking parts, recovery without stopping | 1,594 |
| 65 | Isolate and slow a difficult passage: chunks, tempo ladder, correct-trial budget | 1,657 |

**Unit 2 — Improvising with purpose and capturing it: pentatonic lines, space, clean recording, honest edits, and three takes**

| ID | Topic | Instruction words |
|---|---|---|
| 66 | Improvise over a two-chord vamp with the minor pentatonic (blue note, chord tones, guide tones) | 1,640 |
| 67 | Phrasing: leave space instead of filling every bar (phrase plans, rest arithmetic) | 1,631 |
| 68 | Record a part cleanly and judge the take honestly (note data vs audio, matched-level audit) | 1,523 |
| 69 | Edit without destroying the performance (cuts, short fades, declicking, when to re-record) | 1,570 |
| 70 | Capstone: three takes, one chosen take, a written reason, and delivery to a listener | 1,796 |

## Computed word counts

Counted in code as words in `explanation + example + definitions + mechanism + secondExample + mistake + application + summary` (regex `[A-Za-z0-9''’\-]+`), which is the same measure applied to `music-51-60.json` for calibration (that pack's ten lessons: 1,533–1,699 words, total 16,202).

- Per lesson: 1,523 / 1,553 / 1,586 / 1,594 / 1,657 / 1,640 / 1,631 / 1,523 / 1,570 / 1,796
- **Total instructional words: 16,074**
- Minimum lesson: 1,523 words (floor is 600; the pack's own reference band is ~1,500–1,700)
- Not counted: `question/answer/distractor/correction`, readings notes, visual steps, unit and level questions

## Source verification

Every reading was fetched over HTTP with a browser user-agent and the body was grepped for the specific section markers cited in its note. All **30 distinct URLs returned HTTP 200**, and every cited marker string was found in the body:

- Open Music Theory / Pressbooks (7 URLs): `chord-symbols`, `pentatonic-harmony`, `melody-and-phrasing`, `texture-in-pop-music`, `intro-to-form-in-popular-music`, plus two more chapters. Markers confirmed include "four components", "lead sheet symbols", "assumed to be major", "8 and 24 bars", "capital letters"/"lowercase letters", "five-note collection", "no semitones", "srdc", "novelty layer", "call-and-response".
- Music Theory for the 21st-Century Classroom (10 URLs): 6.2 Lead-Sheet Symbols, 9.2 Harmonic Rhythm, 11.4 Phrase, 12 Form in Popular Music, 14.5 Afterbeats and Offbeats, 31.2 Chord Symbol Specifics, 31.7.1 Guide Tones, 31.8 Standard Chord Progressions, 31.9 Scales / 31.9.1 The Blues Scale. Markers confirmed include "6” versus", "11” versus", "♭5 versus", "♯11", "smallest category of section", "four measures", "4-, 8-, 12-, or 16-bar", "Covach", "Guide Tones", "3rd and 7th", "blues scale", "minor pentatonic", "blue notes", "II–V–I", "turnaround".
- Image-Line FL Studio Reference Manual (6 URLs): `recording_audio`, `menu_options`, `toolbar_panels`, `playlist_audioclip`, `playlist`, `fformats_save_export`. Markers confirmed include "count-in - 4, 3, 2, 1", "Recording precount", "countdown metronome ticks", "Transport Panel", "Loop Recording", "crossfade", "Declicking", "Playlist Snap", "Make unique", "not an audio format", "16 Bits", "Master Mixer".
- Sound On Sound (3 URLs): "Vocal Comping" (2011), "Comp Performances" (2001), "How To Record Yourself And Make It Sound Good". Markers confirmed: "Keep History", "lanes", "three complete takes", "reverb", "Be Prepared", "Ergonomics".
- Peer-reviewed open access (3 URLs): Novembre & Keller, *Frontiers in Human Neuroscience* 8:603 (2014) — "joint musical tasks", "reciprocal prediction and adaptation", "equivalent predictions", "entrain multiple agents" all present; Zamm, Pfordresher & Palmer, *Experimental Brain Research* 233:607 (2015) via PMC4295031 — "reduced synchronization", "spontaneous rates" present; PMC5006062 (self-regulated learning in musical practice) and PMC12078165 (audio feedback with the Disklavier) — "self-regulated", "metacognition", "self-evaluation", "self-assessment" present.
- Duke, Simmons & Cash (2009), *JRME* 56(4):310–321 — the publisher copy (SAGE, DOI 10.1177/0022429408328851) returns **HTTP 403**, so the pack cites the openly hosted PDF copy at `blogs.ischool.berkeley.edu` (HTTP 200, confirmed as the correct paper by title, authors, journal, volume and page numbers in the PDF text). The correlations quoted in the lessons come from that PDF's abstract: r = −.71 (complete trials correct), r = −.51 (all trials correct), r = .48 (incorrect trials), with no significant relationship for practice time, total trials or complete trials; N = 17 pianists, one three-measure Shostakovich passage.
- World Health Organization "Make Listening Safe" (HTTP 200) and University of Iowa Head and Neck Protocols "Guitar Playing, Part 1: Health Considerations" (HTTP 200, "Definitions"/"Background"/"Prevention" sections present) supply the hearing-protection and hand/posture guidance.

### User-agent finding (as requested)

`viva.pressbooks.pub` (Open Music Theory) answers a plain command-line request **HTTP 403**, both with no user-agent and with `curl/8.7.1`, and returns **HTTP 200** with a normal browser user-agent — re-tested during this authoring run. Every Open Music Theory reading note therefore carries an explicit access caveat telling the learner to open the page in a browser rather than through a fetch tool. `musictheory.pugetsound.edu`, Image-Line, Sound On Sound, WHO and the PMC/Frontiers pages all returned 200 without special treatment.

## Arithmetic checks (all computed with a tool; recorded here and labelled "computed" in the lessons)

| Figure | Value | Check |
|---|---|---|
| Beat at 96 BPM / bar / 32-bar AABA | 0.625 s / 2.5 s / 80.0 s | 60/96 = 0.625; ×4 = 2.5; ×32 = 80.0 |
| 4 clicks at 90 BPM / at 120 / 8 clicks at 90 | 2.667 s / 2.0 s / 5.333 s | 60/90×4; 60/120×4; 60/90×8 |
| Drift, 32 bars at 90 vs 92 BPM | 1.855 s ≈ 2.84 beats at 92 | 128×0.667 = 85.333; 128×0.652 = 83.478; Δ 1.855 |
| Drift, 32 bars at 100 vs 102 | 1.506 s ≈ 2.56 beats at 102 | 76.8 vs 75.290 |
| 4 clicks at 104 BPM / half-beat | 2.308 s / 0.288 s | 4×0.577; 0.577/2 |
| 24 bars at 90 / at 96 / 20 bars at 120 | 64.0 s / 60.0 s / 40.0 s | bar = 2.667 / 2.5 / 2.0 s |
| Half-beat at 100 BPM (backbeat vs offbeat spacing) | 0.300 s | 0.6/2 |
| 16th note at 100 BPM | 0.150 s = 150 ms | 0.6/4 |
| Tempo ladder 60→100 by +8 | 60,68,76,84,92,100; bars 4.0→2.4 s; ratio 1.667 | 4×60/BPM |
| 4-bar run at 60 / at 100 | 16.0 s / 9.6 s; ≈5.6 / ≈9.4 runs per 90 s | 90/16, 90/9.6 |
| Correct-trial rule | 9/10 = 90 %; 3 errors in 12 runs = 75 % | below the stated threshold |
| 12-bar blues at 100 / 8-bar vamp / 4-bar phrase | 28.8 s / 19.2 s / 9.6 s | 12×2.4; 8×2.4 |
| 2 silent beats in a 16-beat phrase / 4 silent bars in 16 | 12.5 % / 25 % | 2/16, 4/16 |
| Three takes of 32 bars at 100 | 230.4 s = 3 min 50 s; chosen take 1/3 of material | 3×76.8 |
| Fades: 10 ms / 5 ms at 44.1 kHz | 441 / 220.5 samples | 0.010×44100, 0.005×44100 |
| 8 joins × 10 ms / 12 sliced notes × 2 joins | 80 ms / 240 ms | 8×10; 24×10 |
| WAV sizes at 44.1 kHz stereo | 16-bit 76.8 s = 12.92 MB; 24-bit = 19.38 MB; three takes 16-bit = 38.76 MB | 76.8×44100×2×2 bytes |
| Pentatonic coverage | 5 of 12 pitch classes = 41.7 % | 5/12 |

Two derived claims are presented as conventions rather than laws: the 90 % correct-trial threshold is this level's own practice rule (the underlying study reports relationships, not a threshold), and the 150 ms sixteenth is presented as the project's grid resolution, not as a perceptual threshold.

## Validation performed on the final file

All executed in code against the saved JSON after the last edit; all pass:

- JSON parses; `subject == "music"`; 1 level; 2 units; lessons `["61"…"70"]`; 5+5 unit questions; 12 level questions.
- Question IDs exactly `uq-61-70-a…j` and `lq-61-70-a…l`; no duplicates.
- Per lesson: required keys present (`id,title,explanation,example,question,answer,distractor,correction,depth,readings,visual`), `depth` has exactly the six required fields, `readings` non-empty with `https://` URLs, `visual` has `title/description/steps`, no `russianItems`.
- All 32 answers distinct, all 32 distractors distinct, no answer equal to any distractor (across lessons, unit questions and level questions).
- Every `reviewLessonIds` entry is inside 01–70 and names an existing music lesson (21–70 exist in the course files; all references are ≥ 21).
- Minimum lesson word count 1,523 (floor 600).

## Honesty and safety notes embedded in the content

- No lesson claims that a DAW was opened, a part recorded, a file rendered or a sound heard. Recorded/rendered material is always described as a task for the learner, and lesson 70 states explicitly that the author recorded, rendered and listened to nothing and that the figures are computed arithmetic.
- MIDI note data is distinguished from audio in lessons 63, 68 and 70, on the basis of the FL Studio Transport Panel's Recording Filter (Notes vs Audio) and the export documentation's statement that MIDI is not an audio format.
- Safety guidance appears where relevant: warm-up and posture (lessons 64, 65, 70), session length with breaks (63, 64, 65, 68, 69, 70), hearing protection and monitoring levels (63, 64, 68, 69, 70), and pain as a stop signal for hands and wrists (65, via the Iowa protocol).
- Evidence limits are stated rather than smoothed over: the Duke study's small sample (17 pianists, one passage) is labelled a hypothesis to test with your own records; the SAGE/publisher paywall is disclosed and the open copy identified; the Zamm et al. findings are labelled as duet-piano experiments rather than universal rules; the Sound On Sound articles are described as DAW-specific examples whose principles transfer.

## Unresolved limitations

1. **Integration is the parent's job.** The pack is staged at `src/lib/course-packs/staged/music-61-70.json`; it has not been merged into `music.json`, no catalog was updated, and no application test was run against it. Whether the app's loader reads from `staged/` was not investigated (that would require touching shared code).
2. **No listening.** Nothing in the pack was auditioned. Tempo, feel and arrangement claims rest on documented sources and arithmetic, not on hearing a performance.
3. **Two Sound On Sound readings describe Cubase and Logic workflows** (2011 and 2001). They are cited for transferable principles (keep takes, avoid effects while tracking, ~3 complete takes, cut on phrases, retake rather than micro-repair), and cover art for FL Studio comes from the Image-Line manual; the lessons say this explicitly.
4. **Question types are binary choice with feedback.** Per the contract these are retrieval checks, not proof of competence; the practical tasks and rubrics carry the skill assessment.
5. **Pressbook access caveat is a moving target.** If that host changes its user-agent policy, the notes' caveat text would need updating; it was accurate at authoring time (403 plain, 200 browser).
6. **Level length.** Ten lessons cover the requested territory, and the territory is wide (charts through capstone). Lesson 70 assumes the learner has completed 61–69; a learner attempting it cold would lack the practice rubric it depends on.
