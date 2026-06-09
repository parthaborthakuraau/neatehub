import { getPayload } from "payload";
import config from "@payload-config";

export type DownloadDoc = {
  title: string;
  slug: string;
  ext?: string | null;
  description?: string | null;
  size?: string | null;
  updated?: string | null;
  fileUrl?: string | null;
  order?: number | null;
};

export type ImpactReportDoc = {
  slug: string;
  period?: string | null;
  headline: string;
  summary?: string | null;
  reportUrl?: string | null;
  order?: number | null;
};

export type MentorDoc = {
  name: string;
  slug: string;
  initials?: string | null;
  expertise?: string | null;
  credential?: string | null;
  order?: number | null;
};

async function client() {
  return getPayload({ config });
}

export async function getDownloads(): Promise<DownloadDoc[]> {
  const payload = await client();
  const res = await payload.find({ collection: "downloads", limit: 200, sort: "order" });
  return res.docs as unknown as DownloadDoc[];
}

export async function getImpactReports(): Promise<ImpactReportDoc[]> {
  const payload = await client();
  const res = await payload.find({ collection: "impactReports", limit: 100, sort: "order" });
  return res.docs as unknown as ImpactReportDoc[];
}

export async function getMentors(): Promise<MentorDoc[]> {
  const payload = await client();
  const res = await payload.find({ collection: "mentors", limit: 500, sort: "order" });
  return res.docs as unknown as MentorDoc[];
}
