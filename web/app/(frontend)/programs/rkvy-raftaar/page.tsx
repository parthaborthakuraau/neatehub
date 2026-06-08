import type { Metadata } from "next";
import Link from "next/link";
import "./rkvy.css";
import StickySubnav from "../../components/StickySubnav";
import CapitalLadder from "./CapitalLadder";

export const metadata: Metadata = {
  title: "RKVY RAFTAAR — Rashtriya Krishi Vikas Yojana",
  description:
    "RKVY RAFTAAR is NEATeHUB's central-government program with three stage-based sub-programs — Navyam (student stage), Isanya (idea-stage residential), and Saranya (early & growth-stage). Non-dilutive capital from ₹2L to ₹25L.",
};

const SUBNAV = [
  { label: "Overview", id: "overview" },
  { label: "Sub-programs", id: "vehicles" },
  { label: "Eligibility", id: "eligibility" },
  { label: "Process", id: "process" },
  { label: "Past cohorts", id: "cohorts" },
  { label: "Featured ventures", id: "ventures" },
  { label: "FAQ", id: "faq" },
  { label: "Apply", id: "apply" },
];

export default function RKVYRaftaarPage() {
  return (
    <>
      <nav className="crumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">/</span>
        <Link href="/programs">Programs</Link>
        <span className="sep">/</span>
        <span className="cur">RKVY RAFTAAR</span>
      </nav>

      {/* Hero */}
      <section className="pd-hero">
        <div className="container">
          <div className="pd-hero__inner">
            <div>
              <div className="pd-hero__num">Central Government program</div>
              <h1>
                RKVY RAFTAAR
                <small>
                  Rashtriya Krishi Vikas Yojana · Remunerative Approaches for
                  Agriculture and Allied Sectors Rejuvenation
                </small>
              </h1>
            </div>
            <div className="pd-hero__side">
              <span className="pd-hero__status">
                <span className="dot" /> Three sub-programs active · Rolling
                intake
              </span>
              <p>
                Our central-government program. NEATeHUB runs three stage-based
                sub-programs under RKVY RAFTAAR - <strong>Isanya</strong> for
                idea-stage founders, <strong>Saranya</strong> for growth-stage
                ventures, and <strong>Navyam</strong> for student founders. One
                funder, one institutional framework, three doors.
              </p>
              <div className="row">
                <a href="#vehicles" className="btn btn-primary">
                  See the sub-programs <span className="arrow">→</span>
                </a>
                <Link href="/for-founders#wizard" className="btn btn-ghost">
                  Check eligibility
                </Link>
              </div>
            </div>
          </div>

          <div className="pd-spec mt-5">
            <div>
              <div className="k">Capital range</div>
              <div className="v">
                ₹2L - ₹25L <small>across sub-programs</small>
              </div>
            </div>
            <div>
              <div className="k">Equity dilution</div>
              <div className="v">
                None <small>non-dilutive</small>
              </div>
            </div>
            <div>
              <div className="k">Sub-programs</div>
              <div className="v">3</div>
            </div>
            <div>
              <div className="k">Duration</div>
              <div className="v">8 wk - 24 mo</div>
            </div>
            <div>
              <div className="k">Funder</div>
              <div className="v">
                MoA&amp;FW <small>Govt of India</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky sub-nav */}
      <StickySubnav items={SUBNAV} />

      <div className="container">
        {/* Overview */}
        <section className="pd-section" id="overview">
          <div className="pd-section__head">
            <div className="eyebrow">Overview</div>
            <h2>One program. Three stage-based doors.</h2>
            <p className="lede">
              RKVY RAFTAAR is a single central-government program with three
              stage-based sub-programs inside it. Founders enter at the stage
              that fits them, and the structure allows movement between
              sub-programs as the venture matures - Navyam founders graduate
              into Isanya; Isanya graduates step up to Saranya. Same funder, same
              eligibility envelope, escalating capital.
            </p>
          </div>

          {/* Inline capital ladder diagram */}
          <CapitalLadder />

          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: 13,
              color: "var(--ink-500)",
              marginTop: 16,
              maxWidth: "60ch",
              lineHeight: 1.6,
            }}
          >
            ⓘ Bars are grant ceilings. Dashed line shows the typical graduation
            path - a founder may start at Navyam as a student, move to Isanya
            post-graduation, then enter Saranya once revenue scales. Not every
            founder takes this full path.
          </p>
        </section>

        {/* The Sub-programs */}
        <section className="pd-section" id="vehicles">
          <div className="pd-section__head">
            <div className="eyebrow">Sub-programs</div>
            <h2>Pick the one that matches your stage.</h2>
            <p className="lede">
              All three sit under RKVY RAFTAAR - same funder, same NEATeHUB
              management. They differ on capital ceiling, format, and who
              they&apos;re built for.
            </p>
          </div>

          <div className="vehicles">
            {/* Navyam */}
            <article className="vehicle" id="navyam">
              <div className="vehicle__stage">
                Sub-program 01 · Student stage
              </div>
              <h3>
                Navyam <small>Student stage</small>
              </h3>
              <p className="vehicle__pitch">
                Curriculum-integrated entrepreneurship pathway for student
                founders at AAU and Northeast universities. Sandbox grant, lab
                time, mentor.
              </p>
              <div className="vehicle__spec">
                <div>
                  <div className="k">Grant</div>
                  <div className="v">₹2 L</div>
                </div>
                <div>
                  <div className="k">Duration</div>
                  <div className="v">2 sem.</div>
                </div>
              </div>
              <span className="vehicle__status status-open">
                <span className="dot" /> Annual · Apr 2026
              </span>
              <h4 className="h-section" style={{ marginTop: 14 }}>
                Who this is for
              </h4>
              <ul className="vehicle__criteria">
                <li>Currently enrolled UG / PG student</li>
                <li>At AAU or any NE-region university</li>
                <li>Idea or prototype stage, no revenue expected</li>
              </ul>
              <div className="actions">
                <Link
                  href="/for-founders#apply"
                  className="btn btn-primary btn-sm"
                >
                  Apply to Navyam
                </Link>
              </div>
            </article>

            {/* Isanya */}
            <article className="vehicle" id="isanya">
              <div className="vehicle__stage">Sub-program 02 · Idea stage</div>
              <h3>
                Isanya <small>Idea-stage residential</small>
              </h3>
              <p className="vehicle__pitch">
                An 8-week residential at AAU campus. Cohort of 12 founders,
                full-time, in-residence. Lab access, agronomist mentorship,
                founder community.
              </p>
              <div className="vehicle__spec">
                <div>
                  <div className="k">Grant</div>
                  <div className="v">₹5 L</div>
                </div>
                <div>
                  <div className="k">Duration</div>
                  <div className="v">8 wk</div>
                </div>
              </div>
              <span className="vehicle__status status-open">
                <span className="dot" /> Cohort 7 · Sep 2026
              </span>
              <h4 className="h-section" style={{ marginTop: 14 }}>
                Who this is for
              </h4>
              <ul className="vehicle__criteria">
                <li>Idea or very early prototype, no revenue required</li>
                <li>Solo or two-person teams, NE-rooted preferred</li>
                <li>Can commit full-time, in-residence at Jorhat</li>
              </ul>
              <div className="actions">
                <Link
                  href="/for-founders#apply"
                  className="btn btn-primary btn-sm"
                >
                  Apply to Isanya
                </Link>
              </div>
            </article>

            {/* Saranya (featured, currently open) */}
            <article className="vehicle vehicle--featured" id="saranya">
              <div className="vehicle__stage">
                Sub-program 03 · Growth stage
              </div>
              <h3>
                Saranya <small>Early &amp; growth-stage</small>
              </h3>
              <p className="vehicle__pitch">
                For ventures past pilot with paying customers. Capital up to
                ₹25L, dedicated GTM mentorship, follow-on networks.
                Non-residential. Milestone-tranched capital.
              </p>
              <div className="vehicle__spec">
                <div>
                  <div className="k">Capital</div>
                  <div className="v">₹25 L</div>
                </div>
                <div>
                  <div className="k">Duration</div>
                  <div className="v">12-18 mo</div>
                </div>
              </div>
              <span
                className="vehicle__status"
                style={{
                  background: "rgba(201,120,73,0.2)",
                  color: "var(--copper-500)",
                }}
              >
                <span className="dot" style={{ background: "var(--copper-500)" }} />{" "}
                Cohort 4 · Apply by 30 Jun
              </span>
              <h4
                className="h-section"
                style={{ marginTop: 14, color: "var(--cream-300)" }}
              >
                Who this is for
              </h4>
              <ul className="vehicle__criteria">
                <li>Revenue-generating, ideally ₹10L+ ARR</li>
                <li>All agri-allied sectors, including agri-fintech</li>
                <li>Optional SAFE for longer runway</li>
              </ul>
              <div className="actions">
                <Link
                  href="/for-founders#apply"
                  className="btn btn-primary btn-sm"
                >
                  Apply to Saranya
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Eligibility (program-level) */}
        <section className="pd-section" id="eligibility">
          <div className="pd-section__head">
            <div className="eyebrow">Eligibility</div>
            <h2>The eligibility criteria.</h2>
            <p className="lede">
              These apply to all three sub-programs of RKVY. Sub-program-specific
              additions are listed inside each card above.
            </p>
          </div>

          <div className="elig">
            <aside className="elig__check">
              <h3>Quick check</h3>
              <p>
                Tick these before reading the full criteria. You don&apos;t need
                to pass every line - but you must pass at least four.
              </p>
              <ul className="quick">
                <li>DPIIT-recognised startup</li>
                <li>Incorporated &lt; 7 years</li>
                <li>Working MVP or pilot</li>
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
                    Active recognition from the Department for Promotion of
                    Industry and Internal Trade. If you&apos;re not yet
                    recognised, sort that first - one-form online application,
                    turns around in 2-3 weeks. Navyam (student) applicants are
                    exempt from this requirement.
                  </p>
                </div>
              </li>
              <li>
                <span className="label">Required · 02</span>
                <div>
                  <h4>Incorporated less than 7 years ago</h4>
                  <p>
                    Calculated from the date of incorporation on your MCA filing.
                    Older ventures fall outside the central scheme guidelines.
                  </p>
                </div>
              </li>
              <li>
                <span className="label">Required · 03</span>
                <div>
                  <h4>Working MVP or documented pilot</h4>
                  <p>
                    For Saranya: real users running the product with data. For
                    Isanya: working prototype with at least one validated user
                    interview cycle. For Navyam: a working concept and a
                    feasibility plan.
                  </p>
                </div>
              </li>
              <li>
                <span className="label">Required · 04</span>
                <div>
                  <h4>Agri-allied sector</h4>
                  <p>
                    Agri-input, post-harvest, livestock, fisheries, food
                    processing, agri-services, agri-fintech. If you&apos;re unsure
                    whether your venture qualifies, ask{" "}
                    <Link href="/ask" className="link">
                      our AI
                    </Link>{" "}
                    - it&apos;ll route you correctly.
                  </p>
                </div>
              </li>
              <li>
                <span className="label">Required · 05</span>
                <div>
                  <h4>Indian-citizen founder(s)</h4>
                  <p>
                    Majority equity held by Indian citizens. OCIs eligible.
                    Foreign founders are not, under the central scheme.
                  </p>
                </div>
              </li>
              <li>
                <span className="label">Preferred</span>
                <div>
                  <h4>Operations or pilots in NE India</h4>
                  <p>
                    Not required - RKVY is a central scheme - but weighted
                    positively. If you don&apos;t have NE operations, name a
                    credible plan to develop one.
                  </p>
                </div>
              </li>
              <li className="excludes">
                <span className="label">Excludes</span>
                <div>
                  <h4>
                    Pure trading, distribution, or services without innovation
                    core
                  </h4>
                  <p>
                    If your edge is procurement or geography, this isn&apos;t your
                    program. We look for a technical, process, or product
                    innovation that&apos;s reproducible. ASRLM may be a better fit
                    for producer-aggregation businesses.
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
            <h2>From application to first capital tranche.</h2>
            <p className="lede">
              Same five-step flow across all three sub-programs, with different
              timelines. Saranya: 11 weeks. Isanya: 6 weeks (cohort-driven).
              Navyam: 4 weeks.
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
                  Submit the application form, deck, and pilot data through the
                  portal. We assign a program manager within 5 working days. Tell
                  us which sub-program you&apos;re applying to.
                </p>
              </div>
              <div className="step__meta">
                <div className="k">Your effort</div>
                <div className="v">~6 hrs</div>
              </div>
            </div>
            <div className="step step--done">
              <div className="step__num">02</div>
              <div className="step__body">
                <span className="kicker" style={{ color: "var(--copper-700)" }}>
                  Week 1-3
                </span>
                <h4>First-pass evaluation</h4>
                <p>
                  Internal scoring against the rubric for the specific
                  sub-program. Two-person review. Outcome: Yes / No / Conditional
                  / More-info.
                </p>
              </div>
              <div className="step__meta">
                <div className="k">Advance rate</div>
                <div className="v">
                  ~32% <small>Saranya · varies</small>
                </div>
              </div>
            </div>
            <div className="step step--done">
              <div className="step__num">03</div>
              <div className="step__body">
                <span className="kicker" style={{ color: "var(--copper-700)" }}>
                  Week 4-6
                </span>
                <h4>Deep dive + reference checks</h4>
                <p>
                  Founder interview, two reference calls (one customer, one
                  peer), site visit if accessible. Independent technical review by
                  a sector specialist.
                </p>
              </div>
              <div className="step__meta">
                <div className="k">Your effort</div>
                <div className="v">~10 hrs</div>
              </div>
            </div>
            <div className="step">
              <div className="step__num">04</div>
              <div className="step__body">
                <span className="kicker" style={{ color: "var(--copper-700)" }}>
                  Week 7-9
                </span>
                <h4>Selection committee + RKVY MAC review</h4>
                <p>
                  Internal committee selects; approved ventures go to RKVY
                  Monitoring &amp; Advisory Committee for formal clearance. We
                  don&apos;t control the central-government calendar here.
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
                  Week 10-11
                </span>
                <h4>Onboarding + Tranche 1</h4>
                <p>
                  Sign the engagement letter, set the milestone plan with your
                  principal mentor, receive Tranche 1 (varies: ₹1L for Navyam,
                  ₹2L for Isanya, ₹5L for Saranya).
                </p>
              </div>
              <div className="step__meta">
                <div className="k">First capital</div>
                <div className="v">₹1L - ₹5L</div>
              </div>
            </div>
          </div>
        </section>

        {/* Past cohorts */}
        <section className="pd-section" id="cohorts">
          <div className="pd-section__head">
            <div className="eyebrow">Past cohorts</div>
            <h2>Six years, 124 ventures.</h2>
            <p className="lede">
              Across the three sub-programs. Some are still in-program, some have
              exited, some have raised follow-on equity. A handful have wound
              down.
            </p>
          </div>

          <div className="cohorts">
            <div className="cohort">
              <div className="photo photo-tea">
                <div className="photo-label">
                  PHOTO: 2024 Saranya cohort group portrait
                </div>
              </div>
              <div className="cohort__body">
                <div className="cohort__year">FY2024 · Saranya Cohort 2</div>
                <div className="cohort__title">12 ventures funded</div>
                <p
                  style={{
                    color: "var(--ink-700)",
                    fontSize: 14,
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  Post-harvest-heavy. Two are at Series A discussions; one wound
                  down. ₹2.4Cr deployed.
                </p>
                <div className="cohort__stats">
                  <div>
                    <div className="k">Funded</div>
                    <div className="v">12</div>
                  </div>
                  <div>
                    <div className="k">Capital</div>
                    <div className="v">₹2.4Cr</div>
                  </div>
                  <div>
                    <div className="k">Active</div>
                    <div className="v">11</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cohort">
              <div className="photo">
                <div className="photo-label">
                  PHOTO: Isanya Cohort 6 residential opening
                </div>
              </div>
              <div className="cohort__body">
                <div className="cohort__year">FY2024 · Isanya Cohort 6</div>
                <div className="cohort__title">12 founders, 10 ventures</div>
                <p
                  style={{
                    color: "var(--ink-700)",
                    fontSize: 14,
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  Two teams merged mid-cohort. Six advanced to Saranya in FY25.
                  ₹50L deployed.
                </p>
                <div className="cohort__stats">
                  <div>
                    <div className="k">Funded</div>
                    <div className="v">10</div>
                  </div>
                  <div>
                    <div className="k">Capital</div>
                    <div className="v">₹50L</div>
                  </div>
                  <div>
                    <div className="k">→ Saranya</div>
                    <div className="v">6</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cohort">
              <div className="photo photo-copper">
                <div className="photo-label">
                  PHOTO: Navyam student showcase, AAU
                </div>
              </div>
              <div className="cohort__body">
                <div className="cohort__year">FY2024 · Navyam</div>
                <div className="cohort__title">28 student projects</div>
                <p
                  style={{
                    color: "var(--ink-700)",
                    fontSize: 14,
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  Cohort drawn from AAU + 4 NE universities. Three projects
                  fast-tracked into Isanya. ₹56L sandbox capital.
                </p>
                <div className="cohort__stats">
                  <div>
                    <div className="k">Projects</div>
                    <div className="v">28</div>
                  </div>
                  <div>
                    <div className="k">Capital</div>
                    <div className="v">₹56L</div>
                  </div>
                  <div>
                    <div className="k">→ Isanya</div>
                    <div className="v">3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured ventures */}
        <section className="pd-section" id="ventures">
          <div className="pd-section__head">
            <div className="eyebrow">Featured ventures</div>
            <h2>Three founders, three sub-programs, in their words.</h2>
          </div>

          <div className="feat-vens">
            <Link className="feat-ven" href="/portfolio/kaziranga-bio">
              <div className="photo photo-tea">
                <div className="photo-label">
                  PHOTO: Kaziranga Bio founder in tea estate
                </div>
              </div>
              <div className="feat-ven__body">
                <div className="feat-ven__name">Kaziranga Bio</div>
                <div className="feat-ven__sector">Bio-inputs · Saranya &apos;24</div>
                <p className="feat-ven__quote">
                  &quot;NEATeHUB&apos;s mistake-budget is what got us out of the
                  lab and into nine actual gardens. Most accelerators don&apos;t
                  fund honest failure.&quot;
                </p>
              </div>
            </Link>
            <Link className="feat-ven" href="/portfolio">
              <div className="photo">
                <div className="photo-label">
                  PHOTO: Mati Labs founder with mobile soil-test rig
                </div>
              </div>
              <div className="feat-ven__body">
                <div className="feat-ven__name">Mati Labs</div>
                <div className="feat-ven__sector">Soil testing · Isanya &apos;25</div>
                <p className="feat-ven__quote">
                  &quot;Eight weeks of in-residence was relentless. We came in
                  with a sensor pack idea and left with a working mobile test rig
                  and KVK pilots queued.&quot;
                </p>
              </div>
            </Link>
            <Link className="feat-ven" href="/portfolio">
              <div className="photo photo-copper">
                <div className="photo-label">
                  PHOTO: Navyam student team at AAU showcase
                </div>
              </div>
              <div className="feat-ven__body">
                <div className="feat-ven__name">Pukhuri Fish</div>
                <div className="feat-ven__sector">
                  Aquaculture · Navyam &apos;23 → Isanya &apos;24
                </div>
                <p className="feat-ven__quote">
                  &quot;Started as a final-year project. Navyam&apos;s ₹2L bought
                  us our first sensor units; Isanya turned it into a real
                  venture.&quot;
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="pd-section" id="faq">
          <div className="pd-section__head">
            <div className="eyebrow">FAQ</div>
            <h2>Questions we get most often.</h2>
          </div>

          <div className="faq">
            <details className="faq-item" open>
              <summary>
                Should I apply to RKVY, or to a specific sub-program (Isanya /
                Saranya / Navyam)?
              </summary>
              <div className="a">
                <p>
                  Apply to the sub-program, not the parent. RKVY RAFTAAR is the
                  funder framework; Isanya / Saranya / Navyam are the doors you
                  actually walk through. The application form has a sub-program
                  dropdown - pick the one that matches your stage.
                </p>
                <p>
                  If you&apos;re not sure which one fits, run the eligibility
                  wizard. It will route you to a specific sub-program.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Can I move from one sub-program to another?</summary>
              <div className="a">
                <p>
                  Yes - that&apos;s the whole point of the structure. Navyam
                  graduates can apply directly to Isanya without going through the
                  full intake again. Isanya alumni get a fast-track to Saranya
                  when they hit the revenue threshold. About 30% of our Saranya
                  cohort came from Isanya.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Is the ₹25L a single payment?</summary>
              <div className="a">
                <p>
                  No. Across sub-programs, capital is released in milestone-linked
                  tranches. Saranya: 3 tranches over 12-18 months. Isanya: 2
                  tranches over 8 weeks. Navyam: usually 1-2 tranches over 2
                  semesters. Each tranche is gated on the milestone plan we set
                  together in week 1.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Do I have to relocate to Jorhat?</summary>
              <div className="a">
                <p>
                  Only for Isanya - it&apos;s residential by design. Saranya and
                  Navyam are non-residential. You&apos;ll visit Jorhat for
                  quarterly reviews regardless.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>What&apos;s the equity expectation?</summary>
              <div className="a">
                <p>
                  RKVY is non-dilutive - we take no equity across any of the three
                  sub-programs. The optional SAFE we offer with Saranya is exactly
                  that: optional, and only for ventures that want longer runway.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                What happens if my venture isn&apos;t a fit for any sub-program?
              </summary>
              <div className="a">
                <p>
                  We route - not reject. If RKVY&apos;s sub-programs don&apos;t
                  fit, we check AIC, ASRLM, AAU Student First, and Build Club. If
                  nothing fits, we tell you why and suggest who else might. Edge
                  cases route to a callback, not a form letter.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* Apply CTA */}
        <section className="pd-section" id="apply">
          <div className="apply-cta">
            <div>
              <div className="eyebrow" style={{ color: "var(--copper-500)" }}>
                Apply now
              </div>
              <h2>
                Rolling intake across all three sub-programs. Decision in 4-11
                weeks.
              </h2>
              <p>
                The single RKVY RAFTAAR application form lets you flag interest in
                one or more sub-programs. The next Saranya review batch closes{" "}
                <strong style={{ color: "var(--cream-50)" }}>
                  30 June 2026
                </strong>
                . Isanya Cohort 7 opens applications in{" "}
                <strong style={{ color: "var(--cream-50)" }}>August</strong>.
              </p>
              <div className="row mt-3">
                <a href="#" className="btn btn-copper btn-lg">
                  Start application <span className="arrow">→</span>
                </a>
                <a href="#" className="btn btn-ghost btn-lg">
                  Download program brief (PDF)
                </a>
              </div>
            </div>
            <div className="apply-cta__deadline">
              <div className="k">Saranya · Next cycle closes</div>
              <div className="v">30 Jun 2026</div>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 13,
                  color: "var(--cream-300)",
                  margin: "14px 0 0",
                  lineHeight: 1.6,
                }}
              >
                Average elapsed time from Saranya application to first capital
                tranche: 11 weeks. Isanya: 6. Navyam: 4.
              </p>
            </div>
          </div>
        </section>

        {/* Related (other programs) */}
        <section className="pd-section">
          <div className="pd-section__head">
            <div className="eyebrow">Not quite the right fit?</div>
            <h2>Other programs we run.</h2>
          </div>
          <div className="related">
            <Link href="/programs/aic" className="related-card">
              <div className="num">National</div>
              <h3>AIC · NITI Aayog</h3>
              <p>
                National-level recognition under Atal Innovation Mission. Pan-India
                mentor network, separate funder.
              </p>
              <div className="meta">Quarterly intake</div>
            </Link>
            <Link href="/programs/asrlm" className="related-card">
              <div className="num">State · Producer-led</div>
              <h3>ASRLM</h3>
              <p>
                Assam State Rural Livelihoods. FPOs, SHGs, producer-aggregation
                ventures.
              </p>
              <div className="meta">Continuous</div>
            </Link>
            <Link href="/programs/build-club" className="related-card">
              <div className="num">Deep-tech</div>
              <h3>Build Club</h3>
              <p>
                Joint program with IIT Guwahati for engineering-heavy agri
                founders. Robotics, sensing, ML.
              </p>
              <div className="meta">Closed · Reopens Q3</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
