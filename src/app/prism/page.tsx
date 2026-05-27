import Link from "next/link";
import PrismHero from "@/components/prism/PrismHero";
import MeltDiagram from "@/components/prism/meltDiagram";
import BlockDiagram from "@/components/prism/chordBlockDiagram";
import ConnectionsDiagram from "@/components/prism/connectionsDiagram";



const FEATURES = [
  { title: "Retroactive Capture", desc: "Prism is always listening. Play freely, then retroactively capture up to 16 bars of what you just played — filtered by your live input, the sequencer's output, or the final post-FX result." },
  { title: "Multi-Sequencer", desc: "Four independent sub-sequencers per tonal track, each with its own pattern and length. Set different lengths and they phase against each other — up to 64 melodic voices across 16 tracks." },
  { title: "Warp Filter", desc: "A per-track processing layer between your sequence and MIDI output. Thin dense chords, add controlled randomness, rhythmically gate the output, or swap drum sounds on the fly." },
  { title: "Parameter Locks", desc: "Lock any MIDI CC value to any individual step — with smoothing, jitter, and conditional logic. Automation that lives with the trig, not on a separate lane." },
  { title: "Song Mode", desc: "Chain scenes into a linear arrangement with per-step mute maps and linked or unlinked steps. Build while you play — the arrangement grows without stopping playback." },
  { title: "64 Scenes", desc: "Global state snapshots with 8 mute profiles each. Tie Chord Block banks to scenes and one tap transforms your arrangement's rhythm, mutes, and harmony simultaneously." },
];

const FUSE_MODES = [
  { icon: "/images/peek.svg", name: "Peek", desc: "Read another track's data without changing it.", accent: true },
  { icon: "/images/echo.svg", name: "Echo", desc: "Mirror another track's rhythm with your own notes." , accent: true},
  { icon: "/images/melt.svg", name: "Melt", desc: "Combine two tracks into a third that neither could produce alone.", accent: true },
];

const IAPS = [
  "Euclidean Sequencer", "LFO Extension", "Step FX", "Multi-Sequencer", "Launchkey Control",
];

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Prism — MIDI Step Sequencer",
  "applicationCategory": "MusicApplication",
  "operatingSystem": "iOS 16",
  "description": "Prism is a 16-track AUv3 MIDI step sequencer for iPhone and iPad with Chord Blocks, Fuse Modes (Peek/Echo/Melt), Retroactive MIDI Capture, Euclidean rhythms, and parameter locks.",
  "url": "https://www.alchemyelectronica.com/prism",
  "downloadUrl": "https://apps.apple.com/us/app/prism-midi-sequencer/id6502302630",
  "offers": {
    "@type": "Offer",
    "price": "19.99",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "featureList": [
    "16 tracks, 512 steps per track",
    "Chord Blocks — reference-based chord sequencing",
    "Fuse Modes — inter-track musical data flow (Peek, Echo, Melt)",
    "Retroactive MIDI Capture — always-listening buffer up to 16 bars",
    "Euclidean Rhythm Generator — 3 layers per pad",
    "Parameter Locks (P-Locks) — per-step automation",
    "6 LFOs per track with self-modulation",
    "Multi-Sequencer — 4 sub-sequencers per tonal track",
    "Song Mode — linear arrangement",
    "AUv3 MIDI plug-in — works in any compatible host",
    "480 PPQN resolution"
  ],
  "author": { "@type": "Person", "name": "Tyler" },
  "softwareVersion": "1.0"
};


