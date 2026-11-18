"use client";

import { useEffect, useState } from "react";
import pricing from "@/lib/pricing.json";
import { calcText } from "@/lib/calc-text";
import type { Lang } from "@/lib/i18n";

// Typical tasks per sector (indexes into calcText.tasks). Presets only pre-tick; everything stays editable.
const PRESETS: number[][] = [[1, 2, 3, 5, 6], [0, 1, 4, 7], [1, 3, 5, 6], [1, 2, 3, 7], []];
const HOURLY: Record<string, number> = { KZT: 3000, RUB: 600, EUR: 15, USD: 16 };
const DEFAULT_H = 2;
const WEEKS = 52 / 12;
const num = (v: string) => { const n = Number(v.replace(",", ".")); return Number.isFinite(n) && n >= 0 ? n : 0; };

export function Calculator({ lang, cur, money }: { lang: Lang; cur: string; money: { format: (n: number) => string } }) {
  const c = calcText[lang];
  const [sector, setSector] = useState(-1);
  const [hours, setHours] = useState<Record<number, number>>({});
  const [hourly, setHourly] = useState(HOURLY[cur] ?? 15);
  const [loss, setLoss] = useState(0);
  const [cut, setCut] = useState(50);
  useEffect(() => { setHourly(HOURLY[cur] ?? 15); }, [cur]);

  const pick = (i: number) => {
    setSector(i);
    const h: Record<number, number> = {};
    PRESETS[i].forEach((t) => { h[t] = DEFAULT_H; });
    setHours(h);
  };
  const toggle = (t: number) => setHours((p) => { const n = { ...p }; if (t in n) delete n[t]; else n[t] = DEFAULT_H; return n; });

  const weekly = Object.values(hours).reduce((a, b) => a + b, 0);
  const monthHours = weekly * WEEKS;
  const cost = monthHours * hourly + loss;
  const freed = cost * (cut / 100);
  const back = monthHours * (cut / 100);
  const booking = pricing.items.find((i) => i.id === "booking")!;
  const [pa, pb] = (booking.prices as Record<string, number[]>)[cur];
  const hasData = Object.keys(hours).length > 0;
  const m1 = freed > 0 ? Math.max(1, Math.round(pa / freed)) : 0;
  const m2 = freed > 0 ? Math.max(1, Math.round(pb / freed)) : 0;

  return (
    <div className="calc" aria-labelledby="calc-h">
      <h3 id="calc-h">{c.title}</h3>
      <p className="sub">{c.sub}</p>

      <p className="calc-q">{c.sectorQ}</p>
      <div className="seg calc-sectors" role="group" aria-label={c.sectorQ}>
        {c.sectors.map((s, i) => (
          <button key={i} type="button" className="chip" aria-pressed={sector === i} onClick={() => pick(i)}>{s}</button>
        ))}
      </div>

      <p className="calc-q">{c.tasksQ}</p>
      <ul className="calc-tasks">
        {c.tasks.map((label, t) => {
          const on = t in hours;
          return (
            <li key={t} className={on ? "on" : ""}>
              <label className="calc-check">
                <input type="checkbox" checked={on} onChange={() => toggle(t)} />
                <span>{label}</span>
              </label>
              {on && (
                <label className="calc-h">
                  <input className="tx" inputMode="decimal" aria-label={`${label}: ${c.perWeek}`} value={hours[t]} onChange={(e) => setHours((p) => ({ ...p, [t]: Math.min(168, num(e.target.value)) }))} />
                  <span>{c.perWeek}</span>
                </label>
              )}
            </li>
          );
        })}
      </ul>

      <div className="calc-grid">
        <label><span>{c.hourly} ({cur})</span><input className="tx" inputMode="decimal" value={hourly} onChange={(e) => setHourly(num(e.target.value))} /></label>
        <label><span>{c.lossLabel} ({cur})</span><input className="tx" inputMode="decimal" value={loss} onChange={(e) => setLoss(num(e.target.value))} /><small>{c.lossHint}</small></label>
        <label><span>{c.cutLabel}</span><input className="tx" inputMode="decimal" value={cut} onChange={(e) => setCut(Math.min(100, num(e.target.value)))} /></label>
      </div>

      {hasData ? (
        <>
          <div className="calc-out" aria-live="polite">
            <div><p className="calc-k">{c.outHours}</p><p className="calc-v">{Math.round(monthHours)}</p></div>
            <div><p className="calc-k">{c.outCost}</p><p className="calc-v">{money.format(Math.round(cost))}</p></div>
            <div><p className="calc-k">{c.outFreed}</p><p className="calc-v acc">{money.format(Math.round(freed))}</p></div>
            <div><p className="calc-k">{c.outHoursFree}</p><p className="calc-v acc">{Math.round(back)}</p></div>
          </div>
          <p className="calc-note">
            {c.compare} {money.format(pa)} – {money.format(pb)}.
            {m1 > 0 && <> {c.payback} {m1 === m2 ? m1 : `${m1}–${m2}`} {c.months}.</>}
          </p>
          <p className="pr-cta"><a className="btn btn-primary" href="#build">{c.cta}</a></p>
        </>
      ) : (
        <p className="calc-note calc-empty">{c.empty}</p>
      )}
      <p className="calc-note">{c.disclaimer}</p>
    </div>
  );
}
