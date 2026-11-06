import type { Metadata } from "next";
import { siteConfig, projects } from "./data";
import { locales, defaultLang, ogLocale, pathFor, type Lang } from "./i18n";
import { translations } from "./translations";

const abs = (path: string) => new URL(path, siteConfig.url).toString();

export function metadataFor(lang: Lang): Metadata {
  const t = translations[lang].meta;
  const languages: Record<string, string> = Object.fromEntries(locales.map((l) => [l, abs(pathFor(l))]));
  languages["x-default"] = abs(pathFor(defaultLang));

  return {
    metadataBase: new URL(siteConfig.url),
    title: t.title,
    description: t.description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    alternates: { canonical: abs(pathFor(lang)), languages },
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
      url: abs(pathFor(lang)),
      siteName: siteConfig.name,
      title: t.title,
      description: t.description,
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      images: [{ url: abs("/og.png"), width: 1200, height: 630, alt: t.ogAlt }],
    },
    twitter: { card: "summary_large_image", title: t.title, description: t.description, images: [abs("/og.png")] },
  };
}

export function jsonLdFor(lang: Lang) {
  const t = translations[lang];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#studio`,
        name: siteConfig.name,
        url: abs(pathFor(lang)),
        description: t.meta.description,
        email: siteConfig.email,
        foundingDate: siteConfig.founded,
        image: abs("/og.png"),
        areaServed: "Europe",
        knowsLanguage: locales,
        sameAs: [siteConfig.github, siteConfig.telegram],
        serviceType: t.services.items.map((s) => s.title),
        makesOffer: t.services.items.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.description },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: lang,
        publisher: { "@id": `${siteConfig.url}/#studio` },
      },
      {
        "@type": "ItemList",
        name: t.showroom.title,
        itemListElement: projects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.name,
          url: `https://${p.subdomain}.${siteConfig.domain}`,
          description: t.showroom.projects[i].description,
        })),
      },
    ],
  };
}
