"use client";

import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import CircleSection from "@/components/CircleSection";
import StatsSection from "@/components/StatsSection";
import ContactModal from "@/components/ContactModal";
import GrowthSection from "@/components/GrowthSection";
import AIToolsSection from "@/components/AIToolsSection";
import { initializeSimpleAnimations } from "@/utils/simpleAnimations";
import { AnimatedText } from "@/components/ui/animated-shiny-text";

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
      {/* <HeroSection /> */}

      {/* Section 2: Value Proposition */}
      {/* <Section className="value-section">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="reveal-text text-5xl sm:text-5xl md:text-7xl font-light leading-tight">
            We put AI at the center
            <br />
            of <span className="text-accent">SEO strategy</span>.
          </h2>
          <p className="reveal-text text-2xl sm:text-xl md:text-2xl mt-6 md:mt-8 text-gray-300">
            Your trusted partner in dominating search rankings with intelligent automation.
          </p>
        </div>
      </Section> */}

      <Section className="sgeo-section">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedText 
            text="SEO rules have changed" 
            textClassName="text-5xl sm:text-5xl md:text-7xl font-light leading-tight reveal-text whitespace-nowrap"
            gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
            gradientAnimationDuration={6}
            className="mb-6 md:mb-8"
          />
          <p className="reveal-text text-2xl sm:text-xl md:text-2xl mt-3 md:mt-4 font-normal" style={{ color: '#D9D9D9' }}>
            {/* That&apos;s not a question; it&apos;s the foundation<br />
            of our collaboration. */}
            Master the New Era of Search with <span className="text-accent">Generative Engine Optimization (GEO)</span>.    
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

      {/* Section 4: Solutions Built Not Bought */}
      <Section className="solutions-section">
        <div className="px-4">
          <div className="max-w-6xl mx-auto mb-6 md:mb-8">
            <AnimatedText 
              text="From High-Volume Traffic" 
              textClassName="text-5xl sm:text-5xl md:text-7xl font-light leading-tight reveal-text whitespace-nowrap"
              gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
              gradientAnimationDuration={6}
              className="block"
            />
            <div className="flex justify-center items-center gap-4">
              <AnimatedText 
                text="to" 
                textClassName="text-5xl sm:text-5xl md:text-7xl font-light leading-tight reveal-text whitespace-nowrap"
                gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
                gradientAnimationDuration={6}
                className="inline-block"
              />
              <AnimatedText 
                text="High-Value Growth" 
                textClassName="text-5xl sm:text-5xl md:text-7xl font-light leading-tight reveal-text whitespace-nowrap"
                gradientColors="linear-gradient(90deg, #00f0ff 45%, #ffffff 50%, #00f0ff 55%)"
                gradientAnimationDuration={6}
                className="inline-block"
              />
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="reveal-text text-2xl sm:text-xl md:text-2xl mt-6 md:mt-8 " style={{ color: '#D9D9D9' }}>
              Our GEO approach captures the full spectrum of user intent— creating a path that guides people from their first question to their final decision.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 4.5: The Autonomous Content Engine */}
      {/* <WorkflowSection /> */}

      {/* Section 5: Process Introduction */}
      <Section className="process-section">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedText 
            text="Our proven 3-step process for AI search" 
            textClassName="text-5xl sm:text-5xl md:text-7xl font-light leading-tight reveal-text whitespace-nowrap"
            gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
            gradientAnimationDuration={6}
            className="mb-6 md:mb-8"
          />
        </div>
      </Section>

      {/* Section 5: Analyze */}
      <CircleSection
        title="Analyze"
        description="We analyze your site to find opportunities for AI citations, establishing you as a trusted source for modern search engines."
        circleConfig="concentric"
      />

      {/* Section 6: Optimize */}
      <CircleSection
        title="Implement"
        description="We create a clear implementation roadmap and strengthen your E-E-A-T signals with documented case studies and transparent processes."
        circleConfig="row"
      />

      {/* Section 7: Scale */}
      <CircleSection
        title="Optimize"
        description="We use advanced structured data and ensure LLM readability so your content is understood and featured in AI-generated answers."
        circleConfig="cluster"
      />
      

      {/* Section 8: Stats */}
      <StatsSection />

   {/* Section 4.6: AI Tools */}
      {/* <AIToolsSection /> */}

      {/* Section 4.7: AI Strategy & Growth Partnership */}
      {/* <GrowthSection /> */}
      
      {/* Section 9: Partners + CTA Combined */}
      <Section className="partners-cta-section">
        <div className="h-full flex flex-col">
          {/* Moving Partners positioned below navbar area */}
          <div className="absolute top-20 sm:top-32 left-0 w-full py-2 sm:py-4 overflow-hidden">
            <div className="moving-partners-container">
              <div className="moving-partners-track">
                <div className="moving-partners-logos">
                  <a href="https://easyoutsource.com" target="_blank" rel="noopener noreferrer">
                    <img src="/easyOutsource-logo.png" alt="Easy Outsource" className="partner-logo-img h-6 opacity-100 hover:opacity-120 hover:brightness-110 transition-all" />
                  </a>
                  <a href="https://dotteam.com" target="_blank" rel="noopener noreferrer">
                    <img src="/dot-logo.png" alt="DOT Team" className="partner-logo-img h-14 opacity-100 hover:opacity-120 hover:brightness-110 transition-all" />
                  </a>
                  <a href="https://thirdstaff.com" target="_blank" rel="noopener noreferrer">
                    <img src="/thirdstaff-logo.png" alt="Thirdstaff" className="partner-logo-img h-12 opacity-100 hover:opacity-120 hover:brightness-110 transition-all" />
                  </a>
                  <a href="https://www.baystreetstaffing.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/bay-street-logo.png" alt="Bay Street Staffing" className="partner-logo-img h-12 opacity-100 hover:opacity-120 hover:brightness-110 transition-all" />
                  </a>
                  <a href="https://catalina-ai.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/catalina-ai-logo.png" alt="Catalina AI" className="partner-logo-img h-24 opacity-100 hover:opacity-120 hover:brightness-110 transition-all" />
                  </a>
                  <a href="https://a1mktg.com" target="_blank" rel="noopener noreferrer">
                    <span className="partner-logo text-6xl font-bold opacity-100 hover:opacity-120 hover:brightness-110 transition-all">A1 MKTG</span>
                  </a>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="moving-partners-logos">
                  <a href="https://easyoutsource.com" target="_blank" rel="noopener noreferrer">
                    <img src="/easyOutsource-logo.png" alt="Easy Outsource" className="partner-logo-img h-6 opacity-100 hover:opacity-120 hover:brightness-110 transition-all" />
                  </a>
                  <a href="https://dotteam.com" target="_blank" rel="noopener noreferrer">
                    <img src="/dot-logo.png" alt="DOT Team" className="partner-logo-img h-14 opacity-100 hover:opacity-120 hover:brightness-110 transition-all" />
                  </a>
                  <a href="https://thirdstaff.com" target="_blank" rel="noopener noreferrer">
                    <img src="/thirdstaff-logo.png" alt="Thirdstaff" className="partner-logo-img h-12 opacity-100 hover:opacity-120 hover:brightness-110 transition-all" />
                  </a>
                  <a href="https://www.baystreetstaffing.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/bay-street-logo.png" alt="Bay Street Staffing" className="partner-logo-img h-12 opacity-100 hover:opacity-120 hover:brightness-110 transition-all" />
                  </a>
                  <a href="https://catalina-ai.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/catalina-ai-logo.png" alt="Catalina AI" className="partner-logo-img h-24 opacity-100 hover:opacity-120 hover:brightness-110 transition-all" />
                  </a>
                  <a href="https://a1mktg.com" target="_blank" rel="noopener noreferrer">
                    <span className="partner-logo text-6xl font-bold opacity-100 hover:opacity-120 hover:brightness-110 transition-all">A1 MKTG</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Content centered with top margin for partners */}
          <div className="flex-grow flex items-center justify-center pt-12 sm:pt-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedText 
                text="Scale your growth with a proven GEO strategy." 
                textClassName="text-5xl sm:text-5xl md:text-7xl font-light leading-tight reveal-text whitespace-nowrap"
                gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
                gradientAnimationDuration={6}
                className="mb-8 sm:mb-12"
              />
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
