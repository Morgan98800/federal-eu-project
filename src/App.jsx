import { useState, useEffect, useMemo } from 'react'
import { EU_MEMBER_STATES, EU_INSTITUTIONS } from './euData'
import { REAL_EU_MAP_PATHS, NON_EU_MAP_PATHS } from './euMapReal'
import './App.css'

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
)

const EUStars = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={`eu-stars-svg ${className}`} fill="currentColor">
    {[...Array(12)].map((_, i) => (
      <path
        key={i}
        d="M50 15L52.5 22.5H60L54 27.5L56.5 35L50 30L43.5 35L46 27.5L40 22.5H47.5L50 15Z"
        transform={`rotate(${i * 30} 50 50)`}
      />
    ))}
  </svg>
)

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [selectedCountryName, setSelectedCountryName] = useState('France')
  const [hoveredCountryName, setHoveredCountryName] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [scrolled, setScrolled] = useState(false)

  // Modals
  const [isInstModalOpen, setIsInstModalOpen] = useState(false)
  const [activeInstTab, setActiveInstTab] = useState(0)

  // Scroll handler for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for scroll entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('.animate-entrance')
    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  const selectedCountry = useMemo(() => {
    return EU_MEMBER_STATES.find((c) => c.name === selectedCountryName) || null
  }, [selectedCountryName])

  const filteredCountries = useMemo(() => {
    return EU_MEMBER_STATES.filter((c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.capital.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  const euStats = [
    { label: 'Member States', value: '27' },
    { label: 'Population', value: '448M' },
    { label: 'Official Languages', value: '24' },
    { label: 'GDP (Trillion)', value: '€16.6' }
  ]

  const euValues = [
    {
      title: 'Unity in Diversity',
      description: 'Celebrating our rich cultural heritage while working together for common goals.'
    },
    {
      title: 'Democracy & Freedom',
      description: 'Upholding democratic principles and fundamental freedoms across all member states.'
    },
    {
      title: 'Rule of Law',
      description: 'Ensuring that every citizen and every institution is subject to the law.'
    },
    {
      title: 'Human Dignity',
      description: 'The inviolable foundation of all our shared rights and freedoms.'
    }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <EUStars />
            <span>European Union</span>
          </div>
          <div className="nav-links">
            {['home', 'about', 'members', 'values', 'map'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={activeSection === section ? 'active' : ''}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content animate-entrance">
          <div className="hero-badge">
            <EUStars />
          </div>
          <h1 className="hero-title">United in Diversity</h1>
          <p className="hero-subtitle">
            A partnership for peace, prosperity, and shared democratic values since 1957.
          </p>
          <div className="hero-buttons">
            <button className="primary" onClick={() => setIsInstModalOpen(true)}>
              Institutional Overview
            </button>
            <a href="#map">
              <button className="secondary">Member Reports</button>
            </a>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {euStats.map((stat, i) => (
            <div key={i} className="stat-card animate-entrance" style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="section-container" id="values">
        <h2 className="animate-entrance">Foundational Values</h2>
        <div className="values-grid">
          {euValues.map((value, i) => (
            <div key={i} className="value-card animate-entrance delay-{i}">
              <div className="value-icon"><StarIcon /></div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Real Geographic Map Section */}
      <section className="map-section" id="map">
        <div className="section-container">
          <h2 className="animate-entrance">Territorial Overview</h2>
          <p className="animate-entrance" style={{ marginBottom: '1.5rem' }}>
            Interactive geographic map of the 27 European Union member states. Click on any country shape to view detailed information.
          </p>

          <div className="map-layout">
            <div className="map-container">
              <svg viewBox="0 0 920 720" className="eu-real-map-svg">
                {/* Non-EU European country background shapes */}
                <g className="non-eu-layer">
                  {NON_EU_MAP_PATHS.map((item, idx) => (
                    <path key={idx} d={item.d} className="non-eu-path" />
                  ))}
                </g>

                {/* Real Geographic EU Member State paths */}
                <g className="eu-layer">
                  {REAL_EU_MAP_PATHS.map((item) => {
                    const countryData = EU_MEMBER_STATES.find((c) => c.name === item.name)
                    const isSelected = selectedCountryName === item.name
                    const isHovered = hoveredCountryName === item.name

                    return (
                      <g key={item.name}>
                        <path
                          d={item.d}
                          className={`eu-country-path ${isSelected ? 'selected' : ''} ${isHovered ? 'hovered' : ''}`}
                          onMouseEnter={() => setHoveredCountryName(item.name)}
                          onMouseLeave={() => setHoveredCountryName(null)}
                          onClick={() => setSelectedCountryName(item.name)}
                        />
                        <text
                          x={item.cx}
                          y={item.cy}
                          textAnchor="middle"
                          className={`eu-map-label ${isSelected ? 'selected' : ''}`}
                        >
                          {countryData?.flag} {item.name}
                        </text>
                      </g>
                    )
                  })}
                </g>
              </svg>
            </div>

            {/* Map Detail Panel */}
            <div className="map-detail-panel">
              {selectedCountry ? (
                <div className="detail-content animate-entrance">
                  <h3>{selectedCountry.flag} {selectedCountry.name}</h3>
                  <div className="detail-stats">
                    <p><strong>Capital:</strong> <span>{selectedCountry.capital}</span></p>
                    <p><strong>Population:</strong> <span>{selectedCountry.population}</span></p>
                    <p><strong>EU Accession:</strong> <span>{selectedCountry.joined}</span></p>
                    <p><strong>GDP (Nominal):</strong> <span>{selectedCountry.gdp}</span></p>
                    <p><strong>Region:</strong> <span>{selectedCountry.region}</span></p>
                  </div>
                  <p className="detail-desc">{selectedCountry.desc}</p>
                  <button className="primary" style={{ marginTop: '1.25rem' }} onClick={() => setIsInstModalOpen(true)}>
                    View Institutional Report
                  </button>
                </div>
              ) : (
                <div className="detail-empty">
                  <EUStars />
                  <p>Select a member state on the map to view detailed information.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Member States Directory */}
      <section className="section-container" id="members">
        <div className="directory-header">
          <div>
            <h2>Member States (27)</h2>
            <p>Complete directory of all 27 European Union member states.</p>
          </div>
          <div className="directory-search">
            <input
              type="text"
              placeholder="Search country or capital..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="countries-grid">
          {filteredCountries.map((country) => {
            const isSelected = selectedCountryName === country.name

            return (
              <div
                key={country.name}
                className={`country-card ${isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedCountryName(country.name)}
              >
                <span className="country-name">{country.flag} {country.name}</span>
                {isSelected && <StarIcon />}
              </div>
            )
          })}
        </div>
      </section>

      {/* Institutional Overview Modal */}
      {isInstModalOpen && (
        <div className="modal-overlay" onClick={() => setIsInstModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Primary EU Institutions</h2>
              <button className="modal-close-btn" onClick={() => setIsInstModalOpen(false)}>✕</button>
            </div>

            <div className="inst-tabs">
              {EU_INSTITUTIONS.map((inst, idx) => (
                <button
                  key={inst.id}
                  className={`inst-tab-btn ${activeInstTab === idx ? 'active' : ''}`}
                  onClick={() => setActiveInstTab(idx)}
                >
                  {inst.name}
                </button>
              ))}
            </div>

            <div className="inst-content">
              <h3>{EU_INSTITUTIONS[activeInstTab].name}</h3>
              <p style={{ marginTop: '0.5rem' }}><strong>De Facto Seat:</strong> {EU_INSTITUTIONS[activeInstTab].city}</p>
              <p style={{ marginTop: '0.5rem' }}><strong>Role:</strong> {EU_INSTITUTIONS[activeInstTab].role}</p>
              <p style={{ marginTop: '0.5rem' }}><strong>Composition:</strong> {EU_INSTITUTIONS[activeInstTab].members}</p>

              <h4 style={{ marginTop: '1.25rem' }}>Key Responsibilities</h4>
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem' }}>
                {EU_INSTITUTIONS[activeInstTab].functions.map((fn, idx) => (
                  <li key={idx} style={{ marginBottom: '0.4rem', color: 'var(--text-muted)' }}>{fn}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>European Union</h4>
            <p>The European Union is a unique economic and political union between 27 European countries.</p>
          </div>
          <div className="footer-section">
            <h4>Institutions</h4>
            <a onClick={() => { setIsInstModalOpen(true); setActiveInstTab(0); }}>European Parliament</a>
            <a onClick={() => { setIsInstModalOpen(true); setActiveInstTab(1); }}>European Council</a>
            <a onClick={() => { setIsInstModalOpen(true); setActiveInstTab(2); }}>European Commission</a>
            <a onClick={() => { setIsInstModalOpen(true); setActiveInstTab(3); }}>European Central Bank</a>
          </div>
          <div className="footer-section">
            <h4>Information</h4>
            <a href="#map">Territorial Map</a>
            <a href="#members">Member States</a>
            <a href="#values">Core Values</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 European Union · Official Institutional Portal</p>
        </div>
      </footer>
    </div>
  )
}

export default App
