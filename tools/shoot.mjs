// Screenshots every demo (1440x900) into tools/.shots/<id>.png. Run after tools/build-demos.mjs,
// then tools/optimize-shots.mjs to produce the WebP files the site uses.
import { createRequire } from "node:module";
import { createServer } from "node:http";
import { readFileSync, existsSync, readdirSync, mkdirSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const { chromium } = createRequire(import.meta.url)("playwright");
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".jpg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml", ".webp": "image/webp" };
const server = createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p.endsWith("/")) p += "index.html";
  const f = join(root, "demos", p);
  if (!f.startsWith(join(root, "demos")) || !existsSync(f)) { res.statusCode = 404; return res.end(); }
  res.setHeader("content-type", types[extname(f)] || "application/octet-stream");
  res.end(readFileSync(f));
}).listen(4174);

mkdirSync(join(root, "tools", ".shots"), { recursive: true });
const ids = process.argv.slice(2).length ? process.argv.slice(2) : readdirSync(join(root, "demos"), { withFileTypes: true }).filter((d) => d.isDirectory() && d.name !== "cv").map((d) => d.name);
const browser = await chromium.launch();
for (const id of ids) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(`http://localhost:4174/${id}/`, { waitUntil: "networkidle" }).catch(() => {});
  await page.waitForTimeout(1200);
  await page.screenshot({ path: join(root, "tools", ".shots", `${id}.png`) });
  console.log(id, errors.length ? "PAGE ERRORS: " + errors.join(" | ") : "ok");
  await page.close();
}
await browser.close();
server.close();
