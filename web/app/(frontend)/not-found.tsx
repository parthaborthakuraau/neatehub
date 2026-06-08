import Link from "next/link";
import "./not-found.css";
import NotFoundSearch from "./NotFoundSearch";

export default function NotFound() {
  return (
    <div className="four-wrap">
      <div className="four-bg">
        <svg
          viewBox="0 0 600 600"
          fill="none"
          stroke="rgba(168,93,46,0.18)"
          strokeWidth="1"
          aria-hidden="true"
        >
          {/* A drifting path - the lost trail metaphor */}
          <path
            className="stroke-anim"
            d="M 30 460 Q 120 380, 180 410 T 320 360 Q 380 320, 450 340 T 570 270"
            strokeDasharray="6 8"
          />
          <path
            className="stroke-anim"
            d="M 30 480 Q 130 420, 200 440 T 340 400 T 480 380"
            stroke="rgba(36,61,44,0.18)"
            style={{ animationDelay: ".3s" }}
          />
          {/* soft scattered nodes */}
          <circle cx="180" cy="410" r="4" fill="rgba(168,93,46,0.3)" />
          <circle cx="320" cy="360" r="4" fill="rgba(168,93,46,0.3)" />
          <circle cx="450" cy="340" r="4" fill="rgba(168,93,46,0.3)" />
          <circle
            cx="570"
            cy="270"
            r="6"
            fill="none"
            stroke="rgba(168,93,46,0.5)"
            strokeWidth="1"
          />
          {/* compass / cross-mark at lost point */}
          <g
            transform="translate(420, 200)"
            stroke="rgba(168,93,46,0.6)"
            strokeWidth="1.5"
          >
            <path d="M -16 0 L 16 0 M 0 -16 L 0 16" />
            <circle r="22" fill="none" strokeDasharray="3 4" opacity=".5" />
          </g>
        </svg>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="four">
          <div>
            <h1 className="four__code">
              4<em>0</em>4<small>Page not found · Error code</small>
            </h1>
          </div>

          <div>
            <div className="eyebrow">You&apos;re off the trail</div>
            <h2 className="mt-2">
              The page you&apos;re looking for has moved, or never existed.
            </h2>
            <p>
              If you typed the URL, double-check the spelling. If you followed a
              link from elsewhere, it may be stale - our previous site lived at{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.92em" }}>
                neatehub.org
              </code>{" "}
              with a different page structure.
            </p>

            <NotFoundSearch />

            <div className="four__try">
              <div className="lbl">Or try one of these</div>
              <Link href="/programs">
                <span className="name">Programs</span>
                <span className="desc">
                  5 programs · AIC, RKVY, ASRLM →
                </span>
              </Link>
              <Link href="/portfolio">
                <span className="name">Portfolio directory</span>
                <span className="desc">250+ ventures · filterable →</span>
              </Link>
              <Link href="/for-founders#wizard">
                <span className="name">Eligibility wizard</span>
                <span className="desc">6 questions, 2 minutes →</span>
              </Link>
              <Link href="/ask">
                <span className="name">Ask NEATeHUB AI</span>
                <span className="desc">3 intents · no login →</span>
              </Link>
              <Link href="/">
                <span className="name">Back to homepage</span>
                <span className="desc">Start over →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
