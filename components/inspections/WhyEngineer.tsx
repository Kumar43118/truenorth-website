import {
  Award,
  Microscope,
  ShieldCheck,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const features = [
  {
    icon: Award,
    title: "Engineering-Informed Perspective",
    description:
      "Our inspection approach is informed by professional engineering experience in building science, structural systems, and existing building conditions.",
  },
  {
    icon: Microscope,
    title: "Condition-Focused Evaluation",
    description:
      "Visible conditions are considered in the context of how building systems interact, helping identify concerns that may warrant maintenance, repair, or further investigation.",
  },
  {
    icon: ShieldCheck,
    title: "Independent Advice",
    description:
      "Velora does not perform repair work or accept contractor referral commissions. Recommendations are focused on observed conditions and the needs of the client.",
  },
];

export default function WhyEngineer() {
  return (
    <section
      aria-labelledby="why-velora-inspections-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <SectionHeader
            eyebrow="Why Choose Velora"
            title="A building-focused perspective on home inspections."
            description="Our inspections combine practical field experience with building science and engineering knowledge to help clients better understand observed conditions and their potential significance."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal
                key={feature.title}
                delay={index * 0.08}
                y={22}
                amount={0.15}
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
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {feature.description}
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