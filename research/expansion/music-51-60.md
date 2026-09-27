# Music expansion — lesson IDs 51–60 (new level, staged)

Worker-owned files only. Nothing else in the repository was modified; the parent owns integration,
registry wiring, route creation and production verification.

## Paths written

| Path | Purpose |
| --- | --- |
| `src/lib/course-packs/staged/music-51-60.json` | The authored level, valid JSON, 167,702 bytes |
| `research/expansion/music-51-60.md` | This handoff note |

`src/lib/course-packs/music.json`, `music-31-40.json`, `music-41-50.json` and every other repository
file were **not** touched, and no other worker's staged pack was opened or edited. No registry,
program, test or dependency file was changed. No server was started, no deploy was run, no browser
automation was used, and no `russianItems` key exists anywhere in the pack (verified by a `jq` path
scan returning 0 matches).

## What was authored

- **Subject:** `music`. **New level title:** "Time you can feel, independence of hands and voice, and
  one finished performance" (level 6, continuing after lessons 41–50).
- **Lessons:** 10, IDs `51`–`60`, continuing after the existing maximum (50).
- **Units:** 2, five lessons each.
  - Unit 1, "Time you can feel: pulse, the click, syncopation, and moving the same music around the
    neck": 51 the tactus and hypermeter as felt cycles; 52 practising with a metronome without
    becoming mechanical; 53 syncopation, displacement and grouping, and groove; 54 movable shapes,
    transposition arithmetic and the capo; 55 barre chords and the strength problem, with the
    safety material.
  - Unit 2, "Independence, lines and form: right-hand clocks, keyboard voicings, singing, a second
    section, and one finished performance": 56 fingerstyle thumb-and-finger independence; 57 keyboard
    voicings and why an inversion changes the feel; 58 singing while playing and voice care; 59 a
    second section that belongs, plus arrangement contrast without adding a track; 60 the capstone —
    rehearsing, capturing and logging one piece.
- **Questions:** 5 unit questions for unit 1 (`uq-51-60-a` … `-e`), 5 for unit 2 (`uq-51-60-f` …
  `-j`), and **12 separately authored cumulative level questions** (`lq-51-60-a` … `-l`). All 22
  answers are distinct, all 22 distractors are distinct, and no string serves as both an answer and a
  distractor. Every `reviewLessonIds` entry is a two-digit ID inside 01–60, restricted in practice to
  `38`, `41`, `44`, `50` (already published) and `51`–`60` (this pack); IDs 01–20 were avoided because
  no music lessons exist below 21.
- **Readings:** 3 or more per lesson except lessons 51, 52 and 55 which carry two each, 53 / 58 / 59
  which carry four and 60 which carries five; 31 distinct URLs, each with a section-specific note.
  Sources continue the existing bracketed index. Parsing all three existing music packs gives the
  previously used set 1–24, 26–39 and 41, so `[25]` and `[40]` were unused before and remain unused.
  Reused here: `[4]`, `[6]`, `[10]`, `[14]`, `[16]`, `[18]`, `[19]`, `[24]`, `[34]`, `[35]`, `[36]`,
  `[37]`, `[39]`, `[41]`. **New** indices introduced here: `[42]`, `[43]`, `[44]`, `[46]`, `[47]`,
  `[48]`, `[49]`, `[50]`, `[51]`, `[52]`, `[53]`, `[55]`, `[56]`, `[57]`, `[58]`, `[59]`, `[60]`.
  Indices `[45]`, `[54]`, `[40]` and `[25]` are unused.

## Topic list

