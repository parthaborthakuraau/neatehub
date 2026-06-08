import type { Metadata } from "next";
import Link from "next/link";
import "../program-detail.css";
import StickySubnav from "../../components/StickySubnav";

export const metadata: Metadata = {
  title: "AAU Student First — Campus entrepreneurship",
  description:
    "A campus-level pre-incubation program partnered with eight Northeast universities — workshops, hackathons, founder office hours, and sandbox grants for students before they have a venture.",
};

const SUBNAV = [
  { label: "Overview", id: "overview" },
  { label: "What you get", id: "what-you-get" },
  { label: "Eligibility", id: "eligibility" },
  { label: "Process", id: "process" },
  { label: "Apply", id: "apply" },
];

export default function StudentFirstPage() {
  return (
    <>
      <nav className="crumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">/</span>
        <Link href="/programs">Programs</Link>
        <span className="sep">/</span>
        <span className="cur">AAU Student First</span>
      </nav>

      {/* Hero */}
      <section className="pd-hero">
        <div className="container">
          <div className="pd-hero__inner">
            <div>
              <div className="pd-hero__num">Program 04 · Campus · Pre-incubation</div>
              <h1>
                AAU Student First
                <small>Campus entrepreneurship at NE universities</small>
              </h1>
            </div>
            <div className="pd-hero__side">
              <span className="pd-hero__status">
                <span className="dot" /> Apply by 15 August · For AY26 cohort
              </span>
              <p>
                A campus-level program partnered with eight Northeast
                universities. We build entrepreneurial capacity through
                workshops, hackathons, founder office hours, and pre-incubation
                sandbox grants - before students have a venture, while
                they&apos;re still figuring out whether they want one.
              </p>
              <div className="row">
                <a href="#apply" className="btn btn-primary">
                  Apply to AAU Student First <span className="arrow">→</span>
                </a>
                <Link href="/for-founders#wizard" className="btn btn-ghost">
                  Check eligibility
                </Link>
              </div>
            </div>
          </div>

          <div className="pd-spec mt-5">
            <div>
              <div className="k">Sandbox grant</div>
              <div className="v">
                ₹1 L <small>per project</small>
              </div>
            </div>
            <div>
              <div className="k">Equity dilution</div>
              <div className="v">None</div>
            </div>
            <div>
              <div className="k">Duration</div>
              <div className="v">1 semester</div>
            </div>
            <div>
              <div className="k">Format</div>
              <div className="v">On campus</div>
            </div>
            <div>
              <div className="k">Partners</div>
              <div className="v">8 universities</div>
            </div>
          </div>

          <div className="pd-hero__media">
            <div className="photo pd-hero__photo">
              <div className="photo-label">
                PHOTO: Students at a campus hackathon / workshop, NE university,
                candid
              </div>
            </div>
            <div className="pd-hero__logo">
              <span className="k">In partnership with</span>
              <div className="logo-row">
                <span className="logo-chip">
                  AAU
                  <br />
                  logo
                </span>
                <span className="logo-chip">
                  Partner
                  <br />
                  universities
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
            <h2>Pre-incubation. On campus. For students who haven&apos;t picked.</h2>
            <p className="lede">
              AAU Student First is upstream of Navyam (which is inside RKVY). It
              exists for students who are exploring entrepreneurship as a serious
              option - not yet committed to one venture idea. We provide
              structured exposure, sandbox capital, and access to founders who
              built ventures while still in college.
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
                Undergraduate or postgraduate students at one of our partner
                universities. Any discipline - engineering, agriculture,
                business, social sciences. The only filter is interest, not
                credentials.
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
                Not a venture-building program - that&apos;s Navyam under RKVY.
                Not for non-students. Not online - we are deliberate that this
                happens in person, on campus.
              </p>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="pd-section" id="what-you-get">
          <div className="pd-section__head">
            <div className="eyebrow">What you get</div>
            <h2>Four pillars, semester-long.</h2>
          </div>

          <div className="wyg">
            <div>
              <div className="num">01</div>
              <h3>Workshops</h3>
              <p>Weekly two-hour sessions on campus. Real topics, not theory.</p>
              <ul>
                <li>Customer discovery</li>
                <li>Validation methods</li>
                <li>Unit economics</li>
                <li>Pitch craft</li>
              </ul>
            </div>
            <div>
              <div className="num">02</div>
              <h3>Sandbox grant</h3>
              <p>
                Up to ₹1L per project for prototypes, pilots, or user research.
                No equity, no strings.
              </p>
              <ul>
                <li>Apply mid-semester</li>
                <li>Decision in 2 weeks</li>
                <li>Single tranche</li>
              </ul>
            </div>
            <div>
              <div className="num">03</div>
              <h3>Founder office hours</h3>
              <p>
                Monthly small-group sessions with operating founders. Ask
                anything.
              </p>
              <ul>
                <li>4 founders / semester</li>
                <li>NE-rooted operators</li>
                <li>Small-group format</li>
              </ul>
            </div>
            <div>
              <div className="num">04</div>
              <h3>Pathway to Navyam</h3>
              <p>
                Strong AAU Student First projects get fast-tracked into Navyam
                evaluation the following year.
              </p>
              <ul>
                <li>Auto-shortlist</li>
                <li>Skip first-pass review</li>
                <li>3-year track record</li>
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
              If you&apos;re a student at a partner university, you&apos;re
              eligible.
            </p>
          </div>

          <div className="elig">
            <aside className="elig__check">
              <h3>Quick check</h3>
              <p>Three lines, all required.</p>
              <ul className="quick">
                <li>Enrolled UG or PG student</li>
                <li>At a partner NE university</li>
                <li>Can commit ~3 hrs/week</li>
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
                  <h4>Currently enrolled student</h4>
                  <p>
                    UG, PG, or PhD. Lorem ipsum dolor sit amet - placeholder
                    copy. Final-year students are encouraged.
                  </p>
                </div>
              </li>
              <li>
                <span className="label">Required · 02</span>
                <div>
                  <h4>At a partner university</h4>
                  <p>
                    Partner campuses: AAU Jorhat, Tezpur University, NIT Silchar,
                    IIT Guwahati, Cotton University, Dibrugarh University, Mizoram
                    University, Nagaland University.
                  </p>
                </div>
              </li>
              <li>
                <span className="label">Required · 03</span>
                <div>
                  <h4>Weekly time commitment</h4>
                  <p>
                    About 3 hours per week through the semester. Workshops are
                    non-negotiable; office hours are.
                  </p>
                </div>
              </li>
              <li>
                <span className="label">Preferred</span>
                <div>
                  <h4>A specific problem you&apos;re curious about</h4>
                  <p>
                    You don&apos;t need a venture idea. You do need a problem
                    you&apos;ve been thinking about - even loosely. We use that to
                    anchor your semester.
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
            <h2>One semester. Four checkpoints.</h2>
          </div>

          <div className="process">
            <div className="step step--done">
              <div className="step__num">01</div>
              <div className="step__body">
                <span className="kicker" style={{ color: "var(--copper-700)" }}>
                  Week 0 (Aug)
                </span>
                <h4>Application</h4>
                <p>
                  Submit through your university&apos;s NEATeHUB campus liaison.
                  Single-page form.
                </p>
              </div>
              <div className="step__meta">
                <div className="k">Effort</div>
                <div className="v">~1 hr</div>
              </div>
            </div>
            <div className="step step--done">
              <div className="step__num">02</div>
              <div className="step__body">
                <span className="kicker" style={{ color: "var(--copper-700)" }}>
                  Week 1 (Sep)
                </span>
                <h4>Cohort kickoff</h4>
                <p>
                  Three-day orientation. Meet the cohort, meet the mentors, set
                  semester goals.
                </p>
              </div>
              <div className="step__meta">
                <div className="k">Format</div>
                <div className="v">On campus</div>
              </div>
            </div>
            <div className="step">
              <div className="step__num">03</div>
              <div className="step__body">
                <span className="kicker" style={{ color: "var(--copper-700)" }}>
                  Week 8 (Oct)
                </span>
                <h4>Sandbox grant decision</h4>
                <p>
                  Mid-semester checkpoint. Submit your sandbox proposal if you
                  want to apply for the grant.
                </p>
              </div>
              <div className="step__meta">
                <div className="k">Grant ceiling</div>
                <div className="v">₹1 L</div>
              </div>
            </div>
            <div className="step">
              <div className="step__num">04</div>
              <div className="step__body">
                <span className="kicker" style={{ color: "var(--copper-700)" }}>
                  Week 15 (Dec)
                </span>
                <h4>Showcase + Navyam fast-track decisions</h4>
                <p>
                  Cohort showcase at AAU Jorhat. Strongest projects get
                  pre-shortlisted for Navyam.
                </p>
              </div>
              <div className="step__meta">
                <div className="k">Outcome</div>
                <div className="v">~25% advance</div>
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
              <h2>Annual intake. Closes 15 August for the AY26 cohort.</h2>
              <p>
                One annual cohort, starting in September. Apply through your
                university&apos;s NEATeHUB campus liaison - or directly through
                the application form.
              </p>
              <div className="row mt-3">
                <a href="#" className="btn btn-copper btn-lg">
                  Start application <span className="arrow">→</span>
                </a>
                <a href="#" className="btn btn-ghost btn-lg">
                  Find your campus liaison
                </a>
              </div>
            </div>
            <div className="apply-cta__deadline">
              <div className="k">Applications close</div>
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
                Cohort kicks off the first week of September. Showcase in
                December.
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
            <Link href="/programs/rkvy-raftaar#navyam" className="related-card">
              <div className="num">Next step up</div>
              <h3>RKVY · Navyam</h3>
              <p>
                For students with a venture idea ready for funding. The direct
                pathway from AAU Student First.
              </p>
              <div className="meta">Annual</div>
            </Link>
            <Link href="/programs/rkvy-raftaar#isanya" className="related-card">
              <div className="num">Past graduation</div>
              <h3>RKVY · Isanya</h3>
              <p>
                Idea-stage residential at AAU. For founders past student stage
                with a working prototype.
              </p>
              <div className="meta">Cohort 7 · Sep 2026</div>
            </Link>
            <Link href="/programs/aic" className="related-card">
              <div className="num">National</div>
              <h3>AIC · NITI Aayog</h3>
              <p>
                For students with a venture already at MVP stage. AIC-funded
                under AIM, pan-India.
              </p>
              <div className="meta">Quarterly intake</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
