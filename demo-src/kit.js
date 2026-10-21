/* Shared helpers for the Showroom demos (inlined by tools/build-demos.mjs). */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const NF = new Intl.NumberFormat('ru-RU');
const fmt = (n) => NF.format(Math.round(n));
const fmtD = (n, d = 1) => new Intl.NumberFormat('ru-RU', { minimumFractionDigits: d, maximumFractionDigits: d }).format(n);
const MINUS = '−';
const signed = (n, f = fmt) => (n > 0 ? '+' : n < 0 ? MINUS : '') + f(Math.abs(n));

const ICONS = {
  home: 'M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10',
  box: 'M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8',
  truck: 'M2 6h12v10H2zM14 10h4l3 3v3h-7M4 17.5a1.5 1.5 0 103 0 1.5 1.5 0 10-3 0M16 17.5a1.5 1.5 0 103 0 1.5 1.5 0 10-3 0',
  drop: 'M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z',
  chart: 'M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6',
  users: 'M16 20v-1.5a3.5 3.5 0 00-3.5-3.5h-5A3.5 3.5 0 004 18.5V20M10 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM20 20v-1.5a3.5 3.5 0 00-2.5-3.3M15.5 4.2a3.5 3.5 0 010 6.6',
  sliders: 'M4 7h10M18 7h2M4 17h2M10 17h10M14 5v4M6 15v4',
  calendar: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',
  bell: 'M6 17v-6a6 6 0 0112 0v6l2 2H4zM10 21h4',
  search: 'M11 18a7 7 0 100-14 7 7 0 000 14zM20 20l-4-4',
  plus: 'M12 5v14M5 12h14',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  clock: 'M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2',
  pin: 'M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
  list: 'M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01',
  grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  chat: 'M4 5h16v11H9l-5 4z',
  star: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z',
  shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  x: 'M6 6l12 12M18 6L6 18',
  alert: 'M12 4l9 16H3zM12 10v4M12 17h.01',
  coin: 'M12 21a9 9 0 100-18 9 9 0 000 18zM14.5 9.5c-.5-1-1.5-1.5-2.7-1.5-1.5 0-2.8.8-2.8 2s1.2 1.7 3 2 3 .8 3 2.2-1.4 2-2.9 2c-1.3 0-2.4-.6-2.9-1.7M12 6.5V8M12 16v1.5',
  file: 'M6 3h8l4 4v14H6zM14 3v4h4M9 13h6M9 17h6',
  wrench: 'M14.5 6.5a4 4 0 005 5L21 13l-8 8-5-5 8-8zM3 21l5-5',
  tag: 'M3 12V4h8l10 10-8 8zM7.5 8.5h.01',
  play: 'M7 4l13 8-13 8z',
  bot: 'M5 9h14v10H5zM12 5v4M9 14h.01M15 14h.01M3 13v3M21 13v3',
  flame: 'M12 3c1 4 5 5 5 10a5 5 0 01-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z',
  heart: 'M12 20s-8-5-8-11a4.5 4.5 0 018-2.5A4.5 4.5 0 0120 9c0 6-8 11-8 11z',
  globe: 'M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18',
  map: 'M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v14M15 6v14',
  lock: 'M6 11h12v9H6zM8 11V8a4 4 0 018 0v3',
  edit: 'M4 20h4L19 9l-4-4L4 16zM13 7l4 4',
  trash: 'M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13',
  copy: 'M9 9h11v11H9zM5 15V4h11',
  more: 'M5 12h.01M12 12h.01M19 12h.01',
  up: 'M6 15l6-6 6 6',
  down: 'M6 9l6 6 6-6',
  eye: 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 15a3 3 0 100-6 3 3 0 000 6z',
  bag: 'M5 8h14l-1 12H6zM9 8V6a3 3 0 016 0v2',
  utensils: 'M7 3v8M4 3v5a3 3 0 006 0V3M7 11v10M17 3c-2 2-3 5-3 8h3v10',
  graduation: 'M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5',
  zap: 'M13 3L5 14h6l-1 7 8-11h-6z',
};
const ic = (name, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS[name] || ICONS.grid}"/></svg>`;

let toastTimer;
function toast(msg) {
  let t = $('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
  t.textContent = msg; void t.offsetWidth; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}
function modal(html, onMount) {
  closeModal();
  const s = document.createElement('div');
  s.className = 'scrim'; s.id = 'scrim';
  s.innerHTML = `<div class="modal" role="dialog" aria-modal="true">${html}</div>`;
  s.addEventListener('mousedown', (e) => { if (e.target === s) closeModal(); });
  document.body.appendChild(s);
  const f = $('input,select,textarea', s); if (f) f.focus();
  if (onMount) onMount(s);
  return s;
}
function closeModal() { const s = $('#scrim'); if (s) s.remove(); }
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

/* charts: drawn in SVG at the width they are given, redrawn on resize */
const NS = 'http://www.w3.org/2000/svg';
const charts = [];
function chart(el, draw) {
  const run = () => { const w = Math.max(160, el.clientWidth); el.innerHTML = draw(w); };
  charts.push({ el, run }); run();
}
let rz; window.addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(() => charts.forEach((c) => { if (document.contains(c.el)) c.run(); }), 120); });
const niceMax = (m) => { const mag = 10 ** Math.floor(Math.log10(m)); for (const k of [1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]) if (k * mag >= m * 1.02) return k * mag; return 10 * mag; };

