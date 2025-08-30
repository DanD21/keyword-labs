"use client";

import React from "react";
import Section from "./Section";
import { AnimatedText } from "./ui/animated-shiny-text";

const StatsSection = () => {
  return (
    <Section className="stats-section">
      <div className="max-w-6xl mx-auto px-0 md:px-4 -mx-6 md:mx-auto">
        {/* Titles */}
        <div className="mb-6 md:mb-8 lg:mb-16 text-left md:text-center">
          <div className="-space-y-3">
            <AnimatedText 
              text="We don't sell promises." 
              textClassName="text-3xl md:text-4xl lg:text-6xl font-light leading-tight reveal-text"
              gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
              gradientAnimationDuration={6}
              className="block text-left md:text-center"
            />
            <AnimatedText 
              text="We deliver Rankings." 
              textClassName="text-3xl md:text-4xl lg:text-6xl font-light leading-tight reveal-text"
              gradientColors="linear-gradient(90deg, #00f0ff 45%, #ffffff 50%, #00f0ff 55%)"
              gradientAnimationDuration={6}
              className="block text-left md:text-center"
            />
          </div>
        </div>

        {/* Stats - Mobile: vertical stack, Desktop: grid */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-12 lg:gap-20 max-w-5xl mx-auto">
          <div className="border-b border-gray-700 pb-3 md:border-b-0 md:pb-0 text-left md:text-center">
            <div className="flex items-baseline text-left md:justify-center">
              <div className="text-5xl md:text-6xl lg:text-8xl font-light counter" data-target="350">
                0
              </div>
              <div className="text-3xl md:text-2xl ml-1">%</div>
            </div>
            <p className="reveal-text text-gray-300 text-sm md:text-base lg:text-lg mt-1 md:mt-4 leading-relaxed text-left md:text-center max-w-xs md:mx-auto">
              Increase in On-Site Engagement Post-GEO
            </p>
            <a href="#" className="text-accent text-sm md:text-base mt-1 md:mt-3 inline-block hover:underline transition-colors text-left md:text-center md:block">
              See our case studies →
            </a>
          </div>
          
          <div className="border-b border-gray-700 pb-3 md:border-b-0 md:pb-0 text-left md:text-center">
            <div className="flex items-baseline text-left md:justify-center">
              <div className="text-5xl md:text-6xl lg:text-8xl font-light counter" data-target="70">
                0
              </div>
              <div className="text-3xl md:text-2xl ml-1">%</div>
            </div>
            <p className="reveal-text text-gray-300 text-sm md:text-base lg:text-lg mt-1 md:mt-4 leading-relaxed text-left md:text-center max-w-xs md:mx-auto">
              Higher Conversion Rates from AI-driven Traffic
            </p>
          </div>
          
          <div className="text-left md:text-center">
            <div className="flex items-baseline text-left md:justify-center">
              <div className="text-5xl md:text-6xl lg:text-8xl font-light counter" data-target="90">
                0
              </div>
              <div className="text-3xl md:text-2xl ml-1">Days</div>
            </div>
            <p className="reveal-text text-gray-300 text-sm md:text-base lg:text-lg mt-1 md:mt-4 leading-relaxed text-left md:text-center max-w-xs md:mx-auto">
              Average Time to Break Even on GEO Investment
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default StatsSection;