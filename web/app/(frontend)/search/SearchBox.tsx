"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";

type Cat =
  | "all"
  | "program"
  | "portfolio"
  | "insight"
  | "event"
  | "resource"
  | "page";

type ResultLink =
  | { kind: "next"; href: string }
  | { kind: "anchor"; href: string };

type Result = {
  cat: Exclude<Cat, "all">;
  ic: string;
  typeLabel: string;
  breadcrumb: ReactNode;
  title: ReactNode;
  link: ResultLink;
  snippet: ReactNode;
  meta: string[];
};

const RESULTS: Result[] = [
  {
    cat: "program",
    ic: "P",
    typeLabel: "Program",
    breadcrumb: (
      <>
        neatehub.org<span className="sep">/</span>programs
        <span className="sep">/</span>rkvy-raftaar
      </>
    ),
    link: { kind: "next", href: "/programs/rkvy-raftaar" },
    title: (
      <>
        <mark>RKVY</mark> RAFTAAR - agri-tech acceleration program
      </>
    ),
    snippet: (
      <>
        <mark>RKVY</mark> RAFTAAR is a two-year acceleration for agri-tech
        startups with grants up to ₹25L across three sub-programs.{" "}
        <mark>Eligibility</mark> requires DPIIT recognition, incorporation under
        7 years, and a working MVP with at least one documented pilot…
      </>
    ),
    meta: ["↗ Top result", "Updated Apr 2026", "3 sub-sections"],
  },
  {
    cat: "page",
    ic: "F",
    typeLabel: "Page",
    breadcrumb: (
      <>
        neatehub.org<span className="sep">/</span>for-founders
        <span className="sep">/</span>wizard
      </>
    ),
    link: { kind: "next", href: "/for-founders#wizard" },
    title: (
      <>
        <mark>Eligibility</mark> wizard - find your program in 6 questions
      </>
    ),
    snippet: (
      <>
        A 6-question interactive tool that matches you to the right program.
        Routes prototype-stage ventures into Isanya, revenue-stage into{" "}
        <mark>RKVY</mark> or Saranya, and producer-led businesses into ASRLM. Two
        minutes, no email required.
      </>
    ),
    meta: ["Interactive", "2 min"],
  },
  {
    cat: "program",
    ic: "P",
    typeLabel: "Program",
    breadcrumb: (
      <>
        neatehub.org<span className="sep">/</span>programs
      </>
    ),
    link: { kind: "next", href: "/programs" },
    title: <>All programs - comparison &amp; status</>,
    snippet: (
      <>
        Five programs spanning idea-stage to growth-stage, including{" "}
        <mark>RKVY</mark> RAFTAAR with three sub-programs. Side-by-side
        comparison of capital ceiling, duration, and <mark>eligibility</mark>{" "}
        criteria…
      </>
    ),
    meta: ["Compare programs"],
  },
  {
    cat: "resource",
    ic: "⤓",
    typeLabel: "Download",
    breadcrumb: (
      <>
        neatehub.org<span className="sep">/</span>resources
        <span className="sep">/</span>downloads
      </>
    ),
    link: { kind: "next", href: "/resources#downloads" },
    title: (
      <>
        <mark>RKVY</mark> RAFTAAR - Program Brief FY26 (PDF)
      </>
    ),
    snippet: (
      <>
        The full 24-page brief. <mark>Eligibility</mark> criteria, evaluation
        rubric, milestone framework, capital tranching, and reporting cadence.
        Required reading before the deep-dive interview.
      </>
    ),
    meta: ["PDF · 1.2 MB", "Updated Apr 2026"],
  },
  {
    cat: "insight",
    ic: "¶",
    typeLabel: "Insight",
    breadcrumb: (
      <>
        neatehub.org<span className="sep">/</span>insights
        <span className="sep">/</span>2026-02-isanya-scorecard
      </>
    ),
    link: { kind: "next", href: "/insights" },
    title: (
      <>How we evaluate idea-stage applications. Inside the Isanya scorecard.</>
    ),
    snippet: (
      <>
        We released the exact <mark>eligibility</mark> rubric so founders can
        self-assess before applying. Includes the weighted matrix for Isanya and
        how it differs from the <mark>RKVY</mark> evaluation framework…
      </>
    ),
    meta: ["02 Feb 2026", "6 min read"],
  },
  {
    cat: "portfolio",
    ic: "◯",
    typeLabel: "Venture",
    breadcrumb: (
      <>
        neatehub.org<span className="sep">/</span>portfolio
        <span className="sep">/</span>kaziranga-bio
      </>
    ),
    link: { kind: "next", href: "/portfolio" },
    title: (
      <>
        Kaziranga Bio - <mark>RKVY</mark> &apos;22 alumni · Series A &apos;26
      </>
    ),
    snippet: (
      <>
        Microbial bio-stimulants for tea estates, replacing chemical inputs in 9
        Assam gardens. Funded under <mark>RKVY</mark> RAFTAAR in 2022. Closed
        pre-Series A of ₹3.2 Cr in April 2026.
      </>
    ),
    meta: ["Bio-inputs", "Jorhat", "Saranya · RKVY '22"],
  },
  {
    cat: "event",
    ic: "◇",
    typeLabel: "Event",
    breadcrumb: (
      <>
        neatehub.org<span className="sep">/</span>insights
        <span className="sep">/</span>events
      </>
    ),
    link: { kind: "next", href: "/insights" },
    title: (
      <>
        <mark>RKVY</mark> Q2 review cycle closes - 15 June 2026
      </>
    ),
    snippet: (
      <>
        Applications submitted by this date enter the June review cohort.
        Decisions communicated by end of August. The next cycle closes 15
        September.
      </>
    ),
    meta: ["Deadline", "15 Jun 2026"],
  },
];

