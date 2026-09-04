const steps = [
  {
    number: "01",
    title: "Review Project Information",
    description:
      "We review the project drawings, specifications, and relevant building envelope details to understand the design intent, identify critical interfaces, and establish observation priorities.",
  },
  {
    number: "02",
    title: "Plan Observation Milestones",
    description:
      "Construction observations are coordinated around key installation stages when important building envelope components remain visible and can be effectively reviewed.",
  },
  {
    number: "03",
    title: "Perform Construction Observations",
    description:
      "Scheduled site visits focus on visible installation quality, material interfaces, workmanship, and conditions that may affect the long-term performance of the building envelope.",
  },
  {
    number: "04",
    title: "Document Findings",
    description:
      "Observed conditions are documented with photographs, technical comments, and practical recommendations that can be shared with the project team for review and resolution.",
  },
  {
    number: "05",
    title: "Support Project Completion",
    description:
      "Where included within the project scope, follow-up observations may be completed to review corrective work and assist with project closeout documentation.",
  },
];

export default function ConstructionObservationProcess() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8891E]">
            Our Process
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#102A43] sm:text-4xl">
            A structured approach to construction observations.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Every project is different, but our quality assurance process follows
            a consistent framework that supports clear communication,
            documentation, and practical engineering advice throughout
            construction.
          </p>
        </div>

        <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid gap-4 py-8 sm:grid-cols-[80px_260px_1fr] sm:items-start"
            >
              <span className="text-sm font-semibold tracking-[0.15em] text-[#B8891E]">
                {step.number}
              </span>

              <h3 className="text-xl font-semibold text-[#102A43]">
                {step.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-4xl text-base leading-7 text-slate-600">
          Construction observations are performed at scheduled milestones and are
          intended to document visible conditions at the time of each visit.
          They are not continuous site inspections or supervision of the
          contractor&apos;s work.
        </p>
      </div>
    </section>
  );
}