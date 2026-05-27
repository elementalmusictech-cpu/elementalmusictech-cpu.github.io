"use client";

import { useState } from "react";


/* ───────────────────────────────────────────────────
   HARDWARE SEQUENCER COMPARISON
   ─────────────────────────────────────────────────── */

const hwCompetitors = [
  "Prism",
  "Squarp Hapax",
  "Elektron Digitakt II",
  "OXI One MK2",
  "Sequentix Cirklon",
  "TE OP-XY",
  "Torso T-1",
  "Polyend Tracker Mini",
];

const hwRows = [
  ["Price (USD)", "~$45 fully unlocked", "$749", "$999", "$879", "$2,199", "$2,300", "$599", "$735"],
  ["Tracks", "16 MIDI tracks", "16 MIDI tracks", "16 audio/MIDI tracks", "8 sequencers × 8 tracks", "16 MIDI tracks", "8 instrument + 8 aux", "16 polyphonic MIDI tracks", "8 tracks (16 in song mode)"],
  ["Steps per pattern", "512 (32 pages × 16)", "32 bars at 192 PPQN", "128 per track", "128 per sequencer", "256", "64 (4 pages × 16)", "Euclidean, variable length", "128 per track"],
  ["Parameter locks", "Yes, with smoothing and jitter", "Yes, automation lanes", "Yes, Elektron P-Locks", "Yes", "CK Patterns", "Yes, vector smoothing", "Per-step CC values", "Per-step FX values"],
  ["Step FX / components", "Step FX per trigger", "MIDI effects chain", "Retrig, slide", "Ratchet per step", "Per-step transpose", "Punch-in FX, step components", "Step variation components", "Per-step FX commands"],
  ["Step conditionals", "12 conditional types", "Conditional triggers", "Trig conditions + probability", "Probability per step", "No", "No", "Probability per step", "Probability per step"],
  ["Harmonic tools", "Chord Blocks — reference-based, 4 scene-linked banks", "Chord generation mode", "No chord system", "150+ chord voicings, Harmonic Mode", "No chord system", "Brain™ chord transposition", "Scale-locked chords, 7+ scales", "No chord system"],
  ["Euclidean sequencer", "Yes, 3-layer blend per pad", "Yes, as MIDI effect", "Yes", "Yes, core rhythm engine", "No", "No", "Yes, core rhythm engine", "No"],
  ["Song mode", "64 scenes, mute groups, scene chaining", "Section-based arranger", "128-step song mode", "Arranger with 4 lanes", "Full song mode", "9 songs/project, 99 scenes", "No", "Song arranger"],
  ["Modulation / LFOs", "6 LFOs/track, self-modulation, custom shapes", "Project LFOs, modulation matrix", "3 LFOs/track, LFO-to-LFO", "16 LFOs + 8 mod lanes/sequencer", "Varies by firmware", "1 LFO, limited destinations", "Algorithmic per parameter", "No dedicated LFOs"],
  ["Sound engine", "MIDI sequencer only", "MIDI sequencer only", "16-track stereo sampler, 20 GB", "MIDI sequencer only", "MIDI sequencer only", "8 synth engines + sampler", "MIDI sequencer only", "Sampler + 5 synth engines"],
  ["I/O", "USB MIDI, Bluetooth MIDI, Ableton Link", "4× MIDI out, USB, 8 CV + 8 Gate", "MIDI DIN in/out/thru, USB", "MIDI, USB, Bluetooth, 8 CV + 8 Gate", "3× MIDI out, USB, 5 CV + 5 Gate", "USB-C, BLE MIDI, CV/Gate multi-out", "MIDI in/out/thru, USB, 4 CV + 4 Gate", "TRS MIDI, USB-C audio/MIDI"],
  ["Portable", "iPhone and iPad", "Desktop, AC powered", "Desktop, AC powered", "Battery, ~8 hours", "Desktop, AC powered", "Battery powered", "Desktop, USB powered", "Battery, ~8 hours"],
  ["Retroactive capture", "Yes — 3 sources, pre/post FX, phrase detection", "No", "No", "Yes (firmware 2.0)", "No", "No", "No", "No"],
  ["Patterns / scenes", "64 scenes × 16 tracks", "16 patterns/project", "128 patterns/project", "8 patterns/sequencer", "5 patterns/track", "9 patterns/track, 99 scenes", "256 patterns (16 banks × 16)", "256 patterns"],
];

