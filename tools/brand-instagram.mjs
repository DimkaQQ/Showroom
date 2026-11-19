// First nine Instagram posts (4:5, 1080x1350) in the site's style. Usage: node tools/brand-instagram.mjs  ->  public/brand/ig/post-01..09.png
// Numbers on the case posts are the results confirmed by the clients (see lib/results.ts). No client is named.
import { createRequire } from "node:module";
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import os from "node:os";

const { chromium } = createRequire(import.meta.url)("playwright");
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const A = "#2ee6c5", BG = "#050507";
const font = (f) => pathToFileURL(path.join(root, "tools", "brand-fonts", f)).href;
const mark = (s) => `<svg width="${s}" height="${s}" viewBox="0 0 64 64"><path d="M16 47V17l16 20 16-20v30" fill="none" stroke="${A}" stroke-width="6.5" stroke-linejoin="miter" stroke-miterlimit="4"/></svg>`;
const ic = (inner) => `<svg width="150" height="150" viewBox="0 0 64 64" fill="none" stroke="${A}" stroke-width="3.2" stroke-linecap="square">${inner}</svg>`;
const web = ic('<rect x="8" y="12" width="48" height="40"/><path d="M8 24h48"/><path d="M15 18h2M21 18h2"/><path d="M16 34h20M16 42h12"/><rect x="40" y="32" width="10" height="12"/>');
const bot = ic('<rect x="12" y="20" width="40" height="30"/><path d="M32 20v-8"/><rect x="29" y="8" width="6" height="4"/><path d="M22 32v4M42 32v4"/><path d="M24 43h16"/><path d="M6 30v10M58 30v10"/>');
const code = ic('<path d="M22 20L10 32l12 12"/><path d="M42 20l12 12-12 12"/><path d="M36 14L28 50"/>');

const css = `
@font-face{font-family:"Unbounded";src:url("${font("Unbounded.woff2")}") format("woff2");font-weight:200 900}
@font-face{font-family:"Onest";src:url("${font("Onest.woff2")}") format("woff2");font-weight:100 900}
*{box-sizing:border-box;margin:0;padding:0}
body{width:1080px;height:1350px;overflow:hidden;color:#f3f3f5;font-family:"Onest",sans-serif;position:relative;background:radial-gradient(60% 45% at 50% 38%, ${A}26, transparent 70%),${BG}}
.u{font-family:"Unbounded","Onest",sans-serif;font-weight:500;letter-spacing:-.035em}
.top{position:absolute;left:84px;top:84px;display:flex;align-items:center;gap:16px;font-size:30px;color:#c8c8d0}
.foot{position:absolute;left:84px;right:84px;bottom:84px;display:flex;justify-content:space-between;font-size:28px;color:#8b8b95}
.main{position:absolute;left:84px;right:84px;top:190px;bottom:190px;display:flex;flex-direction:column;justify-content:center}
.acc{color:${A}}
.big{font-size:118px;line-height:1.04}
.sub{font-size:40px;color:#c8c8d0;margin-top:40px;line-height:1.35}
.cards{display:grid;grid-template-columns:1fr;gap:28px}
.card{display:flex;align-items:center;gap:36px;padding:34px 40px;border:1px solid rgba(243,243,245,.2);background:rgba(12,12,17,.7);border-radius:4px}
.card b{font-family:"Unbounded";font-weight:500;font-size:46px;letter-spacing:-.03em}
.steps{display:grid;gap:26px}
.step{display:flex;gap:34px;align-items:baseline;padding-bottom:26px;border-bottom:1px solid rgba(243,243,245,.14)}
.step i{font-style:normal;font-family:"Unbounded";color:${A};font-size:44px;width:70px}
.step span{font-size:46px;line-height:1.2}
.names{display:flex;flex-wrap:wrap;gap:16px;margin-top:44px}
.names span{padding:16px 26px;border:1px solid rgba(243,243,245,.22);border-radius:4px;font-size:34px;background:rgba(12,12,17,.7)}
.num{font-size:240px;line-height:1;color:${A}}
`;
const page = (inner, n) => `<!doctype html><meta charset="utf-8"><style>${css}</style>
<div class="top">${mark(46)}<span class="u">Mirelli Studio</span></div>${inner}<div class="foot"><span>mirelli.eu</span><span>${n} / 9</span></div>`;

