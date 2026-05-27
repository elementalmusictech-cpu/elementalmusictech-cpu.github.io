import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Prism Community — Tutorials, Discord & Videos",
  description:
    "Join the Prism community. Tutorial series, Discord, YouTube walkthroughs, and Facebook group for the 16-track MIDI step sequencer.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}