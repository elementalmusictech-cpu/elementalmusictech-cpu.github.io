# From Blank Pattern to Full Arrangement

<!--
title: "From Blank Pattern to Full Arrangement — A Prism Walkthrough"
description: "A start-to-finish walkthrough of building a complete song in Prism using patterns, Chord Blocks, Fuse Modes, scenes, mute profiles, and Song Mode."
keywords: MIDI step sequencer, step sequencer iOS, AUv3 sequencer, song mode sequencer, iPad step sequencer
category: workflow
onboarding_tier: week_one_to_power_user
related: [getting-started, chord-blocks, fuse-modes, euclidean-rhythms, retroactive-capture]
-->

**Start with a kick drum. End with a full song.**

This walkthrough covers a complete session in Prism — from the first trig to a finished arrangement in Song Mode. Every decision is explained, and every system connects to the next. By the end, you'll have four scenes, a Song Mode timeline, and an arrangement that could play from start to finish without touching the screen.

---

## Step 1 — The Foundation: Drums

Start with a drum track. Select a drum profile that maps the 16 pads to your instrument's note map, then build your main groove one pad at a time.

**Kick (Pad 1):** Place trigs on steps 1, 5, 9, and 13 for a standard four-on-the-floor. Or don't — place them where they feel right for your style.

**Snare (Pad 2):** Steps 5 and 13 for a standard backbeat, or syncopate it.

**Hi-hat (Pad 3):** This is where Prism's per-pad independence earns its keep. Set the hi-hat pad's sequence length to something that doesn't divide evenly into 16 — try 7 steps or 11 steps. It will loop against the kick and snare in a pattern that takes many bars to fully cycle, creating a natural polyrhythmic feel without any additional programming. If you have the Euclidean Sequencer Extension, add a 3-layer Euclidean pattern to the hi-hat for instant complexity.

This is **Pattern 1** on your drum track — the main groove.

Now create **Pattern 2**: a fill. Switch to Pattern 2, copy Pattern 1 as a starting point, then add density and variation. More hits, a different hi-hat pattern, accent the last two steps before the section change. This pattern will play at the end of sections to signal the transition.

---

## Step 2 — Harmony: Chord Blocks

Add a tonal track for chords. In Seq Setup, enable Mono + Chord Blocks as the note input pairing.

Open the Chord Blocks keypad. Create four blocks — these will be your core harmonic vocabulary for the song. Edit each block to define the chord voicing. Add strum amount to taste: a small strum value gives the chord a natural, slightly spread feel. Add subtle random velocity so each voicing has slightly different dynamics every time it plays.

Place the blocks on the step grid: maybe Block A on steps 1–4, Block B on steps 5–8, Block C on steps 9–12, Block D on steps 13–16. This is your verse progression.

Now set the key and scale in the FX section — everything in Prism respects this, so every chord block stays in key regardless of any transformations applied later.

This is **Pattern 1** on your chord track.

For **Pattern 2** (your chorus), create a new chord block bank. In the Banks panel, switch to Bank B and define a new set of four blocks — a different progression, a brighter or denser voicing. The step layout on the grid is identical to Pattern 1, but the blocks now point to Bank B's chords. Same rhythm, completely different harmony.

---

## Step 3 — Melody: Fuse Modes

Add another tonal track for melody. Rather than building an independent sequence, use Echo.

Set this track to Echo your chord track. Now it plays the same notes as your chord progression — but with its own sequence length, loop points, and FX processing. Set a different sequence length (say, 12 steps instead of 16) and the melody begins to shift its relationship to the chord progression over time, landing on different chord tones on each pass.

Apply a Warp Filter to the melody track: set it to Mono filter mode so only one note from the chord plays at a time. Now it sounds like a single melodic line derived from the harmonic content, not a chord echo.

Add an arpeggiator. With the Echo providing note content and the arpeggiator shaping playback, your melody track generates evolving single-note phrases from the harmonic source — without a single note placed manually.

---

## Step 4 — Texture: Melt

Add a fourth track and set it to Melt. Source: the drum track for rhythm. Source: the chord track for pitch.

Melt extracts the kick, snare, and hi-hat rhythm and applies the chord track's pitches to it. Your percussion pattern now speaks in harmonic language — a rhythmically active melodic line that shares content with both the drums and the harmony. Adjust the Pitch Filter keypad to control which chord notes come through: solo the lowest note for a bass-like line, or open it up for full chord voicing.

This track produces something that couldn't exist without both source tracks — a third musical idea that's entirely derived from what's already there.

---

## Step 5 — Build Scenes

You now have four tracks with patterns. Time to organize this into sections.

Open the Pattern | Scene keypad tab and switch to the Scenes view.

**Scene 1 — Intro:** Mute the melody and Melt tracks. Drum Track on Pattern 1, Chord Track on Pattern 1 (Bank A). Tap an empty scene slot to save this state.

**Scene 2 — Verse:** Unmute everything. Drum Track on Pattern 1, Chord Track on Pattern 1 (Bank A), Melody and Melt active. Save to the next scene slot.

**Scene 3 — Chorus:** Drum Track on Pattern 1, Chord Track on Pattern 2 (Bank B — your chorus chords). Melody and Melt follow the chord change automatically since they reference the chord track. Save to the next slot.

**Scene 4 — Outro:** Drum Track on Pattern 2 (the fill), everything else as it was in the verse. Save.

Now switch between scenes during playback. Each tap moves the entire arrangement — all tracks, all patterns, all mutes — in one gesture.

---

## Step 6 — Mute Profiles

Each scene has 8 mute profiles. While in Scene 2 (Verse), build two variations:

**Mute Profile 1:** Full instrumentation — all tracks active.
**Mute Profile 2:** Stripped — drums and bass/chord only, melody and Melt muted.

Switch between these during playback for instant dynamics within the same scene. A 32-bar verse can open stripped, build to full, and strip back down without a scene change.

---

## Step 7 — Song Mode

Song Mode chains scenes into a linear arrangement. Press the Song button to enter it.

Build the chain: Intro × 4 bars → Verse × 8 bars → Chorus × 8 bars → Verse × 8 bars → Chorus × 8 bars → Outro × 4 bars.

Each step in the song chain can be set to Loop (repeats for the specified duration), Once (plays through exactly once), or Muted (skips). You can also attach a mute profile to each song step — so the first 4 bars of the verse run with Mute Profile 2 (stripped), then the next 4 bars switch to Mute Profile 1 (full) automatically.

Enable Song Mode and press play. Prism runs the entire arrangement from start to finish without any intervention.

---

## What You've Built

Starting from a blank project:

- A drum track with polyrhythmic pad independence
- A chord progression using Chord Blocks with two swappable banks for verse and chorus
- A melody track derived from the chord content via Echo, shaped by Warp Filter and arpeggiator
- A Melt track combining drum rhythm with harmonic pitch
- 4 scenes representing song sections
- 2 mute profiles per scene for ensemble variation
- A Song Mode timeline arranging everything into a complete structure

The same workflow scales down to a two-scene live set or up to a 16-track arrangement with dozens of scenes. Prism grows with the complexity of what you're building.

> For deeper documentation on the systems used in this recipe, see: **Chord Blocks**, **Fuse Modes**, **Euclidean Rhythms**, **Retroactive Capture**, and **Getting Started**.
