import Link from "next/link";
import Brand from "./Brand";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Brand />
            <p>
              North East Agriculture Technology Entrepreneurs Hub — a Section-8
              company recognised as a Centre of Excellence by the Department of
              Agriculture and Farmers&apos; Welfare.
            </p>
            <div className="address">
              NEATeHUB, Assam Agricultural University,
              <br />
              Borbheta, Jorhat – 785013, Assam, India
              <br />
              <br />
              hello@neatehub.org
              <br />
              +91 376 234 0000
            </div>
          </div>

          <div className="footer__col">
            <h4>Programs</h4>
            <ul>
              <li><Link href="/programs/aic">AIC</Link></li>
              <li><Link href="/programs/rkvy-raftaar">RKVY RAFTAAR</Link></li>
              <li><Link href="/programs/rkvy-raftaar#navyam">└ Navyam</Link></li>
              <li><Link href="/programs/rkvy-raftaar#isanya">└ Isanya</Link></li>
              <li><Link href="/programs/rkvy-raftaar#saranya">└ Saranya</Link></li>
              <li><Link href="/programs/asrlm">ASRLM</Link></li>
              <li><Link href="/programs/student-first">AAU Student First</Link></li>
              <li><Link href="/programs/build-club">Build Club</Link></li>
              <li><Link href="/programs">All programs</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>For Founders</h4>
            <ul>
              <li><Link href="/for-founders">Types of support</Link></li>
              <li><Link href="/for-founders">Sectors</Link></li>
              <li><Link href="/for-founders#wizard">Eligibility wizard</Link></li>
              <li><Link href="/for-founders#apply">Apply</Link></li>
              <li><Link href="/ask">Ask NEATeHUB AI</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>About</h4>
            <ul>
              <li><Link href="/about">Organisation</Link></li>
              <li><Link href="/about#directors">Directors</Link></li>
              <li><Link href="/about#team">Team</Link></li>
              <li><Link href="/about#partners">Partners</Link></li>
              <li><Link href="/about#careers">Careers</Link></li>
              <li><Link href="/about#contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col footer__col--mb">
            <h4>Resources</h4>
            <ul>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/insights#events">Events</Link></li>
              <li><Link href="/resources#impact">Impact Reports</Link></li>
              <li><Link href="/resources#newsletter">Newsletter archive</Link></li>
              <li><Link href="/about#partners">Mentor directory</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__legal">
          <span>© 2026 NEATeHUB · CIN U74140AS2018NPL018xxx</span>
          <nav>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/rti">RTI</Link>
            <Link href="/sitemap">Sitemap</Link>
          </nav>
          <span>Built by Incubest →</span>
        </div>
      </div>
    </footer>
  );
}
