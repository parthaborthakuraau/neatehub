import type { Metadata } from "next";
import Link from "next/link";
import "../program-detail.css";
import StickySubnav from "../../components/StickySubnav";

export const metadata: Metadata = {
  title: "AIC — Atal Incubation Centre",
  description:
    "NEATeHUB operates as an Atal Incubation Centre under NITI Aayog's Atal Innovation Mission — national recognition, a pan-India mentor bench, and grant-in-aid up to ₹10L.",
};

const SUBNAV = [
  { label: "Overview", id: "overview" },
  { label: "What you get", id: "what-you-get" },
  { label: "Eligibility", id: "eligibility" },
  { label: "Process", id: "process" },
  { label: "Apply", id: "apply" },
];

export default function AICPage() {
  return (
    <>
      <nav className="crumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">/</span>
        <Link href="/programs">Programs</Link>
        <span className="sep">/</span>
        <span className="cur">AIC</span>
      </nav>

      {/* Hero */}
      <section className="pd-hero">
        <div className="container">
          <div className="pd-hero__inner">
            <div>
              <div className="pd-hero__num">Program 02 · National · NITI Aayog</div>
              <h1>
                AIC
                <small>
                  Atal Incubation Centre · Atal Innovation Mission · NITI Aayog
                </small>
              </h1>
            </div>
            <div className="pd-hero__side">
              <span className="pd-hero__status">
                <span className="dot" /> Quarterly intake · Q2 closing 15 Aug
              </span>
              <p>
                NEATeHUB operates as an Atal Incubation Centre under NITI
                Aayog&apos;s Atal Innovation Mission. It&apos;s a separate funder
                from RKVY, with its own evaluation framework and a pan-India
                mentor network attached.
              </p>
              <div className="row">
                <a href="#apply" className="btn btn-primary">
                  Apply to AIC <span className="arrow">→</span>
                </a>
                <Link href="/for-founders#wizard" className="btn btn-ghost">
                  Check eligibility
                </Link>
              </div>
            </div>
          </div>

          <div className="pd-spec mt-5">
            <div>
              <div className="k">Grant ceiling</div>
              <div className="v">
                ₹10 L <small>up to</small>
              </div>
            </div>
            <div>
              <div className="k">Equity dilution</div>
              <div className="v">None</div>
            </div>
            <div>
              <div className="k">Duration</div>
              <div className="v">18 mo</div>
            </div>
            <div>
              <div className="k">Network</div>
              <div className="v">Pan-India</div>
            </div>
            <div>
              <div className="k">Funder</div>
              <div className="v">
                NITI Aayog <small>AIM</small>
              </div>
            </div>
          </div>

          <div className="pd-hero__media">
            <div className="photo photo-tea pd-hero__photo">
              <div className="photo-label">
                PHOTO: Founder presenting at an AIM investor day, AAU campus
                context
              </div>
            </div>
            <div className="pd-hero__logo">
              <span className="k">Funded &amp; recognised by</span>
              <div className="logo-row">
                <span className="logo-chip">
                  NITI Aayog
                  <br />
                  logo
                </span>
                <span className="logo-chip">
                  AIM
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
            <h2>National-grade recognition, plus a pan-India mentor bench.</h2>
            <p className="lede">
              AIC is what you apply to if you want national visibility, access to
              AIM&apos;s investor days, and recognition that opens institutional
              doors beyond the Northeast. It&apos;s the right program for ventures
              whose customer base is national rather than regional.
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
                Who it&apos;s for, in one paragraph.
              </h3>
              <p
                style={{
                  color: "var(--ink-700)",
                  fontSize: 16,
                  lineHeight: 1.65,
                  maxWidth: "50ch",
                }}
              >
                A DPIIT-recognised startup, incorporated less than 10 years, with
                a working MVP. Agri-allied sectors with national applicability.
                Founders may be located anywhere in India — AIC does not require
                Northeast residency.
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
                It is not a regional rural-livelihoods program (use ASRLM). It is
                not a deep-tech-specific program (use Build Club). It is not
                stage-restricted — but ventures past Series A typically don&apos;t
                fit cleanly.
              </p>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="pd-section" id="what-you-get">
          <div className="pd-section__head">
            <div className="eyebrow">What you get</div>
            <h2>Four pillars.</h2>
          </div>

          <div className="wyg">
            <div>
              <div className="num">01</div>
              <h3>Capital</h3>
              <p>Non-dilutive grant-in-aid up to ₹10L. Milestone-linked tranches.</p>
              <ul>
                <li>Tranche 1 (₹3L) on onboarding</li>
                <li>Tranche 2 (₹4L) at 6-month review</li>
                <li>Tranche 3 (₹3L) at 12-month milestones</li>
              </ul>
            </div>
            <div>
              <div className="num">02</div>
              <h3>National mentor bench</h3>
              <p>
                Access to AIM&apos;s pan-India mentor network — operators, sector
                specialists, ex-founders.
              </p>
              <ul>
                <li>2× principal mentors assigned</li>
                <li>Monthly sessions</li>
                <li>On-demand sector specialists</li>
              </ul>
            </div>
            <div>
              <div className="num">03</div>
              <h3>Investor days</h3>
              <p>
                Quarterly investor days hosted by AIM. Direct exposure to national
                VCs and CVCs.
              </p>
              <ul>
                <li>4 investor days / year</li>
                <li>Curated pitch slots</li>
                <li>Warm investor intros</li>
              </ul>
            </div>
            <div>
              <div className="num">04</div>
              <h3>Recognition</h3>
              <p>
                Official AIM portfolio status. Useful for grant applications,
                partnerships, and procurement.
              </p>
              <ul>
                <li>Listed on AIM portal</li>
                <li>Centre-of-Excellence cohort</li>
                <li>Procurement pre-qualification</li>
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
              Tighter than RKVY on stage maturity, looser than RKVY on geography.
              AIC accepts national applications.
            </p>
          </div>

          <div className="elig">
            <aside className="elig__check">
              <h3>Quick check</h3>
              <p>
                Most ventures we accept hit all five. Hit four and we still talk
                to you.
              </p>
              <ul className="quick">
                <li>DPIIT-recognised startup</li>
                <li>Incorporated &lt; 10 years</li>
                <li>Working MVP + early users</li>
                <li>Agri-allied sector</li>
                <li>Indian-citizen founder(s)</li>
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
                  <p>
                    Active recognition required. Lorem ipsum dolor sit amet —
                    placeholder copy for the production handoff.
                  </p>
                </div>
              </li>
              <li>
                <span className="label">Required · 02</span>
                <div>
                  <h4>Incorporated less than 10 years ago</h4>
                  <p>
                    AIM&apos;s ceiling is looser than RKVY&apos;s seven-year cap.
                    Older ventures may still qualify with justification.
                  </p>
                </div>
              </li>
              <li>
                <span className="label">Required · 03</span>
                <div>
                  <h4>Working MVP with early users</h4>
                  <p>
                    Not a hard revenue requirement, but real-world usage is
                    mandatory. Pilots count.
                  </p>
                </div>
              </li>
              <li>
                <span className="label">Required · 04</span>
                <div>
                  <h4>Agri-allied sector with national applicability</h4>
                  <p>
                    If your venture is hyperlocal to a single state, RKVY or ASRLM
                    may be a better fit.
                  </p>
                </div>
              </li>
              <li className="excludes">
                <span className="label">Excludes</span>
                <div>
                  <h4>Pure-services or trading businesses</h4>
                  <p>
                    AIC, like RKVY, expects a technical or process innovation
                    core. Procurement-only businesses don&apos;t qualify.
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
            <h2>From application to onboarding in 8 weeks.</h2>
            <p className="lede">
              AIC&apos;s central calendar is faster than RKVY&apos;s. Quarterly
              intake batches mean less waiting.
            </p>
          </div>

          <div className="process">
            <div className="step step--done">
              <div className="step__num">01</div>
              <div className="step__body">
                <span className="kicker" style={{ color: "var(--copper-700)" }}>
                  Week 0
                </span>
                <h4>Application via AIM portal</h4>
                <p>
                  Submit through the AIM application portal. We&apos;re notified
                  within 5 working days.
                </p>
              </div>
              <div className="step__meta">
                <div className="k">Effort</div>
                <div className="v">~4 hrs</div>
              </div>
            </div>
            <div className="step step--done">
              <div className="step__num">02</div>
              <div className="step__body">
                <span className="kicker" style={{ color: "var(--copper-700)" }}>
                  Week 1-2
                </span>
                <h4>Internal screening</h4>
                <p>Two-person review against the AIC rubric. Yes / No / More-info call.</p>
              </div>
              <div className="step__meta">
                <div className="k">Advance rate</div>
                <div className="v">~28%</div>
              </div>
            </div>
            <div className="step step--done">
              <div className="step__num">03</div>
              <div className="step__body">
                <span className="kicker" style={{ color: "var(--copper-700)" }}>
                  Week 3-4
                </span>
                <h4>Founder interview + reference checks</h4>
                <p>One-hour founder interview, two reference calls, technical review.</p>
              </div>
              <div className="step__meta">
                <div className="k">Effort</div>
                <div className="v">~8 hrs</div>
              </div>
            </div>
            <div className="step">
              <div className="step__num">04</div>
              <div className="step__body">
                <span className="kicker" style={{ color: "var(--copper-700)" }}>
                  Week 5-6
                </span>
                <h4>AIM selection committee</h4>
                <p>
                  Central AIM committee approval. We&apos;ve never had a NEATeHUB
                  selection rejected at the central level — but the calendar is
                  theirs.
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
                  Week 7-8
                </span>
                <h4>Onboarding + Tranche 1</h4>
                <p>
                  Sign engagement, set milestones with your two mentors, receive
                  ₹3L Tranche 1.
                </p>
              </div>
              <div className="step__meta">
                <div className="k">First capital</div>
                <div className="v">₹3 L</div>
              </div>
            </div>
          </div>
        </section>

        {/* Apply */}
        <section className="pd-section" id="apply">
          <div className="apply-cta">
            <div>
              <div className="eyebrow" style={{ color: "var(--copper-500)" }}>
                Apply now
              </div>
              <h2>Quarterly intake. Next batch closes 15 August.</h2>
              <p>
                Applications submitted by this date enter the Q3 review cohort.
                Decisions communicated by end of October. Next batch closes 15
                November.
              </p>
              <div className="row mt-3">
                <Link href="/for-founders#apply" className="btn btn-copper btn-lg">
                  Start AIC application <span className="arrow">→</span>
                </Link>
                <a href="#" className="btn btn-ghost btn-lg">
                  Download program brief (PDF)
                </a>
              </div>
            </div>
            <div className="apply-cta__deadline">
              <div className="k">Q3 cycle closes</div>
              <div className="v">15 Aug 2026</div>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 13,
                  color: "var(--cream-300)",
                  margin: "14px 0 0",
                  lineHeight: 1.6,
                }}
              >
                Average elapsed time from application to first tranche: 8 weeks.
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
            <Link href="/programs/rkvy-raftaar" className="related-card">
              <div className="num">Central</div>
              <h3>RKVY RAFTAAR</h3>
              <p>
                Three stage-based sub-programs (Navyam, Isanya, Saranya). Capital
                ₹2L–₹25L.
              </p>
              <div className="meta">Rolling intake</div>
            </Link>
            <Link href="/programs/asrlm" className="related-card">
              <div className="num">State</div>
              <h3>ASRLM</h3>
              <p>
                Rural enterprise — FPOs, SHGs, producer-aggregation businesses.
                Assam-focused.
              </p>
              <div className="meta">Continuous</div>
            </Link>
            <Link href="/programs/build-club" className="related-card">
              <div className="num">Deep-tech</div>
              <h3>Build Club</h3>
              <p>
                Engineering-heavy founders building robotics, sensing, or ML for
                agri systems.
              </p>
              <div className="meta">Closed · Reopens Q3</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
