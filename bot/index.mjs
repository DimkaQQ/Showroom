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
const LANGS = ["ru", "en", "kk", "de", "fr", "sk", "cs"];
const SITE_LANG = Object.fromEntries(LANGS.map((x) => [x, x])); // /start <site language> -> bot language
const FLAGS = { ru: "🇷🇺 Русский", en: "🇬🇧 English", kk: "🇰🇿 Қазақша", de: "🇩🇪 Deutsch", fr: "🇫🇷 Français", sk: "🇸🇰 Slovenčina", cs: "🇨🇿 Čeština" };
const esc = (x) => String(x).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const IMG = `${SITE}/brand/bot-welcome-1280x720.png`;

// Texts. Every language has the same keys; the price list is built from the shared pricing.json by svc().
const L = {
  ru: {
    hello: "<b>Mirelli Studio</b>\n<i>Сайты, боты и софт, которые берут рутину на себя.</i>\n\nМы строим то, что другие считают слишком сложным: от сайта до системы, на которой держится весь бизнес.\n\n⚡ Рабочая версия каждую неделю\n🧾 Объём и цена письменно до старта\n👤 С вами говорит основатель, без менеджеров\n\n<b>С чего начнём?</b> 👇",
    btn: { svc: "💼 Услуги и цены", how: "⚙️ Как работаем", cases: "🧪 Кейсы и демо", lead: "✍️ Оставить заявку", site: "🌐 Открыть сайт", human: "💬 Написать человеку", lang: "🌍 Язык", cancel: "✖️ Отмена", calc: "🧮 Посчитать выгоду", all: "↩️ В меню" },
    head: "Что мы делаем и сколько это стоит", note: (c) => `Ориентиры в ${c}. Точная смета письменно до начала работы.`, perMonth: "в месяц",
    names: { site: "Сайт, который приносит заявки", bot: "Telegram-бот или автоматизация", booking: "Онлайн-запись и заказы", system: "Система для бизнеса", integration: "Интеграция", support: "Поддержка и хостинг", start: "Быстрый старт: разбор и прототип" },
    how: "<b>⚙️ Как мы работаем</b>\n\n<b>1 · Задача.</b> Вы описываете, что нужно, своими словами.\n<b>2 · Договорённость.</b> Фиксируем объём и цену письменно.\n<b>3 · Каждую неделю.</b> Вы видите рабочую версию, а не отчёты.\n<b>4 · Запуск и поддержка.</b> Остаёмся рядом после старта.\n\nС вами говорит основатель и разработчик, без менеджеров посередине.",
    cases: "<b>🧪 Кейсы и демо</b>\n\nЖивые демо, где можно всё потрогать, и что изменилось у клиентов: меньше рутины, больше записей, порядок в данных.",
    askName: "<b>✍️ Заявка · 1 из 3</b>\nКак вас зовут?", askContact: "<b>✍️ Заявка · 2 из 3</b>\nКак с вами связаться? Telegram, телефон или почта.", askTask: "<b>✍️ Заявка · 3 из 3</b>\nОпишите задачу в паре слов. Подойдёт и «пока не знаю, нужен совет».",
    done: "✅ <b>Заявка отправлена</b>\n\nЛично посмотрю и отвечу как можно скорее. Ответ придёт сюда.", human: "💬 <b>Передал основателю</b>\nОтвет придёт прямо сюда.", fallback: "📨 <b>Передал основателю</b>\nОтвет придёт сюда. А пока можно заглянуть в меню 👇",
    langSet: "Язык: русский 🇷🇺", cancelled: "Отменил. Что дальше? 👇",
  },
  en: {
    hello: "<b>Mirelli Studio</b>\n<i>Websites, bots and software that take routine off your hands.</i>\n\nWe build what others call too complex: from a website to the system that runs a whole business.\n\n⚡ A working version every week\n🧾 Scope and price in writing before we start\n👤 You talk to the founder, no managers in between\n\n<b>Where shall we start?</b> 👇",
    btn: { svc: "💼 Services and prices", how: "⚙️ How we work", cases: "🧪 Cases and demos", lead: "✍️ Leave a request", site: "🌐 Open the website", human: "💬 Talk to a person", lang: "🌍 Language", cancel: "✖️ Cancel", calc: "🧮 Calculate the savings", all: "↩️ Menu" },
    head: "What we do and what it costs", note: (c) => `Indicative ranges in ${c}. An exact written estimate comes before any work.`, perMonth: "per month",
    names: { site: "A website that brings enquiries", bot: "A Telegram bot or automation", booking: "Online booking and orders", system: "A business system", integration: "An integration", support: "Hosting and support", start: "Quick start: analysis and prototype" },
    how: "<b>⚙️ How we work</b>\n\n<b>1 · The task.</b> You describe what you need in your own words.\n<b>2 · The agreement.</b> We fix scope and price in writing.\n<b>3 · Every week.</b> You see a working version, not reports.\n<b>4 · Launch and support.</b> We stay around after go-live.\n\nYou talk to the founder and developer, no managers in between.",
    cases: "<b>🧪 Cases and demos</b>\n\nLive demos you can click through, and what changed for clients: less routine, more bookings, order in the data.",
    askName: "<b>✍️ Request · 1 of 3</b>\nWhat is your name?", askContact: "<b>✍️ Request · 2 of 3</b>\nHow can we reach you? Telegram, phone or email.", askTask: "<b>✍️ Request · 3 of 3</b>\nDescribe the task in a few words. \"Not sure yet, need advice\" is fine too.",
    done: "✅ <b>Request sent</b>\n\nI will look at it personally and reply as soon as possible. The answer will arrive here.", human: "💬 <b>Passed to the founder</b>\nThe answer will arrive right here.", fallback: "📨 <b>Passed to the founder</b>\nThe answer will arrive here. Meanwhile, have a look at the menu 👇",
    langSet: "Language: English 🇬🇧", cancelled: "Cancelled. What next? 👇",
  },
  kk: {
    hello: "<b>Mirelli Studio</b>\n<i>Күнделікті жұмысты өз мойнына алатын сайттар, боттар және софт.</i>\n\nБасқалар тым күрделі деп санайтын нәрсені жасаймыз: сайттан бастап бүкіл бизнес жүретін жүйеге дейін.\n\n⚡ Апта сайын жұмыс істейтін нұсқа\n🧾 Көлем мен баға бастамас бұрын жазбаша\n👤 Сізбен негізін қалаушының өзі сөйлеседі, менеджерлерсіз\n\n<b>Неден бастаймыз?</b> 👇",
    btn: { svc: "💼 Қызметтер мен бағалар", how: "⚙️ Қалай жұмыс істейміз", cases: "🧪 Жобалар мен демо", lead: "✍️ Өтінім қалдыру", site: "🌐 Сайтты ашу", human: "💬 Адамға жазу", lang: "🌍 Тіл", cancel: "✖️ Болдырмау", calc: "🧮 Пайданы есептеу", all: "↩️ Мәзір" },
    head: "Не істейміз және қанша тұрады", note: (c) => `Шамамен бағалар, ${c}. Нақты смета жұмыс басталғанға дейін жазбаша беріледі.`, perMonth: "айына",
    names: { site: "Өтінім әкелетін сайт", bot: "Telegram-бот немесе автоматтандыру", booking: "Онлайн-жазылу және тапсырыстар", system: "Бизнес жүйесі", integration: "Интеграция", support: "Қолдау және хостинг", start: "Жылдам бастау: талдау және прототип" },
    how: "<b>⚙️ Қалай жұмыс істейміз</b>\n\n<b>1 · Тапсырма.</b> Не қажет екенін өз сөзіңізбен сипаттайсыз.\n<b>2 · Келісім.</b> Көлем мен бағаны жазбаша бекітеміз.\n<b>3 · Апта сайын.</b> Есепті емес, жұмыс істейтін нұсқаны көресіз.\n<b>4 · Іске қосу және қолдау.</b> Іске қосқаннан кейін де қасыңыздамыз.\n\nСізбен негізін қалаушы және әзірлеуші сөйлеседі, ортада менеджерлер жоқ.",
    cases: "<b>🧪 Жобалар мен демо</b>\n\nБәрін өзіңіз басып көретін тірі демолар және клиенттерде не өзгергені: рутина азайды, жазылу көбейді, деректерде тәртіп.",
    askName: "<b>✍️ Өтінім · 3-тен 1</b>\nАтыңыз кім?", askContact: "<b>✍️ Өтінім · 3-тен 2</b>\nСізбен қалай байланысуға болады? Telegram, телефон немесе пошта.", askTask: "<b>✍️ Өтінім · 3-тен 3</b>\nТапсырманы бірнеше сөзбен сипаттаңыз. «Әлі білмеймін, кеңес керек» деп жазсаңыз да болады.",
    done: "✅ <b>Өтінім жіберілді</b>\n\nЖеке өзім қарап, мүмкіндігінше тез жауап беремін. Жауап осында келеді.", human: "💬 <b>Негізін қалаушыға жіберілді</b>\nЖауап дәл осында келеді.", fallback: "📨 <b>Негізін қалаушыға жіберілді</b>\nЖауап осында келеді. Әзірге мәзірге қарай аласыз 👇",
    langSet: "Тіл: қазақша 🇰🇿", cancelled: "Болдырмады. Әрі қарай не? 👇",
  },
  de: {
    hello: "<b>Mirelli Studio</b>\n<i>Websites, Bots und Software, die Ihnen die Routine abnehmen.</i>\n\nWir bauen, was andere für zu komplex halten: von der Website bis zum System, das ein ganzes Unternehmen trägt.\n\n⚡ Jede Woche eine lauffähige Version\n🧾 Umfang und Preis schriftlich vor dem Start\n👤 Sie sprechen mit dem Gründer, ohne Manager dazwischen\n\n<b>Womit fangen wir an?</b> 👇",
    btn: { svc: "💼 Leistungen und Preise", how: "⚙️ So arbeiten wir", cases: "🧪 Cases und Demos", lead: "✍️ Anfrage senden", site: "🌐 Website öffnen", human: "💬 Mit einer Person sprechen", lang: "🌍 Sprache", cancel: "✖️ Abbrechen", calc: "🧮 Ersparnis berechnen", all: "↩️ Menü" },
    head: "Was wir machen und was es kostet", note: (c) => `Richtwerte in ${c}. Ein genauer schriftlicher Kostenvoranschlag kommt vor jeder Arbeit.`, perMonth: "pro Monat",
    names: { site: "Eine Website, die Anfragen bringt", bot: "Ein Telegram-Bot oder Automatisierung", booking: "Online-Buchung und Bestellungen", system: "Ein Business-System", integration: "Eine Integration", support: "Hosting und Support", start: "Schnellstart: Analyse und Prototyp" },
    how: "<b>⚙️ So arbeiten wir</b>\n\n<b>1 · Die Aufgabe.</b> Sie beschreiben in eigenen Worten, was Sie brauchen.\n<b>2 · Die Vereinbarung.</b> Wir legen Umfang und Preis schriftlich fest.\n<b>3 · Jede Woche.</b> Sie sehen eine lauffähige Version, keine Berichte.\n<b>4 · Start und Support.</b> Wir bleiben auch nach dem Livegang an Ihrer Seite.\n\nSie sprechen mit dem Gründer und Entwickler, ohne Manager dazwischen.",
    cases: "<b>🧪 Cases und Demos</b>\n\nLive-Demos zum Durchklicken und was sich bei Kunden verändert hat: weniger Routine, mehr Buchungen, Ordnung in den Daten.",
    askName: "<b>✍️ Anfrage · 1 von 3</b>\nWie heißen Sie?", askContact: "<b>✍️ Anfrage · 2 von 3</b>\nWie erreichen wir Sie? Telegram, Telefon oder E-Mail.", askTask: "<b>✍️ Anfrage · 3 von 3</b>\nBeschreiben Sie die Aufgabe in wenigen Worten. „Noch unsicher, brauche Beratung“ ist auch in Ordnung.",
    done: "✅ <b>Anfrage gesendet</b>\n\nIch schaue sie mir persönlich an und antworte so schnell wie möglich. Die Antwort kommt hierher.", human: "💬 <b>An den Gründer weitergegeben</b>\nDie Antwort kommt direkt hierher.", fallback: "📨 <b>An den Gründer weitergegeben</b>\nDie Antwort kommt hierher. Schauen Sie solange ins Menü 👇",
    langSet: "Sprache: Deutsch 🇩🇪", cancelled: "Abgebrochen. Wie weiter? 👇",
  },
  fr: {
    hello: "<b>Mirelli Studio</b>\n<i>Sites, bots et logiciels qui vous libèrent de la routine.</i>\n\nNous construisons ce que d'autres jugent trop complexe : d'un site web au système qui fait tourner toute une entreprise.\n\n⚡ Une version fonctionnelle chaque semaine\n🧾 Périmètre et prix par écrit avant de commencer\n👤 Vous échangez directement avec le fondateur, sans intermédiaires\n\n<b>Par où commençons-nous ?</b> 👇",
    btn: { svc: "💼 Services et tarifs", how: "⚙️ Notre méthode", cases: "🧪 Cas et démos", lead: "✍️ Laisser une demande", site: "🌐 Ouvrir le site", human: "💬 Parler à quelqu'un", lang: "🌍 Langue", cancel: "✖️ Annuler", calc: "🧮 Calculer l'économie", all: "↩️ Menu" },
    head: "Ce que nous faisons et combien cela coûte", note: (c) => `Fourchettes indicatives en ${c}. Un devis écrit précis vient avant tout travail.`, perMonth: "par mois",
    names: { site: "Un site qui apporte des demandes", bot: "Un bot Telegram ou une automatisation", booking: "Réservation en ligne et commandes", system: "Un système métier", integration: "Une intégration", support: "Hébergement et support", start: "Démarrage rapide : analyse et prototype" },
    how: "<b>⚙️ Notre méthode</b>\n\n<b>1 · La tâche.</b> Vous décrivez votre besoin avec vos mots.\n<b>2 · L'accord.</b> Nous fixons périmètre et prix par écrit.\n<b>3 · Chaque semaine.</b> Vous voyez une version qui fonctionne, pas des rapports.\n<b>4 · Lancement et support.</b> Nous restons présents après la mise en ligne.\n\nVous échangez directement avec le fondateur et développeur, sans intermédiaires.",
    cases: "<b>🧪 Cas et démos</b>\n\nDes démos en ligne à essayer, et ce qui a changé pour les clients : moins de routine, plus de réservations, des données en ordre.",
    askName: "<b>✍️ Demande · 1 sur 3</b>\nComment vous appelez-vous ?", askContact: "<b>✍️ Demande · 2 sur 3</b>\nComment vous joindre ? Telegram, téléphone ou e-mail.", askTask: "<b>✍️ Demande · 3 sur 3</b>\nDécrivez la tâche en quelques mots. « Pas encore sûr, besoin de conseils » convient aussi.",
    done: "✅ <b>Demande envoyée</b>\n\nJe l'examine personnellement et réponds dès que possible. La réponse arrivera ici.", human: "💬 <b>Transmis au fondateur</b>\nLa réponse arrivera directement ici.", fallback: "📨 <b>Transmis au fondateur</b>\nLa réponse arrivera ici. En attendant, jetez un œil au menu 👇",
    langSet: "Langue : français 🇫🇷", cancelled: "Annulé. Et ensuite ? 👇",
  },
  sk: {
    hello: "<b>Mirelli Studio</b>\n<i>Weby, boty a softvér, ktoré vám zoberú rutinu z rúk.</i>\n\nStavíme to, čo iní považujú za príliš zložité: od webu po systém, na ktorom stojí celý biznis.\n\n⚡ Každý týždeň funkčná verzia\n🧾 Rozsah a cena písomne pred začiatkom\n👤 Hovoríte so zakladateľom, bez manažérov medzi nami\n\n<b>Čím začneme?</b> 👇",
    btn: { svc: "💼 Služby a ceny", how: "⚙️ Ako pracujeme", cases: "🧪 Realizácie a demá", lead: "✍️ Odoslať dopyt", site: "🌐 Otvoriť web", human: "💬 Hovoriť s človekom", lang: "🌍 Jazyk", cancel: "✖️ Zrušiť", calc: "🧮 Vypočítať úsporu", all: "↩️ Menu" },
    head: "Čo robíme a koľko to stojí", note: (c) => `Orientačné ceny v ${c}. Presný písomný odhad dostanete pred začiatkom práce.`, perMonth: "mesačne",
    names: { site: "Web, ktorý prináša dopyty", bot: "Telegram bot alebo automatizácia", booking: "Online rezervácie a objednávky", system: "Firemný systém", integration: "Integrácia", support: "Hosting a podpora", start: "Rýchly štart: analýza a prototyp" },
    how: "<b>⚙️ Ako pracujeme</b>\n\n<b>1 · Zadanie.</b> Vlastnými slovami opíšete, čo potrebujete.\n<b>2 · Dohoda.</b> Rozsah a cenu zafixujeme písomne.\n<b>3 · Každý týždeň.</b> Vidíte funkčnú verziu, nie reporty.\n<b>4 · Spustenie a podpora.</b> Zostávame pri vás aj po štarte.\n\nHovoríte so zakladateľom a vývojárom, bez manažérov medzi nami.",
    cases: "<b>🧪 Realizácie a demá</b>\n\nŽivé demá, v ktorých si všetko vyskúšate, a čo sa zmenilo u klientov: menej rutiny, viac rezervácií, poriadok v dátach.",
    askName: "<b>✍️ Dopyt · 1 z 3</b>\nAko sa voláte?", askContact: "<b>✍️ Dopyt · 2 z 3</b>\nAko vás môžeme kontaktovať? Telegram, telefón alebo e-mail.", askTask: "<b>✍️ Dopyt · 3 z 3</b>\nOpíšte úlohu pár slovami. Postačí aj „zatiaľ neviem, potrebujem radu“.",
    done: "✅ <b>Dopyt odoslaný</b>\n\nOsobne si ho pozriem a odpoviem čo najskôr. Odpoveď príde sem.", human: "💬 <b>Odovzdané zakladateľovi</b>\nOdpoveď príde priamo sem.", fallback: "📨 <b>Odovzdané zakladateľovi</b>\nOdpoveď príde sem. Zatiaľ sa môžete pozrieť do menu 👇",
    langSet: "Jazyk: slovenčina 🇸🇰", cancelled: "Zrušené. Ako ďalej? 👇",
  },
  cs: {
    hello: "<b>Mirelli Studio</b>\n<i>Weby, boti a software, které vám sundají rutinu z ramen.</i>\n\nStavíme to, co jiní považují za příliš složité: od webu po systém, na kterém stojí celý byznys.\n\n⚡ Každý týden funkční verze\n🧾 Rozsah a cena písemně před začátkem\n👤 Mluvíte se zakladatelem, bez manažerů mezi námi\n\n<b>Čím začneme?</b> 👇",
    btn: { svc: "💼 Služby a ceny", how: "⚙️ Jak pracujeme", cases: "🧪 Realizace a dema", lead: "✍️ Odeslat poptávku", site: "🌐 Otevřít web", human: "💬 Mluvit s člověkem", lang: "🌍 Jazyk", cancel: "✖️ Zrušit", calc: "🧮 Spočítat úsporu", all: "↩️ Menu" },
    head: "Co děláme a kolik to stojí", note: (c) => `Orientační ceny v ${c}. Přesný písemný odhad dostanete před začátkem práce.`, perMonth: "měsíčně",
    names: { site: "Web, který přináší poptávky", bot: "Telegram bot nebo automatizace", booking: "Online rezervace a objednávky", system: "Firemní systém", integration: "Integrace", support: "Hosting a podpora", start: "Rychlý start: analýza a prototyp" },
    how: "<b>⚙️ Jak pracujeme</b>\n\n<b>1 · Zadání.</b> Vlastními slovy popíšete, co potřebujete.\n<b>2 · Dohoda.</b> Rozsah a cenu zafixujeme písemně.\n<b>3 · Každý týden.</b> Vidíte funkční verzi, ne reporty.\n<b>4 · Spuštění a podpora.</b> Zůstáváme po ruce i po startu.\n\nMluvíte se zakladatelem a vývojářem, bez manažerů mezi námi.",
    cases: "<b>🧪 Realizace a dema</b>\n\nŽivá dema, ve kterých si vše vyzkoušíte, a co se změnilo u klientů: méně rutiny, více rezervací, pořádek v datech.",
    askName: "<b>✍️ Poptávka · 1 ze 3</b>\nJak se jmenujete?", askContact: "<b>✍️ Poptávka · 2 ze 3</b>\nJak vás můžeme kontaktovat? Telegram, telefon nebo e-mail.", askTask: "<b>✍️ Poptávka · 3 ze 3</b>\nPopište zadání několika slovy. Stačí i „zatím nevím, potřebuji radu“.",
    done: "✅ <b>Poptávka odeslána</b>\n\nOsobně se na ni podívám a odpovím co nejdříve. Odpověď přijde sem.", human: "💬 <b>Předáno zakladateli</b>\nOdpověď přijde přímo sem.", fallback: "📨 <b>Předáno zakladateli</b>\nOdpověď přijde sem. Zatím se můžete podívat do menu 👇",
    langSet: "Jazyk: čeština 🇨🇿", cancelled: "Zrušeno. Jak dál? 👇",
  },
};
const ICON = { site: "🌐", bot: "🤖", booking: "📅", system: "🧩", integration: "🔌", support: "🛟", start: "⚡" };
const T = Object.fromEntries(Object.entries(L).map(([l, o]) => [l, { ...o, services: (cur) => `<b>💼 ${o.head}</b>\n<i>${o.note(cur)}</i>\n\n` + Object.keys(ICON).map((id) => `${ICON[id]} <b>${o.names[id]}</b>\n${range(id, cur)}${id === "support" ? " " + o.perMonth : ""}`).join("\n\n") }]));

