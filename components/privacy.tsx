import { Logo } from "@/components/logo";
import { LangMenu } from "@/components/lang-menu";
import { siteConfig } from "@/lib/data";
import { translations } from "@/lib/translations";
import { pathFor, locales, langName, type Lang } from "@/lib/i18n";

export function Privacy({ lang }: { lang: Lang }) {
  const t = translations[lang].privacy;
  const legal = siteConfig.legal;
  return (
    <main className="doc">
      <nav className="doc-bar" aria-label="Primary">
        <a className="brand" href={pathFor(lang)} aria-label="Mirelli Studio"><Logo size={40} /></a>
        <a href={pathFor(lang)}>← {t.back}</a>
        <LangMenu lang={lang} suffix={"privacy/"} />
      </nav>
      <h1>{t.title}</h1>
      <p className="doc-date">{t.updated}</p>
      {t.sections.map((s) => (
        <section key={s.title}>
          <h2>{s.title}</h2>
          {s.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </section>
      ))}
      {legal.name && (
        <section>
          <h2>{t.legalTitle}</h2>
          <p>{t.legalPrefix} {[legal.name, legal.id, legal.address].filter(Boolean).join(", ")}.</p>
        </section>
      )}
      <p className="doc-foot">© {new Date().getFullYear()} {siteConfig.name}</p>
    </main>
  );
}
