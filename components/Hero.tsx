import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

const trustItems = [
  "Licensed Professional Engineer",
  "Building Science Expertise",
  "Practical Recommendations",
];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[850px] overflow-hidden">
      <Image
        src="/images/hero-home.jpg"
        alt="Modern residential home exterior"
        fill
        priority
        className="object-cover object-right"
      />

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-linear-to-r from-[#102A43]/95 via-[#102A43]/70 to-[#102A43]/15" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-8 pt-20 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#D8B25C]">
            Ottawa&apos;s Building Science Company
          </p>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            Helping Homeowners Make Confident Property Decisions.
          </h1>

          <div className="mt-7 h-1 w-20 rounded-full bg-[#B88A2A]" />

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            Professional home inspections performed by a Licensed Professional Engineer, 
            delivering clear, objective advice backed by building science expertise.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button className="rounded-full bg-[#B88A2A] px-8 py-7 text-base font-semibold text-white hover:bg-[#a07824]">
              Book Inspection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              className="rounded-full border-white/80 bg-transparent px-8 py-7 text-base font-semibold text-white hover:bg-white hover:text-[#102A43]"
            >
              Explore Services
            </Button>
          </div>

          <div className="mt-12 grid gap-4 text-white sm:grid-cols-3">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#D8B25C]" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}