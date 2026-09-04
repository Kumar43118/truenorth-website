"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const faqs = [
  {
    question:
      "What is included in a building envelope consulting assignment?",
    answer:
      "The scope depends on the reported concern, available information, project stage, and the decision the client needs to make. An assignment may include document review, visual assessment of accessible exterior and interior conditions, photographic documentation, evaluation of relevant building interfaces, and recommendations for further investigation, monitoring, repair, or rehabilitation.",
  },
  {
    question: "Can you investigate water leaks and moisture concerns?",
    answer:
      "Yes. Velora provides focused engineering review of reported water entry and moisture-related concerns. The investigation may consider visible symptoms, exterior conditions, windows, roofing, flashings, sealants, drainage paths, and other relevant building interfaces.",
  },
  {
    question:
      "Can the source of a leak always be identified during one site visit?",
    answer:
      "Not always. Water can travel through concealed assemblies and may enter the building at a location different from where interior symptoms appear. Additional investigation, targeted diagnostic work, exploratory openings, monitoring, or specialist services may be recommended when the source cannot be reasonably established through the initial review.",
  },
  {
    question: "Do you prepare repair drawings and specifications?",
    answer:
      "Where included in the agreed scope, Velora can prepare repair concepts, technical details, drawings, and written specifications appropriate to the project. The required level of documentation depends on the repair complexity, procurement approach, and intended use.",
  },
  {
    question:
      "Can you review construction during building envelope repairs?",
    answer:
      "Yes. Construction-phase services may include periodic construction observations, photographic documentation, review of selected completed work, deficiency notes, and technical coordination during repair or rehabilitation projects. The frequency, extent, and limitations of the review are defined in the proposal.",
  },
  {
    question: "Do you perform repair or construction work?",
    answer:
      "No. Velora provides independent engineering consulting and does not perform repair or construction work. Where repairs are recommended, we can assist with repair planning, technical documentation, contractor coordination, and construction review services within the agreed scope.",
  },
];

export default function BuildingEnvelopeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="building-envelope-faq-heading"
      className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <SectionHeader
            eyebrow="Frequently Asked Questions"
            title="Common questions about building envelope consulting."
            description="The appropriate engineering scope depends on the building, reported concern, available information, and the technical question that needs to be addressed."
          />
        </Reveal>

        <Reveal y={22} amount={0.15}>
          <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `building-envelope-faq-panel-${index}`;
              const buttonId = `building-envelope-faq-button-${index}`;

              return (
                <div
                  key={faq.question}
                  className="border-b border-slate-200 last:border-none"
                >
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left text-lg font-semibold text-[#102A43] transition-colors hover:text-[#B88A2A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D4A63A] sm:px-8"
                  >
                    <span>{faq.question}</span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#D4A63A] text-[#102A43]"
                          : "bg-[#F8FAFC] text-[#102A43]"
                      }`}
                    >
                      <ChevronDown
                        aria-hidden="true"
                        className="h-4 w-4"
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="px-6 pb-6 sm:px-8 sm:pb-8"
                    >
                      <p className="max-w-3xl leading-8 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}