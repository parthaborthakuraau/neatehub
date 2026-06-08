"use client";

import { useEffect, useRef } from "react";

/**
 * Capital-ladder diagram — "Capital across RKVY sub-programs".
 * Ports the inline SVG + the IntersectionObserver-driven draw-in from
 * programs-rkvy.html. Each `.draw` line/path animates its stroke-dashoffset
 * to 0 on a per-element stagger (data-delay); each `.node` group fades in.
 * prefers-reduced-motion is respected via the CSS in rkvy.css.
 */
export default function CapitalLadder() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scope = canvasRef.current;
    if (!scope) return;

    // prepareLadder — measure real path lengths so the draw-in is exact.
    scope.querySelectorAll<SVGGeometryElement>(".draw").forEach((el) => {
      let len: number | undefined;
      if (typeof el.getTotalLength === "function") {
        try {
          len = el.getTotalLength();
        } catch {
          /* getTotalLength can throw on detached/zero-length elements */
        }
      }
      if (len && !isNaN(len)) {
        const v = String(Math.ceil(len));
        el.style.setProperty("--dl", v);
        el.style.strokeDasharray = v;
        el.style.strokeDashoffset = v;
      }
    });

    // runLadder — stagger the reveal using each element's data-delay.
    const run = (el: Element) => {
      el.querySelectorAll<HTMLElement | SVGElement>(".draw, .node").forEach(
        (node) => {
          node.classList.remove("is-in");
          const delay = parseInt(
            (node as HTMLElement).dataset.delay || "0",
            10,
          );
          window.setTimeout(() => node.classList.add("is-in"), delay + 50);
        },
      );
    };

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              run(e.target);
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.3 },
      );
      io.observe(scope);
      return () => io.disconnect();
    }

    run(scope);
  }, []);

  return (
    <div className="ladder-canvas" data-anim="ladder" ref={canvasRef}>
      <span className="corner-tag">Fig · Capital across RKVY sub-programs</span>
      <svg
        className="dgrm"
        viewBox="0 0 1100 360"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Capital across RKVY sub-programs"
      >
        <line className="axis" x1="80" y1="40" x2="80" y2="280" />
        <line className="axis" x1="80" y1="280" x2="1040" y2="280" />

        <text className="meta" x="68" y="284" textAnchor="end">
          ₹0
        </text>
        <line className="grid-line" x1="80" y1="232" x2="1040" y2="232" />
        <text className="meta" x="68" y="236" textAnchor="end">
          ₹5L
        </text>
        <line className="grid-line" x1="80" y1="184" x2="1040" y2="184" />
        <text className="meta" x="68" y="188" textAnchor="end">
          ₹10L
        </text>
        <line className="grid-line" x1="80" y1="136" x2="1040" y2="136" />
        <text className="meta" x="68" y="140" textAnchor="end">
          ₹15L
        </text>
        <line className="grid-line" x1="80" y1="88" x2="1040" y2="88" />
        <text className="meta" x="68" y="92" textAnchor="end">
          ₹20L
        </text>
        <line className="grid-line" x1="80" y1="40" x2="1040" y2="40" />
        <text className="meta" x="68" y="44" textAnchor="end">
          ₹25L
        </text>

        <text className="lbl" x="80" y="22">
          CAPITAL CEILING
        </text>
        <text className="lbl" x="1040" y="306" textAnchor="end">
          → VENTURE STAGE
        </text>

        {/* Navyam: 2L */}
        <g className="node" data-delay="100" transform="translate(200, 0)">
          <rect
            x="-70"
            y="262"
            width="140"
            height="18"
            fill="none"
            stroke="#c97849"
            strokeWidth="1.5"
          />
          <line
            className="draw"
            data-delay="100"
            x1="-70"
            y1="262"
            x2="70"
            y2="262"
            stroke="#c97849"
            strokeWidth="2.5"
            style={{ "--dl": 140 } as React.CSSProperties}
          />
          <text className="nm-sm" x="0" y="308" textAnchor="middle">
            Navyam
          </text>
          <text className="meta" x="0" y="324" textAnchor="middle">
            ₹2L · AAU Student First
          </text>
        </g>
        {/* Isanya: 5L */}
        <g className="node" data-delay="350" transform="translate(480, 0)">
          <rect
            x="-90"
            y="232"
            width="180"
            height="48"
            fill="none"
            stroke="#c97849"
            strokeWidth="1.5"
          />
          <line
            className="draw"
            data-delay="350"
            x1="-90"
            y1="232"
            x2="90"
            y2="232"
            stroke="#c97849"
            strokeWidth="2.5"
            style={{ "--dl": 180 } as React.CSSProperties}
          />
          <text className="nm-sm" x="0" y="308" textAnchor="middle">
            Isanya
          </text>
          <text className="meta" x="0" y="324" textAnchor="middle">
            ₹5L · 8 wk residential
          </text>
        </g>
        {/* Saranya: 25L */}
        <g className="node" data-delay="600" transform="translate(820, 0)">
          <rect
            x="-120"
            y="40"
            width="240"
            height="240"
            fill="rgba(201,120,73,0.07)"
            stroke="#c97849"
            strokeWidth="1.5"
          />
          <line
            className="draw"
            data-delay="600"
            x1="-120"
            y1="40"
            x2="120"
            y2="40"
            stroke="#c97849"
            strokeWidth="3"
            style={{ "--dl": 240 } as React.CSSProperties}
          />
          <text
            className="nm-sm"
            x="0"
            y="308"
            textAnchor="middle"
            style={{ fill: "#c97849" }}
          >
            Saranya
          </text>
          <text className="meta" x="0" y="324" textAnchor="middle">
            ₹25L · 12-18 mo growth
          </text>
        </g>

        {/* Connecting flow line between sub-programs */}
        <path
          className="draw"
          data-delay="1000"
          d="M 270 262 L 390 232 M 570 232 L 700 40"
          stroke="rgba(216,205,181,0.4)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3 4"
          style={{ "--dl": 360 } as React.CSSProperties}
        />
        <text className="meta" x="320" y="244">
          graduate
        </text>
        <text className="meta" x="610" y="130">
          graduate
        </text>
      </svg>
    </div>
  );
}
