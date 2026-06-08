"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Brand from "./Brand";
import LangToggle from "./LangToggle";

function Chevron() {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHome = pathname === "/";

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Brand />

          <nav className="nav" aria-label="Primary">
            <div className="nav__item">
              <Link
                href="/"
                className="nav__link"
                aria-current={isHome ? "page" : undefined}
              >
                Home
              </Link>
            </div>

            <div className="nav__item">
              <Link href="/about" className="nav__link">
                About <Chevron />
              </Link>
              <div className="nav__menu">
                <div className="menu-meta">About NEATeHUB</div>
                <Link href="/about">Organisation</Link>
                <Link href="/about#directors">Directors</Link>
                <Link href="/about#team">Team</Link>
                <Link href="/about#partners">Partners</Link>
                <Link href="/insights">Newsroom</Link>
                <Link href="/about#careers">Careers</Link>
                <Link href="/about#contact">Contact</Link>
              </div>
            </div>

            <div className="nav__item">
              <Link href="/programs" className="nav__link">
                Programs <Chevron />
              </Link>
              <div className="nav__menu">
                <div className="menu-meta">Five programs · each with its own sponsor</div>
                <Link href="/programs/aic">AIC — NITI Aayog</Link>
                <Link href="/programs/rkvy-raftaar">RKVY RAFTAAR — Min. of Agriculture</Link>
                <Link href="/programs/rkvy-raftaar#navyam">└ Navyam</Link>
                <Link href="/programs/rkvy-raftaar#isanya">└ Isanya</Link>
                <Link href="/programs/rkvy-raftaar#saranya">└ Saranya</Link>
                <Link href="/programs/asrlm">ASRLM — DAY-NRLM</Link>
                <Link href="/programs/student-first">AAU Student First — AAU</Link>
                <Link href="/programs/build-club">Build Club — TIC-IITG &amp; AISF</Link>
              </div>
            </div>

            <div className="nav__item">
              <Link href="/for-founders" className="nav__link">
                For Founders
              </Link>
            </div>
            <div className="nav__item">
              <Link href="/portfolio" className="nav__link">
                Portfolio
              </Link>
            </div>
            <div className="nav__item">
              <Link href="/infrastructure" className="nav__link">
                Infrastructure
              </Link>
            </div>
            <div className="nav__item">
              <Link href="/insights" className="nav__link">
                Insights
              </Link>
            </div>
            <div className="nav__item">
              <Link href="/resources" className="nav__link">
                Resources
              </Link>
            </div>
          </nav>

          <div className="header__actions">
            <LangToggle />
            <Link
              href="/for-founders#apply"
              className="btn btn-primary btn-sm header__apply-desktop"
            >
              Apply <span className="arrow">→</span>
            </Link>
            <button
              className="header__hamburger"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              type="button"
            >
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
                <path d="M0 1h20M0 7h20M0 13h14" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`mnav${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="mnav__top">
          <Brand />
          <button
            className="mnav__close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            type="button"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
        </div>
        <ul className="mnav__list" onClick={() => setOpen(false)}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
            <ul className="mnav__sub">
              <li><Link href="/about#directors">Directors</Link></li>
              <li><Link href="/about#team">Team</Link></li>
              <li><Link href="/about#partners">Partners</Link></li>
              <li><Link href="/about#contact">Contact</Link></li>
            </ul>
          </li>
          <li>
            <Link href="/programs">Programs</Link>
            <ul className="mnav__sub">
              <li><Link href="/programs/aic">AIC</Link></li>
              <li><Link href="/programs/rkvy-raftaar">RKVY RAFTAAR</Link></li>
              <li><Link href="/programs/rkvy-raftaar#navyam">└ Navyam</Link></li>
              <li><Link href="/programs/rkvy-raftaar#isanya">└ Isanya</Link></li>
              <li><Link href="/programs/rkvy-raftaar#saranya">└ Saranya</Link></li>
              <li><Link href="/programs/asrlm">ASRLM</Link></li>
              <li><Link href="/programs/student-first">AAU Student First</Link></li>
              <li><Link href="/programs/build-club">Build Club</Link></li>
            </ul>
          </li>
          <li><Link href="/for-founders">For Founders</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/infrastructure">Infrastructure</Link></li>
          <li><Link href="/insights">Insights &amp; Events</Link></li>
          <li><Link href="/resources">Resources</Link></li>
          <li><Link href="/ask">Ask NEATeHUB AI</Link></li>
        </ul>
        <div className="mnav__cta">
          <Link href="/for-founders#apply" className="btn btn-primary btn-lg">
            Apply to a program <span className="arrow">→</span>
          </Link>
          <LangToggle style={{ justifySelf: "start" }} />
        </div>
      </div>
    </>
  );
}
