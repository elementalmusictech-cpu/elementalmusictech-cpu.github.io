import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Prism — MIDI Step Sequencer for iPhone & iPad",
  description: "Get Prism on the App Store. 16-track AUv3 MIDI step sequencer starting at $19.99 with optional Euclidean, LFO, Step FX, and Multi-Sequencer extensions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}