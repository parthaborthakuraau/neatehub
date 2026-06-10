"use client";

import { useRef, useState, type ReactNode } from "react";
import { askGroq } from "../actions/ask";

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
   Render a plain-text Groq reply as paragraphs + simple bullets
   ========================================================= */
function renderReply(text: string): ReactNode {
  const blocks = text.split(/\n{2,}/).filter((b) => b.trim());
  return (
    <>
      {blocks.map((block, i) => {
        const lines = block.split(/\n/).map((l) => l.trim());
        const isList = lines.every((l) => /^[-*•]\s+/.test(l));
        if (isList) {
          return (
            <ul key={i}>
              {lines.map((l, j) => (
                <li key={j}>{l.replace(/^[-*•]\s+/, "")}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{block.trim()}</p>;
      })}
    </>
  );
}

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
  const [history, setHistory] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([]);
  const bodyRef = useRef<HTMLDivElement>(null);

  function scrollToEnd() {
    requestAnimationFrame(() => {
      const el = bodyRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    });
  }

  function switchIntent(k: IntentKey) {
    setIntent(k);
    setMessages([{ id: nextId++, who: "ai", body: intentOpens[k] }]);
    setHistory([]);
    setShowSuggestions(true);
    setTyping(false);
  }

  function resetChat() {
    setMessages([{ id: nextId++, who: "ai", body: intentOpens[intent] }]);
    setHistory([]);
    setShowSuggestions(true);
    setTyping(false);
  }

  async function sendUser(textOverride?: string) {
    const text = (textOverride ?? input).trim();
    if (!text || typing) return;

    setMessages((m) => [...m, { id: nextId++, who: "u", body: <p>{text}</p> }]);
    setInput("");
    setShowSuggestions(false);
    setTyping(true);
    scrollToEnd();

    const nextHistory = [
      ...history,
      { role: "user" as const, content: text },
    ];
    const res = await askGroq(nextHistory, intent);
    setTyping(false);
    setHistory([
      ...nextHistory,
      { role: "assistant", content: res.reply },
    ]);
    setMessages((m) => [
      ...m,
      { id: nextId++, who: "ai", body: renderReply(res.reply) },
    ]);
    scrollToEnd();
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
