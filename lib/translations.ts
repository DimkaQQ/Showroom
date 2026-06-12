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
      line2: "people love.",
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
          tagline: "E-Commerce Platform",
          description:
            "A full-stack marketplace with real-time inventory tracking, Stripe payments, seller dashboards, and an AI-powered recommendation engine. Handles thousands of concurrent users.",
        },
        {
          tagline: "Team Productivity Suite",
          description:
            "A real-time collaborative project management tool with drag-and-drop Kanban boards, time tracking, Slack integration, and detailed analytics for engineering teams.",
        },
        {
          tagline: "Analytics Dashboard",
          description:
            "Real-time analytics platform with interactive D3 charts, custom reporting, multi-tenant architecture and automated alerts via email and Telegram.",
        },
        {
          tagline: "AI Chat Assistant",
          description:
            "Context-aware conversational AI with multi-model support, file uploads, code execution sandbox, and team knowledge base integration.",
        },
        {
          tagline: "Mobile Banking App",
          description:
            "Secure cross-platform banking app with biometric auth, instant P2P transfers, spending analytics and virtual card management.",
        },
        {
          tagline: "Internal DevOps Platform",
          description:
            "Developer platform for managing deployments across environments, viewing logs, triggering pipelines, and monitoring infrastructure health in one place.",
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
      line2: "которые любят.",
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
          tagline: "E-Commerce платформа",
          description:
            "Full-stack маркетплейс с отслеживанием запасов в реальном времени, оплатой через Stripe, дашбордом продавца и AI-рекомендациями. Выдерживает тысячи одновременных пользователей.",
        },
        {
          tagline: "Инструмент продуктивности",
          description:
            "Real-time система управления проектами с Kanban-досками, трекингом времени, интеграцией Slack и аналитикой для команд разработчиков.",
        },
        {
          tagline: "Аналитический дашборд",
          description:
            "Платформа аналитики в реальном времени с интерактивными D3-графиками, пользовательскими отчётами и автоматическими уведомлениями в email и Telegram.",
        },
        {
          tagline: "AI-ассистент",
          description:
            "Контекстно-зависимый чат с поддержкой нескольких моделей, загрузкой файлов, sandbox для кода и базой знаний команды.",
        },
        {
          tagline: "Мобильный банкинг",
          description:
            "Безопасное кроссплатформенное приложение с биометрической аутентификацией, мгновенными переводами, аналитикой трат и виртуальными картами.",
        },
        {
          tagline: "Внутренняя DevOps-платформа",
          description:
            "Платформа для управления деплоями, просмотра логов, запуска пайплайнов и мониторинга инфраструктуры в одном месте.",
        },
      ],
    },
    contact: {
      label: "// поговорим",
      title1: "Есть проект",
      title2: "в голове?",
      cta: "Давай сделаем.",
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
