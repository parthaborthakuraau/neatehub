"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type TopBannerProps = {
  /** Per-campaign key so a new announcement re-shows even if a past one was dismissed. */
  campaignKey: string;
  badge?: string;
  children: React.ReactNode;
  cta?: { label: string; href: string };
};

export default function TopBanner({
  campaignKey,
  badge = "APPLICATIONS OPEN",
  children,
  cta,
}: TopBannerProps) {
  // Visible by default (server-rendered for crawlers / no-JS); hidden only if
  // this campaign was previously dismissed (resolved on mount).
  const [hidden, setHidden] = useState(false);
  const storageKey = `neate.banner.${campaignKey}`;

  useEffect(() => {
    if (localStorage.getItem(storageKey) === "1") setHidden(true);
  }, [storageKey]);

  function dismiss() {
    setHidden(true);
    localStorage.setItem(storageKey, "1");
  }

  if (hidden) return null;

  return (
    <div className="top-banner" role="region" aria-label="Site announcement">
      <div className="top-banner__inner">
        <span className="badge badge-tea">
          <span className="dot" /> {badge}
        </span>
        <span>
          {children}{" "}
          {cta && <Link href={cta.href}>{cta.label} →</Link>}
        </span>
        <button
          className="top-banner__close"
          onClick={dismiss}
          aria-label="Dismiss banner"
          type="button"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
