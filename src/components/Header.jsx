import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Moon, Sun, Menu } from 'lucide-react';

const Header = () => {
  const [isDark, setIsDark] = React.useState(false);
  
  React.useEffect(() => {
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

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__wordmark">FEDERAL VISION</Link>
        <nav className="site-nav">
          <ul className="site-nav__list">
            <li><NavLink to="/the-case" className={({ isActive }) => `site-nav__link \${isActive ? 'site-nav__link--active' : ''}`}>The Case</NavLink></li>
            <li><NavLink to="/archive" className={({ isActive }) => `site-nav__link \${isActive ? 'site-nav__link--active' : ''}`}>Archive</NavLink></li>
            <li><NavLink to="/data-room" className={({ isActive }) => `site-nav__link \${isActive ? 'site-nav__link--active' : ''}`}>Data Room</NavLink></li>
            <li><NavLink to="/sources" className={({ isActive }) => `site-nav__link \${isActive ? 'site-nav__link--active' : ''}`}>Sources</NavLink></li>
            <li>
              <button className="dark-toggle" onClick={toggleDark} aria-label="Toggle dark mode">
                {isDark ? <Sun size={14} /> : <Moon size={14} />}
              </button>
            </li>
          </ul>
          <button className="nav-toggle" aria-label="Menu">
            <Menu size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
