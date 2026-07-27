import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, BookOpen, Layers, ArrowRight, Bookmark, FileText } from 'lucide-react';

const TheCase = () => {
  useEffect(() => {
    // Page load initialization if needed
  }, []);

  return (
    <div className="the-case-page" style={{ background: 'var(--paper)', minHeight: '100vh' }}>
      <article aria-labelledby="case-title">
        {/* Institutional Masthead Header */}
        <div className="page-masthead" style={{ borderBottom: 'var(--border-rule)', background: 'var(--paper-mid)', paddingBlock: 'var(--space-12)' }}>
          <div className="container">
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)',
              fontSize: '11px', color: 'var(--accent-bronze)', textTransform: 'uppercase', letterSpacing: '0.1em',
              marginBottom: 'var(--space-4)'
            }}>
              <FileText size={14} />
              <span>RESEARCH MONOGRAPH 01 &middot; CONSTITUTIONAL ARCHITECTURE</span>
            </div>

            <h1 className="page-masthead__title js-reveal reveal-delay-1" id="case-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', lineHeight: '1.15', color: 'var(--ink-navy)', marginBottom: 'var(--space-4)' }}>
              Why Europe Must Become a Federation
            </h1>

            <p className="page-masthead__deck js-reveal reveal-delay-2" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', color: 'var(--text-secondary)', maxWidth: '68ch', lineHeight: 'var(--leading-snug)', fontStyle: 'italic' }}>
              "The case for union is not sentimental. It follows directly from what coordination without authority has cost — and continues to cost — the people of Europe."
            </p>

            {/* Chapter Navigation Bar */}
            <nav aria-label="Essay sections" style={{ marginTop: 'var(--space-8)', borderTop: 'var(--border-hairline)', paddingTop: 'var(--space-6)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 'var(--space-3)' }}>
                MONOGRAPH CHAPTERS:
              </span>
              <ol style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', listStyle: 'none', padding: 0, margin: 0, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>
                <li>
                  <a href="#historical" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 10px', background: 'var(--paper)', border: '1px solid var(--rule-grey)', borderRadius: '2px', textDecoration: 'none', color: 'var(--ink-navy)' }}>
                    I. Historical Rationale
                  </a>
                </li>
                <li>
                  <a href="#economic" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 10px', background: 'var(--paper)', border: '1px solid var(--rule-grey)', borderRadius: '2px', textDecoration: 'none', color: 'var(--ink-navy)' }}>
                    II. Economic &amp; Monetary
                  </a>
                </li>
                <li>
                  <a href="#democratic" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 10px', background: 'var(--paper)', border: '1px solid var(--rule-grey)', borderRadius: '2px', textDecoration: 'none', color: 'var(--ink-navy)' }}>
                    III. Democratic Deficit
                  </a>
                </li>
                <li>
                  <a href="#security" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 10px', background: 'var(--paper)', border: '1px solid var(--rule-grey)', borderRadius: '2px', textDecoration: 'none', color: 'var(--ink-navy)' }}>
                    IV. Security &amp; Defence
                  </a>
                </li>
                <li>
                  <a href="#objections" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 10px', background: 'var(--paper)', border: '1px solid var(--rule-grey)', borderRadius: '2px', textDecoration: 'none', color: 'var(--ink-navy)' }}>
                    V. Objections &amp; Counterarguments
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Article Body */}
        <div className="article-body" style={{ paddingBlock: 'var(--space-16)' }}>
          <div className="container--narrow">

            {/* Executive Summary Card */}
            <div style={{
              background: 'rgba(184, 146, 48, 0.06)', borderLeft: '4px solid var(--accent-bronze)', borderTop: '1px solid var(--rule-grey)',
              borderRight: '1px solid var(--rule-grey)', borderBottom: '1px solid var(--rule-grey)', padding: 'var(--space-6) var(--space-8)',
              marginBottom: 'var(--space-12)', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0'
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                EXECUTIVE SUMMARY &middot; CONSTITUTIONAL THESIS
              </div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-base)', color: 'var(--ink-navy)', margin: 0, lineHeight: 'var(--leading-relaxed)' }}>
                The European Union’s institutional architecture remains fundamentally incomplete. While economic integration has forged a single market and currency area, foreign policy, fiscal stabilization, and collective defence remain fragmented across 27 national capitals. This monograph proves that piecemeal intergovernmental summits cannot resolve systemic gridlock; only a completed federal settlement guarantees European sovereignty and democratic agency.
              </p>
            </div>

            {/* Introduction */}
            <p className="lead-paragraph" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', lineHeight: 'var(--leading-relaxed)' }}>
              <span style={{ float: 'left', fontFamily: 'var(--font-serif)', fontSize: '4.5em', fontWeight: 700, lineHeight: 0.75, marginRight: '0.1em', color: 'var(--accent-bronze)' }}>E</span>
              urope has spent eighty years building institutions strong enough to bind their members to a common market, a common currency, and a growing body of common law — and yet still incapable of making a binding foreign-policy decision, raising a joint defence budget, or setting a fiscal policy sized to match a currency area of 350 million people. The European Central Bank sets one interest rate for nineteen economies with different growth rates, debt loads, and labour markets; there is no equivalent federal fiscal authority to absorb the shocks that follow when that one rate is wrong for half of them.
            </p>

            <p className="js-reveal">
              That gap has political consequences. Trust in the EU has recovered since the low points of the 2010s — Eurobarometer put it at 52% in spring 2025, the highest in eighteen years — but it took a war on the continent to get there, and support has been volatile enough over the preceding decade that it cannot be relied on as a stable floor. Eurosceptic and illiberal parties have used the gap between what Brussels promises and what it can enforce to make the case that democratic coordination doesn't work and a stronger hand is needed instead.
            </p>

            <p className="js-reveal">
              The argument that follows is that this is not a design flaw to be patched with another intergovernmental summit. It is the predictable output of a structure that was deliberately left unfinished at Maastricht, and every subsequent crisis — the euro crisis, the migration crisis of 2015, the pandemic procurement scramble, the war in Ukraine — has forced the same conclusion: pooled sovereignty without a federal government to exercise it produces slow, contested, and reversible decisions exactly when fast, binding ones are needed. A completed federal union is the only structural fix that doesn't require re-litigating the same argument at the next crisis.
            </p>

            {/* I. The Historical Argument */}
            <h2 className="js-reveal" id="historical" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', borderTop: 'var(--border-rule)', paddingTop: 'var(--space-8)', marginTop: 'var(--space-16)' }}>
              I. The Historical Argument
            </h2>
            <p className="js-reveal">
              The claim that a united Europe would foreclose the possibility of another major European war is as old as the post-war settlement itself — it was made explicitly in the Ventotene Manifesto, written by Altiero Spinelli and Ernesto Rossi in 1941 while both were interned by the Fascist regime, and it has run through every major integration step since: the 1950 Schuman Declaration, the 1992 Maastricht Treaty, and the Conference on the Future of Europe (2021–2022), whose citizen panels recommended treaty change and majority voting on foreign policy. For the full chronology, explore the <Link to="/archive">Archive</Link>.
            </p>

            {/* II. The Economic Argument */}
            <h2 className="js-reveal" id="economic" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', borderTop: 'var(--border-hairline)', paddingTop: 'var(--space-8)', marginTop: 'var(--space-16)' }}>
              II. The Economic Argument
            </h2>
            
            <blockquote className="pull-quote js-reveal reveal-fast" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', borderLeft: '4px solid var(--accent-bronze)', paddingLeft: 'var(--space-6)', marginBlock: 'var(--space-10)', fontSize: 'var(--text-2xl)' }}>
              "A monetary union without a fiscal union asks one interest rate to do the job of twenty different national economies."
            </blockquote>

            <p className="js-reveal">
              The 2010–2012 eurozone crisis is the clearest evidence of this design flaw: Greece, Ireland, Portugal, and Spain were locked into a single monetary policy calibrated for the currency area as a whole, with no federal fiscal capacity able to smooth the shock the way, for instance, US federal transfers cushion an individual state's downturn. A currency area of this size needs a central fiscal stabiliser — not necessarily a large one, but a permanent one, rather than emergency vehicles negotiated crisis by crisis (the EFSF in 2010, the ESM in 2012, NextGenerationEU in 2020). To compare the current EU budget (about 1% of EU GNI) against a genuine federal reference model, and to adjust a hypothetical common fiscal transfer yourself, see the Scenario Sliders in the <Link to="/data-room">Data Room</Link>.
            </p>

            {/* III. The Democratic Argument */}
            <h2 className="js-reveal" id="democratic" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', borderTop: 'var(--border-hairline)', paddingTop: 'var(--space-8)', marginTop: 'var(--space-16)' }}>
              III. The Democratic Argument
            </h2>
            <p className="js-reveal">
              The EU's democratic deficit is a structural feature of its hybrid design, not a side effect of pooling sovereignty. Executive power sits mainly with the European Council and Council of the EU — national governments negotiating behind closed doors — while the only directly elected body, the European Parliament, cannot itself propose legislation and has no independent tax-raising power. A federal settlement would move executive accountability to a legislature that voters can actually remove.
            </p>

            <p className="js-reveal">
              That doesn't mean flattening national differences. Federations that work — the US, Germany, Canada, Switzerland — succeed precisely because they let a genuinely representative federal legislature negotiate across regions and interest groups that disagree, rather than assuming decisions taken further from citizens are automatically more legitimate. A federal European constitution would need to state plainly, article by article, which competences sit in Brussels and which stay national — more plainly than the current division under the Treaty on the Functioning of the EU (TFEU) does. To see how powers are currently split, consult the <Link to="/data-room">Competence Matrix</Link>.
            </p>

            {/* IV. The Security Argument */}
            <h2 className="js-reveal" id="security" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', borderTop: 'var(--border-hairline)', paddingTop: 'var(--space-8)', marginTop: 'var(--space-16)' }}>
              IV. The Security Argument
            </h2>
            <p className="js-reveal">
              EU member states spent a combined €279 billion on defence in 2023 (1.6% of GDP) according to the European Defence Agency, rising to €343 billion in 2024 — roughly comparable to Russia's entire annual state budget — but split across 27 separate procurement systems, army structures, and equipment standards. The European Parliament's own research service estimates that this fragmentation — duplicated R&D, incompatible equipment, no economies of scale — costs the EU somewhere between €18 billion and €57 billion a year in wasted capacity, money that buys real hardware in a pooled system and buys overhead in a fragmented one.
            </p>

            <p className="js-reveal">
              A unified European defence procurement and command structure wouldn't just save money — it would let the EU act on decisions it currently can only debate: sending equipment fast, standardising ammunition calibres across armies, negotiating arms contracts from a position that suppliers can't play off against each other. To see the scale of that fragmentation and what pooled procurement could look like, view the Scenario Sliders and the 27 States vs. One Bloc Map in the <Link to="/data-room">Data Room</Link>.
            </p>

            <hr style={{ marginBlock: 'var(--space-16)', borderColor: 'var(--rule-grey)' }} />

            {/* V. Objections & Responses */}
            <h2 className="js-reveal" id="objections" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-6)' }}>
              V. Objections &amp; Responses
            </h2>

            <p className="js-reveal" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
              What follows is a summary of the strongest objections to European federalism, and the responses they warrant. This section exists because a serious argument is made stronger, not weaker, by engaging with its critics honestly.
            </p>

            <div className="accordion" role="list">
              <details className="accordion-item" role="listitem">
                <summary className="accordion-item__trigger" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-lg)', fontWeight: 600 }}>
                  "A federation would mean the end of national sovereignty."
                </summary>
                <div className="accordion-item__body">
                  <p className="js-reveal">
                    All federations pool, rather than eliminate, sovereignty. The constituent states of the US, Germany, Canada, and Switzerland retain substantial autonomous powers — over culture, education, local taxation, and much else — while sharing federal authority in foreign policy, defence, and macroeconomics. The EU already shares sovereignty extensively through its existing treaties and case law; the real question is whether that sharing is governed with adequate democratic accountability. As things stand, it mostly isn't.
                  </p>
                </div>
              </details>

              <details className="accordion-item" role="listitem">
                <summary className="accordion-item__trigger" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-lg)', fontWeight: 600 }}>
                  "European citizens don't want this — there's no demos."
                </summary>
                <div className="accordion-item__body">
                  <p className="js-reveal">
                    The "no demos" argument — that federation requires a shared European political identity that doesn't yet exist — gets cause and effect backwards. American national identity wasn't a precondition of the 1787 Constitution; it developed substantially because of the institutions the Constitution created. On the public-opinion evidence, support has actually moved sharply in the federalist direction on the issues that matter most: 81% of EU citizens told Eurobarometer in spring 2025 they favour a common defence and security policy — the highest figure recorded since the question was first asked in 2004 — and support for the euro is at its highest level since the currency was introduced. Support isn't the obstacle. Political leadership willing to spend it is.
                  </p>
                </div>
              </details>

              <details className="accordion-item" role="listitem">
                <summary className="accordion-item__trigger" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-lg)', fontWeight: 600 }}>
                  "The EU already has a democratic deficit — federation would make it worse."
                </summary>
                <div className="accordion-item__body">
                  <p className="js-reveal">
                    This runs the argument backwards. The deficit is a consequence of the EU's current hybrid structure — executive power resting with a Council of national governments operating largely behind closed doors, while the directly elected Parliament lacks legislative initiative and revenue-raising power. A federal settlement would, by design, move executive accountability to a legislature that is genuinely representative and open. The deficit isn't inherent to supranational governance; it's inherent to the specific, unfinished form the EU currently takes.
                  </p>
                </div>
              </details>

              <details className="accordion-item" role="listitem">
                <summary className="accordion-item__trigger" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-lg)', fontWeight: 600 }}>
                  "Subsidiarity means decisions should stay national."
                </summary>
                <div className="accordion-item__body">
                  <p className="js-reveal">
                    Article 5(3) of the Treaty on European Union requires the EU to act only where "the objectives of the proposed action cannot be sufficiently achieved by the Member States." For defence, macroeconomic stability, climate, and migration, that test is clearly met — these are cross-border problems no single member state can solve alone, which is exactly the case the treaty text anticipates for EU-level action. Subsidiarity doesn't mandate national action by default; it mandates whichever level can actually achieve the objective. In most of the domains where the EU underperforms today, subsidiarity is the argument for federal competence, not against it.
                  </p>
                </div>
              </details>
            </div>

            {/* Citation & Source Footer Box */}
            <div style={{ marginTop: 'var(--space-16)', padding: 'var(--space-6)', background: 'var(--paper-mid)', border: 'var(--border-hairline)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--space-2)' }}>
                HOW TO CITE THIS MONOGRAPH
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', background: 'var(--paper)', padding: 'var(--space-4)', border: '1px solid var(--rule-grey)', borderRadius: '2px', wordBreak: 'break-all' }}>
                European Federal Research Initiative (2026). "Why Europe Must Become a Federation." <i>Research Monograph 01</i>. Ref: DOC-EFRI-2026-EU-01. Available at: https://morgan98800.github.io/federal-eu-project/#/the-case
              </div>
            </div>

          </div>
        </div>
      </article>
    </div>
  );
};

export default TheCase;
