export function ChordBlocksDiagram() {
  return (
    <svg width="100%" viewBox="0 0 560 340" role="img">
      <title>Chord Blocks diagram</title>
      <desc>Four banks (A, B, C, D) of chord blocks, with reference arrows showing how multiple trigs across tracks point back to the same source block.</desc>

      {/* ── Bank label row ── */}
      {["A", "B", "C", "D"].map((bank, i) => (
        <g key={bank}>
          <rect
            x={40 + i * 126}
            y={20}
            width={108}
            height={28}
            rx={6}
            fill="var(--bg-secondary)"
            stroke="var(--border)"
            strokeWidth={0.5}
          />
          <text
            x={94 + i * 126}
            y={34}
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="monospace"
            fontSize={11}
            fontWeight={600}
            fill="var(--text-tertiary)"
            letterSpacing={2}
          >
            BANK {bank}
          </text>
        </g>
      ))}

      {/* ── Chord block grid — 2 blocks per bank ── */}
      {["A", "B", "C", "D"].map((bank, bi) => (
        <g key={`blocks-${bank}`}>
          {[0, 1].map((row) => {
            const x = 40 + bi * 126;
            const y = 64 + row * 52;
            const isActive = bi === 0 && row === 0;
            return (
              <g key={row}>
                <rect
                  x={x}
                  y={y}
                  width={108}
                  height={40}
                  rx={6}
                  fill={isActive ? "var(--cta)" : "var(--bg-secondary)"}
                  stroke={isActive ? "var(--cta)" : "var(--border)"}
                  strokeWidth={isActive ? 1 : 0.5}
                  opacity={bi === 0 ? 1 : 0.45}
                />
                <text
                  x={x + 54}
                  y={y + 13}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={10}
                  fontWeight={600}
                  fontFamily="monospace"
                  fill={isActive ? "var(--bg-primary)" : "var(--text-tertiary)"}
                >
                  {bank}{row + 1}
                </text>
                <text
                  x={x + 54}
                  y={y + 28}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={10}
                  fontFamily="monospace"
                  fill={isActive ? "var(--bg-primary)" : "var(--text-secondary)"}
                  opacity={0.8}
                >
                  {isActive ? "Cmaj7" : bi === 1 && row === 0 ? "Am7" : bi === 1 && row === 1 ? "Fmaj9" : bi === 2 && row === 0 ? "G7sus" : bi === 2 && row === 1 ? "Dm9" : bi === 3 && row === 0 ? "Eø7" : "Bb13"}
                </text>
              </g>
            );
          })}
        </g>
      ))}

      {/* ── Divider ── */}
      <line x1={40} y1={182} x2={520} y2={182} stroke="var(--border)" strokeWidth={0.5} strokeDasharray="3 4" />

      {/* ── "Active bank" label ── */}
      <text x={40} y={200} fontSize={10} fontFamily="monospace" fill="var(--text-tertiary)" letterSpacing={1}>
        TRIGS REFERENCING BLOCK A1 →
      </text>

      {/* ── Trig reference rows — three tracks ── */}
      {[
        { label: "Track 01", steps: [0, 2, 5, 8, 11], refSteps: [0, 5, 11] },
        { label: "Track 04", steps: [1, 3, 6, 9, 12], refSteps: [1, 9] },
        { label: "Track 07", steps: [0, 4, 7, 10, 13], refSteps: [4, 10] },
      ].map((track, ti) => {
        const y = 216 + ti * 36;
        return (
          <g key={track.label}>
            <text
              x={40}
              y={y + 10}
              fontSize={9}
              fontFamily="monospace"
              fill="var(--text-tertiary)"
              dominantBaseline="central"
            >
              {track.label}
            </text>
            {Array.from({ length: 16 }).map((_, si) => {
              const isActive = track.steps.includes(si);
              const isRef = track.refSteps.includes(si);
              const sx = 110 + si * 26;
              return (
                <rect
                  key={si}
                  x={sx}
                  y={y}
                  width={20}
                  height={20}
                  rx={3}
                  fill={isRef ? "var(--cta)" : isActive ? "var(--bg-secondary)" : "transparent"}
                  stroke={isActive || isRef ? "var(--border)" : "var(--border)"}
                  strokeWidth={0.5}
                  opacity={isActive || isRef ? 1 : 0.2}
                />
              );
            })}
          </g>
        );
      })}

      {/* ── Reference arrows from highlighted trigs up to block A1 ── */}
      {[
        { x: 120, trackY: 226 },
        { x: 250, trackY: 226 },
        { x: 406, trackY: 226 },
        { x: 146, trackY: 262 },
        { x: 354, trackY: 262 },
        { x: 120, trackY: 298 },
        { x: 354, trackY: 298 },
      ].map(({ x, trackY }, i) => (
        <line
          key={i}
          x1={x + 10}
          y1={trackY}
          x2={94}
          y2={104}
          stroke="var(--cta)"
          strokeWidth={0.5}
          strokeOpacity={0.25}
          strokeDasharray="2 3"
        />
      ))}

      {/* ── "Change once" callout ── */}
      <rect x={40} y={308} width={480} height={24} rx={5} fill="var(--bg-secondary)" stroke="var(--border)" strokeWidth={0.5} />
      <text x={280} y={320} textAnchor="middle" dominantBaseline="central" fontSize={10} fontFamily="monospace" fill="var(--text-secondary)">
        Edit block A1 → every highlighted trig updates instantly, across all tracks
      </text>
    </svg>
  );
}

