import React from "react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { portfolioData } from "@/data/portfolioData";

export default function Projects() {
  return (
    <Layout title="Projects">
      <div className="animate-fade-up">
        <SectionHeader
          number="03"
          category="Work"
          title="Projects"
          subtitle="scalable applications, autonomous agent workflows, productivity tools, and production experiments"
        />

        <div className="space-y-5">
          {portfolioData.projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-[#1c1b1b] border border-[#262626] hover:border-[rgba(212,168,67,0.35)] p-6 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex justify-between items-baseline flex-wrap gap-2 mb-2">
                <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-[#ededed]">
                  {proj.name}
                </h3>
                <span className="text-[10.5px] uppercase tracking-wider py-1 px-2.5 bg-[#0e0e0e] border border-[rgba(74,222,128,0.3)] text-[#4ade80]">
                  ● {proj.status}
                </span>
              </div>
              <p className="text-sm text-[#a8a8a8] leading-relaxed mb-4">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {proj.tags.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10.5px] uppercase tracking-wider py-1 px-2.5 bg-[#0e0e0e] border border-[#262626] text-[#636363]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#a8a8a8] hover:text-[#ededed] border border-[#262626] hover:border-[#3b3b3b] px-3.5 py-1.5 tracking-wider transition-colors no-underline font-mono"
                >
                  View Repository ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
