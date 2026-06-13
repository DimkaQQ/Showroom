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
          tagline: "Company Website",
          description:
            "Corporate website for MoraTech built with Next.js. Showcases services, team, and case studies with a fast, SEO-optimized static architecture.",
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
          tagline: "Корпоративный сайт",
          description:
            "Корпоративный сайт MoraTech на Next.js. Услуги, команда и кейсы — с быстрой SEO-оптимизированной статической архитектурой.",
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
