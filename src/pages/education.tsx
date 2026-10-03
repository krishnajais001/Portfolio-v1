import React from "react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { portfolioData } from "@/data/portfolioData";

export default function Education() {
  return (
    <Layout title="Education">
      <div className="animate-fade-up">
        <SectionHeader
          number="01"
          category="Academics"
          title="Education"
          subtitle=" Academic journey, degrees, and entrance ranks that built my engineering foundation."
        />

        <div className="space-y-5">
          {portfolioData.education.map((item, idx) => {
            const isFeatured = item.badge.includes("AIR");
            return (
              <div
                key={idx}
                className={`bg-[#1c1b1b] border p-6 transition-all duration-200 hover:-translate-y-0.5 ${
                  isFeatured
                    ? "border-[rgba(212,168,67,0.45)] bg-gradient-to-b from-[rgba(212,168,67,0.03)] to-[#0f0f0f]"
                    : "border-[#262626] hover:border-[rgba(212,168,67,0.35)]"
                }`}
              >
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1.5">
                  <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-[#ededed]">
                    {item.degree}
                  </h3>
                  <span className="text-xs text-[#636363] tracking-wider font-mono">
                    {item.period}
                  </span>
                </div>
                <p className="text-[#d4a843] text-sm font-medium mb-3">
                  {item.institution} · {item.university}
                </p>

                <ul className="list-none p-0 m-0 my-3 space-y-2">
                  {item.highlights.map((h, hIdx) => (
                    <li
                      key={hIdx}
                      className="relative pl-5 text-[13.5px] text-[#a8a8a8] leading-relaxed before:content-['▹'] before:absolute before:left-0 before:text-[#d4a843] before:text-xs"
                    >
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-3.5">
                  <span className="inline-block text-[10.5px] uppercase tracking-wider py-1 px-2.5 bg-[#0e0e0e] border border-[rgba(212,168,67,0.3)] text-[#d4a843]">
                    {item.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
