/**
 * dark-mode.js — Theme persistence
 *
 * Reads localStorage on page load and applies the saved theme before
 * first paint, preventing flash of wrong theme.
 * Place as an inline <script> in <head> — do not defer.
 */

(function () {
  const saved = localStorage.getItem('fve-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
})();
