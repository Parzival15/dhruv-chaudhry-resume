// ============================================================
//  All résumé content lives here. Edit this file to tune copy —
//  the components read straight from it.
// ============================================================

export const profile = {
  name: 'Dhruv Chaudhry',
  title: 'Senior AI/ML Engineer',
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
    'Senior AI/ML Engineer @ UnitedHealth Group',
    'Research Assistant @ Pennsylvania State University',
  ],
  // Punchy hero tagline under the name.
  tagline: 'Turning ambiguous problems into products people use.',
  // Professional summary (currently NOT rendered in the hero — you removed it).
  summary:
    'Software Engineer with 2+ years building production software and AI-powered enterprise applications. Experienced leading end-to-end delivery — from gathering ambiguous business requirements from stakeholders to designing, developing, deploying, and maintaining scalable cloud-native systems used across 45+ enterprise teams. Strong background in Python, distributed systems, APIs, AWS, and GenAI, with a proven ability to partner directly with business stakeholders to deliver impactful software.',
};

export const experience = [
  {
    // TODO: confirm start date (placeholder below) and refine copy together.
    role: 'Senior AI/ML Engineer',
    org: 'UnitedHealth Group',
    place: 'Boston, MA',
    date: '10/2026 - Current',
    points: [
      'Forward Deployed Engineer building and deploying <strong>AI-powered solutions</strong> — LLM-based workflows, copilots, and automation tools — directly within healthcare payer and provider <strong>client environments</strong>.',
      'Translate solution designs into production-ready code, implementing <strong>integrations between AI models, APIs, and enterprise healthcare systems</strong> on distributed, cloud-native platforms.',
      'Partner with senior engineers, consulting leads, and client stakeholders across engagements — driving iterative delivery cycles, technical working sessions, and knowledge transfer to client technical teams.',
      'Design prototypes with a clear path to production and contribute <strong>reusable implementation patterns, assets, and playbooks</strong> for transition to production engineering teams.',
    ],
    tags: ['Forward Deployed Engineer', 'GenAI', 'LLMs', 'Copilots', 'Healthcare AI', 'Python', 'AWS', 'Client Delivery'],
  },
  {
    role: 'Associate Software Engineer',
    org: 'UnitedHealth Group',
    place: 'Boston, MA',
    date: '07/2024 - 10/2026',
    points: [
      "<strong>Founded and built</strong> an AI-powered regression-testing platform <strong>used by 45 internal teams</strong> at UnitedHealth Group, automating contact-center application testing and replacing manual validation workflows.",
      'Partnered directly with engineering, product, and business stakeholders to translate ambiguous operational problems into production software, iterating rapidly from proof of concept to deployment.',
      'Led cross-functional engineering efforts as <strong>team lead delegate</strong> — defining technical scope, coordinating implementation, resolving blockers, and presenting architecture and project updates to senior leadership.',
      'Built <strong>scalable REST APIs and microservice-based backend services</strong> integrating OpenAI, AWS Bedrock, internal enterprise platforms, and third-party APIs.',
      'Designed and deployed <strong>secure backend services and APIs</strong> using Python, REST, OAuth2, RBAC, CI/CD, automated testing, and monitoring to support production AI applications.',
    ],
    tags: ['GenAI', 'OpenAI', 'AWS Bedrock', 'REST APIs', 'Microservices', 'OAuth2', 'RBAC', 'CI/CD', 'Team Lead'],
  },
  {
    role: 'Research Assistant',
    org: 'Pennsylvania State University',
    place: 'Remote',
    date: '01/2025 - 03/2026',
    points: [
      'Co-authored <strong><a href="/Clinicians-in-the-loop-Narrative-Review.pdf" target="_blank" rel="noopener" download="Clinicians-in-the-loop: A Narrative Review of Clinician-Facing Integrated AI Within Mental Health Workflows.pdf">Clinicians-in-the-loop: A Narrative Review of Clinician-Facing Integrated AI Within Mental Health Workflows</a></strong> (under review), evaluating <strong>12 human-in-the-loop AI systems</strong> through literature analysis and expert interviews to identify best practices for clinical AI deployment.',
      'Built a <strong>Streamlit RAG application</strong> using GPT-4 and ChromaDB for clinician decision support, presenting iterative prototypes to clinicians and faculty and refining the system based on stakeholder feedback.',
    ],
    tags: ['AI Research', 'RAG', 'GPT-4', 'ChromaDB', 'Streamlit', 'HITL'],
  },
  {
    role: 'Software Engineering Intern',
    org: 'Sukhi',
    place: 'Seattle, WA',
    date: '05/2022 - 12/2022',
    points: [
      "Built <strong>full-stack features</strong> for an early-stage B2B employee mental-health platform (React.js, Python, PHP, SQL) - a digital wellness product serving enterprise clients. Developed custom frontend components and backend logic while collaborating cross-functionally with UX designers and product managers on the Figma-based design.",
    ],
    tags: ['React.js', 'Python', 'PHP', 'SQL', 'Figma'],
  },
];

