"use client";

import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import HeroSection from "@/components/HeroSection";
import CircleSection from "@/components/CircleSection";
import StatsSection from "@/components/StatsSection";
import ContactModal from "@/components/ContactModal";
import { initializeSimpleAnimations } from "@/utils/simpleAnimations";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    // Simple timing for Intersection Observer - much more reliable
    const timer = setTimeout(() => {
      initializeSimpleAnimations();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleContactOpen = () => {
    setIsContactOpen(true);
  };

  const handleContactClose = () => {
    setIsContactOpen(false);
  };

  return (
    <main className="scroll-container">
      <Navigation onContactClick={handleContactOpen} />

      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Value Proposition */}
      <Section className="value-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal-text text-5xl md:text-7xl font-light leading-tight">
            We put AI at the center
            <br />
            of <span className="text-green-400">SEO strategy</span>.
          </h2>
          <p className="reveal-text text-xl md:text-2xl mt-8 text-gray-300">
            Your trusted partner in dominating search rankings with intelligent automation.
          </p>
        </div>
      </Section>

      {/* Section 3: Process Introduction */}
      <Section className="process-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal-text text-5xl md:text-7xl font-light leading-tight">
            We spend our days guiding companies
            <br />
            through our 3-step{" "}
            <span className="text-green-400">SEO AI</span> Journey.
          </h2>
        </div>
      </Section>

      {/* Section 4: Analyze */}
      <CircleSection
        title="Analyze"
        description="We analyze your current SEO performance and identify high-impact keyword opportunities using advanced AI-powered research tools and competitive analysis."
        circleConfig="concentric"
      />

      {/* Section 5: Optimize */}
      <CircleSection
        title="Optimize"
        description="We optimize your content, technical SEO, and user experience using AI-driven insights to maximize your search engine visibility and rankings."
        circleConfig="row"
      />

      {/* Section 6: Scale */}
      <CircleSection
        title="Scale"
        description="We scale your SEO success with automated content strategies, AI-powered link building, and continuous performance monitoring that grows with your business."
        circleConfig="cluster"
      />

      {/* Section 7: Stats */}
      <StatsSection />

      {/* Section 8: Partner logos */}
      <Section className="partners-section">
        <div className="flex justify-center items-center space-x-12 opacity-60">
          <div className="reveal-text text-gray-400">Citation</div>
          <div className="reveal-text text-gray-400">ReadyRNs</div>
          <div className="reveal-text text-gray-400">SHOPSOLAR</div>
          <div className="reveal-text text-gray-400">Partner 4</div>
          <div className="reveal-text text-gray-400">Partner 5</div>
        </div>
      </Section>

      {/* Section 9: CTA */}
      <Section className="cta-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal-text text-5xl md:text-7xl font-light leading-tight mb-12">
            The best SEO results
            <br />
            are built <span className="text-green-400">together</span>.
          </h2>
          <button
            onClick={handleContactOpen}
            className="border border-white text-white px-8 py-4 rounded-full text-lg hover:bg-white hover:text-gray-900 transition-colors"
          >
            Scale Your Rankings →
          </button>
        </div>
      </Section>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleContactClose} />
    </main>
  );
}
