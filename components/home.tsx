import { projects, services, siteConfig } from "@/lib/data";
import { translations } from "@/lib/translations";
import { hybrid, supportLine, tgLabel } from "@/lib/hybrid";
import { pathFor, type Lang } from "@/lib/i18n";
import { Fx } from "@/components/fx";
import { Eggs } from "@/components/eggs";
import { Logo } from "@/components/logo";
import { LangMenu } from "@/components/lang-menu";
import { Wizard } from "@/components/wizard";
import { Palette } from "@/components/palette";
import { Pricing } from "@/components/pricing";
import { pricingText } from "@/lib/pricing-text";
import { results } from "@/lib/results";
import { testimonials } from "@/lib/testimonials";
import { jsonLdFor } from "@/lib/seo";
import { niches, nicheUi, nicheSlugs } from "@/lib/niches";

type T = (typeof translations)[Lang];

export function Home({ lang }: { lang: Lang }) {
  const t = translations[lang];
  return (
    <>
      <a className="skip" href="#main">{t.nav.skip}</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFor(lang)) }} />
      <div id="progress" aria-hidden="true" />
      <TopBar lang={lang} t={t} />
      <Hero t={t} lang={lang} />
      <main id="main" tabIndex={-1}>
        <Niches lang={lang} />
        <Marquee />
        <Work lang={lang} t={t} />
        <Services t={t} lang={lang} />
        <Pricing lang={lang} />
        <Studio lang={lang} />
        <About t={t} />
        <Quotes lang={lang} />
        <Process t={t} />
        <Faq t={t} />
        <Contact lang={lang} t={t} />
      </main>
      <Footer lang={lang} t={t} />
      <Fx />
      <Palette lang={lang} />
      <Eggs lang={lang} />
    </>
  );
}

function TopBar({ lang, t }: { lang: Lang; t: T }) {
  const p = hybrid[lang].pal;
  return (
    <header className="top" id="top-bar" data-topbar>
      <div className="wrap">
        <a className="brand" href={pathFor(lang)} aria-label={siteConfig.name}>
          <Logo size={34} />
          <span>{siteConfig.name}</span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#work">{pricingText[lang].cases.title}</a>
          <a href="#services">{t.nav.services}</a>
          <a href="#pricing">{pricingText[lang].nav}</a>
          <a href="#process">{t.nav.process}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <button type="button" className="kbd" data-pal-open aria-haspopup="dialog" aria-label={p.search}>
          <svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
          <kbd data-kbd>Ctrl K</kbd>
        </button>
        <a className="btn btn-primary mag top-cta" href="#contact">{t.nav.contact}</a>
        <LangMenu lang={lang} />
      </div>
    </header>
  );
}

function Hero({ t, lang }: { t: T; lang: Lang }) {
  const h = hybrid[lang].hero;
  return (
    <header className="hero" id="top">
      <div className="grid" id="grid" aria-hidden="true" />
      <div className="spot" id="spot" aria-hidden="true" />
      <div className="floats" aria-hidden="true">
        {["garage", "clinic", "spaces", "restaurant"].map((id) => (
          // eslint-disable-next-line @next/next/no-img-element
          <div className="fl" key={id}><img src={`/shots/${id}-s.webp`} width={720} height={450} alt="" decoding="async" /></div>
        ))}
      </div>
      <div className="wrap">
        <h1 className="wordmark" id="h1">
          <span className="sr-only">{siteConfig.name}: {t.hero.descriptor}</span>
          <span className="ln" aria-hidden="true"><span className="split">{h.l1}</span></span>
          <span className="ln" aria-hidden="true"><span className="split">{h.l2}</span></span>
          <span className="ln" aria-hidden="true"><span className="acc" id="rot" data-words={h.words.join("|")}>{h.words[0]}</span></span>
        </h1>
        <p className="lead">{h.lead}</p>
        <div className="cta">
          <a className="btn btn-primary mag" href="#work">{t.hero.viewWork}</a>
          <a className="btn mag" href="#contact">{t.nav.contact}</a>
        </div>
        <dl className="hero-stats">
          <div><dd>100+</dd><dt>{t.hero.statClients}</dt></div>
          <div><dd>3+</dd><dt>{t.hero.statYears}</dt></div>
          <div><dd>12</dd><dt>{t.hero.statDemos}</dt></div>
        </dl>
      </div>
    </header>
  );
}

