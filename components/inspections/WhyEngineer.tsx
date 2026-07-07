import { Award, Microscope, ShieldCheck } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const features = [
  {
    icon: Award,
    title: "Professional Engineering",
    description:
      "Every inspection is completed by a Licensed Professional Engineer with expertise in building science, structural systems, and residential construction.",
  },
  {
    icon: Microscope,
    title: "Evidence-Based Assessments",
    description:
      "Recommendations are based on engineering principles, field observations, and recognized industry standards—not assumptions.",
  },
  {
    icon: ShieldCheck,
    title: "Independent Advice",
    description:
      "We do not perform repair work or accept referral commissions. Our only priority is providing objective technical guidance.",
  },
];

export default function WhyEngineer() {
  return (
    <section className="bg-white py-28">
      <Container>
        <SectionHeader
          eyebrow="Why Choose TrueNorth"
          title="Engineering expertise that goes beyond a standard home inspection."
          description="Our inspections combine practical field experience with engineering judgment, helping homeowners understand not only what issues exist—but why they matter."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#102A43]">
                  <Icon className="h-8 w-8 text-[#D4A63A]" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[#102A43]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}