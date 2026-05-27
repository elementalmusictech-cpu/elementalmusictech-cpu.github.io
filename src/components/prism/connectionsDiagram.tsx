"use client";

export default function ConnectionsDiagram() {
  return (
    <div
      style={{
        background: "#0a0a0a",
        borderRadius: 16,
        padding: "12px 8px 8px",
        fontFamily: "'Exo 2', sans-serif",
        color: "#e8e4dc",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes conn-flow { to { stroke-dashoffset: -20; } }
        @keyframes conn-flowRev { to { stroke-dashoffset: 20; } }
        @media (prefers-reduced-motion: reduce) {
          .conn-flow, .conn-flow-rev { animation: none !important; }
        }
        .conn-flow { stroke-dasharray: 6 4; animation: conn-flow 1.2s linear infinite; }
        .conn-flow-rev { stroke-dasharray: 6 4; animation: conn-flowRev 1.2s linear infinite; }
      `}</style>

      {/* Subtle radial glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(200,162,77,0.05) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      <svg
        width="100%"
        viewBox="60 16 570 448"
        style={{ display: "block", position: "relative" }}
      >
        <defs>
          <marker id="conn-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1.5L8 5L2 8.5" fill="none" stroke="#D4A03A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
          <marker id="conn-arr-teal" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1.5L8 5L2 8.5" fill="none" stroke="#5DCAA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
          <marker id="conn-arr-dim" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1.5L8 5L2 8.5" fill="none" stroke="#6b6560" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>

        {/* Header */}
        <text x="340" y="28" textAnchor="middle" fill="#D4A03A" fontFamily="'Exo 2', sans-serif" fontSize="11" fontWeight="600" letterSpacing="4" opacity="0.7">Hardware soul, software reach</text>
        <text x="340" y="56" textAnchor="middle" fill="#e8e4dc" fontFamily="'Exo 2', sans-serif" fontSize="26" fontWeight="700" letterSpacing="1">CONNECT EVERYTHING</text>

        {/* ===== SOUND DESTINATIONS (top row) ===== */}

        {/* Ableton (center top) */}
        <rect x="262" y="80" width="156" height="52" rx="6" fill="#161412" stroke="#D4A03A" strokeWidth="0.8" />
        <text x="340" y="103" textAnchor="middle" fill="#e8e4dc" fontFamily="'Exo 2', sans-serif" fontSize="12" fontWeight="600">ABLETON LIVE</text>
        <text x="340" y="119" textAnchor="middle" fill="#a09888" fontFamily="'Exo 2', sans-serif" fontSize="8">Names · Colors · Macros sync</text>

        {/* AUv3 (top left) */}
        <rect x="72" y="80" width="120" height="44" rx="6" fill="#161412" stroke="#5DCAA5" strokeWidth="0.5" />
        <text x="132" y="100" textAnchor="middle" fill="#5DCAA5" fontFamily="'Exo 2', sans-serif" fontSize="11" fontWeight="600">AUv3</text>
        <text x="132" y="114" textAnchor="middle" fill="#a09888" fontFamily="'Exo 2', sans-serif" fontSize="8">Synths · Samplers</text>

        {/* Hardware (top right) */}
        <rect x="488" y="80" width="120" height="44" rx="6" fill="#161412" stroke="#5DCAA5" strokeWidth="0.5" />
        <text x="548" y="100" textAnchor="middle" fill="#5DCAA5" fontFamily="'Exo 2', sans-serif" fontSize="11" fontWeight="600">HARDWARE</text>
        <text x="548" y="114" textAnchor="middle" fill="#a09888" fontFamily="'Exo 2', sans-serif" fontSize="8">Synths · Drum Machines</text>

        {/* Prism -> AUv3 (one-way) */}
        <path d="M290 240 L290 180 Q290 160 260 150 L155 128" fill="none" stroke="#5DCAA5" strokeWidth="0.8" className="conn-flow-rev" opacity="0.5" markerEnd="url(#conn-arr-teal)" />

        {/* Prism -> Hardware (one-way) */}
        <path d="M390 240 L390 180 Q390 160 420 150 L525 128" fill="none" stroke="#5DCAA5" strokeWidth="0.8" className="conn-flow-rev" opacity="0.5" markerEnd="url(#conn-arr-teal)" />

        {/* Prism <-> Ableton (bi-directional) */}
        <line x1="326" y1="240" x2="326" y2="136" stroke="#D4A03A" strokeWidth="1" className="conn-flow-rev" opacity="0.6" markerEnd="url(#conn-arr)" />
        <line x1="354" y1="136" x2="354" y2="240" stroke="#D4A03A" strokeWidth="1" className="conn-flow" opacity="0.6" markerEnd="url(#conn-arr)" />

        {/* ===== PRISM (center) ===== */}
        <rect x="278" y="240" width="124" height="64" rx="8" fill="#161412" stroke="#D4A03A" strokeWidth="1.5" />
        <text x="340" y="269" textAnchor="middle" fill="#D4A03A" fontFamily="'Exo 2', sans-serif" fontSize="18" fontWeight="700">PRISM</text>
        <text x="340" y="288" textAnchor="middle" fill="#a09888" fontFamily="'Exo 2', sans-serif" fontSize="9">iPad</text>

        {/* ===== LAUNCHPAD (left) ===== */}
        <rect x="80" y="250" width="120" height="52" rx="6" fill="#161412" stroke="#D4A03A" strokeWidth="0.8" />
        <text x="140" y="274" textAnchor="middle" fill="#e8e4dc" fontFamily="'Exo 2', sans-serif" fontSize="11" fontWeight="600">LAUNCHPAD</text>
        <text x="140" y="290" textAnchor="middle" fill="#a09888" fontFamily="'Exo 2', sans-serif" fontSize="8">Steps · Scenes · Mixer</text>

        {/* Launchpad <-> Prism */}
        <line x1="204" y1="268" x2="274" y2="268" stroke="#D4A03A" strokeWidth="1" className="conn-flow" opacity="0.6" markerEnd="url(#conn-arr)" />
        <line x1="274" y1="284" x2="204" y2="284" stroke="#D4A03A" strokeWidth="1" className="conn-flow-rev" opacity="0.6" markerEnd="url(#conn-arr)" />

        {/* ===== LAUNCHKEY (right) ===== */}
        <rect x="480" y="250" width="120" height="52" rx="6" fill="#161412" stroke="#D4A03A" strokeWidth="0.8" />
        <text x="540" y="274" textAnchor="middle" fill="#e8e4dc" fontFamily="'Exo 2', sans-serif" fontSize="11" fontWeight="600">LAUNCHKEY</text>
        <text x="540" y="290" textAnchor="middle" fill="#a09888" fontFamily="'Exo 2', sans-serif" fontSize="8">Keys · Encoders · Pads</text>

        {/* Launchkey <-> Prism */}
        <line x1="406" y1="268" x2="476" y2="268" stroke="#D4A03A" strokeWidth="1" className="conn-flow" opacity="0.6" markerEnd="url(#conn-arr)" />
        <line x1="476" y1="284" x2="406" y2="284" stroke="#D4A03A" strokeWidth="1" className="conn-flow-rev" opacity="0.6" markerEnd="url(#conn-arr)" />

        {/* ===== MIDI IN (bottom) ===== */}
        <rect x="278" y="420" width="124" height="36" rx="6" fill="#161412" stroke="#6b6560" strokeWidth="0.5" />
        <text x="340" y="443" textAnchor="middle" fill="#a09888" fontFamily="'Exo 2', sans-serif" fontSize="10" fontWeight="600">MIDI IN</text>

        {/* MIDI In -> Prism (one-way) */}
        <line x1="340" y1="416" x2="340" y2="308" stroke="#6b6560" strokeWidth="0.8" className="conn-flow-rev" opacity="0.5" markerEnd="url(#conn-arr-dim)" />
      </svg>
    </div>
  );
}