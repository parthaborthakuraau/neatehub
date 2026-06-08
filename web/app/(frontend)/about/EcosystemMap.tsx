"use client";

import { useEffect, useRef } from "react";

/**
 * Ecosystem map — signature draw-in line diagram.
 * Ported from about.html: measures each .draw path length via getTotalLength,
 * then on scroll-into-view triggers staggered is-in classes by data-delay.
 * prefers-reduced-motion is respected via about.css.
 */
export default function EcosystemMap() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    scope.querySelectorAll<SVGPathElement>(".draw").forEach((el) => {
      let len: number | undefined;
      if (typeof el.getTotalLength === "function") {
        try {
          len = el.getTotalLength();
        } catch {
          /* getTotalLength can throw before layout — ignore and keep --dl fallback */
        }
      }
      if (len && !isNaN(len)) {
        const n = String(Math.ceil(len));
        el.style.setProperty("--dl", n);
        el.style.strokeDasharray = n;
        el.style.strokeDashoffset = n;
      }
    });

    const runEco = () => {
      scope
        .querySelectorAll<SVGElement>(".draw, .node")
        .forEach((el) => {
          const delay = parseInt(el.dataset.delay || "0", 10);
          window.setTimeout(() => el.classList.add("is-in"), delay + 50);
        });
    };

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              runEco();
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      io.observe(scope);
      return () => io.disconnect();
    }
    runEco();
  }, []);

  return (
    <div className="ab-eco" data-anim="eco" ref={scopeRef}>
      <svg
        className="dgrm"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid meet"
        aria-label="NEATeHUB ecosystem map"
      >
        <circle cx="600" cy="350" r="100" fill="none" stroke="rgba(216,205,181,0.18)" strokeWidth="0.75" strokeDasharray="2 4" />
        <circle cx="600" cy="350" r="200" fill="none" stroke="rgba(216,205,181,0.15)" strokeWidth="0.75" strokeDasharray="2 4" />
        <circle cx="600" cy="350" r="300" fill="none" stroke="rgba(216,205,181,0.12)" strokeWidth="0.75" strokeDasharray="2 4" />

        <g stroke="rgba(216,205,181,0.35)" strokeWidth="1" fill="none">
          <path className="draw" data-delay="800" d="M 600 350 L 470 230" style={{ "--dl": 180 } as React.CSSProperties} />
          <path className="draw" data-delay="800" d="M 600 350 L 600 150" style={{ "--dl": 200 } as React.CSSProperties} />
          <path className="draw" data-delay="850" d="M 600 350 L 730 230" style={{ "--dl": 180 } as React.CSSProperties} />
          <path className="draw" data-delay="850" d="M 600 350 L 800 350" style={{ "--dl": 200 } as React.CSSProperties} />
          <path className="draw" data-delay="900" d="M 600 350 L 730 470" style={{ "--dl": 180 } as React.CSSProperties} />
          <path className="draw" data-delay="900" d="M 600 350 L 600 550" style={{ "--dl": 200 } as React.CSSProperties} />
          <path className="draw" data-delay="950" d="M 600 350 L 470 470" style={{ "--dl": 180 } as React.CSSProperties} />
          <path className="draw" data-delay="950" d="M 600 350 L 400 350" style={{ "--dl": 200 } as React.CSSProperties} />
        </g>
        <g stroke="rgba(216,205,181,0.18)" strokeWidth="0.75" fill="none">
          <path className="draw" data-delay="1100" d="M 470 230 L 320 130" style={{ "--dl": 180 } as React.CSSProperties} />
          <path className="draw" data-delay="1100" d="M 730 230 L 880 130" style={{ "--dl": 180 } as React.CSSProperties} />
          <path className="draw" data-delay="1100" d="M 800 350 L 950 350" style={{ "--dl": 150 } as React.CSSProperties} />
          <path className="draw" data-delay="1100" d="M 730 470 L 880 570" style={{ "--dl": 180 } as React.CSSProperties} />
          <path className="draw" data-delay="1100" d="M 470 470 L 320 570" style={{ "--dl": 180 } as React.CSSProperties} />
          <path className="draw" data-delay="1100" d="M 400 350 L 250 350" style={{ "--dl": 150 } as React.CSSProperties} />
        </g>

        <g className="node" data-delay="100" transform="translate(600, 350)">
          <circle r="48" fill="#1a2e1f" stroke="#c97849" strokeWidth="1.5" />
          <circle r="36" fill="none" stroke="rgba(201,120,73,0.35)" strokeWidth="0.75" />
          <text className="nm-sm" x="0" y="-2" textAnchor="middle" style={{ fill: "#faf6ee", fontSize: "16px" }}>NEATeHUB</text>
          <text className="meta" x="0" y="14" textAnchor="middle">Jorhat · 2018</text>
        </g>

        <g className="node" data-delay="400" transform="translate(470, 230)">
          <circle r="22" fill="#243d2c" stroke="rgba(216,205,181,0.5)" strokeWidth="1" />
          <text className="lbl-strong lbl" x="0" y="3" textAnchor="middle">RKVY</text>
          <text className="meta" x="0" y="-36" textAnchor="middle">CENTRAL FUNDER</text>
        </g>
        <g className="node" data-delay="450" transform="translate(600, 150)">
          <circle r="22" fill="#243d2c" stroke="rgba(216,205,181,0.5)" strokeWidth="1" />
          <text className="lbl-strong lbl" x="0" y="3" textAnchor="middle">AIM</text>
          <text className="meta" x="0" y="-36" textAnchor="middle">NITI AAYOG</text>
        </g>
        <g className="node" data-delay="500" transform="translate(730, 230)">
          <circle r="22" fill="#243d2c" stroke="rgba(216,205,181,0.5)" strokeWidth="1" />
          <text className="lbl-strong lbl" x="0" y="3" textAnchor="middle">ASRLM</text>
          <text className="meta" x="0" y="-36" textAnchor="middle">STATE</text>
        </g>
        <g className="node" data-delay="550" transform="translate(800, 350)">
          <circle r="22" fill="#243d2c" stroke="rgba(216,205,181,0.5)" strokeWidth="1" />
          <text className="lbl-strong lbl" x="0" y="3" textAnchor="middle">AAU</text>
          <text className="meta" x="40" y="3" textAnchor="start">HOST</text>
        </g>

        <g className="node" data-delay="600" transform="translate(730, 470)">
          <circle r="22" fill="#243d2c" stroke="rgba(216,205,181,0.5)" strokeWidth="1" />
          <text className="lbl-strong lbl" x="0" y="3" textAnchor="middle">200+</text>
          <text className="meta" x="0" y="40" textAnchor="middle">MENTORS</text>
        </g>
        <g className="node" data-delay="650" transform="translate(600, 550)">
          <circle r="22" fill="#243d2c" stroke="rgba(216,205,181,0.5)" strokeWidth="1" />
          <text className="lbl-strong lbl" x="0" y="3" textAnchor="middle">KVKs</text>
          <text className="meta" x="0" y="40" textAnchor="middle">FIELD STATIONS</text>
        </g>
        <g className="node" data-delay="700" transform="translate(470, 470)">
          <circle r="22" fill="#243d2c" stroke="rgba(216,205,181,0.5)" strokeWidth="1" />
          <text className="lbl-strong lbl" x="0" y="3" textAnchor="middle">250+</text>
          <text className="meta" x="0" y="40" textAnchor="middle">PORTFOLIO</text>
        </g>
        <g className="node" data-delay="750" transform="translate(400, 350)">
          <circle r="22" fill="#243d2c" stroke="rgba(216,205,181,0.5)" strokeWidth="1" />
          <text className="lbl-strong lbl" x="0" y="3" textAnchor="middle">LABS</text>
          <text className="meta" x="-40" y="3" textAnchor="end">INFRA</text>
        </g>

        <g className="node" data-delay="1200" transform="translate(320, 130)"><circle r="14" fill="none" stroke="rgba(216,205,181,0.4)" strokeWidth="1" /><text className="meta" x="0" y="-22" textAnchor="middle">FPOs · 80+</text></g>
        <g className="node" data-delay="1250" transform="translate(880, 130)"><circle r="14" fill="none" stroke="rgba(216,205,181,0.4)" strokeWidth="1" /><text className="meta" x="0" y="-22" textAnchor="middle">DA&amp;FW</text></g>
        <g className="node" data-delay="1300" transform="translate(950, 350)"><circle r="14" fill="none" stroke="rgba(216,205,181,0.4)" strokeWidth="1" /><text className="meta" x="0" y="-22" textAnchor="middle">IIT-G</text></g>
        <g className="node" data-delay="1350" transform="translate(880, 570)"><circle r="14" fill="none" stroke="rgba(216,205,181,0.4)" strokeWidth="1" /><text className="meta" x="0" y="34" textAnchor="middle">INVESTORS</text></g>
        <g className="node" data-delay="1400" transform="translate(320, 570)"><circle r="14" fill="none" stroke="rgba(216,205,181,0.4)" strokeWidth="1" /><text className="meta" x="0" y="34" textAnchor="middle">SHGs · 200+</text></g>
        <g className="node" data-delay="1450" transform="translate(250, 350)"><circle r="14" fill="none" stroke="rgba(216,205,181,0.4)" strokeWidth="1" /><text className="meta" x="0" y="-22" textAnchor="middle">PRODUCERS</text></g>
      </svg>
    </div>
  );
}
