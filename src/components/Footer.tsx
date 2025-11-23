"use client";

import React from "react";
import Section from "./Section";
import { AnimatedText } from "./ui/animated-shiny-text";

interface FooterProps {
  onContactClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Section className="footer-section">
      <div className="h-full flex flex-col justify-between px-4 w-full">
        {/* Main CTA Content - Centered */}
        <div className="flex-grow flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center w-full">
            <AnimatedText
              text="Ready to build"
              textClassName="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight reveal-text"
              gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
              gradientAnimationDuration={6}
              className="block mb-2"
            />
            <AnimatedText
              text="something amazing?"
              textClassName="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight reveal-text"
              gradientColors="linear-gradient(90deg, #00f0ff 45%, #ffffff 50%, #00f0ff 55%)"
              gradientAnimationDuration={6}
              className="block mb-12 md:mb-16"
            />

            {/* Eye-catching CTA Button */}
            <button
              onClick={onContactClick}
              className="group relative inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-semibold text-black bg-accent rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,240,255,0.6)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let&apos;s Talk
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-white to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>

            {/* Quick Links */}
            <div className="mt-12 flex items-center justify-center gap-6 text-sm">
              <a
                href="/blog"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                Blog
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="https://www.linkedin.com/in/dan-danilescu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Footer Info - Bottom */}
        <div className="border-t border-gray-800/50 pt-6 pb-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <div className="text-gray-500">
                © {currentYear} Dev Chords. Built to perform.
              </div>
              <div className="flex gap-6 text-gray-500">
                <span>Web Development</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Mobile Apps</span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline">AI Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
