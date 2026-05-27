"use client";

import { useEffect, useRef, useState } from "react";
import { SPECTRUM } from "@/lib/theme";

/* ───── feature nodes ───── */
const FEATURES = [
  { id: "F-01", name: "Fuse Engine",        color: SPECTRUM[0] },
  { id: "F-02", name: "Chord Blocks",       color: SPECTRUM[1] },
  { id: "F-03", name: "Euclidean",           color: SPECTRUM[2] },
  { id: "F-04", name: "Step FX",             color: SPECTRUM[3] },
  { id: "F-05", name: "Polyrhythms",         color: SPECTRUM[4] },
  { id: "F-06", name: "Retroactive Capture",       color: SPECTRUM[5] },
  { id: "F-07", name: "Hardware Trinity",          color: SPECTRUM[6] },
];

const FEATURE_DATA = [
  {
    id: "F-01",
    name: "Fuse Modes",
    tag: "Inter-track intelligence",
    body: "Tracks can peek at, echo, or melt with each other's musical data. Melt takes the rhythm from one track and the notes from another — creating a third idea that neither could produce alone. No other sequencer at any price has this.",
    badge: "Peek · Echo · Melt",
    link: "/prism/features#fuse-modes",
  },
  {
    id: "F-02",
    name: "Chord Blocks",
    tag: "Reference-based harmony",
    body: "Chord Blocks are harmonic objects, not copies. Change one block and every trig referencing it updates instantly — across every track, every pattern, the entire arrangement. Four swappable banks tied to scenes.",
    badge: "4 banks · Scene-linked",
    link: "/prism/features#chord-blocks",
  },
  {
    id: "F-03",
    name: "Euclidean",
    tag: "Algorithmic rhythm generation",
    body: "Three blendable Euclidean layers per drum pad, with ghost note blocking and per-pad polyrhythmic lengths. Distribute hits mathematically across any step count — instantly.",
    badge: "3-layer blend · Per-pad",
    link: "/prism/features#euclidean",
  },
  {
    id: "F-04",
    name: "Step FX",
    tag: "Per-trig sound shaping",
    body: "Up to four simultaneous FX processors on each individual step — not per-track, per-trig. Velocity, Pitch, Ratchet, Strum on tonal tracks. Velocity, Length, Ratchet, Flam on drum tracks. Snapshots for instant recall.",
    badge: "4 FX per trig · Snapshots",
    link: "/prism/features#step-fx",
  },
  {
    id: "F-05",
    name: "16 × 512",
    tag: "Sequencer engine",
    body: "16 independent tracks. Up to 512 steps per pattern at 1/32 resolution. Per-track lengths run independently — a 5-bar melody against a 4-bar bass against a 3-bar drum loop. 480 PPQN timing engine.",
    badge: "480 PPQN · Polymetric",
    link: "/prism/features#sequencer",
  },
  {
    id: "F-06",
    name: "Capture",
    tag: "Always-listening recorder",
    body: "Prism is always recording your MIDI input. Play freely — then retroactively capture up to 16 bars of what you just played. Three sources: live input, pre-FX, post-FX.",    badge: "Retroactive · Pre/Post FX",
    link: "/prism/features#capture",
  },
  {
    id: "F-07",
    name: "Hardware Trinity",
    tag: "Complete performance system",
    body: "Prism + Launchpad + Launchkey + Ableton Live form a complete performance rig. Bidirectional control, visual feedback, and MIDI routing that turns your iOS device into the brain of a hardware setup.",
    badge: "Launchpad · Launchkey · Ableton",
    link: "/prism/features#hardware",
  },
];

