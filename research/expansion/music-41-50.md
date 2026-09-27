# Music expansion — lesson IDs 41–50 (new level, staged)

Worker-owned files only. Nothing else in the repository was modified; the parent owns integration,
registry wiring, route creation and production verification.

## Paths written

| Path | Purpose |
| --- | --- |
| `src/lib/course-packs/staged/music-41-50.json` | The authored level, valid JSON, 134,358 bytes (134,286 characters) |
| `research/expansion/music-41-50.md` | This handoff note |

The `src/lib/course-packs/staged/` directory did not exist before this task and was created by the
write. `src/lib/course-packs/music.json`, `music-31-40.json` and every other repository file were
**not** touched. No registry, program, test or dependency file was edited. No server was started, no
deploy was run, no browser automation was used, and no `russianItems` key exists anywhere in the pack.

## What was authored

- **Subject:** `music`. **New level title:** "Hearing harmony in practice, arranging the parts, and
  finishing the piece" (level 5; the existing published levels are 1–4, lessons 01–40).
- **Lessons:** 10, IDs `41`–`50`, continuing after the existing maximum (40).
- **Units:** 2, five lessons each.
  - Unit 1, "How harmony moves: function, the fifths, borrowed colour, bass and the rhythm section":
    41 chord function and the phrase model; 42 the circle of fifths as a working tool; 43 borrowed
    chords and modal mixture; 44 the bass line and inversion; 45 rhythm-section functional layers and
    the guitar/keyboard collision.
  - Unit 2, "Arranging, moving, balancing and finishing the piece": 46 melody as phrase shape with an
    unaccompanied ear test; 47 form, contrast and audible section boundaries; 48 automation clips
    versus recorded event data; 49 balance and panning by subtraction; 50 rendering, listening to the
    file, and writing the delivery note.
- **Questions:** 5 unit questions for unit 1 (`uq-41-50-a` … `uq-41-50-e`), 5 for unit 2
  (`uq-41-50-f` … `uq-41-50-j`), and **12 separately authored cumulative level questions**
  (`lq-41-50-a` … `lq-41-50-l`). Every question ID is namespaced with the level range `41-50` as the
  task required. All 22 answers are distinct, all 22 distractors are distinct, and no string serves
  as both an answer and a distractor.
- **Readings:** 21 distinct URLs; every lesson carries at least two cited readings with
  section-specific directions. Sources continue the existing pack's bracketed index: `[1]`–`[8]` and
  `[10]`, `[14]`, `[19]`, `[26]`, `[27]`, `[28]`, `[29]` reuse sources already cited in
  `music.json`/`music-31-40.json`; new sources are numbered `[30]`–`[41]`. Bracket `[25]` remains
  unused, as it was before.

## Topic list

Harmonic function (tonic, strong and weak predominant, dominant) and the phrase model · authentic and
half cadences as closure and non-closure · schema rotations and reading a loop from its relative
minor · the circle of fifths derived by counting fifths (order of sharps and flats, relative minors,
enharmonic seam) · equal temperament, the 700-cent fifth, the Pythagorean comma · descending-fifths
sequences with model and copy · modal mixture (lowered 3, 6 and 7; iv, ♭VI, ♭III, ♭VII) and the count
of borrowed scale degrees · mixture changes quality but not function · bass note versus chord root,
inversions, slash chords, pedal bass · pop functional layers (melodic, harmonic filler, functional
bass, explicit beat, novelty), the backbeat, role and register allocation · masking, register,
density, octave doubling · phrase structures aa′ and srdc, phrase endings as open or closed, contour,
solmization and protonotation as ear-testing methods · section length (8–24 bars), core and auxiliary
sections, lyric-variant versus lyric-invariant, surface features that make a boundary apparent,
verse-chorus and AABA/strophic contrast · automation clips versus event data, target links, the
recording filter, control-point density at 96 PPQ, monitor level versus rendered level · balance
procedure, peak meters and clipping, the dB correspondences (−6 dB halves, −12 dB leaves 25 %, ±1 dB
near the JND), the circular panning law's −3 dB at centre, narrow subtractive cuts, mono checks ·
rendering versus saving, the render-length hierarchy including the tail, split mixer tracks, external
hardware that must be recorded, and the MIDI-is-not-audio distinction · fixing scope and finishing.

## Instructional word count (computed in code)

Counted as `explanation + example + depth{definitions, mechanism, secondExample, mistake,
application, summary}`, whitespace-split (`pack_build.py`). Floor is 600 per lesson.

| Lesson | Words | Lesson | Words |
| --- | --- | --- | --- |
| 41 | 1258 | 46 | 1351 |
| 42 | 1416 | 47 | 1312 |
| 43 | 1458 | 48 | 1400 |
| 44 | 1367 | 49 | 1392 |
| 45 | 1282 | 50 | 1432 |

