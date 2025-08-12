"use client";

import React from "react";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ className = "", children }) => {
  const isPartnersSection = className.includes('partners-cta-section');
  
  return (
    <section className={`section bg-[#1a1f1a] text-white ${isPartnersSection ? 'relative' : ''} ${className}`}>
      <div className={`container mx-auto px-6 text-center ${isPartnersSection ? 'h-full' : ''}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;