import type { Lang } from "./i18n";

// Copy for the "what do you do by hand" calculator. Task ids and sector presets live in components/calculator.tsx.
// The German, French, Slovak, Czech and Kazakh strings should get a quick read by a native speaker before launch.
export type CalcText = {
  title: string; sub: string;
  sectorQ: string; sectors: string[];
  tasksQ: string; tasks: string[];
  perWeek: string; hourly: string; lossLabel: string; lossHint: string; cutLabel: string;
  outHours: string; outCost: string; outFreed: string; outHoursFree: string;
  compare: string; payback: string; months: string;
  disclaimer: string; cta: string; empty: string;
};

export const calcText: Record<Lang, CalcText> = {
  en: {
    title: "How much does routine cost you?", sub: "Tick what you do by hand today. Everything is calculated from your own numbers.",
    sectorQ: "Your business (it only pre-ticks typical tasks)", sectors: ["Restaurant or cafe", "Clinic or services", "Logistics", "Shop or trade", "Other"],
    tasksQ: "What is done by hand?",
    tasks: ["Taking bookings and orders by phone and messengers", "Retyping data from one place to another", "Counting stock and purchases in Excel", "Checking payments, invoices and documents", "Reminding customers and chasing no-shows", "Calling and coordinating staff or drivers", "Building reports", "Answering the same customer questions"],
    perWeek: "hours a week", hourly: "Cost of one working hour", lossLabel: "Money lost each month on mistakes, missed bookings or stock losses", lossHint: "Optional. Leave 0 if you do not know.", cutLabel: "How much of this a system could take over, %",
    outHours: "Routine, hours a month", outCost: "It costs you a month", outFreed: "Could be freed a month", outHoursFree: "Hours back a month",
    compare: "For comparison, a booking or business system from us costs", payback: "At this saving it would pay back in about", months: "months",
    disclaimer: "Your own numbers and your own assumption, not a promise. Real results depend on the business.", cta: "I want a system like this", empty: "Tick at least one task to see the result.",
  },
  ru: {
    title: "Сколько вам стоит рутина?", sub: "Отметьте, что у вас делается вручную. Всё считается по вашим цифрам.",
    sectorQ: "Ваш бизнес (только заранее отмечает типичные дела)", sectors: ["Ресторан или кафе", "Клиника или сервис", "Логистика", "Магазин или торговля", "Другое"],
    tasksQ: "Что делается вручную?",
    tasks: ["Принимаю записи и заказы по телефону и в мессенджерах", "Перепечатываю данные из одного места в другое", "Считаю остатки и закупки в Excel", "Сверяю платежи, счета и документы", "Напоминаю клиентам и ловлю неявки", "Звоню и координирую сотрудников или водителей", "Собираю отчёты", "Отвечаю на одни и те же вопросы клиентов"],
    perWeek: "часов в неделю", hourly: "Стоимость одного рабочего часа", lossLabel: "Деньги, которые теряются в месяц на ошибках, неявках или потерях на складе", lossHint: "По желанию. Оставьте 0, если не знаете.", cutLabel: "Сколько из этого может взять на себя система, %",
    outHours: "Рутина, часов в месяц", outCost: "Это стоит вам в месяц", outFreed: "Можно освободить в месяц", outHoursFree: "Вернётся часов в месяц",
    compare: "Для сравнения, система записи или система для бизнеса у нас стоит", payback: "При такой экономии она окупилась бы примерно за", months: "мес",
    disclaimer: "Ваши цифры и ваше допущение, а не обещание. Реальный результат зависит от бизнеса.", cta: "Хочу такую систему", empty: "Отметьте хотя бы одно дело, чтобы увидеть результат.",
  },
  de: {
    title: "Was kostet Sie die Routine?", sub: "Haken Sie an, was Sie heute von Hand erledigen. Alles wird mit Ihren eigenen Zahlen berechnet.",
    sectorQ: "Ihr Geschäft (hakt nur typische Aufgaben vor)", sectors: ["Restaurant oder Café", "Praxis oder Dienstleistung", "Logistik", "Laden oder Handel", "Anderes"],
    tasksQ: "Was wird von Hand erledigt?",
    tasks: ["Buchungen und Bestellungen per Telefon und Messenger annehmen", "Daten von einem Ort an einen anderen abtippen", "Bestand und Einkauf in Excel zählen", "Zahlungen, Rechnungen und Dokumente prüfen", "Kunden erinnern und Ausfälle nachverfolgen", "Mitarbeitende oder Fahrer anrufen und koordinieren", "Berichte erstellen", "Immer dieselben Kundenfragen beantworten"],
    perWeek: "Stunden pro Woche", hourly: "Kosten einer Arbeitsstunde", lossLabel: "Geld, das monatlich durch Fehler, Ausfälle oder Lagerverluste verloren geht", lossHint: "Optional. Lassen Sie 0, wenn Sie es nicht wissen.", cutLabel: "Wie viel davon ein System übernehmen könnte, %",
    outHours: "Routine, Stunden pro Monat", outCost: "Das kostet Sie pro Monat", outFreed: "Pro Monat freizusetzen", outHoursFree: "Stunden zurück pro Monat",
    compare: "Zum Vergleich: Ein Buchungs- oder Geschäftssystem von uns kostet", payback: "Bei dieser Ersparnis hätte es sich in etwa amortisiert nach", months: "Monaten",
    disclaimer: "Ihre eigenen Zahlen und Ihre eigene Annahme, kein Versprechen. Echte Ergebnisse hängen vom Unternehmen ab.", cta: "Ich möchte ein solches System", empty: "Haken Sie mindestens eine Aufgabe an, um das Ergebnis zu sehen.",
  },
  fr: {
    title: "Combien vous coûte la routine ?", sub: "Cochez ce que vous faites à la main aujourd'hui. Tout est calculé à partir de vos propres chiffres.",
    sectorQ: "Votre activité (ne fait que précocher les tâches typiques)", sectors: ["Restaurant ou café", "Clinique ou services", "Logistique", "Boutique ou commerce", "Autre"],
    tasksQ: "Qu'est-ce qui se fait à la main ?",
    tasks: ["Prendre réservations et commandes par téléphone et messageries", "Ressaisir des données d'un endroit à un autre", "Compter stock et achats dans Excel", "Vérifier paiements, factures et documents", "Rappeler les clients et relancer les absences", "Appeler et coordonner le personnel ou les chauffeurs", "Construire des rapports", "Répondre aux mêmes questions des clients"],
    perWeek: "heures par semaine", hourly: "Coût d'une heure de travail", lossLabel: "Argent perdu chaque mois en erreurs, absences ou pertes de stock", lossHint: "Facultatif. Laissez 0 si vous ne savez pas.", cutLabel: "Part qu'un système pourrait prendre en charge, %",
    outHours: "Routine, heures par mois", outCost: "Cela vous coûte par mois", outFreed: "Pourrait être libéré par mois", outHoursFree: "Heures récupérées par mois",
    compare: "À titre de comparaison, un système de réservation ou de gestion chez nous coûte", payback: "Avec cette économie, il serait rentabilisé en environ", months: "mois",
    disclaimer: "Vos chiffres et votre hypothèse, pas une promesse. Les résultats réels dépendent de l'entreprise.", cta: "Je veux un tel système", empty: "Cochez au moins une tâche pour voir le résultat.",
  },
  sk: {
    title: "Koľko vás stojí rutina?", sub: "Zaškrtnite, čo robíte ručne. Všetko sa počíta z vašich vlastných čísel.",
    sectorQ: "Váš biznis (len predzaškrtne typické úlohy)", sectors: ["Reštaurácia alebo kaviareň", "Ambulancia alebo služby", "Logistika", "Obchod", "Iné"],
    tasksQ: "Čo sa robí ručne?",
    tasks: ["Prijímam rezervácie a objednávky telefonicky a cez messengery", "Prepisujem údaje z jedného miesta na druhé", "Počítam zásoby a nákupy v Exceli", "Kontrolujem platby, faktúry a dokumenty", "Pripomínam zákazníkom a riešim zmeškané návštevy", "Volám a koordinujem zamestnancov alebo vodičov", "Zostavujem reporty", "Odpovedám na tie isté otázky zákazníkov"],
    perWeek: "hodín týždenne", hourly: "Cena jednej pracovnej hodiny", lossLabel: "Peniaze, ktoré mesačne strácate na chybách, zmeškaných návštevách alebo stratách na sklade", lossHint: "Nepovinné. Nechajte 0, ak neviete.", cutLabel: "Koľko z toho by mohol prebrať systém, %",
    outHours: "Rutina, hodín mesačne", outCost: "Stojí vás to mesačne", outFreed: "Možno uvoľniť mesačne", outHoursFree: "Hodín späť mesačne",
    compare: "Pre porovnanie, rezervačný alebo firemný systém od nás stojí", payback: "Pri tejto úspore by sa vrátil približne za", months: "mesiacov",
    disclaimer: "Vaše čísla a váš predpoklad, nie sľub. Skutočné výsledky závisia od biznisu.", cta: "Chcem takýto systém", empty: "Zaškrtnite aspoň jednu úlohu, aby ste videli výsledok.",
  },
  cs: {
    title: "Kolik vás stojí rutina?", sub: "Zaškrtněte, co děláte ručně. Vše se počítá z vašich vlastních čísel.",
    sectorQ: "Váš byznys (jen předzaškrtne typické úkoly)", sectors: ["Restaurace nebo kavárna", "Ordinace nebo služby", "Logistika", "Obchod", "Jiné"],
    tasksQ: "Co se dělá ručně?",
    tasks: ["Přijímám rezervace a objednávky telefonicky a přes messengery", "Přepisuji údaje z jednoho místa na druhé", "Počítám zásoby a nákupy v Excelu", "Kontroluji platby, faktury a dokumenty", "Připomínám zákazníkům a řeším zmeškané návštěvy", "Volám a koordinuji zaměstnance nebo řidiče", "Sestavuji reporty", "Odpovídám na stejné otázky zákazníků"],
    perWeek: "hodin týdně", hourly: "Cena jedné pracovní hodiny", lossLabel: "Peníze, které měsíčně ztrácíte na chybách, zmeškaných návštěvách nebo ztrátách na skladě", lossHint: "Nepovinné. Nechte 0, pokud nevíte.", cutLabel: "Kolik z toho by mohl převzít systém, %",
    outHours: "Rutina, hodin měsíčně", outCost: "Stojí vás to měsíčně", outFreed: "Lze uvolnit měsíčně", outHoursFree: "Hodin zpět měsíčně",
    compare: "Pro srovnání, rezervační nebo firemní systém od nás stojí", payback: "Při této úspoře by se vrátil přibližně za", months: "měsíců",
    disclaimer: "Vaše čísla a váš předpoklad, ne slib. Skutečné výsledky závisí na byznysu.", cta: "Chci takový systém", empty: "Zaškrtněte alespoň jeden úkol, abyste viděli výsledek.",
  },
  kk: {
    title: "Күнделікті жұмыс сізге қанша тұрады?", sub: "Қазір қолмен істейтініңізді белгілеңіз. Бәрі сіздің сандарыңыз бойынша есептеледі.",
    sectorQ: "Бизнесіңіз (тек әдеттегі істерді алдын ала белгілейді)", sectors: ["Мейрамхана немесе кафе", "Клиника немесе қызмет", "Логистика", "Дүкен немесе сауда", "Басқа"],
    tasksQ: "Қолмен не істеледі?",
    tasks: ["Жазылулар мен тапсырыстарды телефонмен және мессенджерлермен қабылдаймын", "Деректерді бір жерден екінші жерге қайта теремін", "Қалдық пен сатып алуды Excel-де санаймын", "Төлемдерді, шоттар мен құжаттарды тексеремін", "Клиенттерге еске саламын, келмей қалғандармен жұмыс істеймін", "Қызметкерлерге немесе жүргізушілерге қоңырау шалып, үйлестіремін", "Есептер жинаймын", "Клиенттердің бірдей сұрақтарына жауап беремін"],
    perWeek: "аптасына сағат", hourly: "Бір жұмыс сағатының құны", lossLabel: "Айына қателерге, келмей қалуға немесе қойма шығындарына кететін ақша", lossHint: "Міндетті емес. Білмесеңіз 0 қалдырыңыз.", cutLabel: "Мұның қаншасын жүйе өзіне алуы мүмкін, %",
    outHours: "Күнделікті жұмыс, айына сағат", outCost: "Бұл сізге айына тұрады", outFreed: "Айына босатуға болады", outHoursFree: "Айына қайтатын сағат",
    compare: "Салыстыру үшін, бізден жазылу немесе бизнес жүйесі тұрады", payback: "Осындай үнемдеумен ол шамамен мына мерзімде өтелер еді:", months: "ай",
    disclaimer: "Сіздің сандарыңыз бен болжамыңыз, уәде емес. Нақты нәтиже бизнеске байланысты.", cta: "Осындай жүйе қалаймын", empty: "Нәтижені көру үшін кем дегенде бір істі белгілеңіз.",
  },
};
