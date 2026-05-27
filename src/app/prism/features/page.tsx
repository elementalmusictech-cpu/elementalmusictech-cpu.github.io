import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prism Features — 16-Track MIDI Step Sequencer for iOS",
  description:
    "Every feature in Prism: 512 steps, Fuse Modes, Chord Blocks, 6 LFOs per track, Step FX, Euclidean rhythms, Parameter Locks, Song Mode, and hardware integration.",
};

type Feature = { name: string; desc: string; star?: boolean };
type Section = { id: string; title: string; features: Feature[] };
type Tier = { id: string; tier: string; tagline: string; sections: Section[] };

// ─── TIER 1: THE FOUNDATION ─────────────────────────────────────
const FOUNDATION: Tier = {
  id: "foundation",
  tier: "The Foundation",
  tagline: "What Prism is — and what makes it tick.",
  sections: [
    { id: "core", title: "Core Architecture", features: [
      { name: "16 Tracks · Drum + Tonal", desc: "Each track is its own engine — drum or tonal — with independent length, resolution, speed, and FX. One MIDI channel per track." },
      { name: "AUv3 MIDI-Only Architecture", desc: "Prism doesn't make sound. It sequences synths, samplers, drum machines, and external hardware with precision. Runs inside AUM, Logic Pro, Cubasis, Loopy Pro, and any AUv3-compatible host." },
      { name: "8 Patterns · 8 Sound Profiles per Track", desc: "Each track holds 8 patterns of sequence data and 8 sound profiles of CC/LFO state. Mix and match freely across scenes." },
      { name: "64 Scenes · 8 Banks", desc: "Global state snapshots capturing pattern selections, mute states, velocity offsets, Hue patterns, and Chord Block banks across all 16 tracks. One tap to transform your entire arrangement." },
      { name: "8 Mute Profiles per Scene", desc: "Each scene carries 8 mute variations — instant ensemble changes within a single scene. Triggerable via touch or external MIDI Program Change." },
      { name: "480 PPQN Timing Engine", desc: "Sub-tick precision. Micro-timing, swing, and humanize all operate at 480 pulses per quarter note. Host sync with inherited Ableton Link." },
    ]},
    { id: "engine", title: "Sequencer Engine", features: [
      { name: "Up to 32 Pages · 16-Bar Maximum", desc: "Per track: up to 16 bars at resolutions from 1/32 through 2/1, including triplet variants. Up to 32 pages per pattern." },
      { name: "Independent Track Lengths", desc: "Each of 16 tracks runs its own sequence length, resolution, and speed independently. A 5-bar melody against a 4-bar bassline against a 3-bar drum pattern — all running simultaneously." },
      { name: "Speed FX · 3 Modes", desc: "Per-track time scaling from 1/8× to 8×. Whole multipliers for clean subdivisions, partial for cross-rhythms, and flexible mode for experimental time-warping. LFO-mappable for continuously evolving tempo relationships." },
      { name: "Note Playback Modes", desc: "Standard, No Overlap, Trig Legato, and Drone. Each mode changes how overlapping notes behave." },
      { name: "Swing Engine", desc: "Hundreds of distinct swing profiles — not just a percentage slider. Long-press Swing to browse groove shapes by genre. Applies to Euclidean sequences too." },
      { name: "Humanize & Micro-Timing", desc: "Per-step timing offsets to push or pull individual trigs off the grid. Global humanize adds natural velocity, timing, and length variation. Three independent layers of groove control." },
      { name: "Follow Mode", desc: "Multi-page sequence following during playback. Long-press Play to toggle. Manual page switching pauses it; resumes on play restart or Follow button." },
    ]},
  ],
};

