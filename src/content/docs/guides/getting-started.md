# Getting Started with Prism — MIDI Step Sequencer for iPhone and iPad

<!--
title: "Getting Started with Prism"
description: "Your first session with Prism, a 16-track AUv3 MIDI step sequencer for iPhone and iPad. Learn to load Prism in a host, build drum and tonal patterns, work with scenes, and start sequencing."
keywords: MIDI step sequencer, step sequencer iOS, AUv3 sequencer, iPad step sequencer, 16-track sequencer, getting started
category: guide
related: [chord-blocks, fuse-modes, retroactive-capture, euclidean-rhythms]
-->

Prism is a 16-track AUv3 MIDI step sequencer for iPhone and iPad. This guide covers everything you need for your first session — loading it up, placing your first notes, building a pattern, and saving your work. Nothing here requires any prior step sequencer experience, and nothing here will overwhelm you. The deeper features are there when you're ready. For now, let's play.

---

## Loading Prism in a Host

Prism is a MIDI step sequencer — it sends notes and control data to other instruments, but it doesn't make sound on its own. You load it as an AUv3 MIDI plug-in inside a host app (AUM, Logic Pro for iPad, Cubasis, Loopy Pro, and others all work), and it sequences whatever synths, samplers, or drum machines you load alongside it.

Here's the short version:

1. Open your host app.
2. Create a new MIDI track and load Prism as the MIDI source.
3. On that same track (or a connected track, depending on your host), load a synth or drum machine as the audio source.
4. Press play in the host — Prism syncs to the host's transport automatically.

If you hear sound when you tap trigs in Prism, you're connected. If you don't, check that Prism's MIDI output is routed to your instrument's MIDI input in the host's routing view.

> **Tip:** Double-tap a track in Prism to send a MIDI signal — in some hosts, this opens the connected instrument's window, which is a quick way to confirm your routing is working.

---

## The Interface — What You're Looking At

Prism's interface is made of four areas that work together:

- **Top Bar** — global controls that are always visible: transport (play, stop, record), Copy, Paste, and Shift. Transport syncs with your host, and BPM is derived from the host's clock.
- **GUI Screen** — the visual heart of Prism, where each mode (sequencer, CC, FX) comes to life. This area changes based on what you're editing.
- **Keypad** — a multi-purpose grid for input, control, and performance. On drum tracks it's your drum pads; on tonal tracks it becomes a note keyboard. It also handles scene selection, pattern switching, and more — its function adapts to context.
- **Sequencer Step Grid** — the timeline where your trigs live. Each step on this grid is a position in time. Tap a step to place a trig; tap again to remove it.

The distinction between the **keypad** and the **step grid** is important: the keypad is *what* you play (which sound, which note), the step grid is *when* it plays (which step in the sequence). They work together but they're separate areas of the screen.

The **Shift button** is a global modifier — hold it to access secondary functions on almost every control. You don't need Shift for anything in this guide, but know it's there. It doubles what every button can do.

To switch between tracks, tap the **Track Select** button below the sequencer steps, or tap the **notification bar** at the top. This opens the Track Select / Mixer view where all 16 tracks are accessible.

Prism works in both horizontal and vertical orientation, and has layouts optimized for iPhone and iPad. On iPad, there's a **thin/utility layout** that shows 32 trigs in a compact view — useful when Prism shares screen space with other plug-ins in your host.

> **Tip:** Prism has a built-in **Info** tool — open it from the top of the Settings menu. When Info is active, tap or drag across any control to see a description of what it does.

---

## Your First Drum Pattern

Let's start with drums — they're the fastest way to hear what Prism does.

1. **Select a track** and set it to drum mode. Drum tracks give you 16 pads, each mapped to a different sound.
2. **Select a drum profile** to map the pads to your loaded drum instrument. Prism includes factory profiles for popular apps (Korg Gadget series, others). If your instrument isn't listed, you can create and save a custom profile — but for now, a factory profile or the default GM mapping will get you started.
3. **Tap a pad on the keypad** to select a drum sound and make it the active pad. You'll hear the sound play when you tap it. The active pad's sequencer appears on the step grid.
4. **Tap steps on the step grid to place trigs.** Each active trig lights up. Tap again to remove it. These trigs determine when that drum sound plays in the sequence.
5. **Select another pad** and place trigs for the next sound. Build up your pattern one sound at a time — kick, snare, hi-hat, whatever your instrument offers.
6. **Press play.** Your pattern loops and you hear your drum sequence.

