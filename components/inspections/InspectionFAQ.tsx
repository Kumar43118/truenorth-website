"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const faqs = [
  {
    question: "How long does a home inspection take?",
    answer:
      "Most residential inspections take approximately 2–4 hours depending on the size, age, and complexity of the property.",
  },
  {
    question: "Can I attend the inspection?",
    answer:
      "Absolutely. We encourage clients to attend so observations can be discussed during the inspection and questions can be answered on site.",
  },
  {
    question: "When will I receive my report?",
    answer:
      "You&apos;ll typically receive your digital inspection report shortly after the inspection. The report includes photographs, observations, maintenance recommendations, and clearly explained findings.",
  },
  {
    question: "Do you perform repairs?",
    answer:
      "No. TrueNorth provides independent engineering-led inspections only. We do not perform repairs or receive referral commissions.",
  },
];

export default function InspectionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F8FAFC] py-28">
      <Container>
        <SectionHeader
          eyebrow="Frequently Asked Questions"
          title="Everything you need to know before booking."
          description="Here are the answers to common questions about residential home inspections."
        />

        <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="border-b last:border-none">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left text-lg font-semibold text-[#102A43]"
                >
                  {faq.question}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <p
                    className="px-6 pb-6 text-base leading-8 text-slate-600"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}