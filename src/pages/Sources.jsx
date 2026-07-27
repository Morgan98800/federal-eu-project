import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sources = () => {
  useEffect(() => {
    // We will initialize page-specific scripts here if needed
  }, []);

  return (
    <div className="sources-page">
      

    <div className="page-masthead">
      <div className="container">
        <div className="page-masthead__overline js-reveal reveal-fast">Sources</div>
        <h1 className="page-masthead__title js-reveal reveal-delay-1" id="sources-title">
          Sources &amp; Bibliography
        </h1>
        <div className="page-masthead__deck js-reveal reveal-delay-2 " style={{ marginTop: 'var(--space-6)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-secondary)', maxWidth: '68ch' }}>
          <h2 className="js-reveal" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase', color: 'var(--accent-bronze)', marginBottom: 'var(--space-2)' }}>Primary Texts &amp; Treaties</h2>
          <ul style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-6)', paddingLeft: 'var(--space-4)' }}>
            <li>Spinelli, A., &amp; Rossi, E. (1941). <em>The Ventotene Manifesto</em>.</li>
            <li>European Union. (1992). <em>Treaty on European Union (Maastricht Treaty)</em>. EUR-Lex.</li>
            <li>European Union. (2007). <em>Treaty of Lisbon</em>. EUR-Lex.</li>
          </ul>
          <h2 className="js-reveal" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase', color: 'var(--accent-bronze)', marginBottom: 'var(--space-2)' }}>Data &amp; Statistics</h2>
          <ul style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-6)', paddingLeft: 'var(--space-4)' }}>
            <li>European Commission. (2024). <em>Standard Eurobarometer 101</em>. Directorate-General for Communication.</li>
            <li>Eurostat. (2023). <em>General government gross debt</em>. European Commission.</li>
            <li>European Defence Agency. (2023). <em>Defence Data 2022</em>.</li>
          </ul>
          <h2 className="js-reveal" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase', color: 'var(--accent-bronze)', marginBottom: 'var(--space-2)' }}>Academic Literature</h2>
          <ul style={{ fontSize: 'var(--text-sm)', paddingLeft: 'var(--space-4)' }}>
            <li>Fabbrini, S. (2015). <em>Which European Union? Europe After the Euro Crisis</em>. Cambridge University Press.</li>
            <li>Kelemen, R. D. (2004). <em>The Rules of Federalism: Institutions and Regulatory Politics in the EU and Beyond</em>. Harvard University Press.</li>
          </ul>
        </div>
        <div id="cite-this-container" style={{ marginTop: 'var(--space-6)' }}></div>
        <div id="export-container" style={{ marginTop: 'var(--space-6)' }}></div>
      </div>
    </div>

    <section className="section" aria-labelledby="primary-heading">
      <div className="container--narrow">

        {/*  */}
        <h2 className="js-reveal" id="primary-heading" style={{ marginBottom: 'var(--space-6)' }}>
          Primary Treaty Texts
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-8)' }}>
          All treaty texts available in full via EUR-Lex, the official EU legal database.
        </p>

        <div className="bibliography" id="treaties" aria-label="Primary treaty texts">

          <div className="bib-entry hover-lift js-reveal" id="src-ventotene">
            <div className="bib-entry__num">1</div>
            <div className="bib-entry__content">
              <p className="bib-entry__author">Spinelli, Altiero and Rossi, Ernesto</p>
              <p className="js-reveal"><span className="bib-entry__title">For a Free and United Europe: A Draft Manifesto</span>
              <span className="source-tag source-tag--treaty">primary</span></p>
              <p className="bib-entry__meta">1941. CVCE.eu / European University Institute archive.</p>
              <p className="bib-entry__url">
                <a href="https://www.cvce.eu/en/obj/the_ventotene_manifesto_1941-en-5ada4b99-7445-492f-9fad-7ebeb5f2a8b4.html"
                   target="_blank" rel="noopener">
                  cvce.eu — The Ventotene Manifesto (1941)
                </a>
              </p>
            </div>
          </div>

          <div className="bib-entry hover-lift js-reveal" id="src-schuman">
            <div className="bib-entry__num">2</div>
            <div className="bib-entry__content">
              <p className="bib-entry__author">Schuman, Robert</p>
              <p className="js-reveal"><span className="bib-entry__title">Declaration of 9 May 1950</span>
              <span className="source-tag source-tag--treaty">primary</span></p>
              <p className="bib-entry__meta">1950. European Commission.</p>
              <p className="bib-entry__url">
                <a href="https://european-union.europa.eu/principles-countries-history/history-eu/1945-59/schuman-declaration-may-1950_en"
                   target="_blank" rel="noopener">
                  european-union.europa.eu — Schuman Declaration
                </a>
              </p>
            </div>
          </div>

          <div className="bib-entry hover-lift js-reveal" id="src-rome">
            <div className="bib-entry__num">3</div>
            <div className="bib-entry__content">
              <p className="bib-entry__author">European Communities</p>
              <p className="js-reveal"><span className="bib-entry__title">Treaty Establishing the European Economic Community</span>
              <span className="source-tag source-tag--treaty">treaty</span></p>
              <p className="bib-entry__meta">Signed 25 March 1957. EUR-Lex.</p>
              <p className="bib-entry__url">
                <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A11957E%2FTXT"
                   target="_blank" rel="noopener">
                  eur-lex.europa.eu — CELEX:11957E/TXT
                </a>
              </p>
            </div>
          </div>

          <div className="bib-entry hover-lift js-reveal" id="src-spinelli84">
            <div className="bib-entry__num">4</div>
            <div className="bib-entry__content">
              <p className="bib-entry__author">European Parliament</p>
              <p className="js-reveal"><span className="bib-entry__title">Draft Treaty Establishing the European Union</span>
              <span className="source-tag source-tag--treaty">primary</span></p>
              <p className="bib-entry__meta">Adopted 14 February 1984. CVCE.eu / European University Institute.</p>
              <p className="bib-entry__url">
                <a href="https://www.cvce.eu/en/obj/draft_treaty_establishing_the_european_union_14_february_1984-en-747555ce-e674-4a72-9b6c-c74c31d2acf9.html"
                   target="_blank" rel="noopener">
                  cvce.eu — Draft Treaty on European Union (1984)
                </a>
              </p>
            </div>
          </div>

          <div className="bib-entry hover-lift js-reveal" id="src-maastricht">
            <div className="bib-entry__num">5</div>
            <div className="bib-entry__content">
              <p className="bib-entry__author">European Communities</p>
              <p className="js-reveal"><span className="bib-entry__title">Treaty on European Union (Maastricht Treaty)</span>
              <span className="source-tag source-tag--treaty">treaty</span></p>
              <p className="bib-entry__meta">Signed 7 February 1992. EUR-Lex.</p>
              <p className="bib-entry__url">
                <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A11992M%2FTXT"
                   target="_blank" rel="noopener">
                  eur-lex.europa.eu — CELEX:11992M/TXT
                </a>
              </p>
            </div>
          </div>

          <div className="bib-entry hover-lift js-reveal" id="src-lisbon">
            <div className="bib-entry__num">6</div>
            <div className="bib-entry__content">
              <p className="bib-entry__author">European Union</p>
              <p className="js-reveal"><span className="bib-entry__title">Treaty of Lisbon</span>
              <span className="source-tag source-tag--treaty">treaty</span></p>
              <p className="bib-entry__meta">Signed 13 December 2007; in force 1 December 2009. EUR-Lex.</p>
              <p className="bib-entry__url">
                <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A12007L%2FTXT"
                   target="_blank" rel="noopener">
                  eur-lex.europa.eu — CELEX:12007L/TXT
                </a>
              </p>
            </div>
          </div>

        </div>{/*  */}

        <hr />

        {/*  */}
        <h2 className="js-reveal" id="datasets-heading" style={{ marginBottom: 'var(--space-6)' }}>Datasets</h2>

        <div className="bibliography" id="datasets" aria-label="Statistical datasets">

          <div className="bib-entry hover-lift js-reveal" id="src-eb101">
            <div className="bib-entry__num">7</div>
            <div className="bib-entry__content">
              <p className="bib-entry__author">European Commission, Directorate-General for Communication</p>
              <p className="js-reveal"><span className="bib-entry__title">Standard Eurobarometer 101: Spring 2024</span>
              <span className="source-tag source-tag--data">data</span></p>
              <p className="bib-entry__meta">2024. Biannual EU-wide survey of citizens' attitudes.</p>
              <p className="bib-entry__url">
                <a href="https://europa.eu/eurobarometer/surveys/detail/3202"
                   target="_blank" rel="noopener">
                  europa.eu — Eurobarometer 101 (Spring 2024)
                </a>
              </p>
            </div>
          </div>

          <div className="bib-entry hover-lift js-reveal" id="src-eurostat-gdp">
            <div className="bib-entry__num">8</div>
            <div className="bib-entry__content">
              <p className="bib-entry__author">Eurostat</p>
              <p className="js-reveal"><span className="bib-entry__title">Gross domestic product at market prices — nama_10_gdp</span>
              <span className="source-tag source-tag--data">data</span></p>
              <p className="bib-entry__meta">Dataset vintage: 2022 (extracted 2024).</p>
              <p className="bib-entry__url">
                <a href="https://ec.europa.eu/eurostat/databrowser/view/nama_10_gdp/default/table?lang=en"
                   target="_blank" rel="noopener">
                  Eurostat data browser — nama_10_gdp
                </a>
              </p>
            </div>
          </div>

          <div className="bib-entry hover-lift js-reveal" id="src-sipri">
            <div className="bib-entry__num">9</div>
            <div className="bib-entry__content">
              <p className="bib-entry__author">Stockholm International Peace Research Institute</p>
              <p className="js-reveal"><span className="bib-entry__title">SIPRI Military Expenditure Database</span>
              <span className="source-tag source-tag--data">data</span></p>
              <p className="bib-entry__meta">Annual publication. Data year: 2022.</p>
              <p className="bib-entry__url">
                <a href="https://www.sipri.org/databases/milex"
                   target="_blank" rel="noopener">
                  sipri.org — Military Expenditure Database
                </a>
              </p>
            </div>
          </div>

        </div>{/*  */}

        <hr />

        {/*  */}
        <h2 className="js-reveal" id="scholarly-heading" style={{ marginBottom: 'var(--space-6)' }}>Scholarly Works &amp; Policy Papers</h2>

        <div className="bibliography" id="scholarly" aria-label="Scholarly works and policy papers">

          <div className="bib-entry hover-lift js-reveal" id="src-burgess">
            <div className="bib-entry__num">10</div>
            <div className="bib-entry__content">
              <p className="bib-entry__author">Burgess, Michael</p>
              <p className="js-reveal"><span className="bib-entry__title">Comparative Federalism: Theory and Practice</span>
              <span className="source-tag source-tag--scholarly">scholarly</span></p>
              <p className="bib-entry__meta">Routledge, 2006. ISBN 978-0415364997.</p>
              <p className="bib-entry__url">
                <a href="https://www.routledge.com/Comparative-Federalism-Theory-and-Practice/Burgess/p/book/9780415364997"
                   target="_blank" rel="noopener">
                  Routledge — Comparative Federalism
                </a>
              </p>
            </div>
          </div>

          <div className="bib-entry hover-lift js-reveal" id="src-duff">
            <div className="bib-entry__num">11</div>
            <div className="bib-entry__content">
              <p className="bib-entry__author">Duff, Andrew</p>
              <p className="js-reveal"><span className="bib-entry__title">On European Federalism: What the Leaders Think</span>
              <span className="source-tag source-tag--scholarly">policy</span></p>
              <p className="bib-entry__meta">European Policy Centre / Federal Trust, 2011.</p>
              <p className="bib-entry__url">
                <a href="https://www.epc.eu/en/Publications/On-European-Federalism~3caa5f"
                   target="_blank" rel="noopener">
                  epc.eu — On European Federalism
                </a>
              </p>
            </div>
          </div>

          <div className="bib-entry hover-lift js-reveal" id="src-verhofstadt">
            <div className="bib-entry__num">12</div>
            <div className="bib-entry__content">
              <p className="bib-entry__author">Verhofstadt, Guy</p>
              <p className="js-reveal"><span className="bib-entry__title">The United States of Europe</span>
              <span className="source-tag source-tag--scholarly">scholarly</span></p>
              <p className="bib-entry__meta">Federal Trust for Education and Research, 2006.</p>
              <p className="bib-entry__url">
                <a href="https://www.federal-trust.co.uk/"
                   target="_blank" rel="noopener">
                  federal-trust.co.uk
                </a>
              </p>
            </div>
          </div>

          <div className="bib-entry hover-lift js-reveal" id="src-jcms">
            <div className="bib-entry__num">13</div>
            <div className="bib-entry__content">
              <p className="bib-entry__author">Various authors</p>
              <p className="js-reveal"><span className="bib-entry__title">Journal of Common Market Studies</span>
              <span className="source-tag source-tag--scholarly">journal</span></p>
              <p className="bib-entry__meta">
                Wiley / University Association for Contemporary European Studies.
                Leading peer-reviewed journal for EU studies. Published continuously since 1962.
              </p>
              <p className="bib-entry__url">
                <a href="https://onlinelibrary.wiley.com/journal/14685965"
                   target="_blank" rel="noopener">
                  Wiley — Journal of Common Market Studies
                </a>
              </p>
            </div>
          </div>

          <div className="bib-entry hover-lift js-reveal" id="src-cofe">
            <div className="bib-entry__num">14</div>
            <div className="bib-entry__content">
              <p className="bib-entry__author">Conference on the Future of Europe</p>
              <p className="js-reveal"><span className="bib-entry__title">Final Report</span>
              <span className="source-tag source-tag--treaty">primary</span></p>
              <p className="bib-entry__meta">European Parliament / Council / Commission, May 2022.</p>
              <p className="bib-entry__url">
                <a href="https://futureu.europa.eu/uploads/decidim/attachment/file/23363/CoFoE_Final_Report_EN.pdf"
                   target="_blank" rel="noopener">
                  CoFoE — Final Report (PDF)
                </a>
              </p>
            </div>
          </div>

        </div>{/*  */}

      </div>{/*  */}
    </section>

  
    </div>
  );
};

export default Sources;
