import Link from "next/link";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const stats = [
  { value: "200+", label: "Clients Served" },
  { value: "94%", label: "Client Retention" },
  { value: "3.2x", label: "Avg. ROI Increase" },
  { value: "50M+", label: "Revenue Generated" },
];

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l3 3 5-5" />
      </svg>
    ),
    title: "Brand Strategy",
    description:
      "We define your brand's DNA — positioning, messaging, and visual identity that resonates with your ideal audience.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Digital Marketing",
    description:
      "Performance-driven campaigns across search, social, and programmatic channels that convert at scale.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Web & App Development",
    description:
      "Custom digital products built for performance, accessibility, and seamless user experience across every device.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    title: "Content & Creative",
    description:
      "Compelling copy, video, and design assets that tell your story and drive engagement at every touchpoint.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    title: "Analytics & Insights",
    description:
      "Data-driven decision making with custom dashboards, attribution modeling, and actionable growth insights.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Social Media",
    description:
      "Full-service social management — strategy, content creation, community engagement, and paid amplification.",
  },
];

const portfolio = [
  {
    slug: "meridian-rebrand",
    client: "Meridian Health",
    category: "Brand Strategy",
    result: "+180% brand awareness",
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    slug: "atlas-ecommerce",
    client: "Atlas Outdoors",
    category: "E-Commerce",
    result: "$4.2M revenue in 6 months",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    slug: "nova-saas-launch",
    client: "Nova SaaS",
    category: "Product Launch",
    result: "12,000 signups in 30 days",
    gradient: "from-amber-500 to-orange-500",
  },
];

const testimonials = [
  {
    quote:
      "Nexus didn't just redesign our brand — they completely transformed how our audience perceives us. Revenue jumped 240% within a year.",
    name: "Sarah Chen",
    title: "CEO, Meridian Health",
    avatar: "SC",
  },
  {
    quote:
      "Their data-driven approach to our campaigns was a game-changer. We went from guessing to growing predictably every quarter.",
    name: "James Whitaker",
    title: "VP Marketing, Atlas Outdoors",
    avatar: "JW",
  },
  {
    quote:
      "Working with Nexus feels like having a world-class marketing department in-house. They're strategic, fast, and genuinely invested.",
    name: "Priya Desai",
    title: "Founder, Nova SaaS",
    avatar: "PD",
  },
];

const logos = [
  "Meridian", "Atlas", "Nova", "Vertex", "Helix", "Prism", "Zenith", "Apex",
];

export default function HomePage() {
  return (
    <main>
      {/* ───── HERO ───── */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        {/* Background elements */}
        <div className="absolute inset-0 dot-grid opacity-[0.04]" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-indigo-600/15 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 md:pb-32 md:pt-44">
          <div className="max-w-4xl">
            <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-violet-300">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              Full-Service Marketing Agency
            </div>

            <h1 className="animate-fade-in-up delay-100 mt-8 text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl">
              We build brands that{" "}
              <span className="gradient-text">dominate</span> their market
            </h1>

            <p className="animate-fade-in-up delay-200 mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
              Strategy, creative, and technology — all under one roof. We help
              ambitious companies grow faster through marketing that actually
              works.
            </p>

            <div className="animate-fade-in-up delay-300 mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-violet-700"
              >
                Start a Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div className="animate-fade-in-up delay-500 mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-white md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SCROLL SHOWCASE ───── */}
      <section className="bg-gray-950 overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-4">
                Our Platform
              </p>
              <h2 className="text-4xl md:text-[5rem] font-bold leading-none text-white">
                Marketing intelligence,{" "}
                <span className="gradient-text">all in one place.</span>
              </h2>
              <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
                Real-time dashboards, campaign analytics, and AI-powered
                insights — built for teams that move fast.
              </p>
            </>
          }
        >
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=75"
            alt="Marketing analytics dashboard"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      {/* ───── TRUSTED BY ───── */}
      <section className="border-b border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-gray-400">
            Trusted by industry leaders
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {logos.map((name) => (
              <span
                key={name}
                className="text-lg font-bold tracking-tight text-gray-300"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SERVICES ───── */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Full-spectrum marketing,{" "}
              <span className="text-gray-400">one team.</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              No more juggling freelancers and agencies. We bring strategy,
              creative, and technical expertise together to drive real results.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <Link
                key={svc.title}
                href="/services"
                className="card-hover group rounded-2xl border border-gray-200 bg-white p-8 transition-colors hover:border-violet-200"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition-colors group-hover:bg-violet-100">
                  {svc.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{svc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {svc.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-violet-600 opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───── PORTFOLIO ───── */}
      <section className="relative bg-gray-50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
                Selected Work
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Results speak louder.
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:underline"
            >
              View all projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {portfolio.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="card-hover group relative overflow-hidden rounded-2xl"
              >
                <div
                  className={`flex aspect-[4/3] items-end bg-gradient-to-br ${project.gradient} p-8`}
                >
                  <div>
                    <p className="text-sm font-medium text-white/70">
                      {project.category}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-white">
                      {project.client}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-white/90">
                      {project.result}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIALS ───── */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
              Client Love
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Don&apos;t take our word for it.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="card-hover rounded-2xl border border-gray-200 bg-white p-8"
              >
                {/* Stars */}
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-relaxed text-gray-600">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="relative overflow-hidden bg-gray-950 py-24 md:py-32">
        <div className="absolute -top-40 -right-40 h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 h-[300px] w-[300px] rounded-full bg-pink-600/15 blur-[80px]" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Ready to outgrow your competition?
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            Book a free strategy call with our team. We&apos;ll audit your current
            marketing and show you exactly where the growth opportunities are.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-violet-600 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-violet-700"
            >
              Book Free Strategy Call
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
