/**
 * Ambient page backdrop, three layers deep:
 *   1. aurora  — slow-drifting light in the water
 *   2. mesh    — a faint node-and-link constellation (the subject's own vocabulary)
 *   3. grain   — breaks up gradient banding and keeps the blue from going flat
 * Purely decorative: fixed, non-interactive, hidden from assistive tech,
 * and fully still when prefers-reduced-motion is set.
 */

const NODES = [
  [8, 18], [22, 9], [37, 24], [15, 41], [31, 55], [6, 68],
  [48, 12], [58, 34], [44, 47], [66, 62], [52, 78], [38, 88],
  [78, 20], [92, 33], [72, 45], [88, 58], [95, 74], [74, 84],
  [24, 74], [60, 92], [12, 92], [86, 92],
] as const;

// links kept short so the mesh reads as a network, not a spider web
const LINKS: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [2, 6], [6, 7], [7, 8],
  [8, 4], [7, 9], [9, 10], [10, 11], [6, 12], [12, 13], [13, 14],
  [14, 15], [15, 16], [16, 17], [9, 14], [4, 18], [18, 20], [10, 19],
  [17, 21], [11, 19], [3, 18],
];

export default function Backdrop() {
  return (
    <div aria-hidden className="backdrop-root">
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
      <div className="aurora aurora-c" />

      <svg className="mesh" viewBox="0 0 100 100" preserveAspectRatio="none">
        <g className="mesh-drift">
          {LINKS.map(([a, b], i) => (
            <line
              key={i}
              x1={NODES[a][0]}
              y1={NODES[a][1]}
              x2={NODES[b][0]}
              y2={NODES[b][1]}
              stroke="#7dd3fc"
              strokeWidth="0.09"
              strokeOpacity="0.3"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          {NODES.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="0.32" fill="#a5f3fc" fillOpacity="0.5" />
          ))}
        </g>
      </svg>

      <div className="grain" />
    </div>
  );
}
