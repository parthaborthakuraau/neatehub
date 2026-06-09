import type { MetadataRoute } from "next";
import { getVentureSlugs } from "./(frontend)/lib/ventures";
import { getInsights, getNewsroom, getEvents } from "./(frontend)/lib/content";

const BASE = "https://neatehub.org";

const STATIC_ROUTES = [
  "",
  "/about",
  "/programs",
  "/programs/aic",
  "/programs/rkvy-raftaar",
  "/programs/asrlm",
  "/programs/student-first",
  "/programs/build-club",
  "/for-founders",
  "/portfolio",
  "/infrastructure",
  "/infrastructure/robotics-lab",
  "/insights",
  "/resources",
  "/ask",
];

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [ventureSlugs, insights, newsroom, events] = await Promise.all([
    getVentureSlugs(),
    getInsights(),
    getNewsroom(),
    getEvents(),
  ]);

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((p) => ({
    url: `${BASE}${p}`,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }));

  const ventureEntries: MetadataRoute.Sitemap = ventureSlugs.map((s) => ({
    url: `${BASE}/portfolio/${s}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const insightEntries: MetadataRoute.Sitemap = [...insights, ...newsroom].map(
    (i) => ({
      url: `${BASE}/insights/${i.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  const eventEntries: MetadataRoute.Sitemap = events.map((e) => ({
    url: `${BASE}/insights/events/${e.slug}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...ventureEntries,
    ...insightEntries,
    ...eventEntries,
  ];
}