Tactus, beat, division and hypermeasure as felt cycles · conducting and hyperbeat 4 as the closing
position · anticipation in synchronization and its growth with longer stimulus periods · metronome
placement as a design choice (every beat, beats 2 and 4, bar accent, no click) · click routing and
click-sound settings · straight syncopation as halving the first note and shifting the rest ·
beat-level and division-level syncopation · the tresillo 3+3+2 · displacement versus grouping
dissonance and the three-against-four realignment · the backbeat as emphasis rather than displacement ·
groove as an inverted-U function of syncopation in listener ratings · movable shapes, the twelfth root
of two, fret-to-frequency arithmetic, capo as movable nut, retuning after removal, shape versus
sounding chord · barre as leverage and placement, finger rotation, thumb counter-force, partial
barres, duty cycle, warm-up as the risk variable, PRMD definitions and the limits of population injury
rates · p/i/m/a roles, alternation, rest stroke versus free stroke, planting, thumb-and-finger clocks ·
triadic inversion, intervals above the bass, slash chords, voice-leading cost, register and spacing ·
automatisation and partial network overlap for singing while playing, breath placement, vocal warning
signs and care · form sections of 8–24 bars, core and auxiliary sections, schema rotation as contrast,
register and density and level as arrangement levers, 6 dB as a doubling of amplitude, MIDI velocity
versus audio level · rehearsal by chunk and join, count-in arithmetic, take logs, storage arithmetic,
render length and tails, MIDI as instructions versus audio, monitoring level and hearing risk,
delivery-note honesty.

## Instructional word count (computed in code)

Counted as `explanation + example + depth{definitions, mechanism, secondExample, mistake,
application, summary}`, whitespace-split (`build.py`). Floor is 600 per lesson.

| Lesson | Words | Lesson | Words |
| --- | --- | --- | --- |
| 51 | 1505 | 56 | 1643 |
| 52 | 1550 | 57 | 1632 |
| 53 | 1503 | 58 | 1610 |
| 54 | 1671 | 59 | 1641 |
| 55 | 1642 | 60 | 1592 |

**Total: 15,989 instructional words.** Minimum 1503, maximum 1671, mean 1598.9. Every lesson is
between 2.5× and 2.8× the 600-word floor. Build, validation and counting scripts are kept outside the
repository at `~/.hermes/profiles/citachka-ai/cache/scratch/pc_pack_51_60/` (`lessons_a.py` …
`lessons_d.py`, `questions.py`, `build.py`).

## Arithmetic checks (all computed with a tool, never by hand)

- **Tempo set:** 60 BPM → beat 1.000 s, eighth 0.500 s, sixteenth 0.250 s, bar 4.000 s. 72 → beat
  0.833 s, eighth 0.417 s, sixteenth 0.208 s, bar 3.333 s, 4 bars 13.333 s. 80 → bar 3.000 s, 4 bars
  12.000 s. 84 → beat 0.714 s, bar 2.857 s, 8 bars 22.857 s, 16 bars 45.714 s, 32 bars 91.429 s.
  90 → beat 0.667 s, sixteenth 0.167 s, bar 2.667 s, 8 bars 21.333 s, 16 bars 42.667 s. 96 → beat
  0.625 s, eighth 0.313 s, bar 2.500 s. 100 → beat 0.600 s, eighth 0.300 s. Used in lessons 51–54 and
  56–60 and in most unit and level questions.
- **Tresillo:** at 90 BPM a 3+3+2 sixteenth grouping gives attacks at 0.000, 0.500 and 1.000 s and
  cycles every 1.333 s; four bars hold eight cycles in 10.667 s. Three-against-four realigns after
  LCM(3,16) = 48 sixteenths = 3 bars = 8.000 s, containing 16 attacks.
- **Hypermetre:** 4 bars at 72 BPM = 13.333 s (hyperbeat 4 as the closing position); 4 bars at 90 =
  10.667 s; 8 bars at 90 = 21.333 s; 16 bars at 90 = 42.667 s; A + B + A at 90 = 64.000 s.
- **Synchronization:** a 3500 ms stimulus period = 17.14 BPM; a 20–50 ms anticipation is 2 %–5 % of a
  1.000-second beat at 60 BPM. 40 BPM period = 1.500 s against 0.600 s at 100 BPM.
