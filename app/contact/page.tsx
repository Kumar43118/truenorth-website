import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  House,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Container from "@/components/shared/Container";
import { siteConfig } from "@/lib/site";

const PAGE_PATH = "/contact";

export const metadata: Metadata = {
  title: "Contact Velora | Home Inspections & Engineering Consulting",
  description:
    "Contact Velora Engineering and Consulting for P.Eng.-led home inspections, building envelope consulting, building condition assessments, and quality assurance services in Ottawa and the National Capital Region.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "Contact Velora | Ottawa",
    description:
      "Contact Velora for professional home inspections and specialized building envelope consulting across Ottawa and the National Capital Region.",
    url: PAGE_PATH,
    type: "website",
  },
};

export default function ContactPage() {
  const phone = siteConfig.contact.phone?.trim();

  return (
    <>
      <Navbar />

      <main className="pt-[88px]">
        {/* Hero */}
        <section className="bg-[#102A43] py-16 text-white sm:py-20 lg:py-24">
          <Container>
            <div className="max-w-5xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4A63A] sm:text-sm">
                Contact Velora
              </p>

              <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4.5rem]">
                Tell us how we can help.
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
                Whether you need a home inspection, have a building-envelope
                concern, or are planning a project, share the details with us
                and we&apos;ll help identify an appropriate next step.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/book-inspection"
                  className="group inline-flex min-h-14 items-center justify-center rounded-full bg-[#D4A63A] px-8 font-semibold text-[#102A43] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0B552] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43]"
                >
                  Request a Home Inspection

                  <ArrowUpRight
                    aria-hidden="true"
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  href="/engineering-services"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/35 px-8 font-semibold text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#102A43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43]"
                >
                  Engineering Consulting
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Contact details */}
        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                  Get in Touch
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-5xl">
                  Start with a clear description of what you need.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  For general questions or engineering inquiries, include the
                  property type, location, observed concern, project stage, and
                  any relevant timelines or background information.
                </p>

                <div className="mt-10 space-y-6 border-y border-slate-200 py-8">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="group flex items-start gap-4 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A63A] focus-visible:ring-offset-4"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#102A43] text-[#D4A63A]">
                      <Mail aria-hidden="true" className="h-5 w-5" />
                    </span>

                    <span>
                      <span className="block text-sm font-medium text-slate-500">
                        Email
                      </span>

                      <span className="mt-1 block text-lg font-semibold text-[#102A43] transition-colors group-hover:text-[#B88A2A]">
                        {siteConfig.contact.email}
                      </span>
                    </span>
                  </a>

                  {phone && (
                    <a
                      href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                      className="group flex items-start gap-4 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A63A] focus-visible:ring-offset-4"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#102A43] text-[#D4A63A]">
                        <Phone aria-hidden="true" className="h-5 w-5" />
                      </span>

                      <span>
                        <span className="block text-sm font-medium text-slate-500">
                          Phone
                        </span>

                        <span className="mt-1 block text-lg font-semibold text-[#102A43] transition-colors group-hover:text-[#B88A2A]">
                          {phone}
                        </span>
                      </span>
                    </a>
                  )}

                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#102A43] text-[#D4A63A]">
                      <MapPin aria-hidden="true" className="h-5 w-5" />
                    </span>

                    <span>
                      <span className="block text-sm font-medium text-slate-500">
                        Service Area
                      </span>

                      <span className="mt-1 block text-lg font-semibold text-[#102A43]">
                        Ottawa and the National Capital Region
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Inquiry guidance */}
              <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-7 sm:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102A43] text-[#D4A63A]">
                  <Building2 aria-hidden="true" className="h-6 w-6" />
                </div>

                <h2 className="mt-6 text-3xl font-semibold tracking-[-0.02em] text-[#102A43]">
                  What to include in your inquiry
                </h2>

                <ul className="mt-7 space-y-4 text-slate-600">
                  {[
                    "Property type and location",
                    "The concern, project, or decision you are evaluating",
                    "Relevant photographs, reports, drawings, or background information",
                    "Preferred timeline or important project dates",
                    "The type of assistance or deliverable you may require",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-b border-slate-200 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4A63A]" />

                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
                    "General Inquiry – Velora Engineering and Consulting"
                  )}`}
                  className="group mt-9 inline-flex min-h-14 items-center justify-center rounded-full bg-[#D4A63A] px-8 font-semibold text-[#102A43] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0B552] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A63A] focus-visible:ring-offset-4"
                >
                  Email Velora

                  <ArrowUpRight
                    aria-hidden="true"
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* Service pathways */}
        <section className="bg-[#F8FAFC] py-20 sm:py-24">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                Explore Velora
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-5xl">
                Not sure where to begin?
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Start with the service that best matches your property or
                project. If you&apos;re unsure, contact Velora and we&apos;ll
                help identify an appropriate next step.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <Link
                  href="/home-inspections"
                  className="group rounded-3xl border border-[#D4A63A]/40 bg-white p-7 text-left transition duration-300 hover:-translate-y-1 hover:border-[#D4A63A] hover:shadow-[0_18px_45px_-28px_rgba(15,23,42,0.35)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102A43] text-[#D4A63A]">
                    <House aria-hidden="true" className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-[#102A43]">
                    Home Inspections
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Buyer, pre-listing, new construction / Tarion, and annual
                    maintenance inspections.
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[#102A43]">
                    Explore Home Inspections

                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>

                <Link
                  href="/engineering-services"
                  className="group rounded-3xl border border-slate-200 bg-white p-7 text-left transition duration-300 hover:-translate-y-1 hover:border-[#D4A63A]/50 hover:shadow-[0_18px_45px_-28px_rgba(15,23,42,0.35)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102A43] text-[#D4A63A]">
                    <Building2 aria-hidden="true" className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-[#102A43]">
                    Engineering Consulting
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Building envelope consulting, condition assessments, and
                    building envelope quality assurance.
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[#102A43]">
                    Explore Consulting

                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}