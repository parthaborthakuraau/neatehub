import type { Metadata } from "next";
import "./about.css";
import EcosystemMap from "./EcosystemMap";
import { getCareers } from "../lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "NEATeHUB is a Section-8 agri-tech incubator established 2018 at Assam Agricultural University, Jorhat — funded by RKVY, NITI Aayog (AIM), ASRLM, and AAU, and recognised as a Centre of Excellence by DA&FW.",
};

// Static with ISR so the CMS-driven careers list stays current.
export const revalidate = 60;

export default async function AboutPage() {
  const careers = await getCareers();

  return (
    <>
      <section className="ab-hero">
        <div className="container">
          <div className="eyebrow">About NEATeHUB</div>
          <h1>An agri-tech incubator with regional roots and institutional weight.</h1>
          <p className="lede">
            A Section-8 company established 2018 at Assam Agricultural University,
            Jorhat. Funded by RKVY, NITI Aayog (AIM), ASRLM, and AAU. Recognised
            as a Centre of Excellence by the Department of Agriculture and
            Farmers&apos; Welfare, Government of India.
          </p>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="ab-pillars">
            <div>
              <div className="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 11l8-6 8 6M6 10v9h12v-9M10 19v-5h4v5" />
                </svg>
              </div>
              <h3>Housed at AAU</h3>
              <p>
                Co-located on the Assam Agricultural University campus in Jorhat.
                Direct access to 70+ faculty, 12 research stations, and a century
                of agricultural research infrastructure.
              </p>
            </div>
            <div>
              <div className="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.3L12 15.3 7.2 17.8l.9-5.3L4.2 8.7l5.4-.8L12 3z" />
                </svg>
              </div>
              <h3>Government-recognised</h3>
              <p>
                Centre of Excellence - Department of Agriculture &amp;
                Farmers&apos; Welfare. Knowledge Partner - NITI Aayog (AIM).
                Institutional partner - Assam State Rural Livelihoods Mission.
              </p>
            </div>
            <div>
              <div className="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
                </svg>
              </div>
              <h3>Regionally accountable</h3>
              <p>
                Eight Northeast states, eight ecologies. We work with state KVKs,
                FPOs, and producer collectives - the institutional plumbing that
                translates innovation into adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section>
        <div className="container">
          <div className="row-between mb-3">
            <div>
              <div className="eyebrow">Section 02</div>
              <h2 className="display display-m mt-2">Eight years, deliberately.</h2>
            </div>
          </div>
          <div className="timeline mt-5">
            <div className="tl-item">
              <div className="year">2018</div>
              <div className="body">
                <h4>Founded</h4>
                <p>Incorporated as a Section-8 company at AAU Jorhat. RKVY RAFTAAR scoping begins.</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="year">2019</div>
              <div className="body">
                <h4>First cohort</h4>
                <p>Isanya Cohort 1 - eight founders, two-month residential. ₹38L deployed.</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="year">2020</div>
              <div className="body">
                <h4>RKVY RAFTAAR active</h4>
                <p>First RKVY-funded ventures begin. AIM partnership formalised.</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="year">2022</div>
              <div className="body">
                <h4>Saranya launched</h4>
                <p>Stage-based growth program - non-residential, milestone-tranched capital up to ₹25L.</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="year">2024</div>
              <div className="body">
                <h4>Robotics Lab inaugurated</h4>
                <p>Shared infrastructure for deep-tech agri ventures. Build Lab and AI First follow.</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="year">2025</div>
              <div className="body">
                <h4>Centre of Excellence</h4>
                <p>Designated CoE by DA&amp;FW, Government of India. 250th venture incubated.</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="year">2026</div>
              <div className="body">
                <h4>Roadmap to 500</h4>
                <p>Targeting 500+ ventures and ₹15Cr deployed over the next three years.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="bg-cream-100" id="directors">
        <div className="container">
          <div className="row-between mb-3">
            <div>
              <div className="eyebrow">Directors</div>
              <h2 className="display display-m mt-2">The people accountable.</h2>
            </div>
          </div>
          <div className="dir-grid mt-5">
            <div className="dir-card">
              <div className="photo" aria-hidden="true">
                <div className="photo-label">
                  PHOTO: Dr. Bhattacharyya, environmental portrait at AAU lab,
                  eye-level, natural light
                </div>
              </div>
              <h3>Dr. A.K. Bhattacharyya</h3>
              <div className="title">Director · NEATeHUB</div>
              <blockquote>
                Agriculture in the Northeast is not a sector - it is the substrate.
              </blockquote>
            </div>
            <div className="dir-card">
              <div className="photo" aria-hidden="true">
                <div className="photo-label">
                  PHOTO: Director Operations, at field station, mid-shot
                </div>
              </div>
              <h3>Dr. P. Saikia</h3>
              <div className="title">Director - Operations</div>
              <blockquote>
                What&apos;s missing in NE agri is not ideas - it&apos;s
                institutional patience. We sell time.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team">
        <div className="container">
          <div className="row-between">
            <div>
              <div className="eyebrow">Team</div>
              <h2 className="display display-m mt-2">A small team, on the ground.</h2>
              <p className="lede mt-2">
                14 staff across program management, mentorship, operations, and
                finance. Embedded with AAU faculty and state-government partners.
              </p>
            </div>
          </div>
          <div className="team-grid mt-5">
            <div className="team-card"><div className="photo"><div className="photo-label">Headshot - natural light</div></div><div className="name">Rituparna Borah</div><div className="role">Programs Lead</div></div>
            <div className="team-card"><div className="photo photo-tea"><div className="photo-label">Headshot</div></div><div className="name">Anirban Das</div><div className="role">RKVY Program Manager</div></div>
            <div className="team-card"><div className="photo"><div className="photo-label">Headshot</div></div><div className="name">Mridusmita Kalita</div><div className="role">Mentor Network</div></div>
            <div className="team-card"><div className="photo photo-copper"><div className="photo-label">Headshot</div></div><div className="name">Khanin Phukan</div><div className="role">Operations</div></div>
            <div className="team-card"><div className="photo"><div className="photo-label">Headshot</div></div><div className="name">Bidisha Gogoi</div><div className="role">Finance &amp; Grants</div></div>
            <div className="team-card"><div className="photo photo-tea"><div className="photo-label">Headshot</div></div><div className="name">Tridib Saharia</div><div className="role">Saranya Program</div></div>
            <div className="team-card"><div className="photo photo-copper"><div className="photo-label">Headshot</div></div><div className="name">Nilakshi Hazarika</div><div className="role">Communications</div></div>
            <div className="team-card"><div className="photo"><div className="photo-label">Headshot</div></div><div className="name">Pranab Borgohain</div><div className="role">Infrastructure</div></div>
          </div>
        </div>
      </section>

      {/* Partners + Ecosystem map */}
      <section className="bg-tea" id="partners">
        <div className="container">
          <div className="row-between">
            <div>
              <div className="eyebrow">Partners &amp; Funders</div>
              <h2 className="display display-m mt-2" style={{ color: "var(--cream-50)" }}>
                Backed by the institutions that matter.
              </h2>
              <p className="lede mt-2" style={{ maxWidth: "56ch" }}>
                We sit inside an ecosystem of funders, host institutions, mentor
                networks, and producer collectives. Below - the map, then the
                partners.
              </p>
            </div>
          </div>

          {/* Inline ecosystem map */}
          <EcosystemMap />

          <div className="partner-grid mt-5">
            <div className="partner-cell" style={{ background: "rgba(250,246,238,0.05)", borderColor: "rgba(216,205,181,0.2)" }}>
              <div><div className="nm" style={{ color: "var(--cream-50)" }}>RKVY RAFTAAR</div><div className="ctx" style={{ color: "var(--cream-300)" }}>Ministry of Agriculture</div></div>
            </div>
            <div className="partner-cell" style={{ background: "rgba(250,246,238,0.05)", borderColor: "rgba(216,205,181,0.2)" }}>
              <div><div className="nm" style={{ color: "var(--cream-50)" }}>NITI Aayog</div><div className="ctx" style={{ color: "var(--cream-300)" }}>Atal Innovation Mission</div></div>
            </div>
            <div className="partner-cell" style={{ background: "rgba(250,246,238,0.05)", borderColor: "rgba(216,205,181,0.2)" }}>
              <div><div className="nm" style={{ color: "var(--cream-50)" }}>ASRLM</div><div className="ctx" style={{ color: "var(--cream-300)" }}>Govt of Assam</div></div>
            </div>
            <div className="partner-cell" style={{ background: "rgba(250,246,238,0.05)", borderColor: "rgba(216,205,181,0.2)" }}>
              <div><div className="nm" style={{ color: "var(--cream-50)" }}>AAU Jorhat</div><div className="ctx" style={{ color: "var(--cream-300)" }}>Host institution</div></div>
            </div>
            <div className="partner-cell" style={{ background: "rgba(250,246,238,0.05)", borderColor: "rgba(216,205,181,0.2)" }}>
              <div><div className="nm" style={{ color: "var(--cream-50)" }}>DA&amp;FW</div><div className="ctx" style={{ color: "var(--cream-300)" }}>Centre of Excellence</div></div>
            </div>
            <div className="partner-cell" style={{ background: "rgba(250,246,238,0.05)", borderColor: "rgba(216,205,181,0.2)" }}>
              <div><div className="nm" style={{ color: "var(--cream-50)" }}>DST · NSTEDB</div><div className="ctx" style={{ color: "var(--cream-300)" }}>National network</div></div>
            </div>
            <div className="partner-cell" style={{ background: "rgba(250,246,238,0.05)", borderColor: "rgba(216,205,181,0.2)" }}>
              <div><div className="nm" style={{ color: "var(--cream-50)" }}>ICAR</div><div className="ctx" style={{ color: "var(--cream-300)" }}>Research linkage</div></div>
            </div>
            <div className="partner-cell" style={{ background: "rgba(250,246,238,0.05)", borderColor: "rgba(216,205,181,0.2)" }}>
              <div><div className="nm" style={{ color: "var(--cream-50)" }}>IIT Guwahati</div><div className="ctx" style={{ color: "var(--cream-300)" }}>Build Club partnership</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers">
        <div className="container">
          <div className="row-between mb-3">
            <div>
              <div className="eyebrow">Careers</div>
              <h2 className="display display-m mt-2">Build the institution with us.</h2>
              <p className="lede mt-2">
                We hire infrequently and carefully. Open roles right now:
              </p>
            </div>
            <a href="#" className="btn btn-ghost">Open application →</a>
          </div>

          <div className="mt-4">
            {careers.length === 0 ? (
              <p className="lede">
                No open roles right now — but we&apos;re always glad to hear from
                people who want to build the Northeast&apos;s agri-tech ecosystem.
              </p>
            ) : (
              careers.map((c) => (
                <a className="career-row" href={c.applyUrl || "#"} key={c.slug}>
                  <div className="role">{c.role}</div>
                  <div className="desc">{c.summary}</div>
                  <div className="meta">{c.location}</div>
                  <span className="arrow">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </span>
                </a>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-cream-100" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="eyebrow">Get in touch</div>
              <h2 className="display display-m mt-2">Talk to a human.</h2>
              <p className="lede mt-2">
                Most questions are program-shaped - try the AI assistant or the
                eligibility wizard first. For media, partnerships, or escalations,
                use the channels below.
              </p>

              <div className="contact-channel">
                <div className="k">General</div>
                <div className="v">hello@neatehub.org</div>
                <div className="ctx">5-working-day response. For founders: include your stage and sector in the subject line.</div>
              </div>
              <div className="contact-channel">
                <div className="k">Programs</div>
                <div className="v">programs@neatehub.org</div>
                <div className="ctx">Application status, eligibility queries, cohort questions.</div>
              </div>
              <div className="contact-channel">
                <div className="k">Press</div>
                <div className="v">press@neatehub.org</div>
                <div className="ctx">Media kit, founder intros, embargoed interviews.</div>
              </div>
              <div className="contact-channel">
                <div className="k">Escalation</div>
                <div className="v">director@neatehub.org</div>
                <div className="ctx">Use only after the other channels haven&apos;t responded in 10 working days.</div>
              </div>
            </div>

            <div>
              <div className="photo" style={{ aspectRatio: "4/5", borderRadius: "var(--r-lg)" }} aria-hidden="true">
                <div className="photo-label">
                  PHOTO: NEATeHUB main entrance signage with AAU campus context,
                  late-afternoon golden hour
                </div>
              </div>
              <div style={{ marginTop: 16, padding: 20, background: "var(--cream-50)", borderRadius: "var(--r-md)", fontFamily: "var(--mono)", fontSize: 13, lineHeight: 1.7 }}>
                NEATeHUB,<br />
                Assam Agricultural University,<br />
                Borbheta, Jorhat - 785013,<br />
                Assam, India<br /><br />
                26.7271° N · 94.2037° E
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
