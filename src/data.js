// ============================================================
//  All résumé content lives here. Edit this file to tune copy —
//  the components read straight from it.
// ============================================================

export const profile = {
  name: 'Dhruv Chaudhry',
  title: 'AI & Full-Stack Engineer',
  location: 'Boston, MA',
  email: 'dhruvchaudhry15@gmail.com',
  phone: '732-837-8355',
  phoneHref: '7328378355',
  linkedin: 'https://www.linkedin.com/in/dhruv-chaudhry-/',
  linkedinLabel: 'linkedin.com/in/dhruv-chaudhry-',
  initials: 'DC',
  photo: 'headshot.jpg', // lives in /public
  // Role badges shown next to the title in the header.
  roles: [
    'AI Engineer @ UnitedHealth Group',
    'Assistant AI Researcher @ Pennsylvania State University',
  ],
  // One-line hook under the name.
  summary:
    'AI engineer who builds, ships, and secures GenAI-enabled software at enterprise scale and a relentless prototyper who turns ambiguous problems into working products fast.',
};

export const experience = [
  {
    role: 'AI Engineer',
    org: 'UnitedHealth Group',
    place: 'Boston, MA',
    date: 'Jul 2024 — Present',
    points: [
      '<strong>Founding AI and full-stack engineer</strong> for a large-scale automated internal regression-testing platform that UnitedHealth Group\'s contact-center operations rely on — used by <strong>45 teams</strong> across the organization. Built an adoption dashboard tracking usage and impact metrics, presented to leaders to report progress and drive tool adoption.',
      'Served as <strong>team lead delegate</strong> — delegating and coordinating workstreams, unblocking engineers, and representing the team in leadership discussions.',
      'Owned the platform\'s generative AI strategy end to end, architecting and deploying <strong>GenAI agents</strong> into production workflows that automate manual work at scale, cutting operational effort by <strong>~45%</strong>.',
      'Designed and built <strong>REST APIs and microservices</strong> secured with OAuth2 and role-based access control, and drove application security and <strong>DevSecOps</strong> through continuous scanning and vulnerability remediation.',
      'Independently designed and delivered multiple live generative-AI trainings to <strong>30+ engineers and product managers</strong>, pairing hands-on demos with a written guide and post-session assessments to accelerate responsible AI adoption.',
      'Partnered cross-functionally with engineering, product, and leadership to translate business vision into scalable AI solutions, presenting demos and proofs of concept in a fast-paced environment.',
    ],
    tags: ['AI Engineer', 'Team Lead', 'GenAI / LLM', 'AI Agents', 'REST APIs', 'OAuth2', 'DevSecOps', 'AWS'],
  },
  {
    role: 'Research Assistant',
    org: 'Pennsylvania State University',
    place: 'Remote',
    date: 'Jan 2025 — Mar 2026',
    points: [
      'Co-authored <em>Clinicians-in-the-Loop: A Narrative Review of Clinician-Facing Integrated AI Within Mental Health Workflows</em> (in review) — ran subject-matter-expert interviews and analyzed <strong>12 human-in-the-loop AI tools</strong> for decision support, training, and ethical integration.',
      'Led building a <strong>Streamlit RAG application</strong> integrating GPT-4 with a <strong>ChromaDB</strong> vector store over a clinical document corpus, letting clinicians query an LLM for decision support. Demoed to clinicians and faculty at external institutions (incl. Georgia State and Carnegie Mellon), gathering feedback and tracking adoption to validate real-world usefulness.',
      'Synthesized findings on construct validity, clinician–AI interaction, and real-world feasibility to identify gaps in AI evaluation and deployment.',
    ],
    tags: ['AI Research', 'RAG', 'GPT-4', 'ChromaDB', 'Streamlit', 'Human-in-the-Loop'],
  },
  {
    role: 'Software Engineering Intern',
    org: 'Sukhi',
    place: 'Seattle, WA',
    date: 'May 2022 — Dec 2022',
    points: [
      'Built full-stack features for Sukhi\'s B2B employee mental-health platform (React.js, Python, PHP, SQL) — a digital wellness product serving enterprise clients.',
      'Developed custom frontend components and backend logic, collaborating cross-functionally with UX designers and product managers on the Figma-based design.',
    ],
    tags: ['React.js', 'Python', 'PHP', 'SQL', 'Figma'],
  },
];

