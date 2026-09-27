# Music expansion — lesson IDs 31–40 (new level, staged)

Worker-owned files only. Nothing else in the repository was modified; the parent owns integration,
registry wiring, and production verification.

## Paths written

| Path | Purpose |
| --- | --- |
| `src/lib/course-packs/staged/music-31-40.json` | The authored level, valid JSON, 107,265 bytes |
| `research/expansion/music-31-40.md` | This handoff note |

`src/lib/course-packs/music.json` was **not** touched. No registry, program, test, or dependency file
was edited. No server was started, no deploy, no browser automation.

## What was authored

- **Subject:** `music`. **New level title:** "Reading the page, naming the harmony, and capturing a first performance".
- **Lessons:** 10, IDs `31`–`40`, continuing after the existing maximum (30).
- **Units:** 2, five lessons each.
  - Unit 1, "Counting, intervals and keys you can name before you play": 31 counting note values/rests, 32 measuring intervals and interval tension, 33 key signatures and relative minors, 34 building diatonic triads and naming progressions, 35 changing guitar chords cleanly and safely.
  - Unit 2, "From MIDI controller to a first captured arrangement": 36 MIDI keyboard as controller (data, not audio), 37 recording MIDI/audio parts with takes and count-in, 38 quantisation versus groove, 39 layering guitar and keyboard without masking, 40 arranging sections with automation and delivering a documented render.
- **Questions:** 5 unit questions per unit (`music-u3-a`…`music-u3-e`, `music-u4-a`…`music-u4-e`) and **12 separate cumulative level questions** (`music-l2-a` … `music-l2-l`). Question IDs continue the existing convention (`music-u1-*`, `music-u2-*`, `music-l-*` are already used in `music.json`).
- **No `russianItems` key anywhere** (music subject).
- Readings use a bracketed reference number that **continues the existing pack's list**: `[1]`–`[8]` are reused where the source is identical to one already cited in `music.json`; new sources start at `[9]`. If the parent prefers a fresh local numbering, only the bracketed prefixes in reading titles need changing.

## Topic list

Counted rhythm values, rests, dots and ties · interval size and quality in semitones, consonance
as context · key signatures (order of sharps/flats, last-sharp and second-to-last-flat rules,
Circle of Fifths, relative minor) · diatonic triads and Roman numerals, four-chord schemas ·
guitar chord changes with posture, warm-up, breaks, strap height, hearing precautions ·
MIDI-versus-audio distinction, MIDI settings, velocity, controller latency · recording procedure
(capture type, filter, armed track, count-in, takes, input level, monitoring level) ·
quantisation mechanics (groove template, strength, sensitivity, duration/end-time modes, PPQ
arithmetic) versus swing and deliberate timing · masking, register separation, mono check ·
sections, density, automation clips, tails, rendering and a delivery note.

## Instructional word count (computed in code)

Counted as `explanation + example + depth{definitions, mechanism, secondExample, mistake,
application, summary}`, whitespace-split. Floor is 600 per lesson.

| Lesson | Words | Lesson | Words |
| --- | --- | --- | --- |
| 31 | 1068 | 36 | 959 |
| 32 | 1053 | 37 | 995 |
| 33 | 1094 | 38 | 959 |
| 34 | 1022 | 39 | 1070 |
| 35 | 1072 | 40 | 1097 |

**Total: 10,389 instructional words.** Minimum 959, maximum 1097, mean ≈ 1039. The count script is
kept outside the repo at `~/.hermes/profiles/citachka-ai/cache/scratch/pc_pack/build.py`.

## Arithmetic checks (computed with a tool, not by hand)

- **Tempo:** at 90 BPM a quarter = 0.667 s, an eighth = 0.333 s, a sixteenth = 0.167 s, a dotted quarter = 1.000 s, a 4/4 bar = 2.667 s; at 72 BPM a bar = 3.333 s (16 bars = 53.33 s); at 80 BPM a bar = 3.000 s; at 96 BPM a bar = 2.500 s (8 bars = 20 s, 16 bars = 40 s). Dotted quarter + tied eighth = 1.333 s, used in `music-l2-a`.
- **Intervals:** semitone table verified (m3 = 3, M3 = 4, P4 = 5, TT = 6, P5 = 7, P8 = 12); inversion rules checked (generic sizes sum to 9; semitone counts sum to 12: 3 + 9 and 5 + 7). Equal temperament deviation checked: pure 3:2 fifth = 701.955 cents vs 700 (1.955 cents); pure 5:4 third = 386.314 vs 400 (13.686 cents).
- **Key signatures:** one sharp (F♯) → G major, relative E minor; two flats (B♭, E♭) → B♭ major, relative G minor (10 − 3 = 7 = G).
- **Triads:** diatonic qualities in C major verified by semitone counting as I, IV, V major / ii, iii, vi minor / vii diminished (4+7, 3+7, 3+6), and the same pattern re-derived in G major. I–V–vi–IV in C = C G Am F; in G = G D Em C; in D = D A Bm G.
- **Fretboard:** low E = 82.41 Hz (MIDI 40) up to high E = 329.63 Hz (MIDI 64); A2 = 110, D3 = 146.83, G3 = 196, B3 = 246.94; F♯ verified at low E fret 2, high E fret 2, D fret 4 (50 + 4 = 54), B fret 7 (59 + 7 = 66); A4 = MIDI 69 = 440 Hz; C4 = MIDI 60.
- **Latency:** 256 samples at 48 kHz = 5.333 ms one way (10.667 ms round trip); 512 samples = 10.667 ms one way (21.333 ms round trip).
- **Quantisation:** 16th at 90 BPM = 166.667 ms, pair = 333.333 ms; 60 % swing → 200.0 / 133.3 ms (ratio 1.500); 66.7 % → 222.3 / 111.0 ms (ratio ≈ 2.00). At 96 PPQ: 4/4 bar = 384 ticks, quarter = 96, eighth = 48, 16th = 24.
- **Levels:** −6 dB ≈ half amplitude, −12 dB ≈ 25 % of original level (from the Image-Line dB scale section); −3 dB = 0.501 power ratio.

