import type { Metadata } from "next";
import Link from "next/link";
import "./insight-detail.css";
import NewsletterForm from "../../components/NewsletterForm";

export const metadata: Metadata = {
  title: "Insight",
  description:
    "What the FY26 cohort taught us about post-harvest losses in the Northeast — field notes from NEATeHUB.",
};

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await params;

  return (
    <>
      <nav className="crumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">/</span>
        <Link href="/insights">Insights</Link>
        <span className="sep">/</span>
        <span className="cur">FY26 post-harvest field notes</span>
      </nav>

      <article className="article">
        {/* Article head */}
        <header className="article__head">
          <div className="article__meta-row">
            <span className="badge badge-copper">Feature</span>
            <span>Field Notes</span>
            <span>·</span>
            <span>14 May 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1>
            What the FY26 cohort taught us about post-harvest losses in the
            Northeast.
          </h1>
          <p className="article__dek">
            Twelve founders. Four sectors. One stubborn truth - cold-chain
            isn&apos;t a product problem, it&apos;s a routing problem. Notes from
            a year of building with them, the assumptions we got wrong, and
            what&apos;s worth replicating in FY27.
          </p>

          <div className="article__byline">
            <div className="av">PS</div>
            <div className="who">
              <strong>Dr. P. Saikia</strong>
              <div className="role">Director - Operations · NEATeHUB</div>
            </div>
            <div className="actions">
              <button className="share-btn" aria-label="Copy link">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 9l4-4M3 7L1.5 8.5a2 2 0 0 0 2.8 2.8L6 9.5M8 4.5L9.5 3a2 2 0 0 1 2.8 2.8L11 7"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                </svg>
              </button>
              <button className="share-btn" aria-label="Share">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="3" cy="7" r="2" stroke="currentColor" strokeWidth="1.4" />
                  <circle cx="11" cy="3" r="2" stroke="currentColor" strokeWidth="1.4" />
                  <circle cx="11" cy="11" r="2" stroke="currentColor" strokeWidth="1.4" />
                  <path
                    d="M4.7 8 9.3 10M4.7 6 9.3 4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                </svg>
              </button>
              <button className="share-btn" aria-label="Bookmark">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 1h8v12l-4-3-4 3V1z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Hero figure */}
        <figure className="article__hero">
          <div className="photo">
            <div className="photo-label">
              PHOTO: Cold-chain micro-unit at FPO collection point, Tezpur - wide
              shot, mid-morning daylight, farmers loading produce
            </div>
          </div>
          <figcaption>
            An FPO-operated cold-chain micro-unit in Tezpur, May 2025. Three of
            the FY26 cohort&apos;s twelve founders ended up here, asking the same
            question - why is this empty half the year?
          </figcaption>
        </figure>

        {/* Body */}
        <div className="article__body">
          <p>
            Twelve months ago, when we kicked off the FY26 Saranya cohort, we
            believed - collectively, naively - that post-harvest loss in the
            Northeast was a refrigeration problem. Buy more chillers, run more
            cold-rooms, lose less produce. The cohort included three ventures
            explicitly working on this thesis, and we&apos;d been telling our
            funders the same story for two years.
          </p>

          <p>That story collapsed by month four.</p>

          <p>
            Not because cold-chain doesn&apos;t matter - it does - but because
            the binding constraint isn&apos;t temperature. It&apos;s routing. The
            chillers exist. The cold-rooms exist. What&apos;s missing is a way to
            get small producers&apos; output into the cold-chain in the first
            four hours after harvest, when it actually matters. And the reason
            that&apos;s missing is not lack of equipment. It&apos;s lack of
            aggregation routing - the slow, unglamorous work of getting a cluster
            of fifteen smallholders to bring their produce to a single point on
            the same morning.
          </p>

          <h2>The data, briefly.</h2>

          <p>
            Before the cohort, we ran a baseline survey across 42 FPOs in five NE
            states. The headline numbers:
          </p>

          <div className="stat-block">
            <div>
              <div className="num">31%</div>
              <div className="lbl">
                Average post-harvest loss across sampled FPOs (perishable
                produce, 2024 monsoon season)
              </div>
            </div>
            <div>
              <div className="num">68%</div>
              <div className="lbl">
                Of FPOs with chilling infrastructure reported under-utilisation
                &gt; 40%
              </div>
            </div>
            <div>
              <div className="num">4 hrs</div>
              <div className="lbl">
                Window from harvest to chilling for produce to retain Grade A
                classification
              </div>
            </div>
          </div>

          <p>
            The 68% number is the one that surprised us. Cold-chain
            infrastructure exists, in significant volume, across the Northeast -
            built up over the last decade by state-government and central
            schemes. But it&apos;s running at less than half capacity. So if you
            ship a new chiller into a district, you&apos;re not solving the
            binding constraint. You&apos;re stacking inventory on top of an
            under-utilised asset.
          </p>

          <p>
            Three ventures in the FY26 cohort came in pitching new cold-chain
            hardware. By month six, all three had pivoted - not away from
            cold-chain entirely, but toward aggregation routing as the upstream
            layer.
          </p>

          <h3>Routing is the actual product.</h3>

          <p>
            The most interesting venture in the cohort, on this thesis, is{" "}
            <Link href="/portfolio">Thalo Cold</Link>. They started with a
            sensor-instrumented solar chiller - clever hardware, lab-validated,
            won them a national award. By month four, they&apos;d pivoted: the
            chiller stayed, but the actual product became a WhatsApp-based
            aggregation router. Smallholders get an SMS at 5am - &ldquo;Bring 2kg
            to the road junction by 6:30, Ashok ji is collecting.&rdquo; The
            chiller is downstream of the routing layer, not upstream.
          </p>

          <blockquote>
            The chiller works. We were never the bottleneck. The bottleneck was
            knowing which day to fire it up.
            <cite>Ashish Bora · Thalo Cold</cite>
          </blockquote>

          <p>
            This pattern - hardware that turns out to be incidental to the actual
            product - repeated across three of the four cohort sectors. In
            aquaculture, it was sensor packs whose real value turned out to be
            the dashboard, not the sensors. In tea, it was bio-input formulation
            that mattered less than the deployment relationship. The pattern is
            consistent enough that we now ask every new applicant: &ldquo;If we
            removed the hardware, what&apos;s left? If something&apos;s still
            left, that&apos;s your business.&rdquo;
          </p>

          <figure className="article__fig">
            <div className="photo photo-tea">
              <div className="photo-label">
                PHOTO: WhatsApp screenshot recreation showing aggregation routing
                messages between Thalo Cold field-op and producer cluster, 5am
                timestamp visible
              </div>
            </div>
            <figcaption>
              The actual interface that runs Thalo Cold&apos;s aggregation
              routing. Built in WhatsApp, deployed across 14 producer clusters,
              generating Grade A-rated produce flow into existing cold-chain
              infrastructure.
            </figcaption>
          </figure>

          <h2>What we got wrong.</h2>

          <p>Three things, in order of how badly:</p>

          <p>
            <strong>One:</strong> we underestimated the cost-of-trust problem.
            Most rural-enterprise ventures we&apos;d backed previously had built
            trust slowly, over years, through a single producer cluster. We
            assumed FY26 would follow that pattern. Instead, the cohort showed us
            that founders who came from outside the Northeast - even with capital,
            even with technology, even with NEATeHUB introductions - could not
            close trust gaps faster than 14 months on average. That&apos;s a real
            number we now plan around.
          </p>

          <p>
            <strong>Two:</strong> we over-scoped the residential component.
            Isanya runs as an 8-week residential, and we&apos;d talked about
            extending it to 12 weeks based on prior cohort feedback. The FY26
            numbers say the opposite - by week 6, founders were antsy to deploy.
            The remaining two weeks of the residential added less than they cost
            in deployment delay. FY27 will shorten Isanya to 6 weeks and add a
            structured 4-week deployment phase instead.
          </p>

          <p>
            <strong>Three:</strong> we under-budgeted for failure. Two of the
            twelve FY26 ventures wound down - one because the founder team broke
            up, one because the unit economics didn&apos;t pencil out at our
            cohort&apos;s geographic reach. We had budgeted for one. Two is not
            catastrophic, but it&apos;s a planning miss, and it means we
            under-staffed our exit support. FY27&apos;s cohort budget includes
            one full-time wind-down advisor.
          </p>

          <h3>What we&apos;d replicate.</h3>

          <p>
            The single highest-leverage thing we did in FY26 was the
            cross-venture office hours. Every Tuesday, all twelve founders met for
            ninety minutes - not with mentors, with each other. No agenda. We took
            notes for the first three weeks, then stopped, because the founders
            had built their own structure. By month four they were running pilot
            exchanges with each other - &ldquo;I&apos;ll test your sensor pack at
            my aquaculture site if you&apos;ll trial my routing logic at your
            aggregation point.&rdquo; This was unplanned and probably the most
            generative thing we ran all year.
          </p>

          <p>FY27 keeps that, untouched, by mandate.</p>

          <h2>What&apos;s next.</h2>

          <p>
            We&apos;re carrying twelve open hypotheses into FY27, derived from
            this cohort. We&apos;ll publish the full list with the FY26 Impact
            Report in September. The three that are most likely to shape program
            structure:
          </p>

          <ol>
            <li>
              <strong>
                Aggregation routing is the wedge for any rural-enterprise
                venture.
              </strong>{" "}
              If your venture doesn&apos;t have an answer to &ldquo;how do you get
              the producer&apos;s output to your product in four hours?&rdquo; -
              that&apos;s the first product feature, not the last.
            </li>
            <li>
              <strong>
                The 14-month trust gap is real, and it&apos;s the constraint to
                plan around.
              </strong>{" "}
              Non-NE founders need a partnership structure with a local operator
              from day one, not month four.
            </li>
            <li>
              <strong>Hardware is rarely the moat.</strong> The dashboard, the
              routing logic, the deployment relationship - those are the moats. We
              will be asking applicants to defend their moat in software terms
              even when their pitch deck shows a chiller.
            </li>
          </ol>

          <p>
            If you&apos;re working on any of these problems and reading this, drop
            us a note at{" "}
            <a href="mailto:programs@neatehub.org">programs@neatehub.org</a>.
            Applications for Saranya Cohort 4 close 30 June.
          </p>
        </div>

        {/* Footnotes + author */}
        <footer className="article__footer">
          <div className="article__footnotes">
            <h4>Footnotes &amp; sources</h4>
            <ol>
              <li>
                FY26 baseline survey ran February-April 2025 across 42 FPOs in
                Assam, Meghalaya, Nagaland, Mizoram, and Tripura. Sampling was
                non-random - FPOs in our existing producer network. Methodology to
                be published with the September impact report.
              </li>
              <li>
                &ldquo;Post-harvest loss&rdquo; defined as physical loss + Grade
                A→B classification loss, weight-adjusted at first sale.
              </li>
              <li>
                Thalo Cold&apos;s routing logic is described in more detail in our{" "}
                <a href="#">earlier interview with the founders</a> (March 2026).
              </li>
            </ol>
          </div>

          <div className="article__author">
            <div className="photo">
              <div className="photo-label">PORTRAIT</div>
            </div>
            <div>
              <h4>Dr. P. Saikia</h4>
              <div className="role">Director - Operations · NEATeHUB</div>
              <p>
                Runs NEATeHUB&apos;s Saranya programme. Previously head of
                post-harvest research at the ICAR Northeast division. Writes
                occasionally on what&apos;s working and what&apos;s not in NE
                agri-incubation.{" "}
                <Link href="/about#directors" className="link">
                  More from Dr. Saikia →
                </Link>
              </p>
            </div>
          </div>

          {/* Newsletter inline */}
          <div className="newsletter-inline">
            <div>
              <div className="eyebrow">Newsletter</div>
              <h3>Get the quarterly note.</h3>
              <p>
                What we&apos;re seeing in cohorts, open calls, the things we got
                wrong. Four times a year, that&apos;s it.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </footer>
      </article>

      {/* Related posts */}
      <section className="bg-cream-100">
        <div className="container">
          <div className="row-between">
            <div>
              <div className="eyebrow">Keep reading</div>
              <h2 className="display display-m mt-2">More from the field.</h2>
            </div>
            <Link href="/insights" className="btn btn-ghost">
              All insights <span className="arrow">→</span>
            </Link>
          </div>
          <div className="related-posts mt-5">
            <a className="rp" href="#">
              <div className="photo photo-tea">
                <div className="photo-label">
                  PHOTO: Tea pluckers at dawn, hill estate
                </div>
              </div>
              <div className="meta">
                <span>Sector</span>
                <span>·</span>
                <span>12 Apr</span>
              </div>
              <h3>Tea bio-stimulants: where the unit economics actually break.</h3>
            </a>
            <a className="rp" href="#">
              <div className="photo">
                <div className="photo-label">
                  PHOTO: KVK farmer training, Dhemaji
                </div>
              </div>
              <div className="meta">
                <span>Program</span>
                <span>·</span>
                <span>28 Mar</span>
              </div>
              <h3>Saranya &apos;25 retrospective: what worked, what we changed.</h3>
            </a>
            <a className="rp" href="#">
              <div className="photo photo-copper">
                <div className="photo-label">
                  PHOTO: Fish pond, sensor deployment
                </div>
              </div>
              <div className="meta">
                <span>Sector</span>
                <span>·</span>
                <span>09 Mar</span>
              </div>
              <h3>Aquaculture sensing in the Northeast: a five-year scan.</h3>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
