"use client";

import { siteConfig, techStack, projects } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { useEffect, useRef } from "react";

export function Hero() {
  const { t } = useLang();
  const doubled = [...techStack, ...techStack];
  const heroRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on scroll — transform only (GPU)
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > window.innerHeight) return;
      const orbs = hero.querySelectorAll<HTMLElement>(".hero-orb");
      orbs.forEach((orb, i) => {
        const speed = (i % 2 === 0 ? 0.15 : -0.1);
        orb.style.transform = `translateY(${y * speed}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const stats = [
    { num: 9,  suffix: "+", label: t.hero.statProjects },
    { num: 3,  suffix: "+", label: t.hero.statYears },
    { num: 15, suffix: "+", label: t.hero.statTech },
  ];

  const recentProjects = projects.slice(-4).reverse();

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden dot-grid"
    >
      {/* Background orbs — NO filter:blur, just radial gradients */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none">
        <div className="hero-orb absolute"
          style={{ width: 700, height: 700, top: -180, left: -220,
            background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.04) 55%, transparent 75%)",
            borderRadius: "50%" }} />
        <div className="hero-orb absolute"
          style={{ width: 600, height: 600, top: 60, right: -180,
            background: "radial-gradient(circle, rgba(8,145,178,0.14) 0%, rgba(8,145,178,0.03) 55%, transparent 75%)",
            borderRadius: "50%" }} />
        <div className="hero-orb absolute"
          style={{ width: 500, height: 500, bottom: 80, left: "28%",
            background: "radial-gradient(circle, rgba(5,150,105,0.1) 0%, transparent 70%)",
            borderRadius: "50%" }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-16 w-full">
        <div className="flex flex-col xl:flex-row xl:items-center xl:gap-20">

          {/* Left */}
          <div className="flex-1 min-w-0">
            {siteConfig.available && (
              <div className="hero-animate delay-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/65 mb-8">
                <span className="status-dot" />
                {t.hero.available}
              </div>
            )}

            <h1 className="hero-animate delay-1 font-bold tracking-tight leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>
              {t.hero.greeting}{" "}
              <span className="gradient-text">{siteConfig.name}</span>
              <br />
              <span className="text-white/90">{t.hero.line1}</span>
              <br />
              <span className="text-white/35">{t.hero.line2}</span>
            </h1>

            <p className="hero-animate delay-2 text-lg md:text-xl text-white/45 max-w-xl leading-relaxed mb-10">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="hero-animate delay-3 flex flex-wrap gap-4 mb-12">
              <span className="magnetic">
                <a href="#showroom"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium shimmer"
                  style={{ transition: "background 0.25s ease, box-shadow 0.25s ease",
                    boxShadow: "0 0 0 rgba(139,92,246,0)" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(139,92,246,0.4)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(139,92,246,0)"}>
                  {t.hero.viewWork}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </span>
              <span className="magnetic">
                <a href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/80 hover:text-white font-medium shimmer"
                  style={{ transition: "all 0.25s ease" }}>
                  {t.hero.getInTouch}
                </a>
              </span>
              <span className="magnetic">
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/55 hover:text-white font-medium shimmer"
                  style={{ transition: "all 0.25s ease" }}>
                  <GithubIcon />
                  {t.hero.github}
                </a>
              </span>
            </div>

            {/* Stats */}
            <div className="hero-animate delay-4 flex flex-wrap gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white tracking-tight">
                    <span data-count={s.num} data-suffix={s.suffix}>
                      {s.num}{s.suffix}
                    </span>
                  </div>
                  <div className="text-xs text-white/30 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: recent projects card */}
          <div className="hidden xl:block flex-shrink-0 w-[240px] hero-animate delay-5">
            <div className="card-3d rounded-2xl overflow-hidden"
              style={{
                background: "rgba(13,13,32,0.9)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)",
              }}>
              <div style={{ padding: "16px 16px 14px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontFamily: "monospace",
                  textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  // recent deploys
                </span>
              </div>
              <div style={{ padding: "14px 16px 4px" }}>
                {recentProjects.map((p) => (
                  <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 11 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 7, flexShrink: 0,
                      background: `${p.accentColor}18`, border: `1px solid ${p.accentColor}30`,
                      display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: 7, height: 7, borderRadius: "50%", background: p.accentColor,
                        boxShadow: `0 0 6px ${p.accentColor}80` }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 11.5, fontWeight: 600, color: "white", lineHeight: 1.2,
                        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {p.name}
                      </div>
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginTop: 1 }}>
                        {p.tags[0]} · {p.year}
                      </div>
                    </div>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e",
                      flexShrink: 0, boxShadow: "0 0 6px #22c55e80" }} />
                  </div>
                ))}
              </div>
              <div style={{ padding: "10px 16px 14px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7 }}>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>All systems</span>
                  <span style={{ fontSize: 10, color: "#22c55e", fontFamily: "monospace", fontWeight: 700 }}>
                    {projects.length} / {projects.length} live ✓
                  </span>
                </div>
                <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "100%", borderRadius: 2,
                    background: "linear-gradient(90deg, #8b5cf6, #22d3ee, #34d399, #c8a84b, #f472b6)" }} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Tech ticker */}
      <div className="relative z-10 w-full overflow-hidden border-y border-white/[0.04] py-4 bg-white/[0.015]">
        <div className="ticker-track">
          {doubled.map((tech, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-6 text-sm text-white/25 whitespace-nowrap">
              <span style={{ color: "rgba(139,92,246,0.5)" }}>◆</span>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
