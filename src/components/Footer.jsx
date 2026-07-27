import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <Link to="/" className="site-footer__wordmark">FEDERAL VISION</Link>
          <div className="site-footer__meta">
            A project outlining the structural mechanisms, historical basis, 
            and democratic necessity of a sovereign federal republic in Europe.
          </div>
          <div style={{ marginTop: 'var(--space-6)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
            &copy; {new Date().getFullYear()} Federal Vision Project.<br />
            An open-source initiative.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-12)' }}>
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ink-navy)', marginBottom: 'var(--space-4)', letterSpacing: 'var(--tracking-wide)' }}>EXPLORE</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <Link to="/the-case" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', textDecoration: 'none' }}>The Case</Link>
              <Link to="/archive" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', textDecoration: 'none' }}>Archive</Link>
              <Link to="/data-room" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', textDecoration: 'none' }}>Data Room</Link>
              <Link to="/sources" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', textDecoration: 'none' }}>Sources</Link>
            </nav>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ink-navy)', marginBottom: 'var(--space-4)', letterSpacing: 'var(--tracking-wide)' }}>PROJECT</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <Link to="/colophon" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', textDecoration: 'none' }}>Colophon</Link>
              <a href="https://github.com/Morgan98800/federal-eu-project" target="_blank" rel="noreferrer" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', textDecoration: 'none' }}>GitHub Repository</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
