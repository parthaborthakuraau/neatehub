import type { Metadata } from "next";
import Link from "next/link";
import "./for-founders.css";
import EligibilityWizard from "./EligibilityWizard";

export const metadata: Metadata = {
  title: "For Founders",
  description:
    "Capital, lab and field-station access, market connections, and domain mentorship for agri-tech founders building in the Northeast. Find your NEATeHUB program in 6 questions.",
};

export default function ForFoundersPage() {
  return (
    <>
      <section className="ff-hero">
        <div className="container">
          <div className="eyebrow">For Founders</div>
          <h1>
            If you&apos;re building
            <br />
            in agri - <em>this is where you start.</em>
          </h1>
          <p className="lede mt-4">
            You get capital, lab and field-station access, market connections,
            mentor time from agronomists who&apos;ve published in your sector,
            and a Northeast operating base that funders take seriously. We
            won&apos;t waste your time with founder-fatigue rituals - no demo-day
            theatre, no incubation kabuki.
          </p>
        </div>
      </section>

      {/* Support pillars */}
      <section className="tight">
        <div className="container">
          <h2 className="h-section">Types of support</h2>
          <div className="pillars mt-3">
            <div className="pillar">
              <div className="idx">01</div>
              <h3>Grant-in-aid capital</h3>
              <p>
                Non-dilutive grants from ₹2L sandbox to ₹25L scale. Tied to
                milestones, not equity. Optional SAFE available for ventures
                needing longer runway.
              </p>
            </div>
            <div className="pillar">
              <div className="idx">02</div>
              <h3>Infrastructure access</h3>
              <p>
                Robotics Lab, Build Lab, AI First, soil and dairy labs at AAU,
                KVK field stations. Co-working at the Jorhat campus for
                residential cohorts.
              </p>
            </div>
            <div className="pillar">
              <div className="idx">03</div>
              <h3>Domain mentorship</h3>
              <p>
                200+ mentors across agronomy, post-harvest, fisheries, dairy
                science, food processing, and rural finance. Real domain experts,
                not generic startup advisors.
              </p>
            </div>
            <div className="pillar">
              <div className="idx">04</div>
              <h3>Market &amp; funder access</h3>
              <p>
                Investor pipeline, state-government procurement pathways, FPO
                partnerships, and an export-promotion channel for finished
                agri-products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="tight">
        <div className="container">
          <div className="row-between mb-3">
            <div>
              <div className="eyebrow">Sectors we back</div>
              <h2 className="display display-m mt-2">From soil to shelf.</h2>
            </div>
            <Link href="/portfolio" className="btn btn-ghost">
              See ventures by sector <span className="arrow">→</span>
            </Link>
          </div>
          <div className="sectors mt-4">
            <a href="#" className="sector-tag">
              <div className="icon">⊕</div>
              <div className="name">Agri-Input</div>
              <div className="count">68 ventures</div>
            </a>
            <a href="#" className="sector-tag">
              <div className="icon">≋</div>
              <div className="name">Post-Harvest</div>
              <div className="count">42 ventures</div>
            </a>
            <a href="#" className="sector-tag">
              <div className="icon">○</div>
              <div className="name">Livestock</div>
              <div className="count">31 ventures</div>
            </a>
            <a href="#" className="sector-tag">
              <div className="icon">~</div>
              <div className="name">Aquaculture</div>
              <div className="count">22 ventures</div>
            </a>
            <a href="#" className="sector-tag">
              <div className="icon">▲</div>
              <div className="name">Food Proc.</div>
              <div className="count">54 ventures</div>
            </a>
            <a href="#" className="sector-tag">
              <div className="icon">⌗</div>
              <div className="name">Rural Fintech</div>
              <div className="count">18 ventures</div>
            </a>
          </div>
        </div>
      </section>

      {/* Eligibility wizard */}
      <section id="wizard">
        <div className="container">
          <div className="row-between">
            <div>
              <div className="eyebrow">Eligibility wizard</div>
              <h2 className="display display-m mt-2">
                Find your program in 6 questions.
              </h2>
              <p className="lede mt-2">
                Two minutes. No email needed to see the result. We&apos;ll only
                ask for contact details if you want us to follow up.
              </p>
            </div>
            <Link href="/ask" className="btn btn-ghost">
              Or just ask our AI →
            </Link>
          </div>

          <EligibilityWizard />

          <p
            style={{
              marginTop: 18,
              fontFamily: "var(--mono)",
              fontSize: 12,
              color: "var(--ink-500)",
              letterSpacing: "0.04em",
            }}
          >
            ⓘ Edge-case results (no clear match) route to an &quot;email-capture +
            we&apos;ll get back&quot; fallback, not a dead-end.
          </p>
        </div>
      </section>

      {/* Apply CTA section */}
      <section id="apply" className="bg-cream-100">
        <div className="container">
          <div className="row-between">
            <div>
              <div className="eyebrow">Applications</div>
              <h2 className="display display-m mt-2">Ready when you are.</h2>
              <p className="lede mt-2">
                Applications stay open even when individual cohorts close -
                you&apos;ll be queued for the next round and we&apos;ll write back
                within 5 working days.
              </p>
            </div>
          </div>
          <div className="grid-3 mt-5">
            <Link
              href="/programs/rkvy-raftaar#saranya"
              className="card"
              style={{ padding: 28 }}
            >
              <span className="badge badge-tea">
                <span className="dot"></span> OPEN NOW
              </span>
              <h3 className="display display-s mt-3" style={{ marginBottom: 4 }}>
                RKVY · Saranya
              </h3>
              <p style={{ color: "var(--ink-700)", margin: "12px 0" }}>
                Growth-stage sub-program of RKVY. Apply by 30 June 2026.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 24,
                  paddingTop: 16,
                  borderTop: "1px solid var(--line)",
                }}
              >
                <span className="kicker">12-18 mo · up to ₹25L</span>
                <span className="arrow">→</span>
              </div>
            </Link>
            <Link
              href="/programs/rkvy-raftaar#isanya"
              className="card"
              style={{ padding: 28 }}
            >
              <span className="badge badge-tea">
                <span className="dot"></span> COHORT 7
              </span>
              <h3 className="display display-s mt-3" style={{ marginBottom: 4 }}>
                RKVY · Isanya
              </h3>
              <p style={{ color: "var(--ink-700)", margin: "12px 0" }}>
                Idea-stage residential. Applications open August 2026.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 24,
                  paddingTop: 16,
                  borderTop: "1px solid var(--line)",
                }}
              >
                <span className="kicker">8 weeks · ₹5L</span>
                <span className="arrow">→</span>
              </div>
            </Link>
            <Link
              href="/programs/aic"
              className="card"
              style={{
                padding: 28,
                background: "var(--tea-900)",
                color: "var(--cream-50)",
                borderColor: "var(--tea-900)",
              }}
            >
              <span className="badge badge-copper">ROLLING</span>
              <h3
                className="display display-s mt-3"
                style={{ marginBottom: 4, color: "var(--cream-50)" }}
              >
                AIC · NITI Aayog
              </h3>
              <p style={{ color: "var(--cream-100)", margin: "12px 0" }}>
                Outside RKVY. Quarterly intake, national mentor network.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 24,
                  paddingTop: 16,
                  borderTop: "1px solid rgba(216,205,181,0.15)",
                }}
              >
                <span className="kicker" style={{ color: "var(--cream-300)" }}>
                  18 mo · up to ₹10L
                </span>
                <span className="arrow">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
