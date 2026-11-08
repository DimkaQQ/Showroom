import type { Lang } from "./i18n";
import { de } from "./translations.de";
import { fr } from "./translations.fr";

const en = {
  meta: {
    title: "Custom Software Development Studio in Europe | Mirelli Studio",
    description:
      "Mirelli Studio builds custom ERP and internal tools, SaaS platforms, B2B marketplaces and Telegram bots for European businesses. Nine live product demos. EU-hosted.",
    ogAlt: "Mirelli Studio — custom software for European businesses",
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
    descriptor: "Custom software studio",
    lead:
      "Custom software for European businesses. Whatever your business runs on, it can be built, connected to what you already have, or replaced. Nine real products below, each a live demo on sample data.",
    viewWork: "See the work",
    statProjects: "Products built",
    statYears: "Years in production",
    statTech: "Hosted in Frankfurt",
  },
  showroom: {
    title: "Selected work",
    subtitle:
      "Real systems for logistics, hospitality, trading and marketplaces. Every demo runs live with sample data in place of client data: click through it yourself.",
    explore: "Open the demo",
    caseStudy: "Read the case study",
    tryOff: "Try the demo",
    tryOn: "Back to scrolling",
    projects: [
      {
        tagline: "Distribution management",
        description:
          "Internal platform for diesel fuel distribution: truck fleet, client debts, delivery dispatches and financial analytics with role-based access control.",
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
    title: "Services",
    subtitle:
      "From the first scoping call to a deployed, documented product.",
    items: [
      {
        title: "Web platforms & SaaS",
        description:
          "Customer portals, B2B and P2P marketplaces and subscription SaaS products on Next.js, React and TypeScript. Fast, accessible and built to be extended.",
      },
      {
        title: "Internal tools & ERP",
        description:
          "Custom ERP and operations software that replaces spreadsheets: inventory management, dispatch and logistics, procurement, scheduling and back-office workflows.",
      },
      {
        title: "Backend & integrations",
        description:
          "Connect and automate what you already run: ERP, CRM, accounting, payment providers and legacy systems through REST and GraphQL APIs, webhooks and data imports, plus real-time systems that stay reliable under load.",
      },
      {
        title: "Telegram bots & Mini Apps",
        description:
          "Telegram bot and Mini App development for sales, support, courses and community, with payments and an admin side your team can actually use.",
      },
      {
        title: "Infrastructure & DevOps",
        description:
          "Containerised deployments, CI/CD, monitoring and backups on EU-hosted infrastructure, documented so you are never locked in.",
      },
      {
        title: "Product design & UX",
        description:
          "Beautiful, easy-to-use interfaces: prototypes, design systems and WCAG-aware screens, reviewed with you before they turn into code, including mobile-first apps and PWAs.",
      },
    ],
  },
  process: {
    title: "How a project runs",
    subtitle: "Four steps, no surprises.",
    steps: [
      {
        title: "Discovery",
        description:
          "Goals, users, scope and a clear estimate are agreed in writing before any code is written.",
      },
      {
        title: "Design",
        description:
          "Clickable prototypes and a design system, reviewed with you early while changes are still cheap.",
      },
      {
        title: "Build",
        description:
          "Working software on a staging URL every week. You see the product grow, not status reports.",
      },
      {
        title: "Launch & support",
        description:
          "Deployment, monitoring, documentation and a handover that leaves you in control of your product.",
      },
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
      ok: "Thank you. Your message is on its way and will get a personal reply.",
      invalid: "Please fill in your name, a valid email and a short message.",
      fail: "Sorry, that did not go through. Please write directly to:",
      consent: "These details are used only to reply to you.",
      privacy: "Privacy",
      topics: [
        "A new web platform or SaaS",
        "An internal tool or ERP",
        "A marketplace",
        "A Telegram bot or Mini App",
        "Connecting or replacing an existing system",
        "Something else",
      ],
    },
  },
  footer: {
    privacy: "Privacy",
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
    back: "All work",
    what: "What it does",
    who: "Who it is for",
    builtWith: "Built with",
    tryDemo: "Open the live demo",
    contactCta: "Discuss a similar project",
    other: "More work",
    sample: "The demo runs on sample data.",
  },
  faq: {
    title: "Questions, answered",
    items: [
      {
        q: "What does Mirelli Studio do?",
        a: "Mirelli Studio designs and builds custom software for businesses in Europe: ERP systems and internal tools, SaaS platforms, B2B marketplaces, restaurant and logistics software, and Telegram bots and Mini Apps. Every project goes from the first call to a deployed, documented product.",
      },
      {
        q: "What kinds of products have you built?",
        a: "Nine real products, each with a live demo on sample data: a fuel-distribution ERP, a B2B fuel trading marketplace, a restaurant operating system, restaurant inventory and purchasing, an employee onboarding app, a peer-to-peer car rental marketplace, a trading education platform with a simulator, an AI launch planner and a Telegram bot builder.",
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
        a: "Yes. Clients are happy with what they get and come back with new projects.",
      },
      {
        q: "Which languages do you work in?",
        a: "English and Russian. This site is available in English, Russian, German and French.",
      },
    ],
  },
  privacy: {
    metaTitle: "Privacy — Mirelli Studio",
    metaDescription: "What this website and its demos do with your data: no cookies, no analytics, no third-party requests.",
    title: "Privacy",
    back: "Back to the home page",
    updated: "Last updated: November 2026",
    sections: [
      {
        title: "Short version",
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
    title: "Разработка ПО на заказ в Европе: ERP, SaaS, Telegram-боты | Mirelli Studio",
    description:
      "Mirelli Studio разрабатывает заказные ERP и внутренние системы, SaaS-платформы, B2B-маркетплейсы и Telegram-ботов для бизнеса в Европе. Девять живых демо. Хостинг в ЕС.",
    ogAlt: "Mirelli Studio — программное обеспечение под заказ для бизнеса в Европе",
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
    descriptor: "Студия разработки на заказ",
    lead:
      "Заказное ПО для бизнеса в Европе. Что бы ни лежало в основе вашего бизнеса, это можно создать, подключить к тому, что у вас уже есть, или заменить. Ниже девять реальных продуктов, у каждого живое демо на примерных данных.",
    viewWork: "Смотреть работы",
    statProjects: "Продуктов создано",
    statYears: "Лет в продакшене",
    statTech: "Хостинг во Франкфурте",
  },
  showroom: {
    title: "Избранные работы",
    subtitle:
      "Реальные системы для логистики, ресторанов, трейдинга и маркетплейсов. Каждое демо работает вживую на примерных данных вместо данных клиентов: кликайте сами.",
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
    title: "Услуги",
    subtitle:
      "От первого разговора о задаче до развёрнутого и задокументированного продукта.",
    items: [
      {
        title: "Веб-платформы и SaaS",
        description:
          "Клиентские порталы, B2B- и P2P-маркетплейсы и подписочные SaaS-продукты на Next.js, React и TypeScript. Быстро, доступно и с запасом на развитие.",
      },
      {
        title: "Внутренние системы и ERP",
        description:
          "Заказная ERP и операционный софт, который заменяет таблицы: складской учёт, диспетчеризация и логистика, закупки, расписание и бэк-офис.",
      },
      {
        title: "Бэкенд и интеграции",
        description:
          "Связь и автоматизация того, что у вас уже работает: ERP, CRM, бухгалтерия, платёжные сервисы и старые системы через REST и GraphQL API, вебхуки и импорт данных, плюс real-time системы, устойчивые под нагрузкой.",
      },
      {
        title: "Telegram-боты и Mini Apps",
        description:
          "Разработка Telegram-ботов и Mini App для продаж, поддержки, курсов и сообществ, с платежами и админкой, которой удобно пользоваться команде.",
      },
      {
        title: "Инфраструктура и DevOps",
        description:
          "Контейнерный деплой, CI/CD, мониторинг и бэкапы на инфраструктуре в ЕС, с документацией, чтобы вы не зависели от подрядчика.",
      },
      {
        title: "Продуктовый дизайн и UX",
        description:
          "Красивые и удобные интерфейсы: прототипы, дизайн-системы и экраны с учётом WCAG, согласованные с вами до того, как станут кодом, включая mobile-first приложения и PWA.",
      },
    ],
  },
  process: {
    title: "Как идёт проект",
    subtitle: "Четыре шага, без сюрпризов.",
    steps: [
      {
        title: "Погружение",
        description:
          "Цели, пользователи, объём работ и понятная оценка фиксируются письменно до начала разработки.",
      },
      {
        title: "Дизайн",
        description:
          "Кликабельные прототипы и дизайн-система, согласованные на раннем этапе, пока правки дёшевы.",
      },
      {
        title: "Разработка",
        description:
          "Рабочая версия на тестовом адресе каждую неделю. Вы видите, как растёт продукт, а не отчёты о статусе.",
      },
      {
        title: "Запуск и поддержка",
        description:
          "Деплой, мониторинг, документация и передача, после которой продукт остаётся под вашим контролем.",
      },
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
    privacy: "Конфиденциальность",
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
        a: "Mirelli Studio проектирует и разрабатывает заказное программное обеспечение для бизнеса в Европе: ERP и внутренние системы, SaaS-платформы, B2B-маркетплейсы, софт для ресторанов и логистики, Telegram-ботов и Mini App. Каждый проект идёт от первого разговора до запущенного и задокументированного продукта.",
      },
      {
        q: "Какие продукты вы делали?",
        a: "Девять реальных продуктов, у каждого есть живое демо на примерных данных: ERP для дистрибуции топлива, B2B-маркетплейс топлива, операционная система ресторана, склад и закупки для ресторанов, приложение для онбординга персонала, P2P-маркетплейс аренды авто, платформа обучения трейдингу с симулятором, ИИ-планировщик запуска и конструктор Telegram-ботов.",
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
        a: "Да. Клиенты довольны результатом и возвращаются с новыми проектами.",
      },
      {
        q: "На каких языках вы работаете?",
        a: "На английском и русском. Сайт доступен на английском, русском, немецком и французском.",
      },
    ],
  },
  privacy: {
    metaTitle: "Конфиденциальность — Mirelli Studio",
    metaDescription: "Что сайт и демо делают с вашими данными: без cookie, без аналитики, без запросов к сторонним серверам.",
    title: "Конфиденциальность",
    back: "На главную",
    updated: "Обновлено: ноябрь 2026",
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

export const translations: Record<Lang, Translations> = { en, ru, de, fr };
