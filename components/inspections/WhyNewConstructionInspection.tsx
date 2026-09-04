import {
  Camera,
  ClipboardCheck,
  MessageSquareText,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const reasons = [
  {
    icon: ClipboardCheck,
    title: "Identify Visible Deficiencies",
    description:
      "Review visible and readily accessible building components for deficiencies, incomplete work, and construction concerns within the agreed inspection scope.",
  },
  {
    icon: Camera,
    title: "Document Observed Conditions",
    description:
      "Create a clear photographic record of relevant observations to help organize concerns and document conditions present at the time of inspection.",
  },
  {
    icon: MessageSquareText,
    title: "Prepare for Builder Discussions",
    description:
      "Use clearly documented findings when discussing concerns with the builder and determining whether additional follow-up or evaluation may be appropriate.",
  },
];

export default function WhyNewConstructionInspection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal y={24} amount={0.2}>
          <SectionHeader
            eyebrow="Why It Matters"
            title="A new home can still have deficiencies worth documenting."
            description="An independent inspection provides another opportunity to review visible and readily accessible conditions, document relevant concerns, and better understand items that may require follow-up with the builder."
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