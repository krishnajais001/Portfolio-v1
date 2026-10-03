import React from "react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  return (
    <Layout title="Experience">
      <div className="animate-fade-up">
        <SectionHeader
          number="02"
          category="Career"
          title="Experience"
          subtitle="professional history, production engineering, AI pipelines, and internship contributions"
        />

        <div className="space-y-5">
          {portfolioData.experience.map((exp, idx) => {
            return (
              <div
                key={idx}
                className={`bg-[#1c1b1b] border p-6 transition-all duration-200 hover:-translate-y-0.5 ${
                  exp.featured
                    ? "border-[rgba(212,168,67,0.45)] bg-gradient-to-b from-[rgba(212,168,67,0.03)] to-[#0f0f0f]"
                    : "border-[#262626] hover:border-[rgba(212,168,67,0.35)]"
                }`}
              >
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1.5">
                  <div>
                    <span className="font-['Space_Grotesk'] text-lg font-semibold text-[#ededed]">
                      {exp.role}
                    </span>
                    <span className="text-[#d4a843] font-semibold ml-2">
                      @ {exp.company}
                    </span>
                  </div>
                  <span className="text-xs text-[#636363] tracking-wider font-mono">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs text-[#636363] mb-3">📍 {exp.location}</p>

                <ul className="list-none p-0 m-0 my-3 space-y-2">
                  {exp.highlights.map((h, hIdx) => (
                    <li
                      key={hIdx}
                      className="relative pl-5 text-[13.5px] text-[#a8a8a8] leading-relaxed before:content-['▹'] before:absolute before:left-0 before:text-[#d4a843] before:text-xs"
                    >
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-3.5">
                  {exp.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10.5px] uppercase tracking-wider py-1 px-2.5 bg-[#0e0e0e] border border-[#262626] text-[#636363]"
                    >
                      {t}
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
