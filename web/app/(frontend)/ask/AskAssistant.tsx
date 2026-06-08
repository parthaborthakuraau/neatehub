"use client";

import { useRef, useState, type ReactNode } from "react";
import Link from "next/link";

/* =========================================================
   Intent modes
   ========================================================= */
type IntentKey = "eligibility" | "about" | "ideate";

const intentLabels: Record<IntentKey, string> = {
  eligibility: "Eligibility mode",
  about: "Knowledge mode",
  ideate: "Ideation mode",
};

const INTENTS: {
  key: IntentKey;
  num: string;
  title: string;
  blurb: string;
  ex: string;
}[] = [
  {
    key: "eligibility",
    num: "Intent 01",
    title: "Am I eligible?",
    blurb:
      "Tell me your stage, sector, and capital need. I'll point you at the right program - or run the full eligibility wizard with you.",
    ex: '"Is RKVY right for a Series A-stage post-harvest startup?"',
  },
  {
    key: "about",
    num: "Intent 02",
    title: "Tell me about NEATeHUB.",
    blurb:
      "Funders, governance, programs, portfolio, mentors, infrastructure, impact reports - whatever you need.",
    ex: '"How many startups have you funded under RKVY?"',
  },
  {
    key: "ideate",
    num: "Intent 03",
    title: "Help me ideate.",
    blurb:
      "Use the assistant as a thinking partner. We'll explore your problem space, push back where we should, and surface adjacent ventures.",
    ex: '"What\'s a defensible bio-input venture for Assamese tea estates?"',
  },
];

/* Opening assistant message per intent */
const intentOpens: Record<IntentKey, ReactNode> = {
  eligibility: (
    <>
      <p>
        Hi - I&apos;m the NEATeHUB assistant. I know our five programs,
        eligibility criteria, capital ceilings, and what stage of venture each
        one serves.
      </p>
      <p>
        To point you at the right program, tell me two things: what stage your
        venture is at, and what sector you&apos;re in.
      </p>
    </>
  ),
  about: (
    <p>
      I can walk you through any aspect of NEATeHUB - governance, funders,
      programs, portfolio, mentor network, infrastructure, impact numbers, and
      historical decisions. What would you like to know?
    </p>
  ),
  ideate: (
    <>
      <p>
        Use me as a thinking partner. Share your problem space and I&apos;ll help
        you sharpen it - what&apos;s been tried, where the unit economics
        typically break, and what adjacent ventures look like in our portfolio.
      </p>
      <p>What are you exploring?</p>
    </>
  ),
};

/* =========================================================
   Canned (simulated) responses
   TODO: replace simulated responses with Groq API call
   ========================================================= */
type Canned = { match: RegExp; reply: ReactNode; cites: string[] };

const CANNED: Canned[] = [
  {
    match: /isanya.+saranya|difference.+isanya|difference.+saranya/i,
    reply: (
      <>
        <p>
          <strong>Short answer:</strong> Both Isanya and Saranya are
          sub-programs <em>of RKVY RAFTAAR</em> - same funder, different stages.
        </p>
        <ul>
          <li>
            <strong>Isanya</strong> - 8-week residential at Jorhat, idea or early
            prototype, grants up to <strong>₹5L</strong>, cohort of 12.
          </li>
          <li>
            <strong>Saranya</strong> - 12-18 months, revenue-generating ventures
            (₹10L+ ARR ideal), grants up to <strong>₹25L</strong>,
            milestone-tranched capital.
          </li>
        </ul>
        <p>
          About 30% of our Saranya cohort came up from Isanya - the structure
          allows movement between sub-programs. Want me to run the eligibility
          wizard with you?
        </p>
      </>
    ),
    cites: ["RKVY · Isanya", "RKVY · Saranya"],
  },
  {
    match: /prototype.+revenue|prototype.+apply|where.+apply/i,
    reply: (
      <>
        <p>
          With a working prototype and ₹0 revenue, you have two paths inside the
          RKVY structure:
        </p>
        <ul>
          <li>
            <strong>Isanya</strong> (best fit) - 8-week residential, ₹5L grant,
            designed for exactly this stage. A sub-program of RKVY RAFTAAR.
          </li>
          <li>
            <strong>AIC track</strong> - outside RKVY. If you can&apos;t relocate,
            AIC accepts prototype-stage ventures with quarterly intake.
          </li>
        </ul>
        <p>
          Saranya (the growth-stage RKVY sub-program) usually requires pilot data
          with at least one paying customer. I&apos;d hold it for after Isanya.
        </p>
      </>
    ),
    cites: ["RKVY · Isanya", "AIC"],
  },
  {
    match: /non.?ne|outside.+northeast|not.+northeast|bangalore|delhi|mumbai/i,
    reply: (
      <>
        <p>Yes, but with conditions.</p>
        <ul>
          <li>
            <strong>RKVY RAFTAAR</strong> and <strong>AIC</strong> accept
            ventures from across India. No NE-residency requirement.
          </li>
          <li>
            <strong>Saranya</strong> prefers ventures with operations or
            customers in NE India - not mandatory, but weighted in evaluation.
          </li>
          <li>
            <strong>Isanya, ASRLM, AAU Student First</strong> are NE-focused.
            Non-NE founders are not eligible.
          </li>
        </ul>
        <p>
          If your venture has even a single NE customer or pilot, mention it in
          your application - it changes the conversation.
        </p>
      </>
    ),
    cites: ["Eligibility · Geography"],
  },
];

