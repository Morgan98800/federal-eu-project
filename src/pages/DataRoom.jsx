import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DataRoom = () => {
  useEffect(() => {
    // We will initialize page-specific scripts here if needed
  }, []);

  return (
    <div className="data-room-page">
      

    {/*  */}
    <div className="page-masthead page-masthead--slim">
      <div className="container">
        <div className="page-masthead__overline js-reveal reveal-fast">Data Room</div>
        <h1 className="page-masthead__title js-reveal reveal-delay-1" id="data-room-title">The Data Room</h1>
        <p className="page-masthead__deck js-reveal reveal-delay-2 " style={{ marginTop: 'var(--space-6)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-secondary)', maxWidth: '68ch' }}>
          The arguments for a federal Europe are measurable. This dashboard tracks the quantifiable limits of intergovernmentalism and the public mandate for integration.
        </p>
        <ul style={{ marginTop: 'var(--space-6)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-secondary)', maxWidth: '68ch', paddingLeft: 'var(--space-4)' }}>
          <li style={{ marginBottom: 'var(--space-2)' }}><strong>Indicator 1: Public Mandate (Eurobarometer Data)</strong><br />Tracking the steady rise in citizens favoring a common European defence and security policy, alongside support for further political unification. Current data shows over 60% of citizens support further political union.</li>
          <li style={{ marginBottom: 'var(--space-2)' }}><strong>Indicator 2: Macroeconomic Fragmentation (Eurostat)</strong><br />A visualization of capital flow bottlenecks and the lack of a unified European safe asset. It compares the fragmented sovereign debt markets of the EU-27 against the unified US Treasury market to illustrate the cost of non-Europe.</li>
          <li style={{ marginBottom: 'var(--space-2)' }}><strong>Indicator 3: Defence Inefficiencies (EDA)</strong><br />Mapping the overlapping procurement programs and distinct weapons systems across member states. This highlights the billions lost annually to duplicated research and development due to the absence of a federal military structure.</li>
        </ul>
        <nav aria-label="Data Room sections" style={{ marginTop: 'var(--space-8)' }}>
          <ol style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', listStyle: 'none', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>
            <li><a href="#integration-index">I. Integration Index</a></li>
            <li><a href="#toggle-map">II. 27 States vs. One Bloc</a></li>
            <li><a href="#competence-matrix">III. Competence Matrix</a></li>
            <li><a href="#scenario-sliders">IV. Scenario Sliders</a></li>
            <li><a href="#primary-sources">V. Primary Sources</a></li>
          </ol>
        </nav>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginTop: 'var(--space-4)' }}>
          <mark className="illustrative-label">illustrative</mark> badges mark all non-sourced, user-adjustable, or qualitatively-scored figures. Every other figure links to its dataset and vintage.
        </p>
      </div>
    </div>

    {/*  */}
    <section className="section" id="integration-index" aria-labelledby="index-heading">
      <div className="container">
        <span className="section-label">01</span>
        <h2 className="js-reveal" id="index-heading" style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-2)' }}>
          European Integration Index, 2006–2023
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '66ch', marginBottom: 'var(--space-6)' }}>
          A composite of four sub-indicators — public support (Eurobarometer), defence collaboration (EDA), fiscal capacity relative to a federal reference (Eurostat / US OMB), and a qualitative competence score. The composite is their arithmetic mean. Hover the chart to inspect individual years.
        </p>

        <figure className="chart-figure js-reveal" aria-labelledby="index-fig-caption">
          <div className="integration-index-wrapper" id="index-chart-wrapper" style={{ minHeight: '420px' }}>
            <noscript>
              <p style={{ padding: '2rem', color: 'var(--text-secondary)' }}>A line chart showing the European Integration Index from 2006 to 2023, with four sub-indicators and a composite line. JavaScript is required.</p>
            </noscript>
          </div>
          <div className="index-legend" id="index-legend"></div>
          <a className="index-methodology-link" to="/">
            Methodology note: how sub-indicators are defined, scored, and combined →
          </a>
          <figcaption id="index-fig-caption" style={{ marginTop: 'var(--space-4)' }}>
            <button className="csv-download-btn" id="dl-csv-index" style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', background: 'none', border: 'var(--border-hairline)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', marginBottom: 'var(--space-3)' }}>Download data (CSV)</button>
            <br />
            <strong>Sources by sub-indicator:</strong>
            (A) Standard Eurobarometer surveys, European Commission.
            <a href="https://europa.eu/eurobarometer/surveys/browse/all/series/4506" target="_blank" rel="noopener">Eurobarometer archive</a>.
            (B) EDA Defence Data Portal and Annual Reports.
            <a href="https://eda.europa.eu/publications-and-data/defence-data" target="_blank" rel="noopener">eda.europa.eu</a>.
            (C) EU budget: European Commission.
            US reference: US OMB Historical Tables, Table 1.1.
            (D) <mark className="illustrative-label">qualitative — see methodology</mark>
            Operator's own scoring of TFEU competence categories.
            <br />
            Composite = arithmetic mean of four sub-indicators, each rescaled 0–100. Scale notes in methodology.
          </figcaption>
        </figure>
      </div>
    </section>

    <div style={{ borderTop: 'var(--border-hairline)' }}></div>

    {/*  */}
    <section className="section" id="toggle-map" aria-labelledby="map-heading">
      <div className="container">
        <span className="section-label">02</span>
        <h2 className="js-reveal" id="map-heading" style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-2)' }}>
          27 Member States vs. One Federal Bloc
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '66ch', marginBottom: 'var(--space-6)' }}>
          One base map, one data layer. Switch between viewing the EU as 27 fragmented national figures and as a single aggregated value. The "EU as Federal Bloc" figure is real arithmetic on Eurostat / SIPRI data — it is not an existing EU institutional budget line.
        </p>

        <figure className="chart-figure js-reveal" aria-labelledby="map-fig-caption">
          <div id="toggle-map-container" style={{ minHeight: '420px' }}>
            <noscript>
              <p style={{ padding: '2rem', color: 'var(--text-secondary)' }}>An interactive map of Europe is displayed here. JavaScript is required.</p>
            </noscript>
          </div>
          <figcaption id="map-fig-caption" style={{ marginTop: 'var(--space-4)' }}>
            <button className="csv-download-btn" id="dl-csv-map" style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', background: 'none', border: 'var(--border-hairline)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', marginBottom: 'var(--space-3)' }}>Download data (CSV)</button>
            <br />
            GDP and defence data: Eurostat <code>nama_10_gdp</code> and SIPRI Military Expenditure Database, 2022.
            "EU as Federal Bloc" = arithmetic sum of member-state figures;
            <mark className="illustrative-label">EU aggregate</mark> is not an existing EU institutional budget or revenue line.
            Boundaries: <a href="https://www.naturalearthdata.com/" target="_blank" rel="noopener">Natural Earth</a>, 110m, public domain.
            Projection: Azimuthal Equal Area (≈ EPSG:3035).
          </figcaption>
        </figure>
      </div>
    </section>

    <div style={{ borderTop: 'var(--border-hairline)' }}></div>

    {/*  */}
    <section className="section" id="competence-matrix" aria-labelledby="matrix-heading">
      <div className="container">
        <span className="section-label">03</span>
        <h2 className="js-reveal" id="matrix-heading" style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-2)' }}>
          Competence Comparison Matrix
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '66ch', marginBottom: 'var(--space-2)' }}>
          Three columns: <strong>EU Today</strong> (sourced to TFEU Articles 2–6, factual and citable), <strong>US Federal Reference</strong> (US Constitution / CRS, factual), and <strong>A Federal EU</strong> (operator's proposed allocation — <mark className="illustrative-label">placeholder</mark>). Eight policy domains.
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginBottom: 'var(--space-6)' }}>
          Column A and B are sourced facts. Column C requires operator input — see BUILD_NOTES.md §10.3.
        </p>

        <figure aria-labelledby="matrix-fig-caption" style={{ overflowX: 'auto' }}>
          <table className="matrix-table" id="competence-matrix-table" aria-label="Competence comparison: EU today, US federal reference, proposed federal EU">
            <thead>
              <tr>
                <th scope="col">Domain</th>
                <th scope="col" className="col-sourced">EU Today<br /><span style={{ fontWeight: '400', fontSize: '0.85em' }}>TFEU Articles 2–6</span></th>
                <th scope="col" className="col-sourced">US Federal Reference<br /><span style={{ fontWeight: '400', fontSize: '0.85em' }}>US Constitution / CRS</span></th>
                <th scope="col" className="col-sourced">A Federal EU<br /><span style={{ fontWeight: '400', fontSize: '0.85em' }}>Operator's proposal</span></th>
              </tr>
            </thead>
            <tbody id="matrix-tbody">
              {/*  */}
              <tr><td colspan="4" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>Loading matrix data…</td></tr>
            </tbody>
          </table>
          <figcaption id="matrix-fig-caption" style={{ marginTop: 'var(--space-4)' }}>
            Column A: Treaty on the Functioning of the European Union, Articles 2–6.
            <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A12016E%2FTXT" target="_blank" rel="noopener">EUR-Lex — CELEX:12016E/TXT</a>.
            Column B: US Constitution, Article I §8; Congressional Research Service,
            <em>Federalism, State Sovereignty, and the Constitution</em> (2020).
            Column C: Operator-supplied proposed allocation.
          </figcaption>
        </figure>
      </div>
    </section>

    <div style={{ borderTop: 'var(--border-hairline)' }}></div>

    {/*  */}
    <section className="section" id="scenario-sliders" aria-labelledby="sliders-heading">
      <div className="container">
        <span className="section-label">04</span>
        <h2 className="js-reveal" id="sliders-heading" style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-2)' }}>
          Scenario Sliders
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '66ch', marginBottom: 'var(--space-6)' }}>
          Two simple arithmetic models. Each slider's starting position is a real, sourced figure. Any value you drag it to above the baseline is <mark className="illustrative-label">illustrative</mark> — a projection, not a forecast. Expand the formula note under each slider to verify the arithmetic.
        </p>

        <div id="slider-section">
          {/*  */}
          <p style={{ padding: '2rem', color: 'var(--text-secondary)' }}>Loading slider data…</p>
        </div>
      </div>
    </section>

    <div style={{ borderTop: 'var(--border-hairline)' }}></div>

    {/*  */}
    <section className="section" id="primary-sources" aria-labelledby="primary-heading">
      <div className="container--narrow">
        <span className="section-label">05</span>
        <h2 className="js-reveal" id="primary-heading" style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-2)' }}>
          Primary Sources
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '66ch', marginBottom: 'var(--space-6)' }}>
          Key documents embedded where reproduction rights are confirmed, linked out where they are not. Each document is sourced from its institutional archive — not a summary or paraphrase.
        </p>

        {/*  */}
        <article className="primary-source-entry" id="ps-ventotene" style={{ marginBottom: 'var(--space-10)' }}>
          <h3 className="js-reveal" style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-2)' }}>The Ventotene Manifesto (1941)</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
            Altiero Spinelli and Ernesto Rossi. Written in internment on the island of Ventotene; circulated clandestinely through the Italian resistance. The founding document of European federalist thought.
          </p>
          <div className="placeholder-banner">
            [REPRODUCTION RIGHTS — operator to confirm: CVCE.eu hosts the full text for public access under their terms of use. Confirm whether direct embedding is permitted before adding an iframe here. Link-out is provided below as fallback.]
          </div>
          <p className="js-reveal">
            Full text:
            <a href="https://www.cvce.eu/en/obj/the_ventotene_manifesto_1941-en-5ada4b99-7445-492f-9fad-7ebeb5f2a8b4.html"
               target="_blank" rel="noopener">
              CVCE.eu — The Ventotene Manifesto (1941)
            </a>
          </p>
        </article>

        {/*  */}
        <article className="primary-source-entry" id="ps-schuman" style={{ marginBottom: 'var(--space-10)' }}>
          <h3 className="js-reveal" style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-2)' }}>The Schuman Declaration (9 May 1950)</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
            Robert Schuman, French Foreign Minister. Read at the Quai d'Orsay on 9 May 1950. Drafted in large part by Jean Monnet. The Declaration proposed pooling French and German coal and steel production under a common High Authority — making war between the two countries "not merely unthinkable, but materially impossible."
          </p>
          <blockquote style={{ borderLeft: '3px solid var(--accent-bronze)', paddingLeft: 'var(--space-5)', margin: 'var(--space-6) 0', color: 'var(--text-secondary)' }}>
            <p className="js-reveal">"Europe will not be made all at once, or according to a single plan. It will be built through concrete achievements which first create a de facto solidarity."</p>
            <footer style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', marginTop: 'var(--space-3)' }}>
              — Robert Schuman, 9 May 1950.
              Source: <a href="https://european-union.europa.eu/principles-countries-history/history-eu/1945-59/schuman-declaration-may-1950_en" target="_blank" rel="noopener">European Commission archive</a>.
            </footer>
          </blockquote>
          <p className="js-reveal">
            Full text:
            <a href="https://european-union.europa.eu/principles-countries-history/history-eu/1945-59/schuman-declaration-may-1950_en"
               target="_blank" rel="noopener">
              european-union.europa.eu — Schuman Declaration
            </a>
          </p>
        </article>

        {/*  */}
        <article className="primary-source-entry" id="ps-rome" style={{ marginBottom: 'var(--space-10)' }}>
          <h3 className="js-reveal" style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-2)' }}>Treaty of Rome (1957) — Preamble extract</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
            The preamble of the Treaty establishing the European Economic Community committed the six founding states to "an ever closer union among the peoples of Europe" — language that has anchored federalist legal interpretation ever since.
          </p>
          <blockquote style={{ borderLeft: '3px solid var(--accent-bronze)', paddingLeft: 'var(--space-5)', margin: 'var(--space-6) 0', color: 'var(--text-secondary)' }}>
            <p className="js-reveal">"DETERMINED to lay the foundations of an ever closer union among the peoples of Europe, RESOLVED to ensure the economic and social progress of their countries by common action to eliminate the barriers which divide Europe…"</p>
            <footer style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', marginTop: 'var(--space-3)' }}>
              — Treaty Establishing the European Economic Community (1957), Preamble.
              Source: <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A11957E%2FTXT" target="_blank" rel="noopener">EUR-Lex, CELEX:11957E/TXT</a>.
            </footer>
          </blockquote>
          <p className="js-reveal">
            Full treaty text:
            <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A11957E%2FTXT"
               target="_blank" rel="noopener">
              EUR-Lex — Treaty of Rome (1957)
            </a>
          </p>
        </article>

        {/*  */}
        <article className="primary-source-entry" id="ps-cofe" style={{ marginBottom: 'var(--space-10)' }}>
          <h3 className="js-reveal" style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-2)' }}>Conference on the Future of Europe — Final Report (2022)</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
            The Final Report of the Conference on the Future of Europe (9 May 2022) contains 49 proposals and 326 measures, many explicitly recommending treaty change. European Parliament voted in June 2022 to convene an Article 48 Convention; the Council declined.
          </p>
          <div className="placeholder-banner">
            [REPRODUCTION RIGHTS — PDF embedding via &lt;iframe&gt; sourced directly from the futureu.europa.eu archive. Operator to confirm browser-level PDF embedding is acceptable in deployment environment before shipping. Link-out provided as fallback.]
          </div>
          <p className="js-reveal">
            Full report (PDF):
            <a href="https://futureu.europa.eu/uploads/decidim/attachment/file/23363/CoFoE_Final_Report_EN.pdf"
               target="_blank" rel="noopener">
              CoFoE — Final Report, May 2022 (PDF)
            </a>
          </p>
        </article>

      </div>
    </section>

  
    </div>
  );
};

export default DataRoom;
