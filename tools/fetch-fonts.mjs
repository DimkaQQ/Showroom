// One-off: downloads the Google Fonts each demo uses (latin + latin-ext only) into demo-src/fonts,
// and writes demo-src/fonts/<demo>.css so demos need no third-party request. Re-run only when fonts change.
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "demo-src");
const out = join(src, "fonts");
mkdirSync(out, { recursive: true });
const UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

for (const f of readdirSync(src).filter((n) => n.endsWith(".html"))) {
  const id = f.replace(/\.html$/, "");
  const html = readFileSync(join(src, f), "utf8");
  const urls = [...html.matchAll(/https:\/\/fonts\.googleapis\.com\/css2\?[^"']+/g)].map((m) => m[0].replace(/&amp;/g, "&"));
  let css = "";
  for (const u of urls) {
    const text = await (await fetch(u, { headers: { "user-agent": UA } })).text();
    for (const block of text.split("/* ").slice(1)) {
      const subset = block.slice(0, block.indexOf(" */"));
      if (subset !== "latin" && subset !== "latin-ext") continue;
      const family = /font-family: '([^']+)'/.exec(block)[1];
      const url = /url\((https:[^)]+\.woff2)\)/.exec(block)[1];
      const name = `${family.toLowerCase().replace(/\s+/g, "-")}-${subset}-${url.split("/").pop().slice(0, 14)}.woff2`;
      if (!existsSync(join(out, name))) writeFileSync(join(out, name), Buffer.from(await (await fetch(url)).arrayBuffer()));
      css += block.slice(block.indexOf("@font-face")).replace(/}\s*$/, "}").replace(/url\(https:[^)]+\.woff2\)/, `url(fonts/${name})`).replace(/\n\s*/g, " ") + "\n";
    }
  }
  writeFileSync(join(out, `${id}.css`), css);
  console.log(id, urls.length, "css request(s)");
}
