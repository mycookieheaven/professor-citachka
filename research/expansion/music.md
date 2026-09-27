# Music expansion handoff

## Delivered scope
One new level, two units, ten lessons (21–30), five fresh questions per unit, twelve fresh cumulative questions. This is a bounded two-unit batch, not completion of the requested long-term curriculum.

Files: `src/lib/course-packs/music.json` and `research/expansion/music.md`.

## Prerequisites and design
Read `music-program.ts` and `programs.ts`: the source contains additional rows, but the published non-Russian program slices at 20; IDs 21–30 therefore continue the current published sequence without collisions. Lessons extend pulse, rests, triads, comfortable playing, MIDI and workspace knowledge. Original practice tasks distinguish physical, listening, and DAW evidence; timed micro-practice, model feedback and rubrics are included. Every visual is an original labeled reasoning sequence, not a video. No invented media, autoplay, browser, hosting, deployment, or shared edits.

## Authored instruction
Word count uses Unicode word tokens with internal apostrophes/hyphens retained, across explanation, example and six depth fields only.

- 21: Offbeat attacks without losing the beat — 754 words
- 22: Shape a phrase with note releases — 761 words
- 23: Hear major and minor by changing the third — 755 words
- 24: Use common tones to make chord changes smaller — 774 words
- 25: Build a recognizable motif and a contrasting answer — 770 words
- 26: Quantize selectively while preserving intention — 735 words
- 27: Design accents with velocity rather than force — 745 words
- 28: Arrange eight bars with an audible beginning and ending — 749 words
- 29: Trace signal flow and balance without chasing loudness — 736 words
- 30: Export, listen back, and defend the miniature — 782 words

Total instructional words: **7561**; minimum lesson: **735**.

## Verification
JSON parsed; exact level/unit/lesson/question counts, sequential IDs, unique assessment IDs, answer/distractor distinction and valid review references passed. Source bodies were read with web_extract; HTTP rechecks follow:

- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/pianoroll.htm: 200
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/playlist.htm: 200
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/mixer.htm: 200
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/fformats_save_export.htm: 200
- https://viva.pressbooks.pub/openmusictheory/chapter/triads/: HTTP Error 403: Forbidden
- https://viva.pressbooks.pub/openmusictheory/chapter/simple-meter-and-time-signatures/: HTTP Error 403: Forbidden
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/pianoroll_qnt.htm: 200
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/mixer_levelsandmixing.htm: 200

Arithmetic exercised in Python: 60/80 = 0.75 seconds per quarter-note beat; 0.75/2 = 0.375 seconds per equal eighth subdivision; 4×0.75 = 3 seconds per bar; 8×4×0.75 = 24 seconds for the musical body, excluding tails.

## Evidence and limitations
- Image-Line documents note sequencing in the Piano roll.[1]
- The Playlist reference supports arrangement and clip distinctions.[2]
- Mixer documentation establishes instrument-to-insert routing and Playlist/Mixer independence.[3]
- Export documentation distinguishes audio rendering, MIDI data, external hardware capture and effects options.[4]
- Open Music Theory grounds chord quality, identity, voicing and slash-bass notation.[5]
- Open Music Theory grounds simple-meter beats, subdivisions, rests and counting.[6]
- Quantizer documentation distinguishes start-time, duration, endpoint and sensitivity controls.[7]
- The levels guide distinguishes internal headroom, output limits, velocity response and monitoring from rendering.[8]

The two Open Music Theory pages were successfully retrieved and read through web_extract; the additional direct HTTP rechecks returned 403. Their content verification succeeded through the web tool, but automated direct access remains restricted. Composition exercises and rubrics are original pedagogy, not quotations or universal stylistic laws. FL Studio controls can vary by installed version. No learner performance, audio rendering, playback, integration or production route was executed by this author; parent owns app integration and Vercel verification. Binary quizzes do not certify practical or professional competence.

## Sources

[1] https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/pianoroll.htm
[2] https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/playlist.htm
[3] https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/mixer.htm
[4] https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/fformats_save_export.htm
[5] https://viva.pressbooks.pub/openmusictheory/chapter/triads
[6] https://viva.pressbooks.pub/openmusictheory/chapter/simple-meter-and-time-signatures
[7] https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/pianoroll_qnt.htm
[8] https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/mixer_levelsandmixing.htm
