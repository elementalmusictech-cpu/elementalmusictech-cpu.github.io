import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prism Documentation — Guides, Features & Workflows",
  description: "Getting started guides, feature documentation, and workflow recipes for Prism, the 16-track AUv3 MIDI step sequencer for iPhone and iPad.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}