**Total: 13,668 instructional words.** Minimum 1258, maximum 1458, mean 1366.8. Every lesson is
between 2.1× and 2.4× the 600-word floor. The build, validation and counting scripts are kept
outside the repository at `~/.hermes/profiles/citachka-ai/cache/scratch/pc_pack_41_50/`
(`pack_lessons_a.py`, `pack_lessons_b.py`, `pack_lessons_c.py`, `pack_questions.py`,
`pack_build.py`).

## Arithmetic checks (computed with a tool, never by hand)

All figures below were produced by Python (`math` and plain division) and are reproduced in the
lesson text as computed values.

- **Tempos:** 84 BPM → beat 0.714 s, bar 2.857 s, 4 bars 11.429 s. 96 BPM → beat 0.625 s, bar 2.500 s,
  8 bars 20.000 s. 100 BPM → beat 0.600 s, bar 2.400 s, 4 bars 9.600 s, 8 bars 19.200 s,
  32 bars 76.800 s. Used in lessons 41, 42, 43, 44, 45, 46, 47, 48 and in level questions e and j.
- **Circle of fifths closure:** equal-tempered fifth = 700 cents; 12 × 700 = 8400 cents; 7 octaves =
  7 × 1200 = 8400 cents, so the circle closes exactly. Pure 3:2 fifth = 701.955 cents; 12 × 701.955 =
  8423.460 cents; excess over seven octaves = **23.46 cents** (the Pythagorean comma). Pure 5:4 third =
  386.314 cents against 400, a 13.686-cent difference. Lesson 42.
- **Borrowed-degree counts in C major:** iv = F–A♭–C (one borrowed degree, ♭6); ♭VI = A♭–C–E♭ (two,
  ♭6 and ♭3); ♭VII = B♭–D–F (one, ♭7); ♭III = E♭–G–B♭ (two, ♭3 and ♭7). Lesson 43 and unit question c.
- **Chord spellings verified by semitone arithmetic:** A major = A–C♯–E (bass options A / C♯ / E →
  root position / first inversion / second inversion); G = G–B–D (so G/B is first inversion, root G);
  F = F–A–C (so F/A is first inversion). Lesson 44 and unit question d.
- **Octave doubling:** middle C ≈ 261.63 Hz → C5 ≈ 523.25 Hz (doubling); low E string = 82.41 Hz;
  A2 = 110 Hz; A4 = 440 Hz. Lessons 45 and 49, and level question c.
- **Levels:** −3 dB → amplitude ratio 0.708 (≈70.8 %); −6 dB → 0.501 (≈50 %); −12 dB → 0.251
  (≈25 %); +6 dB → 1.995 (≈200 %); +1 dB → 1.122; −3 dB in power = 0.501. These reproduce the
  rounded figures in the Image-Line levels page. Lessons 49 and 48.
- **Automation rate:** a 12 dB rise across a four-bar section at 100 BPM = 12 dB over 9.6 s =
  **1.25 dB per second**. Lesson 48.
- **Timing resolution:** at 96 pulses per quarter note: quarter = 96 ticks, eighth = 48, sixteenth =
  24, 4/4 bar = **384 ticks**. Lesson 48 and level question g.
- **Render length:** 32 bars × 2.4 s = 76.8 s; file length 80.3 s; difference = **3.5 s**. Lesson 50
  and level question j.
- **Level question c:** 262 Hz doubled = 524 Hz (C5 = 523.25 Hz); −6 dB = 50 % of previous level,
  while 75 % would correspond to roughly −2.5 dB.

## JSON parse and invariant checks (exercised, all passed)

`python3 pack_build.py` printed `problems: NONE`, then the file was written, re-read from disk and
re-parsed with `json.loads`, and independently re-checked with `jq` against the on-disk file:

- valid JSON; `subject` = `music`; exactly one level; exactly two units; 5 lessons per unit; 10
  lessons total; 5 unit questions per unit; 12 level questions.
- lesson IDs exactly `41`–`50` in order; every lesson has `id, title, explanation, example, question,
  answer, distractor, correction, depth, readings, visual`; every `depth` object has exactly the six
  contract fields and none is empty; **no `russianItems` key anywhere** (verified by `jq` path scan: 0
  matches).
- every lesson ≥ 600 instructional words; every lesson has 2 readings (lesson 49 has 4); every
  reading URL is `https://` with a section-specific note; every visual has 5 labelled steps.
- 22 question IDs, all unique and all namespaced `uq-41-50-*` / `lq-41-50-*`; `answer` ≠ `distractor`
  for all 22; all 22 answers unique; all 22 distractors unique; zero overlap between the answer set
  and the distractor set.
