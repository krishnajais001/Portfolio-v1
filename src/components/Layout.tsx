import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { TetrisBackground } from "./TetrisBackground";
import { portfolioData } from "@/data/portfolioData";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description = "Krishna Jaiswal — Full Stack & AI Engineer. CSE GGSIPU (USICT '28), AIR 13 CET. Building production-grade AI agents and web apps.",
}) => {
  const router = useRouter();
  const pageTitle = title
    ? `${title} | ${portfolioData.profile.name}`
    : `${portfolioData.profile.name} — Full Stack & AI Engineer`;

  const isHome = router.pathname === "/";

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#ededed] relative flex flex-col font-['Inter']">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Tetris Canvas Particle Animation */}
      <TetrisBackground active={isHome} />

      {/* Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1 pt-16 relative z-10">
        <div className="max-w-[840px] mx-auto px-6 sm:px-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