- **Fret and frequency arithmetic** (25.5-inch scale = 647.7 mm): fret 1 at 36.35 mm, fret 2 at
  70.66 mm, fret 3 at 103.05 mm, fret 12 at 323.85 mm; 2^(1/12) = 1.05946. Checks:
  82.41 × 2^(3/12) = 98.00 Hz = G2 (capo 3 on an E shape); 82.41 × 2^(5/12) = 110.00 Hz = A2 (capo 5);
  110.00 × 2^(2/12) = 123.47 Hz = B2 and 146.83 × 2^(2/12) = 164.81 Hz = E3 (capo 2 on A and D shapes);
  110.00 × 2^(3/12) = 130.81 Hz = C3 and 146.83 × 2^(3/12) = 174.61 Hz = F3 (capo 3 on A and D shapes).
- **Barre dose:** 4 s hold + 8 s release = 12 s cycle → 25 cycles in a 300 s set, 100 s loaded, a
  33.3 % duty cycle; three sets a day for six days = 18 sets and 1,800 s = 30 minutes of contact time
  per week, against 1,200 s with no release in the twenty-minute version. The source figure of one
  injury per 2,381 practice hours is 6.52 years at 1 h/day and 13.05 years at 30 min/day.
- **Keyboard:** C3 130.81, E3 164.81, G3 196.00, C4 261.63, E4 329.63, F3 174.61, F4 349.23, A0 27.5,
  C8 4186.01 Hz (7.25 octaves); root position intervals above the bass 4 and 7 semitones, first
  inversion 3 and 8, second inversion 5 and 9; root position to first inversion costs 4 + 3 + 5 = 12
  semitones of voice movement or 12 in a single voice; an octave = 1,200 cents and a doubling ratio
  of 2 (261.63 / 130.81 = 2.0001).
- **Fingerstyle and singing:** at 72 BPM the thumb at 0.833 s and the fingers at 0.417 s meet 72 times
  per minute; p-i-m-a sixteenths at 60 BPM are 0.250 s each, 240 notes per minute. At 96 BPM one
  thumb note per bar is 2.500 s against 0.313-second eighths, an 8:1 ratio. At 84 BPM a four-bar
  phrase is 11.429 s, about 2.8 sung events per second against 1.4 hand events per second; at 60 BPM
  the fingers at 0.500 s and a two-syllable-per-beat voice at 0.500 s collide at an identical rate.
- **Dynamics and form:** −6 dB = 0.501 amplitude, +6 dB = 1.995; 6 dB over 8 bars at 90 BPM
  (21.333 s) = 0.281 dB/s; 6 dB over 4 bars (10.667 s) = 0.563 dB/s.
- **Capture:** 32 bars at 84 BPM = 91.429 s; a two-bar count-in = 8 beats = 5.714 s; six takes =
  548.6 s = 9.14 min, plus six count-ins = 9.71 min of playing; three listening passes = 274.3 s =
  4.57 min; 44.1 kHz 16-bit stereo = 176,400 bytes/s → 16.13 MB per take; 48 kHz 24-bit stereo =
  288,000 bytes/s → 26.33 MB. Level question j: 7,680 / 94.929 = 80.9 BPM as the tempo that the extra
  3.5 seconds would imply if it were a performance error rather than a render tail.

## JSON parse and invariant checks (exercised, all passed)

`python3 build.py` printed `problems: NONE`, then the file was copied into the staged directory,
re-read from disk and re-parsed with `json.loads`, and independently re-checked with `jq` against the
on-disk file:

- valid JSON; `subject` = `music`; exactly one level; exactly two units; 5 lessons per unit; 10
  lessons total; 5 unit questions per unit; 12 level questions.
- lesson IDs exactly `51`–`60` in order; every lesson has `id, title, explanation, example, question,
  answer, distractor, correction, depth, readings, visual`; every `depth` object has exactly the six
  contract fields, none empty and none under 60 words; **no `russianItems` key anywhere** (`jq` path
  scan: 0 matches).
- every lesson ≥ 600 instructional words (minimum 1503); every lesson has at least two readings and
  three or more visual steps; every reading URL is `https://` with a section-specific note of at least
  25 words.
