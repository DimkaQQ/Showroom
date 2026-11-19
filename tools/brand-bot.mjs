// Welcome picture for the Telegram bot (shown above the description before Start). 16:9, Telegram recommends 640x360; we render 1280x720.
// Usage: node tools/brand-bot.mjs   -> public/brand/bot-welcome-1280x720.png. Upload in BotFather: Set Welcome Picture.
import { createRequire } from "node:module";
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import os from "node:os";

const { chromium } = createRequire(import.meta.url)("playwright");
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ACCENT = "#2ee6c5", BG = "#050507";
const font = (f) => pathToFileURL(path.join(root, "tools", "brand-fonts", f)).href;
const mark = (s) => `<svg width="${s}" height="${s}" viewBox="0 0 64 64"><path d="M16 47V17l16 20 16-20v30" fill="none" stroke="${ACCENT}" stroke-width="6.5" stroke-linejoin="miter" stroke-miterlimit="4"/></svg>`;

const A = ACCENT;
const icon = (inner) => `<svg width="120" height="120" viewBox="0 0 64 64" fill="none" stroke="${A}" stroke-width="3.2" stroke-linecap="square" stroke-linejoin="miter">${inner}</svg>`;
// language-neutral: three icons (website, bot, software) instead of words
const web = icon('<rect x="8" y="12" width="48" height="40"/><path d="M8 24h48"/><path d="M15 18h2M21 18h2"/><path d="M16 34h20M16 42h12"/><rect x="40" y="32" width="10" height="12"/>');
const bot = icon('<rect x="12" y="20" width="40" height="30"/><path d="M32 20v-8"/><rect x="29" y="8" width="6" height="4"/><path d="M22 32v4M42 32v4"/><path d="M24 43h16"/><path d="M6 30v10M58 30v10"/>');
const code = icon('<path d="M22 20L10 32l12 12"/><path d="M42 20l12 12-12 12"/><path d="M36 14L28 50"/>');

const html = `<!doctype html><meta charset="utf-8"><style>
@font-face{font-family:"Unbounded";src:url("${font("Unbounded.woff2")}") format("woff2");font-weight:200 900}
@font-face{font-family:"Onest";src:url("${font("Onest.woff2")}") format("woff2");font-weight:100 900}
*{box-sizing:border-box;margin:0;padding:0}
body{width:1280px;height:720px;overflow:hidden;color:#f3f3f5;font-family:"Onest",sans-serif;position:relative;
 background:radial-gradient(50% 70% at 50% 40%, ${A}2b, transparent 70%),${BG}}
.u{font-family:"Unbounded","Onest",sans-serif;font-weight:500;letter-spacing:-.035em}
.top{position:absolute;left:0;right:0;top:92px;display:flex;flex-direction:column;align-items:center;gap:26px}
.top .name{font-size:64px}
.row{position:absolute;left:0;right:0;bottom:96px;display:flex;justify-content:center;gap:48px}
.card{width:200px;height:200px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(243,243,245,.2);border-radius:4px;background:rgba(12,12,17,.7)}
.card:nth-child(2){border-color:${A}}
</style>
<div class="top">${mark(150)}<div class="name u">Mirelli Studio</div></div>
<div class="row"><div class="card">${web}</div><div class="card">${bot}</div><div class="card">${code}</div></div>`;

const dir = path.join(os.tmpdir(), "mirelli-brand"); mkdirSync(dir, { recursive: true });
const file = path.join(dir, "bot-welcome.html"); writeFileSync(file, html);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
await p.goto(pathToFileURL(file).href);
await p.evaluate(() => document.fonts.ready);
await p.waitForTimeout(200);
await p.screenshot({ path: path.join(root, "public", "brand", "bot-welcome-1280x720.png") });
await b.close();
console.log("public/brand/bot-welcome-1280x720.png");
