"use client";

import { siteConfig } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { AnimateOnScroll } from "./animate-on-scroll";

export function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="blob absolute w-[500px] h-[500px] opacity-10"
          style={{
            background: "radial-gradient(circle, #7c3aed, #4c1d95)",
            bottom: "-100px",
            right: "-100px",
          }}
        />
        <div
          className="blob absolute w-[400px] h-[400px] opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #0891b2, #0e7490)",
            top: "-50px",
            left: "-100px",
            animationDelay: "-5s",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <AnimateOnScroll>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-emerald-400/70 tracking-widest uppercase">
                {t.contact.label}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent max-w-xs" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t.contact.title1}
              <br />
              {t.contact.title2}
              <span className="gradient-text"> {t.contact.cta}</span>
            </h2>

            <p className="text-white/40 text-lg leading-relaxed mb-10">
              {t.contact.description}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5"
              >
                <EmailIcon />
                {siteConfig.email}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors text-sm animated-link"
              >
                <GithubIcon />
                {t.contact.github}
              </a>
              <a
                href={siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors text-sm animated-link"
              >
                <TelegramIcon />
                {t.contact.telegram}
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}
