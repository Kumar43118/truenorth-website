import {
  CalendarDays,
  CircleCheckBig,
  ClipboardCheck,
  FileText,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";

const steps = [
  {
    icon: CalendarDays,
    number: "01",
    title: "Book",
    description:
      "Choose the inspection service you need and provide the property details so we can confirm the scope, timing, and appointment.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Inspect",
    description:
      "We complete a systematic visual inspection of accessible building systems and components, with attention to condition, performance, and visible concerns.",
  },
  {
    icon: CircleCheckBig,
    number: "03",
    title: "Review",
    description:
      "Key observations and priorities are discussed in clear, practical terms so you understand what was found and what may deserve further attention.",
  },
  {
    icon: FileText,
    number: "04",
    title: "Report",
    description:
      "You receive a written inspection report with photographs, documented observations, and practical recommendations to help guide your next decision.",
  },
];

export default function HowWeWork() {
  return (
    <section
      aria-labelledby="how-we-work-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
            Your Inspection Process
          </p>

          <h2
            id="how-we-work-heading"
            className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-5xl"
          >
            Clear guidance from booking to report.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            The inspection process is designed to be straightforward,
            informative, and practical—so you leave with a better understanding
            of the property and its visible condition.
          </p>
        </Reveal>

        <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 xl:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-[#D4A63A]/35 xl:block"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal
                key={step.number}
                delay={index * 0.1}
                y={22}
                amount={0.15}
                className="h-full"
              >
                <article className="group relative h-full rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D4A63A]/50 hover:bg-white hover:shadow-[0_18px_45px_-28px_rgba(15,23,42,0.35)] sm:p-8">
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#102A43] text-[#D4A63A]">
                      <Icon aria-hidden="true" className="h-7 w-7" />
                    </div>

                    <span className="text-3xl font-semibold text-[#D4A63A]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-semibold text-[#102A43]">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} y={18} amount={0.15}>
          <p className="mx-auto mt-12 max-w-3xl text-center text-base leading-7 text-slate-500">
            Inspection scope varies by service and property conditions. Areas
            or components that are inaccessible, concealed, unsafe, or outside
            the agreed scope are not inspected.
          </p>
        </Reveal>
      </div>
    </section>
  );
}