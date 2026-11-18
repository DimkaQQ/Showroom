"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { projects, siteConfig } from "@/lib/data";
import { hybrid } from "@/lib/hybrid";
import { pathFor, type Lang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

// Business types: index matches hybrid[lang].build.types. `demo` is a project id, `mods` index hybrid[lang].build.mods.
const TYPES: { demo: string | null; mods: number[] }[] = [
  { demo: "garage", mods: [0, 1, 2, 3, 7] },
  { demo: "clinic", mods: [0, 1, 7, 8] },
  { demo: "restaurant", mods: [0, 2, 3, 8, 9] },
  { demo: "spaces", mods: [0, 4, 5, 8] },
  { demo: "storage", mods: [3, 7, 8, 10] },
  { demo: "dizeltrade", mods: [2, 1, 10, 8] },
  { demo: "rentoworld", mods: [0, 4, 9, 10] },
  { demo: "tradinglearn", mods: [4, 8, 9] },
  { demo: "botfactory", mods: [6, 4, 10] },
  { demo: "rentoworld", mods: [9, 10] },
  { demo: null, mods: [] },
];
const STEPS = 4;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// One short flow instead of a form: pick the business, pick what it should do, add details, leave contacts, send.
// The finished brief is sent through the same /api/contact endpoint as before (it arrives in Telegram).
export function Wizard({ lang }: { lang: Lang }) {
  const b = hybrid[lang].build;
  const f = translations[lang].contact.form;
  const [step, setStep] = useState(0);
  const [type, setType] = useState<number | null>(null);
  const [mods, setMods] = useState<number[]>([]);
  const [notes, setNotes] = useState("");
  const [langs, setLangs] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reach, setReach] = useState("");
  const [website, setWebsite] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "ok" | "invalid" | "fail">("idle");
  const [bad, setBad] = useState<string[]>([]);
  const opened = useRef(Date.now());
  const title = useRef<HTMLHeadingElement>(null);
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);
  useEffect(() => { if (step > 0) title.current?.focus({ preventScroll: true }); }, [step]);

  const demo = type !== null && TYPES[type].demo ? projects.find((p) => p.id === TYPES[type].demo) : undefined;
  const demoUrl = demo ? `https://${demo.subdomain}.${siteConfig.domain}` : "";

  const brief = useMemo(() => {
    const lines: [string, string][] = [];
    if (type !== null) lines.push([b.kBusiness, b.types[type]]);
    lines.push([b.kNeeds, [...mods].sort((x, y) => x - y).map((i) => b.mods[i]).join(", ") || b.tbd]);
    if (demo) lines.push([b.kClosest, `${demo.name} (${demoUrl})`]);
    if (langs.trim()) lines.push([b.kLang, langs.trim()]);
    if (notes.trim()) lines.push([b.kNotes, notes.trim()]);
    if (reach.trim()) lines.push([b.kReach, reach.trim()]);
    return [b.briefHead, ...lines.map(([k, v]) => `${k}: ${v}`)].join("\n");
  }, [b, type, mods, notes, langs, reach, demo, demoUrl]);

  const pick = (i: number) => {
    setType(i);
    setMods(TYPES[i].mods);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStep(1), 380);
  };
  const toggle = (i: number) => setMods((m) => (m.includes(i) ? m.filter((x) => x !== i) : [...m, i]));

  async function send() {
    const invalid = [name.trim().length < 2 && "name", !EMAIL.test(email.trim()) && "email"].filter(Boolean) as string[];
    setBad(invalid);
    if (invalid.length) return setState("invalid");
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: name.trim(), email: email.trim(), topic: type !== null ? b.types[type] : "", message: brief,
          website, lang, page: location.pathname, took: Date.now() - opened.current,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState("ok");
    } catch {
      setState("fail");
    }
  }

  const status = state === "invalid" ? f.invalid : state === "fail" ? f.fail : "";
  const pct = state === "ok" ? 100 : ((step + 1) / STEPS) * 100;

  if (state === "ok") {
    return (
      <div className="wz wz-done" id="build" role="status">
        <svg className="wz-check" viewBox="0 0 64 64" width="88" height="88" aria-hidden="true"><path d="M16 47V17l16 20 16-20v30" fill="none" stroke="currentColor" strokeWidth="6.5" strokeMiterlimit="4" /></svg>
        <p className="wz-ok">{f.ok}</p>
        <div className="confetti" aria-hidden="true">
          {Array.from({ length: 28 }).map((_, i) => (
            <i key={i} style={{ "--x": `${(i * 37) % 100}%`, "--d": `${(i % 7) * 70}ms`, "--r": `${(i * 53) % 360}deg`, "--s": `${6 + (i % 4) * 3}px` } as React.CSSProperties} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="wz" id="build">
      <div className="wz-top">
        <h3 className="wz-title" tabIndex={-1} ref={title}>{b.title}</h3>
        <p className="wz-stepno" aria-live="polite">{b.step} {step + 1} {b.of} {STEPS}</p>
      </div>
      <div className="wz-bar" aria-hidden="true"><b style={{ width: `${pct}%` }} /></div>

      <div className="blueprint" aria-label={b.blueprint}>
        <div className="bp-shot">
          {demo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={demo.id} src={`/shots/${demo.id}-s.webp`} width={720} height={450} alt="" />
          ) : (
            <span className="bp-empty" aria-hidden="true" />
          )}
          <span className="scan" aria-hidden="true" />
        </div>
        <div className="bp-info">
          <p className="bp-name">{type !== null ? b.types[type] : b.blueprint}</p>
          <p className="bp-count">{mods.length} {b.modsWord}</p>
          <ul className="bp-tiles">
            {[...mods].sort((x, y) => x - y).map((i) => (
              <li key={i}>{b.mods[i]}</li>
            ))}
          </ul>
        </div>
      </div>

      {step === 0 && (
        <div className="wz-step" key="s0">
          <p className="step-t" id="q1">{b.q1}</p>
          <div className="chips" role="group" aria-labelledby="q1">
            {b.types.map((label, i) => (
              <button key={label} type="button" className="chip" aria-pressed={type === i} onClick={() => pick(i)}>{label}</button>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="wz-step" key="s1">
          <p className="step-t" id="q2">{b.q2}</p>
          <div className="chips" role="group" aria-labelledby="q2">
            {b.mods.map((label, i) => (
              <button key={label} type="button" className="chip" aria-pressed={mods.includes(i)} onClick={() => toggle(i)}>{label}</button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="wz-step" key="s2">
          <label className="flabel" htmlFor="wz-notes">{b.notesLabel}</label>
          <textarea id="wz-notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={b.notesPh} />
          <label className="flabel" htmlFor="wz-langs">{b.langLabel}</label>
          <input id="wz-langs" className="tx" type="text" value={langs} onChange={(e) => setLangs(e.target.value)} placeholder={b.langPh} />
        </div>
      )}

      {step === 3 && (
        <form className="wz-step" key="s3" noValidate onSubmit={(e) => { e.preventDefault(); void send(); }}>
          <p className="step-t">{b.q4}</p>
          <label className="flabel" htmlFor="wz-name">{f.name}</label>
          <input id="wz-name" className="tx" name="name" type="text" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} aria-invalid={bad.includes("name")} />
          <label className="flabel" htmlFor="wz-email">{f.email}</label>
          <input id="wz-email" className="tx" name="email" type="email" autoComplete="email" inputMode="email" required value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={bad.includes("email")} />
          <label className="flabel" htmlFor="wz-reach">{b.reach2}</label>
          <input id="wz-reach" className="tx" name="reach" type="text" autoComplete="off" value={reach} onChange={(e) => setReach(e.target.value)} />
          <div className="hp" aria-hidden="true">
            <label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} /></label>
          </div>
          <button className="btn btn-primary wz-send" type="submit" disabled={state === "sending"}>{state === "sending" ? f.sending : f.send}</button>
          <p className="cform-note">{f.consent} <a href={`${pathFor(lang)}privacy/`}>{f.privacy}</a></p>
        </form>
      )}

      <p className="cform-status" role="status" aria-live="polite">
        {status}
        {state === "fail" && (<>{" "}<a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></>)}
      </p>

      {step > 0 && (
        <div className="wz-actions">
          <button type="button" className="btn" onClick={() => setStep((s) => s - 1)}>{b.back}</button>
          {step < STEPS - 1 && <button type="button" className="btn btn-primary" onClick={() => setStep((s) => s + 1)}>{b.next}</button>}
        </div>
      )}
    </div>
  );
}
