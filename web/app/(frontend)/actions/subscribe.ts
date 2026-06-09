"use server";

import { getPayload } from "payload";
import config from "@payload-config";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

/**
 * Capture a newsletter subscriber. Idempotent by email.
 * TODO (phase 2): also push to the email provider (Resend/Mailchimp) audience.
 */
export async function subscribe(
  email: string,
  source: string = "footer"
): Promise<{ ok: boolean; message?: string }> {
  const clean = (email || "").trim().toLowerCase();
  if (!EMAIL_RE.test(clean)) {
    return { ok: false, message: "Enter a valid email address." };
  }
  try {
    const payload = await getPayload({ config });
    const existing = await payload.find({
      collection: "subscribers",
      where: { email: { equals: clean } },
      limit: 1,
    });
    if (existing.docs.length) {
      return { ok: true, message: "You're already on the list." };
    }
    await payload.create({
      collection: "subscribers",
      data: { email: clean, source },
    });
    return { ok: true };
  } catch {
    return { ok: false, message: "Something went wrong. Please try again." };
  }
}
