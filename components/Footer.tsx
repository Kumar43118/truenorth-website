import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/shared/Container";
import { siteConfig } from "@/lib/site";

const practiceAreas = [
  {
    name: "Home Inspections",
    href: "/home-inspections",
  },
  {
    name: "Engineering Consulting",
    href: "/engineering-services",
  },
];

const inspectionServices = [
  {
    name: "Buyer Inspection",
    href: "/home-inspections/buyer-inspection",
  },
  {
    name: "Pre-Listing Inspection",
    href: "/home-inspections/pre-listing-inspection",
  },
  {
    name: "New Construction / Tarion",
    href: "/home-inspections/new-construction-tarion",
  },
  {
    name: "Annual Home Maintenance",
    href: "/home-inspections/annual-home-maintenance",
  },
];

const consultingServices: { name: string; href: string }[] = [
  {
    name: "Building Envelope Consulting",
    href: "/engineering-services/building-envelope-consulting",
  },
  {
    name: "Building Condition Assessments",
    href: "/engineering-services/building-condition-assessment",
  },
  {
    name: "Building Envelope Quality Assurance",
    href: "/engineering-services/building-envelope-quality-assurance",
  },
];

const companyLinks = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Resources",
    href: "/resources",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const footerLinkClasses =
  "transition-colors hover:text-[#D4A63A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A63A] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0E2439]";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phone = siteConfig.contact.phone?.trim();

  return (
    <footer className="bg-[#0E2439] text-white">
      <Container>
        <div className="py-16 sm:py-20">
          <div className="grid gap-14 lg:grid-cols-[1.25fr_0.8fr_1fr_0.9fr]">
            {/* Company information */}
            <div>
              <Link
                href="/"
                aria-label={`${siteConfig.company.shortName} homepage`}
                className="inline-block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A63A] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0E2439]"
              >
                <Image
                  src="/logo/logo-gold.svg"
                  alt="Velora Engineering and Consulting"
                  width={320}
                  height={72}
                  className="h-[52px] w-auto"
                />
              </Link>

              <p className="mt-5 text-sm font-medium text-[#D4A63A]">
                Engineering expertise. Practical solutions. Trusted advice.
              </p>

              <p className="mt-6 max-w-md leading-7 text-slate-300">
                Velora provides P.Eng.-led home inspections and specialized
                building-envelope consulting for homeowners, property
                professionals, and project teams across Ottawa and the National
                Capital Region.
              </p>

              <div className="mt-8 border-t border-white/10 pt-7">
                <div className="space-y-3 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#D4A63A]"
                    />

                    <span>Licensed Professional Engineer in Ontario</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#D4A63A]"
                    />

                    <span>9+ years of industry experience</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#D4A63A]"
                    />

                    <span>Building science and envelope experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Practice areas and company links */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Services
              </h2>

              <ul className="mt-6 space-y-5">
                {practiceAreas.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`group inline-flex flex-wrap items-center gap-2 text-slate-300 ${footerLinkClasses}`}
                    >
                      <span>{item.name}</span>

                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 opacity-0 transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Company
              </h2>

              <ul className="mt-6 space-y-4">
                {companyLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`group inline-flex items-center gap-2 text-slate-300 ${footerLinkClasses}`}
                    >
                      {item.name}

                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 opacity-0 transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Home inspection links */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Home Inspections
              </h2>

              <ul className="mt-6 space-y-3">
                {inspectionServices.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className={`text-sm leading-6 text-slate-300 ${footerLinkClasses}`}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="/book-inspection"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#D4A63A] transition-colors hover:text-[#E0B552] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A63A] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0E2439]"
              >
                Book a Home Inspection

                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            {/* Consulting and contact */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Engineering Consulting
              </h2>

              <ul className="mt-6 space-y-3">
                {consultingServices.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className={`text-sm leading-6 text-slate-300 ${footerLinkClasses}`}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-white/10 pt-7">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  Contact
                </h2>

                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#D4A63A]"
                    />

                    <div>
                      <p className="text-sm font-medium text-white">
                        Service Area
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        {siteConfig.contact.address.city} and the National
                        Capital Region
                      </p>
                    </div>
                  </div>

                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className={`group flex items-start gap-3 rounded-sm ${footerLinkClasses}`}
                  >
                    <Mail
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#D4A63A]"
                    />

                    <div>
                      <p className="text-sm font-medium text-white">
                        Email
                      </p>

                      <p className="mt-1 break-all text-sm text-slate-300 transition-colors group-hover:text-[#D4A63A]">
                        {siteConfig.contact.email}
                      </p>
                    </div>
                  </a>

                  {phone && (
                    <a
                      href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                      className={`group flex items-start gap-3 rounded-sm ${footerLinkClasses}`}
                    >
                      <Phone
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#D4A63A]"
                      />

                      <div>
                        <p className="text-sm font-medium text-white">
                          Phone
                        </p>

                        <p className="mt-1 text-sm text-slate-300 transition-colors group-hover:text-[#D4A63A]">
                          {phone}
                        </p>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Legal information */}
          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="flex flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p>
                  © {currentYear} {siteConfig.company.legalName}. All rights
                  reserved.
                </p>

                <p className="mt-2 leading-6">
                  {siteConfig.company.operatingName} is an operating name of{" "}
                  {siteConfig.company.legalName}.
                </p>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3">
                <Link
                  href="/privacy"
                  className={footerLinkClasses}
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms"
                  className={footerLinkClasses}
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}