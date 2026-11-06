// To add a language: add it here, add `translations.<code>` in lib/translations.ts.
// English lives at "/", every other language at "/<code>/".
export const locales = ["en", "ru"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "en";

export const ogLocale: Record<Lang, string> = { en: "en_GB", ru: "ru_RU" };
export const langName: Record<Lang, string> = { en: "English", ru: "Русский" };

export const pathFor = (lang: Lang) => (lang === defaultLang ? "/" : `/${lang}/`);
