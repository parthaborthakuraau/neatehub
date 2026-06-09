import { getPayload } from "payload";
import config from "@payload-config";
import { unstable_cache } from "next/cache";

// ---------------- Insights / Newsroom ----------------

export type InsightBlock = {
  kind: string;
  text?: string | null;
  cite?: string | null;
  photoTreatment?: string | null;
  stats?: { num: string; lbl: string }[] | null;
  items?: { text: string }[] | null;
};

export type InsightDoc = {
  title: string;
  slug: string;
  channel?: string | null;
  category?: string | null;
  section?: string | null;
  dek?: string | null;
  date?: string | null;
  readTime?: string | null;
  featured?: boolean | null;
  photoTreatment?: string | null;
  heroPhotoLabel?: string | null;
  heroCaption?: string | null;
  author?: {
    name?: string | null;
    role?: string | null;
    initials?: string | null;
    bio?: string | null;
  } | null;
  body?: InsightBlock[] | null;
  footnotes?: { text: string }[] | null;
};

async function client() {
  return getPayload({ config });
}

export async function getInsights(): Promise<InsightDoc[]> {
  const payload = await client();
  const res = await payload.find({
    collection: "insights",
    where: { channel: { equals: "insights" } },
    limit: 100,
    sort: "-createdAt",
  });
  return res.docs as unknown as InsightDoc[];
}

export async function getNewsroom(): Promise<InsightDoc[]> {
  const payload = await client();
  const res = await payload.find({
    collection: "insights",
    where: { channel: { equals: "newsroom" } },
    limit: 100,
    sort: "-createdAt",
  });
  return res.docs as unknown as InsightDoc[];
}

export async function getInsightBySlug(slug: string): Promise<InsightDoc | null> {
  const payload = await client();
  const res = await payload.find({
    collection: "insights",
    where: { slug: { equals: slug } },
    limit: 1,
  });
  return (res.docs[0] as unknown as InsightDoc) ?? null;
}

// ---------------- Events ----------------

export type EventDoc = {
  title: string;
  slug: string;
  dek?: string | null;
  dateDay?: string | null;
  dateMonth?: string | null;
  dateBig?: string | null;
  dayLabel?: string | null;
  timeLabel?: string | null;
  tz?: string | null;
  duration?: string | null;
  format?: string | null;
  status?: string | null;
  free?: boolean | null;
  programTag?: string | null;
  photoTreatment?: string | null;
  heroPhotoLabel?: string | null;
  seatsTotal?: number | null;
  seatsTaken?: number | null;
  location?: {
    venue?: string | null;
    address?: string | null;
    coords?: string | null;
    travel?: string | null;
  } | null;
  intro?: { text: string }[] | null;
  agenda?: { time: string; what: string; detail?: string | null }[] | null;
  speakers?: {
    name: string;
    role?: string | null;
    bio?: string | null;
    photoTreatment?: string | null;
  }[] | null;
  bring?: { what: string; detail?: string | null }[] | null;
};

export async function getEvents(): Promise<EventDoc[]> {
  const payload = await client();
  const res = await payload.find({
    collection: "events",
    limit: 100,
    sort: "createdAt",
  });
  return res.docs as unknown as EventDoc[];
}

export async function getEventBySlug(slug: string): Promise<EventDoc | null> {
  const payload = await client();
  const res = await payload.find({
    collection: "events",
    where: { slug: { equals: slug } },
    limit: 1,
  });
  return (res.docs[0] as unknown as EventDoc) ?? null;
}

// ---------------- Banner (the top ribbon) ----------------

export type BannerDoc = {
  id: string | number;
  message: string;
  badge?: string | null;
  variant?: string | null;
  ctaLabel?: string | null;
  ctaHref?: string | null;
  active?: boolean | null;
};

/**
 * The active site banner. Cached (60s) so reading it in the root layout does
 * NOT opt every page out of static rendering — admin edits appear within ~a minute.
 */
export const getActiveBanner = unstable_cache(
  async (): Promise<BannerDoc | null> => {
    const payload = await getPayload({ config });
    const res = await payload.find({
      collection: "banners",
      where: { active: { equals: true } },
      limit: 1,
      sort: "-updatedAt",
    });
    return (res.docs[0] as unknown as BannerDoc) ?? null;
  },
  ["active-banner"],
  { revalidate: 60, tags: ["banners"] }
);

// ---------------- Careers ----------------

export type CareerDoc = {
  role: string;
  slug: string;
  summary?: string | null;
  location?: string | null;
  applyUrl?: string | null;
  active?: boolean | null;
  order?: number | null;
};

export async function getCareers(): Promise<CareerDoc[]> {
  const payload = await client();
  const res = await payload.find({
    collection: "careers",
    where: { active: { equals: true } },
    limit: 100,
    sort: "order",
  });
  return res.docs as unknown as CareerDoc[];
}
