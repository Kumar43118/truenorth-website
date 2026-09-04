import {
  Building2,
  CalendarRange,
  CircleAlert,
  KeyRound,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const situations = [
  {
    icon: KeyRound,
    title: "Before Property Acquisition",
    description:
      "A condition assessment can help purchasers and investors understand visible building envelope concerns, potential repair needs, and areas that may require further investigation before an acquisition.",
  },
  {
    icon: CircleAlert,
    title: "When Building Concerns Are Developing",
    description:
      "Recurring deterioration, water entry, condensation, sealant failure, aging exterior components, or other reported concerns may indicate the need for a broader review of the building envelope.",
  },
  {
    icon: CalendarRange,
    title: "During Maintenance and Capital Planning",
    description:
      "A structured assessment can help organize observed conditions and establish relative priorities before developing maintenance programs, repair projects, capital budgets, or longer-term renewal plans.",
  },
  {
    icon: Building2,
    title: "Before Repair or Rehabilitation Work",
    description:
      "Understanding existing conditions before repair or rehabilitation work can help clarify project objectives, identify information gaps, and determine where focused investigation or repair design may be required.",
  },
];

export default function WhenToEngageAssessment() {
  return (
    <section
      aria-labelledby="when-to-engage-assessment-heading"
      className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <SectionHeader
  eyebrow="When to Engage Velora"
  title="A condition assessment is most valuable before important property decisions are made."
  description="The right time for an assessment depends on the property, known concerns, ownership objectives, and the maintenance, repair, or investment decisions that need to be supported."
/>
        </Reveal>

        <div className="mx-auto mt-14 max-w-5xl lg:mt-16">
          {situations.map((situation, index) => {
            const Icon = situation.icon;

            return (
              <Reveal
                key={situation.title}
                delay={index * 0.07}
                y={18}
                amount={0.12}
              >
                <article className="group grid gap-5 border-b border-slate-200 py-8 first:border-t md:grid-cols-[72px_0.75fr_1.25fr] md:items-center md:gap-8 lg:py-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102A43] text-[#D4A63A] transition duration-300 group-hover:bg-[#D4A63A] group-hover:text-[#102A43]">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-[#102A43] sm:text-2xl">
                    {situation.title}
                  </h3>

                  <p className="leading-8 text-slate-600">
                    {situation.description}
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