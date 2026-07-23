import { useEffect, useState } from 'react';
import { profile, experience, projects, skills, education, beyond } from './data.js';

// Left-rail section navigation.
const SECTIONS = [
  { id: 'top', label: 'Intro' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'beyond', label: 'Beyond' },
  { id: 'contact', label: 'Contact' },
];

// Track which section is currently in view for the side nav.
function useActiveSection() {
  const [active, setActive] = useState('top');
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

function SideNav() {
  const active = useActiveSection();
  return (
    <nav className="sidenav" aria-label="Section navigation">
      <ul>
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className={active === s.id ? 'is-active' : ''}>
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

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

      <SideNav />

      <div className="page">
        {/* ---- Header ---- */}
        <header className="head" id="top">
          <div className="head__grid">
            <div className="head__intro">
              <p className="head__eyebrow">Hi, I'm</p>
              <h1 className="head__name">
                Dhruv <span className="grad">Chaudhry</span>
              </h1>
              <p className="head__summary">{profile.tagline}</p>
              <p className="head__roles">
                {profile.roles.map((r, i) => (
                  <span key={r}>
                    {i > 0 && <span className="dot-sep"> · </span>}
                    {r}
                  </span>
                ))}
              </p>
              <div className="head__actions">
                <a className="btn btn--primary" href={`mailto:${profile.email}`}>Get in touch</a>
                <a
                  className="btn btn--icon"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                  </svg>
                </a>
                <a
                  className="btn btn--icon"
                  href={profile.x}
                  target="_blank"
                  rel="noopener"
                  aria-label="X"
                  title="X"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93zm-1.29 19.5h2.04L6.48 3.24H4.29l13.32 17.41z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="head__photo">
              <img src={`${import.meta.env.BASE_URL}${profile.photo}`} alt={profile.name} />
            </div>
          </div>
          <a className="head__scroll" href="#experience" aria-label="Scroll to content">
            <span>Scroll</span>
            <span className="head__scroll-arrow" aria-hidden="true">↓</span>
          </a>
        </header>

        {/* ---- Experience ---- */}
        <Section num="01" title="Experience" id="experience">
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
                {job.org === 'Pennsylvania State University' && (
                  <a
                    className="job__paper-link"
                    href={`${import.meta.env.BASE_URL}Clinicians-in-the-loop-Narrative-Review.pdf`}
                    target="_blank"
                    rel="noopener"
                  >
                    View paper (PDF) ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </Section>

        {/* ---- Projects ---- */}
        <Section num="02" title="Featured Projects" id="projects">
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
        <Section num="03" title="Skills" id="skills">
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
        <Section num="04" title="Education" id="education">
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
        <Section num="05" title="Beyond the Code" id="beyond">
          <div className="beyond reveal">
            {beyond.map((b, i) => (
              <span className="beyond__chip" key={i}>
                <span className="beyond__emoji">{b.emoji}</span>
                {b.title}
              </span>
            ))}
          </div>
        </Section>

        {/* ---- Contact ---- */}
        <Section num="06" title="Contact" id="contact">
          <div className="contact reveal">
            <h3 className="contact__big">Let's build something.</h3>
            <p className="contact__sub">Open to AI and software engineering roles — the fastest way to reach me is email.</p>
            <a className="contact__email" href={`mailto:${profile.email}`}>{profile.email}</a>
            <div className="contact__row">
              <a className="btn btn--primary" href={`mailto:${profile.email}`}>Get in touch</a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noopener">LinkedIn</a>
              <a className="btn" href={profile.x} target="_blank" rel="noopener">X</a>
              <span className="contact__loc">📍 {profile.location}</span>
            </div>
          </div>
        </Section>

        <footer className="foot reveal">
          <p>© {new Date().getFullYear()} {profile.name}</p>
        </footer>
      </div>
    </>
  );
}

function Section({ num, title, id, children }) {
  return (
    <section className="section" id={id}>
      <div className="section__head reveal">
        <span className="section__num">{num}</span>
        <h2 className="section__title">{title}</h2>
        <span className="section__rule" />
      </div>
      {children}
    </section>
  );
}
