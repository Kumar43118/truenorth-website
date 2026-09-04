import {
  ClipboardList,
  FileSearch,
  SearchCheck,
  ScrollText,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Background Review",
    description:
      "Available drawings, reports, maintenance records, known concerns, and other relevant documentation are reviewed to understand the building, establish context, and confirm the assessment objectives.",
  },
  {
    number: "02",
    icon: SearchCheck,
    title: "Site Assessment",
    description:
      "Visible and accessible building envelope systems and related components included in the agreed scope are systematically reviewed and documented through site observations and photographs.",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Condition Evaluation",
    description:
      "Observed conditions are evaluated in the context of apparent deterioration, maintenance requirements, building performance, available information, and the objectives of the assessment.",
  },
  {
    number: "04",
    icon: ScrollText,
    title: "Reporting and Recommendations",
    description:
      "Assessment findings are documented with photographs, technical findings, relative priorities, and practical recommendations for maintenance, repair, monitoring, or further investigation.",
  },
];

export default function ConditionAssessmentProcess() {
  return (
    <section
      aria-labelledby="condition-assessment-process-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <SectionHeader
  eyebrow="Assessment Process"
  title="A structured process from background review to practical recommendations."
  description="The assessment process is tailored to the property and agreed scope while maintaining a systematic approach to document review, site observations, condition evaluation, and reporting."
/>
        </Reveal>

        <div className="mx-auto mt-14 max-w-5xl lg:mt-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <Reveal
                key={step.number}
                delay={index * 0.08}
                y={20}
                amount={0.12}
              >
                <article className="relative grid gap-6 md:grid-cols-[96px_1fr] md:gap-10">
                  <div className="relative flex md:justify-center">
                    {!isLast && (
                      <div
                        aria-hidden="true"
                        className="absolute left-7 top-14 hidden h-[calc(100%+2rem)] w-px bg-[#D4A63A]/35 md:block"
                      />
                    )}

                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102A43] text-[#D4A63A] shadow-sm">
                      <Icon aria-hidden="true" className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="border-b border-slate-200 pb-10 md:pb-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B88A2A]">
                      Step {step.number}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.015em] text-[#102A43] sm:text-3xl">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal y={18} amount={0.15}>
          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-slate-500">
  Where observed conditions require focused investigation, exploratory
  openings, specialist review, or detailed repair design, appropriate
  follow-up services may be recommended or scoped separately.
</p>
        </Reveal>
      </Container>
    </section>
  );
}