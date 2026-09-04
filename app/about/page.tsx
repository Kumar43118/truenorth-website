import type { Metadata } from "next";

import {
  Award,
  Compass,
  Microscope,
  ShieldCheck,
} from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

import { siteConfig } from "@/lib/site";

const PAGE_PATH = "/about";

export const metadata: Metadata = {
  title: "About",

  description:
    "Learn about Velora Engineering and Consulting, an Ottawa-based firm providing P.Eng.-led home inspections and specialized building envelope consulting services.",

  alternates: {
    canonical: PAGE_PATH,
  },

  openGraph: {
    title: "About | Velora Engineering and Consulting",

    description:
      "Learn about Velora Engineering and Consulting and our approach to P.Eng.-led home inspections, building science, and building envelope consulting.",

    url: PAGE_PATH,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "About | Velora Engineering and Consulting",

    description:
      "Learn about Velora Engineering and Consulting and our approach to home inspections, building science, and building envelope consulting.",
  },
};

const values = [
  {
    icon: Award,
    title: "Professional Accountability",
    description:
      "Velora is led by a licensed Professional Engineer and approaches each assignment with technical care, professional judgment, and clear accountability.",
  },
  {
    icon: Microscope,
    title: "Building Science Perspective",
    description:
      "Our observations and recommendations are informed by field conditions, building science principles, and recognized industry practices.",
  },
  {
    icon: ShieldCheck,
    title: "Independent Advice",
    description:
      "We do not perform repair work or receive referral commissions for recommended repairs. Our role is to provide objective guidance.",
  },
  {
    icon: Compass,
    title: "Clear Direction",
    description:
      "We translate technical observations into practical priorities so homeowners, property stakeholders, and project teams can make informed decisions.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-[88px]">
        {/* Hero */}
        <section className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-5xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                About Velora
              </p>

              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#102A43] sm:text-6xl lg:text-7xl">
                Practical building insight backed by engineering experience.
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
                {siteConfig.company.operatingName} provides P.Eng.-led home
                inspections and specialized building envelope consulting with
                a focus on clear observations, practical recommendations, and
                informed decision-making.
              </p>
            </div>
          </Container>
        </section>

        {/* Philosophy */}
        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionHeader
              eyebrow="Our Philosophy"
              title="More than identifying conditions — we explain why they matter."
              description="Whether reviewing a home or assessing a building envelope concern, our goal is to help clients understand observed conditions, recognize potential risks, and determine appropriate next steps."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <article
                    key={value.title}
                    className="rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102A43] text-[#D4A63A]">
                      <Icon
                        aria-hidden="true"
                        className="h-7 w-7"
                      />
                    </div>

                    <h2 className="mt-7 text-2xl font-semibold text-[#102A43]">
                      {value.title}
                    </h2>

                    <p className="mt-4 leading-8 text-slate-600">
                      {value.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Approach */}
        <section className="bg-[#102A43] py-20 text-white sm:py-24 lg:py-28">
          <Container>
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4A63A] sm:text-sm">
                Our Approach
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.025em] sm:text-5xl lg:text-6xl">
                Engineering expertise. Practical solutions. Trusted advice.
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
                Velora combines technical knowledge with practical field
                experience to provide clear, objective, and useful guidance
                for homeowners and building-industry clients.
              </p>
            </div>
          </Container>
        </section>

        {/* What We Do */}
        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-8 lg:grid-cols-2">
              <article className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B88A2A]">
                  Home Inspections
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-[#102A43]">
                  Clear observations for confident property decisions.
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Velora provides visual, non-invasive home inspections for
                  buyers, sellers, new-construction homeowners, and property
                  owners seeking a better understanding of visible building
                  conditions.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B88A2A]">
                  Engineering Consulting
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-[#102A43]">
                  Building envelope expertise for new and existing buildings.
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Consulting services include building envelope consulting,
                  building condition assessments, and building envelope quality
                  assurance for property owners, consultants, developers, and
                  project teams.
                </p>
              </article>
            </div>
          </Container>
        </section>

        {/* Service Area */}
        <section className="bg-[#F8FAFC] py-20 sm:py-24">
          <Container>
            <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-10 text-center sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                Ottawa & National Capital Region
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-5xl">
                Local knowledge. Professional perspective.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Velora serves homeowners and building-industry clients across
                Ottawa and the National Capital Region, with consulting
                assignments considered throughout Eastern Ontario based on
                project scope.
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}