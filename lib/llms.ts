import { siteConfig, projects } from "./data";
import { cases } from "./cases";
import { translations } from "./translations";
import { urlOf, abs } from "./seo";

// Plain-text summary for AI assistants and search crawlers (llms.txt convention). English; Russian pages are linked.
const en = translations.en;

export function llmsTxt(): string {
  const lines: string[] = [];
  lines.push(`# ${siteConfig.name}`, "");
  lines.push(
    `> ${siteConfig.name} is a custom software studio working from the EU. It builds ERP systems and internal tools, SaaS platforms, B2B marketplaces, restaurant and logistics software, and Telegram bots and Mini Apps for businesses in Europe. Nine real products have a live demo running on sample data. English and Russian.`,
    ""
  );
  lines.push("Key facts:");
  lines.push("- Every project goes from the first call to a deployed, documented product");
  lines.push("- Stack: TypeScript, React, Next.js, Node.js, Python, FastAPI, PostgreSQL, Redis, Docker, Stripe, Telegram Bot API");
  lines.push("- Hosting: EU infrastructure (Frankfurt); the website and demos use no cookies, analytics or third-party requests");
  lines.push("- Works with existing systems: builds, connects or replaces ERP, CRM, marketplaces, apps, bots and API integrations");
  lines.push("- Built the way the client wants; clients are happy with the result and come back with new projects");
  lines.push("- Process: discovery with a written estimate, design, weekly builds on a staging URL, launch and support");
  lines.push(`- Contact: ${siteConfig.email}, Telegram ${siteConfig.telegram}, GitHub ${siteConfig.github}`, "");

  lines.push("## Services", "");
  for (const s of en.services.items) lines.push(`- [${s.title}](${abs("/")}#services): ${s.description}`);
  lines.push("");

  lines.push("## Work (case studies with live demos)", "");
  projects.forEach((p, i) => {
    lines.push(`- [${p.name}](${urlOf("en", `work/${p.id}`)}): ${en.showroom.projects[i].tagline}. ${en.showroom.projects[i].description}`);
  });
  lines.push("");

  lines.push("## Frequently asked questions", "");
  for (const f of en.faq.items) lines.push(`- ${f.q} ${f.a}`);
  lines.push("");

  lines.push("## Optional", "");
  lines.push(`- [Full text for language models](${abs("/llms-full.txt")})`);
  lines.push(`- [Russian version](${abs("/ru/")})`);
  lines.push(`- [Privacy](${urlOf("en", "privacy")})`);
  lines.push(`- [Sitemap](${abs("/sitemap.xml")})`, "");
  return lines.join("\n");
}

export function llmsFullTxt(): string {
  const lines: string[] = [llmsTxt().split("## Services")[0].trimEnd(), ""];
  lines.push("## Services", "");
  for (const s of en.services.items) lines.push(`### ${s.title}`, s.description, "");
  lines.push("## How a project runs", "");
  for (const st of en.process.steps) lines.push(`### ${st.title}`, st.description, "");
  lines.push("## Work", "");
  projects.forEach((p, i) => {
    const c = cases[p.id].en;
    lines.push(`### ${p.name} (${p.year})`, `${en.showroom.projects[i].tagline}. ${c.lead}`, "");
    lines.push("What it does:");
    for (const f of c.features) lines.push(`- ${f}`);
    lines.push("", `Who it is for: ${c.audience}`, `Built with: ${p.tags.join(", ")}`);
    lines.push(`Case study: ${urlOf("en", `work/${p.id}`)}`, `Live demo (sample data): https://${p.subdomain}.${siteConfig.domain}`, "");
  });
  lines.push("## Frequently asked questions", "");
  for (const f of en.faq.items) lines.push(`### ${f.q}`, f.a, "");
  return lines.join("\n");
}