// ─── TIER 2: THE DIFFERENTIATORS ─────────────────────────────────
const DIFFERENTIATORS: Tier = {
  id: "differentiators",
  tier: "What Makes It Different",
  tagline: "The features that justify choosing Prism over everything else.",
  sections: [
    { id: "tonal", title: "Tonal Tracks & Harmony", features: [
      { name: "Chord Blocks · 4 Banks · 32 Objects", desc: "Reference-based chord objects. Change one block, every trig referencing it updates across the entire arrangement. 4 swappable banks tied to scenes — one scene change transforms all harmonic content. Strum, humanization, and velocity character travel with the chord.", star: true },
      { name: "50+ Scales + Custom Creation", desc: "Built-in scale library plus custom scale creation via the step grid. Universal scale locking forces all input — including external MIDI, arpeggiator output, Fuse modes, and randomization — to the active scale.", star: true },
      { name: "Multi-Sequencer [IAP]", desc: "4 independent sub-sequencers per tonal track, each with its own pattern, length, and FX routing. All play simultaneously. Different lengths create phasing relationships that evolve with every loop. Up to 64 melodic voices across 16 tracks.", star: true },
      { name: "Smart Chords Lab", desc: "An experimental chord-building workspace. Simple Chord (triads from tapped root), Custom Chord (user-defined intervals per slot), chord strum, velocity randomization, and inversion tools." },
      { name: "Note Input Modes", desc: "Poly for free polyphonic entry, Smart Chords Lab for chord building, and Chord Blocks for reference-based harmonic objects. Each optimizes the keypad for a different workflow." },
      { name: "MIDI File Import", desc: "Import standard MIDI files with automatic scale detection. Manual key/scale override. Rapid import for large libraries." },
    ]},
    { id: "fuse", title: "Fuse Modes — Inter-Track Intelligence", features: [
      { name: "Peek", desc: "Overlay another track or pad's trigs on your current sequence for visual reference. Non-destructive, updates automatically if the source changes." },
      { name: "Echo", desc: "Take another track's sequence as your note source, then run it through your own length, loop points, and FX transformations. Notes locked to source — everything else independent. One sequence becomes many variations.", star: true },
      { name: "Melt", desc: "Rhythm from one track, notes from another — combined into a third that neither could produce alone. Pitch Filter Keypad selects which chord notes pass through. Octave/step offsets per output.", star: true },
      { name: "Drum Melt", desc: "A drum pattern triggers notes from a tonal source across any number of destination tracks. Per-output note filter, step/octave shifts, choke, and velocity offset. The drum groove drives the melody.", star: true },
      { name: "Linked Parameters", desc: "Key parameters (Warp shifts, loop points, Hue, others) stay linked between source and target until manually changed — which breaks the link for that parameter only." },
    ]},
    { id: "drums", title: "Drum Tracks", features: [
      { name: "16 Independent Mini-Sequencers", desc: "Each of 16 pads has its own step sequencer with its own length, resolution, and FX chain. Your kick runs 16 steps while your hi-hat runs 7 and your snare runs 5 — all within one track.", star: true },
      { name: "Per-Pad Polyrhythms", desc: "Linked pads share global timing. Unlink individual pads for independent lengths — instant polyrhythmic complexity within a single drum track." },
      { name: "Polyphonic Drum Mode", desc: "Each trig on a pad can be a different pitch, and pitches stack. Layer multiple hits within a single sequence on a single pad. Full chromatic keyboard view for note selection." },
      { name: "Euclidean Rhythms · 3 Layers [IAP]", desc: "Per-pad Euclidean generation with steps, pulses, and rotation. Advanced: 3 independent blendable layers per pad. Blends with manual trigs. Ghost Notes block Euclidean on specific steps. Quick-edit and full parameter views.", star: true },
      { name: "Drum Profiles", desc: "Factory profiles for Korg Gadget series, Tekno, and more. Create, save, and favorite custom profiles for any instrument. Per-pattern sound profiles switch kits between patterns." },
      { name: "Pad Relationships", desc: "Layer (trigger additional pads), Choke (prevent simultaneous hits), Peek (visual reference), and Sidechain. Build kits that breathe." },
      { name: "Random Drum Generator", desc: "One-tap pattern generation using metrical hierarchy — kick on strong beats, snare on backbeats, hi-hats on subdivisions. Density and Evolution controls." },
    ]},
    { id: "perstep", title: "Per-Step Control", features: [
      { name: "Parameter Locks (P-Locks)", desc: "Lock any MIDI CC to a specific value on any step — automation that lives on the trig. Smoothing for fluid transitions. Conditional modifiers, random jitter, and chance per lock. Multiple fast-edit workflows.", star: true },
      { name: "Step FX · 4 Slots per Trig [IAP]", desc: "Tonal: Velocity, Pitch, Ratchet, Strum. Drum: Velocity, Length, Ratchet, Flam. Each FX has deep sub-options — Condition, Range, Accent, Hold, Link, Pattern, Humanize, and more. 3 snapshot slots per FX. Ratchet included free.", star: true },
      { name: "Trig Conditions", desc: "Per-step: Chance %, Every-N, Once, play-if-last-played, play-if-last-conditional-played. Conditional chains create emergent behavior from simple rules." },
      { name: "Pattern Conditionals", desc: "Apply Every-N logic to the entire pattern. Each loop can play a different loop point or remix — the sequence transforms as it repeats. Conditional Crop Mode and Step Recording for fast setup." },
      { name: "Ghost Notes", desc: "Zero-velocity trigs that produce no sound but retain P-Locks (still send CC values) and block Euclidean playback. Sculpt patterns through absence." },
      { name: "Micro-Timing", desc: "Per-step timing offsets. Push or pull individual trigs off the grid for hand-crafted groove." },
      { name: "Trig Focus Mode", desc: "Long-press any trig for detailed editing. Multi-select with range and group selection (Page, Odd/Even, intervals, All). Notes, Timing, and Step FX tabs. Preview Trig for continuous playback." },
    ]},
    { id: "generative", title: "Modulation & Generative Tools", features: [
      { name: "6 LFOs per Track [IAP]", desc: "3 Track LFOs (internal params) + 3 CC LFOs (MIDI destinations). Standard waveforms plus drawable shapes and 16-step patterns. LFO-to-LFO self-modulation. Rate: synced, free, or track-tied. Elastic Grid for slope/phase.", star: true },
      { name: "Arpeggiator · 16 Steps", desc: "6 creative modes with per-step control over direction, pitch, velocity, chance, condition, skip, length, chaos, and ratchet. Arp swing, legato, trig restart. Clone/stretch/randomize. Pattern-bound." },
      { name: "Harmonizer · 8 per Project", desc: "4 harmony pools with 8 steps each. A harmonic sequencer cycles between pools — single notes become shifting chord voicings over multiple bars. 8 patterns tied to track pattern. Swappable across tracks and scenes.", star: true },
      { name: "Hue Sequencer · 8 per Project", desc: "In-key transposition controlled by scene. Set target tracks and shift their output rotationally. Live play/record. Live transposition via external MIDI keyboard — play real-time key changes across your arrangement.", star: true },
      { name: "Warp Filter", desc: "Per-track note processing between sequencer and MIDI output. Poly filter (1–8 notes), note density (Low/Mid/High/Alt/Random), step/octave shift, random skip/choke/velocity. Drum: random swap and layer. Pattern-bound." },
      { name: "Smart Randomizers", desc: "Metrically aware drum patterns, scale-constrained chord progressions, selective sequence/FX randomization. Gen Chords, Remix Tone, Invert. Real-time randomization via Warp Filter." },
      { name: "MIDI Looper", desc: "Per-track, per-pattern loop points. Bar-based and page-based selection. Loop point triggers. Remix loop points to build longer sequences from short loops. Copy/paste and trim." },
    ]},
  ],
};

