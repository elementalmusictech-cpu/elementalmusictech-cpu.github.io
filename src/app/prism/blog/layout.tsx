import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prism Blog — Updates, Workflows & Sequencer Tips",
  description: "News, workflow recipes, and deep dives from the developer of Prism, the 16-track AUv3 MIDI step sequencer for iPhone and iPad.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}