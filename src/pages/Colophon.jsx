import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Colophon = () => {
  useEffect(() => {
    // We will initialize page-specific scripts here if needed
  }, []);

  return (
    <div className="colophon-page">
      

    <div className="page-masthead">
      <div className="container">
        <div className="page-masthead__overline js-reveal reveal-fast">Colophon</div>
        <h1 className="page-masthead__title js-reveal reveal-delay-1" id="colophon-title">
          About This Project
        </h1>
        <p className="page-masthead__deck js-reveal reveal-delay-2 ">
          A colophon documents the materials, methods, and provenance of a
          publication. What follows records how this site was built,
          what it uses, and what it does not claim to be.
        </p>
      </div>
    </div>

    <section className="section">
      <div className="container--narrow">

        {/*  */}
        <h2 className="js-reveal">The Project</h2>
        <p className="placeholder-banner">
          Operator to supply: whether this is a personal project or represents an organisation,
          any personal biography, headshot, or "About the author" copy.
          See BUILD_NOTES.md §3, §4.
        </p>
        <p className="js-reveal">
          {/*  */}
          This is an independent editorial project making the case for European federal
          union. It is not affiliated with, endorsed by, or funded by any EU institution,
          European Parliament political group, or member-state government.
        </p>

        {/*  */}
        <div className="placeholder-banner" style={{ marginBlock: 'var(--space-8)' }}>
          [PLACEHOLDER — operator name, credentials, and biography.
          If the operator wishes to attach their name to this project,
          supply text for this section. If the project is anonymous or institutional,
          this section should be removed or replaced with an organisational description.]
        </div>

        <hr />

        {/*  */}
        <h2 className="js-reveal">Methodology</h2>
        <h3 className="js-reveal">Citations</h3>
        <p className="js-reveal">
          Every factual claim on this site that is supported by a published source
          carries a superscript numeral linking to a citation popover.
          Citation popovers include author, title, year, publisher, and a link
          to the source. The full bibliography is available on the
          <a href="/sources.html">Sources</a> page.
        </p>
        <p className="js-reveal">
          Where a statistic or claim could not be traced to a verifiable published
          source, it has been removed from the text and replaced with a
          <code>[NEEDS SOURCE]</code> comment in the source code, visible to
          any reader inspecting the markup.
        </p>

        <h3 className="js-reveal" id="integration-index-methodology">Integration Index Methodology</h3>
        <p className="js-reveal">
          The <strong>European Integration Index</strong> presented in the Data Room is a composite score
          synthesising four distinct axes of integration: Public Support (via Eurobarometer), Fiscal Capacity
          (as a percentage of EU GNI), Defence Pooling (shared procurement metrics), and Democratic Competence.
          Each sub-indicator is normalised to a 0–100 scale based on historical baselines (2006 = baseline)
          and hypothetical maximums.
        </p>
        <p className="js-reveal">
          The <em>Composite Average</em> is an unweighted mean of the available sub-indicators for a given year.
          This model is illustrative, intended to demonstrate the multidimensional nature of European federalism.
          Data sources and detailed methodology for each indicator are available directly in the Data Room chart.
        </p>

        <h3 className="js-reveal">Geodata</h3>
        <p className="js-reveal">
          Country boundary data for all maps is sourced from
          <a href="https://www.naturalearthdata.com/" target="_blank" rel="noopener">
            Natural Earth
          </a> (110m resolution), a public domain dataset maintained by a team of
          volunteer cartographers. Natural Earth data requires no attribution,
          but is credited here for completeness.
        </p>
        <p className="js-reveal">
          Maps use a D3.js implementation of Azimuthal Equal Area projection,
          approximating the
          <abbr title="European Terrestrial Reference System 1989 / Lambert Azimuthal Equal Area">
            ETRS89-LAEA (EPSG:3035)
          </abbr>
          standard projection used in official European statistical cartography.
          This projection preserves area relationships, making it appropriate
          for displaying statistical data across member states of different sizes.
        </p>
        <p className="js-reveal">
          The NUTS (Nomenclature of Territorial Units for Statistics) regional
          boundary data used in the Data Room, where applicable, is sourced from
          <a href="https://gisco-services.ec.europa.eu/distribution/v2/"
             target="_blank" rel="noopener">
            Eurostat GISCO
          </a>.
          GISCO administrative boundary data carries a
          <strong>EuroGeographics copyright notice requirement</strong>:
          <em>
            "© EuroGeographics for the administrative boundaries."
          </em>
        </p>

        <hr />

        {/*  */}
        <h2 className="js-reveal">Visual Identity</h2>

        <h3 className="js-reveal">Typefaces</h3>
        <p className="js-reveal">
          This site uses three open-license typefaces, served via Google Fonts:
        </p>
        <table className="data-table" aria-label="Typefaces used on this site">
          <thead>
            <tr>
              <th>Role</th>
              <th>Typeface</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Display / headlines</td>
              <td style={{ fontFamily: ''Source Serif 4', serif' }}>Source Serif 4</td>
              <td>Google Fonts / Adobe (open license)</td>
            </tr>
            <tr>
              <td>Body &amp; UI</td>
              <td>Public Sans</td>
              <td>IBM / Google Fonts (open license)</td>
            </tr>
            <tr>
              <td>Data, footnote numerals, dates</td>
              <td style={{ fontFamily: ''IBM Plex Mono', monospace' }}>IBM Plex Mono</td>
              <td>IBM / Google Fonts (open license)</td>
            </tr>
          </tbody>
        </table>

        <h3 className="js-reveal">Colour Palette</h3>
        <p className="js-reveal">
          The palette is a deliberately desaturated and archival descendant of the EU
          flag's official colours — it is designed to read as EU-coded to an informed
          eye without being mistakable for an official EU communication.
          The official EU flag colours (Pantone Reflex Blue = <code>#003399</code>;
          Pantone Yellow = <code>#FFCC00</code>) are not used anywhere on this site.
        </p>
        <table className="data-table" aria-label="Colour palette">
          <thead>
            <tr>
              <th>Token</th>
              <th>Hex</th>
              <th>Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--ink-navy</code></td>
              <td><code style={{ color: '#0B1F3A' }}>#0B1F3A</code></td>
              <td>Body text, headers, rules</td>
            </tr>
            <tr>
              <td><code>--accent-bronze</code></td>
              <td><code style={{ color: '#B9942F' }}>#B9942F</code></td>
              <td>Section marks, citation numerals, single stat</td>
            </tr>
            <tr>
              <td><code>--paper</code></td>
              <td><code>#F6F3EA</code></td>
              <td>Page background (warm archive-paper tone)</td>
            </tr>
            <tr>
              <td><code>--paper-dark</code></td>
              <td><code>#111417</code></td>
              <td>Dark-mode background</td>
            </tr>
            <tr>
              <td><code>--signal-red</code></td>
              <td><code style={{ color: '#8C2C33' }}>#8C2C33</code></td>
              <td>External-link marker (used sparingly)</td>
            </tr>
            <tr>
              <td><code>--rule-grey</code></td>
              <td><code>#C9C2B2</code></td>
              <td>Hairlines, table borders</td>
            </tr>
          </tbody>
        </table>

        <h3 className="js-reveal">Note on EU Emblem Usage</h3>
        <p className="js-reveal">
          The EU emblem and flag are protected symbols. The European Commission's
          emblem-usage guidance is explicit that unaffiliated parties may not present
          material in a way that implies official EU endorsement.
          This site is an independent editorial project, not an EU institution.
          The EU emblem is not reproduced anywhere on this site,
          and the official EU flag colours
          (<code>#003399</code> / <code>#FFCC00</code>) are not used as UI colours.
        </p>

        <hr />

        {/*  */}
        <h2 className="js-reveal">Technology</h2>
        <p className="js-reveal">
          This site is a plain semantic HTML/CSS/JavaScript multi-page static site.
          It uses no React, no Angular, no Vue, no server-side rendering,
          and no JavaScript framework. JavaScript is used only for:
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
          <li>Citation popovers (keyboard-accessible)</li>
          <li>D3-based SVG maps and charts</li>
          <li>Dark-mode persistence</li>
          <li>Archive pagination (URL-hash based, linkable)</li>
          <li>Accordion animation (native <code>&lt;details&gt;</code> element with smooth JS animation)</li>
        </ul>
        <p className="js-reveal">
          All pages function with JavaScript disabled, with the exception of maps and
          charts (which display a plain-text fallback via <code>&lt;noscript&gt;</code>).
        </p>
        <p className="js-reveal">
          Development tooling: <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a>
          (bundler/dev server). Data visualisations: <a href="https://d3js.org/" target="_blank" rel="noopener">D3.js</a> v7.
          Map data: <a href="https://github.com/topojson/topojson-client" target="_blank" rel="noopener">TopoJSON client</a>.
          The site is built and deployed as a static file set — no database, no CMS, no server-side logic.
        </p>

        <hr />

        {/*  */}
        <h2 className="js-reveal">Analytics &amp; Cookies</h2>
        <p className="placeholder-banner">
          Operator to confirm analytics preference (Google Analytics, Plausible, Matomo,
          or none) and whether a GDPR cookie-consent banner is required.
          See BUILD_NOTES.md §5.
        </p>
        <p className="js-reveal">
          {/*  */}
          This site currently carries no analytics or tracking cookies.
          If analytics are added, this page will be updated and a cookie-consent
          notice will be displayed on first visit, consistent with GDPR requirements
          applicable to visitors from EU member states.
        </p>

        <hr />

        {/*  */}
        <h2 className="js-reveal">Contact</h2>
        <p className="placeholder-banner">
          Operator to supply contact details and/or social links. See BUILD_NOTES.md §6.
        </p>
        <p className="js-reveal">
          {/*  */}
          To respond to the argument made on this site, or to flag a factual error
          or citation problem:
          <a href="mailto:[CONTACT EMAIL — operator to supply]">
            [CONTACT EMAIL]
          </a>
        </p>
        <p className="js-reveal">
          Corrections are welcome. This site treats a note from a reader pointing
          out a factual error as a contribution to the project, not an attack on it.
          Corrections, once verified, will be noted inline with a datestamp.
        </p>

        <hr />

        {/*  */}
        <p className="placeholder-banner">
          Operator to supply: domain name, hosting target, deployment method.
          See BUILD_NOTES.md §7.
        </p>

        {/*  */}
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginTop: 'var(--space-8)' }}>
          Site built: <time datetime="2024">2024</time>.
          Source code managed in a private Git repository.
          Data files versioned in Markdown/JSON — git history constitutes provenance.
        </p>

      </div>{/*  */}
    </section>

  
    </div>
  );
};

export default Colophon;
