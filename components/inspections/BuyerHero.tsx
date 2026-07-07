import Image from "next/image";
import { ArrowRight, CircleCheck } from "lucide-react";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

export default function BuyerHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-28">
      <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(#102A43_1px,transparent_1px),linear-gradient(90deg,#102A43_1px,transparent_1px)] [background-size:56px_56px]" />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B88A2A]">
              Buyer Home Inspection
            </p>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-[#102A43] md:text-5xl xl:text-6xl">
              Buy Your Next Home With Confidence.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
              Before one of the biggest investments of your life, receive an
              engineering-led inspection that helps you understand the home&apos;s
              condition, potential risks, and future maintenance needs.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button className="rounded-full bg-[#D4A63A] px-8 py-7 text-base font-semibold text-white hover:bg-[#B88A2A]">
                Book Buyer Inspection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                className="rounded-full px-8 py-7"
              >
                Download Sample Report
              </Button>
            </div>

            <div className="mt-12 space-y-4">
              {[
                "Major systems evaluated",
                "Engineering insight beyond a checklist",
                "Digital report with photographs",
                "Maintenance recommendations",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CircleCheck className="h-5 w-5 text-[#B88A2A]" />
                  <span className="text-lg text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_30px_80px_rgba(16,42,67,0.18)]">
              <div className="relative h-130 overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/buyer-inspection.jpg"
                  alt="Buyer home inspection"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}