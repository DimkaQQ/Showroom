// Renders the frames of the animated logo. The first frame is the finished M, so clients that show only the first frame
// of a GIF (some mail apps, profile pictures) still show the logo. Then: erase, redraw, hold, loop. Then run: python3 tools/brand.py
import { createRequire } from "node:module";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import path from "node:path";
import os from "node:os";
import { pathToFileURL } from "node:url";
const { chromium } = createRequire(import.meta.url)("playwright");

const ACCENT = "#2ee6c5", PANEL = "#0c0c11", N = 48, S = 512;
const dir = path.join(os.tmpdir(), "mirelli-brand", "frames");
rmSync(dir, { recursive: true, force: true });
mkdirSync(dir, { recursive: true });
const html = path.join(os.tmpdir(), "mirelli-brand", "anim.html");
writeFileSync(html, `<!doctype html><meta charset="utf-8"><style>*{margin:0}body{width:${S}px;height:${S}px;background:${PANEL};display:grid;place-items:center;overflow:hidden}</style>
<svg width="${S}" height="${S}" viewBox="0 0 64 64"><path id="m" d="M16 47V17l16 20 16-20v30" fill="none" stroke="${ACCENT}" stroke-width="6.5" stroke-linejoin="miter" stroke-miterlimit="4"/></svg>`);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: S, height: S } });
await p.goto(pathToFileURL(html).href);
const len = await p.evaluate(() => document.getElementById("m").getTotalLength());
const ease = (t) => 1 - Math.pow(1 - t, 3);
for (let i = 0; i < N; i++) {
  const t = i / (N - 1);
  // hold 0..0.2, erase 0.2..0.4, redraw 0.4..0.7, hold 0.7..1
  const shown = t < 0.2 ? 1 : t < 0.4 ? 1 - ease((t - 0.2) / 0.2) : t < 0.7 ? ease((t - 0.4) / 0.3) : 1;
  await p.evaluate(([len, shown]) => {
    document.getElementById("m").setAttribute("stroke-dasharray", `${len * shown} ${len}`);
  }, [len, shown]);
  await p.screenshot({ path: path.join(dir, "f" + String(i).padStart(3, "0") + ".png") });
}
await b.close();
console.log(N, "frames in", dir);
