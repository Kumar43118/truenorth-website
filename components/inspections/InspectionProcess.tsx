import {
  CalendarDays,
  Search,
  FileCheck,
  House,
} from "lucide-react";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  {
    icon: CalendarDays,
    number: "01",
    title: "Book Your Inspection",
    description:
      "Choose a convenient date before your purchase closes. We'll confirm the inspection details and answer any initial questions.",
  },
  {
    icon: Search,
    number: "02",
    title: "Comprehensive Inspection",
    description:
      "We conduct a systematic engineering-led inspection of the home's visible systems and components.",
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Receive Your Report",
    description:
      "Receive a detailed digital report with photographs, findings, maintenance recommendations, and engineering observations.",
  },
  {
    icon: House,
    number: "04",
    title: "Move Forward Confidently",
    description:
      "Use the inspection findings to negotiate repairs, plan maintenance, or proceed with confidence in your purchase.",
  },
];

export default function InspectionProcess() {
  return (
    <section className="bg-[#F8FAFC] py-28">
      <Container>
        <SectionHeader
          eyebrow="Our Process"
          title="A simple, transparent inspection process."
          description="From booking to receiving your report, we make the inspection process straightforward and informative."
        />

        <div className="relative mt-20 grid gap-10 lg:grid-cols-4">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-10 hidden h-0.5 bg-[#D4A63A]/30 lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#102A43]">
                  <Icon className="h-8 w-8 text-[#D4A63A]" />
                </div>

                <p className="mt-6 text-sm font-semibold tracking-[0.25em] text-[#B88A2A]">
                  STEP {step.number}
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-[#102A43]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}