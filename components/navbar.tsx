"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.work, href: "#showroom" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#05050f]/80 backdrop-blur-xl border-b border-white/5 py-3"
          : "py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-lg font-bold tracking-tight">
          <span className="gradient-text-purple">{siteConfig.name}</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors animated-link"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "ru" : "en")}
            className="text-xs px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all text-white/50 hover:text-white font-mono tracking-wider"
          >
            {lang === "en" ? "RU" : "EN"}
          </button>

          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all text-white/80 hover:text-white"
          >
            {t.nav.getInTouch}
          </a>
        </div>

        {/* Mobile burger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "ru" : "en")}
            className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-mono"
          >
            {lang === "en" ? "RU" : "EN"}
          </button>
          <button
            className="w-8 h-8 flex flex-col justify-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px bg-white/70 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-px bg-white/70 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px bg-white/70 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 mx-4 rounded-2xl bg-[#0d0d20]/95 backdrop-blur-xl border border-white/10 p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-white transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-center px-4 py-2.5 rounded-full bg-violet-600/20 border border-violet-500/30 text-violet-300 hover:bg-violet-600/30 transition-all"
          >
            {t.nav.getInTouch}
          </a>
        </div>
      )}
    </nav>
  );
}
