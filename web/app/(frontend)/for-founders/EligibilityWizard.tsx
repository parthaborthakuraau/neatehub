"use client";

import { useState } from "react";

/* ------------------------------------------------------------------ *
 * Eligibility wizard — ported faithfully from for-founders.html.
 * 6 questions (stage · sector · who · capital · loc · residential),
 * a scoring matrix producing top-3 program matches with a fit %,
 * a links map to the new program routes, and an edge-case
 * email-capture fallback so the wizard never dead-ends.
 * ------------------------------------------------------------------ */

type Step = 1 | 2 | 3 | 4 | 5 | 6 | "r";

const TOTAL = 6;
// question key per step index (1-based), mirrors REQUIRED_PER_STEP in the design.
const REQUIRED_PER_STEP = [
  "stage",
  "sector",
  "who",
  "capital",
  "loc",
  "residential",
] as const;

type QKey = (typeof REQUIRED_PER_STEP)[number];
type Answers = Partial<Record<QKey, string>>;

// Program keys — equal programs, no flagship/umbrella wording.
// "Build Club" replaces "TIC (IITG) - AISF"; "AAU Student First" replaces bare "Student First".
type ProgramKey =
  | "RKVY · Isanya"
  | "RKVY · Saranya"
  | "RKVY · Navyam"
  | "AIC"
  | "ASRLM"
  | "AAU Student First"
  | "Build Club";

const REASONS: Record<ProgramKey, string> = {
  "RKVY · Isanya": "Idea-stage sub-program of RKVY. 8-week residential at AAU.",
  "RKVY · Saranya": "Growth-stage sub-program of RKVY. Match on revenue stage.",
  "RKVY · Navyam":
    "Student sub-program of RKVY. For currently-enrolled student founders.",
  AIC: "National program under NITI Aayog’s Atal Innovation Mission. Pan-India network.",
  ASRLM: "Assam State Rural Livelihoods Mission. Producer/FPO-led ventures.",
  "AAU Student First":
    "Campus entrepreneurship at NE universities. Pre-incubation, semester-long.",
  "Build Club":
    "Deep-tech joint program with IIT Guwahati. Engineering-heavy founders.",
};

// Links map → new App Router routes.
const LINKS: Record<ProgramKey, string> = {
  "RKVY · Isanya": "/programs/rkvy-raftaar#isanya",
  "RKVY · Saranya": "/programs/rkvy-raftaar#saranya",
  "RKVY · Navyam": "/programs/rkvy-raftaar#navyam",
  AIC: "/programs/aic",
  ASRLM: "/programs/asrlm",
  "AAU Student First": "/programs/student-first",
  "Build Club": "/programs/build-club",
};

type Match = {
  name: ProgramKey;
  pct: number;
  partial: boolean;
};

type Result =
  | { kind: "matches"; heading: string; matches: Match[] }
  | { kind: "edge" };

