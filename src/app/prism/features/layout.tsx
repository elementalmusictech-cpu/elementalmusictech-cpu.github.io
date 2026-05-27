import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prism Features — 16-Track MIDI Step Sequencer for iOS",
  description: "Every feature in Prism: 512 steps, Fuse Modes, Chord Blocks, 6 LFOs per track, Step FX, Euclidean rhythms, Parameter Locks, Song Mode, and hardware integration.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}