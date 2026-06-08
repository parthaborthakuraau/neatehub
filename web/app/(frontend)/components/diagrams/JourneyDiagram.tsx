/**
 * Incubation Journey — the signature draw-in line diagram (token: process-path-1).
 * Animation is CSS-driven (.journey-svg .path in home.css); respects reduced-motion.
 */
export default function JourneyDiagram() {
  return (
    <svg
      className="journey-svg reveal"
      viewBox="0 0 700 340"
      role="img"
      aria-label="Incubation journey diagram: Idea, Validate, Build, Scale, Exit"
    >
      <defs>
        <pattern id="weave" width="22" height="22" patternUnits="userSpaceOnUse">
          <path d="M0 11h22M11 0v22" stroke="rgba(216,205,181,0.08)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="700" height="340" fill="url(#weave)" />

      {/* Main path */}
      <path
        className="path"
        d="M60 240 Q 180 240, 220 170 T 380 100 T 540 70 L 640 60"
        stroke="rgba(216,205,181,0.5)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        className="path p2"
        d="M60 240 L 220 170 L 380 100 L 540 70 L 640 60"
        stroke="rgba(201,120,73,0.9)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4 4"
      />

      {/* Stage nodes */}
      <g className="node">
        <circle cx="60" cy="240" r="8" fill="#c97849" stroke="#faf6ee" strokeWidth="2" />
        <text className="lbl" x="60" y="270" textAnchor="middle">STAGE 01</text>
        <text className="nm" x="60" y="294" textAnchor="middle">Idea</text>
        <text className="lbl-sub" x="60" y="312" textAnchor="middle">Isanya · ₹5L</text>
      </g>
      <g className="node">
        <circle cx="220" cy="170" r="8" fill="#c97849" stroke="#faf6ee" strokeWidth="2" />
        <text className="lbl" x="220" y="200" textAnchor="middle">STAGE 02</text>
        <text className="nm" x="220" y="224" textAnchor="middle">Validate</text>
        <text className="lbl-sub" x="220" y="242" textAnchor="middle">Pilot · Lab access</text>
      </g>
      <g className="node">
        <circle cx="380" cy="100" r="8" fill="#c97849" stroke="#faf6ee" strokeWidth="2" />
        <text className="lbl" x="380" y="130" textAnchor="middle">STAGE 03</text>
        <text className="nm" x="380" y="154" textAnchor="middle">Build</text>
        <text className="lbl-sub" x="380" y="172" textAnchor="middle">RKVY · ₹25L</text>
      </g>
      <g className="node">
        <circle cx="540" cy="70" r="8" fill="#c97849" stroke="#faf6ee" strokeWidth="2" />
        <text className="lbl" x="540" y="38" textAnchor="middle">STAGE 04</text>
        <text className="nm" x="540" y="22" textAnchor="middle">Scale</text>
      </g>
      <g className="node">
        <circle cx="640" cy="60" r="12" fill="none" stroke="#c97849" strokeWidth="1.5" />
        <circle cx="640" cy="60" r="6" fill="#c97849" />
        <text className="lbl" x="640" y="32" textAnchor="middle">EXIT</text>
      </g>

      {/* Off-ramp */}
      <path
        className="path p3"
        d="M380 100 L 420 200"
        stroke="rgba(216,205,181,0.4)"
        strokeWidth="1"
        fill="none"
        strokeDasharray="2 3"
      />
      <text className="lbl-sub" x="430" y="208" fill="rgba(216,205,181,0.6)">
        off-ramp · referral
      </text>
    </svg>
  );
}
