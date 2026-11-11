import type { Lang } from "./i18n";
import { caseDe } from "./cases.de";
import { caseFr } from "./cases.fr";
import { caseSk } from "./cases.sk";
import { caseCs } from "./cases.cs";

// One case-study page per project at /work/<id>/ (and /ru/work/<id>/). Facts only: what the product does,
// who it suits, how it is built. No invented clients or results.
export type CaseText = {
  title: string;
  description: string;
  lead: string;
  features: string[];
  audience: string;
};

const base: Record<string, { en: CaseText; ru: CaseText }> = {
  garage: {
    en: {
      title: "Smart Booking and Management System for Car Services | Servisio",
      description: "Booking system for a garage that matches bay, mechanic and parts in stock, with a live job board, SMS approval of extra work, stock control and an owner dashboard. Live demo included.",
      lead: "Servisio runs a car service from booking to hand-over. A customer picks the work, the system finds a bay and a mechanic with the right skill, checks the parts are in stock, and keeps everyone informed as the car moves through the workshop.",
      features: [
        "Booking that matches a free bay, a skilled mechanic and parts in stock, and suggests the best-fitting slot",
        "Plate lookup with vehicle history and service suggestions by mileage",
        "Live timeline of bays and a job board from booked to ready",
        "The customer approves extra work from an SMS link, with the price and the mechanic's note",
        "Parts stock reduced by booked jobs, with order suggestions before it runs out",
        "Roles for reception, mechanic and owner, and an audit log of every change",
      ],
      audience: "Garages, tyre shops and small service centres that book by phone and paper, lose time to no-shows and gaps in the day, and want the owner to see the whole workshop on one screen.",
    },
    ru: {
      title: "Умная система записи и управления автосервисом | Servisio",
      description: "Система записи для автосервиса: подбор поста, мастера и деталей на складе, живая доска работ, согласование доп. работ по SMS, контроль склада и панель владельца. С живой демо.",
      lead: "Servisio ведёт автосервис от записи до выдачи автомобиля. Клиент выбирает работы, система находит пост и мастера с нужным навыком, проверяет наличие деталей и держит всех в курсе, пока машина проходит через мастерскую.",
      features: [
        "Запись, которая подбирает свободный пост, мастера и детали на складе и предлагает лучшее по загрузке время",
        "Поиск по госномеру с историей автомобиля и подсказками по пробегу",
        "Живая шкала постов и доска работ от записи до готовности",
        "Клиент согласует доп. работы по ссылке из SMS, с ценой и заметкой мастера",
        "Склад деталей уменьшается по записанным работам, заказ предлагается до того, как закончится",
        "Роли для администратора, мастера и владельца и журнал всех изменений",
      ],
      audience: "Автосервисы, шиномонтаж и небольшие сервисные центры, которые записывают по телефону и на бумаге, теряют время на неявках и пустых окнах и хотят видеть всю мастерскую на одном экране.",
    },
  },
  clinic: {
    en: {
      title: "Smart Appointment Scheduling for Clinics and Vets | Clinio",
      description: "Appointment system for clinics and vets: no-show risk for each visit, automatic reminders, a waiting list that refills cancelled slots and booking by specialist. Live demo included.",
      lead: "Clinio keeps a clinic's day full. It estimates the chance that each patient will miss a visit, asks the risky ones to confirm, and when someone cancels it offers the slot to the best-fitting patient on the waiting list.",
      features: [
        "No-show risk for every appointment, based on history, confirmation and lead time",
        "Booking by reason: the system picks the specialist and the visit length, with extra time for new patients",
        "A waiting list that ranks patients and refills a cancelled slot in one click",
        "Automatic reminders with confirm and reschedule links, and recall invitations",
        "A calendar per specialist, with an urgent same-day option",
        "Roles for reception, doctor and manager, and an activity log",
      ],
      audience: "Medical, dental and veterinary clinics, therapists and physiotherapists whose chairs sit empty because of missed visits, and who spend the day on the phone confirming and rebooking.",
    },
    ru: {
      title: "Умная запись на приём для клиник и ветеринаров | Clinio",
      description: "Система записи для клиник и ветеринаров: риск неявки по каждому визиту, автоматические напоминания, лист ожидания для отменённых окон и подбор специалиста. С живой демо.",
      lead: "Clinio держит расписание клиники заполненным. Система оценивает вероятность того, что пациент не придёт, просит рискованных подтвердить визит, а при отмене предлагает освободившееся время подходящему пациенту из листа ожидания.",
      features: [
        "Риск неявки по каждому визиту на основе истории, подтверждения и срока записи",
        "Запись по причине обращения: система выбирает специалиста и длительность, с запасом времени для новых пациентов",
        "Лист ожидания, который ранжирует пациентов и заполняет отменённое окно в один клик",
        "Автоматические напоминания со ссылками подтвердить или перенести и приглашения на ежегодный осмотр",
        "Календарь на каждого специалиста и срочная запись на сегодня",
        "Роли для регистратуры, врача и руководителя и журнал действий",
      ],
      audience: "Медицинские, стоматологические и ветеринарные клиники, терапевты и физиотерапевты, у которых кабинеты простаивают из-за неявок и которые проводят день на телефоне, подтверждая и переписывая записи.",
    },
  },
  spaces: {
    en: {
      title: "Coworking and Club Management: Bookings, Memberships, Door Access | Gatehouse",
      description: "One system for coworkings and clubs: desk and room booking, plans and billing, and door access by rules (paid, booked, in hours). Live demo included.",
      lead: "Gatehouse connects the three things a shared space runs on: who booked what, who has paid, and who may open which door. A failed payment closes the door, a room booking opens it only for that time, and the owner sees how full the space is.",
      features: [
        "Desk and room booking with conflict checks and alternatives when a room is taken",
        "Plans with room credits, and a price that follows the member's plan",
        "Door access that follows the rules: active plan, hours, and a booking for meeting rooms",
        "A failed payment suspends access automatically and restores it when paid",
        "A live floor view, a door log and a rule to release rooms nobody arrives for",
        "Roles for front desk, community manager and owner, with revenue and occupancy results",
      ],
      audience: "Coworking spaces, studios, fitness and sports clubs and rented workshops that sell memberships, hand out keys or cards by hand and chase payments manually.",
    },
    ru: {
      title: "Управление коворкингом и клубом: брони, абонементы, доступ | Gatehouse",
      description: "Одна система для коворкингов и клубов: бронирование мест и комнат, тарифы и оплата и доступ в двери по правилам (оплачено, забронировано, в рабочее время). С живой демо.",
      lead: "Gatehouse объединяет три вещи, на которых держится общее пространство: кто что забронировал, кто оплатил и кому какую дверь можно открыть. Неудачный платёж закрывает дверь, бронь комнаты открывает её только на нужное время, а владелец видит, насколько заполнено пространство.",
      features: [
        "Бронирование мест и комнат с проверкой конфликтов и вариантами, если комната занята",
        "Тарифы с часами для переговорных и цена, которая зависит от тарифа участника",
        "Доступ в двери по правилам: активный тариф, часы работы и бронь для переговорных",
        "Неудачный платёж автоматически приостанавливает доступ, а оплата возвращает его",
        "Живая карта пространства, журнал дверей и правило освобождать комнаты, куда никто не пришёл",
        "Роли для администратора, комьюнити-менеджера и владельца, с результатами по выручке и загрузке",
      ],
      audience: "Коворкинги, студии, фитнес- и спортивные клубы и арендуемые мастерские, которые продают абонементы, выдают ключи или карты вручную и вручную собирают оплату.",
    },
  },
  dizeltrade: {
    en: {
      title: "Fuel Distribution ERP Software | DizelTrade Case Study",
      description: "Custom ERP for diesel fuel distribution: depot stock, trips, customer balances, fleet and analytics with role-based access. Live demo included.",
      lead: "DizelTrade is an internal platform for a diesel-fuel distributor. It tracks what arrives at the depot, what leaves on which truck, who has paid and who owes, and what each month earned.",
      features: [
        "Depot stock with receipts, dispatches and a running balance",
        "Trips with truck and driver assignment and delivery confirmation",
        "Customer accounts with outstanding balances",
        "Fleet list for trucks and drivers",
        "Financial analytics by month and by customer",
        "Role-based access so each person sees only what they need",
      ],
      audience: "Fuel distributors, oil depots, haulage and logistics companies that still run on spreadsheets, messengers and paper delivery notes.",
    },
    ru: {
      title: "ERP для дистрибуции топлива | Кейс DizelTrade",
      description: "Заказная ERP для дистрибуции дизельного топлива: остатки на базе, рейсы, долги клиентов, автопарк и аналитика с ролями. Есть живое демо.",
      lead: "DizelTrade — внутренняя платформа дистрибьютора дизельного топлива. Она показывает, что пришло на базу, что и на какой машине уехало, кто заплатил и кто должен, и сколько заработал месяц.",
      features: [
        "Остатки на базе с приходами, отгрузками и текущим балансом",
        "Рейсы с назначением машины и водителя и подтверждением доставки",
        "Карточки клиентов с долгами и балансами",
        "Список автопарка и водителей",
        "Финансовая аналитика по месяцам и клиентам",
        "Роли и права: каждый видит только нужное",
      ],
      audience: "Дистрибьюторам топлива, нефтебазам, транспортным и логистическим компаниям, которые пока работают в таблицах, мессенджерах и на бумажных накладных.",
    },
  },
  rentoworld: {
    en: {
      title: "P2P Car Rental Marketplace Development | RentoWorld Case Study",
      description: "A peer-to-peer car rental marketplace: catalogue and filters, availability calendar, price by dates, booking flow and host tools. Live demo included.",
      lead: "RentoWorld lets private owners rent out their cars and renters book them online. The catalogue is quick to scan, the price is calculated from the dates, and owners manage cars and bookings in one place.",
      features: [
        "Catalogue with type filters and sorting, listings across several European cities",
        "Availability calendar that blocks booked days",
        "Price calculation by dates with long-rental discounts and a service fee",
        "Booking and cancellation with deposit handling",
        "My trips for renters and My cars with earnings for owners",
        "Owner and renter flows in the same account",
      ],
      audience: "Founders building a car-sharing or peer-to-peer rental marketplace, and rental companies moving from phone bookings to online booking.",
    },
    ru: {
      title: "Разработка маркетплейса аренды авто | Кейс RentoWorld",
      description: "P2P-маркетплейс аренды автомобилей: каталог и фильтры, календарь доступности, цена по датам, бронирование и кабинет владельца. Есть демо.",
      lead: "RentoWorld позволяет частным владельцам сдавать машины, а арендаторам бронировать их онлайн. Каталог легко просматривать, цена считается по датам, а владелец управляет машинами и бронями в одном месте.",
      features: [
        "Каталог с фильтрами по типу и сортировкой, объявления в нескольких городах Европы",
        "Календарь доступности, блокирующий занятые дни",
        "Расчёт цены по датам со скидками на длинную аренду и сервисным сбором",
        "Бронирование и отмена с учётом залога",
        "Мои поездки для арендатора и Мои машины с доходом для владельца",
        "Роли владельца и арендатора в одном аккаунте",
      ],
      audience: "Основателям каршеринга и P2P-аренды и прокатным компаниям, которые переходят от бронирования по телефону к онлайн-записи.",
    },
  },
  tradinglearn: {
    en: {
      title: "Trading Education Platform & Paper Trading Simulator | TradingLearn",
      description: "An online trading academy with structured courses, quizzes and a paper-trading simulator with live charts and virtual money. Live demo included.",
      lead: "TradingLearn teaches trading from scratch. Learners work through short lessons and quizzes, then practise on a live candlestick chart with virtual capital before risking real money.",
      features: [
        "Courses and lessons with quizzes, XP and levels",
        "Paper-trading simulator with candlestick charts for BTC, ETH, SOL and XRP",
        "Long and short positions with stop-loss and take-profit",
        "Trade journal with realised and open profit and loss",
        "Leaderboard and achievements that keep learners coming back",
        "Free and paid plans",
      ],
      audience: "Trading schools, brokers, fintech and crypto-education businesses that want hands-on practice inside their course platform.",
    },
    ru: {
      title: "Платформа обучения трейдингу и симулятор | Кейс TradingLearn",
      description: "Онлайн-академия трейдинга: курсы, тесты и симулятор с живыми графиками и виртуальными деньгами. Есть живое демо.",
      lead: "TradingLearn учит трейдингу с нуля. Ученики проходят короткие уроки и тесты, а потом практикуются на свечном графике с виртуальным капиталом, прежде чем рисковать реальными деньгами.",
      features: [
        "Курсы и уроки с тестами, XP и уровнями",
        "Симулятор со свечными графиками BTC, ETH, SOL и XRP",
        "Лонг и шорт со стоп-лоссом и тейк-профитом",
        "Журнал сделок с реализованной и открытой прибылью",
        "Рейтинг и достижения, которые возвращают учеников",
        "Бесплатный и платный тарифы",
      ],
      audience: "Школам трейдинга, брокерам, финтеху и крипто-образованию, которым нужна практика внутри курсовой платформы.",
    },
  },
  shipter: {
    en: {
      title: "AI Product Launch Planner for Indie Founders | Shipter Case Study",
      description: "An AI-assisted launch planner: describe your audience, get a week-by-week distribution plan and track tasks on a launch board. Live demo included.",
      lead: "Shipter turns a product description into a concrete launch plan. It suggests where to find the first customers, what to post and when, and keeps the work on a board that shows what is done and what is late.",
      features: [
        "Project setup with product, audience and budget",
        "AI-generated week-by-week plan across Product Hunt, Reddit, LinkedIn and newsletters",
        "Launch board with tasks, due dates and progress per project",
        "Link tracking to see which channel brings visits",
        "Plans with project and generation limits",
        "Team members and invoices",
      ],
      audience: "Indie hackers, small SaaS teams and agencies that need a repeatable way to plan product launches.",
    },
    ru: {
      title: "ИИ-планировщик запуска продукта | Кейс Shipter",
      description: "ИИ-планировщик запуска: опишите аудиторию, получите план продвижения по неделям и ведите задачи на доске. Есть живое демо.",
      lead: "Shipter превращает описание продукта в конкретный план запуска. Он подсказывает, где искать первых клиентов, что публиковать и когда, и держит работу на доске, где видно сделанное и просроченное.",
      features: [
        "Создание проекта: продукт, аудитория, бюджет",
        "ИИ-план по неделям: Product Hunt, Reddit, LinkedIn, рассылки",
        "Доска запуска с задачами, сроками и прогрессом по проектам",
        "Отслеживание ссылок: какой канал приводит посетителей",
        "Тарифы с лимитами проектов и генераций",
        "Команда и счета",
      ],
      audience: "Независимым разработчикам, небольшим SaaS-командам и агентствам, которым нужен повторяемый процесс запуска продуктов.",
    },
  },
  storage: {
    en: {
      title: "Restaurant Inventory & Purchasing Software | Stockroom Case Study",
      description: "Inventory and purchasing for restaurant groups: stock per venue, minimum levels, auto-drafted supplier orders and receiving. Live demo included.",
      lead: "Stockroom shows a restaurant group what to restock today. It knows the stock in each venue, drafts orders to suppliers for whatever is below minimum, and updates stock when a delivery is received.",
      features: [
        "Stock levels per venue with minimum thresholds",
        "Auto-drafted supplier orders for shortfalls, reviewed before sending",
        "Receiving deliveries and writing off waste",
        "Supplier list with contacts",
        "Stock value and orders in transit at a glance",
        "Several venues in one system",
      ],
      audience: "Restaurant chains, cafes, hotels and catering companies that order from several suppliers and want to stop counting stock in spreadsheets.",
    },
    ru: {
      title: "Софт для закупок и склада ресторанов | Кейс Stockroom",
      description: "Склад и закупки для сети ресторанов: остатки по точкам, минимумы, автосбор заказов поставщикам и приёмка. Есть живое демо.",
      lead: "Stockroom показывает сети ресторанов, что нужно докупить сегодня. Система знает остатки на каждой точке, готовит заказы поставщикам по тому, что ниже минимума, и обновляет склад при приёмке.",
      features: [
        "Остатки по точкам с минимальными порогами",
        "Автосбор заказов поставщикам по нехватке с проверкой перед отправкой",
        "Приёмка поставок и списание",
        "Поставщики с контактами",
        "Стоимость запасов и заказы в пути на одном экране",
        "Несколько точек в одной системе",
      ],
      audience: "Сетям ресторанов, кафе, отелям и кейтерингу, которые заказывают у нескольких поставщиков и хотят уйти от подсчёта остатков в таблицах.",
    },
  },
  caspianflow: {
    en: {
      title: "B2B Fuel Trading Marketplace Development | CaspianFlow Case Study",
      description: "A B2B marketplace for European fuel traders: live price board, offers and requests, landed-cost calculator and paid plans. Live demo included.",
      lead: "CaspianFlow is a marketplace where fuel traders post offers and requests for diesel, gasoline and jet fuel at European terminals, compare them with a live benchmark and work out the delivered cost.",
      features: [
        "Live price board with benchmarks per fuel and hub",
        "Marketplace of offers and requests with filters",
        "Landed-cost calculator for the delivered price, with transport and VAT",
        "My deals with status tracking",
        "Paid plan for contact details through Stripe",
        "Terminals from Rotterdam and Antwerp to Trieste and Constanta",
      ],
      audience: "Commodity trading, energy and logistics businesses building a B2B marketplace or price-discovery tool.",
    },
    ru: {
      title: "Разработка B2B-маркетплейса топлива | Кейс CaspianFlow",
      description: "B2B-маркетплейс для европейских трейдеров топлива: живая доска цен, предложения и запросы, калькулятор доставки, платные тарифы. Есть демо.",
      lead: "CaspianFlow — маркетплейс, где трейдеры размещают предложения и запросы на дизель, бензин и авиатопливо на европейских терминалах, сравнивают их с живым бенчмарком и считают стоимость с доставкой.",
      features: [
        "Живая доска цен с бенчмарками по топливу и хабам",
        "Маркетплейс предложений и запросов с фильтрами",
        "Калькулятор стоимости с доставкой и НДС",
        "Мои сделки со статусами",
        "Платный тариф за контакты через Stripe",
        "Терминалы от Роттердама и Антверпена до Триеста и Констанцы",
      ],
      audience: "Компаниям в торговле сырьём, энергетике и логистике, которые строят B2B-маркетплейс или инструмент ценообразования.",
    },
  },
  restaurant: {
    en: {
      title: "Restaurant Management Software (Orders, Menu, Staff) | RestOS",
      description: "A restaurant operating system: live order board with kitchen view, menu and stop-list, guests, staff and analytics across venues. Live demo included.",
      lead: "RestOS runs the daily work of a restaurant. Orders move across a live board from new to served, the kitchen sees what to cook, and managers see revenue, average check and what is on the stop-list.",
      features: [
        "Live three-column order board with kitchen view and timers",
        "Menu management with a stop-list that warns before sending an order",
        "Guests with loyalty points",
        "Staff and shift overview",
        "Finance and analytics per day and per venue",
        "Several venues in one system",
      ],
      audience: "Independent restaurants, restaurant groups and cafes that need a lighter, cheaper alternative to heavyweight POS suites.",
    },
    ru: {
      title: "Система управления рестораном: заказы, меню, персонал | RestOS",
      description: "Операционная система ресторана: живая доска заказов с кухней, меню и стоп-лист, гости, персонал и аналитика по точкам. Есть демо.",
      lead: "RestOS ведёт ежедневную работу ресторана. Заказы идут по живой доске от нового до выданного, кухня видит, что готовить, а управляющий — выручку, средний чек и стоп-лист.",
      features: [
        "Живая доска заказов из трёх колонок с видом кухни и таймерами",
        "Меню со стоп-листом, который предупреждает при отправке заказа",
        "Гости и баллы лояльности",
        "Персонал и обзор смен",
        "Финансы и аналитика по дням и по точкам",
        "Несколько заведений в одной системе",
      ],
      audience: "Независимым ресторанам, сетям и кафе, которым нужна лёгкая и недорогая альтернатива тяжёлым кассовым системам.",
    },
  },
  hr: {
    en: {
      title: "Employee Onboarding App for Restaurants | RestOS HR Case Study",
      description: "A mobile onboarding app for restaurant staff: learning path, quizzes with XP, certificates and shift checklists, with a manager view. Live demo included.",
      lead: "RestOS HR gets a new waiter productive in days. The app guides them through short modules and quizzes, tracks daily shift checklists and lets managers see who is on track and who is stuck.",
      features: [
        "Learning path with modules, quizzes, XP and levels",
        "Certificates on completion",
        "Daily shift checklists with progress",
        "Team chat with quick AI replies for schedule, uniform and shift swaps",
        "Manager view of progress across the team",
        "Installable as a mobile app (PWA)",
      ],
      audience: "Restaurants, hotels and retail with high staff turnover that need faster, consistent onboarding without a heavy HR system.",
    },
    ru: {
      title: "Приложение для онбординга персонала ресторанов | Кейс RestOS HR",
      description: "Мобильное приложение для онбординга персонала: обучающий путь, тесты с XP, сертификаты и чек-листы смены, плюс вид менеджера. Есть демо.",
      lead: "RestOS HR помогает новому официанту выйти на уровень за дни. Приложение ведёт его по коротким модулям и тестам, отслеживает ежедневные чек-листы смены, а менеджер видит, кто идёт по плану, а кто застрял.",
      features: [
        "Обучающий путь с модулями, тестами, XP и уровнями",
        "Сертификаты по завершении",
        "Ежедневные чек-листы смены с прогрессом",
        "Чат команды с быстрыми ответами ИИ про график, форму и обмен сменами",
        "Вид менеджера: прогресс всей команды",
        "Устанавливается как мобильное приложение (PWA)",
      ],
      audience: "Ресторанам, отелям и ритейлу с высокой текучкой, которым нужен быстрый и единый онбординг без тяжёлой HR-системы.",
    },
  },
  botfactory: {
    en: {
      title: "Telegram Bot Builder & Mini App Development | BotFactory Case Study",
      description: "A visual Telegram bot builder delivered as a Mini App: blocks, live preview, payments, sales funnel and buyers. Live demo included.",
      lead: "BotFactory lets a non-developer build a Telegram bot from blocks, test it in a live Telegram-style preview and publish it. Bots can sell products and courses, and the owner sees sales and where buyers drop off.",
      features: [
        "Visual block editor: message, buttons, question, payment and delivery",
        "Live Telegram-style preview while you edit",
        "Publish and unpublish a bot in one click",
        "Sales, conversion funnel and buyers table",
        "Reminders that recover abandoned payments",
        "Runs as a Telegram Mini App with a web dashboard",
      ],
      audience: "Coaches, studios, course authors and small shops that sell through Telegram, and agencies that build bots for clients.",
    },
    ru: {
      title: "Конструктор Telegram-ботов и разработка Mini App | Кейс BotFactory",
      description: "Визуальный конструктор Telegram-ботов в формате Mini App: блоки, живой предпросмотр, оплата, воронка продаж и покупатели. Есть демо.",
      lead: "BotFactory позволяет человеку без навыков программирования собрать Telegram-бота из блоков, проверить его в живом предпросмотре и опубликовать. Боты продают товары и курсы, а владелец видит продажи и где отваливаются покупатели.",
      features: [
        "Визуальный редактор блоков: сообщение, кнопки, вопрос, оплата, выдача",
        "Живой предпросмотр в стиле Telegram во время редактирования",
        "Публикация и снятие бота одним нажатием",
        "Продажи, воронка конверсии и таблица покупателей",
        "Напоминания, возвращающие брошенные оплаты",
        "Работает как Telegram Mini App с веб-панелью",
      ],
      audience: "Тренерам, студиям, авторам курсов и небольшим магазинам, продающим через Telegram, а также агентствам, которые делают ботов для клиентов.",
    },
  },
};

export const cases: Record<string, Record<Lang, CaseText>> = Object.fromEntries(
  Object.entries(base).map(([id, t]) => [id, { ...t, de: caseDe[id], fr: caseFr[id], sk: caseSk[id], cs: caseCs[id] }])
);
