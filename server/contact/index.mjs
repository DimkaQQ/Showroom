// Contact form endpoint: POST /api/contact -> a Telegram message to the studio owner.
// Zero dependencies (Node 18+). Stores nothing; logs only counters, never message contents.
// Config comes from server/contact/.env (see .env.example) or the process environment.
import http from "node:http";
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const envFile = join(here, ".env");
if (existsSync(envFile)) {
  for (const line of readFileSync(envFile, "utf8").split("\n")) {
    const m = /^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/.exec(line);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, "");
  }
}

const PORT = Number(process.env.PORT || 8787);
const HOST = process.env.HOST || "127.0.0.1";
const TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
const CHAT = process.env.TELEGRAM_CHAT_ID || "";
const API = (process.env.TELEGRAM_API || "https://api.telegram.org").replace(/\/$/, "");
const ORIGINS = (process.env.ALLOWED_ORIGINS || "https://mirelli.eu,https://www.mirelli.eu,https://dimkaprojects.xyz").split(",").map((s) => s.trim());
const MAX_BODY = 8 * 1024;

const hits = new Map(); // ip -> timestamps
const allowed = (ip) => {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < 3600_000);
  if (list.length >= 5 || list.filter((t) => now - t < 600_000).length >= 2) { hits.set(ip, list); return false; }
  list.push(now); hits.set(ip, list);
  return true;
};
setInterval(() => { const now = Date.now(); for (const [ip, l] of hits) if (!l.some((t) => now - t < 3600_000)) hits.delete(ip); }, 600_000).unref();

const clean = (s, max) => String(s ?? "").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, max);
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
let sent = 0, dropped = 0;

const send = (res, code, obj) => { res.writeHead(code, { "content-type": "application/json", "cache-control": "no-store" }); res.end(JSON.stringify(obj)); };

const server = http.createServer(async (req, res) => {
  const url = (req.url || "").split("?")[0];
  if (req.method === "GET" && url === "/api/contact/health") return send(res, 200, { ok: true, configured: Boolean(TOKEN && CHAT), sent, dropped });
  if (url !== "/api/contact") return send(res, 404, { error: "not_found" });
  if (req.method !== "POST") return send(res, 405, { error: "method" });

  const origin = req.headers.origin || "";
  if (!ORIGINS.includes(origin)) return send(res, 403, { error: "origin" });
  if (!TOKEN || !CHAT) return send(res, 503, { error: "not_configured" });
  if (!String(req.headers["content-type"] || "").includes("application/json")) return send(res, 415, { error: "type" });

  const ip = String(req.headers["x-forwarded-for"] || req.socket.remoteAddress || "").split(",")[0].trim();

  let raw = "";
  for await (const chunk of req) { raw += chunk; if (raw.length > MAX_BODY) return send(res, 413, { error: "size" }); }
  let b;
  try { b = JSON.parse(raw); } catch { return send(res, 400, { error: "json" }); }

  const name = clean(b.name, 120), email = clean(b.email, 200), topic = clean(b.topic, 120), message = clean(b.message, 3000);
  if (name.length < 2 || !EMAIL.test(email) || message.length < 10) return send(res, 400, { error: "invalid" });
  // Bots: a filled honeypot or an instant submit gets a fake success and is dropped.
  if (clean(b.website, 50) || Number(b.took) < 2500) { dropped++; return send(res, 200, { ok: true }); }
  // Typos do not use up the quota: only well-formed messages count.
  if (!allowed(ip)) return send(res, 429, { error: "rate" });

  const text = [
    "New message from the website",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    topic ? `Topic: ${topic}` : null,
    `Language: ${clean(b.lang, 5)}  Page: ${clean(b.page, 120)}`,
    "",
    message,
  ].filter((l) => l !== null).join("\n").slice(0, 3900);

  try {
    const r = await fetch(`${API}/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT, text, disable_web_page_preview: true }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!r.ok) throw new Error("telegram " + r.status);
    sent++;
    console.log(`sent #${sent}`);
    return send(res, 200, { ok: true });
  } catch (e) {
    console.error("delivery failed:", e.message);
    return send(res, 502, { error: "delivery" });
  }
});

server.listen(PORT, HOST, () => console.log(`contact endpoint on ${HOST}:${PORT} (${TOKEN && CHAT ? "configured" : "NOT configured"})`));
