# Retroactive MIDI Capture — Always Listening

<!--
title: "Retroactive MIDI Capture — Always Listening"
description: "Prism is always listening. Capture up to 16 bars of recently played MIDI after the fact, with three selectable sources and automatic phrase detection. No other sequencer has source selection."
keywords: MIDI capture, retroactive recording, MIDI looper, idea capture, always listening sequencer, MIDI step sequencer
category: feature
onboarding_tier: basic_week_one, pre-fx_power_user
related: [getting-started, fuse-modes, chord-blocks]
-->

**Play freely. Capture what worked. After the fact.**

---

## What Retroactive Capture Is

Prism is always listening. While you play — whether you're performing on an external keyboard, tapping trigs in and out live, or running a sequence — Prism continuously buffers up to 16 bars of MIDI data in the background. You never have to be in record mode to capture an idea. If you play something that works, you can grab it after it's already happened.

This is retroactive capture: the ability to retrieve what you just played, without having pressed record first.

---

## How to Trigger It

Hold the **Capture** button. The notification bar transforms into a piano roll view showing what's in the capture buffer — a visual representation of the notes Prism has been quietly collecting. From here you have two options:

- **Fast capture** — press the dotted circle next to the piano roll to immediately capture everything in the buffer into your current pattern.
- **Detailed capture** — tap the piano roll to open the full capture view, where you can select a specific region, adjust boundaries, and review what you're about to capture before committing.

---

## Capture Sources — The Key Differentiator

The source selector is what makes Prism's capture system architecturally different from anything else. Three sources:

**Live Input** captures what you played on an external keyboard or pad controller — the raw MIDI coming into Prism from outside. Use this to retrieve a melodic idea you improvised but weren't recording.

**Post-FX** captures Prism's final MIDI output after all processing — arpeggiation, harmonization, Warp Filter transformations, everything. The sounds you actually heard get baked into a static sequence.

**Pre-FX** captures what the sequence trigs played before any transformations. This is the most powerful source, and it has no equivalent anywhere else: it lets you **perform with your own sequence as if it were an instrument**. Tap trigs in and out in real time — add a kick on the fly, mute the hi-hat, bring in a note — then capture that live performance as a new sequence. You're not editing a pattern. You're performing with it, then capturing the result.

No other sequencer — hardware or software — offers capture source selection. Elektron has no retroactive capture at all. Hapax has looper-style recording but no retroactive buffer or source selection. Deluge has resampling but for audio, not MIDI.

---

## Phrase Detection

Prism's capture system includes automatic phrase detection. Rather than grabbing an arbitrary chunk of the buffer, phrase detection uses silence to find musical boundaries — the natural pauses between phrases. The result is a clean, musically coherent capture rather than a region that starts mid-note or cuts off a phrase.

You can also use piano roll region selection to manually define exactly what you want to grab from the buffer when automatic detection isn't precise enough.

---

## Capture Destinations

Once you've decided what to capture, you choose where it goes:

- **Overwrite** the current pattern with the captured material
- **Merge** the captured material with what's already in the pattern
- **New pattern** — send it to a fresh pattern slot, preserving what you already have

---

## Pre-FX Capture as a Creative Workflow

The pre-FX source deserves its own emphasis because it changes how you can work with the sequencer entirely.

Normal sequencing workflow: you place trigs, configure them, and play back the result. It's compositional — you're building something.

With pre-FX capture, you can flip this into a performance workflow: run your sequence, then perform with it. Tap trigs in and out, change which steps fire, build tension and release — and when you've played something you like, capture that live improvisation as a static pattern. The sequencer becomes a live instrument, not just a playback engine.

> For a detailed comparison against Hapax, Elektron, and Deluge, see **Prism vs. Hardware Sequencers**.
