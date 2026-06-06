export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Nav */}
      <nav className="border-b border-[#21262d] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-lg">ChangelogAI</span>
        <a
          href={checkoutUrl}
          className="bg-[#58a6ff] text-[#0d1117] font-semibold px-4 py-2 rounded-md text-sm hover:bg-[#79b8ff] transition-colors"
        >
          Get Started
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <span className="inline-block bg-[#161b22] border border-[#21262d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          AI-Powered Developer Tool
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Changelogs that write{" "}
          <span className="text-[#58a6ff]">themselves</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect your GitHub or GitLab repo. ChangelogAI analyzes your commits, PRs, and issues
          and generates polished, user-facing changelogs in seconds — no manual writing required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-3 rounded-md text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start for $19/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] text-[#c9d1d9] font-semibold px-8 py-3 rounded-md text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn more
          </a>
        </div>

        {/* Feature pills */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {[
            "GitHub & GitLab",
            "OpenAI-powered",
            "Markdown export",
            "JSON & HTML formats",
            "Per-release grouping",
            "One-click publish",
          ].map((f) => (
            <span
              key={f}
              className="bg-[#161b22] border border-[#21262d] text-[#8b949e] text-sm px-4 py-2 rounded-full"
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#161b22] border-y border-[#21262d] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Connect your repo",
                desc: "Authenticate with GitHub or GitLab and select the repositories you want to track.",
              },
              {
                step: "02",
                title: "AI analyzes commits",
                desc: "Our AI reads your git history, PR descriptions, and linked issues to understand what changed.",
              },
              {
                step: "03",
                title: "Export your changelog",
                desc: "Download in Markdown, HTML, or JSON. Publish directly to your docs or website.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-[#0d1117] border border-[#21262d] rounded-xl p-6">
                <div className="text-[#58a6ff] font-mono text-sm font-bold mb-3">{item.step}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-[#8b949e] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Simple pricing</h2>
        <p className="text-[#8b949e] mb-12">One plan. Everything included. Cancel anytime.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">
            Pro
          </div>
          <div className="text-5xl font-extrabold text-white mb-1">
            $19
            <span className="text-xl font-normal text-[#8b949e]">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-8">Billed monthly. Cancel anytime.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited repositories",
              "GitHub & GitLab support",
              "AI changelog generation",
              "Markdown, HTML & JSON export",
              "Per-release grouping",
              "Priority support",
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feat}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] text-[#0d1117] font-bold py-3 rounded-lg hover:bg-[#79b8ff] transition-colors text-center"
          >
            Subscribe now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#161b22] border-t border-[#21262d] py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">FAQ</h2>
          <div className="space-y-6">
            {[
              {
                q: "Which git providers are supported?",
                a: "ChangelogAI supports GitHub and GitLab. Connect via OAuth and we handle the rest — commits, PRs, and linked issues are all analyzed automatically.",
              },
              {
                q: "How does the AI generate changelogs?",
                a: "We use OpenAI to read your commit messages, PR titles, and issue descriptions, then group and rewrite them into clear, user-friendly release notes your customers will actually understand.",
              },
              {
                q: "Can I cancel my subscription?",
                a: "Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period.",
              },
            ].map((item) => (
              <div key={item.q} className="border border-[#21262d] rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} ChangelogAI. Built for open source maintainers and product teams.</p>
      </footer>
    </main>
  );
}
