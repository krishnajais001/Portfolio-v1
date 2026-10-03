import React from "react";

interface SectionHeaderProps {
  number: string;
  category: string;
  title: string;
  subtitle: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  category,
  title,
  subtitle,
}) => {
  return (
    <div className="pt-16 pb-9 border-b border-[#262626] mb-8">
      <p className="text-[11px] tracking-[0.15em] uppercase text-[#d4a843] mb-3 font-semibold font-mono">
        {number} — {category}
      </p>
      <h2 className="font-['Space_Grotesk'] text-[clamp(36px,6.5vw,56px)] font-bold tracking-[-0.03em] leading-[0.98] mb-3 text-[#ededed]">
        {title}
      </h2>
      <p className="text-[#636363] text-sm max-w-[620px] leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};
