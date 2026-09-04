import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  ClipboardCheck,
  Droplets,
  HardHat,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";

const highlights = [
  {
    icon: Building2,
    title: "Whole-Building Perspective",
    description:
      "The home is reviewed as a collection of interconnected systems, including the exterior, roofing, windows, structure, drainage, interiors, and mechanical components.",
  },
  {
    icon: Droplets,
    title: "Moisture & Envelope Awareness",
    description:
      "Building science experience helps identify visible signs of water entry, condensation, drainage concerns, deterioration, and other conditions that may affect durability.",
  },
  {
    icon: HardHat,
    title: "Construction Experience",
    description:
      "Practical construction experience provides context for how building assemblies are installed, maintained, repaired, and where problems commonly develop.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear Priorities",
    description:
      "Observed conditions are organized into understandable findings and practical priorities so you can focus on what deserves attention first.",
  },
];

export default function EngineerSection() {
  return (
    <section
      aria-labelledby="engineering-expertise-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24 lg:px-12">
        <Reveal y={30} amount={0.2}>
          <div className="relative min-h-[520px] overflow-hidden rounded-3xl bg-slate-100 lg:min-h-[680px]">
            <Image
              src="/images/engineering/building-envelope.jpg"
              alt="Building exterior illustrating building envelope and construction systems"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#102A43]/70 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4A63A]">
                Building Science Experience
              </p>

              <p className="mt-3 max-w-md text-lg font-medium leading-7">
                Practical inspection insight informed by engineering,
                construction, and building-envelope experience.
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal y={24} amount={0.25}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
              The Velora Difference
            </p>

            <h2
              id="engineering-expertise-heading"
              className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-5xl"
            >
              A home inspection informed by how buildings actually perform.
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
              A home is more than a collection of individual components.
              Roofing, walls, windows, drainage, structure, ventilation, and
              interior conditions can interact in ways that are not always
              obvious from a simple checklist.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Velora brings experience in engineering, building science, and
              construction to the inspection process, helping clients better
              understand visible conditions, potential concerns, and practical
              next steps.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.08}
                  y={20}
                  amount={0.15}
                  className="h-full"
                >
                  <article className="group h-full rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-[#D4A63A]/50 hover:bg-white hover:shadow-[0_18px_45px_-28px_rgba(15,23,42,0.35)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102A43] text-[#D4A63A]">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-[#102A43]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.18} y={16} amount={0.15}>
            <Link
              href="/home-inspections"
              className="group mt-10 inline-flex items-center gap-2 font-semibold text-[#102A43] transition-colors hover:text-[#B88A2A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A63A] focus-visible:ring-offset-4"
            >
              Explore Home Inspections

              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}