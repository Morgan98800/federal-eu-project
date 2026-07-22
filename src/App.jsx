import { useState, useMemo } from 'react'
import { EU_MEMBER_STATES, EU_INSTITUTIONS } from './euData'
import { REAL_EU_MAP_PATHS, NON_EU_MAP_PATHS } from './euMapReal'
import CommandPaletteModal from './components/CommandPaletteModal'
import './App.css'

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
)

const EUStarsLogo = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
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
  const [selectedCountryName, setSelectedCountryName] = useState('France')
  const [hoveredCountryName, setHoveredCountryName] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeSegmentView, setActiveSegmentView] = useState('map')

  // Command Palette & Institutional Modal State
  const [isCmdPaletteOpen, setIsCmdPaletteOpen] = useState(false)
  const [isInstModalOpen, setIsInstModalOpen] = useState(false)
  const [activeInstTab, setActiveInstTab] = useState(0)

  // Accordion open states for 6 Policy Pillars
  const [openPillarIdx, setOpenPillarIdx] = useState(0)

  const selectedCountry = useMemo(() => {
    return EU_MEMBER_STATES.find((c) => c.name === selectedCountryName) || null
  }, [selectedCountryName])

  const filteredCountries = useMemo(() => {
    return EU_MEMBER_STATES.filter((c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.capital.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  const policyFramework = [
    {
      num: 'PILLAR I',
      title: 'Bicameral Governance & Democratic Sovereignty',
      desc: 'Transitioning governance from intergovernmental vetoes to a true bicameral federal legislature. Ending qualified majority bottlenecks in Council decisions while electing the President directly.'
    },
    {
      num: 'PILLAR II',
      title: 'Climate Neutrality Mandate 2035',
      desc: 'Establishing a unified pan-European energy grid and binding industrial decarbonization standards to achieve full continental carbon neutrality by 2035.'
    },
    {
      num: 'PILLAR III',
      title: 'European Social Minimum Guarantee',
      desc: 'Harmonizing labor protections and enforcing a European Minimum Income standard across all 27 member states to eliminate regional poverty and inequality.'
    },
    {
      num: 'PILLAR IV',
      title: 'Digital Sovereignty & Public Infrastructure',
      desc: 'Enforcing strict data sovereignty (GDPR+), regulating systemic AI monopolies, and investing in open-source digital public goods accessible to all citizens.'
    },
    {
      num: 'PILLAR V',
      title: 'Asylum & Border Reform',
      desc: 'Replacing the Dublin Regulation with a unified, humane pan-European asylum authority featuring transparent legal pathways and shared institutional responsibility.'
    },
    {
      num: 'PILLAR VI',
      title: 'Single Market & Innovation Integration',
      desc: 'Completing the Single Market for financial services and capital, shifting tax burdens onto multinational tech conglomerates, and funding strategic deep-tech ventures.'
    }
  ]

  return (
    <div className="app">
      {/* Skip Link for Screen Readers & Keyboard Users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Top Banner */}
      <div className="top-banner" role="region" aria-label="Official Header Banner">
        <div className="top-banner-inner">
          <span>European Union · Official Institutional Archive</span>
          <span>Treaty & Data Series · 2026</span>
        </div>
      </div>

      {/* Navigation Header */}
      <header>
        <nav aria-label="Main Navigation">
          <div className="nav-inner">
            <a
              href="#main-content"
              className="logo"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              aria-label="European Union Home"
            >
              <EUStarsLogo />
              <span>European Union</span>
            </a>

            <div className="nav-links">
              <a href="#overview">Overview</a>
              <a href="#map-section">Territorial Map</a>
              <a href="#members">Member States</a>
              <a href="#policies">Policy Framework</a>

              {/* Command Palette Trigger */}
              <button
                type="button"
                className="command-trigger-badge"
                onClick={() => setIsCmdPaletteOpen(true)}
                aria-label="Open Archive Search Dialog (Shortcut Meta K)"
              >
                <span>🔍 Search Archives</span>
                <kbd>⌘ K</kbd>
              </button>

              <button
                type="button"
                className="btn primary"
                onClick={() => setIsInstModalOpen(true)}
              >
                Institutional Records
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Command Palette Modal */}
      <CommandPaletteModal
        isOpen={isCmdPaletteOpen}
        onClose={() => setIsCmdPaletteOpen(false)}
        onSelectCountry={(name) => {
          setSelectedCountryName(name)
          setActiveSegmentView('map')
          document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' })
        }}
        onOpenInstitution={(idx) => {
          setActiveInstTab(idx)
          setIsInstModalOpen(true)
        }}
      />

      {/* Main Content Landmark */}
      <main id="main-content">
        {/* Hero Section */}
        <section className="hero-header" id="overview" aria-labelledby="page-title">
          <div className="hero-grid">
            <div className="hero-content">
              {/* Breadcrumb Navigation */}
              <nav className="breadcrumb-nav" aria-label="Breadcrumb">
                <a href="#">European Union</a>
                <span className="breadcrumb-separator">/</span>
                <a href="#">Institutional Archives</a>
                <span className="breadcrumb-separator">/</span>
                <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Federal Overview</span>
              </nav>

              <h1 id="page-title">United in Diversity:<br />A Federal Vision for Europe</h1>
              <p>
                The European Union is more than a commercial market; it is a constitutional community of shared democratic destiny. This archive outlines key indicators, territorial boundaries, and foundational policy directives across all 27 member states.
              </p>
              <div className="hero-buttons-row">
                <button
                  type="button"
                  className="btn primary"
                  onClick={() => setIsInstModalOpen(true)}
                >
                  Read Institutional Report
                </button>
                <button
                  type="button"
                  className="btn secondary"
                  onClick={() => setIsCmdPaletteOpen(true)}
                >
                  <span>Search Archives</span>
                  <kbd style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>⌘ K</kbd>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Stats */}
        <section className="stats-section" aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="sr-only" style={{ display: 'none' }}>Key Indicators</h2>
          <div className="container">
            <div className="bento-grid">
              <div className="bento-card">
                <span className="bento-val">27</span>
                <span className="bento-label">Sovereign Member States</span>
              </div>
              <div className="bento-card">
                <span className="bento-val">448M</span>
                <span className="bento-label">Combined Population</span>
              </div>
              <div className="bento-card">
                <span className="bento-val">24</span>
                <span className="bento-label">Official Languages</span>
              </div>
              <div className="bento-card">
                <span className="bento-val">€16.6T</span>
                <span className="bento-label">Combined Nominal GDP</span>
              </div>
            </div>
          </div>
        </section>

        {/* Vector Map Section */}
        <section id="map-section" aria-labelledby="map-heading">
          <div className="container">
            <div className="section-header">
              <div>
                <h2 id="map-heading">Territorial Overview & Data Map</h2>
                <p>Vector mapping and statistical data repository for European Union member states.</p>
              </div>

              {/* Segmented Control */}
              <div className="segmented-control" role="tablist" aria-label="View Switcher">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeSegmentView === 'map'}
                  className={`segmented-btn ${activeSegmentView === 'map' ? 'active' : ''}`}
                  onClick={() => setActiveSegmentView('map')}
                >
                  🌍 Vector Map
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeSegmentView === 'directory'}
                  className={`segmented-btn ${activeSegmentView === 'directory' ? 'active' : ''}`}
                  onClick={() => setActiveSegmentView('directory')}
                >
                  📋 State Directory
                </button>
              </div>
            </div>

            {activeSegmentView === 'map' ? (
              <div className="map-layout">
                <div className="map-wrapper">
                  <svg viewBox="0 0 920 720" className="eu-real-map-svg" aria-label="Interactive map of Europe">
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

                {/* Data Panel */}
                <div className="info-panel" aria-live="polite">
                  {selectedCountry ? (
                    <div>
                      <div className="panel-header">
                        <span className="panel-title">{selectedCountry.flag} {selectedCountry.name}</span>
                        <span className="panel-subtitle">Official State Profile</span>
                      </div>

                      <table className="data-table">
                        <tbody>
                          <tr>
                            <td className="data-label">Capital City</td>
                            <td className="data-value">{selectedCountry.capital}</td>
                          </tr>
                          <tr>
                            <td className="data-label">Population</td>
                            <td className="data-value">{selectedCountry.population}</td>
                          </tr>
                          <tr>
                            <td className="data-label">Nominal GDP</td>
                            <td className="data-value">{selectedCountry.gdp}</td>
                          </tr>
                          <tr>
                            <td className="data-label">EU Accession</td>
                            <td className="data-value">{selectedCountry.joined}</td>
                          </tr>
                          <tr>
                            <td className="data-label">Region</td>
                            <td className="data-value">{selectedCountry.region}</td>
                          </tr>
                        </tbody>
                      </table>

                      <p className="detail-desc">{selectedCountry.desc}</p>
                    </div>
                  ) : (
                    <div>
                      <div className="panel-header">
                        <span className="panel-title">European Union</span>
                        <span className="panel-subtitle">Institutional Center</span>
                      </div>
                      <p>Select any member state on the map to review national demographic and economic parameters.</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="countries-grid">
                {EU_MEMBER_STATES.map((country) => {
                  const isSelected = selectedCountryName === country.name

                  return (
                    <button
                      type="button"
                      key={country.name}
                      className={`country-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedCountryName(country.name)
                        setActiveSegmentView('map')
                      }}
                      aria-label={`Select ${country.name}`}
                    >
                      <div>
                        <div className="country-name">{country.flag} {country.name}</div>
                        <div className="country-sub">{country.capital} · {country.gdp}</div>
                      </div>
                      {isSelected && <StarIcon />}
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        </section>

        {/* Member Directory Section */}
        <section className="members-section" id="members" aria-labelledby="directory-heading">
          <div className="container">
            <div className="directory-header">
              <div>
                <h2 id="directory-heading">Member States Directory (27)</h2>
                <p>Complete official register of European Union member nations.</p>
              </div>
              <div className="directory-search" role="search">
                <input
                  type="text"
                  placeholder="Search member state or capital..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="Filter member states by name or capital"
                />
              </div>
            </div>

            <div className="countries-grid">
              {filteredCountries.map((country) => {
                const isSelected = selectedCountryName === country.name

                return (
                  <button
                    type="button"
                    key={country.name}
                    className={`country-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => setSelectedCountryName(country.name)}
                    aria-label={`Select ${country.name}`}
                  >
                    <div>
                      <div className="country-name">{country.flag} {country.name}</div>
                      <div className="country-sub">{country.capital} · {country.gdp}</div>
                    </div>
                    {isSelected && <StarIcon />}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Accordion Policy Section */}
        <section id="policies" aria-labelledby="policies-heading">
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center', borderBottom: 'none', marginBottom: '3rem' }}>
              <h2 id="policies-heading">Six Pillars of Policy Reform</h2>
              <p style={{ margin: '0.5rem auto 0', maxWidth: '650px' }}>
                Structured policy roadmap detailing constitutional, ecological, and socio-economic integration across member states.
              </p>
            </div>

            <div className="accordion-list">
              {policyFramework.map((pillar, idx) => {
                const isOpen = openPillarIdx === idx

                return (
                  <div
                    key={idx}
                    className={`accordion-card ${isOpen ? 'open' : ''}`}
                  >
                    <button
                      type="button"
                      className="accordion-header"
                      style={{ width: '100%', background: 'transparent', border: 'none', textAlign: 'left' }}
                      onClick={() => setOpenPillarIdx(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      aria-controls={`pillar-content-${idx}`}
                    >
                      <div className="accordion-title-group">
                        <span className="accordion-num">{pillar.num}</span>
                        <span className="accordion-title">{pillar.title}</span>
                      </div>
                      <span className="accordion-icon" aria-hidden="true">{isOpen ? '▲' : '▼'}</span>
                    </button>

                    {isOpen && (
                      <div id={`pillar-content-${idx}`} className="accordion-content">
                        <p>{pillar.desc}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Institutional Overview Modal */}
      {isInstModalOpen && (
        <div className="modal-overlay" onClick={() => setIsInstModalOpen(false)} role="presentation">
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Primary EU Institutions & Governance"
          >
            <div className="modal-header">
              <h2>Primary EU Institutions & Governance</h2>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setIsInstModalOpen(false)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="inst-tabs" role="tablist">
              {EU_INSTITUTIONS.map((inst, idx) => (
                <button
                  type="button"
                  key={inst.id}
                  role="tab"
                  aria-selected={activeInstTab === idx}
                  className={`inst-tab-btn ${activeInstTab === idx ? 'active' : ''}`}
                  onClick={() => setActiveInstTab(idx)}
                >
                  {inst.name}
                </button>
              ))}
            </div>

            <div className="inst-content" role="tabpanel">
              <h3>{EU_INSTITUTIONS[activeInstTab].name}</h3>
              <p style={{ marginTop: '0.5rem' }}><strong>Seat:</strong> {EU_INSTITUTIONS[activeInstTab].city}</p>
              <p style={{ marginTop: '0.5rem' }}><strong>Role:</strong> {EU_INSTITUTIONS[activeInstTab].role}</p>
              <p style={{ marginTop: '0.5rem' }}><strong>Composition:</strong> {EU_INSTITUTIONS[activeInstTab].members}</p>

              <h4 style={{ marginTop: '1.25rem', color: 'var(--eu-blue)' }}>Key Responsibilities</h4>
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem' }}>
                {EU_INSTITUTIONS[activeInstTab].functions.map((fn, idx) => (
                  <li key={idx} style={{ marginBottom: '0.4rem', color: 'var(--text-muted)' }}>{fn}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Footer Landmark */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h2>European Union</h2>
              <p>Official Federal Data & Policy Archive. Dedicated to democratic governance, transparency, and continental integration.</p>
            </div>
            <div className="footer-col">
              <h4>Archive Sections</h4>
              <ul>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#map-section">Territorial Map</a></li>
                <li><a href="#members">Member Directory</a></li>
                <li><a href="#policies">Policy Directives</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Governance</h4>
              <ul>
                <li><a href="#overview" onClick={() => { setIsInstModalOpen(true); setActiveInstTab(0); }}>European Parliament</a></li>
                <li><a href="#overview" onClick={() => { setIsInstModalOpen(true); setActiveInstTab(1); }}>European Council</a></li>
                <li><a href="#overview" onClick={() => { setIsInstModalOpen(true); setActiveInstTab(2); }}>European Commission</a></li>
                <li><a href="#overview" onClick={() => { setIsInstModalOpen(true); setActiveInstTab(3); }}>European Central Bank</a></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            © 2026 European Union · Institutional Data & Policy Portal
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
