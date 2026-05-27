import { MetadataRoute } from "next";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.alchemyelectronica.com";
  const now = new Date();

  return [
    { url: `${base}/prism`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/prism/features`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/prism/compare`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/prism/download`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/prism/docs`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/prism/docs/guides/getting-started`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/prism/docs/features/chord-blocks`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/prism/docs/features/fuse-modes`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/prism/docs/features/retroactive-capture`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/prism/docs/features/euclidean-rhythms`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/prism/docs/workflows/hardware-brain`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/prism/docs/workflows/blank-to-arrangement`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/prism/docs/guides/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/prism/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.5 }
  ];
}