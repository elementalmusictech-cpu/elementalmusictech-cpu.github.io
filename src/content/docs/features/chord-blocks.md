# Chord Blocks — Reference-Based Harmony in Prism

<!--
title: "Chord Blocks — Reference-Based Chord Sequencing"
description: "Prism's Chord Blocks are reusable harmonic objects — change one chord and every trig referencing it updates across your entire arrangement. 4 swappable banks tied to scenes. No other MIDI step sequencer has this."
keywords: chord sequencer, chord progression sequencer, harmony sequencer, chord sequencer iOS, chord block, iPad step sequencer, MIDI step sequencer
category: feature
onboarding_tier: week_one
related: [fuse-modes, scales, harmonizer, scenes, capture]
-->

**References, not copies. Change one chord, and your entire arrangement follows.**

---

## What Chord Blocks Are

Prism's Chord Blocks are a chord sequencing system built on references, not copies. A Chord Block is a container that holds a chord voicing — place it on any trig across any track, and that trig plays the chord stored in the block. You get 8 blocks, organized into 4 swappable banks (A/B/C/D), for 32 total chord objects per project.

The key idea: when you place a Chord Block, you're inserting a **reference**, not a copy. Every trig that uses that block points back to the same source. Change the chord in the block and every trig referencing it — across every track, every pattern, the entire arrangement — updates instantly.

This means you can build an entire rhythmic arrangement first, placing blocks wherever you want chords to land, and then reshape the harmony globally by editing the blocks themselves. You're not hunting through trigs to update individual notes. You change the source, and everything follows.

Chord Blocks exist **globally across the project**, not per track. Build chords in one track and reuse them anywhere. Edits update everywhere they're referenced.

---

## Setting Up Chord Blocks

Chord Blocks are one of the two note input pairings available on tonal tracks. In **Seq Setup**, set the keypad note mode to Mono + Chord Blocks. Once enabled, the keypad's note tab cycles between Mono (single notes) and Chord Block mode when you tap it.

In Chord Block mode, you'll see 8 block slots. Tap an empty cell marked "+" to create a new block. Long-press a block to enter edit mode — make sure **Block Edit** is enabled (check the edit button in the lower-right corner of the keypad). While edit mode is active, long-pressing a pad opens that block for note editing, where you can define the chord voicing.

---

## Placing and Editing Blocks

Once you've defined some blocks, place them on trigs the same way you'd place notes — select the block on the keypad, then tap steps on the step grid. The trig now references that block.

To change what a block contains, edit the block itself — not the individual trigs. Every trig referencing that block hears the change immediately. This is the fundamental difference from normal note entry: you're editing the source, and all references follow.

Copy and paste blocks between cells to create variations. A pasted block is a new independent object — changing the copy won't affect the original.

---

## Banks and Scenes

The 8 blocks are organized into **4 banks (A/B/C/D)**. Each bank holds its own set of 8 chord blocks, giving you 32 total chord objects in a project. Switch banks and every trig in your arrangement that references a block now pulls from the new bank's set — the rhythmic structure stays identical, but the harmonic content transforms completely.

Banks are **tied to scenes**. The active bank is stored as part of each scene's state, so switching scenes can simultaneously change your arrangement's patterns, mutes, *and* harmonic content. Scene 1 might use Bank A (major key feel), Scene 2 uses Bank B (minor variation), Scene 3 uses Bank C (modal reharmonization) — same rhythmic arrangement, completely different harmony, one tap to switch.

This is where Chord Blocks become a performance tool, not just a composition tool. You're not editing chords during a performance — you're switching between pre-built harmonic worlds.

---

## Character Settings

Each Chord Block carries more than just notes. Character settings travel with the block, shaping how the chord *feels* when it plays:

- **Strum amount** — spreads the chord notes across time, simulating a strummed instrument. Higher values create a wider spread.
- **Strum humanization** — adds subtle timing variation to the strum, so it doesn't feel mechanically even.
- **Random velocity** — introduces velocity variation across the chord's notes, giving each voicing a slightly different dynamic character every time it plays.

These settings are part of the block, not the trig. Every trig referencing that block inherits its character — the feel of the chord travels with the harmony.

---

## Additional Tools

- **Block mute** — silence a block without removing it from trigs. Useful for A/B testing harmonic ideas.
- **Side-by-side comparison view** — compare two blocks visually to evaluate voicings before committing.
- **Custom chord sets** — save and recall block configurations for reuse across projects.
- **Chord inversion tools** — quickly revoice chords without manually rearranging notes.

---

## How It Fits Together

Chord Blocks interact with several other Prism systems:

- **Scale locking** — all chord content respects the global scale. Blocks stay in key regardless of transpositions or transformations applied elsewhere.
- **Fuse Modes** — when a track using Chord Blocks feeds into another track via Echo or Melt, the block's chord data flows through the connection. Change the block, and the dependent tracks respond.
- **Harmonizer** — harmonic processing applied on top of Chord Block output creates layered, evolving voicings from a single block source.
- **Capture** — snapshot your current block configurations with the Capture button to preserve a harmonic state before experimenting.

---

## Why This Matters

Every other step sequencer — hardware or software — treats chords as data baked into individual trigs. Place a C major chord on step 1, and that trig contains C, E, G. Want to change it to C minor? You edit that trig. And every other trig where you placed the same chord. Across every track. Across every pattern.

Prism's Chord Blocks are architecturally different. The chord exists in one place. Every trig points to it. Change the source and everything updates — globally, instantly, across the entire arrangement. Combined with bank switching tied to scenes, you can transform the harmonic content of a full composition in a single gesture. No other sequencer — at any price — has this.

> For a detailed comparison of Chord Blocks and other Prism features against hardware sequencers like Hapax, Elektron, OXI One, and Cirklon, see **Prism vs. Hardware Sequencers**.
