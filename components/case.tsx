import { Logo } from "@/components/logo";
import { LangMenu } from "@/components/lang-menu";
import { projects, siteConfig } from "@/lib/data";
import { cases } from "@/lib/cases";
import { translations } from "@/lib/translations";
import { pathFor, locales, langName, type Lang } from "@/lib/i18n";
import { caseJsonLd } from "@/lib/seo";

export function CasePage({ lang, slug }: { lang: Lang; slug: string }) {
  const t = translations[lang];
  const i = projects.findIndex((p) => p.id === slug);
  const p = projects[i];
  const c = cases[slug][lang];
  const demo = `https://${p.subdomain}.${siteConfig.domain}`;
  const others = projects.filter((x) => x.id !== slug);

  return (
    <main className="doc case">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseJsonLd(lang, slug)) }} />
      <nav className="doc-bar" aria-label="Primary">
        <a className="brand" href={pathFor(lang)} aria-label="Mirelli Studio"><Logo size={40} /></a>
        <a href={`${pathFor(lang)}#work`}>← {t.case.back}</a>
        <LangMenu lang={lang} suffix={`work/${slug}/`} />
      </nav>

      <p className="case-meta">{t.showroom.projects[i].tagline}, {p.year}</p>
      <h1>{p.name}</h1>
      <p className="case-lead">{c.lead}</p>

      <div className="case-shot" style={{ background: p.stage }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/shots/${slug}.webp`} width={1200} height={750} alt={`${p.name}: ${t.showroom.projects[i].tagline}`} decoding="async" />
      </div>

      <section>
        <h2>{t.case.what}</h2>
        <ul className="bullets">
          {c.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>{t.case.who}</h2>
        <p>{c.audience}</p>
      </section>
      <section>
        <h2>{t.case.builtWith}</h2>
        <p>{p.tags.join(", ")}</p>
      </section>

      <p className="case-cta">
        <a className="btn" href={demo} target="_blank" rel="noopener noreferrer">{t.case.tryDemo}</a>{" "}
        <a className="btn btn-light" href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(p.name)}`}>{t.case.contactCta}</a>
      </p>
      <p className="doc-date">{t.case.sample}</p>

      <section>
        <h2>{t.case.other}</h2>
        <ul className="bullets">
          {others.map((o) => (
            <li key={o.id}>
              <a href={`${pathFor(lang)}work/${o.id}/`}>{o.name}</a>
              {": "}
              {translations[lang].showroom.projects[projects.indexOf(o)].tagline}
            </li>
          ))}
        </ul>
      </section>
      <p className="doc-foot">© {new Date().getFullYear()} {siteConfig.name}</p>
    </main>
  );
}
