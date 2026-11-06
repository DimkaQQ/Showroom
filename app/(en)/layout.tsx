import type { Metadata } from "next";
import { RootShell } from "@/components/root-shell";
import { metadataFor } from "@/lib/seo";

export const metadata: Metadata = metadataFor("en");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
