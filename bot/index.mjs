// Mirelli Studio Telegram bot. No dependencies: Node 18+ and long polling.
// What it does: answers common questions from a fixed script (services, published price ranges, process, cases),
// collects a request (name, contact, task) and forwards it to the owner. Anything it cannot answer is forwarded too,
// and the owner can reply by replying to the forwarded message in Telegram.
// It does not use AI and never promises prices or dates beyond what is on the site.
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dir = path.dirname(fileURLToPath(import.meta.url));
const envFile = path.join(dir, ".env");
if (existsSync(envFile)) for (const l of readFileSync(envFile, "utf8").split("\n")) { const m = l.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/); if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, ""); }

const TOKEN = process.env.BOT_TOKEN || "";
const OWNER = String(process.env.OWNER_CHAT_ID || "");
const SITE = process.env.SITE_URL || "https://mirelli.eu";
if (!TOKEN || !OWNER) { console.error("BOT_TOKEN and OWNER_CHAT_ID must be set in bot/.env"); process.exit(1); }
const API = `${(process.env.TELEGRAM_API || "https://api.telegram.org").replace(/\/$/, "")}/bot${TOKEN}`;
const pricing = JSON.parse(readFileSync(path.join(dir, "..", "lib", "pricing.json"), "utf8"));

const nf = (n, c) => new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(n) + " " + ({ KZT: "₸", RUB: "₽", EUR: "€", USD: "$" })[c];
const range = (id, cur) => { const [a, b] = pricing.items.find((i) => i.id === id).prices[cur]; return `${nf(a, cur)} - ${nf(b, cur)}`; };

const T = {
  ru: {
    hello: "Здравствуйте! Это Mirelli Studio: сайты, онлайн-запись, системы для бизнеса и Telegram-боты. Выберите, что интересно, или просто напишите задачу своими словами.",
    menu: ["Услуги и цены", "Как мы работаем", "Кейсы и демо", "Оставить заявку", "Связаться с человеком"],
    services: (cur) => `Ориентиры (${cur}, точная смета письменно до начала работы):\n\n` +
      `• Сайт, который приносит заявки: ${range("site", cur)}\n• Telegram-бот или автоматизация: ${range("bot", cur)}\n• Онлайн-запись и заказы: ${range("booking", cur)}\n• Система для бизнеса: ${range("system", cur)}\n• Интеграция: ${range("integration", cur)}\n• Поддержка и хостинг: ${range("support", cur)} в месяц\n• Быстрый старт (разбор и прототип): ${range("start", cur)}\n\nПодробнее: ${SITE}/ru/#pricing`,
    how: "Как мы работаем: 1) вы описываете задачу, 2) мы письменно фиксируем объём и цену, 3) каждую неделю вы видите рабочую версию, 4) запуск и поддержка. С вами говорит основатель и разработчик, без менеджеров.",
    cases: `Наши работы на живых демо: ${SITE}/ru/#work`,
    askName: "Как вас зовут?",
    askContact: "Как с вами связаться? Напишите Telegram, телефон или почту.",
    askTask: "Опишите задачу в нескольких словах.",
    done: "Спасибо! Заявка отправлена. Мы ответим как можно скорее.",
    human: "Передаю вопрос специалисту. Ответ придёт сюда.",
    fallback: "Передаю ваш вопрос специалисту, ответ придёт сюда. Пока можно посмотреть меню.",
  },
  en: {
    hello: "Hello! This is Mirelli Studio: websites, online booking, business systems and Telegram bots. Pick a topic or just describe your task.",
    menu: ["Services and prices", "How we work", "Cases and demos", "Leave a request", "Talk to a person"],
    services: (cur) => `Indicative ranges (${cur}, an exact written estimate comes before any work):\n\n` +
      `• A website that brings enquiries: ${range("site", cur)}\n• A Telegram bot or automation: ${range("bot", cur)}\n• Online booking and orders: ${range("booking", cur)}\n• A business system: ${range("system", cur)}\n• An integration: ${range("integration", cur)}\n• Hosting and support: ${range("support", cur)} per month\n• Quick start (analysis and prototype): ${range("start", cur)}\n\nMore: ${SITE}/#pricing`,
    how: "How we work: 1) you describe the task, 2) we agree scope and price in writing, 3) you see a working version every week, 4) launch and support. You talk to the founder and developer, no managers in between.",
    cases: `Our work, with live demos: ${SITE}/#work`,
    askName: "What is your name?",
    askContact: "How can we reach you? Write a Telegram handle, phone or email.",
    askTask: "Describe your task in a few words.",
    done: "Thank you! Your request has been sent. We will reply as soon as possible.",
    human: "I am passing your question to a person. The answer will arrive here.",
    fallback: "I am passing your question to a person, the answer will arrive here. Meanwhile you can use the menu.",
  },
};

