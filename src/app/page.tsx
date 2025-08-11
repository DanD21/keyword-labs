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
            of <span className="text-green-400">everything</span> we do.
          </h2>
          <p className="reveal-text text-xl md:text-2xl mt-8 text-gray-300">
            Your trusted partner in becoming an AI-first company.
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
            <span className="text-green-400">AI Transformation</span> Journey.
          </h2>
        </div>
      </Section>

      {/* Section 4: Identify */}
      <CircleSection
        title="Identify"
        description="We help you identify high-impact AI opportunities and build a step-by-step AI Transformation strategy to bring them to life."
        circleConfig="concentric"
      />

      {/* Section 5: Educate */}
      <CircleSection
        title="Educate"
        description="We train and support your team with the right tools and know-how to embed AI across your entire organization."
        circleConfig="row"
      />

      {/* Section 6: Develop */}
      <CircleSection
        title="Develop"
        description="We leverage our extensive experience and network to develop custom AI systems that are proven to move the needle inside your business."
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
            The best AI systems
            <br />
            are built <span className="text-green-400">side by side</span>.
          </h2>
          <button
            onClick={handleContactOpen}
            className="border border-white text-white px-8 py-4 rounded-full text-lg hover:bg-white hover:text-gray-900 transition-colors"
          >
            Let's Partner Up →
          </button>
        </div>
      </Section>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleContactClose} />
    </main>
  );
}
