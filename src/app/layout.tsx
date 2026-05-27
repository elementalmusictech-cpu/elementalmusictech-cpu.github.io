import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alchemy Electronica",
    template: "%s | Alchemy Electronica",
  },
  description:
    "Prism is a 16-track AUv3 MIDI step sequencer for iPhone and iPad. From Alchemy Electronica.",
  metadataBase: new URL("https://www.alchemyelectronica.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Alchemy Electronica",
    images: [{ url: "/images/sharedHero_prism.png", width: 1200, height: 630 }],
  },
  twitter: {
      card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}