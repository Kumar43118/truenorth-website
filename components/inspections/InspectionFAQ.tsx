"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

type InspectionFAQVariant =
  | "buyer"
  | "pre-listing"
  | "new-construction"
  | "maintenance";

type InspectionFAQProps = {
  variant?: InspectionFAQVariant;
};

const sharedFaqs = [
  {
    question: "How long does a home inspection take?",
    answer:
      "Most residential inspections take approximately 2 to 4 hours, depending on the size, age, condition, accessibility, and complexity of the property.",
  },
  {
    question: "Can I attend the inspection?",
    answer:
      "Yes. Clients are welcome to attend. When practical, we encourage you to attend at least the final portion of the inspection so significant observations can be reviewed and questions can be discussed directly.",
  },
  {
    question: "When will I receive my report?",
    answer:
      "A digital inspection report is provided after the inspection. It includes relevant observations, photographs, identified concerns, maintenance considerations, and practical recommendations. Report delivery timing can be confirmed when the inspection is scheduled.",
  },
  {
    question: "Do you perform repairs?",
    answer:
      "No. Velora provides independent inspection and consulting services and does not perform repair work or accept contractor referral commissions.",
  },
  {
    question: "Is a home inspection the same as an engineering assessment?",
    answer:
      "No. A standard home inspection is a visual, non-invasive review of visible and readily accessible systems and components. A separately scoped engineering assessment may be recommended when an observed condition requires additional investigation, analysis, or design.",
  },
  {
    question: "Are there limitations to a home inspection?",
    answer:
      "Yes. A home inspection is limited to conditions that are visible and readily accessible at the time of inspection. Concealed, obstructed, unsafe, inaccessible, or otherwise unobservable conditions cannot be evaluated. Specialized testing, destructive investigation, environmental assessments, code compliance reviews, and detailed engineering analysis are outside the standard inspection scope unless separately agreed upon.",
  },
];

const variantFaqs = {
  buyer: [
    {
      question:
        "Can the inspection be completed during a conditional offer period?",
      answer:
        "Yes, subject to scheduling and property access. Share your purchase timeline and any inspection-condition deadline when submitting the request so availability can be reviewed promptly.",
    },
    {
      question: "What happens if a significant concern is observed?",
      answer:
        "The report will document the visible condition and recommend an appropriate next step. Depending on the concern, further review by a qualified specialist or a separately scoped engineering assessment may be recommended.",
    },
  ],

  "pre-listing": [
    {
      question: "Should I complete repairs before listing the home?",
      answer:
        "That decision depends on the condition, cost, timing, and advice of your real estate and legal professionals. The inspection can help you better understand visible concerns and prioritize possible maintenance or repair work before listing.",
    },
    {
      question:
        "Can I share the inspection report with prospective buyers?",
      answer:
        "You may choose to share the report, but disclosure strategy should be discussed with your real estate and legal advisors. The report reflects visible conditions observed at the property on the inspection date.",
    },
  ],

  "new-construction": [
    {
      question:
        "When should a new construction inspection be scheduled?",
      answer:
        "The appropriate timing depends on the home's occupancy status and the applicable warranty milestone. Share the relevant date or deadline when requesting the inspection so the scope and timing can be reviewed.",
    },
    {
      question:
        "Can the report be used when communicating with the builder?",
      answer:
        "The report can help document visible deficiencies and construction concerns for discussion with the builder. Warranty coverage, submission requirements, deadlines, and builder obligations should be confirmed through the applicable warranty program and, where appropriate, your legal advisors.",
    },
  ],

  maintenance: [
    {
      question:
        "How often should I schedule a maintenance inspection?",
      answer:
        "The appropriate interval depends on the age and condition of the home, previous repairs, known concerns, and maintenance history. An annual or periodic review can help support long-term maintenance planning.",
    },
    {
      question:
        "Is this service useful if I am not planning to sell?",
      answer:
        "Yes. The purpose is to help identify visible maintenance concerns, developing issues, and priorities that may support repair planning and the long-term care of the home.",
    },
  ],
} satisfies Record<
  InspectionFAQVariant,
  {
    question: string;
    answer: string;
  }[]
>;

const variantContent = {
  buyer: {
    headingId: "buyer-inspection-faq-heading",
    title: "Helpful information before your buyer inspection.",
    description:
      "Answers to common questions about scheduling, attending, inspection limitations, reporting, and using the findings during a home purchase.",
  },
  "pre-listing": {
    headingId: "pre-listing-inspection-faq-heading",
    title: "Helpful information before a pre-listing inspection.",
    description:
      "Answers to common questions about preparing the property, reviewing findings, inspection limitations, and planning before the home reaches the market.",
  },
  "new-construction": {
    headingId: "new-construction-inspection-faq-heading",
    title: "Helpful information before a new construction inspection.",
    description:
      "Answers to common questions about inspection timing, visible deficiencies, documentation, limitations, and warranty-related planning.",
  },
  maintenance: {
    headingId: "maintenance-inspection-faq-heading",
    title: "Helpful information before a maintenance inspection.",
    description:
      "Answers to common questions about periodic reviews, inspection limitations, maintenance planning, and caring for the home over time.",
  },
} satisfies Record<
  InspectionFAQVariant,
  {
    headingId: string;
    title: string;
    description: string;
  }
>;

export default function InspectionFAQ({
  variant = "buyer",
}: InspectionFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const content = variantContent[variant];
  const faqs = [...variantFaqs[variant], ...sharedFaqs];

  return (
    <section
      aria-labelledby={content.headingId}
      className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <SectionHeader
            eyebrow="Frequently Asked Questions"
            title={content.title}
            description={content.description}
          />
        </Reveal>

        <Reveal y={22} amount={0.15}>
          <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `${variant}-inspection-faq-panel-${index}`;
              const buttonId = `${variant}-inspection-faq-button-${index}`;

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