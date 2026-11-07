import type { Lang } from "./i18n";

// Real client quotes only, with the client's permission. While this list is empty the section is not rendered.
// Example entry:
// { name: "Anna Keller", role: "COO, Example GmbH", quote: { en: "...", ru: "..." } }
export type Testimonial = { name: string; role: string; quote: Record<Lang, string> };
export const testimonials: Testimonial[] = [];