## JSON parse and invariant checks (exercised, all passed)

Run against the written file, which was re-read from disk and re-parsed:

- valid JSON; `subject` = `music`; one level; two units; 10 lessons; 10 unit questions; 12 level questions.
- every lesson has `id, title, explanation, example, question, answer, distractor, correction, depth{6 fields}, readings[], visual{title, description, steps[]}`; lesson IDs exactly `31`–`40` in order; no `russianItems`.
- every lesson ≥ 600 instructional words; every lesson has ≥ 1 reading with an `https://` URL and a section-specific note; every visual has ≥ 3 labeled steps.
- unit quizzes have exactly 5 questions each; the level has exactly 12; question IDs unique; `answer` ≠ `distractor` per question; **all 22 answer strings unique, all 22 distractor strings unique, and no text serves as both an answer and a distractor**; every `reviewLessonIds` entry is either 31–40 (this pack) or 21–30 (existing course).

## Source verification results

28 distinct URLs. **18 return HTTP 200** to a direct request, all in the Image-Line FL Studio manual
and on WHO / MIDI.org / University of Iowa. **10 return HTTP 403 to non-browser clients**
(Pressbooks/VIVA bot protection) but each was fetched successfully with the extraction tool, which
returned the live page title and section text — all section directions in the notes were written from
that retrieved text, and no quotation was invented. The same Pressbooks host is already cited in
`music.json`, and the lessons state the access caveat where relevant.

- Open Music Theory (10 chapters, content confirmed by retrieval): Notating Rhythm; Simple Meter and Time Signatures; Other Rhythmic Essentials; Intervals; Major Scales, Scale Degrees, and Key Signatures; Minor Scales…; Triads; Roman Numerals; Four-Chord Schemas; (chapter titles matched to lesson notes).
- Image-Line manual, HTTP 200 and section names confirmed by retrieval: Piano roll; Piano roll Quantizer; Recording overview; Note/MIDI Recording; Audio Recording; Recording Automation; Automation Clips; Controller/MIDI Settings; Hardware Controllers; Levels, Mixing & Clipping; Mixer Functions; The Playlist; Exporting Audio & MIDI; Fruity Parametric EQ 2; Fruity Balance.
- WHO: Deafness and hearing loss fact sheet; Make Listening Safe initiative (both 200).
- MIDI.org: About MIDI, Part 1: Overview (200; `https://midi.org/about-midi` redirects here).
- University of Iowa, Carver College of Medicine — Music and Medicine, "Guitar Playing — Part 1: Health Considerations" (200).

Probes that failed and were therefore **not** cited: `/html/midi_settings.htm`, `/html/options_midi.htm`,
`/html/automation.htm`, `/html/playlist_automation.htm` (404 on image-line.com), and
`openmusictheory/chapter/major-scales-key-signatures/`, `…/chord-progressions/`,
`…/key-signatures/` (do not exist). No video URL is cited anywhere; visuals are text step sequences,
not playable media, and no autoplay is claimed.

## Safety and accuracy handling

- Physical steps are given wherever relevant: seated setup, neck angle, thumb behind the neck, wrist
  kept near-straight, fingertips just behind the frets, minimal grip pressure, 5-minute breaks after
  about 15–30 minutes, strap height cautions, warm-up before fast material.
- Hearing: lesson 35 and 37 cite WHO material on avoidable noise-induced hearing loss and instruct
  low monitoring levels; the FL manual's statement that the monitor volume knob does not change
  rendered levels is used to separate monitoring from delivered level.
- MIDI is consistently distinguished from audio: the FL manual's "MIDI does not transmit audio"
  and MIDI.org's "MIDI is not audio" are the anchors, and every recording/production lesson states
  which capture type stores instructions and which stores sound.
- Athletic-adjacent claims are attributed as reported survey associations, never as proof; the
  lessons direct persistent symptoms to qualified advice rather than diagnosis or treatment.
- No claim is made that a quiz score demonstrates playing or production competence; lesson 40
  states this limit explicitly.

## Unresolved limitations

1. **Not integrated.** The file is staged, not registered; no route, dashboard, or progress key
   points at these lessons until the parent integrates it.
2. **Quiz IDs assume continuation.** `music-u3-*`, `music-u4-*`, and `music-l2-*` were chosen to
   avoid the existing `music-u1-*`, `music-u2-*`, `music-l-*` IDs. If the parent's convention differs,
   the IDs need a rename before merge (they are unique and self-consistent as written).
3. **Reference numbering borrows the existing list.** Readings numbered `[1]`–`[8]` reuse sources
   already cited in `music.json`; the new sources are `[9]` onward. A per-file numbering scheme would
   require editing the bracket prefixes only.
4. **Audio-affecting claims are not executed here.** No DAW was run, no part was recorded, no export
   produced: latency, swing, and level arithmetic are computed and cited against documentation, not
   observed in a project. Anyone integrating should not describe the level as having been validated
   in a live DAW session.
5. **Pressbooks 403 on automated fetch.** Ten citations resolve in a browser but block non-browser
   clients; a link checker in CI may report them as failures. They are the same host the existing
   music pack already cites.
6. **Only the tablature-adjacent physical details are generic.** Fret positions assume standard
   tuning (E A D G B E); alternative tunings and left-handed players would need different positions.
7. **Scope.** This is one level of two units toward the larger per-subject target, not completion of
   it; the parent should not describe music as finished.
