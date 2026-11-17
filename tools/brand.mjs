// Renders the brand assets (icons, avatars, banners, highlight covers, social card) with Playwright.
// Usage: node tools/brand.mjs            (then: python3 tools/brand.py for favicon.ico and the animated logo)
// Fonts: tools/brand-fonts (Unbounded and Onest, both SIL OFL). Accent: change ACCENT to recolour everything.
import { createRequire } from "node:module";
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import os from "node:os";

// Playwright is installed globally in this setup; require() honours NODE_PATH, ESM imports do not.
const { chromium } = createRequire(import.meta.url)("playwright");

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ACCENT = "#2ee6c5";
const BG = "#050507";
const PANEL = "#0c0c11";
const out = path.join(root, "public", "brand");
mkdirSync(out, { recursive: true });
const tmp = path.join(os.tmpdir(), "mirelli-brand");
mkdirSync(tmp, { recursive: true });
const fontUrl = (f) => pathToFileURL(path.join(root, "tools", "brand-fonts", f)).href;
const shot = (id) => pathToFileURL(path.join(root, "public", "shots", id + ".webp")).href;

const faces = `
@font-face{font-family:"Unbounded";src:url("${fontUrl("Unbounded.woff2")}") format("woff2");font-weight:200 900}
@font-face{font-family:"Onest";src:url("${fontUrl("Onest.woff2")}") format("woff2");font-weight:100 900}
*{box-sizing:border-box;margin:0;padding:0}
body{background:${BG};color:#f3f3f5;font-family:"Onest",system-ui,sans-serif;overflow:hidden}
.u{font-family:"Unbounded","Onest",sans-serif;font-weight:500;letter-spacing:-.035em}
`;
const mark = (size, stroke = ACCENT, sw = 6.5) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 64 64"><path d="M16 47V17l16 20 16-20v30" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-linejoin="miter" stroke-miterlimit="4"/></svg>`;
const glow = (x, y, c = ACCENT, a = 0.16) => `radial-gradient(60% 70% at ${x}% ${y}%, ${c}${Math.round(a * 255).toString(16).padStart(2, "0")}, transparent 70%)`;

const browser = await chromium.launch();
async function render(name, w, h, body, { dir = out, transparent = false, scale = 1 } = {}) {
  const file = path.join(tmp, name + ".html");
  writeFileSync(file, `<!doctype html><meta charset="utf-8"><style>${faces}${transparent ? "body{background:transparent}" : ""}</style>${body}`);
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: scale });
  const p = await ctx.newPage();
  await p.goto(pathToFileURL(file).href);
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(150);
  await p.screenshot({ path: path.join(dir, name + ".png"), omitBackground: transparent });
  await ctx.close();
  console.log(path.relative(root, path.join(dir, name + ".png")));
}

// ── Icons (site) ──────────────────────────────────────────
const roundIcon = (s) => `<div style="width:${s}px;height:${s}px;background:${PANEL};border-radius:${s * 0.2}px;display:grid;place-items:center">${mark(s * 0.62)}</div>`;
for (const s of [32, 192, 512]) await render("icon-" + s, s, s, roundIcon(s), { dir: path.join(root, "public"), transparent: true });
await render("apple-touch-icon", 180, 180, `<div style="width:180px;height:180px;background:${PANEL};display:grid;place-items:center">${mark(112)}</div>`, { dir: path.join(root, "public") });
await render("icon-maskable-512", 512, 512, `<div style="width:512px;height:512px;background:${PANEL};display:grid;place-items:center">${mark(260)}</div>`, { dir: path.join(root, "public") });

// ── Avatars: logo sits in the middle 60% so a circular crop never touches it ──
const avatar = (s) => `<div style="width:${s}px;height:${s}px;background:${glow(50, 45)},${PANEL};display:grid;place-items:center">${mark(s * 0.58)}</div>`;
await render("avatar-1080", 1080, 1080, avatar(1080));
await render("avatar-512", 512, 512, avatar(512));
await render("signature-icon", 168, 168, `<div style="width:168px;height:168px;background:${PANEL};border-radius:34px;display:grid;place-items:center">${mark(104)}</div>`, { transparent: true });

