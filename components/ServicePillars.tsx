"use client";

import Link from "next/link";
import { ArrowUpRight, Building2, House } from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import { siteConfig } from "@/lib/site";

const pillars = [
  {
    icon: House,
    eyebrow: "Home Inspections",
    title: "Understand the home before making a major decision.",
    description:
      "Professional home inspections for buyers, sellers, and homeowners, combining a systematic property review with building science and engineering experience.",
    services: [
      "Buyer Inspection",
      "Pre-Listing Inspection",
      "New Construction / Tarion Inspection",
      "Annual Maintenance Inspection",
    ],
    trustLine: "P.Eng.-led · Building science informed",
    href: "/home-inspections",
    cta: "Explore Home Inspections",
    primary: true,
  },
  {
    icon: Building2,
    eyebrow: "Engineering Consulting",
    title: "Independent expertise for building envelope performance.",
    description:
      "Building envelope consulting for existing buildings, rehabilitation projects, and new construction, helping owners and project teams understand conditions, manage risk, and make informed technical decisions.",
    services: [
      "Building Envelope Consulting",
      "Building Condition Assessments",
      "Building Envelope Quality Assurance",
    ],
    trustLine: "Independent professional engineering advice",
    href: "/engineering-services",
    cta: "Explore Consulting Services",
    primary: false,
  },
];

export default function ServicePillars() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
            How We Can Help
          </p>

          <h2
            id="services-heading"
            className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-5xl"
          >
            Home inspections backed by building expertise.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {siteConfig.company.shortName} helps homeowners and property
            professionals make informed decisions through professional home
            inspections and specialized building envelope consulting across
            Ottawa and the National Capital Region.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <Reveal
                key={pillar.eyebrow}
                delay={index * 0.12}
                className="h-full"
              >
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)] sm:p-8 ${
                    pillar.primary
                      ? "border-[#D4A63A]/60 bg-[#F8FAFC] hover:border-[#D4A63A] hover:bg-white"
                      : "border-slate-200 bg-[#F8FAFC] hover:border-[#D4A63A]/60 hover:bg-white"
                  }`}
                >
                  {pillar.primary && (
                    <div className="absolute right-6 top-6 rounded-full bg-[#D4A63A]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A641B]">
                      Primary Service
                    </div>
                  )}

                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#D4A63A] transition-transform duration-300 group-hover:scale-x-100" />

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102A43] text-[#D4A63A]">
                    <Icon aria-hidden="true" className="h-7 w-7" />
                  </div>

                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#B88A2A]">
                    {pillar.eyebrow}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold leading-snug tracking-[-0.015em] text-[#102A43]">
                    {pillar.title}
                  </h3>

                  <p className="mt-5 leading-7 text-slate-600">
                    {pillar.description}
                  </p>

                  <ul className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
                    {pillar.services.map((service) => (
                      <li
                        key={service}
                        className="py-3 text-sm font-medium text-[#102A43]"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    {pillar.trustLine}
                  </p>

                  <Link
                    href={pillar.href}
                    aria-label={`${pillar.cta}: ${pillar.eyebrow}`}
                    className="mt-auto inline-flex items-center gap-2 pt-7 font-semibold text-[#102A43] transition-colors hover:text-[#B88A2A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A63A] focus-visible:ring-offset-4"
                  >
                    {pillar.cta}

                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}