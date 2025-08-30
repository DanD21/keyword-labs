"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import CircleSection from "@/components/CircleSection";
import StatsSection from "@/components/StatsSection";
import ContactModal from "@/components/ContactModal";
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
      <Section className="sgeo-section">
        <Navigation onContactClick={handleContactOpen} />
        <div className="max-w-4xl mx-auto px-4 w-full box-border">
          <AnimatedText 
            text="SEO rules have changed" 
            textClassName="text-6xl sm:text-8xl md:text-8xl lg:text-14xl font-light leading-tight reveal-text text-center"
            gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
            gradientAnimationDuration={6}
            className="mb-6 md:mb-8"
          />
          <p className="reveal-text text-xl sm:text-2xl md:text-2xl mt-3 md:mt-4 font-normal" style={{ color: '#D9D9D9' }}>
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
        <div className="px-4 w-full box-border">
          <div className="max-w-6xl mx-auto mb-6 md:mb-8 text-center w-full box-border">
            <div className="-space-y-3">
              <AnimatedText 
                text="From Low Volume" 
                textClassName="text-5xl sm:text-6xl md:text-8xl lg:text-10xl font-light leading-tight reveal-text"
                gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
                gradientAnimationDuration={6}
                className="block"
                style={{ hyphens: 'none' }}
              />
              <AnimatedText 
                text="to High Value Growth" 
                textClassName="text-5xl sm:text-6xl md:text-8xl lg:text-10xl font-light leading-tight reveal-text"
                gradientColors="linear-gradient(90deg, #00f0ff 45%, #ffffff 50%, #00f0ff 55%)"
                gradientAnimationDuration={6}
                className="block"
                style={{ hyphens: 'none' }}
              />
            </div>
          </div>
          <div className="max-w-4xl mx-auto w-full box-border">
            <p className="reveal-text text-lg sm:text-xl md:text-2xl mt-6 md:mt-8 " style={{ color: '#D9D9D9', hyphens: 'none' }}>
              Our GEO approach captures the full spectrum of user intent — from the first question to final decision.
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
              text="Our proven 3-step process" 
              textClassName="text-6xl sm:text-6xl md:text-6xl lg:text-7xl font-light leading-tight reveal-text"
              gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
              gradientAnimationDuration={6}
              className="block -mb-3"
            />
            <AnimatedText 
              text="for AI search" 
              textClassName="text-6xl sm:text-6xl md:text-5xl lg:text-7xl font-light leading-tight reveal-text"
              gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
              gradientAnimationDuration={6}
              className="block mb-6 md:mb-8"
            />
          </div>
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
          <div className="absolute top-20 sm:top-32 left-0 w-full py-3 sm:py-4 overflow-hidden">
            <div className="moving-partners-container">
              <div className="moving-partners-track">
                <div className="moving-partners-logos">
                  <a href="https://easyoutsource.com" target="_blank" rel="noopener noreferrer">
                    <Image src="/easyOutsource-logo.png" alt="Easy Outsource" width={180} height={60} className="partner-logo-img opacity-100 hover:opacity-120 hover:brightness-110 transition-all" />
                  </a>
                  <a href="https://dotteam.com" target="_blank" rel="noopener noreferrer">
                    <Image src="/dot-logo.png" alt="DOT Team" width={180} height={84} className="partner-logo-img opacity-100 hover:opacity-120 hover:brightness-110 transition-all" />
                  </a>
                  <a href="https://thirdstaff.com" target="_blank" rel="noopener noreferrer">
                    <Image src="/thirdstaff-logo.png" alt="Thirdstaff" width={180} height={72} className="partner-logo-img opacity-100 hover:opacity-120 hover:brightness-110 transition-all" />
                  </a>
                  <a href="https://www.baystreetstaffing.com/" target="_blank" rel="noopener noreferrer">
                    <Image src="/bay-street-logo.png" alt="Bay Street Staffing" width={180} height={72} className="partner-logo-img opacity-100 hover:opacity-120 hover:brightness-110 transition-all" />
                  </a>
                  <a href="https://catalina-ai.com/" target="_blank" rel="noopener noreferrer">
                    <Image src="/catalina-ai-logo.png" alt="Catalina AI" width={180} height={144} className="partner-logo-img opacity-100 hover:opacity-120 hover:brightness-110 transition-all" />
                  </a>
                  <a href="https://a1mktg.com" target="_blank" rel="noopener noreferrer">
                    <span className="partner-logo text-5xl sm:text-6xl font-bold opacity-100 hover:opacity-120 hover:brightness-110 transition-all">A1 MKTG</span>
                  </a>
                </div>
                {/* Duplicate for seamless loop - hidden on small screens */}
                <div className="moving-partners-logos hidden sm:flex">
                  <a href="https://easyoutsource.com" target="_blank" rel="noopener noreferrer">
                    <Image src="/easyOutsource-logo.png" alt="Easy Outsource" width={180} height={60} className="partner-logo-img opacity-100 hover:opacity-120 hover:brightness-110 transition-all" />
                  </a>
                  <a href="https://dotteam.com" target="_blank" rel="noopener noreferrer">
                    <Image src="/dot-logo.png" alt="DOT Team" width={180} height={84} className="partner-logo-img opacity-100 hover:opacity-120 hover:brightness-110 transition-all" />
                  </a>
                  <a href="https://thirdstaff.com" target="_blank" rel="noopener noreferrer">
                    <Image src="/thirdstaff-logo.png" alt="Thirdstaff" width={180} height={72} className="partner-logo-img opacity-100 hover:opacity-120 hover:brightness-110 transition-all" />
                  </a>
                  <a href="https://www.baystreetstaffing.com/" target="_blank" rel="noopener noreferrer">
                    <Image src="/bay-street-logo.png" alt="Bay Street Staffing" width={180} height={72} className="partner-logo-img opacity-100 hover:opacity-120 hover:brightness-110 transition-all" />
                  </a>
                  <a href="https://catalina-ai.com/" target="_blank" rel="noopener noreferrer">
                    <Image src="/catalina-ai-logo.png" alt="Catalina AI" width={180} height={144} className="partner-logo-img opacity-100 hover:opacity-120 hover:brightness-110 transition-all" />
                  </a>
                  <a href="https://a1mktg.com" target="_blank" rel="noopener noreferrer">
                    <span className="partner-logo text-5xl sm:text-6xl font-bold opacity-100 hover:opacity-120 hover:brightness-110 transition-all">A1 MKTG</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Content centered with top margin for partners */}
          <div className="flex-grow flex items-center justify-center pt-12 sm:pt-16 px-4">
            <div className="max-w-4xl mx-auto text-center w-full box-border">
              <div className="text-center">
                <AnimatedText 
                  text="Scale your growth with a" 
                  textClassName="text-5xl sm:text-5xl md:text-5xl lg:text-7xl font-light leading-tight reveal-text"
                  gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
                  gradientAnimationDuration={6}
                  className="block mb-0"
                />
                <AnimatedText 
                  text="proven GEO strategy." 
                  textClassName="text-5xl sm:text-5xl md:text-5xl lg:text-7xl font-light leading-tight reveal-text"
                  gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
                  gradientAnimationDuration={6}
                  className="block mb-8 sm:mb-12"
                />
              </div>
              <button
                onClick={handleContactOpen}
                className="border border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-colors transform hover:scale-105 transition-all duration-300"
              >
                Get in touch →
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
