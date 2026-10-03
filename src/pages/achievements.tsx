import React from "react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { portfolioData } from "@/data/portfolioData";

export default function Achievements() {
  return (
    <Layout title="Achievements">
      <div className="animate-fade-up">
        <SectionHeader
          number="05"
          category="Honors"
          title="Achievements"
          subtitle="competitive entrance milestones, national certificates, open-source programs, and technical metrics"
        />

        <div className="space-y-4 mb-9">
          {portfolioData.achievements.map((a, idx) => (
            <div
              key={idx}
              className="flex gap-4 bg-[#1c1b1b] border border-[#262626] hover:border-[rgba(212,168,67,0.3)] p-5 items-start transition-colors duration-200"
            >
              <span className="text-2xl leading-none pt-0.5 flex-shrink-0 select-none">
                {a.icon}
              </span>
              <div>
                <h3 className="font-['Space_Grotesk'] text-[17px] font-semibold text-[#ededed] mb-1">
                  {a.title}
                </h3>
                <p className="text-[11.5px] text-[#d4a843] mb-1.5 uppercase tracking-wider font-mono">
                  {a.meta}
                </p>
                <p className="text-[13.5px] text-[#a8a8a8] leading-relaxed m-0">
                  {a.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
