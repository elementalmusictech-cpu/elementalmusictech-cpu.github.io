"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Features", href: "/prism/features" },
  { label: "Compare", href: "/prism/compare" },
  // { label: "Community", href: "/prism/community" },
  { label: "Docs", href: "/prism/docs" },
  { label: "Resources", href: "/prism/resources" },
  { label: "Blog", href: "/prism/blog" },
];

export default function PrismNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[var(--bg-primary)]/90 backdrop-blur-xl border-b border-[var(--border)]" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/prism" className="flex items-center gap-2.5 group">
        <Image src="images/prismIcon.png" alt="Prism icon" width={40} height={40} className="group-hover:scale-110 transition-transform" />
          <span className="text-lg font-bold tracking-tight">Prism</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={`px-3.5 py-2 rounded-lg text-sm transition-colors ${pathname.startsWith(item.href) ? "text-[var(--accent)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}>{item.label}</Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/prism/download" className="px-5 py-2 rounded-lg bg-[var(--cta)] text-[var(--bg-primary)] text-sm font-semibold hover:bg-[var(--cta-hover)] transition-colors">Download</Link>
          <button className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-[var(--border)]" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <div className="w-4 flex flex-col gap-[3px]">
              <span className={`block h-[1.5px] bg-[var(--text-primary)] transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""}`} />
              <span className={`block h-[1.5px] bg-[var(--text-primary)] transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[1.5px] bg-[var(--text-primary)] transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg-primary)]/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className={`px-4 py-3 rounded-lg text-sm ${pathname.startsWith(item.href) ? "text-[var(--accent)] bg-[var(--accent-dim)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"}`}>{item.label}</Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}