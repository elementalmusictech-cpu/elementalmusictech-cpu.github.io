import type { Metadata } from "next";
import ManualFrame from "@/components/prism/ManualFrame";

export const metadata: Metadata = {
  title: "Prism Manual",
  description: "The complete Prism reference manual, with chapter navigation, search, and screenshot details.",
};

export default function ManualPage() {
  return (
    <main className="pt-16 bg-[var(--bg-primary)]" aria-label="Prism manual">
      <ManualFrame />
    </main>
  );
}
