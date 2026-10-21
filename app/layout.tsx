import type { Metadata } from "next";
import { Onest, Unbounded } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  variable: "--font-text",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.title}`,
  description: siteConfig.description,
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

// Runs before first paint: restores the saved language and flags that scripts work.
// Everything on the page is readable without it.
const boot = `try{var l=localStorage.getItem("lang");if(l==="en"||l==="ru")document.documentElement.setAttribute("data-lang",l)}catch(e){}document.documentElement.classList.add("js")`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" data-lang="ru" className={`${onest.variable} ${unbounded.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
