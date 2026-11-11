// To add a language: add it here, add `translations.<code>` in lib/translations.ts.
// English lives at "/", every other language at "/<code>/".
export const locales = ["en", "ru", "de", "fr", "sk", "cs"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "en";

export const ogLocale: Record<Lang, string> = { en: "en_GB", ru: "ru_RU", de: "de_DE", fr: "fr_FR", sk: "sk_SK", cs: "cs_CZ" };
export const langName: Record<Lang, string> = { en: "English", ru: "Русский", de: "Deutsch", fr: "Français", sk: "Slovenčina", cs: "Čeština" };

export const pathFor = (lang: Lang) => (lang === defaultLang ? "/" : `/${lang}/`);

// hreflang map for a sub-path: plain languages plus regional variants so each country gets its own language version.
const regional: Record<string, Lang> = { "de-AT": "de", "de-CH": "de", "de-DE": "de", "ru-KZ": "ru", "fr-BE": "fr", "fr-CH": "fr", "sk-SK": "sk", "cs-CZ": "cs" };
export function hreflangs(base: string, sub: string): Record<string, string> {
  const map: Record<string, string> = Object.fromEntries(locales.map((l) => [l, base + pathFor(l) + sub]));
  for (const [code, l] of Object.entries(regional)) map[code] = base + pathFor(l) + sub;
  map["x-default"] = base + pathFor(defaultLang) + sub;
  return map;
}
