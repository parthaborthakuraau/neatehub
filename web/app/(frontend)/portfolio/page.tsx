import type { Metadata } from "next";
import "./portfolio.css";
import PortfolioDirectory from "./PortfolioDirectory";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A working directory of 250+ ventures across the Northeast — agri-input, post-harvest, livestock, aquaculture, processing, and rural fintech. Filter by program, sector, stage, year, or state.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* HERO */}
      <section className="pf-hero">
        <div className="container">
          <div className="eyebrow">Portfolio · FY18-FY26</div>
          <h1>Every venture we&apos;ve backed.</h1>
          <p className="lede mt-3">
            A working directory of 250+ ventures across the Northeast - agri-input,
            post-harvest, livestock, aquaculture, processing, and rural fintech.
            Filter by program, sector, stage, year, or state. Cards link to public
            profiles.
          </p>
          <div className="pf-hero__meta">
            <span>
              <strong>252</strong> startups
            </span>
            <span>·</span>
            <span>
              <strong>74</strong> funded
            </span>
            <span>·</span>
            <span>
              <strong>₹7.2 Cr</strong> deployed
            </span>
            <span>·</span>
            <span>
              <strong>8</strong> states
            </span>
          </div>
        </div>
      </section>

      {/* FEATURED STRIP */}
      <div className="pf-featured">
        <div className="card-tea">
          <span className="badge">Spotlight · This quarter</span>
          <div>
            <div className="num">
              3<span style={{ fontSize: "0.4em", color: "var(--cream-300)" }}>×</span>
            </div>
            <div className="lbl">Revenue growth in the FY26 Saranya cohort</div>
          </div>
        </div>
        <div className="card-tea">
          <span className="badge">Spotlight · This quarter</span>
          <div>
            <div className="num" style={{ fontSize: 32, color: "var(--cream-50)" }}>
              Kaziranga Bio
            </div>
            <div className="lbl">Closed pre-Series A · ₹3.2 Cr · April 2026</div>
          </div>
        </div>
        <div className="card-tea">
          <span className="badge">Filter idea</span>
          <div>
            <div className="num" style={{ fontSize: 32, color: "var(--cream-50)" }}>
              Women-led →
            </div>
            <div className="desc mt-2">
              42 ventures led by women founders, across 6 programs.{" "}
              <a href="#" style={{ color: "var(--copper-500)", borderBottom: "1px solid" }}>
                See filter →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FILTERS + GRID + PAGINATION (client) */}
      <PortfolioDirectory />
    </>
  );
}