- every `reviewLessonIds` entry is a two-digit ID in 01–50 and, in practice, one of `25, 30, 33, 34,
  36, 38, 39, 40` (previously published) or `41`–`50` (this pack). No future or invented lesson ID is
  referenced.
- an automated scan of the whole pack found no occurrence of `autoplay`, no video URL
  (`youtube.com`, `vimeo.com`, `watch?v=`), and no first-person claim of having run or recorded
  anything (`we ran`, `i ran`, `we recorded`, `we rendered`).

## Source verification results

21 distinct URLs, all HTTP **200**. Verified three ways: direct `curl` with a browser user agent,
`curl` without one, and retrieval of the page text for every Open Music Theory chapter cited (titles,
key takeaways and section headings were read from the live pages; no quotation was invented).

- **Open Music Theory, version 2** (`viva.pressbooks.pub/openmusictheory`, edited by Erin K. Maher) —
  13 chapters cited, content confirmed by retrieval: Introduction to Harmony, Cadences, and Phrase
  Endings (`intro-to-harmony`); Introduction to Harmonic Schemas in Pop Music (`intro-to-pop-schemas`);
  Diatonic Sequences in Middles (`diatonic-sequences`); Modal Mixture (`modal-mixture`); Inversion
  (`inversion`); Texture in Pop Music (`texture-in-pop-music`); Drumbeats (`drumbeats`); Melody and
  Phrasing (`melody-and-phrasing`); The Basics of Sight-Singing and Dictation
  (`the-basics-of-sight-singing-and-dictation`); Introduction to Form in Popular Music
  (`intro-to-form-in-popular-music`); AABA Form and Strophic Form (`aaba-form`); Major Scales, Scale
  Degrees, and Key Signatures (`major-scales`); Four-Chord Schemas (`4-chord-schemas`). The last two
  are reused from the existing packs and were re-read for the specific sections cited here.
  - **Access caveat, verified:** this Pressbooks host returns **HTTP 403 to a plain `curl` user agent**
    and **HTTP 200 to a browser user agent**. Every chapter above returned 200 with a browser agent and
    its text was read. A CI link checker without a browser user agent may therefore report these
    thirteen URLs as failures; they resolve normally in a browser, and they are the same host the
    existing music packs already cite.
- **Image-Line FL Studio manual** — 7 pages cited, all HTTP 200 with and without a user agent:
  `mixer_levelsandmixing.htm` (Levels, Mixing & Clipping), `mixer.htm` (Mixer Functions),
  `playlist_automationclip.htm` (Automation Clips), `recording_automation.htm` (Mouse & Controller
  Recording), `fformats_save_export.htm` (Export Project Dialog), `plugins/Fruity Balance.htm`,
  `plugins/Fruity Parametric EQ 2.htm`. Section names quoted in the reading notes were read from the
  live pages, including "Setting Output Mix Levels", "Using FL Studio Peak Meters", "dB Metering
  scales", "About Rendering", "Render length" and "Recording External Hardware".
- **MIDI.org** — `https://midi.org/about-midi-part-1overview`, HTTP 200. Reused from the existing
  pack for the "MIDI is not audio" distinction.

The specific claims drawn from these sources and used in the lessons include: harmonic function's
three categories with strong and weak predominants, and the phrase model's left-to-right direction
(`intro-to-harmony`); the schema table's circle-of-fifths, plagal, lament and subtonic-shuttle rows
and their rotations (`intro-to-pop-schemas`); "descending fifths (a.k.a. circle-of-fifths)" with the
model-and-copy writing procedure and the naming caveat (`diatonic-sequences`); "mixture changes the
quality of a chord, but not its function", the ♭-sign convention for lowered roots, and the
melody-only / single-chord / extended-tonicisation range of mixture (`modal-mixture`); "the bass
voice of the chord is NOT the same thing as the chord's root" and the inversion table (`inversion`);
the five functional layers and the statement that classical texture terms do not explain pop
(`texture-in-pop-music`); the backbeat definition and the syncopated kick (`drumbeats`); the four-bar
phrase, aa′, aa′b and srdc shapes and the caution that relationships are often not clear cut
(`melody-and-phrasing`); contour lines, solmization and protonotation as dictation strategies
(`the-basics-of-sight-singing-and-dictation`); sections of 8–24 bars with the list of surface features
that make a boundary apparent, plus core and auxiliary sections (`intro-to-form-in-popular-music`);
"A MIDI is not an audio format", the master-rendered-by-default statement, the render-length hierarchy
including the tail, and the external-hardware steps (`fformats_save_export.htm`); the panning-law
note that the default circular law reduces a centred signal by −3 dB, the ±6/±12 dB correspondences
and the ±1 dB just-noticeable difference, and "the Monitor Volume knob has no effect on rendered
levels" (`mixer_levelsandmixing.htm`); "All audio in FL Studio passes through the Mixer" and "FL
Studios Playlist is not bound to any 'Instrument' or 'Mixer' Track" (`mixer.htm`); automation clips
move linked controls, are not bound to a pattern and exist as a generator in a channel
(`playlist_automationclip.htm`); recorded automation is stored as event data in the selected pattern
and can be converted (`recording_automation.htm`).

