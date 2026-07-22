/**
 * archive-pagination.js — Client-side pagination for the Archive timeline
 *
 * Hides/shows timeline-entry elements based on the current page.
 * State is tracked in the URL hash for linkability: #page=2
 *
 * Usage:
 *   initArchivePagination('.timeline-entry', 6);
 *   — Shows 6 entries per page, reads/writes #page=N in URL hash.
 */

export function initArchivePagination(selector = '.timeline-entry', perPage = 6) {
  const items = Array.from(document.querySelectorAll(selector));
  const paginationContainer = document.querySelector('.pagination');
  if (!items.length || !paginationContainer) return;

  const totalPages = Math.ceil(items.length / perPage);

  function getCurrentPage() {
    const hash = window.location.hash;
    const match = hash.match(/page=(\d+)/);
    const page = match ? parseInt(match[1], 10) : 1;
    return Math.max(1, Math.min(page, totalPages));
  }

  function render(page) {
    const start = (page - 1) * perPage;
    const end = start + perPage;

    items.forEach((item, i) => {
      item.hidden = i < start || i >= end;
    });

    renderPagination(page);

    // Scroll to top of timeline on page change
    const timeline = document.querySelector('.timeline');
    if (timeline && page > 1) {
      timeline.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function renderPagination(currentPage) {
    const prevDisabled = currentPage === 1;
    const nextDisabled = currentPage === totalPages;

    paginationContainer.innerHTML = `
      <button class="pagination__btn" id="pg-prev"
              aria-label="Previous page"
              ${prevDisabled ? 'disabled aria-disabled="true"' : ''}>
        &larr; Prev
      </button>
      <div class="pagination__pages" role="group" aria-label="Page navigation">
        ${Array.from({ length: totalPages }, (_, i) => {
          const p = i + 1;
          return `<button class="pagination__page${p === currentPage ? ' active' : ''}"
                          aria-label="Page ${p}"
                          aria-current="${p === currentPage ? 'page' : 'false'}"
                          data-page="${p}">${p}</button>`;
        }).join('')}
      </div>
      <button class="pagination__btn" id="pg-next"
              aria-label="Next page"
              ${nextDisabled ? 'disabled aria-disabled="true"' : ''}>
        Next &rarr;
      </button>
      <span class="pagination__info" aria-live="polite">
        Page ${currentPage} of ${totalPages}
      </span>
    `;

    // Wire page buttons
    paginationContainer.querySelectorAll('.pagination__page').forEach(btn => {
      btn.addEventListener('click', () => goTo(parseInt(btn.dataset.page, 10)));
    });

    const prevBtn = paginationContainer.querySelector('#pg-prev');
    const nextBtn = paginationContainer.querySelector('#pg-next');
    if (prevBtn) prevBtn.addEventListener('click', () => goTo(currentPage - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(currentPage + 1));
  }

  function goTo(page) {
    const clamped = Math.max(1, Math.min(page, totalPages));
    history.pushState(null, '', `#page=${clamped}`);
    render(clamped);
  }

  // Respond to browser back/forward
  window.addEventListener('popstate', () => render(getCurrentPage()));

  // Initial render
  render(getCurrentPage());
}
