import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data";
import { locales, defaultLang, pathFor } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (sub: string, priority: number) => {
    const languages: Record<string, string> = Object.fromEntries(locales.map((l) => [l, siteConfig.url + pathFor(l) + sub]));
    languages["x-default"] = siteConfig.url + pathFor(defaultLang) + sub;
    return locales.map((l) => ({
      url: siteConfig.url + pathFor(l) + sub,
      changeFrequency: "monthly" as const,
      priority: l === defaultLang ? priority : Math.round((priority - 0.2) * 10) / 10,
      alternates: { languages },
    }));
  };
  return [...page("", 1), ...page("privacy/", 0.3)];
}
