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
          <div className="border border-[var(--border)] rounded-xl bg-[var(--bg-secondary)] p-6 inline-block mb-6">
            <p className="font-mono text-xs text-[var(--text-tertiary)]">[ App Store badge ]</p>
          </div>
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
          <p className="text-sm text-[var(--text-tertiary)] max-w-lg mx-auto">Requires iPhone or iPad running iOS 16 or later. Prism is a MIDI-only instrument — pair with any AUv3 synth or external hardware.</p>
        </div>
      </section>
    </main>
  );
}