export default function PrismHome() {
  return (
    <main>

      {/* ── 1. Hero ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <PrismHero />

      {/* ── 2. Pitch (stats) ── */}
      <section className="flex flex-col items-center justify-center px-4 md:px-6 pt-16 md:pt-24 pb-6 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl w-full">
          <div className="border border-[var(--border)] rounded-sm p-5 md:p-8 bg-[var(--bg-secondary)]">
            <div className="text-5xl md:text-6xl font-bold mb-2"><span className="bg-[var(--cta)] text-[var(--bg-primary)] px-2">$20</span></div>
            <div className="font-mono text-xs tracking-widest uppercase text-[var(--text-primary)] mb-1">+ IAP </div>
            <div className="text-sm text-[var(--text-tertiary)]">vs. $599 – $2,500 hardware</div>
          </div>
          <div className="border border-[var(--border)] rounded-sm p-5 md:p-8 bg-[var(--bg-secondary)]">
            <div className="text-5xl md:text-6xl font-bold mb-2">16 <span className="text-2xl">tracks</span></div>
            <div className="font-mono text-xs tracking-widest uppercase text-[var(--text-primary)] mb-1">256 Sequencers</div>
            <div className="text-sm text-[var(--text-tertiary)]">Independent lengths, resolutions, FX</div>
          </div>
          <div className="border border-[var(--border)] rounded-sm p-5 md:p-8 bg-[var(--bg-secondary)]">
            <div className="text-5xl md:text-6xl font-bold mb-2">512 <span className="text-2xl">steps</span></div>
            <div className="font-mono text-xs tracking-widest uppercase text-[var(--text-primary)] mb-1">1/32 Resolution</div>
            <div className="text-sm text-[var(--text-tertiary)]">Up to 16 bars per sequencer</div>
          </div>
        </div>
      </section>

      {/* ── 1b. Hero Image ── */}
      <section className="pb-10 md:pb-16 px-4 md:px-10">
        <div className="max-w-5xl mx-auto flex justify-center">
          <img
            src="/images/prism_hero.jpg"
            alt="Prism MIDI step sequencer interface on iPad showing 16-track grid, track select mode, and home view."
            className="w-full h-auto object-contain rounded-md"
          />
        </div>
      </section>

      {/* ── Positioning Statement ── */}
      <section className="flex flex-col items-center justify-center px-6 pb-12 md:pb-16">
        <p className="text-lg md:text-xl text-[var(--text-secondary)] text-center max-w-3xl">Prism competes with $1,000 hardware sequencers, can be played anywhere with iPhone & iPad,  <span className="text-[var(--text-primary)] font-semibold">and has capabilities none of them do.</span></p>
      </section>

      {/* ── Two Track Types ── */}
      <section className="py-12 md:py-20 px-4 md:px-6 border-[var(--border)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Drums Column */}
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-tertiary)] mb-4">Drum Tracks</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">16 Pads. <span className="text-[var(--cta)]">16 Sequencers.</span></h2>
            <p className="text-[var(--text-secondary)] text-lg mb-6 md:mb-8 max-w-lg">Every pad is its own independent sequencer — with its own length, resolution, and Step FX. Your kick runs 16 steps while your hi-hat runs 7 and your snare runs 5. Polyrhythmic drums from a single track.</p>
            <div className="space-y-0">
              {[
                { label: "Per-pad independence", desc: "Length, resolution, and FX are set per pad — not shared across a grid. No other sequencer gives every drum sound its own complete engine." },
                { label: "Choke & sidechain groups", desc: "Link pads for realistic hi-hat behavior and rhythmic ducking — the same inter-sound relationships you'd set up on hardware." },
                { label: "Drum Melt", desc: "Fire a drum trig and it plays out a tonal track's notes across your arrangement. The drum pattern becomes a rhythm engine for melodic content." },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start py-4 md:py-5 border-t border-[var(--border)]">
                  <div>
                    <h3 className="font-bold text-base mb-1">{item.label}</h3>
                    <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tonal Column */}
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-tertiary)] mb-4">Tonal Tracks</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">Scale-Locked. <span className="text-[var(--cta)]">Everywhere.</span></h2>
            <p className="text-[var(--text-secondary)] text-lg mb-6 md:mb-8 max-w-lg">Every input and transformation stays in key — not just the notes you place, but the arpeggiator, Fuse modes, randomization, and even your external MIDI keyboard. 50+ scales, or build your own.</p>
            <div className="space-y-0">
              {[
                { label: "Universal enforcement", desc: "Scale locking isn't a filter you toggle — it's architectural. Every system that generates or transforms notes respects the active scale." },
                { label: "Chord Blocks + Smart Chords Lab", desc: "Reference-based harmonic objects and an experimental chord-building workspace. Two approaches to harmony, both scale-aware." },
                { label: "Multi-Sequencer", desc: "Four independent sub-sequencers per tonal track, each with its own length and pattern. Set different lengths and they phase against each other." },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start py-4 md:py-5 border-t border-[var(--border)]">
                  <div>
                    <h3 className="font-bold text-base mb-1">{item.label}</h3>
                    <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. Fuse Modes ── */}
      <section className="py-12 md:py-20 px-4 md:px-6 border-[var(--border)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-end">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-tertiary)] mb-4">No sequencer at any price has inter-track musical data flow</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">Fuse Modes: <span className="text-[var(--cta)]">Peek, Echo, Melt</span></h2>
            <p className="text-[var(--text-secondary)] text-lg mb-6 md:mb-8 max-w-lg">Fuse lets tracks share musical data — rhythm, pitch, velocity — creating combinations that neither track could produce alone.</p>
            <div className="space-y-0">
              {FUSE_MODES.map((mode) => (
                <div key={mode.name} className="flex gap-4 items-start py-4 md:py-5 border-t border-[var(--border)]">
                  <div className={`w-14 h-14 rounded-sm border flex items-center justify-center shrink-0 ${mode.accent ? "bg-[var(--cta)] border-[var(--cta)]" : "bg-[var(--bg-secondary)] border-[var(--border)]"}`}>
                    <img src={mode.icon} alt={mode.name} className={`w-7 h-7 ${mode.accent ? "invert" : "invert opacity-70"}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{mode.name}</h3>
                    <p className="text-[var(--text-secondary)] text-sm">{mode.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/prism/docs" className="inline-block mt-6 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Learn more →</Link>
          </div>
          <div className="rounded-xl overflow-hidden min-h-[320px] md:min-h-[480px] lg:min-h-[540px]">
            <MeltDiagram />
          </div>
        </div>
      </section>

      {/* ── 3b. Chord Blocks ── */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">

          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-tertiary)] mb-4">No sequencer at any price has reference-based chord objects</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">Chord Blocks: <span className="text-[var(--cta)]">references, not copies.</span></h2>
            <p className="text-[var(--text-secondary)] text-lg mb-6 md:mb-8 max-w-lg">Every chord exists in one place. Place it on any trig, across any track — they all point back to the source. Change the block, and your entire arrangement follows. Instantly.</p>
            <div className="space-y-0">
              {[
                { label: "4 Banks · Scene-linked", desc: "Switch scenes and the harmonic content of your entire arrangement transforms — same rhythm, different harmony, one tap." },
                { label: "Character travels with the chord", desc: "Strum amount, strum humanization, and velocity variation are part of the block — the feel of a chord moves with it." },
                { label: "Architecturally unique", desc: "Hardware sequencers bake chords into trigs. Prism's blocks are live references. No hardware equivalent exists." },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start py-4 md:py-5 border-t border-[var(--border)]">
                  <div>
                    <h3 className="font-bold text-base mb-1">{item.label}</h3>
                    <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/prism/docs" className="inline-block mt-6 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Learn more →</Link>
          </div>

          <div className="flex flex-col gap-0">
            {/* Photo */}
            <div className="rounded-xl overflow-hidden border border-[var(--border)]">
              <img
                src="/images/chordBlocks.jpg"
                alt="Prism Chord Blocks — reference-based chord sequencing across multiple tracks"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Diagram */}
            <div className="rounded-xl overflow-hidden min-h-[320px] md:min-h-[480px] lg:min-h-[540px]">
              <BlockDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Feature Grid ── */}
      <section className="pt-4 md:pt-8 pb-12 md:pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {FEATURES.map((f) => (
              <div key={f.title} className="border border-[var(--border)] rounded-xl p-5 md:p-6 bg-[var(--bg-secondary)] hover:border-[var(--border-hover)] transition-colors">
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 md:mt-10">
            <Link href="/prism/features" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border)] text-sm font-semibold hover:border-[var(--border-hover)] transition-colors">See all features →</Link>
          </div>
        </div>
      </section>

      {/* ── 5. Hardware Trinity ── */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ConnectionsDiagram />
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto mb-4 md:mb-6">Prism + Launchpad + Launchkey + Ableton Live. Bidirectional control, RGB feedback, clip launching, and a complete performance rig that costs a fraction of dedicated hardware.</p>
          <Link href="/prism/docs" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Read the setup guide →</Link>
        </div>
      </section>

      {/* ── 4b. Testimonials ── */}
      <section className="py-12 md:py-20 px-4 md:px-6 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "On par with $800+ hardware",
                quote: "The feature set on this is amazing and offers more than many hyped up hardware sequencers. An amazing achievement as is, and I look forward to how this develops in the future.",
                handle: "@Justin032",
                source: "App Store",
              },
              {
                title: "Peerless",
                quote: "Centerpiece-level powerhouse. This artful sequencer stands out for its combination of near-perfect touch interface with the depth and control of a great hardware unit...",
                handle: "@L.Laine",
                source: "App Store",
              },
              {
                title: "Best sequencer for iOS",
                quote: "This sequencer is amazing so feature and innovative feature that make producing music a breeze.",
                handle: "@hacked_to_pieces",
                source: "App Store",
              },
            ].map((t, i) => (
              <div key={i} className="border border-[var(--border)] rounded-xl p-5 md:p-6 bg-[var(--bg-secondary)] flex flex-col gap-3 md:gap-4">
                <h3 className="font-mono text-sm font-semibold text-[var(--text-primary)]">{t.title}</h3>
                <h3 className="font-mono text-sm font-semibold text-[var(--text-primary)]">{"★★★★★"}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">"{t.quote}"</p>
                <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-[var(--border)]">
                  <span className="font-mono text-xs text-[var(--text-primary)] font-semibold">{t.handle}</span>
                  <span className="font-mono text-[10px] text-[var(--text-tertiary)] tracking-wide">{t.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Final CTA ── */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-[var(--bg-secondary)] border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--accent)] mb-4">Alchemy Electronica</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Your next sequencer<br />fits in your pocket.</h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 md:mb-10 max-w-xl mx-auto">16 tracks. Fuse Modes. Chord Blocks. Parameter Locks. Everything you'd expect from a $2,000 sequencer — on iPhone and iPad.</p>
          <a href="/prism/download" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--cta)] text-[var(--bg-primary)] font-semibold text-lg hover:bg-[var(--cta-hover)] transition-colors shadow-lg shadow-[var(--cta)]/20">Download on the App Store</a>
          <p className="mt-6 text-sm text-[var(--text-secondary)]">At 2% the cost of a hardware sequencer.</p>
          <p className="mt-2 text-xs text-[var(--text-tertiary)]">iPhone & iPad · AUV3 · iOS 16+</p>
        </div>
      </section>

    </main>
  );
}