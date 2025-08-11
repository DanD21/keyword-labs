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
  
  // Animate from hidden to visible state
  gsap.fromTo(elements,
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: delay,
      stagger: 0.2,
    }
  );
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

// Setup section animations with ScrollTrigger
export const setupSectionAnimations = () => {
  const sections = gsap.utils.toArray(".section");

  sections.forEach((section: any, index: number) => {
    // Immediately reveal text for the first section (hero)
    if (index === 0) {
      const revealElements = section.querySelectorAll(".reveal-text");
      if (revealElements.length > 0) {
        revealText(Array.from(revealElements), 0.3);
      }
    } else {
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          // Trigger section-specific animations
          if (section.classList.contains("identify-section")) {
            identifyCircles().play();
          }
          if (section.classList.contains("educate-section")) {
            educateCircles().play();
          }
          if (section.classList.contains("develop-section")) {
            developCircles().play();
          }

          // Text reveal for all sections
          const revealElements = section.querySelectorAll(".reveal-text");
          if (revealElements.length > 0) {
            revealText(Array.from(revealElements));
          }
        },
        once: true, // Only trigger once
      });
    }
  });
};

// Initialize all animations
export const initializeAnimations = () => {
  if (typeof window === "undefined") return;

  // Setup section animations
  setupSectionAnimations();

  // Setup counter animations
  animateCounters();

  // Refresh ScrollTrigger on resize
  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });
};