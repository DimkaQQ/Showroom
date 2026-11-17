import type { Lang } from "./i18n";

// Copy that is new in the 2026 redesign: the hero statement, the brief builder and the command palette.
// Everything else on the page reuses lib/translations.ts. Kazakh, German, French, Slovak and Czech strings
// should get a quick read by a native speaker before launch.
export type Hybrid = {
  hero: { l1: string; l2: string; words: string[]; lead: string };
  build: {
    title: string; sub: string; q1: string; q2: string; notesLabel: string; notesPh: string; langLabel: string; langPh: string;
    briefHead: string; kBusiness: string; kNeeds: string; kClosest: string; kLang: string; kNotes: string; tbd: string;
    near: string; tryFirst: string; noDemo: string; copyBrief: string; copied: string; copyFail: string; sendTg: string;
    types: string[]; mods: string[];
  };
  pal: { placeholder: string; go: string; project: string; openDemo: string; copyEmail: string; openTg: string; nothing: string; search: string; emailCopied: string; builder: string };
};

export const hybrid: Record<Lang, Hybrid> = {
  en: {
    hero: { l1: "We try the new.", l2: "We build the", words: ["impossible", "unreal", "beautiful", "fast"], lead: "We build websites, online booking, business systems and Telegram bots for companies of any size. New tools, hard problems, results people want to show off." },
    build: {
      title: "Sketch your system in a minute.", sub: "Pick what you run and what it should do. You get a clear brief to send us, and the closest demo to try first.",
      q1: "What do you run?", q2: "What should it do?", notesLabel: "Anything unusual or hard?", notesPh: "For example: three locations, two languages, must talk to our accounting tool.",
      langLabel: "Languages for your customers", langPh: "English, Slovak, Russian", briefHead: "Project brief", kBusiness: "Business", kNeeds: "Needs", kClosest: "Closest demo", kLang: "Languages", kNotes: "Notes", tbd: "to be discussed",
      near: "Closest demo", tryFirst: "Try it first", noDemo: "No close demo. Describe it and we will find the right approach.", copyBrief: "Copy the brief", copied: "Brief copied. Paste it into your message to us.", copyFail: "Select the text and copy it.", sendTg: "Send on Telegram",
      types: ["Garage or car service", "Clinic or vet", "Restaurant or cafe", "Coworking or club", "Warehouse or shop stock", "Logistics or delivery", "Rental or marketplace", "Courses or training", "Telegram bot", "A website that brings enquiries", "Something else"],
      mods: ["Online booking", "Reminders (SMS, email, Telegram)", "Live board for staff", "Stock control", "Payments", "Door access", "Telegram bot", "Roles and audit log", "Owner analytics", "Several languages", "Integrations (accounting, CRM, shop)", "Hosting on your own server"],
    },
    pal: { placeholder: "Search projects, sections, actions", go: "Go to", project: "Project", openDemo: "Open demo", copyEmail: "Copy email", openTg: "Open Telegram", nothing: "Nothing found.", search: "Search", emailCopied: "Email copied.", builder: "Project brief" },
  },
  ru: {
    hero: { l1: "Мы пробуем новое.", l2: "Мы строим", words: ["невозможное", "нереальное", "красивое", "быстрое"], lead: "Мы делаем сайты, онлайн-запись, системы для бизнеса и Telegram-ботов для компаний любого размера. Новые инструменты, сложные задачи, результат, которым хочется хвастаться." },
    build: {
      title: "Набросайте свою систему за минуту.", sub: "Выберите, чем вы занимаетесь и что система должна уметь. Вы получите понятное описание задачи для нас и ближайшее демо, чтобы попробовать.",
      q1: "Чем вы занимаетесь?", q2: "Что она должна делать?", notesLabel: "Что-то необычное или сложное?", notesPh: "Например: три точки, два языка, связь с нашей бухгалтерской программой.",
      langLabel: "Языки для ваших клиентов", langPh: "Русский, английский, словацкий", briefHead: "Описание задачи", kBusiness: "Бизнес", kNeeds: "Нужно", kClosest: "Ближайшее демо", kLang: "Языки", kNotes: "Заметки", tbd: "обсудим",
      near: "Ближайшее демо", tryFirst: "Попробовать", noDemo: "Близкого демо нет. Опишите задачу, и мы подберём подход.", copyBrief: "Скопировать описание", copied: "Описание скопировано. Вставьте его в сообщение нам.", copyFail: "Выделите текст и скопируйте.", sendTg: "Написать в Telegram",
      types: ["Автосервис или шиномонтаж", "Клиника или ветеринар", "Ресторан или кафе", "Коворкинг или клуб", "Склад или остатки в магазине", "Логистика или доставка", "Аренда или маркетплейс", "Курсы или обучение", "Telegram-бот", "Сайт, который приносит заявки", "Что-то другое"],
      mods: ["Онлайн-запись", "Напоминания (SMS, почта, Telegram)", "Живая доска для сотрудников", "Складской учёт", "Оплата", "Доступ по двери", "Telegram-бот", "Роли и журнал действий", "Аналитика для владельца", "Несколько языков", "Интеграции (бухгалтерия, CRM, магазин)", "Хостинг на вашем сервере"],
    },
    pal: { placeholder: "Искать проекты, разделы, действия", go: "Перейти", project: "Проект", openDemo: "Открыть демо", copyEmail: "Скопировать почту", openTg: "Открыть Telegram", nothing: "Ничего не найдено.", search: "Поиск", emailCopied: "Почта скопирована.", builder: "Описание задачи" },
  },
  de: {
    hero: { l1: "Wir probieren Neues aus.", l2: "Wir bauen das", words: ["Unmögliche", "Unglaubliche", "Schöne", "Schnelle"], lead: "Wir entwickeln Websites, Online-Buchung, Geschäftssysteme und Telegram-Bots für Unternehmen jeder Größe. Neue Werkzeuge, schwierige Aufgaben, Ergebnisse, die man gern zeigt." },
    build: {
      title: "Skizzieren Sie Ihr System in einer Minute.", sub: "Wählen Sie, was Sie betreiben und was das System können soll. Sie erhalten eine klare Beschreibung für uns und die passendste Demo zum Ausprobieren.",
      q1: "Was betreiben Sie?", q2: "Was soll es können?", notesLabel: "Etwas Besonderes oder Schwieriges?", notesPh: "Zum Beispiel: drei Standorte, zwei Sprachen, Anbindung an unsere Buchhaltung.",
      langLabel: "Sprachen für Ihre Kunden", langPh: "Deutsch, Englisch, Slowakisch", briefHead: "Projektbeschreibung", kBusiness: "Geschäft", kNeeds: "Bedarf", kClosest: "Passende Demo", kLang: "Sprachen", kNotes: "Hinweise", tbd: "wird besprochen",
      near: "Passende Demo", tryFirst: "Zuerst ausprobieren", noDemo: "Keine passende Demo. Beschreiben Sie Ihr Anliegen, wir finden den richtigen Ansatz.", copyBrief: "Beschreibung kopieren", copied: "Kopiert. Fügen Sie die Beschreibung in Ihre Nachricht an uns ein.", copyFail: "Text markieren und kopieren.", sendTg: "Per Telegram senden",
      types: ["Werkstatt oder Autoservice", "Praxis oder Tierarzt", "Restaurant oder Café", "Coworking oder Club", "Lager oder Warenbestand", "Logistik oder Lieferung", "Vermietung oder Marktplatz", "Kurse oder Schulung", "Telegram-Bot", "Eine Website, die Anfragen bringt", "Etwas anderes"],
      mods: ["Online-Buchung", "Erinnerungen (SMS, E-Mail, Telegram)", "Live-Übersicht für das Team", "Lagerverwaltung", "Zahlungen", "Türzutritt", "Telegram-Bot", "Rollen und Änderungsprotokoll", "Auswertungen für die Inhaber", "Mehrere Sprachen", "Anbindungen (Buchhaltung, CRM, Shop)", "Hosting auf Ihrem eigenen Server"],
    },
    pal: { placeholder: "Projekte, Abschnitte, Aktionen suchen", go: "Gehe zu", project: "Projekt", openDemo: "Demo öffnen", copyEmail: "E-Mail kopieren", openTg: "Telegram öffnen", nothing: "Nichts gefunden.", search: "Suche", emailCopied: "E-Mail kopiert.", builder: "Projektbeschreibung" },
  },
  fr: {
    hero: { l1: "On teste le nouveau.", l2: "On construit", words: ["l'impossible", "l'incroyable", "le beau", "le rapide"], lead: "Nous créons des sites web, la réservation en ligne, des systèmes de gestion et des bots Telegram pour des entreprises de toute taille. Nouveaux outils, problèmes difficiles, des résultats dont on est fier." },
    build: {
      title: "Esquissez votre système en une minute.", sub: "Choisissez ce que vous gérez et ce que le système doit faire. Vous obtenez une description claire à nous envoyer et la démo la plus proche à essayer.",
      q1: "Que gérez-vous ?", q2: "Que doit-il faire ?", notesLabel: "Quelque chose d'inhabituel ou de difficile ?", notesPh: "Par exemple : trois sites, deux langues, lien avec notre logiciel de comptabilité.",
      langLabel: "Langues pour vos clients", langPh: "Français, anglais, slovaque", briefHead: "Description du projet", kBusiness: "Activité", kNeeds: "Besoins", kClosest: "Démo la plus proche", kLang: "Langues", kNotes: "Remarques", tbd: "à discuter",
      near: "Démo la plus proche", tryFirst: "L'essayer d'abord", noDemo: "Pas de démo proche. Décrivez votre besoin, nous trouverons la bonne approche.", copyBrief: "Copier la description", copied: "Copié. Collez la description dans votre message.", copyFail: "Sélectionnez le texte et copiez-le.", sendTg: "Envoyer sur Telegram",
      types: ["Garage ou centre auto", "Clinique ou vétérinaire", "Restaurant ou café", "Coworking ou club", "Entrepôt ou stock de boutique", "Logistique ou livraison", "Location ou marketplace", "Cours ou formation", "Bot Telegram", "Un site qui apporte des demandes", "Autre chose"],
      mods: ["Réservation en ligne", "Rappels (SMS, e-mail, Telegram)", "Tableau en direct pour l'équipe", "Gestion de stock", "Paiements", "Accès par porte", "Bot Telegram", "Rôles et journal d'audit", "Analyses pour le propriétaire", "Plusieurs langues", "Intégrations (compta, CRM, boutique)", "Hébergement sur votre propre serveur"],
    },
    pal: { placeholder: "Chercher projets, sections, actions", go: "Aller à", project: "Projet", openDemo: "Ouvrir la démo", copyEmail: "Copier l'e-mail", openTg: "Ouvrir Telegram", nothing: "Rien trouvé.", search: "Recherche", emailCopied: "E-mail copié.", builder: "Description du projet" },
  },
  sk: {
    hero: { l1: "Skúšame nové.", l2: "Staviame", words: ["nemožné", "neuveriteľné", "krásne", "rýchle"], lead: "Vytvárame weby, online rezervácie, firemné systémy a Telegram botov pre firmy každej veľkosti. Nové nástroje, ťažké úlohy, výsledky, ktorými sa dá pochváliť." },
    build: {
      title: "Načrtnite svoj systém za minútu.", sub: "Vyberte, čo prevádzkujete a čo má systém vedieť. Dostanete jasný popis pre nás a najbližšie demo na vyskúšanie.",
      q1: "Čo prevádzkujete?", q2: "Čo má vedieť?", notesLabel: "Niečo neobvyklé alebo ťažké?", notesPh: "Napríklad: tri prevádzky, dva jazyky, prepojenie na naše účtovníctvo.",
      langLabel: "Jazyky pre vašich zákazníkov", langPh: "Slovenčina, angličtina, ruština", briefHead: "Popis projektu", kBusiness: "Biznis", kNeeds: "Potreby", kClosest: "Najbližšie demo", kLang: "Jazyky", kNotes: "Poznámky", tbd: "dohodneme",
      near: "Najbližšie demo", tryFirst: "Vyskúšať", noDemo: "Blízke demo nemáme. Opíšte zadanie a nájdeme správny prístup.", copyBrief: "Kopírovať popis", copied: "Skopírované. Vložte popis do správy pre nás.", copyFail: "Označte text a skopírujte ho.", sendTg: "Poslať cez Telegram",
      types: ["Autoservis alebo pneuservis", "Ambulancia alebo veterinár", "Reštaurácia alebo kaviareň", "Coworking alebo klub", "Sklad alebo zásoby obchodu", "Logistika alebo doručovanie", "Prenájom alebo marketplace", "Kurzy alebo školenia", "Telegram bot", "Web, ktorý prináša dopyty", "Niečo iné"],
      mods: ["Online rezervácie", "Pripomienky (SMS, e-mail, Telegram)", "Živá tabuľa pre tím", "Skladové zásoby", "Platby", "Prístup cez dvere", "Telegram bot", "Roly a záznam zmien", "Prehľady pre majiteľa", "Viac jazykov", "Prepojenia (účtovníctvo, CRM, e-shop)", "Hosting na vašom serveri"],
    },
    pal: { placeholder: "Hľadať projekty, sekcie, akcie", go: "Prejsť na", project: "Projekt", openDemo: "Otvoriť demo", copyEmail: "Kopírovať e-mail", openTg: "Otvoriť Telegram", nothing: "Nič sa nenašlo.", search: "Hľadať", emailCopied: "E-mail skopírovaný.", builder: "Popis projektu" },
  },
  cs: {
    hero: { l1: "Zkoušíme nové.", l2: "Stavíme", words: ["nemožné", "neuvěřitelné", "krásné", "rychlé"], lead: "Vytváříme weby, online rezervace, firemní systémy a Telegram boty pro firmy každé velikosti. Nové nástroje, těžké úkoly, výsledky, kterými se lze pochlubit." },
    build: {
      title: "Načrtněte svůj systém za minutu.", sub: "Vyberte, co provozujete a co má systém umět. Dostanete jasný popis pro nás a nejbližší demo k vyzkoušení.",
      q1: "Co provozujete?", q2: "Co má umět?", notesLabel: "Něco neobvyklého nebo těžkého?", notesPh: "Například: tři provozovny, dva jazyky, propojení s naším účetnictvím.",
      langLabel: "Jazyky pro vaše zákazníky", langPh: "Čeština, angličtina, ruština", briefHead: "Popis projektu", kBusiness: "Byznys", kNeeds: "Potřeby", kClosest: "Nejbližší demo", kLang: "Jazyky", kNotes: "Poznámky", tbd: "domluvíme",
      near: "Nejbližší demo", tryFirst: "Vyzkoušet", noDemo: "Blízké demo nemáme. Popište zadání a najdeme správný přístup.", copyBrief: "Kopírovat popis", copied: "Zkopírováno. Vložte popis do zprávy pro nás.", copyFail: "Označte text a zkopírujte ho.", sendTg: "Poslat přes Telegram",
      types: ["Autoservis nebo pneuservis", "Ordinace nebo veterinář", "Restaurace nebo kavárna", "Coworking nebo klub", "Sklad nebo zásoby obchodu", "Logistika nebo doručování", "Pronájem nebo marketplace", "Kurzy nebo školení", "Telegram bot", "Web, který přináší poptávky", "Něco jiného"],
      mods: ["Online rezervace", "Připomínky (SMS, e-mail, Telegram)", "Živá tabule pro tým", "Skladové zásoby", "Platby", "Přístup přes dveře", "Telegram bot", "Role a záznam změn", "Přehledy pro majitele", "Více jazyků", "Propojení (účetnictví, CRM, e-shop)", "Hosting na vašem serveru"],
    },
    pal: { placeholder: "Hledat projekty, sekce, akce", go: "Přejít na", project: "Projekt", openDemo: "Otevřít demo", copyEmail: "Kopírovat e-mail", openTg: "Otevřít Telegram", nothing: "Nic nenalezeno.", search: "Hledat", emailCopied: "E-mail zkopírován.", builder: "Popis projektu" },
  },
  kk: {
    hero: { l1: "Біз жаңаны сынаймыз.", l2: "Біз жасаймыз", words: ["мүмкін еместі", "сенгісізді", "әдеміні", "жылдамды"], lead: "Біз кез келген көлемдегі компанияларға сайттар, онлайн жазылу, бизнес жүйелері және Telegram-боттар жасаймыз. Жаңа құралдар, күрделі міндеттер, көрсетуге болатын нәтиже." },
    build: {
      title: "Жүйеңізді бір минутта сызып көріңіз.", sub: "Не істейтініңізді және жүйе не істеуі керектігін таңдаңыз. Сіз біз үшін түсінікті сипаттама мен сынап көретін ең жақын демоны аласыз.",
      q1: "Немен айналысасыз?", q2: "Ол не істеуі керек?", notesLabel: "Ерекше немесе қиын нәрсе бар ма?", notesPh: "Мысалы: үш нүкте, екі тіл, бухгалтериямызбен байланыс.",
      langLabel: "Клиенттеріңізге арналған тілдер", langPh: "Қазақша, орысша, ағылшынша", briefHead: "Жобаның сипаттамасы", kBusiness: "Бизнес", kNeeds: "Қажет", kClosest: "Ең жақын демо", kLang: "Тілдер", kNotes: "Ескертпелер", tbd: "талқыланады",
      near: "Ең жақын демо", tryFirst: "Алдымен байқап көру", noDemo: "Жақын демо жоқ. Міндетті сипаттаңыз, дұрыс тәсілді табамыз.", copyBrief: "Сипаттаманы көшіру", copied: "Көшірілді. Сипаттаманы бізге жазатын хабарламаға қойыңыз.", copyFail: "Мәтінді белгілеп, көшіріңіз.", sendTg: "Telegram-да жіберу",
      types: ["Автосервис немесе шиномонтаж", "Клиника немесе ветеринар", "Мейрамхана немесе кафе", "Коворкинг немесе клуб", "Қойма немесе дүкен қалдығы", "Логистика немесе жеткізу", "Жалға беру немесе маркетплейс", "Курстар немесе оқыту", "Telegram-бот", "Өтінім әкелетін сайт", "Басқа нәрсе"],
      mods: ["Онлайн жазылу", "Еске салғыштар (SMS, пошта, Telegram)", "Қызметкерлерге арналған тірі тақта", "Қойма есебі", "Төлемдер", "Есік арқылы кіру", "Telegram-бот", "Рөлдер мен әрекет журналы", "Иесіне арналған аналитика", "Бірнеше тіл", "Интеграциялар (бухгалтерия, CRM, дүкен)", "Өз серверіңізде хостинг"],
    },
    pal: { placeholder: "Жобаларды, бөлімдерді, әрекеттерді іздеу", go: "Өту", project: "Жоба", openDemo: "Демоны ашу", copyEmail: "Поштаны көшіру", openTg: "Telegram ашу", nothing: "Ештеңе табылмады.", search: "Іздеу", emailCopied: "Пошта көшірілді.", builder: "Жобаның сипаттамасы" },
  },
};
