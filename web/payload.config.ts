import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: "users",
    meta: {
      titleSuffix: " · NEATeHUB CMS",
    },
  },
  collections: [
    // ---------- Staff / admin auth ----------
    {
      slug: "users",
      auth: true,
      admin: { useAsTitle: "email", group: "Admin" },
      fields: [{ name: "name", type: "text" }],
    },

    // ---------- Media library ----------
    {
      slug: "media",
      admin: { group: "Admin" },
      upload: { staticDir: path.resolve(dirname, "media") },
      fields: [
        {
          name: "alt",
          type: "text",
          required: true,
          admin: { description: "Alt text — required for accessibility (WCAG AA)." },
        },
      ],
    },

    // ---------- Programs ----------
    {
      slug: "programs",
      labels: { singular: "Program", plural: "Programs" },
      admin: {
        useAsTitle: "name",
        group: "Content",
        defaultColumns: ["name", "status", "funder"],
      },
      fields: [
        { name: "name", type: "text", required: true },
        { name: "slug", type: "text", required: true, unique: true },
        {
          name: "kicker",
          type: "text",
          admin: { description: 'e.g. "Atal Incubation Centre · NITI Aayog"' },
        },
        {
          name: "status",
          type: "select",
          defaultValue: "open",
          options: [
            { label: "Open", value: "open" },
            { label: "Rolling intake", value: "rolling" },
            { label: "Closed", value: "closed" },
          ],
        },
        { name: "funder", type: "text" },
        { name: "capitalRange", type: "text", admin: { description: 'e.g. "₹2L – ₹25L"' } },
        { name: "description", type: "textarea" },
      ],
    },

    // ---------- Ventures (portfolio) ----------
    {
      slug: "ventures",
      labels: { singular: "Venture", plural: "Ventures (Portfolio)" },
      admin: {
        useAsTitle: "name",
        group: "Content",
        defaultColumns: ["name", "sector", "stage", "year"],
      },
      fields: [
        { name: "name", type: "text", required: true },
        {
          name: "slug",
          type: "text",
          required: true,
          unique: true,
          admin: { description: "URL: /portfolio/<slug> — lowercase, hyphenated." },
        },
        {
          name: "sector",
          type: "select",
          options: [
            "Agri-Input",
            "Post-Harvest",
            "Livestock",
            "Aqua",
            "Food",
            "Rural Fintech",
          ],
        },
        {
          name: "stage",
          type: "select",
          defaultValue: "early",
          options: [
            { label: "Idea", value: "idea" },
            { label: "Early", value: "early" },
            { label: "Growth", value: "growth" },
          ],
        },
        { name: "year", type: "number", admin: { description: "Cohort / incubation year, e.g. 2024" } },
        {
          name: "program",
          type: "text",
          admin: { description: 'Program label shown on the card, e.g. "Saranya · RKVY"' },
        },
        { name: "location", type: "text", admin: { description: 'e.g. "Jorhat, AS"' } },
        { name: "oneLiner", type: "textarea", label: "Description" },
        {
          name: "photoTreatment",
          type: "select",
          defaultValue: "default",
          admin: { description: "Tonal treatment for the card photo placeholder." },
          options: [
            { label: "Default (cream)", value: "default" },
            { label: "Tea (dark green)", value: "tea" },
            { label: "Copper (warm)", value: "copper" },
          ],
        },
        { name: "photo", type: "upload", relationTo: "media" },

        // ---------- Rich venture-profile fields ----------
        { name: "tagline", type: "textarea", admin: { description: "Hero pitch line. Falls back to Description if empty." } },
        { name: "website", type: "text" },
        { name: "founded", type: "text", admin: { description: 'e.g. "Feb 2021"' } },
        { name: "teamSize", type: "number" },
        { name: "hq", type: "text", admin: { description: "Headquarters; falls back to Location if empty." } },
        {
          name: "status",
          type: "select",
          defaultValue: "active",
          options: [
            { label: "Active", value: "active" },
            { label: "Acquired", value: "acquired" },
            { label: "Dormant", value: "dormant" },
            { label: "Closed", value: "closed" },
          ],
        },
        { name: "roundLabel", type: "text", admin: { description: 'Latest round, e.g. "Series A"' } },
        { name: "roundDate", type: "text", admin: { description: 'e.g. "April 2026"' } },
        { name: "hiring", type: "text", admin: { description: 'e.g. "2 open roles"' } },
        { name: "investorContact", type: "text", admin: { description: "Investor inquiry handle/email" } },
        {
          name: "facts",
          type: "array",
          labels: { singular: "Fact", plural: "Quick facts" },
          fields: [
            { name: "k", type: "text", required: true },
            { name: "v", type: "text", required: true },
            { name: "sub", type: "text" },
          ],
        },
        {
          name: "body",
          type: "array",
          labels: { singular: "Block", plural: "Body blocks" },
          fields: [
            {
              name: "kind",
              type: "select",
              defaultValue: "paragraph",
              options: [
                { label: "Heading (large)", value: "h2" },
                { label: "Heading (small)", value: "h3" },
                { label: "Eyebrow label", value: "eyebrow" },
                { label: "Paragraph", value: "paragraph" },
                { label: "Pull-quote", value: "quote" },
                { label: "Figure (photo + caption)", value: "figure" },
              ],
            },
            { name: "text", type: "textarea" },
            { name: "cite", type: "text", admin: { description: "Attribution for a pull-quote, or source line for a figure." } },
          ],
        },
        {
          name: "founders",
          type: "array",
          fields: [
            { name: "name", type: "text", required: true },
            { name: "role", type: "text" },
            { name: "bio", type: "textarea" },
            {
              name: "photoTreatment",
              type: "select",
              defaultValue: "default",
              options: [
                { label: "Default", value: "default" },
                { label: "Tea", value: "tea" },
                { label: "Copper", value: "copper" },
              ],
            },
          ],
        },
        {
          name: "milestones",
          type: "array",
          fields: [
            { name: "when", type: "text", required: true },
            { name: "what", type: "text", required: true },
            { name: "detail", type: "textarea" },
            { name: "funded", type: "checkbox", defaultValue: false, admin: { description: "Mark NEATeHUB-funded milestones (copper dot)." } },
          ],
        },
        {
          name: "funding",
          type: "array",
          labels: { singular: "Round", plural: "Funding history" },
          fields: [
            { name: "round", type: "text", required: true },
            { name: "amount", type: "text" },
            { name: "source", type: "text" },
            { name: "neatehubRole", type: "text" },
            { name: "date", type: "text" },
          ],
        },
        {
          name: "engagement",
          type: "group",
          admin: { description: "The NEATeHUB programme-manager note." },
          fields: [
            { name: "quote", type: "textarea" },
            { name: "manager", type: "text" },
            { name: "role", type: "text" },
            { name: "dates", type: "text" },
            { name: "initials", type: "text", maxLength: 3 },
          ],
        },
        {
          name: "press",
          type: "array",
          fields: [
            { name: "outlet", type: "text", required: true },
            { name: "headline", type: "text", required: true },
            { name: "date", type: "text" },
            { name: "url", type: "text" },
          ],
        },
        {
          name: "programTags",
          type: "array",
          labels: { singular: "Program tag", plural: "Program tags" },
          fields: [
            { name: "label", type: "text", required: true },
            { name: "current", type: "checkbox", defaultValue: false },
          ],
        },
        {
          name: "sdgs",
          type: "array",
          labels: { singular: "SDG", plural: "SDGs" },
          fields: [
            { name: "num", type: "text", required: true },
            { name: "label", type: "text", required: true },
          ],
        },
      ],
    },

    // ---------- Site banners ----------
    {
      slug: "banners",
      labels: { singular: "Banner", plural: "Banners" },
      admin: { useAsTitle: "message", group: "Content" },
      fields: [
        { name: "message", type: "text", required: true },
        { name: "badge", type: "text", defaultValue: "APPLICATIONS OPEN" },
        {
          name: "variant",
          type: "select",
          defaultValue: "announce",
          options: [
            { label: "Announce", value: "announce" },
            { label: "Deadline", value: "deadline" },
            { label: "Info", value: "info" },
            { label: "System", value: "system" },
          ],
        },
        { name: "ctaLabel", type: "text" },
        { name: "ctaHref", type: "text" },
        { name: "active", type: "checkbox", defaultValue: true },
      ],
    },
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: { outputFile: path.resolve(dirname, "payload-types.ts") },
  db: sqliteAdapter({
    client: { url: process.env.DATABASE_URI || "file:./neatehub.db" },
  }),
  sharp,
});
