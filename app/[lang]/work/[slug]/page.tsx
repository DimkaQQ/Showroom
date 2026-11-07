import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CasePage } from "@/components/case";
import { projects } from "@/lib/data";
import { locales, defaultLang, type Lang } from "@/lib/i18n";
import { metadataFor } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.filter((l) => l !== defaultLang).flatMap((lang) => projects.map((p) => ({ lang, slug: p.id })));
}

const parse = (lang: string, slug: string): Lang => {
  if (!(locales as readonly string[]).includes(lang) || lang === defaultLang || !projects.some((p) => p.id === slug)) notFound();
  return lang as Lang;
};

export function generateMetadata({ params }: { params: { lang: string; slug: string } }): Metadata {
  return metadataFor(parse(params.lang, params.slug), `work/${params.slug}`);
}

export default function Page({ params }: { params: { lang: string; slug: string } }) {
  return <CasePage lang={parse(params.lang, params.slug)} slug={params.slug} />;
}
