import type { Metadata } from "next";
import Link from "next/link";
import "../program-detail.css";
import StickySubnav from "../../components/StickySubnav";

export const metadata: Metadata = {
  title: "Build Club — Deep-tech (TIC-IITG & AISF)",
  description:
    "Build Club is NEATeHUB's deep-tech agri program with IIT Guwahati — robotics, sensing, and machine learning for crop and livestock systems. Engineering-heavy founders only.",
};

const SUBNAV = [
  { label: "Overview", id: "overview" },
  { label: "What you get", id: "what-you-get" },
  { label: "Eligibility", id: "eligibility" },
  { label: "Process", id: "process" },
  { label: "Waitlist", id: "apply" },
];

export default function BuildClubPage() {
  return (
    <>
      <nav className="crumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">/</span>
        <Link href="/programs">Programs</Link>
        <span className="sep">/</span>
        <span className="cur">Build Club</span>
      </nav>

      {/* Hero */}
      <section className="pd-hero">
        <div className="container">
          <div className="pd-hero__inner">
            <div>
              <div className="pd-hero__num">
                Program 05 · Deep-tech · Joint with IIT Guwahati
              </div>
              <h1>
                Build Club
                <small>
                  TIC-IITG &amp; AISF · with IIT Guwahati · Tech-Incubation Centre
                  · Agriculture Innovation &amp; Startups Fund
                </small>
              </h1>
            </div>
            <div className="pd-hero__side">
              <span className="pd-hero__status is-closed">
                <span className="dot" /> Closed · Reopens Q3 2026
              </span>
              <p>
                A joint program with IIT Guwahati for deep-tech agri innovation -
                robotics, sensing, machine learning applied to crop and livestock
                systems. Engineering-heavy founders only. Uses NEATeHUB&apos;s
                Robotics Lab and AI First infrastructure plus IITG&apos;s research
                facilities.
              </p>
              <div className="row">
                <a href="#apply" className="btn btn-primary">
                  Join waitlist <span className="arrow">→</span>
                </a>
                <Link href="/for-founders#wizard" className="btn btn-ghost">
                  Check eligibility
                </Link>
              </div>
            </div>
          </div>

          <div className="pd-spec mt-5">
            <div>
              <div className="k">Capital</div>
              <div className="v">
                Project-based <small>up to ₹40L</small>
              </div>
            </div>
            <div>
              <div className="k">Equity</div>
              <div className="v">
                Optional <small>SAFE</small>
              </div>
            </div>
            <div>
              <div className="k">Duration</div>
              <div className="v">18-36 mo</div>
            </div>
            <div>
              <div className="k">Focus</div>
              <div className="v">Deep-tech</div>
            </div>
            <div>
              <div className="k">Partner</div>
              <div className="v">IIT Guwahati</div>
            </div>
          </div>

          <div className="pd-hero__media">
            <div className="photo photo-tea pd-hero__photo">
              <div className="photo-label">
                PHOTO: Robotics / sensing prototype on the bench at the NEATeHUB
                Robotics Lab
              </div>
            </div>
            <div className="pd-hero__logo">
              <span className="k">Joint program with</span>
              <div className="logo-row">
                <span className="logo-chip">
                  IIT Guwahati
                  <br />
                  logo
                </span>
                <span className="logo-chip">
                  AISF
                  <br />
                  logo
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-nav */}
      <StickySubnav items={SUBNAV} />

      <div className="container">
        {/* Overview */}
        <section className="pd-section" id="overview">
          <div className="pd-section__head">
            <div className="eyebrow">Overview</div>
            <h2>Deep-tech agri. Engineering-heavy founders only.</h2>
            <p className="lede">
              Build Club is the program for founders building things that need a
              CNC machine, a GPU cluster, a sensor lab, or all three. Operated
              jointly with IIT Guwahati&apos;s Technology Innovation and
              Development Foundation. We bring agri-domain depth; IITG brings
              engineering bench.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(28px, 4vw, 56px)",
              alignItems: "start",
            }}
          >
            <div>
              <h3 className="display display-s" style={{ margin: "0 0 14px" }}>
                Who it&apos;s for.
              </h3>
              <p
                style={{
                  color: "var(--ink-700)",
                  fontSize: 16,
                  lineHeight: 1.65,
                  maxWidth: "50ch",
                }}
              >
                Engineering-heavy founders building robotics, sensing, computer
                vision, machine learning, or precision-instrumentation applied to
                agriculture, livestock, fisheries, or food systems. Lorem ipsum
                dolor sit amet - placeholder.
              </p>
            </div>
            <div>
              <h3 className="display display-s" style={{ margin: "0 0 14px" }}>
                What it isn&apos;t.
              </h3>
              <p
                style={{
                  color: "var(--ink-700)",
                  fontSize: 16,
                  lineHeight: 1.65,
                  maxWidth: "50ch",
                }}
              >
                It is not a generalist program - if your edge isn&apos;t
                engineering, RKVY&apos;s Saranya is the right door. It is not for
                software-only ventures unless the software is non-trivial ML on
                real sensor data.
              </p>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="pd-section" id="what-you-get">
          <div className="pd-section__head">
            <div className="eyebrow">What you get</div>
            <h2>Capital, two labs, two institutions.</h2>
          </div>

          <div className="wyg">
            <div>
              <div className="num">01</div>
              <h3>Project capital</h3>
              <p>
                Up to ₹40L per project, structured as grant + optional SAFE.
                Higher ceiling than other programs.
              </p>
              <ul>
                <li>Grant up to ₹25L</li>
                <li>Optional SAFE up to ₹15L</li>
                <li>Milestone-linked</li>
              </ul>
            </div>
            <div>
              <div className="num">02</div>
              <h3>Two-lab access</h3>
              <p>
                NEATeHUB Robotics Lab + AI First, plus IITG&apos;s TIDE 2.0
                research facilities.
              </p>
              <ul>
                <li>Robotics Lab · 1,400 sq ft</li>
                <li>AI First · 8× H100</li>
                <li>IITG TIDE 2.0</li>
              </ul>
            </div>
            <div>
              <div className="num">03</div>
              <h3>Dual mentorship</h3>
              <p>
                One agri-domain mentor (NEATeHUB), one engineering mentor (IITG
                faculty).
              </p>
              <ul>
                <li>Bi-weekly sessions</li>
                <li>Quarterly reviews</li>
                <li>Joint advisory board</li>
              </ul>
            </div>
            <div>
              <div className="num">04</div>
              <h3>IP support</h3>
              <p>
                Patent filing assistance and access to IITG&apos;s IP cell. Useful
                for deep-tech moats.
              </p>
              <ul>
                <li>Provisional filings</li>
                <li>FTO analysis</li>
                <li>Tech-transfer paths</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="pd-section" id="eligibility">
          <div className="pd-section__head">
            <div className="eyebrow">Eligibility</div>
            <h2>The criteria.</h2>
            <p className="lede">
              Stricter on technical depth than any of our other programs.
            </p>
          </div>

          <div className="elig">
            <aside className="elig__check">
              <h3>Quick check</h3>
              <p>All five required. We&apos;re strict on this program.</p>
              <ul className="quick">
                <li>DPIIT-recognised startup</li>
                <li>Engineering or science PhD/postgrad founder</li>
                <li>Working hardware/ML prototype</li>
                <li>Patent filed or in-process</li>
                <li>Agri-application clear</li>
              </ul>
              <Link
                href="/for-founders#wizard"
                className="btn btn-cream mt-3"
                style={{ marginTop: 24, width: "100%" }}
              >
                Run full wizard <span className="arrow">→</span>
              </Link>
            </aside>

            <ol className="elig__list">
              <li>
                <span className="label">Required · 01</span>
                <div>
                  <h4>DPIIT-recognised startup</h4>
                  <p>Same as other programs. Lorem ipsum dolor sit amet.</p>
                </div>
              </li>
              <li>
                <span className="label">Required · 02</span>
                <div>
                  <h4>
                    At least one technical co-founder with relevant credentials
                  </h4>
                  <p>
                    Engineering or applied-science postgrad, PhD, or 5+ years
                    equivalent experience. This is non-negotiable for Build Club.
                  </p>
                </div>
              </li>
              <li>
                <span className="label">Required · 03</span>
                <div>
                  <h4>Working hardware or ML prototype</h4>
                  <p>
                    Not slide-ware. We need to see something running - a robotic
                    prototype, a trained model, a sensor pack with real-world
                    data.
                  </p>
                </div>
              </li>
              <li>
                <span className="label">Required · 04</span>
                <div>
                  <h4>Clear agricultural application</h4>
                  <p>
                    Generic robotics or generic ML won&apos;t fit. Your venture
                    must solve a specific agri, livestock, fisheries, or
                    food-systems problem.
                  </p>
                </div>
              </li>
              <li className="excludes">
                <span className="label">Excludes</span>
                <div>
                  <h4>Software-only SaaS with no hardware/sensor element</h4>
                  <p>
                    SaaS for agri is welcome at RKVY&apos;s Saranya - not here.
                    Build Club is for ventures with a real engineering moat.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Process */}
        <section className="pd-section" id="process">
          <div className="pd-section__head">
            <div className="eyebrow">Process</div>
            <h2>Annual cohort. Joint selection.</h2>
            <p className="lede">
              Longer evaluation than other programs - 14 weeks. Joint NEATeHUB +
              IITG selection committee.
            </p>
          </div>

          <div className="process">
            <div className="step step--done">
              <div className="step__num">01</div>
              <div className="step__body">
                <span className="kicker" style={{ color: "var(--copper-700)" }}>
                  Week 0
                </span>
                <h4>Application</h4>
                <p>
                  Submit technical dossier, deck, prototype demo video, and IP
                  status. Lorem ipsum.
                </p>
              </div>
              <div className="step__meta">
                <div className="k">Effort</div>
                <div className="v">~12 hrs</div>
              </div>
            </div>
            <div className="step step--done">
              <div className="step__num">02</div>
              <div className="step__body">
                <span className="kicker" style={{ color: "var(--copper-700)" }}>
                  Week 1-4
                </span>
                <h4>Technical review</h4>
                <p>
                  IITG faculty + NEATeHUB agri-experts independently review. Two
                  independent technical assessments.
                </p>
              </div>
              <div className="step__meta">
                <div className="k">Advance rate</div>
                <div className="v">~18%</div>
              </div>
            </div>
            <div className="step step--done">
              <div className="step__num">03</div>
              <div className="step__body">
                <span className="kicker" style={{ color: "var(--copper-700)" }}>
                  Week 5-8
                </span>
                <h4>Demo + reference checks</h4>
                <p>
                  On-site prototype demo at IITG or AAU. Three reference calls.
                  Customer/pilot verification.
                </p>
              </div>
              <div className="step__meta">
                <div className="k">Format</div>
                <div className="v">In person</div>
              </div>
            </div>
            <div className="step">
              <div className="step__num">04</div>
              <div className="step__body">
                <span className="kicker" style={{ color: "var(--copper-700)" }}>
                  Week 9-12
                </span>
                <h4>Joint selection committee</h4>
                <p>
                  NEATeHUB + IITG joint committee. Final selection. AISF board
                  sign-off for capital release.
                </p>
              </div>
              <div className="step__meta">
                <div className="k">Visibility</div>
                <div className="v">Full</div>
              </div>
            </div>
            <div className="step">
              <div className="step__num">05</div>
              <div className="step__body">
                <span className="kicker" style={{ color: "var(--copper-700)" }}>
                  Week 13-14
                </span>
                <h4>Onboarding + Tranche 1</h4>
                <p>
                  Sign engagement with both institutions. Assign dual mentors.
                  Receive ₹10L Tranche 1.
                </p>
              </div>
              <div className="step__meta">
                <div className="k">First capital</div>
                <div className="v">₹10 L</div>
              </div>
            </div>
          </div>
        </section>

        {/* Apply / Waitlist */}
        <section className="pd-section" id="apply">
          <div className="apply-cta">
            <div>
              <div className="eyebrow" style={{ color: "var(--copper-500)" }}>
                Currently closed
              </div>
              <h2>Build Club reopens for applications in Q3 2026.</h2>
              <p>
                The program runs as an annual cohort with one application window.
                Join the waitlist to be notified when applications reopen in
                September 2026. We&apos;ll send the application pack and one
                office-hours slot for technical questions.
              </p>
              <div className="row mt-3">
                <a href="#" className="btn btn-copper btn-lg">
                  Join the waitlist <span className="arrow">→</span>
                </a>
                <a href="#" className="btn btn-ghost btn-lg">
                  Past cohort showcase
                </a>
              </div>
            </div>
            <div className="apply-cta__deadline">
              <div className="k">Applications reopen</div>
              <div className="v">Sep 2026</div>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 13,
                  color: "var(--cream-300)",
                  margin: "14px 0 0",
                  lineHeight: 1.6,
                }}
              >
                Annual cohort. Selection takes 14 weeks. Eight founders
                shortlisted each year.
              </p>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="pd-section">
          <div className="pd-section__head">
            <div className="eyebrow">Not quite the right fit?</div>
            <h2>Try one of these.</h2>
          </div>
          <div className="related">
            <Link href="/programs/rkvy-raftaar#saranya" className="related-card">
              <div className="num">Central · Growth</div>
              <h3>RKVY · Saranya</h3>
              <p>
                The right door if your edge is product or business model, not
                engineering. Up to ₹25L.
              </p>
              <div className="meta">Cohort 4 · Open</div>
            </Link>
            <Link href="/programs/aic" className="related-card">
              <div className="num">National</div>
              <h3>AIC · NITI Aayog</h3>
              <p>
                If your engineering ambition is real but you don&apos;t have a
                hardware prototype yet.
              </p>
              <div className="meta">Quarterly intake</div>
            </Link>
            <Link href="/programs/rkvy-raftaar#isanya" className="related-card">
              <div className="num">Idea-stage</div>
              <h3>RKVY · Isanya</h3>
              <p>
                If you&apos;re still validating the agri-application of your tech.
                8 weeks residential at AAU.
              </p>
              <div className="meta">Cohort 7 · Sep 2026</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
