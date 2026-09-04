import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";

export default function InspectionCTA() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal y={24} amount={0.2}>
          <div className="overflow-hidden rounded-4xl bg-[#102A43] px-7 py-14 text-center text-white sm:px-10 sm:py-16 md:px-16 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4A63A] sm:text-sm">
              Book an Inspection
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
              Ready to make a more informed property decision?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Tell us about the property, inspection type, and preferred
              timeline. We&apos;ll review your request and help confirm the
              appropriate next step.
            </p>

            <div className="mt-10">
              <Link
href="/book-inspection"
                className="group inline-flex min-h-14 items-center justify-center rounded-full bg-[#D4A63A] px-8 text-base font-semibold text-[#102A43] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0B552] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43]"
              >
                Book an Inspection

                <ArrowRight
                  aria-hidden="true"
                  className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}