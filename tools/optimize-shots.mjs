// Turns the PNG screenshots from tools/shoot.mjs (tools/.shots) into public/shots/<id>.webp (1200w)
// and <id>-s.webp (720w). Needs sharp, which is not a project dependency: `npm i --no-save sharp` first.
import { createRequire } from "node:module";
import { readdirSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const sharp = createRequire(import.meta.url)("sharp");
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const from = join(root, "tools", ".shots");
const to = join(root, "public", "shots");
mkdirSync(to, { recursive: true });
for (const f of readdirSync(from).filter((n) => n.endsWith(".png"))) {
  const id = f.replace(/\.png$/, "");
  const img = sharp(join(from, f));
  const a = await img.clone().webp({ quality: 72, effort: 6 }).toFile(join(to, `${id}.webp`));
  const b = await img.clone().resize(720).webp({ quality: 76, effort: 6 }).toFile(join(to, `${id}-s.webp`));
  console.log(id.padEnd(13), Math.round(a.size / 1024) + " KB", Math.round(b.size / 1024) + " KB");
}
