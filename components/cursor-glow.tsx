"use client";

import { useEffect } from "react";

export function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    if (!glow) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x, ty = y;
    let raf: number;

    // Cursor glow follows mouse with lerp
    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };

    const tick = () => {
      x += (tx - x) * 0.07;
      y += (ty - y) * 0.07;
      glow.style.transform = `translate(${x - 250}px, ${y - 250}px)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    // ── Magnetic buttons ──────────────────────────────────
    const setupMagnetics = () => {
      document.querySelectorAll<HTMLElement>(".magnetic").forEach((wrap) => {
        const btn = wrap.firstElementChild as HTMLElement | null;
        if (!btn) return;

        wrap.addEventListener("mousemove", (e: MouseEvent) => {
          const r = wrap.getBoundingClientRect();
          const dx = (e.clientX - (r.left + r.width  / 2)) * 0.28;
          const dy = (e.clientY - (r.top  + r.height / 2)) * 0.28;
          wrap.style.transform = `translate(${dx}px, ${dy}px)`;
        });
        wrap.addEventListener("mouseleave", () => {
          wrap.style.transform = "";
        });
      });
    };

    // ── Card 3D tilt ──────────────────────────────────────
    const setupTilts = () => {
      document.querySelectorAll<HTMLElement>(".card-3d").forEach((card) => {
        card.addEventListener("mousemove", (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const nx = (e.clientX - r.left) / r.width  - 0.5;
          const ny = (e.clientY - r.top)  / r.height - 0.5;
          card.style.setProperty("--rx",   `${-ny * 7}deg`);
          card.style.setProperty("--ry",   `${nx  * 7}deg`);
          card.style.setProperty("--lift", "-5px");
        });
        card.addEventListener("mouseleave", () => {
          card.style.setProperty("--rx",   "0deg");
          card.style.setProperty("--ry",   "0deg");
          card.style.setProperty("--lift", "0px");
        });
      });
    };

    // ── Smooth scroll for anchor links ────────────────────
    const setupAnchors = () => {
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", (e) => {
          const id = a.getAttribute("href")?.slice(1);
          const target = id ? document.getElementById(id) : null;
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      });
    };

    // ── Counter animation on stats ────────────────────────
    const setupCounters = () => {
      const counters = document.querySelectorAll<HTMLElement>("[data-count]");
      if (!counters.length) return;
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.count ?? "0", 10);
          const suffix = el.dataset.suffix ?? "";
          const dur = 1200;
          const start = performance.now();
          const update = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(eased * target) + suffix;
            if (p < 1) requestAnimationFrame(update);
          };
          requestAnimationFrame(update);
          obs.unobserve(el);
        });
      }, { threshold: 0.5 });
      counters.forEach((c) => obs.observe(c));
    };

    // Run setup after paint
    const id = requestAnimationFrame(() => {
      setupMagnetics();
      setupTilts();
      setupAnchors();
      setupCounters();
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <div
      id="cursor-glow"
      aria-hidden
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: 500, height: 500,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 0,
        background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, rgba(34,211,238,0.025) 50%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