That's it — you've built a drum pattern. Prism's drum sequencer is deeper than it looks: each of those 16 pads is actually its own independent mini-sequencer with its own length, resolution, and settings. But for now, just place trigs and listen.

> **Tip:** Each drum pad can run at its own sequence length. A 16-step kick against a 7-step hi-hat creates polyrhythmic grooves automatically — but that's a topic for later.

---

## Your First Tonal Sequence

Switch to a track set to tonal mode (or select a different track and set it to tonal). Tonal tracks handle melody and harmony.

1. **Set your key and scale.** Prism has a single global key and scale — find it in the **FX** section. It shapes all pitch behavior across every track. Select from 50+ built-in scales, or long-press the mode selector to define a custom scale. Once a scale is active, everything stays in key — not just the notes you place manually, but everything the arpeggiator, harmonizer, randomizer, and even your external MIDI keyboard sends through any track.
2. **Choose a note input mode on the keypad.** The keypad has multiple tabs along its edge — tap a tab to switch its function, and tap the same tab again to cycle through modes within it. The note tab has two modes available at a time: **Mono** (a keyboard-style view where each pad is one note in the scale) paired with either **Smart Chords** (chord-building tools) or **Chord Blocks** (reference-based harmonic objects). Which pairing is active is set in Seq Setup. For now, Mono is all you need — each pad plays one note in the active scale.
3. **Place trigs on the step grid and assign notes from the keypad.** The keypad selects *which* note; the step grid determines *when* it plays. Slide to enter notes quickly, or tap deliberately for precision.
4. **Press play** and hear your melodic sequence alongside your drums.

Scale locking is one of Prism's architectural decisions — it's not a filter you turn on and off, it's woven into every system that generates or transforms notes. You can explore freely knowing the results will be musically coherent.

### Editing Trigs — Trig Focus

Once you've placed trigs, you'll want to edit them. **Long-press any trig** on the step grid to enter **Trig Focus** — a dedicated editing state where the GUI, keypad, and step grid all update to show that trig's parameters: pitch, velocity, length, timing, conditionals, and FX.

While in Trig Focus, you can tap additional trigs to add them to your selection and edit multiple steps at once. Long-press a second trig to select everything between the two. Release to exit, or tap the **Lock** button to stay in Trig Focus after you let go — useful when you want to make several adjustments without re-entering the state each time. Slide upward while holding a trig for a momentary lock that releases when you're done with that edit.

Trig Focus has three tabs: **Notes** (pitch, velocity, length, conditionals), **Timing** (micro-timing nudges and position shifts), and **Trig FX** (per-step effects like ratchet, strum, pitch, and velocity FX). You'll use Trig Focus constantly — it's how you turn a basic sequence into something expressive.

---

## Patterns — Variations Within a Track

Each track has **8 patterns**. A pattern is a single sequence — the trigs you've placed, their notes, velocities, and any settings attached to them.

Think of patterns as variations. Your drum track might have pattern 1 as the main groove, pattern 2 as a fill, pattern 3 as a breakdown beat. Your tonal track might have pattern 1 as the verse melody and pattern 2 as the chorus.

- **Tap a pattern slot** to switch to it. During playback, the change syncs to the next bar to keep everything in time — the new pattern won't cut in mid-bar.
- **Each pattern is independent** — its own trigs, its own length, its own settings. Features like the arpeggiator, Euclidean generator, and Warp Filter are pattern-bound, meaning they travel with the pattern. Switch patterns and those settings switch too.
- **Different tracks can be on different patterns** at the same time. Your drums on pattern 1 while your bass is on pattern 3 — mix and match freely.

> **Tip:** You can configure pattern change behavior in Settings. Or hold Shift and press a pattern to arm it — it'll switch when the current pattern finishes playing, giving you time to prepare.

Patterns are the building blocks you'll arrange into scenes and songs. For now, try creating two or three pattern variations on your drum track and switching between them while the sequence plays.

---

## Scenes — Snapshots of Everything

Patterns are per-track. **Scenes** are global — a scene captures the state of all 16 tracks at once: which pattern each track is playing, track settings, and mute states.

