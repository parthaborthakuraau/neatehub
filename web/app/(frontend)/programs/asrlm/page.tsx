import type { Metadata } from "next";
import Link from "next/link";
import "../program-detail.css";
import StickySubnav from "../../components/StickySubnav";

export const metadata: Metadata = {
  title: "ASRLM — Assam State Rural Livelihoods Mission",
  description:
    "A rural-enterprise program for FPOs, SHGs, and producer-led ventures in Assam — non-dilutive grant up to ₹8L, FPO/SHG network access, and state-government plumbing.",
};

const SUBNAV = [
  { label: "Overview", id: "overview" },
  { label: "What you get", id: "what-you-get" },
  { label: "Eligibility", id: "eligibility" },
  { label: "Process", id: "process" },
  { label: "Apply", id: "apply" },
];

export default function ASRLMPage() {
  return (
    <>
      <nav className="crumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">/</span>
        <Link href="/programs">Programs</Link>
        <span className="sep">/</span>
        <span className="cur">ASRLM</span>
      </nav>

      {/* Hero */}
      <section className="pd-hero">
        <div className="container">
          <div className="pd-hero__inner">
            <div>
              <div className="pd-hero__num">Program 03 · State · Producer-led</div>
              <h1>
                ASRLM
                <small>
                  Assam State Rural Livelihoods Mission · Govt of Assam
                </small>
              </h1>
            </div>
            <div className="pd-hero__side">
              <span className="pd-hero__status">
                <span className="dot" /> Continuous intake · Reviewed monthly
              </span>
              <p>
                A rural-enterprise program for FPOs, SHGs, and producer-led
                ventures whose customers are rural households. SHG-linked,
                embedded in the state&apos;s livelihoods infrastructure. The
                right door for businesses that don&apos;t have an innovation core
                but do have producer reach.
              </p>
              <div className="row">
                <a href="#apply" className="btn btn-primary">
                  Apply to ASRLM <span className="arrow">→</span>
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
                ₹8 L <small>up to</small>
              </div>
            </div>
            <div>
              <div className="k">Equity dilution</div>
              <div className="v">None</div>
            </div>
            <div>
              <div className="k">Duration</div>
              <div className="v">12 mo</div>
            </div>
            <div>
              <div className="k">Focus</div>
              <div className="v">Producer-led</div>
            </div>
            <div>
              <div className="k">Funder</div>
              <div className="v">Govt of Assam</div>
            </div>
          </div>

          <div className="pd-hero__media">
            <div className="photo photo-copper pd-hero__photo">
              <div className="photo-label">
                PHOTO: FPO producer collective at work, rural Assam, daylight
              </div>
            </div>
            <div className="pd-hero__logo">
              <span className="k">Funded &amp; recognised by</span>
              <div className="logo-row">
                <span className="logo-chip">
                  ASRLM
                  <br />
                  logo
                </span>
                <span className="logo-chip">
                  Govt of
                  <br />
                  Assam logo
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
            <h2>Rural enterprise, producer-led, state-funded.</h2>
            <p className="lede">
              ASRLM exists because rural-enterprise problems don&apos;t always
              have an &quot;innovation core&quot; - sometimes they have an
              aggregation, logistics, or trust problem. We run ASRLM for
              ventures whose value comes from producer reach, not from a patent.
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
                FPOs, SHG-linked enterprises, producer-led startups, and
                rural-services businesses. Operations in Assam. Founders may be
                from the FPO/SHG itself or external operators working with one.
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
                It is not a tech program - RKVY or AIC is the right door if your
                edge is technical. It is not pan-India - operations outside Assam
                disqualify under state-funding rules. It is not equity capital.
              </p>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="pd-section" id="what-you-get">
          <div className="pd-section__head">
            <div className="eyebrow">What you get</div>
            <h2>Capital, network, and state-government plumbing.</h2>
          </div>

          <div className="wyg">
            <div>
              <div className="num">01</div>
              <h3>Capital</h3>
              <p>Non-dilutive grant up to ₹8L over 12 months. Two tranches.</p>
              <ul>
                <li>Tranche 1 (₹4L) at onboarding</li>
                <li>Tranche 2 (₹4L) at 6 months</li>
                <li>Milestone-linked</li>
              </ul>
            </div>
            <div>
              <div className="num">02</div>
              <h3>FPO/SHG network</h3>
              <p>
                Introductions to 80+ FPOs and 200+ SHGs across Assam. Pilot
                partners, distribution.
              </p>
              <ul>
                <li>FPO partnership intros</li>
                <li>SHG distribution channels</li>
                <li>Co-pilot setup</li>
              </ul>
            </div>
            <div>
              <div className="num">03</div>
              <h3>State-government access</h3>
              <p>
                Direct line into state-government livelihoods initiatives. RFPs,
                procurement, policy.
              </p>
              <ul>
                <li>State RFPs / pilots</li>
                <li>Procurement pre-qualification</li>
                <li>Policy feedback channel</li>
              </ul>
            </div>
            <div>
              <div className="num">04</div>
              <h3>Compliance support</h3>
              <p>
                FSSAI, APEDA, state-level approvals navigation. The plumbing that
                derails most rural ventures.
              </p>
              <ul>
                <li>Licensing assistance</li>
                <li>FSSAI / APEDA filings</li>
                <li>Tax &amp; PF setup</li>
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
              Looser on innovation, tighter on producer linkage and Assam
              geography.
            </p>
          </div>

          <div className="elig">
            <aside className="elig__check">
              <h3>Quick check</h3>
              <p>Producer linkage is the load-bearing requirement.</p>
              <ul className="quick">
                <li>Operations in Assam</li>
                <li>Producer-led OR FPO/SHG linked</li>
                <li>Indian-citizen founder(s)</li>
                <li>Rural customer base</li>
                <li>Documented producer relationships</li>
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
                  <h4>Operations in Assam</h4>
                  <p>
                    ASRLM is state-funded. Lorem ipsum dolor sit amet -
                    placeholder copy. Your business address, your operations,
                    your customer base must be Assam-resident.
                  </p>
                </div>
              </li>
              <li>
                <span className="label">Required · 02</span>
                <div>
                  <h4>Producer-led or FPO/SHG linked</h4>
                  <p>
                    Either you are a producer organisation, or you have
                    documented working relationships with at least one producer
                    collective.
                  </p>
                </div>
              </li>
              <li>
                <span className="label">Required · 03</span>
                <div>
                  <h4>Rural customer base</h4>
                  <p>
                    Your customers are rural households, smallholder farmers, or
                    rural micro-enterprises. Urban B2C ventures don&apos;t fit.
                  </p>
                </div>
              </li>
              <li>
                <span className="label">Preferred</span>
                <div>
                  <h4>Women-led or women-employing</h4>
                  <p>
                    State priority. Not required but weighted positively in
                    evaluation.
                  </p>
                </div>
              </li>
              <li className="excludes">
                <span className="label">Excludes</span>
                <div>
                  <h4>Pan-India operations</h4>
                  <p>
                    If you operate across India and Assam is a minority of your
                    business, AIC is the right door instead.
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
            <h2>Fast intake. Continuous review.</h2>
            <p className="lede">
              Average elapsed time from application to first tranche: 6 weeks.
              Faster than RKVY or AIC.
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
                  Submit application form with FPO/SHG affiliation letter and
                  operations data. Lorem ipsum.
                </p>
              </div>
              <div className="step__meta">
                <div className="k">Effort</div>
                <div className="v">~3 hrs</div>
              </div>
            </div>
            <div className="step step--done">
              <div className="step__num">02</div>
              <div className="step__body">
                <span className="kicker" style={{ color: "var(--copper-700)" }}>
                  Week 1
                </span>
                <h4>Field verification</h4>
                <p>
                  Site visit by our ASRLM team. Verify producer linkages,
                  operations, and reported numbers.
                </p>
              </div>
              <div className="step__meta">
                <div className="k">Visit</div>
                <div className="v">1 day</div>
              </div>
            </div>
            <div className="step step--done">
              <div className="step__num">03</div>
              <div className="step__body">
                <span className="kicker" style={{ color: "var(--copper-700)" }}>
                  Week 2-3
                </span>
                <h4>State committee review</h4>
                <p>
                  Monthly review committee. We attend with you, you present your
                  case.
                </p>
              </div>
              <div className="step__meta">
                <div className="k">Advance rate</div>
                <div className="v">~40%</div>
              </div>
            </div>
            <div className="step">
              <div className="step__num">04</div>
              <div className="step__body">
                <span className="kicker" style={{ color: "var(--copper-700)" }}>
                  Week 4-5
                </span>
                <h4>State approval</h4>
                <p>ASRLM state authority sign-off. We handle the paperwork.</p>
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
                  Week 6
                </span>
                <h4>Onboarding + Tranche 1</h4>
                <p>Sign engagement, set milestones, receive ₹4L Tranche 1.</p>
              </div>
              <div className="step__meta">
                <div className="k">First capital</div>
                <div className="v">₹4 L</div>
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
              <h2>Continuous intake. Monthly state review committee.</h2>
              <p>
                Applications are accepted year-round and reviewed at the monthly
                ASRLM committee. The next review meets{" "}
                <strong style={{ color: "var(--cream-50)" }}>
                  12 June 2026
                </strong>
                .
              </p>
              <div className="row mt-3">
                <a href="#" className="btn btn-copper btn-lg">
                  Start ASRLM application <span className="arrow">→</span>
                </a>
                <a href="#" className="btn btn-ghost btn-lg">
                  Download program brief (PDF)
                </a>
              </div>
            </div>
            <div className="apply-cta__deadline">
              <div className="k">Next committee meets</div>
              <div className="v">12 Jun 2026</div>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 13,
                  color: "var(--cream-300)",
                  margin: "14px 0 0",
                  lineHeight: 1.6,
                }}
              >
                Average elapsed time from application to first tranche: 6 weeks.
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
                Tech-core ventures across three stage-based sub-programs (Navyam,
                Isanya, Saranya).
              </p>
              <div className="meta">Rolling intake</div>
            </Link>
            <Link href="/programs/aic" className="related-card">
              <div className="num">National</div>
              <h3>AIC · NITI Aayog</h3>
              <p>
                National-grade recognition, pan-India mentor network, looser
                geography.
              </p>
              <div className="meta">Quarterly intake</div>
            </Link>
            <Link href="/programs/student-first" className="related-card">
              <div className="num">Campus</div>
              <h3>AAU Student First</h3>
              <p>Pre-incubation entrepreneurship at NE university campuses.</p>
              <div className="meta">Annual</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
