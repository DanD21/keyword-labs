"use client";

import React from "react";
import Image from "next/image";
import Section from "./Section";
import { AnimatedText } from "./ui/animated-shiny-text";

const GrowthSection: React.FC = () => {
  return (
    <Section className="growth-section">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8 md:mb-12">
          <AnimatedText 
            text="AI Strategy & Growth" 
            textClassName="text-5xl sm:text-5xl md:text-7xl font-light leading-tight reveal-text whitespace-nowrap"
            gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
            gradientAnimationDuration={6}
            className="block"
          />
          <AnimatedText 
            text="Partnership" 
            textClassName="text-5xl sm:text-5xl md:text-7xl font-light leading-tight reveal-text whitespace-nowrap"
            gradientColors="linear-gradient(90deg, #00f0ff 45%, #ffffff 50%, #00f0ff 55%)"
            gradientAnimationDuration={6}
            className="block"
          />
        </div>
        
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
