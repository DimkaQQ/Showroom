"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { projects, siteConfig } from "@/lib/data";
import { hybrid } from "@/lib/hybrid";
import type { Lang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

type Item = { label: string; hint: string; run: () => void };

// Command palette: open with "/", Ctrl/Cmd K or the search button in the header. Everything stays reachable without it.
export function Palette({ lang }: { lang: Lang }) {
  const p = hybrid[lang].pal;
  const t = translations[lang];
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const last = useRef<HTMLElement | null>(null);

  const items = useMemo<Item[]>(() => {
    const reduce = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
    const to = (id: string) => () => document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    const sections: [string, string][] = [[t.nav.work, "work"], [t.nav.services, "services"], [p.builder, "build"], [t.nav.process, "process"], [t.nav.contact, "contact"]];
    const a: Item[] = sections.map(([label, id]) => ({ label: `${p.go} ${label}`, hint: "", run: to(id) }));
    projects.forEach((pr, i) => a.push({ label: `${p.project}: ${pr.name}`, hint: t.showroom.projects[i].tagline, run: to(pr.id) }));
    projects.forEach((pr) => a.push({ label: `${p.openDemo}: ${pr.name}`, hint: `${pr.subdomain}.${siteConfig.domain}`, run: () => window.open(`https://${pr.subdomain}.${siteConfig.domain}`, "_blank", "noopener") }));
    a.push({ label: p.copyEmail, hint: siteConfig.email, run: () => { navigator.clipboard?.writeText(siteConfig.email).catch(() => {}); to("contact")(); } });
    a.push({ label: p.openTg, hint: "t.me", run: () => window.open(siteConfig.telegram, "_blank", "noopener") });
    return a;
  }, [p, t]);

  const shown = useMemo(() => {
    const s = q.trim().toLowerCase();
    return items.filter((x) => !s || `${x.label} ${x.hint}`.toLowerCase().includes(s));
  }, [items, q]);

  const close = () => { setOpen(false); last.current?.focus?.(); };
  const run = (i: number) => { const x = shown[i]; close(); if (x) window.setTimeout(x.run, 30); };

  useEffect(() => {
    const kbd = document.querySelector<HTMLElement>("[data-kbd]");
    if (kbd) kbd.textContent = /Mac|iPhone|iPad/.test(navigator.platform || "") ? "⌘ K" : "Ctrl K";
    const onKey = (e: KeyboardEvent) => {
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test((document.activeElement as HTMLElement)?.tagName || "");
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) { e.preventDefault(); setOpen((o) => { if (!o) last.current = document.activeElement as HTMLElement; return !o; }); }
      else if (e.key === "/" && !typing && !open) { e.preventDefault(); last.current = document.activeElement as HTMLElement; setOpen(true); }
      else if (e.key === "Escape" && open) setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("[data-pal-open]")) { last.current = document.activeElement as HTMLElement; setOpen(true); }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("click", onClick); };
  }, [open]);

  useEffect(() => { if (open) { setQ(""); setSel(0); window.setTimeout(() => input.current?.focus(), 0); } }, [open]);
  useEffect(() => { setSel(0); }, [q]);

  if (!open) return null;
  return (
    <div className="pal" role="dialog" aria-modal="true" aria-label={p.search} onPointerDown={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div className="box">
        <input
          ref={input} type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder={p.placeholder} autoComplete="off" aria-controls="pal-list"
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(shown.length - 1, s + 1)); }
            else if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(0, s - 1)); }
            else if (e.key === "Enter") { e.preventDefault(); run(sel); }
          }}
        />
        <ul id="pal-list" role="listbox">
          {shown.length ? shown.map((x, i) => (
            <li key={x.label + i}>
              <button type="button" role="option" aria-selected={i === sel} onMouseEnter={() => setSel(i)} onClick={() => run(i)}>
                <span>{x.label}</span><small>{x.hint}</small>
              </button>
            </li>
          )) : <li className="empty">{p.nothing}</li>}
        </ul>
      </div>
    </div>
  );
}
