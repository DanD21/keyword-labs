"use client";

import React from "react";

interface NavigationProps {
  onContactClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onContactClick }) => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="text-white font-bold text-lg sm:text-xl">Dev Chords</span>
          <a
            href="/blog"
            className="text-white/80 hover:text-white transition-colors text-sm sm:text-base"
          >
            Blog
          </a>
          <a
            href="https://www.linkedin.com/in/dan-danilescu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors text-sm sm:text-base"
          >
            LinkedIn
          </a>
        </div>
        <button
          onClick={onContactClick}
          className="group relative bg-accent text-black px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
        >
          <span className="relative z-10 flex items-center gap-1">
            <span className="hidden sm:inline">Get In Touch</span>
            <span className="sm:hidden">Contact</span>
            <span className="group-hover:translate-x-0.5 transition-transform duration-300">
              →
            </span>
          </span>
          {/* Subtle inner glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;