import {
  AlertTriangle,
  PiggyBank,
  ShieldCheck,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const reasons = [
  {
    icon: AlertTriangle,
    title: "Identify Visible Concerns",
    description:
      "A professional inspection can help identify visible deficiencies, maintenance concerns, and conditions that may deserve further investigation before you move forward.",
  },
  {
    icon: PiggyBank,
    title: "Support Informed Decisions",
    description:
      "Documented findings can give you useful information when discussing repairs, pricing, or other purchase considerations with your real estate and legal advisors.",
  },
  {
    icon: ShieldCheck,
    title: "Plan for Ownership",
    description:
      "Better understand the visible condition of the home, important maintenance priorities, and potential repair considerations you may need to plan for after possession.",
  },
];

export default function WhyBuyerInspection() {
  return (
    <section
      aria-labelledby="why-buyer-inspection-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <SectionHeader
            eyebrow="Why It Matters"
            title="Understand the home before you move forward."
            description="A buyer inspection provides an independent visual review of accessible systems and components, helping you better understand the property's condition and make a more informed purchase decision."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-16 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <Reveal
                key={reason.title}
                delay={index * 0.08}
                y={22}
                amount={0.15}
                className="h-full"
              >
                <article className="group h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D4A63A]/40 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)] sm:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102A43] text-[#D4A63A]">
                    <Icon aria-hidden="true" className="h-7 w-7" />
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.015em] text-[#102A43]">
                    {reason.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
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