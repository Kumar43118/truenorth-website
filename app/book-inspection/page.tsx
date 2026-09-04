import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { sendInspectionRequest } from "@/app/actions/sendInspectionRequest";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const PAGE_PATH = "/book-inspection";

export const metadata: Metadata = {
  title: "Request a Home Inspection in Ottawa",

  description:
    "Request a P.Eng.-led home inspection in Ottawa for a home purchase, pre-listing review, new construction or Tarion milestone, or annual maintenance planning.",

  alternates: {
    canonical: PAGE_PATH,
  },

  openGraph: {
    title:
      "Request a Home Inspection in Ottawa | Velora Engineering and Consulting",

    description:
      "Request a professional home inspection in Ottawa and the National Capital Region. Submit your property details and preferred inspection timing.",

    url: PAGE_PATH,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Request a Home Inspection in Ottawa | Velora Engineering and Consulting",

    description:
      "Request a professional home inspection in Ottawa and the National Capital Region. Submit your property details and preferred inspection timing.",
  },
};

const inspectionServices = [
  "Buyer Home Inspection",
  "Pre-Listing Inspection",
  "New Construction / Tarion Inspection",
  "Annual Home Maintenance Inspection",
];

const fieldClassName =
  "min-h-14 w-full rounded-xl border border-slate-300 bg-white px-4 text-[#102A43] outline-none transition placeholder:text-slate-400 focus:border-[#D4A63A] focus:ring-4 focus:ring-[#D4A63A]/10";

