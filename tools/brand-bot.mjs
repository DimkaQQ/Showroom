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

const html = `<!doctype html><meta charset="utf-8"><style>
@font-face{font-family:"Unbounded";src:url("${font("Unbounded.woff2")}") format("woff2");font-weight:200 900}
@font-face{font-family:"Onest";src:url("${font("Onest.woff2")}") format("woff2");font-weight:100 900}
*{box-sizing:border-box;margin:0;padding:0}
body{width:1280px;height:720px;overflow:hidden;color:#f3f3f5;font-family:"Onest",sans-serif;
 background:radial-gradient(55% 80% at 82% 45%, ${ACCENT}33, transparent 70%),radial-gradient(40% 50% at 8% 100%, ${ACCENT}14, transparent 70%),${BG};position:relative}
.u{font-family:"Unbounded","Onest",sans-serif;font-weight:500;letter-spacing:-.035em}
.brand{position:absolute;left:96px;top:84px;display:flex;align-items:center;gap:18px;font-size:34px}
.h{position:absolute;left:96px;top:50%;transform:translateY(-44%);font-size:104px;line-height:1.08}
.h span{color:${ACCENT}}
.foot{position:absolute;left:96px;bottom:84px;font-size:30px;color:#c8c8d0}
.big{position:absolute;right:-60px;top:50%;transform:translateY(-50%);opacity:.9}
</style>
<div class="big">${mark(560)}</div>
<div class="brand u">${mark(52)}<span>Mirelli Studio</span></div>
<div class="h u">Websites.<br>Bots.<br><span>Software.</span></div>
<div class="foot">mirelli.eu</div>`;

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
