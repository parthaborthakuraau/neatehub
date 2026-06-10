"use client";

import { useEffect, useState } from "react";

type Venture = {
  id: string | number;
  name?: string;
  slug?: string;
  oneLiner?: string | null;
  tagline?: string | null;
  website?: string | null;
  location?: string | null;
  founded?: string | null;
  teamSize?: number | null;
};

const EDITABLE: { key: keyof Venture; label: string; type?: string; textarea?: boolean }[] = [
  { key: "tagline", label: "Hero tagline", textarea: true },
  { key: "oneLiner", label: "Short description", textarea: true },
  { key: "website", label: "Website" },
  { key: "location", label: "Location (e.g. Jorhat, AS)" },
  { key: "founded", label: "Founded (e.g. Feb 2021)" },
  { key: "teamSize", label: "Team size", type: "number" },
];

export default function StartupPortal() {
  const [phase, setPhase] = useState<"checking" | "login" | "editing">("checking");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [venture, setVenture] = useState<Venture | null>(null);
  const [form, setForm] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);

  async function loadVenture(userId: string | number) {
    const res = await fetch(
      `/api/ventures?where[owner][equals]=${userId}&depth=0&limit=1`,
      { credentials: "include" }
    );
    const data = await res.json();
    const v: Venture | undefined = data?.docs?.[0];
    if (v) {
      setVenture(v);
      setForm(
        EDITABLE.reduce<Record<string, string>>((acc, f) => {
          const val = v[f.key];
          acc[f.key as string] = val == null ? "" : String(val);
          return acc;
        }, {})
      );
    } else {
      setVenture(null);
    }
    setPhase("editing");
  }

  useEffect(() => {
    // Resume an existing session if present.
    (async () => {
      try {
        const res = await fetch("/api/users/me", { credentials: "include" });
        const data = await res.json();
        if (data?.user?.id) await loadVenture(data.user.id);
        else setPhase("login");
      } catch {
        setPhase("login");
      }
    })();
  }, []);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok && data?.user?.id) {
        await loadVenture(data.user.id);
      } else {
        setError(data?.errors?.[0]?.message || "Login failed. Check your credentials.");
      }
    } catch {
      setError("Login failed. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (!venture) return;
    setBusy(true);
    setSaved(false);
    setError("");
    const body: Record<string, unknown> = {};
    for (const f of EDITABLE) {
      const raw = form[f.key as string] ?? "";
      body[f.key as string] = f.type === "number" ? (raw ? Number(raw) : null) : raw;
    }
    try {
      const res = await fetch(`/api/ventures/${venture.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });
      if (res.ok) setSaved(true);
      else setError("Save failed — you may not have permission to edit this venture.");
    } catch {
      setError("Save failed. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function logout() {
    await fetch("/api/users/logout", { method: "POST", credentials: "include" });
    setVenture(null);
    setPhase("login");
    setEmail("");
    setPassword("");
  }

  if (phase === "checking") {
    return <p className="lede mt-4">Loading…</p>;
  }

  if (phase === "login") {
    return (
      <form className="stack-md mt-5" style={{ maxWidth: 420 }} onSubmit={login}>
        <div className="field">
          <label htmlFor="po-email">Email</label>
          <input
            id="po-email"
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="po-pass">Password</label>
          <input
            id="po-pass"
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error ? (
          <p style={{ color: "var(--copper-700)", fontSize: 14, margin: 0 }}>{error}</p>
        ) : null}
        <button className="btn btn-primary" type="submit" disabled={busy}>
          {busy ? "Signing in…" : "Sign in"}
        </button>
        <p style={{ fontSize: 13, color: "var(--ink-500)", margin: 0 }}>
          Use the email NEATeHUB set up for your venture. A one-time-code sign-in
          is coming soon.
        </p>
      </form>
    );
  }

  // editing
  if (!venture) {
    return (
      <div className="mt-5">
        <p className="lede">
          You&apos;re signed in, but no venture is linked to this account yet.
          NEATeHUB will assign your venture shortly.
        </p>
        <button className="btn btn-ghost mt-3" onClick={logout} type="button">
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="mt-5">
      <div className="row-between" style={{ marginBottom: 16 }}>
        <div>
          <div className="kicker">Editing</div>
          <h2 className="display display-s">{venture.name}</h2>
          <a className="link" href={`/${venture.slug}`} target="_blank" rel="noreferrer">
            View public profile ↗
          </a>
        </div>
        <button className="btn btn-ghost btn-sm" onClick={logout} type="button">
          Sign out
        </button>
      </div>

      <form className="stack-md" onSubmit={save}>
        {EDITABLE.map((f) => (
          <div className="field" key={f.key as string}>
            <label htmlFor={`po-${f.key as string}`}>{f.label}</label>
            {f.textarea ? (
              <textarea
                id={`po-${f.key as string}`}
                className="textarea"
                rows={3}
                value={form[f.key as string] ?? ""}
                onChange={(e) =>
                  setForm((s) => ({ ...s, [f.key as string]: e.target.value }))
                }
              />
            ) : (
              <input
                id={`po-${f.key as string}`}
                className="input"
                type={f.type || "text"}
                value={form[f.key as string] ?? ""}
                onChange={(e) =>
                  setForm((s) => ({ ...s, [f.key as string]: e.target.value }))
                }
              />
            )}
          </div>
        ))}
        {error ? (
          <p style={{ color: "var(--copper-700)", fontSize: 14, margin: 0 }}>{error}</p>
        ) : null}
        <div className="row">
          <button className="btn btn-primary" type="submit" disabled={busy}>
            {busy ? "Saving…" : "Save changes"}
          </button>
          {saved ? (
            <span style={{ color: "var(--tea-700)", fontSize: 14 }}>Saved ✓</span>
          ) : null}
        </div>
      </form>
    </div>
  );
}
