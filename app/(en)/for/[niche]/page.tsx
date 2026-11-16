import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NichePage } from "@/components/niche";
import { nicheSlugs } from "@/lib/niches";
import { metadataFor } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return nicheSlugs.map((niche) => ({ niche }));
}

const valid = (n: string) => nicheSlugs.includes(n) || notFound();

export function generateMetadata({ params }: { params: { niche: string } }): Metadata {
  valid(params.niche);
  return metadataFor("en", `for/${params.niche}`);
}

export default function Page({ params }: { params: { niche: string } }) {
  valid(params.niche);
  return <NichePage lang="en" slug={params.niche} />;
}