/* ───────────────────────────────────────────────────
   iOS SEQUENCER COMPARISON
   ─────────────────────────────────────────────────── */

const iosCompetitors = [
  "Prism",
  "Drambo",
  "Rozeta Suite",
  "Atom Piano Roll 2",
  "Koala Sampler",
  "Helium",
  "OCTACHRON",
];

const iosRows = [
  ["Price (USD)", "~$45 fully unlocked", "~$20 + IAPs", "~$10", "~$10", "~$5 + IAPs", "~$10", "~$5"],
  ["Tracks", "16 MIDI tracks", "16 tracks", "1 per plugin instance", "16 MIDI channels", "64 sample pads", "16 MIDI tracks", "16 MIDI tracks"],
  ["Sequencing style", "Hardware-style step grid", "Step grid + piano roll + modular", "Per-plugin (bassline, X0X, arp)", "Piano roll and clip launcher", "Finger drumming + loop sequencer", "Piano roll and timeline", "Step grid drum sequencer"],
  ["Steps per pattern", "512 (32 pages × 16)", "256, polyrhythmic lengths", "Up to 64 per plugin", "Clip-based, variable", "Sequence-based, variable", "Clip-based, variable", "64"],
  ["Parameter locks", "Yes, with smoothing and jitter", "Yes, with step components", "No", "CC automation lanes", "No", "CC automation lanes", "No"],
  ["Step FX / components", "Step FX per trigger", "Step components, scene morphing", "No", "No", "No", "No", "No"],
  ["Step conditionals", "12 conditional types", "Conditional step components", "No", "No", "No", "No", "Probability per step"],
  ["Harmonic tools", "Chord Blocks — reference-based, scene-linked", "Scale quantize", "No", "Chord detection", "No", "7,000+ MIDI chord clips", "No"],
  ["Euclidean sequencer", "Yes, 3-layer blend per pad", "Via modular patching", "Yes (Rozeta Rhythm)", "No", "No", "No", "No"],
  ["Song mode", "64 scenes, mute groups, scene chaining", "Clip launcher, scene morphing", "Follow actions", "Clip launcher", "Sequence chaining", "Remote looping", "No"],
  ["Modulation / LFOs", "6 LFOs/track, self-modulation, drawable", "Unlimited modular LFOs", "Triple MIDI LFO plugin", "No", "No", "No", "No"],
  ["Sound engine", "MIDI sequencer only", "Full modular synth, 150+ modules", "MIDI sequencer only", "MIDI sequencer only", "Sampler + synth + FX", "MIDI sequencer only", "MIDI sequencer only"],
  ["I/O", "USB/BT MIDI, Ableton Link, Launchpad + Launchkey", "MIDI learn, any controller, Ableton Link", "Host-dependent", "Host-dependent", "MIDI controller support", "Host-dependent", "Host-dependent"],
  ["iPhone optimized", "Yes, dedicated layouts", "Yes, portrait + landscape", "iPad primarily", "Not recommended", "Yes, phone-first", "Not recommended", "iPad primarily"],
  ["Retroactive capture", "Yes — 3 sources, pre/post FX, phrase detection", "No", "No", "No", "Live sampling from mic/input", "No", "No"],
  ["Patterns / scenes", "64 scenes × 16 tracks", "Unlimited clips and scenes", "Per-plugin pattern storage", "Unlimited clips", "64 pads with sequences", "Unlimited clips", "16 patterns"],
  ["Unique capability", "Fuse Modes (inter-track logic), Chord Blocks, Retroactive Capture", "Open-ended modular instrument builder", "10 specialized AUv3 sequencer modules", "Highest-rated piano roll on iOS", "Instant mic-to-beat sampling, Ableton export", "7,000+ MIDI chord and phrase library", "Streamlined drum sequencing workflow"],
];

