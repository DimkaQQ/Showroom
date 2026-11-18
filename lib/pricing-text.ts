import type { Lang } from "./i18n";

// Copy for the pricing section, the savings calculator, the "who is behind the studio" block and the cases header.
// The German, French, Slovak, Czech and Kazakh strings should get a quick read by a native speaker before launch.
export type PricingText = {
  nav: string;
  title: string;
  sub: string;
  regionLabel: string;
  regions: { cis: string; intl: string };
  regionNote: { cis: string; intl: string };
  currencyLabel: string;
  from: string;
  to: string;
  perMonth: string;
  timeLabel: string;
  times: Record<string, string>;
  items: Record<string, { title: string; text: string }>;
  startLabel: string;
  note: string;
  cta: string;
  calc: {
    title: string; sub: string; bookings: string; noshow: string; value: string; cut: string;
    lost: string; saved: string; per: string; disclaimer: string; hours: string; hoursBack: string; hoursNote: string;
  };
  studio: { title: string; text: string; point1: string; point2: string; point3: string; contract: string; owner: string };
  cases: { title: string; sub: string; highlight: string; sector: string; changed: string };
};

export const pricingText: Record<Lang, PricingText> = {
  en: {
    nav: "Pricing",
    title: "What it costs",
    sub: "Indicative ranges. You get an exact written estimate, with a fixed scope, before any work starts.",
    regionLabel: "Region", regions: { cis: "Kazakhstan and CIS", intl: "International" },
    regionNote: { cis: "Prices for clients in Kazakhstan and the CIS. The contract is with our sole proprietorship in Kazakhstan.", intl: "Prices for international clients. The contract is with our company in the EU." },
    currencyLabel: "Currency", from: "from", to: "to", perMonth: "per month", timeLabel: "Time",
    times: { "1-3w": "1-3 weeks", "3-8w": "3-8 weeks", "2-4m": "2-4 months", "1-2w": "1-2 weeks", month: "ongoing" },
    items: {
      site: { title: "A website that brings enquiries", text: "Design, copy structure, forms and quote requests, fast on every phone, ready to be found." },
      bot: { title: "A Telegram bot or automation", text: "Orders, bookings, reminders and reports that run without you." },
      booking: { title: "Online booking and orders", text: "A booking or ordering system for one business: calendar, reminders, payments, a staff view." },
      system: { title: "A business system", text: "Stock, staff, deliveries, invoices and an owner dashboard, instead of Excel and paper." },
      integration: { title: "An integration", text: "Accounting, payments, an online shop or a CRM connected so data is entered once." },
      support: { title: "Hosting and support", text: "Fast, reliable servers, kept online around the clock, with quick fixes and updates." },
      start: { title: "Analysis and prototype", text: "Analysis and a clickable prototype in 1-2 weeks. The amount is credited towards the project if we continue." },
    },
    startLabel: "Quick start", note: "Final price depends on scope. After a short conversation you receive a written estimate.", cta: "Describe your task",
    calc: {
      title: "How much do you lose today?", sub: "Enter your own numbers. The result is a calculation, not a promise.",
      bookings: "Bookings or visits per week", noshow: "Missed or cancelled, %", value: "Average value of one booking", cut: "If a system cuts the misses by, %",
      lost: "You lose per month", saved: "You could keep per month", per: "per month", disclaimer: "Your own numbers and your own assumption. Real results depend on the business.",
      hours: "Hours of manual work per week", hoursBack: "Hours freed per month", hoursNote: "Every hour you stop doing by hand is an hour for customers.",
    },
    studio: {
      title: "Who is behind the studio",
      text: "Mirelli Studio is run by its founder, who is also the developer. You talk directly to the person who builds your system.",
      point1: "A direct line to the developer", point2: "Fast decisions, no layers of managers", point3: "One person responsible for the result",
      contract: "Contract and payment", owner: "Founder and developer",
    },
    cases: { title: "Cases", sub: "Working systems built for real clients, shown here on sample data. Open any of them and try it.", highlight: "One restaurant group freed about 100 hours of manual work.", sector: "Sector", changed: "What changed" },
  },
  ru: {
    nav: "Цены",
    title: "Сколько это стоит",
    sub: "Ориентиры. Точную смету с зафиксированным объёмом вы получаете письменно до начала работы.",
    regionLabel: "Регион", regions: { cis: "Казахстан и СНГ", intl: "Международные клиенты" },
    regionNote: { cis: "Цены для клиентов в Казахстане и СНГ. Договор заключается с нашим ИП в Казахстане.", intl: "Цены для международных клиентов. Договор заключается с нашей компанией в ЕС." },
    currencyLabel: "Валюта", from: "от", to: "до", perMonth: "в месяц", timeLabel: "Срок",
    times: { "1-3w": "1-3 недели", "3-8w": "3-8 недель", "2-4m": "2-4 месяца", "1-2w": "1-2 недели", month: "постоянно" },
    items: {
      site: { title: "Сайт, который приносит заявки", text: "Дизайн, структура текстов, формы и запросы на расчёт, быстро на любом телефоне, готов к поиску." },
      bot: { title: "Telegram-бот или автоматизация", text: "Заказы, записи, напоминания и отчёты, которые работают без вас." },
      booking: { title: "Онлайн-запись и заказы", text: "Система записи или заказов для одного бизнеса: календарь, напоминания, оплата, вид для сотрудников." },
      system: { title: "Система для бизнеса", text: "Склад, персонал, доставки, счета и панель владельца вместо Excel и бумаги." },
      integration: { title: "Интеграция", text: "Бухгалтерия, оплата, интернет-магазин или CRM связаны так, чтобы данные вводились один раз." },
      support: { title: "Хостинг и поддержка", text: "Быстрые и надёжные серверы, онлайн круглосуточно, быстрые исправления и обновления." },
      start: { title: "Разбор и прототип", text: "Разбор задачи и кликабельный прототип за 1-2 недели. Сумма засчитывается в проект, если продолжаем." },
    },
    startLabel: "Быстрый старт", note: "Итоговая цена зависит от объёма. После короткого разговора вы получаете письменную смету.", cta: "Описать задачу",
    calc: {
      title: "Сколько вы теряете сейчас?", sub: "Введите свои цифры. Результат это расчёт, а не обещание.",
      bookings: "Записей или визитов в неделю", noshow: "Не пришли или отменили, %", value: "Средняя сумма одной записи", cut: "Если система сократит неявки на, %",
      lost: "Вы теряете в месяц", saved: "Можно сохранить в месяц", per: "в месяц", disclaimer: "Ваши цифры и ваше допущение. Реальный результат зависит от бизнеса.",
      hours: "Часов ручной работы в неделю", hoursBack: "Освобождается часов в месяц", hoursNote: "Каждый час, который вы перестали делать руками, это час для клиентов.",
    },
    studio: {
      title: "Кто стоит за студией",
      text: "Mirelli Studio ведёт основатель, который сам же и разработчик. Вы общаетесь напрямую с тем, кто строит вашу систему.",
      point1: "Прямой контакт с разработчиком", point2: "Быстрые решения, без цепочки менеджеров", point3: "Один человек отвечает за результат",
      contract: "Договор и оплата", owner: "Основатель и разработчик",
    },
    cases: { title: "Кейсы", sub: "Рабочие системы, построенные для реальных клиентов, здесь на тестовых данных. Откройте любую и попробуйте.", highlight: "Одна ресторанная сеть освободила около 100 часов ручной работы.", sector: "Сфера", changed: "Что изменилось" },
  },
  de: {
    nav: "Preise",
    title: "Was es kostet",
    sub: "Richtwerte. Vor Projektstart erhalten Sie eine genaue schriftliche Schätzung mit festem Umfang.",
    regionLabel: "Region", regions: { cis: "Kasachstan und GUS", intl: "International" },
    regionNote: { cis: "Preise für Kunden in Kasachstan und der GUS. Der Vertrag besteht mit unserem Einzelunternehmen in Kasachstan.", intl: "Preise für internationale Kunden. Der Vertrag besteht mit unserem Unternehmen in der EU." },
    currencyLabel: "Währung", from: "ab", to: "bis", perMonth: "pro Monat", timeLabel: "Dauer",
    times: { "1-3w": "1-3 Wochen", "3-8w": "3-8 Wochen", "2-4m": "2-4 Monate", "1-2w": "1-2 Wochen", month: "laufend" },
    items: {
      site: { title: "Eine Website, die Anfragen bringt", text: "Design, Textstruktur, Formulare und Angebotsanfragen, schnell auf jedem Handy, bereit für die Suche." },
      bot: { title: "Ein Telegram-Bot oder Automatisierung", text: "Bestellungen, Buchungen, Erinnerungen und Berichte, die ohne Sie laufen." },
      booking: { title: "Online-Buchung und Bestellungen", text: "Ein Buchungs- oder Bestellsystem für ein Unternehmen: Kalender, Erinnerungen, Zahlung, Team-Ansicht." },
      system: { title: "Ein Geschäftssystem", text: "Lager, Personal, Lieferungen, Rechnungen und ein Dashboard für die Inhaber statt Excel und Papier." },
      integration: { title: "Eine Anbindung", text: "Buchhaltung, Zahlungen, Onlineshop oder CRM verbunden, damit Daten nur einmal erfasst werden." },
      support: { title: "Hosting und Support", text: "Schnelle, zuverlässige Server, rund um die Uhr online, mit schnellen Korrekturen und Updates." },
      start: { title: "Analyse und Prototyp", text: "Analyse und klickbarer Prototyp in 1-2 Wochen. Der Betrag wird auf das Projekt angerechnet, wenn wir weitermachen." },
    },
    startLabel: "Schnellstart", note: "Der Endpreis hängt vom Umfang ab. Nach einem kurzen Gespräch erhalten Sie eine schriftliche Schätzung.", cta: "Aufgabe beschreiben",
    calc: {
      title: "Wie viel verlieren Sie heute?", sub: "Geben Sie Ihre eigenen Zahlen ein. Das Ergebnis ist eine Rechnung, kein Versprechen.",
      bookings: "Buchungen oder Besuche pro Woche", noshow: "Nicht erschienen oder abgesagt, %", value: "Durchschnittlicher Wert einer Buchung", cut: "Wenn ein System die Ausfälle senkt um, %",
      lost: "Sie verlieren pro Monat", saved: "Sie könnten pro Monat behalten", per: "pro Monat", disclaimer: "Ihre eigenen Zahlen und Ihre eigene Annahme. Echte Ergebnisse hängen vom Unternehmen ab.",
      hours: "Stunden Handarbeit pro Woche", hoursBack: "Frei werdende Stunden pro Monat", hoursNote: "Jede Stunde, die Sie nicht mehr von Hand erledigen, gehört Ihren Kunden.",
    },
    studio: {
      title: "Wer hinter dem Studio steht",
      text: "Mirelli Studio wird vom Gründer geführt, der selbst entwickelt. Sie sprechen direkt mit der Person, die Ihr System baut.",
      point1: "Direkter Draht zum Entwickler", point2: "Schnelle Entscheidungen, keine Manager-Ebenen", point3: "Eine Person verantwortet das Ergebnis",
      contract: "Vertrag und Zahlung", owner: "Gründer und Entwickler",
    },
    cases: { title: "Fälle", sub: "Funktionierende Systeme für echte Kunden, hier mit Beispieldaten. Öffnen Sie eines und probieren Sie es aus.", highlight: "Eine Restaurantgruppe hat rund 100 Stunden Handarbeit eingespart.", sector: "Branche", changed: "Was sich geändert hat" },
  },
  fr: {
    nav: "Tarifs",
    title: "Combien ça coûte",
    sub: "Fourchettes indicatives. Vous recevez une estimation écrite précise, à périmètre fixe, avant tout travail.",
    regionLabel: "Région", regions: { cis: "Kazakhstan et CEI", intl: "International" },
    regionNote: { cis: "Tarifs pour les clients au Kazakhstan et dans la CEI. Le contrat est conclu avec notre entreprise individuelle au Kazakhstan.", intl: "Tarifs pour les clients internationaux. Le contrat est conclu avec notre société dans l'UE." },
    currencyLabel: "Devise", from: "à partir de", to: "jusqu'à", perMonth: "par mois", timeLabel: "Délai",
    times: { "1-3w": "1-3 semaines", "3-8w": "3-8 semaines", "2-4m": "2-4 mois", "1-2w": "1-2 semaines", month: "en continu" },
    items: {
      site: { title: "Un site qui apporte des demandes", text: "Design, structure des textes, formulaires et demandes de devis, rapide sur tous les mobiles, prêt pour la recherche." },
      bot: { title: "Un bot Telegram ou une automatisation", text: "Commandes, réservations, rappels et rapports qui tournent sans vous." },
      booking: { title: "Réservation en ligne et commandes", text: "Un système de réservation ou de commande pour une entreprise : calendrier, rappels, paiement, vue équipe." },
      system: { title: "Un système de gestion", text: "Stock, personnel, livraisons, factures et tableau de bord du propriétaire, à la place d'Excel et du papier." },
      integration: { title: "Une intégration", text: "Comptabilité, paiements, boutique en ligne ou CRM reliés pour ne saisir les données qu'une fois." },
      support: { title: "Hébergement et support", text: "Des serveurs rapides et fiables, en ligne en permanence, avec corrections rapides et mises à jour." },
      start: { title: "Analyse et prototype", text: "Analyse et prototype cliquable en 1-2 semaines. Le montant est déduit du projet si nous continuons." },
    },
    startLabel: "Démarrage rapide", note: "Le prix final dépend du périmètre. Après un court échange, vous recevez une estimation écrite.", cta: "Décrire votre besoin",
    calc: {
      title: "Combien perdez-vous aujourd'hui ?", sub: "Saisissez vos propres chiffres. Le résultat est un calcul, pas une promesse.",
      bookings: "Réservations ou visites par semaine", noshow: "Absents ou annulés, %", value: "Valeur moyenne d'une réservation", cut: "Si un système réduit ces pertes de, %",
      lost: "Vous perdez par mois", saved: "Vous pourriez garder par mois", per: "par mois", disclaimer: "Vos chiffres et votre hypothèse. Les résultats réels dépendent de l'entreprise.",
      hours: "Heures de travail manuel par semaine", hoursBack: "Heures libérées par mois", hoursNote: "Chaque heure que vous ne faites plus à la main est une heure pour vos clients.",
    },
    studio: {
      title: "Qui est derrière le studio",
      text: "Mirelli Studio est dirigé par son fondateur, qui est aussi le développeur. Vous parlez directement à la personne qui construit votre système.",
      point1: "Une ligne directe avec le développeur", point2: "Des décisions rapides, sans couches de managers", point3: "Une seule personne responsable du résultat",
      contract: "Contrat et paiement", owner: "Fondateur et développeur",
    },
    cases: { title: "Cas", sub: "Des systèmes qui fonctionnent, construits pour de vrais clients, ici sur des données d'exemple. Ouvrez-en un et essayez-le.", highlight: "Un groupe de restaurants a libéré environ 100 heures de travail manuel.", sector: "Secteur", changed: "Ce qui a changé" },
  },
  sk: {
    nav: "Ceny",
    title: "Koľko to stojí",
    sub: "Orientačné rozpätia. Presný písomný odhad s pevným rozsahom dostanete pred začiatkom práce.",
    regionLabel: "Región", regions: { cis: "Kazachstan a SNŠ", intl: "Medzinárodne" },
    regionNote: { cis: "Ceny pre klientov v Kazachstane a SNŠ. Zmluva sa uzatvára s naším živnostníkom v Kazachstane.", intl: "Ceny pre medzinárodných klientov. Zmluva sa uzatvára s našou spoločnosťou v EÚ." },
    currencyLabel: "Mena", from: "od", to: "do", perMonth: "mesačne", timeLabel: "Čas",
    times: { "1-3w": "1-3 týždne", "3-8w": "3-8 týždňov", "2-4m": "2-4 mesiace", "1-2w": "1-2 týždne", month: "priebežne" },
    items: {
      site: { title: "Web, ktorý prináša dopyty", text: "Dizajn, štruktúra textov, formuláre a cenové dopyty, rýchly na každom mobile, pripravený na vyhľadávanie." },
      bot: { title: "Telegram bot alebo automatizácia", text: "Objednávky, rezervácie, pripomienky a reporty, ktoré bežia bez vás." },
      booking: { title: "Online rezervácie a objednávky", text: "Rezervačný alebo objednávkový systém pre jeden biznis: kalendár, pripomienky, platby, pohľad pre tím." },
      system: { title: "Firemný systém", text: "Sklad, ľudia, doručovanie, faktúry a prehľad pre majiteľa namiesto Excelu a papiera." },
      integration: { title: "Prepojenie", text: "Účtovníctvo, platby, e-shop alebo CRM prepojené tak, aby sa údaje zadávali raz." },
      support: { title: "Hosting a podpora", text: "Rýchle a spoľahlivé servery, online nepretržite, s rýchlymi opravami a aktualizáciami." },
      start: { title: "Analýza a prototyp", text: "Analýza a klikateľný prototyp za 1-2 týždne. Suma sa započíta do projektu, ak pokračujeme." },
    },
    startLabel: "Rýchly štart", note: "Konečná cena závisí od rozsahu. Po krátkom rozhovore dostanete písomný odhad.", cta: "Opísať zadanie",
    calc: {
      title: "Koľko dnes strácate?", sub: "Zadajte vlastné čísla. Výsledok je výpočet, nie sľub.",
      bookings: "Rezervácií alebo návštev týždenne", noshow: "Neprišli alebo zrušili, %", value: "Priemerná hodnota jednej rezervácie", cut: "Ak systém zníži výpadky o, %",
      lost: "Mesačne strácate", saved: "Mesačne by ste mohli ušetriť", per: "mesačne", disclaimer: "Vaše čísla a váš predpoklad. Skutočné výsledky závisia od biznisu.",
      hours: "Hodín ručnej práce týždenne", hoursBack: "Uvoľnených hodín mesačne", hoursNote: "Každá hodina, ktorú už nerobíte ručne, patrí zákazníkom.",
    },
    studio: {
      title: "Kto stojí za štúdiom",
      text: "Mirelli Studio vedie zakladateľ, ktorý je zároveň vývojár. Rozprávate sa priamo s človekom, ktorý váš systém stavia.",
      point1: "Priama linka na vývojára", point2: "Rýchle rozhodnutia, žiadne vrstvy manažérov", point3: "Jeden človek zodpovedá za výsledok",
      contract: "Zmluva a platba", owner: "Zakladateľ a vývojár",
    },
    cases: { title: "Prípady", sub: "Fungujúce systémy postavené pre skutočných klientov, tu na vzorových dátach. Otvorte ktorýkoľvek a vyskúšajte ho.", highlight: "Jedna reštauračná skupina uvoľnila približne 100 hodín ručnej práce.", sector: "Odvetvie", changed: "Čo sa zmenilo" },
  },
  cs: {
    nav: "Ceny",
    title: "Kolik to stojí",
    sub: "Orientační rozpětí. Přesný písemný odhad s pevným rozsahem dostanete před zahájením práce.",
    regionLabel: "Region", regions: { cis: "Kazachstán a SNS", intl: "Mezinárodně" },
    regionNote: { cis: "Ceny pro klienty v Kazachstánu a SNS. Smlouva se uzavírá s naším živnostníkem v Kazachstánu.", intl: "Ceny pro mezinárodní klienty. Smlouva se uzavírá s naší společností v EU." },
    currencyLabel: "Měna", from: "od", to: "do", perMonth: "měsíčně", timeLabel: "Doba",
    times: { "1-3w": "1-3 týdny", "3-8w": "3-8 týdnů", "2-4m": "2-4 měsíce", "1-2w": "1-2 týdny", month: "průběžně" },
    items: {
      site: { title: "Web, který přináší poptávky", text: "Design, struktura textů, formuláře a cenové poptávky, rychlý na každém mobilu, připravený na vyhledávání." },
      bot: { title: "Telegram bot nebo automatizace", text: "Objednávky, rezervace, připomínky a reporty, které běží bez vás." },
      booking: { title: "Online rezervace a objednávky", text: "Rezervační nebo objednávkový systém pro jeden byznys: kalendář, připomínky, platby, pohled pro tým." },
      system: { title: "Firemní systém", text: "Sklad, lidé, doručování, faktury a přehled pro majitele místo Excelu a papíru." },
      integration: { title: "Propojení", text: "Účetnictví, platby, e-shop nebo CRM propojené tak, aby se údaje zadávaly jednou." },
      support: { title: "Hosting a podpora", text: "Rychlé a spolehlivé servery, online nepřetržitě, s rychlými opravami a aktualizacemi." },
      start: { title: "Analýza a prototyp", text: "Analýza a proklikávací prototyp za 1-2 týdny. Částka se započítá do projektu, pokud pokračujeme." },
    },
    startLabel: "Rychlý start", note: "Konečná cena závisí na rozsahu. Po krátkém rozhovoru dostanete písemný odhad.", cta: "Popsat zadání",
    calc: {
      title: "Kolik dnes ztrácíte?", sub: "Zadejte vlastní čísla. Výsledek je výpočet, ne slib.",
      bookings: "Rezervací nebo návštěv týdně", noshow: "Nepřišli nebo zrušili, %", value: "Průměrná hodnota jedné rezervace", cut: "Pokud systém sníží výpadky o, %",
      lost: "Měsíčně ztrácíte", saved: "Měsíčně byste mohli ušetřit", per: "měsíčně", disclaimer: "Vaše čísla a váš předpoklad. Skutečné výsledky závisí na byznysu.",
      hours: "Hodin ruční práce týdně", hoursBack: "Uvolněných hodin měsíčně", hoursNote: "Každá hodina, kterou už neděláte ručně, patří zákazníkům.",
    },
    studio: {
      title: "Kdo stojí za studiem",
      text: "Mirelli Studio vede zakladatel, který je zároveň vývojář. Mluvíte přímo s člověkem, který váš systém staví.",
      point1: "Přímá linka na vývojáře", point2: "Rychlá rozhodnutí, žádné vrstvy manažerů", point3: "Jeden člověk odpovídá za výsledek",
      contract: "Smlouva a platba", owner: "Zakladatel a vývojář",
    },
    cases: { title: "Případy", sub: "Fungující systémy postavené pro skutečné klienty, zde na vzorových datech. Otevřete kterýkoli a vyzkoušejte ho.", highlight: "Jedna restaurační skupina uvolnila přibližně 100 hodin ruční práce.", sector: "Obor", changed: "Co se změnilo" },
  },
  kk: {
    nav: "Бағалар",
    title: "Бағасы қанша",
    sub: "Бағдарлы шамалар. Жұмыс басталмай тұрып бекітілген көлемі бар нақты жазбаша бағаны аласыз.",
    regionLabel: "Аймақ", regions: { cis: "Қазақстан және ТМД", intl: "Халықаралық" },
    regionNote: { cis: "Қазақстан мен ТМД клиенттеріне арналған бағалар. Шарт Қазақстандағы ЖК-мен жасалады.", intl: "Халықаралық клиенттерге арналған бағалар. Шарт ЕО-дағы компаниямызбен жасалады." },
    currencyLabel: "Валюта", from: "бастап", to: "дейін", perMonth: "айына", timeLabel: "Мерзімі",
    times: { "1-3w": "1-3 апта", "3-8w": "3-8 апта", "2-4m": "2-4 ай", "1-2w": "1-2 апта", month: "үздіксіз" },
    items: {
      site: { title: "Өтінім әкелетін сайт", text: "Дизайн, мәтін құрылымы, нысандар мен баға сұраулары, кез келген телефонда жылдам, іздеуге дайын." },
      bot: { title: "Telegram-бот немесе автоматтандыру", text: "Сізсіз жұмыс істейтін тапсырыстар, жазылулар, еске салғыштар және есептер." },
      booking: { title: "Онлайн жазылу және тапсырыстар", text: "Бір бизнеске арналған жазылу немесе тапсырыс жүйесі: күнтізбе, еске салғыштар, төлем, қызметкерлерге арналған көрініс." },
      system: { title: "Бизнес жүйесі", text: "Excel мен қағаздың орнына қойма, қызметкерлер, жеткізу, шоттар және иесінің панелі." },
      integration: { title: "Интеграция", text: "Бухгалтерия, төлем, интернет-дүкен немесе CRM деректер бір рет енгізілетіндей байланыстырылады." },
      support: { title: "Хостинг және қолдау", text: "Жылдам әрі сенімді серверлер, тәулік бойы онлайн, жылдам түзетулер мен жаңартулар." },
      start: { title: "Талдау және прототип", text: "Міндетті талдау және басып көретін прототип 1-2 аптада. Жалғастырсақ, сома жобаға есептеледі." },
    },
    startLabel: "Жылдам бастау", note: "Соңғы баға көлемге байланысты. Қысқа әңгімеден кейін жазбаша баға аласыз.", cta: "Міндетті сипаттау",
    calc: {
      title: "Қазір қанша жоғалтасыз?", sub: "Өз сандарыңызды енгізіңіз. Нәтиже есеп, уәде емес.",
      bookings: "Аптасына жазылу немесе визит саны", noshow: "Келмеген немесе бас тартқан, %", value: "Бір жазылудың орташа сомасы", cut: "Жүйе келмей қалуды қысқартса, %",
      lost: "Айына жоғалтасыз", saved: "Айына сақтап қалуға болады", per: "айына", disclaimer: "Сіздің сандарыңыз бен болжамыңыз. Нақты нәтиже бизнеске байланысты.",
      hours: "Аптасына қолмен жұмыс сағаты", hoursBack: "Айына босайтын сағат", hoursNote: "Қолмен істеуді тоқтатқан әр сағат клиенттерге арналған сағат.",
    },
    studio: {
      title: "Студияның артында кім тұр",
      text: "Mirelli Studio-ны негізін қалаушы басқарады, ол өзі әзірлеуші. Жүйеңізді жасайтын адаммен тікелей сөйлесесіз.",
      point1: "Әзірлеушімен тікелей байланыс", point2: "Жылдам шешімдер, менеджерлер тізбегісіз", point3: "Нәтижеге бір адам жауап береді",
      contract: "Шарт және төлем", owner: "Негізін қалаушы және әзірлеуші",
    },
    cases: { title: "Кейстер", sub: "Нақты клиенттер үшін жасалған жұмыс істейтін жүйелер, мұнда сынақ деректерінде. Кез келгенін ашып көріңіз.", highlight: "Бір мейрамхана желісі шамамен 100 сағат қолмен жұмысты босатты.", sector: "Сала", changed: "Не өзгерді" },
  },
};
