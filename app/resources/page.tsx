import type { Metadata } from "next";

import {
  BookOpen,
  Building2,
  Home,
  ShieldCheck,
} from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

import { siteConfig } from "@/lib/site";

const PAGE_PATH = "/resources";

export const metadata: Metadata = {
  title: "Resources",

  description:
    "Explore practical guides from Velora Engineering and Consulting covering home inspections, building science, building envelope performance, maintenance, and property decision-making.",

  alternates: {
    canonical: PAGE_PATH,
  },

  openGraph: {
    title: "Resources | Velora Engineering and Consulting",

    description:
      "Practical guidance on home inspections, building science, building envelope performance, maintenance, and informed property decisions.",

    url: PAGE_PATH,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Resources | Velora Engineering and Consulting",

    description:
      "Practical guidance on home inspections, building science, building envelope performance, maintenance, and informed property decisions.",
  },
};

const resources = [
  {
    icon: Home,
    title: "Understanding the Home Inspection Process",
    description:
      "Learn what a visual, non-invasive home inspection typically covers, its limitations, and how to use the findings when making property decisions.",
  },
  {
    icon: ShieldCheck,
    title: "What Buyers Should Know Before Closing",
    description:
      "Understand important building systems, visible conditions, potential concerns, and questions to consider before completing a home purchase.",
  },
  {
    icon: BookOpen,
    title: "Understanding Building Envelope Issues",
    description:
      "An introduction to moisture management, cladding, windows, roofing, air leakage, drainage, and other factors that influence building performance.",
  },
  {
    icon: Building2,
    title: "Building Condition and Maintenance Planning",
    description:
      "Learn how observed building conditions, maintenance priorities, and further investigation can support better long-term property decisions.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-[88px]">
        {/* Hero */}
        <section className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-5xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                Resources
              </p>

              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#102A43] sm:text-6xl lg:text-7xl">
                Practical guidance for better building and property decisions.
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
                {siteConfig.company.operatingName} is developing educational
                resources to help homeowners, property owners, and project
                teams better understand home inspections, building science,
                building envelope performance, and maintenance priorities.
              </p>
            </div>
          </Container>
        </section>

        {/* Resource Topics */}
        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <Container>
            <SectionHeader
              eyebrow="Resource Topics"
              title="Start with the fundamentals."
              description="These topics will be expanded with practical guides, technical explanations, and homeowner-focused resources as the Velora library grows."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {resources.map((resource) => {
                const Icon = resource.icon;

                return (
                  <article
                    key={resource.title}
                    className="rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102A43] text-[#D4A63A]">
                      <Icon
                        aria-hidden="true"
                        className="h-7 w-7"
                      />
                    </div>

                    <h2 className="mt-7 text-2xl font-semibold text-[#102A43]">
                      {resource.title}
                    </h2>

                    <p className="mt-4 leading-8 text-slate-600">
                      {resource.description}
                    </p>

                    <span className="mt-7 inline-flex rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                      Coming Soon
                    </span>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

      
        {/* Resource Philosophy */}
        <section className="bg-[#102A43] py-20 text-white sm:py-24">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4A63A] sm:text-sm">
                Practical Information
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">
                Technical topics explained clearly.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Our goal is to make building information easier to understand
                without oversimplifying the conditions, limitations, or risks
                that may affect a property.
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}