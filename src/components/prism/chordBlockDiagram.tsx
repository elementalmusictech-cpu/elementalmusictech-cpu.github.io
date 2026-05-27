"use client";

export default function BlockDiagram() {

  const base = 30;

  return (
    <div
      style={{
        background: "#0a0a0a",
        borderRadius: 16,
        padding: "40px 32px 36px",
        fontFamily: "'Exo 2', sans-serif",
        color: "#e8e4dc",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes cb-pulse { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }
        @keyframes cb-ripple { 0% { r: 4; opacity: 0.8; } 100% { r: 14; opacity: 0; } }
        @keyframes cb-flowDown { to { stroke-dashoffset: -16; } }

        @media (prefers-reduced-motion: reduce) {
          .cb-pulse, .cb-ripple, .cb-flow {
            animation: none !important;
          }
        }

        .cb-pulse { animation: cb-pulse 2.4s ease-in-out infinite; }
        .cb-ripple { animation: cb-ripple 2.4s ease-in-out infinite; }
        .cb-flow { stroke-dasharray: 4 4; animation: cb-flowDown 1s linear infinite; }

        .cb-d1 { animation-delay: 0.15s; }
        .cb-d2 { animation-delay: 0.3s; }
        .cb-d3 { animation-delay: 0.45s; }
        .cb-d4 { animation-delay: 0.6s; }
      `}</style>

      <svg
        width="100%"
        viewBox="30 10 540 460"
        style={{ display: "block", position: "relative" }}
      >

        {/* ===== THE BLOCK (source) ===== */}

        <text
          x="300"
          y={base + 0}
          textAnchor="middle"
          fill="#D4A03A"
          fontFamily="'Exo 2', sans-serif"
          fontSize="10"
          fontWeight="600"
          letterSpacing="2"
        >
          BLOCK 1
        </text>

        <rect
          x="244"
          y={base + 3}
          width="112"
          height="56"
          rx="6"
          fill="#161412"
          stroke="#D4A03A"
          strokeWidth="1"
        />

        {/* Chord dots */}

        <circle cx="270" cy={base + 23} r="4" fill="#D4A03A" opacity="0.85" />
        <circle cx="288" cy={base + 17} r="4" fill="#D4A03A" opacity="0.7" />
        <circle cx="306" cy={base + 27} r="4" fill="#D4A03A" opacity="0.85" />
        <circle cx="330" cy={base + 19} r="4" fill="#D4A03A" opacity="0.6" />

        {/* Note labels */}

        <text x="270" y={base + 45} textAnchor="middle" fill="#D4A03A" fontSize="8" fontWeight="600">C</text>
        <text x="288" y={base + 45} textAnchor="middle" fill="#D4A03A" fontSize="8" fontWeight="600">E</text>
        <text x="306" y={base + 45} textAnchor="middle" fill="#D4A03A" fontSize="8" fontWeight="600">G</text>
        <text x="330" y={base + 45} textAnchor="middle" fill="#D4A03A" fontSize="8" fontWeight="600">B</text>

        {/* Ripple pulse */}

        <circle
          cx="300"
          cy={base + 31}
          r="4"
          fill="none"
          stroke="#D4A03A"
          strokeWidth="0.5"
          className="cb-ripple"
        />

        {/* ===== REFERENCE LINES ===== */}

        <path className="cb-flow" d={`M260 ${base + 59} L130 ${base + 111}`} fill="none" stroke="#D4A03A" strokeWidth="0.8" opacity="0.5" />
        <path className="cb-flow cb-d1" d={`M280 ${base + 59} L230 ${base + 111}`} fill="none" stroke="#D4A03A" strokeWidth="0.8" opacity="0.5" />
        <path className="cb-flow cb-d2" d={`M320 ${base + 59} L370 ${base + 111}`} fill="none" stroke="#D4A03A" strokeWidth="0.8" opacity="0.5" />
        <path className="cb-flow cb-d3" d={`M340 ${base + 59} L470 ${base + 111}`} fill="none" stroke="#D4A03A" strokeWidth="0.8" opacity="0.5" />

        {/* ===== TRACK 1 ===== */}

        <text x="64" y={base + 125} textAnchor="start" fill="#a09888" fontSize="9" letterSpacing="2">
          TRACK 1
        </text>

        <rect x="64" y={base + 133} width="38" height="20" rx="3" fill="#1a1917" stroke="#3a3733" strokeWidth="0.5" />
        <rect x="108" y={base + 133} width="38" height="20" rx="3" fill="#D4A03A" opacity="0.85" />
        <rect x="152" y={base + 133} width="38" height="20" rx="3" fill="#1a1917" stroke="#3a3733" strokeWidth="0.5" />
        <rect x="196" y={base + 133} width="38" height="20" rx="3" fill="#D4A03A" opacity="0.85" />
        <rect x="240" y={base + 133} width="38" height="20" rx="3" fill="#1a1917" stroke="#3a3733" strokeWidth="0.5" />

        <text x="127" y={base + 143} textAnchor="middle" dominantBaseline="central" fill="#0a0a0a" fontSize="8" fontWeight="600">
          B1
        </text>

        <text x="215" y={base + 143} textAnchor="middle" dominantBaseline="central" fill="#0a0a0a" fontSize="8" fontWeight="600">
          B1
        </text>

        {/* ===== TRACK 3 ===== */}

        <text x="320" y={base + 125} textAnchor="start" fill="#a09888" fontSize="9" letterSpacing="2">
          TRACK 3
        </text>

        <rect x="320" y={base + 133} width="38" height="20" rx="3" fill="#D4A03A" opacity="0.85" />
        <rect x="364" y={base + 133} width="38" height="20" rx="3" fill="#1a1917" stroke="#3a3733" strokeWidth="0.5" />
        <rect x="408" y={base + 133} width="38" height="20" rx="3" fill="#1a1917" stroke="#3a3733" strokeWidth="0.5" />
        <rect x="452" y={base + 133} width="38" height="20" rx="3" fill="#D4A03A" opacity="0.85" />
        <rect x="496" y={base + 133} width="38" height="20" rx="3" fill="#1a1917" stroke="#3a3733" strokeWidth="0.5" />

        <text x="339" y={base + 143} textAnchor="middle" dominantBaseline="central" fill="#0a0a0a" fontSize="8" fontWeight="600">
          B1
        </text>

        <text x="471" y={base + 143} textAnchor="middle" dominantBaseline="central" fill="#0a0a0a" fontSize="8" fontWeight="600">
          B1
        </text>

        {/* ===== EDIT INDICATOR ===== */}

        <text
          x="300"
          y={base + 191}
          textAnchor="middle"
          fill="#e8e4dc"
          fontSize="11"
          fontWeight="600"
          letterSpacing="2"
        >
          EDIT THE BLOCK
        </text>

        {/* <line
          x1="300"
          y1={base + 199}
          x2="300"
          y2={base + 211}
          stroke="#e8e4dc"
          strokeWidth="1.5"
          opacity="0.3"
        /> */}

        {/* ===== CHANGED BLOCK ===== */}

        <text
          x="300"
          y={base + 228}
          textAnchor="middle"
          fill="#D85A30"
          fontSize="10"
          fontWeight="600"
          letterSpacing="2"
        >
          BLOCK 1: Updated
        </text>

        <rect
          x="244"
          y={base + 231}
          width="112"
          height="56"
          rx="6"
          fill="#161412"
          stroke="#D85A30"
          strokeWidth="1"
        />

        <circle cx="270" cy={base + 251} r="4" fill="#D85A30" opacity="0.85" />
        <circle cx="288" cy={base + 245} r="4" fill="#D85A30" opacity="0.7" />
        <circle cx="306" cy={base + 255} r="4" fill="#D85A30" opacity="0.85" />
        <circle cx="330" cy={base + 247} r="4" fill="#D85A30" opacity="0.6" />

        <text x="270" y={base + 273} textAnchor="middle" fill="#D85A30" fontSize="8" fontWeight="600">C</text>
        <text x="288" y={base + 273} textAnchor="middle" fill="#D85A30" fontSize="8" fontWeight="600">E♭</text>
        <text x="306" y={base + 273} textAnchor="middle" fill="#D85A30" fontSize="8" fontWeight="600">G</text>
        <text x="330" y={base + 273} textAnchor="middle" fill="#D85A30" fontSize="8" fontWeight="600">B♭</text>

        <circle
          cx="300"
          cy={base + 259}
          r="4"
          fill="none"
          stroke="#D85A30"
          strokeWidth="0.5"
          className="cb-ripple"
        />

        {/* ===== FAN OUT LINES ===== */}

        <path className="cb-flow" d={`M260 ${base + 287} L130 ${base + 331}`} fill="none" stroke="#D85A30" strokeWidth="0.8" opacity="0.5" />
        <path className="cb-flow cb-d1" d={`M280 ${base + 287} L230 ${base + 331}`} fill="none" stroke="#D85A30" strokeWidth="0.8" opacity="0.5" />
        <path className="cb-flow cb-d2" d={`M320 ${base + 287} L370 ${base + 331}`} fill="none" stroke="#D85A30" strokeWidth="0.8" opacity="0.5" />
        <path className="cb-flow cb-d3" d={`M340 ${base + 287} L470 ${base + 331}`} fill="none" stroke="#D85A30" strokeWidth="0.8" opacity="0.5" />

        {/* ===== UPDATED TRACK 1 ===== */}

        <text x="64" y={base + 345} textAnchor="start" fill="#a09888" fontSize="9" letterSpacing="2">
          TRACK 1
        </text>

        <rect x="64" y={base + 353} width="38" height="20" rx="3" fill="#1a1917" stroke="#3a3733" strokeWidth="0.5" />
        <rect x="108" y={base + 353} width="38" height="20" rx="3" fill="#D85A30" opacity="0.85" />
        <rect x="152" y={base + 353} width="38" height="20" rx="3" fill="#1a1917" stroke="#3a3733" strokeWidth="0.5" />
        <rect x="196" y={base + 353} width="38" height="20" rx="3" fill="#D85A30" opacity="0.85" />
        <rect x="240" y={base + 353} width="38" height="20" rx="3" fill="#1a1917" stroke="#3a3733" strokeWidth="0.5" />

        <text x="127" y={base + 363} textAnchor="middle" dominantBaseline="central" fill="#0a0a0a" fontSize="8" fontWeight="600">
          B1
        </text>

        <text x="215" y={base + 363} textAnchor="middle" dominantBaseline="central" fill="#0a0a0a" fontSize="8" fontWeight="600">
          B1
        </text>

        {/* ===== UPDATED TRACK 3 ===== */}

        <text x="320" y={base + 345} textAnchor="start" fill="#a09888" fontSize="9" letterSpacing="2">
          TRACK 3
        </text>

        <rect x="320" y={base + 353} width="38" height="20" rx="3" fill="#D85A30" opacity="0.85" />
        <rect x="364" y={base + 353} width="38" height="20" rx="3" fill="#1a1917" stroke="#3a3733" strokeWidth="0.5" />
        <rect x="408" y={base + 353} width="38" height="20" rx="3" fill="#1a1917" stroke="#3a3733" strokeWidth="0.5" />
        <rect x="452" y={base + 353} width="38" height="20" rx="3" fill="#D85A30" opacity="0.85" />
        <rect x="496" y={base + 353} width="38" height="20" rx="3" fill="#1a1917" stroke="#3a3733" strokeWidth="0.5" />

        <text x="339" y={base + 363} textAnchor="middle" dominantBaseline="central" fill="#0a0a0a" fontSize="8" fontWeight="600">
          B1
        </text>

        <text x="471" y={base + 363} textAnchor="middle" dominantBaseline="central" fill="#0a0a0a" fontSize="8" fontWeight="600">
          B1
        </text>

      </svg>
    </div>
  );
}