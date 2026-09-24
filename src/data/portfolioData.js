export const initialProfile = {
  name: "Aman Raja",
  headline: "Full-Stack Software Engineer · MCA Graduate",
  bio: "Full-stack developer with hands-on experience building React.js and Spring Boot applications, gained through a 6-month internship at Extramarks Education. Built and shipped 4 independent projects covering REST APIs, relational databases, AI integration, and API gateway rate limiting.",
  email: "amanraja424@gmail.com",
  phone: "+91-9366690599",
  linkedin: "https://linkedin.com/in/amanraja0",
  github: "https://github.com/amanraja0",
  leetcode: "https://leetcode.com",
  location: "Greater Noida, UP",
  resumeUrl: "/Aman_Raja_Resume.pdf",
};

export const experienceData = [
  {
    id: "extramarks-intern",
    role: "Frontend Developer Intern",
    company: "Extramarks Education",
    period: "Sep 2025 – Feb 2026",
    location: "Greater Noida, UP",
    summary: "Built and maintained UI modules and wired REST API integrations for the Smart Scholar edtech portal on a high-traffic production platform.",
    highlights: [
      "Built and maintained UI modules for the Smart Scholar portal across 4 device breakpoints, fixing 10+ cross-browser rendering issues and keeping the interface consistent on mobile and desktop.",
      "Wired up 5+ REST API integrations using Node.js and resolved state management bugs that were causing unnecessary component re-renders in key user flows.",
      "Improved page load performance by introducing route-level code splitting and lazy loading for non-critical components."
    ],
    technologies: [
      "React.js",
      "Node.js",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs"
    ]
  }
];

export const projectsData = [
  {
    id: "ai-api-rate-limiter",
    title: "AI API Rate Limiter & Token Gateway",
    techStack: "Node.js, Express, Redis, OpenAI API",
    period: "2024",
    liveUrl: "https://github.com/amanraja0",
    githubUrl: "https://github.com/amanraja0",
    summary: "High-throughput API gateway middleware designed to prevent LLM quota exhaustion, throttle high-frequency clients, and monitor per-user token consumption in real-time.",
    highlights: [
      "Engineered a sliding window and token bucket rate limiting middleware in Node.js & Redis to enforce both Requests-Per-Minute (RPM) and Tokens-Per-Minute (TPM) limits across multi-tier API consumers.",
      "Built pre-flight prompt token estimation to calculate input size before dispatching to upstream OpenAI models, immediately rejecting oversized payloads before incurring provider costs.",
      "Implemented RFC-compliant 429 Too Many Requests responses with Retry-After and X-RateLimit headers alongside exponential backoff logic for graceful degradation under high traffic."
    ],
    tags: ["Node.js", "Express.js", "Redis", "OpenAI API", "Rate Limiting", "JavaScript"]
  },
  {
    id: "hireview-mock-interview",
    title: "HireView – AI Mock Interview Tool",
    techStack: "React.js, Node.js, OpenAI API",
    period: "2024",
    liveUrl: "https://github.com/amanraja0",
    githubUrl: "https://github.com/amanraja0",
    summary: "AI-powered interview tool that conducts dynamic, domain-specific mock interviews and delivers per-question feedback.",
    highlights: [
      "Integrated the OpenAI API to generate role-specific interview questions across 5 engineering domains and return structured, per-answer feedback instead of a generic pass or fail.",
      "Designed the session flow in React so users move through a full mock interview, get per-question scores, and see a cumulative feedback summary at the end.",
      "Set up a Node.js backend layer to handle OpenAI API calls securely and manage session data, keeping the API key off the client and structuring responses for the frontend to consume."
    ],
    tags: ["React.js", "Node.js", "OpenAI API", "JavaScript", "Tailwind CSS"]
  },
  {
    id: "expenseiq-tracker",
    title: "ExpenseIQ – Smart Expense Tracker",
    techStack: "Java, Spring Boot, PostgreSQL, React.js, JWT",
    period: "2023 – 2024",
    liveUrl: "https://github.com/amanraja0",
    githubUrl: "https://github.com/amanraja0",
    summary: "Full-stack finance management platform with automated category tagging, real-time analytics, and secure JWT authentication.",
    highlights: [
      "Built a Spring Boot REST API secured with JWT authentication, including the Spring Security configuration with role-based guards and token refresh across 10+ endpoints.",
      "Modelled a normalised PostgreSQL schema with category-based indexing and implemented rule-based auto-categorisation logic so transactions get tagged automatically instead of by hand.",
      "Created a React.js dashboard using Recharts to show spending trends and category breakdowns, with a mobile-first layout in Tailwind CSS."
    ],
    tags: ["Java", "Spring Boot", "PostgreSQL", "React.js", "JWT", "Tailwind CSS"]
  },
  {
    id: "stockforge-inventory",
    title: "StockForge – Inventory Management Platform",
    techStack: "React.js, Node.js, Express, MySQL, Prisma ORM",
    period: "2024",
    liveUrl: "https://github.com/amanraja0",
    githubUrl: "https://github.com/amanraja0",
    summary: "Multi-tier inventory fulfillment system with atomic transaction ordering and real-time stock alerts.",
    highlights: [
      "Built a fulfillment backend using Node.js, Express, and Prisma ORM, applying database-level atomic transactions so concurrent orders can never push inventory into a negative state.",
      "Developed a React.js admin dashboard with real-time low-stock alerts, order pipelines, and JWT-based role access across three user tiers – admin, staff, and viewer.",
      "Designed a normalised MySQL schema across 5 tables and exposed 12 REST endpoints with input validation and consistent, structured error responses."
    ],
    tags: ["React.js", "Node.js", "Express.js", "MySQL", "Prisma ORM", "JWT"]
  }
];