const STACK = ["TypeScript", "React", "Next.js", "Node.js", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "Stripe", "Telegram", "Tailwind"];

function Marquee() {
  return (
    <div className="mq" aria-label="Stack">
      <div className="mq-track" id="mq">
        <ul>{STACK.map((s) => <li key={s}>{s}</li>)}</ul>
        <ul className="mq-dup" aria-hidden="true">{STACK.map((s) => <li key={s}>{s}</li>)}</ul>
      </div>
    </div>
  );
}

function Work({ lang, t }: { lang: Lang; t: T }) {
  return (
    <section className="sec work" id="work" aria-labelledby="work-h">
      <div className="wrap">
        <div className="head">
          <h2 id="work-h">{pricingText[lang].cases.title}</h2>
          <p className="sub">{pricingText[lang].cases.sub}</p>
          <p className="highlight">{pricingText[lang].cases.highlight}</p>
        </div>
      </div>
      <div className="hz-pin" id="hz-pin">
        <div className="hz-count" aria-hidden="true">
          <div className="big"><span id="hz-n">01</span><i> / {String(projects.length).padStart(2, "0")}</i></div>
          <div className="bar"><b id="hz-bar" /></div>
        </div>
        <div className="hz-track" id="hz-track">
          {projects.map((p, i) => {
            const href = `https://${p.subdomain}.${siteConfig.domain}`;
            const s = t.showroom.projects[i];
            return (
              <article key={p.id} className="card" id={p.id}>
                <a className="shot" href={href} target="_blank" rel="nofollow noopener noreferrer" tabIndex={-1} aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/shots/${p.id}.webp`} width={1200} height={750} alt="" loading="lazy" decoding="async" />
                </a>
                <div className="meta">
                  <h3>{p.name}</h3>
                  <p className="demotag">{pricingText[lang].cases.demoTag}</p>
                  <p className="tg">{s.tagline}, {p.year}</p>
                  <p className="desc">{s.description}</p>
                  {(results[p.id]?.[lang] ?? results[p.id]?.en) && <p className="result">{results[p.id]?.[lang] ?? results[p.id]?.en}</p>}
                  <p className="changed">{pricingText[lang].cases.changed}</p>
                  <ul className="helps">{hybrid[lang].helps[i].map((x) => <li key={x}>{x}</li>)}</ul>
                  <div className="links">
                    <a className="go" href={href} target="_blank" rel="nofollow noopener noreferrer">
                      {t.showroom.explore}
                      <span className="sr-only">: {p.name}</span>
                    </a>
                    <a className="textlink" href={`${pathFor(lang)}work/${p.id}/`}>
                      {t.showroom.caseStudy}
                      <span className="sr-only">: {p.name}</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Which demo to show next to each service, in the order of translations.services.items.
const VIS = ["rentoworld", "garage", "storage", "caspianflow", "botfactory", "dizeltrade"];

function Services({ t, lang }: { t: T; lang: Lang }) {
  return (
    <section className="sec" id="services" aria-labelledby="services-h">
      <div className="wrap">
        <div className="head">
          <h2 id="services-h">{t.services.title}</h2>
          <p className="sub">{t.services.subtitle}</p>
        </div>
        <div className="stack">
          {services.map((s, i) => (
            <article key={i} className="sc" style={{ "--i": i } as React.CSSProperties}>
              <div>
                <h3>{t.services.items[i].title}</h3>
                <p>{t.services.items[i].description}</p>
                <ul className="tg">{hybrid[lang].chips[i].map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
              <div className="vis">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/shots/${VIS[i]}-s.webp`} width={720} height={450} alt="" loading="lazy" decoding="async" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About({ t }: { t: T }) {
  return (
    <section className="sec about" id="about" aria-labelledby="about-h">
      <div className="wrap">
        <h2 id="about-h">{t.about.title}</h2>
        <div className="about-body">
          <div className="about-text">
            {t.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="about-facts">
            {t.about.facts.map((f) => (
              <div key={f.value}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Quotes({ lang }: { lang: Lang }) {
  if (testimonials.length === 0) return null;
  return (
    <section className="sec why" aria-label="Clients">
      <div className="wrap quotes">
        {testimonials.map((q) => (
          <figure key={q.name}>
            <blockquote>{q.quote[lang]}</blockquote>
            <figcaption>{q.name}, {q.role}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Process({ t }: { t: T }) {
  return (
    <section className="sec" id="process" aria-labelledby="process-h">
      <div className="wrap">
        <div className="head">
          <h2 id="process-h">{t.process.title}</h2>
          <p className="sub">{t.process.subtitle}</p>
        </div>
        <ol className="tl" id="tl">
          <li className="rail" id="rail" aria-hidden="true" />
          {t.process.steps.map((s, i) => (
            <li key={i} className="st">
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Faq({ t }: { t: T }) {
  return (
    <section className="sec faq" id="faq" aria-labelledby="faq-h">
      <div className="wrap">
        <h2 id="faq-h">{t.faq.title}</h2>
        <div className="faq-list">
          {t.faq.items.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Niches({ lang }: { lang: Lang }) {
  const ui = nicheUi[lang];
  return (
    <section className="niches" aria-label={ui.others}>
      <div className="wrap">
        <p className="for-label">{ui.label}</p>
        <ul>
          {nicheSlugs.map((s) => (
            <li key={s}>
              <a href={`${pathFor(lang)}for/${s}/`}>{niches[s][lang].name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Studio({ lang }: { lang: Lang }) {
  const t = pricingText[lang].studio;
  return (
    <section className="sec studio" id="studio" aria-labelledby="studio-h">
      <div className="wrap">
        <h2 id="studio-h">{t.title}</h2>
        <p className="studio-text">{t.text}</p>
        <ul className="studio-points">
          <li>{t.point1}</li>
          <li>{t.point2}</li>
          <li>{t.point3}</li>
        </ul>
        <p className="studio-owner">{t.owner}</p>
        {siteConfig.entities.length > 0 && (
          <div className="studio-ent">
            <p className="studio-k">{t.contract}</p>
            <ul>
              {siteConfig.entities.map((e) => (
                <li key={e.role}><b>{pricingText[lang].regions[e.role]}</b>: {e.name}, {e.id}, {e.address}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

function Contact({ lang, t }: { lang: Lang; t: T }) {
  return (
    <section className="sec contact" id="contact" aria-labelledby="contact-h">
      <div className="wrap">
        <h2 id="contact-h">{t.contact.title}</h2>
        <div className="contact-body">
          <div className="contact-info">
            <p>{t.contact.description}</p>
            <a className="mail" id="mail" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <p className="support">{supportLine[lang]} <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a></p>
            <div className="contact-links">
              {siteConfig.whatsapp && <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>}
              {siteConfig.telegramBot && <a href={`${siteConfig.telegramBot}?start=${lang}`} target="_blank" rel="me noopener noreferrer" className="btn btn-primary tg-btn">{tgLabel[lang]}</a>}
            </div>
          </div>
          <Wizard lang={lang} />
        </div>
      </div>
    </section>
  );
}

function Footer({ lang, t }: { lang: Lang; t: T }) {
  return (
    <footer className="foot">
      <div className="wrap">
        <p className="foot-note">
          <span data-egg-year>© {new Date().getFullYear()}</span> {siteConfig.name}. {t.footer.rights}{" "}
          <a href={`${pathFor(lang)}privacy/`}>{t.footer.privacy}</a>
        </p>
      </div>
    </footer>
  );
}
