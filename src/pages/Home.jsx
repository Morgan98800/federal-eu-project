import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ShaderHero from '../components/ShaderHero';
import ThreeDMap from '../components/ThreeDMap';
import { renderIntegrationIndex } from '../js/integration-index';

const Home = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // We only want to render once
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
      {/* Masthead */}
      <section className="page-masthead" aria-labelledby="hero-title" style={{ position: 'relative', overflow: 'hidden' }}>
        <ShaderHero />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBlock: 'var(--space-20)' }}>
          <p className="page-masthead__overline js-reveal reveal-fast">Federal Vision for Europe</p>
          <h1 className="page-masthead__title js-reveal reveal-delay-1" id="hero-title">
            To secure its political agency and economic model in a multipolar world, 
            Europe must transition from a treaty-based confederation to a sovereign federal republic.
          </h1>
          <p className="page-masthead__deck js-reveal reveal-delay-2">
            This project outlines the structural mechanisms, historical basis, and democratic necessity of that union.
          </p>
        </div>
      </section>

      {/* 3D Map Showcase Section */}
      <section className="section" aria-labelledby="map-3d-heading" style={{ background: 'var(--paper-mid)', borderBottom: 'var(--border-hairline)', paddingTop: 'var(--space-12)' }}>
        <div className="container">
          <span className="section-label">Interactive Cartography</span>
          <h2 className="js-reveal" id="map-3d-heading" style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-2)' }}>
            The United States of Europe — 3D Speculative Map
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '68ch', marginBottom: 'var(--space-6)', lineHeight: 'var(--leading-relaxed)' }}>
            An interactive 3D vision of a sovereign European federation: 26 states with real extruded boundaries, island beacons, and a federal district in Brussels. Drag to orbit, scroll to zoom, or fly the flag.
          </p>
          <div className="js-reveal" style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <ThreeDMap />
          </div>
        </div>
      </section>

      {/* European Integration Index Section */}
      <section className="section" aria-labelledby="index-heading">
        <div className="container">
          <span className="section-label">The Union Today</span>
          <h2 className="js-reveal" id="index-heading" style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)' }}>
            European Integration Index, 2006–2023
          </h2>
          <figure className="chart-figure js-reveal" aria-label="Line chart showing the composite European Integration Index">
            <div className="integration-index-wrapper" id="home-index-wrapper" ref={chartRef} style={{ minHeight: '180px' }}>
            </div>
            <figcaption>
              Composite index of public support, defence pooling, fiscal capacity, and competence.
              See the <Link to="/data-room">Data Room</Link> for the full interactive model and <Link to="/sources">Sources &amp; Methodology</Link> for the complete weighting formula.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Entry Points Grid */}
      <section className="section" aria-labelledby="sections-heading" style={{ borderTop: 'var(--border-hairline)' }}>
        <div className="container">
          <h2 className="js-reveal section-label" id="sections-heading" style={{ fontSize: 'var(--text-xs)' }}>
            Contents
          </h2>
          <nav className="entry-grid" aria-label="Site sections">
            <Link className="entry-card hover-lift" to="/the-case">
              <span className="entry-card__num">01</span>
              <span className="entry-card__title">The Case</span>
              <span className="entry-card__excerpt">
                The argument for a federal Europe — historical, economic, democratic, and security rationale.
              </span>
              <span className="entry-card__arrow">&rarr;</span>
            </Link>
            <Link className="entry-card hover-lift" to="/archive">
              <span className="entry-card__num">02</span>
              <span className="entry-card__title">Archive</span>
              <span className="entry-card__excerpt">
                A chronological, citation-backed timeline of European federalist thought and integration.
              </span>
              <span className="entry-card__arrow">&rarr;</span>
            </Link>
            <Link className="entry-card hover-lift" to="/data-room">
              <span className="entry-card__num">03</span>
              <span className="entry-card__title">Data Room</span>
              <span className="entry-card__excerpt">
                Real, sourced visualisations: Eurobarometer support over time, member-state GDP fragmentation, defence spending.
              </span>
              <span className="entry-card__arrow">&rarr;</span>
            </Link>
            <Link className="entry-card hover-lift" to="/sources">
              <span className="entry-card__num">04</span>
              <span className="entry-card__title">Sources</span>
              <span className="entry-card__excerpt">
                A real bibliography: primary treaty texts, Eurostat datasets, and named scholarly works.
              </span>
              <span className="entry-card__arrow">&rarr;</span>
            </Link>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Home;
