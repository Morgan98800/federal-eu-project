# BUILD NOTES — Federal Vision for Europe

## Outstanding Operator-Supplied Items

The following items are marked `[PLACEHOLDER]` in the site source code.
**Do not ship the site publicly until these have been resolved.**
Each item in the code is tagged so it can be found with a repo-wide search for `[PLACEHOLDER`.

---

### §1 — Site title, tagline, domain name

- **File(s):** All HTML files (`<title>`, `<meta name="description">`, `<meta property="og:*">`, `<link rel="canonical">`, `.site-header__wordmark`, `.site-footer__wordmark`)
- **Required:** Final site title (replacing `[SITE TITLE]`), tagline/meta description, domain name (replacing `[DOMAIN]`).
- **Current placeholder:** `Federal Vision` (header wordmark), `A Federal Vision for Europe` (page title).

---

### §2 — "The Case" essay text

- **File:** `the-case.html`
- **Required:** The operator's own political argument in full — the opening paragraph, and the body text of all four sections (Historical, Economic, Democratic, Security) and the Objections & Responses subsection.
- **What exists now:** Structural scaffolding with headings, real historical citations, and a small amount of factual framing. Every `[PLACEHOLDER — operator essay text]` block is visually flagged by a `<p class="placeholder-banner">` element.
- **Note:** The historical citations, hover-card definitions, and inline citations are real and can be retained. The argumentative text — the operator's own thesis — must be supplied.

---

### §3 — Operator biography / About the author

- **File:** `colophon.html`
- **Required:** Whether this is a personal project or represents an organisation; if personal, the author's name, credentials, and a short biography; if organisational, the organisation's description.
- **Impact on legal disclaimer:** The legal note on EU emblem non-use (already present) may need adjustment depending on whether this is individual or institutional.

---

### §4 — Photography

- **Files:** All pages (currently no photography used anywhere)
- **Current approach:** All visuals are typography, maps, or SVG charts. This is a valid and intentional approach per the brief.
- **Recommendation:** If the operator has archival or documentary-style photography, it can be added to the masthead or Archive section. Avoid stock photography (see brief §4.3). If no photography is supplied, the current typography-led approach should be retained.

---

### §5 — Analytics / cookie consent

- **File:** `colophon.html` (placeholder comment), all HTML files (no analytics wired)
- **Required:** Operator to choose: Google Analytics 4 / Plausible / Matomo / none.
- **GDPR note:** Given the EU subject matter and likely EU visitor base, any analytics setup requires a GDPR-compliant cookie-consent mechanism. A banner scaffold can be added once the operator confirms their choice.
- **Current state:** No analytics, no cookies, no consent banner. The Colophon states this clearly.

---

### §6 — Contact details / social links

- **File:** `colophon.html`
- **Required:** An email address (replacing `[CONTACT EMAIL]`) and/or social media links.
- **Recommendation per brief:** Comments/reply mechanisms are not recommended; a "cite/respond" approach (email + a note that corrections are welcome) fits the register better.

---

### §7 — Hosting / deployment target

- **Required:** Where the site will be deployed (Netlify, Vercel, GitHub Pages, self-hosted, etc.) and whether a custom domain is being configured.
- **Build command:** `npm run build`
- **Output directory:** `dist/`
- **Dev server:** `npm run dev` (serves on `http://localhost:5173`)

---

### §8 — Wordmark / logo

- **Files:** All HTML files (`.site-header__wordmark`, `.site-footer__wordmark`)
- **Current:** Typographic-only mark — the word "Federal Vision" set in Source Serif 4. This is the recommended approach per the brief.
- **If a custom logo SVG is supplied:** Replace the text content of `.site-header__wordmark` with an `<img>` or inline SVG, with appropriate `alt` text.

---

### §9 — Language(s)

- **Current:** English only.
- **Required:** Operator to confirm whether EN-only is final, or whether EN/FR/DE localisation is wanted.
- **If multilingual:** A language-switching mechanism and translated content will need to be added. The `lang="en"` attribute on `<html>` will need updating per page/language.

---

### §10 — Additional Archive entries

- **File:** `archive.html`, `src/data/archive.json`
- **Current entries:** 8 real, documented events (1941–2022).
- **Operator can add:** Additional entries with a `{ id, year, date, title, body, primarySourceUrl, primarySourceLabel, citations[] }` object in `archive.json`. The JS pagination will automatically accommodate new entries.

---

### §11 — Specific Data Room datasets

- **File:** `data-room.html`, `src/data/gdp.json`, `src/data/eurobarometer.json`
- **Current:** Defaults to Eurobarometer 101 (2024) and Eurostat GDP 2022 data.
- **Operator can redirect:** To any specific Eurostat/Eurobarometer release they want foregrounded.
- **[NEEDS SOURCE] items:** The GDP-per-capita data used in the choropleth map (Chart 4) uses approximate PPS figures — these should be replaced with exact figures extracted from Eurostat `nama_10_pc` before publication.

---

## Finding All Placeholders

Run this from the project root to list every placeholder in the source:

```bash
grep -rn "PLACEHOLDER\|NEEDS SOURCE\|DOMAIN\|CONTACT EMAIL\|OPERATOR NAME\|SITE TITLE" \
  --include="*.html" --include="*.js" --include="*.json" .
```

---

## Verification Checklist (§10 of brief)

Before launch:
- [ ] Every statistic has a working citation link
- [ ] Map uses Natural Earth data in EPSG:3035-approximate projection with attribution
- [ ] Palette uses only the six tokens from §4.1 — `#003399` and `#FFCC00` absent from all CSS
- [ ] Exactly six top-level nav items (Home, The Case, Archive, Data Room, Sources, Colophon)
- [ ] No item from §4.3 ban list present (no gradients, no glassmorphism, no emoji icons, no carousels, no pill buttons, no 3D hover)
- [ ] All `[PLACEHOLDER]` items above resolved or explicitly flagged as outstanding
- [ ] `npm run build` completes without errors
- [ ] WCAG AA contrast checked for all text/background pairs
- [ ] Citation popovers keyboard-accessible (Tab, Enter/Space open, Escape closes)
- [ ] Dark mode persists across page navigation
- [ ] All `[NEEDS SOURCE]` comments reviewed and either sourced or removed
