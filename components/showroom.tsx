"use client";

import { projects, siteConfig } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { AnimateOnScroll } from "./animate-on-scroll";

export function Showroom() {
  const { t } = useLang();

  return (
    <section id="showroom" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="blob absolute w-[700px] h-[700px] opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #7c3aed, transparent)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-cyan-400/70 tracking-widest uppercase">
              {t.showroom.label}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent max-w-xs" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {t.showroom.title}
          </h2>
          <p className="text-white/40 text-lg max-w-xl mb-16">
            {t.showroom.subtitle}
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {projects.map((project, i) => (
            <AnimateOnScroll key={project.id} delay={i * 80} className="h-full">
              <ProjectCard
                project={project}
                tagline={t.showroom.projects[i].tagline}
                description={t.showroom.projects[i].description}
                exploreLabel={t.showroom.explore}
                liveLabel={t.showroom.live}
              />
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={300}>
          <p className="text-center text-white/25 text-sm mt-16">
            {t.showroom.moreOn}{" "}
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/45 hover:text-white/70 transition-colors animated-link"
            >
              GitHub →
            </a>
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ── Browser chrome bar ── */
function BrowserChrome({ url, accent }: { url: string; accent: string }) {
  return (
    <div
      style={{
        background: "rgba(0,0,0,0.5)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "7px 12px",
        display: "flex",
        alignItems: "center",
        gap: 8,
        flexShrink: 0,
      }}
    >
      <div style={{ display: "flex", gap: 5, flexShrink: 0 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840" }} />
      </div>
      <div
        style={{
          flex: 1,
          height: 18,
          background: "rgba(255,255,255,0.05)",
          borderRadius: 4,
          display: "flex",
          alignItems: "center",
          paddingLeft: 8,
          gap: 4,
        }}
      >
        <div
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#22c55e",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: 8.5,
            color: "rgba(255,255,255,0.3)",
            fontFamily: "monospace",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {url}
        </span>
      </div>
    </div>
  );
}

/* ── Mini UI Previews ── */

function DizelTradePreview({ accent }: { accent: string }) {
  const bars = [42, 68, 50, 88, 62, 80];
  return (
    <div style={{ display: "flex", height: "100%", gap: 7, padding: "10px 10px 6px" }}>
      <div style={{ width: 22, display: "flex", flexDirection: "column", gap: 3, paddingTop: 2 }}>
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: 5,
            background: `${accent}22`,
            border: `1px solid ${accent}30`,
            marginBottom: 4,
          }}
        />
        {[1, 0, 0, 0, 0].map((a, i) => (
          <div
            key={i}
            style={{
              height: 5,
              borderRadius: 2,
              background: a ? accent : "rgba(255,255,255,0.07)",
              opacity: a ? 0.8 : 1,
            }}
          />
        ))}
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
        <div style={{ display: "flex", gap: 3 }}>
          {[
            { v: "2.8K", c: accent },
            { v: "12", c: "#22c55e" },
            { v: "₸38M", c: "#38bdf8" },
            { v: "96%", c: "#f59e0b" },
          ].map((k, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                background: i === 0 ? `${accent}15` : "rgba(255,255,255,0.04)",
                border: `1px solid ${i === 0 ? accent + "30" : "rgba(255,255,255,0.06)"}`,
                borderRadius: 4,
                padding: "3px 4px",
              }}
            >
              <div
                style={{
                  fontSize: 7,
                  fontWeight: 700,
                  color: k.c,
                  fontFamily: "monospace",
                  lineHeight: 1,
                }}
              >
                {k.v}
              </div>
              <div
                style={{
                  height: 2,
                  background: k.c,
                  borderRadius: 1,
                  marginTop: 3,
                  width: "65%",
                  opacity: 0.35,
                }}
              />
            </div>
          ))}
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "flex-end",
            gap: 3,
            borderTop: "1px solid rgba(255,255,255,0.04)",
            paddingTop: 4,
          }}
        >
          {bars.map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h}%`,
                background: `linear-gradient(to top, ${accent}80, ${accent}25)`,
                borderRadius: "2px 2px 0 0",
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {["#22c55e", accent, "#f59e0b"].map((color, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                height: 8,
                background: "rgba(255,255,255,0.04)",
                borderRadius: 2,
                padding: "0 5px",
              }}
            >
              <div
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: color,
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  height: 2,
                  flex: 1,
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: 1,
                }}
              />
              <div
                style={{
                  height: 2,
                  width: "20%",
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: 1,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RentoWorldPreview({ accent }: { accent: string }) {
  const cars = [
    { type: "Economy", price: "$45", emoji: "🚗" },
    { type: "SUV", price: "$89", emoji: "🚙" },
    { type: "Luxury", price: "$150", emoji: "🏎" },
    { type: "Electric", price: "$65", emoji: "⚡" },
  ];
  return (
    <div
      style={{
        padding: "8px 10px",
        display: "flex",
        flexDirection: "column",
        gap: 7,
        height: "100%",
      }}
    >
      <div style={{ display: "flex", gap: 3 }}>
        {["All", "Economy", "SUV", "Luxury"].map((tab, i) => (
          <div
            key={tab}
            style={{
              fontSize: 7,
              padding: "2px 6px",
              borderRadius: 20,
              background: i === 0 ? accent : "rgba(255,255,255,0.06)",
              color: i === 0 ? "#000" : "rgba(255,255,255,0.4)",
              fontWeight: i === 0 ? 700 : 400,
              lineHeight: 1.5,
            }}
          >
            {tab}
          </div>
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 5,
          flex: 1,
        }}
      >
        {cars.map((car, i) => (
          <div
            key={i}
            style={{
              background: i === 0 ? `${accent}12` : "rgba(255,255,255,0.04)",
              border: `1px solid ${i === 0 ? accent + "40" : "rgba(255,255,255,0.06)"}`,
              borderRadius: 6,
              padding: "5px 6px",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <div style={{ fontSize: 15, lineHeight: 1 }}>{car.emoji}</div>
            <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.4)", marginTop: 1 }}>
              {car.type}
            </div>
            <div
              style={{
                fontSize: 8.5,
                fontWeight: 700,
                color: i === 0 ? accent : "white",
                fontFamily: "monospace",
              }}
            >
              {car.price}
              <span style={{ fontSize: 6, color: "rgba(255,255,255,0.3)", fontWeight: 400 }}>
                /day
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TradingLearnPreview({ accent }: { accent: string }) {
  const pts = [0.75, 0.6, 0.7, 0.42, 0.55, 0.3, 0.48, 0.18, 0.32, 0.12, 0.22];
  const W = 130,
    H = 60;
  const line = pts
    .map((y, i) => `${i === 0 ? "M" : "L"}${(i / (pts.length - 1)) * W},${y * H}`)
    .join(" ");
  const area = `${line} L${W},${H} L0,${H} Z`;

  return (
    <div
      style={{
        padding: "8px 10px",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        height: "100%",
      }}
    >
      <div style={{ display: "flex", gap: 10, overflow: "hidden" }}>
        {[
          { s: "BTC", p: "+2.3%", c: accent },
          { s: "ETH", p: "−0.8%", c: "#ef4444" },
          { s: "SOL", p: "+5.1%", c: accent },
        ].map((tick) => (
          <div key={tick.s} style={{ display: "flex", gap: 3, fontSize: 7, alignItems: "center" }}>
            <span style={{ color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>{tick.s}</span>
            <span style={{ color: tick.c, fontWeight: 700 }}>{tick.p}</span>
          </div>
        ))}
      </div>
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="tl-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={accent} stopOpacity="0.25" />
              <stop offset="100%" stopColor={accent} stopOpacity="0.01" />
            </linearGradient>
          </defs>
          <path d={area} fill="url(#tl-fill)" />
          <path
            d={line}
            fill="none"
            stroke={accent}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div style={{ display: "flex", gap: 4 }}>
        <div
          style={{
            flex: 1,
            background: `${accent}25`,
            border: `1px solid ${accent}45`,
            borderRadius: 4,
            textAlign: "center",
            padding: "3px 0",
            fontSize: 8,
            fontWeight: 700,
            color: accent,
          }}
        >
          BUY
        </div>
        <div
          style={{
            flex: 1,
            background: "rgba(239,68,68,0.15)",
            border: "1px solid rgba(239,68,68,0.3)",
            borderRadius: 4,
            textAlign: "center",
            padding: "3px 0",
            fontSize: 8,
            fontWeight: 700,
            color: "#ef4444",
          }}
        >
          SELL
        </div>
      </div>
    </div>
  );
}

function CVPreview({ accent }: { accent: string }) {
  const skills = [
    { name: "React", pct: 90 },
    { name: "CSS / Tailwind", pct: 85 },
    { name: "TypeScript", pct: 75 },
  ];
  return (
    <div
      style={{
        padding: "10px 12px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        height: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${accent}80, ${accent}20)`,
            border: `2px solid ${accent}40`,
            flexShrink: 0,
          }}
        />
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, color: "white", lineHeight: 1.2 }}>
            Zhasmin A.
          </div>
          <div style={{ fontSize: 8, color: accent, marginTop: 1 }}>Frontend Developer</div>
        </div>
      </div>
      <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
        <div
          style={{
            fontSize: 7,
            color: "rgba(255,255,255,0.25)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Skills
        </div>
        {skills.map((sk) => (
          <div key={sk.name} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 7.5, color: "rgba(255,255,255,0.5)" }}>{sk.name}</span>
              <span style={{ fontSize: 7.5, color: accent, fontFamily: "monospace" }}>
                {sk.pct}%
              </span>
            </div>
            <div
              style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2 }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${sk.pct}%`,
                  background: `linear-gradient(90deg, ${accent}, ${accent}70)`,
                  borderRadius: 2,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 3 }}>
        {["React", "Next.js", "Figma"].map((tag) => (
          <div
            key={tag}
            style={{
              fontSize: 7,
              padding: "1px 6px",
              borderRadius: 3,
              background: `${accent}12`,
              color: accent,
              border: `1px solid ${accent}22`,
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

function ShipterPreview({ accent }: { accent: string }) {
  const orders = [
    { id: "#1240", color: "#22c55e", label: "Delivered" },
    { id: "#1241", color: accent, label: "In Transit" },
    { id: "#1242", color: "#f59e0b", label: "Pending" },
  ];
  const dots = [
    { x: "18%", y: "28%" },
    { x: "55%", y: "48%" },
    { x: "76%", y: "22%" },
    { x: "40%", y: "68%" },
  ];
  return (
    <div style={{ display: "flex", height: "100%", gap: 7, padding: "8px 10px 6px" }}>
      <div style={{ width: 20, display: "flex", flexDirection: "column", gap: 3, paddingTop: 2 }}>
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: 4,
            background: `${accent}22`,
            border: `1px solid ${accent}30`,
            marginBottom: 4,
          }}
        />
        {[1, 0, 0, 0].map((a, i) => (
          <div
            key={i}
            style={{
              height: 5,
              borderRadius: 2,
              background: a ? accent : "rgba(255,255,255,0.07)",
              opacity: a ? 0.8 : 1,
            }}
          />
        ))}
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
        <div style={{ display: "flex", gap: 3 }}>
          {[
            { v: "1,240", c: accent },
            { v: "98%", c: "#22c55e" },
            { v: "12h avg", c: "rgba(255,255,255,0.5)" },
          ].map((k, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                background: i === 0 ? `${accent}15` : "rgba(255,255,255,0.04)",
                border: `1px solid ${i === 0 ? accent + "30" : "rgba(255,255,255,0.05)"}`,
                borderRadius: 4,
                padding: "3px 4px",
              }}
            >
              <div
                style={{
                  fontSize: 7,
                  fontWeight: 700,
                  color: k.c,
                  fontFamily: "monospace",
                  lineHeight: 1,
                }}
              >
                {k.v}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.03)",
            borderRadius: 5,
            border: "1px solid rgba(255,255,255,0.05)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: `${n * 25}%`,
                height: 1,
                background: "rgba(255,255,255,0.03)",
              }}
            />
          ))}
          {dots.map((d, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: d.x,
                top: d.y,
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: accent,
                opacity: 0.75,
                transform: "translate(-50%, -50%)",
                boxShadow: `0 0 8px ${accent}`,
              }}
            />
          ))}
        </div>
        {orders.map((o) => (
          <div
            key={o.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              height: 9,
              background: "rgba(255,255,255,0.04)",
              borderRadius: 2,
              padding: "0 5px",
            }}
          >
            <div
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: o.color,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 6.5,
                color: "rgba(255,255,255,0.4)",
                fontFamily: "monospace",
              }}
            >
              {o.id}
            </span>
            <div style={{ flex: 1 }} />
            <span style={{ fontSize: 6, color: o.color }}>{o.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function getMiniPreview(id: string, accent: string) {
  switch (id) {
    case "dizeltrade":
      return <DizelTradePreview accent={accent} />;
    case "rentoworld":
      return <RentoWorldPreview accent={accent} />;
    case "tradinglearn":
      return <TradingLearnPreview accent={accent} />;
    case "cv":
      return <CVPreview accent={accent} />;
    case "shipter":
      return <ShipterPreview accent={accent} />;
    default:
      return null;
  }
}

/* ── Project card ── */
function ProjectCard({
  project,
  tagline,
  description,
  exploreLabel,
  liveLabel,
}: {
  project: (typeof projects)[number];
  tagline: string;
  description: string;
  exploreLabel: string;
  liveLabel: string;
}) {
  const href = `https://${project.subdomain}.${siteConfig.domain}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card group block rounded-2xl overflow-hidden border border-white/[0.07] hover:border-white/[0.15] h-full flex flex-col"
      style={{
        background: "rgba(255,255,255,0.025)",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 24px 60px ${project.accentColor}22, 0 0 0 1px ${project.accentColor}18`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "";
      }}
    >
      {/* Browser chrome */}
      <BrowserChrome
        url={`${project.subdomain}.${siteConfig.domain}`}
        accent={project.accentColor}
      />

      {/* Mini UI preview */}
      <div
        style={{
          height: 188,
          overflow: "hidden",
          background: `linear-gradient(145deg, ${project.gradientFrom}cc, ${project.gradientTo}cc)`,
          position: "relative",
          flexShrink: 0,
        }}
      >
        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            pointerEvents: "none",
          }}
        />
        {/* Mini UI */}
        <div style={{ position: "relative", zIndex: 1, height: "100%" }}>
          {getMiniPreview(project.id, project.accentColor)}
        </div>
        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 32,
            background: `linear-gradient(to bottom, transparent, ${project.gradientTo}cc)`,
            pointerEvents: "none",
          }}
        />
        {/* Shine on hover */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ pointerEvents: "none" }}
        />
        {/* Status badge */}
        <div style={{ position: "absolute", top: 8, right: 10, zIndex: 2 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              fontSize: 9,
              fontFamily: "monospace",
              padding: "2px 7px",
              borderRadius: 4,
              background: "rgba(0,0,0,0.45)",
              color: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#22c55e",
                display: "inline-block",
              }}
            />
            {liveLabel}
          </span>
        </div>
        <div style={{ position: "absolute", top: 8, left: 10, zIndex: 2 }}>
          <span
            style={{
              fontSize: 9,
              fontFamily: "monospace",
              padding: "2px 6px",
              borderRadius: 4,
              background: "rgba(0,0,0,0.35)",
              color: "rgba(255,255,255,0.35)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {project.year}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-1">
          <span
            className="text-[11px] font-mono uppercase tracking-wider"
            style={{ color: project.accentColor, opacity: 0.8 }}
          >
            {tagline}
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>
        <p className="text-white/40 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-md border"
              style={{
                background: `${project.accentColor}10`,
                borderColor: `${project.accentColor}28`,
                color: `${project.accentColor}bb`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs text-white/20">
            {project.subdomain}.{siteConfig.domain}
          </span>
          <span
            className="text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
            style={{ color: project.accentColor }}
          >
            {exploreLabel}
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        </div>
      </div>
    </a>
  );
}
