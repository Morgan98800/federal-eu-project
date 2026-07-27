import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sources = () => {
  useEffect(() => {
    // We will initialize page-specific scripts here if needed
  }, []);

  return (
    <div className="sources-page">
      <div className="page-masthead">
        <div className="container">
          <div className="page-masthead__overline js-reveal reveal-fast">Sources</div>
          <h1 className="page-masthead__title js-reveal reveal-delay-1" id="sources-title">
            Sources, Data &amp; Methodology
          </h1>
          <div className="page-masthead__deck js-reveal reveal-delay-2" style={{ marginTop: 'var(--space-6)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-secondary)', maxWidth: '68ch' }}>
            A complete bibliography of primary treaties, empirical datasets, and scholarly literature informing this project, as well as the explicit weighting methodology for the European Integration Index.
          </div>
        </div>
      </div>

      <section className="section" aria-labelledby="methodology-heading" style={{ background: 'var(--paper-mid)', borderBottom: 'var(--border-hairline)' }}>
        <div className="container--narrow">
          <span className="section-label">Transparency &amp; Formula</span>
          <h2 className="js-reveal" id="methodology-heading" style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>
            European Integration Index — Methodology &amp; Weighting
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-6)', lineHeight: 'var(--leading-relaxed)' }}>
            The composite <strong>European Integration Index</strong> (0–100 scale, tracked 2006–2024) is calculated as an unweighted arithmetic mean of four distinct sub-indicators, each scaled from 0 (minimal integration / intergovernmental baseline) to 100 (full federal integration).
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
            <div style={{ border: 'var(--border-hairline)', padding: 'var(--space-5)', background: 'var(--paper)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', marginBottom: 'var(--space-2)' }}>SUB-INDICATOR A (25% WEIGHT)</div>
              <h3 style={{ fontSize: 'var(--text-base)', marginBottom: 'var(--space-2)' }}>Public Support</h3>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-normal)' }}>
                <strong>Metric:</strong> Eurobarometer % favourable towards common defence &amp; political unification.<br />
                <strong>Rescaling:</strong> 35% favourable = 0; 70% favourable = 100.<br />
                <strong>Source:</strong> European Commission Standard Eurobarometer (EB 66–103).
              </p>
            </div>

            <div style={{ border: 'var(--border-hairline)', padding: 'var(--space-5)', background: 'var(--paper)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', marginBottom: 'var(--space-2)' }}>SUB-INDICATOR B (25% WEIGHT)</div>
              <h3 style={{ fontSize: 'var(--text-base)', marginBottom: 'var(--space-2)' }}>Defence Pooling</h3>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-normal)' }}>
                <strong>Metric:</strong> EDA collaborative defence equipment procurement as % of total EU27 defence spend.<br />
                <strong>Rescaling:</strong> 10% collaborative = 0; 40% collaborative = 100 (40% is EDA's target).<br />
                <strong>Source:</strong> European Defence Agency Annual Defence Data Reports.
              </p>
            </div>

            <div style={{ border: 'var(--border-hairline)', padding: 'var(--space-5)', background: 'var(--paper)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', marginBottom: 'var(--space-2)' }}>SUB-INDICATOR C (25% WEIGHT)</div>
              <h3 style={{ fontSize: 'var(--text-base)', marginBottom: 'var(--space-2)' }}>Fiscal Capacity</h3>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-normal)' }}>
                <strong>Metric:</strong> EU Budget (% of EU GNI, ~1.1%) relative to US Federal Budget baseline (% of US GDP, ~24%).<br />
                <strong>Rescaling:</strong> Ratio rescaled to 100 max parity.<br />
                <strong>Source:</strong> European Commission &amp; US OMB Historical Tables.
              </p>
            </div>

            <div style={{ border: 'var(--border-hairline)', padding: 'var(--space-5)', background: 'var(--paper)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', marginBottom: 'var(--space-2)' }}>SUB-INDICATOR D (25% WEIGHT)</div>
              <h3 style={{ fontSize: 'var(--text-base)', marginBottom: 'var(--space-2)' }}>Treaty Competence</h3>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-normal)' }}>
                <strong>Metric:</strong> Qualitative scoring of TFEU legal competence division vs. full federal constitutional baseline.<br />
                <strong>Rescaling:</strong> 0 = intergovernmental treaty; 100 = sovereign federal constitution.<br />
                <strong>Source:</strong> Comparative legal assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="primary-heading">
        <div className="container--narrow">
          <h2 className="js-reveal" id="primary-heading" style={{ marginBottom: 'var(--space-6)' }}>
            Primary Treaty &amp; Institutional Texts
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-8)' }}>
            All treaty texts available in full via EUR-Lex, the official EU legal database.
          </p>

          <div className="bibliography" id="treaties" aria-label="Primary treaty texts">
            <div className="bib-entry hover-lift js-reveal" id="src-ventotene">
              <div className="bib-entry__num">1</div>
              <div className="bib-entry__content">
                <p className="bib-entry__author">Spinelli, Altiero and Rossi, Ernesto</p>
                <p className="js-reveal">
                  <span className="bib-entry__title">For a Free and United Europe: A Draft Manifesto (Ventotene Manifesto)</span>
                  <span className="source-tag source-tag--treaty">primary</span>
                </p>
                <p className="bib-entry__meta">1941. CVCE.eu / European University Institute archive.</p>
                <p className="bib-entry__url">
                  <a href="https://www.cvce.eu/en/obj/the_ventotene_manifesto_1941-en-5ada4b99-7445-492f-9fad-7ebeb5f2a8b4.html" target="_blank" rel="noopener noreferrer">
                    cvce.eu — The Ventotene Manifesto (1941)
                  </a>
                </p>
              </div>
            </div>

            <div className="bib-entry hover-lift js-reveal" id="src-schuman">
              <div className="bib-entry__num">2</div>
              <div className="bib-entry__content">
                <p className="bib-entry__author">Schuman, Robert</p>
                <p className="js-reveal">
                  <span className="bib-entry__title">Declaration of 9 May 1950</span>
                  <span className="source-tag source-tag--treaty">primary</span>
                </p>
                <p className="bib-entry__meta">1950. European Commission.</p>
                <p className="bib-entry__url">
                  <a href="https://european-union.europa.eu/principles-countries-history/history-eu/1945-59/schuman-declaration-may-1950_en" target="_blank" rel="noopener noreferrer">
                    european-union.europa.eu — Schuman Declaration
                  </a>
                </p>
              </div>
            </div>

            <div className="bib-entry hover-lift js-reveal" id="src-maastricht">
              <div className="bib-entry__num">3</div>
              <div className="bib-entry__content">
                <p className="bib-entry__author">European Communities</p>
                <p className="js-reveal">
                  <span className="bib-entry__title">Treaty on European Union (Maastricht Treaty)</span>
                  <span className="source-tag source-tag--treaty">treaty</span>
                </p>
                <p className="bib-entry__meta">Signed 7 February 1992. EUR-Lex.</p>
                <p className="bib-entry__url">
                  <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A11992M%2FTXT" target="_blank" rel="noopener noreferrer">
                    eur-lex.europa.eu — CELEX:11992M/TXT
                  </a>
                </p>
              </div>
            </div>

            <div className="bib-entry hover-lift js-reveal" id="src-lisbon">
              <div className="bib-entry__num">4</div>
              <div className="bib-entry__content">
                <p className="bib-entry__author">European Union</p>
                <p className="js-reveal">
                  <span className="bib-entry__title">Treaty of Lisbon</span>
                  <span className="source-tag source-tag--treaty">treaty</span>
                </p>
                <p className="bib-entry__meta">Signed 13 December 2007; in force 1 December 2009. EUR-Lex.</p>
                <p className="bib-entry__url">
                  <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A12007L%2FTXT" target="_blank" rel="noopener noreferrer">
                    eur-lex.europa.eu — CELEX:12007L/TXT
                  </a>
                </p>
              </div>
            </div>
          </div>

          <hr />

          <h2 className="js-reveal" id="datasets-heading" style={{ marginBottom: 'var(--space-6)' }}>Datasets &amp; Institutional Reports</h2>

          <div className="bibliography" id="datasets" aria-label="Statistical datasets">
            <div className="bib-entry hover-lift js-reveal" id="src-eda">
              <div className="bib-entry__num">5</div>
              <div className="bib-entry__content">
                <p className="bib-entry__author">European Defence Agency (EDA)</p>
                <p className="js-reveal">
                  <span className="bib-entry__title">Defence Data 2024–2025 Report</span>
                  <span className="source-tag source-tag--data">data</span>
                </p>
                <p className="bib-entry__meta">Reports total EU member state defence expenditure (€279bn in 2023, €343bn in 2024) and collaborative procurement ratios.</p>
                <p className="bib-entry__url">
                  <a href="https://eda.europa.eu/publications-and-data/defence-data" target="_blank" rel="noopener noreferrer">
                    eda.europa.eu — Defence Data Portal
                  </a>
                </p>
              </div>
            </div>

            <div className="bib-entry hover-lift js-reveal" id="src-eprs-defence">
              <div className="bib-entry__num">6</div>
              <div className="bib-entry__content">
                <p className="bib-entry__author">European Parliament Research Service (EPRS)</p>
                <p className="js-reveal">
                  <span className="bib-entry__title">Cost of Non-Europe in Common Security and Defence</span>
                  <span className="source-tag source-tag--data">research</span>
                </p>
                <p className="bib-entry__meta">Estimates annual inefficiency waste caused by defence procurement fragmentation at €18 billion to €57 billion per year.</p>
                <p className="bib-entry__url">
                  <a href="https://www.europarl.europa.eu/thinktank/en/research/cost-of-non-europe" target="_blank" rel="noopener noreferrer">
                    europarl.europa.eu — Cost of Non-Europe Studies
                  </a>
                </p>
              </div>
            </div>

            <div className="bib-entry hover-lift js-reveal" id="src-eb103">
              <div className="bib-entry__num">7</div>
              <div className="bib-entry__content">
                <p className="bib-entry__author">European Commission, Directorate-General for Communication</p>
                <p className="js-reveal">
                  <span className="bib-entry__title">Standard Eurobarometer 102 (Autumn 2024) &amp; 103 (Spring 2025)</span>
                  <span className="source-tag source-tag--data">data</span>
                </p>
                <p className="bib-entry__meta">Biannual EU-wide public opinion survey recording 52% general trust in the EU (18-year high) and 81% support for a common defence policy.</p>
                <p className="bib-entry__url">
                  <a href="https://europa.eu/eurobarometer/surveys/browse/all/series/4506" target="_blank" rel="noopener noreferrer">
                    europa.eu — Eurobarometer Survey Archive
                  </a>
                </p>
              </div>
            </div>

            <div className="bib-entry hover-lift js-reveal" id="src-eurostat-gdp">
              <div className="bib-entry__num">8</div>
              <div className="bib-entry__content">
                <p className="bib-entry__author">Eurostat</p>
                <p className="js-reveal">
                  <span className="bib-entry__title">Gross domestic product at market prices — nama_10_gdp</span>
                  <span className="source-tag source-tag--data">data</span>
                </p>
                <p className="bib-entry__meta">Annual national accounts database for EU27 economies.</p>
                <p className="bib-entry__url">
                  <a href="https://ec.europa.eu/eurostat/databrowser/view/nama_10_gdp/default/table?lang=en" target="_blank" rel="noopener noreferrer">
                    Eurostat Data Browser — nama_10_gdp
                  </a>
                </p>
              </div>
            </div>
          </div>

          <hr />

          <h2 className="js-reveal" id="scholarly-heading" style={{ marginBottom: 'var(--space-6)' }}>Scholarly Works</h2>

          <div className="bibliography" id="scholarly" aria-label="Scholarly works and policy papers">
            <div className="bib-entry hover-lift js-reveal" id="src-fabbrini">
              <div className="bib-entry__num">9</div>
              <div className="bib-entry__content">
                <p className="bib-entry__author">Fabbrini, Sergio</p>
                <p className="js-reveal">
                  <span className="bib-entry__title">Which European Union? Europe After the Euro Crisis</span>
                  <span className="source-tag source-tag--scholarly">scholarly</span>
                </p>
                <p className="bib-entry__meta">Cambridge University Press, 2015. Comparative study on compound federalism vs. intergovernmentalism in crisis governance.</p>
                <p className="bib-entry__url">
                  <a href="https://www.cambridge.org/core/books/which-european-union/5F58B12A61908C8F7E847841FCE42340" target="_blank" rel="noopener noreferrer">
                    Cambridge University Press — Fabbrini (2015)
                  </a>
                </p>
              </div>
            </div>

            <div className="bib-entry hover-lift js-reveal" id="src-kelemen">
              <div className="bib-entry__num">10</div>
              <div className="bib-entry__content">
                <p className="bib-entry__author">Kelemen, R. Daniel</p>
                <p className="js-reveal">
                  <span className="bib-entry__title">The Rules of Federalism: Institutions and Regulatory Politics in the EU and Beyond</span>
                  <span className="source-tag source-tag--scholarly">scholarly</span>
                </p>
                <p className="bib-entry__meta">Harvard University Press, 2004. Comparative analysis of regulatory federalism in the EU and US.</p>
                <p className="bib-entry__url">
                  <a href="https://www.hup.harvard.edu/books/9780674013087" target="_blank" rel="noopener noreferrer">
                    Harvard University Press — Kelemen (2004)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sources;
