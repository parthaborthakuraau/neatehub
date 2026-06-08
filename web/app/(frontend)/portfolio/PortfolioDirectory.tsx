"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Venture = {
  name: string;
  sector: string;
  stage: string;
  year: string;
  program: string;
  loc: string;
  desc: string;
  photo: string;
  url?: string;
};

// Portfolio data - plausible NE-rooted agri ventures
const VENTURES: Venture[] = [
  { name: "Kaziranga Bio",  sector: "Agri-Input",    stage: "growth", year: "'24", program: "Saranya · RKVY", loc: "Jorhat, AS",  desc: "Microbial bio-stimulants for tea estates. Replacing chemical inputs in 9 Assam gardens.", photo: "tea", url: "/portfolio/kaziranga-bio" },
  { name: "Thalo Cold",     sector: "Post-Harvest",  stage: "growth", year: "'23", program: "RKVY",           loc: "Tezpur, AS",  desc: "Solar cold-chain micro-units for FPO-led aggregation. 14 nodes operational.", photo: "" },
  { name: "Brahma Aqua",    sector: "Aqua",          stage: "early",  year: "'24", program: "AIC",            loc: "Guwahati, AS", desc: "Indigenous fish-feed formulation. 30% cost reduction vs imports.", photo: "copper" },
  { name: "Mati Labs",      sector: "Agri-Input",    stage: "idea",   year: "'25", program: "Isanya",         loc: "Jorhat, AS",  desc: "Mobile soil-testing rig for KVKs. ₹40 per test, 14-min turnaround.", photo: "" },
  { name: "Eri Threads",    sector: "Food",          stage: "early",  year: "'23", program: "ASRLM",          loc: "Sualkuchi, AS", desc: "Eri silk by-product proteins for nutraceutical use. Producer-owned.", photo: "tea" },
  { name: "Naga Greens",    sector: "Food",          stage: "growth", year: "'22", program: "RKVY",           loc: "Dimapur, NL", desc: "Naga king-chilli supply chain - direct from grower to processor.", photo: "copper" },
  { name: "Sirohi Dairy",   sector: "Livestock",     stage: "early",  year: "'24", program: "AIC",            loc: "Sivasagar, AS", desc: "Smallholder dairy aggregation with chilling at every collection point.", photo: "" },
  { name: "Hilltop Coffee", sector: "Food",          stage: "early",  year: "'24", program: "Saranya",        loc: "Aizawl, MZ",  desc: "Specialty coffee co-operative across 80 Mizoram smallholders.", photo: "" },
  { name: "Khasi Honey",    sector: "Food",          stage: "growth", year: "'22", program: "RKVY",           loc: "Shillong, ML", desc: "Single-origin honey, FSSAI-certified, exporting to Singapore.", photo: "copper" },
  { name: "Pukhuri Fish",   sector: "Aqua",          stage: "idea",   year: "'25", program: "Isanya",         loc: "Nagaon, AS",  desc: "Pond-based aquaculture sensor pack. Pilot with 200 ponds.", photo: "tea" },
  { name: "Bambusa Build",  sector: "Agri-Input",    stage: "growth", year: "'21", program: "RKVY · AIC",     loc: "Imphal, MN",  desc: "Engineered bamboo for agri-shelter construction. 2,300 units shipped.", photo: "" },
  { name: "Charai Foods",   sector: "Food",          stage: "early",  year: "'23", program: "Saranya",        loc: "Agartala, TR", desc: "Smoked-pork product line with FSSAI clearance and 6-state distribution.", photo: "copper" },
];

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function ventureUrl(v: Venture): string {
  return v.url || `/portfolio/${slugify(v.name)}`;
}

type FilterKey = "program" | "sector" | "stage";

const PROGRAM_CHIPS = [
  { value: "all", label: "All", count: "252" },
  { value: "rkvy", label: "RKVY", count: "68" },
  { value: "saranya", label: "Saranya", count: "42" },
  { value: "isanya", label: "Isanya", count: "81" },
  { value: "aic", label: "AIC", count: "34" },
  { value: "asrlm", label: "ASRLM", count: "27" },
];

const SECTOR_CHIPS = [
  { value: "agri-input", label: "Agri-Input" },
  { value: "post-harvest", label: "Post-Harvest" },
  { value: "livestock", label: "Livestock" },
  { value: "aqua", label: "Aqua" },
  { value: "food", label: "Food" },
  { value: "fintech", label: "Rural Fintech" },
];

const STAGE_CHIPS = [
  { value: "idea", label: "Idea" },
  { value: "early", label: "Early" },
  { value: "growth", label: "Growth" },
];

