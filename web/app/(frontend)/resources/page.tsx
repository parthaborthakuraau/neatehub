import type { Metadata } from "next";
import "./resources.css";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Downloads, newsletter archive, impact reports, and the public NEATeHUB mentor directory.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="rs-hero">
        <div className="container">
          <div className="eyebrow">Resources</div>
          <h1>Downloads, archives, and the mentor directory.</h1>
          <div className="rs-tiles">
            <a href="#downloads" className="rs-tile">
              <div className="num">01</div>
              <h3>Downloads</h3>
              <div className="count">28 documents</div>
            </a>
            <a href="#newsletters" className="rs-tile">
              <div className="num">02</div>
              <h3>Newsletter archive</h3>
              <div className="count">22 issues</div>
            </a>
            <a href="#impact" className="rs-tile">
              <div className="num">03</div>
              <h3>Impact Reports</h3>
              <div className="count">6 reports</div>
            </a>
            <a href="#mentors" className="rs-tile">
              <div className="num">04</div>
              <h3>Mentor directory</h3>
              <div className="count">200+ mentors</div>
            </a>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section style={{ paddingTop: 0 }} id="downloads">
        <div className="container">
          <h2 className="h-section">Downloads</h2>
          <div className="rs-list">
            <a className="rs-row" href="#">
              <div className="ext">PDF</div>
              <div className="name">RKVY RAFTAAR - Program Brief FY26</div>
              <div className="desc">
                Eligibility, evaluation criteria, milestones, capital tranching.
              </div>
              <div className="meta">1.2 MB · Updated Apr 2026</div>
              <span className="dl">
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <path
                    d="M7 1v10M3 7l4 4 4-4M1 13h12"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    fill="none"
                  />
                </svg>
              </span>
            </a>
            <a className="rs-row" href="#">
              <div className="ext">PDF</div>
              <div className="name">Saranya Cohort 4 - Application Pack</div>
              <div className="desc">
                Pitch template, FAQ, evaluation rubric, FY26 timeline.
              </div>
              <div className="meta">2.4 MB · Mar 2026</div>
              <span className="dl">
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <path
                    d="M7 1v10M3 7l4 4 4-4M1 13h12"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    fill="none"
                  />
                </svg>
              </span>
            </a>
            <a className="rs-row" href="#">
              <div className="ext">PDF</div>
              <div className="name">Isanya scorecard - Self-assessment</div>
              <div className="desc">
                The exact rubric we use to evaluate idea-stage applications.
              </div>
              <div className="meta">340 KB · Feb 2026</div>
              <span className="dl">
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <path
                    d="M7 1v10M3 7l4 4 4-4M1 13h12"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    fill="none"
                  />
                </svg>
              </span>
            </a>
            <a className="rs-row" href="#">
              <div className="ext">XLS</div>
              <div className="name">Capital tranching template</div>
              <div className="desc">
                Milestone-linked capital release sheet for Saranya / RKVY
                ventures.
              </div>
              <div className="meta">88 KB · 2025</div>
              <span className="dl">
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <path
                    d="M7 1v10M3 7l4 4 4-4M1 13h12"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    fill="none"
                  />
                </svg>
              </span>
            </a>
            <a className="rs-row" href="#">
              <div className="ext">PDF</div>
              <div className="name">Annual Report · FY25</div>
              <div className="desc">
                Full programmatic and financial accounting.
              </div>
              <div className="meta">8.2 MB · Sep 2025</div>
              <span className="dl">
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <path
                    d="M7 1v10M3 7l4 4 4-4M1 13h12"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    fill="none"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Impact reports */}
      <section className="bg-cream-100" id="impact">
        <div className="container">
          <div className="row-between">
            <div>
              <div className="eyebrow">Impact reports</div>
              <h2 className="display display-m mt-2">What the numbers bought.</h2>
            </div>
          </div>
          <div className="grid-3 mt-4">
            <a href="#" className="card" style={{ padding: 28 }}>
              <div className="kicker">FY25 · September 2025</div>
              <h3 className="display display-s mt-2" style={{ marginBottom: 8 }}>
                ₹7.2 Cr deployed
              </h3>
              <p style={{ color: "var(--ink-700)", margin: 0 }}>
                70 funded ventures, 9 sectors, 6 NE states. Full accounting and
                methodology.
              </p>
              <div className="kicker mt-3" style={{ color: "var(--copper-700)" }}>
                Read the report →
              </div>
            </a>
            <a href="#" className="card" style={{ padding: 28 }}>
              <div className="kicker">FY24 · September 2024</div>
              <h3 className="display display-s mt-2" style={{ marginBottom: 8 }}>
                52 funded
              </h3>
              <p style={{ color: "var(--ink-700)", margin: 0 }}>
                First post-CoE year. Saranya formalised, two cohorts of Isanya
                completed.
              </p>
              <div className="kicker mt-3" style={{ color: "var(--copper-700)" }}>
                Read the report →
              </div>
            </a>
            <a href="#" className="card" style={{ padding: 28 }}>
              <div className="kicker">FY23 · September 2023</div>
              <h3 className="display display-s mt-2" style={{ marginBottom: 8 }}>
                36 funded
              </h3>
              <p style={{ color: "var(--ink-700)", margin: 0 }}>
                RKVY scale-up year. First international portfolio exit.
              </p>
              <div className="kicker mt-3" style={{ color: "var(--copper-700)" }}>
                Read the report →
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Mentor directory */}
      <section id="mentors">
        <div className="container">
          <div className="row-between">
            <div>
              <div className="eyebrow">Mentor directory · Public view</div>
              <h2 className="display display-m mt-2">200+ domain mentors.</h2>
              <p className="lede mt-2">
                Names, expertise, one-line credentials. Full profiles and
                &quot;request connect&quot; are gated for active portfolio
                founders.
              </p>
            </div>
            <a href="#" className="btn btn-ghost">
              View all 200+ <span className="arrow">→</span>
            </a>
          </div>

          <div className="mentor-grid mt-5">
            <div className="mentor">
              <div className="av">DR</div>
              <div className="name">Dr. Rituparna Das</div>
              <div className="role">Agronomy · Soil Science</div>
              <p className="cred">
                Principal Scientist, ICAR-RC NEH. 25 years field experience
                across NE.
              </p>
            </div>
            <div className="mentor">
              <div className="av">KI</div>
              <div className="name">Dr. K. Iyer</div>
              <div className="role">Fisheries · Aqua-feed</div>
              <p className="cred">
                Former Head of Research, CIFA. Published on indigenous feed
                formulation.
              </p>
            </div>
            <div className="mentor">
              <div className="av">SM</div>
              <div className="name">Sandip Mukherjee</div>
              <div className="role">Post-harvest · Cold-chain</div>
              <p className="cred">
                Built India&apos;s first PPP cold-chain network. Operator, not
                consultant.
              </p>
            </div>
            <div className="mentor">
              <div className="av">PB</div>
              <div className="name">Priyanka Bordoloi</div>
              <div className="role">Brand · Food</div>
              <p className="cred">
                Founder, Naga-origin specialty foods brand. Operator-mentor for
                FMCG ventures.
              </p>
            </div>
            <div className="mentor">
              <div className="av">AS</div>
              <div className="name">Arnab Saharia</div>
              <div className="role">Finance · Rural credit</div>
              <p className="cred">
                Ex-NABARD. Designs grant-to-equity transitions for FPO-led
                startups.
              </p>
            </div>
            <div className="mentor">
              <div className="av">VM</div>
              <div className="name">Dr. Vinod Menon</div>
              <div className="role">Livestock · Dairy</div>
              <p className="cred">
                25+ years dairy science. Advisor to two state milk federations.
              </p>
            </div>
            <div className="mentor">
              <div className="av">NT</div>
              <div className="name">Niharika Tamuly</div>
              <div className="role">GTM · Agri-input</div>
              <p className="cred">
                Ex-Bayer, ex-Insecticides India. Built rural sales for 18 years.
              </p>
            </div>
            <div className="mentor">
              <div className="av">RB</div>
              <div className="name">Rajiv Bharali</div>
              <div className="role">Policy · Compliance</div>
              <p className="cred">
                Advises portfolio on FSSAI, APEDA, state-level approvals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
