import type { Lang } from "./i18n";
import { de } from "./translations.de";
import { fr } from "./translations.fr";
import { sk } from "./translations.sk";
import { cs } from "./translations.cs";

const en = {
  meta: {
    title: "Software and Websites for Small Business in Europe | Mirelli Studio",
    description:
      "Websites, online booking, simple business systems and Telegram bots for small and medium businesses in Europe, built and kept running. Live demos to try.",
    ogAlt: "Mirelli Studio — software and websites for small and medium businesses in Europe",
  },
  nav: {
    work: "Work",
    services: "Services",
    process: "Process",
    contact: "Contact",
    langLabel: "Language",
    skip: "Skip to content",
    pause: "Pause motion",
    play: "Resume motion",
  },
  hero: {
    descriptor: "Software and websites for small and medium businesses",
    lead:
      "Tell us where your business loses time: bookings, orders, spreadsheets, a website that brings no enquiries. We build the solution, connect it to the tools you already use and keep it running. Below are live examples you can open and explore.",
    viewWork: "See examples",
    statClients: "Clients served",
    statYears: "Years in business",
    statDemos: "Live demos",
  },
  showroom: {
    title: "Examples you can try",
    subtitle:
      "These are working systems running on sample data, not screenshots. Open one and explore it to see how a system for your business could look.",
    explore: "Open the demo",
    caseStudy: "Read the case study",
    tryOff: "Try the demo",
    tryOn: "Back to scrolling",
    projects: [
      {
        tagline: "Distribution management",
        description:
          "Internal platform for diesel fuel distribution: vehicle fleet, customer receivables, delivery dispatch and financial analytics with role-based access control.",
      },
      {
        tagline: "Car rental marketplace",
        description:
          "Online platform for browsing and booking rental cars. Clean catalogue, booking flow, availability calendar and a simple admin panel for the fleet.",
      },
      {
        tagline: "Trading education",
        description:
          "Interactive platform to learn trading from scratch. Structured courses, quizzes and a live simulator where users practise with virtual capital.",
      },
      {
        tagline: "Launch planning for indie products",
        description:
          "AI-assisted launch planner for indie founders. Describe your audience, get a week-by-week distribution plan across Product Hunt, Reddit, LinkedIn and newsletters, and tick tasks off on a launch board.",
      },
      {
        tagline: "Procurement & price control",
        description:
          "Multi-entity warehouse system for restaurant chains. Inventory, purchase orders, supplier management and automated price verification across venues.",
      },
      {
        tagline: "Energy marketplace",
        description:
          "B2B fuel trading platform for European terminals from Rotterdam to Trieste. Live price reference, P2P marketplace for diesel, gasoline and jet fuel, delivery-cost calculator and Stripe payments.",
      },
      {
        tagline: "Restaurant operations",
        description:
          "Restaurant operating system: live order board with kitchen view, menu and guest management, staff scheduling, loyalty points and multi-venue analytics.",
      },
      {
        tagline: "Staff onboarding & HR",
        description:
          "PWA-based HR platform for restaurant staff. Gamified onboarding with XP and certificates, AI-assisted group chat and daily shift checklists.",
      },
      {
        tagline: "Telegram bot builder",
        description:
          "Visual block-based Telegram bot constructor delivered as a Mini App. Drag welcome messages, buttons and delivery blocks, then publish a live bot in minutes.",
      },
    ],
  },
  services: {
    title: "What we can do for your business",
    subtitle: "Pick the problem you recognise. Each one can start small and grow later.",
    items: [
      {
        title: "A website that brings enquiries",
        description:
          "A fast site that is easy to read on a phone, shows your work and turns visitors into enquiries: contact form, quote request, online booking. For tradespeople, garages, salons, clinics and shops.",
      },
      {
        title: "Online booking and orders",
        description:
          "Customers book a time, order food or reserve a car without calling. Automatic confirmations and reminders, and a simple calendar for you and your staff.",
      },
      {
        title: "A simple system instead of Excel",
        description:
          "Stock, clients, jobs, trips, invoices: one place instead of spreadsheets, messengers and paper. Built around how your team already works, so nobody needs weeks of training.",
      },
      {
        title: "Connect what you already use",
        description:
          "Accounting, online shop, payments, CRM, legacy software: we connect them so data is entered once and updates automatically, and we automate repetitive data entry.",
      },
      {
        title: "Bots and automation",
        description:
          "A Telegram bot that answers customers, takes orders or sells courses, and automations that send reminders, reports and invoices without anyone having to remember.",
      },
      {
        title: "Hosting, fixes and support",
        description:
          "We host it in the EU or on your own server, whichever you prefer, keep it updated and secure, and resolve issues quickly when something stops working. One point of contact who responds.",
      },
    ],
  },
  process: {
    title: "How it works",
    subtitle: "From your first message to a working system, in plain steps.",
    steps: [
      {
        title: "Tell us the problem",
        description:
          "Describe what slows your business down using the form below, by email or on Telegram. You receive a personal reply, not a template.",
      },
      {
        title: "Estimate and agreement",
        description:
          "Before any work starts, we agree the scope and price in writing, as a contract or a simple written agreement, whichever you prefer.",
      },
      {
        title: "Build, with weekly previews",
        description:
          "Every week you see a working version and tell us what to change. No long silences, no surprises.",
      },
      {
        title: "Launch and support",
        description:
          "We put it live, train your people if needed and stay available for fixes and next steps.",
      },
    ],
  },
  about: {
    title: "Who you will work with",
    paragraphs: [
      "Mirelli Studio helps small and medium businesses in Europe with software that fits how they really work: a website that brings enquiries, online booking and orders, a simple system instead of Excel, and the support to keep it all running.",
      "You deal with a person, not a ticket system: you describe the problem, we agree scope and price in writing, and you see a working version every week. We work by contract or by a simple written agreement, whichever you prefer.",
    ],
    facts: [
      { value: "30+", label: "clients served" },
      { value: "Most", label: "come back with new projects" },
      { value: "About half", label: "host their systems on their own servers, fully independent of us" },
    ],
  },
  contact: {
    title: "Have a project in mind?",
    description:
      "Describe what you want to build, connect or replace. Every message gets a personal reply with concrete next steps.",
    email: "Email",
    form: {
      name: "Your name",
      email: "Email",
      topic: "What do you need?",
      message: "Describe your project",
      send: "Send message",
      sending: "Sending…",
      ok: "Thank you. Your message has been sent and you will receive a personal reply.",
      invalid: "Please fill in your name, a valid email and a short message.",
      fail: "Your message could not be sent. Please write to us directly at:",
      consent: "These details are used only to reply to you.",
      privacy: "Privacy",
      topics: [
        "A new website or web platform",
        "An internal tool or ERP",
        "A marketplace",
        "A Telegram bot or Mini App",
        "Connecting or replacing an existing system",
        "Something else",
      ],
    },
  },
  footer: {
    privacy: "Privacy and legal",
    rights: "All rights reserved.",
    built: "Built with Next.js",
  },
  eggs: {
    away: "Psst. Come back.",
    konami: "You found it. Discount: none. Respect: unlimited.",
    sudo: "mirelli is not in the sudoers file. This incident will be reported.",
    four04: "You asked for it.",
    console: "You read the console, so we should talk. Try the Konami code. Or type 404.",
  },
  case: {
    back: "All projects",
    what: "What it does",
    who: "Who it is for",
    builtWith: "Technologies",
    tryDemo: "Open the live demo",
    contactCta: "Discuss a similar project",
    other: "More projects",
    sample: "The demo runs on sample data.",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "What does Mirelli Studio do?",
        a: "Mirelli Studio helps small and medium businesses in Europe with the software they actually need: a website that brings enquiries, online booking and orders, a simple system instead of Excel, connections between the tools you already use, Telegram bots, and the hosting and support to keep it all running. You deal with one person, from the first conversation to the finished, documented system.",
      },
      {
        q: "What kinds of products have you built?",
        a: "Nine products, each with a live demo on sample data: a fuel-distribution ERP, a B2B fuel trading marketplace, a restaurant operating system, restaurant inventory and purchasing, an employee onboarding app, a peer-to-peer car rental marketplace, a trading education platform with a simulator, an AI launch planner and a Telegram bot builder.",
      },
      {
        q: "Which technologies do you use?",
        a: "TypeScript, React and Next.js on the front end; Python with FastAPI, Node.js and PostgreSQL on the back end; Redis, Docker and Linux for infrastructure; Stripe for payments and the Telegram Bot API for bots. The choice follows the project, not the other way round.",
      },
      {
        q: "Can you build a Telegram bot or Mini App?",
        a: "Yes. BotFactory, one of the nine products, is a visual Telegram bot builder delivered as a Mini App, with payments, a sales funnel and a buyers dashboard. Bots for sales, support, courses and communities are a core service.",
      },
      {
        q: "How does a project run?",
        a: "Four steps: discovery with a written scope and estimate, design with clickable prototypes, build with working software on a staging URL every week, then launch and support with monitoring and documentation. You see the product grow instead of reading status reports.",
      },
      {
        q: "Do we sign a contract?",
        a: "Whatever is easier for you: a contract, or a simple written agreement that states what is built, by when and for what price. Either way, scope and price are fixed in writing before any work starts, and we deal person to person, with no sales department in between.",
      },
      {
        q: "Do I need to understand IT?",
        a: "No. Describe the problem in your own words: what takes too much time, what customers ask for, what you do by hand today. We explain the options in plain language and propose the simplest one that solves it.",
      },
      {
        q: "Where is the software hosted and how is data handled?",
        a: "This site and its demos run on infrastructure in Frankfurt and use no cookies, analytics or third-party requests. For client projects, systems can be deployed on the EU cloud infrastructure of your choice and designed around data minimisation, with documentation so you are never locked in.",
      },
      {
        q: "How much does a project cost?",
        a: "It depends on scope; projects start from €500. After a short discovery call you receive a written estimate with a fixed scope, so you know what you get and what it costs before anything is built.",
      },
      {
        q: "What kinds of systems can you build or work with?",
        a: "ERP and internal tools, SaaS platforms, marketplaces, customer portals, mobile-first apps and PWAs, Telegram bots and Mini Apps, payment and API integrations, and automation around the systems you already run. If a business process runs on software, Mirelli Studio can build it, connect it to your existing tools, or replace it. If something is outside the studio's strengths, you will hear so before you spend anything.",
      },
      {
        q: "Do clients come back?",
        a: "Yes. We have worked with more than 30 clients, and most of them come back with new projects. About half run their systems on their own servers, fully independent of us.",
      },
      {
        q: "Which languages do you work in?",
        a: "English and Russian. This site is available in English, Russian, German, French, Slovak and Czech.",
      },
    ],
  },
  privacy: {
    metaTitle: "Privacy — Mirelli Studio",
    metaDescription: "What this website and its demos do with your data: no cookies, no analytics, no third-party requests.",
    title: "Privacy",
    back: "Back to the home page",
    updated: "Last updated: November 2026",
    legalTitle: "Provider",
    legalPrefix: "Services are provided by:",
    sections: [
      {
        title: "Summary",
        body: [
          "This website and the live demos set no cookies, run no analytics and load nothing from third-party servers. Fonts and images are served from this site.",
        ],
      },
      {
        title: "What the website does",
        body: [
          "It is a static site. Pages are delivered as files and the server keeps no access logs. The demos run in your browser with sample data. They store nothing on your device and send nothing anywhere.",
        ],
      },
      {
        title: "If you get in touch",
        body: [
          "If you write by email, Telegram or the contact form, Mirelli Studio receives your message, your address or username, and whatever you choose to share. The form passes your message from this site's own server to the studio's Telegram (via Telegram's Bot API); the server does not store it. The details are used to reply and to run the project you discuss, and kept only as long as that needs, or as the law requires for contracts and invoices. They are not passed on or sold.",
        ],
      },
      {
        title: "Who is responsible",
        body: [
          "Mirelli Studio, Darian Mirelli. Contact: darian.mirelli@gmail.com.",
        ],
      },
      {
        title: "Your rights",
        body: [
          "You can ask to see, correct or delete what is held about you, and you can complain to the data protection authority in your country. Write to the address above.",
        ],
      },
    ],
  },
};

