"use client";

import { projects, siteConfig } from "@/lib/data";
import { AnimateOnScroll } from "./animate-on-scroll";

export function Showroom() {
  return (
    <section id="showroom" className="py-32 relative overflow-hidden">
      {/* Background accent */}
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
        {/* Section header */}
        <AnimateOnScroll>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-cyan-400/70 tracking-widest uppercase">
              // portfolio
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent max-w-xs" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Featured Work
          </h2>
          <p className="text-white/40 text-lg max-w-xl mb-16">
            A selection of projects I&apos;m proud of. Each one is live — click
            to explore it yourself.
          </p>
        </AnimateOnScroll>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <AnimateOnScroll key={project.id} delay={i * 100}>
              <ProjectCard project={project} />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom note */}
        <AnimateOnScroll delay={300}>
          <p className="text-center text-white/25 text-sm mt-16">
            More projects on{" "}
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

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const href = `https://${project.subdomain}.${siteConfig.domain}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card group block glass rounded-2xl overflow-hidden border border-white/[0.07] hover:border-white/[0.15]"
      style={{
        boxShadow: `0 0 0 0 ${project.accentColor}00`,
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${project.accentColor}25, 0 0 0 1px ${project.accentColor}20`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${project.accentColor}00`;
      }}
    >
      {/* Header gradient */}
      <div
        className="relative h-36 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
        }}
      >
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        {/* Shine */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Year badge */}
        <div className="absolute top-3 right-3">
          <span className="text-[10px] font-mono px-2 py-1 rounded-md bg-black/30 text-white/60 border border-white/10">
            {project.year}
          </span>
        </div>

        {/* Status badge */}
        <div className="absolute bottom-3 left-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-1 rounded-md bg-black/30 text-white/70 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            {project.status}
          </span>
        </div>

        {/* Arrow indicator */}
        <div className="absolute top-3 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
          <span className="text-white/70 text-xs font-mono">↗ explore</span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="mb-1">
          <span
            className="text-[11px] font-mono uppercase tracking-wider"
            style={{ color: project.accentColor, opacity: 0.8 }}
          >
            {project.tagline}
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">
          {project.name}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-md border"
              style={{
                background: `${project.accentColor}12`,
                borderColor: `${project.accentColor}30`,
                color: `${project.accentColor}cc`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/25">{project.subdomain}.{siteConfig.domain}</span>
          <span
            className="text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
            style={{ color: project.accentColor }}
          >
            Explore project
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        </div>
      </div>
    </a>
  );
}
