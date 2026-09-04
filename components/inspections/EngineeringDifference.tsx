import { CheckCircle2 } from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const observedConditions = [
  "Visible deficiencies and signs of deterioration",
  "Condition of accessible building components",
  "Maintenance concerns and developing issues",
  "Conditions that may warrant further investigation",
];

const buildingPerspective = [
  "Considers how building systems interact",
  "Recognizes patterns associated with moisture and building performance",
  "Applies building science knowledge to observed conditions",
  "Provides practical recommendations and appropriate next steps",
];

export default function EngineeringDifference() {
  return (
    <section
      aria-labelledby="building-perspective-heading"
      className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <SectionHeader
            eyebrow="The Velora Perspective"
            title="Understanding the home as an interconnected building."
            description="A home is more than a collection of individual components. Roofing, exterior walls, windows, insulation, structure, and mechanical systems can influence one another. Our building-focused approach considers observed conditions within the broader context of the home."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          <Reveal
            y={22}
            amount={0.15}
            className="h-full"
          >
            <article className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B88A2A]">
                Inspection Observations
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.015em] text-[#102A43]">
                What we observe
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                The inspection documents visible and accessible conditions
                observed at the property at the time of the inspection.
              </p>

              <div className="mt-8 space-y-5">
                {observedConditions.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-slate-400"
                    />

                    <p className="leading-7 text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal
            delay={0.08}
            y={22}
            amount={0.15}
            className="h-full"
          >
            <article className="h-full rounded-3xl border border-[#D4A63A]/30 bg-[#102A43] p-7 text-white shadow-xl sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4A63A]">
                Building-Focused Perspective
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.015em]">
                How we consider the building
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Observed conditions are considered using building science
                knowledge and experience with existing building systems.
              </p>

              <div className="mt-8 space-y-5">
                {buildingPerspective.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-[#D4A63A]"
                    />

                    <p className="leading-7 text-slate-200">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal y={18} amount={0.15}>
          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-slate-500">
            A home inspection is a visual assessment of accessible conditions
            and is not a substitute for a detailed engineering investigation,
            specialist evaluation, or destructive testing where those services
            are required.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}