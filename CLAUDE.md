# NEATeHUB — Claude Code handoff brief

You are inheriting the design phase of a complete NEATeHUB website redesign. The design phase produced **21 HTML pages + supporting CSS/JS** in this folder. Your job is to port these into a production Next.js 15 application that an institutional team can ship and maintain.

This document tells you **what was decided, what to preserve, and what the design phase did NOT specify** (so you don't invent answers without checking).

---

## 1. What NEATeHUB is

North East Agriculture Technology Entrepreneurs Hub. Agri-tech incubator at Assam Agricultural University, Jorhat. Section-8 company. Founded 2018. Funded by RKVY, NITI Aayog (AIM/AIC), ASRLM, AAU. Centre of Excellence designated by DA&FW.

**Audience priority — do not invert this.**
1. Prospective founders considering applying (conversion goal)
2. Funders and government bodies (credibility judgment)
3. Mentors and partners (relationship building)
4. Press, public, AAU students (awareness)

Every design decision in this handoff was weighed against that order. Carry it forward.

---

## 2. Stack & deployment

| Layer | Decision |
|---|---|
| Framework | **Next.js 15 (App Router)** |
| Styling | **Tailwind CSS** (with the tokens below as the config baseline) |
| CMS | Sanity or Payload — **decide before sprint 1**, both work |
| Hosting | **Vercel** |
| AI features | **Groq API** for the public AI assistant (`ai-assistant.html`) |
| Auth + DB | **Deferred to phase 2** — do not build anything that requires login except where noted |
| Forms | Server actions + Resend / Postmark for email |

Out of scope for v1: employee portal, applicant portal post-submission, HRMS, internal AI knowledge tool, RKVY subdomain (use `/programs/rkvy-raftaar`).

---

## 3. Site map

**Top nav — 8 items, locked:**
1. Home — `/`
2. About — `/about` (sections: Directors, Team, Partners, Newsroom, Careers, Contact)
3. Programs — `/programs` (5 top-level programs)
4. For Founders — `/for-founders`
5. Portfolio — `/portfolio`
6. Infrastructure — `/infrastructure`
7. Insights & Events — `/insights`
8. Resources — `/resources`

**Five top-level programs (this structure is canonical — do not invert):**
1. **RKVY RAFTAAR** — `/programs/rkvy-raftaar` — flagship, contains three sub-programs:
   - Navyam — `/programs/rkvy-raftaar#navyam` (student stage)
   - Isanya — `/programs/rkvy-raftaar#isanya` (idea stage, residential)
   - Saranya — `/programs/rkvy-raftaar#saranya` (growth stage)
2. **AIC** — `/programs/aic` — NITI Aayog / Atal Incubation Centre
3. **ASRLM** — `/programs/asrlm` — Assam State Rural Livelihoods Mission
4. **Student First** — `/programs/student-first` — campus entrepreneurship (distinct from Navyam)
5. **TIC (IITG) - AISF** — `/programs/tic-iitg-aisf` — joint with IIT Guwahati, deep-tech

Never call sub-programs "vehicles" or RKVY an "umbrella" — the user explicitly rejected those words. They are all "programs"; Navyam/Isanya/Saranya are "sub-programs."

---

## 4. Files in this folder

### Shared
- `styles.css` — design tokens + base components. **Port this to Tailwind config** (see §6).
- `chrome.js` — site header + footer injector. Becomes `<SiteHeader />` + `<SiteFooter />` React components.
- `shared.js` — banner dismiss, mobile nav, lang toggle, IntersectionObserver reveals.
- `program-detail.css` — shared styles for program detail pages 2–5 (AIC, ASRLM, Student First, TIC-AISF).

### Pages (21 HTML files)

| File | Becomes route | Notes |
|---|---|---|
| `index.html` | `/` | Homepage; uses inline header (not chrome.js) |
| `about.html` | `/about` | Includes inline ecosystem-map SVG diagram |
| `programs.html` | `/programs` | Hub showing all 5 programs |
| `programs-rkvy.html` | `/programs/rkvy-raftaar` | Includes inline capital-ladder SVG diagram |
| `programs-aic.html` | `/programs/aic` | |
| `programs-asrlm.html` | `/programs/asrlm` | |
| `programs-student-first.html` | `/programs/student-first` | |
| `programs-ticiitg.html` | `/programs/tic-iitg-aisf` | |
| `for-founders.html` | `/for-founders` | Contains the 6-step eligibility wizard |
| `portfolio.html` | `/portfolio` | Filterable directory, JS-rendered cards |
| `portfolio-kaziranga-bio.html` | `/portfolio/[slug]` | Template for all venture profiles |
| `infrastructure.html` | `/infrastructure` | Scaffold for 4 labs |
| `infrastructure-robotics-lab.html` | `/infrastructure/[slug]` | Photo-essay template for individual labs |
| `insights.html` | `/insights` | Tabbed: Insights / Events / Newsroom |
| `insight-detail.html` | `/insights/[slug]` | Editorial article template |
| `event-detail.html` | `/insights/events/[slug]` | Event template |
| `resources.html` | `/resources` | Downloads, impact reports, mentor public view |
| `ai-assistant.html` | `/ask` | 3-intent chat, Groq-powered |
| `404.html` | Next.js 404 | |
| `search.html` | `/search` | |
| `patterns.html` | (design system reference; not in production nav) | |
| `diagrams.html` | (design system reference; not in production nav) | |

---

## 5. Design system

### 5.1 Palette — tea-country, not gamosa

```
--cream-50:  #faf6ee  -- page background
--cream-100: #f3ecdb  -- section accent / cards
--cream-200: #ebe1c8
--cream-300: #ddd1b1

--ink-900: #1a1612    -- body text
--ink-800: #2a2520
--ink-700: #3a342d    -- secondary text
--ink-500: #6e6558    -- muted / labels

--tea-900: #1a2e1f    -- primary brand, footer/CTAs
--tea-800: #243d2c
--tea-700: #34543d
--tea-600: #4a6f54
--tea-500: #6a8c72

--copper-700: #8a4a23  -- hover/active accent
--copper-600: #a85d2e  -- primary accent
--copper-500: #c97849

--soil-700: #5c3d28
--soil-500: #8a6648

--line:        #d8cdb5
--line-soft:   #e8dfca
--line-strong: #c3b393
```

**Hard rules:**
- No gamosa red. No saturated reds anywhere.
- No gradients on background fills. Subtle radial gradients in hero are acceptable.
- Copper is for **accent only** — buttons, links, active states, single emphasis points. Never for body background.

### 5.2 Typography — three families, no system stack

| Family | Use | Google Fonts |
|---|---|---|
| **Newsreader** | Display / editorial headings | weights 400, 500 |
| **IBM Plex Sans** | Body text, UI | weights 400, 500, 600 |
| **IBM Plex Mono** | Labels, data, kicker, timestamps | weights 400, 500 |

**Do not substitute for Inter, Roboto, Arial, Fraunces, or any system stack.** These are explicitly off the table.

Sizing scale uses `clamp()` for responsive fluid type — preserve the existing scales rather than re-defining them.

### 5.3 Spacing & radii

- Section padding: `clamp(56px, 7vw, 96px)` standard; `clamp(40px, 5vw, 72px)` for tight
- Container max: `1320px` default, `1480px` wide, `760px` text
- Gutter: `clamp(20px, 4vw, 56px)`
- Radii: `--r-sm: 4px`, `--r-md: 8px`, `--r-lg: 14px`
- Pills/badges: `999px`

### 5.4 Photography & imagery

Every photo placeholder in the HTML uses a descriptive label of what should be shot. **Brief the photographer with these labels — they are intentional**, not lorem ipsum. Examples:
- "PHOTO: Founder in tea estate, golden hour, mid-shot"
- "PHOTO: Cold-chain micro-unit at FPO collection point, Tezpur"
- "PHOTO: Dr. Bhattacharyya, environmental portrait at AAU lab, eye-level, natural light"

Photo treatment in HTML uses subtly-striped placeholders with monospace explainers. In production these are replaced with real photography.

**Three photo treatments:**
- `.photo` — neutral cream-tinted with diagonal stripe overlay
- `.photo-tea` — tea-green tinted (dark)
- `.photo-copper` — copper-tinted (warm)

Use these to balance tonal weight across grids — don't make every card the same treatment.

### 5.5 Iconography

**No emoji.** No drawn-illustration icons. Where icons exist in the HTML, they are minimal line SVGs (chevrons, arrows, plus/minus). Stay restrained.

### 5.6 Line diagrams — the signature element

Four distributed line-animated diagrams give the site its visual identity. Each is a draw-in animated SVG triggered by IntersectionObserver.

| Diagram | Lives on | Token name |
|---|---|---|
| Incubation Journey | `index.html` (Section 03) | `process-path-1` |
| Capital across RKVY sub-programs | `programs-rkvy.html` (Overview) | `capital-ladder-1` |
| Ecosystem map | `about.html` (Partners section) | `ecosystem-map-1` |
| Decision tree | `diagrams.html` (reference only) | `decision-tree-1` |

**Diagram language rules:**
- Line-only, no fill (active states only get copper)
- Textile substrate — warp + weft grid + 45° muga diagonal at 6% opacity
- Draw-in 1.4s ease-out, 200ms staggers, `prefers-reduced-motion` respected
- Mono labels (10px / 0.1em letter-spacing) for state, Display serif for node names
- No icons inside diagrams

In Next.js, build these as React components keyed by name, e.g. `<JourneyDiagram />`, `<CapitalLadder />`, with the same draw-in behaviour. Animation tokens become `--ease-draw` and `--dur-draw`.

---

## 6. Tailwind config baseline

```js
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        cream: { 50:'#faf6ee', 100:'#f3ecdb', 200:'#ebe1c8', 300:'#ddd1b1' },
        ink:   { 900:'#1a1612', 800:'#2a2520', 700:'#3a342d', 500:'#6e6558', 400:'#8c8378' },
        tea:   { 900:'#1a2e1f', 800:'#243d2c', 700:'#34543d', 600:'#4a6f54', 500:'#6a8c72' },
        copper:{ 700:'#8a4a23', 600:'#a85d2e', 500:'#c97849' },
        soil:  { 700:'#5c3d28', 500:'#8a6648' },
        line:  { DEFAULT:'#d8cdb5', soft:'#e8dfca', strong:'#c3b393' },
      },
      fontFamily: {
        display: ['Newsreader', 'Source Serif 4', 'Georgia', 'serif'],
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        site: '1320px',
        siteWide: '1480px',
        siteText: '760px',
      },
    },
  },
};
```

Add Google Fonts via `next/font/google` with `Newsreader`, `IBM_Plex_Sans` (`400,500,600`), `IBM_Plex_Mono` (`400,500`).

---

## 7. Components to extract

Lift these into `components/` first; they're used across multiple pages.

| Component | Source files | Notes |
|---|---|---|
| `<SiteHeader>` | `chrome.js` | Includes language toggle, mobile drawer, mega-dropdown for Programs |
| `<SiteFooter>` | `chrome.js` | Full sitemap, legal, address, "Built by Incubest" |
| `<TopBanner variant>` | `styles.css` `.top-banner` + `patterns.html` | 4 variants: announce, deadline, info, system. Dismissal in localStorage with per-campaign key |
| `<Modal>` | `patterns.html` | ESC + backdrop dismiss, focus trap |
| `<Toast>` | `patterns.html` | Auto-dismiss 5s |
| `<SideSheet>` | `patterns.html` | Contextual deadline reminder |
| `<CookieBar>` | `patterns.html` | One-time, persisted accept |
| `<LangToggle>` | `chrome.js` | EN / हि / অ; state persisted |
| `<PhotoSlot variant>` | `styles.css` `.photo` family | variants: default, tea, copper |
| `<Badge variant>` | `styles.css` `.badge` family | tea, copper, soft |
| `<Button variant>` | `styles.css` `.btn` family | primary, copper, ghost, cream + sizes sm/md/lg |
| `<ProgramSpecStrip>` | program detail pages | 5-column spec block under hero |
| `<StickySubnav>` | program detail pages | Auto-active on scroll, smooth-scroll with offset |
| `<EligibilityList>` | program detail pages | Required / Preferred / Excludes labelled list |
| `<ProcessTimeline>` | program detail pages | 5-step timeline with effort/outcome metadata |
| `<FundingTable>` | venture profile | Round / amount / lead / NEATeHUB role / date |
| `<MilestonesTimeline>` | venture profile | Year + event + sub-event |
| `<EditorialBody>` | `insight-detail.html` | Display-serif paragraphs with proper drop-caps and pull-quote styling |
| `<RSVPForm>` | `event-detail.html` | Name + email + venture + legal + seat counter |
| `<EligibilityWizard>` | `for-founders.html` | 6 steps, fit-scoring, edge-case email fallback |

---

## 8. CMS schema sketch (Sanity or Payload)

Minimum content types to support v1:

- `Program` — name, slug, parent (for sub-programs), status (open/rolling/closed), capital range, duration, funder, eligibility list, process steps, FAQ
- `Venture` — name, slug, sector, stage, year, programs (array refs), location, founders, milestones, funding rounds, press, photos
- `Insight` — title, slug, dek, author (ref), category, body (portable text), hero photo, related posts
- `Event` — title, slug, date+time, location, format (in-person/online), agenda items, speakers (refs), RSVP form
- `MentorPublic` — name, expertise, one-line credential, photo (gated profile for phase 2)
- `Director` / `TeamMember` — name, role, bio, photo
- `Download` — title, file, size, updated date
- `ImpactReport` — year, headline numbers, file
- `Partner` — name, role (funder / host / etc.)
- `Banner` — variant, copy, CTA, deadline (for dismissal cap)

---

## 9. Eligibility wizard logic

Lives in `for-founders.html`. Six questions: stage · sector · who · capital · location · residential. Scoring matrix produces top-3 program matches with fit percentages. Routes to specific program pages via the `links` map.

The edge-case path (no strong match) **must remain functional** — it captures email and promises a callback. Never let the wizard dead-end.

Port the scoring as a server action with a small JSON ruleset so it can be edited without code deploys. Keep the wizard client-side; only the email-capture submission hits the server.

---

## 10. AI assistant (Groq-powered, public)

Three intents:
1. "Am I eligible?" — eligibility routing
2. "Tell me about NEATeHUB" — knowledge mode
3. "Help me ideate" — thinking partner

Implementation:
- **Model**: Groq `llama-3.1-70b` or current equivalent — confirm with NEATeHUB
- **Retrieval**: Curated knowledge base over program docs, portfolio, FAQ
- **Storage**: Conversations are NOT persisted unless user explicitly requests callback (then capture email)
- **Rate limit**: per-IP, generous for browsing
- **Citations**: every program rule surfaced must cite source doc (visible in chat UI)

The `ai-assistant.html` page has simulated canned responses — replace with real Groq calls, retain the UI patterns (typing dots, citation chips, intent switching).

---

## 11. Accessibility — non-negotiable

WCAG AA contrast minimum. Keyboard navigable. Reduced-motion respected (already implemented in CSS — preserve the `@media (prefers-reduced-motion)` blocks). Focus rings visible (currently `outline: 2px var(--copper-500)`). Alt text required on every meaningful image at CMS level. Skip-link to main content should be added.

---

## 12. Language support

UI is built for **EN · हि (Hindi) · অ (Assamese)** trilingual support. Toggle is wired in header; only EN content shipped in v1. Other languages route to a "coming soon" view in production.

Use `next-intl` or `next-i18next`. CMS strings must be translatable per locale. Hindi and Assamese typography needs proper IBM Plex Sans subsetting — test rendering before signing off.

---

## 13. Things that were explicitly NOT designed in this phase

Confirm with NEATeHUB before inventing:
- Director profile detail pages
- Mentor profile detail pages (gated for phase 2)
- Applicant portal post-submission flow (phase 2)
- Newsletter archive detail pages
- Impact report detail viewer (PDF download is enough for v1)
- Cookie consent legal copy (use placeholder; legal team to confirm)
- Privacy / Terms / RTI content (placeholders linked from footer)

---

## 14. Performance + SEO

- Aim for Lighthouse 95+ on all four scores
- Use `next/image` for all photos with priority on above-fold hero
- Static-generate everything except the wizard result, search, and AI chat
- Schema.org markup for: `Organization` (homepage), `Article` (insights), `Event` (events), `Person` (directors/team)
- `next-sitemap` for sitemap.xml + robots.txt
- Open Graph + Twitter card metadata per page (CMS-driven)

---

## 15. What success looks like

A founder in Tezpur who lands on `/programs/rkvy-raftaar`:
1. Reads the umbrella in under a minute
2. Identifies which sub-program they belong in
3. Hits the eligibility wizard, gets a fit score
4. Reaches the apply form without a dead link

A funder in Delhi who lands on `/portfolio`:
1. Sees 250+ ventures at a glance
2. Filters to sector + program + year
3. Reads a venture profile
4. Downloads the latest impact report

If both paths work end-to-end on a 2018 Android phone over 4G, the port is done.

---

## 16. Open questions to take to the user

Before sprint 1:
1. **CMS choice** — Sanity or Payload?
2. **Photography commission** — who, when, what budget?
3. **Logo asset** — final lockup file from NEATeHUB
4. **AIC vs AIM terminology** — confirm canonical name used in govt comms
5. **Newsletter provider** — Substack, Mailchimp, Resend Audience?
6. **Search backend** — Algolia, Meilisearch, or simple CMS text search?
7. **AI assistant content corpus** — what docs feed the RAG?

---

## 17. Don't do this

- Don't rename "RKVY RAFTAAR" sub-programs as "vehicles" or "tracks." They are sub-programs.
- Don't use "umbrella" to describe RKVY. It's a program with three sub-programs.
- Don't add emoji or drawn icons. The aesthetic is restrained.
- Don't introduce gradient backgrounds or saturated reds.
- Don't grey-out the Apply CTA when programs are closed. Route to the eligibility wizard instead.
- Don't replace the photography placeholders with stock photos. Commission real photography.
- Don't add unnecessary "data slop" — extra numbers, charts, or stats that don't earn their place.

---

This brief and the 21 HTML files are the contract. Anything not in here is a decision NEATeHUB needs to make. Don't invent.

— End of brief.
