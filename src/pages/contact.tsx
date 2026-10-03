import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const sender = name.trim() || "Visitor";
    const subj = subject.trim() || "Contact from Portfolio";
    const bodyText = `Name: ${sender}\n\n${message.trim() || "Hi Krishna, I would like to get in touch."}`;
    const mailtoUrl = `mailto:${portfolioData.profile.emails[0]}?subject=${encodeURIComponent(
      subj
    )}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <Layout title="Get in Touch">
      <div className="animate-fade-up">
        <SectionHeader
          number="06"
          category="Connection"
          title="Get in Touch"
          subtitle="Open to internships, full-time SDE/AI roles, freelance opportunities, and technical collaborations"
        />

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-9">
          <div className="bg-[#1c1b1b] border border-[#262626] hover:border-[rgba(212,168,67,0.35)] p-6 transition-colors">
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#d4a843] mb-3 font-mono">
              Primary Email
            </p>
            <a
              href={`mailto:${portfolioData.profile.emails[0]}`}
              className="text-[#ededed] hover:text-[#d4a843] text-sm break-all font-mono transition-colors"
            >
              {portfolioData.profile.emails[0]}
            </a>
            <p className="text-xs text-[#636363] mt-2 mb-0">
              Direct inbox for professional inquiries
            </p>
          </div>



          <div className="bg-[#1c1b1b] border border-[#262626] hover:border-[rgba(212,168,67,0.35)] p-6 transition-colors">
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#d4a843] mb-3 font-mono">
              LinkedIn Profile
            </p>
            <a
              href={portfolioData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ededed] hover:text-[#d4a843] text-sm font-mono transition-colors"
            >
              linkedin.com/in/krishnajaiswal06 ↗
            </a>
            <p className="text-xs text-[#636363] mt-2 mb-0">
              Connect with me on LinkedIn
            </p>
          </div>

          <div className="bg-[#1c1b1b] border border-[#262626] hover:border-[rgba(212,168,67,0.35)] p-6 transition-colors">
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#d4a843] mb-3 font-mono">
              GitHub Profile
            </p>
            <a
              href={portfolioData.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ededed] hover:text-[#d4a843] text-sm font-mono transition-colors"
            >
              github.com/krishnajais001 ↗
            </a>
            <p className="text-xs text-[#636363] mt-2 mb-0">
              Explore codebases, repositories &amp; experiments
            </p>
          </div>

          <div className="bg-[#1c1b1b] border border-[#262626] hover:border-[rgba(212,168,67,0.35)] p-6 transition-colors">
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#d4a843] mb-3 font-mono">
              LeetCode
            </p>
            <a
              href={portfolioData.profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ededed] hover:text-[#d4a843] text-sm font-mono transition-colors"
            >
              leetcode.com/u/krishnajais06 ↗
            </a>
            <p className="text-xs text-[#636363] mt-2 mb-0">
              DSA problem-solving profile
            </p>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="bg-[#1c1b1b] border border-[#262626] p-7 mb-9">
          <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-[#ededed] mb-1.5">
            Send a Quick Message
          </h3>
          <p className="text-xs text-[#636363] mb-5">
            Fill out the brief note below and click send to open your preferred email client.
          </p>

          <form onSubmit={handleSendMail} className="space-y-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#a8a8a8] mb-1.5 font-mono">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Mercer"
                className="w-full bg-[#0e0e0e] border border-[#262626] focus:border-[#d4a843] text-[#ededed] text-sm p-3 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#a8a8a8] mb-1.5 font-mono">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Opportunity at XYZ / Technical Collaboration"
                className="w-full bg-[#0e0e0e] border border-[#262626] focus:border-[#d4a843] text-[#ededed] text-sm p-3 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#a8a8a8] mb-1.5 font-mono">
                Message
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hello Krishna, I came across your portfolio and wanted to discuss..."
                className="w-full bg-[#0e0e0e] border border-[#262626] focus:border-[#d4a843] text-[#ededed] text-sm p-3 outline-none transition-colors resize-y"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[#d4a843] hover:bg-[#e0bb54] text-[#060604] px-6 py-3 font-['Space_Grotesk'] text-[13px] font-semibold tracking-wider transition-all duration-150 cursor-pointer border-none"
            >
              Send Message via Email &nbsp;→
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
