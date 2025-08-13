"use client";

import React from "react";
import Section from "./Section";

interface CircleSectionProps {
  title: string;
  description: string;
  circleConfig: "concentric" | "row" | "cluster";
  className?: string;
}

const CircleSection: React.FC<CircleSectionProps> = ({
  title,
  description,
  circleConfig,
  className = "",
}) => {
  return (
    <Section className={`${title.toLowerCase()}-section ${className}`}>
      <div className="max-w-4xl mx-auto px-4">
        {/* Circle Animation Container */}
        <div className="circle-container h-32 sm:h-48 md:h-64 flex items-center justify-center mb-6 sm:mb-8 md:mb-12">
          {circleConfig === "concentric" && (
            <div className="relative flex items-center justify-center">
              <div className="circle-animation circle-outer w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-2 border-green-400 opacity-30"></div>
              <div className="circle-animation circle-inner w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-green-400 opacity-60 absolute"></div>
            </div>
          )}
          {circleConfig === "row" && (
            <div className="flex space-x-3 sm:space-x-6 md:space-x-8">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="educate-circle w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-green-400 opacity-60"
                ></div>
              ))}
            </div>
          )}
          {circleConfig === "cluster" && (
            <div className="flex flex-col items-center space-y-3">
              {/* Row 1: Top circle */}
              <div className="flex justify-center">
                <div className="develop-circle w-12 h-12 rounded-full bg-green-400 opacity-60"></div>
              </div>
              {/* Row 2: Middle 2 circles */}
              <div className="flex justify-center space-x-8">
                <div className="develop-circle w-12 h-12 rounded-full bg-green-400 opacity-60"></div>
                <div className="develop-circle w-12 h-12 rounded-full bg-green-400 opacity-60"></div>
              </div>
              {/* Row 3: Bottom 3 circles */}
              <div className="flex justify-center space-x-8">
                <div className="develop-circle w-12 h-12 rounded-full bg-green-400 opacity-60"></div>
                <div className="develop-circle w-12 h-12 rounded-full bg-green-400 opacity-60"></div>
                <div className="develop-circle w-12 h-12 rounded-full bg-green-400 opacity-60"></div>
              </div>
            </div>
          )}
        </div>

        <h2 className="reveal-text text-5xl sm:text-5xl md:text-7xl font-light mb-6 sm:mb-8">
          {title}
        </h2>
        <p className="reveal-text text-xl sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </Section>
  );
};

export default CircleSection;