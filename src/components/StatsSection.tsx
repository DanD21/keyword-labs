"use client";

import React from "react";
import Section from "./Section";

const StatsSection = () => {
  return (
    <Section className="stats-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal-text text-4xl md:text-6xl font-light mb-16">
          We don't sell AI. We sell{" "}
          <em className="text-green-400 not-italic">Results</em>.
        </h2>

        <div className="grid md:grid-cols-3 gap-16 text-center">
          <div>
            <div className="flex items-baseline justify-center">
              <div
                className="text-6xl md:text-8xl font-light counter"
                data-target="17"
              >
                0
              </div>
              <div className="text-2xl ml-2">M+</div>
            </div>
            <p className="reveal-text text-gray-300 mt-4">
              Professionals upskilled in AI via our platforms
            </p>
            <a
              href="#"
              className="reveal-text text-green-400 mt-2 inline-block hover:underline"
            >
              Watch our content here →
            </a>
          </div>

          <div>
            <div className="flex items-baseline justify-center">
              <div
                className="text-6xl md:text-8xl font-light counter"
                data-target="435"
              >
                0
              </div>
              <div className="text-2xl ml-2">+</div>
            </div>
            <p className="reveal-text text-gray-300 mt-4">
              AI Opportunities identified for businesses
            </p>
          </div>

          <div>
            <div className="flex items-baseline justify-center">
              <div
                className="text-6xl md:text-8xl font-light counter"
                data-target="55"
              >
                0
              </div>
              <div className="text-2xl ml-2">+</div>
            </div>
            <p className="reveal-text text-gray-300 mt-4">
              Bespoke AI solutions developed
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default StatsSection;