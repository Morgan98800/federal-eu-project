import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Moon, Sun, Menu, X, Printer, ShieldCheck } from 'lucide-react';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  useEffect(() => {
    const saved = localStorage.getItem('fve-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = saved === 'dark' || (!saved && prefersDark);
    setIsDark(isDarkMode);
    document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light';
  }, []);

  const toggleDark = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem('fve-theme', newTheme);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <Link to="/" className="site-header__wordmark" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '26px', height: '26px', borderRadius: '50%', border: '1.5px solid var(--accent-bronze)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(184, 146, 48, 0.1)'
            }}>
              <ShieldCheck size={14} color="var(--accent-bronze)" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '15px', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
                FEDERAL VISION
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--accent-bronze)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                EUROPEAN RESEARCH REPOSITORY
              </span>
            </div>
          </Link>

          <span className="inst-meta-badge" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '10px',
            color: 'var(--text-tertiary)', borderLeft: '1px solid var(--rule-grey)', paddingLeft: 'var(--space-4)',
            letterSpacing: '0.04em'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            REF: DOC-EFRI-2026
          </span>
        </div>

        <nav className="site-nav">
          <ul className={`site-nav__list ${mobileOpen ? 'open' : ''}`}>
            <li>
              <NavLink to="/the-case" onClick={() => setMobileOpen(false)} className={({ isActive }) => `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`}>
                The Case
              </NavLink>
            </li>
            <li>
              <NavLink to="/archive" onClick={() => setMobileOpen(false)} className={({ isActive }) => `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`}>
                Archive
              </NavLink>
            </li>
            <li>
              <NavLink to="/data-room" onClick={() => setMobileOpen(false)} className={({ isActive }) => `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`}>
                Data Room
              </NavLink>
            </li>
            <li>
              <NavLink to="/sources" onClick={() => setMobileOpen(false)} className={({ isActive }) => `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`}>
                Sources
              </NavLink>
            </li>
            <li>
              <NavLink to="/colophon" onClick={() => setMobileOpen(false)} className={({ isActive }) => `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`}>
                Colophon
              </NavLink>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button className="dark-toggle" onClick={handlePrint} title="Print Report" aria-label="Print Document">
                <Printer size={13} />
              </button>
              <button className="dark-toggle" onClick={toggleDark} title="Toggle Theme" aria-label="Toggle dark mode">
                {isDark ? <Sun size={13} /> : <Moon size={13} />}
              </button>
            </li>
          </ul>

          <button className="nav-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Menu">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
