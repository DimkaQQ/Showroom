import type { Lang } from "./i18n";

// Copy that is new in the 2026 redesign: hero, the project wizard, the command palette, what each demo and service
// helps with, and a few small hidden messages. Everything else reuses lib/translations.ts.
// The German, French, Slovak, Czech and Kazakh strings should get a quick read by a native speaker before launch.
export type Hybrid = {
  hero: { l1: string; l2: string; words: string[]; lead: string };
  build: {
    title: string; q1: string; q2: string; notesLabel: string; notesPh: string; langLabel: string; langPh: string;
    briefHead: string; kBusiness: string; kNeeds: string; kClosest: string; kLang: string; kNotes: string; kReach: string; tbd: string;
    near: string; tryFirst: string; noDemo: string; next: string; back: string; step: string; of: string; q4: string; reach2: string;
    blueprint: string; modsWord: string;
    types: string[]; mods: string[];
  };
  pal: { placeholder: string; go: string; project: string; openDemo: string; copyEmail: string; openTg: string; nothing: string; search: string; emailCopied: string; builder: string };
  eggs2: { challenge: string; logo: string; coffee: string; year: string };
  /** What each demo helps with, in the order of `projects` in lib/data.ts. */
  helps: string[][];
  /** What each service delivers, in the order of translations.services.items. */
  chips: string[][];
};

export const tgLabel: Record<Lang, string> = {
  en: "Message us on Telegram", ru: "Написать в Telegram", kk: "Telegram-да жазу", de: "Auf Telegram schreiben", fr: "Écrire sur Telegram", sk: "Napísať na Telegram", cs: "Napsat na Telegram",
};

export const supportLine: Record<Lang, string> = {
  en: "Already a client? Write to",
  ru: "Уже клиент? Пишите на",
  de: "Schon Kunde? Schreiben Sie an",
  fr: "Déjà client ? Écrivez à",
  sk: "Už ste náš klient? Píšte na",
  cs: "Už jste náš klient? Pište na",
  kk: "Клиент болсаңыз, мына мекенжайға жазыңыз:",
};

