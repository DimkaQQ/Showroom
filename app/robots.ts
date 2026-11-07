import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data";

export const dynamic = "force-static";

// Search and AI crawlers are welcome: the goal is to be found, understood and cited. Listed explicitly so the intent is clear.
const AI_AGENTS = [
  "GPTBot", "ChatGPT-User", "OAI-SearchBot", "ClaudeBot", "Claude-User", "Claude-SearchBot", "anthropic-ai",
  "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "Amazonbot", "DuckAssistBot",
  "MistralAI-User", "cohere-ai", "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_AGENTS, allow: "/" },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
