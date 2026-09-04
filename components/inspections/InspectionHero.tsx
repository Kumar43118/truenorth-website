import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ShieldCheck,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";

const trustItems = [
  {
    icon: BadgeCheck,
    value: "P.Eng.",
    label: "Licensed in Ontario",
  },
  {
    icon: Building2,
    value: "Building Science",
    label: "Engineering-informed review",
  },
  {
    icon: ShieldCheck,
    value: "Independent",
    label: "Objective technical advice",
  },
];

export default function InspectionHero() {
  return (
    <section
      aria-labelledby="inspection-hero-heading"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(#102A43_1px,transparent_1px),linear-gradient(90deg,#102A43_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4A63A]/8 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal y={24} amount={0.2}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                Professional Home Inspections
              </p>

              <h1
                id="inspection-hero-heading"
                className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#102A43] sm:text-5xl xl:text-6xl"
              >
                Clear, professional inspections informed by engineering
                experience.
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
                Whether you&apos;re buying, selling, or planning for long-term
                ownership, Velora provides independent inspections that help you
                understand the home, identify concerns, and make informed
                decisions.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
href="/book-inspection"
                  className="group inline-flex min-h-14 items-center justify-center rounded-full bg-[#D4A63A] px-8 text-base font-semibold text-[#102A43] shadow-lg shadow-black/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0B552] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#102A43] focus-visible:ring-offset-4"
                >
                  Book an Inspection

                  <ArrowRight
                    aria-hidden="true"
                    className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="#inspection-services"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#102A43]/25 bg-white px-8 text-base font-semibold text-[#102A43] transition duration-300 hover:border-[#102A43] hover:bg-[#102A43] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A63A] focus-visible:ring-offset-4"
                >
                  Explore Inspection Services
                </Link>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {trustItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal
                    key={item.label}
                    delay={index * 0.08}
                    y={18}
                    amount={0.12}
                    className="h-full"
                  >
                    <article className="group h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#D4A63A]/40 hover:shadow-lg">
                      <Icon
                        aria-hidden="true"
                        className="h-6 w-6 text-[#B88A2A]"
                      />

                      <p className="mt-4 text-lg font-semibold text-[#102A43]">
                        {item.value}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.label}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal y={30} amount={0.18}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-[#B88A2A]/10 blur-2xl" />

              <div className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white p-3 shadow-[0_30px_80px_rgba(16,42,67,0.18)]">
                <div className="relative h-[440px] overflow-hidden rounded-[1.5rem] sm:h-[520px]">
                  <Image
                    src="/images/inspection-hero.jpg"
                    alt="Professional inspection of a residential property"
                    fill
                    priority
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}