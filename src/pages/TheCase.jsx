import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TheCase = () => {
  useEffect(() => {
    // We will initialize page-specific scripts here if needed
  }, []);

  return (
    <div className="the-case-page">
      

    <article aria-labelledby="case-title">

      {/*  */}
      <div className="page-masthead">
        <div className="container">
          <div className="page-masthead__overline js-reveal reveal-fast">The Case</div>
          <h1 className="page-masthead__title js-reveal reveal-delay-1" id="case-title">
            {/*  */}
            Why Europe Must<br />Become a Federation
          </h1>
          <p className="page-masthead__deck js-reveal reveal-delay-2 ">
            {/*  */}
            The case is not sentimental. It follows from a clear-eyed reading of
            what coordination without authority has cost, and continues to cost,
            the people of Europe.
          </p>
          {/*  */}
          <nav aria-label="Essay sections" style={{ marginTop: 'var(--space-8)' }}>
            <ol style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', listStyle: 'none', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>
              <li><a href="#historical">I. Historical</a></li>
              <li><a href="#economic">II. Economic</a></li>
              <li><a href="#democratic">III. Democratic</a></li>
              <li><a href="#security">IV. Security</a></li>
              <li><a href="#objections">V. Objections &amp; Responses</a></li>
            </ol>
          </nav>
        </div>
      </div>

      {/*  */}
      <div className="article-body">
        <div className="container--narrow">

          {/*  */}
          <p className="lead-paragraph">
            {/*  */}
            Europe has spent eighty years building institutions that are strong enough to
            bind their members to a common market, a common currency, and a growing body of common law—and yet remain institutionally incapable of
            making a binding foreign-policy decision, raising a common defence budget, or
            setting a fiscal policy commensurate with a currency area of its size. 
            The rise of Eurosceptic parties and illiberal rhetoric across the continent are symptoms of a paradigm shift. 
            When citizens find the democratic process slow or unequal, they may pivot toward authoritarian models that promise efficacy at the expense of liberty.
            The argument that follows is that this inefficiency is not a design flaw to be patched;
            it is the predictable consequence of a structure that was never completed. A structural reform toward a genuine federal union is necessary to ensure efficiency without sacrificing the rule of law and democratic values we cherish.
          </p>

          {/*  */}
          <h2 className="js-reveal" id="historical">I. The Historical Argument</h2>

          <p className="js-reveal">
            The idea that a united Europe would permanently foreclose the possibility of
            major European war is as old as the post-war settlement itself.
            For a timeline of how this original federalist impulse evolved from the Ventotene Manifesto (1941)
            to the recent Conference on the Future of Europe, explore the
            <a href="/">chronological Archive</a>.
          </p>

          {/*  */}
          <h2 className="js-reveal" id="economic">II. The Economic Argument</h2>

          <aside className="pull-quote pull-quote--offset js-reveal reveal-fast">
            The eurozone crisis demonstrated what happens when a monetary union operates without a fiscal union.
          </aside>
          <p className="js-reveal">
            A currency area of this size requires a central fiscal capacity to act as a macroeconomic stabiliser.
            To understand the current scale of the EU budget compared to a federal reference model, and
            to adjust a hypothetical common fiscal transfer, see the <a href="/">Scenario Sliders</a>
            in the Data Room.
          </p>

          {/*  */}
          <h2 className="js-reveal" id="democratic">III. The Democratic Argument</h2>

          <p className="js-reveal">
            The EU's perceived democratic deficit is a consequence of its hybrid structure, not its supranationality.
            A federal settlement would transfer executive accountability to a legislature that is genuinely representative.
            Drawing on lessons from both comparative federalism and diverse political cultures—where policymakers must grasp differing perspectives to build consensus—a formal European federation would clearly delineate the allocation of competence between Brussels and member states. 
            This protects the autonomy of peoples while allowing the Union to act decisively. 
            To see how powers are currently distributed under the TFEU compared to a federal constitution, consult the
            <Link to="/data-room">Competence Matrix</Link>.
          </p>

          {/*  */}
          <h2 className="js-reveal" id="security">IV. The Security Argument</h2>

          <p className="js-reveal">
            The realignment of global powers demonstrates that Europe needs unity against actors whose goal is to undermine democratic norms. 
            Yet, EU member states collectively spend over €214 billion on defence—comparable to the US NATO contribution—but fragmented across twenty-seven separate procurement systems and command structures.
            Working on a unified European security framework would allow the EU to better project power abroad, thus addressing our current shortcomings regarding strategic autonomy in both trade and defense.
            To visualise the impact of pooling European defence procurement, see the <Link to="/data-room">Scenario Sliders</Link> and the <Link to="/data-room">27 States vs. One Bloc Map</Link>.
          </p>

          <hr />

          {/*  */}
          <h2 className="js-reveal" id="objections">V. Objections &amp; Responses</h2>

          <p className="js-reveal">
            What follows is a summary of the strongest objections to European federalism,
            and the responses they warrant. This section is here because a serious
            argument is made stronger, not weaker, by engaging with its critics honestly.
          </p>

          <div className="accordion" role="list">

            <details className="accordion-item" role="listitem">
              <summary className="accordion-item__trigger">
                "A federation would mean the end of national sovereignty."
              </summary>
              <div className="accordion-item__body">
                <p className="js-reveal">
                  All federation involves the pooling, not the elimination, of sovereignty.
                  Member states of the United States, Germany, Canada, and Switzerland
                  retain substantial autonomous powers — in culture, education, local
                  taxation, and much else — while sharing a federal authority in foreign
                  policy, defence, and macroeconomics. The question is not whether
                  sovereignty is shared (it already is, substantially, through the EU's
                  existing acquis) but whether the sharing is adequately governed and
                  democratically accountable. As things stand, it is neither.
                </p>
              </div>
            </details>

            <details className="accordion-item" role="listitem">
              <summary className="accordion-item__trigger">
                "European citizens don't want this — there's no demos."
              </summary>
              <div className="accordion-item__body">
                <p className="js-reveal">
                  The "no demos" argument — that a European federation requires a shared
                  European political identity that does not yet exist — confuses cause
                  and effect. Political identity is partly a product of shared institutions:
                  American national identity was not a precondition of the 1787 Constitution
                  but in part a consequence of it. More concretely, Eurobarometer surveys
                  have shown majority support for deeper EU integration in most member states
                  in every wave since the late 1990s.
                  <cite className="citation-ref"><button className="citation-ref__trigger" data-cite-id="eb101-obj">5</button><div className="citation-popover" id="popover-eb101-obj" role="dialog" aria-modal="true" aria-label="Citation 5: Eurobarometer"></div></cite>
                  The question is whether political leadership is willing to make the argument.
                </p>
              </div>
            </details>

            <details className="accordion-item" role="listitem">
              <summary className="accordion-item__trigger">
                "The EU already has a democratic deficit — federation would make it worse."
              </summary>
              <div className="accordion-item__body">
                <p className="js-reveal">
                  This objection runs the argument backwards. The EU's democratic deficit
                  is a consequence of its current hybrid structure — in which executive
                  power rests with a Council of national governments operating largely
                  behind closed doors, while the directly elected Parliament lacks
                  legislative initiative and revenue-raising powers. A federal settlement
                  would, by design, transfer executive accountability to a legislature
                  that is genuinely representative and transparent. The deficit is not
                  inherent to supranationality; it is inherent to the specific,
                  unfinished form the EU currently takes.
                </p>
              </div>
            </details>

            <details className="accordion-item" role="listitem">
              <summary className="accordion-item__trigger">
                "Subsidiarity means decisions should stay national."
              </summary>
              <div className="accordion-item__body">
                <p className="js-reveal">
                  The subsidiarity principle (Article 5(3) TEU) requires that the EU act
                  only where "the objectives of the proposed action cannot be sufficiently
                  achieved by the Member States." For defence, macroeconomic stability,
                  climate, and migration, this test is clearly met: these are cross-border
                  challenges that individual member states demonstrably cannot address
                  alone. Subsidiarity does not mandate national action; it mandates
                  action at the level most capable of achieving the objective.
                  In many of the domains where the EU acts most inadequately,
                  subsidiarity is an argument for, not against, federal competence.
                </p>
              </div>
            </details>

          </div>{/*  */}

        </div>{/*  */}
      </div>{/*  */}

    </article>

  
    </div>
  );
};

export default TheCase;
