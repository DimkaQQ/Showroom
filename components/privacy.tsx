import { siteConfig } from "@/lib/data";
import { translations } from "@/lib/translations";
import { pathFor, locales, langName, type Lang } from "@/lib/i18n";

export function Privacy({ lang }: { lang: Lang }) {
  const t = translations[lang].privacy;
  return (
    <main className="doc">
      <nav className="doc-bar" aria-label="Primary">
        <a href={pathFor(lang)}>← {t.back}</a>
        <ul className="langs" aria-label={translations[lang].nav.langLabel}>
          {locales.map((l) => (
            <li key={l}>
              <a href={`${pathFor(l)}privacy/`} hrefLang={l} lang={l} title={langName[l]} aria-current={l === lang ? "true" : undefined}>
                {l.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
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
      <p className="doc-foot">© {new Date().getFullYear()} {siteConfig.name}</p>
    </main>
  );
}