- 22 question IDs, all unique, all namespaced `uq-51-60-a` … `-j` and `lq-51-60-a` … `-l`; `answer` ≠
  `distractor` for all 22; all 22 answers unique; all 22 distractors unique; zero overlap between the
  answer set and the distractor set.
- every `reviewLessonIds` entry matches `\d{2}`, lies in 01–60, and in practice is one of
  `38, 41, 44, 50` or `51`–`60`; no future or invented lesson ID is referenced.
- an automated scan of the whole pack found no occurrence of `autoplay`, no video URL (`youtube.com`,
  `youtu.be`, `vimeo.com`, `watch?v=`, `spotify`) and no first-person claim of having run or recorded
  anything (`we ran`, `we recorded`, `we rendered`).

## Source verification results

31 distinct URLs. **29 returned HTTP 200 to `curl` with a browser user agent**; the remaining two
returned 403 to `curl` even with a browser user agent but their page text was retrieved successfully
through a retrieval tool, so they resolve in a browser and their content was read before citing.

- **Open Music Theory (viva.pressbooks.pub)** — 14 chapters appear as readings, all HTTP **200** with
  a browser user agent and all content read: Simple Meter and Time Signatures, Hypermeter (new
  version), Rhythm and Meter in Pop Music, Metrical Dissonance, Inversion, Jazz Voicings, Core
  Principles of Orchestration, Texture in Pop Music, Drumbeats, Melody and Phrasing, Introduction to
  Form in Popular Music, AABA Form and Strophic Form, Four-Chord Schemas, and Major Scales, Scale
  Degrees, and Key Signatures. A fifteenth Open Music Theory chapter, Swing Rhythms
  (`/chapter/swing-rhythms`), is named in the correction to level question f; it was also checked and
  returned 200 with a browser user agent, but it is not cited as a reading and so is not part of the
  31-URL count. Section names quoted in the reading notes were read from the live pages,
  including "Terminology", "Conducting Patterns", "Counting in Simple Meter", "Hypermeter, Meter, and
  Tactus", "Straight Syncopation", "Tresillo", "Displacement Dissonance", "Grouping dissonance",
  "Swing eighths", "Backbeat", "Spacing", "Simultaneous (Vertical) Combinations", "Doubling lines",
  "Successive (Horizontal) Combinations", "Functional Bass Layer", "Strophe (A)" and "Bridge (B)".
  Section names used in both the reading notes and the lesson text were read from the live pages;
  no quotation attributed to any source was written without reading that source's retrieved text.
  - **Access caveat, verified again:** this Pressbooks host returns **HTTP 403 to a plain `curl` user
    agent** and **HTTP 200 to a browser user agent**. In this run, 14 of the 31 URLs were Pressbooks
    pages and all 14 registered 403 with the plain agent and 200 with the browser agent. A CI link
    checker without a browser user agent will report every Open Music Theory citation as a failure;
    the host is already cited by the existing music packs and the pages are unaffected for a reader.
- **Two further 403-on-`curl` hosts, verified by retrieval instead:** `justinguitar.com` (Using a
  Capo) and `fender.com` (The Capo: 6 Things You Need to Know). Both returned 403 to `curl` with and
  without a browser user agent; both page texts were retrieved with a retrieval tool and read before
  citing, and each reading note records the caveat. They are reputable instrument-teaching references
  rather than primary scholarship, and the lessons use them only for teaching claims such as capo
  placement and the movable-nut description.
- **Others** — all HTTP 200 with and without a user agent: `musictheory.pugetsound.edu` (Music Theory
  for the 21st-Century Classroom, 6.3 Inverted Triads, read directly), `iowaprotocols.medicine.uiowa.edu`
  (Music and Medicine: Guitar Playing Part 1, read directly), `nidcd.nih.gov` (Taking Care of Your
  Voice, read directly), `journals.plos.org` (PLOS ONE 9(4): e94446 and PLOS Computational Biology
  15(10): e1007371, abstracts read), `frontiersin.org` (Frontiers in Neuroscience 12:351, summary and
  citation read), `soundonsound.com` (How To Record Yourself And Make It Sound Good, headings read),
  `midi.org` (About MIDI Part 1), `image-line.com` (Options Menu metronome switch, Audio Recording,
  Exporting Audio & MIDI) and `thisisclassicalguitar.com` (Barre Lessons and Exercises, Alternating
  Right Hand Fingers, Rest and Free Strokes, all read directly).

