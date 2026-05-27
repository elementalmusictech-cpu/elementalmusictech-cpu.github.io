import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";


interface Props {
  params: Promise<{ section: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section, slug } = await params;
  const filePath = path.join(process.cwd(), "src/content/docs", section, `${slug}.md`);
  if (!fs.existsSync(filePath)) return {};
  const raw = fs.readFileSync(filePath, "utf-8");
  const titleMatch = raw.match(/^#\s+(.+)/m);
  const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, " ");
  const descMatch = raw.match(/^#.+\n+(.+)/m);
  const description = descMatch ? descMatch[1].slice(0, 160) : undefined;
  return { title, description };
}

export async function generateStaticParams() {
  const base = path.join(process.cwd(), "src/content/docs");
  const params: { section: string; slug: string }[] = [];
  for (const section of ["guides", "features"]) {
    const dir = path.join(base, section);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      if (file.endsWith(".md")) {
        params.push({ section, slug: file.replace(/\.md$/, "") });
      }
    }
  }
  return params;
}

export default async function DocPage({ params }: Props) {
  const { section, slug } = await params;
  const filePath = path.join(process.cwd(), "src/content/docs", section, `${slug}.md`);
  if (!fs.existsSync(filePath)) notFound();

  const { default: DocContent } = await import(`@/content/docs/${section}/${slug}.md`);

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/prism/docs" className="text-sm text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors mb-8 inline-block">← All docs</Link>
        <article className="prose-custom">
          <DocContent />
        </article>
      </div>
    </main>
  );
}