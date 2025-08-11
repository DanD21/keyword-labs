"use client";

// Simple animation system using Intersection Observer
export const initializeSimpleAnimations = () => {
  if (typeof window === "undefined") return;

  console.log('Initializing simple animations...');

  // Create intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animate class when element comes into view
          entry.target.classList.add('animate');
          console.log('Animating element:', entry.target.textContent?.substring(0, 20) + '...');
        } else {
          // Remove animate class when element leaves view (optional)
          entry.target.classList.remove('animate');
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: '0px 0px -10% 0px' // Trigger slightly before element fully enters viewport
    }
  );

  // Find all reveal-text elements and observe them
  const revealElements = document.querySelectorAll('.reveal-text');
  console.log('Found reveal-text elements:', revealElements.length);

  revealElements.forEach((element, index) => {
    // Skip hero section - animate it immediately
    const isHeroElement = element.closest('.hero-section');
    if (isHeroElement) {
      element.classList.add('animate');
      console.log('Immediately animated hero element');
      return;
    }

    // Observe non-hero elements
    observer.observe(element);
    console.log(`Observing element ${index}:`, element.textContent?.substring(0, 30) + '...');
  });

  // Animate counters (simple version)
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target as HTMLElement;
          const target = parseInt(counter.getAttribute('data-target') || '0');
          
          // Simple counter animation
          let current = 0;
          const increment = target / 50; // 50 steps
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            counter.textContent = Math.floor(current).toString();
          }, 40); // Update every 40ms
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });

  // Animate circles
  const circles = document.querySelectorAll('.circle-animation, .circle-outer, .circle-inner, .educate-circle, .develop-circle');
  const circleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.closest('.section');
          
          // Handle different circle types
          if (section?.classList.contains('identify-section')) {
            // Animate identify circles (concentric)
            const identifyCircles = section.querySelectorAll('.circle-animation, .circle-outer, .circle-inner');
            identifyCircles.forEach((circle, index) => {
              setTimeout(() => {
                circle.classList.add('animate');
              }, index * 200); // Stagger by 200ms
            });
            console.log('Animating identify circles');
          } else if (section?.classList.contains('educate-section')) {
            // Animate educate circles (row of 5)
            const educateCircles = section.querySelectorAll('.educate-circle');
            educateCircles.forEach((circle, index) => {
              (circle as HTMLElement).style.setProperty('--delay', index.toString());
              circle.classList.add('animate');
            });
            console.log('Animating educate circles');
          } else if (section?.classList.contains('develop-section')) {
            // Animate develop circles (cluster of 6)
            const developCircles = section.querySelectorAll('.develop-circle');
            developCircles.forEach((circle, index) => {
              (circle as HTMLElement).style.setProperty('--delay', index.toString());
              circle.classList.add('animate');
            });
            console.log('Animating develop circles');
          }
        } else {
          // Remove animations when leaving viewport
          const section = entry.target.closest('.section');
          const allCircles = section?.querySelectorAll('.circle-animation, .circle-outer, .circle-inner, .educate-circle, .develop-circle');
          allCircles?.forEach(circle => {
            circle.classList.remove('animate');
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  // Observe circle sections
  const circleSections = document.querySelectorAll('.identify-section, .educate-section, .develop-section');
  circleSections.forEach(section => {
    circleObserver.observe(section);
    console.log('Observing circle section:', section.className);
  });

  console.log('Simple animations initialized');
};
