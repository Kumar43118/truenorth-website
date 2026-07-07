import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";

export default function InspectionCTA() {
  return (
    <section className="bg-white py-28">
      <Container>
        <div className="rounded-4xl bg-[#102A43] px-8 py-16 text-center text-white md:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2A]">
            Book an Inspection
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Ready to make a confident property decision?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Schedule a residential home inspection completed by a Licensed
            Professional Engineer.
          </p>

          <div className="mt-10">
            <Button className="rounded-full bg-linear-to-b from-[#D4A63A] to-[#B58420] px-8 py-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
              Book an Inspection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}