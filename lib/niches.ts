// Generated content for business-type landing pages.
import type { Lang } from "./i18n";

export type NicheText = { name: string; title: string; description: string; h1: string; lead: string; checks: string[]; features: string[]; example: string; faq: { q: string; a: string }[] };
export type NicheUi = { feat: string; how: string; steps: string[]; example: string; from_: string; cta: string; demo: string; faq: string; others: string; back: string; areas: string; label: string };

export const nicheUi: Record<Lang, NicheUi> = {
  "en": {
    "feat": "What it includes",
    "how": "How it works",
    "steps": [
      "Tell us about your business and how bookings work today",
      "We show a clickable prototype and a fixed estimate",
      "We build it, connect it to your site and train your team",
      "We host it, fix issues and add what you need next"
    ],
    "example": "See how it works",
    "from_": "From €500, with a written estimate before we start",
    "cta": "Describe your task",
    "demo": "Open the demo",
    "faq": "Questions",
    "others": "Other business types",
    "back": "Back to home",
    "areas": "We work with businesses in Slovakia, Czechia, Austria, Germany and across Europe, and remotely in Kazakhstan.",
    "label": "For"
  },
  "ru": {
    "feat": "Что входит",
    "how": "Как это работает",
    "steps": [
      "Расскажите о бизнесе и о том, как сейчас устроены записи",
      "Мы показываем кликабельный прототип и фиксированную оценку",
      "Делаем, подключаем к сайту и обучаем вашу команду",
      "Размещаем, исправляем и добавляем то, что понадобится дальше"
    ],
    "example": "Посмотреть, как это работает",
    "from_": "От 500 €, с письменной оценкой до начала работы",
    "cta": "Описать задачу",
    "demo": "Открыть демо",
    "faq": "Вопросы",
    "others": "Другие виды бизнеса",
    "back": "На главную",
    "areas": "Работаем с бизнесом в Словакии, Чехии, Австрии, Германии и по всей Европе, а также удалённо в Казахстане.",
    "label": "Для"
  },
  "de": {
    "feat": "Was enthalten ist",
    "how": "So funktioniert es",
    "steps": [
      "Sie erzählen uns von Ihrem Betrieb und wie Termine heute laufen",
      "Wir zeigen einen klickbaren Prototyp und eine Festpreis-Schätzung",
      "Wir bauen es, binden es an Ihre Website an und schulen Ihr Team",
      "Wir hosten es, beheben Fehler und ergänzen, was als Nächstes nötig ist"
    ],
    "example": "So funktioniert es",
    "from_": "Ab 500 €, mit schriftlichem Angebot vor Projektstart",
    "cta": "Aufgabe beschreiben",
    "demo": "Demo öffnen",
    "faq": "Fragen",
    "others": "Weitere Branchen",
    "back": "Zur Startseite",
    "areas": "Wir arbeiten mit Unternehmen in der Slowakei, Tschechien, Österreich, Deutschland und ganz Europa sowie remote in Kasachstan.",
    "label": "Für"
  },
  "fr": {
    "feat": "Ce qui est inclus",
    "how": "Comment ça marche",
    "steps": [
      "Vous nous parlez de votre activité et de vos réservations actuelles",
      "Nous montrons un prototype cliquable et une estimation ferme",
      "Nous le construisons, le relions à votre site et formons votre équipe",
      "Nous l'hébergeons, corrigeons les problèmes et ajoutons la suite"
    ],
    "example": "Voir comment ça marche",
    "from_": "Dès 500 €, avec une estimation écrite avant de commencer",
    "cta": "Décrire votre besoin",
    "demo": "Ouvrir la démo",
    "faq": "Questions",
    "others": "Autres types d'activité",
    "back": "Retour à l'accueil",
    "areas": "Nous travaillons avec des entreprises en Slovaquie, en Tchéquie, en Autriche, en Allemagne et partout en Europe, ainsi qu'à distance au Kazakhstan.",
    "label": "Pour"
  },
  "sk": {
    "feat": "Čo obsahuje",
    "how": "Ako to funguje",
    "steps": [
      "Poviete nám o firme a o tom, ako sa dnes riešia objednávky",
      "Ukážeme klikateľný prototyp a pevný odhad ceny",
      "Postavíme to, prepojíme s webom a zaškolíme váš tím",
      "Hostujeme, opravujeme a pridávame, čo bude treba ďalej"
    ],
    "example": "Pozrite si, ako to funguje",
    "from_": "Od 500 €, s písomným odhadom pred začiatkom práce",
    "cta": "Popísať zadanie",
    "demo": "Otvoriť ukážku",
    "faq": "Otázky",
    "others": "Ďalšie druhy podnikania",
    "back": "Späť na úvod",
    "areas": "Pracujeme s firmami na Slovensku, v Česku, Rakúsku, Nemecku a v celej Európe, a na diaľku v Kazachstane.",
    "label": "Pre"
  },
  "cs": {
    "feat": "Co obsahuje",
    "how": "Jak to funguje",
    "steps": [
      "Řeknete nám o firmě a o tom, jak se dnes řeší objednávky",
      "Ukážeme klikací prototyp a pevný odhad ceny",
      "Postavíme to, propojíme s webem a zaškolíme váš tým",
      "Hostujeme, opravujeme a přidáváme, co bude potřeba dál"
    ],
    "example": "Podívejte se, jak to funguje",
    "from_": "Od 500 €, s písemným odhadem před zahájením práce",
    "cta": "Popsat zadání",
    "demo": "Otevřít ukázku",
    "faq": "Otázky",
    "others": "Další druhy podnikání",
    "back": "Zpět na úvod",
    "areas": "Pracujeme s firmami v Česku, na Slovensku, v Rakousku, v Německu a v celé Evropě, a na dálku v Kazachstanu.",
    "label": "Pro"
  }
};

