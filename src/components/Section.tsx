"use client";

import React from "react";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ className = "", children }) => {
  return (
    <section className={`section bg-[#1a1f1a] text-white ${className}`}>
      <div className="container mx-auto px-6 text-center">
        {children}
      </div>
    </section>
  );
};

export default Section;