Prism gives you **64 scenes.** Here's how to think about them:

- **Scene 1** might be your intro — drums on pattern 1, bass on pattern 1, pads muted.
- **Scene 2** might be your verse — same drums, bass switches to pattern 2, pads unmuted.
- **Scene 3** might be your chorus — drums switch to pattern 3, everything else changes.

To work with scenes:

1. **Set up your tracks** the way you want them — choose patterns, mute or unmute tracks.
2. **Open the Pattern | Scene keypad tab** and make sure scenes are selected (the right-side pads).
3. **Tap an empty scene slot.** Prism loads your current state into that slot — it's now a scene. As you continue playing and making changes, the active scene updates automatically to reflect what you're doing.
4. **Switch scenes** by tapping a different scene slot. Everything changes at once — patterns, mutes, the full state of all 16 tracks.

As a shortcut, you can also hold the Capture button and press the scene tab to quickly grab a scene without navigating to the Pattern | Scene keypad.

Each scene also carries **8 mute profiles** — preset combinations of which tracks are active or muted. This lets you create ensemble variations within a single scene. Your verse scene might have a mute profile with full instrumentation and another with just drums and bass for a stripped-back moment.

You can recolor and reorder scenes for visual organization. And if you have a MIDI controller connected, scenes can be triggered via MIDI Program Change messages — useful for live performance.

> **Tip:** Press and hold a scene (or pattern) to momentarily toggle it — when you release, it jumps back to the original. Great for auditioning ideas without committing.

---

## Undo, Capture, and Never Losing an Idea

### Time Machine — Undo / Redo

Prism auto-saves every few seconds (configurable from 3 to 30 seconds). The 16 most recent meaningful changes become undo slots you can jump between freely. To access Time Machine, hold **Shift** — a pink arrow appears in the top left (replacing the settings icon). Press it to step back through your recent history, or step forward to redo. If you ever go too far with an experiment, Time Machine lets you get back.

### Capture — Quick Snapshots

The **Capture** button is a universal "snapshot this" modifier. Hold Capture and tap patterns, scenes, or chord blocks to save their current state without breaking your flow. Double-tap Capture for a smart capture — Prism figures out what you most likely want to save based on context.

### Retroactive MIDI Capture

Prism is always listening to your MIDI input on tonal tracks. If you play something you like but weren't recording, hold **Capture** — the notification bar transforms into a piano roll showing what's in the capture buffer. Press the dotted circle next to it for a fast capture, or tap the piano roll to open more detailed capture options with region selection and phrase detection. You can grab up to 16 bars of what you just played, after the fact.

---

## Making It Yours — Themes and Layout

Prism offers light and dark themes, plus bright, dusty, and monochrome color schemes. Individual track colors are customizable. Find these in settings — pick whatever keeps your eyes comfortable during long sessions.

If you're screen recording or making tutorials, turn on **Highlight Touches** to make your taps visible to viewers.

---

## What's Next

You now know how to load Prism, build drum and tonal patterns, edit trigs in detail, organize your work into scenes, and undo mistakes with Time Machine. That's a complete creative workflow — you can make music with just these tools.

But this is the surface. Prism has deep systems waiting underneath, each covered in its own documentation:

**Feature Guides:**

- **Chord Blocks** — reusable harmonic objects where changing one chord updates every trig that references it across your entire arrangement. Four swappable banks tied to scenes for instant harmonic variation.
- **Fuse Modes (Peek / Echo / Melt)** — tracks that reference and transform each other's musical data. Melt takes the rhythm from one track and the notes from another, creating a third idea that neither could produce alone.
- **Retroactive Capture** — a deeper look at Prism's always-listening capture system, including the three capture sources (live input, pre-FX, post-FX) and phrase detection.
- **Euclidean Rhythms** — algorithmic drum pattern generation with three blendable layers per pad, ghost note blocking, and per-pad polyrhythmic lengths.

**Workflow Recipes:**

- **Prism as Your Hardware Brain** — how to use Prism as the central sequencer for external synths, drum machines, and Ableton Live, with Launchpad and Launchkey integration.
- **From Blank Pattern to Full Arrangement** — a start-to-finish walkthrough of building a complete song using patterns, scenes, and Song Mode.

Explore them when you're ready — Prism is designed to grow with you.
