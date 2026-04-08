import Link from "next/link";

const values = [
  {
    title: "Results Over Vanity",
    description:
      "We measure success by business impact, not likes and impressions. Every campaign is tied to revenue outcomes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    title: "Radical Transparency",
    description:
      "No black boxes. You see exactly where every dollar goes, how campaigns perform, and what we recommend next.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
  },
  {
    title: "Speed & Precision",
    description:
      "We move fast without cutting corners. Agile sprints, rapid testing, and iterative improvements that compound.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Long-Term Partnership",
    description:
      "We're not a vendor — we're an extension of your team. Our best relationships are years deep and still growing.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Alexandra Rivera",
    role: "Founder & CEO",
    initials: "AR",
    bio: "15 years in marketing leadership. Previously VP Marketing at a Fortune 500. Built Nexus from a 2-person shop to a 40-person agency.",
  },
  {
    name: "Marcus Thompson",
    role: "Chief Strategy Officer",
    initials: "MT",
    bio: "Former McKinsey consultant turned brand strategist. Obsessed with finding the intersection of data and creative storytelling.",
  },
  {
    name: "Emily Nakamura",
    role: "Creative Director",
    initials: "EN",
    bio: "Award-winning designer with work featured in Communication Arts, Awwwards, and Fast Company. Leads our 12-person creative team.",
  },
  {
    name: "David Okafor",
    role: "VP of Digital",
    initials: "DO",
    bio: "Performance marketing expert who has managed over $50M in ad spend. Google and Meta certified partner.",
  },
  {
    name: "Sofia Martinez",
    role: "Head of Content",
    initials: "SM",
    bio: "Former journalist turned content strategist. Has built content programs that drive millions of organic visits monthly.",
  },
  {
    name: "Ryan Patel",
    role: "Director of Engineering",
    initials: "RP",
    bio: "Full-stack architect with 10+ years building high-performance web applications. Leads our development team.",
  },
];

const milestones = [
  { year: "2016", event: "Founded in San Francisco with 2 people and a big vision" },
  { year: "2018", event: "Crossed $1M in revenue; expanded to 10 team members" },
  { year: "2019", event: "Opened New York office; landed first Fortune 500 client" },
  { year: "2020", event: "Pivoted to fully remote; grew revenue 3x during the pandemic" },
  { year: "2022", event: "Named Top 50 Agency by AdAge; 30 team members across 4 countries" },
  { year: "2024", event: "Launched AI-powered marketing division; surpassed $50M in client revenue generated" },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 dot-grid opacity-[0.04]" />
        <div className="absolute -top-40 right-0 h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-36 md:pt-44">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            About Nexus
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            We exist to make marketing{" "}
            <span className="gradient-text">actually work.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            Founded in 2016, Nexus was born from a simple frustration: most
            marketing agencies over-promise and under-deliver. We decided to
            build one that doesn&apos;t.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
                Our Mission
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Growth that&apos;s measurable, sustainable, and real.
              </h2>
              <p className="mt-6 text-gray-500 leading-relaxed">
                Too many businesses waste money on marketing that looks good in
                reports but doesn&apos;t move the needle. We take a fundamentally
                different approach — starting with your business objectives and
                working backwards to build campaigns that deliver provable ROI.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Every strategy we create is custom. Every campaign we launch is
                tracked. Every dollar you spend with us is accountable. That&apos;s not
                a tagline — it&apos;s how we operate, and it&apos;s why 94% of our clients
                stay year after year.
              </p>
            </div>

            {/* Stats card */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "40+", label: "Team Members", color: "bg-violet-50 text-violet-700" },
                { value: "8", label: "Years in Business", color: "bg-indigo-50 text-indigo-700" },
                { value: "$50M+", label: "Revenue Generated", color: "bg-pink-50 text-pink-700" },
                { value: "4", label: "Countries", color: "bg-amber-50 text-amber-700" },
              ].map((s) => (
                <div key={s.label} className={`rounded-2xl p-8 ${s.color}`}>
                  <p className="text-3xl font-bold">{s.value}</p>
                  <p className="mt-1 text-sm opacity-70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
              Our Values
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              What drives every decision we make.
            </h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  {v.icon}
                </div>
                <h3 className="mt-5 text-base font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
              Leadership
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              The people behind the results.
            </h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <div
                key={person.name}
                className="card-hover rounded-2xl border border-gray-200 p-8"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-lg font-bold text-white">
                  {person.initials}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{person.name}</h3>
                <p className="text-sm font-medium text-violet-600">
                  {person.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
              Our Journey
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              From startup to standout.
            </h2>
          </div>
          <div className="mt-16 space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="relative flex gap-6 pb-10 last:pb-0">
                {/* Line */}
                {i < milestones.length - 1 && (
                  <div className="absolute left-[19px] top-10 h-full w-px bg-gray-200" />
                )}
                {/* Dot */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">
                  {m.year.slice(2)}
                </div>
                <div className="pt-1.5">
                  <p className="text-sm font-semibold text-gray-900">{m.year}</p>
                  <p className="mt-1 text-sm text-gray-500">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Want to work with us?
          </h2>
          <p className="mt-4 text-gray-500">
            We&apos;re always looking for ambitious brands to partner with. Let&apos;s
            talk about what growth looks like for you.
          </p>
          <Link
            href="/contact"
            className="btn-shine mt-8 inline-flex items-center gap-2 rounded-full bg-violet-700 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-violet-800"
          >
            Get in Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
