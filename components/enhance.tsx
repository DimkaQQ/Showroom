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
    const show = (id: string) =>
      frames.forEach((f) => f.classList.toggle("is-active", f.dataset.frame === id));

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) show((e.target as HTMLElement).dataset.project!);
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    items.forEach((el) => io.observe(el));

    return () => {
      toggle?.removeEventListener("click", onToggle);
      io.disconnect();
    };
  }, []);

  return null;
}
