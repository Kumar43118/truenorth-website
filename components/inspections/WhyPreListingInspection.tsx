import {
  ClipboardCheck,
  Hammer,
  MessageSquareText,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const reasons = [
  {
    icon: ClipboardCheck,
    title: "Identify Concerns Early",
    description:
      "Review visible conditions before the property is listed so potential concerns can be better understood before buyer inspections and sale discussions begin.",
  },
  {
    icon: Hammer,
    title: "Plan Repairs Strategically",
    description:
      "Use the inspection findings to prioritize maintenance and decide which repairs, if any, may be appropriate before bringing the property to market.",
  },
  {
    icon: MessageSquareText,
    title: "Prepare for Buyer Questions",
    description:
      "Better understand the condition of the home so you are more prepared to discuss visible deficiencies, maintenance items, and other concerns that buyers may raise.",
  },
];

export default function WhyPreListingInspection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal y={24} amount={0.2}>
          <SectionHeader
            eyebrow="Why It Matters"
            title="Prepare the property before the sale process begins."
            description="A pre-listing inspection gives sellers an opportunity to understand visible conditions, consider maintenance priorities, and make informed decisions before the home reaches the market."
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