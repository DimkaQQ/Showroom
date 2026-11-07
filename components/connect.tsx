"use client";

import { useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { translations } from "@/lib/translations";

// Hero scene: "your systems" connect to the studio's hub and become what gets built. Click or tap a system to toggle it.
export function Connect({ lang }: { lang: Lang }) {
  const c = translations[lang].connect;
  const box = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(1000);
  const [on, setOn] = useState<boolean[]>(() => c.left.map(() => false));

  useEffect(() => {
    const ro = new ResizeObserver(([e]) => setW(Math.round(e.contentRect.width)));
    ro.observe(box.current!);
    return () => ro.disconnect();
  }, []);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setOn(c.left.map(() => true)); return; }
    const ts = c.left.map((_, i) => window.setTimeout(() => setOn((p) => p.map((v, j) => (j === i ? true : v))), 600 + i * 380));
    return () => ts.forEach(clearTimeout);
  }, [c.left]);

  const m = w < 640;
  const H = m ? 430 : 340, ch = m ? 40 : 46;
  const lw = m ? (w - 16 - 24) / 3 : 172, rw = m ? (w - 16 - 12) / 2 : 172;
  const hub = { x: w / 2, y: m ? 224 : H / 2 };
  const L = c.left.map((_, i) => (m ? { x: 8 + (i % 3) * (lw + 12), y: 6 + Math.floor(i / 3) * (ch + 12) } : { x: 0, y: 6 + i * ((H - 12 - ch) / 5) }));
  const R = c.right.map((_, i) => (m ? { x: 8 + (i % 2) * (rw + 12), y: H - 6 - 2 * ch - 12 + Math.floor(i / 2) * (ch + 12) } : { x: w - rw, y: 30 + i * ((H - 60 - ch) / 3) }));
  const n = on.filter(Boolean).length;
  const curve = (ax: number, ay: number, bx: number, by: number) => (m ? `M${ax} ${ay}C${ax} ${(ay + by) / 2} ${bx} ${(ay + by) / 2} ${bx} ${by}` : `M${ax} ${ay}C${ax + (bx - ax) / 2} ${ay} ${ax + (bx - ax) / 2} ${by} ${bx} ${by}`);
  const toggle = (i: number) => setOn((p) => p.map((v, j) => (j === i ? !v : v)));
  const fs = m ? 13 : 15;

  return (
    <div className="connect" ref={box}>
      <svg width={w} height={H} viewBox={`0 0 ${w} ${H}`} role="group" aria-label={c.yours}>
        {L.map((p, i) => {
          const a = m ? [p.x + lw / 2, p.y + ch] : [p.x + lw, p.y + ch / 2];
          const b = m ? [hub.x + (a[0] - hub.x) * 0.25, hub.y - 46] : [hub.x - 46, hub.y + (a[1] - hub.y) * 0.25];
          return <path key={"l" + i} className={`cn-line${on[i] ? " on" : ""}`} d={curve(a[0], a[1], b[0], b[1])} />;
        })}
        {R.map((p, i) => {
          const a = m ? [hub.x + (p.x + rw / 2 - hub.x) * 0.25, hub.y + 46] : [hub.x + 46, hub.y + (p.y + ch / 2 - hub.y) * 0.25];
          const b = m ? [p.x + rw / 2, p.y] : [p.x, p.y + ch / 2];
          return <path key={"r" + i} className={`cn-line${n > 0 ? " on" : ""}`} d={curve(a[0], a[1], b[0], b[1])} />;
        })}
        <circle className={`cn-hub${n > 0 ? " on" : ""}`} cx={hub.x} cy={hub.y} r={46} />
        <svg x={hub.x - 24} y={hub.y - 24} width={48} height={48} viewBox="0 0 64 64" aria-hidden="true">
          <path d="M16 47V17l16 20 16-20v30" fill="none" stroke="#f2b544" strokeWidth="7.5" strokeMiterlimit="4" />
        </svg>
        {L.map((p, i) => (
          <g key={"lc" + i} className={`cn-chip${on[i] ? " on" : ""}`} role="button" tabIndex={0} aria-pressed={on[i]} onClick={() => toggle(i)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(i); } }}>
            <rect x={p.x} y={p.y} width={lw} height={ch} rx={ch / 2} />
            <text x={p.x + lw / 2} y={p.y + ch / 2} textAnchor="middle" style={{ fontSize: fs }}>{c.left[i]}</text>
          </g>
        ))}
        {R.map((p, i) => (
          <g key={"rc" + i} className={`cn-chip out${n > 0 ? " on" : ""}`}>
            <rect x={p.x} y={p.y} width={rw} height={ch} rx={ch / 2} />
            <text x={p.x + rw / 2} y={p.y + ch / 2} textAnchor="middle" style={{ fontSize: fs }}>{c.right[i]}</text>
          </g>
        ))}
      </svg>
      <div className="cn-foot">
        <span>{c.yours}</span>
        <span aria-live="polite">{c.count.replace("{n}", String(n)).replace("{m}", String(on.length))}</span>
        <span>{c.builds}</span>
      </div>
      <p className="cn-hint">{c.hint}</p>
    </div>
  );
}
