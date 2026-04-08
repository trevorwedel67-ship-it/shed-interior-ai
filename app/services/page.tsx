import Link from "next/link";

const services = [
  {
    id: "brand-strategy",
    title: "Brand Strategy",
    subtitle: "Define who you are and own it.",
    description:
      "Your brand is more than a logo — it's the feeling people get when they interact with your business. We build brand platforms that differentiate you in crowded markets and create lasting emotional connections.",
    deliverables: [
      "Brand positioning & messaging framework",
      "Visual identity system & brand guidelines",
      "Competitive landscape analysis",
      "Customer persona development",
      "Brand voice & tone documentation",
      "Launch strategy & rollout plan",
    ],
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Performance that compounds.",
    description:
      "We don't just run ads — we build marketing engines. Our data-driven approach to paid media, SEO, and email ensures every dollar works harder and every campaign builds on the last.",
    deliverables: [
      "Paid search & social campaigns (Google, Meta, LinkedIn)",
      "Search engine optimization (technical, on-page, off-page)",
      "Email marketing & automation sequences",
      "Conversion rate optimization",
      "Marketing attribution & analytics",
      "Monthly performance reporting",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: "web-development",
    title: "Web & App Development",
    subtitle: "Websites that work as hard as you do.",
    description:
      "Beautiful design means nothing if it doesn't convert. We build fast, accessible, SEO-optimized digital products that look stunning and drive measurable business results.",
    deliverables: [
      "Custom website design & development",
      "E-commerce platforms & optimization",
      "Progressive web apps (PWA)",
      "CMS implementation & training",
      "Performance & Core Web Vitals optimization",
      "Ongoing maintenance & support",
    ],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: "content-creation",
    title: "Content & Creative",
    subtitle: "Stories that sell.",
    description:
      "Content is the connective tissue of modern marketing. Our in-house creative team produces everything from blog posts to brand films — all designed to educate, engage, and convert your audience.",
    deliverables: [
      "Content strategy & editorial calendars",
      "Blog writing & thought leadership",
      "Video production & motion graphics",
      "Photography & visual asset creation",
      "Infographics & data visualization",
      "Podcast production & management",
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: "analytics",
    title: "Analytics & Insights",
    subtitle: "Know exactly what's working.",
    description:
      "Gut feelings don't scale. We build custom analytics infrastructure that gives you real-time visibility into what's driving revenue and where to invest next.",
    deliverables: [
      "Custom analytics dashboard setup",
      "Multi-touch attribution modeling",
      "A/B testing frameworks",
      "Customer journey mapping",
      "Competitive intelligence reporting",
      "Quarterly strategic reviews",
    ],
    gradient: "from-sky-500 to-blue-500",
  },
  {
    id: "social-media",
    title: "Social Media Management",
    subtitle: "Show up. Stand out. Stay consistent.",
    description:
      "Social media is where brands are built today. We handle everything — strategy, content, community management, and paid amplification — so you can focus on running your business.",
    deliverables: [
      "Platform strategy & content planning",
      "Daily content creation & publishing",
      "Community management & engagement",
      "Influencer identification & outreach",
      "Paid social campaign management",
      "Monthly analytics & optimization",
    ],
    gradient: "from-fuchsia-500 to-purple-500",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We deep-dive into your business, market, and competitors. Stakeholder interviews, data audits, and competitive analysis give us the full picture.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "We craft a custom roadmap with clear priorities, timelines, and KPIs. You'll know exactly what we're doing, why, and what success looks like.",
  },
  {
    step: "03",
    title: "Execution",
    description:
      "Our cross-functional team brings the strategy to life — design, development, content, and campaigns, all moving in lockstep.",
  },
  {
    step: "04",
    title: "Optimization",
    description:
      "We analyze results weekly, run experiments constantly, and refine the approach. Marketing is never set-it-and-forget-it.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 dot-grid opacity-[0.04]" />
        <div className="absolute -top-40 right-20 h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-36 md:pt-44">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            Our Services
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Everything you need to{" "}
            <span className="gradient-text">grow faster.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            No gaps, no silos, no excuses. We bring strategy, creative, and
            technology together so every piece of your marketing works in
            concert.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-24">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                id={svc.id}
                className="scroll-mt-24"
              >
                <div className={`grid gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                  {/* Text */}
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${svc.gradient} text-white text-sm font-bold`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h2 className="mt-5 text-2xl font-bold md:text-3xl">
                      {svc.title}
                    </h2>
                    <p className="mt-1 text-lg font-medium text-gray-400">
                      {svc.subtitle}
                    </p>
                    <p className="mt-4 leading-relaxed text-gray-500">
                      {svc.description}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:underline"
                    >
                      Discuss this service
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  {/* Deliverables */}
                  <div className={`rounded-2xl border border-gray-200 p-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                      What You Get
                    </h3>
                    <ul className="mt-6 space-y-4">
                      {svc.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <svg
                            className="mt-0.5 h-5 w-5 shrink-0 text-violet-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-600">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {i < services.length - 1 && (
                  <div className="section-divider mt-24" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
              Our Process
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              How we get you from here to there.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="relative rounded-2xl bg-white p-8 shadow-sm">
                <span className="text-4xl font-black text-violet-100">
                  {p.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Custom solutions, transparent pricing.
          </h2>
          <p className="mt-4 text-gray-500">
            Every business is different, so every engagement is custom-scoped.
            We&apos;ll give you a clear proposal with fixed pricing — no surprise
            invoices, ever.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn-shine rounded-full bg-violet-700 px-8 py-4 text-sm font-semibold text-white hover:bg-violet-800"
            >
              Request a Proposal
            </Link>
            <Link
              href="/work"
              className="rounded-full border border-gray-300 px-8 py-4 text-sm font-semibold text-gray-700 hover:border-gray-400"
            >
              See Past Results
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