const state = new Map(); // chat id -> { step, name, contact }
const forwarded = new Map(); // owner message id -> user chat id (kept for this process lifetime)

async function tg(method, body) {
  const r = await fetch(`${API}/${method}`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body), signal: AbortSignal.timeout(40_000) });
  const j = await r.json().catch(() => ({}));
  if (!j.ok) console.error(method, "failed:", j.description || r.status);
  return j;
}
const langOf = (m) => (["ru", "kk", "uk", "be"].includes(m.from?.language_code) ? "ru" : "en");
const curOf = (m) => (langOf(m) === "ru" ? "KZT" : "EUR");
const keyboard = (l) => ({ keyboard: T[l].menu.map((x) => [{ text: x }]), resize_keyboard: true });
const say = (chat, text, l, extra = {}) => tg("sendMessage", { chat_id: chat, text, reply_markup: l ? keyboard(l) : undefined, disable_web_page_preview: true, ...extra });
const who = (m) => `${m.from?.first_name || ""} ${m.from?.last_name || ""} ${m.from?.username ? "@" + m.from.username : ""} (id ${m.chat.id})`.trim();

async function toOwner(text, m) {
  const r = await tg("sendMessage", { chat_id: OWNER, text: `${text}\n\nОт: ${who(m)}\nОтветьте реплаем на это сообщение, и ответ уйдёт клиенту.`, disable_web_page_preview: true });
  if (r.ok) forwarded.set(r.result.message_id, m.chat.id);
}

async function onMessage(m) {
  const chat = String(m.chat.id);
  const text = (m.text || "").trim();

  // The owner replies to a forwarded message: send the answer to the client.
  if (chat === OWNER) {
    const target = m.reply_to_message && forwarded.get(m.reply_to_message.message_id);
    if (target && text) await tg("sendMessage", { chat_id: target, text });
    else if (!text.startsWith("/")) await say(chat, "Чтобы ответить клиенту, ответьте реплаем на пересланное сообщение.");
    return;
  }

  const l = langOf(m), t = T[l], s = state.get(chat);
  if (text === "/start") { state.delete(chat); return say(chat, t.hello, l); }

  if (s) {
    if (s.step === "name") { s.name = text; s.step = "contact"; return say(chat, t.askContact, l); }
    if (s.step === "contact") { s.contact = text; s.step = "task"; return say(chat, t.askTask, l); }
    if (s.step === "task") {
      state.delete(chat);
      await toOwner(`Новая заявка из бота\nИмя: ${s.name}\nКонтакт: ${s.contact}\nЗадача: ${text}`, m);
      return say(chat, t.done, l);
    }
  }

  const i = t.menu.indexOf(text);
  const low = text.toLowerCase();
  if (i === 0 || /цен|стоим|сколько|price|cost|how much/.test(low)) return say(chat, t.services(curOf(m)), l);
  if (i === 1 || /как работ|процесс|этап|how do you work|process/.test(low)) return say(chat, t.how, l);
  if (i === 2 || /кейс|пример|демо|портфолио|case|demo|portfolio/.test(low)) return say(chat, t.cases, l);
  if (i === 3) { state.set(chat, { step: "name" }); return say(chat, t.askName, l); }
  if (i === 4) { await toOwner(`Клиент просит связаться: ${text}`, m); return say(chat, t.human, l); }

  // Anything else goes to a person.
  await toOwner(`Вопрос из бота:\n${text}`, m);
  return say(chat, t.fallback, l);
}

let offset = 0;
console.log("mirelli bot started");
for (;;) {
  try {
    const r = await tg("getUpdates", { offset, timeout: 30, allowed_updates: ["message"] });
    for (const u of r.result || []) { offset = u.update_id + 1; if (u.message && u.message.chat.type === "private") await onMessage(u.message).catch((e) => console.error("handler:", e.message)); }
  } catch (e) { console.error("poll:", e.message); await new Promise((res) => setTimeout(res, 5000)); }
}
