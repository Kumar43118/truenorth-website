import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Gauge,
  ScanSearch,
  Waves,
  Wind,
} from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Container from "@/components/shared/Container";

import { siteConfig } from "@/lib/site";

const PAGE_PATH = "/testing-services";

export const metadata: Metadata = {
  title: "Building Performance Testing Coming Soon",

  description:
    "Velora is developing building performance testing capabilities for windows, curtain walls, window walls, and related building envelope systems in Ottawa.",

  alternates: {
    canonical: PAGE_PATH,
  },

  robots: {
    index: false,
    follow: true,
  },

  openGraph: {
    title:
      "Building Performance Testing Coming Soon | Velora Engineering and Consulting",

    description:
      "Velora is developing building performance testing capabilities for air leakage, water penetration, curtain walls, window walls, and related building envelope systems.",

    url: PAGE_PATH,
    type: "website",
  },
};

const plannedServices = [
  {
    icon: Wind,
    title: "Air Leakage Testing",
    description:
      "Planned field testing to evaluate air leakage performance across windows, doors, and related building envelope assemblies.",
  },
  {
    icon: Waves,
    title: "Water Penetration Testing",
    description:
      "Planned field testing to assess resistance to water penetration under controlled pressure and spray conditions.",
  },
  {
    icon: ScanSearch,
    title: "Curtain Wall Testing",
    description:
      "Planned performance testing and field evaluation for commercial curtain wall systems and interfaces.",
  },
  {
    icon: Gauge,
    title: "Window Wall Testing",
    description:
      "Planned air and water performance testing for window wall systems and related façade components.",
  },
];

export default function TestingServicesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-[88px]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#102A43] py-20 text-white sm:py-24 lg:py-28">
          <div className="absolute inset-0 bg-linear-to-br from-white/[0.04] via-transparent to-[#D4A63A]/10" />

          <Container>
            <div className="relative max-w-4xl">
              <span className="inline-flex rounded-full border border-[#D4A63A]/35 bg-[#D4A63A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A63A]">
                Coming Soon
              </span>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-[#D4A63A] sm:text-sm">
                Building Performance Testing
              </p>

              <h1 className="mt-5 text-5xl font-semibold leading-[1.03] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
                Specialized field testing capabilities are in development.
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
                {siteConfig.company.operatingName} is developing field testing
                capabilities focused on evaluating the air and water
                performance of windows, curtain walls, window walls, and
                related building envelope systems.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex min-h-14 items-center justify-center rounded-full bg-[#D4A63A] px-8 font-semibold text-[#102A43] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0B552] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43]"
                >
                  Discuss a Future Testing Requirement

                  <ArrowUpRight
                    aria-hidden="true"
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  href="/engineering-services"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/35 px-8 font-semibold text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#102A43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43]"
                >
                  Explore Consulting Services
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Planned capabilities */}
        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                  Planned Capabilities
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-5xl">
                  Focused testing for building envelope performance.
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                  The testing practice is being developed to support
                  construction quality reviews, performance investigations,
                  and field verification for new and existing buildings.
                </p>
              </div>

              <div className="grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
                {plannedServices.map((service) => {
                  const Icon = service.icon;

                  return (
                    <article
                      key={service.title}
                      className="bg-[#F8FAFC] p-7 sm:p-8"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102A43] text-[#D4A63A]">
                        <Icon
                          aria-hidden="true"
                          className="h-6 w-6"
                        />
                      </div>

                      <h3 className="mt-6 text-xl font-semibold text-[#102A43]">
                        {service.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        {service.description}
                      </p>

                      <span className="mt-5 inline-flex rounded-full bg-slate-200/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                        In Development
                      </span>
                    </article>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* Future planning */}
        <section className="bg-[#F8FAFC] py-20 sm:py-24">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                Future Project Planning
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-5xl">
                Have an upcoming testing requirement?
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Share your project timeline and anticipated testing needs.
                Velora can review the inquiry and advise whether the developing
                testing practice may align with your future schedule.
              </p>

              <Link
                href="/contact"
                className="group mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-[#102A43] px-8 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#183A59] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A63A] focus-visible:ring-offset-4"
              >
                Contact Velora

                <ArrowUpRight
                  aria-hidden="true"
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}