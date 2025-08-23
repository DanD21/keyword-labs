"use client";

import React from "react";
import Image from "next/image";
import Section from "./Section";
import { AnimatedText } from "./ui/animated-shiny-text";

const AIToolsSection: React.FC = () => {
  return (
    <Section className="ai-tools-section">
      <div className="max-w-6xl mx-auto px-2 relative">
        {/* Central content */}
        <div className="text-center relative z-10">
          <AnimatedText 
            text="Rank Across Top AI Tools" 
            textClassName="text-5xl sm:text-5xl md:text-7xl font-light leading-tight reveal-text whitespace-nowrap"
            gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
            gradientAnimationDuration={6}
            className="mb-8 md:mb-12"
          />
          
          <p className="reveal-text text-2xl sm:text-xl md:text-2xl text-accent max-w-4xl mx-auto mb-8 md:mb-12">
            Optimize your content for ChatGPT, Perplexity, and Gemini to
            <br />
            boost visibility and performance where it matters most.
          </p>
        </div>

        {/* AI Tool Logos positioned around the content */}
        {/* Top right - Gemini */}
        <div className="absolute -top-16 md:-top-20 right-0 md:right-8 reveal-text ai-logo-float">
          <Image
            src="/gemini-logo.png"
            alt="Gemini AI"
            width={80}
            height={80}
            className="w-12 h-12 md:w-20 md:h-20 opacity-80"
          />
        </div>

        {/* Top left - Perplexity */}
        <div className="absolute -top-16 md:-top-20 left-0 md:left-8 reveal-text ai-logo-float-delayed">
          <Image
            src="/perplexity-logo.png"
            alt="Perplexity AI"
            width={80}
            height={80}
            className="w-12 h-12 md:w-20 md:h-20 opacity-80"
          />
        </div>

        {/* Bottom left - Bing */}
        <div className="absolute bottom-0 left-0 md:left-12 reveal-text ai-logo-float-slow">
          <Image
            src="/bing-icon.png"
            alt="Bing AI"
            width={80}
            height={80}
            className="w-12 h-12 md:w-20 md:h-20 opacity-80"
          />
        </div>

        {/* Bottom right - Grok */}
        <div className="absolute bottom-0 right-0 md:right-12 reveal-text ai-logo-float-reverse">
          <Image
            src="/grok-logo.png"
            alt="Grok AI"
            width={80}
            height={80}
            className="w-12 h-12 md:w-20 md:h-20 opacity-80"
          />
        </div>

        {/* ChatGPT Logo centered at bottom */}
        <div className="reveal-text flex justify-center mt-8 ai-logo-float-center">
          <Image
            src="/chatgpt-logo.png"
            alt="ChatGPT"
            width={100}
            height={100}
            className="w-16 h-16 md:w-24 md:h-24 opacity-80"
          />
        </div>
      </div>
    </Section>
  );
};

export default AIToolsSection;