// ─── TIER 3: THE WORKFLOW ────────────────────────────────────────
const WORKFLOW: Tier = {
  id: "workflow",
  tier: "How It Works in Practice",
  tagline: "Performance, recording, hardware, and everything that makes Prism yours.",
  sections: [
    { id: "performance", title: "Performance & Arrangement", features: [
      { name: "Song Mode", desc: "Chain scenes into a linear timeline. Relative steps (linked to scene, auto-update) or Absolute steps (frozen snapshots). Per-step mute maps, linked/unlinked steps. Build while you play — add and rearrange without stopping." },
      { name: "Performance Mode", desc: "Live MIDI FX layer — stutter, repeat, and hold across all tracks simultaneously. Instant transitions, builds, and breakdowns. Long-press SNG to toggle." },
      { name: "Macro XY Pads", desc: "Global and per-track 2D control surfaces. Momentary mode snaps back on release. Locked mode holds values. Capture/reassign CC targets on the fly." },
      { name: "Multi-Track Velocity Mixer", desc: "Advanced Mixer view with velocity/mixer controls for all active tracks. Toggle between Track Mixer and Sequence Mixer. Scroll for 8+ tracks." },
      { name: "Bar Looper", desc: "Bar-based looping during playback for quick section isolation. Copy/paste bars, trim to loop range." },
      { name: "Rhythm-Only Paste", desc: "Paste only trig positions from one pattern to another, preserving the destination's note content." },
      { name: "External Scene/Mute Control", desc: "MIDI Program Change triggers scenes (PC 0–7) and mute groups (PC 8–15) from foot controllers, Launchpad, or any MIDI source." },
    ]},
    { id: "recording", title: "Recording & Capture", features: [
      { name: "Retroactive MIDI Capture", desc: "Always-listening buffer captures up to 16 bars. Three sources: Live Input, Post-FX, and Pre-FX (capture what the sequence trigs play). Automatic phrase detection. Piano roll region selection.", star: true },
      { name: "Live Recording", desc: "Real-time MIDI recording with quantize. Overdub (merge), Overwrite (replace), and Clear on 1 (clear on first new note). Auto Grow extends short sequences. Arm for clean starts." },
      { name: "Step Recording", desc: "Note-by-note entry. Tap trig to set insertion point, press note to add, auto-advances. Mute inserts empty steps. Tie Step Length option." },
      { name: "Capture Button", desc: "Hold Capture + tap anything to snapshot it: patterns, scenes, song steps, chord blocks. Double-tap for smart capture. Hold + tap pads to restore last 16 deleted trigs." },
      { name: "Time Machine", desc: "Auto-saves every 3–30 seconds (configurable). 16 undo slots accessible via Shift. Jump between states freely. Crash recovery on next startup." },
    ]},
    { id: "hardware", title: "Hardware Integration", features: [
      { name: "The Hardware Trinity", desc: "Prism + Launchpad + Launchkey MK4, optionally linked to Ableton Live. Four-piece rig: sequencer + pad controller + keyboard controller + DAW sound engine. Bi-directional sync with automatic mapping. A complete system under $300.", star: true },
      { name: "Novation Launchpad", desc: "Deep bi-directional integration with real-time LED state reflection. 64-step sequence view, custom grid mappings, global mixer mode for track/pattern/scene/mute/sound access. Supported: Pro (MK1), MK3, Mini, X." },
      { name: "Novation Launchkey Mini MK4 [IAP]", desc: "Bi-directional LED feedback with key/pad/encoder mappings. Main Sequencer, Parameter Mode (profile params on knobs), Track Select Mode, and State Selector. Simultaneous use with Launchpad." },
      { name: "Ableton Live Integration", desc: "Dedicated Python control script with ping-pong handshake. Auto-maps 16 tracks, captures track/macro/drum pad names, syncs colors, maps CC 1–16 to Macros 1–16. Ableton becomes a seamlessly integrated sound source.", star: true },
      { name: "External MIDI I/O", desc: "Full MIDI in/out/thru for hardware. Per-track channel routing, true multi-port output, channel filter on input. Separate MIDI pipe for Launchpad (Loopy Pro friendly)." },
      { name: "MIDI CC Profiles", desc: "127 assignable CCs per track. Factory profiles for Korg Gadget, Tekno, and more. Custom creation with groups, parameter types, and per-CC chance/conditional/jitter. Save sounds as presets within profiles." },
    ]},
    { id: "ui", title: "UI & Interaction", features: [
      { name: "Touch-First Multitouch", desc: "Context-sensitive keypad matrix adapts to drum pads, note input, parameter editing, FX control, and scene selection. Multi-touch throughout." },
      { name: "Flexible Smart Layouts", desc: "Horizontal, vertical, phone-optimized, and iPad thin/utility (32-trig compact view for multi-AUv3 setups). iPad full-screen with top bar piano roll." },
      { name: "Shift Button System", desc: "Hold for momentary, tap to lock. Every control has a secondary function. Doubles the interface without adding menus." },
      { name: "Piano Roll", desc: "8-bar visual display for tonal and drum tracks. Three modes: capture editor, note selector, and looper. Tap to jump pages, drag to loop. iPad top bar display option." },
      { name: "Note Input Shortcuts", desc: "Slide-to-enter, hold+slide up to lock, Shift+hold+slide L/R for length/position, hold one trig+long-press another to select range." },
      { name: "Copy/Paste Workflows", desc: "Quick paste (empty trig while holding Copy), bar-level copy via loop keypads, rhythm-only paste. Works on trigs, patterns, scenes, tracks, sounds, LFOs, FX, arp steps, chord blocks, and stacks." },
      { name: "Visual Customization", desc: "Light/dark themes, dusty/monochrome color schemes, per-track colors. Highlight Touches for screen recording. Dynamic graphics. Apple Pencil compatible." },
      { name: "Help System", desc: "Step-by-step help (long-press gear), Info tool (tap any control for description), cheat sheets, and Track Flow Visualizer." },
    ]},
    { id: "presets", title: "Presets & Data", features: [
      { name: "Cross-Module Preset System", desc: "Save and recall presets for Arps, Harmonizer, Hue, MIDI Profiles, Chord Stacks, Tracks, Sounds, and LFOs. Notification bar dropdown for instant mid-session access. Color tagging and filtering." },
      { name: "Favorites System", desc: "Mark drum profiles and MIDI profiles as favorites for quick access across projects." },
      { name: "Song Save / Load", desc: "Internal save and host-aware AUv3 saving. Autosave every 30 seconds with crash recovery. Export/import all projects for cross-device transfer." },
      { name: "MIDI File Import", desc: "Import standard MIDI files with automatic scale detection. Manual key/scale override. Rapid import for large libraries." },
    ]},
  ],
};

