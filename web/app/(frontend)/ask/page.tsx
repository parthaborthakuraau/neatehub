import type { Metadata } from "next";
import "./ask.css";
import AskAssistant from "./AskAssistant";

export const metadata: Metadata = {
  title: "Ask NEATeHUB AI",
  description:
    "A focused public assistant trained on NEATeHUB's programs, eligibility criteria, portfolio, mentors, and a decade of agri-incubation knowledge. No login. No data stored.",
};

export default function AskPage() {
  return (
    <section className="ai-hero">
      <div className="container-text" style={{ maxWidth: 980 }}>
        <span
          className="badge"
          style={{
            background: "rgba(168,93,46,0.1)",
            color: "var(--copper-700)",
            borderColor: "rgba(168,93,46,0.2)",
          }}
        >
          <span className="dot" style={{ background: "var(--copper-600)" }} />{" "}
          NEATEHUB AI · POWERED BY GROQ
        </span>
        <h1>Ask anything about NEATeHUB.</h1>
        <p className="lede">
          A focused assistant trained on our programs, eligibility criteria,
          portfolio, mentors, and a decade of agri-incubation knowledge. No
          login. No data stored.
        </p>
      </div>

      <div className="container-text" style={{ maxWidth: 980 }}>
        <AskAssistant />

        <p className="ai-disclaimer">
          <strong>Heads up:</strong> This is a prototype assistant. In production
          it runs on Groq&apos;s inference API, retrieves from a curated
          knowledge base, and cites every program rule it surfaces. It does not
          store conversations and does not collect identifying information unless
          you explicitly ask to be contacted. For binding eligibility, always
          confirm with{" "}
          <a href="mailto:programs@neatehub.org" className="link">
            programs@neatehub.org
          </a>
          .
        </p>
      </div>
    </section>
  );
}
