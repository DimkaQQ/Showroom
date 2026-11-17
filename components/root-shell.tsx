import { Onest, Unbounded, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import type { Lang } from "@/lib/i18n";

// Latin-script pages load only the Latin subsets; Russian also gets Cyrillic (so nothing Cyrillic is preloaded elsewhere).
const onestLatin = Onest({ subsets: ["latin"], variable: "--font-text", display: "swap" });
const unboundedLatin = Unbounded({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-display", display: "swap" });
const onestCyr = Onest({ subsets: ["latin", "cyrillic", "cyrillic-ext"], variable: "--font-text", display: "swap" });
const unboundedCyr = Unbounded({ subsets: ["latin", "cyrillic", "cyrillic-ext"], weight: ["400", "500", "600"], variable: "--font-display", display: "swap" });
const monoLatin = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });
const monoCyr = JetBrains_Mono({ subsets: ["latin", "cyrillic"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

// Flags that scripts work; everything on the page is readable without it.
const boot = `document.documentElement.classList.add("js")`;

export function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const [text, display, mono] = lang === "ru" || lang === "kk" ? [onestCyr, unboundedCyr, monoCyr] : [onestLatin, unboundedLatin, monoLatin];
  return (
    <html lang={lang} className={`${text.variable} ${display.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