export const technicalSkillsData = [
  {
    category: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "C++"]
  },
  {
    category: "Frontend",
    skills: ["React.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "Node.js", "Express.js", "REST API Design", "JWT", "OpenAI API"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["Docker", "AWS", "Git", "CI/CD"]
  }
];

export const algorithmicExpertiseData = {
  title: "Data Structures & Algorithms",
  text: "Solved 120+ DSA problems covering arrays, strings, trees, hashmaps, dynamic programming, and greedy techniques in Java.",
  topics: ["Arrays", "Strings", "Trees", "Hashmaps", "Dynamic Programming", "Greedy Techniques"],
  language: "Java",
  count: "120+"
};

export const certificationsData = [
  {
    id: "accenture-swe",
    title: "Accenture Software Engineering Job Simulation",
    issuer: "Forage",
    date: "Jun 2025",
    tags: ["System Architecture", "Secure Coding", "Testing", "Agile Delivery"],
    description: "Completed practical tasks in system architecture, secure coding, testing, and agile delivery."
  },
  {
    id: "deloitte-analytics",
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Forage",
    date: "Jun 2025",
    tags: ["Data Analysis", "Forensic Technology", "Data Interpretation"],
    description: "Applied data analysis and forensic technology concepts through simulation tasks."
  },
  {
    id: "kaggle-ml",
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    date: "Jun 2025",
    tags: ["Machine Learning Fundamentals", "Model Evaluation"],
    description: "Applied ML fundamentals, data modeling, and performance evaluation."
  }
];

export const educationData = [
  {
    institution: "Galgotias College of Engineering & Technology",
    degree: "Master of Computer Application (MCA)",
    period: "Sep 2023 – Jun 2025",
    location: "Greater Noida, Uttar Pradesh"
  },
  {
    institution: "LNCT University",
    degree: "Bachelor of Computer Application (BCA)",
    period: "Sep 2019 – Aug 2022",
    location: "Bhopal, Madhya Pradesh"
  }
];
