"use client";

import { services } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { AnimateOnScroll } from "./animate-on-scroll";

export function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", width: 600, height: 600, top: "10%", left: "60%",
          background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
          borderRadius: "50%" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono tracking-widest uppercase" style={{ color: "rgba(167,139,250,0.7)" }}>
              {t.services.label}
            </span>
            <div className="h-px flex-1 max-w-xs" style={{ background: "linear-gradient(90deg, rgba(139,92,246,0.3), transparent)" }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{t.services.title}</h2>
          <p className="text-lg max-w-xl mb-16" style={{ color: "rgba(255,255,255,0.38)" }}>{t.services.subtitle}</p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {services.map((service, i) => (
            <AnimateOnScroll key={i} delay={i * 70} className="h-full">
              <div className="group relative glass glass-hover rounded-2xl p-6 cursor-default h-full flex flex-col card-3d">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${service.glow}, transparent 70%)`,
                    transition: "opacity 0.5s ease" }} />

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} text-2xl font-bold text-white mb-4 shadow-lg shrink-0`}
                  style={{ transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.12) rotate(-3deg)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "none"}>
                  {service.icon}
                </div>

                <div className="flex flex-col flex-1">
                  <h3 className="font-semibold text-white mb-2" style={{ fontSize: 15 }}>{t.services.items[i].title}</h3>
                  <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "rgba(255,255,255,0.42)" }}>
                    {t.services.items[i].description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-[11px] px-2.5 py-0.5 rounded-full border"
                        style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.09)",
                          color: "rgba(255,255,255,0.4)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
