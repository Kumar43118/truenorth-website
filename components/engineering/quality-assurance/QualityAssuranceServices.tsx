import {
  FileSearch,
  ClipboardCheck,
  Layers3,
  CheckCircle2,
  FileText,
} from "lucide-react";

const services = [
  {
    title: "Design and Detail Reviews",
    description:
      "Independent review of building envelope drawings, specifications, details, and material interfaces to identify constructability concerns and improve long-term performance before construction begins.",
    icon: FileSearch,
  },
  {
    title: "Construction Observations",
    description:
      "Scheduled site observations during construction to review the installation of building envelope components and document visible conditions at key project milestones.",
    icon: ClipboardCheck,
  },
  {
    title: "Installation and Interface Reviews",
    description:
      "Evaluation of critical transitions, flashings, waterproofing, air barriers, vapour barriers, windows, cladding, roofing, and related interfaces where building envelope performance depends on proper coordination.",
    icon: Layers3,
  },
  {
    title: "Deficiency Documentation",
    description:
      "Clear photographic documentation of observed deficiencies, incomplete work, and installation concerns, together with practical recommendations for further review or corrective action.",
    icon: CheckCircle2,
  },
  {
    title: "Technical Reporting",
    description:
      "Professional reports summarizing construction observations, documented findings, and engineering recommendations to support informed project decisions.",
    icon: FileText,
  },
];

export default function QualityAssuranceServices() {
  return (
    <section
      id="quality-assurance-services"
      className="bg-[#F8FAFC] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8891E]">
            Quality Assurance Services
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#102A43] sm:text-4xl">
            Practical technical support throughout construction.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our services can be tailored to individual project phases or
            integrated into a comprehensive building envelope quality assurance
            program from design review through project completion.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#102A43] text-[#D4A63A]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#102A43]">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}