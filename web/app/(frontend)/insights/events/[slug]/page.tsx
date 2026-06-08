import type { Metadata } from "next";
import Link from "next/link";
import "./event-detail.css";
import RSVPForm from "./RSVPForm";

export const metadata: Metadata = {
  title: "Event",
  description:
    "Saranya '26 Founder Open House — a walk-in afternoon for prospective Saranya applicants at AAU, Jorhat.",
};

export default async function EventDetailPage({
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
        <Link href="/insights">Insights &amp; Events</Link>
        <span className="sep">/</span>
        <span className="cur">Saranya &apos;26 Founder Open House</span>
      </nav>

      {/* Hero */}
      <section className="ev-hero">
        <div className="container">
          <div className="ev-hero__inner">
            <div>
              <div className="ev-hero__chips">
                <span className="badge badge-copper">RKVY · Saranya</span>
                <span className="badge">In person</span>
                <span className="badge">Free entry</span>
              </div>
              <h1>Saranya &apos;26 Founder Open House.</h1>
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
                A walk-in afternoon for prospective Saranya applicants. Bring your
                one-pager. Leave with a clear go / no-go from a programme manager.
              </p>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span className="ev-status">
                  <span className="dot" /> Registrations open
                </span>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--ink-500)",
                  }}
                >
                  26 / 40 seats taken
                </span>
              </div>
            </div>

            <div className="ev-date">
              <div className="ev-date__big">
                14 Jun<small>SATURDAY · 2026</small>
              </div>
              <div className="ev-date__line">
                <span>
                  14:00 - 17:00 <strong>IST</strong>
                </span>
                <span>~3 hrs</span>
              </div>
            </div>
          </div>

          <div className="photo photo-tea ev-hero__photo">
            <div className="photo-label">
              PHOTO: NEATeHUB main hall during a previous open house - founders
              mid-conversation in small groups, soft afternoon light, AAU campus
              context visible through windows
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="ev-body">
            <article className="ev-main">
              <h2>What this is.</h2>
              <p>
                If you&apos;ve been considering applying to Saranya Cohort 4 - the
                growth-stage programme under RKVY - this is the afternoon to come
                in, ask hard questions, and leave with a real answer about whether
                the programme fits your venture.
              </p>
              <p>
                It is not a recruiting event, a pitch competition, or a polished
                founder-friendly performance. It&apos;s a working session. Three
                programme managers will be available the entire afternoon for
                one-on-one conversations. We&apos;ve set aside two pre-deal-review
                slots for applicants who want to walk through their pitch with us
                informally - first-come, first-served.
              </p>

              <h2>Agenda</h2>
              <div className="agenda">
                <div className="agenda__row">
                  <div className="agenda__time">14:00 - 14:20</div>
                  <div className="agenda__what">
                    Welcome &amp; programme overview
                    <small>
                      Director-led 20-minute walkthrough of Saranya structure,
                      capital cadence, and FY26 cohort outcomes. Slides will be
                      shared.
                    </small>
                  </div>
                </div>
                <div className="agenda__row">
                  <div className="agenda__time">14:20 - 15:00</div>
                  <div className="agenda__what">
                    Two founders, in conversation
                    <small>
                      Ashish Bora (Thalo Cold) and Dr. Rohan Hazarika (Kaziranga
                      Bio) on what the Saranya engagement actually looked like for
                      them - month by month.
                    </small>
                  </div>
                </div>
                <div className="agenda__row">
                  <div className="agenda__time">15:00 - 15:30</div>
                  <div className="agenda__what">
                    Tea + informal mixing
                    <small>
                      Real Assam tea. Real conversations. Mentors and current
                      cohort founders present.
                    </small>
                  </div>
                </div>
                <div className="agenda__row">
                  <div className="agenda__time">15:30 - 16:30</div>
                  <div className="agenda__what">
                    1:1 office hours with programme managers
                    <small>
                      Three concurrent rooms. 12-minute slots, signed up
                      first-come on the day. Bring your one-pager.
                    </small>
                  </div>
                </div>
                <div className="agenda__row">
                  <div className="agenda__time">16:30 - 17:00</div>
                  <div className="agenda__what">
                    Closing Q&amp;A + application walkthrough
                    <small>
                      Live walkthrough of the application form. We answer every
                      &quot;but what about my situation&quot; question. Honest.
                    </small>
                  </div>
                </div>
              </div>

              <h2>Who you&apos;ll meet</h2>
              <div className="speakers">
                <div className="speaker">
                  <div className="photo photo-tea">
                    <div className="photo-label">Headshot</div>
                  </div>
                  <div>
                    <h4>Dr. P. Saikia</h4>
                    <div className="role">Director - Operations</div>
                    <p>
                      Runs Saranya end-to-end. Will be present in 1:1 slots
                      throughout the afternoon.
                    </p>
                  </div>
                </div>
                <div className="speaker">
                  <div className="photo">
                    <div className="photo-label">Headshot</div>
                  </div>
                  <div>
                    <h4>Anirban Das</h4>
                    <div className="role">RKVY Program Manager</div>
                    <p>
                      Anchors the RKVY application process. Best person to talk to
                      about eligibility edge-cases.
                    </p>
                  </div>
                </div>
                <div className="speaker">
                  <div className="photo photo-copper">
                    <div className="photo-label">Headshot</div>
                  </div>
                  <div>
                    <h4>Tridib Saharia</h4>
                    <div className="role">Saranya Programme Lead</div>
                    <p>
                      Runs the current Saranya cohort. Will speak to what
                      month-by-month engagement looks like.
                    </p>
                  </div>
                </div>
                <div className="speaker">
                  <div className="photo">
                    <div className="photo-label">Headshot</div>
                  </div>
                  <div>
                    <h4>Mridusmita Kalita</h4>
                    <div className="role">Mentor Network</div>
                    <p>
                      Will be available to discuss which mentors fit your
                      venture&apos;s sector and stage.
                    </p>
                  </div>
                </div>
              </div>

              <h2>What to bring</h2>
              <ul className="bring">
                <li>
                  A one-pager about your venture
                  <small>
                    Single A4. PDF or print. Sector, stage, what you&apos;ve
                    shipped, what you need. We&apos;ll read it before the 1:1.
                  </small>
                </li>
                <li>
                  One question you don&apos;t have a good answer to
                  <small>
                    The 1:1 is most useful when you bring your hardest question,
                    not your polished pitch.
                  </small>
                </li>
                <li>
                  Honest financials, if you have them
                  <small>
                    Not for evaluation - for conversation. We&apos;ll respect
                    confidence; nothing leaves the room.
                  </small>
                </li>
                <li>
                  Comfortable clothes
                  <small>
                    You&apos;ll be walking between buildings. The campus is large.
                  </small>
                </li>
              </ul>

              <h2>Logistics</h2>
              <div className="location">
                <div className="location__photo">
                  <div className="pin">⌖</div>
                  <span className="label">AAU CAMPUS · JORHAT</span>
                </div>
                <div>
                  <h3>NEATeHUB main hall</h3>
                  <p>
                    Assam Agricultural University
                    <br />
                    Borbheta, Jorhat - 785013
                    <br />
                    Assam
                    <br />
                    <br />
                    26.7271° N · 94.2037° E
                    <br />
                    ~30 min from Jorhat Airport
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
            </article>

            {/* Sidebar RSVP */}
            <aside className="ev-side">
              <RSVPForm />
            </aside>
          </div>
        </div>
      </section>

      {/* Related events */}
      <section className="bg-cream-100">
        <div className="container">
          <div className="row-between">
            <div>
              <div className="eyebrow">More events</div>
              <h2 className="display display-m mt-2">Upcoming on the calendar.</h2>
            </div>
            <Link href="/insights" className="btn btn-ghost">
              All events <span className="arrow">→</span>
            </Link>
          </div>
          <div className="ev-related mt-5">
            <a className="ev-card" href="#">
              <div className="ev-card__date">
                28<small>JUN · Online</small>
              </div>
              <h3>Mentor-in-residence: Aqua-feed innovation</h3>
              <div className="where">Online · 15:00 IST</div>
            </a>
            <a className="ev-card" href="#">
              <div className="ev-card__date">
                18<small>JUL · Tezpur</small>
              </div>
              <h3>KVK roundtable: producer-side innovation</h3>
              <div className="where">Tezpur · Day-long · Invite-only</div>
            </a>
            <a className="ev-card" href="#">
              <div className="ev-card__date">
                09<small>AUG · Jorhat</small>
              </div>
              <h3>Demo Day · Saranya Cohort 3</h3>
              <div className="where">Jorhat · AAU · 10:00-17:00</div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