const posts = [
  `<div class="main"><div class="u big">We build<br>the <span class="acc">impossible.</span></div><div class="sub">Websites. Telegram bots. Custom software.<br>For businesses, anywhere in the world.</div></div>`,
  `<div class="main"><div class="u big" style="font-size:100px">12 live demos.<br><span class="acc">Click any.</span></div><div class="names"><span>Servisio</span><span>Clinio</span><span>Gatehouse</span><span>RestOS</span><span>Stockroom</span><span>DizelTrade</span><span>RentoWorld</span><span>TradingLearn</span><span>BotFactory</span><span>+3</span></div><div class="sub" style="font-size:34px">Sample data, real engineering.<br>Links in bio.</div></div>`,
  `<div class="main"><div class="u" style="font-size:78px;margin-bottom:56px">What we build</div><div class="cards"><div class="card">${web}<b>Websites</b></div><div class="card">${bot}<b>Telegram bots</b></div><div class="card">${code}<b>Software</b></div></div></div>`,
  `<div class="main"><div class="u" style="font-size:78px;margin-bottom:56px">How we work</div><div class="steps"><div class="step"><i>01</i><span>Tell us the problem</span></div><div class="step"><i>02</i><span>Written scope and price</span></div><div class="step"><i>03</i><span>A working version every week</span></div><div class="step" style="border:0"><i>04</i><span>Launch and support</span></div></div></div>`,
  `<div class="main"><div class="sub" style="margin:0 0 20px">Car service</div><div class="u num">−40%</div><div class="u" style="font-size:64px;margin-top:20px">no-shows</div><div class="sub">and <b class="acc">+30%</b> bookings after online booking with reminders.</div></div>`,
  `<div class="main"><div class="sub" style="margin:0 0 20px">Fuel distribution</div><div class="u num">−60%</div><div class="u" style="font-size:64px;margin-top:20px">accounting and<br>document time</div><div class="sub">Orders are processed <b class="acc">40% faster</b>.</div></div>`,
  `<div class="main"><div class="sub" style="margin:0 0 20px">Car rental</div><div class="u num" style="font-size:150px;white-space:nowrap">2–3 <span class="acc">→</span> 8–10</div><div class="u" style="font-size:64px;margin-top:28px">clients a month</div><div class="sub">After a new online booking site.</div></div>`,
  `<div class="main"><div class="sub" style="margin:0 0 20px">Warehouse and stock</div><div class="u num">−20%</div><div class="u" style="font-size:64px;margin-top:20px">losses</div><div class="sub">Stock is easier to check and to keep.</div></div>`,
  `<div class="main"><div class="u big" style="font-size:96px">Got a task?<br><span class="acc">Tell us.</span></div><div class="sub">info@mirelli.eu<br>t.me/Mirelli_studio_bot<br>Link in bio</div></div>`,
];

const dir = path.join(os.tmpdir(), "mirelli-ig"); mkdirSync(dir, { recursive: true });
const out = path.join(root, "public", "brand", "ig"); mkdirSync(out, { recursive: true });
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
for (let i = 0; i < posts.length; i++) {
  const f = path.join(dir, `p${i + 1}.html`); writeFileSync(f, page(posts[i], i + 1));
  await p.goto(pathToFileURL(f).href); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(150);
  await p.screenshot({ path: path.join(out, `post-0${i + 1}.png`) });
}
await b.close();
console.log("public/brand/ig/post-01..09.png");
