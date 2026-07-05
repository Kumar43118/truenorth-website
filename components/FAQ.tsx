const faqs = [
  {
    question: "Who performs the inspection?",
    answer:
      "Every inspection is personally conducted by a Licensed Professional Engineer (P.Eng.) with building science and field review experience.",
  },
  {
    question: "How long does a home inspection take?",
    answer:
      "Most inspections take approximately 2 to 4 hours depending on the size, age, and complexity of the property.",
  },
  {
    question: "Can I attend the inspection?",
    answer:
      "Yes. Clients are encouraged to attend so findings can be explained clearly on site.",
  },
  {
    question: "When will I receive the report?",
    answer:
      "A digital report is typically provided shortly after the inspection, with photos, observations, and practical recommendations.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#B88A2A]">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#102A43] md:text-5xl">
            Common questions before booking.
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-slate-200 bg-white p-7"
            >
              <h3 className="text-lg font-bold text-[#102A43]">
                {faq.question}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}