export const niches: Record<string, { demo: string } & Record<Lang, NicheText>> = {
  "car-service": {
    "demo": "rentoworld",
    "en": {
      "name": "Car services and tyre shops",
      "title": "Online Booking System for Car Services | Mirelli Studio",
      "description": "Online booking for garages and tyre shops: customers pick a service and a time, you get a clear calendar and automatic reminders. Built for you, from €500.",
      "h1": "Online booking system for car services and tyre shops",
      "lead": "Fewer phone calls and fewer missed appointments. Customers choose a service and a free time on your website, and your team sees the day at a glance. We build it around how your garage works.",
      "checks": [
        "Customers book 24/7, without calling",
        "Automatic confirmations and reminders",
        "One calendar for all mechanics and bays"
      ],
      "features": [
        "Service list with durations and prices: oil change, brakes, diagnostics, tyre change",
        "The customer enters the car: make, model and registration number",
        "A calendar per mechanic or bay, with working hours and holidays",
        "Confirmation and reminder by email or SMS, so fewer appointments are forgotten",
        "Approve, reschedule or cancel a booking in one click",
        "Customer and car history, and the day's workload at a glance"
      ],
      "example": "The booking flow in our RentoWorld demo shows how this feels for a customer: choose, pick dates in a calendar, see the price, confirm. Your garage version is built around your services and staff.",
      "faq": [
        {
          "q": "Can it connect to our garage software?",
          "a": "Yes. Where your software has an export or an API we connect it, so bookings arrive where you already work. If not, we start with a standalone calendar and connect later."
        },
        {
          "q": "Do customers need an account?",
          "a": "No. A customer can book with a name, a phone number and car details. An account is optional."
        }
      ]
    },
    "ru": {
      "name": "Автосервисы и шиномонтаж",
      "title": "Онлайн-запись для автосервиса и шиномонтажа | Mirelli Studio",
      "description": "Онлайн-запись для автосервисов и шиномонтажа: клиент выбирает услугу и время, у вас понятный календарь и автоматические напоминания. Под ваш бизнес, от 500 €.",
      "h1": "Система онлайн-записи для автосервиса и шиномонтажа",
      "lead": "Меньше звонков и меньше неявок. Клиент выбирает услугу и свободное время на вашем сайте, а команда видит день целиком. Мы строим систему под то, как работает ваш сервис.",
      "checks": [
        "Клиенты записываются 24/7, без звонка",
        "Автоматические подтверждения и напоминания",
        "Один календарь на всех мастеров и посты"
      ],
      "features": [
        "Список услуг с длительностью и ценой: замена масла, тормоза, диагностика, шиномонтаж",
        "Клиент указывает автомобиль: марка, модель и госномер",
        "Календарь на каждого мастера или пост, с рабочим временем и выходными",
        "Подтверждение и напоминание по e-mail или SMS, меньше забытых записей",
        "Подтвердить, перенести или отменить запись в один клик",
        "История клиентов и автомобилей, загрузка дня на одном экране"
      ],
      "example": "Процесс записи в нашем демо RentoWorld показывает, как это выглядит для клиента: выбрать, отметить даты в календаре, увидеть цену, подтвердить. Версия для вашего сервиса строится под ваши услуги и сотрудников.",
      "faq": [
        {
          "q": "Можно ли связать систему с нашей программой для сервиса?",
          "a": "Да. Если у вашей программы есть экспорт или API, мы подключим её, и записи будут попадать туда, где вы уже работаете. Если нет, начнём с отдельного календаря и подключим позже."
        },
        {
          "q": "Нужна ли клиенту учётная запись?",
          "a": "Нет. Клиент может записаться, указав имя, телефон и данные автомобиля. Аккаунт по желанию."
        }
      ]
    },
    "de": {
      "name": "Autowerkstätten und Reifenservice",
      "title": "Online-Terminbuchung für Autowerkstätten | Mirelli Studio",
      "description": "Online-Terminbuchung für Werkstätten und Reifenservice: Kunden wählen Leistung und Uhrzeit, Sie haben einen klaren Kalender und automatische Erinnerungen. Ab 500 €.",
      "h1": "Online-Terminbuchung für Autowerkstätten und Reifenservice",
      "lead": "Weniger Telefonate und weniger verpasste Termine. Kunden wählen auf Ihrer Website eine Leistung und eine freie Zeit, und Ihr Team sieht den Tag auf einen Blick. Wir bauen das System passend zu den Abläufen Ihrer Werkstatt.",
      "checks": [
        "Kunden buchen rund um die Uhr, ohne Anruf",
        "Automatische Bestätigungen und Erinnerungen",
        "Ein Kalender für alle Mechaniker und Arbeitsplätze"
      ],
      "features": [
        "Leistungsliste mit Dauer und Preis: Ölwechsel, Bremsen, Diagnose, Reifenwechsel",
        "Der Kunde gibt das Fahrzeug an: Marke, Modell und Kennzeichen",
        "Ein Kalender je Mechaniker oder Arbeitsplatz, mit Arbeitszeiten und Urlaub",
        "Bestätigung und Erinnerung per E-Mail oder SMS, damit weniger Termine vergessen werden",
        "Buchung mit einem Klick bestätigen, verschieben oder stornieren",
        "Kunden- und Fahrzeughistorie sowie die Tagesauslastung auf einen Blick"
      ],
      "example": "Der Buchungsablauf in unserer RentoWorld-Demo zeigt, wie sich das für den Kunden anfühlt: auswählen, Daten im Kalender wählen, Preis sehen, bestätigen. Die Version für Ihre Werkstatt richtet sich nach Ihren Leistungen und Ihrem Team.",
      "faq": [
        {
          "q": "Lässt sich das System an unsere Werkstattsoftware anbinden?",
          "a": "Ja. Wenn Ihre Software einen Export oder eine Schnittstelle hat, binden wir sie an, sodass Buchungen dort ankommen, wo Sie schon arbeiten. Wenn nicht, starten wir mit einem eigenständigen Kalender und binden später an."
        },
        {
          "q": "Brauchen Kunden ein Konto?",
          "a": "Nein. Ein Kunde kann mit Namen, Telefonnummer und Fahrzeugdaten buchen. Ein Konto ist optional."
        }
      ]
    },
    "fr": {
      "name": "Garages et centres de pneus",
      "title": "Réservation en ligne pour garages et pneus | Mirelli Studio",
      "description": "Réservation en ligne pour garages et centres de pneus : le client choisit une prestation et un créneau, vous avez un calendrier clair et des rappels automatiques. Dès 500 €.",
      "h1": "Système de réservation en ligne pour garages et centres de pneus",
      "lead": "Moins d'appels et moins de rendez-vous manqués. Vos clients choisissent une prestation et un créneau libre sur votre site, et votre équipe voit la journée d'un coup d'œil. Nous le construisons autour du fonctionnement de votre garage.",
      "checks": [
        "Réservation 24h/24, sans appeler",
        "Confirmations et rappels automatiques",
        "Un seul calendrier pour tous les mécaniciens et ponts"
      ],
      "features": [
        "Liste des prestations avec durée et prix : vidange, freins, diagnostic, changement de pneus",
        "Le client indique le véhicule : marque, modèle et immatriculation",
        "Un calendrier par mécanicien ou poste, avec horaires et congés",
        "Confirmation et rappel par e-mail ou SMS, moins de rendez-vous oubliés",
        "Valider, déplacer ou annuler une réservation en un clic",
        "Historique des clients et des véhicules, charge du jour en un coup d'œil"
      ],
      "example": "Le parcours de réservation de notre démo RentoWorld montre ce que le client ressent : choisir, sélectionner des dates dans un calendrier, voir le prix, confirmer. La version de votre garage est conçue autour de vos prestations et de votre équipe.",
      "faq": [
        {
          "q": "Peut-on le relier à notre logiciel de garage ?",
          "a": "Oui. Si votre logiciel propose un export ou une API, nous le connectons, et les réservations arrivent là où vous travaillez déjà. Sinon, nous commençons par un calendrier autonome et connectons plus tard."
        },
        {
          "q": "Les clients ont-ils besoin d'un compte ?",
          "a": "Non. Un client peut réserver avec un nom, un numéro de téléphone et les données du véhicule. Le compte est facultatif."
        }
      ]
    },
    "sk": {
      "name": "Autoservisy a pneuservisy",
      "title": "Rezervačný systém pre autoservis a pneuservis | Mirelli Studio",
      "description": "Online rezervácie pre autoservisy a pneuservisy: zákazník si vyberie službu a termín, vy máte prehľadný kalendár a automatické pripomienky. Na mieru, od 500 €.",
      "h1": "Rezervačný systém pre autoservis a pneuservis",
      "lead": "Menej telefonátov a menej zmeškaných termínov. Zákazník si na vašom webe vyberie službu a voľný čas a váš tím vidí celý deň na jednom mieste. Postavíme to podľa toho, ako funguje váš servis. Pracujeme s firmami na Slovensku, v Česku, Rakúsku a Nemecku.",
      "checks": [
        "Zákazníci sa objednávajú 24/7, bez telefonátu",
        "Automatické potvrdenia a pripomienky",
        "Jeden kalendár pre všetkých mechanikov a stanovištia"
      ],
      "features": [
        "Zoznam služieb s trvaním a cenou: výmena oleja, brzdy, diagnostika, prezutie pneumatík",
        "Zákazník zadá auto: značku, model a evidenčné číslo",
        "Kalendár pre každého mechanika alebo stanovište, s pracovným časom a dovolenkami",
        "Potvrdenie a pripomienka e-mailom alebo SMS, menej zabudnutých termínov",
        "Schváliť, presunúť alebo zrušiť rezerváciu jedným klikom",
        "História zákazníkov a áut a vyťaženosť dňa na prvý pohľad"
      ],
      "example": "Priebeh rezervácie v našej ukážke RentoWorld ukazuje, ako to vyzerá pre zákazníka: vybrať, zvoliť dátumy v kalendári, vidieť cenu, potvrdiť. Verzia pre váš servis sa robí podľa vašich služieb a ľudí.",
      "faq": [
        {
          "q": "Dá sa prepojiť s naším softvérom pre servis?",
          "a": "Áno. Ak má váš softvér export alebo API, prepojíme ho, aby rezervácie prichádzali tam, kde už pracujete. Ak nie, začneme samostatným kalendárom a prepojíme neskôr."
        },
        {
          "q": "Potrebuje zákazník účet?",
          "a": "Nie. Zákazník sa môže objednať s menom, telefónom a údajmi o aute. Účet je voliteľný."
        }
      ]
    },
    "cs": {
      "name": "Autoservisy a pneuservisy",
      "title": "Rezervační systém pro autoservis a pneuservis | Mirelli Studio",
      "description": "Online rezervace pro autoservisy a pneuservisy: zákazník si vybere službu a termín, vy máte přehledný kalendář a automatické připomínky. Na míru, od 500 €.",
      "h1": "Rezervační systém pro autoservis a pneuservis",
      "lead": "Méně telefonátů a méně zmeškaných termínů. Zákazník si na vašem webu vybere službu a volný čas a váš tým vidí celý den na jednom místě. Postavíme to podle toho, jak funguje váš servis. Pracujeme s firmami v Česku, na Slovensku, v Rakousku a v Německu.",
      "checks": [
        "Zákazníci se objednávají 24/7, bez telefonátu",
        "Automatická potvrzení a připomínky",
        "Jeden kalendář pro všechny mechaniky a stání"
      ],
      "features": [
        "Seznam služeb s délkou a cenou: výměna oleje, brzdy, diagnostika, přezutí pneumatik",
        "Zákazník zadá auto: značku, model a registrační značku",
        "Kalendář pro každého mechanika nebo stání, s pracovní dobou a dovolenými",
        "Potvrzení a připomínka e-mailem nebo SMS, méně zapomenutých termínů",
        "Schválit, přesunout nebo zrušit rezervaci jedním klikem",
        "Historie zákazníků a aut a vytížení dne na první pohled"
      ],
      "example": "Průběh rezervace v naší ukázce RentoWorld ukazuje, jak to vypadá pro zákazníka: vybrat, zvolit data v kalendáři, vidět cenu, potvrdit. Verze pro váš servis se dělá podle vašich služeb a lidí.",
      "faq": [
        {
          "q": "Dá se propojit s naším softwarem pro servis?",
          "a": "Ano. Pokud má váš software export nebo API, propojíme ho, aby rezervace přicházely tam, kde už pracujete. Pokud ne, začneme samostatným kalendářem a propojíme později."
        },
        {
          "q": "Potřebuje zákazník účet?",
          "a": "Ne. Zákazník se může objednat se jménem, telefonem a údaji o autě. Účet je volitelný."
        }
      ]
    }
  },
  "salon": {
    "demo": "rentoworld",
    "en": {
      "name": "Hair and beauty salons",
      "title": "Online Booking for Hair and Beauty Salons | Mirelli Studio",
      "description": "Online booking for salons: clients choose a service, a stylist and a time, and get reminders. A system built around your salon, from €500.",
      "h1": "Online booking system for hair and beauty salons",
      "lead": "Clients book a stylist and a time themselves, even when the salon is closed, and you stop answering messages all day. We build it around your services, your team and your style.",
      "checks": [
        "Clients book by themselves, day and night",
        "Reminders that reduce no-shows",
        "A separate calendar for each stylist"
      ],
      "features": [
        "Services with durations and prices, including packages and treatments",
        "A choice of stylist, or simply the first one available",
        "A calendar per person with breaks, holidays and sick days",
        "Reminders by email or SMS and easy rescheduling",
        "A client list with visit history and notes",
        "An optional deposit or prepayment to protect against no-shows"
      ],
      "example": "In our RentoWorld demo you can see a booking flow with a calendar, a price and a confirmation. Your salon version uses your own services and stylists.",
      "faq": [
        {
          "q": "Can clients book from Instagram or Facebook?",
          "a": "Yes. You put one booking link in your profile, and clients book in two minutes without messaging you."
        },
        {
          "q": "Can I take deposits?",
          "a": "Yes, if you want to. Online payment is added to the booking, so the client pays a deposit when booking."
        }
      ]
    },
    "ru": {
      "name": "Парикмахерские и салоны красоты",
      "title": "Онлайн-запись для салонов красоты | Mirelli Studio",
      "description": "Онлайн-запись для салонов: клиент выбирает услугу, мастера и время и получает напоминание. Система под ваш салон, от 500 €.",
      "h1": "Система онлайн-записи для парикмахерских и салонов красоты",
      "lead": "Клиенты сами записываются к мастеру на удобное время, даже когда салон закрыт, а вы перестаёте целый день отвечать на сообщения. Мы строим систему под ваши услуги, команду и стиль.",
      "checks": [
        "Клиенты записываются сами, днём и ночью",
        "Напоминания, которые сокращают неявки",
        "Отдельный календарь для каждого мастера"
      ],
      "features": [
        "Услуги с длительностью и ценой, включая пакеты и процедуры",
        "Выбор мастера или просто первого свободного",
        "Календарь на каждого сотрудника с перерывами, выходными и больничными",
        "Напоминания по e-mail или SMS и удобный перенос записи",
        "Список клиентов с историей визитов и заметками",
        "Предоплата или депозит по желанию, чтобы защититься от неявок"
      ],
      "example": "В нашем демо RentoWorld виден процесс записи: календарь, цена и подтверждение. Версия для вашего салона использует ваши услуги и ваших мастеров.",
      "faq": [
        {
          "q": "Можно ли записываться из Instagram или Facebook?",
          "a": "Да. Вы ставите одну ссылку на запись в профиль, и клиенты записываются за две минуты, не пиша вам в личные сообщения."
        },
        {
          "q": "Можно ли брать предоплату?",
          "a": "Да, если хотите. К записи добавляется онлайн-оплата, и клиент вносит депозит при записи."
        }
      ]
    },
    "de": {
      "name": "Friseur- und Kosmetiksalons",
      "title": "Online-Terminbuchung für Friseur und Kosmetik | Mirelli Studio",
      "description": "Online-Terminbuchung für Salons: Kunden wählen Leistung, Stylist und Uhrzeit und erhalten Erinnerungen. Ein System für Ihren Salon, ab 500 €.",
      "h1": "Online-Terminbuchung für Friseur- und Kosmetiksalons",
      "lead": "Kunden buchen Stylist und Termin selbst, auch wenn der Salon geschlossen ist, und Sie beantworten nicht mehr den ganzen Tag Nachrichten. Wir bauen das System passend zu Ihren Leistungen, Ihrem Team und Ihrem Stil.",
      "checks": [
        "Kunden buchen selbst, Tag und Nacht",
        "Erinnerungen, die Nichterscheinen verringern",
        "Ein eigener Kalender für jede Stylistin und jeden Stylisten"
      ],
      "features": [
        "Leistungen mit Dauer und Preis, auch Pakete und Behandlungen",
        "Wahl der Stylistin oder des Stylisten oder einfach der erste freie Termin",
        "Ein Kalender je Person mit Pausen, Urlaub und Krankheitstagen",
        "Erinnerungen per E-Mail oder SMS und einfache Terminverschiebung",
        "Kundenliste mit Besuchsverlauf und Notizen",
        "Optional Anzahlung oder Vorauszahlung als Schutz vor Nichterscheinen"
      ],
      "example": "In unserer RentoWorld-Demo sehen Sie einen Buchungsablauf mit Kalender, Preis und Bestätigung. Die Version für Ihren Salon nutzt Ihre eigenen Leistungen und Ihr Team.",
      "faq": [
        {
          "q": "Können Kunden über Instagram oder Facebook buchen?",
          "a": "Ja. Sie hinterlegen einen Buchungslink in Ihrem Profil, und Kunden buchen in zwei Minuten, ohne Ihnen zu schreiben."
        },
        {
          "q": "Kann ich Anzahlungen verlangen?",
          "a": "Ja, wenn Sie möchten. Eine Online-Zahlung wird in die Buchung eingebunden, sodass der Kunde beim Buchen eine Anzahlung leistet."
        }
      ]
    },
    "fr": {
      "name": "Salons de coiffure et de beauté",
      "title": "Réservation en ligne pour salons de coiffure | Mirelli Studio",
      "description": "Réservation en ligne pour salons : le client choisit une prestation, un coiffeur et un créneau, et reçoit un rappel. Un système pour votre salon, dès 500 €.",
      "h1": "Système de réservation en ligne pour salons de coiffure et de beauté",
      "lead": "Vos clients réservent eux-mêmes un coiffeur et un créneau, même quand le salon est fermé, et vous ne répondez plus aux messages toute la journée. Nous le construisons autour de vos prestations, de votre équipe et de votre style.",
      "checks": [
        "Les clients réservent seuls, de jour comme de nuit",
        "Des rappels qui réduisent les absences",
        "Un calendrier distinct pour chaque coiffeur"
      ],
      "features": [
        "Prestations avec durée et prix, y compris forfaits et soins",
        "Choix du coiffeur, ou simplement le premier disponible",
        "Un calendrier par personne avec pauses, congés et arrêts maladie",
        "Rappels par e-mail ou SMS et report de rendez-vous facile",
        "Liste de clients avec historique des visites et notes",
        "Acompte ou prépaiement facultatif pour limiter les absences"
      ],
      "example": "Dans notre démo RentoWorld, vous voyez un parcours de réservation avec calendrier, prix et confirmation. La version de votre salon utilise vos propres prestations et vos coiffeurs.",
      "faq": [
        {
          "q": "Les clients peuvent-ils réserver depuis Instagram ou Facebook ?",
          "a": "Oui. Vous mettez un lien de réservation dans votre profil, et les clients réservent en deux minutes sans vous écrire."
        },
        {
          "q": "Puis-je demander un acompte ?",
          "a": "Oui, si vous le souhaitez. Le paiement en ligne s'ajoute à la réservation, et le client verse un acompte au moment de réserver."
        }
      ]
    },
    "sk": {
      "name": "Kaderníctva a salóny krásy",
      "title": "Online rezervácie pre kaderníctva a salóny | Mirelli Studio",
      "description": "Online rezervácie pre salóny: klient si vyberie službu, kaderníčku a čas a dostane pripomienku. Systém na mieru pre váš salón, od 500 €.",
      "h1": "Rezervačný systém pre kaderníctva a salóny krásy",
      "lead": "Klienti si sami rezervujú kaderníčku a čas, aj keď je salón zatvorený, a vy prestanete celý deň odpisovať na správy. Postavíme to podľa vašich služieb, tímu a štýlu. Pracujeme s firmami na Slovensku, v Česku, Rakúsku a Nemecku.",
      "checks": [
        "Klienti sa objednávajú sami, vo dne aj v noci",
        "Pripomienky, ktoré znižujú neprítomnosť",
        "Samostatný kalendár pre každú kaderníčku"
      ],
      "features": [
        "Služby s trvaním a cenou, vrátane balíčkov a ošetrení",
        "Výber kaderníčky alebo jednoducho prvého voľného termínu",
        "Kalendár pre každého s prestávkami, dovolenkami a PN",
        "Pripomienky e-mailom alebo SMS a jednoduché presunutie termínu",
        "Zoznam klientov s históriou návštev a poznámkami",
        "Voliteľná záloha alebo platba vopred ako ochrana pred neprítomnosťou"
      ],
      "example": "V našej ukážke RentoWorld vidíte priebeh rezervácie s kalendárom, cenou a potvrdením. Verzia pre váš salón používa vaše vlastné služby a kaderníčky.",
      "faq": [
        {
          "q": "Môžu klienti rezervovať z Instagramu alebo Facebooku?",
          "a": "Áno. Dáte jeden odkaz na rezerváciu do profilu a klienti sa objednajú za dve minúty bez písania správy."
        },
        {
          "q": "Môžem brať zálohy?",
          "a": "Áno, ak chcete. K rezervácii sa pridá online platba a klient pri objednaní zaplatí zálohu."
        }
      ]
    },
    "cs": {
      "name": "Kadeřnictví a salony krásy",
      "title": "Online rezervace pro kadeřnictví a salony | Mirelli Studio",
      "description": "Online rezervace pro salony: klient si vybere službu, kadeřnici a čas a dostane připomínku. Systém na míru pro váš salon, od 500 €.",
      "h1": "Rezervační systém pro kadeřnictví a salony krásy",
      "lead": "Klienti si sami rezervují kadeřnici a čas, i když je salon zavřený, a vy přestanete celý den odpovídat na zprávy. Postavíme to podle vašich služeb, týmu a stylu. Pracujeme s firmami v Česku, na Slovensku, v Rakousku a v Německu.",
      "checks": [
        "Klienti se objednávají sami, ve dne i v noci",
        "Připomínky, které snižují neúčast",
        "Samostatný kalendář pro každou kadeřnici"
      ],
      "features": [
        "Služby s délkou a cenou, včetně balíčků a ošetření",
        "Výběr kadeřnice nebo jednoduše prvního volného termínu",
        "Kalendář pro každého s pauzami, dovolenými a nemocenskou",
        "Připomínky e-mailem nebo SMS a snadné přesunutí termínu",
        "Seznam klientů s historií návštěv a poznámkami",
        "Volitelná záloha nebo platba předem jako ochrana před neúčastí"
      ],
      "example": "V naší ukázce RentoWorld vidíte průběh rezervace s kalendářem, cenou a potvrzením. Verze pro váš salon používá vaše vlastní služby a kadeřnice.",
      "faq": [
        {
          "q": "Mohou klienti rezervovat z Instagramu nebo Facebooku?",
          "a": "Ano. Dáte jeden odkaz na rezervaci do profilu a klienti se objednají za dvě minuty bez psaní zprávy."
        },
        {
          "q": "Mohu brát zálohy?",
          "a": "Ano, pokud chcete. K rezervaci se přidá online platba a klient při objednání zaplatí zálohu."
        }
      ]
    }
  },
  "restaurant": {
    "demo": "restaurant",
    "en": {
      "name": "Restaurants and cafés",
      "title": "Table Reservations and Online Ordering for Restaurants | Mirelli Studio",
      "description": "Online table reservations and ordering for restaurants and cafés: a live order board, menu with stop list and clear daily numbers. Built for you, from €500.",
      "h1": "Table reservations and online ordering for restaurants and cafés",
      "lead": "Guests reserve a table or order online, and the kitchen sees every order on one screen. We build it around your menu and the way your place runs, without a heavy till system.",
      "checks": [
        "Guests reserve and order without calling",
        "A live order board for the kitchen",
        "Menu with a stop list that updates instantly"
      ],
      "features": [
        "Table reservations with seats, time slots and confirmations",
        "Online menu with photos, prices and allergens",
        "A live order board: new, cooking, served",
        "A stop list that warns before an unavailable dish is ordered",
        "Daily takings, average bill and best-selling dishes",
        "Several locations in one system"
      ],
      "example": "Our RestOS demo shows the live order board, menu management and analytics running on sample data. Your version is shaped around your menu and your team.",
      "faq": [
        {
          "q": "Do we have to replace our till?",
          "a": "No. We can start with reservations and online orders next to your current till, and connect them later if you want."
        },
        {
          "q": "Can guests order from a table by QR code?",
          "a": "Yes. A QR code on the table opens your menu, and the order goes straight to the kitchen board."
        }
      ]
    },
    "ru": {
      "name": "Рестораны и кафе",
      "title": "Бронирование столов и онлайн-заказы для ресторанов | Mirelli Studio",
      "description": "Онлайн-бронирование столов и заказы для ресторанов и кафе: живая доска заказов, меню со стоп-листом и понятные цифры за день. Под ваш бизнес, от 500 €.",
      "h1": "Бронирование столов и онлайн-заказы для ресторанов и кафе",
      "lead": "Гости бронируют стол или заказывают онлайн, а кухня видит каждый заказ на одном экране. Мы строим систему под ваше меню и порядок работы, без тяжёлой кассовой системы.",
      "checks": [
        "Гости бронируют и заказывают без звонка",
        "Живая доска заказов для кухни",
        "Меню со стоп-листом, который обновляется мгновенно"
      ],
      "features": [
        "Бронирование столов с местами, временем и подтверждениями",
        "Онлайн-меню с фото, ценами и аллергенами",
        "Живая доска заказов: новый, готовится, подан",
        "Стоп-лист, который предупреждает до заказа недоступного блюда",
        "Выручка за день, средний чек и самые продаваемые блюда",
        "Несколько заведений в одной системе"
      ],
      "example": "Наше демо RestOS показывает живую доску заказов, управление меню и аналитику на тестовых данных. Ваша версия строится под ваше меню и вашу команду.",
      "faq": [
        {
          "q": "Нужно ли менять нашу кассу?",
          "a": "Нет. Можно начать с бронирования и онлайн-заказов рядом с текущей кассой и при желании подключить их позже."
        },
        {
          "q": "Можно ли заказывать со стола по QR-коду?",
          "a": "Да. QR-код на столе открывает ваше меню, и заказ сразу попадает на доску кухни."
        }
      ]
    },
    "de": {
      "name": "Restaurants und Cafés",
      "title": "Tischreservierung und Online-Bestellung für Restaurants | Mirelli Studio",
      "description": "Online-Tischreservierung und Bestellung für Restaurants und Cafés: Live-Bestelltafel, Speisekarte mit Stopp-Liste und klare Tageszahlen. Ab 500 €.",
      "h1": "Tischreservierung und Online-Bestellung für Restaurants und Cafés",
      "lead": "Gäste reservieren einen Tisch oder bestellen online, und die Küche sieht jede Bestellung auf einem Bildschirm. Wir bauen das System passend zu Ihrer Speisekarte und Ihren Abläufen, ohne schwerfälliges Kassensystem.",
      "checks": [
        "Gäste reservieren und bestellen ohne Anruf",
        "Eine Live-Bestelltafel für die Küche",
        "Speisekarte mit Stopp-Liste, die sofort aktualisiert wird"
      ],
      "features": [
        "Tischreservierung mit Plätzen, Zeitfenstern und Bestätigungen",
        "Online-Speisekarte mit Fotos, Preisen und Allergenen",
        "Eine Live-Bestelltafel: neu, in Zubereitung, serviert",
        "Eine Stopp-Liste, die warnt, bevor ein nicht verfügbares Gericht bestellt wird",
        "Tagesumsatz, durchschnittliche Rechnung und beliebteste Gerichte",
        "Mehrere Standorte in einem System"
      ],
      "example": "Unsere RestOS-Demo zeigt die Live-Bestelltafel, Speisekartenverwaltung und Auswertungen mit Beispieldaten. Ihre Version richtet sich nach Ihrer Speisekarte und Ihrem Team.",
      "faq": [
        {
          "q": "Müssen wir unsere Kasse ersetzen?",
          "a": "Nein. Wir können mit Reservierungen und Online-Bestellungen neben Ihrer bisherigen Kasse beginnen und sie später auf Wunsch anbinden."
        },
        {
          "q": "Können Gäste per QR-Code am Tisch bestellen?",
          "a": "Ja. Ein QR-Code am Tisch öffnet Ihre Speisekarte, und die Bestellung landet direkt auf der Küchentafel."
        }
      ]
    },
    "fr": {
      "name": "Restaurants et cafés",
      "title": "Réservation de tables et commande en ligne pour restaurants | Mirelli Studio",
      "description": "Réservation de tables et commande en ligne pour restaurants et cafés : tableau de commandes en direct, carte avec liste d'indisponibilités et chiffres du jour. Dès 500 €.",
      "h1": "Réservation de tables et commande en ligne pour restaurants et cafés",
      "lead": "Les clients réservent une table ou commandent en ligne, et la cuisine voit chaque commande sur un seul écran. Nous le construisons autour de votre carte et de votre organisation, sans caisse lourde.",
      "checks": [
        "Réservation et commande sans appeler",
        "Un tableau de commandes en direct pour la cuisine",
        "Une carte avec liste d'indisponibilités mise à jour instantanément"
      ],
      "features": [
        "Réservation de tables avec couverts, créneaux et confirmations",
        "Carte en ligne avec photos, prix et allergènes",
        "Un tableau de commandes en direct : nouvelle, en préparation, servie",
        "Une liste d'indisponibilités qui prévient avant la commande d'un plat épuisé",
        "Recette du jour, ticket moyen et plats les plus vendus",
        "Plusieurs établissements dans un seul système"
      ],
      "example": "Notre démo RestOS montre le tableau de commandes en direct, la gestion de la carte et les statistiques avec des données d'exemple. Votre version est conçue autour de votre carte et de votre équipe.",
      "faq": [
        {
          "q": "Faut-il remplacer notre caisse ?",
          "a": "Non. Nous pouvons commencer par les réservations et les commandes en ligne à côté de votre caisse actuelle, et les relier plus tard si vous le souhaitez."
        },
        {
          "q": "Les clients peuvent-ils commander à table avec un QR code ?",
          "a": "Oui. Un QR code sur la table ouvre votre carte, et la commande arrive directement sur le tableau de la cuisine."
        }
      ]
    },
    "sk": {
      "name": "Reštaurácie a kaviarne",
      "title": "Rezervácia stolov a online objednávky pre reštaurácie | Mirelli Studio",
      "description": "Online rezervácia stolov a objednávky pre reštaurácie a kaviarne: živá tabuľa objednávok, menu so stop zoznamom a prehľadné čísla za deň. Na mieru, od 500 €.",
      "h1": "Rezervácia stolov a online objednávky pre reštaurácie a kaviarne",
      "lead": "Hostia si rezervujú stôl alebo objednávajú online a kuchyňa vidí každú objednávku na jednej obrazovke. Postavíme to podľa vášho menu a spôsobu práce, bez ťažkopádneho pokladničného systému. Pracujeme s firmami na Slovensku, v Česku, Rakúsku a Nemecku.",
      "checks": [
        "Hostia rezervujú a objednávajú bez telefonátu",
        "Živá tabuľa objednávok pre kuchyňu",
        "Menu so stop zoznamom, ktorý sa aktualizuje okamžite"
      ],
      "features": [
        "Rezervácia stolov s miestami, časovými oknami a potvrdeniami",
        "Online menu s fotkami, cenami a alergénmi",
        "Živá tabuľa objednávok: nová, pripravuje sa, podaná",
        "Stop zoznam, ktorý upozorní pred objednaním nedostupného jedla",
        "Denné tržby, priemerný účet a najpredávanejšie jedlá",
        "Viac prevádzok v jednom systéme"
      ],
      "example": "Naša ukážka RestOS ukazuje živú tabuľu objednávok, správu menu a analytiku na vzorových dátach. Vaša verzia sa robí podľa vášho menu a tímu.",
      "faq": [
        {
          "q": "Musíme meniť našu pokladňu?",
          "a": "Nie. Môžeme začať rezerváciami a online objednávkami popri vašej terajšej pokladni a prípadne ich prepojiť neskôr."
        },
        {
          "q": "Môžu hostia objednávať od stola cez QR kód?",
          "a": "Áno. QR kód na stole otvorí vaše menu a objednávka ide priamo na tabuľu v kuchyni."
        }
      ]
    },
    "cs": {
      "name": "Restaurace a kavárny",
      "title": "Rezervace stolů a online objednávky pro restaurace | Mirelli Studio",
      "description": "Online rezervace stolů a objednávky pro restaurace a kavárny: živá tabule objednávek, menu se stop seznamem a přehledná čísla za den. Na míru, od 500 €.",
      "h1": "Rezervace stolů a online objednávky pro restaurace a kavárny",
      "lead": "Hosté si rezervují stůl nebo objednávají online a kuchyně vidí každou objednávku na jedné obrazovce. Postavíme to podle vašeho menu a způsobu práce, bez těžkopádného pokladního systému. Pracujeme s firmami v Česku, na Slovensku, v Rakousku a v Německu.",
      "checks": [
        "Hosté rezervují a objednávají bez telefonátu",
        "Živá tabule objednávek pro kuchyni",
        "Menu se stop seznamem, který se aktualizuje okamžitě"
      ],
      "features": [
        "Rezervace stolů s místy, časovými okny a potvrzeními",
        "Online menu s fotkami, cenami a alergeny",
        "Živá tabule objednávek: nová, připravuje se, podaná",
        "Stop seznam, který upozorní před objednáním nedostupného jídla",
        "Denní tržby, průměrný účet a nejprodávanější jídla",
        "Více provozoven v jednom systému"
      ],
      "example": "Naše ukázka RestOS ukazuje živou tabuli objednávek, správu menu a analytiku na vzorových datech. Vaše verze se dělá podle vašeho menu a týmu.",
      "faq": [
        {
          "q": "Musíme měnit naši pokladnu?",
          "a": "Ne. Můžeme začít rezervacemi a online objednávkami vedle vaší stávající pokladny a případně je propojit později."
        },
        {
          "q": "Mohou hosté objednávat od stolu přes QR kód?",
          "a": "Ano. QR kód na stole otevře vaše menu a objednávka jde přímo na tabuli v kuchyni."
        }
      ]
    }
  },
  "clinic": {
    "demo": "rentoworld",
    "en": {
      "name": "Clinics, vets and therapists",
      "title": "Online Appointment Booking for Clinics and Vets | Mirelli Studio",
      "description": "Online appointment booking for clinics, vets, dentists and therapists: patients pick a service and a time, you get reminders and a clear schedule. From €500.",
      "h1": "Online appointment booking for clinics, vets and therapists",
      "lead": "Patients book a visit without calling during opening hours, and automatic reminders reduce missed appointments. We build it around your services and your specialists, with attention to privacy.",
      "checks": [
        "Patients book 24/7, without calling",
        "Reminders that reduce missed visits",
        "A schedule per doctor or specialist"
      ],
      "features": [
        "Services with durations, for example a check-up, vaccination or a first visit",
        "A schedule per specialist with working hours and absences",
        "Confirmations and reminders by email or SMS",
        "Rescheduling and cancelling in one click",
        "Minimal patient data, stored on a server in the EU",
        "A waiting list that fills cancelled slots"
      ],
      "example": "The booking flow in our RentoWorld demo shows the idea: choose, pick a time in a calendar, confirm. Your version uses your own services and specialists.",
      "faq": [
        {
          "q": "How is patient data protected?",
          "a": "We store only what is needed to confirm a visit, on a server in the EU, with access limited to your team. We explain what is stored and where in plain language."
        },
        {
          "q": "Can patients book for a pet or for a child?",
          "a": "Yes. The form can ask for the pet or the patient's name and the reason for the visit, so you are prepared before they arrive."
        }
      ]
    },
    "ru": {
      "name": "Клиники, ветеринары и терапевты",
      "title": "Онлайн-запись на приём для клиник и ветеринаров | Mirelli Studio",
      "description": "Онлайн-запись на приём для клиник, ветеринаров, стоматологов и терапевтов: пациент выбирает услугу и время, у вас напоминания и понятное расписание. От 500 €.",
      "h1": "Онлайн-запись на приём для клиник, ветеринаров и терапевтов",
      "lead": "Пациенты записываются на визит без звонка в рабочее время, а автоматические напоминания сокращают неявки. Мы строим систему под ваши услуги и специалистов, с вниманием к конфиденциальности.",
      "checks": [
        "Пациенты записываются 24/7, без звонка",
        "Напоминания, которые сокращают неявки",
        "Расписание на каждого врача или специалиста"
      ],
      "features": [
        "Услуги с длительностью, например осмотр, вакцинация или первичный приём",
        "Расписание на каждого специалиста с рабочим временем и отсутствиями",
        "Подтверждения и напоминания по e-mail или SMS",
        "Перенос и отмена записи в один клик",
        "Минимум данных о пациенте, хранение на сервере в ЕС",
        "Лист ожидания, который заполняет освободившиеся окна"
      ],
      "example": "Процесс записи в нашем демо RentoWorld показывает идею: выбрать, отметить время в календаре, подтвердить. Ваша версия использует ваши услуги и специалистов.",
      "faq": [
        {
          "q": "Как защищены данные пациентов?",
          "a": "Мы храним только то, что нужно для подтверждения визита, на сервере в ЕС, с доступом только у вашей команды. Что и где хранится, объясняем простым языком."
        },
        {
          "q": "Можно ли записать питомца или ребёнка?",
          "a": "Да. В форме можно спросить имя питомца или пациента и причину визита, чтобы вы были готовы до его прихода."
        }
      ]
    },
    "de": {
      "name": "Praxen, Tierärzte und Therapeuten",
      "title": "Online-Terminbuchung für Praxen und Tierärzte | Mirelli Studio",
      "description": "Online-Terminbuchung für Praxen, Tierärzte, Zahnärzte und Therapeuten: Patienten wählen Leistung und Zeit, Sie haben Erinnerungen und einen klaren Plan. Ab 500 €.",
      "h1": "Online-Terminbuchung für Praxen, Tierärzte und Therapeuten",
      "lead": "Patienten buchen einen Termin, ohne in den Öffnungszeiten anzurufen, und automatische Erinnerungen verringern verpasste Termine. Wir bauen das System passend zu Ihren Leistungen und Ihren Fachkräften, mit Blick auf den Datenschutz.",
      "checks": [
        "Patienten buchen rund um die Uhr, ohne Anruf",
        "Erinnerungen, die verpasste Termine verringern",
        "Ein Plan je Ärztin, Arzt oder Fachkraft"
      ],
      "features": [
        "Leistungen mit Dauer, zum Beispiel Untersuchung, Impfung oder Erstbesuch",
        "Ein Plan je Fachkraft mit Arbeitszeiten und Abwesenheiten",
        "Bestätigungen und Erinnerungen per E-Mail oder SMS",
        "Verschieben und Absagen mit einem Klick",
        "Minimale Patientendaten, gespeichert auf einem Server in der EU",
        "Eine Warteliste, die frei gewordene Termine füllt"
      ],
      "example": "Der Buchungsablauf in unserer RentoWorld-Demo zeigt die Idee: auswählen, Zeit im Kalender wählen, bestätigen. Ihre Version nutzt Ihre eigenen Leistungen und Fachkräfte.",
      "faq": [
        {
          "q": "Wie werden Patientendaten geschützt?",
          "a": "Wir speichern nur, was zur Bestätigung eines Termins nötig ist, auf einem Server in der EU, mit Zugriff nur für Ihr Team. Was wo gespeichert wird, erklären wir in einfachen Worten."
        },
        {
          "q": "Können Patienten für ein Haustier oder ein Kind buchen?",
          "a": "Ja. Das Formular kann nach dem Namen des Tieres oder Patienten und dem Besuchsgrund fragen, damit Sie vorbereitet sind."
        }
      ]
    },
    "fr": {
      "name": "Cliniques, vétérinaires et thérapeutes",
      "title": "Prise de rendez-vous en ligne pour cliniques et vétérinaires | Mirelli Studio",
      "description": "Prise de rendez-vous en ligne pour cliniques, vétérinaires, dentistes et thérapeutes : le patient choisit une prestation et un créneau, vous avez rappels et planning clair. Dès 500 €.",
      "h1": "Prise de rendez-vous en ligne pour cliniques, vétérinaires et thérapeutes",
      "lead": "Les patients prennent rendez-vous sans appeler pendant les heures d'ouverture, et les rappels automatiques réduisent les rendez-vous manqués. Nous le construisons autour de vos prestations et de vos praticiens, en veillant à la confidentialité.",
      "checks": [
        "Prise de rendez-vous 24h/24, sans appeler",
        "Des rappels qui réduisent les absences",
        "Un planning par médecin ou praticien"
      ],
      "features": [
        "Prestations avec durée, par exemple consultation, vaccination ou première visite",
        "Un planning par praticien avec horaires et absences",
        "Confirmations et rappels par e-mail ou SMS",
        "Report et annulation en un clic",
        "Données de patient minimales, stockées sur un serveur dans l'UE",
        "Une liste d'attente qui comble les créneaux annulés"
      ],
      "example": "Le parcours de réservation de notre démo RentoWorld montre l'idée : choisir, sélectionner un créneau dans un calendrier, confirmer. Votre version utilise vos propres prestations et praticiens.",
      "faq": [
        {
          "q": "Comment les données des patients sont-elles protégées ?",
          "a": "Nous ne stockons que ce qui est nécessaire pour confirmer une visite, sur un serveur dans l'UE, avec un accès limité à votre équipe. Nous expliquons en termes simples ce qui est stocké et où."
        },
        {
          "q": "Peut-on réserver pour un animal ou un enfant ?",
          "a": "Oui. Le formulaire peut demander le nom de l'animal ou du patient et le motif de la visite, pour que vous soyez préparé."
        }
      ]
    },
    "sk": {
      "name": "Ambulancie, veterinári a terapeuti",
      "title": "Online objednávanie pre ambulancie a veterinárov | Mirelli Studio",
      "description": "Online objednávanie pre ambulancie, veterinárov, zubárov a terapeutov: pacient si vyberie službu a čas, vy máte pripomienky a prehľadný rozvrh. Od 500 €.",
      "h1": "Online objednávanie pre ambulancie, veterinárov a terapeutov",
      "lead": "Pacienti sa objednajú bez telefonátu v ordinačných hodinách a automatické pripomienky znižujú zmeškané termíny. Postavíme to podľa vašich služieb a odborníkov, s dôrazom na súkromie. Pracujeme s firmami na Slovensku, v Česku, Rakúsku a Nemecku.",
      "checks": [
        "Pacienti sa objednávajú 24/7, bez telefonátu",
        "Pripomienky, ktoré znižujú zmeškané návštevy",
        "Rozvrh pre každého lekára alebo odborníka"
      ],
      "features": [
        "Služby s trvaním, napríklad prehliadka, očkovanie alebo prvá návšteva",
        "Rozvrh pre každého odborníka s pracovným časom a neprítomnosťou",
        "Potvrdenia a pripomienky e-mailom alebo SMS",
        "Presunutie a zrušenie termínu jedným klikom",
        "Minimum údajov o pacientovi, uložených na serveri v EÚ",
        "Čakacia listina, ktorá zaplní uvoľnené termíny"
      ],
      "example": "Priebeh rezervácie v našej ukážke RentoWorld ukazuje princíp: vybrať, zvoliť čas v kalendári, potvrdiť. Vaša verzia používa vaše vlastné služby a odborníkov.",
      "faq": [
        {
          "q": "Ako sú chránené údaje pacientov?",
          "a": "Ukladáme len to, čo treba na potvrdenie návštevy, na serveri v EÚ, s prístupom len pre váš tím. Čo a kde sa ukladá, vysvetlíme jednoduchými slovami."
        },
        {
          "q": "Dá sa objednať zviera alebo dieťa?",
          "a": "Áno. Formulár sa môže pýtať na meno zvieraťa alebo pacienta a dôvod návštevy, aby ste boli pripravení."
        }
      ]
    },
    "cs": {
      "name": "Ordinace, veterináři a terapeuti",
      "title": "Online objednávání pro ordinace a veterináře | Mirelli Studio",
      "description": "Online objednávání pro ordinace, veterináře, zubaře a terapeuty: pacient si vybere službu a čas, vy máte připomínky a přehledný rozvrh. Od 500 €.",
      "h1": "Online objednávání pro ordinace, veterináře a terapeuty",
      "lead": "Pacienti se objednají bez telefonátu v ordinačních hodinách a automatické připomínky snižují zmeškané termíny. Postavíme to podle vašich služeb a odborníků, s ohledem na soukromí. Pracujeme s firmami v Česku, na Slovensku, v Rakousku a v Německu.",
      "checks": [
        "Pacienti se objednávají 24/7, bez telefonátu",
        "Připomínky, které snižují zmeškané návštěvy",
        "Rozvrh pro každého lékaře nebo odborníka"
      ],
      "features": [
        "Služby s délkou, například prohlídka, očkování nebo první návštěva",
        "Rozvrh pro každého odborníka s pracovní dobou a nepřítomností",
        "Potvrzení a připomínky e-mailem nebo SMS",
        "Přesunutí a zrušení termínu jedním klikem",
        "Minimum údajů o pacientovi, uložených na serveru v EU",
        "Čekací listina, která zaplní uvolněné termíny"
      ],
      "example": "Průběh rezervace v naší ukázce RentoWorld ukazuje princip: vybrat, zvolit čas v kalendáři, potvrdit. Vaše verze používá vaše vlastní služby a odborníky.",
      "faq": [
        {
          "q": "Jak jsou chráněna data pacientů?",
          "a": "Ukládáme jen to, co je třeba k potvrzení návštěvy, na serveru v EU, s přístupem jen pro váš tým. Co a kde se ukládá, vysvětlíme jednoduchými slovy."
        },
        {
          "q": "Dá se objednat zvíře nebo dítě?",
          "a": "Ano. Formulář se může ptát na jméno zvířete nebo pacienta a důvod návštěvy, abyste byli připraveni."
        }
      ]
    }
  }
};

export const nicheSlugs = Object.keys(niches);
