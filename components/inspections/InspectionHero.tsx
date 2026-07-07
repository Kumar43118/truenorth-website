import Image from "next/image";
import { ArrowRight, BadgeCheck, Building2, ShieldCheck } from "lucide-react";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

const trustItems = [
  {
    icon: BadgeCheck,
    value: "P.Eng.",
    label: "Licensed in Ontario",
  },
  {
    icon: Building2,
    value: "50+",
    label: "Projects Delivered",
  },
  {
    icon: ShieldCheck,
    value: "Independent",
    label: "Technical Advice",
  },
];

export default function InspectionHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-28">
      <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(#102A43_1px,transparent_1px),linear-gradient(90deg,#102A43_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4A63A]/8 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B88A2A]">
              Residential Home Inspections
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[#102A43] md:text-5xl xl:text-6xl">
              Professional Home Inspections Performed by a Licensed Professional
              Engineer
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              Whether you&apos;re buying, selling, or protecting your home
              investment, TrueNorth delivers engineering-led inspections that
              provide objective insight and practical recommendations.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button className="rounded-full bg-linear-to-b from-[#D4A63A] to-[#B58420] px-8 py-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                Book an Inspection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                className="rounded-full border-[#102A43]/20 bg-white px-8 py-7 text-base font-semibold text-[#102A43] transition-all duration-300 hover:border-[#102A43] hover:bg-[#102A43] hover:text-white"
              >
                See Inspection Services
              </Button>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A63A]/40 hover:shadow-lg"
                  >
                    <Icon className="h-6 w-6 text-[#B88A2A]" />

                    <p className="mt-4 text-xl font-bold text-[#102A43]">
                      {item.value}
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[#B88A2A]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white p-3 shadow-[0_30px_80px_rgba(16,42,67,0.18)]">
              <div className="relative h-[520px] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/inspection-hero.jpg"
                  alt="Professional residential home inspection"
                  fill
                  priority
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