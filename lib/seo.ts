import type { Metadata } from "next";
import { siteConfig, projects } from "./data";
import { cases } from "./cases";
import { locales, defaultLang, ogLocale, pathFor, type Lang } from "./i18n";
import { translations } from "./translations";

export const abs = (path: string) => new URL(path, siteConfig.url).toString();

// "home", "privacy" or "work/<project id>"
export type Page = string;
const sub = (page: Page) => (page === "home" ? "" : `${page}/`);
export const urlOf = (lang: Lang, page: Page) => abs(pathFor(lang) + sub(page));

function textFor(lang: Lang, page: Page) {
  const tr = translations[lang];
  if (page === "privacy") return { ...tr.meta, title: tr.privacy.metaTitle, description: tr.privacy.metaDescription };
  if (page.startsWith("work/")) {
    const c = cases[page.slice(5)]?.[lang];
    if (c) return { ...tr.meta, title: c.title, description: c.description };
  }
  return tr.meta;
}

export function metadataFor(lang: Lang, page: Page = "home"): Metadata {
  const t = textFor(lang, page);
  const languages: Record<string, string> = Object.fromEntries(locales.map((l) => [l, urlOf(l, page)]));
  languages["x-default"] = urlOf(defaultLang, page);
  const image = page.startsWith("work/") ? abs(`/shots/${page.slice(5)}.webp`) : abs("/og.png");

  return {
    metadataBase: new URL(siteConfig.url),
    title: t.title,
    description: t.description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    alternates: { canonical: urlOf(lang, page), languages },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    openGraph: {
      type: "website",
      url: urlOf(lang, page),
      siteName: siteConfig.name,
      title: t.title,
      description: t.description,
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      images: [{ url: image, width: page.startsWith("work/") ? 1200 : 1200, height: page.startsWith("work/") ? 750 : 630, alt: t.ogAlt }],
    },
    twitter: { card: "summary_large_image", title: t.title, description: t.description, images: [image] },
  };
}

const ORG_ID = `${siteConfig.url}/#studio`;
const PERSON_ID = `${siteConfig.url}/#founder`;

const KNOWS_ABOUT = [
  "Website development",
  "Online booking and ordering systems",
  "Business process automation",
  "System integrations",
  "Custom software development",
  "ERP systems and internal tools",
  "B2B marketplaces",
  "IT support and hosting",
  "Telegram bots and Mini Apps",
  "Restaurant management software",
  "Logistics and fuel distribution software",
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "FastAPI",
  "PostgreSQL",
];

const organisation = (lang: Lang) => {
  const t = translations[lang];
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.name,
    alternateName: "Mirelli",
    url: abs("/"),
    description: t.meta.description,
    email: siteConfig.email,
    foundingDate: siteConfig.founded,
    logo: abs("/icon-512.png"),
    image: abs("/og.png"),
    founder: { "@id": PERSON_ID },
    areaServed: [{ "@type": "Continent", name: "Europe" }],
    knowsLanguage: locales,
    knowsAbout: KNOWS_ABOUT,
    sameAs: [siteConfig.github, siteConfig.telegram],
    contactPoint: [{ "@type": "ContactPoint", contactType: "sales", email: siteConfig.email, availableLanguage: ["English", "Russian"] }],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t.services.title,
      itemListElement: t.services.items.map((s) => ({
        "@type": "Offer",
        priceSpecification: { "@type": "PriceSpecification", priceCurrency: "EUR", minPrice: 500 },
        itemOffered: { "@type": "Service", name: s.title, description: s.description, provider: { "@id": ORG_ID } },
      })),
    },
  };
};

const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Darian Mirelli",
  jobTitle: "Founder",
  worksFor: { "@id": ORG_ID },
  url: abs("/"),
  sameAs: [siteConfig.github, siteConfig.telegram],
  knowsAbout: KNOWS_ABOUT,
};

export function jsonLdFor(lang: Lang) {
  const t = translations[lang];
  return {
    "@context": "https://schema.org",
    "@graph": [
      organisation(lang),
      person,
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: abs("/"),
        name: siteConfig.name,
        inLanguage: lang,
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "ItemList",
        name: t.showroom.title,
        itemListElement: projects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.name,
          url: urlOf(lang, `work/${p.id}`),
          description: t.showroom.projects[i].description,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: t.faq.items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

export function caseJsonLd(lang: Lang, id: string) {
  const i = projects.findIndex((p) => p.id === id);
  const p = projects[i];
  const t = translations[lang];
  const c = cases[id][lang];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${urlOf(lang, `work/${id}`)}#project`,
        name: p.name,
        headline: c.title,
        description: c.description,
        url: urlOf(lang, `work/${id}`),
        image: abs(`/shots/${id}.webp`),
        inLanguage: lang,
        dateCreated: p.year,
        genre: t.showroom.projects[i].tagline,
        keywords: p.tags.join(", "),
        creator: { "@id": ORG_ID },
        sameAs: `https://${p.subdomain}.${siteConfig.domain}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: siteConfig.name, item: urlOf(lang, "home") },
          { "@type": "ListItem", position: 2, name: t.case.back, item: abs(pathFor(lang) + "#work") },
          { "@type": "ListItem", position: 3, name: p.name, item: urlOf(lang, `work/${id}`) },
        ],
      },
    ],
  };
}
