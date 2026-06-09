import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// ---------- Access-control helpers (Phase 2 RBAC) ----------
// A user with no role is treated as super-admin (legacy / the first admin).
type AccessUser = { id?: string | number; role?: string | null } | null | undefined;
const isSuperAdmin = (user: AccessUser): boolean =>
  !!user && (!user.role || user.role === "super-admin");

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
      // Only super-admins can reach the CMS admin panel.
      access: {
        admin: ({ req: { user } }) => isSuperAdmin(user as AccessUser),
        create: ({ req: { user } }) => isSuperAdmin(user as AccessUser),
        delete: ({ req: { user } }) => isSuperAdmin(user as AccessUser),
        update: ({ req: { user } }) => {
          const u = user as AccessUser;
          if (isSuperAdmin(u)) return true;
          // Anyone else may only update their own record.
          return u ? { id: { equals: u.id } } : false;
        },
        read: ({ req: { user } }) => {
          const u = user as AccessUser;
          if (isSuperAdmin(u)) return true;
          return u ? { id: { equals: u.id } } : false;
        },
      },
      fields: [
        { name: "name", type: "text" },
        {
          name: "role",
          type: "select",
          defaultValue: "startup-owner",
          admin: { description: "Controls access. Only a super-admin can change roles." },
          access: {
            update: ({ req: { user } }) => isSuperAdmin(user as AccessUser),
          },
          options: [
            { label: "Super-admin (full access)", value: "super-admin" },
            { label: "Director (HR only)", value: "director" },
            { label: "Employee (HR + agents)", value: "employee" },
            { label: "Startup owner (own venture only)", value: "startup-owner" },
          ],
        },
      ],
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

    // ---------- Insights / Newsroom ----------
    {
      slug: "insights",
      labels: { singular: "Insight", plural: "Insights & Newsroom" },
      admin: {
        useAsTitle: "title",
        group: "Content",
        defaultColumns: ["title", "channel", "category", "date"],
      },
      fields: [
        { name: "title", type: "text", required: true },
        { name: "slug", type: "text", required: true, unique: true, admin: { description: "URL: /insights/<slug>" } },
        {
          name: "channel",
          type: "select",
          defaultValue: "insights",
          options: [
            { label: "Insights (editorial)", value: "insights" },
            { label: "Newsroom (press/news)", value: "newsroom" },
          ],
        },
        { name: "category", type: "text", admin: { description: 'e.g. "Feature", "Sector", "Program", "Press", "Report"' } },
        { name: "section", type: "text", admin: { description: 'Optional kicker, e.g. "Field Notes"' } },
        { name: "dek", type: "textarea", admin: { description: "Standfirst / summary." } },
        { name: "date", type: "text", admin: { description: 'e.g. "14 May 2026"' } },
        { name: "readTime", type: "text", admin: { description: 'e.g. "8 min read"' } },
        { name: "featured", type: "checkbox", defaultValue: false, admin: { description: "Feature at the top of the Insights tab." } },
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
        { name: "heroPhotoLabel", type: "textarea", admin: { description: "Photo brief for the hero image." } },
        { name: "heroCaption", type: "textarea" },
        {
          name: "author",
          type: "group",
          fields: [
            { name: "name", type: "text" },
            { name: "role", type: "text" },
            { name: "initials", type: "text", maxLength: 3 },
            { name: "bio", type: "textarea" },
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
                { label: "Paragraph", value: "paragraph" },
                { label: "Pull-quote", value: "quote" },
                { label: "Figure (photo + caption)", value: "figure" },
                { label: "Stat block", value: "stat" },
                { label: "Ordered list", value: "list" },
              ],
            },
            { name: "text", type: "textarea", admin: { description: "Paragraph / heading / quote text, or figure caption." } },
            { name: "cite", type: "text", admin: { description: "Quote attribution, or figure photo brief." } },
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
            {
              name: "stats",
              type: "array",
              admin: { description: "For Stat block." },
              fields: [
                { name: "num", type: "text", required: true },
                { name: "lbl", type: "text", required: true },
              ],
            },
            {
              name: "items",
              type: "array",
              admin: { description: "For Ordered list." },
              fields: [{ name: "text", type: "textarea", required: true }],
            },
          ],
        },
        {
          name: "footnotes",
          type: "array",
          fields: [{ name: "text", type: "textarea", required: true }],
        },
      ],
    },

    // ---------- Events ----------
    {
      slug: "events",
      labels: { singular: "Event", plural: "Events" },
      admin: {
        useAsTitle: "title",
        group: "Content",
        defaultColumns: ["title", "dateBig", "format", "status"],
      },
      fields: [
        { name: "title", type: "text", required: true },
        { name: "slug", type: "text", required: true, unique: true, admin: { description: "URL: /insights/events/<slug>" } },
        { name: "dek", type: "textarea", admin: { description: "One-line summary." } },
        { name: "dateDay", type: "text", admin: { description: 'Day number, e.g. "14"' } },
        { name: "dateMonth", type: "text", admin: { description: 'Month, e.g. "JUN"' } },
        { name: "dateBig", type: "text", admin: { description: 'e.g. "14 Jun"' } },
        { name: "dayLabel", type: "text", admin: { description: 'e.g. "SATURDAY · 2026"' } },
        { name: "timeLabel", type: "text", admin: { description: 'e.g. "14:00 - 17:00"' } },
        { name: "tz", type: "text", defaultValue: "IST" },
        { name: "duration", type: "text", admin: { description: 'e.g. "~3 hrs", "Day-long"' } },
        {
          name: "format",
          type: "select",
          defaultValue: "in-person",
          options: [
            { label: "In person", value: "in-person" },
            { label: "Online", value: "online" },
            { label: "Hybrid", value: "hybrid" },
          ],
        },
        {
          name: "status",
          type: "select",
          defaultValue: "open",
          options: [
            { label: "Open", value: "open" },
            { label: "RSVP", value: "rsvp" },
            { label: "Invite only", value: "invite" },
            { label: "Closed", value: "closed" },
          ],
        },
        { name: "free", type: "checkbox", defaultValue: true },
        { name: "programTag", type: "text", admin: { description: 'e.g. "RKVY · Saranya"' } },
        { name: "photoTreatment", type: "select", defaultValue: "tea", options: [ { label: "Default", value: "default" }, { label: "Tea", value: "tea" }, { label: "Copper", value: "copper" } ] },
        { name: "heroPhotoLabel", type: "textarea" },
        { name: "seatsTotal", type: "number" },
        { name: "seatsTaken", type: "number" },
        {
          name: "location",
          type: "group",
          fields: [
            { name: "venue", type: "text", admin: { description: 'e.g. "NEATeHUB main hall" or "Online"' } },
            { name: "address", type: "textarea" },
            { name: "coords", type: "text", admin: { description: 'e.g. "26.7271° N · 94.2037° E"' } },
            { name: "travel", type: "text", admin: { description: 'e.g. "~30 min from Jorhat Airport"' } },
          ],
        },
        {
          name: "intro",
          type: "array",
          labels: { singular: "Paragraph", plural: "Intro paragraphs" },
          fields: [{ name: "text", type: "textarea", required: true }],
        },
        {
          name: "agenda",
          type: "array",
          fields: [
            { name: "time", type: "text", required: true },
            { name: "what", type: "text", required: true },
            { name: "detail", type: "textarea" },
          ],
        },
        {
          name: "speakers",
          type: "array",
          fields: [
            { name: "name", type: "text", required: true },
            { name: "role", type: "text" },
            { name: "bio", type: "textarea" },
            { name: "photoTreatment", type: "select", defaultValue: "default", options: [ { label: "Default", value: "default" }, { label: "Tea", value: "tea" }, { label: "Copper", value: "copper" } ] },
          ],
        },
        {
          name: "bring",
          type: "array",
          fields: [
            { name: "what", type: "text", required: true },
            { name: "detail", type: "textarea" },
          ],
        },
      ],
    },

    // ---------- Resources: Downloads ----------
    {
      slug: "downloads",
      labels: { singular: "Download", plural: "Downloads" },
      admin: { useAsTitle: "title", group: "Resources", defaultColumns: ["title", "ext", "updated"] },
      fields: [
        { name: "title", type: "text", required: true },
        { name: "slug", type: "text", required: true, unique: true },
        {
          name: "ext",
          type: "select",
          defaultValue: "PDF",
          options: ["PDF", "XLS", "DOC", "ZIP", "CSV"],
        },
        { name: "description", type: "textarea" },
        { name: "size", type: "text", admin: { description: 'e.g. "1.2 MB"' } },
        { name: "updated", type: "text", admin: { description: 'e.g. "Apr 2026"' } },
        { name: "fileUrl", type: "text", admin: { description: "Link to the file (upload support later)." } },
        { name: "order", type: "number", admin: { description: "Lower shows first." } },
      ],
    },

    // ---------- Resources: Impact Reports ----------
    {
      slug: "impactReports",
      labels: { singular: "Impact Report", plural: "Impact Reports" },
      admin: { useAsTitle: "headline", group: "Resources", defaultColumns: ["headline", "period"] },
      fields: [
        { name: "slug", type: "text", required: true, unique: true },
        { name: "period", type: "text", admin: { description: 'e.g. "FY25 · September 2025"' } },
        { name: "headline", type: "text", required: true, admin: { description: 'e.g. "₹7.2 Cr deployed"' } },
        { name: "summary", type: "textarea" },
        { name: "reportUrl", type: "text" },
        { name: "order", type: "number", admin: { description: "Lower shows first." } },
      ],
    },

    // ---------- Resources: Public mentor directory ----------
    {
      slug: "mentors",
      labels: { singular: "Mentor", plural: "Mentors (public)" },
      admin: { useAsTitle: "name", group: "Resources", defaultColumns: ["name", "expertise"] },
      fields: [
        { name: "name", type: "text", required: true },
        { name: "slug", type: "text", required: true, unique: true },
        { name: "initials", type: "text", maxLength: 3 },
        { name: "expertise", type: "text", admin: { description: 'e.g. "Agronomy · Soil Science"' } },
        { name: "credential", type: "textarea", admin: { description: "One-line public credential." } },
        { name: "order", type: "number" },
      ],
    },

    // ---------- Careers ----------
    {
      slug: "careers",
      labels: { singular: "Career", plural: "Careers" },
      admin: { useAsTitle: "role", group: "Content", defaultColumns: ["role", "location", "active"] },
      fields: [
        { name: "role", type: "text", required: true },
        { name: "slug", type: "text", required: true, unique: true },
        { name: "summary", type: "textarea" },
        { name: "location", type: "text", admin: { description: 'e.g. "Jorhat · Full-time"' } },
        { name: "applyUrl", type: "text", admin: { description: "External application form URL." } },
        { name: "active", type: "checkbox", defaultValue: true, admin: { description: "Show on the Careers section." } },
        { name: "order", type: "number" },
      ],
    },

    // ---------- Newsletter subscribers ----------
    {
      slug: "subscribers",
      labels: { singular: "Subscriber", plural: "Subscribers" },
      admin: { useAsTitle: "email", group: "Admin", defaultColumns: ["email", "source", "createdAt"] },
      fields: [
        { name: "email", type: "email", required: true, unique: true },
        {
          name: "source",
          type: "select",
          defaultValue: "footer",
          admin: { description: "Where they signed up." },
          options: [
            { label: "Footer / newsletter", value: "footer" },
            { label: "Article", value: "article" },
            { label: "Homepage", value: "homepage" },
            { label: "Other", value: "other" },
          ],
        },
      ],
    },

    // ---------- Directors ----------
    {
      slug: "directors",
      labels: { singular: "Director", plural: "Directors" },
      admin: { useAsTitle: "name", group: "About", defaultColumns: ["name", "title"] },
      fields: [
        { name: "name", type: "text", required: true },
        { name: "slug", type: "text", required: true, unique: true },
        { name: "title", type: "text", admin: { description: 'e.g. "Director · NEATeHUB"' } },
        { name: "quote", type: "textarea" },
        { name: "photoLabel", type: "textarea", admin: { description: "Photo brief." } },
        { name: "order", type: "number" },
      ],
    },

    // ---------- Team ----------
    {
      slug: "team",
      labels: { singular: "Team member", plural: "Team" },
      admin: { useAsTitle: "name", group: "About", defaultColumns: ["name", "role"] },
      fields: [
        { name: "name", type: "text", required: true },
        { name: "slug", type: "text", required: true, unique: true },
        { name: "role", type: "text" },
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
        { name: "order", type: "number" },
      ],
    },

    // ---------- Partners ----------
    {
      slug: "partners",
      labels: { singular: "Partner", plural: "Partners" },
      admin: { useAsTitle: "name", group: "About", defaultColumns: ["name", "context"] },
      fields: [
        { name: "name", type: "text", required: true },
        { name: "slug", type: "text", required: true, unique: true },
        { name: "context", type: "text", admin: { description: 'e.g. "Ministry of Agriculture"' } },
        { name: "order", type: "number" },
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
