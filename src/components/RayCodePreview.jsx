import { useState } from 'react'

export default function RayCodePreview() {
  const [copied, setCopied] = useState(false)

  const codeSnippet = `// Treaty of European Federation (Draft 2026)
// Article I: Democratic Governance & Sovereignty

const FederalEurope = {
  jurisdiction: "27 Sovereign Member States",
  citizens: 448_000_000,
  gdp: "€16.6 Trillion",

  governance: {
    legislature: "Bicameral Parliament (Citizens + States)",
    executive: "Directly-Elected European President",
    votingRule: "Qualified Majority (Ending Unanimous Veto)"
  },

  guarantees: [
    "Carbon Neutrality by 2035",
    "European Minimum Income",
    "Digital Data Sovereignty (GDPR+)",
    "Unified Asylum & Rational Migration"
  ]
};

export default FederalEurope;`

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="ray-card">
      <div className="ray-card-header">
        <div className="ray-window-controls">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <span className="ray-title">FederalTreaty2026.ts</span>
        <button className="ray-copy-btn" onClick={handleCopy}>
          {copied ? '✓ Copied' : 'Copy Spec'}
        </button>
      </div>

      <div className="ray-card-body">
        <pre className="ray-code">
          <code>
            <span className="code-comment">// Treaty of European Federation (Draft 2026)</span>{'\n'}
            <span className="code-comment">// Article I: Democratic Governance & Sovereignty</span>{'\n'}{'\n'}
            <span className="code-keyword">const</span> <span className="code-entity">FederalEurope</span> = {'{\n'}
            {'  '}<span className="code-prop">jurisdiction</span>: <span className="code-string">"27 Sovereign Member States"</span>,{'\n'}
            {'  '}<span className="code-prop">citizens</span>: <span className="code-number">448_000_000</span>,{'\n'}
            {'  '}<span className="code-prop">gdp</span>: <span className="code-string">"€16.6 Trillion"</span>,{'\n'}{'\n'}
            {'  '}<span className="code-prop">governance</span>: {'{\n'}
            {'    '}<span className="code-prop">legislature</span>: <span className="code-string">"Bicameral Parliament (Citizens + States)"</span>,{'\n'}
            {'    '}<span className="code-prop">executive</span>: <span className="code-string">"Directly-Elected European President"</span>,{'\n'}
            {'    '}<span className="code-prop">votingRule</span>: <span className="code-string">"Qualified Majority (Ending Unanimous Veto)"</span>{'\n'}
            {'  }'},{'\n'}{'\n'}
            {'  '}<span className="code-prop">guarantees</span>: [{'\n'}
            {'    '}<span className="code-string">"Carbon Neutrality by 2035"</span>,{'\n'}
            {'    '}<span className="code-string">"European Minimum Income"</span>,{'\n'}
            {'    '}<span className="code-string">"Digital Data Sovereignty (GDPR+)"</span>,{'\n'}
            {'    '}<span className="code-string">"Unified Asylum & Rational Migration"</span>{'\n'}
            {'  ]'}{'\n'}
            {'}'};{'\n'}{'\n'}
            <span className="code-keyword">export default</span> <span className="code-entity">FederalEurope</span>;
          </code>
        </pre>
      </div>
    </div>
  )
}
