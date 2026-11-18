import type { Lang } from "./i18n";

// Confirmed results per case, shown on the case card as one line. Keys are project ids from lib/data.ts
// (garage, clinic, spaces, dizeltrade, rentoworld, tradinglearn, shipter, storage, caspianflow, restaurant, hr, botfactory).
// Only add a result the client has confirmed. A project without an entry simply shows no result line.
// Any language without its own line falls back to English.
type R = Partial<Record<Lang, string>>;
const eur = (s: string): R => ({ en: s, de: s, fr: s, sk: s, cs: s });

export const results: Record<string, R> = {
  garage: {
    en: "No-shows down 40%, bookings up 30%.",
    ru: "Неявки снизились на 40%, записей стало на 30% больше.",
    de: "40% weniger Ausfälle, 30% mehr Buchungen.",
    fr: "40 % d'absences en moins, 30 % de réservations en plus.",
    sk: "O 40 % menej zmeškaných návštev, o 30 % viac rezervácií.",
    cs: "O 40 % méně zmeškaných návštěv, o 30 % více rezervací.",
    kk: "Келмей қалу 40%-ға азайды, жазылулар 30%-ға көбейді.",
  },
  storage: {
    en: "Losses down 20%, and checking and entering stock became easy.",
    ru: "Потери сократились на 20%, склад стало проще проверять и вести.",
    de: "20% weniger Verluste, Bestand prüfen und erfassen wurde einfach.",
    fr: "20 % de pertes en moins, contrôle et saisie du stock devenus simples.",
    sk: "O 20 % nižšie straty, kontrola a zadávanie zásob sa zjednodušili.",
    cs: "O 20 % nižší ztráty, kontrola a zadávání zásob se zjednodušily.",
    kk: "Шығын 20%-ға азайды, қойманы тексеру мен жүргізу жеңілдеді.",
  },
  dizeltrade: {
    en: "Order processing time cut by 40%.",
    ru: "Время оформления сократилось на 40%.",
    de: "40% kürzere Bearbeitungszeit.",
    fr: "Temps de traitement réduit de 40 %.",
    sk: "Čas spracovania skrátený o 40 %.",
    cs: "Doba zpracování zkrácena o 40 %.",
    kk: "Рәсімдеу уақыты 40%-ға қысқарды.",
  },
  spaces: {
    en: "Empty spaces down 35%, with steady income from online payments.",
    ru: "Пустующих мест стало на 35% меньше, онлайн-оплата даёт постоянный доход.",
    de: "35% weniger leere Plätze, stetiges Einkommen durch Online-Zahlungen.",
    fr: "35 % de places vides en moins, revenu régulier grâce aux paiements en ligne.",
    sk: "O 35 % menej prázdnych miest, stabilný príjem z online platieb.",
    cs: "O 35 % méně prázdných míst, stabilní příjem z online plateb.",
    kk: "Бос орындар 35%-ға азайды, онлайн төлем тұрақты табыс береді.",
  },
  hr: {
    en: "About 70% less manager time spent on basic training.",
    ru: "Примерно на 70% меньше времени управляющего уходит на базовое обучение.",
    de: "Etwa 70% weniger Zeit der Leitung für die Grundeinarbeitung.",
    fr: "Environ 70 % de temps de gestionnaire en moins pour la formation de base.",
    sk: "Približne o 70 % menej času manažéra na základné zaškolenie.",
    cs: "Přibližně o 70 % méně času manažera na základní zaškolení.",
    kk: "Басшының негізгі оқытуға кететін уақыты шамамен 70%-ға азайды.",
  },
  // An estimate, not a client result: compares the builder with building a bot from scratch.
  botfactory: {
    ...eur("Typically saves about €500-1,000 per bot compared with building it from scratch (estimate)."),
    de: "Spart typischerweise etwa 500-1.000 € pro Bot gegenüber einer Entwicklung von Grund auf (Schätzung).",
    fr: "Économise en général environ 500-1 000 € par bot par rapport à un développement sur mesure (estimation).",
    sk: "Typicky ušetrí približne 500-1 000 € na bota oproti vývoju od nuly (odhad).",
    cs: "Typicky ušetří přibližně 500-1 000 € na bota oproti vývoji od nuly (odhad).",
    ru: "В среднем экономит около 250-500 тыс. ₸ на каждом боте по сравнению с разработкой с нуля (оценка).",
    kk: "Нөлден әзірлеумен салыстырғанда әр ботқа шамамен 250-500 мың ₸ үнемдейді (бағалау).",
  },
};
