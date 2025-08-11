"use client";

import React from "react";
import Section from "./Section";
import MorphingText from "./MorphingText";

const HeroSection = () => {
  return (
    <Section className="hero-section">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-6xl md:text-8xl font-light leading-tight">
          <div className="reveal-text mb-2">We are not an AI</div>
          <div className="reveal-text relative inline-block w-full" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MorphingText
              texts={["Education", "Consulting", "Development"]}
              className="text-green-400 !h-auto !text-6xl md:!text-8xl !font-light !leading-tight !max-w-none"
            />
          </div>
          <div className="reveal-text mt-2">Company</div>
        </div>
        <p className="reveal-text text-xl md:text-2xl mt-8 text-gray-300">
          We are all of the above.
        </p>
      </div>
    </Section>
  );
};

export default HeroSection;