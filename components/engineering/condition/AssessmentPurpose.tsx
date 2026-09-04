import {
  Building2,
  ClipboardCheck,
  Landmark,
  SearchCheck,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const reasons = [
  {
    icon: SearchCheck,
    title: "Understand Existing Conditions",
    description:
      "A systematic review helps document visible deterioration, deferred maintenance, performance concerns, and other conditions that may affect the building or require further attention.",
  },
  {
    icon: ClipboardCheck,
    title: "Prioritize Repairs and Maintenance",
    description:
      "Observed concerns can be organized by relative urgency so owners can distinguish immediate needs from near-term repairs and longer-term capital items.",
  },
  {
    icon: Building2,
    title: "Support Property Decisions",
    description:
      "Condition information can support acquisition, ownership, maintenance, rehabilitation, budgeting, and other property-related decisions.",
  },
  {
    icon: Landmark,
    title: "Improve Capital Planning",
    description:
      "Clear documentation of existing conditions can help inform future repair programs, capital projects, budgeting priorities, and broader asset-management discussions.",
  },
];

export default function AssessmentPurpose() {
  return (
    <section
      aria-labelledby="assessment-purpose-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <SectionHeader
  eyebrow="Why It Matters"
  title="A building condition assessment provides a clearer basis for planning."
  description="The purpose is not only to identify visible deficiencies, but to help clients understand their significance, relative priority, and appropriate next steps."
/>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <Reveal
                key={reason.title}
                delay={index * 0.08}
                y={20}
                amount={0.12}
                className="h-full"
              >
                <article className="group h-full rounded-3xl border border-slate-200 bg-[#F8FAFC] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D4A63A]/40 hover:bg-white hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)] sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102A43] text-[#D4A63A]">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[#102A43]">
                    {reason.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
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