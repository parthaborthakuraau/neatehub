"use client";

import { useState } from "react";

const LANGS = ["EN", "हि", "অ"];

export default function LangToggle({ style }: { style?: React.CSSProperties }) {
  const [active, setActive] = useState("EN");
  return (
    <div className="lang-toggle" role="group" aria-label="Language" style={style}>
      {LANGS.map((l) => (
        <button
          key={l}
          aria-pressed={active === l}
          onClick={() => setActive(l)}
          type="button"
        >
          {l}
        </button>
      ))}
    </div>
  );
}
