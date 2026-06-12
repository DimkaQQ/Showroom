"use client";

import { siteConfig } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-white/25 text-sm font-mono">
          © {new Date().getFullYear()} {siteConfig.name}
        </span>
        <span className="text-white/15 text-xs">{t.footer.builtWith}</span>
        <div className="flex items-center gap-6">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/25 hover:text-white/60 transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href={siteConfig.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/25 hover:text-white/60 transition-colors text-sm"
          >
            Telegram
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-white/25 hover:text-white/60 transition-colors text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
