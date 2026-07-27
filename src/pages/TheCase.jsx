import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TheCase = () => {
  useEffect(() => {
    // We will initialize page-specific scripts here if needed
  }, []);

  return (
    <div className="the-case-page">
      <article aria-labelledby="case-title">
        {/* Page Masthead */}
        <div className="page-masthead">
          <div className="container">
            <div className="page-masthead__overline js-reveal reveal-fast">The Case</div>
            <h1 className="page-masthead__title js-reveal reveal-delay-1" id="case-title">
              Why Europe Must<br />Become a Federation
            </h1>
            <p className="page-masthead__deck js-reveal reveal-delay-2">
              The case is not sentimental. It follows from what coordination without authority has cost — and continues to cost — the people of Europe.
            </p>
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

        {/* Article Body */}
        <div className="article-body">
          <div className="container--narrow">

            {/* Introduction */}
            <p className="lead-paragraph">
              Europe has spent eighty years building institutions strong enough to bind their members to a common market, a common currency, and a growing body of common law — and yet still incapable of making a binding foreign-policy decision, raising a joint defence budget, or setting a fiscal policy sized to match a currency area of 350 million people. The European Central Bank sets one interest rate for nineteen economies with different growth rates, debt loads, and labour markets; there is no equivalent federal fiscal authority to absorb the shocks that follow when that one rate is wrong for half of them.
            </p>
            <p className="js-reveal">
              That gap has political consequences. Trust in the EU has recovered since the low points of the 2010s — Eurobarometer put it at 52% in spring 2025, the highest in eighteen years — but it took a war on the continent to get there, and support has been volatile enough over the preceding decade that it cannot be relied on as a stable floor. Eurosceptic and illiberal parties have used the gap between what Brussels promises and what it can enforce to make the case that democratic coordination doesn't work and a stronger hand is needed instead.
            </p>
            <p className="js-reveal">
              The argument that follows is that this is not a design flaw to be patched with another intergovernmental summit. It is the predictable output of a structure that was deliberately left unfinished at Maastricht, and every subsequent crisis — the euro crisis, the migration crisis of 2015, the pandemic procurement scramble, the war in Ukraine — has forced the same conclusion: pooled sovereignty without a federal government to exercise it produces slow, contested, and reversible decisions exactly when fast, binding ones are needed. A completed federal union is the only structural fix that doesn't require re-litigating the same argument at the next crisis.
            </p>

            {/* I. The Historical Argument */}
            <h2 className="js-reveal" id="historical">I. The Historical Argument</h2>
            <p className="js-reveal">
              The claim that a united Europe would foreclose the possibility of another major European war is as old as the post-war settlement itself — it was made explicitly in the Ventotene Manifesto, written by Altiero Spinelli and Ernesto Rossi in 1941 while both were interned by the Fascist regime, and it has run through every major integration step since: the 1950 Schuman Declaration, the 1992 Maastricht Treaty, and the Conference on the Future of Europe (2021–2022), whose citizen panels recommended treaty change and majority voting on foreign policy. For the full chronology, explore the <Link to="/archive">Archive</Link>.
            </p>

            {/* II. The Economic Argument */}
            <h2 className="js-reveal" id="economic">II. The Economic Argument</h2>
            <aside className="pull-quote pull-quote--offset js-reveal reveal-fast">
              A monetary union without a fiscal union asks one interest rate to do the job of twenty different national economies.
            </aside>
            <p className="js-reveal">
              The 2010–2012 eurozone crisis is the clearest evidence of this design flaw: Greece, Ireland, Portugal, and Spain were locked into a single monetary policy calibrated for the currency area as a whole, with no federal fiscal capacity able to smooth the shock the way, for instance, US federal transfers cushion an individual state's downturn. A currency area of this size needs a central fiscal stabiliser — not necessarily a large one, but a permanent one, rather than emergency vehicles negotiated crisis by crisis (the EFSF in 2010, the ESM in 2012, NextGenerationEU in 2020). To compare the current EU budget (about 1% of EU GNI) against a genuine federal reference model, and to adjust a hypothetical common fiscal transfer yourself, see the Scenario Sliders in the <Link to="/data-room">Data Room</Link>.
            </p>

            {/* III. The Democratic Argument */}
            <h2 className="js-reveal" id="democratic">III. The Democratic Argument</h2>
            <p className="js-reveal">
              The EU's democratic deficit is a structural feature of its hybrid design, not a side effect of pooling sovereignty. Executive power sits mainly with the European Council and Council of the EU — national governments negotiating behind closed doors — while the only directly elected body, the European Parliament, cannot itself propose legislation and has no independent tax-raising power. A federal settlement would move executive accountability to a legislature that voters can actually remove.
            </p>
            <p className="js-reveal">
              That doesn't mean flattening national differences. Federations that work — the US, Germany, Canada, Switzerland — succeed precisely because they let a genuinely representative federal legislature negotiate across regions and interest groups that disagree, rather than assuming decisions taken further from citizens are automatically more legitimate. A federal European constitution would need to state plainly, article by article, which competences sit in Brussels and which stay national — more plainly than the current division under the Treaty on the Functioning of the EU (TFEU) does. To see how powers are currently split, consult the <Link to="/data-room">Competence Matrix</Link>.
            </p>

            {/* IV. The Security Argument */}
            <h2 className="js-reveal" id="security">IV. The Security Argument</h2>
            <p className="js-reveal">
              EU member states spent a combined €279 billion on defence in 2023 (1.6% of GDP) according to the European Defence Agency, rising to €343 billion in 2024 — roughly comparable to Russia's entire annual state budget — but split across 27 separate procurement systems, army structures, and equipment standards. The European Parliament's own research service estimates that this fragmentation — duplicated R&D, incompatible equipment, no economies of scale — costs the EU somewhere between €18 billion and €57 billion a year in wasted capacity, money that buys real hardware in a pooled system and buys overhead in a fragmented one.
            </p>
            <p className="js-reveal">
              A unified European defence procurement and command structure wouldn't just save money — it would let the EU act on decisions it currently can only debate: sending equipment fast, standardising ammunition calibres across armies, negotiating arms contracts from a position that suppliers can't play off against each other. To see the scale of that fragmentation and what pooled procurement could look like, view the Scenario Sliders and the 27 States vs. One Bloc Map in the <Link to="/data-room">Data Room</Link>.
            </p>

            <hr />

            {/* V. Objections & Responses */}
            <h2 className="js-reveal" id="objections">V. Objections &amp; Responses</h2>
            <p className="js-reveal">
              What follows is a summary of the strongest objections to European federalism, and the responses they warrant. This section exists because a serious argument is made stronger, not weaker, by engaging with its critics honestly.
            </p>

            <div className="accordion" role="list">
              <details className="accordion-item" role="listitem">
                <summary className="accordion-item__trigger">
                  "A federation would mean the end of national sovereignty."
                </summary>
                <div className="accordion-item__body">
                  <p className="js-reveal">
                    All federations pool, rather than eliminate, sovereignty. The constituent states of the US, Germany, Canada, and Switzerland retain substantial autonomous powers — over culture, education, local taxation, and much else — while sharing federal authority in foreign policy, defence, and macroeconomics. The EU already shares sovereignty extensively through its existing treaties and case law; the real question is whether that sharing is governed with adequate democratic accountability. As things stand, it mostly isn't.
                  </p>
                </div>
              </details>

              <details className="accordion-item" role="listitem">
                <summary className="accordion-item__trigger">
                  "European citizens don't want this — there's no demos."
                </summary>
                <div className="accordion-item__body">
                  <p className="js-reveal">
                    The "no demos" argument — that federation requires a shared European political identity that doesn't yet exist — gets cause and effect backwards. American national identity wasn't a precondition of the 1787 Constitution; it developed substantially because of the institutions the Constitution created. On the public-opinion evidence, support has actually moved sharply in the federalist direction on the issues that matter most: 81% of EU citizens told Eurobarometer in spring 2025 they favour a common defence and security policy — the highest figure recorded since the question was first asked in 2004 — and support for the euro is at its highest level since the currency was introduced. Support isn't the obstacle. Political leadership willing to spend it is.
                  </p>
                </div>
              </details>

              <details className="accordion-item" role="listitem">
                <summary className="accordion-item__trigger">
                  "The EU already has a democratic deficit — federation would make it worse."
                </summary>
                <div className="accordion-item__body">
                  <p className="js-reveal">
                    This runs the argument backwards. The deficit is a consequence of the EU's current hybrid structure — executive power resting with a Council of national governments operating largely behind closed doors, while the directly elected Parliament lacks legislative initiative and revenue-raising power. A federal settlement would, by design, move executive accountability to a legislature that is genuinely representative and open. The deficit isn't inherent to supranational governance; it's inherent to the specific, unfinished form the EU currently takes.
                  </p>
                </div>
              </details>

              <details className="accordion-item" role="listitem">
                <summary className="accordion-item__trigger">
                  "Subsidiarity means decisions should stay national."
                </summary>
                <div className="accordion-item__body">
                  <p className="js-reveal">
                    Article 5(3) of the Treaty on European Union requires the EU to act only where "the objectives of the proposed action cannot be sufficiently achieved by the Member States." For defence, macroeconomic stability, climate, and migration, that test is clearly met — these are cross-border problems no single member state can solve alone, which is exactly the case the treaty text anticipates for EU-level action. Subsidiarity doesn't mandate national action by default; it mandates whichever level can actually achieve the objective. In most of the domains where the EU underperforms today, subsidiarity is the argument for federal competence, not against it.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default TheCase;
