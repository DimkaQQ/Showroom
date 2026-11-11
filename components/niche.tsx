import { Logo } from "@/components/logo";
import { LangMenu } from "@/components/lang-menu";
import { projects, siteConfig } from "@/lib/data";
import { niches, nicheUi, nicheSlugs } from "@/lib/niches";
import { pathFor, type Lang } from "@/lib/i18n";
import { nicheJsonLd } from "@/lib/seo";

export function NichePage({ lang, slug }: { lang: Lang; slug: string }) {
  const n = niches[slug][lang];
  const ui = nicheUi[lang];
  const demoProject = projects.find((p) => p.id === niches[slug].demo)!;
  const demo = `https://${demoProject.subdomain}.${siteConfig.domain}`;
  const others = nicheSlugs.filter((s) => s !== slug);

  return (
    <main className="doc case niche">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(nicheJsonLd(lang, slug)) }} />
      <nav className="doc-bar" aria-label="Primary">
        <a className="brand" href={pathFor(lang)} aria-label="Mirelli Studio"><Logo size={40} /></a>
        <a href={pathFor(lang)}>← {ui.back}</a>
        <LangMenu lang={lang} suffix={`for/${slug}/`} />
      </nav>

      <p className="case-meta">{n.name}</p>
      <h1>{n.h1}</h1>
      <p className="case-lead">{n.lead}</p>
      <ul className="checks">
        {n.checks.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <p className="case-cta">
        <a className="btn" href={`${pathFor(lang)}#contact`}>{ui.cta}</a>{" "}
        <a className="btn btn-light" href={demo} target="_blank" rel="noopener noreferrer">{ui.demo}</a>
      </p>
      <p className="doc-date">{ui.from_}</p>

      <section>
        <h2>{ui.feat}</h2>
        <ul className="bullets">
          {n.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>{ui.how}</h2>
        <ol className="bullets steps">
          {ui.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </section>
      <section>
        <h2>{ui.example}</h2>
        <p>{n.example}</p>
        <p><a className="btn btn-light" href={demo} target="_blank" rel="noopener noreferrer">{ui.demo}</a></p>
      </section>
      <section>
        <h2>{ui.faq}</h2>
        {n.faq.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </section>
      <p>{ui.areas}</p>
      <section>
        <h2>{ui.others}</h2>
        <ul className="bullets">
          {others.map((o) => (
            <li key={o}>
              <a href={`${pathFor(lang)}for/${o}/`}>{niches[o][lang].name}</a>
            </li>
          ))}
        </ul>
      </section>
      <p className="doc-foot">© {new Date().getFullYear()} {siteConfig.name}</p>
    </main>
  );
}
