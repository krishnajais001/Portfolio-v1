# Krishna Jaiswal — Personal Portfolio 🚀

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232a?style=for-the-badge&logo=react&logoColor=61dafb)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Status](https://img.shields.io/badge/Status-Open_to_Work-brightgreen?style=for-the-badge)](https://www.linkedin.com/in/krishnajaiswal06/)

A sleek, modern developer portfolio website designed for **Krishna Jaiswal** — Full Stack & AI Engineer. Built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS v4**, featuring an amber-accented dark theme, interactive animations, and a centralized data architecture.

---

## 👨‍💻 About Krishna Jaiswal

- 🎓 **Education**: B.Tech in Computer Science & Engineering (2025 – 2028) at **USICT, Guru Gobind Singh Indraprastha University (GGSIPU), Delhi**
- 🥇 **Rank**: **AIR 13** in GGSIPU CET (Lateral Entry)
- 💼 **Current Role**: **AI Engineer Intern** at **Quild** (Dwarka, Delhi)
- 🌐 **Open Source**: Contributor / Mentee in **GirlScript Summer of Code (GSSoC 2026)**
- 📍 **Location**: Gurugram, Haryana, India
- 🎯 **Focus Areas**: Scalable Web Applications, Distributed Systems, Multi-Agent AI Architectures, LangGraph, and Core Data Structures & Algorithms (C++)

---

## ⚡ Portfolio Features

- **Cyber-Minimalist Dark Aesthetic**: Designed with a deep `#080808` canvas, crisp structural borders (`#262626`), and glowing gold/amber accents (`#d4a843`).
- **Dynamic Typewriter Hero**: Smooth headline typewriter animation introducing key specialties and availability.
- **Interactive Tetris Background Animation**: Custom canvas/grid background animation providing responsive visual flair.
- **Modular Multi-Page Layout**:
  - `Overview / Home (/)`: Dynamic hero, status pill row, quick bio, and CTA buttons.
  - `About (/about)`: Detailed background, philosophy quote, timeline overview, and profile showcase.
  - `Education (/education)`: Academic degrees from USICT (B.Tech CSE), Aditya Institute of Technology (Diploma in Computer Engineering), and honors.
  - `Experience (/experience)`: Work history at Quild, Code Help, Mentoraide, and Solvelancer with role highlights and tech tags.
  - `Projects (/projects)`: Interactive project cards showcasing live URLs, repositories, and technical stack chips.
  - `Skills (/skills)`: Categorized skills matrix spanning AI/GenAI, Languages, Frontend, Backend, Databases, Cloud & DevOps, and CS fundamentals.
  - `Achievements (/achievements)`: Competitive exam ranks (AIR 13), NCC 'A' Certificate, GSSoC '26, Anthropic Claude certification, and competitive programming milestones.
  - `Contact (/contact)`: Interactive contact form, direct email links, resume access, and social profiles.
- **Centralized Data Schema**: All portfolio data is strongly typed and maintained in a single source of truth at [`src/data/portfolioData.ts`](./src/data/portfolioData.ts), enabling zero-effort updates.
- **Fully Responsive & Accessible**: Optimized typography scale (Space Grotesk & Inter) with smooth mobile drawer navigation.

---

## 🛠️ Tech Stack & Architecture

### **Core Framework & Styling**
- **Framework**: [Next.js 15 (Pages Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/postcss`
- **Typography**: Google Fonts ([Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) & [Inter](https://fonts.google.com/specimen/Inter))

### **Engineering & AI Skills Showcased**
- **AI / GenAI**: LangChain, LangGraph, OpenAI API, Anthropic Claude API, RAG, Vector Databases, n8n Multi-Agent Systems
- **Languages**: C++, Python, Java, JavaScript, TypeScript
- **Frontend**: React.js, Next.js, HTML5, CSS3, Tailwind CSS, Bootstrap
- **Backend**: Node.js, Express.js, RESTful APIs, JWT, Microservices Architecture
- **Databases**: PostgreSQL, MongoDB, MySQL, Supabase
- **DevOps & Tools**: Git, GitHub Actions, Docker, Kubernetes, AWS, Postman, VS Code
- **CS Theory**: DSA, OOPs, DBMS, Operating Systems, Computer Networks, System Design

---

## 🌟 Featured Projects

| Project | Description | Tech Stack | Status |
| :--- | :--- | :--- | :---: |
| **[Motion](https://motion-frontend.onrender.com/)** | Full-stack Notion-style note-taking workspace with nested hierarchical pages, real-time persistence, dedicated Study Mode session tracker, and embedded Excalidraw whiteboard. | React.js, Node.js, Express, Supabase, Excalidraw | [Live Demo](https://motion-frontend.onrender.com/) |
| **[Multi-Agent Email Automation](https://github.com/krishnajais001/)** | Autonomous Gmail triage agent utilizing n8n and LangGraph to classify incoming email intent and draft context-aware responses via multi-agent routing. | n8n, LangGraph, LLMs, Multi-Agent Systems | Live |
| **[College Event Management](https://github.com/krishnajais001/)** | Full-stack event discovery and ticketing platform for universities featuring real-time seat availability, admin organizer dashboards, and automated email confirmations. | React.js, Express, Supabase, REST APIs | Live |
| **[AI Telegram & Clinic Portal](https://github.com/krishnajais001/)** | Dual-system integrating an AI conversational Telegram bot with Google Calendar sync, paired with a web portal for clinic appointment automation and medical records. | n8n, Telegram API, React.js, Supabase | Live |

---

## 📁 Project Structure

```text
Portfolio/
├── .agents/                 # AI assistant agent configurations & skills
├── public/                  # Static assets
│   ├── photo.jpeg           # Profile portrait
│   └── Profile.pdf          # Resume document
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Footer.tsx       # Bottom footer bar with social links
│   │   ├── Layout.tsx       # Main page layout container with background
│   │   ├── Navbar.tsx       # Fixed top navbar & mobile slideout menu
│   │   ├── SectionHeader.tsx# Section numbering & headline component
│   │   ├── TetrisBackground.tsx # Interactive background canvas
│   │   └── TypewriterHero.tsx   # Dynamic typewriter heading
│   ├── data/
│   │   └── portfolioData.ts # Centralized typed portfolio data & profile info
│   ├── pages/               # Next.js pages router
│   │   ├── _app.tsx         # Global app wrapper & styles import
│   │   ├── _document.tsx    # HTML document & Google Fonts injection
│   │   ├── index.tsx        # Home landing page
│   │   ├── about.tsx        # Bio & career overview
│   │   ├── education.tsx    # Academic journey & honors
│   │   ├── experience.tsx   # Professional experience & roles
│   │   ├── projects.tsx     # Featured projects catalog
│   │   ├── skills.tsx       # Technical skills & proficiencies
│   │   ├── achievements.tsx # Honors, ranks & certifications
│   │   └── contact.tsx      # Contact form & communication channels
│   └── styles/
│       └── globals.css      # Tailwind v4 directives, color vars & animations
├── next.config.mjs          # Next.js build configuration
├── package.json             # NPM package manifests & scripts
├── postcss.config.mjs       # PostCSS Tailwind plugin configuration
├── tsconfig.json            # TypeScript compiler configuration
└── README.md                # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run the portfolio locally on your machine:

### 1. Prerequisites
- **Node.js**: v18.18.0 or newer (v20+ recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### 2. Clone the Repository
```bash
git clone https://github.com/krishnajais001/Portfolio-v1.git
cd Portfolio-v1
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 5. Production Build
```bash
# Build the production bundle
npm run build

# Start the production server
npm run start
```

---

## ⚙️ Customization

To personalize the portfolio with your own details, you only need to modify [`src/data/portfolioData.ts`](./src/data/portfolioData.ts):

- **Profile Information**: Update `name`, `headline`, `location`, `emails`, and social links.
- **Experience & Education**: Add or modify employment history, institution details, and badges.
- **Projects**: Edit project titles, descriptions, live demo URLs, and GitHub links.
- **Skills & Badges**: Add or reorder skill categories and tags.
- **Profile Photo & Resume**: Replace `public/photo.jpeg` and `public/Profile.pdf` with your own assets.

---

## 📬 Connect with Krishna

- 💼 **LinkedIn**: [krishnajaiswal06](https://www.linkedin.com/in/krishnajaiswal06/)
- 🐙 **GitHub**: [@krishnajais001](https://github.com/krishnajais001/)
- 💻 **LeetCode**: [@krishnajais06](https://leetcode.com/u/krishnajais06/)
- 📧 **Email**: [jaiskrishna06@gmail.com](mailto:jaiskrishna06@gmail.com)
- 📄 **Resume**: [View on Google Drive](https://drive.google.com/file/d/1VjDkTAx6UWxQnYsgsyTsP3gCa0ANKHsV/view)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
