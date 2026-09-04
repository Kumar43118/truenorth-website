import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  Home,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Schema from "@/components/seo/Schema";
import Container from "@/components/shared/Container";

import { homeInspectionSchema } from "@/lib/schema";

const PAGE_PATH = "/home-inspections";

export const metadata: Metadata = {
  title: "Home Inspections in Ottawa",

  description:
    "P.Eng.-led home inspections in Ottawa for buyers, sellers, new homeowners, and property owners, backed by building science and construction experience.",

  alternates: {
    canonical: PAGE_PATH,
  },

  openGraph: {
    title:
      "Home Inspections in Ottawa | Velora Engineering and Consulting",

    description:
      "P.Eng.-led home inspections for buyers, sellers, new homeowners, and property owners across Ottawa and the National Capital Region.",

    url: PAGE_PATH,
    type: "website",

    images: [
      {
        url: "/images/services/home-inspections.jpg",
        width: 1200,
        height: 630,
        alt: "Professional home inspection in Ottawa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Home Inspections in Ottawa | Velora Engineering and Consulting",

    description:
      "P.Eng.-led home inspections for buyers, sellers, new homeowners, and property owners across Ottawa and the National Capital Region.",

    images: ["/images/services/home-inspections.jpg"],
  },
};

const services = [
  {
    icon: SearchCheck,
    title: "Buyer Inspection",
    description:
      "A systematic visual review of accessible building systems to help buyers understand visible conditions, potential concerns, maintenance priorities, and possible repair needs.",
    href: "/home-inspections/buyer-inspection",
  },
  {
    icon: Home,
    title: "Pre-Listing Inspection",
    description:
      "An inspection for homeowners preparing to sell, helping identify visible concerns and maintenance items before the property is listed.",
    href: "/home-inspections/pre-listing-inspection",
  },
  {
    icon: ClipboardCheck,
    title: "New Construction / Tarion",
    description:
      "Independent inspection support for new homes, focused on visible deficiencies, workmanship concerns, and observations that may be relevant to warranty documentation.",
    href: "/home-inspections/new-construction-tarion",
  },
  {
    icon: ShieldCheck,
    title: "Annual Home Maintenance",
    description:
      "A periodic inspection focused on visible conditions, maintenance priorities, emerging concerns, and practical planning for the ongoing care of the home.",
    href: "/home-inspections/annual-home-maintenance",
  },
];

export default function HomeInspectionsPage() {
  return (
    <>
      <Schema
        id="home-inspection-schema"
        data={homeInspectionSchema}
      />

      <Navbar />

      <main className="pt-[88px]">
        {/* Hero */}
        <section className="bg-[#102A43] py-20 text-white sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4A63A] sm:text-sm">
                P.Eng.-Led Home Inspections · Ottawa & NCR
              </p>

              <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
                Clear insight before important property decisions.
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-300">
                Velora provides professional home inspections for buyers,
                sellers, new homeowners, and property owners, combining a
                systematic visual inspection with engineering, construction,
                and building science experience.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/book-inspection"
                  className="group inline-flex min-h-14 items-center justify-center rounded-full bg-[#D4A63A] px-8 font-semibold text-[#102A43] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0B552] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43]"
                >
                  Request a Home Inspection

                  <ArrowRight
                    aria-hidden="true"
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/35 px-8 font-semibold text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#102A43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43]"
                >
                  Ask a Question
                </Link>
              </div>

              <div className="mt-12 flex max-w-3xl items-start gap-4 border-t border-white/10 pt-7">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#D4A63A]">
                  <BadgeCheck
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                </div>

                <p className="text-sm leading-6 text-slate-300">
                  Inspections are visual and non-invasive and are limited to
                  readily accessible systems and components at the time of the
                  inspection. Specialized investigations or engineering
                  analysis may be recommended when conditions warrant further
                  review.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Services */}
        <section
          id="inspection-services"
          className="bg-white py-20 sm:py-24 lg:py-28"
        >
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                Inspection Services
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-5xl">
                Inspection options for different stages of home ownership.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Choose the service that best matches your property decision,
                timing, and inspection needs.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group rounded-3xl border border-slate-200 bg-[#F8FAFC] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D4A63A]/50 hover:bg-white hover:shadow-[0_18px_45px_-28px_rgba(15,23,42,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A63A] focus-visible:ring-offset-4 sm:p-8"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102A43] text-[#D4A63A]">
                      <Icon
                        aria-hidden="true"
                        className="h-6 w-6"
                      />
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold text-[#102A43]">
                      {service.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {service.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[#102A43]">
                      Learn More

                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}