/* ============================================================================
   ZEEKOLACHI — Central content / single source of truth
   ----------------------------------------------------------------------------
   Populated from Zeeshan Ahmed Kolachi's CV.
   Items marked  // TODO  still need your input (real project stories,
   testimonials, and social follower counts). Everything else is real.
   ============================================================================ */

export type SocialKey =
  | "linkedin"
  | "github"
  | "whatsapp"
  | "facebook"
  | "x"
  | "instagram"
  | "youtube"
  | "email";

export interface SocialLink {
  key: SocialKey;
  label: string;
  href: string;
  handle: string;
  metric?: string;
  active: boolean;
}

export interface Role {
  title: string;
  org: string;
  period: string;
  summary: string;
  highlights: string[];
  current?: boolean;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  role: string;
  tagline: string;
  challenge: string;
  process: string;
  result: string;
  outcome: string;
  tags: string[];
  href?: string;
  placeholder?: boolean;
}

export interface Achievement {
  year: string;
  title: string;
  detail: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  placeholder?: boolean;
}

export interface Metric {
  label: string;
  value: string;
  hint?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface EducationItem {
  title: string;
  org: string;
  period: string;
  detail?: string;
  result?: string;
}

export interface CertItem {
  course: string;
  provider: string;
  score: string;
  year: string;
}

/* -------------------------------------------------------------------------- */
/*  IDENTITY                                                                   */
/* -------------------------------------------------------------------------- */

export const identity = {
  fullName: "Zeeshan Ahmed Kolachi",
  brand: "ZEEKOLACHI",
  roles: [
    "Agentic AI Architect (In Training)",
    "Data Science & AI Practitioner",
    "Primary School Teacher",
    "AI-Native Builder",
  ],
  headline:
    "I turn six years of operational discipline into AI-native systems that deliver measurable impact.",
  bio: "Aspiring Agentic AI Architect and Data Science practitioner with 6+ years of cross-sector experience across finance, administration, customer relations and education. I'm advancing through NED University's Postgraduate Diploma in Data Science & AI and Panaversity's Certified Agentic AI Architect program — building hands-on command of Python, Machine Learning, Deep Learning, and Generative/Agentic AI. I pair disciplined record-keeping with an automation-first mindset and a toolkit of 40+ AI tools.",
  location: "District Ghotki, Sindh, Pakistan",
  availability: "Open to data & AI roles · collaboration",
  cvPath: "/cv/Zeeshan_Ahmed_Kolachi_CV.pdf",
  // TODO (optional): drop a headshot at /public/profile.jpg — falls back to a monogram
  photo: "/profile.jpg",
} as const;

/* -------------------------------------------------------------------------- */
/*  SOCIAL — "active orbit"                                                    */
/*  Follower/metric strings are tasteful placeholders for v1 — update freely.  */
/* -------------------------------------------------------------------------- */

export const socials: SocialLink[] = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zeeshankolachi",
    handle: "in/zeeshankolachi",
    metric: "Professional network", // TODO: real connection count
    active: true,
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/ZEEKOLACHI",
    handle: "@ZEEKOLACHI",
    metric: "AI projects & code", // TODO: real repo/follower count
    active: true,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/923003118917",
    handle: "+92 300 3118917",
    metric: "Usually replies fast",
    active: true,
  },
  {
    key: "email",
    label: "Email",
    href: "mailto:zeekolachi@outlook.com",
    handle: "zeekolachi@outlook.com",
    metric: "Direct line",
    active: true,
  },
  {
    key: "facebook",
    label: "Facebook",
    href: "#", // TODO: your Facebook profile URL
    handle: "Facebook",
    metric: "Community",
    active: false,
  },
  {
    key: "x",
    label: "X",
    href: "#", // TODO: your X profile URL
    handle: "@zeekolachi",
    metric: "Signal & ideas",
    active: false,
  },
  {
    key: "youtube",
    label: "YouTube",
    href: "#", // TODO: your YouTube channel URL
    handle: "@zeekolachi",
    metric: "Talks & demos",
    active: false,
  },
];

