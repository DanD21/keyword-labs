"use client";

import React from "react";
import Image from "next/image";
import Section from "./Section";

const GrowthSection: React.FC = () => {
  return (
    <Section className="growth-section">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="reveal-text text-5xl sm:text-5xl md:text-7xl font-light leading-tight mb-8 md:mb-12">
          AI Strategy & Growth
          <br />
          <span className="text-green-400">Partnership</span>
        </h2>
        
        <div className="reveal-text mb-8 md:mb-12">
          <Image
            src="/growth.png"
            alt="AI Strategy & Growth Partnership Analytics"
            width={1500}
            height={500}
            className="rounded-lg mx-auto"
          />
        </div>
        
        <p className="reveal-text text-2xl sm:text-xl md:text-2xl text-gray-300">
          A dedicated partnership for long-term growth. We provide continuous
          GEO monitoring, proactive automation, and the strategic counsel
          needed to keep you ahead.
        </p>
      </div>
    </Section>
  );
};

export default GrowthSection;
