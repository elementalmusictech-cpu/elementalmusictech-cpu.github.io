import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = [
  { heading: "Product", links: [{ label: "Features", href: "/prism/features" }, { label: "Compare", href: "/prism/compare" }, { label: "Download", href: "/prism/download" }] },
  { heading: "Learn", links: [{ label: "Docs", href: "/prism/docs" }, { label: "Resources", href: "/prism/resources" }, { label: "Blog", href: "/prism/blog" }] },
  { heading: "Community", links: [
    // { label: "Community", href: "/prism/community" },
    { label: "Discord", href: "https://discord.gg/v46ywMDNgw" },
    { label: "YouTube", href: "https://www.youtube.com/playlist?list=PLsL0itdEVgN0zDYb6oQbnVDr1usxi4kHG" }, { label: "Facebook", href: "https://www.facebook.com/groups/565543892868669" }] },
];


export default function PrismFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/prism" className="flex items-center gap-2.5 mb-4">
                <Image src="/images/prismIcon.png" alt="Prism icon" width={28} height={28} />
              <span className="text-lg font-bold">Prism</span>
            </Link>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-xs">A 16-track AUv3 MIDI step sequencer for iPhone and iPad.</p>
          </div>
          {FOOTER_LINKS.map((group) => (
            <div key={group.heading}>
              <h4 className="font-mono text-xs tracking-widest uppercase text-[var(--text-tertiary)] mb-4">{group.heading}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}><Link href={link.href} className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between gap-4">
          <div className="flex gap-6 text-xs text-[var(--text-tertiary)]"><span>Privacy Policy</span><span>Terms</span></div>
          <div className="text-xs text-[var(--text-tertiary)]">Built by Alchemy Electronica · © {year} All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}