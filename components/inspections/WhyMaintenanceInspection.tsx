import {
  CalendarCheck,
  SearchCheck,
  Wrench,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const reasons = [
  {
    icon: SearchCheck,
    title: "Identify Developing Concerns",
    description:
      "Review visible and readily accessible components for signs of deterioration, moisture, damage, or other conditions that may deserve attention or further evaluation.",
  },
  {
    icon: Wrench,
    title: "Prioritize Maintenance",
    description:
      "Use the inspection findings to organize repairs, seasonal upkeep, and future maintenance based on observed conditions and relative priority.",
  },
  {
    icon: CalendarCheck,
    title: "Plan for Long-Term Ownership",
    description:
      "Build a clearer understanding of the home's visible condition and use that information to support budgeting, maintenance planning, and longer-term property decisions.",
  },
];

export default function WhyMaintenanceInspection() {
  return (
    <section
      aria-labelledby="why-maintenance-inspection-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <SectionHeader
            eyebrow="Why It Matters"
            title="Proactive maintenance begins with understanding the home."
            description="A periodic inspection can help homeowners identify visible concerns, organize maintenance priorities, and make more informed decisions about repairs and long-term property care."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-16 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <Reveal
                key={reason.title}
                delay={index * 0.08}
                y={20}
                amount={0.14}
                className="h-full"
              >
                <article className="group h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D4A63A]/40 hover:shadow-xl sm:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102A43] text-[#D4A63A]">
                    <Icon aria-hidden="true" className="h-7 w-7" />
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.015em] text-[#102A43]">
                    {reason.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {reason.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}