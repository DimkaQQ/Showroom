// To add a language: add it here, add `translations.<code>` in lib/translations.ts.
// English lives at "/", every other language at "/<code>/".
export const locales = ["en", "ru", "de", "fr"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "en";

export const ogLocale: Record<Lang, string> = { en: "en_GB", ru: "ru_RU", de: "de_DE", fr: "fr_FR" };
export const langName: Record<Lang, string> = { en: "English", ru: "Русский", de: "Deutsch", fr: "Français" };

export const pathFor = (lang: Lang) => (lang === defaultLang ? "/" : `/${lang}/`);
