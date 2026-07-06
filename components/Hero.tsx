import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const trustItems = [
  "Licensed Professional Engineer",
  "Independent Advice",
  "Evidence-Based Assessments",
];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[820px] overflow-hidden">
      <Image
        src="/images/hero-home.jpg"
        alt="Modern residential home exterior"
        fill
        priority
        className="object-cover object-right"
      />

      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-linear-to-r from-[#102A43]/95 via-[#102A43]/70 to-[#102A43]/10" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-8 pt-24 lg:px-12">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#D8B25C]">
            Ottawa&apos;s Building Science Company
          </p>

          <h1 className="text-5xl font-bold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl">
  Helping Homeowners
  <span className="block">Make Confident Property</span>
  <span className="block">Decisions.</span>
</h1>

          <div className="mt-7 h-1 w-20 rounded-full bg-[#B88A2A]" />

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
            Professional home inspections performed by a Licensed Professional
            Engineer—providing independent, evidence-based guidance so you can
            make confident decisions about your property.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button className="rounded-full bg-linear-to-b from-[#D4A63A] to-[#B58420] px-8 py-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
              Book an Inspection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              className="rounded-full border-white/80 bg-white/5 px-8 py-7 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-[#102A43]"
            >
              View Services
            </Button>
          </div>

          <div className="mt-12 grid gap-4 text-white sm:grid-cols-3">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#D8B25C]" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center text-white/70 md:flex">
        <span className="mb-2 text-xs uppercase tracking-[0.25em]">
          Scroll
        </span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </div>
    </section>
  );
}