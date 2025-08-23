"use client";

import React from "react";
import Section from "./Section";
import { AnimatedText } from "./ui/animated-shiny-text";

const StatsSection = () => {
  return (
    <Section className="stats-section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <AnimatedText 
              text="We don't sell promises. We deliver" 
              textClassName="text-5xl sm:text-4xl md:text-6xl font-light leading-tight reveal-text whitespace-nowrap"
              gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
              gradientAnimationDuration={6}
              className="inline-block"
            />
            <AnimatedText 
              text="Rankings" 
              textClassName="text-5xl sm:text-4xl md:text-6xl font-light leading-tight reveal-text whitespace-nowrap"
              gradientColors="linear-gradient(90deg, #00f0ff 45%, #ffffff 50%, #00f0ff 55%)"
              gradientAnimationDuration={6}
              className="inline-block"
            />
            <AnimatedText 
              text="." 
              textClassName="text-5xl sm:text-4xl md:text-6xl font-light leading-tight reveal-text whitespace-nowrap"
              gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
              gradientAnimationDuration={6}
              className="inline-block"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 text-center">
          <div>
            <div className="flex items-baseline justify-center">
              <div
                className="text-4xl sm:text-6xl md:text-8xl font-light counter"
                data-target="350"
              >
                0
              </div>
              <div className="text-xl sm:text-2xl ml-2">%</div>
            </div>
            <p className="reveal-text text-gray-300 mt-3 sm:mt-4 text-xl sm:text-lg">
              Increase in On-Site Engagement Post-GEO
            </p>
            <a
              href="#"
              className="reveal-text text-accent mt-2 inline-block hover:underline text-xl sm:text-lg"
            >
              See our case studies →
            </a>
          </div>

          <div>
            <div className="flex items-baseline justify-center">
              <div
                className="text-4xl sm:text-6xl md:text-8xl font-light counter"
                data-target="70"
              >
                0
              </div>
              <div className="text-xl sm:text-2xl ml-2">%</div>
            </div>
            <p className="reveal-text text-gray-300 mt-3 sm:mt-4 text-xl sm:text-lg">
              Higher Conversion Rates from AI-driven Traffic
            </p>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-baseline justify-center">
              <div
                className="text-4xl sm:text-6xl md:text-8xl font-light counter"
                data-target="90"
              >
                0
              </div>
              <div className="text-xl sm:text-2xl ml-2">Days</div>
            </div>
            <p className="reveal-text text-gray-300 mt-3 sm:mt-4 text-xl sm:text-lg">
              Average Time to Break Even on GEO Investment
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default StatsSection;