/* -------------------------------------------------------------------------- */
/*  LIVE METRICS STRIP (simulated for v1 — wire to real analytics later)       */
/* -------------------------------------------------------------------------- */

export const metricsSeed: Metric[] = [
  { label: "Total Visits", value: "12,480", hint: "all-time" },
  { label: "Returning", value: "34%", hint: "loyal readers" },
  { label: "Top Country", value: "🇵🇰 PK", hint: "then UAE · US" },
  { label: "Profile Clicks", value: "2,910", hint: "to socials" },
];

/* -------------------------------------------------------------------------- */
/*  CORE SKILLS                                                                */
/* -------------------------------------------------------------------------- */

export const skillGroups: SkillGroup[] = [
  {
    label: "AI & Data Science",
    items: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Generative & Agentic AI",
      "Data Analysis",
      "Business Intelligence",
    ],
  },
  {
    label: "AI Development",
    items: [
      "Claude Code",
      "OpenAI Agent SDK",
      "OpenClaw",
      "MCP Servers",
      "Prompt & Context Engineering",
      "Spec-Driven Development",
      "40+ AI productivity tools",
    ],
  },
  {
    label: "Office & Operations",
    items: [
      "MS Office (Word, Excel)",
      "Accounts & Budgeting",
      "Estimates & Reconciliation",
      "Record Management",
      "Sindhi/Urdu Composing",
    ],
  },
  {
    label: "Strengths",
    items: [
      "Analytical Thinking",
      "Problem Solving",
      "Attention to Detail",
      "Adaptability",
      "Clear Communication",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  PROFESSIONAL EXPERIENCE                                                    */
/* -------------------------------------------------------------------------- */

export const roles: Role[] = [
  {
    title: "Primary School Teacher (Permanent)",
    org: "Sindh Education & Literacy Department, Govt. of Sindh",
    period: "Jun 2025 – Present",
    current: true,
    summary:
      "Delivering foundational education and integrating basic digital literacy into everyday classroom learning.",
    highlights: [
      "Deliver foundational education to primary-level students",
      "Maintain academic and attendance records",
      "Track student progress and integrate digital literacy",
    ],
  },
  {
    title: "Computer Operator (BPS-11)",
    org: "Municipal Committee, Ghotki",
    period: "Oct 2016 – May 2018",
    summary:
      "Served the Finance & Engineering branches — financial record-keeping, estimates, and budget support.",
    highlights: [
      "Prepared salary bills, estimates, and income & expenditure statements",
      "Maintained cash book, cheque book, budget control & establishment records",
      "Supported annual budget preparation and Sindhi/Urdu composition",
    ],
  },
  {
    title: "Accountant",
    org: "University of Kids Elementary School, Ghotki",
    period: "Feb 2016 – Sep 2016",
    summary:
      "Managed fees, admissions, and ledgers while supporting a 50+ staff school operation.",
    highlights: [
      "Managed fee collection, new admissions and ledger maintenance",
      "Resolved parent and student queries",
      "Supported 50+ staff",
    ],
  },
  {
    title: "Customer Relationship Officer",
    org: "Telenor Franchise, Ghotki",
    period: "Oct 2015 – Jan 2016",
    summary:
      "Front-line customer service for telecom operations and retention.",
    highlights: [
      "Handled SIM modification/replacement and prepaid–postpaid conversions",
      "Advised and retained customers through responsive service",
    ],
  },
  {
    title: "Computer Operator",
    org: "District Bar Association, Ghotki",
    period: "Jun 2011 – Sep 2012",
    summary:
      "Legal documentation support and bilingual composing for the bar association.",
    highlights: [
      "Drafted bail and High Court applications",
      "Sindhi/Urdu composing and FIR translations",
      "Related legal documentation support",
    ],
  },
  {
    title: "Computer Operator",
    org: "Office of the Executive Engineer, Tube Well Division, Ghotki",
    period: "Feb 2009 – Nov 2010",
    summary:
      "Official correspondence and accounts-branch record-keeping for a government engineering division.",
    highlights: [
      "Composed official correspondence; maintained office & accounts records",
      "Prepared estimates, reconciliation reports and annual budgets",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  EDUCATION (technical + academic)                                          */
/* -------------------------------------------------------------------------- */

export const education: EducationItem[] = [
  {
    title: "Certified Agentic AI Architect Program (Level 1)",
    org: "Panaversity.org",
    period: "May 2025 – Present (Ongoing)",
    detail:
      "Agentic AI foundations: AI-driven development, Claude Code & OpenClaw fundamentals, context & prompt engineering, spec-driven development.",
  },
  {
    title: "Postgraduate Diploma in Data Science & Artificial Intelligence",
    org: "NED University, Karachi — Batch 8 (Weekend)",
    period: "2024",
    detail:
      "Modules: Generative AI (Agentic AI) 90% A · Machine Learning 88% A · Deep Learning 84% A · Python for Data Science 75% B+ · Fundamentals of AI 75% B.",
  },
  {
    title: "B.Sc (Math, Physics & Chemistry)",
    org: "Shah Abdul Latif University, Khairpur",
    period: "2009",
    result: "54%",
  },
  {
    title: "HSC (Pre-Engineering)",
    org: "BISE Sukkur",
    period: "2007",
    result: "60%",
  },
  {
    title: "SSC (Science)",
    org: "BISE Sukkur",
    period: "2005",
    result: "71%",
  },
];

export const certifications: CertItem[] = [
  { course: "Machine Learning, AI & Data Science", provider: "eHunar.org", score: "84%", year: "2024" },
  { course: "Data Analysis & Business Intelligence", provider: "DigiSkills.pk", score: "85%", year: "2023" },
  { course: "Digital Literacy", provider: "DigiSkills.pk", score: "79%", year: "2020" },
  { course: "Diploma in MS Office 2010", provider: "Alison.com", score: "86%", year: "2016" },
  { course: "Diploma in Information Technology", provider: "SBTE, Karachi", score: "60%", year: "2010" },
];

export const languages: string[] = [
  "Sindhi (Native)",
  "Urdu (Fluent)",
  "English (Professional Working)",
  "Seraiki (Fluent)",
  "Punjabi (Conversational)",
];

/* -------------------------------------------------------------------------- */
/*  PROJECTS — interactive case studies                                       */
/*  TODO: replace these with your real Panaversity / NED / personal projects. */
/*  Each one expands into a full story on the site.                           */
/* -------------------------------------------------------------------------- */

export const projects: Project[] = [
  {
    id: "p1",
    name: "Agentic AI Assistant",
    category: "Generative & Agentic AI",
    role: "Builder",
    tagline: "An autonomous assistant built with the OpenAI Agent SDK & MCP.",
    challenge:
      "TODO — describe the problem this agent solves (e.g. automating a repetitive workflow).",
    process:
      "TODO — your approach: tools, MCP servers, prompt/context engineering, spec-driven build.",
    result: "TODO — what it does and who uses it.",
    outcome: "Built in Panaversity program",
    tags: ["Agentic AI", "OpenAI Agent SDK", "MCP", "Claude Code"],
    placeholder: true,
  },
  {
    id: "p2",
    name: "Data Analysis & BI Dashboard",
    category: "Data Science",
    role: "Data Practitioner",
    tagline: "Turning raw data into a clear decision-making dashboard.",
    challenge: "TODO — the dataset and the question you set out to answer.",
    process: "TODO — Python, analysis workflow, visualization choices.",
    result: "TODO — the insight delivered and the decision it enabled.",
    outcome: "NED PGD project",
    tags: ["Python", "Data Analysis", "Business Intelligence"],
    placeholder: true,
  },
  {
    id: "p3",
    name: "Machine Learning Model",
    category: "Machine Learning",
    role: "ML Practitioner",
    tagline: "A predictive model from data prep to evaluation.",
    challenge: "TODO — the prediction problem and constraints.",
    process: "TODO — features, model choice, training & evaluation.",
    result: "TODO — accuracy/impact and how it's used.",
    outcome: "ML module — 88% (Grade A)",
    tags: ["Machine Learning", "Python", "Deep Learning"],
    placeholder: true,
  },
];

/* -------------------------------------------------------------------------- */
/*  ACHIEVEMENTS — intelligence dossier timeline (real, from CV)              */
/* -------------------------------------------------------------------------- */

export const achievements: Achievement[] = [
  {
    year: "2025",
    title: "Permanent Primary School Teacher — Govt. of Sindh",
    detail:
      "Appointed to a permanent teaching post with the Sindh Education & Literacy Department.",
  },
  {
    year: "2025",
    title: "Certified Agentic AI Architect Program (Level 1)",
    detail: "Enrolled and advancing through Panaversity's flagship Agentic AI program.",
  },
  {
    year: "2024",
    title: "Generative AI (Agentic AI) — 90%, Grade A",
    detail: "Top module result in NED University's Postgraduate Diploma in Data Science & AI.",
  },
  {
    year: "2024",
    title: "Machine Learning — 88% (A) · Deep Learning — 84% (A)",
    detail: "Strong distinctions across core AI modules at NED University.",
  },
  {
    year: "2023",
    title: "Data Analysis & Business Intelligence — 85%",
    detail: "Certified through DigiSkills.pk.",
  },
];

/* -------------------------------------------------------------------------- */
/*  TESTIMONIALS — curated signal board                                       */
/*  TODO: add real quotes from colleagues, supervisors, or mentors.          */
/* -------------------------------------------------------------------------- */

export const testimonials: Testimonial[] = [
  {
    quote:
      "TODO — a real quote from a colleague, supervisor, or mentor describing your impact and reliability.",
    name: "TODO — Name",
    title: "TODO — Title, Organization",
    placeholder: true,
  },
  {
    quote:
      "TODO — another endorsement. Keep it specific and outcome-focused.",
    name: "TODO — Name",
    title: "TODO — Title, Organization",
    placeholder: true,
  },
  {
    quote: "TODO — a third short, punchy recommendation.",
    name: "TODO — Name",
    title: "TODO — Title, Organization",
    placeholder: true,
  },
];

/* -------------------------------------------------------------------------- */
/*  CONTACT                                                                    */
/* -------------------------------------------------------------------------- */

export const contact = {
  email: "zeekolachi@outlook.com",
  phone: "+92 300 3118917",
  whatsapp: "923003118917", // wa.me format (no +, no spaces)
  ctaTitle: "Let's build something intelligent.",
  ctaSubtitle:
    "Whether it's an AI project, a data problem, or a role where analytical rigor matters — I'm one message away.",
} as const;

/* -------------------------------------------------------------------------- */
/*  SEO                                                                        */
/* -------------------------------------------------------------------------- */

export const seo = {
  title: "ZEEKOLACHI — Zeeshan Ahmed Kolachi · Agentic AI Architect & Data Science Practitioner",
  description:
    "The personal operating system of Zeeshan Ahmed Kolachi (ZEEKOLACHI): Agentic AI architect in training, data science practitioner, and primary school teacher. Projects, achievements, and a live mission dashboard.",
  // TODO: set this to your final domain once purchased
  url: "https://zeekolachi.com",
  keywords: [
    "ZEEKOLACHI",
    "Zeeshan Ahmed Kolachi",
    "Agentic AI Architect",
    "Data Science",
    "AI engineer portfolio",
    "Machine Learning",
    "Ghotki",
    "Sindh",
    "Pakistan",
  ],
} as const;
