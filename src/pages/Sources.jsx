import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Copy, Check, ExternalLink, FileText, Database, ShieldCheck } from 'lucide-react';

const Sources = () => {
  const [copiedFormat, setCopiedFormat] = useState(null);

  const citations = {
    APA: `European Federal Research Initiative. (2026). A Federal Vision for Europe: Constitutional Architecture, Empirical Metrics, and Comparative Cartography. EFRI Monograph Series, DOC-EFRI-2026-EU-01. https://morgan98800.github.io/federal-eu-project/`,
    Chicago: `European Federal Research Initiative. "A Federal Vision for Europe: Constitutional Architecture, Empirical Metrics, and Comparative Cartography." EFRI Monograph Series, no. DOC-EFRI-2026-EU-01 (2026). https://morgan98800.github.io/federal-eu-project/.`,
    BibTeX: `@techreport{EFRI2026,\n  author = {{European Federal Research Initiative}},\n  title = {A Federal Vision for Europe: Constitutional Architecture, Empirical Metrics, and Comparative Cartography},\n  institution = {European Federal Research Initiative},\n  year = {2026},\n  number = {DOC-EFRI-2026-EU-01},\n  url = {https://morgan98800.github.io/federal-eu-project/}\n}`
  };

  const handleCopy = (format) => {
    navigator.clipboard.writeText(citations[format]);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  return (
    <div className="sources-page" style={{ background: 'var(--paper)', minHeight: '100vh' }}>
      {/* Masthead */}
      <div className="page-masthead" style={{ borderBottom: 'var(--border-rule)', background: 'var(--paper-mid)', paddingBlock: 'var(--space-12)' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-bronze)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--space-4)' }}>
            <BookOpen size={14} />
            <span>BIBLIOGRAPHY &middot; CITATION ENGINE</span>
          </div>

          <h1 className="page-masthead__title js-reveal reveal-delay-1" id="sources-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: 'var(--ink-navy)', marginBottom: 'var(--space-4)' }}>
            Sources, Data &amp; Methodology
          </h1>

          <p className="page-masthead__deck js-reveal reveal-delay-2" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', color: 'var(--text-secondary)', maxWidth: '68ch', lineHeight: 'var(--leading-relaxed)' }}>
            A complete bibliography of primary treaty texts, Eurostat / EDA empirical datasets, and peer-reviewed scholarly literature, accompanied by explicit index weighting formulas.
          </p>
        </div>
      </div>

      {/* Citation Export Modal/Box */}
      <section className="section" style={{ paddingBlock: 'var(--space-10)', borderBottom: 'var(--border-hairline)', background: 'var(--paper)' }}>
        <div className="container--narrow">
          <div style={{ background: 'var(--paper-mid)', border: 'var(--border-hairline)', padding: 'var(--space-6)', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--space-4)' }}>
              RESEARCH CITATION ENGINE (EXPORT BIBLIOGRAPHY ENTRY)
            </div>

            {Object.keys(citations).map((fmt) => (
              <div key={fmt} style={{ marginBottom: 'var(--space-4)', borderBottom: '1px solid var(--rule-grey)', paddingBottom: 'var(--space-4)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--ink-navy)' }}>{fmt} FORMAT</span>
                  <button
                    onClick={() => handleCopy(fmt)}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', fontFamily: 'var(--font-mono)',
                      fontSize: '11px', background: 'var(--paper)', border: '1px solid var(--rule-grey)', borderRadius: '2px', cursor: 'pointer', color: 'var(--ink-navy)'
                    }}
                  >
                    {copiedFormat === fmt ? <Check size={12} color="#22c55e" /> : <Copy size={12} />}
                    {copiedFormat === fmt ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-secondary)', background: 'var(--paper)', padding: 'var(--space-3)', border: '1px solid var(--rule-grey)', borderRadius: '2px', overflowX: 'auto', whiteSpace: 'pre-wrap', margin: 0 }}>
                  {citations[fmt]}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section" aria-labelledby="methodology-heading" style={{ background: 'var(--paper-mid)', borderBottom: 'var(--border-hairline)', paddingBlock: 'var(--space-16)' }}>
        <div className="container--narrow">
          <span className="section-label"><Database size={13} color="var(--accent-bronze)" /> FORMULA &amp; WEIGHTS</span>
          <h2 className="js-reveal" id="methodology-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>
            European Integration Index — Methodology &amp; Weighting
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-base)', marginBottom: 'var(--space-8)', lineHeight: 'var(--leading-relaxed)' }}>
            The composite <strong>European Integration Index</strong> (0–100 scale, tracked 2006–2024) is calculated as an unweighted arithmetic mean of four sub-indicators, each scaled from 0 (intergovernmental baseline) to 100 (full federal integration).
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-6)' }}>
            <div style={{ border: 'var(--border-hairline)', padding: 'var(--space-5)', background: 'var(--paper)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', marginBottom: 'var(--space-2)' }}>SUB-INDICATOR A (25% WEIGHT)</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-lg)', marginBottom: 'var(--space-2)' }}>Public Support</h3>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-normal)' }}>
                <strong>Metric:</strong> Eurobarometer % favourable towards common defence &amp; political unification.<br />
                <strong>Rescaling:</strong> 35% favourable = 0; 70% favourable = 100.<br />
                <strong>Source:</strong> European Commission Standard Eurobarometer (EB 66–103).
              </p>
            </div>

            <div style={{ border: 'var(--border-hairline)', padding: 'var(--space-5)', background: 'var(--paper)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', marginBottom: 'var(--space-2)' }}>SUB-INDICATOR B (25% WEIGHT)</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-lg)', marginBottom: 'var(--space-2)' }}>Defence Pooling</h3>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-normal)' }}>
                <strong>Metric:</strong> EDA collaborative defence equipment procurement as % of total EU27 defence spend.<br />
                <strong>Rescaling:</strong> 10% collaborative = 0; 40% collaborative = 100.<br />
                <strong>Source:</strong> European Defence Agency Annual Defence Data Reports.
              </p>
            </div>

            <div style={{ border: 'var(--border-hairline)', padding: 'var(--space-5)', background: 'var(--paper)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', marginBottom: 'var(--space-2)' }}>SUB-INDICATOR C (25% WEIGHT)</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-lg)', marginBottom: 'var(--space-2)' }}>Fiscal Capacity</h3>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-normal)' }}>
                <strong>Metric:</strong> EU Budget (% of EU GNI, ~1.1%) relative to US Federal Budget baseline (% of US GDP, ~24%).<br />
                <strong>Rescaling:</strong> Ratio rescaled to 100 max parity.<br />
                <strong>Source:</strong> European Commission &amp; US OMB Historical Tables.
              </p>
            </div>

            <div style={{ border: 'var(--border-hairline)', padding: 'var(--space-5)', background: 'var(--paper)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', marginBottom: 'var(--space-2)' }}>SUB-INDICATOR D (25% WEIGHT)</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-lg)', marginBottom: 'var(--space-2)' }}>Treaty Competence</h3>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-normal)' }}>
                <strong>Metric:</strong> Qualitative scoring of TFEU legal competence division vs. full federal constitutional baseline.<br />
                <strong>Rescaling:</strong> 0 = intergovernmental treaty; 100 = sovereign federal constitution.<br />
                <strong>Source:</strong> Comparative legal assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bibliography Sections */}
      <section className="section" aria-labelledby="primary-heading" style={{ paddingBlock: 'var(--space-16)' }}>
        <div className="container--narrow">
          <h2 className="js-reveal" id="primary-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)' }}>
            Primary Treaty &amp; Institutional Texts
          </h2>

          <div className="bibliography" id="treaties">
            <div className="bib-entry hover-lift js-reveal" id="src-ventotene" style={{ marginBottom: 'var(--space-6)', paddingBottom: 'var(--space-4)', borderBottom: 'var(--border-hairline)' }}>
              <div className="bib-entry__num" style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-bronze)', fontWeight: 600 }}>01</div>
              <div className="bib-entry__content">
                <p className="bib-entry__author" style={{ fontWeight: 600, color: 'var(--ink-navy)' }}>Spinelli, Altiero and Rossi, Ernesto</p>
                <p className="bib-entry__title" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--ink-navy)' }}>
                  For a Free and United Europe: A Draft Manifesto (Ventotene Manifesto)
                </p>
                <p className="bib-entry__meta" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>1941. CVCE.eu / European University Institute archive.</p>
                <a href="https://www.cvce.eu/en/obj/the_ventotene_manifesto_1941-en-5ada4b99-7445-492f-9fad-7ebeb5f2a8b4.html" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)' }}>
                  cvce.eu — The Ventotene Manifesto (1941) <ExternalLink size={11} style={{ verticalAlign: 'middle' }} />
                </a>
              </div>
            </div>

            <div className="bib-entry hover-lift js-reveal" id="src-schuman" style={{ marginBottom: 'var(--space-6)', paddingBottom: 'var(--space-4)', borderBottom: 'var(--border-hairline)' }}>
              <div className="bib-entry__num" style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-bronze)', fontWeight: 600 }}>02</div>
              <div className="bib-entry__content">
                <p className="bib-entry__author" style={{ fontWeight: 600, color: 'var(--ink-navy)' }}>Schuman, Robert</p>
                <p className="bib-entry__title" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--ink-navy)' }}>
                  Declaration of 9 May 1950
                </p>
                <p className="bib-entry__meta" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>1950. European Commission Archive.</p>
                <a href="https://european-union.europa.eu/principles-countries-history/history-eu/1945-59/schuman-declaration-may-1950_en" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)' }}>
                  european-union.europa.eu — Schuman Declaration <ExternalLink size={11} style={{ verticalAlign: 'middle' }} />
                </a>
              </div>
            </div>

            <div className="bib-entry hover-lift js-reveal" id="src-maastricht" style={{ marginBottom: 'var(--space-6)', paddingBottom: 'var(--space-4)', borderBottom: 'var(--border-hairline)' }}>
              <div className="bib-entry__num" style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-bronze)', fontWeight: 600 }}>03</div>
              <div className="bib-entry__content">
                <p className="bib-entry__author" style={{ fontWeight: 600, color: 'var(--ink-navy)' }}>European Communities</p>
                <p className="bib-entry__title" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--ink-navy)' }}>
                  Treaty on European Union (Maastricht Treaty)
                </p>
                <p className="bib-entry__meta" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>Signed 7 February 1992. EUR-Lex CELEX:11992M/TXT.</p>
                <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A11992M%2FTXT" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)' }}>
                  eur-lex.europa.eu — CELEX:11992M/TXT <ExternalLink size={11} style={{ verticalAlign: 'middle' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sources;