export default function BookInspectionPage() {
  const phone = siteConfig.contact.phone?.trim();

  return (
    <>
      <Navbar />

      <main className="pt-[88px]">
        {/* Hero */}
        <section className="bg-[#102A43] py-16 text-white sm:py-20 lg:py-24">
          <Container>
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4A63A] sm:text-sm">
                Home Inspection Request
              </p>

              <h1 className="mt-5 text-5xl font-semibold leading-[1.03] tracking-[-0.035em] sm:text-6xl lg:text-[4.5rem]">
                Request your home inspection.
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
                Tell us about the property, inspection service, and preferred
                timing. We&apos;ll review your request and contact you to
                confirm the scope, availability, fees, and next steps.
              </p>
            </div>
          </Container>
        </section>

        {/* Request form */}
        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.75fr] lg:gap-14">
              <form
                action={sendInspectionRequest}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_24px_60px_-35px_rgba(15,23,42,0.3)] sm:p-8 lg:p-10"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B88A2A]">
                    Inspection Request
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[#102A43]">
                    Property and contact details
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    Fields marked with an asterisk are required. Submitting
                    this form does not confirm an appointment.
                  </p>
                </div>

                {/* Contact information */}
                <div className="mt-9 grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="inspection-name"
                      className="mb-2 block text-sm font-semibold text-[#102A43]"
                    >
                      Full name *
                    </label>

                    <input
                      id="inspection-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className={fieldClassName}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="inspection-email"
                      className="mb-2 block text-sm font-semibold text-[#102A43]"
                    >
                      Email address *
                    </label>

                    <input
                      id="inspection-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className={fieldClassName}
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="inspection-phone"
                      className="mb-2 block text-sm font-semibold text-[#102A43]"
                    >
                      Phone number *
                    </label>

                    <input
                      id="inspection-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      className={fieldClassName}
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="property-address"
                      className="mb-2 block text-sm font-semibold text-[#102A43]"
                    >
                      Property address *
                    </label>

                    <input
                      id="property-address"
                      name="property_address"
                      type="text"
                      autoComplete="street-address"
                      required
                      className={fieldClassName}
                      placeholder="Property address"
                    />
                  </div>
                </div>

                {/* Inspection type */}
                <div className="mt-6">
                  <label
                    htmlFor="inspection-type"
                    className="mb-2 block text-sm font-semibold text-[#102A43]"
                  >
                    Inspection type *
                  </label>

                  <select
                    id="inspection-type"
                    name="inspection_type"
                    required
                    defaultValue=""
                    className={`${fieldClassName} text-slate-600`}
                  >
                    <option value="" disabled>
                      Select an inspection type
                    </option>

                    {inspectionServices.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred scheduling */}
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="preferred-date"
                      className="mb-2 block text-sm font-semibold text-[#102A43]"
                    >
                      Preferred date
                    </label>

                    <input
                      id="preferred-date"
                      name="preferred_date"
                      type="date"
                      className={`${fieldClassName} text-slate-600`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="preferred-time"
                      className="mb-2 block text-sm font-semibold text-[#102A43]"
                    >
                      Preferred time
                    </label>

                    <input
                      id="preferred-time"
                      name="preferred_time"
                      type="text"
                      className={fieldClassName}
                      placeholder="Morning, afternoon, or specific time"
                    />
                  </div>
                </div>

                {/* Additional information */}
                <div className="mt-6">
                  <label
                    htmlFor="inspection-message"
                    className="mb-2 block text-sm font-semibold text-[#102A43]"
                  >
                    Additional information
                  </label>

                  <textarea
                    id="inspection-message"
                    name="message"
                    className="min-h-40 w-full rounded-xl border border-slate-300 bg-white p-4 text-[#102A43] outline-none transition placeholder:text-slate-400 focus:border-[#D4A63A] focus:ring-4 focus:ring-[#D4A63A]/10"
                    placeholder="Tell us about the property, purchase timeline, access arrangements, relevant deadlines, or any concerns you would like us to know about."
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="group mt-8 min-h-14 rounded-full bg-[#D4A63A] px-8 text-base font-semibold text-[#102A43] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0B552] hover:shadow-xl"
                >
                  Submit Inspection Request

                  <ArrowRight
                    aria-hidden="true"
                    className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Button>

                <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-500">
                  By submitting this form, you are providing information for
                  Velora to review and respond to your inspection request. See
                  our{" "}
                  <Link
                    href="/privacy"
                    className="font-medium text-[#102A43] underline decoration-slate-300 underline-offset-4 transition-colors hover:text-[#B88A2A]"
                  >
                    Privacy Policy
                  </Link>{" "}
                  for information about how submitted information is handled.
                </p>
              </form>

              {/* What happens next */}
              <aside className="h-fit rounded-3xl bg-[#102A43] p-7 text-white sm:p-8 lg:sticky lg:top-32">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#D4A63A]">
                  <CalendarCheck
                    aria-hidden="true"
                    className="h-6 w-6"
                  />
                </div>

                <h2 className="mt-6 text-3xl font-semibold tracking-[-0.02em]">
                  What happens next?
                </h2>

                <p className="mt-4 leading-8 text-slate-300">
                  We&apos;ll review your request and contact you to confirm the
                  inspection type, property details, timing, fees, and
                  availability.
                </p>

                <ol className="mt-8 space-y-5 border-y border-white/10 py-7">
                  {[
                    "We review the submitted property information.",
                    "We confirm the inspection scope, timing, access, and fees.",
                    "Your appointment is booked after confirmation.",
                  ].map((step, index) => (
                    <li key={step} className="flex items-start gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D4A63A] text-xs font-bold text-[#102A43]">
                        {index + 1}
                      </span>

                      <span className="leading-7 text-slate-200">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>

                {/* Contact options */}
                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-[#D4A63A]"
                    />

                    <span className="leading-7 text-slate-200">
                      Ottawa and the National Capital Region
                    </span>
                  </div>

                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="group flex items-start gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A63A]"
                  >
                    <Mail
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-[#D4A63A]"
                    />

                    <span className="break-all leading-7 text-slate-200 transition-colors group-hover:text-white">
                      {siteConfig.contact.email}
                    </span>
                  </a>

                  {phone && (
                    <a
                      href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                      className="group flex items-start gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A63A]"
                    >
                      <Phone
                        aria-hidden="true"
                        className="mt-1 h-5 w-5 shrink-0 text-[#D4A63A]"
                      />

                      <span className="leading-7 text-slate-200 transition-colors group-hover:text-white">
                        {phone}
                      </span>
                    </a>
                  )}
                </div>
              </aside>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}