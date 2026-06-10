import { permanentRedirect } from "next/navigation";

// Venture profiles now live at the vanity URL neatehub.org/<slug>.
// Keep the old /portfolio/<slug> path working with a permanent redirect.
export const dynamic = "force-dynamic";

export default async function LegacyVentureRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  permanentRedirect(`/${slug}`);
}
