/* NEATeHUB — site chrome injector (banner + header + mobile nav + footer) */
/* Usage: <body data-page="portfolio"> then load chrome.js BEFORE shared.js */

(function () {
  const page = document.body.dataset.page || '';
  const cur = (name) => page === name ? ' aria-current="page"' : '';

  const banner = `
<div class="top-banner" data-banner role="region" aria-label="Site announcement">
  <div class="top-banner__inner">
    <span class="badge badge-tea"><span class="dot"></span> APPLICATIONS OPEN</span>
    <span><strong>Saranya Cohort 4</strong> — early & growth-stage agri-tech ventures. Apply by 30 June 2026. <a href="for-founders.html">Check eligibility →</a></span>
    <button class="top-banner__close" data-banner-close aria-label="Dismiss banner">✕</button>
  </div>
</div>`;

  const header = `
<header class="site-header">
  <div class="site-header__inner">
    <a href="index.html" class="brand" aria-label="NEATeHUB home">
      <span class="brand__mark">N</span>
      <span>NEATe<span class="brand__hub">HUB</span></span>
    </a>
    <nav class="nav" aria-label="Primary">
      <div class="nav__item"><a href="index.html" class="nav__link"${cur('home')}>Home</a></div>
      <div class="nav__item">
        <a href="about.html" class="nav__link"${cur('about')}>About <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.4"/></svg></a>
        <div class="nav__menu">
          <div class="menu-meta">About NEATeHUB</div>
          <a href="about.html">Organisation</a>
          <a href="about.html#directors">Directors</a>
          <a href="about.html#team">Team</a>
          <a href="about.html#partners">Partners</a>
          <a href="insights.html">Newsroom</a>
          <a href="about.html#careers">Careers</a>
          <a href="about.html#contact">Contact</a>
        </div>
      </div>
      <div class="nav__item">
        <a href="programs.html" class="nav__link"${cur('programs')}>Programs <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.4"/></svg></a>
        <div class="nav__menu">
          <div class="menu-meta">Flagship · 3 sub-programs</div>
          <a href="programs-rkvy.html">RKVY RAFTAAR</a>
          <a href="programs-rkvy.html#navyam">└ Navyam</a>
          <a href="programs-rkvy.html#isanya">└ Isanya</a>
          <a href="programs-rkvy.html#saranya">└ Saranya</a>
          <div class="menu-meta">Other programs</div>
          <a href="programs-aic.html">AIC — NITI Aayog</a>
          <a href="programs-asrlm.html">ASRLM</a>
          <a href="programs-student-first.html">Student First</a>
          <a href="programs-ticiitg.html">TIC (IITG) - AISF</a>
        </div>
      </div>
      <div class="nav__item"><a href="for-founders.html" class="nav__link"${cur('founders')}>For Founders</a></div>
      <div class="nav__item"><a href="portfolio.html" class="nav__link"${cur('portfolio')}>Portfolio</a></div>
      <div class="nav__item"><a href="infrastructure.html" class="nav__link"${cur('infra')}>Infrastructure</a></div>
      <div class="nav__item"><a href="insights.html" class="nav__link"${cur('insights')}>Insights</a></div>
      <div class="nav__item"><a href="resources.html" class="nav__link"${cur('resources')}>Resources</a></div>
    </nav>
    <div class="header__actions">
      <div class="lang-toggle" data-lang role="group" aria-label="Language">
        <button aria-pressed="true">EN</button>
        <button aria-pressed="false">हि</button>
        <button aria-pressed="false">অ</button>
      </div>
      <a href="for-founders.html#apply" class="btn btn-primary btn-sm header__apply-desktop">Apply <span class="arrow">→</span></a>
      <button class="header__hamburger" data-mnav-open aria-label="Open menu">
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none"><path d="M0 1h20M0 7h20M0 13h14" stroke="currentColor" stroke-width="1.6"/></svg>
      </button>
    </div>
  </div>
</header>
<div class="mnav" data-mnav aria-hidden="true">
  <div class="mnav__top">
    <a href="index.html" class="brand"><span class="brand__mark">N</span><span>NEATe<span class="brand__hub">HUB</span></span></a>
    <button class="mnav__close" data-mnav-close aria-label="Close menu">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M1 1l16 16M17 1L1 17" stroke="currentColor" stroke-width="1.6"/></svg>
    </button>
  </div>
  <ul class="mnav__list">
    <li><a href="index.html">Home</a></li>
    <li>
      <a href="about.html">About</a>
      <ul class="mnav__sub"><li><a href="about.html#directors">Directors</a></li><li><a href="about.html#team">Team</a></li><li><a href="about.html#partners">Partners</a></li><li><a href="about.html#contact">Contact</a></li></ul>
    </li>
    <li>
      <a href="programs.html">Programs</a>
      <ul class="mnav__sub"><li><a href="programs-rkvy.html">RKVY RAFTAAR</a></li><li><a href="programs-rkvy.html#navyam">└ Navyam</a></li><li><a href="programs-rkvy.html#isanya">└ Isanya</a></li><li><a href="programs-rkvy.html#saranya">└ Saranya</a></li><li><a href="programs-aic.html">AIC</a></li><li><a href="programs-asrlm.html">ASRLM</a></li><li><a href="programs-student-first.html">Student First</a></li><li><a href="programs-ticiitg.html">TIC (IITG) - AISF</a></li></ul>
    </li>
    <li><a href="for-founders.html">For Founders</a></li>
    <li><a href="portfolio.html">Portfolio</a></li>
    <li><a href="infrastructure.html">Infrastructure</a></li>
    <li><a href="insights.html">Insights & Events</a></li>
    <li><a href="resources.html">Resources</a></li>
    <li><a href="ai-assistant.html">Ask NEATeHUB AI</a></li>
  </ul>
  <div class="mnav__cta">
    <a href="for-founders.html#apply" class="btn btn-primary btn-lg">Apply to a program <span class="arrow">→</span></a>
    <div class="lang-toggle" data-lang role="group" aria-label="Language" style="justify-self: start;">
      <button aria-pressed="true">EN</button>
      <button aria-pressed="false">हि</button>
      <button aria-pressed="false">অ</button>
    </div>
  </div>
</div>`;

  const footer = `
<footer class="site-footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <a href="index.html" class="brand">
          <span class="brand__mark">N</span>
          <span>NEATe<span class="brand__hub">HUB</span></span>
        </a>
        <p>North East Agriculture Technology Entrepreneurs Hub — a Section-8 company recognised as a Centre of Excellence by the Department of Agriculture and Farmers' Welfare.</p>
        <div class="address">
          NEATeHUB, Assam Agricultural University,<br>
          Borbheta, Jorhat – 785013, Assam, India<br><br>
          hello@neatehub.org<br>
          +91 376 234 0000
        </div>
      </div>
      <div class="footer__col">
        <h4>Programs</h4>
        <ul>
          <li><a href="programs-rkvy.html">RKVY RAFTAAR</a></li>
          <li><a href="programs-rkvy.html#navyam">└ Navyam</a></li>
          <li><a href="programs-rkvy.html#isanya">└ Isanya</a></li>
          <li><a href="programs-rkvy.html#saranya">└ Saranya</a></li>
          <li><a href="programs-aic.html">AIC</a></li>
          <li><a href="programs-asrlm.html">ASRLM</a></li>
          <li><a href="programs-student-first.html">Student First</a></li>
          <li><a href="programs-ticiitg.html">TIC (IITG) - AISF</a></li>
          <li><a href="programs.html">All programs</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>For Founders</h4>
        <ul>
          <li><a href="for-founders.html">Types of support</a></li>
          <li><a href="for-founders.html">Sectors</a></li>
          <li><a href="for-founders.html#wizard">Eligibility wizard</a></li>
          <li><a href="for-founders.html#apply">Apply</a></li>
          <li><a href="ai-assistant.html">Ask NEATeHUB AI</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>About</h4>
        <ul>
          <li><a href="about.html">Organisation</a></li>
          <li><a href="about.html#directors">Directors</a></li>
          <li><a href="about.html#team">Team</a></li>
          <li><a href="about.html#partners">Partners</a></li>
          <li><a href="about.html#careers">Careers</a></li>
          <li><a href="about.html#contact">Contact</a></li>
        </ul>
      </div>
      <div class="footer__col footer__col--mb">
        <h4>Resources</h4>
        <ul>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="insights.html">Insights</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Impact Reports</a></li>
          <li><a href="#">Newsletter archive</a></li>
          <li><a href="#">Mentor directory</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__legal">
      <span>© 2026 NEATeHUB · CIN U74140AS2018NPL018xxx</span>
      <nav><a href="#">Privacy</a><a href="#">Terms</a><a href="#">RTI</a><a href="#">Sitemap</a></nav>
      <span>Built by Incubest →</span>
    </div>
  </div>
</footer>`;

  // Inject
  const chromeTop = document.querySelector('[data-chrome-top]');
  const chromeBottom = document.querySelector('[data-chrome-bottom]');
  if (chromeTop) chromeTop.innerHTML = banner + header;
  if (chromeBottom) chromeBottom.innerHTML = footer;
})();
