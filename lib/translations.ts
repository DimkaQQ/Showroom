export type Lang = "en" | "ru";

export const translations = {
  en: {
    nav: {
      services: "Services",
      work: "Work",
      contact: "Contact",
      getInTouch: "Get in touch",
    },
    hero: {
      available: "Available for new projects",
      greeting: "Hi, I'm",
      line1: "I build things",
      line2: "that help.",
      description:
        "Full-stack developer specializing in web & mobile applications, scalable backends, and seamless user experiences.",
      viewWork: "View my work",
      getInTouch: "Get in touch",
      github: "GitHub",
      statProjects: "Projects Shipped",
      statYears: "Years Coding",
      statTech: "Technologies",
    },
    services: {
      label: "// what i do",
      title: "Services",
      subtitle:
        "End-to-end development from idea to deployment — everything you need to ship great software.",
      items: [
        {
          title: "Web Development",
          description:
            "Fast, modern web applications with React and Next.js. From landing pages to complex SPAs.",
        },
        {
          title: "Mobile Apps",
          description:
            "Cross-platform mobile applications for iOS and Android with native-like performance.",
        },
        {
          title: "Backend & APIs",
          description:
            "Scalable REST and GraphQL APIs, microservices, real-time systems and integrations.",
        },
        {
          title: "Database Design",
          description:
            "Optimized database architecture, complex queries, migrations and performance tuning.",
        },
        {
          title: "UI/UX Design",
          description:
            "Pixel-perfect, accessible interfaces. Prototyping, design systems and component libraries.",
        },
        {
          title: "DevOps & Cloud",
          description:
            "CI/CD pipelines, containerization, cloud deployments and infrastructure as code.",
        },
      ],
    },
    showroom: {
      label: "// portfolio",
      title: "Featured Work",
      subtitle:
        "A selection of projects I'm proud of. Each one is live — click to explore it yourself.",
      moreOn: "More projects on",
      explore: "Explore project",
      live: "live",
      projects: [
        {
          tagline: "Distribution Management",
          description:
            "Internal platform for managing diesel fuel distribution: truck fleet, client debts, delivery dispatches, and financial analytics with role-based access control.",
        },
        {
          tagline: "Car Rental Platform",
          description:
            "Online platform for browsing and booking rental cars. Clean catalog UI, booking flow, availability calendar and a simple admin panel for fleet management.",
        },
        {
          tagline: "Trading Education",
          description:
            "Interactive platform to learn trading from scratch. Structured learning modules, quizzes, and a live simulator where users practice with virtual capital in real market conditions.",
        },
        {
          tagline: "Resume / Portfolio",
          description:
            "Animated personal resume site with smooth scroll sections, skill timeline, project showcase and contact form. Designed for a clean, modern first impression.",
        },
        {
          tagline: "Shipping & Logistics",
          description:
            "Web application for managing shipments and logistics operations. Track orders, assign couriers, generate reports and monitor delivery statuses in real time.",
        },
        {
          tagline: "Procurement & Price Verification",
          description:
            "Multi-entity warehouse management system for restaurant chains. Inventory tracking, purchase orders, supplier management, and automated price verification across multiple venues.",
        },
        {
          tagline: "Energy Marketplace",
          description:
            "Professional B2B fuel trading platform for Central Asia and the Caspian Region. Real-time price reference, P2P marketplace for diesel, gasoline and jet fuel, with integrated calculator and Stripe payments.",
        },
        {
          tagline: "Restaurant Management",
          description:
            "Full-featured restaurant OS: live order board with kitchen view, menu and guest management, staff scheduling, loyalty points, financial reports and multi-venue analytics.",
        },
        {
          tagline: "Staff Onboarding & HR",
          description:
            "PWA-based HR platform for restaurant staff. Gamified onboarding with XP and certificates, AI-powered group chat, and daily shift checklists with real-time progress tracking.",
        },
        {
          tagline: "Telegram Bot Builder",
          description:
            "Visual block-based Telegram bot constructor as a Mini App. Drag-and-drop welcome, description, buttons and delivery blocks — publish a live bot in minutes.",
        },
      ],
    },
    contact: {
      label: "// let's talk",
      title1: "Got a project",
      title2: "in mind?",
      cta: "Let's build it.",
      description:
        "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Drop me a line and let's see what we can create together.",
      github: "GitHub",
      telegram: "Telegram",
    },
    footer: {
      builtWith: "Built with Next.js & Tailwind CSS",
    },
  },
  ru: {
    nav: {
      services: "Услуги",
      work: "Работы",
      contact: "Контакт",
      getInTouch: "Написать",
    },
    hero: {
      available: "Открыт для новых проектов",
      greeting: "Привет, я —",
      line1: "Создаю вещи,",
      line2: "которые помогают.",
      description:
        "Full-stack разработчик: веб и мобильные приложения, масштабируемые бэкенды и продуманный UX.",
      viewWork: "Смотреть работы",
      getInTouch: "Связаться",
      github: "GitHub",
      statProjects: "Проектов запущено",
      statYears: "Лет в коде",
      statTech: "Технологий",
    },
    services: {
      label: "// что я делаю",
      title: "Услуги",
      subtitle:
        "Разработка под ключ — от идеи до деплоя. Всё необходимое для выпуска качественного продукта.",
      items: [
        {
          title: "Веб-разработка",
          description:
            "Быстрые современные веб-приложения на React и Next.js. От лендингов до сложных SPA.",
        },
        {
          title: "Мобильные приложения",
          description:
            "Кроссплатформенные приложения для iOS и Android с нативной производительностью.",
        },
        {
          title: "Бэкенд и API",
          description:
            "Масштабируемые REST и GraphQL API, микросервисы, real-time системы и интеграции.",
        },
        {
          title: "Базы данных",
          description:
            "Оптимальная архитектура БД, сложные запросы, миграции и настройка производительности.",
        },
        {
          title: "UI/UX Дизайн",
          description:
            "Pixel-perfect доступные интерфейсы. Прототипирование, дизайн-системы и компонентные библиотеки.",
        },
        {
          title: "DevOps и облако",
          description:
            "CI/CD пайплайны, контейнеризация, деплой в облако и инфраструктура как код.",
        },
      ],
    },
    showroom: {
      label: "// портфолио",
      title: "Избранные работы",
      subtitle:
        "Проекты, которыми я горжусь. Каждый работает вживую — кликни и исследуй сам.",
      moreOn: "Ещё проекты на",
      explore: "Открыть проект",
      live: "живой",
      projects: [
        {
          tagline: "Управление дистрибуцией",
          description:
            "Внутренняя платформа для управления дистрибуцией дизельного топлива: автопарк, долги клиентов, отгрузки и финансовая аналитика с разграничением прав доступа.",
        },
        {
          tagline: "Аренда автомобилей",
          description:
            "Онлайн-платформа для просмотра и бронирования автомобилей напрокат. Каталог, форма бронирования, календарь доступности и панель управления автопарком.",
        },
        {
          tagline: "Обучение трейдингу",
          description:
            "Интерактивная платформа для изучения трейдинга с нуля. Структурированные модули, тесты и живой симулятор для практики с виртуальным капиталом.",
        },
        {
          tagline: "Резюме / Портфолио",
          description:
            "Анимированный сайт-резюме с плавными переходами, таймлайном навыков, витриной проектов и формой обратной связи. Создан для яркого первого впечатления.",
        },
        {
          tagline: "Доставка и логистика",
          description:
            "Веб-приложение для управления доставками и логистическими операциями. Отслеживание заказов, назначение курьеров, отчёты и статусы доставок в реальном времени.",
        },
        {
          tagline: "Закупки и верификация цен",
          description:
            "Система управления складом для сети ресторанов. Учёт товаров, заявки на закупку, управление поставщиками и автоматическая проверка цен по нескольким точкам.",
        },
        {
          tagline: "Энергетический маркетплейс",
          description:
            "B2B платформа для торговли топливом в Центральной Азии и Каспийском регионе. Котировки в реальном времени, P2P маркетплейс дизеля, бензина и авиатоплива, калькулятор и оплата через Stripe.",
        },
        {
          tagline: "Управление рестораном",
          description:
            "Полноценная операционная система ресторана: живая доска заказов с видом кухни, управление меню и гостями, расписание персонала, баллы лояльности и аналитика по заведениям.",
        },
        {
          tagline: "HR и онбординг персонала",
          description:
            "PWA-платформа для сотрудников ресторана. Геймифицированный онбординг с XP и сертификатами, групповой чат с ИИ и ежедневные чек-листы смены с отслеживанием прогресса.",
        },
        {
          tagline: "Конструктор Telegram-ботов",
          description:
            "Визуальный блочный конструктор Telegram-ботов в формате Mini App. Перетаскивай блоки приветствия, описания, кнопок и выдачи — публикуй живого бота за минуты.",
        },
      ],
    },
    contact: {
      label: "// поговорим",
      title1: "Есть идея",
      title2: "или задача?",
      cta: "Решим вместе.",
      description:
        "Всегда открыт для обсуждения новых проектов, идей или возможностей стать частью твоей задумки. Напиши — разберёмся, что можем создать вместе.",
      github: "GitHub",
      telegram: "Telegram",
    },
    footer: {
      builtWith: "Создан на Next.js и Tailwind CSS",
    },
  },
};

export type Translations = typeof translations.en;
