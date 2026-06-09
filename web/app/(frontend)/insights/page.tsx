import type { Metadata } from "next";
import "./insights.css";
import InsightsTabs from "./InsightsTabs";
import { getInsights, getNewsroom, getEvents } from "../lib/content";

export const metadata: Metadata = {
  title: "Insights & Events",
  description:
    "What NEATeHUB is seeing in its cohorts, and what's coming up — field notes, events, and newsroom.",
};

// Always reflect the latest CMS content (new posts/events added in /admin show immediately).
export const dynamic = "force-dynamic";

export default async function InsightsPage() {
  const [insights, newsroom, events] = await Promise.all([
    getInsights(),
    getNewsroom(),
    getEvents(),
  ]);

  const featured =
    insights.find((i) => i.featured === true) ?? insights[0] ?? null;
  const rest = insights.filter((i) => i !== featured);

  return (
    <InsightsTabs
      featured={featured}
      rest={rest}
      newsroom={newsroom}
      events={events}
    />
  );
}
