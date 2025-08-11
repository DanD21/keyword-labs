"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Text reveal animation
export const revealText = (selector: string | Element | Element[], delay = 0) => {
  const elements = gsap.utils.toArray(selector);
  if (elements.length === 0) return;
  
  // Animate to visible state - smooth and clean
  gsap.to(elements, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    ease: "power2.out",
    delay: delay,
    stagger: 0.2,
  });
};

// Section 4: Identify - Concentric Circles
export const identifyCircles = () => {
  const circles = gsap.utils.toArray(".circle-animation");
  
  if (circles.length === 0) return gsap.timeline();
  
  const tl = gsap.timeline({ paused: true });

  tl.fromTo(circles,
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "back.out(1.7)",
      stagger: 0.2,
    }
  );

  return tl;
};

// Section 5: Educate - 5 Circles Row
export const educateCircles = () => {
  const circles = gsap.utils.toArray(".educate-circle");
  if (circles.length === 0) return gsap.timeline();
  
  const tl = gsap.timeline({ paused: true });

  tl.fromTo(circles,
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.15,
    }
  );

  return tl;
};

// Section 6: Develop - 6 Circles Cluster
export const developCircles = () => {
  const circles = gsap.utils.toArray(".develop-circle");
  if (circles.length === 0) return gsap.timeline();
  
  const tl = gsap.timeline({ paused: true });

  tl.fromTo(circles,
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: {
        amount: 1,
        from: "center",
      },
    }
  );

  return tl;
};

// Counter animation
export const animateCounters = () => {
  const counters = document.querySelectorAll(".counter");
  
  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target") || "0");

    gsap.to(counter, {
      innerText: target,
      duration: 2,
      ease: "power2.out",
      snap: { innerText: 1 },
      scrollTrigger: {
        trigger: counter,
        start: "top 80%",
      },
    });
  });
};

// Setup individual reveal text animations with ScrollTrigger
export const setupRevealTextAnimations = () => {
  const revealElements = document.querySelectorAll('.reveal-text');
  console.log('Setting up individual ScrollTriggers for reveal-text elements:', revealElements.length);

  revealElements.forEach((element, index) => {
    // Skip hero section elements (they're handled immediately)
    const isHeroElement = element.closest('.hero-section');
    if (isHeroElement) {
      console.log('Skipping hero element:', element.textContent?.substring(0, 20) + '...');
      return;
    }

    console.log(`Creating ScrollTrigger for element ${index}:`, element.textContent?.substring(0, 30) + '...');
    
    const st = ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      end: "bottom 15%",
      markers: false, // Disable markers now that we know they work
      onEnter: () => {
        console.log('ScrollTrigger FIRED for element:', element.textContent?.substring(0, 20) + '...');
        // Reset element to hidden state first
        gsap.set(element, { opacity: 0, y: 50, scale: 0.8 });
        // Then reveal it
        revealText(element);
      },
      onLeave: () => {
        console.log('ScrollTrigger LEFT for element:', element.textContent?.substring(0, 20) + '...');
        // Hide element when leaving viewport
        gsap.set(element, { opacity: 0, y: 50, scale: 0.8 });
      },
      onEnterBack: () => {
        console.log('ScrollTrigger ENTER BACK for element:', element.textContent?.substring(0, 20) + '...');
        // Reset and reveal again when scrolling back up
        gsap.set(element, { opacity: 0, y: 50, scale: 0.8 });
        revealText(element);
      },
    });
    
    console.log('Created ScrollTrigger:', st, 'for element:', element.textContent?.substring(0, 20));
  });
};

// Setup section animations with ScrollTrigger
export const setupSectionAnimations = () => {
  const sections = gsap.utils.toArray(".section");
  console.log('Found sections:', sections.length);

  // Set initial state for all circle animations
  gsap.set(".circle-animation", { scale: 0, opacity: 0 });
  gsap.set(".educate-circle", { scale: 0, opacity: 0 });
  gsap.set(".develop-circle", { scale: 0, opacity: 0 });

  sections.forEach((section: any, index: number) => {
    console.log(`Section ${index}:`, section.className);
    
    // Immediately reveal text for the first section (hero)
    if (index === 0) {
      const revealElements = section.querySelectorAll(".reveal-text");
      console.log('Hero reveal elements:', revealElements.length);
      if (revealElements.length > 0) {
        revealText(Array.from(revealElements), 0.3);
      }
    } else {
      // Only handle circle animations for specific sections
      if (section.classList.contains("identify-section")) {
        ScrollTrigger.create({
          trigger: section,
          start: "top 85%",
          onEnter: () => {
            console.log('Playing identify circles');
            identifyCircles().play();
          },
          once: true,
        });
      }
      if (section.classList.contains("educate-section")) {
        ScrollTrigger.create({
          trigger: section,
          start: "top 85%",
          onEnter: () => {
            console.log('Playing educate circles');
            educateCircles().play();
          },
          once: true,
        });
      }
      if (section.classList.contains("develop-section")) {
        ScrollTrigger.create({
          trigger: section,
          start: "top 85%",
          onEnter: () => {
            console.log('Playing develop circles');
            developCircles().play();
          },
          once: true,
        });
      }
    }
  });
};

// Initialize all animations
export const initializeAnimations = () => {
  if (typeof window === "undefined") return;

  console.log('Starting animation setup...');
  
  // First, hide all reveal-text elements
  const allRevealText = document.querySelectorAll('.reveal-text');
  console.log('Found reveal-text elements:', allRevealText.length);
  
  if (allRevealText.length > 0) {
    gsap.set(allRevealText, { opacity: 0, y: 50, scale: 0.8 });
    console.log('Hidden all reveal-text elements');
  }

  // Setup section animations
  setupSectionAnimations();

  // Setup individual reveal text animations
  setupRevealTextAnimations();

  // Setup counter animations
  animateCounters();

  console.log('Animation setup complete');
  
  // Refresh ScrollTrigger on resize
  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });
};
