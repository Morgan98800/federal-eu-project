import { useState, useEffect, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { EU_MEMBER_STATES, EU_INSTITUTIONS } from './euData'
import { REAL_EU_MAP_PATHS, NON_EU_MAP_PATHS } from './euMapReal'
import EUGlobe3D from './components/EUGlobe3D'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
)

const LogoIcon = () => (
  <svg className="logo-icon" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="4"/>
    <g fill="currentColor">
      <circle cx="50" cy="15" r="3"/><circle cx="63" cy="20" r="3"/>
      <circle cx="73" cy="32" r="3"/><circle cx="73" cy="50" r="3"/>
      <circle cx="63" cy="68" r="3"/><circle cx="50" cy="73" r="3"/>
      <circle cx="37" cy="68" r="3"/><circle cx="27" cy="50" r="3"/>
      <circle cx="27" cy="32" r="3"/><circle cx="37" cy="20" r="3"/>
    </g>
  </svg>
)

function App() {
  const [selectedCountryName, setSelectedCountryName] = useState('France')
  const [hoveredCountryName, setHoveredCountryName] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [scrolled, setScrolled] = useState(false)

  // Institutional Modal
  const [isInstModalOpen, setIsInstModalOpen] = useState(false)
  const [activeInstTab, setActiveInstTab] = useState(0)

  // Scroll listener for sticky navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // GSAP Motion Suite
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Text Reveal
      gsap.from('.hero-content h1', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out'
      })

      gsap.from('.hero-content p', {
        opacity: 0,
        y: 30,
        duration: 0.9,
        delay: 0.2,
        ease: 'power3.out'
      })

      gsap.from('.cta-group', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out'
      })

      // Bento Stat Cards ScrollTrigger Reveal
      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 85%'
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out'
      })

      // Policy Cards Staggered Reveal
      gsap.from('.policy-card', {
        scrollTrigger: {
          trigger: '#policies',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      })
    })

    return () => ctx.revert()
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

  const policyPillars = [
    {
      icon: '🏛️',
      title: 'Federal Democracy',
      desc: 'Transition to a bicameral parliament and end unanimous voting. Every citizen\'s vote must carry equal weight across the continent.'
    },
    {
      icon: '🌍',
      title: 'Green Deal 2.0',
      desc: 'Achieve carbon neutrality by 2035 through massive investment in renewable grids and a circular economy mandate.'
    },
    {
      icon: '⚖️',
      title: 'Social Europe',
      desc: 'Harmonize labor rights and implement a European Minimum Income to ensure dignity for all citizens, everywhere.'
    },
    {
      icon: '💻',
      title: 'Digital Sovereignty',
      desc: 'Break Big Tech monopolies and build open-source public infrastructure to protect our data and democracy.'
    },
    {
      icon: '🤝',
      title: 'Rational Migration',
      desc: 'Replace the broken Dublin Regulation with a unified asylum policy and safe legal pathways.'
    },
    {
      icon: '🚀',
      title: 'Innovation Economy',
      desc: 'Shift taxation to financial giants and fund deep-tech startups to make Europe the global innovation leader.'
    }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="container nav-inner">
          <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <LogoIcon />
            Federal<span className="text-gold">EU</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#map-section">Data</a>
            <a href="#policies">Vision</a>
            <button className="btn-nav" onClick={() => setIsInstModalOpen(true)}>
              Join Movement
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="hero-header" id="about">
        <div className="bg-grid"></div>
        <div className="hero-grid">
          <div className="hero-content">
            <span className="eyebrow">The Next Chapter of History</span>
            <h1>Sovereign. Social.<br /><span className="text-gold">United.</span></h1>
            <p>The European Union is not just a market; it is a community of destiny. We visualize the path toward a true Federal Europe: democratic, powerful, and ready for the future.</p>
            <div className="cta-group">
              <a href="#policies" className="btn-primary">Explore Vision</a>
              <a href="#map-section" className="btn-secondary">View Data</a>
            </div>
          </div>

          <div className="hero-visual">
            <EUGlobe3D />
          </div>
        </div>
      </header>

      {/* Bento Grid Stats */}
      <section className="stats-section">
        <div className="bento-grid">
          <div className="stat-card">
            <span className="stat-val">27</span>
            <span className="stat-label">Member States</span>
          </div>
          <div className="stat-card">
            <span className="stat-val">448M</span>
            <span className="stat-label">Citizens</span>
          </div>
          <div className="stat-card">
            <span className="stat-val">24</span>
            <span className="stat-label">Official Languages</span>
          </div>
          <div className="stat-card">
            <span className="stat-val">€16.6T</span>
            <span className="stat-label">Combined GDP</span>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section id="map-section">
        <div className="container">
          <div className="section-header">
            <h2>The Federation</h2>
            <p>Click on any member state to explore its demographic and economic profile within the union.</p>
          </div>

          <div className="map-layout">
            <div className="map-wrapper">
              <svg viewBox="0 0 920 720" className="eu-real-map-svg">
                {/* Non-EU European background paths */}
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

            <div className="info-panel">
              {selectedCountry ? (
                <div>
                  <div className="panel-header">
                    <span className="panel-title">{selectedCountry.flag} {selectedCountry.name}</span>
                    <span className="panel-subtitle">{selectedCountry.capital} (Capital)</span>
                  </div>
                  <div className="data-list">
                    <div className="data-row">
                      <span className="data-label">Population</span>
                      <span className="data-value">{selectedCountry.population}</span>
                    </div>
                    <div className="data-row">
                      <span className="data-label">GDP (Nominal)</span>
                      <span className="data-value">{selectedCountry.gdp}</span>
                    </div>
                    <div className="data-row">
                      <span className="data-label">Foundation</span>
                      <span className="data-value">{selectedCountry.joined}</span>
                    </div>
                    <div className="data-row">
                      <span className="data-label">Region</span>
                      <span className="data-value">{selectedCountry.region}</span>
                    </div>
                  </div>
                  <p style={{ marginTop: '1.75rem', fontSize: '0.85rem', color: 'var(--slate)', lineHeight: 1.5 }}>
                    {selectedCountry.desc}
                  </p>
                </div>
              ) : (
                <div>
                  <div className="panel-header">
                    <span className="panel-title">European Union</span>
                    <span className="panel-subtitle">Brussels (De Facto)</span>
                  </div>
                  <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--slate)', lineHeight: 1.5 }}>
                    Select a country on the map to view specific national metrics contributing to the federal whole.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Member Directory Grid */}
      <section className="members-section">
        <div className="directory-header">
          <div>
            <h2 style={{ fontSize: '2.25rem' }}>Member States Directory (27)</h2>
            <p>Select any member state to highlight its geographic boundaries on the map.</p>
          </div>
          <div className="directory-search">
            <input
              type="text"
              placeholder="Search by country or capital..."
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

      {/* Policy Section (Clean Light Mode Contrast) */}
      <section id="policies">
        <div className="container">
          <h2>Six Pillars of Reform</h2>
          <div className="policy-grid">
            {policyPillars.map((pillar, idx) => (
              <div key={idx} className="policy-card">
                <span className="p-icon">{pillar.icon}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Overview Modal */}
      {isInstModalOpen && (
        <div className="modal-overlay" onClick={() => setIsInstModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Primary EU Institutions & Governance</h2>
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
              <h3 style={{ color: 'var(--white)' }}>{EU_INSTITUTIONS[activeInstTab].name}</h3>
              <p style={{ marginTop: '0.5rem' }}><strong>Seat:</strong> {EU_INSTITUTIONS[activeInstTab].city}</p>
              <p style={{ marginTop: '0.5rem' }}><strong>Role:</strong> {EU_INSTITUTIONS[activeInstTab].role}</p>
              <p style={{ marginTop: '0.5rem' }}><strong>Composition:</strong> {EU_INSTITUTIONS[activeInstTab].members}</p>

              <h4 style={{ marginTop: '1.25rem', color: 'var(--eu-gold)' }}>Key Responsibilities</h4>
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem' }}>
                {EU_INSTITUTIONS[activeInstTab].functions.map((fn, idx) => (
                  <li key={idx} style={{ marginBottom: '0.4rem', color: 'var(--slate)' }}>{fn}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer>
        <div className="container">
          <span className="footer-logo">Federal<span className="text-gold">EU</span></span>
          <p style={{ color: 'var(--slate)', maxWidth: '400px', margin: '0 auto' }}>
            Visualizing a united future. An independent project inspired by the pan-European movement.
          </p>
          <div className="copyright">
            &copy; 2026 Federal EU Project. Open Source.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