const TABS: { cat: Cat; label: string; ct: number }[] = [
  { cat: "all", label: "All", ct: 14 },
  { cat: "program", label: "Programs", ct: 5 },
  { cat: "portfolio", label: "Portfolio", ct: 3 },
  { cat: "insight", label: "Insights", ct: 2 },
  { cat: "event", label: "Events", ct: 1 },
  { cat: "resource", label: "Resources", ct: 2 },
  { cat: "page", label: "Pages", ct: 1 },
];

export default function SearchBox() {
  const [query, setQuery] = useState("RKVY eligibility");
  const [echo, setEcho] = useState("RKVY eligibility");
  const [activeCat, setActiveCat] = useState<Cat>("all");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    if (q) {
      setQuery(q);
      setEcho(q);
    }
  }, []);

  const visible = RESULTS.filter(
    (r) => activeCat === "all" || r.cat === activeCat,
  );
  const count = activeCat === "all" ? 14 : visible.length;

  return (
    <>
      <section className="sr-hero">
        <div className="container">
          <div className="eyebrow">Search NEATeHUB</div>
          <h1 className="display display-l" style={{ margin: "12px 0 0" }}>
            Search
          </h1>

          <div className="sr-input">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.6" />
              <path d="M14 14l5 5" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            <input
              type="search"
              id="q"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search query"
            />
            <button
              className="clear"
              id="clear"
              aria-label="Clear search"
              onClick={() => setQuery("")}
            >
              ✕
            </button>
          </div>

          <div className="sr-meta">
            <strong id="count">{count}</strong> results for &quot;
            <strong id="q-echo">{echo}</strong>&quot; · 0.08s
          </div>

          <div className="sr-tabs">
            {TABS.map((t) => (
              <button
                key={t.cat}
                className={`sr-tab${activeCat === t.cat ? " is-active" : ""}`}
                data-cat={t.cat}
                onClick={() => setActiveCat(t.cat)}
              >
                {t.label} <span className="ct">{t.ct}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="sr-layout">
            <div id="sr-results">
              {visible.map((r, i) => (
                <article className="sr-result" data-cat={r.cat} key={i}>
                  <div className="sr-result__type">
                    <div className="ic">{r.ic}</div>
                    {r.typeLabel}
                  </div>
                  <div>
                    <div className="sr-result__breadcrumb">{r.breadcrumb}</div>
                    <h3>
                      {r.link.kind === "next" ? (
                        <Link href={r.link.href}>{r.title}</Link>
                      ) : (
                        <a href={r.link.href}>{r.title}</a>
                      )}
                    </h3>
                    <p className="sr-result__snippet">{r.snippet}</p>
                    <div className="sr-result__meta">
                      {r.meta.map((m, j) => (
                        <span key={j}>{m}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="sr-side">
              <div className="sr-side__card">
                <h4>Refine</h4>
                <ul>
                  <li>
                    <a href="#">
                      <span>By program</span> <span className="ct">5</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>By sector</span> <span className="ct">8</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>By year</span> <span className="ct">7</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>By type · PDF</span> <span className="ct">2</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="sr-side__card">
                <h4>Related searches</h4>
                <ul>
                  <li>
                    <a href="#">RKVY application timeline</a>
                  </li>
                  <li>
                    <a href="#">Saranya vs RKVY</a>
                  </li>
                  <li>
                    <a href="#">DPIIT recognition</a>
                  </li>
                  <li>
                    <a href="#">Grant tranching</a>
                  </li>
                  <li>
                    <a href="#">Non-NE founders</a>
                  </li>
                </ul>
              </div>

              <div className="sr-cta">
                <h4>Can&apos;t find it?</h4>
                <p>
                  Our AI assistant knows the answer to most program questions -
                  try it before opening a support ticket.
                </p>
                <Link href="/ask" className="btn btn-copper">
                  Ask NEATeHUB AI <span className="arrow">→</span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
