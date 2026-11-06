import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data";
import { locales, defaultLang, pathFor } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages: Record<string, string> = Object.fromEntries(locales.map((l) => [l, siteConfig.url + pathFor(l)]));
  languages["x-default"] = siteConfig.url + pathFor(defaultLang);
  return locales.map((l) => ({
    url: siteConfig.url + pathFor(l),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: l === defaultLang ? 1 : 0.8,
    alternates: { languages },
  }));
}
