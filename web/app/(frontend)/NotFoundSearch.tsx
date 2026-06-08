"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NotFoundSearch() {
  const router = useRouter();
  const [value, setValue] = useState("");

  const goSearch = () => {
    const q = value.trim();
    if (q) router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <div className="four__search">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.6" />
        <path d="M11 11l4 4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      <input
        type="search"
        placeholder="Search NEATeHUB - programs, portfolio, insights…"
        id="search-input"
        aria-label="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") goSearch();
        }}
      />
      <button onClick={goSearch}>Search</button>
    </div>
  );
}
