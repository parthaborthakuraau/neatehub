import { getPayload } from "payload";
import config from "@payload-config";

export type DirectorDoc = {
  name: string;
  slug: string;
  title?: string | null;
  quote?: string | null;
  photoLabel?: string | null;
  order?: number | null;
};

export type TeamMemberDoc = {
  name: string;
  slug: string;
  role?: string | null;
  photoTreatment?: string | null;
  order?: number | null;
};

export type PartnerDoc = {
  name: string;
  slug: string;
  context?: string | null;
  order?: number | null;
};

async function client() {
  return getPayload({ config });
}

export async function getDirectors(): Promise<DirectorDoc[]> {
  const payload = await client();
  const res = await payload.find({ collection: "directors", limit: 50, sort: "order" });
  return res.docs as unknown as DirectorDoc[];
}

export async function getTeam(): Promise<TeamMemberDoc[]> {
  const payload = await client();
  const res = await payload.find({ collection: "team", limit: 100, sort: "order" });
  return res.docs as unknown as TeamMemberDoc[];
}

export async function getPartners(): Promise<PartnerDoc[]> {
  const payload = await client();
  const res = await payload.find({ collection: "partners", limit: 100, sort: "order" });
  return res.docs as unknown as PartnerDoc[];
}
