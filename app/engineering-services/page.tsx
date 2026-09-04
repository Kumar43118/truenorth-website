import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/shared/PageHero";
import ServiceFeature from "@/components/shared/ServiceFeature";

import { siteConfig } from "@/lib/site";

const PAGE_PATH = "/engineering-services";

export const metadata: Metadata = {
  title: "Building Envelope Consulting Services in Ottawa",

  description:
    "Building envelope consulting, building condition assessments, and building envelope quality assurance for residential, commercial, institutional, and multi-residential buildings in Ottawa.",

  alternates: {
    canonical: PAGE_PATH,
  },

  openGraph: {
    title:
      "Building Envelope Consulting Services in Ottawa | Velora Engineering and Consulting",

    description:
      "Independent building envelope consulting, condition assessments, and quality assurance services for new and existing buildings in Ottawa.",

    url: PAGE_PATH,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Building Envelope Consulting Services in Ottawa | Velora Engineering and Consulting",

    description:
      "Independent building envelope consulting, condition assessments, and quality assurance services for new and existing buildings in Ottawa.",
  },
};

const services = [
  {
    eyebrow: "Building Envelope Consulting",
    title: "Building envelope guidance for new and existing buildings.",
    description:
      "We help owners, condominium corporations, property managers, architects, contractors, and project teams investigate and address concerns involving exterior walls, roofs, windows, cladding, flashing, waterproofing, and moisture management.",
    bullets: [
      "Water intrusion and moisture-related investigations",
      "Exterior wall, cladding, roofing, and window reviews",
      "Repair and rehabilitation consulting",
      "Building envelope design and detail reviews",
    ],
    image: "/images/engineering/building-envelope.jpg",
    imageAlt:
      "Building envelope rehabilitation work on a multi-residential building",
    link: "/engineering-services/building-envelope-consulting",
    imageLeft: true,
  },
  {
    eyebrow: "Building Condition Assessments",
    title: "Clear evaluations of existing building envelope conditions.",
    description:
      "We review visible and accessible building envelope conditions, document deterioration and performance concerns, and help clients understand maintenance priorities, repair needs, and longer-term rehabilitation considerations.",
    bullets: [
      "Review of visible building envelope systems and components",
      "Documentation of deterioration and performance concerns",
      "Photographic reporting and key findings summaries",
      "Prioritized maintenance and rehabilitation recommendations",
    ],
    image: "/images/engineering/building-condition-assessment.jpg",
    imageAlt:
      "Existing multi-residential building undergoing a building envelope condition assessment",
    link: "/engineering-services/building-condition-assessment",
    imageLeft: false,
  },
  {
    eyebrow: "Building Envelope Quality Assurance",
    title:
      "Independent building envelope quality assurance from design through construction.",
    description:
      "We provide independent design review, construction observations, deficiency documentation, and quality assurance support to help project teams identify enclosure concerns before they lead to costly performance problems.",
    bullets: [
      "Building envelope design and detail reviews",
      "Construction-phase observations",
      "Installation and interface reviews",
      "Deficiency documentation and technical reporting",
    ],
    image:
      "/images/engineering/building-envelope-quality-assurance.jpg",
    imageAlt:
      "Building envelope quality assurance review during construction",
    link:
      "/engineering-services/building-envelope-quality-assurance",
    imageLeft: true,
  },
];

export default function EngineeringServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          eyebrow="Engineering Consulting"
          title="Building envelope expertise for better-performing buildings."
          description={`${siteConfig.company.operatingName} provides independent building envelope consulting, condition assessments, and quality assurance services for new construction, rehabilitation projects, and existing buildings.`}
          image="/images/engineering/consulting-hero.jpg"
          imageAlt="Exterior rehabilitation work on a multi-storey building"
          primaryCta={{
            label: "Request a Consultation",
            href: "/contact",
          }}
          secondaryCta={{
            label: "Explore Consulting Services",
            href: "#consulting-services",
          }}
        />

        <section
          id="consulting-services"
          aria-label="Building envelope consulting services"
        >
          {services.map((service) => (
            <ServiceFeature
              key={service.eyebrow}
              {...service}
            />
          ))}
        </section>

        <section
          aria-labelledby="consulting-cta-heading"
          className="bg-[#102A43] px-6 py-20 text-white sm:px-8 sm:py-24 lg:px-12"
        >
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4A63A] sm:text-sm">
              Start a Conversation
            </p>

            <h2
              id="consulting-cta-heading"
              className="mt-5 text-4xl font-semibold tracking-[-0.025em] sm:text-5xl"
            >
              Need clarity about your building envelope or project?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Tell us what you are evaluating, planning,
              investigating, or repairing. We&apos;ll review your
              inquiry and help determine an appropriate consulting,
              condition assessment, or quality assurance scope.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-[#D4A63A] px-8 font-semibold text-[#102A43] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0B552] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43]"
            >
              Request a Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}