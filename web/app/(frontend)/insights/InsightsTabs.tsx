"use client";

import { useState } from "react";
import Link from "next/link";
import type { InsightDoc, EventDoc } from "../lib/content";

type Tab = "insights" | "events" | "newsroom";

type Props = {
  featured: InsightDoc | null;
  rest: InsightDoc[];
  newsroom: InsightDoc[];
  events: EventDoc[];
};

function photoClass(treatment?: string | null): string {
  if (treatment === "tea") return "photo photo-tea";
  if (treatment === "copper") return "photo photo-copper";
  return "photo";
}

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

function EventBadge({ status }: { status?: string | null }) {
  if (status === "open") {
    return (
      <span className="badge badge-tea">
        <span className="dot" />
        OPEN
      </span>
    );
  }
  if (status === "invite") {
    return <span className="badge badge-copper">INVITE</span>;
  }
  if (status === "closed") {
    return <span className="badge">CLOSED</span>;
  }
  // "rsvp" and any other/default
  return <span className="badge">RSVP</span>;
}

export default function InsightsTabs({ featured, rest, newsroom, events }: Props) {
  const [tab, setTab] = useState<Tab>("insights");

  const insightsCount = (featured ? 1 : 0) + rest.length;

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
              Insights <span className="count">{insightsCount}</span>
            </button>
            <button
              className={`in-tab${tab === "events" ? " is-active" : ""}`}
              onClick={() => setTab("events")}
            >
              Events <span className="count">{events.length}</span>
            </button>
            <button
              className={`in-tab${tab === "newsroom" ? " is-active" : ""}`}
              onClick={() => setTab("newsroom")}
            >
              Newsroom <span className="count">{newsroom.length}</span>
            </button>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          {/* INSIGHTS PANE */}
          <div className={`in-pane${tab === "insights" ? " is-active" : ""}`}>
            {featured && (
              <article className="feature-post">
                <Link href={`/insights/${featured.slug}`}>
                  <div className="photo">
                    <div className="photo-label">{featured.heroPhotoLabel}</div>
                  </div>
                </Link>
                <div>
                  <div className="meta-row">
                    <span className="badge badge-copper">{featured.category}</span>
                    <span className="kicker">
                      {featured.date} · {featured.readTime} · {featured.section}
                    </span>
                  </div>
                  <h2>
                    <Link href={`/insights/${featured.slug}`}>
                      {featured.title}
                    </Link>
                  </h2>
                  <p>{featured.dek}</p>
                  {featured.author && (
                    <div className="byline">
                      By {featured.author.name} · {featured.author.role}
                    </div>
                  )}
                </div>
              </article>
            )}

            <div className="ed-list">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  className="ed-card"
                  href={`/insights/${post.slug}`}
                >
                  {post.photoTreatment ? (
                    <div className={photoClass(post.photoTreatment)}>
                      <div className="photo-label">{post.heroPhotoLabel}</div>
                    </div>
                  ) : null}
                  <div className="meta">
                    <span>{post.category}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.dek}</p>
                </Link>
              ))}
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
              {events.map((ev) => (
                <div className="ev-row" key={ev.slug}>
                  <div className="ev-date">
                    {ev.dateDay} <small>{ev.dateMonth}</small>
                  </div>
                  <div className="ev-title">
                    {ev.title}
                    <small>{ev.dek}</small>
                  </div>
                  <div className="ev-meta">
                    {ev.location?.venue}
                    <br />
                    <span style={{ color: "var(--ink-500)" }}>
                      {ev.timeLabel} {ev.tz}
                    </span>
                  </div>
                  <div className="ev-stat">
                    <EventBadge status={ev.status} />
                  </div>
                  <Link
                    href={`/insights/events/${ev.slug}`}
                    className="arrow"
                  >
                    <ArrowIcon />
                  </Link>
                </div>
              ))}
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
              {newsroom.map((item) => (
                <Link
                  key={item.slug}
                  className="ed-card"
                  href={`/insights/${item.slug}`}
                >
                  <div className="meta">
                    <span>{item.category}</span>
                    <span>·</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="mt-2">{item.title}</h3>
                  <p>{item.dek}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
