/**
 * Every word on the site lives here. page.tsx handles pixels.
 *
 * TODO markers are things I don't know yet. Grep for them:
 *   grep -n TODO src/app/content.ts
 */

/** Canonical URL of the deployed site. Root of the user site — no basePath needed. */
export const SITE_URL = "https://gasperkosenina.github.io";

export const identity = {
  name: "Gašper Košenina",
  eyebrow: "Full stack & AI engineer · Slovenia",
  intro:
    "I'm a full stack engineer from Slovenia. Go is what I've gone deepest on over the years and where most of my backend work lives, and I build AI products in TypeScript. I'm finishing my master's in computer science at FERI, and I'm looking for backend, full stack or AI engineering work.",
  /**
   * Google truncates near 155 chars, so the intro can't do double duty:
   * it spent its whole budget before reaching a searchable keyword.
   */
  metaDescription:
    "Full stack and AI engineer in Slovenia. Go, TypeScript, RAG and MCP. Two AI products in production; one handled 5 billion tokens in a single month.",
};

/** Order matters. These render as 01, 02, 03… */
export const projects: {
  name: string;
  desc: string;
  stack: string;
  url: string;
}[] = [
  {
    name: "Luna",
    desc: "AI travel advisor for the Sonček travel agency, co-built end to end. Handled ~10k conversations and 5 billion tokens in a single month.",
    stack: "TypeScript · Vercel AI SDK · RAG · Upstash Redis · MCP",
    url: "https://www.sonchek.com/luna",
  },
  {
    name: "Track Advisor",
    desc: "AI sales advisor for the 360 Karting track builder, again co-built end to end. Profiles each buyer, from early browser to ready to build, and guides them accordingly, saving the first few discovery calls.",
    stack: "TypeScript · Vercel AI SDK · RAG · Upstash Redis · MCP",
    url: "https://360karting.com/track-advisor/",
  },
];

/**
 * Primary role first, then reverse chronological by start date. Order matters
 * beyond layout: layout.tsx reports experience[0].role as the schema.org
 * jobTitle, so the full-time job has to lead.
 */
export const experience: {
  role: string;
  org: string;
  url?: string;
  note?: string;
  period: string;
}[] = [
  {
    role: "Backend Engineer",
    org: "3fs",
    url: "https://www.3fs.cloud/",
    note: "full time · medical and healthcare systems",
    period: "Feb 2025 – now",
  },
  {
    role: "AI Full Stack Developer",
    org: "wai-systems",
    url: "https://www.wai-systems.com/",
    note: "part time",
    period: "Aug 2025 – now",
  },
  {
    role: "Full Stack Developer",
    org: "Laboratory for Heterogeneous Computing Systems",
    url: "https://lhrs.feri.um.si/",
    note: "University of Maribor",
    period: "Dec 2024 – Dec 2025",
  },
  {
    role: "Backend Developer Intern",
    org: "3fs",
    url: "https://www.3fs.cloud/",
    note: "two 3-month internships in Go",
    period: "2023, 2024",
  },
];

export const education = [
  {
    title: "Master's Degree in Computer Science",
    org: "FERI, University of Maribor",
    period: "2024–2026 (expected)",
  },
  {
    title: "Bachelor's Degree in Computer Science",
    org: "FERI, University of Maribor",
    period: "2021–2024",
  },
  { title: "Gimnazija", org: "", period: "2017–2021" },
];

/**
 * Deliberately NOT rendered. A visible list flattens everything to one weight,
 * which undersells the things you actually went deep on — the prose says that.
 * This only feeds schema.org `knowsAbout` so an ATS or LLM screener can still
 * match terms the copy doesn't happen to repeat.
 */
export const skills = [
  "Go",
  "TypeScript",
  "Backend systems",
  "Databases",
  "Vercel AI SDK",
  "RAG",
  "Medical & healthcare IT",
];

/**
 * Masthead links. Falsy href = row is dropped.
 *
 * The label IS the address on purpose: window.print() only renders link text,
 * so "Email" printed a CV nobody could reply to.
 */
export const links: [label: string, href: string][] = [
  ["gaso.kosenina@gmail.com", "mailto:gaso.kosenina@gmail.com"],
  ["GitHub", "https://github.com/GasperKosenina"],
  [
    "LinkedIn",
    "https://www.linkedin.com/in/ga%C5%A1per-ko%C5%A1enina-101337262/",
  ],
];
