// Inlines demo-src/kit.css and kit.js into each demo-src/<id>.html and writes demos/<id>/index.html.
// Each demo is served from its own folder, so everything it needs has to live in that one file.
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "demo-src");
const kitCss = readFileSync(join(src, "kit.css"), "utf8");
const kitJs = readFileSync(join(src, "kit.js"), "utf8");

for (const f of readdirSync(src).filter((n) => n.endsWith(".html"))) {
  const id = f.replace(/\.html$/, "");
  const html = readFileSync(join(src, f), "utf8")
    .replace("/*@kit.css*/", () => kitCss)
    .replace("/*@kit.js*/", () => kitJs);
  mkdirSync(join(root, "demos", id), { recursive: true });
  writeFileSync(join(root, "demos", id, "index.html"), html);
  console.log("built demos/" + id + "/index.html", html.length, "bytes");
}
