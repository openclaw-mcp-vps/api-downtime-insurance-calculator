export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For DevOps teams running 10+ paid APIs
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Calculate SLA Credits &amp; Insurance Claims{' '}
          <span className="text-[#58a6ff]">Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Monitor API uptime, auto-calculate SLA breach credits, generate insurance claim docs, and track financial impact across all your APIs — in one dashboard.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Monitoring — $15/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No setup fees.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { title: 'SLA Credit Calculator', desc: 'Automatically compute credits owed based on your SLA tiers and actual downtime data.' },
          { title: 'Claim Documentation', desc: 'Generate ready-to-submit insurance claim reports with incident timelines and financial totals.' },
          { title: 'Financial Impact Tracker', desc: 'See real-time cost of outages across every API you depend on, aggregated in one view.' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Monitor unlimited API endpoints',
              'Automatic SLA breach detection',
              'Credit calculation engine',
              'Insurance claim PDF export',
              'Financial impact dashboard',
              'Email &amp; Slack alerts'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the SLA credit calculator work?',
              a: 'You input your SLA tiers (e.g. 99.9% uptime = 10% credit). We monitor your APIs continuously and automatically compute credits owed whenever a breach is detected, based on actual downtime duration.'
            },
            {
              q: 'What does the insurance claim documentation include?',
              a: 'Each report includes incident timestamps, affected endpoints, downtime duration, financial impact estimates, and a structured summary formatted for submission to your insurance provider or vendor.'
            },
            {
              q: 'Can I monitor APIs from multiple vendors?',
              a: 'Yes. Add any HTTP endpoint — REST, GraphQL, webhooks — regardless of vendor. The dashboard aggregates financial impact across all monitored APIs so you see your total exposure at a glance.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} API Downtime Insurance Calculator. All rights reserved.
      </footer>
    </main>
  )
}
