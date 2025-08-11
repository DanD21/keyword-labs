"use client";

import React from "react";

interface NavigationProps {
  onContactClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onContactClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          keyword labs
        </div>
        <button 
          onClick={onContactClick}
          className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-gray-900 transition-colors"
        >
          Get In Touch →
        </button>
      </div>
    </nav>
  );
};

export default Navigation;