import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  return (
    <Layout title="About">
      <div className="animate-fade-up">
        <SectionHeader
          number="00"
          category="Overview"
          title="About Me"
          subtitle="software developer, AI engineer, system architecture enthusiast, and problem solver based in Gurugram, India"
        />

        {/* Main Bio Card with Portrait */}
        <div className="bg-[#1c1b1b] border border-[rgba(212,168,67,0.4)] p-6 sm:p-7 mb-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(212,168,67,0.55)] bg-gradient-to-b from-[rgba(212,168,67,0.03)] to-[#0f0f0f]">
          <div className="flex flex-col sm:flex-row gap-7 items-start max-sm:items-center max-sm:text-center">
            {/* Photo Column */}
            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <div className="relative w-44 h-44 rounded-full overflow-hidden border border-[rgba(212,168,67,0.45)] bg-[#131313] shadow-[0_10px_28px_rgba(0,0,0,0.55),0_0_24px_rgba(212,168,67,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d4a843]">
                <Image
                  src="/photo.jpeg"
                  alt={portfolioData.profile.name}
                  fill
                  priority
                  className="object-cover object-top rounded-full"
                  sizes="176px"
                />
              </div>
              <div className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#d4a843] bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.25)] px-2.5 py-1 rounded-full tracking-wider whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843] animate-pulse-dot" />
                <span>AI &amp; Full Stack</span>
              </div>
            </div>

            {/* Bio Content Column */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1.5">
                <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-[#ededed]">
                  {portfolioData.profile.name}
                </h3>
                <span className="text-[10.5px] tracking-wider uppercase py-1 px-2 bg-[#0e0e0e] border border-[rgba(212,168,67,0.3)] text-[#d4a843]">
                  {portfolioData.profile.title}
                </span>
              </div>
              <p className="text-[#d4a843] text-sm font-medium mb-3">
                B.Tech in Computer Science &amp; Engineering · USICT, GGSIPU &apos;28
              </p>

              <div className="border-l-2 border-[#d4a843] pl-4 py-2 my-4 bg-[rgba(212,168,67,0.04)] font-['Space_Grotesk'] text-sm text-[#ededed] leading-relaxed italic max-sm:text-left">
                “What sets me apart is my ability to break down complex problems and turn them into practical, real-world solutions — from intuitive user interfaces to robust backend systems.”
              </div>

              <div className="text-sm text-[#a8a8a8] leading-relaxed space-y-3 mb-4 max-sm:text-left">
                <p>
                  I&apos;m a <strong className="text-[#ededed] font-medium">Full Stack &amp; AI Engineer</strong> and a B.Tech CSE student at GGSIPU (USICT &apos;28). I&apos;m currently an <strong className="text-[#ededed] font-medium">AI Engineer Intern at Quild</strong>, where I build RESTful APIs, backend workflows, and reusable internal libraries for production applications. Before that, I trained in the <strong className="text-[#ededed] font-medium">MERN stack</strong> and <strong className="text-[#ededed] font-medium">Data Structures &amp; Algorithms in C++</strong> at Code Help, which gave me both the engineering fundamentals and the product-building habit.
                </p>
                <p>
                  I like breaking down messy problems and turning them into <strong className="text-[#ededed] font-medium">clean, well-architected systems</strong>, from the interface to the backend to the AI layer. I also contribute to open source through <strong className="text-[#ededed] font-medium">GirlScript Summer of Code 2026</strong>. I&apos;m looking for <strong className="text-[#ededed] font-medium">internships, freelance work, and collaborations</strong> on AI-driven products, so if you&apos;re building something exciting, let&apos;s talk.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10.5px] uppercase tracking-wider py-1 px-2.5 bg-[#0e0e0e] border border-[rgba(74,222,128,0.3)] text-[#4ade80]">
                  ● Open to Work
                </span>
                <span className="text-[10.5px] uppercase tracking-wider py-1 px-2.5 bg-[#0e0e0e] border border-[#262626] text-[#636363]">
                  AI Engineer Intern @ Quild
                </span>
                <span className="text-[10.5px] uppercase tracking-wider py-1 px-2.5 bg-[#0e0e0e] border border-[#262626] text-[#636363]">
                  AIR 13 GGSIPU CET
                </span>
                <span className="text-[10.5px] uppercase tracking-wider py-1 px-2.5 bg-[#0e0e0e] border border-[#262626] text-[#636363]">
                  📍 Gurugram, Haryana, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section: What I Bring */}
        <div className="mt-9 mb-3.5">
          <p className="text-[11px] uppercase tracking-[0.16em] text-[#d4a843] font-semibold mb-1.5 font-mono">
            Core Competencies
          </p>
          <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-[#ededed]">
            What I Bring
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 mb-7">
          <div className="bg-[#1c1b1b] border border-[#262626] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(212,168,67,0.35)]">
            <div className="font-['Space_Grotesk'] text-[15px] font-semibold text-[#ededed] mb-2 flex items-center gap-2">
              <span>🧠</span> Strong Problem-Solving Mindset
            </div>
            <p className="text-[13px] text-[#a8a8a8] leading-relaxed m-0">
              Practicing Data Structures &amp; Algorithms in C++, active problem solver on LeetCode, with a sharp focus on writing optimized, efficient, and well-structured code.
            </p>
          </div>

          <div className="bg-[#1c1b1b] border border-[#262626] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(212,168,67,0.35)]">
            <div className="font-['Space_Grotesk'] text-[15px] font-semibold text-[#ededed] mb-2 flex items-center gap-2">
              <span>🏛️</span> Solid System Design Fundamentals
            </div>
            <p className="text-[13px] text-[#a8a8a8] leading-relaxed m-0">
              Emphasis on clean architecture, modular services, RESTful API design, database schemas (MongoDB, Supabase, relational DBs), and backend scalability.
            </p>
          </div>

          <div className="bg-[#1c1b1b] border border-[#262626] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(212,168,67,0.35)]">
            <div className="font-['Space_Grotesk'] text-[15px] font-semibold text-[#ededed] mb-2 flex items-center gap-2">
              <span>⚡</span> Modern Web &amp; AI Technologies
            </div>
            <p className="text-[13px] text-[#a8a8a8] leading-relaxed m-0">
              Hands-on development with React.js, Next.js, Node.js, Express, LangGraph, LangChain, vector databases, and multi-agent autonomous automation pipelines.
            </p>
          </div>

          <div className="bg-[#1c1b1b] border border-[#262626] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(212,168,67,0.35)]">
            <div className="font-['Space_Grotesk'] text-[15px] font-semibold text-[#ededed] mb-2 flex items-center gap-2">
              <span>🚀</span> Continuous Learning &amp; Adaptability
            </div>
            <p className="text-[13px] text-[#a8a8a8] leading-relaxed m-0">
              Thriving in fast-paced environments, continuously expanding into cutting-edge AI engineering and distributed systems, and shipping production applications.
            </p>
          </div>
        </div>

        {/* Section: Seeking Opportunities */}
        <div className="mt-9 mb-3.5">
          <p className="text-[11px] uppercase tracking-[0.16em] text-[#d4a843] font-semibold mb-1.5 font-mono">
            Trajectory &amp; Focus
          </p>
          <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-[#ededed]">
            Actively Seeking Opportunities Where I Can
          </h3>
        </div>

        <div className="bg-[#1c1b1b] border border-[#262626] p-6 mb-6">
          <ul className="list-none p-0 m-0 space-y-2.5">
            <li className="relative pl-5 text-[13.5px] text-[#a8a8a8] leading-relaxed before:content-['▹'] before:absolute before:left-0 before:text-[#d4a843] before:text-xs">
              <strong className="text-[#ededed]">Contribute to impactful, real-world products</strong> — solving complex challenges through scalable software and clean code.
            </li>
            <li className="relative pl-5 text-[13.5px] text-[#a8a8a8] leading-relaxed before:content-['▹'] before:absolute before:left-0 before:text-[#d4a843] before:text-xs">
              <strong className="text-[#ededed]">Work on full-stack and AI-driven systems</strong> — bridging responsive user interfaces with resilient backend services and intelligent LLM workflows.
            </li>
            <li className="relative pl-5 text-[13.5px] text-[#a8a8a8] leading-relaxed before:content-['▹'] before:absolute before:left-0 before:text-[#d4a843] before:text-xs">
              <strong className="text-[#ededed]">Grow in fast-paced, high-impact environments</strong> — collaborating closely with engineering teams and shipping code to production.
            </li>
          </ul>
        </div>

        {/* Availability & CTA */}
        <div className="bg-[#1c1b1b] border border-[rgba(212,168,67,0.4)] p-6 mt-6 bg-gradient-to-b from-[rgba(212,168,67,0.03)] to-[#0f0f0f]">
          <div className="flex justify-between items-baseline flex-wrap gap-2 mb-2">
            <span className="font-['Space_Grotesk'] text-base font-semibold text-[#ededed]">
              Open to internships, freelance work, and collaborations.
            </span>
            <span className="font-mono text-[#d4a843] text-sm">&lt; Krishna /&gt;</span>
          </div>
          <p className="text-sm text-[#a8a8a8] mt-2 mb-4">
            Let’s connect if you’re building something exciting — I’d love to contribute.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[#d4a843] hover:bg-[#e0bb54] text-[#060604] px-5 py-2.5 font-['Space_Grotesk'] text-[13px] font-semibold tracking-wider transition-all no-underline"
            >
              Explore Projects &nbsp;→
            </Link>
            <a
              href={portfolioData.profile.resume_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#a8a8a8] hover:text-[#ededed] border border-[#262626] hover:border-[#3b3b3b] px-4 py-2.5 text-[13px] tracking-wider transition-colors no-underline"
            >
              Resume ⤓
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