// Featured personal / open-source builds.
export const projects = [
  {
    name: 'Logaria, AI Video Intelligence & Annotation Platform',
    blurb: 'Personal Project · 02/2026 - Current',
    points: [
      'Architected and shipped a <strong>production-ready video intelligence and annotation platform</strong> (Next.js, TypeScript, Supabase, PostgreSQL) from technical spec through tested deployment, supporting customer-specific enterprise, education, research, and media workflows.',
      'Built <strong>agent workflows</strong> that transform uploaded video into time-coded transcripts, annotations, chapters, summaries, knowledge maps, and action items via a canonical data model — modeling the data, shipping the pipeline, and validating the output.',
      'Built a durable <strong>11-stage PostgreSQL-backed processing pipeline</strong> with atomic job claims, renewable leases, crash recovery, bounded retries, lifecycle auditing, forced <strong>Row-Level Security</strong>, owner-only access, and automated migration/RLS tests in CI.',
    ],
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Agent Workflows', 'Row-Level Security', 'CI/CD', 'Video AI'],
  },
];

export const skills = [
  {
    title: 'Languages & Frameworks',
    items: [
      { name: 'Python', level: 'Fluent' },
      { name: 'SQL', level: 'Fluent' },
      { name: 'TypeScript', level: 'Fluent' },
      { name: 'JavaScript' },
      { name: 'Java' },
      { name: 'C++' },
      { name: 'React' },
      { name: 'React Native (Expo)' },
      { name: 'Next.js' },
      { name: 'REST APIs' },
    ],
  },
  {
    title: 'AI / ML',
    items: [
      { name: 'GenAI', level: 'Fluent' },
      { name: 'LLMs', level: 'Fluent' },
      { name: 'Agentic Workflows', level: 'Fluent' },
      { name: 'Retrieval-Augmented Generation (RAG)', level: 'Fluent' },
      { name: 'Tool / Function Calling' },
      { name: 'Prompt Engineering' },
      { name: 'Prompt Management' },
      { name: 'Vector Databases (ChromaDB)' },
      { name: 'Embeddings' },
      { name: 'LLM Evaluation' },
      { name: 'Human-in-the-Loop Systems' },
      { name: 'Model Monitoring' },
      { name: 'Claude API' },
      { name: 'OpenAI API' },
      { name: 'AWS Bedrock' },
      { name: 'Bedrock Agents' },
      { name: 'Claude Code' },
      { name: 'Cursor' },
      { name: 'OpenAI Codex' },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    items: [
      { name: 'AWS (Lambda, DynamoDB, Bedrock)', level: 'Fluent' },
      { name: 'PostgreSQL', level: 'Fluent' },
      { name: 'Azure' },
      { name: 'Supabase' },
      { name: 'CI/CD' },
      { name: 'Git' },
      { name: 'Logging & Monitoring' },
      { name: 'Data Pipelines' },
      { name: 'ETL / ELT' },
      { name: 'Snowflake' },
      { name: 'Databricks' },
    ],
  },
  {
    title: 'Healthcare & Delivery',
    items: [
      { name: 'Stakeholder Management', level: 'Fluent' },
      { name: 'Solution Design', level: 'Fluent' },
      { name: 'Healthcare Operations' },
      { name: 'Healthcare Data' },
      { name: 'Privacy / Compliance' },
      { name: 'Technical Scoping' },
      { name: 'Testing' },
      { name: 'Documentation' },
      { name: 'Agile / Sprint Planning' },
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
  { emoji: '🥋', title: 'First-degree Black Belt · Tae Kwon Do' },
  { emoji: '🏃', title: 'Running · 5:25 mile' },
  { emoji: '🏓', title: 'Pickleball' },
  { emoji: '♟️', title: 'Chess' },
  { emoji: '🎸', title: 'Guitar' },
  { emoji: '🍓', title: 'Raspberry Pi' },
  { emoji: '🌐', title: 'Hindi · English · Spanish' },
  { emoji: '🤝', title: '160 volunteer hours' },
];
