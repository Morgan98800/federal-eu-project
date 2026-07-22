/**
 * accordion.js — Disclosure / accordion component
 *
 * Uses native <details>/<summary> for zero-JS fallback.
 * JS smooths the open/close animation.
 *
 * Usage:
 *   <div class="accordion">
 *     <details class="accordion-item">
 *       <summary class="accordion-item__trigger">Question</summary>
 *       <div class="accordion-item__body">Content</div>
 *     </details>
 *   </div>
 */

export function initAccordions() {
  const accordions = document.querySelectorAll('.accordion');
  if (!accordions.length) return;

  accordions.forEach(accordion => {
    const items = accordion.querySelectorAll('details.accordion-item');

    items.forEach(details => {
      const summary = details.querySelector('summary');
      const body = details.querySelector('.accordion-item__body');
      if (!summary || !body) return;

      // Measure the content height for smooth animation
      details.addEventListener('toggle', () => {
        if (details.open) {
          // Animate open
          body.style.maxHeight = '0';
          body.style.overflow = 'hidden';
          requestAnimationFrame(() => {
            body.style.transition = 'max-height 240ms ease';
            body.style.maxHeight = body.scrollHeight + 'px';
          });
        } else {
          // Animate close
          body.style.maxHeight = body.scrollHeight + 'px';
          requestAnimationFrame(() => {
            body.style.transition = 'max-height 200ms ease';
            body.style.maxHeight = '0';
          });
        }
      });

      // Cleanup transition after animation
      body.addEventListener('transitionend', () => {
        if (details.open) {
          body.style.maxHeight = 'none';
          body.style.overflow = '';
        }
      });
    });
  });
}
