"use client";

import { useMemo, useState } from "react";
import { projects, siteConfig } from "@/lib/data";
import { hybrid } from "@/lib/hybrid";
import type { Lang } from "@/lib/i18n";

// Business types: index matches hybrid[lang].build.types. `demo` is a project id, `mods` index hybrid[lang].build.mods.
const TYPES: { demo: string | null; mods: number[] }[] = [
  { demo: "garage", mods: [0, 1, 2, 3, 7] },
  { demo: "clinic", mods: [0, 1, 7, 8] },
  { demo: "restaurant", mods: [0, 2, 3, 8, 9] },
  { demo: "spaces", mods: [0, 4, 5, 8] },
  { demo: "storage", mods: [3, 7, 8, 10] },
  { demo: "shipter", mods: [2, 1, 10, 8] },
  { demo: "rentoworld", mods: [0, 4, 9, 10] },
  { demo: "tradinglearn", mods: [4, 8, 9] },
  { demo: "botfactory", mods: [6, 4, 10] },
  { demo: "rentoworld", mods: [9, 10] },
  { demo: null, mods: [] },
];

export function Builder({ lang }: { lang: Lang }) {
  const b = hybrid[lang].build;
  const [type, setType] = useState(0);
  const [mods, setMods] = useState<number[]>(TYPES[0].mods);
  const [notes, setNotes] = useState("");
  const [langs, setLangs] = useState("");
  const [status, setStatus] = useState("");

  const demo = TYPES[type].demo ? projects.find((p) => p.id === TYPES[type].demo) : undefined;
  const demoUrl = demo ? `https://${demo.subdomain}.${siteConfig.domain}` : "";

  const lines = useMemo(() => {
    const l: [string, string][] = [
      [b.kBusiness, b.types[type]],
      [b.kNeeds, [...mods].sort((x, y) => x - y).map((i) => b.mods[i]).join(", ") || b.tbd],
    ];
    if (demo) l.push([b.kClosest, `${demo.name} (${demoUrl})`]);
    if (langs.trim()) l.push([b.kLang, langs.trim()]);
    if (notes.trim()) l.push([b.kNotes, notes.trim()]);
    return l;
  }, [b, type, mods, notes, langs, demo, demoUrl]);

  const text = [b.briefHead, ...lines.map(([k, v]) => `${k}: ${v}`)].join("\n");

  const pick = (i: number) => { setType(i); setMods(TYPES[i].mods); };
  const toggle = (i: number) => setMods((m) => (m.includes(i) ? m.filter((x) => x !== i) : [...m, i]));

  async function copy() {
    const done = () => { setStatus(b.copied); window.setTimeout(() => setStatus(""), 3500); };
    try { await navigator.clipboard.writeText(text); done(); }
    catch {
      const ta = document.createElement("textarea");
      ta.value = text; ta.style.cssText = "position:fixed;left:-9999px"; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); } catch { setStatus(b.copyFail); }
      ta.remove();
    }
  }

  return (
    <section className="sec build" id="build" aria-labelledby="build-h">
      <div className="wrap">
        <div className="head">
          <h2 id="build-h">{b.title}</h2>
          <p className="sub">{b.sub}</p>
        </div>
        <div className="builder">
          <div className="panel">
            <div className="group">
              <p className="step-t" id="q1">{b.q1}</p>
              <div className="chips" role="group" aria-labelledby="q1">
                {b.types.map((label, i) => (
                  <button key={label} type="button" className="chip" aria-pressed={type === i} onClick={() => pick(i)}>{label}</button>
                ))}
              </div>
            </div>
            <div className="group">
              <p className="step-t" id="q2">{b.q2}</p>
              <div className="chips" role="group" aria-labelledby="q2">
                {b.mods.map((label, i) => (
                  <button key={label} type="button" className="chip" aria-pressed={mods.includes(i)} onClick={() => toggle(i)}>{label}</button>
                ))}
              </div>
            </div>
            <div className="group">
              <label className="flabel" htmlFor="bnotes">{b.notesLabel}</label>
              <textarea id="bnotes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={b.notesPh} />
            </div>
            <div className="group">
              <label className="flabel" htmlFor="blang">{b.langLabel}</label>
              <input id="blang" className="tx" type="text" value={langs} onChange={(e) => setLangs(e.target.value)} placeholder={b.langPh} />
            </div>
          </div>
          <div className="out">
            <div className="brief" aria-live="polite">
              <b>{b.briefHead}</b>{"\n"}
              {lines.map(([k, v]) => (
                <span key={k}><b>{k}:</b> {v}{"\n"}</span>
              ))}
            </div>
            <div className="near">
              {demo ? (<><p>{b.near}: {demo.name}</p><a href={demoUrl} target="_blank" rel="nofollow noopener noreferrer">{b.tryFirst}</a></>) : (<p>{b.noDemo}</p>)}
            </div>
            <div className="row">
              <button type="button" className="btn btn-primary" onClick={copy}>{b.copyBrief}</button>
              <a className="btn" href={siteConfig.telegram} target="_blank" rel="me noopener noreferrer">{b.sendTg}</a>
            </div>
            <p className="status" role="status">{status}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
