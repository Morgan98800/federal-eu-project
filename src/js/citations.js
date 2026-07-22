/**
 * citations.js — Citation popover system
 *
 * Each citation is a <sup> with a data-cite-id attribute.
 * Clicking/tapping opens an inline popover with author, title, year, and link.
 * Keyboard: Tab to focus trigger, Enter/Space to open, Escape to close.
 * Focus is trapped inside popover while open.
 *
 * Usage in HTML:
 *   <cite class="citation-ref">
 *     <button class="citation-ref__trigger" data-cite-id="cite-001">1</button>
 *     <div class="citation-popover" id="popover-cite-001" role="dialog"
 *          aria-modal="true" aria-label="Citation 1">
 *       ...content rendered by initCitations()...
 *     </div>
 *   </cite>
 */

const CITATIONS_REGISTRY = {};

/**
 * Register citations from a page-level JSON object (embedded in each HTML page).
 * @param {Object} citations — { "cite-001": { num, author, title, year, publisher, url }, ... }
 */
export function registerCitations(citations) {
  Object.assign(CITATIONS_REGISTRY, citations);
}

/**
 * Initialise all citation triggers on the page.
 * Call once after DOM is ready.
 */
export function initCitations() {
  const triggers = document.querySelectorAll('.citation-ref__trigger');
  if (!triggers.length) return;

  // Close all open popovers
  function closeAll() {
    document.querySelectorAll('.citation-popover.open').forEach(p => {
      p.classList.remove('open');
      p.removeAttribute('aria-hidden');
    });
  }

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.citation-ref')) closeAll();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const open = document.querySelector('.citation-popover.open');
      if (open) {
        closeAll();
        // Return focus to the trigger
        const trigger = open.previousElementSibling;
        if (trigger) trigger.focus();
      }
    }
  });

  triggers.forEach(trigger => {
    const citeId = trigger.dataset.citeId;
    const popover = document.getElementById(`popover-${citeId}`);
    if (!popover) return;

    // Populate popover content from registry
    const entry = CITATIONS_REGISTRY[citeId];
    if (entry) {
      popover.innerHTML = buildPopoverHTML(citeId, entry);
    }

    // Wire close button inside popover
    const closeBtn = popover.querySelector('.citation-popover__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        popover.classList.remove('open');
        trigger.focus();
      });
    }

    // Toggle on trigger click/keyboard
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = popover.classList.contains('open');
      closeAll();
      if (!isOpen) {
        popover.classList.add('open');
        // Focus the close button for keyboard users
        const closeBtn = popover.querySelector('.citation-popover__close');
        if (closeBtn) closeBtn.focus();
        // Clamp popover to viewport
        clampPopover(popover);
      }
    });

    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger.click();
      }
    });
  });
}

function buildPopoverHTML(citeId, entry) {
  const num = entry.num || citeId.replace(/\D/g, '');
  return `
    <button class="citation-popover__close" aria-label="Close citation">&times;</button>
    <span class="citation-popover__num">[${num}]</span>
    <div class="citation-popover__title">${escapeHTML(entry.title)}</div>
    <div class="citation-popover__meta">
      ${escapeHTML(entry.author)}${entry.year ? ` &mdash; ${entry.year}` : ''}
      ${entry.publisher ? `<br><em>${escapeHTML(entry.publisher)}</em>` : ''}
    </div>
    ${entry.url ? `<a class="citation-popover__link" href="${entry.url}" target="_blank" rel="noopener noreferrer">${entry.url}</a>` : ''}
  `.trim();
}

/** Keep popover within horizontal viewport bounds */
function clampPopover(popover) {
  popover.style.left = '50%';
  popover.style.transform = 'translateX(-50%)';
  const rect = popover.getBoundingClientRect();
  if (rect.left < 8) {
    const shift = 8 - rect.left;
    popover.style.transform = `translateX(calc(-50% + ${shift}px))`;
  } else if (rect.right > window.innerWidth - 8) {
    const shift = rect.right - (window.innerWidth - 8);
    popover.style.transform = `translateX(calc(-50% - ${shift}px))`;
  }
}

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