/* bars: values with a marked bar; labels under, 3 faint gridlines */
function barsSVG(w, { labels, values, mark = values.length - 1, h = 190, fmtV = fmt, unit = '' }) {
  const L = 36, B = 26, T = 8, ph = h - B - T, pw = w - L - 4;
  const max = niceMax(Math.max(...values)), bw = Math.min(46, pw / values.length * 0.56), step = pw / values.length;
  let g = '';
  for (let i = 0; i <= 3; i++) { const v = max / 3 * i, y = T + ph - (v / max) * ph; g += `<line class="grid-l" x1="${L}" x2="${w}" y1="${y}" y2="${y}"/><text x="${L - 8}" y="${y + 4}" text-anchor="end">${fmtV(v)}</text>`; }
  const bars = values.map((v, i) => {
    const x = L + step * i + (step - bw) / 2, bh = Math.max(2, (v / max) * ph), y = T + ph - bh;
    const on = Array.isArray(mark) ? mark.includes(i) : i === mark;
    return `<g><rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="2" fill="var(--accent)" opacity="${on ? 1 : .38}"><title>${esc(labels[i])}: ${fmtV(v)} ${unit}</title></rect>
      <text x="${x + bw / 2}" y="${h - 8}" text-anchor="middle" ${on ? 'style="fill:var(--text)"' : ''}>${esc(labels[i])}</text>
      ${on ? `<text x="${x + bw / 2}" y="${y - 6}" text-anchor="middle" style="fill:var(--text);font-weight:600">${fmtV(v)}</text>` : ''}</g>`;
  }).join('');
  return `<svg class="chart" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${esc(labels.map((l, i) => l + ' ' + fmtV(values[i])).join(', '))}">${g}${bars}</svg>`;
}
/* line: one series, 2px, no markers, end value labelled */
function lineSVG(w, { labels, values, h = 190, fmtV = fmt, xAt }) {
  const L = 44, B = 26, T = 12, R = 44, ph = h - B - T, pw = w - L - R;
  const max = niceMax(Math.max(...values)), n = values.length;
  const X = (i) => L + (pw * i) / (n - 1), Y = (v) => T + ph - (v / max) * ph;
  let g = '';
  for (let i = 0; i <= 3; i++) { const v = max / 3 * i, y = Y(v); g += `<line class="grid-l" x1="${L}" x2="${w - R + 20}" y1="${y}" y2="${y}"/><text x="${L - 8}" y="${y + 4}" text-anchor="end">${fmtV(v)}</text>`; }
  const d = values.map((v, i) => `${i ? 'L' : 'M'}${X(i).toFixed(1)},${Y(v).toFixed(1)}`).join(' ');
  const xs = (xAt || labels.map((_, i) => i)).map((i) => `<text x="${X(i)}" y="${h - 8}" text-anchor="middle">${esc(labels[i])}</text>`).join('');
  const last = values[n - 1];
  return `<svg class="chart" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${esc('Динамика: ' + labels.map((l, i) => l + ' ' + fmtV(values[i])).join(', '))}">${g}<path d="${d}" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
    <text x="${X(n - 1) + 8}" y="${Y(last) + 4}" style="fill:var(--text);font-weight:600">${fmtV(last)}</text>${xs}</svg>`;
}
/* ring: progress with the total inside */
function ringSVG(size, { value, label, sub }) {
  const r = size / 2 - 8, c = 2 * Math.PI * r;
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="${esc(label + ' ' + (sub || ''))}"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--raised)" stroke-width="8"/>
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--accent)" stroke-width="8" stroke-linecap="round" stroke-dasharray="${c * value} ${c}" transform="rotate(-90 ${size / 2} ${size / 2})"/>
    <text x="50%" y="${sub ? '48%' : '52%'}" text-anchor="middle" style="font:700 ${size / 4.4}px var(--display);fill:var(--text)">${esc(label)}</text>${sub ? `<text x="50%" y="62%" text-anchor="middle" style="font:12px var(--font);fill:var(--muted)">${esc(sub)}</text>` : ''}</svg>`;
}
const barRow = (label, pct, right, sub) => `<div class="brow"><div class="brow-t"><span>${label}${sub ? ` <em>${sub}</em>` : ''}</span><b>${right}</b></div><div class="bar"><i style="width:${Math.max(0, Math.min(100, pct))}%"></i></div></div>`;

/* shell helpers */
function setNav(page) {
  $$('[data-page]').forEach((a) => a.classList.toggle('on', a.dataset.page === page));
}
