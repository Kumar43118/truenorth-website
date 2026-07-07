import { ArrowRight, Calendar, Phone } from "lucide-react";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

export default function PricingCTA() {
  return (
    <section className="bg-[#102A43] py-28 text-white">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4A63A]">
            Ready to Book?
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight">
            Schedule your Buyer Home Inspection today.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Every inspection is performed by a Licensed Professional Engineer,
            providing clear, objective insight before you make one of life's
            biggest investments.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <Button className="rounded-full bg-[#D4A63A] px-10 py-7 text-lg font-semibold text-white hover:bg-[#B88A2A]">
              <Calendar className="mr-2 h-5 w-5" />
              Book Online
            </Button>

            <Button
              variant="outline"
              className="rounded-full border-white/30 bg-transparent px-10 py-7 text-lg font-semibold text-white hover:bg-white hover:text-[#102A43]"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>

          <div className="mt-16 grid gap-8 border-t border-white/10 pt-12 md:grid-cols-3">
            <div>
              <h3 className="text-2xl font-bold text-[#D4A63A]">
                Flexible Scheduling
              </h3>

              <p className="mt-3 text-slate-300">
                Evening and weekend appointments available.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#D4A63A]">
                Digital Report
              </h3>

              <p className="mt-3 text-slate-300">
                Delivered promptly with photos and recommendations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#D4A63A]">
                P.Eng. Inspection
              </h3>

              <p className="mt-3 text-slate-300">
                Every inspection completed by a Licensed Professional Engineer.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}