"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: wire to a server action + email provider (Resend/Mailchimp) in phase 2.
        setDone(true);
      }}
    >
      <input
        className="input"
        type="email"
        placeholder="your@email.com"
        aria-label="Email address"
        required
        disabled={done}
      />
      <button className="btn btn-primary" type="submit" disabled={done}>
        {done ? "Subscribed ✓" : "Subscribe"}
      </button>
    </form>
  );
}
