/**
 * cite-export.js — "Cite this page" + BibTeX/RIS export
 *
 * Reuses src/data/sources.json as the single source of truth.
 *
 * Page citation:
 *   - Renders a "Cite this page" button on any page that includes it
 *   - Outputs APA and Chicago strings for the current page
 *
 * Bibliography export (Sources page only):
 *   - BibTeX export of all entries in sources.json
 *   - RIS export of all entries in sources.json
 *
 * Usage:
 *   import { initCiteThis, initBibliographyExport } from './cite-export.js';
 *   initCiteThis('#cite-this-container', { title, url, year, author });
 *   initBibliographyExport('#export-container', sourcesData);
 */

/**
 * Render a "Cite this page" panel.
 * @param {string} containerSelector
 * @param {object} meta — { title, url, year, author, siteName }
 */
export function initCiteThis(containerSelector, meta) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const { title, url, year, author, siteName = 'Federal Vision for Europe' } = meta;
  const dateAccessed = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  const apa = `${author || '[SITE TITLE]'}. (${year}). *${title}*. ${siteName}. Retrieved ${dateAccessed}, from ${url}`;
  const chicago = `${author || '[SITE TITLE]'}. "${title}." *${siteName}*. ${year}. Accessed ${dateAccessed}. ${url}.`;

  container.innerHTML = `
    <div class="cite-export" id="cite-panel">
      <button class="cite-toggle" id="cite-toggle-btn"
              aria-expanded="false" aria-controls="cite-content">
        Cite this page
      </button>
      <div class="cite-content" id="cite-content" hidden>
        <div class="cite-format">
          <span class="cite-format__label">APA</span>
          <pre class="cite-format__text" id="cite-apa">${escapeHTML(apa)}</pre>
          <button class="cite-copy-btn" data-target="cite-apa" aria-label="Copy APA citation">
            Copy
          </button>
        </div>
        <div class="cite-format">
          <span class="cite-format__label">Chicago</span>
          <pre class="cite-format__text" id="cite-chicago">${escapeHTML(chicago)}</pre>
          <button class="cite-copy-btn" data-target="cite-chicago" aria-label="Copy Chicago citation">
            Copy
          </button>
        </div>
      </div>
    </div>
  `;

  const toggle  = container.querySelector('#cite-toggle-btn');
  const content = container.querySelector('#cite-content');

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    content.hidden = isOpen;
  });

  container.querySelectorAll('.cite-copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(`#${btn.dataset.target}`);
      if (!target) return;
      navigator.clipboard.writeText(target.textContent.trim()).then(() => {
        btn.textContent = 'Copied';
        btn.disabled = true;
        setTimeout(() => { btn.textContent = 'Copy'; btn.disabled = false; }, 2000);
      }).catch(() => {
        // Fallback: select text
        const range = document.createRange();
        range.selectNodeContents(target);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
      });
    });
  });
}

/**
 * Render BibTeX and RIS export buttons for the full bibliography.
 * @param {string} containerSelector
 * @param {Array}  sourcesData — parsed src/data/sources.json array
 */
export function initBibliographyExport(containerSelector, sourcesData) {
  const container = document.querySelector(containerSelector);
  if (!container || !sourcesData?.length) return;

  container.innerHTML = `
    <div class="bib-export">
      <span style="font-family:'IBM Plex Mono',monospace;font-size:12px;color:var(--text-secondary);">
        Export bibliography:
      </span>
      <button class="bib-export-btn" id="export-bibtex">BibTeX (.bib)</button>
      <button class="bib-export-btn" id="export-ris">RIS (.ris)</button>
    </div>
  `;

  document.querySelector('#export-bibtex').addEventListener('click', () => {
    downloadText(generateBibTeX(sourcesData), 'federal-vision-sources.bib', 'text/plain');
  });

  document.querySelector('#export-ris').addEventListener('click', () => {
    downloadText(generateRIS(sourcesData), 'federal-vision-sources.ris', 'text/plain');
  });
}

/**
 * Wire a button to download a JSON array as CSV, optionally with a citation header.
 * @param {string} buttonSelector
 * @param {Array} dataArray
 * @param {string} filename
 * @param {object} sourceMeta
 */
export function initCSVExport(buttonSelector, dataArray, filename, sourceMeta) {
  const btn = document.querySelector(buttonSelector);
  if (!btn || !dataArray?.length) return;
  
  btn.addEventListener('click', () => {
    const keys = Object.keys(dataArray[0]).filter(k => typeof dataArray[0][k] !== 'object');
    const headerRow = keys.join(',');
    const rows = dataArray.map(obj => keys.map(k => `"${String(obj[k] ?? '').replace(/"/g, '""')}"`).join(','));
    
    let csv = '';
    if (sourceMeta) {
      csv += `"# Dataset: ${sourceMeta.title || ''}"\n`;
      csv += `"# Publisher: ${sourceMeta.publisher || ''}"\n`;
      csv += `"# Year: ${sourceMeta.year || ''}"\n`;
      csv += `"# URL: ${sourceMeta.url || ''}"\n\n`;
    }
    csv += headerRow + '\n' + rows.join('\n');
    downloadText(csv, filename, 'text/csv');
  });
}

// ============================================================
// GENERATORS
// ============================================================

function generateBibTeX(sources) {
  return sources.map(s => {
    const key = slugify(`${s.author?.split(' ')[0] || 'anon'}${s.year || '0000'}`);
    const type = s.type === 'scholarly' ? '@book' : s.type === 'journal' ? '@article' : '@misc';
    const authorField = s.author ? `  author    = {${s.author}},\n` : '';
    const urlField    = s.url    ? `  url       = {${s.url}},\n` : '';
    const noteField   = s.notes  ? `  note      = {${s.notes}},\n` : '';
    return `${type}{${key},
${authorField}  title     = {${s.title || ''}},
  year      = {${s.year || ''}},
  publisher = {${s.publisher || ''}},
${urlField}${noteField}}`;
  }).join('\n\n');
}

function generateRIS(sources) {
  const TYPE_MAP = { scholarly: 'BOOK', treaty: 'LEGAL', data: 'DATA', policy: 'RPRT', journal: 'JOUR', primary: 'HIST' };
  return sources.map(s => {
    const lines = [
      `TY  - ${TYPE_MAP[s.type] || 'GEN'}`,
      s.author  ? `AU  - ${s.author}`  : null,
      s.title   ? `TI  - ${s.title}`   : null,
      s.year    ? `PY  - ${s.year}`    : null,
      s.publisher ? `PB  - ${s.publisher}` : null,
      s.url     ? `UR  - ${s.url}`     : null,
      `ER  -`
    ].filter(Boolean);
    return lines.join('\n');
  }).join('\n\n');
}

// ============================================================
// UTILITIES
// ============================================================

function downloadText(content, filename, mime) {
  const blob = new Blob([content], { type: mime });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 20);
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
