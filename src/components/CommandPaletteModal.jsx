import { useState, useEffect, useRef } from 'react'
import { EU_MEMBER_STATES, EU_INSTITUTIONS } from '../euData'

export default function CommandPaletteModal({ isOpen, onClose, onSelectCountry, onOpenInstitution }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) {
          setQuery('')
          onClose()
        }
      }
      if (e.key === 'Escape' && isOpen) {
        setQuery('')
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleCloseModal = () => {
    setQuery('')
    onClose()
  }

  const filteredCountries = EU_MEMBER_STATES.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.capital.toLowerCase().includes(query.toLowerCase()) ||
      c.region.toLowerCase().includes(query.toLowerCase())
  )

  const filteredInsts = EU_INSTITUTIONS.filter(
    (inst) =>
      inst.name.toLowerCase().includes(query.toLowerCase()) ||
      inst.city.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="cmd-overlay" onClick={handleCloseModal}>
      <div className="cmd-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="cmd-header">
          <span className="cmd-search-icon">🔍</span>
          <input
            ref={inputRef}
            type="text"
            className="cmd-input"
            placeholder="Type a country name, capital, or institution... (Esc to exit)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <kbd className="cmd-esc-kbd">ESC</kbd>
        </div>

        <div className="cmd-results">
          {filteredCountries.length > 0 && (
            <div className="cmd-group">
              <div className="cmd-group-title">EU Member States ({filteredCountries.length})</div>
              {filteredCountries.map((c) => (
                <div
                  key={c.name}
                  className="cmd-item"
                  onClick={() => {
                    onSelectCountry(c.name)
                    handleCloseModal()
                  }}
                >
                  <div className="cmd-item-left">
                    <span className="cmd-flag">{c.flag}</span>
                    <div className="cmd-item-text">
                      <span className="cmd-item-title">{c.name}</span>
                      <span className="cmd-item-sub">{c.capital} · {c.region}</span>
                    </div>
                  </div>
                  <span className="cmd-badge">{c.gdp}</span>
                </div>
              ))}
            </div>
          )}

          {filteredInsts.length > 0 && (
            <div className="cmd-group">
              <div className="cmd-group-title">Primary EU Institutions</div>
              {filteredInsts.map((inst, idx) => (
                <div
                  key={inst.id}
                  className="cmd-item"
                  onClick={() => {
                    onOpenInstitution(idx)
                    handleCloseModal()
                  }}
                >
                  <div className="cmd-item-left">
                    <span className="cmd-icon">🏛️</span>
                    <div className="cmd-item-text">
                      <span className="cmd-item-title">{inst.name}</span>
                      <span className="cmd-item-sub">{inst.city}</span>
                    </div>
                  </div>
                  <span className="cmd-badge">Institution</span>
                </div>
              ))}
            </div>
          )}

          {filteredCountries.length === 0 && filteredInsts.length === 0 && (
            <div className="cmd-empty">
              No member state or institution matching "{query}"
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
