"use client";

import React from "react";
import Image from "next/image";
import Section from "./Section";

const AIToolsSection: React.FC = () => {
  return (
    <Section className="ai-tools-section">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Central content */}
        <div className="text-center relative z-10">
          <h2 className="reveal-text text-5xl sm:text-5xl md:text-7xl font-light leading-tight mb-8 md:mb-12">
            Rank Across Top AI Tools
          </h2>
          
          <p className="reveal-text text-2xl sm:text-xl md:text-2xl text-green-400 max-w-4xl mx-auto mb-8 md:mb-12">
            Optimize your content for ChatGPT, Perplexity, and Gemini to
            <br />
            boost visibility and performance where it matters most.
          </p>
        </div>

        {/* AI Tool Logos positioned around the content */}
        {/* Top right - Gemini */}
        <div className="absolute top-0 right-0 md:right-8 reveal-text">
          <Image
            src="/gemini-logo.png"
            alt="Gemini AI"
            width={80}
            height={80}
            className="w-12 h-12 md:w-20 md:h-20 opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Top left - Perplexity */}
        <div className="absolute top-8 left-0 md:left-8 reveal-text">
          <Image
            src="/perplexity-logo.png"
            alt="Perplexity AI"
            width={80}
            height={80}
            className="w-12 h-12 md:w-20 md:h-20 opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Bottom left - Bing */}
        <div className="absolute bottom-0 left-0 md:left-12 reveal-text">
          <Image
            src="/bing-icon.png"
            alt="Bing AI"
            width={80}
            height={80}
            className="w-12 h-12 md:w-20 md:h-20 opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Bottom right - Grok */}
        <div className="absolute bottom-0 right-0 md:right-12 reveal-text">
          <Image
            src="/grok-logo.png"
            alt="Grok AI"
            width={80}
            height={80}
            className="w-12 h-12 md:w-20 md:h-20 opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* ChatGPT Logo centered at bottom */}
        <div className="reveal-text flex justify-center mt-8">
          <Image
            src="/chatgpt-logo.png"
            alt="ChatGPT"
            width={100}
            height={100}
            className="w-16 h-16 md:w-24 md:h-24 opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </Section>
  );
};

export default AIToolsSection;
