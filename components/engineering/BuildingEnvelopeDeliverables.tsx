import {
  ClipboardCheck,
  FileText,
  Ruler,
  ScrollText,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const deliverables = [
  {
    icon: FileText,
    title: "Assessment Reports",
    description:
      "Clear documentation of observed conditions, relevant photographs, technical findings, limitations, and practical recommendations.",
  },
  {
    icon: ScrollText,
    title: "Technical Memoranda",
    description:
      "Focused written guidance addressing a defined concern, project decision, repair option, or coordination need.",
  },
  {
    icon: Ruler,
    title: "Repair Details and Specifications",
    description:
      "Project-specific repair concepts, technical details, and written requirements where repair design is included in the agreed scope.",
  },
  {
    icon: ClipboardCheck,
    title: "Construction Review Documentation",
    description:
      "Site observations, photographs, deficiency notes, and construction-phase documentation prepared during repair or rehabilitation work.",
  },
];

export default function BuildingEnvelopeDeliverables() {
  return (
    <section
      aria-labelledby="building-envelope-deliverables-heading"
      className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
<SectionHeader
  eyebrow="Deliverables"
  title="Clear documentation tailored to the assignment."
  description="Deliverables are defined by the agreed scope and may include a focused technical memorandum, detailed assessment report, repair design package, or construction-phase field documentation."
/>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
          {deliverables.map((deliverable, index) => {
            const Icon = deliverable.icon;

            return (
              <Reveal
                key={deliverable.title}
                delay={index * 0.08}
                y={22}
                amount={0.12}
                className="h-full"
              >
                <article className="group h-full rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D4A63A]/50 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)] sm:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102A43] text-[#D4A63A]">
                    <Icon aria-hidden="true" className="h-7 w-7" />
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.015em] text-[#102A43]">
                    {deliverable.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {deliverable.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal y={18} amount={0.15}>
          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-slate-500">
            The specific deliverable, level of detail, and use of engineering
            drawings or specifications are confirmed in the proposal before
            work begins.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}