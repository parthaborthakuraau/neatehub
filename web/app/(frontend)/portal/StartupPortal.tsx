"use client";

import { useEffect, useState } from "react";

/* The full set of venture fields a founder controls on their public page. */
type Scalar = {
  key: string;
  label: string;
  textarea?: boolean;
  type?: string;
  select?: string[];
};

const SCALARS: Scalar[] = [
  { key: "name", label: "Venture name" },
  { key: "tagline", label: "Hero tagline", textarea: true },
  { key: "oneLiner", label: "Short description (card + hero)", textarea: true },
  { key: "sector", label: "Sector", select: ["Agri-Input", "Post-Harvest", "Livestock", "Aqua", "Food", "Rural Fintech"] },
  { key: "stage", label: "Stage", select: ["idea", "early", "growth"] },
  { key: "year", label: "Cohort year", type: "number" },
  { key: "program", label: "Program label (e.g. Saranya · RKVY)" },
  { key: "location", label: "Location (e.g. Jorhat, AS)" },
  { key: "hq", label: "Headquarters" },
  { key: "founded", label: "Founded (e.g. Feb 2021)" },
  { key: "teamSize", label: "Team size", type: "number" },
  { key: "website", label: "Website" },
  { key: "status", label: "Status", select: ["active", "acquired", "dormant", "closed"] },
  { key: "roundLabel", label: "Latest round (e.g. Series A)" },
  { key: "roundDate", label: "Round date (e.g. April 2026)" },
  { key: "hiring", label: "Hiring (e.g. 2 open roles)" },
  { key: "investorContact", label: "Investor contact" },
  { key: "photoTreatment", label: "Photo tone", select: ["default", "tea", "copper"] },
];

type ArrField = { key: string; label: string; textarea?: boolean; select?: string[]; checkbox?: boolean };
type ArrSpec = { key: string; title: string; template: Record<string, unknown>; fields: ArrField[] };

const ARRAYS: ArrSpec[] = [
  { key: "facts", title: "Quick facts", template: { k: "", v: "", sub: "" }, fields: [{ key: "k", label: "Label" }, { key: "v", label: "Value" }, { key: "sub", label: "Sub-note" }] },
  { key: "body", title: "Story (body)", template: { kind: "paragraph", text: "", cite: "" }, fields: [{ key: "kind", label: "Block type", select: ["h2", "h3", "paragraph", "quote", "figure"] }, { key: "text", label: "Text / caption", textarea: true }, { key: "cite", label: "Quote attribution / photo brief" }] },
  { key: "founders", title: "Founders", template: { name: "", role: "", bio: "", photoTreatment: "default" }, fields: [{ key: "name", label: "Name" }, { key: "role", label: "Role" }, { key: "bio", label: "Bio", textarea: true }, { key: "photoTreatment", label: "Photo tone", select: ["default", "tea", "copper"] }] },
  { key: "milestones", title: "Milestones", template: { when: "", what: "", detail: "", funded: false }, fields: [{ key: "when", label: "When" }, { key: "what", label: "What" }, { key: "detail", label: "Detail", textarea: true }, { key: "funded", label: "NEATeHUB-funded", checkbox: true }] },
  { key: "funding", title: "Funding history", template: { round: "", amount: "", source: "", neatehubRole: "", date: "" }, fields: [{ key: "round", label: "Round" }, { key: "amount", label: "Amount" }, { key: "source", label: "Lead / source" }, { key: "neatehubRole", label: "NEATeHUB role" }, { key: "date", label: "Date" }] },
  { key: "press", title: "Press & coverage", template: { outlet: "", headline: "", date: "", url: "#" }, fields: [{ key: "outlet", label: "Outlet" }, { key: "headline", label: "Headline" }, { key: "date", label: "Date" }, { key: "url", label: "URL" }] },
  { key: "programTags", title: "Program tags (sidebar pills)", template: { label: "", current: false }, fields: [{ key: "label", label: "Label" }, { key: "current", label: "Current", checkbox: true }] },
  { key: "sdgs", title: "Sustainable Development Goals", template: { num: "", label: "" }, fields: [{ key: "num", label: "SDG number" }, { key: "label", label: "SDG label" }] },
];

type Venture = Record<string, unknown> & { id: string | number; name?: string; slug?: string };

