import { locales, pathFor, langName, type Lang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

// One dropdown for all languages. `suffix` is the path after the language prefix ("", "privacy/", "work/<id>/").
export function LangMenu({ lang, suffix = "" }: { lang: Lang; suffix?: string }) {
  return (
    <details className="lang-menu">
      <summary aria-label={translations[lang].nav.langLabel}>
        <span>{lang.toUpperCase()}</span>
        <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
      </summary>
      <ul>
        {locales.map((l) => (
          <li key={l}>
            <a href={`${pathFor(l)}${suffix}`} hrefLang={l} lang={l} aria-current={l === lang ? "true" : undefined}>
              {langName[l]}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
