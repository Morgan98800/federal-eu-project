import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, BookOpen, ExternalLink, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <Link to="/" className="site-footer__wordmark" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-3)' }}>
            <ShieldCheck size={18} color="var(--accent-bronze)" />
            <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '18px' }}>FEDERAL VISION</span>
          </Link>
          <div className="site-footer__meta" style={{ maxWidth: '44ch', lineHeight: 'var(--leading-relaxed)' }}>
            An independent research repository outlining the structural mechanisms, historical basis, 
            and democratic necessity of a sovereign federal union in Europe.
          </div>
          <div style={{ marginTop: 'var(--space-6)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
            &copy; {new Date().getFullYear()} European Federal Research Initiative.<br />
            Published under Creative Commons Attribution 4.0 International License (CC BY 4.0).
          </div>
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', marginBottom: 'var(--space-4)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              RESEARCH MONOGRAPHS
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <Link to="/the-case" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <FileText size={13} color="var(--accent-bronze)" /> The Case for Federal Union
              </Link>
              <Link to="/archive" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <BookOpen size={13} color="var(--accent-bronze)" /> Federalist Thought Archive
              </Link>
              <Link to="/data-room" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <FileText size={13} color="var(--accent-bronze)" /> Data Room &amp; Metrics
              </Link>
              <Link to="/sources" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <BookOpen size={13} color="var(--accent-bronze)" /> Sources &amp; Bibliography
              </Link>
            </nav>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', marginBottom: 'var(--space-4)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              DOCUMENTATION
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <Link to="/colophon" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', textDecoration: 'none' }}>Colophon &amp; Methodology</Link>
              <a href="https://github.com/Morgan98800/federal-eu-project" target="_blank" rel="noreferrer" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                GitHub Repository <ExternalLink size={11} color="var(--text-tertiary)" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
