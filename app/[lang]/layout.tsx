import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RootShell } from "@/components/root-shell";
import { locales, defaultLang, type Lang } from "@/lib/i18n";
import { metadataFor } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.filter((l) => l !== defaultLang).map((lang) => ({ lang }));
}

const parse = (lang: string): Lang => {
  if (!(locales as readonly string[]).includes(lang) || lang === defaultLang) notFound();
  return lang as Lang;
};

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return metadataFor(parse(params.lang));
}

export default function Layout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  return <RootShell lang={parse(params.lang)}>{children}</RootShell>;
}
