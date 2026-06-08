import Link from "next/link";
import "./home.css";
import NewsletterForm from "./components/NewsletterForm";

function RowArrow() {
  return (
    <span className="arrow">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__copy">
              <div className="eyebrow">
                A Section-8 incubator at AAU, Jorhat · Est. 2018
              </div>
              <h1>
                We back <em>agri-founders</em> from the{" "}
                <span className="copper">Northeast.</span>
              </h1>
              <p>
                NEATeHUB is a government-recognised Centre of Excellence backing
                ventures across agriculture, food, livestock, fisheries, and
                rural enterprise — backed by NITI Aayog, the Ministry of
                Agriculture &amp; Farmers&apos; Welfare, DAY-NRLM, AAU and IIT
                Guwahati.
              </p>
              <div className="hero__actions">
                <Link href="/for-founders#apply" className="btn btn-primary btn-lg">
                  Apply to a program <span className="arrow">→</span>
                </Link>
                <Link href="/portfolio" className="btn btn-ghost btn-lg">
                  See the portfolio
                </Link>
              </div>
            </div>
            <div className="hero__media">
              <div className="photo photo-tea">
                <div className="photo-label">
                  PHOTO: Founder in an Assam tea estate, golden hour
                </div>
              </div>
              <div className="hero__badge">
                <span className="ring">↑</span>
                <span className="t">
                  <strong>250+ ventures backed</strong>
                  <span>across 8 NE states</span>
                </span>
              </div>
            </div>
          </div>

          <div className="hero__strip reveal">
            <div>
              <div className="num">
                250<sup>+</sup>
              </div>
              <div className="lbl">Startups incubated</div>
            </div>
            <div>
              <div className="num">
                70<sup>+</sup>
              </div>
              <div className="lbl">Funded ventures</div>
            </div>
            <div>
              <div className="num">
                ₹7Cr<sup>+</sup>
              </div>
              <div className="lbl">Grant-in-aid deployed</div>
            </div>
            <div>
              <div className="num">8</div>
              <div className="lbl">NE states served</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ AUDIENCE ROUTING ============ */}
      <section className="tight" style={{ paddingTop: 0 }}>
        <div className="container-wide" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className="row-between" style={{ padding: "0 var(--gutter) 24px" }}>
            <h2 className="h-section">Find your way in</h2>
            <span className="kicker">04 paths</span>
          </div>
          <nav className="audience" aria-label="Audience navigation">
            <Link href="/for-founders">
              <div className="audience__num">01 / Founders</div>
              <div>
                <div className="audience__title">
                  I&apos;m building<br />an agri-venture.
                </div>
                <p className="audience__desc">
                  See programs, grants, eligibility, and the pathway from idea to
                  funded company.
                </p>
                <div className="audience__cta mt-2">For Founders →</div>
              </div>
            </Link>
            <Link href="/portfolio">
              <div className="audience__num">02 / Funders &amp; Govt</div>
              <div>
                <div className="audience__title">
                  I&apos;m evaluating<br />the portfolio.
                </div>
                <p className="audience__desc">
                  Track record, impact reports, governance, and the ventures
                  we&apos;ve backed.
                </p>
                <div className="audience__cta mt-2">Portfolio &amp; Impact →</div>
              </div>
            </Link>
            <Link href="/about#partners">
              <div className="audience__num">03 / Mentors &amp; Partners</div>
              <div>
                <div className="audience__title">
                  I want to<br />contribute.
                </div>
                <p className="audience__desc">
                  Mentor a cohort, host a session, partner on a program, or list
                  infrastructure.
                </p>
                <div className="audience__cta mt-2">Partner with us →</div>
              </div>
            </Link>
            <Link href="/ask">
              <div className="audience__num">04 / Anyone</div>
              <div>
                <div className="audience__title">
                  I have a<br />specific question.
                </div>
                <p className="audience__desc">
                  Ask our AI assistant about eligibility, programs, or how the
                  incubation works.
                </p>
                <div className="audience__cta mt-2">Ask NEATeHUB AI →</div>
              </div>
            </Link>
          </nav>
        </div>
      </section>

      {/* ============ PROGRAMS PREVIEW ============ */}
      <section>
        <div className="container">
          <div className="row-between mt-0">
            <div>
              <div className="eyebrow">Section 02</div>
              <h2 className="display display-m mt-2" style={{ marginBottom: 0 }}>
                Programs that fit your stage.
              </h2>
              <p className="lede mt-2">
                Five active programs spanning idea-stage residencies to
                growth-stage capital, plus specialised tracks for students,
                women, and Northeast-focused startups.
              </p>
            </div>
            <Link href="/programs" className="btn btn-ghost">
              All programs <span className="arrow">→</span>
            </Link>
          </div>

          <div className="programs-list mt-5">
            <Link href="/programs/aic" className="program-row">
              <span className="idx">01 / National</span>
              <div className="name">
                AIC <small>Atal Incubation Centre · NITI Aayog</small>
              </div>
              <div className="desc">
                National-level incubation. Pan-India mentor network, seed support
                and a dedicated AIM/AIC corpus.
              </div>
              <div className="meta">Quarterly intake</div>
              <RowArrow />
            </Link>
            <Link href="/programs/rkvy-raftaar" className="program-row">
              <span className="idx">02 / Central</span>
              <div className="name">
                RKVY RAFTAAR{" "}
                <small>Ministry of Agriculture &amp; Farmers&apos; Welfare</small>
              </div>
              <div className="desc">
                A central-government program with three stage-based sub-programs
                (Navyam, Isanya, Saranya). Capital from ₹2L to ₹25L by stage.
              </div>
              <div className="meta">Rolling intake</div>
              <RowArrow />
            </Link>
            <Link href="/programs/asrlm" className="program-row">
              <span className="idx">03 / State</span>
              <div className="name">
                ASRLM{" "}
                <small>Assam State Rural Livelihoods Mission · DAY-NRLM</small>
              </div>
              <div className="desc">
                Rural enterprise program for FPOs, producer-led startups, and
                livelihoods innovation.
              </div>
              <div className="meta">Continuous</div>
              <RowArrow />
            </Link>
            <Link href="/programs/student-first" className="program-row">
              <span className="idx">04 / Campus</span>
              <div className="name">
                AAU Student First <small>Assam Agricultural University</small>
              </div>
              <div className="desc">
                Pre-incubation program for students. Workshops, sandbox grants,
                founder office hours.
              </div>
              <div className="meta">Annual · Aug</div>
              <RowArrow />
            </Link>
            <Link href="/programs/build-club" className="program-row">
              <span className="idx">05 / Deep-tech</span>
              <div className="name">
                Build Club <small>TIC-IITG &amp; AISF · with IIT Guwahati</small>
              </div>
              <div className="desc">
                Robotics, sensing, machine learning for agri systems.
                Engineering-heavy founders only.
              </div>
              <div className="meta">Closed · Reopens Q3</div>
              <RowArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FOCUS AREAS ============ */}
      <section className="bg-tea focus">
        <div className="container">
          <div className="focus__head">
            <div>
              <div className="eyebrow" style={{ color: "var(--copper-500)" }}>
                Our focus areas
              </div>
              <h2
                className="display display-m mt-2"
                style={{ color: "var(--cream-50)" }}
              >
                Six sectors where we go deep.
              </h2>
            </div>
            <p className="lede" style={{ color: "var(--cream-100)", margin: 0 }}>
              We don&apos;t back everything. These are the agri-allied sectors
              where our labs, mentors, and producer networks give founders a
              real, durable edge.
            </p>
          </div>

          <div className="focus__grid">
            <Link className="focus-card" href="/for-founders">
              <span className="focus-card__icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M13 23c0-6 0-10 5-13M13 23c0-6 0-9-5-12M13 23V11" />
                  <path d="M13 11c0-3 2-5 6-6-1 4-3 6-6 6zM13 13c0-3-2-4-6-5 1 4 3 5 6 5z" />
                </svg>
              </span>
              <h3>Agri-Input</h3>
              <p>Bio-stimulants, seeds, soil health, and crop-protection innovation.</p>
              <span className="focus-card__n">68 ventures</span>
            </Link>
            <Link className="focus-card" href="/for-founders">
              <span className="focus-card__icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="4" y="8" width="18" height="13" rx="1.5" />
                  <path d="M4 12h18M9 8V5h8v3M13 15v3" />
                </svg>
              </span>
              <h3>Post-Harvest</h3>
              <p>Cold-chain, storage, grading, and aggregation routing.</p>
              <span className="focus-card__n">42 ventures</span>
            </Link>
            <Link className="focus-card" href="/for-founders">
              <span className="focus-card__icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <circle cx="13" cy="9" r="4" />
                  <path d="M5 22c0-4 3.5-7 8-7s8 3 8 7" />
                </svg>
              </span>
              <h3>Livestock</h3>
              <p>Dairy, poultry, and small-ruminant productivity and aggregation.</p>
              <span className="focus-card__n">31 ventures</span>
            </Link>
            <Link className="focus-card" href="/for-founders">
              <span className="focus-card__icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M3 13c5-6 15-6 20 0-5 6-15 6-20 0z" />
                  <circle cx="17" cy="13" r="1.3" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <h3>Aquaculture</h3>
              <p>Fish, prawn, and ornamental systems with sensing and feed innovation.</p>
              <span className="focus-card__n">22 ventures</span>
            </Link>
            <Link className="focus-card" href="/for-founders">
              <span className="focus-card__icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M6 10h14l-1.5 11h-11L6 10z" />
                  <path d="M9 10V7a4 4 0 0 1 8 0v3" />
                </svg>
              </span>
              <h3>Food Processing</h3>
              <p>Value-addition, packaging, and Northeast-origin food brands.</p>
              <span className="focus-card__n">54 ventures</span>
            </Link>
            <Link className="focus-card" href="/for-founders">
              <span className="focus-card__icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="4" y="6" width="18" height="13" rx="2" />
                  <path d="M4 11h18M8 15h4" />
                </svg>
              </span>
              <h3>Rural Fintech</h3>
              <p>Credit, insurance, and digital infrastructure for producers.</p>
              <span className="focus-card__n">18 ventures</span>
            </Link>
          </div>

          <div className="focus__foot">
            <Link href="/for-founders" className="btn btn-cream">
              See how we support founders <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ PORTFOLIO TEASER ============ */}
      <section>
        <div className="container">
          <div className="row-between">
            <div>
              <div className="eyebrow">Section 04</div>
              <h2 className="display display-m mt-2">
                A portfolio with weather on it.
              </h2>
              <p className="lede mt-2">
                Real companies serving real producers — agri-input innovation,
                post-harvest tech, livestock, aquaculture, food processing, and
                rural fintech.
              </p>
            </div>
            <Link href="/portfolio" className="btn btn-ghost">
              Browse all 250+ <span className="arrow">→</span>
            </Link>
          </div>

          <div className="pf-grid mt-5">
            <Link className="pf-card" href="/portfolio/kaziranga-bio">
              <div className="photo photo-tea" style={{ aspectRatio: "4/5" }}>
                <div className="photo-label">
                  PHOTO: Founder in tea estate, golden hour
                </div>
              </div>
              <div className="meta">
                <div className="name">Kaziranga Bio</div>
                <div className="sector">Bio-inputs · Saranya &apos;24</div>
              </div>
            </Link>
            <Link className="pf-card" href="/portfolio">
              <div className="photo" style={{ aspectRatio: "4/5" }}>
                <div className="photo-label">
                  PHOTO: Post-harvest cold-chain unit, Jorhat
                </div>
              </div>
              <div className="meta">
                <div className="name">Thalo Cold</div>
                <div className="sector">Post-harvest · RKVY &apos;23</div>
              </div>
            </Link>
            <Link className="pf-card" href="/portfolio">
              <div className="photo photo-copper" style={{ aspectRatio: "4/5" }}>
                <div className="photo-label">
                  PHOTO: Fish-feed lab close-up, Tezpur
                </div>
              </div>
              <div className="meta">
                <div className="name">Brahma Aqua</div>
                <div className="sector">Aquaculture · AIC &apos;24</div>
              </div>
            </Link>
            <Link className="pf-card" href="/portfolio">
              <div className="photo" style={{ aspectRatio: "4/5" }}>
                <div className="photo-label">
                  PHOTO: Mobile soil-test rig in field
                </div>
              </div>
              <div className="meta">
                <div className="name">Mati Labs</div>
                <div className="sector">Ag-input testing · Isanya &apos;25</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ LEADERSHIP MESSAGE ============ */}
      <section className="bg-cream-100">
        <div className="container">
          <div className="leader">
            <div className="photo" aria-hidden="true">
              <div className="photo-label">
                PHOTO: Director portrait, lab background, eye level, available
                light
              </div>
            </div>
            <div className="reveal">
              <div className="eyebrow">From the Director</div>
              <blockquote className="mt-3">
                Agriculture in the Northeast is not a sector — it is the
                substrate. We back the founders who understand that, and we give
                them the institutional weight, the capital, and the time to build
                something durable.
              </blockquote>
              <div className="leader__attr">
                <div className="name">Dr. A.K. Bhattacharyya</div>
                <div className="title">Director · NEATeHUB</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ NEWS + EVENTS ============ */}
      <section>
        <div className="container">
          <div className="row-between">
            <div>
              <div className="eyebrow">Section 05</div>
              <h2 className="display display-m mt-2">Newsroom &amp; events.</h2>
            </div>
            <Link href="/insights" className="btn btn-ghost">
              All insights <span className="arrow">→</span>
            </Link>
          </div>

          <div className="news-grid mt-5">
            <article className="news-feature">
              <Link href="/insights/fy26-cohort-post-harvest">
                <div className="photo">
                  <div className="photo-label">
                    PHOTO: Founders presenting at Demo Day, AAU auditorium
                  </div>
                </div>
                <div className="news-feature__meta">
                  <span className="badge badge-copper">Feature</span>
                  <span>May 14, 2026 · 8 min read</span>
                </div>
                <h3>
                  What the FY26 cohort taught us about post-harvest losses in the
                  Northeast.
                </h3>
                <p>
                  Twelve founders, four sectors, one stubborn truth — cold-chain
                  isn&apos;t a product problem, it&apos;s a routing problem. Notes
                  from a year of building with them.
                </p>
                <span className="news-feature__cta">Read the story →</span>
              </Link>
            </article>

            <div className="news-list">
              <Link className="news-row" href="/insights/events/saranya-26-open-house">
                <span className="news-row__tag tag-event">Event</span>
                <div className="news-row__body">
                  <h4>Saranya &apos;26 Founder Open House</h4>
                  <div className="news-row__meta">14 Jun · Jorhat, AAU</div>
                </div>
                <span className="news-row__arrow">→</span>
              </Link>
              <Link className="news-row" href="/insights">
                <span className="news-row__tag tag-news">News</span>
                <div className="news-row__body">
                  <h4>
                    NEATeHUB recognised as Centre of Excellence by DA&amp;FW.
                  </h4>
                  <div className="news-row__meta">02 May · Press</div>
                </div>
                <span className="news-row__arrow">→</span>
              </Link>
              <Link className="news-row" href="/insights">
                <span className="news-row__tag tag-event">Event</span>
                <div className="news-row__body">
                  <h4>Mentor-in-residence: Aqua-feed innovation</h4>
                  <div className="news-row__meta">28 Jun · Online</div>
                </div>
                <span className="news-row__arrow">→</span>
              </Link>
              <Link className="news-row" href="/insights">
                <span className="news-row__tag tag-insight">Insight</span>
                <div className="news-row__body">
                  <h4>FY25 Impact Report: ₹7Cr deployed, 70 funded.</h4>
                  <div className="news-row__meta">12 Apr · Report</div>
                </div>
                <span className="news-row__arrow">→</span>
              </Link>
              <Link className="news-row" href="/insights">
                <span className="news-row__tag tag-news">News</span>
                <div className="news-row__body">
                  <h4>Robotics Lab inauguration with AAU &amp; state govt.</h4>
                  <div className="news-row__meta">08 Apr · Partnership</div>
                </div>
                <span className="news-row__arrow">→</span>
              </Link>
              <Link className="news-row" href="/insights">
                <span className="news-row__tag tag-event">Event</span>
                <div className="news-row__body">
                  <h4>KVK roundtable: producer-side innovation</h4>
                  <div className="news-row__meta">18 Jul · Tezpur</div>
                </div>
                <span className="news-row__arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PARTNERS ============ */}
      <section className="tight">
        <div className="container">
          <div className="row-between">
            <h2 className="h-section">Funded &amp; supported by</h2>
            <span className="kicker">Logos to be supplied</span>
          </div>
        </div>
        <div className="partners-strip mt-3">
          <div className="partners-strip__track">
            <span className="partner-mark">RKVY RAFTAAR</span>
            <span className="partner-mark">NITI Aayog · AIM</span>
            <span className="partner-mark">ASRLM</span>
            <span className="partner-mark">Assam Agricultural University</span>
            <span className="partner-mark">DA&amp;FW · Govt of India</span>
            <span className="partner-mark">Govt of Assam</span>
            <span className="partner-mark">DST · NSTEDB</span>
            <span className="partner-mark">ICAR</span>
            {/* duplicate for seamless loop */}
            <span className="partner-mark">RKVY RAFTAAR</span>
            <span className="partner-mark">NITI Aayog · AIM</span>
            <span className="partner-mark">ASRLM</span>
            <span className="partner-mark">Assam Agricultural University</span>
            <span className="partner-mark">DA&amp;FW · Govt of India</span>
            <span className="partner-mark">Govt of Assam</span>
            <span className="partner-mark">DST · NSTEDB</span>
            <span className="partner-mark">ICAR</span>
          </div>
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section className="tight">
        <div className="container">
          <div className="newsletter reveal">
            <div>
              <div className="eyebrow">Newsletter</div>
              <h3 className="display display-s mt-2" style={{ marginBottom: 0 }}>
                Quarterly notes from the incubator.
              </h3>
              <p className="lede mt-2">
                What we&apos;re seeing in cohorts, open calls, mentor sessions,
                and what&apos;s coming next. No spam. Four times a year,
                that&apos;s it.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
