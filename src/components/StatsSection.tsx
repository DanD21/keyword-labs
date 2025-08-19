"use client";

import React from "react";
import Section from "./Section";

const StatsSection = () => {
  return (
    <Section className="stats-section">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="reveal-text text-5xl sm:text-4xl md:text-6xl font-light mb-8 sm:mb-12 md:mb-16">
          We don&apos;t sell promises. We deliver{" "}
          <em className="text-accent not-italic">Rankings</em>.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 text-center">
          <div>
            <div className="flex items-baseline justify-center">
              <div
                className="text-4xl sm:text-6xl md:text-8xl font-light counter"
                data-target="500"
              >
                0
              </div>
              <div className="text-xl sm:text-2xl ml-2">%</div>
            </div>
            <p className="reveal-text text-gray-300 mt-3 sm:mt-4 text-xl sm:text-lg">
              Average organic traffic increase in first 6 months
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
                data-target="2500"
              >
                0
              </div>
              <div className="text-xl sm:text-2xl ml-2">+</div>
            </div>
            <p className="reveal-text text-gray-300 mt-3 sm:mt-4 text-xl sm:text-lg">
              Keywords ranked on first page of Google
            </p>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-baseline justify-center">
              <div
                className="text-4xl sm:text-6xl md:text-8xl font-light counter"
                data-target="95"
              >
                0
              </div>
              <div className="text-xl sm:text-2xl ml-2">%</div>
            </div>
            <p className="reveal-text text-gray-300 mt-3 sm:mt-4 text-xl sm:text-lg">
              Client retention rate with measurable ROI
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default StatsSection;