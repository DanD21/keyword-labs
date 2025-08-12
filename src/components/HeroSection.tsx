"use client";

import React from "react";
import Section from "./Section";
import MorphingText from "./MorphingText";

const HeroSection = () => {
  return (
    <Section className="hero-section">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light leading-tight">
          <div className="reveal-text mb-2">We are not just an SEO</div>
          <div className="reveal-text relative inline-block w-full" style={{ height: 'clamp(50px, 8vw, 80px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MorphingText
              texts={["Agency", "Consultant", "Service"]}
              className="text-green-400 !h-auto !text-4xl sm:!text-5xl md:!text-6xl lg:!text-8xl !font-light !leading-tight !max-w-none"
            />
          </div>
          <div className="reveal-text mt-2">Company</div>
        </div>
        <p className="reveal-text text-xl sm:text-xl md:text-2xl mt-6 md:mt-8 text-gray-300 px-2">
          We are an AI-powered SEO revolution.
        </p>
      </div>
    </Section>
  );
};

export default HeroSection;