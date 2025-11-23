"use client";

import React from "react";
import Section from "./Section";
import { AnimatedText } from "./ui/animated-shiny-text";

const TechStackSection: React.FC = () => {
  return (
    <Section className="tech-stack-section">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Central content */}
        <div className="text-center relative z-10">
          <AnimatedText
            text="Built with Modern Tech"
            textClassName="text-5xl sm:text-5xl md:text-7xl font-light leading-tight reveal-text"
            gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
            gradientAnimationDuration={6}
            className="mb-8 md:mb-12"
          />

          <p className="reveal-text text-xl sm:text-xl md:text-2xl text-accent max-w-4xl mx-auto mb-8 md:mb-12">
            Leveraging the latest frameworks and tools to deliver
            <br />
            fast, scalable, and maintainable solutions.
          </p>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto mt-12">
            {[
              { name: "React 19", desc: "Modern UI" },
              { name: "Next.js 15", desc: "Full-Stack Framework" },
              { name: "TypeScript", desc: "Type Safety" },
              { name: "Tailwind CSS", desc: "Rapid Styling" },
              { name: "Framer Motion", desc: "Smooth Animations" },
              { name: "Node.js", desc: "Backend Runtime" },
              { name: "PostgreSQL", desc: "Database" },
              { name: "Vercel", desc: "Deployment" },
              { name: "Git", desc: "Version Control" },
              { name: "AI/ML APIs", desc: "Intelligence" },
            ].map((tech, index) => (
              <div
                key={index}
                className="reveal-text p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="text-white font-semibold text-base md:text-lg mb-1">
                  {tech.name}
                </div>
                <div className="text-gray-400 text-xs md:text-sm">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TechStackSection;
