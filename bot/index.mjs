// Mirelli Studio Telegram bot. No dependencies: Node 18+ and long polling.
// What it does: answers common questions from a fixed script (services, published price ranges, process, cases),
// collects a request (name, contact, task) and forwards it to the owner. Anything it cannot answer is forwarded too,
// and the owner can reply by replying to the forwarded message in Telegram.
// It does not use AI and never promises prices or dates beyond what is on the site.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
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

// Language per chat: chosen in the bot, or passed by the website link (?start=ru), or the Telegram app language.
const LANGFILE = path.join(dir, "lang.json");
let langs = {};
try { langs = JSON.parse(readFileSync(LANGFILE, "utf8")); } catch { /* first run */ }
const saveLangs = () => { try { writeFileSync(LANGFILE, JSON.stringify(langs)); } catch (e) { console.error("lang save:", e.message); } };
const SITE_LANG = { ru: "ru", kk: "ru", en: "en", de: "en", fr: "en", sk: "en", cs: "en" }; // site languages without a bot translation fall back to English

const esc = (x) => String(x).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const IMG = `${SITE}/brand/bot-welcome-1280x720.png`;

const T = {
  ru: {
    hello: "<b>Mirelli Studio</b>\n<i>Сайты, боты и софт, которые берут рутину на себя.</i>\n\nМы строим то, что другие считают слишком сложным: от сайта до системы, на которой держится весь бизнес.\n\n⚡ Рабочая версия каждую неделю\n🧾 Объём и цена письменно до старта\n👤 С вами говорит основатель, без менеджеров\n\n<b>С чего начнём?</b> 👇",
    btn: { svc: "💼 Услуги и цены", how: "⚙️ Как работаем", cases: "🧪 Кейсы и демо", lead: "✍️ Оставить заявку", site: "🌐 Открыть сайт", human: "💬 Написать человеку", lang: "🌍 Language", cancel: "✖️ Отмена", calc: "🧮 Посчитать выгоду", all: "↩️ В меню" },
    services: (cur) => `<b>💼 Что мы делаем и сколько это стоит</b>\n<i>Ориентиры в ${cur}. Точная смета письменно до начала работы.</i>\n\n` +
      `🌐 <b>Сайт, который приносит заявки</b>\n${range("site", cur)}\n\n🤖 <b>Telegram-бот или автоматизация</b>\n${range("bot", cur)}\n\n📅 <b>Онлайн-запись и заказы</b>\n${range("booking", cur)}\n\n🧩 <b>Система для бизнеса</b>\n${range("system", cur)}\n\n🔌 <b>Интеграция</b>\n${range("integration", cur)}\n\n🛟 <b>Поддержка и хостинг</b>\n${range("support", cur)} в месяц\n\n⚡ <b>Быстрый старт: разбор и прототип</b>\n${range("start", cur)}`,
    how: "<b>⚙️ Как мы работаем</b>\n\n<b>1 · Задача.</b> Вы описываете, что нужно, своими словами.\n<b>2 · Договорённость.</b> Фиксируем объём и цену письменно.\n<b>3 · Каждую неделю.</b> Вы видите рабочую версию, а не отчёты.\n<b>4 · Запуск и поддержка.</b> Остаёмся рядом после старта.\n\nС вами говорит основатель и разработчик, без менеджеров посередине.",
    cases: "<b>🧪 Кейсы и демо</b>\n\nЖивые демо, где можно всё потрогать, и что изменилось у клиентов: меньше рутины, больше записей, порядок в данных.",
    askName: "<b>✍️ Заявка · 1 из 3</b>\nКак вас зовут?",
    askContact: "<b>✍️ Заявка · 2 из 3</b>\nКак с вами связаться? Telegram, телефон или почта.",
    askTask: "<b>✍️ Заявка · 3 из 3</b>\nОпишите задачу в паре слов. Подойдёт и «пока не знаю, нужен совет».",
    done: "✅ <b>Заявка отправлена</b>\n\nЛично посмотрю и отвечу как можно скорее. Ответ придёт сюда.",
    human: "💬 <b>Передал основателю</b>\nОтвет придёт прямо сюда.",
    fallback: "📨 <b>Передал основателю</b>\nОтвет придёт сюда. А пока можно заглянуть в меню 👇",
    pick: "Выберите язык / Choose a language:", langSet: "Язык: русский 🇷🇺", cancelled: "Отменил. Что дальше? 👇",
  },
  en: {
    hello: "<b>Mirelli Studio</b>\n<i>Websites, bots and software that take routine off your hands.</i>\n\nWe build what others call too complex: from a website to the system that runs a whole business.\n\n⚡ A working version every week\n🧾 Scope and price in writing before we start\n👤 You talk to the founder, no managers in between\n\n<b>Where shall we start?</b> 👇",
    btn: { svc: "💼 Services and prices", how: "⚙️ How we work", cases: "🧪 Cases and demos", lead: "✍️ Leave a request", site: "🌐 Open the website", human: "💬 Talk to a person", lang: "🌍 Language", cancel: "✖️ Cancel", calc: "🧮 Calculate the savings", all: "↩️ Menu" },
    services: (cur) => `<b>💼 What we do and what it costs</b>\n<i>Indicative ranges in ${cur}. An exact written estimate comes before any work.</i>\n\n` +
      `🌐 <b>A website that brings enquiries</b>\n${range("site", cur)}\n\n🤖 <b>A Telegram bot or automation</b>\n${range("bot", cur)}\n\n📅 <b>Online booking and orders</b>\n${range("booking", cur)}\n\n🧩 <b>A business system</b>\n${range("system", cur)}\n\n🔌 <b>An integration</b>\n${range("integration", cur)}\n\n🛟 <b>Hosting and support</b>\n${range("support", cur)} per month\n\n⚡ <b>Quick start: analysis and prototype</b>\n${range("start", cur)}`,
    how: "<b>⚙️ How we work</b>\n\n<b>1 · The task.</b> You describe what you need in your own words.\n<b>2 · The agreement.</b> We fix scope and price in writing.\n<b>3 · Every week.</b> You see a working version, not reports.\n<b>4 · Launch and support.</b> We stay around after go-live.\n\nYou talk to the founder and developer, no managers in between.",
    cases: "<b>🧪 Cases and demos</b>\n\nLive demos you can click through, and what changed for clients: less routine, more bookings, order in the data.",
    askName: "<b>✍️ Request · 1 of 3</b>\nWhat is your name?",
    askContact: "<b>✍️ Request · 2 of 3</b>\nHow can we reach you? Telegram, phone or email.",
    askTask: "<b>✍️ Request · 3 of 3</b>\nDescribe the task in a few words. \"Not sure yet, need advice\" is fine too.",
    done: "✅ <b>Request sent</b>\n\nI will look at it personally and reply as soon as possible. The answer will arrive here.",
    human: "💬 <b>Passed to the founder</b>\nThe answer will arrive right here.",
    fallback: "📨 <b>Passed to the founder</b>\nThe answer will arrive here. Meanwhile, have a look at the menu 👇",
    pick: "Выберите язык / Choose a language:", langSet: "Language: English 🇬🇧", cancelled: "Cancelled. What next? 👇",
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
const tgLang = (m) => (["ru", "kk", "uk", "be"].includes(m.from?.language_code) ? "ru" : "en");
const langOf = (m) => langs[String(m.chat.id)] || tgLang(m);
const curOf = (m) => (langOf(m) === "ru" ? "KZT" : "EUR");
const url = (l, hash = "") => (l === "ru" ? `${SITE}/ru/${hash}` : `${SITE}/${hash}`);

// Inline menus. callback_data: "m:<action>" or "l:<lang>".
const menu = (l) => { const b = T[l].btn; return { inline_keyboard: [
  [{ text: b.svc, callback_data: "m:svc" }, { text: b.how, callback_data: "m:how" }],
  [{ text: b.cases, callback_data: "m:cases" }, { text: b.lead, callback_data: "m:lead" }],
  [{ text: b.site, url: url(l) }, { text: b.human, callback_data: "m:human" }],
  [{ text: b.lang, callback_data: "m:lang" }],
] }; };
const back = (l, extra = []) => { const b = T[l].btn; return { inline_keyboard: [...extra, [{ text: b.lead, callback_data: "m:lead" }, { text: b.all, callback_data: "m:menu" }]] }; };
const say = (chat, text, markup) => tg("sendMessage", { chat_id: chat, text, parse_mode: "HTML", reply_markup: markup, disable_web_page_preview: true });
const typing = (chat) => tg("sendChatAction", { chat_id: chat, action: "typing" });
const who = (m) => `${m.from?.first_name || ""} ${m.from?.last_name || ""} ${m.from?.username ? "@" + m.from.username : ""} (id ${m.chat.id})`.trim();

async function toOwner(html, m) {
  const r = await tg("sendMessage", { chat_id: OWNER, parse_mode: "HTML", text: `${html}\n\n👤 <i>${esc(who(m))}</i>\n↩️ Ответьте реплаем на это сообщение, и ответ уйдёт клиенту.` });
  if (r.ok) forwarded.set(r.result.message_id, m.chat.id);
}

async function hello(chat, l) {
  // Clear the old reply keyboard some chats still have, then show the welcome picture with the menu.
  const tmp = await tg("sendMessage", { chat_id: chat, text: "✨", reply_markup: { remove_keyboard: true } });
  if (tmp.ok) tg("deleteMessage", { chat_id: chat, message_id: tmp.result.message_id });
  const r = await tg("sendPhoto", { chat_id: chat, photo: IMG, caption: T[l].hello, parse_mode: "HTML", reply_markup: menu(l) });
  if (!r.ok) await say(chat, T[l].hello, menu(l));
}

// One handler for menu buttons.
async function action(chat, l, key, m) {
  const t = T[l];
  await typing(chat);
  if (key === "menu") return say(chat, t.hello, menu(l));
  if (key === "svc") return say(chat, t.services(curOf(m)), back(l, [[{ text: t.btn.calc, url: url(l, "#pricing") }]]));
  if (key === "how") return say(chat, t.how, back(l));
  if (key === "cases") return say(chat, t.cases, back(l, [[{ text: t.btn.cases, url: url(l, "#work") }]]));
  if (key === "lead") { state.set(chat, { step: "name" }); return say(chat, t.askName, { inline_keyboard: [[{ text: t.btn.cancel, callback_data: "m:cancel" }]] }); }
  if (key === "cancel") { state.delete(chat); return say(chat, t.cancelled, menu(l)); }
  if (key === "human") { await toOwner("💬 <b>Клиент просит связаться</b>", m); return say(chat, t.human, back(l)); }
  if (key === "lang") return say(chat, T.ru.pick, { inline_keyboard: [[{ text: "🇷🇺 Русский", callback_data: "l:ru" }, { text: "🇬🇧 English", callback_data: "l:en" }]] });
}

async function onCallback(q) {
  const msg = q.message;
  if (!msg) return;
  const m = { chat: msg.chat, from: q.from };
  const chat = String(msg.chat.id);
  tg("answerCallbackQuery", { callback_query_id: q.id });
  const [kind, val] = (q.data || "").split(":");
  if (kind === "l" && (val === "ru" || val === "en")) { langs[chat] = val; saveLangs(); state.delete(chat); await say(chat, T[val].langSet); return hello(chat, val); }
  if (kind === "m") return action(chat, langOf(m), val, m);
}

async function onMessage(m) {
  const chat = String(m.chat.id);
  const text = (m.text || "").trim();

  // The owner replies to a forwarded message: send the answer to the client.
  // Any other message from the owner goes through the normal flow, so the owner can try the bot too.
  if (chat === OWNER && m.reply_to_message) {
    const target = forwarded.get(m.reply_to_message.message_id);
    if (target && text) await tg("sendMessage", { chat_id: target, text });
    else await say(chat, "Не нашёл, кому отправить этот ответ (после перезапуска бота старые пересылки забываются).");
    return;
  }

  // /start may carry the website language: https://t.me/<bot>?start=ru
  const st = text.match(/^\/start(?:@\w+)?(?:\s+(\w+))?$/);
  if (st && st[1] && SITE_LANG[st[1]]) { langs[chat] = SITE_LANG[st[1]]; saveLangs(); }

  const l = langOf(m), t = T[l], s = state.get(chat);
  if (st) { state.delete(chat); return hello(chat, l); }
  if (text === "/lang") return action(chat, l, "lang", m);
  if (text === "/menu") return action(chat, l, "menu", m);

  if (s) {
    await typing(chat);
    if (s.step === "name") { s.name = text; s.step = "contact"; return say(chat, t.askContact, { inline_keyboard: [[{ text: t.btn.cancel, callback_data: "m:cancel" }]] }); }
    if (s.step === "contact") { s.contact = text; s.step = "task"; return say(chat, t.askTask, { inline_keyboard: [[{ text: t.btn.cancel, callback_data: "m:cancel" }]] }); }
    if (s.step === "task") {
      state.delete(chat);
      await toOwner(`📩 <b>Новая заявка из бота</b>\n\n👤 ${esc(s.name)}\n📞 ${esc(s.contact)}\n📝 ${esc(text)}`, m);
      return say(chat, t.done, menu(l));
    }
  }

  const low = text.toLowerCase();
  if (/цен|стоим|сколько|price|cost|how much/.test(low)) return action(chat, l, "svc", m);
  if (/как работ|процесс|этап|how do you work|process/.test(low)) return action(chat, l, "how", m);
  if (/кейс|пример|демо|портфолио|case|demo|portfolio/.test(low)) return action(chat, l, "cases", m);

  // Anything else goes to a person.
  await toOwner(`❓ <b>Вопрос из бота</b>\n\n${esc(text || "(не текст)")}`, m);
  return say(chat, t.fallback, menu(l));
}

// Texts shown before the user presses Start (Telegram picks them by the user's Telegram app language).
const ABOUT = {
  en: "Mirelli Studio: websites, bots and custom software. Ask a question or leave a request, we reply personally.",
  ru: "Mirelli Studio: сайты, боты и софт под ключ. Задайте вопрос или оставьте заявку, ответим лично.",
};
const DESC = {
  en: "Hi! This is the Mirelli Studio bot. We build websites, Telegram bots and custom software for business, so routine runs itself and you can focus on the work.\n\nHere you can:\n• see what we do and roughly what it costs\n• learn how we work and how long it takes\n• leave a request, and I will reply personally\n\nPress Start.",
  ru: "Привет! Это бот студии Mirelli Studio. Мы делаем сайты, Telegram-боты и софт для бизнеса, чтобы рутина шла сама, а вы занимались делом.\n\nЗдесь можно:\n• узнать, что мы делаем и сколько это примерно стоит\n• понять, как мы работаем и за какое время\n• оставить заявку, и я отвечу лично\n\nНажмите «Начать».",
};
async function setup() {
  if (process.env.BOT_SETUP === "0") return;
  for (const [code, lc] of [["en", undefined], ["ru", "ru"]]) {
    const extra = lc ? { language_code: lc } : {};
    await tg("setMyShortDescription", { short_description: ABOUT[code], ...extra });
    await tg("setMyDescription", { description: DESC[code], ...extra });
  }
  await tg("setMyCommands", { commands: [{ command: "start", description: "Start / Начать" }, { command: "menu", description: "Menu / Меню" }, { command: "lang", description: "Language / Язык" }] });
}
await setup().catch((e) => console.error("setup:", e.message));

let offset = 0;
console.log("mirelli bot started");
for (;;) {
  try {
    const r = await tg("getUpdates", { offset, timeout: 30, allowed_updates: ["message", "callback_query"] });
    for (const u of r.result || []) { offset = u.update_id + 1; if (u.message && u.message.chat.type === "private") await onMessage(u.message).catch((e) => console.error("handler:", e.message)); else if (u.callback_query) await onCallback(u.callback_query).catch((e) => console.error("callback:", e.message)); }
  } catch (e) { console.error("poll:", e.message); await new Promise((res) => setTimeout(res, 5000)); }
}
