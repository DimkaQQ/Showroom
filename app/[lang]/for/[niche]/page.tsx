import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NichePage } from "@/components/niche";
import { nicheSlugs } from "@/lib/niches";
import { locales, defaultLang, type Lang } from "@/lib/i18n";
import { metadataFor } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.filter((l) => l !== defaultLang).flatMap((lang) => nicheSlugs.map((niche) => ({ lang, niche })));
}

const parse = (lang: string, niche: string): Lang => {
  if (!(locales as readonly string[]).includes(lang) || lang === defaultLang || !nicheSlugs.includes(niche)) notFound();
  return lang as Lang;
};

export function generateMetadata({ params }: { params: { lang: string; niche: string } }): Metadata {
  return metadataFor(parse(params.lang, params.niche), `for/${params.niche}`);
}

export default function Page({ params }: { params: { lang: string; niche: string } }) {
  return <NichePage lang={parse(params.lang, params.niche)} slug={params.niche} />;
}
