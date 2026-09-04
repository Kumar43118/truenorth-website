import {
  Droplets,
  Layers3,
  SearchCheck,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const reasons = [
  {
    icon: Droplets,
    title: "Control Water and Moisture",
    description:
      "Building envelope problems often begin with water entry, condensation, or poor drainage. Understanding the source and pathway is essential before repairs are planned.",
  },
  {
    icon: Layers3,
    title: "Understand System Interactions",
    description:
      "Exterior walls, windows, roofing, flashing, insulation, and air barriers must work together. A concern in one area may be caused by conditions elsewhere in the enclosure.",
  },
  {
    icon: SearchCheck,
    title: "Investigate Before Repairing",
    description:
      "Focused field review helps distinguish symptoms from likely causes so repair decisions are based on observed conditions rather than assumptions.",
  },
];

export default function WhyBuildingEnvelope() {
  return (
    <section
      aria-labelledby="why-building-envelope-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <SectionHeader
            eyebrow="Why It Matters"
            title="Building envelope concerns are rarely isolated."
            description="Water entry, deterioration, heat loss, condensation, and premature material failure can involve several interconnected systems. A focused engineering review helps clarify what is happening and what should happen next."
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
                <article className="group h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D4A63A]/40 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)] sm:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102A43] text-[#D4A63A]">
                    <Icon
                      aria-hidden="true"
                      className="h-7 w-7"
                    />
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