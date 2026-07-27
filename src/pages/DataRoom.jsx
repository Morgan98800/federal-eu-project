import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ThreeDMap from '../components/ThreeDMap';
import { renderIntegrationIndex } from '../js/integration-index';
import { initScenarioSlider } from '../js/scenario-slider';
import { BarChart3, Database, Table, Sliders, ExternalLink, Download, ShieldCheck } from 'lucide-react';

const DataRoom = () => {
  const indexChartRef = useRef(null);
  const sliderRef = useRef(null);
  const [matrixData, setMatrixData] = useState(null);

  useEffect(() => {
    // 1. Integration Index
    if (indexChartRef.current && !indexChartRef.current.hasChildNodes()) {
      fetch('./src/data/integration-index.json')
        .then(r => r.json())
        .then(data => {
          renderIntegrationIndex('#index-chart-wrapper', data, { compact: false });
        })
        .catch(e => console.error(e));
    }

    // 2. Competence Matrix JSON
    fetch('./src/data/competence-matrix.json')
      .then(r => r.json())
      .then(data => setMatrixData(data))
      .catch(e => console.error(e));

    // 3. Scenario Sliders
    if (sliderRef.current && !sliderRef.current.hasChildNodes()) {
      fetch('./src/data/scenario-slider.json')
        .then(r => r.json())
        .then(data => {
          initScenarioSlider('#slider-section', data);
        })
        .catch(e => console.error(e));
    }
  }, []);

  return (
    <div className="data-room-page" style={{ background: 'var(--paper)', minHeight: '100vh' }}>
      {/* Masthead */}
      <div className="page-masthead page-masthead--slim" style={{ borderBottom: 'var(--border-rule)', background: 'var(--paper-mid)', paddingBlock: 'var(--space-12)' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-bronze)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--space-4)' }}>
            <Database size={14} />
            <span>DATA BANK &middot; REPOSITORY METRICS</span>
          </div>

          <h1 className="page-masthead__title js-reveal reveal-delay-1" id="data-room-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: 'var(--ink-navy)', marginBottom: 'var(--space-4)' }}>
            The Data Room
          </h1>

          <p className="page-masthead__deck js-reveal reveal-delay-2" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-secondary)', maxWidth: '68ch' }}>
            The case for European federal union is backed by empirical data. This repository tracks the cost of non-Europe across public support, fiscal capacity, and defence pooling.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-4)', marginTop: 'var(--space-8)' }}>
            <div style={{ background: 'var(--paper)', padding: 'var(--space-4) var(--space-5)', border: '1px solid var(--rule-grey)', borderRadius: '2px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-bronze)', fontWeight: 600, textTransform: 'uppercase' }}>INDICATOR 01</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--ink-navy)', marginTop: '4px' }}>Public Mandate (Eurobarometer)</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginTop: '4px' }}>Over 81% citizens favor a common European defence policy.</div>
            </div>

            <div style={{ background: 'var(--paper)', padding: 'var(--space-4) var(--space-5)', border: '1px solid var(--rule-grey)', borderRadius: '2px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-bronze)', fontWeight: 600, textTransform: 'uppercase' }}>INDICATOR 02</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--ink-navy)', marginTop: '4px' }}>Macroeconomic Limits (Eurostat)</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginTop: '4px' }}>Fragmented sovereign debt vs. unified US Treasury reference.</div>
            </div>

            <div style={{ background: 'var(--paper)', padding: 'var(--space-4) var(--space-5)', border: '1px solid var(--rule-grey)', borderRadius: '2px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-bronze)', fontWeight: 600, textTransform: 'uppercase' }}>INDICATOR 03</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--ink-navy)', marginTop: '4px' }}>Defence Waste (EDA / EPRS)</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginTop: '4px' }}>€18B–€57B wasted annually across 27 separate procurement structures.</div>
            </div>
          </div>

          <nav aria-label="Data Room sections" style={{ marginTop: 'var(--space-8)', borderTop: 'var(--border-hairline)', paddingTop: 'var(--space-6)' }}>
            <ol style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', listStyle: 'none', padding: 0, margin: 0, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>
              <li><a href="#integration-index" style={{ textDecoration: 'none', color: 'var(--ink-navy)', padding: '4px 8px', border: '1px solid var(--rule-grey)', borderRadius: '2px', background: 'var(--paper)' }}>I. Integration Index</a></li>
              <li><a href="#toggle-map" style={{ textDecoration: 'none', color: 'var(--ink-navy)', padding: '4px 8px', border: '1px solid var(--rule-grey)', borderRadius: '2px', background: 'var(--paper)' }}>II. 27 States vs. One Bloc</a></li>
              <li><a href="#competence-matrix" style={{ textDecoration: 'none', color: 'var(--ink-navy)', padding: '4px 8px', border: '1px solid var(--rule-grey)', borderRadius: '2px', background: 'var(--paper)' }}>III. Competence Matrix</a></li>
              <li><a href="#scenario-sliders" style={{ textDecoration: 'none', color: 'var(--ink-navy)', padding: '4px 8px', border: '1px solid var(--rule-grey)', borderRadius: '2px', background: 'var(--paper)' }}>IV. Scenario Sliders</a></li>
              <li><a href="#primary-sources" style={{ textDecoration: 'none', color: 'var(--ink-navy)', padding: '4px 8px', border: '1px solid var(--rule-grey)', borderRadius: '2px', background: 'var(--paper)' }}>V. Primary Sources</a></li>
            </ol>
          </nav>
        </div>
      </div>

      {/* 01: European Integration Index */}
      <section className="section" id="integration-index" aria-labelledby="index-heading" style={{ paddingBlock: 'var(--space-16)' }}>
        <div className="container">
          <span className="section-label"><BarChart3 size={13} color="var(--accent-bronze)" /> SERIES 01</span>
          <h2 className="js-reveal" id="index-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-2)' }}>
            European Integration Index, 2006–2023
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '68ch', marginBottom: 'var(--space-6)', lineHeight: 'var(--leading-relaxed)' }}>
            A composite tracking four sub-indicators — public support (Eurobarometer), defence collaboration (EDA), fiscal capacity relative to federal reference (Eurostat / US OMB), and qualitative competence score.
          </p>

          <figure className="chart-figure js-reveal" aria-labelledby="index-fig-caption">
            <div className="integration-index-wrapper" id="index-chart-wrapper" ref={indexChartRef} style={{ minHeight: '360px', background: 'var(--paper-mid)', border: 'var(--border-hairline)', borderRadius: 'var(--radius-sm)', padding: 'var(--space-6)' }}>
            </div>
            <div className="index-legend" id="index-legend"></div>
            
            <figcaption id="index-fig-caption" style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
              <strong>Sources by sub-indicator:</strong> (A) Standard Eurobarometer surveys, European Commission; (B) EDA Defence Data Portal; (C) EU budget vs. US OMB Historical Tables.
            </figcaption>
          </figure>
        </div>
      </section>

      <div style={{ borderTop: 'var(--border-hairline)' }}></div>

      {/* 02: 27 Member States vs. One Federal Bloc */}
      <section className="section" id="toggle-map" aria-labelledby="map-heading" style={{ paddingBlock: 'var(--space-16)' }}>
        <div className="container">
          <span className="section-label"><Table size={13} color="var(--accent-bronze)" /> SERIES 02</span>
          <h2 className="js-reveal" id="map-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-2)' }}>
            27 Member States vs. One Federal Bloc
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '68ch', marginBottom: 'var(--space-6)', lineHeight: 'var(--leading-relaxed)' }}>
            Comparative cartography of sovereign federal states in relief alongside non-federation neighbors. Explore member state metrics, capitals, and Brussels Federal District.
          </p>

          <figure className="chart-figure js-reveal" aria-labelledby="map-fig-caption">
            <div style={{ border: '1px solid var(--rule-grey)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <ThreeDMap />
            </div>
            <figcaption id="map-fig-caption" style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
              GDP and defence data: Eurostat <code>nama_10_gdp</code> and SIPRI Military Expenditure Database, 2022. Boundaries: Natural Earth 110m public domain.
            </figcaption>
          </figure>
        </div>
      </section>

      <div style={{ borderTop: 'var(--border-hairline)' }}></div>

      {/* 03: Competence Comparison Matrix */}
      <section className="section" id="competence-matrix" aria-labelledby="matrix-heading" style={{ paddingBlock: 'var(--space-16)' }}>
        <div className="container">
          <span className="section-label"><Table size={13} color="var(--accent-bronze)" /> SERIES 03</span>
          <h2 className="js-reveal" id="matrix-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-2)' }}>
            Competence Comparison Matrix
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '68ch', marginBottom: 'var(--space-6)', lineHeight: 'var(--leading-relaxed)' }}>
            Comparison across policy domains: <strong>EU Today</strong> (TFEU Articles 2–6), <strong>US Federal Reference</strong> (US Constitution / CRS), and <strong>A Federal EU</strong> (Proposed constitutional allocation).
          </p>

          <figure aria-labelledby="matrix-fig-caption" style={{ overflowX: 'auto' }}>
            <table className="matrix-table" aria-label="Competence comparison: EU today, US federal reference, proposed federal EU" style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-sm)' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--ink-navy)' }}>
                  <th scope="col" style={{ padding: '12px', textAlign: 'left', fontFamily: 'var(--font-serif)', fontSize: 'var(--text-base)', width: '20%' }}>Domain</th>
                  <th scope="col" style={{ padding: '12px', textAlign: 'left', fontFamily: 'var(--font-serif)', fontSize: 'var(--text-base)', width: '26%' }}>
                    EU Today<br /><span style={{ fontWeight: 400, fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}>TFEU Articles 2–6</span>
                  </th>
                  <th scope="col" style={{ padding: '12px', textAlign: 'left', fontFamily: 'var(--font-serif)', fontSize: 'var(--text-base)', width: '26%' }}>
                    US Federal Reference<br /><span style={{ fontWeight: 400, fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}>US Constitution / CRS</span>
                  </th>
                  <th scope="col" style={{ padding: '12px', textAlign: 'left', fontFamily: 'var(--font-serif)', fontSize: 'var(--text-base)', width: '28%' }}>
                    A Federal EU<br /><span style={{ fontWeight: 400, fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--accent-bronze)' }}>Proposed Allocation</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {matrixData && matrixData.rows ? (
                  matrixData.rows.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: 'var(--border-hairline)' }}>
                      <td style={{ padding: '12px', fontWeight: 600, color: 'var(--ink-navy)', fontFamily: 'var(--font-body)' }}>{row.domain}</td>
                      <td style={{ padding: '12px', color: 'var(--text-secondary)', lineHeight: 'var(--leading-normal)', fontSize: '13px' }}>
                        <div>{row.a.text}</div>
                        {row.a.cite && <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-tertiary)', marginTop: '4px' }}>Ref: {row.a.cite}</div>}
                      </td>
                      <td style={{ padding: '12px', color: 'var(--text-secondary)', lineHeight: 'var(--leading-normal)', fontSize: '13px' }}>
                        <div>{row.b.text}</div>
                        {row.b.cite && <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-tertiary)', marginTop: '4px' }}>Ref: {row.b.cite}</div>}
                      </td>
                      <td style={{ padding: '12px', color: 'var(--ink-navy)', lineHeight: 'var(--leading-normal)', fontSize: '13px', background: 'rgba(184, 146, 48, 0.03)' }}>
                        <div>{row.c.text}</div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="4" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>Loading competence matrix…</td></tr>
                )}
              </tbody>
            </table>
            <figcaption id="matrix-fig-caption" style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
              Column A: Treaty on the Functioning of the European Union, Articles 2–6; Column B: US Constitution Article I §8; Column C: Proposed federal competence allocation.
            </figcaption>
          </figure>
        </div>
      </section>

      <div style={{ borderTop: 'var(--border-hairline)' }}></div>

      {/* 04: Scenario Sliders */}
      <section className="section" id="scenario-sliders" aria-labelledby="sliders-heading" style={{ paddingBlock: 'var(--space-16)' }}>
        <div className="container">
          <span className="section-label"><Sliders size={13} color="var(--accent-bronze)" /> MODEL 04</span>
          <h2 className="js-reveal" id="sliders-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-2)' }}>
            Scenario Sliders &amp; Projections
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '68ch', marginBottom: 'var(--space-6)', lineHeight: 'var(--leading-relaxed)' }}>
            Interactive arithmetic models for fiscal capacity and defence pooling efficiency. Slider baselines represent real Eurostat / EDA figures.
          </p>

          <div id="slider-section" ref={sliderRef}>
            <p style={{ padding: '2rem', color: 'var(--text-secondary)' }}>Loading scenario models…</p>
          </div>
        </div>
      </section>

      <div style={{ borderTop: 'var(--border-hairline)' }}></div>

      {/* 05: Primary Sources */}
      <section className="section" id="primary-sources" aria-labelledby="primary-heading" style={{ paddingBlock: 'var(--space-16)' }}>
        <div className="container--narrow">
          <span className="section-label"><Database size={13} color="var(--accent-bronze)" /> SOURCES 05</span>
          <h2 className="js-reveal" id="primary-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-4)' }}>
            Primary Treaties &amp; Documents
          </h2>

          <article className="primary-source-entry" id="ps-ventotene" style={{ marginBottom: 'var(--space-10)', paddingBottom: 'var(--space-6)', borderBottom: 'var(--border-hairline)' }}>
            <h3 className="js-reveal" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', marginBottom: 'var(--space-2)' }}>The Ventotene Manifesto (1941)</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-3)', lineHeight: 'var(--leading-relaxed)' }}>
              Altiero Spinelli and Ernesto Rossi. Written during internment on Ventotene; circulated clandestinely through the Italian resistance. Foundational document of European federalism.
            </p>
            <a href="https://www.cvce.eu/en/obj/the_ventotene_manifesto_1941-en-5ada4b99-7445-492f-9fad-7ebeb5f2a8b4.html" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)' }}>
              CVCE.eu — The Ventotene Manifesto (1941) <ExternalLink size={11} style={{ verticalAlign: 'middle' }} />
            </a>
          </article>

          <article className="primary-source-entry" id="ps-schuman" style={{ marginBottom: 'var(--space-10)', paddingBottom: 'var(--space-6)', borderBottom: 'var(--border-hairline)' }}>
            <h3 className="js-reveal" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', marginBottom: 'var(--space-2)' }}>The Schuman Declaration (9 May 1950)</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-3)', lineHeight: 'var(--leading-relaxed)' }}>
              Robert Schuman, French Foreign Minister. Proposed pooling French and German coal and steel production under a common High Authority.
            </p>
            <a href="https://european-union.europa.eu/principles-countries-history/history-eu/1945-59/schuman-declaration-may-1950_en" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)' }}>
              european-union.europa.eu — Schuman Declaration <ExternalLink size={11} style={{ verticalAlign: 'middle' }} />
            </a>
          </article>

          <article className="primary-source-entry" id="ps-rome">
            <h3 className="js-reveal" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', marginBottom: 'var(--space-2)' }}>Treaty of Rome (1957)</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-3)', lineHeight: 'var(--leading-relaxed)' }}>
              Preamble commitment: "DETERMINED to lay the foundations of an ever closer union among the peoples of Europe..."
            </p>
            <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A11957E%2FTXT" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)' }}>
              EUR-Lex — Treaty of Rome (1957) <ExternalLink size={11} style={{ verticalAlign: 'middle' }} />
            </a>
          </article>
        </div>
      </section>
    </div>
  );
};

export default DataRoom;
