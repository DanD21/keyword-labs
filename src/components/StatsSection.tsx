"use client";

import React, { useState } from "react";
import Image from "next/image";
import Section from "./Section";
import { AnimatedText } from "./ui/animated-shiny-text";

const StatsSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const caseStudyImages = [
    { src: '/growth.png', alt: 'Case Studies Growth Chart 1' },
    { src: '/growth2.png', alt: 'Case Studies Growth Chart 2' }
  ];

  const openPopup = () => {
    setIsPopupOpen(true);
    setCurrentImageIndex(0); // Start with first image
  };
  
  const closePopup = () => {
    setIsPopupOpen(false);
    setCurrentImageIndex(0); // Reset to first image
  };
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % caseStudyImages.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + caseStudyImages.length) % caseStudyImages.length);
  };

  return (
    <Section className="stats-section">
      <div className="-mx-6 md:mx-auto md:max-w-6xl pl-2 pr-0 md:pl-4 md:pr-4">
        {/* Titles */}
        <div className="mb-6 md:mb-8 lg:mb-16 text-left md:text-center">
          <div className="-space-y-3">
            <AnimatedText 
              text="We don't sell promises." 
              textClassName="text-3xl md:text-4xl lg:text-6xl font-light leading-tight reveal-text"
              gradientColors="linear-gradient(90deg, #888888 45%, #ffffff 50%, #888888 55%)"
              gradientAnimationDuration={6}
              className="block text-left md:text-center"
            />
            <AnimatedText 
              text="We deliver Rankings." 
              textClassName="text-3xl md:text-4xl lg:text-6xl font-light leading-tight reveal-text"
              gradientColors="linear-gradient(90deg, #00f0ff 45%, #ffffff 50%, #00f0ff 55%)"
              gradientAnimationDuration={6}
              className="block text-left md:text-center"
            />
          </div>
        </div>

        {/* Stats - Mobile: vertical stack, Desktop: grid */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-12 lg:gap-20 md:max-w-5xl md:mx-auto">
          <div className="border-b border-gray-700 pb-3 md:border-b-0 md:pb-0 text-left md:text-center">
            <div className="flex items-baseline text-left md:justify-center">
              <div className="text-5xl md:text-6xl lg:text-8xl font-light counter" data-target="350">
                0
              </div>
              <div className="text-3xl md:text-2xl ml-1">%</div>
            </div>
            <p className="reveal-text text-gray-300 text-sm md:text-base lg:text-lg mt-1 md:mt-4 leading-relaxed text-left md:text-center max-w-xs md:mx-auto">
              Increase in On-Site Engagement Post-GEO
            </p>
            <div className="text-left md:text-center">
              <button 
                onClick={openPopup}
                className="text-accent text-sm md:text-base mt-1 md:mt-3 inline-block hover:underline transition-colors bg-transparent border-none cursor-pointer p-0"
              >
                See our case studies →
              </button>
            </div>
          </div>
          
          <div className="border-b border-gray-700 pb-3 md:border-b-0 md:pb-0 text-left md:text-center">
            <div className="flex items-baseline text-left md:justify-center">
              <div className="text-5xl md:text-6xl lg:text-8xl font-light counter" data-target="70">
                0
              </div>
              <div className="text-3xl md:text-2xl ml-1">%</div>
            </div>
            <p className="reveal-text text-gray-300 text-sm md:text-base lg:text-lg mt-1 md:mt-4 leading-relaxed text-left md:text-center max-w-xs md:mx-auto">
              Higher Conversion Rates from AI-driven Traffic
            </p>
          </div>
          
          <div className="text-left md:text-center">
            <div className="flex items-baseline text-left md:justify-center">
              <div className="text-5xl md:text-6xl lg:text-8xl font-light counter" data-target="90">
                0
              </div>
              <div className="text-3xl md:text-2xl ml-1">Days</div>
            </div>
            <p className="reveal-text text-gray-300 text-sm md:text-base lg:text-lg mt-1 md:mt-4 leading-relaxed text-left md:text-center max-w-xs md:mx-auto">
              Average Time to Break Even on GEO Investment
            </p>
          </div>
        </div>
      </div>
      
      {/* Case Studies Image Popup */}
      {isPopupOpen && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closePopup}
          style={{
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'slideUp 0.3s ease-out'
            }}
          >
            {/* Close button */}
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-all duration-200 hover:scale-110"
            >
              ✕
            </button>
            
            {/* Navigation arrows - only show if more than one image */}
            {caseStudyImages.length > 1 && (
              <>
                {/* Previous button */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-all duration-200 hover:scale-110"
                >
                  ‹
                </button>
                
                {/* Next button */}
                <button 
                  onClick={nextImage}
                  className="absolute right-16 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-all duration-200 hover:scale-110"
                >
                  ›
                </button>
              </>
            )}
            
            {/* Image */}
            <Image 
              src={caseStudyImages[currentImageIndex].src} 
              alt={caseStudyImages[currentImageIndex].alt} 
              width={1200} 
              height={800} 
              className="w-full h-auto object-contain"
              priority
            />
            
            {/* Image counter - only show if more than one image */}
            {caseStudyImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {caseStudyImages.length}
              </div>
            )}
          </div>
        </div>
      )}
    </Section>
  );
};

export default StatsSection;
