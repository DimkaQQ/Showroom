"use client";

import { siteConfig, techStack } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export function Hero() {
  const { t } = useLang();
  const doubled = [...techStack, ...techStack];

  const recentWork = [
    { name: "Shipter", stack: "Python · FastAPI", color: "#fb923c", ago: "2d ago" },
    { name: "DizelTrade", stack: "Python · Next.js", color: "#8b5cf6", ago: "1w ago" },
    { name: "RentoWorld", stack: "HTML · JS · CSS", color: "#22d3ee", ago: "2w ago" },
  ];

  const stats = [
    { num: "5+", label: t.hero.statProjects },
    { num: "3+", label: t.hero.statYears },
    { num: "15+", label: t.hero.statTech },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden dot-grid">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="blob absolute w-[600px] h-[600px] opacity-20"
          style={{
            background: "radial-gradient(circle, #7c3aed, #4c1d95)",
            top: "-100px",
            left: "-200px",
            animationDelay: "0s",
          }}
        />
        <div
          className="blob absolute w-[500px] h-[500px] opacity-15"
          style={{
            background: "radial-gradient(circle, #0891b2, #0e7490)",
            top: "100px",
            right: "-150px",
            animationDelay: "-4s",
          }}
        />
        <div
          className="blob absolute w-[400px] h-[400px] opacity-10"
          style={{
            background: "radial-gradient(circle, #059669, #047857)",
            bottom: "100px",
            left: "30%",
            animationDelay: "-7s",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-16 w-full">
        <div className="flex items-center gap-16">
          {/* Left: main content */}
          <div className="flex-1 min-w-0">
            {siteConfig.available && (
              <div className="hero-animate delay-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 mb-8">
                <span className="status-dot" />
                {t.hero.available}
              </div>
            )}

            <h1 className="hero-animate delay-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
              {t.hero.greeting}{" "}
              <span className="gradient-text">{siteConfig.name}</span>
              <br />
              <span className="text-white/90">{t.hero.line1}</span>
              <br />
              <span className="text-white/40">{t.hero.line2}</span>
            </h1>

            <p className="hero-animate delay-2 text-lg md:text-xl text-white/50 max-w-xl leading-relaxed mb-10">
              {t.hero.description}
            </p>

            <div className="hero-animate delay-3 flex flex-wrap gap-4 mb-10">
              <a
                href="#showroom"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-0.5"
              >
                {t.hero.viewWork}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/80 hover:text-white font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                {t.hero.getInTouch}
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/60 hover:text-white font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                <GithubIcon />
                {t.hero.github}
              </a>
            </div>

            {/* Stats row */}
            <div className="hero-animate delay-4 flex flex-wrap gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white tracking-tight">{s.num}</div>
                  <div className="text-xs text-white/35 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: floating recent deploys card (desktop only) */}
          <div className="hidden xl:block flex-shrink-0 w-64 hero-animate delay-4">
            <div
              style={{
                background: "rgba(13,13,32,0.85)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: 16,
                padding: "18px",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.35)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 14,
                  fontFamily: "monospace",
                }}
              >
                // recent deploys
              </div>

              {recentWork.map((p) => (
                <div
                  key={p.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 8,
                      background: `${p.color}18`,
                      border: `1px solid ${p.color}35`,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: p.color,
                        boxShadow: `0 0 8px ${p.color}`,
                      }}
                    />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "white", lineHeight: 1.2 }}>
                      {p.name}
                    </div>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", marginTop: 1 }}>
                      {p.stack}
                    </div>
                  </div>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,0.2)", flexShrink: 0 }}>
                    {p.ago}
                  </div>
                </div>
              ))}

              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  paddingTop: 12,
                  marginTop: 2,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>
                    All systems
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      color: "#22c55e",
                      fontFamily: "monospace",
                      fontWeight: 700,
                    }}
                  >
                    5 / 5 live ✓
                  </span>
                </div>
                <div
                  style={{
                    height: 4,
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      background:
                        "linear-gradient(90deg, #8b5cf6, #22d3ee, #34d399, #fb923c, #f472b6)",
                      borderRadius: 2,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech ticker */}
      <div className="relative z-10 w-full overflow-hidden border-y border-white/5 py-4 bg-white/[0.02]">
        <div className="ticker-track">
          {doubled.map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-6 text-sm text-white/30 whitespace-nowrap"
            >
              <span className="text-violet-500/60">◆</span>
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
