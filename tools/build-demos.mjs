// Inlines demo-src/kit.css and kit.js into each demo-src/<id>.html and writes demos/<id>/index.html.
// Each demo is served from its own folder, so everything it needs has to live in that one file.
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "demo-src");
const kitCss = readFileSync(join(src, "kit.css"), "utf8");
const kitJs = readFileSync(join(src, "kit.js"), "utf8");

// Tab icon per demo: its accent colour and initial, inlined so each demo stays one file.
const brand = {
  dizeltrade: ["D", "#c8f03c", "#0b0c0a"], rentoworld: ["R", "#0c8a5f", "#ffffff"], tradinglearn: ["T", "#8b7bff", "#0c0a1f"],
  shipter: ["S", "#ff7a45", "#1d0a02"], storage: ["S", "#a85f00", "#ffffff"], caspianflow: ["C", "#f0b33c", "#1a1203"],
  restaurant: ["R", "#d9461f", "#ffffff"], hr: ["H", "#b02a73", "#ffffff"], botfactory: ["B", "#1b78c8", "#ffffff"],
};
const icon = (id) => {
  const [ch, bg, fg] = brand[id] ?? ["·", "#888888", "#ffffff"];
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='${bg}'/><text x='32' y='45' font-family='Arial,Helvetica,sans-serif' font-size='38' font-weight='700' text-anchor='middle' fill='${fg}'>${ch}</text></svg>`;
  return `<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,${encodeURIComponent(svg)}">`;
};

for (const f of readdirSync(src).filter((n) => n.endsWith(".html"))) {
  const id = f.replace(/\.html$/, "");
  const html = readFileSync(join(src, f), "utf8")
    .replace("/*@kit.css*/", () => kitCss)
    .replace("/*@kit.js*/", () => kitJs)
    .replace("</title>", () => "</title>\n" + icon(id));
  mkdirSync(join(root, "demos", id), { recursive: true });
  writeFileSync(join(root, "demos", id, "index.html"), html);
  console.log("built demos/" + id + "/index.html", html.length, "bytes");
}
