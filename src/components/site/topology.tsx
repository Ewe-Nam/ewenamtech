/**
 * Star topology — the shape a switched network actually takes.
 * Nodes are the real services; the core is the practice itself.
 * Cables are drawn orthogonally the way network diagrams are drawn,
 * with a dashed overlay animating to show link traffic.
 */

const NODES = [
  { id: "net", label: "Networking", x: 92, y: 52, tone: "core" },
  { id: "sup", label: "IT Support", x: 348, y: 52, tone: "up" },
  { id: "hw", label: "Hardware", x: 92, y: 252, tone: "activity" },
  { id: "web", label: "Software", x: 348, y: 252, tone: "up" },
] as const;

const CABLES = [
  "M168,140 H92 V74",
  "M272,140 H348 V74",
  "M168,164 H92 V230",
  "M272,164 H348 V230",
];

const LED: Record<string, string> = {
  core: "var(--cyan)",
  up: "var(--link-up)",
  activity: "var(--activity)",
};

export default function Topology() {
  return (
    <figure className="m-0">
      <div className="rounded-[18px] border border-cyan-300/20 bg-[#02202f] p-4 shadow-[0_24px_60px_-24px_rgba(2,20,32,.9)] sm:p-6">
        <figcaption className="eyebrow mb-4 flex items-center justify-between text-cyan-300/70">
          <span>Service topology</span>
          <span className="flex items-center gap-1.5 text-[color:var(--link-up)]">
            <span className="led inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--link-up)]" />
            all links up
          </span>
        </figcaption>

        <svg
          viewBox="0 0 440 304"
          className="w-full"
          role="img"
          aria-label="Star topology diagram: a central node, EwenamTech Services, linked to four service nodes — Networking, IT Support, Hardware and Software."
        >
          {/* cables */}
          {CABLES.map((d) => (
            <g key={d}>
              <path d={d} fill="none" stroke="#0b4d6b" strokeWidth="2.5" />
              <path
                d={d}
                fill="none"
                stroke="var(--cyan)"
                strokeWidth="2.5"
                strokeOpacity="0.9"
                className="link-flow"
              />
            </g>
          ))}

          {/* core */}
          <rect
            x="168"
            y="128"
            width="104"
            height="48"
            rx="10"
            fill="#06344a"
            stroke="var(--cyan)"
            strokeOpacity="0.55"
          />
          <text
            x="220"
            y="147"
            textAnchor="middle"
            fill="#7dd3fc"
            style={{ font: "500 9px var(--font-mono), monospace", letterSpacing: "0.16em" }}
          >
            EWENAMTECH
          </text>
          <text
            x="220"
            y="163"
            textAnchor="middle"
            fill="#e0f7ff"
            style={{ font: "600 12px var(--font-display), sans-serif" }}
          >
            Services
          </text>

          {/* leaf nodes */}
          {NODES.map((n) => (
            <g key={n.id}>
              <circle
                cx={n.x}
                cy={n.y}
                r="22"
                fill="#06344a"
                stroke={LED[n.tone]}
                strokeOpacity="0.6"
                strokeWidth="1.5"
              />
              <circle cx={n.x} cy={n.y - 7} r="3" fill={LED[n.tone]} className="led" />
              <text
                x={n.x}
                y={n.y + 8}
                textAnchor="middle"
                fill="#9fdcf5"
                style={{ font: "500 8px var(--font-mono), monospace" }}
              >
                {n.tone === "core" ? "CORE" : n.tone === "activity" ? "ACT" : "UP"}
              </text>
              <text
                x={n.x}
                y={n.y + 40}
                textAnchor="middle"
                fill="#e0f7ff"
                style={{ font: "500 13px var(--font-body), sans-serif" }}
              >
                {n.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </figure>
  );
}