export default function StartupPortal() {
  const [phase, setPhase] = useState<"checking" | "login" | "editing">("checking");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [venture, setVenture] = useState<Venture | null>(null);
  const [saved, setSaved] = useState(false);

  async function loadVenture(userId: string | number) {
    const res = await fetch(
      `/api/ventures?where[owner][equals]=${userId}&depth=0&limit=1`,
      { credentials: "include" }
    );
    const data = await res.json();
    setVenture(data?.docs?.[0] ?? null);
    setPhase("editing");
  }

  useEffect(() => {
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
      if (res.ok && data?.user?.id) await loadVenture(data.user.id);
      else setError(data?.errors?.[0]?.message || "Login failed. Check your credentials.");
    } catch {
      setError("Login failed. Please try again.");
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

  // --- form helpers ---
  function setField(key: string, value: unknown) {
    setSaved(false);
    setVenture((v) => (v ? { ...v, [key]: value } : v));
  }
  function getArr(key: string): Record<string, unknown>[] {
    return (venture?.[key] as Record<string, unknown>[] | undefined) ?? [];
  }
  function setArr(key: string, items: Record<string, unknown>[]) {
    setField(key, items);
  }

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (!venture) return;
    setBusy(true);
    setSaved(false);
    setError("");
    const body: Record<string, unknown> = {};
    for (const f of SCALARS) {
      const raw = venture[f.key];
      body[f.key] = f.type === "number" ? (raw === "" || raw == null ? null : Number(raw)) : raw ?? "";
    }
    for (const a of ARRAYS) body[a.key] = venture[a.key] ?? [];
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

  if (phase === "checking") return <p className="lede mt-4">Loading…</p>;

  if (phase === "login") {
    return (
      <form className="stack-md mt-5" style={{ maxWidth: 420 }} onSubmit={login}>
        <div className="field">
          <label htmlFor="po-email">Email</label>
          <input id="po-email" className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="field">
          <label htmlFor="po-pass">Password</label>
          <input id="po-pass" className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error ? <p style={{ color: "var(--copper-700)", fontSize: 14, margin: 0 }}>{error}</p> : null}
        <button className="btn btn-primary" type="submit" disabled={busy}>
          {busy ? "Signing in…" : "Sign in"}
        </button>
        <p style={{ fontSize: 13, color: "var(--ink-500)", margin: 0 }}>
          Use the email NEATeHUB set up for your venture. A one-time-code sign-in is coming soon.
        </p>
      </form>
    );
  }

  if (!venture) {
    return (
      <div className="mt-5">
        <p className="lede">
          You&apos;re signed in, but no venture is linked to this account yet.
          NEATeHUB will assign your venture shortly.
        </p>
        <button className="btn btn-ghost mt-3" onClick={logout} type="button">Sign out</button>
      </div>
    );
  }

  return (
    <div className="mt-5">
      <div className="row-between" style={{ marginBottom: 24 }}>
        <div>
          <div className="kicker">Editing — you control everything below</div>
          <h2 className="display display-s">{venture.name as string}</h2>
          <a className="link" href={`/${venture.slug}`} target="_blank" rel="noreferrer">
            View public profile ↗
          </a>
        </div>
        <button className="btn btn-ghost btn-sm" onClick={logout} type="button">Sign out</button>
      </div>

      <form className="stack-lg" onSubmit={save}>
        {/* Basics */}
        <section className="po-section">
          <h3 className="h-section">Basics</h3>
          <div className="po-grid">
            {SCALARS.map((f) => (
              <div className="field" key={f.key}>
                <label htmlFor={`po-${f.key}`}>{f.label}</label>
                {f.select ? (
                  <select id={`po-${f.key}`} className="select" value={String(venture[f.key] ?? "")} onChange={(e) => setField(f.key, e.target.value)}>
                    <option value="">—</option>
                    {f.select.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                ) : f.textarea ? (
                  <textarea id={`po-${f.key}`} className="textarea" rows={2} value={String(venture[f.key] ?? "")} onChange={(e) => setField(f.key, e.target.value)} />
                ) : (
                  <input id={`po-${f.key}`} className="input" type={f.type || "text"} value={String(venture[f.key] ?? "")} onChange={(e) => setField(f.key, e.target.value)} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Repeatable sections */}
        {ARRAYS.map((a) => {
          const items = getArr(a.key);
          return (
            <section className="po-section" key={a.key}>
              <div className="row-between">
                <h3 className="h-section">{a.title}</h3>
                <button type="button" className="btn btn-ghost btn-sm" onClick={() => setArr(a.key, [...items, { ...a.template }])}>
                  + Add
                </button>
              </div>
              {items.length === 0 ? (
                <p style={{ color: "var(--ink-500)", fontSize: 14, margin: "8px 0 0" }}>None yet.</p>
              ) : (
                items.map((item, idx) => (
                  <div className="po-item" key={idx}>
                    <div className="po-grid">
                      {a.fields.map((f) => (
                        <div className={`field${f.textarea ? " po-wide" : ""}`} key={f.key}>
                          <label>{f.label}</label>
                          {f.checkbox ? (
                            <label style={{ display: "inline-flex", gap: 8, alignItems: "center", textTransform: "none", fontWeight: 400 }}>
                              <input type="checkbox" checked={Boolean(item[f.key])} onChange={(e) => { const next = [...items]; next[idx] = { ...item, [f.key]: e.target.checked }; setArr(a.key, next); }} />
                              Yes
                            </label>
                          ) : f.select ? (
                            <select className="select" value={String(item[f.key] ?? "")} onChange={(e) => { const next = [...items]; next[idx] = { ...item, [f.key]: e.target.value }; setArr(a.key, next); }}>
                              {f.select.map((o) => <option key={o} value={o}>{o}</option>)}
                            </select>
                          ) : f.textarea ? (
                            <textarea className="textarea" rows={2} value={String(item[f.key] ?? "")} onChange={(e) => { const next = [...items]; next[idx] = { ...item, [f.key]: e.target.value }; setArr(a.key, next); }} />
                          ) : (
                            <input className="input" type="text" value={String(item[f.key] ?? "")} onChange={(e) => { const next = [...items]; next[idx] = { ...item, [f.key]: e.target.value }; setArr(a.key, next); }} />
                          )}
                        </div>
                      ))}
                    </div>
                    <button type="button" className="po-remove" onClick={() => setArr(a.key, items.filter((_, i) => i !== idx))}>
                      Remove
                    </button>
                  </div>
                ))
              )}
            </section>
          );
        })}

        {error ? <p style={{ color: "var(--copper-700)", fontSize: 14, margin: 0 }}>{error}</p> : null}
        <div className="row po-save">
          <button className="btn btn-primary btn-lg" type="submit" disabled={busy}>
            {busy ? "Saving…" : "Save all changes"}
          </button>
          {saved ? <span style={{ color: "var(--tea-700)", fontSize: 14 }}>Saved ✓ — refresh your public page to see it.</span> : null}
        </div>
      </form>
    </div>
  );
}
