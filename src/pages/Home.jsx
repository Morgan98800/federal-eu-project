import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ShaderHero from '../components/ShaderHero';
import ThreeDMap from '../components/ThreeDMap';
import { renderIntegrationIndex } from '../js/integration-index';
import { ArrowRight, BookOpen, Layers, BarChart3, FileCheck, Landmark } from 'lucide-react';

const Home = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && !chartRef.current.hasChildNodes()) {
      fetch('./src/data/integration-index.json')
        .then(r => r.json())
        .then(data => {
          renderIntegrationIndex('#home-index-wrapper', data, { compact: true });
        })
        .catch(e => console.error(e));
    }
  }, []);

  return (
    <div className="home-page">
      {/* Executive Institutional Masthead */}
      <section className="page-masthead" aria-labelledby="hero-title" style={{ position: 'relative', overflow: 'hidden', background: 'var(--paper)', borderBottom: 'var(--border-rule)' }}>
        <ShaderHero />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBlock: 'var(--space-16) var(--space-20)' }}>
          {/* Institutional Document Classification Strip */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '6px 14px',
            background: 'rgba(184, 146, 48, 0.08)', border: '1px solid var(--accent-bronze)', borderRadius: 'var(--radius-sm)',
            fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-bronze)', marginBottom: 'var(--space-6)',
            letterSpacing: '0.08em', textTransform: 'uppercase'
          }}>
            <Landmark size={14} />
            <span>POLICY MEMORANDUM &middot; EUROPEAN CONSTITUTIONAL ARCHITECTURE</span>
          </div>

          <h1 className="page-masthead__title js-reveal reveal-delay-1" id="hero-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: '1.2', maxWidth: '24ch', marginBottom: 'var(--space-6)', color: 'var(--ink-navy)' }}>
            To secure its political agency and economic model in a multipolar world, 
            Europe must transition from a treaty-based confederation to a sovereign federal republic.
          </h1>

          <div className="lead-paragraph js-reveal reveal-delay-2" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', color: 'var(--text-secondary)', maxWidth: '64ch', lineHeight: 'var(--leading-relaxed)' }}>
            <span style={{ float: 'left', fontFamily: 'var(--font-serif)', fontSize: '4.2em', fontWeight: 700, lineHeight: 0.75, marginRight: '0.12em', color: 'var(--accent-bronze)' }}>T</span>
            his research monograph outlines the structural mechanisms, historical basis, and democratic necessity of a sovereign European federation. By uniting 26 member states under a bicameral federal parliament, single defence budget, and fiscal competence, Europe establishes true strategic autonomy.
          </div>
        </div>
      </section>

      {/* 3D Cartographic Showcase Section */}
      <section className="section" aria-labelledby="map-3d-heading" style={{ background: 'var(--paper-mid)', borderBottom: 'var(--border-hairline)', paddingTop: 'var(--space-16)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-6)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
            <div>
              <span className="section-label">
                <Layers size={13} color="var(--accent-bronze)" /> CARTOGRAPHIC MODELING
              </span>
              <h2 className="js-reveal" id="map-3d-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', margin: 0, marginTop: 'var(--space-2)' }}>
                The United States of Europe — 3D Speculative Map
              </h2>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
              MODELING: NATURAL EARTH DATA &middot; MERCATOR PROJECTION &middot; 26 STATES
            </div>
          </div>

          <p style={{ color: 'var(--text-secondary)', maxWidth: '68ch', marginBottom: 'var(--space-6)', lineHeight: 'var(--leading-relaxed)' }}>
            An interactive 3D cartography of a sovereign European federation: 26 federal states highlighted in relief alongside neighboring sovereign territories, anchored by a federal district in Brussels.
          </p>

          <div className="js-reveal" style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--rule-grey)', boxShadow: 'var(--shadow-md)' }}>
            <ThreeDMap />
          </div>
        </div>
      </section>

      {/* European Integration Index Section */}
      <section className="section" aria-labelledby="index-heading">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-6)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
            <div>
              <span className="section-label">
                <BarChart3 size={13} color="var(--accent-bronze)" /> COMPOSITE DATA SERIES
              </span>
              <h2 className="js-reveal" id="index-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', margin: 0, marginTop: 'var(--space-2)' }}>
                European Integration Index, 2006–2023
              </h2>
            </div>
            <Link to="/data-room" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              Explore Data Room <ArrowRight size={12} />
            </Link>
          </div>

          <figure className="chart-figure js-reveal" aria-label="Line chart showing the composite European Integration Index">
            <div className="integration-index-wrapper" id="home-index-wrapper" ref={chartRef} style={{ minHeight: '220px', background: 'var(--paper-mid)', border: 'var(--border-hairline)', borderRadius: 'var(--radius-sm)', padding: 'var(--space-6)' }}>
            </div>
            <figcaption style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginTop: 'var(--space-4)', borderTop: 'var(--border-hairline)', paddingTop: 'var(--space-3)' }}>
              Composite index tracking public support, defence pooling, fiscal capacity, and competence integration across 17 years.
              See the <Link to="/data-room">Data Room</Link> for full interactive breakdowns and <Link to="/sources">Sources &amp; Methodology</Link> for weighting parameters.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Institutional Repository Entry Grid */}
      <section className="section" aria-labelledby="sections-heading" style={{ borderTop: 'var(--border-hairline)', background: 'var(--paper-mid)' }}>
        <div className="container">
          <span className="section-label">
            <BookOpen size={13} color="var(--accent-bronze)" /> MONOGRAPH CONTENTS
          </span>
          <h2 className="js-reveal" id="sections-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-8)' }}>
            Research Repository Sections
          </h2>

          <nav className="entry-grid" aria-label="Site sections" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-6)' }}>
            <Link className="entry-card hover-lift" to="/the-case" style={{ background: 'var(--paper)', padding: 'var(--space-6)', border: '1px solid var(--rule-grey)', borderRadius: 'var(--radius-md)', textDecoration: 'none', color: 'inherit' }}>
              <span className="entry-card__num" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', fontWeight: 600 }}>MONOGRAPH 01</span>
              <h3 className="entry-card__title" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', marginTop: 'var(--space-2)', marginBottom: 'var(--space-3)', color: 'var(--ink-navy)' }}>
                The Case for Union
              </h3>
              <p className="entry-card__excerpt" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                The constitutional argument for a federal Europe — analyzing historical precedent, economic fragmentation, democratic legitimacy, and security imperative.
              </p>
              <div style={{ marginTop: 'var(--space-6)', display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', fontWeight: 600 }}>
                Read Monograph <ArrowRight size={12} />
              </div>
            </Link>

            <Link className="entry-card hover-lift" to="/archive" style={{ background: 'var(--paper)', padding: 'var(--space-6)', border: '1px solid var(--rule-grey)', borderRadius: 'var(--radius-md)', textDecoration: 'none', color: 'inherit' }}>
              <span className="entry-card__num" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', fontWeight: 600 }}>DOCUMENTATION 02</span>
              <h3 className="entry-card__title" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', marginTop: 'var(--space-2)', marginBottom: 'var(--space-3)', color: 'var(--ink-navy)' }}>
                Historical Archive
              </h3>
              <p className="entry-card__excerpt" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                A chronological, citation-backed timeline of European federalist thought, constitutional proposals, and treaty developments from 1941 to present.
              </p>
              <div style={{ marginTop: 'var(--space-6)', display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', fontWeight: 600 }}>
                Access Timeline <ArrowRight size={12} />
              </div>
            </Link>

            <Link className="entry-card hover-lift" to="/data-room" style={{ background: 'var(--paper)', padding: 'var(--space-6)', border: '1px solid var(--rule-grey)', borderRadius: 'var(--radius-md)', textDecoration: 'none', color: 'inherit' }}>
              <span className="entry-card__num" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', fontWeight: 600 }}>DATA BANK 03</span>
              <h3 className="entry-card__title" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', marginTop: 'var(--space-2)', marginBottom: 'var(--space-3)', color: 'var(--ink-navy)' }}>
                Data Room &amp; Models
              </h3>
              <p className="entry-card__excerpt" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                Visualised datasets: Eurobarometer public support, member-state GDP fragmentation, defence pooling inefficiencies, and scenario modeling.
              </p>
              <div style={{ marginTop: 'var(--space-6)', display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', fontWeight: 600 }}>
                Open Data Room <ArrowRight size={12} />
              </div>
            </Link>

            <Link className="entry-card hover-lift" to="/sources" style={{ background: 'var(--paper)', padding: 'var(--space-6)', border: '1px solid var(--rule-grey)', borderRadius: 'var(--radius-md)', textDecoration: 'none', color: 'inherit' }}>
              <span className="entry-card__num" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', fontWeight: 600 }}>BIBLIOGRAPHY 04</span>
              <h3 className="entry-card__title" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', marginTop: 'var(--space-2)', marginBottom: 'var(--space-3)', color: 'var(--ink-navy)' }}>
                Sources &amp; References
              </h3>
              <p className="entry-card__excerpt" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                A fully cited bibliography: primary treaty texts, Eurostat databases, court rulings, and scholarly monographs with multi-format citation export.
              </p>
              <div style={{ marginTop: 'var(--space-6)', display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', fontWeight: 600 }}>
                View Bibliography <ArrowRight size={12} />
              </div>
            </Link>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Home;
