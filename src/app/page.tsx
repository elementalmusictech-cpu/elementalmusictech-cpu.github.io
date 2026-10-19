import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alchemy Electronica — Instruments for Musicians",
  description:
    "Prism is a 16-track AUv3 MIDI step sequencer for iPhone and iPad. From Alchemy Electronica.",
  alternates: {
    canonical: "https://www.alchemyelectronica.com",
  },
};

export default function Home() {
  return <meta httpEquiv="refresh" content="0;url=/prism" />;
}
