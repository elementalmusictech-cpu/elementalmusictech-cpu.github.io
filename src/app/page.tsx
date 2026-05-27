import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alchemy Electronica — Instruments for Musicians",
  description: "Prism is a 16-track AUv3 MIDI step sequencer for iPhone and iPad. From Alchemy Electronica.",
  alternates: {
    canonical: "https://www.alchemyelectronica.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Alchemy Electronica
        </h1>
        <p className="text-[var(--text-secondary)] text-lg mb-10">
          Instruments for musicians who care about the details.
        </p>

        <Link
          href="/prism"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--accent)] text-[var(--bg-primary)] font-semibold text-lg hover:bg-[var(--accent-hover)] transition-colors"
        >
          Prism — MIDI Step Sequencer
          <span aria-hidden>→</span>
        </Link>
      </div>
    </main>
  );
}