"use client";

import React from "react";
import Section from "./Section";
import { AnimatedText } from "./ui/animated-shiny-text";

const StatsSection = () => {
  return (
    <Section className="stats-section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <div className="-space-y-3">
            <AnimatedText 
              text="We don't sell promises." 
              textClassName="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-light leading-tight reveal-text"
              gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
              gradientAnimationDuration={6}
              className="block"
            />
            <AnimatedText 
              text="We deliver Rankings." 
              textClassName="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-light leading-tight reveal-text"
              gradientColors="linear-gradient(90deg, #00f0ff 45%, #ffffff 50%, #00f0ff 55%)"
              gradientAnimationDuration={6}
              className="block"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20 text-center max-w-5xl mx-auto">
          <div>
            <div className="flex items-baseline justify-center">
              <div
                className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-light counter"
                data-target="350"
              >
                0
              </div>
              <div className="text-xl sm:text-2xl md:text-2xl ml-1">%</div>
            </div>
            <p className="reveal-text text-gray-300 mt-4 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0 max-w-xs mx-auto">
              Increase in On-Site Engagement Post-GEO
            </p>
            <a
              href="#"
              className="reveal-text text-accent mt-3 inline-block hover:underline text-sm sm:text-base transition-colors"
            >
              See our case studies →
            </a>
          </div>

          <div>
            <div className="flex items-baseline justify-center">
              <div
                className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-light counter"
                data-target="70"
              >
                0
              </div>
              <div className="text-xl sm:text-2xl md:text-2xl ml-1">%</div>
            </div>
            <p className="reveal-text text-gray-300 mt-4 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0 max-w-xs mx-auto">
              Higher Conversion Rates from AI-driven Traffic
            </p>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-baseline justify-center">
              <div
                className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-light counter"
                data-target="90"
              >
                0
              </div>
              <div className="text-xl sm:text-2xl md:text-2xl ml-1">Days</div>
            </div>
            <p className="reveal-text text-gray-300 mt-4 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0 max-w-xs mx-auto">
              Average Time to Break Even on GEO Investment
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default StatsSection;