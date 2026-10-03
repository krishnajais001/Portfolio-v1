import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { portfolioData } from "@/data/portfolioData";

export const Navbar: React.FC = () => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Education", href: "/education" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Achievements", href: "/achievements" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 sm:px-9 border-b border-[#262626] bg-[#080808]/90 backdrop-blur-xl">
      {/* Left Logo */}
      <Link
        href="/"
        className="flex items-center gap-2.5 text-inherit no-underline select-none group"
      >
        <div className="w-7 h-7 border border-[#d4a843] flex items-center justify-center font-['Space_Grotesk'] text-[13px] font-bold text-[#d4a843] bg-[rgba(212,168,67,0.08)] transition-all duration-200 group-hover:-rotate-6 group-hover:bg-[rgba(212,168,67,0.18)]">
          KJ
        </div>
        <span className="font-['Space_Grotesk'] font-bold text-[17px] tracking-tight text-[#ededed] transition-colors duration-200 group-hover:text-[#d4a843]">
          {portfolioData.profile.name}
        </span>
      </Link>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden bg-transparent border border-[#262626] text-[#ededed] px-3 py-1.5 cursor-pointer text-base"
        aria-label="Toggle Navigation"
      >
        {mobileOpen ? "✕" : "☰"}
      </button>

      {/* Right Side Navigations */}
      <div
        className={`flex items-center gap-7 transition-all duration-200 max-md:fixed max-md:top-16 max-md:left-0 max-md:right-0 max-md:bg-[#0c0c0c] max-md:border-b max-md:border-[#262626] max-md:p-6 max-md:flex-col max-md:items-stretch max-md:gap-4 ${
          mobileOpen ? "max-md:flex" : "max-md:hidden"
        }`}
      >
        <ul className="flex items-center gap-7 list-none m-0 p-0 max-md:flex-col max-md:items-start max-md:gap-3.5">
          {navLinks.map((link) => {
            const isActive = router.pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-[13px] tracking-wider transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "text-[#d4a843] font-semibold border-b border-[#d4a843]"
                      : "text-[#636363] hover:text-[#ededed]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action Button: Get in Touch */}
        <div className="flex items-center">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="group inline-flex items-center justify-center gap-1.5 border border-[#d4a843] text-[#d4a843] bg-[rgba(212,168,67,0.06)] hover:bg-[rgba(212,168,67,0.14)] hover:text-[#e0bb54] rounded-full px-4 py-1.5 text-xs font-['Space_Grotesk'] font-semibold tracking-wider transition-all duration-200 no-underline whitespace-nowrap shadow-[0_0_16px_rgba(212,168,67,0.15)] hover:shadow-[0_0_20px_rgba(212,168,67,0.3)] max-md:w-full max-md:justify-center"
          >
            <span>Get in Touch</span>
            <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
