import Link from "next/link";

const caseStudies = [
  {
    slug: "meridian-rebrand",
    client: "Meridian Health",
    category: "Brand Strategy & Web",
    headline: "A complete brand transformation that tripled market awareness.",
    result: "+180% brand awareness",
    resultDetail: "In 6 months",
    gradient: "from-violet-600 to-indigo-600",
    metrics: [
      { label: "Brand Awareness", value: "+180%" },
      { label: "Web Traffic", value: "+320%" },
      { label: "Lead Gen", value: "+95%" },
    ],
  },
  {
    slug: "atlas-ecommerce",
    client: "Atlas Outdoors",
    category: "E-Commerce & Digital",
    headline: "From local retailer to national DTC brand in under a year.",
    result: "$4.2M revenue",
    resultDetail: "In 6 months",
    gradient: "from-pink-500 to-rose-500",
    metrics: [
      { label: "Revenue", value: "$4.2M" },
      { label: "ROAS", value: "6.8x" },
      { label: "AOV", value: "+42%" },
    ],
  },
  {
    slug: "nova-saas-launch",
    client: "Nova SaaS",
    category: "Product Launch",
    headline: "12,000 signups in 30 days with zero paid advertising.",
    result: "12K signups",
    resultDetail: "In 30 days",
    gradient: "from-amber-500 to-orange-500",
    metrics: [
      { label: "Signups", value: "12,000" },
      { label: "CAC", value: "$3.20" },
      { label: "Conversion", value: "8.4%" },
    ],
  },
  {
    slug: "vertex-b2b",
    client: "Vertex Industrial",
    category: "B2B Marketing",
    headline: "Turning a legacy manufacturer into a digital-first brand.",
    result: "+340% qualified leads",
    resultDetail: "Year over year",
    gradient: "from-emerald-500 to-teal-500",
    metrics: [
      { label: "Qualified Leads", value: "+340%" },
      { label: "Sales Cycle", value: "-28 days" },
      { label: "Pipeline", value: "+$12M" },
    ],
  },
  {
    slug: "helix-fintech",
    client: "Helix Finance",
    category: "Content & SEO",
    headline: "Dominating organic search in the competitive fintech space.",
    result: "1.2M monthly visits",
    resultDetail: "From organic search",
    gradient: "from-sky-500 to-blue-500",
    metrics: [
      { label: "Organic Traffic", value: "1.2M/mo" },
      { label: "Keywords Ranked", value: "4,200+" },
      { label: "Domain Authority", value: "72" },
    ],
  },
  {
    slug: "prism-nonprofit",
    client: "Prism Foundation",
    category: "Social & Content",
    headline: "Building a movement through storytelling and community.",
    result: "+500K followers",
    resultDetail: "Across platforms",
    gradient: "from-fuchsia-500 to-purple-500",
    metrics: [
      { label: "Followers", value: "+500K" },
      { label: "Donations", value: "+260%" },
      { label: "Engagement", value: "12.4%" },
    ],
  },
];

export default function WorkPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 dot-grid opacity-[0.04]" />
        <div className="absolute -top-40 right-20 h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-36 md:pt-44">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            Our Work
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Case studies in{" "}
            <span className="gradient-text">real growth.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            Numbers don&apos;t lie. Here&apos;s a look at the results we&apos;ve driven for
            clients across industries, from startups to Fortune 500s.
          </p>
        </div>
      </section>

      {/* Case studies grid */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="card-hover group overflow-hidden rounded-2xl border border-gray-200"
              >
                {/* Color banner */}
                <div
                  className={`flex aspect-[2/1] items-end bg-gradient-to-br ${study.gradient} p-8`}
                >
                  <div>
                    <p className="text-sm font-medium text-white/70">
                      {study.category}
                    </p>
                    <h3 className="mt-1 text-2xl font-bold text-white">
                      {study.client}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-sm leading-relaxed text-gray-600">
                    {study.headline}
                  </p>

                  {/* Metrics */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {study.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-lg font-bold text-gray-900">
                          {m.value}
                        </p>
                        <p className="text-xs text-gray-500">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-violet-600 opacity-0 transition-opacity group-hover:opacity-100">
                    Read case study
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 bg-gray-50 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Your brand could be next.
          </h2>
          <p className="mt-4 text-gray-500">
            Let&apos;s talk about what&apos;s possible. Every engagement starts with a
            free strategy session — no strings attached.
          </p>
          <Link
            href="/contact"
            className="btn-shine mt-8 inline-flex rounded-full bg-violet-700 px-8 py-4 text-sm font-semibold text-white hover:bg-violet-800"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