Specific claims drawn from these sources and used in the lessons include: tactus as felt rather than
notated, and the tactus changing level between half-speed and double-speed performances (`hypermeter2`);
the definition of a hyperbeat and hypermetric reinterpretation at phrase elisions (`hypermeter2`);
the metronome switch sounding at the beginning of each beat with an accent at the beginning of each
bar, with options including mixer track routing and click-sound changes on the Transport Panel
(`menu_options.htm`); anticipation in synchronization increasing with periods up to 3500 ms and being
less pronounced in trained musicians, with auditory feedback, a partner and transmission latencies as
influences (`pcbi.1007371`); straight syncopation halving the first note and shifting the rest, the
unit of syncopation as half the straight duration, and the tresillo (`rhythm-and-meter-in-pop-music`);
Krebs's displacement and grouping dissonance and the ostinato form of grouping dissonance
(`metrical-dissonance`); the backbeat as an accent on beats two and four and the half- and double-time
feels (`drumbeats`); the inverted-U relationship between syncopation and ratings of wanting to move
and pleasure, with entropy a poor predictor (`pone.0094446`); swing eighths and the backbeat in jazz
(`swing-rhythms`); a capo enabling the same shapes in different keys, singers moving a song into a key
that suits the voice, and the capo needing to sit just behind the fret (`justinguitar`); the capo as a
movable nut with the advice to tune after removing it (`fender`); PRMD defined as symptoms interfering
with playing at one's accustomed level, failure to warm up as the only variable statistically
associated with increased injury risk, one injury per 2,381 practice hours, and symptoms requiring
healthcare advice (`iowaprotocols`); right-hand alternation as foundational with accidental finger
repetition a common intermediate mistake, and the requirement that rest and free strokes each be
relaxed and predictable before being combined (`thisisclassicalguitar`); the bass voice not being the
same thing as the chord's root (`inversion`); slash chords (`InvertedTriads.html`); spacing practice
with the root kept in the left hand in written examples and omitted in performance when a bassist
covers it (`jazz-voicings`); larger gaps in the bass register with denser packing in the middle, and
the vertical/horizontal split (`core-principles-of-orchestration`); sections of 8–24 bars with core and
auxiliary sections and the caution that section relationships are not clear cut
(`intro-to-form-in-popular-music`); the strophe and bridge as section types (`aaba-and-strophic-form`);
schema rotations (`4-chord-schemas`); the functional bass layer versus the melodic layer
(`texture-in-pop-music`); partial network overlap for singing and cello playing (`fnins.2018.00351`);
voice warning signs and care including hydration, vocal naps and humidifier use with a recommended
humidity level (`nidcd.nih.gov`); being prepared and keeping monitoring moderate in a solo tracking
session (`soundonsound.com`); the master mixer track rendered by default, the render-length hierarchy
with a tail, and MIDI not being an audio format (`fformats_save_export.htm`); MIDI as instructions for
a sound source (`midi.org`); and unsafe listening practices putting over one billion young adults at
risk of permanent, avoidable hearing loss (`who.int`).

Probes checked and **not** cited: no video URL of any kind appears in the pack; every visual is a
labelled text step sequence rather than playable media; no quotation in any lesson is attributed to a
source whose retrieved text was not read. Where two candidate sources were paywalled or thin (a
PubMed review of tapping studies, an OMT chapter whose extraction returned only a heading) they were
dropped rather than cited.

## Safety and accuracy handling

