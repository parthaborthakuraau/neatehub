"use client";

import { useEffect, useState } from "react";

const LANGS = [
  { code: "EN", label: "EN", name: "English" },
  { code: "HI", label: "हि", name: "हिन्दी (Hindi)" },
  { code: "AS", label: "অ", name: "অসমীয়া (Assamese)" },
];

export default function LangToggle({ style }: { style?: React.CSSProperties }) {
  const [active, setActive] = useState("EN");

  useEffect(() => {
    const saved = localStorage.getItem("neate.lang");
    if (saved && LANGS.some((l) => l.code === saved)) setActive(saved);
  }, []);

  function pick(code: string) {
    setActive(code);
    try {
      localStorage.setItem("neate.lang", code);
      document.cookie = `neate-lang=${code}; path=/; max-age=31536000`;
    } catch {}
  }

  const current = LANGS.find((l) => l.code === active);

  return (
    <div style={{ position: "relative", ...style }}>
      <div className="lang-toggle" role="group" aria-label="Language">
        {LANGS.map((l) => (
          <button
            key={l.code}
            aria-pressed={active === l.code}
            onClick={() => pick(l.code)}
            type="button"
            title={l.name}
          >
            {l.label}
          </button>
        ))}
      </div>

      {active !== "EN" && current ? (
        <div className="lang-soon" role="status">
          <strong>{current.name}</strong> is coming soon — showing English for now.
          <button type="button" onClick={() => pick("EN")}>
            Switch back to English
          </button>
        </div>
      ) : null}
    </div>
  );
}
