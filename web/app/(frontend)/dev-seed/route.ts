import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { VENTURES_K } from "./group-k";
import { VENTURES_A } from "./group-a";
import { VENTURES_B } from "./group-b";
import { VENTURES_C } from "./group-c";

/**
 * Dev-only seeding endpoint. GET /dev-seed populates the ventures collection
 * with the 12 fully-authored placeholder ventures from the design
 * (idempotent by slug). Disabled in production — remove/gate before launch.
 */

const VENTURES = [...VENTURES_K, ...VENTURES_A, ...VENTURES_B, ...VENTURES_C];

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Disabled in production." }, { status: 403 });
  }

  const payload = await getPayload({ config });
  const results: string[] = [];
  for (const v of VENTURES) {
    const existing = await payload.find({
      collection: "ventures",
      where: { slug: { equals: v.slug } },
      limit: 1,
    });
    if (existing.docs.length) {
      results.push(`skip (exists): ${v.slug}`);
      continue;
    }
    await payload.create({ collection: "ventures", data: v });
    results.push(`created: ${v.slug}`);
  }
  return NextResponse.json({ ok: true, count: VENTURES.length, results });
}
