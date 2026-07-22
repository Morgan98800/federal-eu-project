/**
 * nav.js — Sticky header, active-section highlighting, mobile nav toggle
 *
 * Uses IntersectionObserver to highlight the current section in the nav.
 * Preserves focus rings — never removes outline for style reasons.
 */

export function initNav() {
  initMobileNav();
  initActiveSectionTracking();
  initDarkModeToggle();
}

/** Mobile hamburger toggle */
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.site-nav__list');
  if (!toggle || !navList) return;

  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'primary-nav');
  navList.id = 'primary-nav';

  toggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.textContent = isOpen ? '✕' : '☰';
  });

  // Close nav when a link is clicked
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    });
  });
}

/** Highlight active nav item based on current URL */
function initActiveSectionTracking() {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const navLinks = document.querySelectorAll('.site-nav__link');

  navLinks.forEach(link => {
    const href = new URL(link.href, window.location.origin).pathname.replace(/\/$/, '') || '/';
    if (href === currentPath || (currentPath === '/' && href === '/index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

/** Dark mode toggle — wired here so it's available globally */
function initDarkModeToggle() {
  const toggle = document.querySelector('.dark-toggle');
  if (!toggle) return;

  const current = document.documentElement.dataset.theme;
  toggle.textContent = current === 'dark' ? 'Light' : 'Dark';
  toggle.setAttribute('aria-pressed', current === 'dark' ? 'true' : 'false');

  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem('fve-theme', newTheme);
    toggle.textContent = newTheme === 'dark' ? 'Light' : 'Dark';
    toggle.setAttribute('aria-pressed', newTheme === 'dark' ? 'true' : 'false');
  });
}
