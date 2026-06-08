"use client";

import { useState } from "react";

const TOTAL_SEATS = 40;

export default function RSVPForm() {
  const [done, setDone] = useState(false);
  // Seats already taken before this visitor (26 / 40 in the design).
  const [taken, setTaken] = useState(26);

  const seatsLeft = TOTAL_SEATS - taken;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to a server action + email provider in phase 2.
    setTaken((t) => Math.min(TOTAL_SEATS, t + 1));
    setDone(true);
  }

  return (
    <div className="rsvp">
      <h3>RSVP</h3>
      <p>
        Free, but space-limited. We close registrations at 40 to keep the 1:1
        slots meaningful.
      </p>

      <div className="rsvp__row">
        <div className="k">When</div>
        <div className="v">
          <strong>14 June 2026</strong>14:00 - 17:00 IST
        </div>
      </div>
      <div className="rsvp__row">
        <div className="k">Where</div>
        <div className="v">
          <strong>Jorhat, Assam</strong>NEATeHUB main hall, AAU
        </div>
      </div>
      <div className="rsvp__row">
        <div className="k">Format</div>
        <div className="v">
          <strong>In person</strong>Not livestreamed
        </div>
      </div>
      <div className="rsvp__row">
        <div className="k">Cost</div>
        <div className="v">
          <strong>Free</strong>Including tea
        </div>
      </div>

      {done ? (
        <div
          className="rsvp__form"
          style={{ display: "block" }}
        >
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "var(--tea-700)",
                color: "var(--cream-50)",
                margin: "0 auto 14px",
                display: "grid",
                placeItems: "center",
                fontSize: 22,
              }}
            >
              ✓
            </div>
            <h4
              style={{
                fontFamily: "var(--display)",
                fontSize: 22,
                letterSpacing: "-0.01em",
                margin: "0 0 6px",
              }}
            >
              You&apos;re in.
            </h4>
            <p
              style={{
                fontSize: 13.5,
                color: "var(--ink-700)",
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              We&apos;ll send a confirmation email shortly with the .ics and
              directions.
            </p>
          </div>
        </div>
      ) : (
        <form className="rsvp__form" onSubmit={handleSubmit}>
          <input className="input" type="text" placeholder="Your name" required />
          <input
            className="input"
            type="email"
            placeholder="your@email.com"
            required
          />
          <input
            className="input"
            type="text"
            placeholder="Venture name (if any)"
          />
          <button className="btn btn-primary" type="submit">
            Reserve a seat
          </button>
          <p className="legal">
            By registering you agree to be added to the Saranya &apos;26 mailing
            list. Unsubscribe anytime.
          </p>
        </form>
      )}

      <div className="seats">
        <span>SEATS LEFT</span>
        <strong>
          {seatsLeft} / {TOTAL_SEATS}
        </strong>
      </div>
    </div>
  );
}
