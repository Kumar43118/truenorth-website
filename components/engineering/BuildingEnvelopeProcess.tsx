import {
  ClipboardList,
  FileSearch,
  FileText,
  SearchCheck,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Inquiry and Scope Review",
description:
"We begin by understanding the reported concern, available information, project objectives, and the decisions you need to make."  },
  {
    icon: FileSearch,
    number: "02",
    title: "Document and Site Review",
description:
"We review available drawings, reports, photographs, repair history, and accessible site conditions within the agreed scope."  },
  {
    icon: SearchCheck,
    number: "03",
    title: "Technical Evaluation",
description:
"We evaluate observed conditions alongside building interfaces, moisture paths, material performance, and other factors that may be contributing to the reported concern."  },
  {
    icon: FileText,
    number: "04",
    title: "Recommendations and Deliverables",
    description:
"We provide clear findings, practical recommendations, priorities, and suggested next steps appropriate to the scope of the assignment."  },
];

export default function BuildingEnvelopeProcess() {
  return (
    <section
      aria-labelledby="building-envelope-process-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <SectionHeader
            eyebrow="Our Process"
title="A structured process for understanding building envelope concerns."
description="Every assignment is tailored to the building, available information, project stage, and the technical decisions that need to be made."          />
        </Reveal>

        <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 xl:grid-cols-4 xl:gap-8">
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-[#D4A63A]/30 xl:block"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal
                key={step.number}
                delay={index * 0.08}
                y={22}
                amount={0.12}
                className="h-full"
              >
                <article className="group relative h-full rounded-3xl border border-slate-200 bg-[#F8FAFC] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D4A63A]/40 hover:bg-white hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)] sm:p-8">
                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102A43] text-[#D4A63A]">
                      <Icon aria-hidden="true" className="h-7 w-7" />
                    </div>

                    <span className="text-3xl font-semibold text-[#D4A63A]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.015em] text-[#102A43]">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
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