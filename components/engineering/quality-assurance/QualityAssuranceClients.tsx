import {
  Building2,
  BriefcaseBusiness,
  DraftingCompass,
  HardHat,
  Landmark,
  Users,
} from "lucide-react";

const clients = [
  {
    title: "Building Owners",
    description:
      "Independent technical observations help owners understand construction quality, document project progress, and reduce the risk of future building envelope issues.",
    icon: Building2,
  },
  {
    title: "Developers",
    description:
      "Quality assurance provides additional confidence that critical building envelope components are reviewed during construction and documented appropriately.",
    icon: Landmark,
  },
  {
    title: "Architects",
    description:
      "We work collaboratively with architects by providing independent observations, identifying installation concerns, and supporting the design intent throughout construction.",
    icon: DraftingCompass,
  },
  {
    title: "Contractors",
    description:
      "Clear documentation and timely communication help contractors address observed concerns efficiently while minimizing disruption to the construction schedule.",
    icon: HardHat,
  },
  {
    title: "Condominium Corporations",
    description:
      "Independent construction documentation provides valuable records that can support future maintenance planning and warranty discussions.",
    icon: Users,
  },
  {
    title: "Project Managers",
    description:
      "Objective reporting and practical recommendations support informed project decisions and facilitate communication among the entire project team.",
    icon: BriefcaseBusiness,
  },
];

export default function QualityAssuranceClients() {
  return (
    <section className="bg-[#F8FAFC] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8891E]">
            Who We Work With
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#102A43] sm:text-4xl">
            Supporting every member of the project team.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Building envelope quality assurance is most effective when it
            supports collaboration between owners, consultants, designers,
            contractors, and project managers. Our role is to provide objective
            technical guidance that helps projects move forward with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => {
            const Icon = client.icon;

            return (
              <article
                key={client.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#102A43] text-[#D4A63A]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#102A43]">
                  {client.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {client.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
