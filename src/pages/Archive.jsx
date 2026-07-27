import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Archive = () => {
  useEffect(() => {
    // We will initialize page-specific scripts here if needed
  }, []);

  return (
    <div className="archive-page">
      

    <div className="page-masthead">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="./">Home</a>
          <span className="breadcrumb__separator" aria-hidden="true">/</span>
          <span className="breadcrumb__current" aria-current="page">Archive</span>
        </nav>
        <div className="page-masthead__overline js-reveal reveal-fast">Archive</div>
        <h1 className="page-masthead__title js-reveal reveal-delay-1" id="archive-title">
          Chronology of<br />European Integration
        </h1>
        <p className="page-masthead__deck js-reveal reveal-delay-2 ">
          A chronological record of significant moments in European federalist thought
          and institutional integration. Each entry links to its primary source.
        </p>
      </div>
    </div>

    <section className="section" aria-labelledby="archive-title">
      <div className="container">

        <div className="timeline" id="timeline" aria-label="Timeline of European integration">
          {/*  */}

          <article className="timeline-entry hover-lift js-reveal featured" id="ventotene-1941">
            <time className="timeline-entry__date" datetime="1941">1941</time>
            <h2 className="js-reveal" className="timeline-entry__title">The Ventotene Manifesto</h2>
            <p className="timeline-entry__body">
              Drafted by Altiero Spinelli and Ernesto Rossi while imprisoned by the fascist regime, this document is the foundational text of European federalism. It argued that sovereign national states naturally trend toward war, making a federal Europe the only path to lasting peace.
              <cite className="citation-ref">
                <button className="citation-ref__trigger" data-cite-id="arc-ventotene">1</button>
                <div className="citation-popover" id="popover-arc-ventotene" role="dialog" aria-modal="true" aria-label="Citation: Ventotene Manifesto"></div>
              </cite>
            </p>
            <p className="timeline-entry__source">
              Primary source:
              <a href="https://www.cvce.eu/en/obj/the_ventotene_manifesto_1941-en-5ada4b99-7445-492f-9fad-7ebeb5f2a8b4.html"
                 target="_blank" rel="noopener">
                CVCE.eu — The Ventotene Manifesto (1941)
              </a>
            </p>
          </article>

          <article className="timeline-entry hover-lift js-reveal featured" id="schuman-1950">
            <time className="timeline-entry__date" datetime="1950-05-09">9 May 1950</time>
            <h2 className="js-reveal" className="timeline-entry__title">The Schuman Declaration</h2>
            <p className="timeline-entry__body">
              Proposed by French Foreign Minister Robert Schuman, this declaration pooled the coal and steel production of France and West Germany. It was explicitly presented as a first step in the federation of Europe.
              <cite className="citation-ref">
                <button className="citation-ref__trigger" data-cite-id="arc-schuman">2</button>
                <div className="citation-popover" id="popover-arc-schuman" role="dialog" aria-modal="true" aria-label="Citation: Schuman Declaration"></div>
              </cite>
            </p>
            <p className="timeline-entry__source">
              Primary source:
              <a href="https://european-union.europa.eu/principles-countries-history/history-eu/1945-59/schuman-declaration-may-1950_en"
                 target="_blank" rel="noopener">
                European Commission — Schuman Declaration (1950)
              </a>
            </p>
          </article>

          <article className="timeline-entry hover-lift js-reveal featured" id="maastricht-1992">
            <time className="timeline-entry__date" datetime="1992-02-07">7 February 1992</time>
            <h2 className="js-reveal" className="timeline-entry__title">Treaty of Maastricht</h2>
            <p className="timeline-entry__body">
              Formally created the European Union and laid the groundwork for the Euro. While a massive leap in economic integration, it kept political and foreign policy powers strictly intergovernmental.
              <cite className="citation-ref">
                <button className="citation-ref__trigger" data-cite-id="arc-maastricht">5</button>
                <div className="citation-popover" id="popover-arc-maastricht" role="dialog" aria-modal="true" aria-label="Citation: Treaty of Maastricht"></div>
              </cite>
            </p>
            <p className="timeline-entry__source">
              Primary source:
              <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A11992M%2FTXT"
                 target="_blank" rel="noopener">
                EUR-Lex — Treaty on European Union (Maastricht, 1992)
              </a>
            </p>
          </article>

          <article className="timeline-entry hover-lift js-reveal featured" id="lisbon-2007">
            <time className="timeline-entry__date" datetime="2007-12-13">13 December 2007</time>
            <h2 className="js-reveal" className="timeline-entry__title">Treaty of Lisbon</h2>
            <p className="timeline-entry__body">
              Amended previous treaties to streamline EU institutions after the failed European Constitution. It expanded the powers of the European Parliament and created a High Representative for Foreign Affairs, though veto powers remained in the Council.
              <cite className="citation-ref">
                <button className="citation-ref__trigger" data-cite-id="arc-lisbon">6</button>
                <div className="citation-popover" id="popover-arc-lisbon" role="dialog" aria-modal="true" aria-label="Citation: Treaty of Lisbon"></div>
              </cite>
            </p>
            <p className="timeline-entry__source">
              Primary source:
              <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A12007L%2FTXT"
                 target="_blank" rel="noopener">
                EUR-Lex — Treaty of Lisbon (2007)
              </a>
            </p>
          </article>

          <article className="timeline-entry hover-lift js-reveal" id="cofe-2022">
            <time className="timeline-entry__date" datetime="2022-05-09">9 May 2022</time>
            <h2 className="js-reveal" className="timeline-entry__title">Conference on the Future of Europe — Final Report</h2>
            <p className="timeline-entry__body">
              A citizen-led series of debates and discussions that concluded with explicit demands for treaty changes. Key recommendations included ending the national veto in foreign policy and moving toward a stronger political union.
              <cite className="citation-ref">
                <button className="citation-ref__trigger" data-cite-id="arc-cofe">7</button>
                <div className="citation-popover" id="popover-arc-cofe" role="dialog" aria-modal="true" aria-label="Citation: Conference on Future of Europe"></div>
              </cite>
            </p>
            <p className="timeline-entry__source">
              Primary source:
              <a href="https://futureu.europa.eu/uploads/decidim/attachment/file/23363/CoFoE_Final_Report_EN.pdf"
                 target="_blank" rel="noopener">
                CoFoE — Final Report (May 2022, PDF)
              </a>
            </p>
          </article>

        </div>{/*  */}

        {/*  */}
        <div className="pagination" aria-label="Timeline pagination" role="navigation"></div>

      </div>{/*  */}
    </section>

  
    </div>
  );
};

export default Archive;
