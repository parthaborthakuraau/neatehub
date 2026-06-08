import type { Metadata } from "next";
import "./insights.css";
import InsightsTabs from "./InsightsTabs";

export const metadata: Metadata = {
  title: "Insights & Events",
  description:
    "What NEATeHUB is seeing in its cohorts, and what's coming up — field notes, events, and newsroom.",
};

export default function InsightsPage() {
  return <InsightsTabs />;
}