// ── Logos ──────────────────────────────────────────────────
await render("logo-horizontal-light-on-dark", 1200, 300, `<div style="height:300px;display:flex;align-items:center;gap:40px;padding-left:60px;background:transparent"><div style="width:180px;height:180px;background:${PANEL};border-radius:38px;display:grid;place-items:center">${mark(112)}</div><div class="u" style="font-size:96px;line-height:1">Mirelli Studio</div></div>`, { transparent: true });
await render("logo-horizontal-dark-on-light", 1200, 300, `<div style="height:300px;display:flex;align-items:center;gap:40px;padding-left:60px;background:transparent"><div style="width:180px;height:180px;background:${PANEL};border-radius:38px;display:grid;place-items:center">${mark(112)}</div><div class="u" style="font-size:96px;line-height:1;color:#0c0c11">Mirelli Studio</div></div>`, { transparent: true });

// ── Social card (Open Graph) ───────────────────────────────
const tilt = (ids) => ids.map((id, i) => `<img src="${shot(id)}" style="position:absolute;width:${[420, 400, 340, 300][i]}px;border:1px solid rgba(243,243,245,.24);border-radius:4px;box-shadow:0 30px 70px rgba(0,0,0,.7);left:${[0, 170, 20, 300][i]}px;top:${[0, 150, 330, 380][i]}px;transform:rotate(${[-4, 3, -2, 5][i]}deg)">`).join("");
await render("og", 1200, 630, `<div style="width:1200px;height:630px;background:${glow(78, 40)},${BG};position:relative">
  <div style="position:absolute;left:64px;top:56px;display:flex;align-items:center;gap:18px">${mark(52)}<span class="u" style="font-size:26px">Mirelli Studio</span></div>
  <div style="position:absolute;left:64px;top:170px;width:560px"><div class="u" style="font-size:66px;line-height:1.08">We try the new.<br>We build the <span style="color:${ACCENT}">impossible.</span></div><p style="margin-top:24px;font-size:24px;line-height:1.4;color:#c8c8d0;max-width:520px">Software, websites and bots for any business.</p></div>
  <div style="position:absolute;left:64px;bottom:40px;font-size:22px;color:#8b8b98">mirelli.eu</div>
  <div style="position:absolute;right:20px;top:60px;width:560px;height:560px">${tilt(["garage", "clinic", "spaces", "restaurant"])}</div></div>`, { dir: path.join(root, "public") });

// ── Banners (avatar overlaps the bottom-left corner on both networks, so the content sits right of centre) ──
const banner = (w, h, pad) => `<div style="width:${w}px;height:${h}px;background:${glow(80, 50)},${BG};position:relative">
  <div style="position:absolute;left:${pad}px;top:50%;transform:translateY(-50%)"><div class="u" style="font-size:${h * 0.135}px;line-height:1.12">We build the<br><span style="color:${ACCENT}">impossible.</span></div><p style="margin-top:${h * 0.05}px;font-size:${h * 0.058}px;color:#c8c8d0">Websites, booking systems and bots.<br>mirelli.eu</p></div>
  <img src="${shot("garage")}" style="position:absolute;right:${w * 0.035}px;top:${h * 0.16}px;width:${h * 0.92}px;border:1px solid rgba(243,243,245,.24);border-radius:4px;box-shadow:0 20px 50px rgba(0,0,0,.7);transform:rotate(-3deg)"></div>`;
await render("banner-linkedin-1584x396", 1584, 396, banner(1584, 396, 380));
await render("banner-x-1500x500", 1500, 500, banner(1500, 500, 400));

// ── Instagram highlight covers (the circle crop shows the middle ~800px) ──
for (const [name, label] of [["demos", "Demos"], ["process", "Process"], ["clients", "Clients"], ["about", "About"], ["contact", "Contact"]]) {
  await render("highlight-" + name, 1080, 1920, `<div style="width:1080px;height:1920px;background:${glow(50, 50, ACCENT, 0.14)},${BG};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:40px">${mark(220)}<div class="u" style="font-size:96px">${label}</div></div>`);
}

await browser.close();
