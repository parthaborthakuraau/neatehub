"use client";

import { useEffect, useState } from "react";

/**
 * Sticky section sub-nav for the lab photo-essay page.
 * Ports the inline scroll-spy + smooth-scroll behaviour from the design HTML.
 */
export default function LabSubnav({
  items,
}: {
  items: { label: string; id: string }[];
}) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);

    const sync = () => {
      const top = window.scrollY + 180;
      let current = sections[0]?.id ?? "";
      for (const s of sections) {
        if (s.offsetTop <= top) current = s.id;
      }
      setActive(current);
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, [items]);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="lab-subnav" aria-label="Section navigation">
      <div className="lab-subnav__inner">
        {items.map((i) => (
          <a
            key={i.id}
            href={`#${i.id}`}
            className={active === i.id ? "is-active" : ""}
            onClick={(e) => handleClick(e, i.id)}
          >
            {i.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
