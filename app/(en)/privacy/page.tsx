import type { Metadata } from "next";
import { Privacy } from "@/components/privacy";
import { metadataFor } from "@/lib/seo";

export const metadata: Metadata = metadataFor("en", "privacy");

export default function Page() {
  return <Privacy lang="en" />;
}
