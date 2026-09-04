import {
  Camera,
  ClipboardCheck,
  FileText,
  ListChecks,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";

const deliverables = [
  {
    number: "01",
    icon: FileText,
    title: "Condition Assessment Report",
    description:
      "A written report documenting the reviewed building envelope systems and components, observed conditions, technical findings, assessment limitations, and recommendations relevant to the agreed scope.",
  },
  {
    number: "02",
    icon: Camera,
    title: "Photographic Documentation",
    description:
      "Relevant photographs document representative conditions, visible deterioration, maintenance concerns, and other observations discussed in the assessment.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Key Findings Summary",
    description:
      "Key findings are summarized to help clients identify significant concerns, recurring conditions, and items that may require monitoring, further investigation, or action.",
  },
  {
    number: "04",
    icon: ListChecks,
    title: "Prioritized Recommendations",
    description:
      "Practical recommendations may address maintenance, repair, monitoring, further investigation, specialist review, or longer-term capital planning based on the observed conditions.",
  },
];

export default function AssessmentDeliverables() {
  return (
    <section
      aria-labelledby="assessment-deliverables-heading"
      className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                Assessment Deliverables
              </p>

              <h2
  id="assessment-deliverables-heading"
  className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.025em] text-[#102A43] sm:text-5xl"
>
  Clear documentation to support building planning and informed decisions.
</h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-slate-600">
  The assessment deliverable is developed around the agreed scope,
  property type, and client objectives. Reporting is intended to
  clearly communicate observed conditions, relative priorities, and
  practical recommendations for next steps.
</p>
          </div>
        </Reveal>

        <div className="mt-14 border-y border-slate-200 lg:mt-16">
          {deliverables.map((deliverable, index) => {
            const Icon = deliverable.icon;

            return (
              <Reveal
                key={deliverable.number}
                delay={index * 0.06}
                y={18}
                amount={0.12}
              >
                <article className="group grid gap-5 border-b border-slate-200 py-8 last:border-b-0 md:grid-cols-[80px_72px_0.8fr_1.2fr] md:items-center md:gap-6 lg:py-10">
                  <span className="text-sm font-semibold tracking-[0.2em] text-[#B88A2A]">
                    {deliverable.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102A43] text-[#D4A63A] transition duration-300 group-hover:bg-[#D4A63A] group-hover:text-[#102A43]">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-[#102A43] sm:text-2xl">
                    {deliverable.title}
                  </h3>

                  <p className="leading-7 text-slate-600">
                    {deliverable.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal y={18} amount={0.15}>
          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-slate-500">
  The level of detail, components reviewed, recommendation format, and
  any inclusion of preliminary budget or capital-planning information
  are confirmed in the proposal before the assessment begins.
</p>
        </Reveal>
      </Container>
    </section>
  );
}