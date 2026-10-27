import { useEffect, useState } from 'react';

// ============================================================
//  Animated hero portrait — "icon clock".
//  On hover/focus, role icons appear around the circular border
//  like clock markers and rotate continuously. Whichever icon
//  reaches the bottom (between the photo and the text) is
//  highlighted and its name is shown underneath.
//  Edit PERSONAS to tune icons / titles.
// ============================================================

// Line icons (stroke = currentColor, colored violet in CSS).
const Svg = ({ children }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const ICONS = {
  ai: (
    <Svg>
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" />
      <path d="M18 14l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" />
    </Svg>
  ),
  code: (
    <Svg>
      <path d="M8 8l-4 4 4 4" />
      <path d="M16 8l4 4-4 4" />
      <path d="M13.5 6l-3 12" />
    </Svg>
  ),
  db: (
    <Svg>
      <ellipse cx="12" cy="6" rx="7" ry="2.6" />
      <path d="M5 6v12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6" />
      <path d="M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6" />
    </Svg>
  ),
  design: (
    <Svg>
      <path d="M4 20l1-4L15 6l3 3L8 19l-4 1z" />
      <path d="M14 7l3 3" />
    </Svg>
  ),
  rocket: (
    <Svg>
      <path d="M12 3c3 2.2 4.2 6 4 9l-2 2h-4l-2-2c-.2-3 1-6.8 4-9z" />
      <circle cx="12" cy="9" r="1.6" />
      <path d="M10 16l-2.4 2 .8 3M14 16l2.4 2-.8 3" />
    </Svg>
  ),
};

const PERSONAS = [
  { icon: ICONS.ai, title: 'AI / ML Engineer' },
  { icon: ICONS.code, title: 'Full-Stack Builder' },
  { icon: ICONS.db, title: 'Backend Engineer' },
  { icon: ICONS.design, title: 'Product & UX Designer' },
  { icon: ICONS.rocket, title: 'Forward Deployed Engineer' },
];

const N = PERSONAS.length;
const STEP = 360 / N;
const INTERVAL = 2200; // ms between advances

export default function SketchHero({ photo, name, idleTitle }) {
  const [active, setActive] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setTick((t) => t + 1), INTERVAL);
    return () => clearInterval(id);
  }, [active]);

  const enter = () => setActive(true);
  const leave = () => {
    setActive(false);
    setTick(0);
  };

  // Monotonically decreasing rotation keeps the spin going one way.
  const rot = 180 - tick * STEP;
  const idx = ((tick % N) + N) % N;

  return (
    <div
      className={`sketch${active ? ' is-active' : ''}`}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onFocus={enter}
      onBlur={leave}
      tabIndex={0}
      role="img"
      aria-label={name}
    >
      <div className="sketch__ring">
        <div className="sketch__orbit" style={{ '--rot': `${rot}deg` }} aria-hidden="true">
          {PERSONAS.map((p, i) => (
            <span className="orbit__slot" key={i} style={{ '--a': `${i * STEP}deg` }}>
              <span className="orbit__icon" data-active={active && i === idx ? 'true' : 'false'}>
                {p.icon}
              </span>
            </span>
          ))}
        </div>

        <div className="sketch__stage">
          <img className="sketch__photo" src={photo} alt={name} />
        </div>

        {!active && <span className="sketch__hint" aria-hidden="true">hover me</span>}
      </div>

      <div className="sketch__label" aria-hidden="true">
        <span key={`${active}-${tick}`} className="sketch__label-text">
          {active ? PERSONAS[idx].title : idleTitle}
        </span>
      </div>
    </div>
  );
}
