"use client";

import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import CircleSection from "@/components/CircleSection";
import StatsSection from "@/components/StatsSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectShowcaseSection from "@/components/ProjectShowcaseSection";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import { initializeSimpleAnimations } from "@/utils/simpleAnimations";
import { AnimatedText } from "@/components/ui/animated-shiny-text";
import "@/utils/viewportProtection";

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
      <Section className="hero-section">
        <Navigation onContactClick={handleContactOpen} />
        <div className="max-w-4xl mx-auto px-4 w-full box-border">
          <AnimatedText
            text="Built to perform"
            textClassName="text-6xl sm:text-8xl md:text-8xl lg:text-14xl font-light leading-tight reveal-text text-center"
            gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
            gradientAnimationDuration={6}
            className="mb-6 md:mb-8"
          />
          <p className="reveal-text text-xl sm:text-2xl md:text-2xl mt-3 md:mt-4 font-normal text-center" style={{ color: '#D9D9D9' }}>
            Custom web solutions that captivate users and <span className="text-accent">drive results</span>.
          </p>
        </div>
      </Section>

      {/* Section 3: S/GEO Strategy */}
      {/* <Section className="sgeo-section">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="reveal-text text-5xl sm:text-5xl md:text-7xl font-light leading-tight">
            <SGeoMorph />
          </h2>
          <p className="reveal-text text-2xl sm:text-xl md:text-2xl mt-6 md:mt-8 font-normal" style={{ color: '#D9D9D9' }}>
Our process is called <span className="text-accent">Generative Engine Optimization (GEO)</span> — a framework for fine-tuning your content to be understood, trusted, and cited by modern AI search engines.
          </p>
        </div>
      </Section> */}

      {/* Section 4: Services */}
      <Section className="services-section">
        <div className="px-4 w-full box-border">
          <div className="max-w-6xl mx-auto mb-6 md:mb-8 text-center w-full box-border">
            <div className="-space-y-3">
              <AnimatedText
                text="From Concept"
                textClassName="text-5xl sm:text-6xl md:text-8xl lg:text-10xl font-light leading-tight reveal-text"
                gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
                gradientAnimationDuration={6}
                className="block"
                style={{ hyphens: 'none' }}
              />
              <AnimatedText
                text="to Launch & Beyond"
                textClassName="text-5xl sm:text-6xl md:text-8xl lg:text-10xl font-light leading-tight reveal-text"
                gradientColors="linear-gradient(90deg, #00f0ff 45%, #ffffff 50%, #00f0ff 55%)"
                gradientAnimationDuration={6}
                className="block"
                style={{ hyphens: 'none' }}
              />
            </div>
          </div>
          <div className="max-w-4xl mx-auto w-full box-border">
            <p className="reveal-text text-lg sm:text-xl md:text-2xl mt-6 md:mt-8 text-center" style={{ color: '#D9D9D9', hyphens: 'none' }}>
              Web Development • Mobile Apps • AI Integration • Full-Stack Solutions • E-commerce • SEO & GEO • Technical Consulting
            </p>
          </div>
        </div>
      </Section>

      {/* Section 4.5: The Autonomous Content Engine */}
      {/* <WorkflowSection /> */}

      {/* Section 5: Process Introduction */}
      <Section className="process-section">
        <div className="max-w-4xl mx-auto px-4 w-full box-border">
          <div className="text-center">
            <AnimatedText
              text="Our streamlined"
              textClassName="text-6xl sm:text-6xl md:text-6xl lg:text-7xl font-light leading-tight reveal-text"
              gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
              gradientAnimationDuration={6}
              className="block -mb-3"
            />
            <AnimatedText
              text="development process"
              textClassName="text-6xl sm:text-6xl md:text-5xl lg:text-7xl font-light leading-tight reveal-text"
              gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
              gradientAnimationDuration={6}
              className="block mb-6 md:mb-8"
            />
          </div>
        </div>
      </Section>

      {/* Section 5: Discovery */}
      <CircleSection
        title="Discovery"
        description="We dive deep into your vision, goals, and requirements to create a roadmap that aligns technology with your business objectives."
        circleConfig="concentric"
      />

      {/* Section 6: Development */}
      <CircleSection
        title="Development"
        description="Using modern tech stacks and best practices, we build scalable, performant solutions with clean code and attention to detail."
        circleConfig="row"
      />

      {/* Section 7: Delivery */}
      <CircleSection
        title="Delivery"
        description="From deployment to optimization, we ensure smooth launches and provide ongoing support to keep your product running at peak performance."
        circleConfig="cluster"
      />
      

      {/* Section 8: Stats */}
      <StatsSection />

      {/* Section 9: Tech Stack */}
      <TechStackSection />

      {/* Section 10: Project Showcase */}
      <ProjectShowcaseSection />

      {/* Final CTA / Footer */}
      <Footer onContactClick={handleContactOpen} />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleContactClose} />
    </main>
  );
}