// Compute the result — scoring weights ported VERBATIM from the design's
// computeResult(), only the program key strings renamed per equal-programs rule.
function computeResult(a: Answers): Result {
  const fits: Record<ProgramKey, number> = {
    "RKVY · Isanya": 0,
    "RKVY · Saranya": 0,
    "RKVY · Navyam": 0,
    AIC: 0,
    ASRLM: 0,
    "AAU Student First": 0,
    "Build Club": 0,
  };

  // Stage
  if (a.stage === "idea" || a.stage === "prototype") {
    fits["RKVY · Isanya"] += 50;
    fits["RKVY · Navyam"] += 25;
    fits["AAU Student First"] += 30;
  }
  if (a.stage === "pilot") {
    fits["RKVY · Isanya"] += 30;
    fits["AIC"] += 25;
    fits["ASRLM"] += 20;
  }
  if (a.stage === "revenue" || a.stage === "growth") {
    fits["RKVY · Saranya"] += 45;
    fits["AIC"] += 25;
  }
  if (a.stage === "scale") {
    fits["RKVY · Saranya"] += 30;
    fits["Build Club"] += 20;
  }

  // Capital
  if (a.capital === "lt5") {
    fits["RKVY · Isanya"] += 30;
    fits["RKVY · Navyam"] += 30;
    fits["AAU Student First"] += 35;
  }
  if (a.capital === "5to10") {
    fits["ASRLM"] += 20;
    fits["AIC"] += 15;
    fits["RKVY · Isanya"] += 10;
  }
  if (a.capital === "10to25") {
    fits["RKVY · Saranya"] += 30;
    fits["AIC"] += 15;
  }
  if (a.capital === "gt25") {
    fits["RKVY · Saranya"] += 20;
    fits["Build Club"] += 30;
  }

  // Who
  if (a.who === "student") {
    fits["AAU Student First"] += 40;
    fits["RKVY · Navyam"] += 35;
  }
  if (a.who === "fpo") fits["ASRLM"] += 40;

  // Loc
  if (a.loc === "assam") {
    fits["ASRLM"] += 15;
    fits["RKVY · Isanya"] += 10;
    fits["AAU Student First"] += 10;
  }
  if (a.loc === "ne") {
    fits["RKVY · Saranya"] += 5;
    fits["RKVY · Isanya"] += 5;
  }
  if (a.loc === "india") {
    fits["AIC"] += 15;
    fits["ASRLM"] = 0;
  }

  // Residential
  if (a.residential === "no")
    fits["RKVY · Isanya"] = Math.max(0, fits["RKVY · Isanya"] - 50);

  // Top 3
  const sorted = (Object.entries(fits) as [ProgramKey, number][])
    .sort((x, y) => y[1] - x[1])
    .slice(0, 3);

  const matches: Match[] = [];
  let countStrong = 0;
  sorted.forEach(([name, score], i) => {
    if (score < 20) return;
    const pct = Math.min(99, Math.round(score * 1.1));
    matches.push({ name, pct, partial: i !== 0 });
    if (score >= 50) countStrong++;
  });

  if (matches.length === 0) {
    return { kind: "edge" };
  }

  const heading =
    countStrong === 1
      ? "You're a strong fit for 1 program."
      : countStrong >= 2
        ? `You're a strong fit for ${countStrong} programs.`
        : "Here are your closest matches.";

  return { kind: "matches", heading, matches };
}

// Step option definitions — copy preserved verbatim from the design.
const STEPS: {
  q: QKey;
  qLabel: string;
  heading: string;
  hint?: string;
  opts3?: boolean;
  // each option: optional sub-above-title (stage steps), title, sub
  options: { v: string; title: string; sub: string; subFirst?: boolean }[];
}[] = [
  {
    q: "stage",
    qLabel: "Question 01 of 06",
    heading: "Where is your venture right now?",
    hint: "Pick the closest fit. If you're between stages, choose the earlier one - we'd rather you under-claim than over-claim.",
    opts3: true,
    options: [
      { v: "idea", title: "Just an idea", sub: "Stage 01", subFirst: true },
      {
        v: "prototype",
        title: "Working prototype",
        sub: "Stage 02",
        subFirst: true,
      },
      {
        v: "pilot",
        title: "Live pilot, no revenue",
        sub: "Stage 03",
        subFirst: true,
      },
      {
        v: "revenue",
        title: "Revenue, < ₹10L ARR",
        sub: "Stage 04",
        subFirst: true,
      },
      {
        v: "growth",
        title: "Revenue, ₹10L+ ARR",
        sub: "Stage 05",
        subFirst: true,
      },
      {
        v: "scale",
        title: "Scaling, raising follow-on",
        sub: "Stage 06",
        subFirst: true,
      },
    ],
  },
  {
    q: "sector",
    qLabel: "Question 02 of 06",
    heading: "What sector are you in?",
    opts3: true,
    options: [
      { v: "agri-input", title: "Agri-Input", sub: "Seeds, bio-stim, inputs" },
      {
        v: "post-harvest",
        title: "Post-Harvest",
        sub: "Cold-chain, storage, sorting",
      },
      { v: "livestock", title: "Livestock", sub: "Dairy, poultry, small rumin." },
      { v: "aqua", title: "Aquaculture", sub: "Fish, prawn, ornamentals" },
      { v: "food", title: "Food Proc.", sub: "Processing, packaging, brand" },
      { v: "other", title: "Other agri-allied", sub: "Fintech, services, robotics" },
    ],
  },
  {
    q: "who",
    qLabel: "Question 03 of 06",
    heading: "Who's leading the venture?",
    hint: "This affects which specialised programs you may have access to.",
    options: [
      { v: "solo", title: "Solo founder", sub: "Working independently" },
      { v: "team", title: "Co-founding team", sub: "2 or more founders" },
      { v: "student", title: "Currently a student", sub: "At AAU or NE university" },
      {
        v: "fpo",
        title: "Producer-led / FPO",
        sub: "SHG or farmer-producer org.",
      },
    ],
  },
  {
    q: "capital",
    qLabel: "Question 04 of 06",
    heading: "How much capital do you need over the next 18 months?",
    opts3: true,
    options: [
      { v: "lt5", title: "Under ₹5L", sub: "Sandbox / idea capital" },
      { v: "5to10", title: "₹5-10L", sub: "Pilot + early product" },
      { v: "10to25", title: "₹10-25L", sub: "Build + GTM" },
      { v: "gt25", title: "₹25L+", sub: "Scale capital (referral)" },
    ],
  },
  {
    q: "loc",
    qLabel: "Question 05 of 06",
    heading: "Where will your venture operate?",
    opts3: true,
    options: [
      { v: "assam", title: "Assam", sub: "Primary operations" },
      { v: "ne", title: "Other NE state", sub: "8 NE states" },
      { v: "india", title: "Rest of India", sub: "Some NE linkage required" },
    ],
  },
  {
    q: "residential",
    qLabel: "Question 06 of 06",
    heading: "Can you commit to an 8-week in-residence cohort at Jorhat?",
    hint: 'Only relevant if you\'re idea-stage. Otherwise, this is "no" without consequence.',
    options: [
      { v: "yes", title: "Yes, I can", sub: "Full-time, in-residence" },
      {
        v: "no",
        title: "No, I need to stay remote",
        sub: "Non-residential only",
      },
    ],
  },
];

