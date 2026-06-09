import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import "./insight-detail.css";
import NewsletterForm from "../../components/NewsletterForm";
import {
  getInsightBySlug,
  getInsights,
  type InsightBlock,
} from "../../lib/content";

export const dynamic = "force-dynamic";

function photoClass(t?: string | null): string {
  return t === "tea" ? "photo-tea" : t === "copper" ? "photo-copper" : "";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);
  if (!insight) return { title: "Insight not found" };
  return {
    title: `${insight.title}`,
    description: insight.dek ?? undefined,
  };
}

function BodyBlock({ block }: { block: InsightBlock }) {
  const { kind, text, cite } = block;
  switch (kind) {
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
        <figure className="article__fig">
          <div className={`photo ${photoClass(block.photoTreatment)}`}>
            <div className="photo-label">{cite || "PHOTO"}</div>
          </div>
          {text ? <figcaption>{text}</figcaption> : null}
        </figure>
      );
    case "stat":
      return (
        <div className="stat-block">
          {block.stats?.map((s, i) => (
            <div key={i}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      );
    case "list":
      return (
        <ol>
          {block.items?.map((it, i) => (
            <li key={i}>{it.text}</li>
          ))}
        </ol>
      );
    default:
      return <p>{text}</p>;
  }
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);
  if (!insight) notFound();

  const author = insight.author;
  const isFeature = insight.category === "Feature";

  const related = (await getInsights())
    .filter((p) => p.slug !== insight.slug)
    .slice(0, 3);

  return (
    <>
      <nav className="crumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">/</span>
        <Link href="/insights">Insights</Link>
        <span className="sep">/</span>
        <span className="cur">{insight.title}</span>
      </nav>

      <article className="article">
        {/* Article head */}
        <header className="article__head">
          <div className="article__meta-row">
            {insight.category ? (
              <span className={`badge ${isFeature ? "badge-copper" : ""}`}>
                {insight.category}
              </span>
            ) : null}
            {insight.section ? <span>{insight.section}</span> : null}
            {insight.date ? (
              <>
                <span>·</span>
                <span>{insight.date}</span>
              </>
            ) : null}
            {insight.readTime ? (
              <>
                <span>·</span>
                <span>{insight.readTime}</span>
              </>
            ) : null}
          </div>
          <h1>{insight.title}</h1>
          {insight.dek ? <p className="article__dek">{insight.dek}</p> : null}

          {author ? (
            <div className="article__byline">
              <div className="av">{author.initials}</div>
              <div className="who">
                <strong>{author.name}</strong>
                {author.role ? <div className="role">{author.role}</div> : null}
              </div>
              <div className="actions">
                <button className="share-btn" aria-label="Copy link">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M5 9l4-4M3 7L1.5 8.5a2 2 0 0 0 2.8 2.8L6 9.5M8 4.5L9.5 3a2 2 0 0 1 2.8 2.8L11 7"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                </button>
                <button className="share-btn" aria-label="Share">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="3" cy="7" r="2" stroke="currentColor" strokeWidth="1.4" />
                    <circle cx="11" cy="3" r="2" stroke="currentColor" strokeWidth="1.4" />
                    <circle cx="11" cy="11" r="2" stroke="currentColor" strokeWidth="1.4" />
                    <path
                      d="M4.7 8 9.3 10M4.7 6 9.3 4"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                </button>
                <button className="share-btn" aria-label="Bookmark">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 1h8v12l-4-3-4 3V1z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ) : null}
        </header>

        {/* Hero figure */}
        {insight.heroPhotoLabel || insight.heroCaption ? (
          <figure className="article__hero">
            <div className={`photo ${photoClass(insight.photoTreatment)}`}>
              <div className="photo-label">{insight.heroPhotoLabel}</div>
            </div>
            {insight.heroCaption ? (
              <figcaption>{insight.heroCaption}</figcaption>
            ) : null}
          </figure>
        ) : null}

        {/* Body */}
        {insight.body && insight.body.length ? (
          <div className="article__body">
            {insight.body.map((b, i) => (
              <BodyBlock key={i} block={b} />
            ))}
          </div>
        ) : null}

        {/* Footnotes + author */}
        <footer className="article__footer">
          {insight.footnotes && insight.footnotes.length ? (
            <div className="article__footnotes">
              <h4>Footnotes &amp; sources</h4>
              <ol>
                {insight.footnotes.map((f, i) => (
                  <li key={i}>{f.text}</li>
                ))}
              </ol>
            </div>
          ) : null}

          {author ? (
            <div className="article__author">
              <div className="photo">
                <div className="photo-label">PORTRAIT</div>
              </div>
              <div>
                <h4>{author.name}</h4>
                {author.role ? <div className="role">{author.role}</div> : null}
                <p>
                  {author.bio}{" "}
                  <Link href="/about#directors" className="link">
                    More from {author.name} →
                  </Link>
                </p>
              </div>
            </div>
          ) : null}

          {/* Newsletter inline */}
          <div className="newsletter-inline">
            <div>
              <div className="eyebrow">Newsletter</div>
              <h3>Get the quarterly note.</h3>
              <p>
                What we&apos;re seeing in cohorts, open calls, the things we got
                wrong. Four times a year, that&apos;s it.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </footer>
      </article>

      {/* Related posts */}
      {related.length ? (
        <section className="bg-cream-100">
          <div className="container">
            <div className="row-between">
              <div>
                <div className="eyebrow">Keep reading</div>
                <h2 className="display display-m mt-2">More from the field.</h2>
              </div>
              <Link href="/insights" className="btn btn-ghost">
                All insights <span className="arrow">→</span>
              </Link>
            </div>
            <div className="related-posts mt-5">
              {related.map((p) => (
                <Link className="rp" href={`/insights/${p.slug}`} key={p.slug}>
                  <div className={`photo ${photoClass(p.photoTreatment)}`}>
                    <div className="photo-label">{p.heroPhotoLabel}</div>
                  </div>
                  <div className="meta">
                    {p.category ? <span>{p.category}</span> : null}
                    {p.category && p.date ? <span>·</span> : null}
                    {p.date ? <span>{p.date}</span> : null}
                  </div>
                  <h3>{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
