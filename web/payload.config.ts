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