- **Physical safety:** lesson 55 is built on the Iowa protocol's own definitions, carries the finding
  that failure to warm up is the variable statistically associated with injury risk, and states
  plainly that symptoms need healthcare advice rather than a larger training dose; a 33 % duty cycle
  replaces the long continuous session. Lesson 60 repeats the warm-up requirement and states the
  monitoring guidance with the WHO's safe-listening material.
- **Hearing:** lessons 52 and 60 keep the click and the monitor at a balanced, comfortable level, and
  lesson 60 cites the WHO fact sheet's statement about young adults at risk from unsafe listening
  practices. No specific decibel exposure limit is asserted, because the campaign page retrieved does
  not state one and no number was invented.
- **Vocal safety:** lesson 58 uses the NIDCD warning-sign list and care advice and directs a suspected
  voice problem to a clinician; nothing in the lesson diagnoses or prescribes.
- **MIDI versus audio** is stated at the point of use in lessons 57, 60 and unit question j, and the
  distinction between rendering and saving is stated in lesson 60.
- **No autoplay, no playback claims:** the pack contains no media URL and no autoplay language
  (verified by scan).
- **No claim that a DAW was opened, a sound was heard or a file was rendered.** Lesson 60 states
  explicitly that no project was opened, no file was rendered and no sound was heard, and every number
  in the level is labelled as computed. Estimates made by ear in the application tasks are required to
  be labelled as estimates.
- **Assessment discipline:** the level states repeatedly that a quiz score is not evidence of playing,
  singing or recording competence, and level question l is built on that distinction.
- **Source honesty:** the two capo teaching pages and the Pressbooks chapters carry their access
  caveats in the reading notes themselves, and population injury figures are presented as population
  figures rather than personal risk estimates.

## Unresolved limitations

1. **Not integrated.** The file is staged under `src/lib/course-packs/staged/`; no route, registry
   entry, dashboard count or progress key points at these lessons until the parent integrates them.
2. **Wrapper keys are unchanged by design.** The pack repeats the full `{"subject": ..., "levels":
   [...]}` shape used by `music-41-50.json`, so the parent can merge the level object rather than
   re-derive it. The level is level 6 and the lesson IDs are `51`–`60`.
3. **Question-ID convention.** The `uq-51-60-*` / `lq-51-60-*` namespace was mandated by the task and
   therefore differs from the existing files' `music-u3-a` / `music-l2-a` style. IDs are unique,
   self-consistent and collision-free, but the parent may wish to normalise them on merge; if so, only
   the `id` strings need changing.
4. **Bracketed reading index is borrowed.** Reused brackets (`[4]`, `[6]`, `[10]`, `[14]`, `[16]`,
   `[18]`, `[19]`, `[24]`, `[34]`–`[37]`, `[39]`, `[41]`, `[44]`, `[50]`, `[59]`, `[60]`) follow the
   earlier packs' numbering; new sources run `[42]`–`[58]` as listed above, with gaps because only the
   sources actually cited here were numbered. A per-file numbering scheme would require editing the
   bracketed prefixes in reading titles only.
5. **Nothing audio-affecting was executed.** No DAW was opened, no part was recorded, no export was
   produced and no metronome was started. Tempo, fret, frequency, duty-cycle, decibel, storage and
   render-length figures are computed from constants or cited against documentation, not observed in a
   session. No one should describe this level as having been validated in a live practice or recording
   session.
6. **Two 403-on-`curl` teaching hosts.** `justinguitar.com` and `fender.com` block automated
   command-line retrieval even with a browser user agent; their text was read through a retrieval tool
   and the caveat is recorded in the reading notes. They are teaching references rather than primary
   scholarship, and their claims are used only where a second, cleaner source does not cover the point.
7. **Physical details assume standard tuning and a right-handed instrument.** The fret, frequency and
   nut-width figures (25.5-inch scale, 42 mm nut, roughly 35 mm string spread, E A D G B E tuning)
   apply to that instrument; an alternative tuning, a shorter-scale guitar or a left-handed player
   would produce different positions and figures.
8. **Scope.** This is one level of two units continuing after lessons 50. It does not complete the
   music course, and the parent should not describe music as finished on the strength of it.