/* ───────────────────────────────────────────────────
   SINGLE TABLE COMPONENT — horizontal scroll on all sizes
   ─────────────────────────────────────────────────── */

function CompareTable({
  competitors,
  rows,
}: {
  competitors: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse min-w-[900px]">
        <thead>
          <tr>
            <th className="text-left py-3 px-3 text-[var(--text-tertiary)] font-medium sticky left-0 bg-[var(--bg-primary)] min-w-[140px] z-10" />
            {competitors.map((c) => (
              <th key={c} className={`py-3 px-3 text-center font-semibold text-xs uppercase tracking-wider ${c === "Prism" ? "text-[var(--accent)]" : "text-[var(--text-secondary)]"}`}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row[0]} className={`border-t border-[var(--border)] ${i % 2 === 0 ? "bg-transparent" : "bg-[var(--bg-secondary)]"}`}>
              <td className="py-2.5 px-3 text-[var(--text-secondary)] font-medium whitespace-nowrap sticky left-0 bg-inherit z-10 text-xs">
                {row[0]}
              </td>
              {row.slice(1).map((cell, j) => (
                <td key={j} className={`py-2.5 px-3 text-center text-xs ${j === 0 ? "text-[var(--accent)] font-medium" : "text-[var(--text-primary)]"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ───────────────────────────────────────────────────
   PAGE
   ─────────────────────────────────────────────────── */

export default function ComparePage() {
  const [activeTab, setActiveTab] = useState<"hardware" | "ios">("hardware");

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className=" border-[var(--border)] pt-16 pb-6 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[var(--accent)] text-sm font-mono tracking-widest uppercase mb-4">
            MIDI Step Sequencer Comparison
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
            Prism vs. Hardware Sequencers
            <br />
            <span className="text-[var(--accent)]">& iOS Sequencers</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl">
            Prism is a 16-track AUv3 MIDI step sequencer for iPhone and
            iPad. It competes with $600–$2,300 hardware sequencers like
            the Squarp Hapax, Elektron Digitakt II, OXI One, and
            Sequentix Cirklon — not with other iOS apps. Here&rsquo;s a
            full feature-by-feature comparison, including categories
            where hardware wins.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="flex gap-1 border-b border-[var(--border)]">
          <button onClick={() => setActiveTab("hardware")} className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === "hardware" ? "text-[var(--accent)] border-b-2 border-[var(--accent)]" : "text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"}`}>
            vs. Hardware Sequencers
          </button>
          <button onClick={() => setActiveTab("ios")} className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === "ios" ? "text-[var(--accent)] border-b-2 border-[var(--accent)]" : "text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"}`}>
            vs. iOS Sequencers
          </button>
        </div>
        {/* <p className="text-sm text-[var(--text-tertiary)] mt-4 max-w-3xl">
          {activeTab === "hardware"
            ? "Prism compared to the hardware MIDI sequencers musicians actually cross-shop. Categories where hardware has clear advantages — like CV/Gate outputs, physical controls, and onboard sound engines — are included."
            : "Prism compared to the best iOS MIDI sequencers and grooveboxes. Different tools with different approaches — Prism is an integrated step sequencer built for hardware-level depth on iPhone and iPad."}
        </p> */}
      </div>

      {/* Crawlable H2 */}
      <h2 className="sr-only">
        {activeTab === "hardware"
          ? "Prism vs Hapax vs Digitakt II vs OXI One vs Cirklon vs OP-XY vs Torso T-1 vs Polyend Tracker Mini — feature comparison table"
          : "Prism vs Drambo vs Rozeta vs Atom Piano Roll vs Koala Sampler vs Helium vs OCTACHRON — iOS sequencer comparison table"}
      </h2>

      {/* Table */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <CompareTable
          competitors={activeTab === "hardware" ? hwCompetitors : iosCompetitors}
          rows={activeTab === "hardware" ? hwRows : iosRows}
        />
      </section>

      {/* Positioning prose */}
      <section className="border-t border-[var(--border)] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {activeTab === "hardware" ? (
            <>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                Prism doesn&rsquo;t replace your hardware sequencer — it
                sequences your hardware.
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)]">
                <p>
                  The Hapax, Digitakt II, OXI One, Cirklon, OP-XY, Torso
                  T-1, and Polyend Tracker Mini are excellent instruments.
                  If you own one, Prism isn&rsquo;t asking you to sell it.
                  Prism offers sequencing capabilities none of them
                  have — Fuse Modes for inter-track musical logic, Chord
                  Blocks with reference-based harmonic voicing, and
                  Retroactive Capture with phrase detection — and can sit
                  alongside your hardware, sequencing it via MIDI.
                </p>
                <p>
                  Hardware sequencers have real advantages that Prism
                  doesn&rsquo;t pretend to match: physical encoders and
                  pads, CV/Gate outputs for Eurorack and modular
                  synthesizers, MPE support on the Hapax, and onboard
                  sound engines on the Digitakt II and OP-XY. If you need
                  CV sequencing or a standalone groovebox, hardware is
                  the right choice.
                </p>
                <p>
                  What the table doesn&rsquo;t capture: Prism is a
                  portable MIDI step sequencer that runs on a device you
                  already own, receives continuous updates, and costs
                  roughly 1/15th to 1/50th the price of the hardware
                  above. The iOS platform isn&rsquo;t a compromise —
                  it&rsquo;s what makes 16 tracks, 512 steps, 6 LFOs per
                  track, Euclidean sequencing, and parameter locks with
                  smoothing possible for under $50.
                </p>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                The best iOS sequencers — same platform, different
                instruments.
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)]">
                <p>
                  Drambo is a modular groovebox powerhouse — if you want
                  to build custom synthesizers and effects from scratch,
                  nothing on iOS touches it. Koala Sampler is the fastest
                  path from an idea to a finished beat. Rozeta&rsquo;s
                  AUv3 plugin suite gives you mix-and-match flexibility
                  across 10 specialized sequencer modules. Each one is
                  genuinely great at what it does.
                </p>
                <p>
                  Prism is something different: a dedicated 16-track MIDI
                  step sequencer with the depth you&rsquo;d expect from
                  hardware — Elektron-style parameter locks with
                  smoothing and jitter, 12 step conditional types, Chord
                  Blocks, Fuse Modes, Retroactive Capture, Euclidean
                  sequencing with 3-layer blend, 6 LFOs per track with
                  self-modulation, and native Novation Launchpad and
                  Launchkey integration. It&rsquo;s built for musicians
                  who think in steps, trigs, and patterns.
                </p>
                <p>
                  These tools aren&rsquo;t competitors so much as
                  stablemates. Many Prism users run Drambo or Koala
                  alongside it as AUv3 plugins in the same host.
                </p>
              </div>
            </>
          )}

          {/* Differentiator callouts */}
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {[
              {
                label: "No other sequencer has",
                feature: "Inter-track Fuse Modes",
                sub: "Peek, Echo, and Melt — musical data flow between tracks, at any price point",
              },
              {
                label: "No other sequencer has",
                feature: "Reference-based Chord Blocks",
                sub: "Change one chord voicing and every reference updates globally across all patterns",
              },
              {
                label: "No other sequencer has",
                feature: "Retroactive Capture",
                sub: "3 capture sources with pre/post FX routing and automatic phrase detection",
              },
            ].map((item) => (
              <div key={item.feature} className="border border-[var(--accent)] rounded-xl p-5 bg-[var(--accent-dim)]">
                <p className="text-xs text-[var(--text-tertiary)] font-mono uppercase tracking-wide mb-1">
                  {item.label}
                </p>
                <p className="text-[var(--accent)] font-semibold mb-1">
                  {item.feature}
                </p>
                <p className="text-xs text-[var(--text-secondary)]">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border)] py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[var(--text-secondary)] mb-2 text-sm font-mono">
            Starting at $19.99
          </p>
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
            Ready to try it?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/prism/download" className="px-8 py-3 rounded-lg bg-[var(--accent)] text-black font-semibold hover:bg-[var(--accent-hover)] transition-colors">
              Get Prism
            </a>
            <a href="/prism/features" className="px-8 py-3 rounded-lg border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors">
              Explore features
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}