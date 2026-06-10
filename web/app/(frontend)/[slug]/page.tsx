import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import "./profile.css";
import {
  getVentureBySlug,
  getVentureCards,
  type VentureDoc,
} from "../lib/ventures";

export const dynamic = "force-dynamic";

// Top-level paths that must NEVER resolve to a venture vanity slug.
// (Static routes already take precedence; this is a defensive guard.)
const RESERVED = new Set([
  "about", "programs", "for-founders", "portfolio", "infrastructure",
  "insights", "resources", "ask", "search", "portal", "admin", "api",
  "dev-seed", "sitemap.xml", "robots.txt", "favicon.ico", "_next",
]);

const STAGE_LABEL: Record<string, string> = {
  idea: "Idea stage",
  early: "Early stage",
  growth: "Growth stage",
};

function yearLabel(year?: number | null): string {
  return year ? `'${String(year).slice(-2)}` : "";
}

function photoClass(t?: string | null): string {
  return t === "tea" ? "photo-tea" : t === "copper" ? "photo-copper" : "";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (RESERVED.has(slug)) return {};
  const v = await getVentureBySlug(slug);
  if (!v) return { title: "Venture not found" };
  return {
    title: `${v.name} — NEATeHUB`,
    description: v.tagline ?? v.oneLiner ?? `${v.name} — a NEATeHUB-backed venture.`,
    alternates: { canonical: `/${slug}` },
  };
}

function BodyBlock({
  block,
}: {
  block: NonNullable<VentureDoc["body"]>[number];
}) {
  const { kind, text, cite } = block;
  if (!text && kind !== "figure") return null;
  switch (kind) {
    case "eyebrow":
      return <div className="eyebrow">{text}</div>;
    case "h2":
      return <h2>{text}</h2>;
    case "h3":
      return <h3>{text}</h3>;
    case "quote":
      return (
        <blockquote>
          {text}
          {cite ? <cite>{cite}</cite> : null}
        </blockquote>
      );
    case "figure":
      return (
        <figure className="vp-figure">
          <div className="photo">
            <div className="photo-label">{cite || "PHOTO"}</div>
          </div>
          {text ? <figcaption>{text}</figcaption> : null}
        </figure>
      );
    default:
      return <p>{text}</p>;
  }
}

