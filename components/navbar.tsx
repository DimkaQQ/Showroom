"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // Active section highlighting
      const sections = ["services", "showroom", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.services, href: "#services", id: "services" },
    { label: t.nav.work,     href: "#showroom", id: "showroom" },
    { label: t.nav.contact,  href: "#contact",  id: "contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        transition: "background 0.4s ease, border-color 0.4s ease, padding 0.4s ease",
        padding: scrolled ? "10px 0" : "22px 0",
        background: scrolled ? "rgba(5,5,15,0.85)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-lg font-bold tracking-tight">
          <span className="gradient-text-purple">{siteConfig.name}</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              className="text-sm transition-colors animated-link"
              style={{ color: active === link.id ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.5)" }}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "ru" : "en")}
            className="text-xs px-3 py-1.5 rounded-full border font-mono tracking-wider"
            style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.09)",
              color: "rgba(255,255,255,0.45)", transition: "all 0.2s ease" }}
            onMouseEnter={e => { (e.currentTarget).style.background = "rgba(255,255,255,0.08)"; (e.currentTarget).style.color = "white"; }}
            onMouseLeave={e => { (e.currentTarget).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget).style.color = "rgba(255,255,255,0.45)"; }}>
            {lang === "en" ? "RU" : "EN"}
          </button>
          <span className="magnetic">
            <a href={`mailto:${siteConfig.email}`}
              className="text-sm px-4 py-2 rounded-full border shimmer"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.09)",
                color: "rgba(255,255,255,0.75)", transition: "all 0.25s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.09)"; (e.currentTarget as HTMLElement).style.color = "white"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)"; }}>
              {t.nav.getInTouch}
            </a>
          </span>
        </div>

        {/* Mobile burger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "ru" : "en")}
            className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/45 font-mono">
            {lang === "en" ? "RU" : "EN"}
          </button>
          <button className="w-8 h-8 flex flex-col justify-center gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className="block h-px bg-white/70" style={{
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: menuOpen ? "rotate(45deg) translate(0, 6px)" : "none" }} />
            <span className="block h-px bg-white/70" style={{
              transition: "opacity 0.3s ease",
              opacity: menuOpen ? 0 : 1 }} />
            <span className="block h-px bg-white/70" style={{
              transition: "transform 0.3s ease",
              transform: menuOpen ? "rotate(-45deg) translate(0, -6px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden overflow-hidden"
        style={{ maxHeight: menuOpen ? 300 : 0, transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
        <div className="mx-4 mt-2 mb-3 rounded-2xl border border-white/10 p-6 flex flex-col gap-4"
          style={{ background: "rgba(10,10,24,0.97)", backdropFilter: "blur(20px)" }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm transition-colors"
              style={{ color: active === link.id ? "white" : "rgba(255,255,255,0.6)" }}>
              {link.label}
            </a>
          ))}
          <a href={`mailto:${siteConfig.email}`}
            className="text-sm text-center px-4 py-2.5 rounded-full transition-all"
            style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)", color: "#c4b5fd" }}>
            {t.nav.getInTouch}
          </a>
        </div>
      </div>
    </nav>
  );
}
