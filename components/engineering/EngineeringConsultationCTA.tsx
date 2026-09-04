import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";

type EngineeringConsultationCTAProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export default function EngineeringConsultationCTA({
  eyebrow = "Start a Conversation",
  title,
  description,
  primaryLabel = "Request a Consultation",
  primaryHref = "/contact",
}: EngineeringConsultationCTAProps) {
  return (
    <section
      aria-labelledby="engineering-consultation-cta-heading"
      className="bg-[#102A43] py-20 text-white sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4A63A] sm:text-sm">
              {eyebrow}
            </p>

            <h2
              id="engineering-consultation-cta-heading"
              className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl"
            >
              {title}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {description}
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={primaryHref}
                className="group inline-flex min-h-14 items-center justify-center rounded-full bg-[#D4A63A] px-8 font-semibold text-[#102A43] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0B552] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43]"
              >
                {primaryLabel}

                <ArrowUpRight
                  aria-hidden="true"
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/engineering-services#services"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/35 px-8 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#102A43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43]"
              >
                <Mail aria-hidden="true" className="mr-2 h-5 w-5" />
                Explore Consulting Services
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}