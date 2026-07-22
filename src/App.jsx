import { useState, useEffect, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { EU_MEMBER_STATES, EU_INSTITUTIONS } from './euData'
import { REAL_EU_MAP_PATHS, NON_EU_MAP_PATHS } from './euMapReal'
import EUGlobe3D from './components/EUGlobe3D'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
)

const EUSvgLogo = () => (
  <svg viewBox="0 0 100 100" fill="none" width="32" height="32">
    <circle cx="50" cy="50" r="48" fill="#003399"/>
    <g fill="#FFCC00">
      <circle cx="50" cy="15" r="3.5"/><circle cx="63" cy="20" r="3.5"/>
      <circle cx="73" cy="32" r="3.5"/><circle cx="73" cy="50" r="3.5"/>
      <circle cx="63" cy="68" r="3.5"/><circle cx="50" cy="73" r="3.5"/>
      <circle cx="37" cy="68" r="3.5"/><circle cx="27" cy="50" r="3.5"/>
      <circle cx="27" cy="32" r="3.5"/><circle cx="37" cy="20" r="3.5"/>
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

  // Scroll listener for sticky navbar background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
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

      gsap.from('.hero-buttons-row', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out'
      })

      gsap.from('.stat-item', {
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        delay: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.4)'
      })

      // Policy Cards Staggered ScrollTrigger
      gsap.from('.policy-card', {
        scrollTrigger: {
          trigger: '#policies',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      })

      // Map Section Entrance
      gsap.from('#map-section', {
        scrollTrigger: {
          trigger: '#map-section',
          start: 'top 85%'
        },
        opacity: 0,
        y: 40,
        duration: 0.9,
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
      title: 'European Federation',
      desc: 'We must evolve from a confederation of states into a true federal democracy. This means a bicameral parliament, ending unanimous voting in the Council, and a directly elected President.'
    },
    {
      icon: '🌍',
      title: 'Climate Action',
      desc: 'Achieve carbon neutrality by 2035. We propose a massive "Green Deal" investment plan, a circular economy mandate, and a unified European energy grid to end fossil fuel dependence.'
    },
    {
      icon: '⚖️',
      title: 'Social Justice',
      desc: 'Implement a European Minimum Income to fight poverty everywhere. Harmonize labor rights, ensure gender parity in all boards, and protect LGBTQ+ rights across all 27 states.'
    },
    {
      icon: '💻',
      title: 'Digital Revolution',
      desc: 'Break Big Tech monopolies. Enforce strict data sovereignty (GDPR+), invest in open-source public infrastructure, and make digital skills a fundamental right for every citizen.'
    },
    {
      icon: '🤝',
      title: 'Migration & Integration',
      desc: 'Replace the broken Dublin Regulation with a unified asylum policy. Create safe legal pathways for migration and robust integration programs to turn demographics into strength.'
    },
    {
      icon: '🚀',
      title: 'Economic Innovation',
      desc: 'Shift taxation from labor to digital giants and financial transactions. Fund deep-tech startups via a sovereign venture capital fund and complete the Single Market for services.'
    }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <EUSvgLogo />
            <span>Federal<span style={{ color: 'var(--volt-purple)' }}>EU</span></span>
          </a>
          <div className="nav-links">
            <a href="#vision">Vision</a>
            <a href="#map-section">Member States</a>
            <a href="#policies">Policies</a>
            <button className="btn" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }} onClick={() => setIsInstModalOpen(true)}>
              Join Movement
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Header with 3D Globe */}
      <header className="hero-header" id="vision">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>One People.<br /><span className="gradient-text">One Future.</span></h1>
            <p>The European Union is more than a market. It is a community of destiny. We advocate for a true Federal Europe: sovereign, social, and sustainable.</p>
            <div className="hero-buttons-row">
              <a href="#policies" className="btn">Discover The Plan</a>
              <a href="#map-section" className="btn secondary">Explore Map</a>
            </div>
            
            <div className="stats-row">
              <div className="stat-item">
                <h3>27</h3>
                <p>Nations</p>
              </div>
              <div className="stat-item">
                <h3>448M</h3>
                <p>Citizens</p>
              </div>
              <div className="stat-item">
                <h3>€16.6T</h3>
                <p>GDP</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <EUGlobe3D />
          </div>
        </div>
      </header>

      {/* Interactive Real Geographic Map Section */}
      <section id="map-section">
        <div className="map-header">
          <h2>The Federation</h2>
          <p>Explore the 27 member states. Click on any country shape to view its profile within the union.</p>
        </div>
        
        <div className="map-interface">
          <div className="svg-container">
            <svg viewBox="0 0 920 720" className="eu-real-map-svg">
              {/* Background Non-EU European shapes */}
              <g className="non-eu-layer">
                {NON_EU_MAP_PATHS.map((item, idx) => (
                  <path key={idx} d={item.d} className="non-eu-path" />
                ))}
              </g>

              {/* Real Geographic EU Member State shapes */}
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
                <h3>{selectedCountry.flag} {selectedCountry.name}</h3>
                <span className="capital">{selectedCountry.capital} (Capital)</span>
                
                <div className="data-grid">
                  <div className="data-box">
                    <label>Population</label>
                    <strong>{selectedCountry.population}</strong>
                  </div>
                  <div className="data-box">
                    <label>GDP (Nominal)</label>
                    <strong>{selectedCountry.gdp}</strong>
                  </div>
                  <div className="data-box">
                    <label>Joined</label>
                    <strong>{selectedCountry.joined}</strong>
                  </div>
                  <div className="data-box">
                    <label>Region</label>
                    <strong>{selectedCountry.region}</strong>
                  </div>
                </div>
                
                <p style={{ marginTop: '1.75rem', fontSize: '0.9rem', color: '#666', lineHeight: 1.5 }}>
                  {selectedCountry.desc}
                </p>
              </div>
            ) : (
              <div>
                <h3>European Union</h3>
                <span className="capital">Brussels (De Facto Capital)</span>
                <p style={{ color: '#666' }}>Select a country on the map to visualize its specific demographic and economic contribution to the Federal project.</p>
              </div>
            )}
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

      {/* Policy Pillars (Volt Europa Style) */}
      <section id="policies" className="policies-section">
        <div className="section-head">
          <h2>Six Pillars of Change</h2>
          <p>Inspired by the Volt Europa movement, our roadmap addresses the biggest challenges of our time with pan-European solutions.</p>
        </div>

        <div className="policy-grid">
          {policyPillars.map((pillar, idx) => (
            <div key={idx} className="policy-card">
              <div className="card-icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
              <a onClick={() => setIsInstModalOpen(true)} className="card-link">Read Manifesto →</a>
            </div>
          ))}
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
              <h3 style={{ color: 'var(--eu-blue)' }}>{EU_INSTITUTIONS[activeInstTab].name}</h3>
              <p style={{ marginTop: '0.5rem' }}><strong>Seat:</strong> {EU_INSTITUTIONS[activeInstTab].city}</p>
              <p style={{ marginTop: '0.5rem' }}><strong>Role:</strong> {EU_INSTITUTIONS[activeInstTab].role}</p>
              <p style={{ marginTop: '0.5rem' }}><strong>Composition:</strong> {EU_INSTITUTIONS[activeInstTab].members}</p>

              <h4 style={{ marginTop: '1.25rem', color: 'var(--volt-purple)' }}>Key Responsibilities</h4>
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem' }}>
                {EU_INSTITUTIONS[activeInstTab].functions.map((fn, idx) => (
                  <li key={idx} style={{ marginBottom: '0.4rem', color: '#555' }}>{fn}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>Federal EU Project</h2>
            <p>An independent visualization project advocating for a united, sovereign, and democratic Europe. Inspired by the pan-European Volt movement.</p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="#vision">Our Vision</a></li>
              <li><a href="#map-section">Data Map</a></li>
              <li><a href="#policies">Policy Pillars</a></li>
              <li><a onClick={() => setIsInstModalOpen(true)}>Institutions</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Involved</h4>
            <ul>
              <li><a onClick={() => setIsInstModalOpen(true)}>Join Movement</a></li>
              <li><a onClick={() => setIsInstModalOpen(true)}>Volunteer</a></li>
              <li><a onClick={() => setIsInstModalOpen(true)}>Donate</a></li>
              <li><a onClick={() => setIsInstModalOpen(true)}>Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          &copy; 2026 Federal EU Project. Open Source Initiative. Not officially affiliated with EU institutions.
        </div>
      </footer>
    </div>
  )
}

export default App
