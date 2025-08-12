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
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="reveal-text text-4xl sm:text-5xl md:text-7xl font-light leading-tight">
            We put AI at the center
            <br />
            of <span className="text-green-400">SEO strategy</span>.
          </h2>
          <p className="reveal-text text-xl sm:text-xl md:text-2xl mt-6 md:mt-8 text-gray-300">
            Your trusted partner in dominating search rankings with intelligent automation.
          </p>
        </div>
      </Section>

      {/* Section 3: Process Introduction */}
      <Section className="process-section">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="reveal-text text-4xl sm:text-5xl md:text-7xl font-light leading-tight">
            We spend our days guiding companies
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>through our 3-step{" "}
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

      {/* Section 8: Partners + CTA Combined */}
      <Section className="partners-cta-section">
        <div className="h-full flex flex-col">
          {/* Moving Partners positioned below navbar area */}
          <div className="absolute top-20 sm:top-32 left-0 w-full py-2 sm:py-4 overflow-hidden">
            <div className="moving-partners-container">
              <div className="moving-partners-track">
                <div className="moving-partners-logos">
                  <span className="partner-logo">METAFORCE</span>
                  <span className="partner-logo">RealEstateU</span>
                  <span className="partner-logo">DENT</span>
                  <span className="partner-logo">JÄGERMEISTER</span>
                  <span className="partner-logo">Citation</span>
                  <span className="partner-logo">ReadyRNs</span>
                  <span className="partner-logo">SHOPSOLAR</span>
                  <span className="partner-logo">DARKBOX</span>
                  <span className="partner-logo">stackOS</span>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="moving-partners-logos">
                  <span className="partner-logo">METAFORCE</span>
                  <span className="partner-logo">RealEstateU</span>
                  <span className="partner-logo">DENT</span>
                  <span className="partner-logo">JÄGERMEISTER</span>
                  <span className="partner-logo">Citation</span>
                  <span className="partner-logo">ReadyRNs</span>
                  <span className="partner-logo">SHOPSOLAR</span>
                  <span className="partner-logo">DARKBOX</span>
                  <span className="partner-logo">stackOS</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Content centered with top margin for partners */}
          <div className="flex-grow flex items-center justify-center pt-12 sm:pt-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="reveal-text text-4xl sm:text-5xl md:text-7xl font-light leading-tight mb-8 sm:mb-12">
                The best SEO results
                <br />
                are built <span className="text-green-400">together</span>.
              </h2>
              <button
                onClick={handleContactOpen}
                className="border border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-colors transform hover:scale-105 transition-all duration-300"
              >
                Scale Your Rankings →
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleContactClose} />
    </main>
  );
}