/* ───── HUD panel component ───── */
function FeatureHUD({ activeModal, setActiveModal }: { activeModal: number; setActiveModal: (v: number | null) => void }) {
  const f = FEATURE_DATA[activeModal];
  const color = FEATURES[activeModal].color;
  return (
    <div className="absolute left-1/2 -translate-x-1/2 z-40 w-80 pointer-events-auto" style={{ top: "12%", animation: "hud-in 0.18s cubic-bezier(0.16,1,0.3,1) both" }}>      <div className="absolute -top-px -left-px w-4 h-4 border-t border-l" style={{ borderColor: color }} />
      <div className="absolute -top-px -right-px w-4 h-4 border-t border-r" style={{ borderColor: color }} />
      <div className="absolute -bottom-px -left-px w-4 h-4 border-b border-l" style={{ borderColor: color }} />
      <div className="absolute -bottom-px -right-px w-4 h-4 border-b border-r" style={{ borderColor: color }} />
      <div className="rounded-none p-5" style={{ background: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)", border: `1px solid ${color}44`, boxShadow: `0 0 40px ${color}22, inset 0 0 20px rgba(0,0,0,0.5)` }}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ color, background: `${color}22` }}>{f.id}</span>
            <span className="font-mono text-[10px] text-[var(--text-tertiary)] tracking-wider">{f.badge}</span>
          </div>
          <button className="font-mono text-[10px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors" onClick={() => setActiveModal(null)}>✕</button>
        </div>
        <div className="h-px mb-3" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
        <h2 className="text-base font-bold mb-0.5" style={{ color }}>{f.name}</h2>
        <p className="font-mono text-[9px] text-[var(--text-tertiary)] uppercase tracking-widest mb-3">{f.tag}</p>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">{f.body}</p>
        <div className="flex items-center justify-between pt-3" style={{ borderTop: `1px solid ${color}22` }}>
          <a href={f.link} className="font-mono text-[10px] transition-colors hover:opacity-80" style={{ color }}>full docs →</a>
          <div className="flex gap-1">
            {activeModal > 0 && (<button onClick={() => setActiveModal(activeModal - 1)} className="font-mono text-[10px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors px-2 py-1 rounded" style={{ border: `1px solid ${color}33` }}>←</button>)}
            {activeModal < FEATURES.length - 1 && (<button onClick={() => setActiveModal(activeModal + 1)} className="font-mono text-[10px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors px-2 py-1 rounded" style={{ border: `1px solid ${color}33` }}>→</button>)}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───── main hero ───── */
export default function PrismHero() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const hoveredRef = useRef<number | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    let rafId: number;
    let angle = 0;

    const cssVars = getComputedStyle(document.documentElement);
    const bgPrimary = cssVars.getPropertyValue("--bg-primary").trim();
    const bgSecondary = cssVars.getPropertyValue("--bg-secondary").trim();
    const textSecondary = cssVars.getPropertyValue("--text-secondary").trim();

    const EQUATOR_COUNT = 6;
    const EQUATOR_RADIUS = 90;
    const APEX_Y_TOP = -120;
    const APEX_Y_BOT = 120;
    const DEPTH_SCALE = 0.85;

    const buildVerts = () => {
      const verts: { x: number; y: number; z: number }[] = [];
      for (let i = 0; i < EQUATOR_COUNT; i++) {
        const a = (Math.PI * 2 * i) / EQUATOR_COUNT - Math.PI / 2;
        verts.push({
          x: Math.cos(a) * EQUATOR_RADIUS,
          y: 0,
          z: Math.sin(a) * EQUATOR_RADIUS * DEPTH_SCALE,
        });
      }
      verts.push({ x: 0, y: APEX_Y_TOP, z: 0 });
      verts.push({ x: 0, y: APEX_Y_BOT, z: 0 });
      return verts;
    };

    const edges: [number, number][] = [];
    for (let i = 0; i < EQUATOR_COUNT; i++) {
      edges.push([i, (i + 1) % EQUATOR_COUNT]);
      edges.push([6, i]);
      edges.push([7, i]);
    }

    const verts = buildVerts();
    const CX = 450, CY = 260;
    const SPEED = 0.003;
    const ns = "http://www.w3.org/2000/svg";

    const prismG = svg.querySelector("#prism-edges")!;
    const edgeEls = edges.map(() => {
      const l = document.createElementNS(ns, "line");
      l.setAttribute("stroke", "url(#prism-rainbow)");
      l.setAttribute("stroke-linecap", "round");
      prismG.appendChild(l);
      return l;
    });

    const beamLine = svg.querySelector("#beam-in")!;

    const raysG = svg.querySelector("#spectrum-rays")!;
    const rayEls = SPECTRUM.map((color) => {
      const l = document.createElementNS(ns, "line");
        l.setAttribute("stroke-width", "2");
        l.setAttribute("stroke-opacity", "0.85");
        l.style.cursor = "pointer";
        // Thicken the invisible hit area
        l.setAttribute("stroke-linecap", "round");
        raysG.appendChild(l);

        const hit = document.createElementNS(ns, "line");
        hit.setAttribute("stroke", "transparent");
        hit.setAttribute("stroke-width", "12");
        hit.style.cursor = "pointer";
        raysG.appendChild(hit);

        return { el: l, hit, color };
    });

    const featureLabels: { g: SVGGElement; outer: SVGCircleElement; dot: SVGCircleElement; rect: SVGRectElement; txt: SVGTextElement }[] = [];
    const featuresG = svg.querySelector("#feature-nodes")!;
    FEATURES.forEach((f) => {
      const g = document.createElementNS(ns, "g");
      g.style.opacity = "0.85";
      g.style.cursor = "pointer";

      const outer = document.createElementNS(ns, "circle");
      outer.setAttribute("r", "8");
      outer.setAttribute("fill", "none");
      outer.setAttribute("stroke", f.color);
      outer.setAttribute("stroke-width", "1");
      outer.setAttribute("stroke-opacity", "0.4");
      g.appendChild(outer);

      const dot = document.createElementNS(ns, "circle");
      dot.setAttribute("r", "3.5");
      dot.setAttribute("fill", f.color);
      dot.setAttribute("stroke", bgPrimary);
      dot.setAttribute("stroke-width", "1.5");
      g.appendChild(dot);

      const rect = document.createElementNS(ns, "rect");
      rect.setAttribute("rx", "3");
      rect.setAttribute("fill", bgSecondary);
      rect.setAttribute("stroke", f.color);
      rect.setAttribute("stroke-opacity", "0.2");
      rect.setAttribute("stroke-width", "1");
      g.appendChild(rect);

      const txt = document.createElementNS(ns, "text");
      txt.setAttribute("font-family", "monospace");
      txt.setAttribute("font-size", "13");
      txt.setAttribute("fill", textSecondary);
      txt.setAttribute("text-anchor", "start");
      const idSpan = document.createElementNS(ns, "tspan");
      idSpan.setAttribute("fill", f.color);
      idSpan.setAttribute("font-weight", "bold");
      idSpan.textContent = "";//f.id + " ";
      const nameSpan = document.createElementNS(ns, "tspan");
      nameSpan.textContent = f.name;
      txt.appendChild(idSpan);
      txt.appendChild(nameSpan);
      g.appendChild(txt);

      featuresG.appendChild(g);
      featureLabels.push({ g, outer, dot, rect, txt });
    });

    const glow = svg.querySelector("#center-glow")!;

    const fanOriginX = 560, fanOriginY = 260;
    const fanRadius = 230;
    const arcStart = -60;
    const arcEnd = 60;
    const featurePositions = FEATURES.map((_, i) => {
      const deg = arcStart + (arcEnd - arcStart) * (i / (FEATURES.length - 1));
      const rad = (deg * Math.PI) / 180;
      return { x: fanOriginX + Math.cos(rad) * fanRadius, y: fanOriginY + Math.sin(rad) * fanRadius };
    });

    featurePositions.forEach((pos, i) => {
      const f = FEATURES[i];
      const lg = featureLabels[i];
      lg.g.setAttribute("transform", `translate(${pos.x}, ${pos.y})`);
      lg.txt.setAttribute("x", "14");
      lg.txt.setAttribute("y", "4");
      lg.rect.setAttribute("x", "10");
      lg.rect.setAttribute("y", "-8");
    });
    
    // Snap rect to measured text + wire hover grow
    featureLabels.forEach(({ g, rect, txt }) => {
    const bbox = txt.getBBox();
    const padX = 7, padY = 4;
    rect.setAttribute("x",      (bbox.x - padX).toFixed(1));
    rect.setAttribute("y",      (bbox.y - padY).toFixed(1));
    rect.setAttribute("width",  (bbox.width  + padX * 2).toFixed(1));
    rect.setAttribute("height", (bbox.height + padY * 2).toFixed(1));

    const cx = bbox.x - padX + (bbox.width  + padX * 2) / 2;
    const cy = bbox.y - padY + (bbox.height + padY * 2) / 2;
    rect.style.transformOrigin = `${cx}px ${cy}px`;
    txt.style.transformOrigin  = `${cx}px ${cy}px`;
    rect.style.transform = "scale(1.35)";
    txt.style.transform  = "scale(1.35)";

    g.addEventListener("mouseenter", () => {
    const idx = featureLabels.findIndex(l => l.g === g);
    hoveredRef.current = idx;
    const color = FEATURES[idx].color;
    rect.style.transition = "transform 0.15s ease";
    txt.style.transition  = "transform 0.15s ease";
    rect.style.transformOrigin = `${cx}px ${cy}px`;
    txt.style.transformOrigin  = `${cx}px ${cy}px`;
    rect.style.transform = "scale(1.5)";
    txt.style.transform  = "scale(1.5)";
    rect.setAttribute("stroke-opacity", "0.6");
    rect.setAttribute("stroke-width", "1");
    rect.setAttribute("filter", "url(#glow-ray)");
    });
    g.addEventListener("mouseleave", () => {
    hoveredRef.current = null;
    rect.style.transform = "scale(1.4)";
    txt.style.transform  = "scale(1.4)";
    rect.setAttribute("stroke-opacity", "0.2");
    rect.setAttribute("stroke-width", "1");
    rect.removeAttribute("filter");
    });
    g.addEventListener("click", () => {
    const idx = featureLabels.findIndex(l => l.g === g);
    setActiveModal(idx);
    });
    });

    rayEls.forEach(({ hit }, i) => {
    hit.addEventListener("mouseenter", () => {
    hoveredRef.current = i;
    const { rect, txt } = featureLabels[i];
    const color = FEATURES[i].color;
    rect.style.transition = "transform 0.15s ease";
    txt.style.transition  = "transform 0.15s ease";
    rect.style.transform = "scale(1.5)";
    txt.style.transform  = "scale(1.5)";
    rect.setAttribute("stroke-opacity", "0.6");
    rect.setAttribute("stroke-width", "1");
    rect.setAttribute("filter", "url(#glow-ray)");
    });
    hit.addEventListener("mouseleave", () => {
    hoveredRef.current = null;
    const { rect, txt } = featureLabels[i];
    rect.style.transform = "scale(1.4)";
    txt.style.transform  = "scale(1.4)";
    rect.setAttribute("stroke-opacity", "0.2");
    rect.setAttribute("stroke-width", "1");
    rect.removeAttribute("filter");
    });
    hit.addEventListener("click", () => {
        setActiveModal(i);
    });
    });

    const tick = (t: number) => {
      angle += SPEED;
      const c = Math.cos(angle), s = Math.sin(angle);

      const proj = verts.map((v) => {
        const rx = v.x * c + v.z * s;
        const rz = -v.x * s + v.z * c;
        return { x: CX + rx, y: CY + v.y, z: rz };
      });

      edges.forEach(([a, b], i) => {
        const el = edgeEls[i];
        const va = proj[a], vb = proj[b];
        el.setAttribute("x1", va.x.toFixed(1));
        el.setAttribute("y1", va.y.toFixed(1));
        el.setAttribute("x2", vb.x.toFixed(1));
        el.setAttribute("y2", vb.y.toFixed(1));
        const avgZ = (va.z + vb.z) / 2;
        const depthT = Math.max(0, Math.min(1, (avgZ + 90) / 180));
        const op = 0.12 + depthT * 0.78;
        const w = 1.0 + depthT * 2.0;
        el.setAttribute("stroke-opacity", op.toFixed(2));
        el.setAttribute("stroke-width", w.toFixed(2));
      });

      let minX = Infinity, maxX = -Infinity;
      for (let i = 0; i < EQUATOR_COUNT; i++) {
        if (proj[i].x < minX) { minX = proj[i].x; }
        if (proj[i].x > maxX) { maxX = proj[i].x; }
      }

      beamLine.setAttribute("x1", (CX - fanRadius).toString());
      beamLine.setAttribute("y1", CY.toString());
      beamLine.setAttribute("x2", CX.toString());
      beamLine.setAttribute("y2", CY.toString());

      FEATURES.forEach((_, i) => {
        const isHovered = hoveredRef.current === i;
        const rx2 = featurePositions[i].x.toFixed(1);
        const ry2 = featurePositions[i].y.toFixed(1);
        rayEls[i].el.setAttribute("x1", CX.toString());
        rayEls[i].el.setAttribute("y1", CY.toString());
        rayEls[i].el.setAttribute("x2", rx2);
        rayEls[i].el.setAttribute("y2", ry2);
        rayEls[i].hit.setAttribute("x1", CX.toString());
        rayEls[i].hit.setAttribute("y1", CY.toString());
        rayEls[i].hit.setAttribute("x2", rx2);
        rayEls[i].hit.setAttribute("y2", ry2);
        rayEls[i].el.setAttribute("stroke", `url(#ray-grad-${i})`);
        const targetOp = isHovered ? 1.0 : 0.85;
        const currentOp = parseFloat(rayEls[i].el.getAttribute("stroke-opacity") || "0.85");
        const newOp = currentOp + (targetOp - currentOp) * 0.08;
        rayEls[i].el.setAttribute("stroke-opacity", newOp.toFixed(3));
        rayEls[i].el.setAttribute("stroke-width", isHovered ? "2.5" : "2");
        rayEls[i].el.setAttribute("filter", isHovered ? "url(#glow-ray)" : "");
        const targetNodeOp = isHovered ? 1.0 : 0.85;
        const currentNodeOp = parseFloat(featureLabels[i].g.style.opacity || "0.85");
        featureLabels[i].g.style.opacity = (currentNodeOp + (targetNodeOp - currentNodeOp) * 0.08).toFixed(3);
        const targetR = isHovered ? 13 : 8;
        const currentR = parseFloat(featureLabels[i].outer.getAttribute("r") || "8");
        featureLabels[i].outer.setAttribute("r", (currentR + (targetR - currentR) * 0.08).toFixed(2));
      });

      const pulse = 0.15 + Math.sin(t / 800) * 0.05;
      glow.setAttribute("cx", CX.toString());
      glow.setAttribute("cy", CY.toString());
      glow.setAttribute("r", "60");
      (glow as SVGElement & { style: CSSStyleDeclaration }).style.opacity = pulse.toString();

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    const syncHover = (e: Event) => { hoveredRef.current = (e as CustomEvent).detail; };
    window.addEventListener("prism-hover", syncHover);

    return () => {
      window.removeEventListener("prism-hover", syncHover);
      cancelAnimationFrame(rafId);
      while (prismG.firstChild) prismG.removeChild(prismG.firstChild);
      while (raysG.firstChild) raysG.removeChild(raysG.firstChild);
      while (featuresG.firstChild) featuresG.removeChild(featuresG.firstChild);
    };
  }, []);

  return (
    <section className="min-h-[calc(100svh-64px)] flex flex-col items-center justify-center gap-0 px-2 md:px-6 pt-8 md:pt-12 pb-8 md:pb-12 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)" }} />

      {/* Prism SVG */}
      <div className="relative w-full max-w-[900px] mb-2 md:mb-4">
            <svg ref={svgRef} viewBox="0 0 900 520" className="w-full h-auto max-h-[55vh]" preserveAspectRatio="xMidYMid meet">
            <defs>
            <linearGradient id="beam-grad" gradientUnits="userSpaceOnUse" x1="0" y1="260" x2="450" y2="260">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="40%" stopColor="white" stopOpacity="0.6" />
              <stop offset="100%" stopColor="white" stopOpacity="0.9" />
            </linearGradient>

            <filter id="glow-ray" filterUnits="userSpaceOnUse" x="-20%" y="-100%" width="140%" height="300%">
              <feGaussianBlur stdDeviation="5" result="blur1" />
              <feGaussianBlur stdDeviation="10" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="glow-soft">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="glow-beam" filterUnits="userSpaceOnUse" x="0" y="200" width="900" height="120">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {SPECTRUM.map((color, i) => (
              <linearGradient key={i} id={`ray-grad-${i}`} gradientUnits="userSpaceOnUse" x1="450" y1="260" x2="700" y2="260">
                <stop offset="0%" stopColor="white" stopOpacity="0.6" />
                <stop offset="40%" stopColor="white" stopOpacity="0.7" />
                <stop offset="60%" stopColor={color} stopOpacity="0.7" />
                <stop offset="100%" stopColor={color} stopOpacity="0.9" />
              </linearGradient>
            ))}

            <radialGradient id="center-glow-grad">
              <stop offset="0%" stopColor="white" stopOpacity="0.5" />
              <stop offset="50%" stopColor="var(--cta)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="var(--cta)" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="prism-rainbow" gradientUnits="userSpaceOnUse" x1="450" y1="140" x2="450" y2="380">
              <stop offset="0%" stopColor="#FF4444" />
              <stop offset="8%" stopColor="#FF8800" />
              <stop offset="15%" stopColor="#FFCC44" />
              <stop offset="50%" stopColor="white" />
              <stop offset="80%" stopColor="#EEDDAA" />
              <stop offset="93%" stopColor="#44FFCC" />
              <stop offset="98%" stopColor="#FF66CC" />
              <stop offset="100%" stopColor="#FF4444" />
            </linearGradient>
          </defs>

          {/* Faint crosshair */}
          <line x1="350" y1="260" x2="550" y2="260" stroke="rgba(255,255,255,0.04)" strokeDasharray="2 4" />
          <line x1="450" y1="160" x2="450" y2="360" stroke="rgba(255,255,255,0.04)" strokeDasharray="2 4" />

          {/* Incoming white beam */}
          <line id="beam-in" stroke="white" strokeWidth="1.4" strokeOpacity="0.5" filter="url(#glow-beam)" />

          {/* Spectrum exit rays */}
          <g id="spectrum-rays" filter="url(#glow-soft)" />

          {/* Center refraction glow */}
          <circle id="center-glow" fill="url(#center-glow-grad)" />

          {/* Prism wireframe */}
          <g id="prism-edges" filter="url(#glow-soft)" />

          {/* Feature nodes — animated by useEffect */}
          <g id="feature-nodes" />

          {/* Spec label */}
          {/* <text x="450" y="500" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,0.2)" letterSpacing="1">
            MIDI · 16ch · 480 PPQN · iOS 16+ · AUv3
          </text> */}
        </svg>
      </div>

      {/* Copy block */}
      <div className="text-center max-w-3xl relative z-10">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-tertiary)] mb-3 md:mb-6">Alchemy Electronica</p>        <h1 className="font-bold tracking-tight leading-[1.1] mb-4 md:mb-5"><span className="text-[var(--cta)] block mb-1 md:mb-2 text-5xl md:text-7xl">Prism</span><span className="text-2xl md:text-4xl">MIDI Step Sequencer</span></h1>        
        <div className="flex gap-3 justify-center flex-wrap pt-4 pb-2 md:pt-6 md:pb-4">
          <a href="/prism/download" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[var(--cta)] text-[var(--bg-primary)] font-semibold text-base hover:bg-[var(--cta-hover)] transition-colors">Download on the App Store</a>
          {/* <a href="#" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[var(--border)] text-[var(--text-secondary)] text-base hover:border-[var(--border-hover)] hover:text-[var(--text-primary)] transition-colors">Watch 60-sec demo</a> */}
        </div>
              
        <p className="text-xs text-[var(--text-tertiary)] mt-2">iPhone & iPad · AUV3 · iOS 16+</p>

      </div>

      {/* HUD panel */}
      {activeModal !== null && <FeatureHUD activeModal={activeModal} setActiveModal={setActiveModal} />}

    </section>
  );
}