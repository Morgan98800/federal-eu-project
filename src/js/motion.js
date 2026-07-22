/**
 * motion.js — Scroll-triggered animation observer
 * 
 * Watches for elements with the .js-reveal class and adds the .revealed
 * class when they enter the viewport.
 */

export function initMotionObserver() {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const revealElements = document.querySelectorAll('.js-reveal');
  
  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -5% 0px', // Trigger slightly before it hits the bottom
    threshold: 0.1 // 10% of the element must be visible
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Unobserve to run animation only once
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
}
