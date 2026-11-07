// Tells IndexNow search engines (Bing, Yandex, Seznam, Naver...) which pages exist or changed.
// Run after a deploy: node tools/indexnow.mjs   (reads out/sitemap.xml; failures never break a deploy)
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const KEY = "4e8ea869c802c296f9325cc07e4d816f";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const urls = [...readFileSync(join(root, "out", "sitemap.xml"), "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urls.length) { console.log("indexnow: no URLs"); process.exit(0); }
const host = new URL(urls[0]).hostname;
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key: KEY, keyLocation: `https://${host}/${KEY}.txt`, urlList: urls }),
  signal: AbortSignal.timeout(15_000),
}).catch((e) => ({ status: "error " + e.message }));
console.log("indexnow:", urls.length, "URLs submitted, status", res.status);
