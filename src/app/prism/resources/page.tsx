import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prism Resources — Manual, Ableton Script & Downloads",
  description:
    "Download the Prism PDF manual and Ableton Live Remote Script. Everything you need to set up and master the 16-track MIDI step sequencer.",
};

const DOWNLOADS = [
  {
    title: "Prism User Manual",
    desc: "The complete reference for every feature in Prism. 150 pages covering everything from first setup to advanced workflows.",
    meta: "PDF · ~40MB",
    href: "https://drive.google.com/file/d/1iCtRFbw2gMiTsQ8mCDvqmHOvzukHqUBO/view",
    label: "View Manual",
  },
  {
    title: "Ableton Live Remote Script",
    desc: "The Python control script for Ableton Live integration. Enables bi-directional sync, automatic track mapping, and CC-to-Macro routing.",
    meta: "ZIP · Python script",
    href: "https://github.com/YOUR_USERNAME/YOUR_REPO/releases/download/v1.0/Prism-Ableton-Script.zip",
    label: "Download Script",
    note: "Installation guide in the manual — Chapter 9, or see the Docs page.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="pt-16">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Resources</h1>
          <p className="text-lg text-[var(--text-secondary)]">Downloads and reference material for Prism.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-16">

        {/* Downloads */}
        <section>
          <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--text-tertiary)] mb-6">Downloads</p>
          <div className="space-y-4">
            {DOWNLOADS.map((item) => (
              <div key={item.title} className="border border-[var(--border)] rounded-xl p-6 flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="flex-1">
                  <h2 className="font-bold text-lg mb-1">{item.title}</h2>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">{item.desc}</p>
                  {item.note && (
                    <p className="text-xs text-[var(--text-tertiary)]">{item.note}</p>
                  )}
                </div>
                <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-[var(--cta)] text-[var(--bg-primary)] text-sm font-semibold hover:bg-[var(--cta-hover)] transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                  <span className="font-mono text-[10px] text-[var(--text-tertiary)]">{item.meta}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Legal */}
        <section>
          <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--text-tertiary)] mb-6">Legal</p>
          <div className="border border-[var(--border)] rounded-xl divide-y divide-[var(--border)]">
            <Link
              href="/prism/privacy"
              className="flex items-center justify-between px-6 py-4 hover:bg-[var(--bg-secondary)] transition-colors rounded-xl"
            >
              <span className="text-sm font-medium">Privacy Policy</span>
              <span className="text-[var(--text-tertiary)] text-sm">→</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}