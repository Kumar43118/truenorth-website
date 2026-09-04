const faqs = [
  {
    question: "What is building envelope quality assurance?",
    answer:
      "Building envelope quality assurance is an independent engineering service that helps improve the quality of building envelope construction through design reviews, scheduled construction observations, documentation of observed conditions, and practical technical recommendations.",
  },
  {
    question: "How is quality assurance different from contractor supervision?",
    answer:
      "Our role is to provide independent engineering observations and technical guidance. We do not supervise the contractor, direct construction activities, or assume responsibility for the contractor's means, methods, sequencing, or quality-control program.",
  },
  {
    question: "How often are construction observations performed?",
    answer:
      "Observation frequency depends on the project scope, construction schedule, and critical building envelope milestones. Site visits are typically scheduled when key assemblies remain visible for meaningful review.",
  },
  {
    question: "Do construction observations guarantee the quality of the work?",
    answer:
      "No. Construction observations document visible conditions at the time of each scheduled visit. They do not certify the contractor's work, verify every installation, or guarantee future building performance.",
  },
  {
    question: "Can quality assurance help reduce future building envelope problems?",
    answer:
      "Yes. Identifying installation concerns, coordination issues, or detailing deficiencies during construction allows project teams to address them before they become concealed, helping reduce the risk of future repairs and moisture-related problems.",
  },
  {
    question: "What types of projects benefit from quality assurance?",
    answer:
      "Building envelope quality assurance is valuable for new construction, building additions, recladding projects, window replacement programs, roofing projects, waterproofing work, and major building envelope rehabilitation projects.",
  },
];

export default function QualityAssuranceFAQ() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8891E]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#102A43] sm:text-4xl">
            Common questions about building envelope quality assurance.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            These answers explain what quality assurance includes, how
            construction observations are performed, and what clients can expect
            throughout the project.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="border-b border-slate-200 pb-8 last:border-none"
            >
              <h3 className="text-xl font-semibold text-[#102A43]">
                {faq.question}
              </h3>

              <p className="mt-3 leading-8 text-slate-600">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}