export const hybrid: Record<Lang, Hybrid> = {
  en: {
    hero: { l1: "We try the new.", l2: "We build the", words: ["impossible", "unreal", "beautiful", "fast"], lead: "We build websites, online booking, business systems and Telegram bots for companies of any size. New tools, hard problems, results people want to show off." },
    build: {
      title: "Sketch your system in a minute", q1: "What do you run?", q2: "What should it do?", notesLabel: "Anything unusual or hard?", notesPh: "For example: three locations, two languages, must talk to our accounting tool.",
      langLabel: "Languages for your customers", langPh: "English, Slovak, Russian", briefHead: "Project brief", kBusiness: "Business", kNeeds: "Needs", kClosest: "Closest demo", kLang: "Languages", kNotes: "Notes", kReach: "Telegram or phone", tbd: "to be discussed",
      near: "Closest demo", tryFirst: "Try it first", noDemo: "No close demo. Describe it and we will find the right approach.",
      next: "Next", back: "Back", step: "Step", of: "of", q4: "How can we reach you?", reach2: "Telegram or phone (optional)", blueprint: "Your system", modsWord: "modules",
      types: ["Garage or car service", "Clinic or vet", "Restaurant or cafe", "Coworking or club", "Warehouse or shop stock", "Logistics or delivery", "Rental or marketplace", "Courses or training", "Telegram bot", "A website that brings enquiries", "Something else"],
      mods: ["Online booking", "Reminders (SMS, email, Telegram)", "Live board for staff", "Stock control", "Payments", "Door access", "Telegram bot", "Roles and audit log", "Owner analytics", "Several languages", "Integrations (accounting, CRM, shop)", "Hosting on your own server"],
    },
    pal: { placeholder: "Search projects, sections, actions", go: "Go to", project: "Project", openDemo: "Open demo", copyEmail: "Copy email", openTg: "Open Telegram", nothing: "Nothing found.", search: "Search", emailCopied: "Email copied.", builder: "Project brief" },
    eggs2: { challenge: "Challenge accepted.", logo: "M is for Mirelli. And for made to order.", coffee: "Coffee loaded. Back to building.", year: "Est. 2023. Still shipping." },
    helps: [
      ["Fewer idle bays", "Extra work approved by SMS", "Parts never run out unnoticed"],
      ["Fewer missed visits", "Cancelled slots get refilled", "Reminders go out by themselves"],
      ["Doors open only by the rules", "Failed payments handled automatically", "Unused rooms get released"],
      ["Deliveries and trucks in one place", "Customer debts under control", "Stock balance always current"],
      ["Customers book in minutes", "The calendar blocks booked days", "Prices calculated for you"],
      ["Learn by practising", "Progress that keeps people coming back", "Practice with virtual money"],
      ["A clear launch plan", "Tasks week by week", "See which channel brings visits"],
      ["Know what is in stock", "Draft orders before shortages", "Prices checked across venues"],
      ["Live price reference", "Deals tracked end to end", "Delivered price calculated"],
      ["Orders from kitchen to table", "Stop-list warns before ordering", "Revenue per day and venue"],
      ["New staff trained faster", "Shift checklists on a phone", "Answers to common questions"],
      ["Launch a bot in minutes", "No coding needed", "See sales and buyers"],
    ],
    chips: [
      ["More enquiries", "Quote requests", "Works on every phone"],
      ["Fewer no-shows", "Automatic reminders", "Online payments"],
      ["Stock and orders", "Roles for your team", "Reports for the owner"],
      ["Accounting", "Online shops", "Payments", "CRM"],
      ["Orders in Telegram", "Reminders to customers", "Daily reports"],
      ["Fast, reliable servers", "Online around the clock", "Quick fixes"],
    ],
  },
  ru: {
    hero: { l1: "Мы пробуем новое.", l2: "Мы строим", words: ["невозможное", "нереальное", "красивое", "быстрое"], lead: "Мы делаем сайты, онлайн-запись, системы для бизнеса и Telegram-ботов для компаний любого размера. Новые инструменты, сложные задачи, результат, которым хочется хвастаться." },
    build: {
      title: "Набросайте свою систему за минуту", q1: "Чем вы занимаетесь?", q2: "Что она должна делать?", notesLabel: "Что-то необычное или сложное?", notesPh: "Например: три точки, два языка, связь с нашей бухгалтерской программой.",
      langLabel: "Языки для ваших клиентов", langPh: "Русский, английский, словацкий", briefHead: "Описание задачи", kBusiness: "Бизнес", kNeeds: "Нужно", kClosest: "Ближайшее демо", kLang: "Языки", kNotes: "Заметки", kReach: "Telegram или телефон", tbd: "обсудим",
      near: "Ближайшее демо", tryFirst: "Попробовать", noDemo: "Близкого демо нет. Опишите задачу, и мы подберём подход.",
      next: "Дальше", back: "Назад", step: "Шаг", of: "из", q4: "Как с вами связаться?", reach2: "Telegram или телефон (по желанию)", blueprint: "Ваша система", modsWord: "модулей",
      types: ["Автосервис или шиномонтаж", "Клиника или ветеринар", "Ресторан или кафе", "Коворкинг или клуб", "Склад или остатки в магазине", "Логистика или доставка", "Аренда или маркетплейс", "Курсы или обучение", "Telegram-бот", "Сайт, который приносит заявки", "Что-то другое"],
      mods: ["Онлайн-запись", "Напоминания (SMS, почта, Telegram)", "Живая доска для сотрудников", "Складской учёт", "Оплата", "Доступ по двери", "Telegram-бот", "Роли и журнал действий", "Аналитика для владельца", "Несколько языков", "Интеграции (бухгалтерия, CRM, магазин)", "Хостинг на вашем сервере"],
    },
    pal: { placeholder: "Искать проекты, разделы, действия", go: "Перейти", project: "Проект", openDemo: "Открыть демо", copyEmail: "Скопировать почту", openTg: "Открыть Telegram", nothing: "Ничего не найдено.", search: "Поиск", emailCopied: "Почта скопирована.", builder: "Описание задачи" },
    eggs2: { challenge: "Вызов принят.", logo: "M значит Mirelli. И ещё «на заказ».", coffee: "Кофе загружен. Продолжаем строить.", year: "Основано в 2023. Всё ещё выпускаем." },
    helps: [
      ["Меньше простоя постов", "Доп. работы согласуются по SMS", "Детали не заканчиваются незаметно"],
      ["Меньше неявок", "Освободившиеся слоты заполняются", "Напоминания уходят сами"],
      ["Двери открываются по правилам", "Неоплата обрабатывается сама", "Пустые комнаты освобождаются"],
      ["Рейсы и машины в одном месте", "Долги клиентов под контролем", "Остатки на базе всегда актуальны"],
      ["Клиент бронирует за минуты", "Календарь блокирует занятые дни", "Цена считается сама"],
      ["Учатся на практике", "Прогресс, который удерживает", "Тренировка на виртуальных деньгах"],
      ["Понятный план запуска", "Задачи по неделям", "Видно, какой канал приводит людей"],
      ["Видно, что на складе", "Заказы готовы до дефицита", "Цены проверяются по точкам"],
      ["Живые цены на рынке", "Сделки видны от начала до конца", "Цена с доставкой считается сама"],
      ["Заказы от кухни до стола", "Стоп-лист предупреждает", "Выручка по дням и точкам"],
      ["Новички обучаются быстрее", "Чек-листы смены в телефоне", "Ответы на частые вопросы"],
      ["Бот за несколько минут", "Без программирования", "Видно продажи и покупателей"],
    ],
    chips: [
      ["Больше заявок", "Запросы на расчёт", "Работает на любом телефоне"],
      ["Меньше неявок", "Автоматические напоминания", "Онлайн-оплата"],
      ["Склад и заказы", "Роли для команды", "Отчёты для владельца"],
      ["Бухгалтерия", "Интернет-магазин", "Платежи", "CRM"],
      ["Заказы в Telegram", "Напоминания клиентам", "Ежедневные отчёты"],
      ["Быстрые и надёжные серверы", "Онлайн круглосуточно", "Быстрые исправления"],
    ],
  },
  de: {
    hero: { l1: "Wir probieren Neues aus.", l2: "Wir bauen das", words: ["Unmögliche", "Unglaubliche", "Schöne", "Schnelle"], lead: "Wir entwickeln Websites, Online-Buchung, Geschäftssysteme und Telegram-Bots für Unternehmen jeder Größe. Neue Werkzeuge, schwierige Aufgaben, Ergebnisse, die man gern zeigt." },
    build: {
      title: "Skizzieren Sie Ihr System in einer Minute", q1: "Was betreiben Sie?", q2: "Was soll es können?", notesLabel: "Etwas Besonderes oder Schwieriges?", notesPh: "Zum Beispiel: drei Standorte, zwei Sprachen, Anbindung an unsere Buchhaltung.",
      langLabel: "Sprachen für Ihre Kunden", langPh: "Deutsch, Englisch, Slowakisch", briefHead: "Projektbeschreibung", kBusiness: "Geschäft", kNeeds: "Bedarf", kClosest: "Passende Demo", kLang: "Sprachen", kNotes: "Hinweise", kReach: "Telegram oder Telefon", tbd: "wird besprochen",
      near: "Passende Demo", tryFirst: "Zuerst ausprobieren", noDemo: "Keine passende Demo. Beschreiben Sie Ihr Anliegen, wir finden den richtigen Ansatz.",
      next: "Weiter", back: "Zurück", step: "Schritt", of: "von", q4: "Wie erreichen wir Sie?", reach2: "Telegram oder Telefon (optional)", blueprint: "Ihr System", modsWord: "Module",
      types: ["Werkstatt oder Autoservice", "Praxis oder Tierarzt", "Restaurant oder Café", "Coworking oder Club", "Lager oder Warenbestand", "Logistik oder Lieferung", "Vermietung oder Marktplatz", "Kurse oder Schulung", "Telegram-Bot", "Eine Website, die Anfragen bringt", "Etwas anderes"],
      mods: ["Online-Buchung", "Erinnerungen (SMS, E-Mail, Telegram)", "Live-Übersicht für das Team", "Lagerverwaltung", "Zahlungen", "Türzutritt", "Telegram-Bot", "Rollen und Änderungsprotokoll", "Auswertungen für die Inhaber", "Mehrere Sprachen", "Anbindungen (Buchhaltung, CRM, Shop)", "Hosting auf Ihrem eigenen Server"],
    },
    pal: { placeholder: "Projekte, Abschnitte, Aktionen suchen", go: "Gehe zu", project: "Projekt", openDemo: "Demo öffnen", copyEmail: "E-Mail kopieren", openTg: "Telegram öffnen", nothing: "Nichts gefunden.", search: "Suche", emailCopied: "E-Mail kopiert.", builder: "Projektbeschreibung" },
    eggs2: { challenge: "Herausforderung angenommen.", logo: "M wie Mirelli. Und wie Maßarbeit.", coffee: "Kaffee geladen. Weiter geht's.", year: "Seit 2023. Wir liefern weiter." },
    helps: [
      ["Weniger Leerlauf an den Plätzen", "Mehrarbeit per SMS freigegeben", "Teile gehen nicht unbemerkt aus"],
      ["Weniger verpasste Termine", "Abgesagte Termine werden neu besetzt", "Erinnerungen laufen von selbst"],
      ["Türen öffnen nach Regeln", "Zahlungsausfälle werden automatisch behandelt", "Ungenutzte Räume werden freigegeben"],
      ["Touren und Fahrzeuge an einem Ort", "Kundenforderungen im Griff", "Lagerbestand immer aktuell"],
      ["Kunden buchen in Minuten", "Kalender sperrt belegte Tage", "Preise werden berechnet"],
      ["Lernen durch Üben", "Fortschritt, der motiviert", "Üben mit virtuellem Geld"],
      ["Ein klarer Launch-Plan", "Aufgaben Woche für Woche", "Sehen, welcher Kanal Besucher bringt"],
      ["Bestand im Blick", "Bestellentwürfe vor Engpässen", "Preise über Standorte geprüft"],
      ["Live-Preisreferenz", "Geschäfte von Anfang bis Ende verfolgt", "Lieferpreis wird berechnet"],
      ["Bestellungen von der Küche bis zum Tisch", "Stopp-Liste warnt vor dem Bestellen", "Umsatz pro Tag und Standort"],
      ["Neue Mitarbeitende schneller eingearbeitet", "Schicht-Checklisten am Handy", "Antworten auf häufige Fragen"],
      ["Bot in Minuten starten", "Ohne Programmieren", "Verkäufe und Käufer im Blick"],
    ],
    chips: [
      ["Mehr Anfragen", "Angebotsanfragen", "Läuft auf jedem Handy"],
      ["Weniger No-Shows", "Automatische Erinnerungen", "Online-Zahlung"],
      ["Lager und Bestellungen", "Rollen für Ihr Team", "Auswertungen für die Inhaber"],
      ["Buchhaltung", "Onlineshops", "Zahlungen", "CRM"],
      ["Bestellungen in Telegram", "Erinnerungen an Kunden", "Tägliche Berichte"],
      ["Schnelle, zuverlässige Server", "Rund um die Uhr online", "Schnelle Fehlerbehebung"],
    ],
  },
  fr: {
    hero: { l1: "On teste le nouveau.", l2: "On construit", words: ["l'impossible", "l'incroyable", "le beau", "le rapide"], lead: "Nous créons des sites web, la réservation en ligne, des systèmes de gestion et des bots Telegram pour des entreprises de toute taille. Nouveaux outils, problèmes difficiles, des résultats dont on est fier." },
    build: {
      title: "Esquissez votre système en une minute", q1: "Que gérez-vous ?", q2: "Que doit-il faire ?", notesLabel: "Quelque chose d'inhabituel ou de difficile ?", notesPh: "Par exemple : trois sites, deux langues, lien avec notre logiciel de comptabilité.",
      langLabel: "Langues pour vos clients", langPh: "Français, anglais, slovaque", briefHead: "Description du projet", kBusiness: "Activité", kNeeds: "Besoins", kClosest: "Démo la plus proche", kLang: "Langues", kNotes: "Remarques", kReach: "Telegram ou téléphone", tbd: "à discuter",
      near: "Démo la plus proche", tryFirst: "L'essayer d'abord", noDemo: "Pas de démo proche. Décrivez votre besoin, nous trouverons la bonne approche.",
      next: "Suivant", back: "Retour", step: "Étape", of: "sur", q4: "Comment vous joindre ?", reach2: "Telegram ou téléphone (facultatif)", blueprint: "Votre système", modsWord: "modules",
      types: ["Garage ou centre auto", "Clinique ou vétérinaire", "Restaurant ou café", "Coworking ou club", "Entrepôt ou stock de boutique", "Logistique ou livraison", "Location ou marketplace", "Cours ou formation", "Bot Telegram", "Un site qui apporte des demandes", "Autre chose"],
      mods: ["Réservation en ligne", "Rappels (SMS, e-mail, Telegram)", "Tableau en direct pour l'équipe", "Gestion de stock", "Paiements", "Accès par porte", "Bot Telegram", "Rôles et journal d'audit", "Analyses pour le propriétaire", "Plusieurs langues", "Intégrations (compta, CRM, boutique)", "Hébergement sur votre propre serveur"],
    },
    pal: { placeholder: "Chercher projets, sections, actions", go: "Aller à", project: "Projet", openDemo: "Ouvrir la démo", copyEmail: "Copier l'e-mail", openTg: "Ouvrir Telegram", nothing: "Rien trouvé.", search: "Recherche", emailCopied: "E-mail copié.", builder: "Description du projet" },
    eggs2: { challenge: "Défi relevé.", logo: "M comme Mirelli. Et comme sur mesure.", coffee: "Café chargé. On continue à construire.", year: "Depuis 2023. On livre toujours." },
    helps: [
      ["Moins de postes inactifs", "Travaux supplémentaires validés par SMS", "Les pièces ne manquent jamais sans prévenir"],
      ["Moins de rendez-vous manqués", "Créneaux annulés réattribués", "Rappels envoyés automatiquement"],
      ["Portes ouvertes selon les règles", "Paiements échoués gérés automatiquement", "Salles inutilisées libérées"],
      ["Tournées et véhicules au même endroit", "Créances clients maîtrisées", "Stock toujours à jour"],
      ["Réservation en quelques minutes", "Calendrier qui bloque les jours pris", "Prix calculés pour vous"],
      ["Apprendre en pratiquant", "Une progression qui motive", "S'entraîner avec de l'argent virtuel"],
      ["Un plan de lancement clair", "Des tâches semaine par semaine", "Voir quel canal amène des visites"],
      ["Savoir ce qu'il y a en stock", "Commandes préparées avant la rupture", "Prix vérifiés entre les sites"],
      ["Prix de référence en direct", "Transactions suivies de bout en bout", "Prix livré calculé"],
      ["Commandes de la cuisine à la table", "La liste d'indisponibilités prévient", "Chiffre d'affaires par jour et par site"],
      ["Nouveaux employés formés plus vite", "Listes de contrôle de service sur mobile", "Réponses aux questions fréquentes"],
      ["Un bot lancé en quelques minutes", "Sans programmer", "Ventes et acheteurs visibles"],
    ],
    chips: [
      ["Plus de demandes", "Demandes de devis", "Fonctionne sur tous les mobiles"],
      ["Moins de rendez-vous manqués", "Rappels automatiques", "Paiement en ligne"],
      ["Stock et commandes", "Rôles pour votre équipe", "Rapports pour le propriétaire"],
      ["Comptabilité", "Boutiques en ligne", "Paiements", "CRM"],
      ["Commandes dans Telegram", "Rappels aux clients", "Rapports quotidiens"],
      ["Serveurs rapides et fiables", "En ligne en permanence", "Corrections rapides"],
    ],
  },
  sk: {
    hero: { l1: "Skúšame nové.", l2: "Staviame", words: ["nemožné", "neuveriteľné", "krásne", "rýchle"], lead: "Vytvárame weby, online rezervácie, firemné systémy a Telegram botov pre firmy každej veľkosti. Nové nástroje, ťažké úlohy, výsledky, ktorými sa dá pochváliť." },
    build: {
      title: "Načrtnite svoj systém za minútu", q1: "Čo prevádzkujete?", q2: "Čo má vedieť?", notesLabel: "Niečo neobvyklé alebo ťažké?", notesPh: "Napríklad: tri prevádzky, dva jazyky, prepojenie na naše účtovníctvo.",
      langLabel: "Jazyky pre vašich zákazníkov", langPh: "Slovenčina, angličtina, ruština", briefHead: "Popis projektu", kBusiness: "Biznis", kNeeds: "Potreby", kClosest: "Najbližšie demo", kLang: "Jazyky", kNotes: "Poznámky", kReach: "Telegram alebo telefón", tbd: "dohodneme",
      near: "Najbližšie demo", tryFirst: "Vyskúšať", noDemo: "Blízke demo nemáme. Opíšte zadanie a nájdeme správny prístup.",
      next: "Ďalej", back: "Späť", step: "Krok", of: "z", q4: "Ako vás môžeme kontaktovať?", reach2: "Telegram alebo telefón (nepovinné)", blueprint: "Váš systém", modsWord: "modulov",
      types: ["Autoservis alebo pneuservis", "Ambulancia alebo veterinár", "Reštaurácia alebo kaviareň", "Coworking alebo klub", "Sklad alebo zásoby obchodu", "Logistika alebo doručovanie", "Prenájom alebo marketplace", "Kurzy alebo školenia", "Telegram bot", "Web, ktorý prináša dopyty", "Niečo iné"],
      mods: ["Online rezervácie", "Pripomienky (SMS, e-mail, Telegram)", "Živá tabuľa pre tím", "Skladové zásoby", "Platby", "Prístup cez dvere", "Telegram bot", "Roly a záznam zmien", "Prehľady pre majiteľa", "Viac jazykov", "Prepojenia (účtovníctvo, CRM, e-shop)", "Hosting na vašom serveri"],
    },
    pal: { placeholder: "Hľadať projekty, sekcie, akcie", go: "Prejsť na", project: "Projekt", openDemo: "Otvoriť demo", copyEmail: "Kopírovať e-mail", openTg: "Otvoriť Telegram", nothing: "Nič sa nenašlo.", search: "Hľadať", emailCopied: "E-mail skopírovaný.", builder: "Popis projektu" },
    eggs2: { challenge: "Výzva prijatá.", logo: "M ako Mirelli. A ako na mieru.", coffee: "Káva načítaná. Staviame ďalej.", year: "Od roku 2023. Stále dodávame." },
    helps: [
      ["Menej prázdnych miest v servise", "Práce navyše schvaľované cez SMS", "Diely nedôjdu nepozorovane"],
      ["Menej zmeškaných návštev", "Zrušené termíny sa dopĺňajú", "Pripomienky chodia samé"],
      ["Dvere sa otvárajú podľa pravidiel", "Nezaplatené členstvá rieši systém", "Nevyužité miestnosti sa uvoľnia"],
      ["Jazdy a vozidlá na jednom mieste", "Pohľadávky pod kontrolou", "Stav skladu stále aktuálny"],
      ["Zákazník rezervuje za minúty", "Kalendár blokuje obsadené dni", "Cena sa vypočíta sama"],
      ["Učenie praxou", "Pokrok, ktorý motivuje", "Tréning s virtuálnymi peniazmi"],
      ["Jasný plán spustenia", "Úlohy po týždňoch", "Vidíte, ktorý kanál prináša návštevy"],
      ["Viete, čo je na sklade", "Návrhy objednávok pred nedostatkom", "Ceny kontrolované naprieč prevádzkami"],
      ["Živé referenčné ceny", "Obchody sledované od začiatku do konca", "Cena s dopravou sa vypočíta"],
      ["Objednávky z kuchyne na stôl", "Stop zoznam upozorní", "Tržby podľa dňa a prevádzky"],
      ["Noví ľudia zaučení rýchlejšie", "Kontrolné zoznamy smeny v mobile", "Odpovede na časté otázky"],
      ["Bot za pár minút", "Bez programovania", "Predaje a kupujúci na očiach"],
    ],
    chips: [
      ["Viac dopytov", "Cenové ponuky", "Funguje na každom mobile"],
      ["Menej zmeškaných termínov", "Automatické pripomienky", "Online platby"],
      ["Sklad a objednávky", "Roly pre tím", "Prehľady pre majiteľa"],
      ["Účtovníctvo", "E-shopy", "Platby", "CRM"],
      ["Objednávky v Telegrame", "Pripomienky zákazníkom", "Denné reporty"],
      ["Rýchle a spoľahlivé servery", "Online nepretržite", "Rýchle opravy"],
    ],
  },
  cs: {
    hero: { l1: "Zkoušíme nové.", l2: "Stavíme", words: ["nemožné", "neuvěřitelné", "krásné", "rychlé"], lead: "Vytváříme weby, online rezervace, firemní systémy a Telegram boty pro firmy každé velikosti. Nové nástroje, těžké úkoly, výsledky, kterými se lze pochlubit." },
    build: {
      title: "Načrtněte svůj systém za minutu", q1: "Co provozujete?", q2: "Co má umět?", notesLabel: "Něco neobvyklého nebo těžkého?", notesPh: "Například: tři provozovny, dva jazyky, propojení s naším účetnictvím.",
      langLabel: "Jazyky pro vaše zákazníky", langPh: "Čeština, angličtina, ruština", briefHead: "Popis projektu", kBusiness: "Byznys", kNeeds: "Potřeby", kClosest: "Nejbližší demo", kLang: "Jazyky", kNotes: "Poznámky", kReach: "Telegram nebo telefon", tbd: "domluvíme",
      near: "Nejbližší demo", tryFirst: "Vyzkoušet", noDemo: "Blízké demo nemáme. Popište zadání a najdeme správný přístup.",
      next: "Dále", back: "Zpět", step: "Krok", of: "z", q4: "Jak vás můžeme kontaktovat?", reach2: "Telegram nebo telefon (nepovinné)", blueprint: "Váš systém", modsWord: "modulů",
      types: ["Autoservis nebo pneuservis", "Ordinace nebo veterinář", "Restaurace nebo kavárna", "Coworking nebo klub", "Sklad nebo zásoby obchodu", "Logistika nebo doručování", "Pronájem nebo marketplace", "Kurzy nebo školení", "Telegram bot", "Web, který přináší poptávky", "Něco jiného"],
      mods: ["Online rezervace", "Připomínky (SMS, e-mail, Telegram)", "Živá tabule pro tým", "Skladové zásoby", "Platby", "Přístup přes dveře", "Telegram bot", "Role a záznam změn", "Přehledy pro majitele", "Více jazyků", "Propojení (účetnictví, CRM, e-shop)", "Hosting na vašem serveru"],
    },
    pal: { placeholder: "Hledat projekty, sekce, akce", go: "Přejít na", project: "Projekt", openDemo: "Otevřít demo", copyEmail: "Kopírovat e-mail", openTg: "Otevřít Telegram", nothing: "Nic nenalezeno.", search: "Hledat", emailCopied: "E-mail zkopírován.", builder: "Popis projektu" },
    eggs2: { challenge: "Výzva přijata.", logo: "M jako Mirelli. A jako na míru.", coffee: "Káva načtena. Stavíme dál.", year: "Od roku 2023. Pořád dodáváme." },
    helps: [
      ["Méně prázdných stání", "Práce navíc schvalované přes SMS", "Díly nedojdou bez povšimnutí"],
      ["Méně zmeškaných návštěv", "Zrušené termíny se doplní", "Připomínky odcházejí samy"],
      ["Dveře se otevírají podle pravidel", "Nezaplacené členství řeší systém", "Nevyužité místnosti se uvolní"],
      ["Jízdy a vozidla na jednom místě", "Pohledávky pod kontrolou", "Stav skladu stále aktuální"],
      ["Zákazník rezervuje za minuty", "Kalendář blokuje obsazené dny", "Cena se spočítá sama"],
      ["Učení praxí", "Pokrok, který motivuje", "Trénink s virtuálními penězi"],
      ["Jasný plán spuštění", "Úkoly po týdnech", "Vidíte, který kanál přináší návštěvy"],
      ["Víte, co je na skladě", "Návrhy objednávek před nedostatkem", "Ceny kontrolované napříč provozovnami"],
      ["Živé referenční ceny", "Obchody sledované od začátku do konce", "Cena s dopravou se spočítá"],
      ["Objednávky z kuchyně na stůl", "Stop seznam upozorní", "Tržby podle dne a provozovny"],
      ["Noví lidé zaškoleni rychleji", "Kontrolní seznamy směny v mobilu", "Odpovědi na časté otázky"],
      ["Bot za pár minut", "Bez programování", "Prodeje a kupující na očích"],
    ],
    chips: [
      ["Více poptávek", "Cenové nabídky", "Funguje na každém mobilu"],
      ["Méně zmeškaných termínů", "Automatické připomínky", "Online platby"],
      ["Sklad a objednávky", "Role pro tým", "Přehledy pro majitele"],
      ["Účetnictví", "E-shopy", "Platby", "CRM"],
      ["Objednávky v Telegramu", "Připomínky zákazníkům", "Denní reporty"],
      ["Rychlé a spolehlivé servery", "Online nepřetržitě", "Rychlé opravy"],
    ],
  },
  kk: {
    hero: { l1: "Біз жаңаны сынаймыз.", l2: "Біз жасаймыз", words: ["мүмкін еместі", "сенгісізді", "әдеміні", "жылдамды"], lead: "Біз кез келген көлемдегі компанияларға сайттар, онлайн жазылу, бизнес жүйелері және Telegram-боттар жасаймыз. Жаңа құралдар, күрделі міндеттер, көрсетуге болатын нәтиже." },
    build: {
      title: "Жүйеңізді бір минутта сызып көріңіз", q1: "Немен айналысасыз?", q2: "Ол не істеуі керек?", notesLabel: "Ерекше немесе қиын нәрсе бар ма?", notesPh: "Мысалы: үш нүкте, екі тіл, бухгалтериямызбен байланыс.",
      langLabel: "Клиенттеріңізге арналған тілдер", langPh: "Қазақша, орысша, ағылшынша", briefHead: "Жобаның сипаттамасы", kBusiness: "Бизнес", kNeeds: "Қажет", kClosest: "Ең жақын демо", kLang: "Тілдер", kNotes: "Ескертпелер", kReach: "Telegram немесе телефон", tbd: "талқыланады",
      near: "Ең жақын демо", tryFirst: "Алдымен байқап көру", noDemo: "Жақын демо жоқ. Міндетті сипаттаңыз, дұрыс тәсілді табамыз.",
      next: "Әрі қарай", back: "Артқа", step: "Қадам", of: "/", q4: "Сізбен қалай байланысамыз?", reach2: "Telegram немесе телефон (міндетті емес)", blueprint: "Сіздің жүйеңіз", modsWord: "модуль",
      types: ["Автосервис немесе шиномонтаж", "Клиника немесе ветеринар", "Мейрамхана немесе кафе", "Коворкинг немесе клуб", "Қойма немесе дүкен қалдығы", "Логистика немесе жеткізу", "Жалға беру немесе маркетплейс", "Курстар немесе оқыту", "Telegram-бот", "Өтінім әкелетін сайт", "Басқа нәрсе"],
      mods: ["Онлайн жазылу", "Еске салғыштар (SMS, пошта, Telegram)", "Қызметкерлерге арналған тірі тақта", "Қойма есебі", "Төлемдер", "Есік арқылы кіру", "Telegram-бот", "Рөлдер мен әрекет журналы", "Иесіне арналған аналитика", "Бірнеше тіл", "Интеграциялар (бухгалтерия, CRM, дүкен)", "Өз серверіңізде хостинг"],
    },
    pal: { placeholder: "Жобаларды, бөлімдерді, әрекеттерді іздеу", go: "Өту", project: "Жоба", openDemo: "Демоны ашу", copyEmail: "Поштаны көшіру", openTg: "Telegram ашу", nothing: "Ештеңе табылмады.", search: "Іздеу", emailCopied: "Пошта көшірілді.", builder: "Жобаның сипаттамасы" },
    eggs2: { challenge: "Сынақ қабылданды.", logo: "M — Mirelli үшін. Және тапсырыспен жасалғандықтан.", coffee: "Кофе дайын. Құрылысты жалғастырамыз.", year: "2023 жылдан бері. Әлі де жеткізіп жатырмыз." },
    helps: [
      ["Бос тұрған бекеттер азаяды", "Қосымша жұмыс SMS арқылы келісіледі", "Бөлшектер байқалмай бітіп қалмайды"],
      ["Келмей қалу азаяды", "Бос қалған уақыт толтырылады", "Еске салулар өздігінен кетеді"],
      ["Есіктер ереже бойынша ашылады", "Төленбеген жағдай өздігінен өңделеді", "Пайдаланылмаған бөлмелер босатылады"],
      ["Рейстер мен көліктер бір жерде", "Клиент берешегі бақылауда", "Қойма қалдығы әрдайым өзекті"],
      ["Клиент бірнеше минутта брондайды", "Күнтізбе бос емес күндерді жабады", "Баға өздігінен есептеледі"],
      ["Тәжірибе арқылы үйрену", "Қызықтырып ұстайтын прогресс", "Виртуалды ақшамен жаттығу"],
      ["Түсінікті іске қосу жоспары", "Апталық тапсырмалар", "Қай арна келушілер әкелетіні көрінеді"],
      ["Қоймада не барын көресіз", "Тапшылыққа дейін тапсырыс жобасы", "Бағалар нүктелер бойынша тексеріледі"],
      ["Нарықтың тікелей бағалары", "Мәмілелер басынан аяғына дейін көрінеді", "Жеткізу бағасы есептеледі"],
      ["Тапсырыстар ас үйден үстелге дейін", "Стоп-тізім ескертеді", "Күн мен нүкте бойынша түсім"],
      ["Жаңа қызметкерлер тез үйренеді", "Ауысым чек-парақтары телефонда", "Жиі сұрақтарға жауаптар"],
      ["Бірнеше минутта бот", "Бағдарламалаусыз", "Сатылым мен сатып алушылар көрінеді"],
    ],
    chips: [
      ["Көбірек өтінім", "Баға сұраулары", "Кез келген телефонда жұмыс істейді"],
      ["Келмей қалу азаяды", "Автоматты еске салулар", "Онлайн төлем"],
      ["Қойма және тапсырыстар", "Командаңызға рөлдер", "Иесіне арналған есептер"],
      ["Бухгалтерия", "Интернет-дүкен", "Төлемдер", "CRM"],
      ["Telegram-дағы тапсырыстар", "Клиенттерге еске салулар", "Күнделікті есептер"],
      ["Жылдам әрі сенімді серверлер", "Тәулік бойы онлайн", "Жылдам түзетулер"],
    ],
  },
};
