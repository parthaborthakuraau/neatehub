import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVentureBySlug } from "../../lib/ventures";

export const dynamic = "force-dynamic";

const STAGE_LABEL: Record<string, string> = {
  idea: "Idea stage",
  early: "Early stage",
  growth: "Growth stage",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const v = await getVentureBySlug(slug);
  if (!v) return { title: "Venture not found" };
  return {
    title: `${v.name} — Portfolio`,
    description: v.oneLiner ?? `${v.name} — a NEATeHUB-backed venture.`,
  };
}

export default async function VentureProfile({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = await getVentureBySlug(slug);
  if (!v) notFound();

  const photoClass =
    v.photoTreatment === "tea"
      ? "photo-tea"
      : v.photoTreatment === "copper"
      ? "photo-copper"
      : "";

  return (
    <>
      <nav
        className="crumb"
        aria-label="Breadcrumb"
        style={{
          padding: "16px var(--gutter) 0",
          maxWidth: "var(--max)",
          margin: "0 auto",
          fontFamily: "var(--sans)",
          fontSize: 12,
          fontWeight: 500,
          textTransform: "uppercase",
          color: "var(--ink-500)",
        }}
      >
        <Link href="/">Home</Link>
        <span style={{ margin: "0 8px", opacity: 0.5 }}>/</span>
        <Link href="/portfolio">Portfolio</Link>
        <span style={{ margin: "0 8px", opacity: 0.5 }}>/</span>
        <span style={{ color: "var(--ink-900)" }}>{v.name}</span>
      </nav>

      <section>
        <div className="container">
          <div className="eyebrow">
            {v.program ? v.program : "NEATeHUB venture"}
          </div>
          <h1 className="display display-l mt-2">{v.name}</h1>
          {v.oneLiner ? <p className="lede mt-3">{v.oneLiner}</p> : null}

          <div className="row mt-4">
            {v.sector ? <span className="badge badge-soft">{v.sector}</span> : null}
            {v.stage ? (
              <span className="badge">{STAGE_LABEL[v.stage] ?? v.stage}</span>
            ) : null}
            {v.year ? <span className="badge">{v.year}</span> : null}
            {v.location ? <span className="badge">⌖ {v.location}</span> : null}
          </div>

          <div
            className={`photo ${photoClass} mt-5`}
            style={{ aspectRatio: "16/7", borderRadius: "var(--r-lg)", minHeight: 240 }}
            aria-hidden="true"
          >
            <div className="photo-label">
              PHOTO: {v.name} — founder + product
              {v.location ? `, ${v.location.split(",")[0]}` : ""}
            </div>
          </div>

          <div className="mt-5">
            <p className="lede" style={{ color: "var(--ink-500)" }}>
              This is a public venture profile. A fuller profile — founders,
              milestones, funding rounds, and press — is maintained by the venture
              team.
            </p>
            <div className="row mt-3">
              <Link href="/portfolio" className="btn btn-ghost">
                ← Back to portfolio
              </Link>
              <Link href="/for-founders#wizard" className="btn btn-primary">
                Apply to a program <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
