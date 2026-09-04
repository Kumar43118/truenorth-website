import {
  Camera,
  ClipboardList,
  FileText,
  MessageSquareText,
  SearchCheck,
} from "lucide-react";

const deliverables = [
  {
    title: "Construction Observation Reports",
    description:
      "Concise reports documenting the date, location, scope, and visible conditions observed during each scheduled site visit.",
    icon: FileText,
  },
  {
    title: "Photographic Documentation",
    description:
      "Organized photographs identifying reviewed assemblies, installation conditions, observed deficiencies, and relevant project locations.",
    icon: Camera,
  },
  {
    title: "Deficiency Summaries",
    description:
      "Clear summaries of observed incomplete work, installation concerns, and visible deviations requiring review by the project team.",
    icon: ClipboardList,
  },
  {
    title: "Technical Recommendations",
    description:
      "Practical recommendations for corrective action, further investigation, coordination, or follow-up based on the conditions observed.",
    icon: MessageSquareText,
  },
  {
    title: "Follow-Up Observations",
    description:
      "Where included in the agreed scope, additional observations may be completed to document corrective work or outstanding conditions.",
    icon: SearchCheck,
  },
];

export default function QualityAssuranceDeliverables() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8891E]">
              Project Deliverables
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#102A43] sm:text-4xl">
              Clear documentation that supports timely project decisions.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Deliverables are tailored to the project scope and are designed to
              communicate observed conditions clearly to owners, consultants,
              contractors, and other members of the project team.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {deliverables.map((deliverable) => {
              const Icon = deliverable.icon;

              return (
                <article
                  key={deliverable.title}
                  className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#102A43] text-[#D4A63A]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-[#102A43]">
                    {deliverable.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {deliverable.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <p className="mt-10 max-w-4xl text-base leading-7 text-slate-600">
          Reports reflect visible conditions observed at the time of each site
          visit and are not a certification of the contractor&apos;s work,
          confirmation of full compliance, or a substitute for the
          contractor&apos;s quality-control responsibilities.
        </p>
      </div>
    </section>
  );
}