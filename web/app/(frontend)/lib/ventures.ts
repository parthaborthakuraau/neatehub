import { getPayload } from "payload";
import config from "@payload-config";

/** The shape the portfolio directory + cards consume. */
export type VentureCard = {
  name: string;
  slug: string;
  sector: string;
  stage: string;
  year: string; // display label, e.g. "'24"
  program: string;
  loc: string;
  desc: string;
  photo: string; // "" | "tea" | "copper"
  url: string;
};

/** Raw venture document fields we read from Payload. */
export type VentureDoc = {
  name: string;
  slug: string;
  sector?: string | null;
  stage?: string | null;
  year?: number | null;
  program?: string | null;
  location?: string | null;
  oneLiner?: string | null;
  photoTreatment?: string | null;
};

export function mapVentureToCard(d: VentureDoc): VentureCard {
  return {
    name: d.name,
    slug: d.slug,
    sector: d.sector ?? "",
    stage: d.stage ?? "",
    year: d.year ? `'${String(d.year).slice(-2)}` : "",
    program: d.program ?? "",
    loc: d.location ?? "",
    desc: d.oneLiner ?? "",
    photo: d.photoTreatment && d.photoTreatment !== "default" ? d.photoTreatment : "",
    url: `/portfolio/${d.slug}`,
  };
}

export async function getVentureCards(): Promise<VentureCard[]> {
  const payload = await getPayload({ config });
  const res = await payload.find({
    collection: "ventures",
    limit: 500,
    sort: "-year",
  });
  return (res.docs as unknown as VentureDoc[]).map(mapVentureToCard);
}

export async function getVentureBySlug(slug: string): Promise<VentureDoc | null> {
  const payload = await getPayload({ config });
  const res = await payload.find({
    collection: "ventures",
    where: { slug: { equals: slug } },
    limit: 1,
  });
  return (res.docs[0] as unknown as VentureDoc) ?? null;
}

export async function getVentureSlugs(): Promise<string[]> {
  const payload = await getPayload({ config });
  const res = await payload.find({
    collection: "ventures",
    limit: 500,
    select: { slug: true },
  });
  return (res.docs as unknown as { slug: string }[]).map((d) => d.slug);
}
