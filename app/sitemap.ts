import type { MetadataRoute } from "next";
import { siteConfig, projects } from "@/lib/data";
import { locales, defaultLang, pathFor, hreflangs } from "@/lib/i18n";
import { nicheSlugs } from "@/lib/niches";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (sub: string, priority: number) => {
    const languages = hreflangs(siteConfig.url, sub);
    return locales.map((l) => ({
      url: siteConfig.url + pathFor(l) + sub,
      priority: l === defaultLang ? priority : Math.round((priority - 0.1) * 10) / 10,
      alternates: { languages },
    }));
  };
  return [...page("", 1), ...nicheSlugs.flatMap((n) => page(`for/${n}/`, 0.9)), ...projects.flatMap((p) => page(`work/${p.id}/`, 0.8)), ...page("privacy/", 0.3)];
}
