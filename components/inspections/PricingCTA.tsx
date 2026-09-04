import Link from "next/link";
import {
  Calendar,
  FileText,
  Mail,
  ShieldCheck,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";

type PricingCTAVariant =
  | "buyer"
  | "pre-listing"
  | "new-construction"
  | "maintenance";

type PricingCTAProps = {
  variant?: PricingCTAVariant;
};

const ctaContent = {
  buyer: {
    headingId: "buyer-booking-heading",
    title: "Request your Buyer Home Inspection.",
    description:
      "Share the property details, purchase timeline, and preferred inspection date. We’ll review your request and contact you to confirm the scope, availability, and pricing.",
    buttonLabel: "Request Buyer Inspection",
  },
  "pre-listing": {
    headingId: "pre-listing-booking-heading",
    title: "Request your Pre-Listing Inspection.",
    description:
      "Share the property details, anticipated listing timeline, and preferred inspection date. We’ll review your request and contact you to confirm the scope, availability, and pricing.",
    buttonLabel: "Request Pre-Listing Inspection",
  },
  "new-construction": {
    headingId: "new-construction-booking-heading",
    title: "Request your New Construction Inspection.",
    description:
      "Share the property details, occupancy status, relevant warranty milestone, and preferred inspection date. We’ll review your request and confirm the appropriate scope, availability, and pricing.",
    buttonLabel: "Request New Home Inspection",
  },
  maintenance: {
    headingId: "maintenance-booking-heading",
    title: "Request your Annual Maintenance Inspection.",
    description:
      "Tell us about the property, its age, known concerns, and preferred inspection date. We’ll review your request and confirm the scope, availability, and pricing.",
    buttonLabel: "Request Maintenance Inspection",
  },
} satisfies Record<
  PricingCTAVariant,
  {
    headingId: string;
    title: string;
    description: string;
    buttonLabel: string;
  }
>;

const benefits = [
  {
    icon: Calendar,
    title: "Confirmed Scope & Scheduling",
    description:
      "Property details and service requirements are reviewed before the inspection scope and appointment are confirmed.",
  },
  {
    icon: FileText,
    title: "Digital Inspection Report",
    description:
      "Receive documented observations, photographs, identified concerns, and practical recommendations following the inspection.",
  },
  {
    icon: ShieldCheck,
    title: "Independent Perspective",
    description:
      "Findings are based on visible conditions and practical priorities, with further evaluation recommended where appropriate.",
  },
];

export default function PricingCTA({
  variant = "buyer",
}: PricingCTAProps) {
  const content = ctaContent[variant];

  return (
    <section
      aria-labelledby={content.headingId}
      className="bg-[#102A43] py-20 text-white sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4A63A] sm:text-sm">
              Ready to Get Started?
            </p>

            <h2
              id={content.headingId}
              className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl"
            >
              {content.title}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {content.description}
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/book-inspection"
                className="group inline-flex min-h-14 items-center justify-center rounded-full bg-[#D4A63A] px-8 font-semibold text-[#102A43] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0B552] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43]"
              >
                <Calendar
                  aria-hidden="true"
                  className="mr-2 h-5 w-5"
                />

                {content.buttonLabel}
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/35 px-8 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#102A43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43]"
              >
                <Mail
                  aria-hidden="true"
                  className="mr-2 h-5 w-5"
                />

                Ask a Question
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3 lg:mt-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <Reveal
                key={benefit.title}
                delay={index * 0.08}
                y={18}
                amount={0.12}
                className="h-full"
              >
                <article className="h-full bg-[#102A43] p-7 text-left transition duration-300 hover:bg-white/[0.05] sm:p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#D4A63A]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    {benefit.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}