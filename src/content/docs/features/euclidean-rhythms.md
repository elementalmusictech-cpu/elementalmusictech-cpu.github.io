# Euclidean Rhythms — Algorithmic Drum Pattern Generation

<!--
title: "Euclidean Rhythm Generator — Multi-Layer Algorithmic Drums"
description: "Prism's Euclidean generator gives every drum pad three independent blendable layers, ghost note blocking, and per-pad polyrhythmic lengths. No other sequencer has this."
keywords: Euclidean rhythm, Euclidean sequencer, algorithmic rhythm, generative drum pattern, polyrhythm generator, MIDI step sequencer
category: feature
onboarding_tier: basics_week_one, multi_layer_power_user
related: [getting-started, fuse-modes, chord-blocks]
-->

**The math behind the world's best rhythms — with three layers, per pad.**

---

## What Euclidean Rhythms Are

A Euclidean rhythm distributes a number of hits as evenly as possible across a number of steps. It's a simple algorithm that produces the same patterns that appear in West African bell sequences, Cuban clave, Turkish aksak, and dozens of other traditional rhythms across cultures — because evenly-distributed pulses are inherently musical.

Give the algorithm 3 pulses across 8 steps and you get the basic clave. 5 pulses across 8 steps gives you a common Latin rhythm. 7 pulses across 16 steps creates dense, driving grooves. Rotate the starting position and the same pattern takes on a different feel. The math is simple; the musical output is deep.

Prism's Euclidean generator goes further than any other sequencer's implementation.

---

## Three Independent Layers Per Pad

Every drum pad in Prism gets a Euclidean generator with three independent layers, each with its own steps, pulses, and rotation settings. These layers blend together — their combined output becomes the pad's Euclidean pattern. Where layers overlap, hits reinforce; where they differ, they add new hits.

Layer 1 might be a simple 4-pulse-across-16-step foundation. Layer 2 adds a 3-pulse-across-12-step offset pattern on top. Layer 3 introduces a 5-pulse-across-10-step accent. Together they create a composite rhythm that would take significant manual programming to achieve — generated in seconds by adjusting six parameters.

No other sequencer offers three blendable Euclidean layers per sound. Hapax has a single Euclidean algorithm per track. OXI One has Euclidean as one of six modes. Torso T-1 is built around Euclidean but limited to 16 steps. Elektron added Euclidean fills recently as a simple utility. The multi-layer blending per pad is unique to Prism.

---

## Blending with Manual Trigs

Euclidean patterns don't replace manually placed trigs — they blend with them. You can build a hand-programmed foundation and let the Euclidean algorithm fill in around it, or start with pure Euclidean and punch in specific overrides manually. The two systems coexist in the same pattern.

This means your kick pattern can be exactly where you want it, and the algorithm handles the hi-hat complexity on top.

---

## Ghost Note Blocking

Ghost Notes are zero-velocity trigs that produce no sound but block Euclidean playback on the steps they occupy. Place a ghost note on step 9 and the Euclidean algorithm will never place a hit there, no matter what the math says.

This gives you **negative-space control** — you're sculpting where the algorithm can and can't go. Carve holes in a Euclidean pattern to create breathing room, avoid rhythmic clashes with other tracks, or lock in specific feels while letting the algorithm handle the rest.

---

## Per-Pad Polyrhythmic Lengths

Every drum pad runs its own independent mini-sequencer with its own length. Set the kick to 16 steps and the hi-hat to 7 steps, and they'll loop against each other — the hi-hat completes a full cycle at a different point in the kick's cycle every time, creating evolving polyrhythmic relationships that take many bars to fully cycle.

Combine this with Euclidean generation and you get polyrhythmic Euclidean patterns: each pad's three-layer Euclidean algorithm runs at its own length, creating an interlocking web of algorithmically-generated complexity.

---

## Two Interface Modes

The Euclidean generator has two views:

**Quick-edit** lives on the main sequencer screen, giving you fast access to steps, pulses, and rotation for the current pad without navigating away. This is where you make broad adjustments and audition patterns while the sequence plays.

**Full view** shows all three layers simultaneously with every parameter visible — the complete picture of what the algorithm is doing across all three layers for the selected pad.

---

## The Euclidean Sequencer Extension IAP

The full Euclidean generator — including three-layer blending, ghost note blocking, and per-pad polyrhythmic integration — is available as the Euclidean Sequencer Extension IAP ($4.99). A simplified single-layer Euclidean generator is available in the base version.

> For a detailed comparison against Hapax, OXI One, Torso T-1, and Elektron, see **Prism vs. Hardware Sequencers**.
