# Пакет запуска: Instagram, профили, отзывы, статьи, почта

Все тексты написаны так, чтобы их можно было вставить как есть. Цифры результатов подтверждены вами (см. `lib/results.ts`), клиентов по именам не называем.

---

## 1. Instagram (@mirelli.studio)

**Картинки:** девять постов 1080×1350 лежат в `public/brand/ig/post-01.png` … `post-09.png` (в сетке 3×3 читаются как единый набор). Пересоздать: `node tools/brand-instagram.mjs`.

**Имя (ищется по ключевым словам):** `Mirelli Studio | Software & Bots`

**Bio (до 150 знаков):**
```
Websites, Telegram bots & custom software
For businesses worldwide 🌍
12 live demos ↓
DM "DEMO"
```
**Ссылка:** `mirelli.eu` · **Кнопка «Написать»:** почта `info@mirelli.eu` · **Категория:** Software company.

### Порядок и подписи (публикуйте с 1 по 9, по одному в день или два)

| № | Картинка | Подпись EN | Подпись RU |
|---|---|---|---|
| 1 | We build the impossible | We build websites, Telegram bots and custom software for businesses around the world. Live demos in the link in bio. #softwaredevelopment #telegrambot #websitedesign #automation | Делаем сайты, Telegram-боты и софт для бизнеса по всему миру. Живые демо по ссылке в профиле. |
| 2 | 12 live demos | Twelve working systems on sample data, each built for a real client. Open any of them and click around. Which one is closest to your business? | Двенадцать рабочих систем на тестовых данных, каждая сделана для реального клиента. Откройте любую и покликайте. Какая ближе всего к вашему бизнесу? |
| 3 | What we build | Websites that bring enquiries, Telegram bots that take orders, and software that replaces Excel and phone calls. | Сайты, которые приносят заявки, Telegram-боты, которые принимают заказы, и софт вместо Excel и звонков. |
| 4 | How we work | Four steps: tell us the problem, agree scope and price in writing, see a working version every week, launch and support. | Четыре шага: вы описываете задачу, мы письменно фиксируем объём и цену, каждую неделю вы видите рабочую версию, запуск и поддержка. |
| 5 | −40% no-shows | A car service moved bookings online with reminders: no-shows down 40%, bookings up 30%. Results confirmed by the client. | Автосервис перенёс запись онлайн с напоминаниями: неявки −40%, записи +30%. Результат подтверждён клиентом. |
| 6 | −60% accounting time | A fuel distributor: orders processed 40% faster, time on accounting and documents down 60%. | Топливная дистрибуция: заказы обрабатываются на 40% быстрее, время на бухгалтерию и документы −60%. |
| 7 | 2–3 → 8–10 clients | A car rental business: from 2–3 to 8–10 clients a month after a new online booking site. | Прокат авто: с 2–3 до 8–10 клиентов в месяц после нового сайта с онлайн-бронированием. |
| 8 | −20% losses | A warehouse: losses down 20%, stock easier to check and keep. | Склад: потери −20%, остатки проще проверять и вести. |
| 9 | Got a task? | Describe your task in a message or write to info@mirelli.eu. You get a personal reply with concrete next steps. | Опишите задачу в сообщении или напишите на info@mirelli.eu. Ответ личный, с конкретными шагами. |

Первый комментарий под постом 2 (пишете сами): «Which of these 12 is closest to your business? I'll send the demo.»

**Highlights** (обложки уже есть в `public/brand/highlight-*.png`): Demos, Process, Clients, About, Contact. Для Demos сделайте по сториз на каждое демо (скриншот + название).

---

## 2. Отзывы: где оставлять

Просите только реальных клиентов, сами тексты за них не пишите, скидки и подарки за отзыв не предлагайте.
1. **Google Business Profile** (бизнес с выездом, адрес можно скрыть). Самый заметный отзыв для поиска.
2. **Clutch** и **GoodFirms**: отзыв на международных каталогах веб-студий (Clutch сам проверяет клиента по созвону).
3. **LinkedIn**: рекомендация на личном профиле и отзыв на странице компании.
4. **Trustpilot**: открытая площадка для любой компании.
5. **Казахстан:** 2GIS и Яндекс Карты (нужен адрес или зона обслуживания).
6. **Сам сайт:** если клиент разрешит, вышлите текст и имя, я добавлю блок отзывов (сейчас он спрятан, пока нет реальных).

**Сообщение клиенту (RU):**
> Здравствуйте! Рады, что система работает. Если не сложно, оставьте пару строк о нашей работе: что было до, что изменилось, как проходило общение. Вот ссылка: …  Это займёт 2 минуты и очень поможет студии. Если хотите, чтобы мы показали ваш результат на сайте, напишите, в каком виде (с названием или без).

**Сообщение клиенту (EN):**
> Hi! Glad the system is running well. If you have two minutes, could you leave a few lines about working with us: what it was like before, what changed, how communication went? Here is the link: …  If you are happy for us to show your result on our website, let us know how you want it credited (with or without your name).

---

## 3. Как писать статьи

Одна хорошая статья в месяц значит больше десятка каталогов.
1. **Тема:** реальный кейс с вашей цифрой («как мы сократили время на документы на 60%»), или вопрос клиента, который вы слышите часто («сколько стоит Telegram-бот», «чем заменить Excel»).
2. **Структура (700-1200 слов):** кто клиент и в чём боль → что мы сделали (3-5 решений простыми словами) → результат с цифрой → что бы сделали иначе → как повторить в вашем бизнесе. Один скриншот демо, одна ссылка на страницу проекта на mirelli.eu.
3. **Где публиковать:** Хабр, vc.ru, dev.to, Medium, LinkedIn Articles. Каждая публикация должна оставаться полезной и без вашей рекламы, ссылка на сайт одна и по делу.
4. **После публикации:** короткий пересказ в Instagram и Telegram-канале, ссылка на статью. Через две недели смотрите в Search Console, какие запросы появились.
5. **Не копируйте текст на несколько площадок один в один** (дубли вредят), на второй площадке меняйте введение и заголовок.

