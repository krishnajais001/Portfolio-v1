import React from "react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  return (
    <Layout title="Skills">
      <div className="animate-fade-up">
        <SectionHeader
          number="04"
          category="Core Competencies"
          title="Tech Stack & Skills"
          subtitle="specialized knowledge in AI/GenAI, system architecture, programming languages, databases, and DevOps"
        />

        <div className="space-y-5 mb-8">
          {portfolioData.skills.map((s, idx) => {
            return (
              <div
                key={idx}
                className={`bg-[#1c1b1b] border p-6 transition-all duration-200 ${
                  s.primary
                    ? "border-[rgba(212,168,67,0.4)] bg-gradient-to-b from-[rgba(212,168,67,0.04)] to-[#0f0f0f]"
                    : "border-[#262626] hover:border-[rgba(212,168,67,0.3)]"
                }`}
              >
                <div className="flex justify-between items-center mb-3.5 text-xs font-semibold uppercase tracking-wider text-[#a8a8a8]">
                  <span>{s.category}</span>
                  <span className="text-[10px] tracking-wider text-[#d4a843] font-mono">
                    {s.badge}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {s.items.map((item, iIdx) => (
                    <span
                      key={iIdx}
                      className={`text-[12.5px] py-1.5 px-3 bg-[#0e0e0e] border text-[#ededed] tracking-wide ${
                        s.primary
                          ? "border-[rgba(212,168,67,0.35)] text-[#e6c875]"
                          : "border-[#262626]"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
