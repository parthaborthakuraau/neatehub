import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

/**
 * Dev-only seeding endpoint. GET /dev-seed populates the ventures collection
 * with the 12 placeholder ventures from the design (idempotent by slug).
 * Disabled in production. Remove or gate behind auth before going live.
 */

const VENTURES = [
  { name: "Kaziranga Bio", slug: "kaziranga-bio", sector: "Agri-Input", stage: "growth", year: 2024, program: "Saranya · RKVY", location: "Jorhat, AS", oneLiner: "Microbial bio-stimulants for tea estates. Replacing chemical inputs in 9 Assam gardens.", photoTreatment: "tea" },
  { name: "Thalo Cold", slug: "thalo-cold", sector: "Post-Harvest", stage: "growth", year: 2023, program: "RKVY", location: "Tezpur, AS", oneLiner: "Solar cold-chain micro-units for FPO-led aggregation. 14 nodes operational.", photoTreatment: "default" },
  { name: "Brahma Aqua", slug: "brahma-aqua", sector: "Aqua", stage: "early", year: 2024, program: "AIC", location: "Guwahati, AS", oneLiner: "Indigenous fish-feed formulation. 30% cost reduction vs imports.", photoTreatment: "copper" },
  { name: "Mati Labs", slug: "mati-labs", sector: "Agri-Input", stage: "idea", year: 2025, program: "Isanya", location: "Jorhat, AS", oneLiner: "Mobile soil-testing rig for KVKs. ₹40 per test, 14-min turnaround.", photoTreatment: "default" },
  { name: "Eri Threads", slug: "eri-threads", sector: "Food", stage: "early", year: 2023, program: "ASRLM", location: "Sualkuchi, AS", oneLiner: "Eri silk by-product proteins for nutraceutical use. Producer-owned.", photoTreatment: "tea" },
  { name: "Naga Greens", slug: "naga-greens", sector: "Food", stage: "growth", year: 2022, program: "RKVY", location: "Dimapur, NL", oneLiner: "Naga king-chilli supply chain - direct from grower to processor.", photoTreatment: "copper" },
  { name: "Sirohi Dairy", slug: "sirohi-dairy", sector: "Livestock", stage: "early", year: 2024, program: "AIC", location: "Sivasagar, AS", oneLiner: "Smallholder dairy aggregation with chilling at every collection point.", photoTreatment: "default" },
  { name: "Hilltop Coffee", slug: "hilltop-coffee", sector: "Food", stage: "early", year: 2024, program: "Saranya", location: "Aizawl, MZ", oneLiner: "Specialty coffee co-operative across 80 Mizoram smallholders.", photoTreatment: "default" },
  { name: "Khasi Honey", slug: "khasi-honey", sector: "Food", stage: "growth", year: 2022, program: "RKVY", location: "Shillong, ML", oneLiner: "Single-origin honey, FSSAI-certified, exporting to Singapore.", photoTreatment: "copper" },
  { name: "Pukhuri Fish", slug: "pukhuri-fish", sector: "Aqua", stage: "idea", year: 2025, program: "Isanya", location: "Nagaon, AS", oneLiner: "Pond-based aquaculture sensor pack. Pilot with 200 ponds.", photoTreatment: "tea" },
  { name: "Bambusa Build", slug: "bambusa-build", sector: "Agri-Input", stage: "growth", year: 2021, program: "RKVY · AIC", location: "Imphal, MN", oneLiner: "Engineered bamboo for agri-shelter construction. 2,300 units shipped.", photoTreatment: "default" },
  { name: "Charai Foods", slug: "charai-foods", sector: "Food", stage: "early", year: 2023, program: "Saranya", location: "Agartala, TR", oneLiner: "Smoked-pork product line with FSSAI clearance and 6-state distribution.", photoTreatment: "copper" },
];

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