**Черновик первой статьи** (подтвердите детали, отмеченные [ ]):

> **Заголовок:** Как мы сократили время на бухгалтерию и документы на 60% в топливной дистрибуции
> **Введение:** У дистрибьютора дизельного топлива заказы, водители и документы жили в разных таблицах и мессенджерах. [Опишите, сколько человек и сколько времени на это уходило.]
> **Что сделали:** одна внутренняя платформа: автопарк, задолженности клиентов, отправки и финансовая аналитика, доступы по ролям. [Добавьте 1-2 решения, которыми вы гордитесь, например отслеживание водителей.]
> **Результат:** заказы обрабатываются на 40% быстрее, время на бухгалтерию и документы сократилось на 60%.
> **Что бы сделали иначе:** [одна честная мысль].
> **Как повторить у себя:** с чего начать: выписать, что делается руками, посчитать часы (калькулятор на сайте считает это сам), выбрать одну задачу и сделать её первой.
> **Ссылка:** живое демо на mirelli.eu (данные вымышленные).

---

## 4. Заполнение профилей (копируйте и вставляйте)

**Название везде:** Mirelli Studio · **Сайт:** https://mirelli.eu · **Почта:** info@mirelli.eu · **Основана:** 2023

**LinkedIn (страница компании)**
- Слоган (до 120 знаков): `Websites, Telegram bots and custom software for businesses worldwide`
- Отрасль: Software Development · Размер: 1 сотрудник (self-employed)
- О нас: `Mirelli Studio builds websites that bring enquiries, Telegram bots, online booking and ordering, and simple business systems that replace Excel and phone calls. We work with businesses around the world, remotely. You talk directly to the founder and developer: scope and price are agreed in writing before work starts, and you see a working version every week. Twelve live demos built for real clients are open at mirelli.eu.`
- Специализации: Web development, Telegram bots, Business automation, Booking systems, ERP, Integrations

**GitHub (организация `mirelli-studio` или личный профиль, README):**
```
# Mirelli Studio
Websites, Telegram bots and custom software for businesses worldwide.
- Website: https://mirelli.eu
- Live demos (sample data): https://mirelli.eu/#work
- Contact: info@mirelli.eu
```
Закрепите репозитории, которые не стыдно показать, и добавьте в описание каждого ссылку на mirelli.eu.

**Behance / Dribbble:** по одному проекту на каждое демо: скриншоты из `public/shots/*.webp`, описание = текст страницы проекта на сайте, ссылка на живое демо.

**Clutch / GoodFirms / Upwork (агентство):**
- Заголовок: `Websites, Telegram bots and custom software`
- Описание: тот же текст «О нас», плюс «Typical project: from a few weeks. Written estimate before we start.»
- Услуги: Web development, Mobile-first / PWA, Telegram bot development, Business automation, Integrations.

**Google Business Profile:** тип «Бизнес с выездом/онлайн», категория `Software company` (+ `Website designer`), сайт, телефон не обязателен. Описание (до 750 знаков): текст «О нас» + список услуг.

**Product Hunt (BotFactory):** название `BotFactory`, слоган (до 60 знаков) `Build a Telegram bot visually, no code`, ссылка на демо.

**Telegram-канал:** название `Mirelli Studio`, описание `Websites, bots and software for business. Cases, builds, honest numbers. Bot: @Mirelli_studio_bot`.

**X / Twitter:** bio `Websites, Telegram bots & custom software for businesses worldwide. Live demos ↓` + ссылка на сайт (баннер: `public/brand/banner-x-1500x500.png`).

---

## 5. Почта info@ и отправка с неё

**Проверено (DNS):**
- MX: `mx1.efwd.spaceship.net`, `mx2.efwd.spaceship.net` → входящая почта пересылается из Spaceship в Gmail. Это работает только на приём.
- SPF: `v=spf1 include:spf.efwd.spaceship.net ~all` → в нём нет Google, поэтому письма, отправленные из Gmail от имени info@mirelli.eu, могут уходить в спам.
- DKIM и DMARC: записей нет.
- Тестовое письмо себе на info@: Gmail склеивает копию с отправленным (одинаковый Message-ID), поэтому проверить приём таким способом нельзя. Пусть кто-то другой (или другой ваш ящик) напишет на info@mirelli.eu.

**Что поменять в DNS (Spaceship → Advanced DNS):**
1. Заменить TXT на `@`: `v=spf1 include:spf.efwd.spaceship.net include:_spf.google.com ~all` (запись одна, не добавляйте вторую).
2. Добавить TXT на `_dmarc`: `v=DMARC1; p=none; rua=mailto:info@mirelli.eu`.
3. Через сутки проверить: отправьте письмо с info@ на `check-auth@verifier.port25.com` или на mail-tester.com, оценка должна быть 8-10.

**Отправка с info@ из Gmail:** Gmail → шестерёнка → Все настройки → Аккаунты и импорт → «Отправлять письма как» → добавить `info@mirelli.eu`; SMTP `smtp.gmail.com`, порт 587, TLS, имя пользователя и пароль приложения от Gmail; подтвердить письмо, которое придёт на info@. Потом «Отвечать с того адреса, на который было отправлено письмо».
Честно: без платной почты (Google Workspace, Zoho) подписи DKIM для вашего домена не будет. Для нескольких писем в день этого достаточно, для рассылок нужен платный ящик.
