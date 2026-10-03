import React from "react";
import { portfolioData } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-[#262626] py-9">
      <div className="max-w-[840px] mx-auto px-6 sm:px-8 flex items-center justify-between flex-wrap gap-4 text-[13.5px] font-bold text-white">
        <span className="font-bold text-white tracking-wide">© {portfolioData.profile.name} Engineer v1 . 2026</span>
        <div className="flex items-center gap-5 flex-wrap">
          <a
            href={portfolioData.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold hover:text-[#d4a843] transition-colors"
          >
            GitHub
          </a>
          <a
            href={portfolioData.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold hover:text-[#d4a843] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={portfolioData.profile.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold hover:text-[#d4a843] transition-colors"
          >
            LeetCode
          </a>
          <a
            href={portfolioData.profile.resume_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold hover:text-[#d4a843] transition-colors"
          >
            Resume
          </a>
          <a
            href={`mailto:${portfolioData.profile.emails[0]}`}
            className="text-white font-bold hover:text-[#d4a843] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
