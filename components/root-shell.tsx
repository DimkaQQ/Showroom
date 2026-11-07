import { Onest, Unbounded } from "next/font/google";
import "@/app/globals.css";
import type { Lang } from "@/lib/i18n";

const onest = Onest({ subsets: ["latin", "cyrillic"], variable: "--font-text", display: "swap" });
const unbounded = Unbounded({ subsets: ["latin", "cyrillic"], weight: ["800"], variable: "--font-display", display: "swap" });

// Flags that scripts work; everything on the page is readable without it.
const boot = `document.documentElement.classList.add("js")`;

export function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${onest.variable} ${unbounded.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
