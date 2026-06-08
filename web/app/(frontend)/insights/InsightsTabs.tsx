"use client";

import { useState } from "react";
import Link from "next/link";

type Tab = "insights" | "events" | "newsroom";

export default function InsightsTabs() {
  const [tab, setTab] = useState<Tab>("insights");

  return (
    <>
      <section className="in-hero">
        <div className="container">
          <div className="eyebrow">Insights &amp; Events</div>
          <h1>
            What we&apos;re seeing
            <br />
            and what&apos;s coming.
          </h1>
          <div className="in-tabs">
            <button
              className={`in-tab${tab === "insights" ? " is-active" : ""}`}
              onClick={() => setTab("insights")}
            >
              Insights <span className="count">12</span>
            </button>
            <button
              className={`in-tab${tab === "events" ? " is-active" : ""}`}
              onClick={() => setTab("events")}
            >
              Events <span className="count">7</span>
            </button>
            <button
              className={`in-tab${tab === "newsroom" ? " is-active" : ""}`}
              onClick={() => setTab("newsroom")}
            >
              Newsroom <span className="count">24</span>
            </button>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          {/* INSIGHTS PANE */}
          <div className={`in-pane${tab === "insights" ? " is-active" : ""}`}>
            <article className="feature-post">
              <Link href="/insights/fy26-cohort-post-harvest">
                <div className="photo">
                  <div className="photo-label">
                    PHOTO: Cold-chain micro-unit at FPO collection point, Tezpur
                    - wide shot, daylight
                  </div>
                </div>
              </Link>
              <div>
                <div className="meta-row">
                  <span className="badge badge-copper">Feature</span>
                  <span className="kicker">
                    14 May 2026 · 8 min read · Field Notes
                  </span>
                </div>
                <h2>
                  <Link href="/insights/fy26-cohort-post-harvest">
                    What the FY26 cohort taught us about post-harvest losses in
                    the Northeast.
                  </Link>
                </h2>
                <p>
                  Twelve founders, four sectors, one stubborn truth - cold-chain
                  isn&apos;t a product problem, it&apos;s a routing problem.
                  Notes from a year of building with them, the assumptions we got
                  wrong, and what&apos;s worth replicating in FY27.
                </p>
                <div className="byline">By Dr. P. Saikia · Director, Operations</div>
              </div>
            </article>

            <div className="ed-list">
              <a className="ed-card" href="#">
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
                <p>
                  Why most pilots stall at the 200-bush mark, and what the FY25
                  ventures are doing differently.
                </p>
              </a>
              <a className="ed-card" href="#">
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
                <p>
                  Half the cohort exceeded milestones. Two pivoted. Two paused.
                  Here&apos;s our honest accounting.
                </p>
              </a>
              <a className="ed-card" href="#">
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
                <p>
                  Why so many sensor startups fail in pond conditions, and the
                  three we think will not.
                </p>
              </a>
              <a className="ed-card" href="#">
                <div className="photo">
                  <div className="photo-label">
                    PHOTO: Founder portrait, mid-shot
                  </div>
                </div>
                <div className="meta">
                  <span>Founder Story</span>
                  <span>·</span>
                  <span>18 Feb</span>
                </div>
                <h3>From AAU classroom to ₹3.2Cr raise: the Kaziranga Bio story.</h3>
                <p>A six-year arc, told by the founder.</p>
              </a>
              <a className="ed-card" href="#">
                <div className="photo photo-tea">
                  <div className="photo-label">PHOTO: Lab work, microscope</div>
                </div>
                <div className="meta">
                  <span>Method</span>
                  <span>·</span>
                  <span>02 Feb</span>
                </div>
                <h3>
                  How we evaluate idea-stage applications. Inside the Isanya
                  scorecard.
                </h3>
                <p>
                  Released so founders can self-assess. Honest about what we
                  weight and what we don&apos;t.
                </p>
              </a>
              <a className="ed-card" href="#">
                <div className="photo photo-copper">
                  <div className="photo-label">
                    PHOTO: Funder visit, formal session
                  </div>
                </div>
                <div className="meta">
                  <span>Report</span>
                  <span>·</span>
                  <span>22 Jan</span>
                </div>
                <h3>FY25 Impact Report: 70 funded, ₹7.2Cr deployed, what it bought.</h3>
                <p>Full numbers, methodology, and what we&apos;d still call uncertain.</p>
              </a>
            </div>

            <div style={{ marginTop: 56, textAlign: "center" }}>
              <a href="#" className="btn btn-ghost btn-lg">
                Load earlier insights
              </a>
            </div>
          </div>

          {/* EVENTS PANE */}
          <div className={`in-pane${tab === "events" ? " is-active" : ""}`}>
            <h2 className="display display-s" style={{ marginTop: 0 }}>
              Upcoming · FY26
            </h2>
            <div className="ev-list mt-3">
              <div className="ev-row">
                <div className="ev-date">
                  14 <small>JUN</small>
                </div>
                <div className="ev-title">
                  Saranya &apos;26 Founder Open House
                  <small>
                    Walk-in info session for prospective applicants. Bring your
                    one-pager, leave with a clear go/no-go.
                  </small>
                </div>
                <div className="ev-meta">
                  Jorhat · AAU
                  <br />
                  <span style={{ color: "var(--ink-500)" }}>14:00-17:00 IST</span>
                </div>
                <div className="ev-stat">
                  <span className="badge badge-tea">
                    <span className="dot" />
                    OPEN
                  </span>
                </div>
                <Link
                  href="/insights/events/saranya-26-open-house"
                  className="arrow"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 7h12M8 2l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                </Link>
              </div>
              <div className="ev-row">
                <div className="ev-date">
                  28 <small>JUN</small>
                </div>
                <div className="ev-title">
                  Mentor-in-residence: Aqua-feed innovation
                  <small>
                    Dr. K. Iyer, fisheries researcher, on what&apos;s working in
                    indigenous feed formulation.
                  </small>
                </div>
                <div className="ev-meta">
                  Online
                  <br />
                  <span style={{ color: "var(--ink-500)" }}>15:00-16:30 IST</span>
                </div>
                <div className="ev-stat">
                  <span className="badge">RSVP</span>
                </div>
                <a href="#" className="arrow">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 7h12M8 2l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                </a>
              </div>
              <div className="ev-row">
                <div className="ev-date">
                  18 <small>JUL</small>
                </div>
                <div className="ev-title">
                  KVK roundtable: producer-side innovation
                  <small>
                    Closed-door working session with KVK scientists across 6 NE
                    states.
                  </small>
                </div>
                <div className="ev-meta">
                  Tezpur
                  <br />
                  <span style={{ color: "var(--ink-500)" }}>Day-long</span>
                </div>
                <div className="ev-stat">
                  <span className="badge badge-copper">INVITE</span>
                </div>
                <a href="#" className="arrow">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 7h12M8 2l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                </a>
              </div>
              <div className="ev-row">
                <div className="ev-date">
                  09 <small>AUG</small>
                </div>
                <div className="ev-title">
                  Demo Day · Saranya Cohort 3
                  <small>
                    Twelve growth-stage founders, ten-minute pitches, no demo
                    theatre - just numbers.
                  </small>
                </div>
                <div className="ev-meta">
                  Jorhat · AAU
                  <br />
                  <span style={{ color: "var(--ink-500)" }}>10:00-17:00 IST</span>
                </div>
                <div className="ev-stat">
                  <span className="badge badge-tea">
                    <span className="dot" />
                    OPEN
                  </span>
                </div>
                <a href="#" className="arrow">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 7h12M8 2l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                </a>
              </div>
              <div className="ev-row">
                <div className="ev-date">
                  21 <small>SEP</small>
                </div>
                <div className="ev-title">
                  Isanya Cohort 7 - Welcome week
                  <small>Closed cohort kickoff. Public sessions begin Oct.</small>
                </div>
                <div className="ev-meta">
                  Jorhat
                  <br />
                  <span style={{ color: "var(--ink-500)" }}>Week-long</span>
                </div>
                <div className="ev-stat">
                  <span className="badge">CLOSED</span>
                </div>
                <a href="#" className="arrow">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 7h12M8 2l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Designed quiet-month state */}
            <h2 className="display display-s mt-5">Past · 2025</h2>
            <div className="quiet-month">
              <div className="label">A quiet month, by design</div>
              <h3>February 2025</h3>
              <p>
                Cohorts in deep-work phase. No public events. Our next public
                moment was the FY25 retrospective in March -{" "}
                <a href="#" className="link">
                  read the notes →
                </a>
              </p>
            </div>
          </div>

          {/* NEWSROOM PANE */}
          <div className={`in-pane${tab === "newsroom" ? " is-active" : ""}`}>
            <div className="ed-list" style={{ paddingTop: 0 }}>
              <a className="ed-card" href="#">
                <div className="meta">
                  <span>Press</span>
                  <span>·</span>
                  <span>02 May 2026</span>
                </div>
                <h3 className="mt-2">
                  NEATeHUB recognised as Centre of Excellence by DA&amp;FW.
                </h3>
                <p>
                  Designation comes with three years of operational funding and
                  pan-India recognition for the agri-tech track.
                </p>
              </a>
              <a className="ed-card" href="#">
                <div className="meta">
                  <span>Partnership</span>
                  <span>·</span>
                  <span>08 Apr 2026</span>
                </div>
                <h3 className="mt-2">
                  Robotics Lab inauguration with AAU &amp; state government.
                </h3>
                <p>
                  Shared infrastructure for deep-tech founders. ₹2.1Cr capex,
                  supported by AIM.
                </p>
              </a>
              <a className="ed-card" href="#">
                <div className="meta">
                  <span>Press</span>
                  <span>·</span>
                  <span>14 Mar 2026</span>
                </div>
                <h3 className="mt-2">
                  Saranya Cohort 4 applications open - apply by 30 June.
                </h3>
                <p>
                  Up to ₹25L per venture, 12-18 month engagement, non-residential.
                </p>
              </a>
              <a className="ed-card" href="#">
                <div className="meta">
                  <span>Coverage</span>
                  <span>·</span>
                  <span>11 Mar 2026</span>
                </div>
                <h3 className="mt-2">
                  The Hindu BusinessLine on Northeast agri-tech.
                </h3>
                <p>
                  Long-read on the regional ecosystem with extended quotes from
                  our director.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
