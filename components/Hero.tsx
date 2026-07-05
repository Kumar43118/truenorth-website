import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

const trustItems = [
  "Licensed Professional Engineer",
  "Building Science Expertise",
  "Ottawa & Surrounding Areas",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-linear-to-b from-[#F8FAFC] to-white" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#B88A2A]">
            Ottawa Home Inspections
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-[#102A43] md:text-7xl">
            Professional Home Inspections
            <span className="block text-slate-700">
              Backed by Building Science Expertise
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            Every inspection is personally conducted by a Licensed Professional
            Engineer with building science experience, helping you make
            confident property decisions through clear, objective assessments.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button className="rounded-full bg-[#B88A2A] px-7 py-6 text-base font-semibold text-white hover:bg-[#a07824]">
              Book an Inspection
              <ArrowRight className="ml-2" size={18} />
            </Button>

            <Button
              variant="outline"
              className="rounded-full border-slate-300 px-7 py-6 text-base font-semibold text-[#102A43] hover:border-[#102A43]"
            >
              Explore Services
            </Button>
          </div>

          <div className="mt-10 grid gap-3 text-sm font-medium text-slate-700 sm:grid-cols-3">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#B88A2A]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-4xl bg-[#F8FAFC] p-4 shadow-sm ring-1 ring-slate-200">
          <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-3xl bg-[#102A43]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_45%)]" />
            <div className="relative max-w-sm px-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B88A2A]">
                TrueNorth
              </p>
              <p className="mt-4 text-3xl font-bold leading-tight text-white">
                Engineering Confidence for Homeowners
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-200">
                Placeholder for a premium architectural home image.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}