import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Prism — MIDI Step Sequencer for iPhone & iPad",
  description:
    "Get Prism on the App Store. 16-track AUv3 MIDI step sequencer starting at $19.99 with optional Euclidean, LFO, Step FX, and Multi-Sequencer extensions.",
};

export default function DownloadPage() {
  const iaps = [
    { name: "Euclidean Sequencer", desc: "3-layer Euclidean generator per drum pad" },
    { name: "LFO Extension", desc: "6 LFOs per track with self-modulation and custom shapes" },
    { name: "Step FX", desc: "4 FX slots per trig: velocity, pitch, ratchet, strum/flam" },
    { name: "Multi-Sequencer", desc: "4 sub-sequencers per tonal track, up to 64 voices" },
    { name: "Launchkey Mini MK4", desc: "Bidirectional control surface mapping" },
  ];
  return (
    <main className="pt-16">
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Get Prism.</h1>
          <a href="https://apps.apple.com/app/prism-sequencer/id6502302630" target="_blank" rel="noopener noreferrer" className="inline-block mb-6">
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1276560000"
              alt="Download on the App Store"
              style={{ height: 64 }}
            />
          </a>
          <div className="text-6xl font-bold mb-2">$19.99</div>
          <p className="text-lg text-[var(--text-secondary)] mb-10">Extend with in-app purchases.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left mb-6">
            {iaps.map((iap) => (
              <div key={iap.name} className="border border-[var(--border)] rounded-xl p-5 bg-[var(--bg-secondary)]">
                <h3 className="font-bold mb-1">{iap.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{iap.desc}</p>
                <span className="text-xl font-bold">$4.99</span>
              </div>
            ))}
            <div className="border border-[var(--cta)] rounded-xl p-5 bg-[var(--cta)] text-[var(--bg-primary)] flex flex-col items-center justify-center text-center">
              <h3 className="font-bold mb-1">Fully unlocked</h3>
              <span className="text-3xl font-bold">$44.94</span>
              <p className="text-sm mt-1">Base + all IAPs</p>
            </div>
          </div>
          <p className="text-sm text-[var(--text-tertiary)] max-w-lg mx-auto">Requires iPhone or iPad running iOS 16 or later. Prism is a MIDI-only instrument, pair it with any external sound source.</p>
        </div>
      </section>
    </main>
  );
}
