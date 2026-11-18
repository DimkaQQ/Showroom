"use client";

import { useEffect } from "react";

const $ = <T extends HTMLElement = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends HTMLElement = HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));

function splitChars(node: HTMLElement): HTMLElement[] {
  if (node.dataset.split) return $$(".ch", node);
  node.dataset.split = "1";
  const text = node.textContent || "";
  node.textContent = "";
  return Array.from(text).map((c) => {
    const s = document.createElement("span");
    s.className = "ch";
    s.textContent = c === " " ? " " : c;
    node.appendChild(s);
    return s;
  });
}

// The motion layer. The page is complete without it (server-rendered text, plain grid layouts), and it only starts
// when the visitor has not asked for reduced motion. GSAP is loaded on demand.
export function Fx() {
  useEffect(() => {
    const closeMenus = (e: Event) => {
      document.querySelectorAll<HTMLDetailsElement>("details.lang-menu[open]").forEach((d) => {
        if (e.type === "keydown" ? (e as KeyboardEvent).key === "Escape" : !d.contains(e.target as Node)) d.open = false;
      });
    };
    document.addEventListener("click", closeMenus);
    document.addEventListener("keydown", closeMenus);

    let disposed = false;
    let cleanup = () => {};
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!reduce) {
      Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([g, s]) => {
        if (disposed) return;
        const gsap = g.gsap;
        const ScrollTrigger = s.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
        const root = document.documentElement;
        root.classList.add("motion");
        const listeners: [EventTarget, string, EventListener, AddEventListenerOptions?][] = [];
        const on = (t: EventTarget, ev: string, fn: EventListener, o?: AddEventListenerOptions) => { t.addEventListener(ev, fn, o); listeners.push([t, ev, fn, o]); };

        const mm = gsap.matchMedia();
        const ctx = gsap.context(() => {
          const bar = $("#top-bar");

          gsap.to("#progress", { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.2 } });
          ScrollTrigger.create({
            start: 80, end: "max",
            onUpdate: (self) => { bar?.classList.toggle("solid", self.scroll() > 80); bar?.classList.toggle("hide", self.direction === 1 && self.scroll() > 600); },
          });

          // Hero: split-letter headline, scrambling keyword
          const chars = $$("#h1 .split").flatMap(splitChars);
          gsap.set(chars, { yPercent: 115 });
          gsap.to(chars, { yPercent: 0, duration: 1.1, ease: "expo.out", stagger: 0.028, delay: 0.15 });
          gsap.from(".hero .lead, .hero .cta, .hero .hero-stats", { y: 28, opacity: 0.1, duration: 1, ease: "expo.out", delay: 0.9, stagger: 0.12 });
          gsap.from(".fl", { y: 80, opacity: 0, rotate: () => gsap.utils.random(-8, 8), duration: 1.4, ease: "expo.out", delay: 0.5, stagger: 0.12 });

          const rot = $("#rot");
          if (rot) {
            const words = (rot.dataset.words || "").split("|").filter(Boolean);
            let wi = 0;
            const GL = "!<>-_/[]{}=+*^?#";
            const scramble = (to: string) => {
              const from = rot.textContent || "", len = Math.max(from.length, to.length), o = { p: 0 };
              gsap.to(o, {
                p: 1, duration: 0.9, ease: "none",
                onUpdate: () => { let s = ""; for (let i = 0; i < len; i++) { const k = i / len; s += o.p > k + 0.15 ? (to[i] || "") : (i < to.length ? GL[(Math.random() * GL.length) | 0] : ""); } rot.textContent = s; },
                onComplete: () => { rot.textContent = to; },
              });
            };
            if (words.length > 1) gsap.delayedCall(2.4, function loop() { wi = (wi + 1) % words.length; scramble(words[wi]); gsap.delayedCall(2.6, loop); });
          }

          // Hero: spotlight, grid drift and depth parallax with the pointer
          const hero = $("#top");
          const spot = $("#spot");
          const fl = $$(".fl");
          const depth = [28, 46, 70, 18];
          if (hero && spot && fl.length) {
            const qx = fl.map((n) => gsap.quickTo(n, "x", { duration: 0.9, ease: "power3" }));
            const qy = fl.map((n) => gsap.quickTo(n, "y", { duration: 0.9, ease: "power3" }));
            on(hero, "pointermove", ((e: PointerEvent) => {
              const r = hero.getBoundingClientRect(), nx = (e.clientX - r.left) / r.width - 0.5, ny = (e.clientY - r.top) / r.height - 0.5;
              spot.style.setProperty("--mx", e.clientX - r.left + "px");
              spot.style.setProperty("--my", e.clientY - r.top + "px");
              fl.forEach((_, i) => { qx[i](-nx * depth[i % depth.length]); qy[i](-ny * depth[i % depth.length]); });
            }) as EventListener, { passive: true });
            gsap.to("#grid", { y: 120, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });
            gsap.to(".fl", { yPercent: (i) => -20 - i * 12, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });
          }

          // The one marquee: speed and skew follow scroll velocity
          if ($("#mq")) {
            const mqTl = gsap.to("#mq", { xPercent: -50, duration: 38, ease: "none", repeat: -1 });
            ScrollTrigger.create({
              trigger: ".mq", start: "top bottom", end: "bottom top",
              onUpdate: (self) => {
                const v = self.getVelocity();
                gsap.to(mqTl, { timeScale: 1 + Math.min(6, Math.abs(v) / 400), duration: 0.2, overwrite: true });
                gsap.to(mqTl, { timeScale: 1, duration: 1.2, delay: 0.2 });
                gsap.to("#mq", { skewX: gsap.utils.clamp(-8, 8, -v / 220), duration: 0.3, overwrite: "auto" });
              },
            });
          }

          // Section headings lift in, once
          $$(".sec h2").forEach((h) => gsap.from(h, { y: 60, opacity: 0.1, filter: "blur(8px)", duration: 1.1, ease: "expo.out", scrollTrigger: { trigger: h, start: "top 88%", once: true } }));
          $$(".sec .sub").forEach((h) => gsap.from(h, { y: 30, opacity: 0.1, duration: 1, ease: "expo.out", scrollTrigger: { trigger: h, start: "top 92%", once: true } }));

          // Counters
          $$(".hero-stats dd").forEach((d) => {
            const raw = d.textContent || "", end = parseInt(raw, 10), suf = raw.replace(/[0-9]/g, "");
            if (!isFinite(end)) return;
            const o = { v: 0 };
            d.textContent = "0" + suf;
            gsap.to(o, { v: end, duration: 1.8, ease: "power3.out", delay: 1.1, onUpdate: () => { d.textContent = Math.round(o.v) + suf; }, onComplete: () => { d.textContent = end + suf; } });
          });

          // Timeline: the rail draws with scroll, each step lights up
          if ($("#tl")) {
            gsap.to("#rail", { scaleY: 1, ease: "none", scrollTrigger: { trigger: "#tl", start: "top 70%", end: "bottom 60%", scrub: true } });
            $$("#tl .st").forEach((st) => {
              ScrollTrigger.create({ trigger: st, start: "top 65%", onEnter: () => st.classList.add("on"), onLeaveBack: () => st.classList.remove("on") });
              gsap.from(st, { y: 32, opacity: 0.15, duration: 1, ease: "expo.out", scrollTrigger: { trigger: st, start: "top 85%", once: true } });
            });
          }

          // Contact: letters react to the pointer
          const mail = $("#mail");
          if (mail) {
            const label = mail.textContent || "";
            mail.setAttribute("aria-label", label);
            const letters = splitChars(mail);
            letters.forEach((c) => c.setAttribute("aria-hidden", "true"));
            let mx = -999, my = -999, raf = 0;
            const paint = () => {
              raf = 0;
              letters.forEach((c) => {
                const b = c.getBoundingClientRect();
                const k = Math.max(0, 1 - Math.hypot(mx - (b.left + b.width / 2), my - (b.top + b.height / 2)) / 200);
                c.style.transform = `translateY(${(-k * k * 22).toFixed(1)}px)`;
                c.style.color = k > 0.05 ? `color-mix(in srgb, var(--accent) ${Math.round(k * 100)}%, var(--fg))` : "";
              });
            };
            on(window, "pointermove", ((e: PointerEvent) => {
              mx = e.clientX; my = e.clientY;
              const r = mail.getBoundingClientRect();
              if (r.bottom > -200 && r.top < innerHeight + 200 && !raf) raf = requestAnimationFrame(paint);
            }) as EventListener, { passive: true });
          }

          // Magnetic controls
          $$(".mag").forEach((b) => {
            const qx = gsap.quickTo(b, "x", { duration: 0.5, ease: "power3" }), qy = gsap.quickTo(b, "y", { duration: 0.5, ease: "power3" });
            on(b, "pointermove", ((e: PointerEvent) => { const r = b.getBoundingClientRect(); qx((e.clientX - (r.left + r.width / 2)) * 0.28); qy((e.clientY - (r.top + r.height / 2)) * 0.34); }) as EventListener);
            on(b, "pointerleave", () => { qx(0); qy(0); });
          });

          // Desktop only: pinned horizontal showcase, sticky service stack
          mm.add("(min-width: 961px)", () => {
            const pin = $("#hz-pin"), track = $("#hz-track"), n = $("#hz-n"), barEl = $("#hz-bar");
            const cards = $$(".card");
            const off: (() => void)[] = [];
            if (pin && track && n && barEl) {
              const count = cards.length || 12;
              const dist = () => track.scrollWidth - window.innerWidth;
              gsap.to(track, {
                x: () => -dist(), ease: "none",
                scrollTrigger: {
                  trigger: pin, start: "top top", end: () => "+=" + dist(), pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1,
                  onUpdate: (s) => { n.textContent = String(Math.min(count, Math.floor(s.progress * count) + 1)).padStart(2, "0"); gsap.set(barEl, { scaleX: s.progress }); },
                },
              });
              cards.forEach((c) => {
                gsap.set(c, { transformPerspective: 1100 });
                const rx = gsap.quickTo(c, "rotationX", { duration: 0.5, ease: "power3" }), ry = gsap.quickTo(c, "rotationY", { duration: 0.5, ease: "power3" });
                const mv = (e: PointerEvent) => { const r = c.getBoundingClientRect(); ry(((e.clientX - r.left) / r.width - 0.5) * 7); rx(-((e.clientY - r.top) / r.height - 0.5) * 6); };
                const lv = () => { rx(0); ry(0); };
                c.addEventListener("pointermove", mv); c.addEventListener("pointerleave", lv);
                off.push(() => { c.removeEventListener("pointermove", mv); c.removeEventListener("pointerleave", lv); });
              });
            }
            const sc = $$(".sc");
            sc.forEach((c, i) => {
              if (i === sc.length - 1) return;
              gsap.to(c, { scale: 0.93, filter: "blur(4px)", opacity: 0.45, ease: "none", scrollTrigger: { trigger: sc[i + 1], start: "top 92%", end: "top " + (88 + (i + 1) * 16 + 20) + "px", scrub: true } });
            });
            return () => off.forEach((f) => f());
          });
        });

        const refresh = () => ScrollTrigger.refresh();
        window.addEventListener("load", refresh);

        cleanup = () => {
          window.removeEventListener("load", refresh);
          listeners.forEach(([t, ev, fn, o]) => t.removeEventListener(ev, fn, o));
          mm.revert();
          ctx.revert();
          root.classList.remove("motion");
        };
      });
    }

    return () => {
      disposed = true;
      document.removeEventListener("click", closeMenus);
      document.removeEventListener("keydown", closeMenus);
      cleanup();
    };
  }, []);

  return null;
}
