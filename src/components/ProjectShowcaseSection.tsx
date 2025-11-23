"use client";

import React from "react";
import Section from "./Section";
import { AnimatedText } from "./ui/animated-shiny-text";

const ProjectShowcaseSection: React.FC = () => {
  return (
    <Section className="project-showcase-section">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8 md:mb-12">
          <AnimatedText
            text="Real Projects."
            textClassName="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-light leading-tight reveal-text text-center"
            gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
            gradientAnimationDuration={6}
            className="block mb-2"
          />
          <AnimatedText
            text="Real Results."
            textClassName="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-light leading-tight reveal-text text-center"
            gradientColors="linear-gradient(90deg, #00f0ff 45%, #ffffff 50%, #00f0ff 55%)"
            gradientAnimationDuration={6}
            className="block"
          />
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {[
            {
              title: "E-commerce Platform",
              description: "Built a high-converting online store with advanced filtering and AI-powered recommendations",
              metrics: "2.5x increase in sales",
            },
            {
              title: "SaaS Dashboard",
              description: "Developed a real-time analytics dashboard with complex data visualizations",
              metrics: "98% Lighthouse score",
            },
            {
              title: "Mobile App",
              description: "Created a cross-platform mobile application with offline-first architecture",
              metrics: "50k+ downloads",
            },
            {
              title: "AI Integration",
              description: "Integrated GPT-4 API for automated content generation and analysis",
              metrics: "80% time savings",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="reveal-text p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 text-left"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base mb-3">
                {project.description}
              </p>
              <div className="text-accent font-semibold text-sm md:text-base">
                {project.metrics}
              </div>
            </div>
          ))}
        </div>

        <p className="reveal-text text-lg sm:text-xl md:text-2xl text-gray-300 mt-12">
          Every project is an opportunity to push boundaries and deliver
          exceptional user experiences.
        </p>
      </div>
    </Section>
  );
};

export default ProjectShowcaseSection;
