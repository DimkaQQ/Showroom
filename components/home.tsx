import { projects, services, siteConfig } from "@/lib/data";
import { translations } from "@/lib/translations";
import { locales, pathFor, langName, type Lang } from "@/lib/i18n";
import { Enhance } from "@/components/enhance";
import { jsonLdFor } from "@/lib/seo";

export function Home({ lang }: { lang: Lang }) {
  const t = translations[lang];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFor(lang)) }} />
      <Hero lang={lang} t={t} />
      <main>
        <Work t={t} />
        <Services t={t} />
        <Process t={t} />
      </main>
      <Stack />
      <Contact t={t} />
      <Footer lang={lang} t={t} />
      <Enhance />
    </>
  );
}

type T = (typeof translations)[Lang];

function Letters({ word, from }: { word: string; from: number }) {
  return (
    <span aria-hidden="true">
      {word.split("").map((c, i) => (
        <span key={i} className="ch" style={{ "--i": from + i } as React.CSSProperties}>{c}</span>
      ))}
    </span>
  );
}

function LangSwitch({ lang, t }: { lang: Lang; t: T }) {
  return (
    <ul className="langs" aria-label={t.nav.langLabel}>
      {locales.map((l) => (
        <li key={l}>
          <a href={pathFor(l)} hrefLang={l} lang={l} title={langName[l]} aria-current={l === lang ? "true" : undefined}>
            {l.toUpperCase()}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Hero({ lang, t }: { lang: Lang; t: T }) {
  const [first, second] = siteConfig.name.split(" ");
  return (
    <header className="hero" id="top">
      <nav className="bar" aria-label="Primary">
        <ul>
          <li><a href="#work">{t.nav.work}</a></li>
          <li><a href="#services">{t.nav.services}</a></li>
          <li><a href="#process">{t.nav.process}</a></li>
          <li><a href="#contact">{t.nav.contact}</a></li>
        </ul>
        <div className="bar-end">
          <LangSwitch lang={lang} t={t} />
          <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </nav>

      <div className="reel" aria-hidden="true">
        <div className="reel-track">
          {[...projects, ...projects].map((p, i) => (
            <span key={i} className="reel-item" style={{ background: p.stage }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/shots/${p.id}-s.webp`} width={720} height={450} alt="" loading={i < 4 ? "eager" : "lazy"} />
            </span>
          ))}
        </div>
      </div>

      <div className="hero-mid">
        <div className="hero-copy rise rise-1">
          <p className="lead">{t.hero.lead}</p>
          <a className="btn" href="#work">{t.hero.viewWork}</a>
        </div>
        <dl className="hero-stats rise rise-2">
          <div><dt>{t.hero.statProjects}</dt><dd>9</dd></div>
          <div><dt>{t.hero.statYears}</dt><dd>3+</dd></div>
          <div><dt>{t.hero.statTech}</dt><dd>15+</dd></div>
        </dl>
      </div>

      <h1 className="wordmark">
        <Letters word={first} from={0} /> <Letters word={second} from={first.length} />
        <span className="sr-only">{siteConfig.name} — {t.hero.descriptor}</span>
      </h1>
    </header>
  );
}

function Work({ t }: { t: T }) {
  return (
    <section className="work" id="work" aria-labelledby="work-h">
      <div className="work-head">
        <h2 id="work-h" className="reveal">{t.showroom.title}</h2>
        <p className="reveal">{t.showroom.subtitle}</p>
      </div>

      <div className="scene">
        <div className="stage">
          {projects.map((p, i) => (
            <div key={p.id} className={`frame${i === 0 ? " is-active" : ""}`} data-frame={p.id} style={{ background: p.stage }}>
              <div className="win" data-win>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/shots/${p.id}.webp`} width={1440} height={900} alt={`${p.name} — ${t.showroom.projects[i].tagline}`} loading={i < 2 ? "eager" : "lazy"} />
                <iframe title={p.name} data-src={`https://${p.subdomain}.${siteConfig.domain}`} tabIndex={-1} allow="fullscreen" />
              </div>
              <button type="button" className="try" data-try aria-pressed="false">
                <span className="try-off">{t.showroom.tryOff}</span>
                <span className="try-on">{t.showroom.tryOn}</span>
              </button>
            </div>
          ))}
        </div>

        <ol className="projects">
          {projects.map((p, i) => {
            const href = `https://${p.subdomain}.${siteConfig.domain}`;
            return (
              <li key={p.id} className="project" data-project={p.id} id={p.id}>
                <a className="inline-shot" href={href} target="_blank" rel="noopener noreferrer" style={{ background: p.stage }} tabIndex={-1} aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/shots/${p.id}-s.webp`} width={720} height={450} alt="" loading="lazy" />
                </a>
                <div className="project-text">
                  <h3>{p.name}</h3>
                  <p className="tagline">{t.showroom.projects[i].tagline}, {p.year}</p>
                  <p className="desc">{t.showroom.projects[i].description}</p>
                  <p className="tags">{p.tags.join(", ")}</p>
                  <a className="btn btn-light" href={href} target="_blank" rel="noopener noreferrer">
                    {t.showroom.explore}
                    <span className="sr-only"> — {p.name}</span> →
                  </a>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Services({ t }: { t: T }) {
  return (
    <section className="services" id="services" aria-labelledby="services-h">
      <div className="services-head">
        <h2 id="services-h" className="reveal">{t.services.title}</h2>
        <p className="reveal">{t.services.subtitle}</p>
      </div>
      <ul className="service-list">
        {services.map((s, i) => (
          <li key={i} className="service reveal">
            <h3>{t.services.items[i].title}</h3>
            <div>
              <p>{t.services.items[i].description}</p>
              <p className="tags">{s.tags.join(", ")}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Process({ t }: { t: T }) {
  return (
    <section className="process" id="process" aria-labelledby="process-h">
      <div className="process-head">
        <h2 id="process-h" className="reveal">{t.process.title}</h2>
        <p className="reveal">{t.process.subtitle}</p>
      </div>
      <ol className="steps">
        {t.process.steps.map((s, i) => (
          <li key={i} className="step reveal">
            <span className="step-n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

const STACK = ["TypeScript", "React", "Next.js", "Node.js", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "Stripe", "Telegram", "Tailwind"];

function Stack() {
  return (
    <section className="stack" aria-label="Stack">
      <p className="sr-only">{STACK.join(", ")}</p>
      <div className="stack-track" aria-hidden="true">
        {[...STACK, ...STACK].map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </section>
  );
}

function Contact({ t }: { t: T }) {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-h">
      <h2 id="contact-h" className="reveal">{t.contact.title}</h2>
      <div className="contact-body">
        <p className="reveal">{t.contact.description}</p>
        <div className="contact-links reveal">
          <a className="mail" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}

function Footer({ lang, t }: { lang: Lang; t: T }) {
  const [first, second] = siteConfig.name.split(" ");
  return (
    <footer className="foot">
      <p className="foot-note">
        © {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights} {t.footer.built}.{" "}
        <a href={`${pathFor(lang)}privacy/`}>{t.footer.privacy}</a>
      </p>
      <p className="wordmark wordmark-foot" aria-hidden="true">
        <span>{first}</span> <span>{second}</span>
      </p>
    </footer>
  );
}
