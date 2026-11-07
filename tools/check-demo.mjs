// QA for one built demo: node tools/check-demo.mjs <id>
// Opens demos/<id>/ at desktop and phone size, clicks through every visible control, and reports
// page errors, failed console.assert, external requests, Cyrillic text, horizontal overflow and
// "undefined/NaN/[object Object]" in the visible text. Screenshots land in tools/.shots/check/.
import { createRequire } from "node:module";
import { createServer } from "node:http";
import { readFileSync, existsSync, mkdirSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const { chromium } = createRequire(import.meta.url)("playwright");
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const id = process.argv[2];
if (!id) { console.error("usage: node tools/check-demo.mjs <id>"); process.exit(2); }
const shots = join(root, "tools", ".shots", "check"); mkdirSync(shots, { recursive: true });
const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".jpg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml", ".webp": "image/webp", ".woff2": "font/woff2" };
const port = 4300 + Math.floor(Math.random() * 500);
const server = createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]); if (p.endsWith("/")) p += "index.html";
  const f = join(root, "demos", p);
  if (!f.startsWith(join(root, "demos")) || !existsSync(f)) { res.statusCode = 404; return res.end(); }
  res.setHeader("content-type", types[extname(f)] || "application/octet-stream"); res.end(readFileSync(f));
}).listen(port);

const browser = await chromium.launch();
let failed = false;
for (const [name, viewport] of [["d", { width: 1440, height: 900 }], ["m", { width: 390, height: 844 }]]) {
  const page = await browser.newPage({ viewport });
  const problems = [], external = new Set();
  page.on("pageerror", (e) => problems.push("pageerror: " + e.message));
  page.on("console", (m) => { if (m.type() === "error" || m.type() === "assert") problems.push(`console.${m.type()}: ${m.text().slice(0, 160)}`); });
  page.on("request", (r) => { if (!r.url().startsWith(`http://localhost:${port}`) && !r.url().startsWith("data:")) external.add(r.url().slice(0, 80)); });
  await page.goto(`http://localhost:${port}/${id}/`, { waitUntil: "load" });
  await page.waitForTimeout(900);
  await page.screenshot({ path: join(shots, `${id}-${name}-0-first.png`) });
  // Visit every section, then press every control found on it (re-querying, because screens re-render).
  const navSel = "[data-page], nav a, .nav a, .tabbar a, [role=tab], .tabbar button";
  const actSel = "button, [data-act], select, input[type=checkbox], input[type=radio], summary, .chip, .tab, [onclick], [data-id], tr[data-id], li[data-id]";
  const press = async (el) => { try { if (await el.isVisible()) { await el.click({ timeout: 500, force: true, noWaitAfter: true }); clicked++; await page.waitForTimeout(40); } } catch {} await page.keyboard.press("Escape").catch(() => {}); };
  let clicked = 0;
  const navCount = await page.locator(navSel).count();
  for (let n = 0; n < navCount; n++) {
    await press(page.locator(navSel).nth(n));
    const m = Math.min(await page.locator(actSel).count(), 60);
    for (let i = 0; i < m; i++) await press(page.locator(actSel).nth(i));
  }
  await page.waitForTimeout(300);
  await page.screenshot({ path: join(shots, `${id}-${name}-1-after.png`), fullPage: false });
  const text = await page.evaluate(() => document.body.innerText);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
  if (/[Ѐ-ӿ]/.test(text)) problems.push("Cyrillic text visible");
  for (const bad of ["undefined", "NaN", "[object Object]", "lorem ipsum"]) if (text.includes(bad)) problems.push(`visible text contains "${bad}"`);
  if (overflow > 1) problems.push(`horizontal overflow ${overflow}px`);
  if (external.size) problems.push("external requests: " + [...external].join(", "));
  console.log(`${id} ${name === "d" ? "desktop" : "phone  "}: clicked ${String(clicked).padStart(3)} controls | ${problems.length ? "PROBLEMS" : "ok"}`);
  for (const p of problems) console.log("   - " + p);
  if (problems.length) failed = true;
  await page.close();
}
console.log(`screenshots: tools/.shots/check/${id}-{d,m}-{0-first,1-after}.png`);
await browser.close(); server.close();
process.exit(failed ? 1 : 0);