export function FuseDiagram() {
  const TRACK_W = 140;
  const TRACK_H = 36;

  const tracks = [
    { label: "Track A", sub: "Bass pattern", x: 40, y: 80, color: "var(--cta)" },
    { label: "Track B", sub: "Melody", x: 380, y: 80, color: "#7C6FFF" },
    { label: "Track C", sub: "Fused output", x: 210, y: 230, color: "#4ECFB5" },
  ];

  return (
    <svg width="100%" viewBox="0 0 560 330" role="img">
      <title>Fuse Modes diagram</title>
      <desc>Three fuse mode relationships: Peek reads from another track, Echo mirrors rhythm with new notes, Melt combines two tracks into a third output neither could produce alone.</desc>

      <defs>
        <marker id="fuse-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      {/* ── Track boxes ── */}
      {tracks.map((t) => (
        <g key={t.label}>
          <rect
            x={t.x}
            y={t.y}
            width={TRACK_W}
            height={TRACK_H}
            rx={8}
            fill="var(--bg-secondary)"
            stroke={t.color}
            strokeWidth={1}
          />
          <text
            x={t.x + TRACK_W / 2}
            y={t.y + 13}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={11}
            fontWeight={600}
            fontFamily="monospace"
            fill={t.color}
          >
            {t.label}
          </text>
          <text
            x={t.x + TRACK_W / 2}
            y={t.y + 26}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={9}
            fontFamily="monospace"
            fill="var(--text-tertiary)"
          >
            {t.sub}
          </text>
        </g>
      ))}

      {/* ── Step grids inside each track box — hint of content ── */}
      {[
        { x: 40, y: 124, pattern: [1, 0, 1, 0, 1, 1, 0, 1], color: "var(--cta)" },
        { x: 380, y: 124, pattern: [0, 1, 0, 1, 0, 0, 1, 0], color: "#7C6FFF" },
        { x: 210, y: 274, pattern: [1, 1, 0, 1, 1, 0, 1, 1], color: "#4ECFB5" },
      ].map((row, ri) => (
        <g key={ri}>
          {row.pattern.map((on, si) => (
            <rect
              key={si}
              x={row.x + si * 17}
              y={row.y}
              width={13}
              height={10}
              rx={2}
              fill={on ? row.color : "transparent"}
              stroke={row.color}
              strokeWidth={0.5}
              opacity={on ? 0.85 : 0.2}
            />
          ))}
        </g>
      ))}

      {/* ── Peek arrow: B → A (dashed, reads without modifying) ── */}
      <path
        d="M380 98 Q300 60 182 98"
        fill="none"
        stroke="#7C6FFF"
        strokeWidth={1}
        strokeDasharray="3 3"
        strokeOpacity={0.6}
        markerEnd="url(#fuse-arrow)"
      />
      <rect x={248} y={46} width={64} height={18} rx={4} fill="var(--bg-secondary)" stroke="#7C6FFF" strokeWidth={0.5} strokeOpacity={0.4} />
      <text x={280} y={55} textAnchor="middle" dominantBaseline="central" fontSize={9} fontFamily="monospace" fill="#7C6FFF" opacity={0.8}>
        PEEK
      </text>

      {/* ── Echo arrow: A → B rhythm copy ── */}
      <path
        d="M182 88 Q300 40 378 88"
        fill="none"
        stroke="var(--cta)"
        strokeWidth={1}
        strokeDasharray="4 2"
        strokeOpacity={0.4}
        markerEnd="url(#fuse-arrow)"
      />

      {/* ── Melt arrows: A → C and B → C ── */}
      <path
        d="M110 116 L280 230"
        fill="none"
        stroke="var(--cta)"
        strokeWidth={1.5}
        strokeOpacity={0.5}
        markerEnd="url(#fuse-arrow)"
      />
      <path
        d="M450 116 L350 230"
        fill="none"
        stroke="#7C6FFF"
        strokeWidth={1.5}
        strokeOpacity={0.5}
        markerEnd="url(#fuse-arrow)"
      />

      {/* ── MELT label on Track C box ── */}
      <rect x={210} y={194} width={140} height={18} rx={4} fill="#4ECFB5" fillOpacity={0.15} stroke="#4ECFB5" strokeWidth={0.5} />
      <text x={280} y={203} textAnchor="middle" dominantBaseline="central" fontSize={9} fontFamily="monospace" fontWeight={600} fill="#4ECFB5">
        MELT output
      </text>

      {/* ── Mode legend ── */}
      {[
        { label: "Peek — reads another track's data", color: "#7C6FFF", dash: "3 3" },
        { label: "Echo — mirrors rhythm, own notes", color: "var(--cta)", dash: "4 2" },
        { label: "Melt — fused output neither track could make", color: "#4ECFB5", dash: "" },
      ].map((item, i) => (
        <g key={i}>
          <line
            x1={40}
            y1={298 + i * 12}
            x2={68}
            y2={298 + i * 12}
            stroke={item.color}
            strokeWidth={item.dash ? 1 : 1.5}
            strokeDasharray={item.dash}
            strokeOpacity={0.8}
          />
          <text
            x={76}
            y={298 + i * 12}
            dominantBaseline="central"
            fontSize={9}
            fontFamily="monospace"
            fill="var(--text-tertiary)"
          >
            {item.label}
          </text>
        </g>
      ))}
    </svg>
  );
}