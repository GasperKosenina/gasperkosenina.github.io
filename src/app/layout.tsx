import type { Metadata } from "next";
import {
  SITE_URL,
  identity,
  links,
  projects,
  experience,
  education,
  skills,
} from "./content";
import "./globals.css";

const title = `${identity.name} — Full Stack & AI Engineer`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description: identity.metaDescription,
  authors: [{ name: identity.name, url: SITE_URL }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: identity.name,
    title,
    description: identity.metaDescription,
    locale: "en_US",
    // ponytail: static file, not a generated route — next/og under `output: export`
    // emits an extensionless asset GitHub Pages mis-serves. Redraw by hand if the name changes.
    images: [
      { url: `${SITE_URL}/og.png`, width: 1200, height: 630, alt: title },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: identity.metaDescription,
    images: [{ url: `${SITE_URL}/og.png`, alt: title }],
  },
  robots: { index: true, follow: true },
};

/**
 * schema.org Person, derived from content.ts so it can't drift.
 * This is what search engines and LLM crawlers read instead of guessing.
 */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: identity.name,
  url: SITE_URL,
  description: identity.intro,
  jobTitle: experience[0]?.role,
  email: links.find(([, href]) => href.startsWith("mailto:"))?.[1].slice(7),
  worksFor: experience
    .filter((e) => e.period.includes("now"))
    .map((e) => ({ "@type": "Organization", name: e.org, url: e.url })),
  alumniOf: Array.from(
    new Set(education.map((e) => e.org).filter(Boolean)),
  ).map((name) => ({ "@type": "EducationalOrganization", name })),
  sameAs: links
    .map(([, href]) => href)
    .filter((href) => href.startsWith("http")),
  knowsAbout: Array.from(
    new Set([
      ...skills,
      ...projects.flatMap((p) => p.stack.split(" · ")),
    ]),
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          // Escaping < means a stray "</script>" in content.ts can't end the
          // tag early and silently kill the structured data.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
