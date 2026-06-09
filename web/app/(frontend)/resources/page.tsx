import type { Metadata } from "next";
import "./resources.css";
import { getDownloads, getImpactReports, getMentors } from "../lib/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Downloads, newsletter archive, impact reports, and the public NEATeHUB mentor directory.",
};

// Static with ISR — reflects CMS edits within a minute, stays fast.
export const revalidate = 60;

function DownloadIcon() {
  return (
    <span className="dl">
      <svg width="14" height="14" viewBox="0 0 14 14">
        <path
          d="M7 1v10M3 7l4 4 4-4M1 13h12"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
        />
      </svg>
    </span>
  );
}

export default async function ResourcesPage() {
  const [downloads, reports, mentors] = await Promise.all([
    getDownloads(),
    getImpactReports(),
    getMentors(),
  ]);

  return (
    <>
      <section className="rs-hero">
        <div className="container">
          <div className="eyebrow">Resources</div>
          <h1>Downloads, archives, and the mentor directory.</h1>
          <div className="rs-tiles">
            <a href="#downloads" className="rs-tile">
              <div className="num">01</div>
              <h3>Downloads</h3>
              <div className="count">{downloads.length} documents</div>
            </a>
            <a href="#newsletters" className="rs-tile">
              <div className="num">02</div>
              <h3>Newsletter archive</h3>
              <div className="count">22 issues</div>
            </a>
            <a href="#impact" className="rs-tile">
              <div className="num">03</div>
              <h3>Impact Reports</h3>
              <div className="count">{reports.length} reports</div>
            </a>
            <a href="#mentors" className="rs-tile">
              <div className="num">04</div>
              <h3>Mentor directory</h3>
              <div className="count">200+ mentors</div>
            </a>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section style={{ paddingTop: 0 }} id="downloads">
        <div className="container">
          <h2 className="h-section">Downloads</h2>
          <div className="rs-list">
            {downloads.map((d) => (
              <a className="rs-row" href={d.fileUrl || "#"} key={d.slug}>
                <div className="ext">{d.ext}</div>
                <div className="name">{d.title}</div>
                <div className="desc">{d.description}</div>
                <div className="meta">
                  {d.size}
                  {d.size && d.updated ? " · " : ""}
                  {d.updated ? `Updated ${d.updated}` : ""}
                </div>
                <DownloadIcon />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Impact reports */}
      <section className="bg-cream-100" id="impact">
        <div className="container">
          <div className="row-between">
            <div>
              <div className="eyebrow">Impact reports</div>
              <h2 className="display display-m mt-2">What the numbers bought.</h2>
            </div>
          </div>
          <div className="grid-3 mt-4">
            {reports.map((r) => (
              <a href={r.reportUrl || "#"} className="card" style={{ padding: 28 }} key={r.slug}>
                <div className="kicker">{r.period}</div>
                <h3 className="display display-s mt-2" style={{ marginBottom: 8 }}>
                  {r.headline}
                </h3>
                <p style={{ color: "var(--ink-700)", margin: 0 }}>{r.summary}</p>
                <div className="kicker mt-3" style={{ color: "var(--copper-700)" }}>
                  Read the report →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor directory */}
      <section id="mentors">
        <div className="container">
          <div className="row-between">
            <div>
              <div className="eyebrow">Mentor directory · Public view</div>
              <h2 className="display display-m mt-2">200+ domain mentors.</h2>
              <p className="lede mt-2">
                Names, expertise, one-line credentials. Full profiles and
                &quot;request connect&quot; are gated for active portfolio
                founders.
              </p>
            </div>
            <a href="#" className="btn btn-ghost">
              View all 200+ <span className="arrow">→</span>
            </a>
          </div>

          <div className="mentor-grid mt-5">
            {mentors.map((m) => (
              <div className="mentor" key={m.slug}>
                <div className="av">{m.initials}</div>
                <div className="name">{m.name}</div>
                <div className="role">{m.expertise}</div>
                <p className="cred">{m.credential}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
