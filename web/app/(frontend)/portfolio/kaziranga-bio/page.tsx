import type { Metadata } from "next";
import Link from "next/link";
import "./kaziranga-bio.css";

export const metadata: Metadata = {
  title: "Kaziranga Bio — Portfolio",
  description:
    "Kaziranga Bio — microbial bio-stimulants for tea estates, replacing chemical inputs in nine Assam gardens. RKVY · Saranya portfolio venture.",
};

export default function KazirangaBioPage() {
  return (
    <>
      <nav className="crumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">/</span>
        <Link href="/portfolio">Portfolio</Link>
        <span className="sep">/</span>
        <span className="cur">Kaziranga Bio</span>
      </nav>

      {/* Hero */}
      <section className="vp-hero">
        <div className="container">
          <div className="vp-hero__head">
            <div>
              <div className="vp-hero__chips">
                <span className="badge badge-copper">Series A · April 2026</span>
                <span className="badge">Bio-inputs</span>
                <span className="badge">RKVY · Saranya &apos;24</span>
                <span className="badge">Jorhat, Assam</span>
              </div>
              <h1>Kaziranga Bio</h1>
              <p className="vp-hero__pitch" style={{ marginTop: 24 }}>
                Microbial bio-stimulants for tea estates - replacing chemical inputs
                in nine Assam gardens, and counting.
              </p>
            </div>
            <div className="vp-hero__visit">
              <div className="vp-hero__row">
                <div>
                  <div className="k">Website</div>
                  <div className="v">
                    <a href="#" target="_blank" rel="noreferrer">
                      kazirangabio.com ↗
                    </a>
                  </div>
                </div>
                <div>
                  <div className="k">Founded</div>
                  <div className="v">2021</div>
                </div>
              </div>
              <div className="vp-hero__row" style={{ marginTop: 18 }}>
                <div>
                  <div className="k">Team size</div>
                  <div className="v">
                    14 <small>HQ in Jorhat</small>
                  </div>
                </div>
                <div>
                  <div className="k">Sector</div>
                  <div className="v">Bio-inputs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero photo, full-bleed within container */}
          <div className="photo photo-tea vp-hero__photo">
            <div className="photo-label">
              PHOTO: Wide field shot - Kaziranga Bio founder walking between rows of
              tea bushes at a partner garden in Sonitpur, late afternoon, low-angle
            </div>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section style={{ padding: 0 }}>
        <div className="container">
          <div className="vp-facts">
            <div>
              <div className="k">Total raised</div>
              <div className="v">
                ₹3.2 Cr <small>incl. grant</small>
              </div>
            </div>
            <div>
              <div className="k">Grant from NEATeHUB</div>
              <div className="v">
                ₹25 L <small>RKVY · Saranya</small>
              </div>
            </div>
            <div>
              <div className="k">Active partners</div>
              <div className="v">
                9 <small>Assam tea estates</small>
              </div>
            </div>
            <div>
              <div className="k">Patents</div>
              <div className="v">
                2 <small>1 granted, 1 pending</small>
              </div>
            </div>
            <div>
              <div className="k">Stage</div>
              <div className="v">Series A</div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="vp-body">
            <article className="vp-main">
              <div className="eyebrow">The work</div>
              <h2>Tea estates have a soil problem, and a chemical-input habit.</h2>

              <p>
                The North Indian tea industry has been on chemical fertilisers and
                synthetic pesticides for half a century. The cost - to soils, to
                yields, to producer balance sheets, and increasingly to export
                buyers - has compounded quietly. Kaziranga Bio&apos;s bet is that
                microbial bio-stimulants can replace a meaningful share of those
                inputs, at parity cost, with measurable yield improvement after the
                second season.
              </p>

              <p>
                The science isn&apos;t novel - bio-stimulant research has existed for
                decades in academic settings. The hard part has been delivering it.
                Most bio-input ventures fail at the 200-bush mark: lab-grade efficacy
                collapses in field conditions, and the unit economics of small-batch
                production don&apos;t survive contact with a real tea garden&apos;s
                procurement cycle.
              </p>

              <p>
                Kaziranga Bio&apos;s contribution is twofold: a stable formulation
                that maintains efficacy in Assam&apos;s monsoon humidity, and a
                contract-manufacturing model that lets gardens trial the input
                without committing capital. The first is a science problem, eight
                years in the lab. The second is a commercial design problem they
                solved with NEATeHUB&apos;s RKVY · Saranya programme manager.
              </p>

              <figure className="vp-figure">
                <div className="photo">
                  <div className="photo-label">
                    PHOTO: Close-up of bio-stimulant application equipment in field,
                    hands of plucker visible, mid-morning sun
                  </div>
                </div>
                <figcaption>
                  Application of the KB-04 formulation at a partner garden in
                  Sonitpur, May 2025. Treatment density is calibrated per-bush, not
                  per-acre.
                </figcaption>
              </figure>

              <h3>What changed in the FY24 cohort</h3>
              <p>
                Kaziranga Bio entered Saranya in October 2023 with three gardens
                trialling and one paying customer. By the end of the 14-month
                engagement, that number had moved to nine, with two converted to
                long-term contracts and three more in late-stage trial.
              </p>

              <p>
                The capital tranches mattered, but the introductions mattered more.
                Saranya&apos;s GTM mentor - a former tea-industry operator with 20
                years of garden-side experience - opened doors that a cold-call
                founder would not have walked through in a decade. Three of the nine
                active partners came from a single afternoon at the Assam Tea
                Planters Association meeting in March 2024.
              </p>

              <blockquote>
                NEATeHUB&apos;s mistake-budget is what got us out of the lab and into
                nine actual gardens. Most accelerators don&apos;t fund honest
                failure.
                <cite>Dr. Rohan Hazarika · Founder &amp; CEO</cite>
              </blockquote>

              <h3>Where they&apos;re going</h3>
              <p>
                The Series A raise in April 2026 - ₹3.2 Cr led by Ag-Innovate
                Partners with NEATeHUB-introduced angels - funds a single ambition:
                expansion from nine partner gardens to fifty, across Assam and
                Darjeeling, over the next two seasons. The capital does three things:
                doubles the production facility footprint at Jorhat, hires two
                field-ops engineers per district, and finances the working capital
                for a deferred-payment model that gardens can adopt without
                procurement-cycle friction.
              </p>

              <p>
                The bottleneck Rohan flags repeatedly is not capital and not science.
                It&apos;s trained field-ops staff who can troubleshoot application in
                the field, in Assamese, with growers who have been burned by
                snake-oil bio-inputs before. That&apos;s the next two years of
                hiring, and it doesn&apos;t show up on a deck.
              </p>

              <h2>Founders</h2>
              <div className="founders">
                <div className="founder">
                  <div className="photo">
                    <div className="photo-label">Founder portrait</div>
                  </div>
                  <div>
                    <h4>Dr. Rohan Hazarika</h4>
                    <div className="role">Founder &amp; CEO</div>
                    <p>
                      PhD in microbiology, Tezpur University. Eight years at the ICAR
                      Tea Research Institute before founding Kaziranga Bio. Has
                      published 14 peer-reviewed papers on rhizosphere microbiology
                      specific to North Indian tea cultivars.
                    </p>
                  </div>
                </div>
                <div className="founder">
                  <div className="photo photo-tea">
                    <div className="photo-label">Founder portrait</div>
                  </div>
                  <div>
                    <h4>Mridusmita Borah</h4>
                    <div className="role">Co-founder &amp; Head of Field Ops</div>
                    <p>
                      Agronomist, AAU Jorhat. Ten years running field trials for the
                      Tea Board&apos;s Northeast division. Owns the
                      partnership-and-deployment side of the business - every garden
                      onboarded since 2022 came through her.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Milestones</h2>
              <div className="milestones">
                <div className="milestone">
                  <div className="when">Feb 2021</div>
                  <div className="what">
                    Incorporated as Kaziranga Bio Sciences Pvt Ltd
                    <small>
                      Two-founder team. AAU lab access via founder&apos;s faculty
                      network.
                    </small>
                  </div>
                </div>
                <div className="milestone">
                  <div className="when">Jul 2021</div>
                  <div className="what">
                    First field trial
                    <small>
                      Single garden in Jorhat district. KB-01 prototype, applied
                      across 8 bush rows.
                    </small>
                  </div>
                </div>
                <div className="milestone milestone--funded">
                  <div className="when">Oct 2022</div>
                  <div className="what">
                    Joined NEATeHUB · RKVY · Isanya Cohort 4
                    <small>
                      ₹5L seed grant, 8-week residential at AAU campus. Formulation
                      pivoted from KB-01 to KB-03.
                    </small>
                  </div>
                </div>
                <div className="milestone">
                  <div className="when">Mar 2023</div>
                  <div className="what">
                    First paying customer
                    <small>
                      Dhula Tea Estate signed for a 40-acre commercial trial.
                    </small>
                  </div>
                </div>
                <div className="milestone milestone--funded">
                  <div className="when">Oct 2023</div>
                  <div className="what">
                    Advanced to RKVY · Saranya Cohort 3
                    <small>
                      ₹25L grant over 14 months. Field-ops mentor assigned.
                      Production facility expanded to 1,200 sq ft.
                    </small>
                  </div>
                </div>
                <div className="milestone">
                  <div className="when">Aug 2024</div>
                  <div className="what">
                    First patent granted
                    <small>
                      KB-03 formulation stability in tropical humidity. IP filed in
                      India and PCT.
                    </small>
                  </div>
                </div>
                <div className="milestone">
                  <div className="when">Jan 2025</div>
                  <div className="what">
                    Hit 9 active partner gardens
                    <small>
                      Two on long-term contracts, three in late-stage trial, four on
                      commercial trial.
                    </small>
                  </div>
                </div>
                <div className="milestone milestone--funded">
                  <div className="when">Apr 2026</div>
                  <div className="what">
                    Series A close - ₹3.2 Cr
                    <small>
                      Led by Ag-Innovate Partners. Two NEATeHUB-introduced angels
                      participated.
                    </small>
                  </div>
                </div>
              </div>

              <h2>Funding history</h2>
              <table className="funding">
                <thead>
                  <tr>
                    <th>Round</th>
                    <th>Amount</th>
                    <th>Lead / source</th>
                    <th>NEATeHUB role</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Series A</td>
                    <td className="amt">₹3.2 Cr</td>
                    <td>Ag-Innovate Partners</td>
                    <td className="role">Introduced 2 angels</td>
                    <td>Apr 2026</td>
                  </tr>
                  <tr>
                    <td>Saranya tranche</td>
                    <td className="amt">₹10 L</td>
                    <td>RKVY · MoA&amp;FW</td>
                    <td className="role">Direct grant</td>
                    <td>Apr 2024</td>
                  </tr>
                  <tr>
                    <td>Saranya tranche</td>
                    <td className="amt">₹10 L</td>
                    <td>RKVY · MoA&amp;FW</td>
                    <td className="role">Direct grant</td>
                    <td>Oct 2023</td>
                  </tr>
                  <tr>
                    <td>Saranya tranche</td>
                    <td className="amt">₹5 L</td>
                    <td>RKVY · MoA&amp;FW</td>
                    <td className="role">Direct grant</td>
                    <td>Oct 2023</td>
                  </tr>
                  <tr>
                    <td>Isanya</td>
                    <td className="amt">₹5 L</td>
                    <td>RKVY · MoA&amp;FW</td>
                    <td className="role">Direct grant</td>
                    <td>Oct 2022</td>
                  </tr>
                </tbody>
              </table>

              <h2>NEATeHUB engagement</h2>
              <div className="engagement">
                <div className="av">AD</div>
                <div>
                  <blockquote>
                    &quot;Rohan and Mridu came in with the lab work already done. What
                    they needed was a network and the patience to deploy slowly.
                    RKVY&apos;s tranche structure gave them both. Watching the
                    formulation go from one garden to nine - and watching the team
                    learn to trust their own commercial instincts - is the reason we
                    run this programme.&quot;
                  </blockquote>
                  <div className="attr">
                    <strong>Anirban Das</strong> · RKVY Program Manager, NEATeHUB ·
                    Engaged Oct 2022 - ongoing
                  </div>
                </div>
              </div>

              <h2>Press &amp; coverage</h2>
              <ul className="press">
                <li>
                  <a href="#">
                    <div className="outlet">
                      The Hindu BusinessLine · National
                    </div>
                    <div className="headline">
                      Northeast agri-tech: the quiet rise of bio-input startups
                    </div>
                  </a>
                  <span className="when">11 Mar 2026</span>
                </li>
                <li>
                  <a href="#">
                    <div className="outlet">Outlook Agriculture · Feature</div>
                    <div className="headline">
                      Inside Kaziranga Bio&apos;s nine-garden experiment
                    </div>
                  </a>
                  <span className="when">22 Jan 2026</span>
                </li>
                <li>
                  <a href="#">
                    <div className="outlet">YourStory · Profile</div>
                    <div className="headline">
                      Two scientists, one tea estate, and a bet against chemical
                      fertilisers
                    </div>
                  </a>
                  <span className="when">08 Nov 2025</span>
                </li>
                <li>
                  <a href="#">
                    <div className="outlet">Assam Tribune · Regional</div>
                    <div className="headline">
                      AAU-incubated venture wins national agri-innovation award
                    </div>
                  </a>
                  <span className="when">14 Sep 2025</span>
                </li>
              </ul>
            </article>

            {/* Sidebar */}
            <aside className="vp-side">
              <div className="vp-side__block">
                <h4>Programs</h4>
                <span className="program-pill">RKVY · Isanya &apos;22</span>
                <span className="program-pill is-current">
                  RKVY · Saranya &apos;23-&apos;24
                </span>
              </div>

              <div className="vp-side__block">
                <h4>At a glance</h4>
                <ul>
                  <li>
                    <span>Founded</span>
                    <strong>Feb 2021</strong>
                  </li>
                  <li>
                    <span>HQ</span>
                    <strong>Jorhat, AS</strong>
                  </li>
                  <li>
                    <span>Team</span>
                    <strong>14</strong>
                  </li>
                  <li>
                    <span>Sector</span>
                    <strong>Bio-inputs</strong>
                  </li>
                  <li>
                    <span>Stage</span>
                    <strong>Series A</strong>
                  </li>
                  <li>
                    <span>Status</span>
                    <strong style={{ color: "var(--tea-700)" }}>Active</strong>
                  </li>
                  <li>
                    <span>Reach</span>
                    <strong>9 estates</strong>
                  </li>
                </ul>
              </div>

              <div className="vp-side__block">
                <h4>Sustainable Development Goals</h4>
                <ul>
                  <li>
                    <span>SDG 2</span>
                    <strong>Zero Hunger</strong>
                  </li>
                  <li>
                    <span>SDG 12</span>
                    <strong>Responsible Consumption</strong>
                  </li>
                  <li>
                    <span>SDG 15</span>
                    <strong>Life on Land</strong>
                  </li>
                </ul>
              </div>

              <div className="vp-side__block">
                <h4>Get in touch</h4>
                <ul>
                  <li>
                    <span>Website</span>
                    <strong>
                      <a href="#" className="link">
                        kazirangabio.com
                      </a>
                    </strong>
                  </li>
                  <li>
                    <span>Hiring</span>
                    <strong>
                      <a href="#" className="link">
                        2 open roles
                      </a>
                    </strong>
                  </li>
                  <li>
                    <span>Investor inquiries</span>
                    <strong>
                      <a href="#" className="link">
                        rohan@
                      </a>
                    </strong>
                  </li>
                </ul>
              </div>

              <div className="vp-side__block" style={{ paddingBottom: 0 }}>
                <h4>Want to support?</h4>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--ink-700)",
                    lineHeight: 1.5,
                    margin: "0 0 14px",
                  }}
                >
                  If you&apos;re an LP, mentor, or strategic partner interested in
                  NEATeHUB&apos;s portfolio, get in touch with our team.
                </p>
                <Link
                  href="/about#contact"
                  className="btn btn-ghost btn-sm"
                  style={{ width: "100%" }}
                >
                  Talk to NEATeHUB <span className="arrow">→</span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related ventures */}
      <section className="bg-cream-100">
        <div className="container">
          <div className="row-between">
            <div>
              <div className="eyebrow">Related ventures</div>
              <h2 className="display display-m mt-2">More from the portfolio.</h2>
            </div>
            <Link href="/portfolio" className="btn btn-ghost">
              All 250+ ventures <span className="arrow">→</span>
            </Link>
          </div>
          <div className="related-vens mt-5">
            <a className="rv" href="#">
              <div className="photo">
                <div className="photo-label">
                  PHOTO: Mati Labs soil-test rig in field
                </div>
              </div>
              <div className="rv__body">
                <div className="rv__name">Mati Labs</div>
                <div className="rv__sector">Agri-Input · Isanya &apos;25</div>
                <p className="rv__desc">
                  Mobile soil-testing rig for KVKs. ₹40 per test, 14-min turnaround.
                  Same sector adjacency, different problem.
                </p>
              </div>
            </a>
            <a className="rv" href="#">
              <div className="photo photo-tea">
                <div className="photo-label">
                  PHOTO: Eri Threads founder, silk by-product
                </div>
              </div>
              <div className="rv__body">
                <div className="rv__name">Eri Threads</div>
                <div className="rv__sector">Food · ASRLM &apos;23</div>
                <p className="rv__desc">
                  Eri silk by-product proteins for nutraceutical use. Producer-owned,
                  also Assam-rooted, also part of the FY24 cohort.
                </p>
              </div>
            </a>
            <a className="rv" href="#">
              <div className="photo photo-copper">
                <div className="photo-label">
                  PHOTO: Thalo Cold cold-chain unit
                </div>
              </div>
              <div className="rv__body">
                <div className="rv__name">Thalo Cold</div>
                <div className="rv__sector">Post-Harvest · RKVY · Saranya &apos;23</div>
                <p className="rv__desc">
                  Solar cold-chain micro-units for FPO-led aggregation. Same Saranya
                  cohort year, complementary problem space.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
