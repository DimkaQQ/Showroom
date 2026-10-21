"use client";

import { useEffect } from "react";

// Progressive enhancement only: the page is complete without this.
export function Enhance() {
  useEffect(() => {
    const root = document.documentElement;

    const setLang = (l: string) => {
      root.setAttribute("data-lang", l);
      root.setAttribute("lang", l);
      try { localStorage.setItem("lang", l); } catch {}
    };
    setLang(root.getAttribute("data-lang") === "en" ? "en" : "ru");

    const toggle = document.querySelector<HTMLButtonElement>("[data-lang-toggle]");
    const onToggle = () => setLang(root.getAttribute("data-lang") === "en" ? "ru" : "en");
    toggle?.addEventListener("click", onToggle);

    // Scene: the pinned screen follows the project being read.
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-project]"));
    const frames = Array.from(document.querySelectorAll<HTMLElement>("[data-frame]"));
    let loadTimer: number | undefined;

    const loadLive = (frame: HTMLElement) => {
      const win = frame.querySelector<HTMLElement>("[data-win]");
      const iframe = frame.querySelector<HTMLIFrameElement>("iframe");
      if (!win || !iframe || iframe.src) return;
      iframe.addEventListener("load", () => win.classList.add("is-live"), { once: true });
      iframe.src = iframe.dataset.src!;
    };

    const show = (id: string) => {
      window.clearTimeout(loadTimer);
      frames.forEach((f) => {
        const on = f.dataset.frame === id;
        f.classList.toggle("is-active", on);
        if (!on) f.querySelector("[data-win]")?.classList.remove("is-touch");
        if (!on) f.querySelector("[data-try]")?.setAttribute("aria-pressed", "false");
        if (on) loadTimer = window.setTimeout(() => loadLive(f), 700);
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) show((e.target as HTMLElement).dataset.project!);
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    items.forEach((el) => io.observe(el));

    // Scale the 1440px demo down to the window it sits in.
    const ro = new ResizeObserver((list) => {
      for (const r of list) (r.target as HTMLElement).style.setProperty("--s", String(r.contentRect.width / 1440));
    });
    document.querySelectorAll<HTMLElement>("[data-win]").forEach((w) => ro.observe(w));

    // "Try the demo": hand the pointer to the iframe, and take it back.
    const onTry = (e: Event) => {
      const btn = (e.target as HTMLElement).closest<HTMLButtonElement>("[data-try]");
      if (!btn) return;
      const on = btn.getAttribute("aria-pressed") !== "true";
      btn.setAttribute("aria-pressed", String(on));
      btn.parentElement?.querySelector("[data-win]")?.classList.toggle("is-touch", on);
    };
    document.addEventListener("click", onTry);

    return () => {
      toggle?.removeEventListener("click", onToggle);
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("click", onTry);
      window.clearTimeout(loadTimer);
    };
  }, []);

  return null;
}
