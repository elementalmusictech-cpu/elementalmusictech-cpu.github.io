"use client";

export default function MeltDiagram() {
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
        @keyframes melt-flowDown { to { stroke-dashoffset: -24; } }
        @keyframes melt-pulse { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .melt-flow-line, .melt-pulse-dot { animation: none !important; }
        }
        .melt-flow-line { stroke-dasharray: 6 6; animation: melt-flowDown 1.2s linear infinite; }
        .melt-flow-r { animation-duration: 1.4s; }
        .melt-pulse-dot { animation: melt-pulse 2s ease-in-out infinite; }
        .melt-pd2 { animation-delay: 0.3s; }
        .melt-pd3 { animation-delay: 0.6s; }
      `}</style>

      {/* Subtle radial glow */}
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(200,162,77,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      /> */}

      <svg
        width="100%"
        viewBox="35 30 545 460"
        style={{ display: "block", position: "relative" }}
      >
        <defs>
          <marker
            id="melt-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path
              d="M2 1.5L8 5L2 8.5"
              fill="none"
              stroke="#C8A24D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
        </defs>

        {/* Header */}
        {/* <text
          x="300"
          y="28"
          textAnchor="middle"
          fill="#D4A03A"
          fontFamily="'Exo 2', sans-serif"
          fontSize="11"
          fontWeight="600"
          letterSpacing="4"
          opacity="0.7"
        >
          FUSE MODE
        </text> */}
        <text
          x="300"
          y="58"
          textAnchor="middle"
          fill="#D4A03A"
          fontFamily="'Exo 2', sans-serif"
          fontSize="28"
          fontWeight="700"
          letterSpacing="1"
        >
          MELT
        </text>

        {/* Melt track label */}
        <text x="150" y="100" textAnchor="middle" fill="#D85A30" fontFamily="'Exo 2', sans-serif" fontSize="11" fontWeight="600" letterSpacing="3">MELT TRACK</text>
        <text x="150" y="117" textAnchor="middle" fill="#a09888" fontFamily="'Exo 2', sans-serif" fontSize="11">Your rhythm</text>

        {/* Source track label */}
        <text x="450" y="100" textAnchor="middle" fill="#5DCAA5" fontFamily="'Exo 2', sans-serif" fontSize="11" fontWeight="600" letterSpacing="3">SOURCE TRACK</text>
        <text x="450" y="117" textAnchor="middle" fill="#a09888" fontFamily="'Exo 2', sans-serif" fontSize="11">The notes</text>

        {/* Melt track steps */}
        <rect x="42" y="135" width="38" height="22" rx="3" fill="#D85A30" opacity="0.9" />
        <rect x="86" y="135" width="38" height="22" rx="3" fill="#1a1917" stroke="#3a3733" strokeWidth="0.5" />
        <rect x="130" y="135" width="38" height="22" rx="3" fill="#D85A30" opacity="0.9" />
        <rect x="174" y="135" width="38" height="22" rx="3" fill="#D85A30" opacity="0.9" />
        <rect x="218" y="135" width="38" height="22" rx="3" fill="#1a1917" stroke="#3a3733" strokeWidth="0.5" />

        {/* Trig dots */}
        <circle cx="61" cy="146" r="2" fill="#0a0a0a" />
        <circle cx="149" cy="146" r="2" fill="#0a0a0a" />
        <circle cx="193" cy="146" r="2" fill="#0a0a0a" />

        <text x="150" y="176" textAnchor="middle" fill="#6b6560" fontFamily="'Exo 2', sans-serif" fontSize="10">velocity · length · FX</text>

        {/* Source track note bars */}
        <rect x="342" y="138" width="44" height="7" rx="3" fill="#1D9E75" />
        <rect x="394" y="143" width="32" height="7" rx="3" fill="#1D9E75" opacity="0.7" />
        <rect x="434" y="135" width="52" height="7" rx="3" fill="#1D9E75" />
        <rect x="494" y="140" width="38" height="7" rx="3" fill="#1D9E75" opacity="0.75" />
        <rect x="540" y="133" width="28" height="7" rx="3" fill="#1D9E75" opacity="0.6" />

        {/* Note labels aligned to bars */}
        <text x="364" y="158" textAnchor="middle" fill="#5DCAA5" fontFamily="'Exo 2', sans-serif" fontSize="9" opacity="0.7">C</text>
        <text x="410" y="163" textAnchor="middle" fill="#5DCAA5" fontFamily="'Exo 2', sans-serif" fontSize="9" opacity="0.7">E</text>
        <text x="460" y="155" textAnchor="middle" fill="#5DCAA5" fontFamily="'Exo 2', sans-serif" fontSize="9" opacity="0.7">G</text>
        <text x="513" y="160" textAnchor="middle" fill="#5DCAA5" fontFamily="'Exo 2', sans-serif" fontSize="9" opacity="0.7">A</text>
        <text x="554" y="153" textAnchor="middle" fill="#5DCAA5" fontFamily="'Exo 2', sans-serif" fontSize="9" opacity="0.7">C</text>

        <text x="450" y="182" textAnchor="middle" fill="#6b6560" fontFamily="'Exo 2', sans-serif" fontSize="10">last played note at each fire</text>

        {/* Flow lines */}
        <path className="melt-flow-line" d="M150 192 L150 240 Q150 260 170 270 L270 310" fill="none" stroke="#D85A30" strokeWidth="1" opacity="0.6" />
        <path className="melt-flow-line melt-flow-r" d="M450 198 L450 240 Q450 260 430 270 L330 310" fill="none" stroke="#1D9E75" strokeWidth="1" opacity="0.6" />

        {/* Pulse dots at flow origins */}
        <circle cx="150" cy="192" r="3" fill="#D85A30" className="melt-pulse-dot" />
        <circle cx="450" cy="198" r="3" fill="#1D9E75" className="melt-pulse-dot melt-pd2" />

        {/* Merge point */}
        <circle cx="300" cy="320" r="22" fill="none" stroke="#D4A03A" strokeWidth="1" opacity="0.8" />
        <circle cx="300" cy="320" r="14" fill="#D4A03A" opacity="0.15" />
        <circle cx="300" cy="320" r="4" fill="#D4A03A" className="melt-pulse-dot melt-pd3" />

        {/* Arrow to output */}
        <line x1="300" y1="342" x2="300" y2="370" stroke="#D4A03A" strokeWidth="1.5" opacity="0.7" markerEnd="url(#melt-arrow)" />

        {/* Output container */}
        <rect x="171" y="378" width="272" height="36" rx="6" fill="#161412" stroke="#D4A03A" strokeWidth="0.5" opacity="0.9" />

        {/* Output steps */}
        <rect x="182" y="386" width="44" height="20" rx="3" fill="#D4A03A" opacity="0.85" />
        <rect x="234" y="386" width="44" height="20" rx="3" fill="#161412" stroke="#3a3733" strokeWidth="0.5" />
        <rect x="286" y="386" width="44" height="20" rx="3" fill="#D4A03A" opacity="0.85" />
        <rect x="338" y="386" width="44" height="20" rx="3" fill="#D4A03A" opacity="0.85" />
        <rect x="390" y="386" width="44" height="20" rx="3" fill="#161412" stroke="#3a3733" strokeWidth="0.5" />

        {/* Output note labels */}
        <text x="204" y="396" textAnchor="middle" dominantBaseline="central" fill="#0a0a0a" fontFamily="'Exo 2', sans-serif" fontSize="10" fontWeight="600">C</text>
        <text x="308" y="396" textAnchor="middle" dominantBaseline="central" fill="#0a0a0a" fontFamily="'Exo 2', sans-serif" fontSize="10" fontWeight="600">E</text>
        <text x="360" y="396" textAnchor="middle" dominantBaseline="central" fill="#0a0a0a" fontFamily="'Exo 2', sans-serif" fontSize="10" fontWeight="600">G</text>
      </svg>
    </div>
  );
}


