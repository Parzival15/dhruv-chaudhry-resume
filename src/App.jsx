import { useEffect, useState } from 'react';
import { profile, experience, projects, skills, education, beyond } from './data.js';

// Reveal-on-scroll for elements with the .reveal class.
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// Thin progress bar tracking scroll depth.
function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return p;
}

export default function App() {
  useReveal();
  const progress = useScrollProgress();

  return (
    <>
      {/* decorative background */}
      <div className="bg" aria-hidden="true">
        <div className="bg__blob bg__blob--1" />
        <div className="bg__blob bg__blob--2" />
        <div className="bg__grid" />
      </div>

      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />

      <div className="page">
        {/* ---- Header ---- */}
        <header className="head">
          <div className="head__top">
            <span className="head__avatar">
              <img src={`${import.meta.env.BASE_URL}${profile.photo}`} alt={profile.name} />
            </span>
            <div>
              <h1 className="head__name">
                Dhruv <span className="grad">Chaudhry</span>
              </h1>
              <div className="head__titlerow">
                <p className="head__title">{profile.title}</p>
                <div className="head__roles">
                  {profile.roles.map((r) => (
                    <span className="head__role" key={r}>{r}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="head__summary">{profile.summary}</p>
          <div className="head__links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span className="dot-sep">·</span>
            <a href={profile.linkedin} target="_blank" rel="noopener">{profile.linkedinLabel}</a>
            <span className="dot-sep">·</span>
            <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
          </div>
        </header>

        {/* ---- Experience ---- */}
        <Section num="01" title="Experience">
          <div className="timeline">
            {experience.map((job, i) => (
              <article className="job reveal" key={i}>
                <span className="job__node" />
                <div className="job__head">
                  <div>
                    <h3 className="job__role">{job.role}</h3>
                    <p className="job__org">{job.org} · {job.place}</p>
                  </div>
                  <span className="job__date">{job.date}</span>
                </div>
                <ul className="job__points">
                  {job.points.map((pt, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: pt }} />
                  ))}
                </ul>
                <div className="tags">
                  {job.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* ---- Projects ---- */}
        <Section num="02" title="Featured Projects">
          <div className="projects">
            {projects.map((p, i) => (
              <article className="proj reveal" key={i} style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="proj__head">
                  <h3 className="proj__name">{p.name}</h3>
                  <span className="proj__blurb">{p.blurb}</span>
                </div>
                <ul className="proj__points">
                  {p.points.map((pt, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: pt }} />
                  ))}
                </ul>
                <div className="tags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* ---- Skills ---- */}
        <Section num="03" title="Skills">
          <div className="skills">
            {skills.map((group, i) => (
              <div className="skill-group reveal" key={group.title} style={{ transitionDelay: `${i * 70}ms` }}>
                <h4 className="skill-group__title">{group.title}</h4>
                <div className="tags">
                  {group.items.map((item) => (
                    <span
                      className={`tag${item.level === 'Fluent' ? ' tag--strong' : ''}`}
                      key={item.name}
                      title={item.level || ''}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ---- Education ---- */}
        <Section num="04" title="Education">
          {education.schools.map((s, i) => (
            <article className="edu reveal" key={i}>
              <div className="edu__head">
                <h3 className="edu__degree">{s.degree}</h3>
                <span className="edu__date">{s.badge}</span>
              </div>
              <p className="edu__org">{s.org}</p>
              <p className="edu__detail" dangerouslySetInnerHTML={{ __html: s.detail }} />
            </article>
          ))}
          <div className="certs reveal">
            <h4 className="certs__title">Professional Development</h4>
            <ul className="certs__list">
              {education.certs.map((c, i) => (
                <li key={i}><span className="certs__tag">{c.tag}</span>{c.title}</li>
              ))}
            </ul>
          </div>
        </Section>

        {/* ---- Beyond ---- */}
        <Section num="05" title="Beyond the Code">
          <div className="beyond reveal">
            {beyond.map((b, i) => (
              <span className="beyond__chip" key={i}>
                <span className="beyond__emoji">{b.emoji}</span>
                {b.title}
              </span>
            ))}
          </div>
        </Section>

        <footer className="foot reveal">
          <h2 className="foot__big">Let's build something.</h2>
          <p>Open to software engineering & AI roles — and I reply fast.</p>
          <a className="foot__cta" href={`mailto:${profile.email}`}>Get in touch →</a>
        </footer>
      </div>
    </>
  );
}

function Section({ num, title, children }) {
  return (
    <section className="section">
      <div className="section__head reveal">
        <span className="section__num">{num}</span>
        <h2 className="section__title">{title}</h2>
        <span className="section__rule" />
      </div>
      {children}
    </section>
  );
}