// Featured personal / open-source builds.
export const projects = [
  {
    name: 'Movi — Social Movie-Ranking App',
    blurb: 'Solo build · React Native + Next.js · AI-powered',
    points: [
      'Rapidly prototyped and shipped a cross-platform social movie-ranking app end to end in <strong>Cursor</strong> (React Native/Expo, Next.js 14, TypeScript, Supabase/Postgres) — solo from concept to an installable <strong>PWA deployed on Vercel</strong>.',
      'Onboarded <strong>34 users</strong> through a live product demo, collecting real usage and feedback to iterate on features and validate adoption.',
      'Integrated the <strong>OpenAI API</strong> to power custom movie-likeability scores — combinable across two users to generate shared genre preferences — and generated shareable AI mood-board images server-side via <strong>Cloudflare Workers AI (FLUX.1-schnell)</strong>.',
      'Engineered a binary-search ranking engine ("which did you like more?") backed by a Postgres RPC that converts subjective picks into consistent 0–10 scores per sentiment band.',
      'Architected a 433-line Postgres schema with row-level-security policies and ranking RPCs, plus a Next.js admin dashboard (moderation, live stats) secured with HMAC-signed-cookie auth.',
    ],
    tags: ['React Native', 'Next.js 14', 'TypeScript', 'Supabase / Postgres', 'OpenAI API', 'Cloudflare Workers AI', 'Vercel'],
  },
];

export const skills = [
  {
    title: 'Cloud & Data',
    items: [
      { name: 'AWS Cloud & Lambda', level: 'Fluent · Certified' },
      { name: 'Azure', level: 'Fluent · Certified' },
      { name: 'SQL / PostgreSQL', level: 'Fluent' },
      { name: 'Excel', level: 'Fluent' },
    ],
  },
  {
    title: 'Generative AI & ML',
    items: [
      { name: 'Prompt Engineering' },
      { name: 'GenAI Agents' },
      { name: 'RAG' },
      { name: 'GitHub Copilot' },
      { name: 'Cursor' },
      { name: 'Replit' },
      { name: 'Rapid Prototyping' },
      { name: 'Supervised & Unsupervised Learning' },
      { name: 'Neural Networks' },
      { name: 'Deep Learning' },
      { name: 'Transformers' },
      { name: 'NLP' },
      { name: 'Model Evaluation' },
      { name: 'Feature Engineering' },
      { name: 'PCA' },
      { name: 'Streamlit' },
      { name: 'HuggingFace' },
      { name: 'Embeddings & Vector DBs (ChromaDB)' },
      { name: 'Fine-Tuning' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Java', level: 'Fluent' },
      { name: 'Python', level: 'Fluent' },
      { name: 'SQL', level: 'Fluent' },
      { name: 'C++', level: 'Intermediate' },
      { name: 'REST APIs', level: 'Fluent' },
      { name: 'Microservices', level: 'Fluent' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'JavaScript', level: 'Fluent' },
      { name: 'React.js', level: 'Fluent' },
      { name: 'HTML', level: 'Fluent' },
      { name: 'CSS', level: 'Fluent' },
      { name: 'Swift', level: 'Intermediate' },
    ],
  },
  {
    title: 'Tools & Other',
    items: [
      { name: 'Unity' },
      { name: 'BluePrism' },
      { name: 'MATLAB' },
      { name: 'Git' },
      { name: 'OOP' },
      { name: 'Linux' },
      { name: 'MS Suite' },
    ],
  },
];

export const education = {
  schools: [
    {
      badge: 'Expected 2026',
      degree: 'M.S. in Artificial Intelligence',
      org: 'Pennsylvania State University — Online',
      detail:
        'Research (Spring 2025): <em>Clinicians-in-the-Loop — A Narrative Review of Current Approaches to Integrating AI within Clinician Mental Health Workflows</em> (in review).',
    },
    {
      badge: '2022 — 2024',
      degree: 'B.S. in Computer Science & Business',
      org: 'Rutgers University — New Brunswick, NJ',
      detail:
        "Dean's List (Spring 2024). Peer Mentor with the Undergraduate Student Alliance of Computer Scientists (Sep 2023 – May 2024).",
    },
    {
      badge: '2020 — 2022',
      degree: 'Undergraduate Coursework',
      org: 'New Jersey Institute of Technology — Newark, NJ',
      detail:
        "Dean's List every semester (Fall 2020 – Spring 2022). Robotics Club — designed algorithms and built/programmed VEX competition robots in C++.",
    },
  ],
  certs: [
    { tag: 'AWS', title: 'AWS Certified — Cloud & Lambda' },
    { tag: 'Azure', title: 'Microsoft Azure Certified' },
    { tag: 'IBM', title: 'Mastering Generative AI: Language Models with Transformers' },
    { tag: 'KU LeuvenX', title: 'AI in Healthcare: Hype or Help?' },
    { tag: 'edX · MIT', title: 'CS50: Introduction to Artificial Intelligence with Python' },
  ],
};

// Compact interest chips — emoji + short label.
export const beyond = [
  { emoji: '🥋', title: 'Black Belt · Tae Kwon Do' },
  { emoji: '🏓', title: 'Pickleball' },
  { emoji: '🏃', title: 'Running · 5:25 mile' },
  { emoji: '♟️', title: 'Chess' },
  { emoji: '🎸', title: 'Guitar' },
  { emoji: '🍓', title: 'Raspberry Pi' },
  { emoji: '🌐', title: 'Hindi · English · Spanish' },
  { emoji: '🤝', title: '160 volunteer hours' },
];
