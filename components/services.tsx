"use client";

import { services } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { AnimateOnScroll } from "./animate-on-scroll";

export function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <AnimateOnScroll>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-violet-400/70 tracking-widest uppercase">
              {t.services.label}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent max-w-xs" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-white/40 text-lg max-w-xl mb-16">
            {t.services.subtitle}
          </p>
        </AnimateOnScroll>

        {/* Grid — items-stretch makes all cells same height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {services.map((service, i) => (
            <AnimateOnScroll key={i} delay={i * 80} className="h-full">
              <ServiceCard
                service={service}
                title={t.services.items[i].title}
                description={t.services.items[i].description}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  title,
  description,
}: {
  service: (typeof services)[number];
  title: string;
  description: string;
}) {
  return (
    <div className="group relative glass glass-hover rounded-2xl p-6 cursor-default h-full flex flex-col">
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${service.glow}, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} text-2xl font-bold text-white mb-4 shadow-lg shrink-0`}
      >
        {service.icon}
      </div>

      {/* Content — flex-1 so description pushes tags to bottom */}
      <div className="flex flex-col flex-1">
        <h3 className="font-semibold text-white mb-2 text-[15px]">{title}</h3>
        <p className="text-white/45 text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Tags — always at bottom */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-md bg-white/5 text-white/40 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
