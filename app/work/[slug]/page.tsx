import Link from "next/link";

const caseStudyData: Record<
  string,
  {
    client: string;
    category: string;
    gradient: string;
    headline: string;
    overview: string;
    challenge: string;
    solution: string;
    results: string;
    metrics: { label: string; value: string }[];
    services: string[];
    testimonial: { quote: string; name: string; title: string };
  }
> = {
  "meridian-rebrand": {
    client: "Meridian Health",
    category: "Brand Strategy & Web Development",
    gradient: "from-violet-600 to-indigo-600",
    headline: "A complete brand transformation that tripled market awareness.",
    overview:
      "Meridian Health was a 30-year-old healthcare network that had lost relevance with younger demographics. They needed a modern brand that honored their legacy while attracting a new generation of patients and top medical talent.",
    challenge:
      "Meridian's brand identity hadn't been updated in 15 years. Their website was slow, inaccessible, and ranked poorly in search. Patient acquisition costs were rising 20% year over year, and they were losing talent to more modern competitors.",
    solution:
      "We conducted 40+ stakeholder interviews, ran patient focus groups, and performed a comprehensive competitive audit. From there, we rebuilt their brand from the ground up — new positioning, visual identity, messaging framework, and a fully custom website with an integrated patient portal.",
    results:
      "Within 6 months of launch, Meridian saw a 180% increase in aided brand awareness, a 320% increase in organic web traffic, and a 95% improvement in qualified lead generation. Patient acquisition costs dropped 34%.",
    metrics: [
      { label: "Brand Awareness", value: "+180%" },
      { label: "Web Traffic", value: "+320%" },
      { label: "Lead Generation", value: "+95%" },
      { label: "Patient Acquisition Cost", value: "-34%" },
    ],
    services: ["Brand Strategy", "Visual Identity", "Web Development", "SEO", "Content Strategy"],
    testimonial: {
      quote:
        "Nexus didn't just redesign our brand — they completely transformed how our audience perceives us. Revenue jumped 240% within a year.",
      name: "Sarah Chen",
      title: "CEO, Meridian Health",
    },
  },
  "atlas-ecommerce": {
    client: "Atlas Outdoors",
    category: "E-Commerce & Digital Marketing",
    gradient: "from-pink-500 to-rose-500",
    headline: "From local retailer to national DTC brand in under a year.",
    overview:
      "Atlas Outdoors was a beloved regional outdoor gear retailer with 3 physical stores. They wanted to launch a direct-to-consumer e-commerce brand that could compete nationally against established players.",
    challenge:
      "Atlas had zero e-commerce infrastructure, no digital marketing capability, and was competing against brands with 100x their budget. They needed to go from zero to significant revenue in under a year to justify the investment.",
    solution:
      "We built a high-converting Shopify Plus storefront, developed a content-led SEO strategy, launched performance campaigns across Google and Meta, and created an email nurture system. We also produced all product photography and video content.",
    results:
      "Atlas generated $4.2M in e-commerce revenue in the first 6 months, achieving a 6.8x return on ad spend. Average order value increased 42% through strategic merchandising and upsell flows.",
    metrics: [
      { label: "Revenue (6mo)", value: "$4.2M" },
      { label: "ROAS", value: "6.8x" },
      { label: "Avg Order Value", value: "+42%" },
      { label: "Email Revenue", value: "28%" },
    ],
    services: ["E-Commerce Development", "Paid Media", "Email Marketing", "Content Creation", "Analytics"],
    testimonial: {
      quote:
        "Their data-driven approach to our campaigns was a game-changer. We went from guessing to growing predictably every quarter.",
      name: "James Whitaker",
      title: "VP Marketing, Atlas Outdoors",
    },
  },
  "nova-saas-launch": {
    client: "Nova SaaS",
    category: "Product Launch",
    gradient: "from-amber-500 to-orange-500",
    headline: "12,000 signups in 30 days with zero paid advertising.",
    overview:
      "Nova SaaS was launching a new project management tool in an incredibly crowded market. They needed to break through the noise and build a waitlist before launch — all without a paid media budget.",
    challenge:
      "The project management space has dozens of established competitors. Nova had a great product but zero brand recognition, no content footprint, and a modest marketing budget. They needed creative, high-leverage tactics.",
    solution:
      "We developed a viral referral-based waitlist, produced a series of thought leadership pieces that generated organic buzz, partnered with micro-influencers in the productivity space, and orchestrated a Product Hunt launch that hit #1 Product of the Day.",
    results:
      "Nova generated 12,000 signups in the first 30 days at a cost per acquisition of just $3.20. The Product Hunt launch drove 40% of initial signups, and the referral program generated a 3.2x viral coefficient.",
    metrics: [
      { label: "Signups (30 days)", value: "12,000" },
      { label: "Cost Per Signup", value: "$3.20" },
      { label: "Conversion Rate", value: "8.4%" },
      { label: "Viral Coefficient", value: "3.2x" },
    ],
    services: ["Launch Strategy", "Content Marketing", "Influencer Partnerships", "Community Building"],
    testimonial: {
      quote:
        "Working with Nexus feels like having a world-class marketing department in-house. They're strategic, fast, and genuinely invested.",
      name: "Priya Desai",
      title: "Founder, Nova SaaS",
    },
  },
  "vertex-b2b": {
    client: "Vertex Industrial",
    category: "B2B Marketing",
    gradient: "from-emerald-500 to-teal-500",
    headline: "Turning a legacy manufacturer into a digital-first brand.",
    overview:
      "Vertex Industrial is a 50-year-old industrial equipment manufacturer. Their sales process was entirely relationship-driven, and they had almost no digital presence. Leadership wanted to modernize without alienating their existing customer base.",
    challenge:
      "Vertex's buyer journey was 100% offline — trade shows, cold calls, and in-person demos. Their website was essentially a digital brochure. They were losing deals to more digitally savvy competitors who had robust online content and self-service tools.",
    solution:
      "We built a complete digital marketing infrastructure: new website with product configurator, ABM campaigns targeting key accounts, a content hub with technical resources, and HubSpot implementation for sales enablement.",
    results:
      "Qualified leads increased 340% year over year. The sales cycle shortened by 28 days. The sales pipeline grew by $12M in new opportunities attributed to digital marketing efforts.",
    metrics: [
      { label: "Qualified Leads", value: "+340%" },
      { label: "Sales Cycle", value: "-28 days" },
      { label: "Pipeline Value", value: "+$12M" },
      { label: "Website Leads", value: "340/mo" },
    ],
    services: ["ABM Campaigns", "Web Development", "Content Marketing", "Sales Enablement", "Marketing Automation"],
    testimonial: {
      quote:
        "They took the time to truly understand our industry. The results have transformed how we acquire new business.",
      name: "Robert Chang",
      title: "CMO, Vertex Industrial",
    },
  },
  "helix-fintech": {
    client: "Helix Finance",
    category: "Content & SEO",
    gradient: "from-sky-500 to-blue-500",
    headline: "Dominating organic search in the competitive fintech space.",
    overview:
      "Helix Finance is a personal finance platform that needed to build organic authority in one of the most competitive search landscapes. They wanted to reduce dependence on paid acquisition and build a sustainable content moat.",
    challenge:
      "Fintech SEO is notoriously competitive, with domain authorities in the 80s and 90s for top players. Helix was starting from a domain authority of 22 with fewer than 50 indexed pages. Paid acquisition costs were over $45 per lead.",
    solution:
      "We built a comprehensive content strategy targeting 2,000+ keywords across the buyer journey, produced 150+ pieces of expert-reviewed financial content, implemented technical SEO improvements, and developed a link-building program.",
    results:
      "Within 18 months, Helix grew from 30K to 1.2M monthly organic visits. They now rank for 4,200+ keywords and have a domain authority of 72. Organic leads now account for 60% of total signups.",
    metrics: [
      { label: "Organic Traffic", value: "1.2M/mo" },
      { label: "Keywords Ranked", value: "4,200+" },
      { label: "Domain Authority", value: "72" },
      { label: "Organic Lead Share", value: "60%" },
    ],
    services: ["SEO Strategy", "Content Production", "Technical SEO", "Link Building", "Analytics"],
    testimonial: {
      quote:
        "Our organic channel went from an afterthought to our #1 growth driver. The ROI has been incredible.",
      name: "Lisa Wang",
      title: "Head of Growth, Helix Finance",
    },
  },
  "prism-nonprofit": {
    client: "Prism Foundation",
    category: "Social Media & Content",
    gradient: "from-fuchsia-500 to-purple-500",
    headline: "Building a movement through storytelling and community.",
    overview:
      "Prism Foundation is a nonprofit focused on arts education. They had a powerful mission but struggled to reach beyond their local community. They needed to build a national audience and drive donations through digital channels.",
    challenge:
      "Nonprofits face unique marketing challenges: tight budgets, emotional storytelling requirements, and the need to drive donations (not just awareness). Prism had 8,000 social followers and minimal online donation infrastructure.",
    solution:
      "We developed a content strategy centered on student stories and impact narratives, built a social presence across Instagram, TikTok, and LinkedIn, created a donation funnel with email nurture sequences, and produced a documentary-style brand film.",
    results:
      "Prism grew to 500K+ followers across platforms, increased donations by 260%, and achieved an average engagement rate of 12.4% — 6x the nonprofit industry average.",
    metrics: [
      { label: "Followers", value: "+500K" },
      { label: "Donations", value: "+260%" },
      { label: "Engagement Rate", value: "12.4%" },
      { label: "Brand Film Views", value: "2.1M" },
    ],
    services: ["Social Media Strategy", "Content Production", "Video Production", "Email Marketing", "Donation Optimization"],
    testimonial: {
      quote:
        "Nexus helped us turn our mission into a movement. The stories they tell have brought thousands of new supporters to our cause.",
      name: "Maria Santos",
      title: "Executive Director, Prism Foundation",
    },
  },
};

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudyData[slug];

  if (!study) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Case Study Not Found</h1>
          <Link href="/work" className="mt-4 inline-block text-violet-600 hover:underline">
            Back to Work
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 dot-grid opacity-[0.04]" />
        <div className="absolute -top-40 right-20 h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-36 md:pt-44">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Case Studies
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-violet-400">
            {study.category}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            {study.headline}
          </h1>
          <p className="mt-4 text-lg text-gray-400">{study.client}</p>
        </div>
      </section>

      {/* Metrics bar */}
      <section className={`bg-gradient-to-r ${study.gradient} py-10`}>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {study.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-3xl font-bold text-white">{m.value}</p>
              <p className="mt-1 text-sm text-white/70">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-16">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-600">
                Overview
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {study.overview}
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-600">
                The Challenge
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                {study.challenge}
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-600">
                Our Solution
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                {study.solution}
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-600">
                The Results
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                {study.results}
              </p>
            </div>

            {/* Services used */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-600">
                Services Provided
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.services.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="rounded-2xl bg-gray-50 p-8 md:p-12">
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="mt-5 text-lg leading-relaxed text-gray-700">
                &ldquo;{study.testimonial.quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="font-semibold">{study.testimonial.name}</p>
                <p className="text-sm text-gray-500">{study.testimonial.title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 bg-gray-50 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold">Want results like these?</h2>
          <p className="mt-4 text-gray-500">
            Let&apos;s discuss how we can drive similar growth for your business.
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
