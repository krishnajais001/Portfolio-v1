import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";

export const TypewriterHero: React.FC = () => {
  const phrases = portfolioData.profile.hero_phrases;
  const [currentText, setCurrentText] = useState(phrases[0]);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(phrases[0].length);
  const [isDeleting, setIsDeleting] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIdx];

    if (isDeleting) {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setCharIdx((prev) => prev - 1);
          setCurrentText(currentPhrase.substring(0, charIdx - 1));
        }, 28);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setPhraseIdx((prev) => (prev + 1) % phrases.length);
        }, 350);
      }
    } else {
      if (charIdx < currentPhrase.length) {
        timeout = setTimeout(() => {
          setCharIdx((prev) => prev + 1);
          setCurrentText(currentPhrase.substring(0, charIdx + 1));
        }, 65);
      } else {
        const pauseTime = phraseIdx === 0 ? 2500 : 2200;
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, phraseIdx, phrases]);

  // Convert newlines to breaks if any
  const formattedText = currentText.split("\n").map((line, idx, arr) => (
    <React.Fragment key={idx}>
      {line}
      {idx < arr.length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <h1 className="font-['Space_Grotesk'] text-[clamp(40px,7.5vw,70px)] font-bold tracking-[-0.035em] leading-[0.98] mb-5 text-[#ededed] min-h-[clamp(88px,15vw,145px)] block">
      <span>{formattedText}</span>
      <span className="inline-block text-[#d4a843] font-light ml-1 animate-cursor">
        |
      </span>
    </h1>
  );
};
