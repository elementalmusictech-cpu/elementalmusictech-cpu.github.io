import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prism Resources — Manual, Ableton Script & Downloads",
  description: "Download the Prism PDF manual and Ableton Live Remote Script. Everything you need to set up and master the 16-track MIDI step sequencer.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}