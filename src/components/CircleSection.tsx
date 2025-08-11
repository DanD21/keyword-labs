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
      <div className="max-w-4xl mx-auto">
        {/* Circle Animation Container */}
        <div className="circle-container h-64 flex items-center justify-center mb-12">
          {circleConfig === "concentric" && (
            <div className="relative flex items-center justify-center">
              <div className="circle-animation circle-outer w-48 h-48 rounded-full border-2 border-green-400 opacity-30"></div>
              <div className="circle-animation circle-inner w-32 h-32 rounded-full bg-green-400 opacity-60 absolute"></div>
            </div>
          )}
          {circleConfig === "row" && (
            <div className="flex space-x-8">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="educate-circle w-16 h-16 rounded-full bg-green-400 opacity-60"
                ></div>
              ))}
            </div>
          )}
          {circleConfig === "cluster" && (
            <div className="relative w-48 h-32">
              {/* Cluster formation - 6 circles */}
              <div className="develop-circle w-12 h-12 rounded-full bg-green-400 opacity-60 absolute top-0 left-16"></div>
              <div className="develop-circle w-12 h-12 rounded-full bg-green-400 opacity-60 absolute top-8 left-4"></div>
              <div className="develop-circle w-12 h-12 rounded-full bg-green-400 opacity-60 absolute top-8 left-28"></div>
              <div className="develop-circle w-12 h-12 rounded-full bg-green-400 opacity-60 absolute bottom-8 left-0"></div>
              <div className="develop-circle w-12 h-12 rounded-full bg-green-400 opacity-60 absolute bottom-8 left-16"></div>
              <div className="develop-circle w-12 h-12 rounded-full bg-green-400 opacity-60 absolute bottom-8 left-32"></div>
            </div>
          )}
        </div>

        <h2 className="reveal-text text-5xl md:text-7xl font-light mb-8">
          {title}
        </h2>
        <p className="reveal-text text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </Section>
  );
};

export default CircleSection;