export default async function VentureProfile({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (RESERVED.has(slug)) notFound();
  const v = await getVentureBySlug(slug);
  if (!v) notFound();

  const related = (await getVentureCards())
    .filter((c) => c.slug !== v.slug)
    .slice(0, 3);

  const hq = v.hq || v.location || "";
  const pitch = v.tagline || v.oneLiner || "";
  const statusLabel = v.status
    ? v.status.charAt(0).toUpperCase() + v.status.slice(1)
    : "Active";

  return (
    <>
      <nav className="crumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">/</span>
        <Link href="/portfolio">Portfolio</Link>
        <span className="sep">/</span>
        <span className="cur">{v.name}</span>
      </nav>

      {/* Hero */}
      <section className="vp-hero">
        <div className="container">
          <div className="vp-hero__head">
            <div>
              <div className="vp-hero__chips">
                {v.roundLabel ? (
                  <span className="badge badge-copper">
                    {v.roundLabel}
                    {v.roundDate ? ` · ${v.roundDate}` : ""}
                  </span>
                ) : null}
                {v.sector ? <span className="badge">{v.sector}</span> : null}
                {v.program ? (
                  <span className="badge">
                    {v.program}
                    {yearLabel(v.year) ? ` ${yearLabel(v.year)}` : ""}
                  </span>
                ) : null}
                {v.location ? <span className="badge">{v.location}</span> : null}
              </div>
              <h1>{v.name}</h1>
              {pitch ? (
                <p className="vp-hero__pitch" style={{ marginTop: 24 }}>
                  {pitch}
                </p>
              ) : null}
            </div>
            <div className="vp-hero__visit">
              <div className="vp-hero__row">
                <div>
                  <div className="k">Website</div>
                  <div className="v">
                    {v.website ? (
                      <a href="#" target="_blank" rel="noreferrer">
                        {v.website} ↗
                      </a>
                    ) : (
                      "—"
                    )}
                  </div>
                </div>
                <div>
                  <div className="k">Founded</div>
                  <div className="v">{v.founded || yearLabel(v.year) || "—"}</div>
                </div>
              </div>
              <div className="vp-hero__row" style={{ marginTop: 18 }}>
                <div>
                  <div className="k">Team size</div>
                  <div className="v">
                    {v.teamSize ?? "—"}
                    {hq ? <small> HQ in {hq.split(",")[0]}</small> : null}
                  </div>
                </div>
                <div>
                  <div className="k">Sector</div>
                  <div className="v">{v.sector || "—"}</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`photo ${photoClass(v.photoTreatment)} vp-hero__photo`}>
            <div className="photo-label">
              PHOTO: {v.name} — founder + product
              {v.location ? `, ${v.location.split(",")[0]}` : ""}
            </div>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      {v.facts && v.facts.length ? (
        <section style={{ padding: 0 }}>
          <div className="container">
            <div className="vp-facts">
              {v.facts.map((f, i) => (
                <div key={i}>
                  <div className="k">{f.k}</div>
                  <div className="v">
                    {f.v} {f.sub ? <small>{f.sub}</small> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Body + sidebar */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="vp-body">
            <article className="vp-main">
              {v.body?.map((b, i) => (
                <BodyBlock key={i} block={b} />
              ))}

              {v.founders && v.founders.length ? (
                <>
                  <h2>Founders</h2>
                  <div className="founders">
                    {v.founders.map((f, i) => (
                      <div className="founder" key={i}>
                        <div className={`photo ${photoClass(f.photoTreatment)}`}>
                          <div className="photo-label">Founder portrait</div>
                        </div>
                        <div>
                          <h4>{f.name}</h4>
                          {f.role ? <div className="role">{f.role}</div> : null}
                          {f.bio ? <p>{f.bio}</p> : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}

              {v.milestones && v.milestones.length ? (
                <>
                  <h2>Milestones</h2>
                  <div className="milestones">
                    {v.milestones.map((m, i) => (
                      <div
                        className={`milestone${m.funded ? " milestone--funded" : ""}`}
                        key={i}
                      >
                        <div className="when">{m.when}</div>
                        <div className="what">
                          {m.what}
                          {m.detail ? <small>{m.detail}</small> : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}

              {v.funding && v.funding.length ? (
                <>
                  <h2>Funding history</h2>
                  <table className="funding">
                    <thead>
                      <tr>
                        <th>Round</th>
                        <th>Amount</th>
                        <th>Lead / source</th>
                        <th>NEATeHUB role</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {v.funding.map((r, i) => (
                        <tr key={i}>
                          <td>{r.round}</td>
                          <td className="amt">{r.amount}</td>
                          <td>{r.source}</td>
                          <td className="role">{r.neatehubRole}</td>
                          <td>{r.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              ) : null}

              {v.engagement && v.engagement.quote ? (
                <>
                  <h2>NEATeHUB engagement</h2>
                  <div className="engagement">
                    <div className="av">{v.engagement.initials || "NH"}</div>
                    <div>
                      <blockquote>&quot;{v.engagement.quote}&quot;</blockquote>
                      <div className="attr">
                        <strong>{v.engagement.manager}</strong>
                        {v.engagement.role ? ` · ${v.engagement.role}` : ""}
                        {v.engagement.dates ? ` · ${v.engagement.dates}` : ""}
                      </div>
                    </div>
                  </div>
                </>
              ) : null}

              {v.press && v.press.length ? (
                <>
                  <h2>Press &amp; coverage</h2>
                  <ul className="press">
                    {v.press.map((p, i) => (
                      <li key={i}>
                        <a href={p.url || "#"}>
                          <div className="outlet">{p.outlet}</div>
                          <div className="headline">{p.headline}</div>
                        </a>
                        {p.date ? <span className="when">{p.date}</span> : null}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </article>

            {/* Sidebar */}
            <aside className="vp-side">
              {v.programTags && v.programTags.length ? (
                <div className="vp-side__block">
                  <h4>Programs</h4>
                  {v.programTags.map((p, i) => (
                    <span
                      className={`program-pill${p.current ? " is-current" : ""}`}
                      key={i}
                    >
                      {p.label}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="vp-side__block">
                <h4>At a glance</h4>
                <ul>
                  {v.founded ? (
                    <li>
                      <span>Founded</span>
                      <strong>{v.founded}</strong>
                    </li>
                  ) : null}
                  {hq ? (
                    <li>
                      <span>HQ</span>
                      <strong>{hq}</strong>
                    </li>
                  ) : null}
                  {v.teamSize ? (
                    <li>
                      <span>Team</span>
                      <strong>{v.teamSize}</strong>
                    </li>
                  ) : null}
                  {v.sector ? (
                    <li>
                      <span>Sector</span>
                      <strong>{v.sector}</strong>
                    </li>
                  ) : null}
                  {v.stage ? (
                    <li>
                      <span>Stage</span>
                      <strong>{STAGE_LABEL[v.stage] ?? v.stage}</strong>
                    </li>
                  ) : null}
                  <li>
                    <span>Status</span>
                    <strong
                      style={
                        v.status === "active" || !v.status
                          ? { color: "var(--tea-700)" }
                          : undefined
                      }
                    >
                      {statusLabel}
                    </strong>
                  </li>
                </ul>
              </div>

              {v.sdgs && v.sdgs.length ? (
                <div className="vp-side__block">
                  <h4>Sustainable Development Goals</h4>
                  <ul>
                    {v.sdgs.map((s, i) => (
                      <li key={i}>
                        <span>{s.num}</span>
                        <strong>{s.label}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {v.website || v.hiring || v.investorContact ? (
                <div className="vp-side__block">
                  <h4>Get in touch</h4>
                  <ul>
                    {v.website ? (
                      <li>
                        <span>Website</span>
                        <strong>
                          <a href="#" className="link">
                            {v.website}
                          </a>
                        </strong>
                      </li>
                    ) : null}
                    {v.hiring ? (
                      <li>
                        <span>Hiring</span>
                        <strong>
                          <a href="#" className="link">
                            {v.hiring}
                          </a>
                        </strong>
                      </li>
                    ) : null}
                    {v.investorContact ? (
                      <li>
                        <span>Investor inquiries</span>
                        <strong>
                          <a href="#" className="link">
                            {v.investorContact}
                          </a>
                        </strong>
                      </li>
                    ) : null}
                  </ul>
                </div>
              ) : null}

              <div className="vp-side__block" style={{ paddingBottom: 0 }}>
                <h4>Want to support?</h4>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--ink-700)",
                    lineHeight: 1.5,
                    margin: "0 0 14px",
                  }}
                >
                  If you&apos;re an LP, mentor, or strategic partner interested in
                  NEATeHUB&apos;s portfolio, get in touch with our team.
                </p>
                <Link
                  href="/about#contact"
                  className="btn btn-ghost btn-sm"
                  style={{ width: "100%" }}
                >
                  Talk to NEATeHUB <span className="arrow">→</span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related ventures */}
      {related.length ? (
        <section className="bg-cream-100">
          <div className="container">
            <div className="row-between">
              <div>
                <div className="eyebrow">Related ventures</div>
                <h2 className="display display-m mt-2">More from the portfolio.</h2>
              </div>
              <Link href="/portfolio" className="btn btn-ghost">
                All 250+ ventures <span className="arrow">→</span>
              </Link>
            </div>
            <div className="related-vens mt-5">
              {related.map((c) => (
                <Link className="rv" href={c.url} key={c.slug}>
                  <div className={`photo ${photoClass(c.photo)}`}>
                    <div className="photo-label">PHOTO: {c.name}</div>
                  </div>
                  <div className="rv__body">
                    <div className="rv__name">{c.name}</div>
                    <div className="rv__sector">
                      {c.sector}
                      {c.program ? ` · ${c.program}` : ""}
                    </div>
                    <p className="rv__desc">{c.desc}</p>
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