// ─── COMBINED ────────────────────────────────────────────────────
const TIERS = [FOUNDATION, DIFFERENTIATORS, WORKFLOW];
const ALL_SECTIONS = TIERS.flatMap(t => t.sections);
const SIDEBAR_ITEMS = TIERS.map(t => ({
  tier: t.tier,
  sections: t.sections.map(s => ({ id: s.id, title: s.title })),
}));

export default function FeaturesPage() {
  return (
    <main className="pt-0">
      {/* ── Hero ── */}
      <section className="border-b border-[var(--border)] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[var(--accent)] text-sm font-mono tracking-widest uppercase mb-4">Feature Set</p>
          <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Everything Prism Does</h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl">
            Every feature, every detail. No vague promises — just specifics.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24 pt-16 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">
        {/* ── Sidebar ── */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <nav className="space-y-6">
              {SIDEBAR_ITEMS.map(group => (
                <div key={group.tier}>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--text-tertiary)] mb-2 px-3">
                    {group.tier}
                  </p>
                  <div className="space-y-0.5">
                    {group.sections.map(item => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block px-3 py-1.5 rounded-md text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* ── Content ── */}
        <div className="space-y-32">
          {TIERS.map(tier => (
            <div key={tier.id}>
              {/* Tier header */}
              <div className="mb-16 border-b border-[var(--border)] pb-6">
                <p className="font-mono text-xs tracking-widest uppercase text-[var(--text-tertiary)] mb-2">
                  {tier.tier}
                </p>
                <p className="text-lg text-[var(--text-secondary)]">
                  {tier.tagline}
                </p>
              </div>

              {/* Sections within tier */}
              <div className="space-y-20">
                {tier.sections.map(section => (
                  <section key={section.id} id={section.id}>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                      {section.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.features.map(f => (
                        <div
                          key={f.name}
                          className={`border rounded-xl p-5 transition-colors ${
                            f.star
                              ? "border-[var(--cta)] border-solid bg-[var(--cta-subtle,transparent)] hover:border-[var(--cta-hover)]"
                              : "border-[var(--border)] border-dashed hover:border-[var(--border-hover)]"
                          }`}
                        >
                          <h3 className="font-bold mb-2">
                            {f.star && (
                              <span className="text-[var(--cta)] mr-1.5">★</span>
                            )}
                            {f.name}
                          </h3>
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                            {f.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          ))}

          {/* ── CTA ── */}
          <div className="text-center pt-8">
            <Link
              href="/prism/download"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--cta)] text-[var(--bg-primary)] font-semibold text-lg hover:bg-[var(--cta-hover)] transition-colors"
            >
              Ready to play?
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}