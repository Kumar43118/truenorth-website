"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const faqs = [
  {
    question: "What is a building condition assessment?",
    answer:
      "A building condition assessment is a structured review of visible and accessible exterior enclosure systems and related components included in the agreed scope. The assessment documents observed conditions, identifies relevant concerns, and provides recommendations to support maintenance, repair, rehabilitation, or property-planning decisions.",
  },
  {
    question: "What types of properties can be assessed?",
    answer:
      "Velora’s building condition assessment services may support multi-residential, condominium, commercial, institutional, and other existing properties. The appropriate scope is developed based on the building type, client objectives, available access, known concerns, and existing documentation.",
  },
  {
    question: "Does the assessment include cost estimates?",
    answer:
      "Preliminary budget or capital-planning information is included only where specifically identified in the agreed scope. A focused condition assessment may document observed conditions and priorities without developing detailed repair budgets, contractor pricing, or probable construction costs.",
  },
  {
    question: "Will concealed conditions be identified?",
    answer:
      "Building condition assessments are generally based on visible and accessible conditions. Concealed deterioration or deficiencies may not be identifiable through visual review alone. Where observations indicate the need for further investigation, exploratory openings, specialist review, or other focused diagnostic work may be recommended.",
  },
  {
    question:
      "Is a building condition assessment the same as a home inspection?",
    answer:
      "No. A home inspection is typically a broad visual review of a residential property for a homeowner or purchaser. A building condition assessment is an engineering consulting assignment developed around defined exterior enclosure systems, client objectives, known concerns, and an agreed reporting scope.",
  },
  {
    question: "Can the assessment be used to plan future repairs?",
    answer:
      "Yes. Assessment findings can help identify observed concerns, establish relative priorities, and inform maintenance programs, further investigation, repair projects, or rehabilitation planning. Detailed repair design and broader capital planning may be provided under a separate or expanded scope where appropriate.",
  },
  {
    question: "Does the assessment cover structural, mechanical, or electrical systems?",
    answer:
      "Not unless those services are specifically included in the agreed scope and completed by an appropriately qualified professional. Velora’s standard condition assessment service is focused on the building envelope. Conditions outside that scope may be noted where relevant, and specialist review may be recommended.",
  },
];

export default function AssessmentFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="assessment-faq-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
         <SectionHeader
  eyebrow="Frequently Asked Questions"
  title="Common questions about building envelope condition assessments."
  description="Assessment scope, components reviewed, reporting detail, and recommendations are defined around the property and the decisions the client needs to support."
/>
        </Reveal>

        <Reveal y={22} amount={0.15}>
          <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-[#F8FAFC] shadow-sm">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `assessment-faq-panel-${index}`;
              const buttonId = `assessment-faq-button-${index}`;

              return (
                <div
                  key={faq.question}
                  className="border-b border-slate-200 last:border-none"
                >
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left text-lg font-semibold text-[#102A43] transition-colors hover:text-[#B88A2A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D4A63A] sm:px-8"
                  >
                    <span>{faq.question}</span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#D4A63A] text-[#102A43]"
                          : "bg-white text-[#102A43]"
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