Probes that were checked and **not** cited anywhere: no video URL of any kind is present in the pack,
and the visuals are text step sequences rather than playable media. No source is cited for a claim the
retrieved text does not support.

## Safety and accuracy handling

- **MIDI versus audio** is stated at the point of use in lessons 40's successor (48, 50) and unit
  question i: a MIDI file holds instructions and needs a sound source, and external hardware audio
  must be recorded before an ordinary render includes it.
- **No autoplay and no playback claims**: the pack contains no media URL and no autoplay language
  (verified by scan). Visuals are labelled step sequences, as the contract requires, and lesson 47's
  boundary test is a listening procedure rather than a claim about a file.
- **No claim that a DAW was run, a sound was observed, or a file was heard.** Every figure in the
  pack is labelled as computed or as documentation-derived, and lesson 50 states explicitly that no
  project was opened and no file was rendered.
- **Hearing and physical safety** are carried forward without repetition: monitoring levels are
  instructed to stay comfortable in lessons 48 and 49, and lesson 49 requires the round trip to be
  made at a matched level rather than by raising volume. No new medical or anatomical claim is made;
  the previously cited WHO material is not re-cited because this level introduces no new physical
  risk.
- **Musical accuracy:** function labels follow the source's own categories; inversion labels are
  derived from chord spellings rather than asserted; borrowed-degree counts are computed; the
  temperament arithmetic is computed and its limitation (equal temperament is a compromise) is stated
  where it appears; style-dependence is flagged wherever a rule of thumb is given (direction in
  fifthwise motion, mixture versus modulation, boundary markers, panning).
- **Assessment discipline:** the level states repeatedly that a quiz score is not evidence of playing,
  recording or mixing competence, and level question l is built on exactly that distinction. The
  contract's instruction not to treat a binary-choice quiz as proof of professional competence is
  honoured in the lesson text itself, not only in this note.

## Unresolved limitations

1. **Not integrated.** The file is staged under `src/lib/course-packs/staged/`; no route, registry
   entry, dashboard count or progress key points at these lessons until the parent integrates them.
2. **Wrapper keys are unchanged by design.** The pack repeats the full
   `{"subject": ..., "levels": [ ... ]}` shape used by `music-31-40.json`, so the parent can merge the
   level object rather than re-derive it. The level is level 5 and the lesson IDs are `41`–`50`.
3. **Question-ID convention.** The `uq-41-50-*` / `lq-41-50-*` namespace was mandated by the task and
   therefore differs from the existing files' `music-u3-a` / `music-l2-a` style. IDs are unique,
   self-consistent and collision-free, but the parent may wish to normalise them on merge; if so,
   only the `id` strings need changing.
4. **Bracketed reading index is borrowed.** `[1]`–`[8]` and `[10]`/`[14]`/`[19]`/`[26]`–`[29]` reuse
   the existing packs' numbering; new sources run `[30]`–`[41]`. A per-file numbering scheme would
   require editing the bracketed prefixes in reading titles only. Bracket `[25]` is still unused.
5. **Nothing audio-affecting was executed.** No DAW was opened, no part was recorded, no export was
   produced, and no automation curve was drawn. Latency, decibel, panning-law, PPQ, tail and
   render-length figures are computed from constants and cited against Image-Line documentation, not
   observed in a project. No one should describe this level as having been validated in a live
   session.
6. **Pressbooks 403 on automated fetch.** Thirteen Open Music Theory citations resolve in a browser
   (200 with a browser user agent, text read) but return 403 to a plain client. A naive link checker
   in CI may flag them; the host is already cited by the existing music packs.
7. **Physical details assume standard tuning.** The fret and register references (low E at 82.41 Hz,
  first-position range, the F♯ on the low E string) assume standard E A D G B E tuning and a
  right-handed instrument; alternative tunings and left-handed players would need different positions.
   This level adds no new fretboard instruction, so the exposure is small but real.
8. **Scope.** This is one level of two units toward the larger per-subject target, continuing after
   lessons 40. It does not complete the music course, and the parent should not describe music as
   finished on the strength of it.
