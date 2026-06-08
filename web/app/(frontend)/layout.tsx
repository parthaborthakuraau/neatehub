import type { Metadata } from "next";
import { Newsreader, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import ScrollReveal from "./components/ScrollReveal";
import TopBanner from "./components/TopBanner";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neatehub.org"),
  title: {
    default: "NEATeHUB — Backing agri-founders from the Northeast",
    template: "%s · NEATeHUB",
  },
  description:
    "North East Agriculture Technology Entrepreneurs Hub. Housed at Assam Agricultural University. 250+ startups incubated, ₹7Cr+ deployed.",
  openGraph: {
    title: "NEATeHUB — Backing agri-founders from the Northeast",
    description:
      "North East Agriculture Technology Entrepreneurs Hub. A government-recognised Centre of Excellence at Assam Agricultural University.",
    type: "website",
    siteName: "NEATeHUB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <TopBanner
          campaignKey="saranya-c4-2026"
          badge="APPLICATIONS OPEN"
          cta={{ label: "Check eligibility", href: "/for-founders" }}
        >
          <strong>Saranya Cohort 4</strong> — early &amp; growth-stage agri-tech
          ventures. Apply by 30 June 2026.
        </TopBanner>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <ScrollReveal />
      </body>
    </html>
  );
}