const state = new Map(); // chat id -> { step, name, contact }
const forwarded = new Map(); // owner message id -> user chat id (kept for this process lifetime)

async function tg(method, body) {
  const r = await fetch(`${API}/${method}`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body), signal: AbortSignal.timeout(40_000) });
  const j = await r.json().catch(() => ({}));
  if (!j.ok) console.error(method, "failed:", j.description || r.status);
  return j;
}
const tgLang = (m) => { const c = (m.from?.language_code || "").slice(0, 2); return LANGS.includes(c) ? c : ["uk", "be"].includes(c) ? "ru" : "en"; };
const langOf = (m) => langs[String(m.chat.id)] || tgLang(m);
const curOf = (m) => (["ru", "kk"].includes(langOf(m)) ? "KZT" : "EUR");
const url = (l, hash = "") => (l === "en" ? `${SITE}/${hash}` : `${SITE}/${l}/${hash}`);

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
  if (key === "lang") { const bs = LANGS.map((x) => ({ text: FLAGS[x], callback_data: "l:" + x })); return say(chat, "🌍 Language / Язык", { inline_keyboard: [bs.slice(0, 2), bs.slice(2, 4), bs.slice(4)] }); }
}

async function onCallback(q) {
  const msg = q.message;
  if (!msg) return;
  const m = { chat: msg.chat, from: q.from };
  const chat = String(msg.chat.id);
  tg("answerCallbackQuery", { callback_query_id: q.id });
  const [kind, val] = (q.data || "").split(":");
  if (kind === "l" && LANGS.includes(val)) { langs[chat] = val; saveLangs(); state.delete(chat); await say(chat, T[val].langSet); return hello(chat, val); }
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
  kk: "Mirelli Studio: сайттар, боттар және софт. Сұрақ қойыңыз немесе өтінім қалдырыңыз, жауап береміз.",
  de: "Mirelli Studio: Websites, Bots und Software. Frage stellen oder Anfrage senden, wir antworten persönlich.",
  fr: "Mirelli Studio : sites, bots et logiciels. Posez une question ou laissez une demande, on répond.",
  sk: "Mirelli Studio: weby, boty a softvér. Opýtajte sa alebo nechajte dopyt, odpovieme osobne.",
  cs: "Mirelli Studio: weby, boti a software. Zeptejte se nebo nechte poptávku, odpovíme osobně.",
};
const DESC = {
  en: "Hi! This is the Mirelli Studio bot. We build websites, Telegram bots and custom software for business, so routine runs itself and you can focus on the work.\n\nHere you can:\n• see what we do and roughly what it costs\n• learn how we work and how long it takes\n• leave a request, and I will reply personally\n\nPress Start.",
  ru: "Привет! Это бот студии Mirelli Studio. Мы делаем сайты, Telegram-боты и софт для бизнеса, чтобы рутина шла сама, а вы занимались делом.\n\nЗдесь можно:\n• узнать, что мы делаем и сколько это примерно стоит\n• понять, как мы работаем и за какое время\n• оставить заявку, и я отвечу лично\n\nНажмите «Начать».",
  kk: "Сәлем! Бұл Mirelli Studio студиясының боты. Біз сайттар, Telegram-боттар және бизнеске арналған софт жасаймыз, күнделікті жұмыс өздігінен жүрсін, ал сіз өз ісіңізбен айналысыңыз.\n\nМұнда:\n• біз не істейтінімізді және шамамен бағасын біле аласыз\n• қалай және қанша уақытта жұмыс істейтінімізді түсінесіз\n• өтінім қалдырасыз, мен жеке өзім жауап беремін\n\nБастау үшін төмендегі түймені басыңыз.",
  de: "Hallo! Das ist der Bot von Mirelli Studio. Wir bauen Websites, Telegram-Bots und Software für Unternehmen, damit die Routine von allein läuft und Sie sich auf Ihre Arbeit konzentrieren können.\n\nHier können Sie:\n• sehen, was wir machen und was es ungefähr kostet\n• erfahren, wie wir arbeiten und wie lange es dauert\n• eine Anfrage senden, ich antworte persönlich\n\nZum Loslegen unten auf den Button tippen.",
  fr: "Bonjour ! Voici le bot de Mirelli Studio. Nous créons des sites, des bots Telegram et des logiciels pour les entreprises, pour que la routine tourne toute seule et que vous vous concentriez sur votre activité.\n\nIci, vous pouvez :\n• voir ce que nous faisons et à peu près combien cela coûte\n• savoir comment nous travaillons et en combien de temps\n• laisser une demande, je réponds personnellement\n\nAppuyez sur le bouton ci-dessous pour commencer.",
  sk: "Ahoj! Toto je bot štúdia Mirelli Studio. Robíme weby, Telegram boty a softvér pre firmy, aby rutina bežala sama a vy ste sa mohli venovať práci.\n\nTu môžete:\n• zistiť, čo robíme a približne koľko to stojí\n• pochopiť, ako pracujeme a ako dlho to trvá\n• nechať dopyt, odpoviem osobne\n\nZačnite tlačidlom nižšie.",
  cs: "Ahoj! Tohle je bot studia Mirelli Studio. Děláme weby, Telegram boty a software pro firmy, aby rutina běžela sama a vy se mohli věnovat práci.\n\nTady můžete:\n• zjistit, co děláme a přibližně kolik to stojí\n• pochopit, jak pracujeme a jak dlouho to trvá\n• nechat poptávku, odpovím osobně\n\nZačněte tlačítkem níže.",
};
async function setup() {
  if (process.env.BOT_SETUP === "0") return;
  for (const code of Object.keys(ABOUT)) {
    const extra = code === "en" ? {} : { language_code: code }; // English is the default for every other Telegram language
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
