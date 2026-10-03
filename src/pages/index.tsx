import React from "react";
import Link from "next/link";
import { Layout } from "@/components/Layout";
import { TypewriterHero } from "@/components/TypewriterHero";
import { portfolioData } from "@/data/portfolioData";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col justify-center min-h-[calc(100vh-64px)] py-12 sm:py-16 animate-fade-up">
        {/* Dynamic Typewriter Heading */}
        <TypewriterHero />

        {/* Status badges pill row */}
        <div className="flex flex-wrap gap-2 mb-7">
          <span className="inline-flex items-center gap-1.5 text-[11px] tracking-wider py-1.5 px-3 bg-[#1c1b1b] border border-[#262626] text-[#ededed]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843] shadow-[0_0_10px_rgba(212,168,67,0.8)] animate-pulse-dot" />
            AI Engineer Intern @ Quild
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] tracking-wider py-1.5 px-3 bg-[#1c1b1b] border border-[#262626] text-[#a8a8a8]">
            🎓 CSE GGSIPU (USICT &apos;28)
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] tracking-wider py-1.5 px-3 bg-[#1c1b1b] border border-[#262626] text-[#a8a8a8]">
            🥇 AIR 13 GGSIPU CET
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] tracking-wider py-1.5 px-3 bg-[#1c1b1b] border border-[#262626] text-[#a8a8a8]">
            📍 Gurugram, India
          </span>
        </div>

        {/* Home Bio */}
        <p className="text-sm sm:text-base text-[#a8a8a8] max-w-[620px] leading-[1.85] mb-8">
          I build <strong className="text-[#ededed] font-medium">production-grade full-stack products &amp; AI agents</strong> end to end that are fast, reliable, and built to scale. Currently an <strong className="text-[#ededed] font-medium">AI Engineer Intern at Quild</strong>, turning complex problems into clean, well-architected systems that ship. <strong className="text-[#ededed] font-medium">AIR 13 in GGSIPU CET</strong>, with a systems-design mindset behind everything I build.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-3.5 flex-wrap">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-[#d4a843] hover:bg-[#e0bb54] text-[#060604] px-6 py-3 font-['Space_Grotesk'] text-[13px] font-semibold tracking-wider transition-all duration-150 hover:-translate-y-0.5 no-underline shadow-sm"
          >
            Explore Projects &nbsp;→
          </Link>
          <a
            href={portfolioData.profile.resume_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#a8a8a8] hover:text-[#ededed] border border-[#262626] hover:border-[#3b3b3b] px-5 py-3 text-[13px] tracking-wider transition-colors duration-200 no-underline"
          >
            Resume ⤓
          </a>
        </div>
      </div>
    </Layout>
  );
}
