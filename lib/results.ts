import type { Lang } from "./i18n";

// Confirmed results per case, shown on the case card as one line. Keys are project ids from lib/data.ts
// (garage, clinic, spaces, dizeltrade, rentoworld, tradinglearn, shipter, storage, caspianflow, restaurant, hr, botfactory).
// Only add a result the client has confirmed. A project without an entry simply shows no result line.
// Write the line in English and Russian at least; any language without its own line falls back to English.
//
// Example (do not uncomment unless it is true):
//   restaurant: { en: "About 100 hours of manual work freed for a restaurant group.", ru: "Около 100 часов ручной работы освободила ресторанная сеть." },
export const results: Record<string, Partial<Record<Lang, string>>> = {};
