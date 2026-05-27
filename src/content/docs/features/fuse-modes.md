# Fuse Modes — Inter-Track Musical Intelligence

<!--
title: "Fuse Modes (Peek / Echo / Melt) — Inter-Track Musical Intelligence"
description: "Prism's Fuse Modes let tracks read from each other's note streams in real time. Melt takes rhythm from one track and notes from another. No other sequencer has this."
keywords: generative sequencer, interconnected tracks, evolving patterns, inter-track sequencer, MIDI step sequencer
category: feature
onboarding_tier: peek_week_one, echo_melt_power_user
related: [chord-blocks, euclidean-rhythms, retroactive-capture, getting-started]
-->

**Tracks that talk to each other. One idea becomes many — automatically.**

---

## What Fuse Modes Are

Prism's Fuse Modes let tracks reference and transform each other's musical data in real time. Instead of isolated lanes playing in parallel, tracks can peek at each other's sequences, echo each other's notes, or combine their rhythm and pitch into something entirely new. Change a source track and every track connected to it responds.

There are three modes: Peek, Echo, and Melt. Each creates a different kind of relationship between tracks.

---

## Peek

Peek overlays another track's trigs on top of your current sequence as a visual reference — you see what another voice is doing without leaving your current track. It's non-destructive: your sequence stays exactly as it is, and the overlay updates automatically if the source changes. Use Peek to check rhythmic relationships, avoid collisions, or find gaps in an arrangement.

To set up Peek: press the Peek button to arm it, then tap a sequencer step to select the source track. To reset, long-press the source track, the current track, or the Peek button.

---

## Echo

Echo takes another track's note data as your track's note source during playback. Your track's own sequencer is disabled for note editing — it follows the source. But everything else on your track stays independent: loop points, pattern conditionals, and FX all still shape what you hear. The result is the same notes, transformed differently — a natural variation on the source without any duplication of data.

The notes are locked to the source, so change the source and the Echo track follows. Set a different sequence length on the Echo track and the two phase against each other over time. Apply different FX and the same melodic material takes on an entirely different character.

To set up Echo: press Echo, then select the source via sequencer steps. Note: tonal tracks can only echo tonal tracks; drum pads can only echo pads within the same drum track.

With Echo active, the sequencer screen shows three options: Paste Source (into the current pattern), Paste Source (into a new pattern), or keep the live Echo connection.

---

## Melt

Melt is the headline capability. It extracts the **rhythm** from one track and the **pitch** from another — combining two musical ideas into a third that neither could produce alone.

On a tonal track: your trigs provide rhythm, length, velocity, and FX. Pitch comes from the last played note(s) on the source track at the moment each trig fires. The result is your rhythmic pattern speaking in another track's voice. A fast 16-step drum pattern melted with a slow chord track creates a rhythmically dense melody. A sparse bass line melted with a complex melodic track creates a simplified melodic phrase.

The Pitch Filter keypad gives you precise control over what comes through: the top 8 pads filter incoming chord notes by index (Pick=1 gives you the lowest note only; double-tap selects all; long-press solos one). The bottom 8 pads apply octave and step offsets to the incoming pitch.

On a drum track: Melt merges the drum trig rhythm with a tonal source's pitch, distributing notes across destination tracks based on the Melt filter settings.

To set up Melt: press Melt, select the source via sequencer steps, then select the source sequence via the keypad if applicable. To reset, long-press the source track, the current track, or the Melt button.

---

## Linked Parameters

When you activate Echo or Melt, key parameters (Warp shifts, loop points, Hue, and others) start linked between the source and target track. They stay linked until you manually change them on the target — at which point only that parameter breaks its link, and the rest stay synced. This means Echo and Melt relationships can be tightly coupled or deliberately divergent, one parameter at a time.

---

## The Result: A Web of Musical Relationships

Fuse Modes turn a linear arrangement into a connected system. One track can be the source for multiple Echo and Melt tracks. Change the source sequence and every dependent track responds — the entire web of relationships updates from a single edit.

This is the architectural difference between Prism and every other sequencer: tracks aren't isolated. They form relationships. One musical idea can generate an entire arrangement through connected track dependencies.

No sequencer at any price — hardware or software — offers inter-track musical data flow like this. Hapax has a "leader track" for transposition. OXI One's Harmonizer locks notes across tracks. Neither approaches the depth of Melt (rhythm from track A + notes from track B = new track C) or Echo's ability to derive independent variations from a shared note source. This capability is architecturally unique to Prism.

> For a detailed comparison against Hapax, Elektron, OXI One, and Cirklon, see **Prism vs. Hardware Sequencers**.
