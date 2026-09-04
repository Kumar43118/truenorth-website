import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What does a Velora home inspection include?",
    answer:
      "A home inspection is a visual assessment of accessible building systems and components at the time of the inspection. Depending on the property and service selected, the inspection may include the exterior, roofing, structure, interiors, plumbing, electrical, heating and cooling systems, insulation, ventilation, and other accessible components.",
  },
  {
    question: "Who performs the home inspection?",
    answer:
      "Velora home inspections are led by a licensed Professional Engineer with experience in construction, building science, and building-envelope assessment. The home inspection remains a visual, non-invasive inspection and is not a comprehensive engineering investigation unless a separate engineering scope is specifically agreed upon.",
  },
  {
    question: "Should I attend the inspection?",
    answer:
      "When practical, we encourage clients to attend at least the final portion of the inspection. This provides an opportunity to review significant observations, ask questions, and better understand the property and any items that may deserve further attention.",
  },
  {
    question: "Will I receive a written inspection report?",
    answer:
      "Yes. Home inspection services include a written report documenting relevant observations, photographs, identified concerns, and practical recommendations. The report is intended to help you understand the visible condition of the property and prioritize appropriate next steps.",
  },
  {
    question: "Do you inspect new construction and Tarion homes?",
    answer:
      "Yes. Velora provides inspections for new homes and Tarion warranty milestones. The inspection can help identify and document visible deficiencies or concerns that may be useful when preparing warranty submissions or discussing items with the builder.",
  },
  {
    question: "Are there limitations to a home inspection?",
    answer:
      "Yes. A home inspection is visual and non-invasive. Concealed, inaccessible, unsafe, obstructed, or otherwise unobservable conditions cannot be evaluated. Specialized testing, destructive investigation, code compliance reviews, environmental assessments, and detailed engineering analysis are outside a standard home inspection unless separately included in the agreed scope.",
  },
];

export default function FAQ() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
            Frequently Asked Questions
          </p>

          <h2
            id="faq-heading"
            className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-5xl"
          >
            What to know before your home inspection.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Understanding the inspection process can help you get more value
            from your appointment and make better use of the findings when
            planning your next decision.
          </p>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left transition-colors hover:text-[#B88A2A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A63A] focus-visible:ring-offset-4">
                <span className="text-lg font-semibold text-[#102A43]">
                  {faq.question}
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F8FAFC] text-[#102A43] transition duration-300 group-open:rotate-180 group-open:bg-[#D4A63A]">
                  <ChevronDown aria-hidden="true" className="h-4 w-4" />
                </span>
              </summary>

              <div className="max-w-3xl pb-6 pr-12">
                <p className="leading-7 text-slate-600">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}