export type Translations = typeof en;

const ru: Translations = {
  meta: {
    title: "Софт и сайты для малого бизнеса в Европе | Mirelli Studio",
    description:
      "Сайты, онлайн-запись, простые системы учёта и Telegram-боты для малого и среднего бизнеса в Европе, с поддержкой. Живые примеры можно попробовать.",
    ogAlt: "Mirelli Studio — софт и сайты для малого и среднего бизнеса в Европе",
  },
  nav: {
    work: "Работы",
    services: "Услуги",
    process: "Процесс",
    contact: "Контакт",
    langLabel: "Язык",
    skip: "К содержимому",
    pause: "Остановить движение",
    play: "Возобновить движение",
  },
  hero: {
    descriptor: "Софт и сайты для малого бизнеса",
    lead:
      "Расскажите, что тормозит ваш бизнес: записи, заказы, таблицы, сайт, который не приносит заявок. Мы сделаем решение, подключим его к тому, чем вы уже пользуетесь, и будем поддерживать. Ниже живые примеры, их можно открыть и пощёлкать.",
    viewWork: "Смотреть примеры",
    statClients: "Клиентов",
    statYears: "Лет в деле",
    statDemos: "Живых примеров",
  },
  showroom: {
    title: "Примеры, которые можно попробовать",
    subtitle:
      "Это рабочие системы на тестовых данных, а не картинки. Откройте любую и пощёлкайте, чтобы увидеть, как может выглядеть система для вашего бизнеса.",
    explore: "Открыть демо",
    caseStudy: "Читать кейс",
    tryOff: "Потрогать демо",
    tryOn: "Вернуть прокрутку",
    projects: [
      {
        tagline: "Управление дистрибуцией",
        description:
          "Внутренняя платформа для дистрибуции дизельного топлива: автопарк, долги клиентов, отгрузки и финансовая аналитика с разграничением прав доступа.",
      },
      {
        tagline: "Маркетплейс аренды авто",
        description:
          "Онлайн-платформа для поиска и бронирования автомобилей напрокат. Каталог, форма бронирования, календарь доступности и панель управления автопарком.",
      },
      {
        tagline: "Обучение трейдингу",
        description:
          "Интерактивная платформа для изучения трейдинга с нуля. Курсы, тесты и живой симулятор для практики на виртуальном капитале.",
      },
      {
        tagline: "Планирование запуска продукта",
        description:
          "ИИ-планировщик запуска для независимых основателей: опишите аудиторию, получите план продвижения по неделям (Product Hunt, Reddit, LinkedIn, рассылки) и отмечайте задачи на доске запуска.",
      },
      {
        tagline: "Закупки и контроль цен",
        description:
          "Система управления складом для сети ресторанов. Учёт товаров, заявки на закупку, поставщики и автоматическая проверка цен по всем точкам.",
      },
      {
        tagline: "Энергетический маркетплейс",
        description:
          "B2B-платформа торговли топливом для европейских терминалов от Роттердама до Триеста. Котировки в реальном времени, P2P-маркетплейс дизеля, бензина и авиатоплива, калькулятор доставки и оплата через Stripe.",
      },
      {
        tagline: "Операции ресторана",
        description:
          "Операционная система ресторана: живая доска заказов с видом кухни, меню и гости, расписание персонала, баллы лояльности и аналитика по заведениям.",
      },
      {
        tagline: "HR и онбординг персонала",
        description:
          "PWA-платформа для сотрудников ресторана. Геймифицированный онбординг с XP и сертификатами, чат с ИИ и ежедневные чек-листы смены.",
      },
      {
        tagline: "Конструктор Telegram-ботов",
        description:
          "Визуальный блочный конструктор Telegram-ботов в формате Mini App. Соберите приветствие, кнопки и выдачу и опубликуйте живого бота за минуты.",
      },
    ],
  },
  services: {
    title: "Что мы можем сделать для вашего бизнеса",
    subtitle: "Выберите проблему, которую узнаёте. Любую можно начать с малого и развивать дальше.",
    items: [
      {
        title: "Сайт, который приносит заявки",
        description:
          "Быстрый сайт, который удобно читать с телефона, показывает вашу работу и превращает посетителей в заявки: форма, запрос расчёта, онлайн-запись. Подходит мастерским, автосервисам, салонам, клиникам и магазинам.",
      },
      {
        title: "Онлайн-запись и заказы",
        description:
          "Клиент сам записывается, заказывает еду или бронирует авто без звонка. Автоматические подтверждения и напоминания и простой календарь для вас и сотрудников.",
      },
      {
        title: "Простая система вместо Excel",
        description:
          "Склад, клиенты, заказы, рейсы, счета: одно место вместо таблиц, мессенджеров и бумаги. Строим под то, как ваша команда уже работает, чтобы не приходилось неделями обучать людей.",
      },
      {
        title: "Подключаем то, чем вы уже пользуетесь",
        description:
          "Бухгалтерия, интернет-магазин, платежи, CRM, старые программы: соединяем их, чтобы данные вводились один раз и обновлялись сами, и автоматизируем рутину копирования.",
      },
      {
        title: "Боты и автоматизация",
        description:
          "Telegram-бот, который отвечает клиентам, принимает заказы или продаёт курсы, и автоматизации, которые сами шлют напоминания, отчёты и счета.",
      },
      {
        title: "Хостинг, исправления и поддержка",
        description:
          "Размещаем в ЕС или на вашем собственном сервере, как удобнее, следим за обновлениями и безопасностью и быстро чиним, если что-то перестало работать. Один человек, который отвечает.",
      },
    ],
  },
  process: {
    title: "Как это работает",
    subtitle: "От первого сообщения до работающей системы простыми шагами.",
    steps: [
      {
        title: "Расскажите о задаче",
        description:
          "Напишите через форму ниже, на почту или в Telegram, что тормозит ваш бизнес. Вы получите личный ответ, а не шаблон.",
      },
      {
        title: "Оценка и договорённость",
        description:
          "До начала работы мы письменно фиксируем объём и цену. Это может быть договор или простая письменная договорённость, как вам удобнее.",
      },
      {
        title: "Разработка с еженедельными показами",
        description:
          "Каждую неделю вы видите рабочую версию и говорите, что поменять. Без долгого молчания и сюрпризов.",
      },
      {
        title: "Запуск и поддержка",
        description:
          "Запускаем, при необходимости обучаем ваших людей и остаёмся на связи для исправлений и следующих шагов.",
      },
    ],
  },
  about: {
    title: "С кем вы будете работать",
    paragraphs: [
      "Mirelli Studio помогает малому и среднему бизнесу в Европе с программами, которые подходят под то, как вы реально работаете: сайт, который приносит заявки, онлайн-запись и заказы, простая система вместо Excel и поддержка, чтобы всё продолжало работать.",
      "Вы общаетесь с человеком, а не с тикет-системой: описываете задачу, мы письменно договариваемся об объёме и цене, и каждую неделю вы видите рабочую версию. Работаем по договору или по простой письменной договорённости, как вам удобнее.",
    ],
    facts: [
      { value: "30+", label: "клиентов за время работы" },
      { value: "Большинство", label: "возвращаются с новыми проектами" },
      { value: "Примерно половина", label: "работает на собственных серверах, независимо от нас" },
    ],
  },
  contact: {
    title: "Есть проект на примете?",
    description:
      "Расскажите, что вы хотите создать, подключить или заменить. На каждое сообщение приходит личный ответ с конкретными следующими шагами.",
    email: "Почта",
    form: {
      name: "Ваше имя",
      email: "Почта",
      topic: "Что вам нужно?",
      message: "Расскажите о проекте",
      send: "Отправить",
      sending: "Отправляю…",
      ok: "Спасибо. Сообщение отправлено, вы получите личный ответ.",
      invalid: "Укажите имя, корректную почту и короткое сообщение.",
      fail: "Не получилось отправить. Напишите напрямую:",
      consent: "Эти данные используются только для ответа вам.",
      privacy: "Конфиденциальность",
      topics: [
        "Новая веб-платформа или SaaS",
        "Внутренняя система или ERP",
        "Маркетплейс",
        "Telegram-бот или Mini App",
        "Подключить или заменить существующую систему",
        "Другое",
      ],
    },
  },
  footer: {
    privacy: "Конфиденциальность и реквизиты",
    rights: "Все права защищены.",
    built: "Создано на Next.js",
  },
  eggs: {
    away: "Эй. Вернись.",
    konami: "Нашёл. Скидка: нет. Уважение: безграничное.",
    sudo: "mirelli отсутствует в файле sudoers. Об этом инциденте будет сообщено.",
    four04: "Сам напросился.",
    console: "Раз вы открыли консоль, давайте поговорим. Попробуйте код Konami. Или наберите 404.",
  },
  case: {
    back: "Все работы",
    what: "Что делает",
    who: "Для кого",
    builtWith: "Технологии",
    tryDemo: "Открыть живое демо",
    contactCta: "Обсудить похожий проект",
    other: "Другие работы",
    sample: "Демо работает на примерных данных.",
  },
  faq: {
    title: "Вопросы и ответы",
    items: [
      {
        q: "Чем занимается Mirelli Studio?",
        a: "Mirelli Studio помогает малому и среднему бизнесу в Европе с нужным ему софтом: сайт, который приносит заявки, онлайн-запись и заказы, простая система вместо Excel, связь между инструментами, которыми вы уже пользуетесь, Telegram-боты, а также хостинг и поддержка, чтобы всё работало. Вы общаетесь с одним человеком от первого разговора до готовой документированной системы.",
      },
      {
        q: "Какие продукты вы делали?",
        a: "Девять продуктов, у каждого есть живое демо на примерных данных: ERP для дистрибуции топлива, B2B-маркетплейс топлива, операционная система ресторана, склад и закупки для ресторанов, приложение для онбординга персонала, P2P-маркетплейс аренды авто, платформа обучения трейдингу с симулятором, ИИ-планировщик запуска и конструктор Telegram-ботов.",
      },
      {
        q: "Какие технологии вы используете?",
        a: "TypeScript, React и Next.js на фронтенде; Python с FastAPI, Node.js и PostgreSQL на бэкенде; Redis, Docker и Linux для инфраструктуры; Stripe для платежей и Telegram Bot API для ботов. Технологии выбираются под проект, а не наоборот.",
      },
      {
        q: "Вы делаете Telegram-ботов и Mini App?",
        a: "Да. BotFactory, один из девяти продуктов, — визуальный конструктор Telegram-ботов в формате Mini App с оплатой, воронкой продаж и панелью покупателей. Боты для продаж, поддержки, курсов и сообществ — одна из основных услуг.",
      },
      {
        q: "Как идёт проект?",
        a: "Четыре шага: погружение с письменным объёмом работ и оценкой, дизайн с кликабельными прототипами, разработка с рабочей версией на тестовом адресе каждую неделю, затем запуск и поддержка с мониторингом и документацией. Вы видите, как растёт продукт, а не отчёты о статусе.",
      },
      {
        q: "Мы подписываем договор?",
        a: "Как вам удобнее: договор или простая письменная договорённость, где указано, что делается, к какому сроку и за какую цену. В любом случае объём и цена фиксируются письменно до начала работы, а мы общаемся напрямую, без отдела продаж.",
      },
      {
        q: "Нужно ли мне разбираться в IT?",
        a: "Нет. Опишите задачу своими словами: что занимает слишком много времени, о чём просят клиенты, что вы делаете вручную. Мы объясним варианты простым языком и предложим самый простой, который решает задачу.",
      },
      {
        q: "Где хостится софт и как обрабатываются данные?",
        a: "Этот сайт и его демо работают на инфраструктуре во Франкфурте и не используют cookie, аналитику и сторонние запросы. Для клиентских проектов систему можно развернуть в выбранном вами облаке в ЕС и спроектировать с минимизацией данных и с документацией, чтобы вы не зависели от подрядчика.",
      },
      {
        q: "Сколько стоит проект?",
        a: "Зависит от объёма; проекты начинаются от 500 €. После короткого разговора вы получаете письменную оценку с зафиксированным объёмом работ, поэтому до начала разработки известно, что вы получите и сколько это стоит.",
      },
      {
        q: "С какими системами вы можете работать и что можете создать?",
        a: "ERP и внутренние системы, SaaS-платформы, маркетплейсы, клиентские порталы, mobile-first приложения и PWA, Telegram-ботов и Mini App, платёжные и API-интеграции и автоматизацию вокруг систем, которые у вас уже работают. Если бизнес-процесс держится на программе, Mirelli Studio может создать её, подключить к вашим инструментам или заменить. Если задача вне сильных сторон студии, вы узнаете об этом до того, как что-то потратите.",
      },
      {
        q: "Клиенты возвращаются?",
        a: "Да. Мы работали с более чем 30 клиентами, и большинство возвращается с новыми проектами. Примерно половина работает на собственных серверах, полностью независимо от нас.",
      },
      {
        q: "На каких языках вы работаете?",
        a: "На английском и русском. Сайт доступен на английском, русском, немецком, французском, словацком и чешском.",
      },
    ],
  },
  privacy: {
    metaTitle: "Конфиденциальность — Mirelli Studio",
    metaDescription: "Что сайт и демо делают с вашими данными: без cookie, без аналитики, без запросов к сторонним серверам.",
    title: "Конфиденциальность",
    back: "На главную",
    updated: "Обновлено: ноябрь 2026",
    legalTitle: "Исполнитель",
    legalPrefix: "Услуги оказывает:",
    sections: [
      {
        title: "Коротко",
        body: [
          "Сайт и живые демо не ставят cookie, не ведут аналитику и ничего не загружают со сторонних серверов. Шрифты и изображения отдаются с этого же сайта.",
        ],
      },
      {
        title: "Что делает сайт",
        body: [
          "Это статический сайт. Страницы отдаются как файлы, сервер не хранит журналы посещений. Демо работают в вашем браузере на примерных данных, ничего не сохраняют на устройстве и никуда не отправляют.",
        ],
      },
      {
        title: "Если вы свяжетесь",
        body: [
          "Если вы напишете на почту, в Telegram или через форму, Mirelli Studio получит ваше сообщение, ваш адрес или имя пользователя и то, что вы решите рассказать. Форма передаёт сообщение с собственного сервера этого сайта в Telegram студии (через Bot API Telegram); сервер его не хранит. Данные используются, чтобы ответить и вести обсуждаемый проект, и хранятся столько, сколько для этого нужно или сколько требует закон для договоров и счетов. Они не передаются третьим лицам и не продаются.",
        ],
      },
      {
        title: "Кто отвечает",
        body: [
          "Mirelli Studio, Darian Mirelli. Контакт: darian.mirelli@gmail.com.",
        ],
      },
      {
        title: "Ваши права",
        body: [
          "Вы можете попросить показать, исправить или удалить данные о вас и пожаловаться в орган по защите данных вашей страны. Напишите на адрес выше.",
        ],
      },
    ],
  },
};

export const translations: Record<Lang, Translations> = { en, ru, de, fr, sk, cs };
