import type { Lang } from "./i18n";

const en = {
  meta: {
    title: "Mirelli Studio — Custom Web Platforms & Internal Tools",
    description:
      "Senior-led software studio building custom web platforms, internal tools, APIs and Telegram bots for businesses in Europe. Explore nine live products.",
    ogAlt: "Mirelli Studio — custom software for European businesses",
  },
  nav: {
    work: "Work",
    services: "Services",
    process: "Process",
    contact: "Contact",
    langLabel: "Language",
  },
  hero: {
    descriptor: "custom software studio",
    lead:
      "A senior-led studio building custom web platforms, internal tools and integrations for businesses in Europe. Nine products below, each one a live demo. Open any of them.",
    viewWork: "See the work",
    statProjects: "Products built",
    statYears: "Years in production",
    statTech: "Technologies",
  },
  showroom: {
    title: "Selected work",
    subtitle:
      "Real systems for logistics, hospitality, trading and marketplaces. Every demo runs live with sample data: click through it yourself.",
    explore: "Open the demo",
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
        tagline: "Shipping & logistics",
        description:
          "Web application for shipments and logistics operations. Track orders, assign couriers, generate reports and follow delivery statuses in real time.",
      },
      {
        tagline: "Procurement & price control",
        description:
          "Multi-entity warehouse system for restaurant chains. Inventory, purchase orders, supplier management and automated price verification across venues.",
      },
      {
        tagline: "Energy marketplace",
        description:
          "B2B fuel trading platform for Central Asia and the Caspian region. Real-time price reference, P2P marketplace for diesel, gasoline and jet fuel, calculator and Stripe payments.",
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
      "From the first scoping call to a deployed, documented product. One person accountable for the whole thing.",
    items: [
      {
        title: "Web platforms & SaaS",
        description:
          "Customer portals, marketplaces and subscription products on Next.js, React and TypeScript. Fast, accessible and built to be extended.",
      },
      {
        title: "Internal tools & ERP",
        description:
          "Operations software that replaces spreadsheets: inventory, dispatch, procurement, scheduling and back-office workflows.",
      },
      {
        title: "Backend & integrations",
        description:
          "REST and GraphQL APIs, payment flows, third-party integrations and real-time systems that stay reliable under load.",
      },
      {
        title: "Telegram bots & Mini Apps",
        description:
          "Bots, payments and Mini Apps for sales, support and community, with an admin side your team can actually use.",
      },
      {
        title: "Infrastructure & DevOps",
        description:
          "Containerised deployments, CI/CD, monitoring and backups on EU-hosted infrastructure, documented so you are never locked in.",
      },
      {
        title: "Product design & UX",
        description:
          "Prototypes, design systems and WCAG-aware interfaces, reviewed with you before they turn into code.",
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
      "Describe what you are building or what needs fixing. Every message gets a personal reply with concrete next steps.",
    email: "Email",
  },
  footer: {
    rights: "All rights reserved.",
    built: "Built with Next.js",
  },
};

export type Translations = typeof en;

const ru: Translations = {
  meta: {
    title: "Mirelli Studio — разработка веб-платформ и внутренних систем под заказ",
    description:
      "Студия разработки под руководством senior-инженера: веб-платформы, внутренние системы, API и Telegram-боты для бизнеса в Европе. Девять живых проектов.",
    ogAlt: "Mirelli Studio — программное обеспечение под заказ для бизнеса в Европе",
  },
  nav: {
    work: "Работы",
    services: "Услуги",
    process: "Процесс",
    contact: "Контакт",
    langLabel: "Язык",
  },
  hero: {
    descriptor: "студия разработки на заказ",
    lead:
      "Студия под руководством senior-инженера: веб-платформы, внутренние системы и интеграции для бизнеса в Европе. Ниже девять продуктов, каждый — живая демо-версия. Откройте любой.",
    viewWork: "Смотреть работы",
    statProjects: "Продуктов создано",
    statYears: "Лет в продакшене",
    statTech: "Технологий",
  },
  showroom: {
    title: "Избранные работы",
    subtitle:
      "Реальные системы для логистики, ресторанов, трейдинга и маркетплейсов. Каждое демо работает вживую на тестовых данных: кликайте сами.",
    explore: "Открыть демо",
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
        tagline: "Доставка и логистика",
        description:
          "Веб-приложение для управления доставками и логистикой. Отслеживание заказов, назначение курьеров, отчёты и статусы доставок в реальном времени.",
      },
      {
        tagline: "Закупки и контроль цен",
        description:
          "Система управления складом для сети ресторанов. Учёт товаров, заявки на закупку, поставщики и автоматическая проверка цен по всем точкам.",
      },
      {
        tagline: "Энергетический маркетплейс",
        description:
          "B2B-платформа торговли топливом для Центральной Азии и Каспийского региона. Котировки в реальном времени, P2P-маркетплейс, калькулятор и оплата через Stripe.",
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
      "От первого разговора о задаче до развёрнутого и задокументированного продукта. За всё отвечает один человек.",
    items: [
      {
        title: "Веб-платформы и SaaS",
        description:
          "Клиентские порталы, маркетплейсы и подписочные продукты на Next.js, React и TypeScript. Быстро, доступно и с запасом на развитие.",
      },
      {
        title: "Внутренние системы и ERP",
        description:
          "Софт, который заменяет таблицы: склад, диспетчеризация, закупки, расписание и бэк-офис.",
      },
      {
        title: "Бэкенд и интеграции",
        description:
          "REST и GraphQL API, платёжные потоки, интеграции с внешними сервисами и real-time системы, устойчивые под нагрузкой.",
      },
      {
        title: "Telegram-боты и Mini Apps",
        description:
          "Боты, платежи и Mini Apps для продаж, поддержки и сообществ, с админкой, которой удобно пользоваться команде.",
      },
      {
        title: "Инфраструктура и DevOps",
        description:
          "Контейнерный деплой, CI/CD, мониторинг и бэкапы на инфраструктуре в ЕС, с документацией, чтобы вы не зависели от подрядчика.",
      },
      {
        title: "Продуктовый дизайн и UX",
        description:
          "Прототипы, дизайн-системы и интерфейсы с учётом WCAG, согласованные с вами до того, как станут кодом.",
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
      "Опишите, что вы строите или что нужно починить. На каждое письмо приходит личный ответ с конкретными следующими шагами.",
    email: "Почта",
  },
  footer: {
    rights: "Все права защищены.",
    built: "Создано на Next.js",
  },
};

export const translations: Record<Lang, Translations> = { en, ru };
