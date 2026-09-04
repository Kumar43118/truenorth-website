import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  FileText,
  ShieldCheck,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import { siteConfig } from "@/lib/site";

const features = [
  {
    icon: BadgeCheck,
    title: "P.Eng.-Led Service",
    description:
      "Services are led by a licensed Professional Engineer, bringing professional judgment, technical experience, and accountability to every assessment.",
  },
  {
    icon: ShieldCheck,
    title: "Independent Perspective",
    description:
      "Findings and recommendations are based on observed conditions and practical priorities—not product affiliations, sales incentives, or predetermined solutions.",
  },
  {
    icon: Building2,
    title: "Building Science Experience",
    description:
      "Experience with roofing, exterior walls, windows, moisture management, waterproofing, and other systems that affect the performance and durability of a home or building.",
  },
  {
    icon: FileText,
    title: "Clear, Practical Reporting",
    description:
      "Technical observations are translated into understandable findings, priorities, photographs, and practical next steps so you know what deserves attention.",
  },
];

export default function WhyVelora() {
  return (
    <section
      aria-labelledby="why-velora-heading"
      className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal y={24} amount={0.2}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                Why Velora
              </p>

              <h2
                id="why-velora-heading"
                className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-5xl"
              >
                More than a checklist. A building-informed perspective.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                {siteConfig.company.shortName} combines engineering,
                construction, and building science experience to help
                homeowners and property professionals better understand the
                buildings they are buying, owning, maintaining, or improving.
              </p>

              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-2 font-semibold text-[#102A43] transition-colors hover:text-[#B88A2A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A63A] focus-visible:ring-offset-4"
              >
                Learn More About Velora

                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <Reveal
                  key={feature.title}
                  delay={index * 0.08}
                  y={20}
                  amount={0.15}
                  className="h-full"
                >
                  <article className="group h-full bg-white p-7 transition duration-300 hover:bg-[#F8FAFC] sm:p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102A43] text-[#D4A63A] transition-transform duration-300 group-hover:-translate-y-0.5">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-[#102A43]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.1} y={28} amount={0.2}>
          <div className="mt-16 overflow-hidden rounded-3xl bg-[#102A43] px-7 py-12 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D4A63A]">
                Planning a Home Inspection?
              </p>

              <h3 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-white">
                Get a clearer understanding of the home before your next
                decision.
              </h3>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Whether you&apos;re buying, selling, taking possession of a new
                home, or planning future maintenance, Velora can help you
                understand the property&apos;s visible condition and key
                priorities.
              </p>
            </div>

            <Link
              href="/book-inspection"
              className="group mt-8 inline-flex min-h-14 shrink-0 items-center justify-center rounded-full bg-[#D4A63A] px-8 font-semibold text-[#102A43] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0B552] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43] lg:mt-0"
            >
              Book a Home Inspection

              <ArrowUpRight
                aria-hidden="true"
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}