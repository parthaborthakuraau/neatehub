import type { Metadata } from "next";
import Link from "next/link";
import "./programs.css";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Five NEATeHUB programs under different funders — AIC (NITI Aayog), RKVY RAFTAAR, ASRLM, AAU Student First, and Build Club (IIT Guwahati).",
};

type Status = "open" | "rolling" | "closed";

const PROGRAMS: {
  num: string;
  name: string;
  sub: string;
  status: { kind: Status; label: string };
  pitch: string;
  spec: { k: string; v: string }[];
  href: string;
  view: string;
}[] = [
  {
    num: "Program 01 · National",
    name: "AIC",
    sub: "Atal Incubation Centre · NITI Aayog",
    status: { kind: "rolling", label: "Quarterly intake" },
    pitch:
      "National-level incubation under NITI Aayog's Atal Innovation Mission. Pan-India mentor network, dedicated investor days, central-government recognition that opens institutional doors.",
    spec: [
      { k: "Grant", v: "₹10 L" },
      { k: "Duration", v: "18 mo" },
      { k: "Network", v: "Pan-India" },
    ],
    href: "/programs/aic",
    view: "View AIC",
  },
  {
    num: "Program 02 · Central Government",
    name: "RKVY RAFTAAR",
    sub: "Rashtriya Krishi Vikas Yojana · MoA&FW",
    status: { kind: "rolling", label: "Rolling intake" },
    pitch:
      "A central-government scheme with three stage-based sub-programs (Navyam, Isanya, Saranya). Founders enter at the stage that fits, with capital from ₹2L to ₹25L and room to move up as the venture matures.",
    spec: [
      { k: "Capital", v: "₹25 L" },
      { k: "Sub-programs", v: "3" },
      { k: "Format", v: "2-18 mo" },
    ],
    href: "/programs/rkvy-raftaar",
    view: "View RKVY",
  },
  {
    num: "Program 03 · State",
    name: "ASRLM",
    sub: "Assam State Rural Livelihoods Mission · DAY-NRLM",
    status: { kind: "rolling", label: "Continuous" },
    pitch:
      "A rural-enterprise program backing FPOs, producer-led startups, and ventures whose customers are rural households. SHG-linked, deeply embedded in state-government livelihoods infrastructure.",
    spec: [
      { k: "Grant", v: "₹8 L" },
      { k: "Focus", v: "Producer-led" },
      { k: "Geo", v: "Assam" },
    ],
    href: "/programs/asrlm",
    view: "View ASRLM",
  },
  {
    num: "Program 04 · Campus",
    name: "AAU Student First",
    sub: "Campus entrepreneurship · Assam Agricultural University",
    status: { kind: "open", label: "Apply by 15 Aug" },
    pitch:
      "Campus-level program partnered with NE universities. Builds entrepreneurial capacity through workshops, hackathons, founder office hours, and pre-incubation sandbox grants.",
    spec: [
      { k: "Grant", v: "₹1 L" },
      { k: "Format", v: "1 sem." },
      { k: "Campuses", v: "8" },
    ],
    href: "/programs/student-first",
    view: "View Student First",
  },
  {
    num: "Program 05 · Deep-tech",
    name: "Build Club",
    sub: "TIC-IITG & AISF · with IIT Guwahati",
    status: { kind: "closed", label: "Closed · Reopens Q3" },
    pitch:
      "A joint program with IIT Guwahati for deep-tech agri innovation — robotics, sensing, ML applied to crop and livestock systems. Engineering-heavy founders only. Uses NEATeHUB's Robotics Lab and AI First infrastructure.",
    spec: [
      { k: "Capital", v: "Project-based" },
      { k: "Focus", v: "Deep-tech" },
      { k: "Partner", v: "IIT-G" },
    ],
    href: "/programs/build-club",
    view: "View Build Club",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="pg-hero">
        <div className="container">
          <div className="eyebrow">Programs · FY26</div>
          <h1>Five programs. One institution.</h1>
          <p className="lede">
            We run five programs under different funders — from NITI Aayog&apos;s
            AIC to the Ministry&apos;s RKVY RAFTAAR (which has three stage-based
            sub-programs), ASRLM, AAU Student First, and Build Club with IIT
            Guwahati. Each has its own eligibility envelope, capital ceiling, and
            intake cadence.
          </p>

          <div className="pg-stats">
            <div>
              <div className="num">5</div>
              <div className="lbl">Programs</div>
            </div>
            <div>
              <div className="num">3</div>
              <div className="lbl">Sub-programs under RKVY</div>
            </div>
            <div>
              <div className="num">₹25 L</div>
              <div className="lbl">Maximum grant-in-aid</div>
            </div>
            <div>
              <div className="num">24 mo</div>
              <div className="lbl">Longest engagement</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="section-bar">
          <h2>Five programs, equal footing</h2>
          <span className="ix">5 programs · Different funders</span>
        </div>

        <div className="programs-grid">
          {PROGRAMS.map((p) => (
            <article className="program-card" key={p.href}>
              <div className="program-card__num">{p.num}</div>
              <h3>
                {p.name} <small>{p.sub}</small>
              </h3>
              <span className={`program-card__status ${p.status.kind}`}>
                <span className="dot" /> {p.status.label}
              </span>
              <p className="pitch">{p.pitch}</p>
              <div className="program-card__spec">
                {p.spec.map((s) => (
                  <div key={s.k}>
                    <div className="k">{s.k}</div>
                    <div className="v">{s.v}</div>
                  </div>
                ))}
              </div>
              <div className="actions">
                <Link href={p.href} className="btn btn-primary btn-sm">
                  {p.view}
                </Link>
                <Link href="/for-founders#wizard" className="btn btn-ghost btn-sm">
                  Check fit
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <section className="tight bg-cream-100" style={{ marginTop: 56 }}>
        <div className="container">
          <div className="eligibility-cta">
            <div>
              <div className="eyebrow">Not sure which one fits?</div>
              <h2 className="display display-m mt-2">
                Two minutes to know where you stand.
              </h2>
              <p className="lede mt-2">
                Answer six questions about your venture, your stage, and your
                sector. The wizard points you at the program — and the
                sub-program, if RKVY — that actually fits. No email required to
                see the result.
              </p>
              <div className="row mt-3">
                <Link href="/for-founders#wizard" className="btn btn-copper btn-lg">
                  Run the eligibility wizard <span className="arrow">→</span>
                </Link>
                <Link href="/ask" className="btn btn-ghost btn-lg">
                  Or ask our AI assistant
                </Link>
              </div>
            </div>
            <div
              className="photo"
              style={{ aspectRatio: "4/3", borderRadius: "var(--r-lg)" }}
              aria-hidden="true"
            >
              <div className="photo-label">
                PHOTO: Founder reading at NEATeHUB co-working space, top-down or
                shoulder angle
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