const NAV = [
  { key: "1", num: "1", label: "Question 01", title: "Stage" },
  { key: "2", num: "2", label: "Question 02", title: "Sector" },
  { key: "3", num: "3", label: "Question 03", title: "Founder profile" },
  { key: "4", num: "4", label: "Question 04", title: "Capital need" },
  { key: "5", num: "5", label: "Question 05", title: "Location" },
  { key: "6", num: "6", label: "Question 06", title: "Commitment" },
  { key: "r", num: "✓", label: "Result", title: "Your matches" },
];

export default function EligibilityWizard() {
  const [step, setStep] = useState<Step>(1);
  const [ans, setAns] = useState<Answers>({});
  const [result, setResult] = useState<Result | null>(null);
  const [edgeDone, setEdgeDone] = useState(false);

  const isResult = step === "r";
  const stepNum = isResult ? TOTAL : (step as number);
  const currentKey = isResult ? null : REQUIRED_PER_STEP[(step as number) - 1];
  const nextDisabled = currentKey ? !ans[currentKey] : true;

  function select(q: QKey, v: string) {
    setAns((prev) => ({ ...prev, [q]: v }));
  }

  function next() {
    if (typeof step === "number" && step < TOTAL) {
      setStep((step + 1) as Step);
    } else {
      setResult(computeResult(ans));
      setStep("r");
    }
  }

  function prev() {
    if (typeof step === "number" && step > 1) setStep((step - 1) as Step);
  }

  function resetWizard() {
    setAns({});
    setResult(null);
    setEdgeDone(false);
    setStep(1);
  }

  return (
    <div className="wizard-wrap">
      <div className="wizard">
        <nav className="wizard__nav" aria-label="Wizard progress">
          {NAV.map((n) => {
            const active = String(step) === n.key;
            // mirror design: a non-result row is "done" when the wizard is on the
            // result screen, or when its index is below the current step.
            let done = false;
            if (n.key !== "r") {
              done = isResult ? true : Number(n.key) < (step as number);
            }
            const cls = [
              "wizard__nav-step",
              active ? "is-active" : "",
              done && !active ? "is-done" : "",
            ]
              .filter(Boolean)
              .join(" ");
            return (
              <div className={cls} key={n.key} data-stepnav={n.key}>
                <div className="num">{n.num}</div>
                <div>
                  <div className="label">{n.label}</div>
                  <div className="title">{n.title}</div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="wizard__panel">
          {/* Steps 1–6 */}
          {STEPS.map((s, idx) => {
            const stepIndex = idx + 1;
            const isActive = step === stepIndex;
            return (
              <div
                className={`wizard__step${isActive ? " is-active" : ""}`}
                data-step={stepIndex}
                key={s.q}
              >
                <div>
                  <div className="wizard__q">{s.qLabel}</div>
                  <h3 className="wizard__h mt-2">{s.heading}</h3>
                  {s.hint && <p className="wizard__hint mt-2">{s.hint}</p>}
                </div>
                <div className={`opts${s.opts3 ? " opts-3" : ""}`}>
                  {s.options.map((o) => {
                    const selected = ans[s.q] === o.v;
                    return (
                      <button
                        type="button"
                        className={`opt${selected ? " is-sel" : ""}`}
                        data-q={s.q}
                        data-v={o.v}
                        key={o.v}
                        onClick={() => select(s.q, o.v)}
                      >
                        {o.subFirst ? (
                          <>
                            <span className="opt__sub">{o.sub}</span>
                            <span className="opt__title">{o.title}</span>
                          </>
                        ) : (
                          <>
                            <span className="opt__title">{o.title}</span>
                            <span className="opt__sub">{o.sub}</span>
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Result */}
          <div
            className={`wizard__result${isResult ? " is-active" : ""}`}
            data-step="r"
          >
            <div>
              <div className="wizard__q">Your match</div>
              <h3 className="result-heading mt-2" id="result-h">
                {result?.kind === "edge"
                  ? "We need to talk to you directly."
                  : result?.kind === "matches"
                    ? result.heading
                    : "You're a strong fit for 2 programs."}
              </h3>
              <p className="wizard__hint mt-3" id="result-sub">
                {result?.kind === "edge"
                  ? "Your profile doesn't fit a single program cleanly - that usually means there's a better-shaped opportunity. Leave your email and one of our program leads will reach out within 3 working days."
                  : "Based on your answers, here's where we'd route you. Top match has the strongest fit on stage, sector, and capital need."}
              </p>
            </div>

            <div className="result-matches" id="result-matches">
              {result?.kind === "matches" &&
                result.matches.map((m) => (
                  <div
                    className={`result-match${m.partial ? " partial" : ""}`}
                    key={m.name}
                  >
                    <div className="fit">
                      {m.pct}
                      <small>% fit</small>
                    </div>
                    <div>
                      <div className="name">{m.name}</div>
                      <div className="why">{REASONS[m.name]}</div>
                    </div>
                    <a href={LINKS[m.name]} className="btn btn-ghost btn-sm">
                      View program <span className="arrow">→</span>
                    </a>
                  </div>
                ))}

              {result?.kind === "edge" &&
                (edgeDone ? (
                  <p style={{ color: "var(--cream-100)" }}>
                    Thanks - we will be in touch.
                  </p>
                ) : (
                  <form
                    style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
                    onSubmit={(e) => {
                      e.preventDefault();
                      // TODO: wire to server action (email-capture + callback request).
                      setEdgeDone(true);
                    }}
                  >
                    <input
                      className="input"
                      type="email"
                      placeholder="your@email.com"
                      aria-label="Email address"
                      required
                      style={{
                        flex: 1,
                        minWidth: 220,
                        background: "rgba(250,246,238,0.06)",
                        borderColor: "rgba(216,205,181,0.3)",
                        color: "var(--cream-50)",
                      }}
                    />
                    <button className="btn btn-primary" type="submit">
                      Request a callback
                    </button>
                  </form>
                ))}
            </div>

            <div
              className="wizard__footer"
              style={{ borderTop: 0, paddingTop: 8, marginTop: 8 }}
            >
              <button
                type="button"
                className="btn btn-ghost"
                onClick={resetWizard}
              >
                ← Start over
              </button>
              <div style={{ display: "flex", gap: 10 }}>
                <a href="#apply" className="btn btn-primary">
                  Start application <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer (steps 1–6) */}
          {!isResult && (
            <div className="wizard__footer" id="wizard-foot">
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                id="w-prev"
                onClick={prev}
                disabled={step === 1}
              >
                ← Previous
              </button>
              <span className="wizard__progress" id="w-prog">
                Question {stepNum} of {TOTAL}
              </span>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                id="w-next"
                onClick={next}
                disabled={nextDisabled}
              >
                {step === TOTAL ? "See my matches" : "Next"}{" "}
                <span className="arrow">→</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
