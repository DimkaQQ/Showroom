import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Privacy } from "@/components/privacy";
import { locales, defaultLang, type Lang } from "@/lib/i18n";
import { metadataFor } from "@/lib/seo";

const parse = (lang: string): Lang => {
  if (!(locales as readonly string[]).includes(lang) || lang === defaultLang) notFound();
  return lang as Lang;
};

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return metadataFor(parse(params.lang), "privacy");
}

export default function Page({ params }: { params: { lang: string } }) {
  return <Privacy lang={parse(params.lang)} />;
}
