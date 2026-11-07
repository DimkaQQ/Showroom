"use client";

import { useEffect } from "react";

// Progressive enhancement only: the page is complete without this.
export function Enhance() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-project]"));
    const frames = Array.from(document.querySelectorAll<HTMLElement>("[data-frame]"));
    let loadTimer: number | undefined;

    // The stage only exists from 1024px up; below that no live demo is loaded at all.
    const desktop = matchMedia("(min-width: 1024px)");

    // A demo reveals itself only after it reports that it rendered (see kit.js), so a demo that fails to load
    // leaves the screenshot in place instead of a blank window. Subdomains of this site are the only trusted senders.
    const onMessage = (e: MessageEvent) => {
      if (!e.data || e.data.showroom !== "ready") return;
      let host = "";
      try { host = new URL(e.origin).hostname; } catch { return; }
      if (host !== location.hostname && !host.endsWith("." + location.hostname)) return;
      document.querySelectorAll<HTMLIFrameElement>("[data-win] iframe").forEach((f) => {
        if (f.contentWindow === e.source) f.closest("[data-win]")?.classList.add("is-live");
      });
    };
    window.addEventListener("message", onMessage);

    const loadShot = (frame: HTMLElement) => {
      const img = frame.querySelector<HTMLImageElement>("img[data-src]");
      if (img) { img.src = img.dataset.src!; img.removeAttribute("data-src"); }
    };
    const loadLive = (frame: HTMLElement) => {
      if (!desktop.matches) return;
      const iframe = frame.querySelector<HTMLIFrameElement>("iframe");
      if (!iframe || iframe.src) return;
      iframe.src = iframe.dataset.src!;
    };
    const unloadLive = (frame: HTMLElement) => {
      const iframe = frame.querySelector<HTMLIFrameElement>("iframe");
      if (!iframe || !iframe.getAttribute("src")) return;
      iframe.removeAttribute("src");
      frame.querySelector("[data-win]")?.classList.remove("is-live", "is-touch");
      iframe.tabIndex = -1;
    };

    const show = (id: string) => {
      window.clearTimeout(loadTimer);
      const active = frames.findIndex((f) => f.dataset.frame === id);
      frames.forEach((f, i) => {
        const on = i === active;
        f.classList.toggle("is-active", on);
        f.inert = !on;
        if (Math.abs(i - active) <= 1) loadShot(f);
        else unloadLive(f);
        if (!on) f.querySelector("[data-try]")?.setAttribute("aria-pressed", "false");
        if (!on) f.querySelector("[data-win]")?.classList.remove("is-touch");
        if (on) loadTimer = window.setTimeout(() => loadLive(f), 700);
      });
    };
    frames.forEach((f, i) => { f.inert = i !== 0; if (i < 2) loadShot(f); });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) show((e.target as HTMLElement).dataset.project!);
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    items.forEach((el) => io.observe(el));

    // Scale the 1200px demo down to the window it sits in.
    const ro = new ResizeObserver((list) => {
      for (const r of list) (r.target as HTMLElement).style.setProperty("--s", String(r.contentRect.width / 1200));
    });
    document.querySelectorAll<HTMLElement>("[data-win]").forEach((w) => ro.observe(w));

    // "Try the demo": hand the pointer (and the keyboard) to the iframe, and take it back.
    const onTry = (e: Event) => {
      const btn = (e.target as HTMLElement).closest<HTMLButtonElement>("[data-try]");
      if (!btn) return;
      const on = btn.getAttribute("aria-pressed") !== "true";
      btn.setAttribute("aria-pressed", String(on));
      const scope = btn.parentElement;
      scope?.querySelector("[data-win]")?.classList.toggle("is-touch", on);
      const frame = scope?.querySelector("iframe");
      if (frame) { frame.tabIndex = on ? 0 : -1; if (on) frame.focus(); }
    };
    document.addEventListener("click", onTry);

    // Marquees can be paused (WCAG 2.2.2).
    const mq = document.querySelector<HTMLButtonElement>("[data-mq]");
    const onMq = () => {
      const still = document.documentElement.classList.toggle("still");
      if (mq) { mq.setAttribute("aria-pressed", String(still)); mq.textContent = still ? mq.dataset.off! : mq.dataset.on!; }
    };
    mq?.addEventListener("click", onMq);

    // Top bar hides while scrolling down and returns on the way up; the language menu closes on outside click / Esc.
    const bar = document.querySelector<HTMLElement>("[data-topbar]");
    let lastY = scrollY, tick = false;
    const onScroll = () => {
      if (tick) return;
      tick = true;
      requestAnimationFrame(() => {
        const y = scrollY, down = y > lastY && y > 120;
        bar?.classList.toggle("is-hidden", down && !bar.contains(document.activeElement));
        lastY = y; tick = false;
      });
    };
    const closeMenus = (e: Event) => {
      document.querySelectorAll<HTMLDetailsElement>("details.lang-menu[open]").forEach((d) => {
        if (e.type === "keydown" ? (e as KeyboardEvent).key === "Escape" : !d.contains(e.target as Node)) d.open = false;
      });
    };
    addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", closeMenus);
    document.addEventListener("keydown", closeMenus);

    return () => {
      removeEventListener("scroll", onScroll);
      document.removeEventListener("click", closeMenus);
      document.removeEventListener("keydown", closeMenus);
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("click", onTry);
      window.removeEventListener("message", onMessage);
      mq?.removeEventListener("click", onMq);
      window.clearTimeout(loadTimer);
    };
  }, []);

  return null;
}
