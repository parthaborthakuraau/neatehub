"use client";

import { useState } from "react";
import { subscribe } from "../actions/subscribe";

export default function NewsletterForm({
  source = "footer",
}: {
  source?: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") || "");
    setStatus("loading");
    const res = await subscribe(email, source);
    if (res.ok) {
      setStatus("done");
      setMessage(res.message || "");
    } else {
      setStatus("error");
      setMessage(res.message || "Please try again.");
    }
  }

  const done = status === "done";
  const busy = status === "loading";

  return (
    <form onSubmit={onSubmit}>
      <input
        className="input"
        type="email"
        name="email"
        placeholder="your@email.com"
        aria-label="Email address"
        required
        disabled={done || busy}
      />
      <button className="btn btn-primary" type="submit" disabled={done || busy}>
        {done ? "Subscribed ✓" : busy ? "…" : "Subscribe"}
      </button>
      {status === "error" && message ? (
        <span
          role="alert"
          style={{
            fontSize: 12,
            color: "var(--copper-700)",
            alignSelf: "center",
          }}
        >
          {message}
        </span>
      ) : null}
    </form>
  );
}
