import fs from "fs";
import path from "path";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prism Documentation — Guides, Features & Workflows",
  description:
    "Getting started guides, feature documentation, and workflow recipes for Prism, the 16-track AUv3 MIDI step sequencer for iPhone and iPad.",
};

const docSections = [
  {
    label: "Full Manual",
    slug: "manual",
    docs: [
      {
        title: "Prism Manual",
        href: "/manuals/prism-manual.pdf", // standard link
      },
    ],
  },

  {
    label: "Guides",
    slug: "guides",
    docs: [
      { title: "Getting Started", file: "getting-started" },
      { title: "Blank to Full Arrangement", file: "blank-to-arrangement" },
      { title: "Prism as Your Hardware Brain", file: "hardware-brain" },
    ],
  },

  {
    label: "Features",
    slug: "features",
    docs: [
      { title: "Chord Blocks", file: "chord-blocks" },
      { title: "Fuse Modes", file: "fuse-modes" },
      { title: "Retroactive Capture", file: "retroactive-capture" },
      { title: "Euclidean Rhythms", file: "euclidean-rhythms" },
    ],
  },
];

function docExists(section: string, file: string) {
  const p = path.join(process.cwd(), "src/content/docs", section, `${file}.md`);
  return fs.existsSync(p);
}

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="border-b border-[var(--border)] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[var(--accent)] text-sm font-mono tracking-widest uppercase mb-4">Documentation</p>
          <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Learn Prism</h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl">Guides, feature references, and workflow recipes — from your first pattern to full hardware integration.</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12 flex gap-12">
        {/* Sidebar */}
        <aside className="hidden md:block w-56 shrink-0">
          <nav className="sticky top-24 space-y-8">
            {docSections.map((section) => (
              <div key={section.slug}>
                <p className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-widest mb-3">{section.label}</p>
                <ul className="space-y-1">
                  {section.docs.map((doc) => {
                    const isExternal = 'href' in doc;
                    const exists = isExternal || docExists(section.slug, doc.file);

                    const link = isExternal
                      ? doc.href
                      : `/prism/docs/${section.slug}/${doc.file}`;

                    return (
                      <li key={doc.title}>
                        {exists ? (
                          <Link
                            href={link}
                            className="block text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors py-1"
                            target={isExternal ? "_blank" : undefined}
                          >
                            {doc.title}
                          </Link>
                        ) : (
                          <span className="block text-sm text-[var(--text-tertiary)] py-1 cursor-default">
                            {doc.title} <span className="text-xs">(coming soon)</span>
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Content — doc cards */}
        <div className="flex-1 space-y-10">
          {docSections.map((section) => (
            <div key={section.slug}>
              <h2 className="text-sm font-mono text-[var(--text-tertiary)] uppercase tracking-widest mb-4">{section.label}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {section.docs.map((doc) => {
                  const isExternal = 'href' in doc;
                  const exists = isExternal || docExists(section.slug, doc.file);

                  const link = isExternal
                    ? doc.href
                    : `/prism/docs/${section.slug}/${doc.file}`;

                  return (
                    <div
                      key={doc.title}
                      className={`border rounded-xl p-5 transition-colors ${
                        exists
                          ? "border-[var(--border)] hover:border-[var(--border-hover)] bg-[var(--bg-secondary)]"
                          : "border-[var(--border)] bg-[var(--bg-secondary)] opacity-50"
                      }`}
                    >
                      {exists ? (
                        <Link
                          href={link}
                          className="block"
                          target={isExternal ? "_blank" : undefined}
                        >
                          <h3 className="font-semibold text-[var(--text-primary)] mb-1 hover:text-[var(--accent)] transition-colors">
                            {doc.title}
                          </h3>
                        </Link>
                      ) : (
                        <>
                          <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                            {doc.title}
                          </h3>
                          <p className="text-xs text-[var(--text-tertiary)] font-mono">
                            Coming soon
                          </p>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}