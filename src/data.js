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
  x: 'https://x.com/Dhruv84779352',
  github: 'https://github.com/Parzival15',
  initials: 'DC',
  photo: 'headshot.jpg', // lives in /public
  // Role badges shown next to the title in the header.
  roles: [
    'AI Engineer @ UnitedHealth Group',
    'AI Researcher @ Pennsylvania State University',
  ],
  // Punchy hero tagline under the name.
  tagline: 'Turning ambiguous problems into products people use.',
  // One-line hook (used elsewhere / for meta).
  summary:
    'AI engineer who builds, ships, and secures GenAI-enabled software at enterprise scale and a relentless prototyper who turns ambiguous problems into working products fast.',
};

export const experience = [
  {
    role: 'AI Engineer',
    org: 'UnitedHealth Group',
    place: 'Boston, MA',
    date: '07/2024 - Current',
    points: [
      "<strong>Founding AI and full stack engineer</strong> for a large-scale automated internal regression-testing platform that UnitedHealth Group's contact-center operations rely on; <strong>used by 45 teams</strong> across the organization. Additionally built an adoption dashboard tracking usage and impact metrics, and presented it to leaders across the organization to report progress and drive tool adoption.",
      'Served as <strong>team lead delegate</strong> which included delegating and coordinating workstreams, unblocking engineers, and representing the team in leadership discussions.',
      "<strong>Owned the teams generative AI strategy</strong> end to end by architecting and deploying GenAI agents into production workflows that automate manual work at scale, <strong>cutting operational effort by ~45%</strong>.",
      'Designed and built <strong>REST APIs and microservices</strong> secured with <strong>OAuth2</strong> and role-based access control; drove application security and <strong>DevSecOps</strong> through continuous scanning and vulnerability remediation.',
      'Independently designed and delivered multiple live generative-AI training to <strong>30+ engineers and product managers</strong>, pairing hands-on demos with a written guide and post-session assessments to measure comprehension and accelerate responsible AI adoption.',
      'Partnered cross-functionally with engineering, product, and leadership to translate business vision into scalable AI solutions, presenting demos and proofs of concept to validate and refine concepts in a fast-paced environment.',
    ],
    tags: ['AI Engineer', 'Team Lead', 'GenAI', 'REST APIs', 'OAuth2', 'DevSecOps', 'AWS'],
  },
  {
    role: 'Research Assistant',
    org: 'Pennsylvania State University',
    place: 'Remote',
    date: '01/2025 - 03/2026',
    points: [
      'Co-authored <strong><a href="/Clinicians-in-the-loop-Narrative-Review.pdf" target="_blank" rel="noopener" download="Clinicians-in-the-loop: A Narrative Review of Clinician-Facing Integrated AI Within Mental Health Workflows.pdf">Clinicians-in-the-loop: A Narrative Review of Clinician-Facing Integrated AI Within Mental Health Workflows</a></strong> (In Review): conducted subject matter expert interviews and analyzed <strong>12 HITL-AI tools</strong> in clinician mental health workflows for decision support, training, and ethical integration.',
      'Led building efforts for a <strong>Streamlit RAG application</strong> integrating <strong>GPT 4</strong> with a <strong>ChromaDB</strong> vector store to retrieve from a clinical document corpus, letting clinicians query patient issues through an LLM for decision support through prototyping a working human-in-the-loop AI tool alongside the review. Demoed to clinicians and faculty from external institutions (incl. <strong>Georgia State and Carnegie Mellon</strong>), gathering feedback to iterate on the tool over time and tracking adoption to validate real-world usefulness.',
      'Synthesized findings on construct validity, clinician-AI interaction, and real-world feasibility to identify gaps in evaluation and deployment',
    ],
    tags: ['AI Research', 'RAG', 'GPT 4', 'ChromaDB', 'Streamlit', 'HITL'],
  },
  {
    role: 'Software Engineering Intern',
    org: 'Sukhi',
    place: 'Seattle, WA',
    date: '05/2022 - 12/2022',
    points: [
      "Built <strong>full-stack features</strong> for Sukhi's B2B employee mental-health platform (React.js, Python, PHP, SQL) - a digital wellness product serving enterprise clients. Developed custom frontend components and backend logic while collaborating cross-functionally with UX designers and product managers on the Figma-based design.",
    ],
    tags: ['React.js', 'Python', 'PHP', 'SQL', 'Figma'],
  },
];

// Featured personal / open-source builds.
export const projects = [
  {
    name: 'Movi, Full-Stack Social Movie-Ranking App',
    blurb: 'Personal Project · 02/2026 - Current',
    points: [
      'Rapidly prototyped and shipped a cross-platform social movie-ranking app end to end in <strong>Cursor</strong> (React Native/Expo, Next.js 14, TypeScript, Supabase/Postgres), taking it solo from concept to an installable <strong>PWA deployed on Vercel</strong>.',
      'Onboarded <strong>34 users</strong> through a live product demo, collecting real usage and feedback to iterate on features and validate adoption.',
      'Integrated the <strong>OpenAI API</strong> to power custom movie likeability scores which can be combined between two users to generate combined genre preference, and generated shareable AI mood-board images server-side via <strong>Cloudflare Workers AI (FLUX.1-schnell)</strong>.',
      'Integrated <strong>Airtable</strong> via its API as a product-ops backend for tracking feature delivery and roadmap status, and organizing user-feedback data to surface adoption trends and prioritize improvements.',
      'Engineered a <strong>binary-search ranking engine</strong> ("which did you like more?") backed by a Postgres RPC converting subjective picks into consistent 0-10 scores per sentiment band.',
      'Architected a <strong>433-line Postgres schema</strong> with row-level-security policies and ranking RPCs, plus a Next.js admin dashboard (moderation, live stats) secured with HMAC-signed-cookie auth.',
    ],
    tags: ['React Native', 'Next.js 14', 'TypeScript', 'Supabase/Postgres', 'OpenAI API', 'Cloudflare Workers AI', 'Airtable', 'Vercel'],
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
      { name: 'Generative AI' },
      { name: 'Retrieval Augmented Generation' },
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
      { name: 'Dimensionality Reduction (PCA)' },
      { name: 'Streamlit' },
      { name: 'HuggingFace' },
      { name: 'Embeddings & Vector Databases (ChromaDB)' },
      { name: 'Fine-Tuning Concepts' },
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
      degree: 'Masters of Artificial Intelligence',
      org: 'Pennsylvania State University, Online',
      detail:
        'Research (Spring 2025): <a href="/Clinicians-in-the-loop-Narrative-Review.pdf" target="_blank" rel="noopener" download="Clinicians-in-the-loop: A Narrative Review of Clinician-Facing Integrated AI Within Mental Health Workflows.pdf">Clinicians-in-the-Loop: A Narrative Review of Current Approaches to Integrating AI within Clinician Mental Health Workflows</a> (In Review)',
    },
    {
      badge: '2020-2024',
      degree: 'Bachelors of Computer Science and Business',
      org: 'Rutgers University, New Brunswick, NJ',
      detail:
        "Dean's List: Spring 2024. Undergraduate Student Alliance of Computer Scientists: Peer Mentor (Sep 2023-May 2024)",
    },
  ],
  certs: [
    { tag: 'IBM', title: 'Mastering Generative AI: Language Models with Transformers' },
    { tag: 'KuLeuvenX', title: 'AI in Healthcare: Hype or Help?' },
    { tag: 'edx@MIT', title: 'CS50: Introduction to Artificial Intelligence with Python' },
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
