import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import "./event-detail.css";
import RSVPForm from "./RSVPForm";
import { getEventBySlug, getEvents, type EventDoc } from "../../../lib/content";

export const dynamic = "force-dynamic";

const FORMAT_LABEL: Record<string, string> = {
  "in-person": "In person",
  online: "Online",
  hybrid: "Hybrid",
};

function photoClass(t?: string | null): string {
  return t === "tea" ? "photo-tea" : t === "copper" ? "photo-copper" : "";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ev = await getEventBySlug(slug);
  if (!ev) return { title: "Event not found" };
  return {
    title: ev.title,
    description: ev.dek ?? undefined,
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ev = await getEventBySlug(slug);
  if (!ev) notFound();

  const related = (await getEvents())
    .filter((e) => e.slug !== ev.slug)
    .slice(0, 3);

  const statusLabel =
    ev.status === "open"
      ? "Registrations open"
      : ev.status
        ? ev.status.charAt(0).toUpperCase() + ev.status.slice(1)
        : null;

  return (
    <>
      <nav className="crumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">/</span>
        <Link href="/insights">Insights &amp; Events</Link>
        <span className="sep">/</span>
        <span className="cur">{ev.title}</span>
      </nav>

      {/* Hero */}
      <section className="ev-hero">
        <div className="container">
          <div className="ev-hero__inner">
            <div>
              <div className="ev-hero__chips">
                {ev.programTag ? (
                  <span className="badge badge-copper">{ev.programTag}</span>
                ) : null}
                {ev.format ? (
                  <span className="badge">
                    {FORMAT_LABEL[ev.format] ?? ev.format}
                  </span>
                ) : null}
                {ev.free ? <span className="badge">Free entry</span> : null}
              </div>
              <h1>{ev.title}</h1>
              {ev.dek ? (
                <p
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: "clamp(18px, 1.5vw, 22px)",
                    lineHeight: 1.4,
                    color: "var(--ink-700)",
                    margin: "24px 0 24px",
                    maxWidth: "50ch",
                  }}
                >
                  {ev.dek}
                </p>
              ) : null}
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                {statusLabel ? (
                  ev.status === "open" ? (
                    <span className="ev-status">
                      <span className="dot" /> {statusLabel}
                    </span>
                  ) : (
                    <span className="ev-status">{statusLabel}</span>
                  )
                ) : null}
                {ev.seatsTotal ? (
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--ink-500)",
                    }}
                  >
                    {ev.seatsTaken ?? 0} / {ev.seatsTotal} seats taken
                  </span>
                ) : null}
              </div>
            </div>

            <div className="ev-date">
              <div className="ev-date__big">
                {ev.dateBig}
                {ev.dayLabel ? <small>{ev.dayLabel}</small> : null}
              </div>
              <div className="ev-date__line">
                <span>
                  {ev.timeLabel} {ev.tz ? <strong>{ev.tz}</strong> : null}
                </span>
                {ev.duration ? <span>{ev.duration}</span> : null}
              </div>
            </div>
          </div>

          {ev.heroPhotoLabel ? (
            <div
              className={`photo ${photoClass(ev.photoTreatment)} ev-hero__photo`}
            >
              <div className="photo-label">{ev.heroPhotoLabel}</div>
            </div>
          ) : null}
        </div>
      </section>

      {/* Body */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="ev-body">
            <article className="ev-main">
              {ev.intro && ev.intro.length ? (
                <>
                  <h2>What this is.</h2>
                  {ev.intro.map((p, i) => (
                    <p key={i}>{p.text}</p>
                  ))}
                </>
              ) : null}

              {ev.agenda && ev.agenda.length ? (
                <>
                  <h2>Agenda</h2>
                  <div className="agenda">
                    {ev.agenda.map((a, i) => (
                      <div className="agenda__row" key={i}>
                        <div className="agenda__time">{a.time}</div>
                        <div className="agenda__what">
                          {a.what}
                          {a.detail ? <small>{a.detail}</small> : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}

              {ev.speakers && ev.speakers.length ? (
                <>
                  <h2>Who you&apos;ll meet</h2>
                  <div className="speakers">
                    {ev.speakers.map((s, i) => (
                      <div className="speaker" key={i}>
                        <div className={`photo ${photoClass(s.photoTreatment)}`}>
                          <div className="photo-label">Headshot</div>
                        </div>
                        <div>
                          <h4>{s.name}</h4>
                          {s.role ? <div className="role">{s.role}</div> : null}
                          {s.bio ? <p>{s.bio}</p> : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}

              {ev.bring && ev.bring.length ? (
                <>
                  <h2>What to bring</h2>
                  <ul className="bring">
                    {ev.bring.map((b, i) => (
                      <li key={i}>
                        {b.what}
                        {b.detail ? <small>{b.detail}</small> : null}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              {ev.location ? (
                <>
                  <h2>Logistics</h2>
                  <div className="location">
                    <div className="location__photo">
                      <div className="pin">⌖</div>
                      <span className="label">
                        {(ev.location.venue || ev.location.address || "").toUpperCase()}
                      </span>
                    </div>
                    <div>
                      {ev.location.venue ? <h3>{ev.location.venue}</h3> : null}
                      <p>
                        {ev.location.address
                          ? ev.location.address.split("\n").map((ln, i, arr) => (
                              <span key={i}>
                                {ln}
                                {i < arr.length - 1 ? <br /> : null}
                              </span>
                            ))
                          : null}
                        {ev.location.coords ? (
                          <>
                            <br />
                            <br />
                            {ev.location.coords}
                          </>
                        ) : null}
                        {ev.location.travel ? (
                          <>
                            <br />
                            {ev.location.travel}
                          </>
                        ) : null}
                      </p>
                      <div className="row">
                        <a href="#" className="btn btn-ghost btn-sm">
                          Get directions ↗
                        </a>
                        <a href="#" className="btn btn-ghost btn-sm">
                          Download .ics
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </article>

            {/* Sidebar RSVP */}
            <aside className="ev-side">
              <RSVPForm />
            </aside>
          </div>
        </div>
      </section>

      {/* Related events */}
      {related.length ? (
        <section className="bg-cream-100">
          <div className="container">
            <div className="row-between">
              <div>
                <div className="eyebrow">More events</div>
                <h2 className="display display-m mt-2">
                  Upcoming on the calendar.
                </h2>
              </div>
              <Link href="/insights" className="btn btn-ghost">
                All events <span className="arrow">→</span>
              </Link>
            </div>
            <div className="ev-related mt-5">
              {related.map((e) => (
                <Link
                  className="ev-card"
                  href={`/insights/events/${e.slug}`}
                  key={e.slug}
                >
                  <div className="ev-card__date">
                    {e.dateDay}
                    <small>
                      {e.dateMonth}
                      {e.location?.venue ? ` · ${e.location.venue}` : ""}
                    </small>
                  </div>
                  <h3>{e.title}</h3>
                  <div className="where">
                    {e.location?.venue || ""}
                    {e.location?.venue && e.timeLabel ? " · " : ""}
                    {e.timeLabel || ""}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
