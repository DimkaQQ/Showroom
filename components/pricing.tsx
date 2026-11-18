"use client";

import { useEffect, useMemo, useState } from "react";
import pricing from "@/lib/pricing.json";
import { pricingText } from "@/lib/pricing-text";
import type { Lang } from "@/lib/i18n";

type Region = "cis" | "intl";
const SYMBOL: Record<string, string> = { KZT: "₸", RUB: "₽", EUR: "€", USD: "$" };
// Deterministic formatting (no Intl): the server and the browser must print exactly the same text.
const group = (n: number) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0");
const makeMoney = (lang: Lang, cur: string) => ({
  format: (n: number) => (lang === "en" && (cur === "EUR" || cur === "USD") ? `${SYMBOL[cur]}${group(n)}` : `${group(n)}\u00a0${SYMBOL[cur]}`),
});
const DEFAULT_REGION: Record<Lang, Region> = { en: "intl", de: "intl", fr: "intl", sk: "intl", cs: "intl", ru: "cis", kk: "cis" };
const KEY = "mirelli.price";

// Indicative prices from lib/pricing.json, by region (Kazakhstan and CIS, or international) and currency.
// The default follows the page language; the choice is remembered in this browser.
export function Pricing({ lang }: { lang: Lang }) {
  const t = pricingText[lang];
  const [region, setRegion] = useState<Region>(DEFAULT_REGION[lang]);
  const [cur, setCur] = useState<string>(pricing.regions[DEFAULT_REGION[lang]].default);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return;
      const s = JSON.parse(raw) as { region?: Region; cur?: string };
      if (s.region && (s.region === "cis" || s.region === "intl")) {
        setRegion(s.region);
        const list = pricing.regions[s.region].currencies;
        setCur(s.cur && list.includes(s.cur) ? s.cur : pricing.regions[s.region].default);
      }
    } catch { /* storage may be unavailable; the defaults are fine */ }
  }, []);

  const save = (r: Region, c: string) => { try { localStorage.setItem(KEY, JSON.stringify({ region: r, cur: c })); } catch { /* ignore */ } };
  const pickRegion = (r: Region) => { const c = pricing.regions[r].default; setRegion(r); setCur(c); save(r, c); };
  const pickCur = (c: string) => { setCur(c); save(region, c); };

  const money = useMemo(() => makeMoney(lang, cur), [lang, cur]);
  const range = (id: string) => {
    const it = pricing.items.find((x) => x.id === id)!;
    const [a, b] = (it.prices as Record<string, number[]>)[cur];
    return lang === "kk" ? `${money.format(a)} ${t.from} ${money.format(b)} ${t.to}` : `${t.from} ${money.format(a)} ${t.to} ${money.format(b)}`;
  };
  const rows = pricing.items.filter((i) => i.id !== "start");
  const startItem = pricing.items.find((i) => i.id === "start")!;
  const startText = t.items.start as { title: string; text: string } | undefined;

  return (
    <section className="sec pricing" id="pricing" aria-labelledby="pricing-h">
      <div className="wrap">
        <div className="head">
          <h2 id="pricing-h">{t.title}</h2>
          <p className="sub">{t.sub}</p>
        </div>

        <div className="pr-controls">
          <div className="seg" role="group" aria-label={t.regionLabel}>
            {(["cis", "intl"] as Region[]).map((r) => (
              <button key={r} type="button" className="chip" aria-pressed={region === r} onClick={() => pickRegion(r)}>{t.regions[r]}</button>
            ))}
          </div>
          <div className="seg" role="group" aria-label={t.currencyLabel}>
            {pricing.regions[region].currencies.map((c) => (
              <button key={c} type="button" className="chip" aria-pressed={cur === c} onClick={() => pickCur(c)}>{c}</button>
            ))}
          </div>
        </div>
        <p className="pr-note">{t.regionNote[region]}</p>

        <ul className="pr-list">
          {rows.map((it) => (
            <li key={it.id} className="pr-row">
              <div className="pr-main">
                <h3>{t.items[it.id].title}</h3>
                <p>{t.items[it.id].text}</p>
              </div>
              <div className="pr-meta">
                <p className="pr-price">{range(it.id)}{it.id === "support" ? ` ${t.perMonth}` : ""}</p>
                <p className="pr-time">{t.timeLabel}: {t.times[it.time]}</p>
              </div>
            </li>
          ))}
        </ul>

        {startText && (
          <div className="pr-start">
            <div><h3>{t.startLabel}: {startText.title}</h3><p>{startText.text}</p></div>
            <p className="pr-price">{range("start")} <span className="pr-time">{t.timeLabel}: {t.times[startItem.time]}</span></p>
          </div>
        )}

        <p className="pr-foot">{t.note}</p>
        <p className="pr-cta"><a className="btn btn-primary" href="#build">{t.cta}</a></p>

        <Calculator lang={lang} cur={cur} money={money} />
      </div>
    </section>
  );
}

function Calculator({ lang, cur, money }: { lang: Lang; cur: string; money: { format: (n: number) => string } }) {
  const c = pricingText[lang].calc;
  const [bookings, setBookings] = useState(40);
  const [noshow, setNoshow] = useState(10);
  const [value, setValue] = useState(cur === "KZT" ? 15000 : cur === "RUB" ? 3000 : 40);
  const [cut, setCut] = useState(50);
  const [hours, setHours] = useState(5);
  useEffect(() => { setValue(cur === "KZT" ? 15000 : cur === "RUB" ? 3000 : 40); }, [cur]);

  const weeks = 52 / 12;
  const lost = bookings * (noshow / 100) * value * weeks;
  const saved = lost * (cut / 100);
  const hoursBack = hours * weeks * (cut / 100);
  const num = (v: string) => { const n = Number(v.replace(",", ".")); return Number.isFinite(n) && n >= 0 ? n : 0; };

  return (
    <div className="calc" aria-labelledby="calc-h">
      <h3 id="calc-h">{c.title}</h3>
      <p className="sub">{c.sub}</p>
      <div className="calc-grid">
        <label><span>{c.bookings}</span><input className="tx" inputMode="decimal" value={bookings} onChange={(e) => setBookings(num(e.target.value))} /></label>
        <label><span>{c.noshow}</span><input className="tx" inputMode="decimal" value={noshow} onChange={(e) => setNoshow(Math.min(100, num(e.target.value)))} /></label>
        <label><span>{c.value} ({cur})</span><input className="tx" inputMode="decimal" value={value} onChange={(e) => setValue(num(e.target.value))} /></label>
        <label><span>{c.cut}</span><input className="tx" inputMode="decimal" value={cut} onChange={(e) => setCut(Math.min(100, num(e.target.value)))} /></label>
        <label><span>{c.hours}</span><input className="tx" inputMode="decimal" value={hours} onChange={(e) => setHours(num(e.target.value))} /></label>
      </div>
      <div className="calc-out" aria-live="polite">
        <div><p className="calc-k">{c.lost}</p><p className="calc-v">{money.format(Math.round(lost))}</p></div>
        <div><p className="calc-k">{c.saved}</p><p className="calc-v acc">{money.format(Math.round(saved))}</p></div>
        <div><p className="calc-k">{c.hoursBack}</p><p className="calc-v acc">{Math.round(hoursBack)}</p></div>
      </div>
      <p className="calc-note">{c.disclaimer} {c.hoursNote}</p>
    </div>
  );
}
