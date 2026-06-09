import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { VENTURES_K } from "./group-k";
import { VENTURES_A } from "./group-a";
import { VENTURES_B } from "./group-b";
import { VENTURES_C } from "./group-c";
import { INSIGHTS_HERO } from "./content/insights-hero";
import { INSIGHTS_GEN } from "./content/insights";
import { NEWSROOM_GEN } from "./content/newsroom";
import { EVENTS_HERO } from "./content/events-hero";
import { EVENTS_GEN } from "./content/events";
import { DOWNLOADS, IMPACT_REPORTS, MENTORS } from "./content/resources";
import { CAREERS } from "./content/careers";
import { DIRECTORS, TEAM, PARTNERS } from "./content/about";

/**
 * Dev-only seeding endpoint. GET /dev-seed populates ventures, insights
 * (incl. newsroom) and events with the fully-authored placeholder content
 * from the design (idempotent by slug). Disabled in production — remove/gate
 * before launch.
 */

const VENTURES = [...VENTURES_K, ...VENTURES_A, ...VENTURES_B, ...VENTURES_C];
const INSIGHTS = [...INSIGHTS_HERO, ...INSIGHTS_GEN, ...NEWSROOM_GEN];
const EVENTS = [...EVENTS_HERO, ...EVENTS_GEN];

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Disabled in production." }, { status: 403 });
  }

  const payload = await getPayload({ config });
  const results: string[] = [];

  async function seed(
    collection:
      | "ventures"
      | "insights"
      | "events"
      | "downloads"
      | "impactReports"
      | "mentors"
      | "careers"
      | "directors"
      | "team"
      | "partners",
    rows: { slug: string }[]
  ) {
    for (const row of rows) {
      const existing = await payload.find({
        collection,
        where: { slug: { equals: row.slug } },
        limit: 1,
      });
      if (existing.docs.length) {
        results.push(`skip ${collection}: ${row.slug}`);
        continue;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await payload.create({ collection, data: row as any });
      results.push(`created ${collection}: ${row.slug}`);
    }
  }

  await seed("ventures", VENTURES);
  await seed("insights", INSIGHTS);
  await seed("events", EVENTS);
  await seed("downloads", DOWNLOADS);
  await seed("impactReports", IMPACT_REPORTS);
  await seed("mentors", MENTORS);
  await seed("careers", CAREERS);
  await seed("directors", DIRECTORS);
  await seed("team", TEAM);
  await seed("partners", PARTNERS);

  // Demo startup-owner so the /portal flow can be tested in dev.
  const ownerEmail = "founder@kaziranga.test";
  const existingOwner = await payload.find({
    collection: "users",
    where: { email: { equals: ownerEmail } },
    limit: 1,
  });
  let ownerId = existingOwner.docs[0]?.id as string | number | undefined;
  if (!ownerId) {
    const created = await payload.create({
      collection: "users",
      data: {
        email: ownerEmail,
        password: "kaziranga123",
        role: "startup-owner",
        name: "Kaziranga Bio (owner)",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any,
    });
    ownerId = created.id;
    results.push(`created demo owner: ${ownerEmail} / kaziranga123`);
  }
  const kb = await payload.find({
    collection: "ventures",
    where: { slug: { equals: "kaziranga-bio" } },
    limit: 1,
    depth: 0,
  });
  if (kb.docs[0] && !kb.docs[0].owner && ownerId) {
    await payload.update({
      collection: "ventures",
      id: kb.docs[0].id,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: { owner: ownerId } as any,
    });
    results.push("assigned kaziranga-bio -> demo owner");
  }

  // Banner has no slug — seed one if the collection is empty.
  const banners = await payload.find({ collection: "banners", limit: 1 });
  if (!banners.docs.length) {
    await payload.create({
      collection: "banners",
      data: {
        message:
          "Saranya Cohort 4 — early & growth-stage agri-tech ventures. Apply by 30 June 2026.",
        badge: "APPLICATIONS OPEN",
        variant: "announce",
        ctaLabel: "Check eligibility",
        ctaHref: "/for-founders",
        active: true,
      },
    });
    results.push("created banner: saranya-c4");
  } else {
    results.push("skip banner (exists)");
  }

  return NextResponse.json({
    ok: true,
    counts: {
      ventures: VENTURES.length,
      insights: INSIGHTS.length,
      events: EVENTS.length,
      downloads: DOWNLOADS.length,
      impactReports: IMPACT_REPORTS.length,
      mentors: MENTORS.length,
      careers: CAREERS.length,
      directors: DIRECTORS.length,
      team: TEAM.length,
      partners: PARTNERS.length,
    },
    results,
  });
}
