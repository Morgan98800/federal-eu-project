import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ShieldCheck, FileCheck, Layers, ExternalLink } from 'lucide-react';

const Colophon = () => {
  return (
    <div className="colophon-page" style={{ background: 'var(--paper)', minHeight: '100vh' }}>
      {/* Masthead */}
      <div className="page-masthead" style={{ borderBottom: 'var(--border-rule)', background: 'var(--paper-mid)', paddingBlock: 'var(--space-12)' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-bronze)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--space-4)' }}>
            <FileCheck size={14} />
            <span>INSTITUTIONAL COLOPHON &middot; PROVENANCE</span>
          </div>

          <h1 className="page-masthead__title js-reveal reveal-delay-1" id="colophon-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: 'var(--ink-navy)', marginBottom: 'var(--space-4)' }}>
            About &amp; Colophon
          </h1>

          <p className="page-masthead__deck js-reveal reveal-delay-2" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', color: 'var(--text-secondary)', maxWidth: '68ch', lineHeight: 'var(--leading-relaxed)' }}>
            A formal record of materials, methodology, visual design tokens, and technical provenance powering this research repository.
          </p>
        </div>
      </div>

      <section className="section" style={{ paddingBlock: 'var(--space-16)' }}>
        <div className="container--narrow">
          <h2 className="js-reveal" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>The Research Project</h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-6)' }}>
            The <strong>European Federal Research Initiative</strong> is an independent, non-partisan research project making the constitutional, economic, and security case for a sovereign federal union in Europe. It is not affiliated with, funded by, or endorsed by any EU institution or political party.
          </p>

          <hr style={{ marginBlock: 'var(--space-12)', borderColor: 'var(--rule-grey)' }} />

          <h2 className="js-reveal" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>Design Tokens &amp; Typography</h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-6)' }}>
            The visual identity uses a de-saturated archival descendant of traditional European emblems paired with sharp institutional typography:
          </p>

          <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 'var(--space-8)' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--ink-navy)' }}>
                <th style={{ textAlign: 'left', padding: 'var(--space-3)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>Role</th>
                <th style={{ textAlign: 'left', padding: 'var(--space-3)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>Typeface</th>
                <th style={{ textAlign: 'left', padding: 'var(--space-3)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>Source</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: 'var(--border-hairline)' }}>
                <td style={{ padding: 'var(--space-3)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>Editorial Display</td>
                <td style={{ padding: 'var(--space-3)', fontFamily: 'var(--font-serif)', fontWeight: 600 }}>Newsreader</td>
                <td style={{ padding: 'var(--space-3)', fontSize: 'var(--text-xs)' }}>Google Fonts / Production Type</td>
              </tr>
              <tr style={{ borderBottom: 'var(--border-hairline)' }}>
                <td style={{ padding: 'var(--space-3)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>Headings &amp; UI</td>
                <td style={{ padding: 'var(--space-3)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>Cabinet Grotesk</td>
                <td style={{ padding: 'var(--space-3)', fontSize: 'var(--text-xs)' }}>Fontshare</td>
              </tr>
              <tr style={{ borderBottom: 'var(--border-hairline)' }}>
                <td style={{ padding: 'var(--space-3)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>Body Copy</td>
                <td style={{ padding: 'var(--space-3)', fontFamily: 'var(--font-body)' }}>Satoshi / Inter</td>
                <td style={{ padding: 'var(--space-3)', fontSize: 'var(--text-xs)' }}>Fontshare</td>
              </tr>
              <tr>
                <td style={{ padding: 'var(--space-3)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>Metadata &amp; Data</td>
                <td style={{ padding: 'var(--space-3)', fontFamily: 'var(--font-mono)' }}>IBM Plex Mono</td>
                <td style={{ padding: 'var(--space-3)', fontSize: 'var(--text-xs)' }}>Google Fonts / IBM</td>
              </tr>
            </tbody>
          </table>

          <hr style={{ marginBlock: 'var(--space-12)', borderColor: 'var(--rule-grey)' }} />

          <h2 className="js-reveal" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>Technical Infrastructure</h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-4)' }}>
            Built as a self-contained modern Web application using React 18, Three.js 0.180, and Vite 8, compiled and deployed directly to GitHub Pages.
          </p>

          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginTop: 'var(--space-8)' }}>
            Repository Build: 2026 Edition &middot; Ref: DOC-EFRI-2026-EU-01
          </p>
        </div>
      </section>
    </div>
  );
};

export default Colophon;
