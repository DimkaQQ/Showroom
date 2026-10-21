import { projects, services, siteConfig } from "@/lib/data";
import { translations } from "@/lib/translations";
import { L } from "@/components/l";
import { Enhance } from "@/components/enhance";

const en = translations.en;
const ru = translations.ru;

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Services />
      <Contact />
      <Footer />
      <Enhance />
    </>
  );
}

function Hero() {
  return (
    <header className="hero" id="top">
      <nav className="bar">
        <ul>
          <li><a href="#work"><L ru={ru.nav.work} en={en.nav.work} /></a></li>
          <li><a href="#services"><L ru={ru.nav.services} en={en.nav.services} /></a></li>
          <li><a href="#contact"><L ru={ru.nav.contact} en={en.nav.contact} /></a></li>
        </ul>
        <div className="bar-end">
          <button type="button" className="lang" data-lang-toggle aria-label="Language / Язык">
            <span data-l="ru">EN</span>
            <span data-l="en">RU</span>
          </button>
          <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </nav>

      <div className="reel" aria-hidden="true">
        <div className="reel-track">
          {[...projects, ...projects].map((p, i) => (
            <span key={i} className="reel-item" style={{ background: p.stage }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/shots/${p.id}.jpg`} width={1440} height={900} alt="" loading={i < 4 ? "eager" : "lazy"} />
            </span>
          ))}
        </div>
      </div>

      <div className="hero-mid">
        <div className="hero-copy rise rise-1">
          <p className="lead">
            <L
              ru="Full-stack разработчик. Делаю рабочие системы для бизнеса: ERP, маркетплейсы, ботов. Девять проектов ниже живые, откройте любой."
              en="Full-stack developer building working systems for business: ERP, marketplaces, bots. All nine projects below are live. Open any of them."
            />
          </p>
          <a className="btn" href="#work"><L ru={ru.hero.viewWork} en={en.hero.viewWork} /></a>
        </div>
        <dl className="hero-stats rise rise-2">
          <div><dt><L ru={ru.hero.statProjects} en={en.hero.statProjects} /></dt><dd>9</dd></div>
          <div><dt><L ru={ru.hero.statYears} en={en.hero.statYears} /></dt><dd>3+</dd></div>
          <div><dt><L ru={ru.hero.statTech} en={en.hero.statTech} /></dt><dd>15+</dd></div>
        </dl>
      </div>

      <h1 className="wordmark rise rise-3">
        <span>Darian</span> <span>Mirelli</span>
        <span className="sr-only"> — Full-Stack Developer</span>
      </h1>
    </header>
  );
}

function Work() {
  return (
    <section className="work" id="work" aria-labelledby="work-h">
      <div className="work-head">
        <h2 id="work-h" className="reveal"><L ru={ru.showroom.title} en={en.showroom.title} /></h2>
        <p className="reveal"><L ru={ru.showroom.subtitle} en={en.showroom.subtitle} /></p>
      </div>

      <div className="scene">
        <div className="stage" aria-hidden="true">
          {projects.map((p, i) => (
            <a
              key={p.id}
              href={`https://${p.subdomain}.${siteConfig.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              className={`frame${i === 0 ? " is-active" : ""}`}
              data-frame={p.id}
              style={{ background: p.stage }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/shots/${p.id}.jpg`} width={1440} height={900} alt="" loading={i < 2 ? "eager" : "lazy"} />
            </a>
          ))}
        </div>

        <ol className="projects">
          {projects.map((p, i) => {
            const href = `https://${p.subdomain}.${siteConfig.domain}`;
            return (
              <li key={p.id} className="project" data-project={p.id} id={p.id}>
                <a className="inline-shot" href={href} target="_blank" rel="noopener noreferrer" style={{ background: p.stage }} tabIndex={-1} aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/shots/${p.id}.jpg`} width={1440} height={900} alt="" loading="lazy" />
                </a>
                <div className="project-text">
                  <p className="tagline">
                    <L ru={ru.showroom.projects[i].tagline} en={en.showroom.projects[i].tagline} />, {p.year}
                  </p>
                  <h3>{p.name}</h3>
                  <p className="desc"><L ru={ru.showroom.projects[i].description} en={en.showroom.projects[i].description} /></p>
                  <p className="tags">{p.tags.join(", ")}</p>
                  <a className="btn btn-light" href={href} target="_blank" rel="noopener noreferrer">
                    <L ru={ru.showroom.explore} en={en.showroom.explore} />
                    <span className="sr-only"> {p.name}</span> →
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

function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-h">
      <div className="services-head">
        <h2 id="services-h" className="reveal"><L ru={ru.services.title} en={en.services.title} /></h2>
        <p className="reveal"><L ru={ru.services.subtitle} en={en.services.subtitle} /></p>
      </div>
      <ul className="service-list">
        {services.map((s, i) => (
          <li key={i} className="service reveal">
            <h3><L ru={ru.services.items[i].title} en={en.services.items[i].title} /></h3>
            <div>
              <p><L ru={ru.services.items[i].description} en={en.services.items[i].description} /></p>
              <p className="tags">{s.tags.join(", ")}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-h">
      <h2 id="contact-h" className="reveal">
        <L ru={`${ru.contact.title1} ${ru.contact.title2}`} en={`${en.contact.title1} ${en.contact.title2}`} />
      </h2>
      <div className="contact-body">
        <p className="reveal"><L ru={ru.contact.description} en={en.contact.description} /></p>
        <div className="contact-links reveal">
          <a className="mail" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <p className="foot-note">© 2026 {siteConfig.name}</p>
      <p className="wordmark wordmark-foot" aria-hidden="true">
        <span>Darian</span> <span>Mirelli</span>
      </p>
    </footer>
  );
}
