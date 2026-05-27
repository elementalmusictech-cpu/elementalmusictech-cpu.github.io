"use client";

import { useRef } from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Prism Community — Tutorials, Discord & Videos",
  description:
    "Join the Prism community. Tutorial series, Discord, YouTube walkthroughs, and Facebook group for the 16-track MIDI step sequencer.",
};

type Video = {
  title: string;
  youtubeId: string;
  duration?: string; // e.g. "12:34"
};

type Series = {
  name: string;
  creator: string;
  creatorUrl?: string; // e.g. YouTube channel link
  videos: Video[];
};

const SERIES: Series[] = [
  {
    name: "Getting Started with Prism",
    creator: "Creator Name",
    creatorUrl: "https://youtube.com/@creatorhandle",
    videos: [
      { title: "Episode 1 — Your First Pattern", youtubeId: "YOUTUBE_ID_1", duration: "10:22" },
      { title: "Episode 2 — Drum Tracks Deep Dive", youtubeId: "YOUTUBE_ID_2", duration: "14:08" },
      { title: "Episode 3 — Tonal Tracks & Chord Blocks", youtubeId: "YOUTUBE_ID_3", duration: "18:45" },
      { title: "Episode 4 — Scenes & Song Mode", youtubeId: "YOUTUBE_ID_4", duration: "11:30" },
    ],
  },
  {
    name: "Advanced Techniques",
    creator: "Another Creator",
    creatorUrl: "https://youtube.com/@anotherhandle",
    videos: [
      { title: "Part 1 — Fuse Modes Explained", youtubeId: "YOUTUBE_ID_5", duration: "20:14" },
      { title: "Part 2 — Parameter Locks & Step FX", youtubeId: "YOUTUBE_ID_6", duration: "16:55" },
      { title: "Part 3 — Building a Live Set", youtubeId: "YOUTUBE_ID_7", duration: "22:01" },
    ],
  },
];

function VideoCard({ video }: { video: Video }) {
  const thumbUrl = `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`;
  const watchUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;

  return (
    <a
      href={watchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group shrink-0 w-64 flex flex-col"
    >
      <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--bg-secondary)] mb-3">
        <img
          src={thumbUrl}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
          <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
            <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {video.duration && (
          <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-mono px-1.5 py-0.5 rounded">
            {video.duration}
          </span>
        )}
      </div>
      <p className="text-sm font-medium leading-snug group-hover:text-[var(--cta)] transition-colors line-clamp-2">
        {video.title}
      </p>
    </a>
  );
}

function SeriesRow({ series }: { series: Series }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 288 : -288, behavior: "smooth" });
  };

  return (
    <section>
      {/* Row header */}
      <div className="flex items-end justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold tracking-tight">{series.name}</h2>
          <p className="text-sm text-[var(--text-secondary)] mt-0.5">
            by{" "}
            {series.creatorUrl ? (
              <a
                href={series.creatorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-primary)] transition-colors"
              >
                {series.creator}
              </a>
            ) : (
              series.creator
            )}
          </p>
        </div>
        {/* Scroll controls
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-8 h-8 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors"
            aria-label="Scroll left"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-8 h-8 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors"
            aria-label="Scroll right"
          >
            →
          </button>
        </div> */}
      </div>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {series.videos.map((video) => (
          <VideoCard key={video.youtubeId} video={video} />
        ))}
      </div>
    </section>
  );
}

export default function CommunityPage() {
  return (
    <main className="pt-16">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Made with <span className="text-[var(--cta)]">Prism</span>.
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            Tracks, performances, and tutorials from the people who play this instrument every day.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-24 space-y-16">
        <div>
          <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--text-tertiary)] mb-10">
            Tutorial Series
          </p>
          <div className="space-y-14">
            {SERIES.map((series) => (
              <SeriesRow key={series.name} series={series} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}