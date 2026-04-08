"use client";

import { useState, FormEvent } from "react";

const contactInfo = [
  {
    title: "Email Us",
    detail: "hello@nexusagency.com",
    sub: "We respond within 24 hours",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
  },
  {
    title: "Call Us",
    detail: "(415) 555-0132",
    sub: "Mon-Fri, 9am-6pm PT",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Visit Us",
    detail: "548 Market St, Suite 300",
    sub: "San Francisco, CA 94104",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const budgets = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
];

const serviceOptions = [
  "Brand Strategy",
  "Digital Marketing",
  "Web Development",
  "Content & Creative",
  "Analytics & Insights",
  "Social Media",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    service: "",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 dot-grid opacity-[0.04]" />
        <div className="absolute -top-40 right-20 h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-36 md:pt-44">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            Contact
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Let&apos;s build something{" "}
            <span className="gradient-text">incredible.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            Tell us about your project and we&apos;ll get back to you within 24
            hours with ideas, questions, and a clear next step.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Contact info sidebar */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold">Get in touch</h2>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                Whether you have a specific project in mind or just want to
                explore what&apos;s possible, we&apos;d love to hear from you. No
                pressure, no sales pitch — just a conversation.
              </p>

              <div className="mt-10 space-y-8">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="mt-0.5 text-sm text-gray-900">{item.detail}</p>
                      <p className="text-xs text-gray-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ quick links */}
              <div className="mt-12 rounded-2xl bg-gray-50 p-6">
                <h3 className="text-sm font-semibold">Common Questions</h3>
                <dl className="mt-4 space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-900">
                      What&apos;s your typical engagement size?
                    </dt>
                    <dd className="mt-1 text-xs text-gray-500">
                      Our projects range from $5K to $500K+. We scope every
                      engagement to your specific needs and budget.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-900">
                      How quickly can you start?
                    </dt>
                    <dd className="mt-1 text-xs text-gray-500">
                      Most projects kick off within 2 weeks of signing. We move
                      fast once we align on strategy.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-900">
                      Do you work with startups?
                    </dt>
                    <dd className="mt-1 text-xs text-gray-500">
                      Absolutely. Some of our best work has been with early-stage
                      companies. We love building from scratch.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="flex h-full items-center justify-center rounded-2xl border border-gray-200 p-12 text-center">
                  <div>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="mt-5 text-xl font-bold">
                      Thanks for reaching out!
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      We&apos;ll review your inquiry and get back to you within 24
                      hours. In the meantime, feel free to explore our work.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-gray-200 p-8 md:p-10"
                >
                  <h3 className="text-lg font-bold">Tell us about your project</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Fill out the form below and we&apos;ll be in touch shortly.
                  </p>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-colors focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-colors focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Inc."
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-colors focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Monthly Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-colors focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                      >
                        <option value="">Select a range</option>
                        {budgets.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="mb-2 block text-sm font-medium">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-colors focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-6">
                    <label className="mb-2 block text-sm font-medium">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your goals, timeline, and any specific challenges you're facing..."
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-colors focus:border-violet-400 focus:ring-2 focus:ring-violet-100 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-shine mt-8 w-full rounded-full bg-violet-700 py-4 text-sm font-semibold text-white transition-colors hover:bg-violet-800 sm:w-auto sm:px-10"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