const DEFAULT_REPLY: ReactNode = (
  <>
    <p>
      That&apos;s a good question. In production, I&apos;d pull from the NEATeHUB
      knowledge base and cite specific program documents - for this prototype,
      here&apos;s the general direction:
    </p>
    <p>
      Your best next step is probably the eligibility wizard - it&apos;ll narrow
      you down to one or two programs in under two minutes. Or you can browse the{" "}
      <Link href="/programs" className="link">
        programs page
      </Link>{" "}
      for the full set.
    </p>
  </>
);
const DEFAULT_CITES = ["Programs", "Eligibility wizard"];

/* =========================================================
   Message model
   ========================================================= */
type Message = {
  id: number;
  who: "ai" | "u";
  body: ReactNode;
  cites?: string[];
};

const SUGGESTIONS = [
  {
    q: "What's the difference between Isanya and Saranya?",
    label: "What's the difference between Isanya and Saranya?",
  },
  {
    q: "I have a working prototype and ₹0 revenue. Where should I apply?",
    label: "Where should I apply with a prototype and ₹0 revenue?",
  },
  { q: "Do you fund non-NE founders?", label: "Do you fund non-NE founders?" },
];

let nextId = 1;

export default function AskAssistant() {
  const [intent, setIntent] = useState<IntentKey>("eligibility");
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, who: "ai", body: intentOpens.eligibility },
  ]);
  const [typing, setTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [input, setInput] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function scrollToEnd() {
    requestAnimationFrame(() => {
      const el = bodyRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    });
  }

  function switchIntent(k: IntentKey) {
    setIntent(k);
    setMessages([{ id: nextId++, who: "ai", body: intentOpens[k] }]);
    setShowSuggestions(true);
    setTyping(false);
  }

  function resetChat() {
    setMessages([{ id: nextId++, who: "ai", body: intentOpens[intent] }]);
    setShowSuggestions(true);
    setTyping(false);
  }

  function sendUser(textOverride?: string) {
    const text = (textOverride ?? input).trim();
    if (!text) return;

    setMessages((m) => [...m, { id: nextId++, who: "u", body: <p>{text}</p> }]);
    setInput("");
    setShowSuggestions(false);
    setTyping(true);
    scrollToEnd();

    // TODO: replace simulated responses with Groq API call
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      const hit = CANNED.find((c) => c.match.test(text));
      setTyping(false);
      setMessages((m) => [
        ...m,
        hit
          ? { id: nextId++, who: "ai", body: hit.reply, cites: hit.cites }
          : {
              id: nextId++,
              who: "ai",
              body: DEFAULT_REPLY,
              cites: DEFAULT_CITES,
            },
      ]);
      scrollToEnd();
    }, 900 + Math.random() * 600);
  }

  return (
    <>
      {/* Intent cards */}
      <div className="intents">
        {INTENTS.map((it) => (
          <button
            key={it.key}
            type="button"
            className={`intent${intent === it.key ? " is-active" : ""}`}
            onClick={() => switchIntent(it.key)}
          >
            <div className="num">{it.num}</div>
            <h3>{it.title}</h3>
            <p>{it.blurb}</p>
            <div className="ex">{it.ex}</div>
          </button>
        ))}
      </div>

      {/* Chat */}
      <div className="chat">
        <div className="chat__head">
          <div className="agent">
            <span className="dot" /> NEATeHUB AI · {intentLabels[intent]}
          </div>
          <button type="button" className="reset" onClick={resetChat}>
            ↺ Clear conversation
          </button>
        </div>

        <div className="chat__body" ref={bodyRef}>
          {messages.map((m) => (
            <div
              key={m.id}
              className={`msg${m.who === "u" ? " msg--u" : ""}`}
            >
              <div
                className={`msg__avatar ${
                  m.who === "ai" ? "msg__avatar--ai" : "msg__avatar--u"
                }`}
              >
                {m.who === "ai" ? "N" : "U"}
              </div>
              <div className="msg__bubble">
                {m.body}
                {m.cites && m.cites.length > 0 && (
                  <div className="cites">
                    {m.cites.map((c) => (
                      <span key={c} className="cite">
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {typing && (
            <div className="msg">
              <div className="msg__avatar msg__avatar--ai">N</div>
              <div className="msg__bubble">
                <div className="typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          )}
        </div>

        {showSuggestions && (
          <div className="suggestions">
            {SUGGESTIONS.map((s) => (
              <button
                key={s.q}
                type="button"
                className="suggestion"
                onClick={() => sendUser(s.q)}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}

        <form
          className="composer"
          onSubmit={(e) => {
            e.preventDefault();
            sendUser();
          }}
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendUser();
              }
            }}
            placeholder="Type your question…"
            rows={1}
          />
          <button type="submit" className="btn btn-primary send">
            Send <span className="arrow">→</span>
          </button>
        </form>
      </div>
    </>
  );
}
