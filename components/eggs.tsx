"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/data";
import { pathFor, type Lang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const KONAMI = ["arrowup", "arrowup", "arrowdown", "arrowdown", "arrowleft", "arrowright", "arrowleft", "arrowright", "b", "a"];
const GLYPHS = ["404", "{ }", "</>", "€", "0", "418"];

// Hidden things, all optional: the page works the same without them.
export function Eggs({ lang }: { lang: Lang }) {
  useEffect(() => {
    const t = translations[lang].eggs;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers: number[] = [];
    const later = (fn: () => void, ms: number) => { timers.push(window.setTimeout(fn, ms)); };

    console.log("%cMirelli Studio", "font:800 28px system-ui;color:#f2b544;background:#0d0f12;padding:8px 14px");
    console.log(`${t.console}\n${siteConfig.email}`);

    let msg: HTMLDivElement | null = null;
    let msgTimer = 0;
    const say = (text: string) => {
      if (!msg) {
        msg = document.createElement("div");
        msg.className = "egg-msg";
        msg.setAttribute("role", "status");
        document.body.appendChild(msg);
      }
      msg.textContent = text;
      void msg.offsetWidth;
      msg.classList.add("show");
      window.clearTimeout(msgTimer);
      msgTimer = window.setTimeout(() => msg?.classList.remove("show"), 4200);
    };

    const rain = () => {
      if (reduce) return;
      const host = document.createElement("div");
      host.className = "egg-rain";
      host.setAttribute("aria-hidden", "true");
      for (let i = 0; i < 48; i++) {
        const s = document.createElement("span");
        s.textContent = GLYPHS[i % GLYPHS.length];
        s.style.left = Math.random() * 100 + "vw";
        s.style.fontSize = 16 + Math.random() * 30 + "px";
        s.style.animationDuration = 2.4 + Math.random() * 2.4 + "s";
        s.style.animationDelay = Math.random() * 0.9 + "s";
        s.style.setProperty("--r", Math.random() * 720 - 360 + "deg");
        host.appendChild(s);
      }
      document.body.appendChild(host);
      later(() => host.remove(), 6200);
    };

    let waving = false;
    const wave = () => {
      if (reduce || waving) return;
      waving = true;
      later(() => { waving = false; }, 1400);
      document.querySelectorAll<HTMLElement>(".hero .wordmark .ch").forEach((el, i) =>
        el.animate(
          [{ transform: "translateY(0)" }, { transform: "translateY(-16%)" }, { transform: "translateY(0)" }],
          { duration: 640, delay: i * 48, easing: "cubic-bezier(0.23, 1, 0.32, 1)" }
        )
      );
    };
    const mark = document.querySelector<HTMLElement>(".hero .wordmark");
    mark?.addEventListener("click", wave);

    // Touch equivalents (no keyboard on a phone): 5 taps on the first stat = Konami, 5 taps on the last = 404,
    // press and hold the wordmark = sudo.
    const stats = document.querySelectorAll<HTMLElement>(".hero-stats dd");
    const tapTimes = (el: HTMLElement | undefined, n: number, ms: number, fn: () => void) => {
      if (!el) return () => {};
      let hits: number[] = [];
      const on = () => {
        const now = Date.now();
        hits = [...hits.filter((h) => now - h < ms), now];
        if (hits.length >= n) { hits = []; fn(); }
      };
      el.addEventListener("click", on);
      return () => el.removeEventListener("click", on);
    };
    const goTo404 = () => { say(t.four04); later(() => location.assign(pathFor(lang) + "this-page-does-not-exist/"), 900); };
    const offTaps = [
      tapTimes(stats[0], 5, 2500, () => { say(t.konami); rain(); }),
      tapTimes(stats[2], 5, 2000, goTo404),
    ];
    let hold = 0;
    const holdStart = () => { hold = window.setTimeout(() => say(t.sudo), 800); };
    const holdEnd = () => window.clearTimeout(hold);
    mark?.addEventListener("pointerdown", holdStart);
    ["pointerup", "pointerleave", "pointercancel"].forEach((ev) => mark?.addEventListener(ev, holdEnd));

    const original = document.title;
    const onVisibility = () => { document.title = document.hidden ? t.away : original; };
    document.addEventListener("visibilitychange", onVisibility);

    let keys: string[] = [];
    let typed = "";
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const el = e.target as HTMLElement | null;
      if (el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName))) return;
      const k = e.key.toLowerCase();
      keys = [...keys, k].slice(-KONAMI.length);
      typed = (typed + (k.length === 1 ? k : "")).slice(-8);
      if (keys.join() === KONAMI.join()) { say(t.konami); rain(); }
      else if (typed.endsWith("sudo")) { typed = ""; say(t.sudo); }
      else if (typed.endsWith("404")) { typed = ""; goTo404(); }
    };
    addEventListener("keydown", onKey);

    return () => {
      removeEventListener("keydown", onKey);
      document.removeEventListener("visibilitychange", onVisibility);
      mark?.removeEventListener("click", wave);
      mark?.removeEventListener("pointerdown", holdStart);
      ["pointerup", "pointerleave", "pointercancel"].forEach((ev) => mark?.removeEventListener(ev, holdEnd));
      offTaps.forEach((off) => off());
      window.clearTimeout(hold);
      timers.forEach(window.clearTimeout);
      window.clearTimeout(msgTimer);
      msg?.remove();
    };
  }, [lang]);

  return null;
}
