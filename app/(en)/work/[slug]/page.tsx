import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CasePage } from "@/components/case";
import { projects } from "@/lib/data";
import { metadataFor } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

const valid = (slug: string) => projects.some((p) => p.id === slug) || notFound();

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  valid(params.slug);
  return metadataFor("en", `work/${params.slug}`);
}

export default function Page({ params }: { params: { slug: string } }) {
  valid(params.slug);
  return <CasePage lang="en" slug={params.slug} />;
}
