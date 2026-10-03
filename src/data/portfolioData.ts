export interface EducationItem {
  institution: string;
  university: string;
  degree: string;
  period: string;
  badge: string;
  highlights: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  featured?: boolean;
  highlights: string[];
  tags: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  tags: string[];
  link: string;
  status: string;
}

export interface SkillCategory {
  category: string;
  primary?: boolean;
  badge: string;
  items: string[];
}

export interface AchievementItem {
  icon: string;
  title: string;
  meta: string;
  text: string;
}

export interface ProfileData {
  name: string;
  title: string;
  headline: string;
  location: string;
  address: string;
  emails: string[];
  linkedin: string;
  github: string;
  leetcode: string;
  resume_url: string;
  hero_phrases: string[];
}

export interface PortfolioData {
  profile: ProfileData;
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  achievements: AchievementItem[];
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Krishna Jaiswal",
    title: "Full Stack & AI Engineer",
    headline: "CSE GGSIPU '28 | Building Scalable AI-Powered Apps | Open to Work",
    location: "Gurugram, Haryana, India",
    address: "House No. 124, B-Block, Saini Khera, Sector 30, Near Krishna Bhawan, South City–1, Gurugram, Haryana – 122001",
    emails: ["jaiskrishna06@gmail.com"],
    linkedin: "https://www.linkedin.com/in/krishnajaiswal06/",
    github: "https://github.com/krishnajais001/",
    leetcode: "https://leetcode.com/u/krishnajais06/",
    resume_url: "https://drive.google.com/file/d/1VjDkTAx6UWxQnYsgsyTsP3gCa0ANKHsV/view",
    hero_phrases: [
      "Full Stack & AI Engineer .",
      "Building full-stack products & AI agents .",
      "Open to SDE & AI Roles .",
    ],
  },

  education: [
    {
      institution: "University School of Information, Communication & Technology (USICT)",
      university: "Guru Gobind Singh Indraprastha University (GGSIPU), Delhi",
      degree: "Bachelor of Technology (B.Tech) — Computer Science & Engineering",
      period: "August 2025 – August 2028",
      badge: "AIR 13 in GGSIPU CET",
      highlights: [
        "Admitted with All India Rank 13 in the university-wide competitive entrance examination.",
        "Core curriculum focusing on Advanced Data Structures, Algorithms, Distributed Systems, Operating Systems, and Artificial Intelligence.",
        "Engaged in autonomous AI agent research and production-grade software development.",
      ],
    },
    {
      institution: "Aditya Institute of Technology",
      university: "Delhi",
      degree: "Diploma in Computer Engineering",
      period: "May 2021 – May 2024",
      badge: "Completed with Distinction",
      highlights: [
        "Developed solid practical foundations in computer architecture, C/C++ programming, relational databases, and web fundamentals.",
        "Led team work focusing on full-stack web applications and algorithm optimization.",
      ],
    },
    {
      institution: "Gandhi Inter School",
      university: "Secondary Education",
      degree: "Secondary School Education (Class X)",
      period: "April 2019 – March 2021",
      badge: "First Division",
      highlights: [
        "Excelled in Mathematics and Science, building strong analytical and problem-solving fundamentals.",
      ],
    },
  ],

  experience: [
    {
      company: "Quild",
      role: "AI Engineer Intern",
      period: "April 2026 – Present (7 months)",
      location: "Dwarka, Delhi",
      featured: true,
      highlights: [
        "Designed and developed scalable web applications, RESTful APIs, and reusable internal libraries following software engineering best practices.",
        "Built and optimized backend services, workflows, and distributed systems with a focus on scalability, maintainability, and clean architecture.",
        "Ensured application reliability, security, and performance by handling edge cases, reducing latency, optimizing resource utilization, and deploying production-ready applications.",
        "Integrated LangChain, LangGraph, and vector databases into autonomous agentic pipelines.",
      ],
      tags: [
        "LangGraph",
        "LangChain",
        "Generative AI",
        "REST APIs",
        "Node.js",
        "Distributed Systems",
      ],
    },
    {
      company: "Code Help",
      role: "Full Stack Development Trainee",
      period: "April 2025 – Present (1 year 7 months)",
      location: "Gurugram, Haryana",
      featured: false,
      highlights: [
        "Strengthened core problem-solving abilities by practicing advanced Data Structures and Algorithms in C++, focusing on high runtime and memory efficiency.",
        "Engineered full-stack applications using the MERN stack with modern component patterns and RESTful API endpoints.",
        "Implemented database modeling, indexing, and schema design in MongoDB.",
      ],
      tags: ["C++", "DSA", "React.js", "Node.js", "MongoDB", "Express"],
    },
    {
      company: "Mentoraide",
      role: "Frontend Developer Intern",
      period: "January 2024 – March 2024 (3 months)",
      location: "Gurugram, Haryana, India",
      featured: false,
      highlights: [
        "Developed responsive and modern user interfaces utilizing React, HTML5, and CSS3.",
        "Collaborated with cross-functional teams to integrate UI components with backend APIs seamlessly.",
        "Optimized frontend load times and responsiveness across mobile and desktop devices.",
      ],
      tags: ["React.js", "JavaScript", "HTML5", "CSS3", "UI/UX"],
    },
    {
      company: "Solvelancer",
      role: "Quality Assurance Specialist & Problem Solver",
      period: "January 2021 – December 2021 (1 year)",
      location: "India (Remote)",
      featured: false,
      highlights: [
        "QA Specialist (May 2021 – Dec 2021): Conducted systematic verification of technical content, algorithms, and mathematical solution workflows for precision.",
        "Problem Solver (Jan 2021 – Apr 2021): Authored step-by-step rigorous solutions for complex mathematical and computing problems.",
      ],
      tags: [
        "Quality Assurance",
        "Analytical Verification",
        "Mathematics Problem Solving",
      ],
    },
  ],

  projects: [
    {
      name: "Motion — Notion-style Note-Taking App",
      description:
        "Full-stack note-taking platform with rich text editing, nested hierarchical pages, real-time persistence, dedicated Study Mode session tracker, and an embedded Excalidraw whiteboard for freehand diagrams.",
      tags: [
        "React.js",
        "Node.js",
        "Express",
        "Supabase",
        "Excalidraw API",
      ],
      link: "https://motion-frontend.onrender.com/",
      status: "Live",
    },
    {
      name: "Intelligent Multi-Agent Email Automation",
      description:
        "AI-powered autonomous Gmail agent built with n8n that classifies incoming email intent and autonomously drafts/dispatches context-aware replies via a multi-agent routing architecture.",
      tags: [
        "n8n",
        "LLMs",
        "Multi-Agent Systems",
        "Prompt Engineering",
        "LangGraph",
      ],
      link: "https://github.com/krishnajais001/",
      status: "Live",
    },
    {
      name: "College Event Management System",
      description:
        "Full-stack event discovery and ticketing platform for college students with real-time seat availability tracking, comprehensive organizer/admin dashboard, and automated email confirmations.",
      tags: [
        "React.js",
        "Express",
        "Supabase",
        "Email Services",
        "REST APIs",
      ],
      link: "https://github.com/krishnajais001/",
      status: "Live",
    },
    {
      name: "AI Telegram Assistant & Doctor-Patient System",
      description:
        "Dual-system deployment: a conversational Telegram bot acting as a personal assistant with Google Calendar sync, paired with a clinic management web portal for records and appointment automation.",
      tags: ["n8n", "Telegram API", "React.js", "Supabase", "Automation"],
      link: "https://github.com/krishnajais001/",
      status: "Live",
    },
  ],

  skills: [
    {
      category: "Languages",
      primary: false,
      badge: "Core",
      items: ["C++", "Python", "Java", "JavaScript", "TypeScript"],
    },
    {
      category: "Frontend",
      primary: false,
      badge: "UI / Web",
      items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Backend",
      primary: false,
      badge: "Server & API",
      items: ["Node.js", "Express.js", "REST APIs", "JWT", "Microservices"],
    },
    {
      category: "Databases",
      primary: false,
      badge: "Storage",
      items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase"],
    },
    {
      category: "AI / GenAI",
      primary: true,
      badge: "Specialized",
      items: [
        "LangChain",
        "OpenAI API",
        "Claude API",
        "RAG",
        "Vector Databases",
        "AI Agents",
        "n8n",
      ],
    },
    {
      category: "Tools & Cloud",
      primary: false,
      badge: "DevOps & Cloud",
      items: [
        "Git",
        "Postman",
        "VS Code",
        "AWS",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
      ],
    },
    {
      category: "CS Fundamentals",
      primary: false,
      badge: "Theory & Systems",
      items: [
        "DSA",
        "OOPs",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
        "System Design",
      ],
    },
  ],

  achievements: [
    {
      icon: "🥇",
      title: "AIR 13 — GGSIPU Common Lateral Entry Entrance 2025",
      meta: "Entrance Examination Rank",
      text: "Secured All India Rank 13 in the university-wide competitive engineering entrance examination for B.Tech admission at USICT, GGSIPU Delhi.",
    },
    {
      icon: "📜",
      title: "NCC 'A' Certificate (Army Wing)",
      meta: "National Cadet Corps",
      text: "Trained under the National Cadet Corps Army Wing — developed rigorous discipline, parade drills, field leadership, and active community service.",
    },
    {
      icon: "🚀",
      title: "GirlScript Summer of Code (GSSoC) 2026",
      meta: "Contributor & Mentee",
      text: "Selected as Contributor / Mentee for GSSoC 2026, contributing to open-source developer tooling and production software.",
    },
    {
      icon: "🤖",
      title: "Claude 101 Certification",
      meta: "Anthropic Certification",
      text: "Certified in foundational LLM principles, prompt design, and safe AI integration with Anthropic Claude models.",
    },
    {
      icon: "☕",
      title: "Learn JAVA Programming - Beginner to Master",
      meta: "Technical Certification",
      text: "Comprehensive mastery of Java, OOP paradigms, JVM architecture, multithreading, and collections framework.",
    },
    {
      icon: "🎨",
      title: "CSS With AI & Web Development",
      meta: "Modern UI Certification",
      text: "Explored AI-assisted CSS design patterns, responsive layouts, micro-animations, and CSS architecture.",
    },
    {
      icon: "📊",
      title: "Introduction to Data Analysis using Microsoft Excel",
      meta: "Analytical Certification",
      text: "Certified in structured data analysis, pivot formulas, and quantitative insights.",
    },
    {
      icon: "💡",
      title: "Active LeetCode Problem Solver",
      meta: "Competitive DSA Practice",
      text: "Regularly solving Data Structures and Algorithms challenges across trees, graphs, dynamic programming, and greedy algorithms.",
    },
  ],
};