export default function PortfolioDirectory() {
  const [program, setProgram] = useState<string>("all");
  const [sector, setSector] = useState<string | null>(null);
  const [stage, setStage] = useState<string | null>(null);
  const [q, setQ] = useState<string>("");
  const [view, setView] = useState<"grid" | "list">("grid");

  const list = useMemo(() => {
    let out = VENTURES.slice();
    if (program && program !== "all") {
      out = out.filter((v) => v.program.toLowerCase().includes(program));
    }
    if (sector) {
      out = out.filter(
        (v) =>
          v.sector.toLowerCase().includes(sector.replace("-", " ")) ||
          v.sector.toLowerCase().includes(sector)
      );
    }
    if (stage) out = out.filter((v) => v.stage === stage);
    const query = q.toLowerCase().trim();
    if (query)
      out = out.filter((v) =>
        (v.name + " " + v.desc + " " + v.sector + " " + v.loc)
          .toLowerCase()
          .includes(query)
      );
    return out;
  }, [program, sector, stage, q]);

  function toggleFilter(key: FilterKey, value: string) {
    if (key === "program") {
      setProgram(value);
      return;
    }
    if (key === "sector") {
      setSector((cur) => (cur === value ? null : value));
      return;
    }
    if (key === "stage") {
      setStage((cur) => (cur === value ? null : value));
    }
  }

  function resetFilters() {
    setProgram("all");
    setSector(null);
    setStage(null);
    setQ("");
  }

  const countLabel = list.length
    ? `Showing 1-${list.length} of ${list.length} ventures`
    : "No matches";

  return (
    <>
      {/* FILTERS */}
      <div className="pf-filters">
        <div className="pf-filters__inner">
          <div className="pf-search">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.4" />
              <path d="M10 10l3 3" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            <input
              type="search"
              placeholder="Search ventures…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <div className="pf-chips">
            <span className="pf-chip-label">Program</span>
            <div className="pf-chip-group">
              {PROGRAM_CHIPS.map((c) => (
                <button
                  key={c.value}
                  className={`pf-chip${program === c.value ? " is-active" : ""}`}
                  onClick={() => toggleFilter("program", c.value)}
                >
                  {c.label}
                  {c.count ? <span className="count">{c.count}</span> : null}
                </button>
              ))}
            </div>
            <span className="pf-chip-label">Sector</span>
            <div className="pf-chip-group">
              {SECTOR_CHIPS.map((c) => (
                <button
                  key={c.value}
                  className={`pf-chip${sector === c.value ? " is-active" : ""}`}
                  onClick={() => toggleFilter("sector", c.value)}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <span className="pf-chip-label">Stage</span>
            <div className="pf-chip-group">
              {STAGE_CHIPS.map((c) => (
                <button
                  key={c.value}
                  className={`pf-chip${stage === c.value ? " is-active" : ""}`}
                  onClick={() => toggleFilter("stage", c.value)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="pf-meta-row">
          <span>{countLabel}</span>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <span>Sort: Most recent</span>
            <div className="view-toggle">
              <button
                className={view === "grid" ? "is-active" : ""}
                onClick={() => setView("grid")}
              >
                ▦ Grid
              </button>
              <button
                className={view === "list" ? "is-active" : ""}
                onClick={() => setView("list")}
              >
                ≡ List
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className={`pf-grid${view === "list" ? " is-list" : ""}`}>
        {list.length === 0 ? (
          <div className="pf-empty">
            <h3>No ventures match those filters.</h3>
            <p>
              Try clearing a filter, or browse all 252 ventures. If you&apos;re
              looking for a specific company, search by name.
            </p>
            <button className="btn btn-ghost" onClick={resetFilters}>
              Clear filters
            </button>
          </div>
        ) : (
          list.map((v) => (
            <Link key={v.name} className="pf-card" href={ventureUrl(v)}>
              <div
                className={`photo ${
                  v.photo === "tea"
                    ? "photo-tea"
                    : v.photo === "copper"
                    ? "photo-copper"
                    : ""
                }`}
              >
                <div className="photo-label">
                  PHOTO: {v.name} - founder + product, {v.loc.split(",")[0]}
                </div>
              </div>
              <div className="pf-card__head">
                <div>
                  <div className="pf-card__name">{v.name}</div>
                  <div className="pf-card__sector">{v.sector}</div>
                </div>
                <div className="pf-card__year">{v.year}</div>
              </div>
              <p className="pf-card__desc">{v.desc}</p>
              <div className="pf-card__foot">
                <span className="pgm">{v.program}</span>
                <span className="loc">⌖ {v.loc}</span>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* PAGINATION */}
      <div className="pf-pagination">
        <button>‹</button>
        <button className="is-active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <span className="ellipsis">…</span>
        <button>21</button>
        <button>›</button>
      </div>
    </>
  );
}
