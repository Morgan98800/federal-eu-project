import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, Filter, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';

const archiveEntries = [
  {
    id: 'ventotene-1941',
    date: '1941',
    category: 'Federalist Thought',
    title: 'The Ventotene Manifesto',
    body: 'Drafted by Altiero Spinelli and Ernesto Rossi while imprisoned by the fascist regime, this document is the foundational text of European federalism. It argued that sovereign national states naturally trend toward war, making a federal Europe the only path to lasting peace.',
    sourceTitle: 'CVCE.eu — The Ventotene Manifesto (1941)',
    sourceUrl: 'https://www.cvce.eu/en/obj/the_ventotene_manifesto_1941-en-5ada4b99-7445-492f-9fad-7ebeb5f2a8b4.html',
    featured: true
  },
  {
    id: 'schuman-1950',
    date: '9 May 1950',
    category: 'Treaties & Integration',
    title: 'The Schuman Declaration',
    body: 'Proposed by French Foreign Minister Robert Schuman, this declaration pooled the coal and steel production of France and West Germany. It was explicitly presented as a first step in the federation of Europe.',
    sourceTitle: 'European Commission — Schuman Declaration (1950)',
    sourceUrl: 'https://european-union.europa.eu/principles-countries-history/history-eu/1945-59/schuman-declaration-may-1950_en',
    featured: true
  },
  {
    id: 'maastricht-1992',
    date: '7 February 1992',
    category: 'Treaties & Integration',
    title: 'Treaty of Maastricht',
    body: 'Formally created the European Union and laid the groundwork for the Euro. While a massive leap in economic integration, it kept political and foreign policy powers strictly intergovernmental.',
    sourceTitle: 'EUR-Lex — Treaty on European Union (Maastricht, 1992)',
    sourceUrl: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A11992M%2FTXT',
    featured: true
  },
  {
    id: 'lisbon-2007',
    date: '13 December 2007',
    category: 'Treaties & Integration',
    title: 'Treaty of Lisbon',
    body: 'Amended previous treaties to streamline EU institutions after the failed European Constitution. It expanded the powers of the European Parliament and created a High Representative for Foreign Affairs, though veto powers remained in the Council.',
    sourceTitle: 'EUR-Lex — Treaty of Lisbon (2007)',
    sourceUrl: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A12007L%2FTXT',
    featured: true
  },
  {
    id: 'cofe-2022',
    date: '9 May 2022',
    category: 'Citizens & Reform',
    title: 'Conference on the Future of Europe — Final Report',
    body: 'A citizen-led series of debates and discussions that concluded with explicit demands for treaty changes. Key recommendations included ending the national veto in foreign policy and moving toward a stronger political union.',
    sourceTitle: 'CoFoE — Final Report (May 2022, PDF)',
    sourceUrl: 'https://futureu.europa.eu/uploads/decidim/attachment/file/23363/CoFoE_Final_Report_EN.pdf',
    featured: true
  }
];

const Archive = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Treaties & Integration', 'Federalist Thought', 'Citizens & Reform'];

  const filteredEntries = archiveEntries.filter(entry => {
    const matchesCategory = activeCategory === 'All' || entry.category === activeCategory;
    const matchesSearch = entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          entry.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          entry.date.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="archive-page" style={{ background: 'var(--paper)', minHeight: '100vh' }}>
      {/* Masthead */}
      <div className="page-masthead" style={{ borderBottom: 'var(--border-rule)', background: 'var(--paper-mid)', paddingBlock: 'var(--space-12)' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-bronze)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--space-4)' }}>
            <BookOpen size={14} />
            <span>HISTORICAL REPOSITORY &middot; ARCHIVAL RECORD</span>
          </div>

          <h1 className="page-masthead__title js-reveal reveal-delay-1" id="archive-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: 'var(--ink-navy)', marginBottom: 'var(--space-4)' }}>
            Chronology of European Integration
          </h1>

          <p className="page-masthead__deck js-reveal reveal-delay-2" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', color: 'var(--text-secondary)', maxWidth: '68ch', lineHeight: 'var(--leading-relaxed)' }}>
            A chronological, primary-sourced record of significant milestones in European federalist thought, treaty negotiations, and constitutional development.
          </p>
        </div>
      </div>

      <section className="section" aria-labelledby="archive-title" style={{ paddingBlock: 'var(--space-12)' }}>
        <div className="container">
          {/* Interactive Filter & Search Bar */}
          <div style={{
            background: 'var(--paper-mid)', border: 'var(--border-hairline)', borderRadius: 'var(--radius-sm)',
            padding: 'var(--space-5) var(--space-6)', marginBottom: 'var(--space-12)', display: 'flex',
            flexWrap: 'wrap', gap: 'var(--space-4)', alignItems: 'center', justifyContent: 'space-between'
          }}>
            {/* Category Pills */}
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '6px 14px', borderRadius: '2px', fontFamily: 'var(--font-mono)', fontSize: '11px',
                    fontWeight: 600, border: '1px solid', cursor: 'pointer', transition: 'all 0.15s ease',
                    background: activeCategory === cat ? 'var(--ink-navy)' : 'var(--paper)',
                    color: activeCategory === cat ? 'var(--paper)' : 'var(--text-secondary)',
                    borderColor: activeCategory === cat ? 'var(--ink-navy)' : 'var(--rule-grey)'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div style={{ position: 'relative', minWidth: '240px', flex: '1', maxWidth: '360px' }}>
              <Search size={14} color="var(--text-tertiary)" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search archive entries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%', padding: '6px 12px 6px 32px', fontFamily: 'var(--font-mono)', fontSize: '12px',
                  background: 'var(--paper)', border: '1px solid var(--rule-grey)', borderRadius: '2px',
                  color: 'var(--ink-navy)', outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Timeline List */}
          <div className="timeline" id="timeline" aria-label="Timeline of European integration">
            {filteredEntries.map(entry => (
              <article key={entry.id} className="timeline-entry hover-lift js-reveal featured" id={entry.id} style={{ marginBottom: 'var(--space-10)', paddingBottom: 'var(--space-8)', borderBottom: 'var(--border-hairline)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
                  <time className="timeline-entry__date" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', fontWeight: 600 }}>
                    {entry.date}
                  </time>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', padding: '2px 8px', background: 'rgba(184,146,48,0.1)', color: 'var(--accent-bronze)', border: '1px solid var(--accent-bronze)', borderRadius: '2px' }}>
                    {entry.category}
                  </span>
                </div>

                <h2 className="timeline-entry__title" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', color: 'var(--ink-navy)', marginBottom: 'var(--space-3)' }}>
                  {entry.title}
                </h2>

                <p className="timeline-entry__body" style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', maxWidth: '68ch', marginBottom: 'var(--space-4)' }}>
                  {entry.body}
                </p>

                <p className="timeline-entry__source" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                  Primary source:&nbsp;
                  <a href={entry.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-bronze)', textDecoration: 'underline' }}>
                    {entry.sourceTitle} <ExternalLink size={11} style={{ verticalAlign: 'middle' }} />
                  </a>
                </p>
              </article>
            ))}

            {filteredEntries.length === 0 && (
              <div style={{ padding: 'var(--space-12)', textAlign: 'center', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)' }}>
                No archive records matching search query "{searchTerm}".
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Archive;
